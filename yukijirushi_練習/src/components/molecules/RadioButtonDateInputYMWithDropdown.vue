<template>
  <ItemWrapper class="radio-button-date-input-drop-down" v-bind="props">
    <BaseRadioButton
      display="旬報"
      v-model="picked"
      :id="value"
      :value="value"
      :disabled="radioDisabled"
    />
    <DateInput type="month" />
    <BaseDropdown
      v-model="selectedValue"
      :options="options"
      :disabled="dropdownDisabled"
    />
  </ItemWrapper>
</template>

<script setup lang="ts">
import type { ItemWrapperProperty, Radio, Dropdown } from '@/types/components'

import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import BaseRadioButton from '@/components/atoms/BaseRadioButton.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import DateInput from '@/components/atoms/DateInput.vue'

import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty &
      Radio.Config & {
        /** @description ラジオボタン活性・非活性 */
        radioDisabled?: boolean
        /** @description ラジオボタン状態 */
        picked?: string
      } & {
        /** @description ドロップダウン選択値 */
        dropdownValue?: string | number
        /** @description ドロップダウン選択肢 */
        options?: Dropdown.Option[]
        /** @description ドロップダウン活性・非活性 */
        dropdownDisabled?: boolean
      }
  >(),

  {
    dropdownValue: '1',
  },
)

const picked = useVModel(props, 'picked')
const selectedValue = useVModel(props, 'dropdownValue')
</script>

<style scoped></style>
