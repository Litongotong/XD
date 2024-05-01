<template>
  <TableDatum v-bind="props">
    <div class="input-container">
      <div>
        <BaseNumberInput
          class="custom-input"
          :text-align="textAlign"
          v-model="hour"
          :need-handle="true"
        />
        <span>時間</span>
      </div>

      <div class="custom-minute">
        <BaseNumberInput
          class="custom-input"
          :text-align="textAlign"
          v-model="minute"
          :need-handle="true"
        />
        <span>分</span>
      </div>
    </div>
  </TableDatum>
</template>

<script setup lang="ts">
import BaseNumberInput from '@/components/atoms/BaseNumberInput.vue'
import TableDatum from '@/components/atoms/TableDatum.vue'

import type { CSS } from '@/types'
import type { Table } from '@/types/components'

import { watchEffect, ref } from 'vue'

const props = withDefaults(
  defineProps<
    Table.DatumCommonProperty & {
      /** @description データム */
      datum?: string | number | boolean
      /** @description 入力欄タイプ */
      type?: Table.DatumType
      /** @description 内容水平位置  */
      textAlign?: CSS.TextAlign
    }
  >(),
  {},
)

const hour = ref('')
const minute = ref('')

watchEffect(() => {
  if (props.datum !== false) {
    const timeParts = String(props.datum).split(':')
    const hourValue = timeParts[0] || ''
    const minuteValue = timeParts[1] || ''

    hour.value = hourValue
    minute.value = minuteValue
  }
})
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  padding-left: var(--table-time-input-padding-left);
}

.custom-input {
  width: var(--table-time-input-width);
}

.custom-minute {
  margin-left: var(--table-time-input-margin-left);
}
</style>
