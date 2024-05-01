<template>
  <TableDatum v-bind="props">
    <BaseCheckbox v-model="checked" :value="value" :disabled="props.disabled" />
    <span :class="{ 'checkbox-label': checkedLabel !== undefined }">{{
      checkedLabel
    }}</span>
  </TableDatum>
</template>

<script setup lang="ts">
import TableDatum from '../atoms/TableDatum.vue'
import BaseCheckbox from '../atoms/BaseCheckbox.vue'

import type { CSS } from '@/types'
import type { Table } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  Table.Datum & {
    disabled?: boolean
    modelValue?: boolean | any[]
    textAlign?: CSS.TextAlign
    value?: string | number
  }
>()

const checked = useVModel(props, 'modelValue')
</script>

<style scoped>
.checkbox-label {
  margin-left: var(--standard-gap);
}
</style>
