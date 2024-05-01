<template>
  <TableDatum v-bind="props" class="table-datum-button">
    <ButtonExtend
      v-bind="props"
      height="100%"
      width="100%"
      @on-click="handleClick"
    />
  </TableDatum>
</template>

<script setup lang="ts">
import TableDatum from '../atoms/TableDatum.vue'
import ButtonExtend from '../atoms/ButtonExtend.vue'

import type { Button, Table } from '@/types/components'

import { HTMLEvents } from '@/enums'

const props = defineProps<Table.DatumCommonProperty & Button.Property>()

const emit = defineEmits<{
  (event: HTMLEvents.CLICK): void
}>()

function handleClick() {
  emit(HTMLEvents.CLICK)
}
</script>

<style scoped>
.table-datum-button {
  border: unset;
  padding: unset;
}

.table-datum-button :deep(.base-button) {
  height: inherit;
  width: inherit;
}
</style>
