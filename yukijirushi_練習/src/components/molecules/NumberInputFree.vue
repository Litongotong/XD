<template>
  <ItemWrapper v-bind="props">
    <div v-for="i in num" :key="i" :style="containerStyle">
      <BaseNumberInput
        :value="''"
        :width="computedWidth"
        @on-input="handleChildInputChange"
      />
      <span v-if="shouldShowDash(i)" :style="dashStyle">-</span>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseNumberInput from '../atoms/BaseNumberInput.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { computed } from 'vue'
import { ensureUnit } from '@/utils'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      num: number
      /** @description ダッシュを使用するかどうか */
      useDash?: boolean
      /** @description 入力フィールドの幅 */
      inputWidth?: string | number
      /** @description ダッシュの左マージン */
      dashMarginLeft?: string | number
    }
  >(),
  { num: 1, useDash: false },
)

const EVENT = {
  handleInput: 'handleInput',
}

const emit = defineEmits<{
  (event: typeof EVENT.handleInput, value: string): void
}>()

function handleChildInputChange(newValue: string) {
  emit(EVENT.handleInput, newValue)
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
}

// ダッシュのスタイルオブジェクトを定義
const dashStyle = {
  marginLeft: props.dashMarginLeft
    ? ensureUnit(props.dashMarginLeft)
    : 'var(--number-input-free-dash-left)',
}

// ダッシュを表示するかどうかを判定
const shouldShowDash = (i: number) => props.useDash && i !== props.num

// 入力フィールドの幅を計算
const computedWidth = computed<string | undefined>(() =>
  props.inputWidth ? ensureUnit(props.inputWidth) : '50px',
)
</script>
