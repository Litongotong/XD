<template>
  <span class="base-label" :style="computedLabelWrapperStyle">
    <span class="text" :style="computedLabelStyle">{{ label }}</span>
    <span>{{ koron }}</span>
  </span>
</template>

<script setup lang="ts">
import type { ItemWrapperProperty } from '@/types/components'

import { computed, type StyleValue } from 'vue'
import { ensureUnit } from '@/utils'

const props = defineProps<ItemWrapperProperty>()

const koron = computed<string>(() => {
  let result = ''
  props.label && (result = '：')
  props.noKoron && (result = '')
  return result
})

//部品全体的スタイル
const computedLabelWrapperStyle = computed<StyleValue>(() => ({
  background: props.labelWrapperBackground,
  color: props.labelColor,
  width: ensureUnit(props.labelWidth),
}))

//コロン以外文字のスタイル
const computedLabelStyle = computed<StyleValue>(() => ({
  background: props.labelBackground,
  fontWeight: props.labelFontWeight,
  justifyContent: props.labelAlign,
}))
</script>

<style scoped>
.base-label {
  align-items: center;
  display: inline-flex;
  height: inherit;
  justify-content: space-between;
  margin: 0 var(--standard-gap) 0 0;
  vertical-align: middle;
}

.base-label .text {
  align-items: center;
  display: inline-flex;
  height: inherit;
  width: inherit;
}
</style>
