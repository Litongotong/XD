<template>
  <ItemWrapper class="date-input-year-month-double-date" v-bind="props">
    <BaseNumberInput
      v-model="inputedYearValue"
      :customRules="RegexpRules.YEAR_INPUT_RULE"
      :disabled="yearDisabled"
      :hasError="yearHasError"
      :width="yearWidth"
    />
    <BaseText :label="textLableYearLine" />

    <BaseNumberInput
      v-model="inputedMonthValue"
      :customRules="RegexpRules.MONTH_INPUT_RULE"
      :disabled="monthDisabled"
      :hasError="monthHasError"
      :width="monthWidth"
    />
    <BaseText :label="textLableMonthLine" />

    <BaseNumberInput
      v-model="inputedStartDateValue"
      :customRules="RegexpRules.DATE_INPUT_RULE"
      :disabled="startDateDisabled"
      :hasError="startDateHasError"
      :width="startDateWidth"
    />
    <BaseText :label="textLableDayLine" />

    <BaseText :label="textLableWaveLine" />

    <BaseNumberInput
      v-model="inputedEndDateValue"
      :customRules="RegexpRules.DATE_INPUT_RULE"
      :disabled="endDateDisabled"
      :hasError="endDateHasError"
      :width="endDateWidth"
    />
    <BaseText :label="textLableDayLine" />
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseNumberInput from '../atoms/BaseNumberInput.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { RegexpRules } from '@/utils/regexp-rules'
import { useVModel } from '@/utils/hooks'
import { watch } from 'vue'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      inputYearValue?: string
      yearDisabled?: boolean
      yearHasError?: boolean
      yearWidth?: string
    } & {
      inputMonthValue?: string
      monthDisabled?: boolean
      monthHasError?: boolean
      monthWidth?: string
    } & {
      inputStartDateValue?: string
      startDateDisabled?: boolean
      startDateHasError?: boolean
      startDateWidth?: string
    } & {
      inputEndDateValue?: string
      endDateDisabled?: boolean
      endDateHasError?: boolean
      endDateWidth?: string
    } & {
      /** @description ハイフン表示属性 */
      textLableYearLine?: string
      textLableMonthLine?: string
      textLableDayLine?: string
      textLableWaveLine?: string
    }
  >(),

  {
    yearWidth: '4rem',
    monthWidth: '3rem',
    startDateWidth: '3rem',
    endDateWidth: '3rem',
    textLableYearLine: '年',
    textLableMonthLine: '月',
    textLableDayLine: '日',
    textLableWaveLine: '～',
  },
)

const inputedYearValue = useVModel(props, 'inputYearValue')
const inputedMonthValue = useVModel(props, 'inputMonthValue')
const inputedStartDateValue = useVModel(props, 'inputStartDateValue')
const inputedEndDateValue = useVModel(props, 'inputEndDateValue')

watch(
  [
    inputedYearValue,
    inputedMonthValue,
    inputedStartDateValue,
    inputedEndDateValue,
  ],
  (): void => {
    if (inputedYearValue.value && inputedMonthValue.value) {
      // 入力された年と月に基づいて最大日付を計算する
      const maxDayInMonth: string = getMaxDayInMonth(
        inputedYearValue.value,
        inputedMonthValue.value,
      )

      // 入力した開始日が最大日付より大きい場合、最後の桁を削除する
      if (
        inputedStartDateValue.value &&
        inputedStartDateValue.value > maxDayInMonth
      ) {
        inputedStartDateValue.value = inputedStartDateValue.value.slice(0, -1)
      }

      // 入力した終了日が最大日付より大きい場合、最後の桁を削除する
      if (
        inputedEndDateValue.value &&
        inputedEndDateValue.value > maxDayInMonth
      ) {
        inputedEndDateValue.value = inputedEndDateValue.value.slice(0, -1)
      }

      // 終了日が開始日より小さい場合は、終了日を開始日に設定する
      if (
        inputedStartDateValue.value &&
        inputedEndDateValue.value &&
        Number(inputedStartDateValue.value) > Number(inputedEndDateValue.value)
      ) {
        inputedStartDateValue.value = inputedEndDateValue.value
      }
    }
  },
  { deep: true, immediate: true },
)

function getMaxDayInMonth(year: string, month: string) {
  const lastDay = new Date(Number(year), Number(month), 0).getDate()
  return lastDay.toString()
}
</script>

<style scoped>
.date-input-year-month-double-date {
  align-items: center;
  display: inline-flex;
}
</style>
