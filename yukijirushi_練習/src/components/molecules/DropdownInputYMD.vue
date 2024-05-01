<template>
  <ItemWrapper v-bind="props">
    <DropdownInputYM
      v-model:selectYearValue="selectedYear"
      v-model:selectMonthValue="selectedMonth"
      :selectYearWidth="selectYearWidth"
      :yearDisabled="dayDisabled"
      :selectMonthWidth="selectMonthWidth"
      :monthDisabled="dayDisabled"
    />

    <BaseDropdown
      v-model="selectedDay"
      :disabled="dayDisabled"
      :dropdownWidth="selectDayWidth"
      :options="days"
    />
    <label>日</label>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import DropdownInputYM from '@/components/molecules/DropdownInputYM.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import { DATE_D_RANGE } from '@/config/components'
import type { ItemWrapperProperty } from '@/types/components'

import { computed, watch } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 年選択入力属性 */
      selectYearValue?: string | number
      /** @description 年選択入力欄の幅属性 */
      selectYearWidth?: string | number

      /** @description 月選択入力属性 */
      selectMonthValue?: string | number
      /** @description 月選択入力欄の幅属性 */
      selectMonthWidth?: string | number

      /** @description 日選択入力属性 */
      selectDayValue?: string | number
      /** @description 日選択入力欄の幅属性 */
      selectDayWidth?: string | number
      dayDisabled?: boolean
    }
  >(),
  {
    selectYearValue: '',
    selectMonthValue: '',
    selectDayValue: '',
  },
)

const dayMin = parseInt(DATE_D_RANGE.MIN)
const dayMax = parseInt(DATE_D_RANGE.MAX)

const selectedYear = useVModel(props, 'selectYearValue')
const selectedMonth = useVModel(props, 'selectMonthValue')
const selectedDay = useVModel(props, 'selectDayValue')

// 日の選択肢を生成
let days = computed(() => {
  return Array.from({ length: dayMax }, (_, index) => ({
    disabled: false,
    display: (dayMin + index).toString().padStart(2, '0'),
    value: (dayMin + index).toString().padStart(2, '0'),
  }))
})

// 年と月の選択が変更されたときに日の選択肢を更新する
watch(
  [selectedYear, selectedMonth],
  ([newSelectedYear, newSelectedMonth], [prevYear, prevMonth]) => {
    if (Number(newSelectedYear) && Number(newSelectedMonth)) {
      const newMaxDaysOfMonth = new Date(
        parseInt(newSelectedYear.toString()),
        parseInt(newSelectedMonth.toString()),
        0,
      ).getDate()
      // 前回の選択された年月の最大日数を取得
      const prevMaxDaysOfMonth = new Date(
        parseInt(prevYear.toString()),
        parseInt(prevMonth.toString()),
        0,
      ).getDate()
      // 新しい月の最大日数が前回と異なる場合、日の選択肢を更新
      if (newMaxDaysOfMonth !== prevMaxDaysOfMonth) {
        days = computed(() => {
          return Array.from({ length: newMaxDaysOfMonth }, (_, index) => ({
            disabled: false,
            display: (dayMin + index).toString().padStart(2, '0'),
            value: (dayMin + index).toString().padStart(2, '0'),
          }))
        })
      }
    }
  },
)
</script>
