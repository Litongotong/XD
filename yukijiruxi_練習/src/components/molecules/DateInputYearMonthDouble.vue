<template>
  <ItemWrapper v-bind="props">
    <div class="date-input-year-month-dropdown-wrapper">
      <BaseSingleDateInput
        v-model="inputedStartYearValue"
        :customRules="RegexpRules.YEAR_INPUT_RULE"
        :disabled="yearStartDisabled"
        :hasError="yearStartHasError"
        :width="yearStartWidth"
        @on-blur="changeStartYear"
      />
      <span class="label-text">年</span>

      <BaseSingleDateInput
        v-model="inputedStartMonthValue"
        :customRules="RegexpRules.MONTH_INPUT_RULE"
        :disabled="monthStartDisabled"
        :hasError="monthStartHasError"
        :width="monthStartWidth"
        @on-blur="changeStartMonth"
      />
      <span class="label-text">月</span>

      <span class="label-text">～</span>

      <BaseSingleDateInput
        v-model="inputedEndYearValue"
        :customRules="RegexpRules.YEAR_INPUT_RULE"
        :disabled="yearEndDisabled"
        :hasError="yearEndHasError"
        :width="yearEndWidth"
        @on-blur="changeEndYear"
      />
      <span class="label-text">年</span>

      <BaseSingleDateInput
        v-model="inputedEndMonthValue"
        :customRules="RegexpRules.MONTH_INPUT_RULE"
        :disabled="monthEndDisabled"
        :hasError="monthEndHasError"
        :width="monthEndWidth"
        @on-blur="changeEndMonth"
      />
      <span class="label-text">月</span>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from '../atoms/ItemWrapper.vue'
import BaseSingleDateInput from '../atoms/BaseSingleDateInput.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { RegexpRules } from '@/utils/regexp-rules'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description  開始年度入力欄の属性 */
      inputStartYearValue?: string
      yearStartDisabled?: boolean
      yearStartHasError?: boolean
      yearStartWidth?: string
    } & {
      /** @description  開始月度入力欄の属性 */
      inputStartMonthValue?: string
      monthStartDisabled?: boolean
      monthStartHasError?: boolean
      monthStartWidth?: string
    } & {
      /** @description  終了年度入力欄の属性 */
      inputEndYearValue?: string
      yearEndDisabled?: boolean
      yearEndHasError?: boolean
      yearEndWidth?: string
    } & {
      /** @description  終了月度入力欄の属性 */
      inputEndMonthValue?: string
      monthEndDisabled?: boolean
      monthEndHasError?: boolean
      monthEndWidth?: string
    }
  >(),

  {
    monthStartWidth: '3rem',
    monthEndWidth: '3rem',
    yearStartWidth: '4rem',
    yearEndWidth: '4rem',
  },
)

const inputedStartYearValue = useVModel(props, 'inputStartYearValue')
const inputedStartMonthValue = useVModel(props, 'inputStartMonthValue')
const inputedEndYearValue = useVModel(props, 'inputEndYearValue')
const inputedEndMonthValue = useVModel(props, 'inputEndMonthValue')

/** @description  開始年度が終了年度より大きい場合、開始年度を終了年度に設定する*/
const changeStartYear = () => {
  if (
    inputedEndYearValue.value &&
    inputedStartYearValue.value &&
    Number(inputedStartYearValue.value) > Number(inputedEndYearValue.value)
  ) {
    inputedStartYearValue.value = inputedEndYearValue.value
    setStartMonth()
  }
  changeStartMonth()
}

/** @description  開始終了年度が同じ、開始月度が終了月度より大きい場合、開始月度を終了月度に設定する*/
const changeStartMonth = () => {
  if (
    inputedStartMonthValue.value &&
    inputedEndMonthValue.value &&
    inputedStartYearValue.value === inputedEndYearValue.value &&
    Number(inputedStartMonthValue.value) > Number(inputedEndMonthValue.value)
  ) {
    inputedStartMonthValue.value = inputedEndMonthValue.value
  }
}

/** @description  終了年度が開始年度より小さい場合、終了年度を開始年度に設定する*/
const changeEndYear = () => {
  if (
    inputedEndYearValue.value &&
    inputedStartYearValue.value &&
    Number(inputedStartYearValue.value) > Number(inputedEndYearValue.value)
  ) {
    inputedEndYearValue.value = inputedStartYearValue.value
    setEndMonth()
  }
  changeEndMonth()
}

/** @description  開始終了年度が同じ、終了月度が開始月度より小さい場合、終了月度を開始月度に設定する*/
const changeEndMonth = () => {
  if (
    inputedStartMonthValue.value &&
    inputedEndMonthValue.value &&
    inputedStartYearValue.value === inputedEndYearValue.value &&
    Number(inputedStartMonthValue.value) > Number(inputedEndMonthValue.value)
  ) {
    inputedEndMonthValue.value = inputedStartMonthValue.value
  }
}

/** @description  開始年度を終了年度に設定して、開始月度が終了月度より大きい場合、開始月度を終了月度に設定する*/
const setStartMonth = () => {
  if (
    inputedStartMonthValue.value &&
    inputedEndMonthValue.value &&
    Number(inputedStartMonthValue.value) > Number(inputedEndMonthValue.value)
  ) {
    inputedStartMonthValue.value = inputedEndMonthValue.value
  }
}

/** @description  終了年度を開始年度に設定して、終了月度が開始月度より小さい場合、終了月度を開始月度に設定する*/
const setEndMonth = () => {
  if (
    inputedStartMonthValue.value &&
    inputedEndMonthValue.value &&
    Number(inputedStartMonthValue.value) > Number(inputedEndMonthValue.value)
  ) {
    inputedEndMonthValue.value = inputedStartMonthValue.value
  }
}
</script>

<style scoped>
.date-input-year-month-dropdown-wrapper {
  display: flex;
  height: var(--standard-height);
}

.label-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--margin);
}
</style>
