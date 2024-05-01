<template>
  <ItemWrapper v-bind="props">
    <div class="date-input-ymdHms-wrapper" :style="dynamicWrapperStyle">
      <input
        type="datetime-local"
        id="date-input-ymdHms"
        class="date-input-ymdHms"
        :max="dateRange.max"
        :min="dateRange.min"
        :style="dynamicContentStyle"
        v-model="date"
        step="01"
      />

      <label for="date-input-ymdHms">{{ weekday }}</label>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { DATE_YMDHMS_RANGE } from '@/config'
import { computed, ref, type StyleValue } from 'vue'
import { useVModel } from '@/utils/hooks'
import { getWeekday } from '@/utils'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description エラーがあるか */
    hasError?: boolean
    /** @description 曜日を表示するか */
    displayWeekday?: boolean
    /** @description 日付値 */
    modelValue?: string
    /** @description  日付最大値*/
    max?: string
    /** @description  日付最小値*/
    min?: string
  }
>()

const datePassed = typeof props.modelValue === 'string'
const date = datePassed ? useVModel(props, 'modelValue') : ref<string>('')

const dateRange = computed<Record<'max' | 'min', string>>(() => {
  const range: Record<'max' | 'min', string> = {
    max: DATE_YMDHMS_RANGE.MAX,
    min: DATE_YMDHMS_RANGE.MIN,
  }
  props.max && (range.max = props.max)
  props.min && (range.min = props.min)

  return range
})

const weekday = computed(() => {
  return props.displayWeekday ? getWeekday(date.value as string) : ''
})

const dynamicWrapperStyle = computed<StyleValue>(() => {
  let widthNumber: number = 14
  props.displayWeekday && (widthNumber += 2.5)

  return { width: widthNumber + 'rem' }
})

const dynamicContentStyle = computed<StyleValue>(() => ({
  background: props.hasError ? 'var(--color-error)' : undefined,
}))
</script>

<style scoped>
.date-input-ymdHms-wrapper {
  all: unset;
  align-items: center;
  display: inline-flex;
  position: relative;
  justify-content: center;
}

.date-input-ymdHms {
  box-sizing: border-box;
  height: var(--standard-height);
  width: 100%;
}

.date-input-ymdHms ~ label {
  display: inline-block;
  position: absolute;
  right: 2.2rem;
}
</style>
