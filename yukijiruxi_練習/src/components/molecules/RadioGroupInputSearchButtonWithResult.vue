<template>
  <ItemWrapper class="radio-input-search-button" v-bind="props">
    <RadioButtonGroup
      v-model="picked"
      class="radio-button-group"
      :disabled="disabled"
      :isDisplayOuterBorder="isDisplayOuterBorder"
      :isInlineDisplay="true"
      :radios="radios"
      :fieldsetHeight="fieldsetHeight"
    />
    <InputSearchButtonWithResult
      v-model="inputedValue"
      :type="type"
      :inputWidth="inputWidth"
      :buttonLabel="buttonLabel"
      :buttonWidth="buttonWidth"
      :result="result"
      :disabled="disabled"
    />
  </ItemWrapper>
</template>

<script setup lang="ts">
import type { ItemWrapperProperty, Radio } from '@/types/components'

import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import RadioButtonGroup from '@/components/molecules/RadioButtonGroup.vue'
import InputSearchButtonWithResult from '@/components/molecules/InputSearchButtonWithResult.vue'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    disabled?: boolean
  } & /** ラジオボタングループ*/ {
    isDisplayOuterBorder?: boolean
    radios?: Radio.Item[]
    picked?: string
    fieldsetHeight?: string
  } & /** 入力欄 */ {
    type?: 'text' | 'number'
    inputValue?: string | number
    inputWidth?: string | number
  } /** 検索ボタン */ & {
    buttonLabel?: string
    buttonWidth?: string | number
  } /** 検索結果ラベル */ & {
    result?: string
  }
>()

const picked = useVModel(props, 'picked')
const inputedValue = useVModel(props, 'inputValue')
</script>

<style scoped>
.radio-input-search-button {
  gap: var(--standard-gap);
}
</style>
