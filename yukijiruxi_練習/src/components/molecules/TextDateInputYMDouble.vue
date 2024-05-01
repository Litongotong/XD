<template>
  <ItemWrapper v-bind="props">
    <div class="label-value">
      <DateInputYMD
        class="input-ymd-start"
        type="month"
        v-model="startDateValue"
        :max="endDateValue"
      />

      <div class="text-wave-line">
        <BaseText label="～" />
      </div>

      <DateInputYMD
        class="input-ymd-end"
        type="month"
        v-model="endDateValue"
        :min="startDateValue"
      />
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
import DateInputYMD from '@/components/atoms/DateInputYMD.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 終了日付入力属性 */
    endDate?: string
    /** @description 開始日付入力属性 */
    startDate?: string
    /** @description ラベルウェーブの幅属性 */
    labelWaveLineWidth?: string
  }
>()

// 開始日付の値を管理
const startDateValue = useVModel(props, 'startDate')
// 終了日付の値を管理
const endDateValue = useVModel(props, 'endDate')
</script>

<style scoped>
.label-value {
  height: var(--standard-height);
  display: flex;
  align-items: center;
  position: absolute;
}

.text-wave-line {
  width: v-bind('labelWaveLineWidth');
  text-align: center;
}

.input-ymd-start {
  width: 85px;
}

.input-ymd-end {
  width: 85px;
}
</style>
