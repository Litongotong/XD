<template>
  <div :style="computedGroupBoxStyle"></div>
</template>

<script setup lang="ts">
import type { ComponentCommonProperty } from '@/types/components'

import { ensureUnit, calculatePositionStyle } from '@/utils'
import { computed, type CSSProperties } from 'vue'

const props = defineProps<
  ComponentCommonProperty & {
    /** @description スタイル */
    borderStyle?: string
  }
>()

const computedGroupBoxStyle = computed<CSSProperties>(() => ({
  height: ensureUnit(props.height),
  width: ensureUnit(props.width),
  ...calculatePositionStyle(props.x, props.y),
  border: props.borderStyle ?? 'var(--group-box-border)',
}))
</script>
