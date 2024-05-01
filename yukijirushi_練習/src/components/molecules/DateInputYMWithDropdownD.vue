<template>
  <ItemWrapper v-bind="props">
    <BaseDropdown
      :dropdownWidth="100"
      :options="yearMonths"
      v-model="selectedYearMonth"
    />
    <BaseDropdown
      class="dayDropdown"
      :dropdownWidth="40"
      :options="days"
      v-model="selectedDay"
    />
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty, Dropdown } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 年月選択入力属性 */
    yearMonths?: Dropdown.Option[]
    /** @description 日選択入力属性 */
    days?: Dropdown.Option[]
    /** @description 年月選択後属性 */
    selectedYearMonth?: string
    /** @description 日選択後属性 */
    selectedDay?: string
  }
>()

const selectedYearMonth = useVModel(props, 'selectedYearMonth')

const now = new Date()
const currentYear = now.getFullYear()

// 年月のデータを作成
const tempData = []
// 去年
for (let i = 1; i < 13; i++) {
  tempData.push({
    display: currentYear - 1 + '/' + i,
    value: currentYear - 1 + '/' + i,
  })
}
// 今年
for (let i = 1; i < 13; i++) {
  tempData.push({
    display: currentYear + '/' + i,
    value: currentYear + '/' + i,
  })
}
// 来年
for (let i = 1; i < 13; i++) {
  tempData.push({
    display: currentYear + 1 + '/' + i,
    value: currentYear + 1 + '/' + i,
  })
}

const yearMonths = tempData

// 日の選択肢を作成
const selectedDay = useVModel(props, 'selectedDay')
const days = Array.from({ length: 31 }, (_, index) => ({
  display: String(index + 1).padStart(2, '0'),
  value: String(index + 1).padStart(2, '0'),
}))
</script>

<style scoped>
.dayDropdown {
  margin: 0 0.5rem;
}
</style>
