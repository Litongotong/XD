<template>
  <TableDatum class="table-datum-dropdown">
    <BaseDropdown
      class="dropdown"
      v-model="selected"
      v-bind="props"
      height="100%"
      width="100%"
    />
  </TableDatum>
</template>

<script setup lang="ts">
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import TableDatum from '@/components/atoms/TableDatum.vue'

import type { Table, Dropdown } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  Table.DatumCommonProperty & {
    /** @description 使用不可か */
    disabled?: boolean
    /** @description 選択値  */
    modelValue?: string
    /** @description 選択肢 */
    options?: Dropdown.Option[]
  }
>()

const selected = useVModel(props, 'modelValue')
</script>

<style scoped>
.table-datum-dropdown {
  padding: 0;
}

.dropdown :deep(select) {
  border: unset;
  width: inherit;
}
</style>
