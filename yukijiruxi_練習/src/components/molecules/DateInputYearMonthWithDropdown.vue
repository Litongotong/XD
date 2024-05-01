<template>
  <ItemWrapper v-bind="props">
    <div class="date-input-year-month-dropdown-wrapper">
      <div class="date-input-year">
        <BaseSingleDateInput
          v-model="inputedYearValue"
          :customRules="RegexpRules.YEAR_INPUT_RULE"
          :disabled="yearDisabled"
          :hasError="yearHasError"
          :width="yearWidth"
        />
      </div>
      <div class="label-year">{{ textYear }}</div>

      <div class="date-input-month">
        <BaseSingleDateInput
          v-model="inputedMonthValue"
          :customRules="RegexpRules.MONTH_INPUT_RULE"
          :disabled="monthDisabled"
          :hasError="monthHasError"
          :width="monthWidth"
        />
      </div>
      <div class="label-month">{{ textMonth }}</div>

      <div class="period-dropdown">
        <BaseDropdown
          v-model="selectedValue"
          :dropdownWidth="dropdownWidth"
          :disabled="dropdownDisabled"
          :options="options"
        />
      </div>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseSingleDateInput from '../atoms/BaseSingleDateInput.vue'
import BaseDropdown from '../atoms/BaseDropdown.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty, Dropdown } from '@/types/components'

import { RegexpRules } from '@/utils/regexp-rules'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 年の入力値 */
      inputYearValue?: string
      /** @description 年の活性化・非活性化 */
      yearDisabled?: boolean
      /** @description 年のエラー */
      yearHasError?: boolean
      /** @description 年の幅 */
      yearWidth?: string
    } & {
      /** @description 月の入力値 */
      inputMonthValue?: string
      /** @description 月の活性化・非活性化 */
      monthDisabled?: boolean
      /** @description 月のエラー */
      monthHasError?: boolean
      /** @description 月の幅 */
      monthWidth?: string
    } & {
      /** @description 旬の活性化・非活性化 */
      dropdownDisabled?: boolean
      /** @description 旬の選択された値 */
      dropdownValue?: string | number
      /** @description 旬の幅 */
      dropdownWidth?: string | number
      /** @description 旬の選択肢 */
      options?: Dropdown.Option[]
    }
  >(),

  {
    dropdownValue: '1',
    monthWidth: '3rem',
    yearWidth: '4rem',
  },
)

const textYear = '年'
const textMonth = '月'
const inputedYearValue = useVModel(props, 'inputYearValue')
const inputedMonthValue = useVModel(props, 'inputMonthValue')
const selectedValue = useVModel(props, 'dropdownValue')
</script>

<style scoped>
.date-input-year-month-dropdown-wrapper {
  display: flex;
  height: var(--standard-height);
}

.label-year {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--margin);
}

.label-month {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--margin);
}
</style>
