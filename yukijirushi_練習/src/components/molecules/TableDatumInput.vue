<!-- NOTE:20231116 WangXin 仕様レビュー用臨時コーポレート。後で削除するか修正かの予定。 -->
<template>
  <TableDatum v-bind="props">
    <BaseNumberInput
      v-if="props.type === 'input-number'"
      :text-align="props.textAlign"
      v-model="value"
      :need-handle="true"
    />
    <BaseTextInput
      v-if="props.type === 'input-text'"
      :text-align="props.textAlign"
      v-model="value"
      :need-handle="true"
    />
  </TableDatum>
</template>

<script setup lang="ts">
import BaseNumberInput from '@/components/atoms/BaseNumberInput.vue'
import BaseTextInput from '@/components/atoms/BaseTextInput.vue'
import TableDatum from '@/components/atoms/TableDatum.vue'

import type { Table } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  Table.Head &
    Table.DatumCommonProperty & {
      /** @description データム */
      datum?: string | number | boolean
    } & {
      /** @description 入力欄タイプ */ type?: Table.DatumType
      modelValue?: string | number
    }
>()

const value = useVModel(props, 'modelValue')
</script>
