<template>
  <ItemWrapper v-bind="props">
    <div class="label-value">
      <div class="input-ymd-first">
        <DateInputYMD
          :type="dateInputType"
          v-model="startDateValue"
          :max="endDateValue"
        />
      </div>
      <div class="text-wave-line">
        <BaseText :label="labelWaveLine" />
      </div>
      <div class="input-ymd-second">
        <DateInputYMD
          :type="dateInputType"
          v-model="endDateValue"
          :min="startDateValue"
        />
      </div>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import { useVModel } from '@/utils/hooks'

import BaseText from '../atoms/BaseText.vue'
import DateInputYMD from '../atoms/DateInputYMD.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { computed } from 'vue'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 日付区切り */
      labelWaveLine?: string

      /** @description 日付区切りラベルの長さ */
      labelWaveLineWidth?: string

      /** @description 開始年月日 */
      startDate?: string

      /** @description 終了年月日 */
      endDate?: string

      /** @description 日付タイプ */
      dateType?: string
    }
  >(),
  {
    labelWaveLine: '～',
    labelWaveLineWidth: '1rem',
  },
)

const startDateValue = useVModel(props, 'startDate')
const endDateValue = useVModel(props, 'endDate')

const dateInputType = computed<'date' | 'month'>(() =>
  props.dateType === 'month' ? 'month' : 'date',
)
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
</style>
