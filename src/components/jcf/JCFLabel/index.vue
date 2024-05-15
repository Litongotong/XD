<template>
  <div
    :data-item-id="id"
    :data-component-name="EComponentName.JCFLabel"
    :style="commonStyle"
    class="string"
  >
    <Text>{{ text }}</Text>
  </div>
</template>

<script setup lang="ts">
import type { JCFLabelProps } from './types'
import type { JCFLabelData } from '@/lib/jcf/gui/JCFLabelData'

import { computed } from 'vue'
import { getInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'
import { toAlignment, toInsets } from '../utils/common'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'

import Text from '@/components/jcf/utils/Text/index.vue'

defineOptions({
  name: EComponentName.JCFLabel,
})

const props = defineProps<JCFLabelProps>()

const id = props.id
const autoWrap = props.autoTurn

const ins = getInstance<JCFLabelData>(props)
const fallbackText = props.text || ''
const text = computed(() => {
  if (ins) {
    return ins.value.value || fallbackText
  }
  return fallbackText
})

// スタイルを計算する
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance: ins, props })

  // 文字選択不可にする
  style.userSelect = 'none'

  if (autoWrap) {
    style.flexWrap = 'wrap'
    style.whiteSpace = 'pre-wrap'
  }

  const alignmentProps = {
    // 水平位置
    alignmentHorizontal: props.alignmentHorizontal ?? EJFAlignment.LEFT,
    // 垂直位置
    alignmentVertical: props.alignmentVertical ?? EJFAlignment.CENTER,
  }

  // 水平位置、垂直位置計算
  const alignmentStyle = toAlignment(alignmentProps)

  const insetsStyle = toInsets(props.insets)

  return { ...alignmentStyle, ...style, ...insetsStyle }
})
</script>

<style scoped>
.string {
  cursor: default;
}
</style>
