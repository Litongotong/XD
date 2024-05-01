<template>
  <ItemWrapper v-bind="props">
    <input
      class="base-time"
      type="time"
      v-model="timeValue"
      :min="minTime"
      :max="maxTime"
      :step="stepValue"
      :style="computedInputStyle"
      :disabled="disabled"
      @blur="handleBlur"
    />
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'
import { ensureUnit } from '@/utils'

import { HTMLEvents } from '@/enums'

import { useVModel } from '@/utils/hooks'
import { computed, type StyleValue } from 'vue'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 時間（hh:mm:ss） */
    modelValue?: string
    /** @description 秒数を表示するか */
    showSeconds?: boolean
    /** @description 時間部品本体の幅 */
    inputWidth?: number | string
    /** @description 編集不可にする */
    disabled?: boolean
  }
>()

const minTime = '00:00'
const maxTime = '23:59'

const timeValue = useVModel(props, 'modelValue')
const stepValue = props.showSeconds ? '1' : '60'

const computedInputStyle = computed<StyleValue>(() => ({
  minWidth: props.showSeconds ? '7rem' : '5.5rem',
  width: ensureUnit(props.inputWidth),
}))

const EVENT = {
  INPUT_BLUR: HTMLEvents.BLUR,
}
const emit = defineEmits<{
  (event: typeof EVENT.INPUT_BLUR, value: string): void
}>()
function handleBlur(event: Event) {
  const node = event.target as HTMLInputElement
  emit(EVENT.INPUT_BLUR, node.value)
}
</script>

<style scoped>
.base-time {
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: var(--font-size-10-5);
  border: var(--base-button-border);
  text-align: right;
}
</style>
