<template>
  <ItemWrapper v-bind="props">
    <BaseDropdown
      v-model="selectedYear"
      :disabled="yearDisabled"
      :dropdownWidth="selectYearWidth"
      :options="years"
    />
    <label>年</label>

    <BaseDropdown
      v-model="selectedMonth"
      :disabled="monthDisabled"
      :dropdownWidth="selectMonthWidth"
      :options="months"
    />
    <label>月</label>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import { DATE_Y_RANGE, DATE_M_RANGE } from '@/config/components'
import type { ItemWrapperProperty } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 年選択入力属性 */
      selectYearValue?: string | number
      /** @description 年選択入力欄の幅属性 */
      selectYearWidth?: string | number
      /** @description 年選択入力の無効化 */
      yearDisabled?: boolean

      /** @description 月選択入力属性 */
      selectMonthValue?: string | number
      /** @description 月選択入力欄の幅属性 */
      selectMonthWidth?: string | number
      /** @description 月選択入力の無効化 */
      monthDisabled?: boolean
    }
  >(),
  {
    selectYearValue: '',
    selectMonthValue: '',
  },
)

const yearMin = parseInt(DATE_Y_RANGE.MIN)
const yearMax = parseInt(DATE_Y_RANGE.MAX)
const monthMin = parseInt(DATE_M_RANGE.MIN)
const monthMax = parseInt(DATE_M_RANGE.MAX)

const selectedYear = useVModel(props, 'selectYearValue')
const selectedMonth = useVModel(props, 'selectMonthValue')

// 年の選択肢を生成
const years = Array.from({ length: yearMax - yearMin + 1 }, (_, index) => ({
  disabled: false,
  display: (yearMin + index).toString(),
  value: (yearMin + index).toString(),
}))

// 月の選択肢を生成
const months = Array.from({ length: monthMax }, (_, index) => ({
  disabled: false,
  display: (monthMin + index).toString().padStart(2, '0'),
  value: (monthMin + index).toString().padStart(2, '0'),
}))
</script>

<style scoped>
.base-dropdown {
  height: inherit;
  outline: unset;
}
</style>
