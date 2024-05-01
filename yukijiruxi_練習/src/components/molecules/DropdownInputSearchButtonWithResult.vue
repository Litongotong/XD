<template>
  <ItemWrapper v-bind="props">
    <BaseDropdownVue
      v-model="selectedValue"
      :disabled="disabled"
      :dropdownWidth="dropdownWidth"
      :options="options"
    />

    <InputSearchButtonWithResult
      v-model="inputedValue"
      :type="type"
      :inputWidth="inputWidth"
      :buttonLabel="buttonLabel"
      :buttonWidth="buttonWidth"
      :result="result"
      :disabled="disabled"
      @on-click="handleSearch"
    />
  </ItemWrapper>
</template>

<script setup lang="ts">
import type { ItemWrapperProperty, Dropdown } from '@/types/components'

import BaseDropdownVue from '@/components/atoms/BaseDropdown.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'
import InputSearchButtonWithResult from './InputSearchButtonWithResult.vue'

import { useVModel } from '@/utils/hooks'
import { HTMLEvents } from '@/enums'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      disabled?: boolean
    } /** ドロップダウン */ & {
      dropdownWidth?: string | number
      options?: Dropdown.Option[]
      dropdownValue?: string | number
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
  >(),

  {
    buttonLabel: '検索',
    type: 'text',
  },
)

const emit = defineEmits<{
  (event: HTMLEvents.CLICK): void
}>()

const selectedValue = useVModel(props, 'dropdownValue')
const inputedValue = useVModel(props, 'inputValue')

function handleSearch() {
  emit(HTMLEvents.CLICK)
}
</script>
