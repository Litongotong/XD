<template>
  <div
    :style="commonStyle"
    :data-item-id="id"
    :data-component-name="EComponentName.JCFLines"
  ></div>
</template>

<script setup lang="ts">
import type { JCFLinesProps } from './types'
import type { JCFLinesData } from '@/lib/jcf/gui/JCFLinesData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { calculateCommonStyle } from '../utils/transform'
import { installInstance } from '../utils/instance'
import { computed } from 'vue'
import { toPX } from '../utils/common'

defineOptions({
  name: EComponentName.JCFLines,
})

const props = defineProps<JCFLinesProps>()

// 部品データを用意する
const instance = installInstance<JCFLinesData>(EComponentName.JCFLines, props)

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })

  if (props.bounds) {
    const lineWidth = props.bounds[2]
    const lineHeight = props.bounds[3]
    const lineBorderColor = props.lineColor?._toRGBString() || '#000'
    style.border = `1px solid ${lineBorderColor}`
    style.width = toPX(lineWidth)
    style.height = toPX(lineHeight)
  }

  return style
})
</script>

<style scoped>
.center {
  display: flex;
  align-items: center;
}

.string {
  cursor: default;
}
</style>
