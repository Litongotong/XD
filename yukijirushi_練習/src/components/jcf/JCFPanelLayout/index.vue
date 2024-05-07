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
import { computed } from 'vue'
import { type JCFPanelLayoutProps, JCFPanelLayoutName } from './types'
import { calculateCommonStyle } from '../utils/transform'
import { toDimension } from '../utils/common'
import { useAutoSize } from '@/components/jcf/JCFPanelLayout/useAutoSize';

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

const { elmRef } = useAutoSize()
</script>
