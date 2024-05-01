<template>
  <ItemWrapper v-bind="props">
    <BaseDropdown
      v-model="selectedStartYearMonth"
      :disabled="startYearMonthDisabled"
      :dropdownWidth="inputStartYearMonthWidth"
      :options="yearMonthRange"
    />

    <BaseDropdown
      v-model="selectedStartDay"
      :disabled="startDayDisabled"
      :dropdownWidth="inputStartDayWidth"
      :options="startDays"
    />

    <BaseText :label="textLableWaveLine" />

    <BaseDropdown
      v-model="selectedEndYearMonth"
      :disabled="endYearMonthDisabled"
      :dropdownWidth="inputEndYearMonthWidth"
      :options="yearMonthRange"
    />

    <BaseDropdown
      v-model="selectedEndDay"
      :disabled="endDayDisabled"
      :dropdownWidth="inputEndDayWidth"
      :options="endDays"
    />
  </ItemWrapper>
</template>

<script lang="ts" setup>
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import { DATE_YM_RANGE, DATE_D_RANGE } from '@/config/components'
import type { ItemWrapperProperty } from '@/types/components'

import { computed } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 開始年月 */
      inputStartYearMonthValue?: string | number

      /** @description 開始年月ドロップダウンコンポーネントの幅 */
      inputStartYearMonthWidth?: string | number

      /** @description 開始年月使用状態 */
      startYearMonthDisabled?: boolean

      /** @description 開始日 */
      inputStartDayValue?: string | number

      /** @description 開始日ドロップダウンコンポーネントの幅 */
      inputStartDayWidth?: string | number

      /** @description 開始日使用状態 */
      startDayDisabled?: boolean

      /** @description 終了年月 */
      inputEndYearMonthValue?: string | number

      /** @description 終了年月ドロップダウンコンポーネントの幅 */
      inputEndYearMonthWidth?: string | number

      /** @description 終了年月使用状態 */
      endYearMonthDisabled?: boolean

      /** @description 終了日 */
      inputEndDayValue?: string | number

      /** @description 終了日ドロップダウンコンポーネントの幅 */
      inputEndDayWidth?: string | number

      /** @description 終了日使用状態 */
      endDayDisabled?: boolean

      /** @description ハイフン表示属性 */
      textLableWaveLine?: string
    }
  >(),
  {
    inputStartYearMonthValue: '',
    inputStartDayValue: '',
    inputEndYearMonthValue: '',
    inputEndDayValue: '',
    textLableWaveLine: '～',
  },
)

const dayMin = parseInt(DATE_D_RANGE.MIN)

const selectedStartYearMonth = useVModel(props, 'inputStartYearMonthValue')
const selectedStartDay = useVModel(props, 'inputStartDayValue')
const selectedEndYearMonth = useVModel(props, 'inputEndYearMonthValue')
const selectedEndDay = useVModel(props, 'inputEndDayValue')

// 年月を生成する。
function generateYearMonthRange(min: string, max: string) {
  let range = []
  let [minYear, minMonth] = min.split('-').map(Number)
  let [maxYear, maxMonth] = max.split('-').map(Number)

  for (let year = minYear; year <= maxYear; year++) {
    let startMonth = year === minYear ? minMonth : 1
    let endMonth = year === maxYear ? maxMonth : 12
    for (let month = startMonth; month <= endMonth; month++) {
      let monthValue = month.toString().padStart(2, '0')
      range.push({
        display: `${year}/${monthValue}`,
        value: `${year}-${monthValue}`,
      })
    }
  }
  return range
}

const yearMonthRange = generateYearMonthRange(
  DATE_YM_RANGE.MIN,
  DATE_YM_RANGE.MAX,
)

// 開始日
const startDays = computed(() => {
  if (typeof selectedStartYearMonth.value === 'string') {
    const [year, month] = selectedStartYearMonth.value.split('-').map(Number)
    const daysInMonth = new Date(year, month, 0).getDate()

    return Array.from({ length: daysInMonth }, (_, index) => ({
      display: (dayMin + index).toString().padStart(2, '0'),
      value: (dayMin + index).toString().padStart(2, '0'),
    }))
  }
})

// 終了日
const endDays = computed(() => {
  if (typeof selectedEndYearMonth.value === 'string') {
    const [year, month] = selectedEndYearMonth.value.split('-').map(Number)
    const daysInMonth = new Date(year, month, 0).getDate()

    return Array.from({ length: daysInMonth }, (_, index) => ({
      display: (dayMin + index).toString().padStart(2, '0'),
      value: (dayMin + index).toString().padStart(2, '0'),
    }))
  }
})
</script>
