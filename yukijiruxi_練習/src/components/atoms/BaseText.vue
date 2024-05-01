<template>
  <span class="base-text-wrapper" :style="computedWrapperStyle">
    <slot>{{ label }}</slot>
  </span>
</template>

<script lang="ts" setup>
import type { CSS } from '@/types'
import type { ComponentCommonProperty } from '@/types/components'

import { ensureUnit, calculatePositionStyle } from '@/utils'
import { computed, type CSSProperties } from 'vue'

const props = defineProps<
  ComponentCommonProperty & {
    label?: string
    /** @description 文字背景色 */
    labelBackground?: string
    /** @description 文字水平位置 */
    labelAlign?: CSS.TextAlign
  }
>()

const computedWrapperStyle = computed<CSSProperties>(() => ({
  height: ensureUnit(props.height),
  width: ensureUnit(props.width),
  // 位置スタイルを計算する
  ...calculatePositionStyle(props.x, props.y),
  backgroundColor: props.labelBackground,
  // 水平位置
  justifyContent: props.labelAlign,
}))
</script>

<style scoped>
.base-text-wrapper {
  align-items: center;
  display: inline-flex;
}
</style>
