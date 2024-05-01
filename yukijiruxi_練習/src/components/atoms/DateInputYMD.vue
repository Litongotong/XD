<template>
  <ItemWrapper v-bind="props">
    <div class="date-input-ymd-wrapper" :style="dynamicWrapperStyle">
      <input type="text" class="date-input-ymd" value="　　　/　/　" />
      <!-- 20231121 wangxin NOTE:日付入力部品修正必要なので、レビューのため、臨時的テキスト入力欄を使用する。 -->
      <!-- <input
        :type="type"
        id="date-input-ymd"
        class="date-input-ymd"
        :max="dateRange.max"
        :min="dateRange.min"
        :style="dynamicContentStyle"
        v-model="date"
      />

      <label for="date-input-ymd">{{ weekday }}</label> -->
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

// import { DATE_YM_RANGE, DATE_YMD_RANGE } from '@/config'
import { computed, ref, type StyleValue } from 'vue'
// import { useVModel } from '@/utils/hooks'
// import { getWeekday } from '@/utils'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 日付タイプ */
      type?: 'date' | 'month'
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
  >(),

  { type: 'date' },
)

// const datePassed = typeof props.modelValue === 'string'
// const date = datePassed ? useVModel(props, 'modelValue') : ref<string>('')

// const isFullDate = computed(() => props.type === 'date')

// const dateRange = computed<Record<'max' | 'min', string>>(() => {
//   const range: Record<'max' | 'min', string> = {
//     max: isFullDate.value ? DATE_YMD_RANGE.MAX : DATE_YM_RANGE.MAX,
//     min: isFullDate.value ? DATE_YMD_RANGE.MIN : DATE_YM_RANGE.MIN,
//   }
//   props.max && (range.max = props.max)
//   props.min && (range.min = props.min)
//   return range
// })

// const weekday = computed(() => {
//   return props.displayWeekday ? getWeekday(date.value as string) : ''
// })

const dynamicWrapperStyle = computed<StyleValue>(() => {
  let widthNumber: number = 8.5
  props.displayWeekday && (widthNumber += 2.5)

  return { width: widthNumber + 'rem' }
})

// const dynamicContentStyle = computed<StyleValue>(() => ({
//   background: props.hasError ? 'var(--color-error)' : undefined,
// }))
</script>

<style scoped>
.date-input-ymd-wrapper {
  all: unset;
  align-items: center;
  display: inline-flex;
  position: relative;
  justify-content: center;
}

.date-input-ymd {
  box-sizing: border-box;
  height: var(--standard-height);
  width: 100%;
}

.date-input-ymd ~ label {
  display: inline-block;
  position: absolute;
  right: 2.2rem;
}
</style>
