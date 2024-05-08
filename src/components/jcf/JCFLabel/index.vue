<template>
  <div
    :data-item-id="id"
    :data-component-name="EComponentName.JCFLabel"
    :style="commonStyle"
    class="string"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import type { JCFLabelProps } from './types'
import type { JCFLabelData } from '@/lib/jcf/gui/JCFLabelData'

import { computed } from 'vue'
import { installInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'
import { toAlignment } from '../utils/common'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { EJFAlignment } from '@/lib/jcf/gui/JFAlignment'

defineOptions({
  name: EComponentName.JCFLabel,
})

const props = defineProps<JCFLabelProps>()

const id = props.id

const ins = installInstance<JCFLabelData>(EComponentName.JCFLabel, props)
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

  const alignmentProps = {
    // 水平位置
    alignmentHorizontal: props.alignmentHorizontal ?? EJFAlignment.LEFT,
    // 垂直位置
    alignmentVertical: props.alignmentVertical ?? EJFAlignment.CENTER,
  }

  // 水平位置、垂直位置計算
  const computedAlignment = toAlignment(alignmentProps)

  return { ...style, ...computedAlignment }
})
</script>

<style scoped>
.string {
  cursor: default;
}
</style>
