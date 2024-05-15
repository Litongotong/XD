<template>
  <div
    :style="style"
    :data-panel-layout="JCFPanelLayoutName"
    :data-element-height="style.height"
    :data-element-width="style.width"
    ref="elmRef"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { type JCFPanelLayoutProps, JCFPanelLayoutName } from './types'
import { calculateCommonStyle } from '../utils/transform'
import { toDimension } from '../utils/common'
import { useAutoSize } from '@/components/jcf/JCFPanelLayout/useAutoSize'
import { useView } from '@/routes/view/useView'
import { provider } from '@/lib/adapter/provider'
import { MsisDebug } from '@/utils/debug/log'

defineOptions({
  name: JCFPanelLayoutName,
})

const props = defineProps<JCFPanelLayoutProps>()

const style = computed(() => {
  const commonStyle = calculateCommonStyle({ props })

  // TODO: parse layout
  // props.layout

  delete commonStyle.fontFamily

  // parse size
  const sizeCss = toDimension(props.dimension)

  return { ...commonStyle, ...sizeCss }
})

// auto resize screen by frame size
const { elmRef } = useAutoSize()

// check frame is loaded
const slots = useSlots()
const view = useView()
const getScreenId = provider.inject.screen()
const getFrameId = provider.inject.frame()
const startItemsLoadListener = () => {
  const screenId = getScreenId()
  const frameId = getFrameId()
  // set loaded to false
  view.utils.setFrameStatus(screenId, frameId, false)

  const itemIds: string[] = []
  const handleSingle = (node: any) => {
    // get item id
    const props = node.props
    if (props?.id) {
      itemIds.push(props.id as string)
    }
    // get children
    const children = node?.children?.default?.()
    if (children) {
      children.forEach((child: any) => {
        handleSingle(child)
      })
    }
  }
  const children = slots.default?.() || []
  children.forEach((child) => {
    handleSingle(child)
  })
  MsisDebug.log(`JCFPanelLayout: items: ${itemIds}`)

  view.utils.setFrameStatus(screenId, frameId, true)
}
startItemsLoadListener()
</script>
