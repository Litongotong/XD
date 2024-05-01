<template>
  <ItemWrapper v-bind="props">
    <ButtonExtend
      :button-title="buttonLabel"
      :disabled="disabled"
      :button-height="buttonHeight"
      :button-width="buttonWidth"
      @on-click="handleClick"
    />
    <span class="label">{{ resultLabel }}</span>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { HTMLEvents } from '@/enums'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description ボタンの使用不可 */
    disabled?: boolean
    /** @description ボタンのラベル */
    buttonLabel?: string
    /** @description ボタンの幅 */
    buttonWidth?: string | number
    /** @description ボタンの高さ */
    buttonHeight?: string | number
    /** @description 結果ラベル */
    resultLabel?: string
  }
>()

const EVENT = {
  CLICK_BUTTON: 'click-button',
}

const emit = defineEmits<{
  (event: typeof EVENT.CLICK_BUTTON): void
}>()
function handleClick() {
  emit(HTMLEvents.CLICK)
}
</script>
<style scoped>
.label {
  margin: 0 0 0 var(--standard-gap);
}
</style>
