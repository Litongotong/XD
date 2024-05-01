<template>
  <ItemWrapper v-bind="props" class="text-label-value">
    <div class="input-ymd-first">
      <DateInputYMD
        type="date"
        v-model="startYMD"
        @change="handleDateInputChange"
      />
    </div>
    <div class="text-wave-line" :style="{ width: textLabelWaveLineWidth }">
      <BaseText :label="textLableWaveLine" />
    </div>
    <div>
      <input
        class="base-input"
        :value="endDate"
        :style="customStyle"
        @blur="handleDateChange"
      />
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
import DateInputYMD from '@/components/atoms/DateInputYMD.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { ref, watchEffect, nextTick, computed } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 年月日選択属性 */
      startYMD?: string

      /** @description ハイフン表示属性 */
      textLableWaveLine?: string
      textLabelWaveLineWidth?: string

      /** @description 入力日の表示属性 */
      endDate?: string
      endDateWidth?: string
    }
  >(),
  {
    textLableWaveLine: '～',
    endDateWidth: '25px',
  },
)

const startYMD = useVModel(props, 'startYMD')
const endDate = useVModel(props, 'endDate')

const getDay = ref<number | null>(null)
const maxDaysInMonth = ref<number | null>(null)

const customStyle = computed(() => {
  return {
    width: props.endDateWidth,
  }
})
watchEffect(() => {
  const selectedDate = new Date(startYMD.value as string)
  getDay.value = selectedDate.getDate()
  maxDaysInMonth.value = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0,
  ).getDate()
})

const handleDateChange = async (event: Event) => {
  const dateValue = (event.target as HTMLInputElement).value
  const dateValueNumber = parseInt(dateValue, 10)

  await handleDateChangeLogic(dateValueNumber)

  await nextTick(() => {
    ;(event.target as HTMLInputElement).value = endDate.value!
  })
}

const handleDateInputChange = () => {
  endDate.value = ''
}

const handleDateChangeLogic = async (dateValueNumber: number) => {
  endDate.value =
    getDay.value! <= dateValueNumber && dateValueNumber <= maxDaysInMonth.value!
      ? dateValueNumber.toString().padStart(2, '0')
      : (getDay.value || '').toString().padStart(2, '0')
}
</script>

<style scoped>
.text-label-value {
  height: var(--standard-height);
  display: flex;
  align-items: center;
  position: relative;
}
.text-wave-line {
  text-align: center;
}
.base-input {
  box-sizing: border-box;
  height: var(--standard-height);
  font: var(--font-family-default);
  font-size: var(--font-size-10-5);
  color: var(--color-font);
  border-color: var(--color-light-gray);
  outline: none;
}
</style>
