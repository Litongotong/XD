<template>
  <ItemWrapper v-bind="props">
    <input
      class="base-input"
      type="text"
      v-model="inputedValue"
      :disabled="disabled"
      :style="customStyle"
      @input="handleInput"
      @blur="handleBlur"
    />
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from './ItemWrapper.vue'

import type { CSS } from '@/types'
import type { ItemWrapperProperty } from '@/types/components'
import type { StyleValue } from 'vue'

import { HTMLEvents } from '@/enums'
import { RegexpRules } from '@/utils/regexp-rules'
import { ensureUnit } from '@/utils'
import { computed } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      width?: string
      textAlign?: CSS.TextAlign
      disabled?: boolean
      modelValue?: string | number
      hasError?: boolean
      /** @description 新ルール用プロパティ　*/
      customRules?: RegExp
    }
  >(),

  {
    modelValue: '',
    hasError: false,
  },
)

const inputedValue = useVModel(props, 'modelValue')

const regexpRule = computed(() => props.customRules ?? RegexpRules.NUMBER_ONLY)

const customStyle = computed<StyleValue>(() => {
  return {
    width: props.width ? ensureUnit(props.width) : '100%',
    textAlign: props.textAlign ?? 'left',
    backgroundColor: props.hasError
      ? 'var(--color-error) '
      : 'var(--color-white)',
  }
})

const EVENT = {
  INPUT_CHANGE: HTMLEvents.CHANGE,
  INPUT_BLUR: HTMLEvents.BLUR,
}

const emit = defineEmits<{
  (event: typeof EVENT.INPUT_CHANGE, value: string): void
  (event: typeof EVENT.INPUT_BLUR, value: string): void
}>()

function handleInput(event: Event) {
  const node = event.target as HTMLInputElement
  const nodeValue = node.value
  let finalValue = nodeValue.replace(regexpRule.value, '')

  inputedValue.value = finalValue
  emit(EVENT.INPUT_CHANGE, finalValue)
}

function handleBlur(event: Event) {
  const node = event.target as HTMLInputElement
  const nodeValue = node.value
  let finalValue = nodeValue.replace(regexpRule.value, '')

  inputedValue.value = finalValue
  emit(EVENT.INPUT_BLUR, finalValue)
}
</script>

<style scoped>
.base-input {
  box-sizing: border-box;
  height: var(--standard-height);
  font: var(--font-family-default);
  font-size: var(--font-size-common);
  color: var(--color-font);
  border-color: var(--color-light-gray);
}
</style>
