<template>
  <ItemWrapper v-bind="props">
    <div class="date-input-year-dropdown-wrapper">
      <div class="date-input-year">
        <BaseSingleDateInput
          v-model="inputedYearValue"
          :customRules="RegexpRules.YEAR_INPUT_RULE"
          :disabled="yearDisabled"
          :width="yearWidth"
          @on-blur="changeYear"
        />
      </div>
      <div class="label-year">{{ textYear }}</div>

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
      /** @description 年 */
      inputYearValue?: string
      /** @description 年コンポーネントの状態 */
      yearDisabled?: boolean
      /** @description 年コンポーネントの幅 */
      yearWidth?: string
    } & {
      dropdownDisabled?: boolean
      dropdownValue?: string | number
      dropdownWidth?: string | number
      options?: Dropdown.Option[]
    } & {
      wrapperWidth?: string
    }
  >(),

  {
    dropdownValue: '1',
    wrapperWidth: '15rem',
    yearWidth: '4rem',
  },
)

const textYear = '年度'
const inputedYearValue = useVModel(props, 'inputYearValue')
const selectedValue = useVModel(props, 'dropdownValue')

/** @description  開始年度が4桁未満の場合、制限する */
const changeYear = () => {
  if (Number(inputedYearValue.value) < 1951) {
    inputedYearValue.value = '1951'
  }
}
</script>

<style scoped>
.date-input-year-dropdown-wrapper {
  display: flex;
  width: v-bind(wrapperWidth);
}

.label-year {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--margin);
}

.period-dropdown {
  margin-left: auto;
}
</style>
