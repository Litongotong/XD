<template>
  <ItemWrapper v-bind="props" class="time-input-container">
    <BaseTimeInput type="hour" width="30px" v-model="inputHourValue" />
    <BaseText :label="hyphenLineType" class="hyphen-label" />
    <BaseDropdown
      class="minute-dropdown"
      v-model="selectMinValue"
      :options="minuteOptions"
      :disabled="disabled"
      :dropdownWidth="selectMinWidth"
      :height="selectMinHeight"
    />
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
import BaseTimeInput from '@/components/atoms/BaseTimeInput.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'

import type { ItemWrapperProperty } from '@/types/components'
import type { Dropdown } from '@/types/components/dropdown'

import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description input属性 */
      inputHourWidth?: string
      inputHourValue?: string

      /** @description  hyphenLine属性*/
      hyphenLineType?: string

      /** @description ドロップダウンボックス分の属性  */
      selectMinWidth?: string
      selectMinHeight?: string
      selectMinValue?: string
      disabled?: boolean
    }
  >(),
  {
    inputHourValue: '0',
    selectMinValue: '00',
    hyphenLineType: ':',
    selectMinHeight: '20px',
  },
)

// モデルバインディングの使用
const inputHourValue = useVModel(props, 'inputHourValue')
const selectMinValue = useVModel(props, 'selectMinValue')

// 分の選択肢を生成
const minuteOptions: Dropdown.Option[] = generateMinuteOptions()

/** @description 分の選択肢を生成する関数 */
function generateMinuteOptions(): Dropdown.Option[] {
  return Array.from({ length: 60 }, (_, index) => ({
    value: index.toString().padStart(2, '0'),
    display: index.toString().padStart(2, '0'),
  }))
}
</script>

<style scoped>
.time-input-container {
  display: flex;
  align-items: center;
}
</style>
