<template>
  <ItemWrapper v-bind="props">
    <div class="label-value">
      <div class="input-ymd">
        <DateInputYMD
          type="date"
          v-model="startDateValue"
          :max="endDateValue"
        />
      </div>
      <div class="input-time">
        <BaseTime
          class="input-time-start"
          v-model="startTimeValue"
          @on-blur="updateMaxMinTime"
        />
      </div>

      <div class="text-wave-line">
        <BaseText label="～" />
      </div>

      <div class="input-ymd">
        <DateInputYMD
          type="date"
          v-model="endDateValue"
          :min="startDateValue"
        />
      </div>
      <div class="input-time">
        <BaseTime
          class="input-time-end"
          v-model="endTimeValue"
          @on-blur="updateMaxMinTime"
        />
      </div>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText.vue'
import BaseTime from '../atoms/BaseTime.vue'
import DateInputYMD from '@/components/atoms/DateInputYMD.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 終了年月日 */
    endDate?: string

    /** @description 終了時間 */
    endTime?: string

    /** @description 開始年月日 */
    startDate?: string

    /** @description 開始時間 */
    startTime?: string

    /** @description 日付区切りラベルの長さ */
    labelWaveLineWidth?: string
  }
>()

const startDateValue = useVModel(props, 'startDate')
const startTimeValue = useVModel(props, 'startTime')
const endDateValue = useVModel(props, 'endDate')
const endTimeValue = useVModel(props, 'endTime')

const updateMaxMinTime = () => {
  // 開始日時と終了日時を取得
  const startDateTime = new Date(`2000-01-01T${props.startTime}`)
  const endDateTime = new Date(`2000-01-01T${props.endTime}`)

  // 開始日付と終了日付が同じで、かつ開始時間と終了時間が空でない場合
  if (
    props.startDate === props.endDate &&
    props.startTime !== '' &&
    props.endTime !== ''
  ) {
    // 開始時間が終了時間より後の場合、終了時間を開始時間に設定
    if (startDateTime > endDateTime) {
      endTimeValue.value = startTimeValue.value
    }
  }
}
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
  margin-right: 1rem;
}
.input-ymd {
  width: 85px;
}
.input-time {
  margin: 0 1rem;
  width: 60px;
}
</style>
