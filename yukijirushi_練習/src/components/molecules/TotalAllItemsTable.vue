<template>
  <TableWrapper v-bind="props">
    <table class="total-table">
      <thead v-if="isColumn">
        <tr>
          <TableHeadMix v-bind="props" :style="computedHeadStyle" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableHeadMix
            v-if="!isColumn"
            v-bind="props"
            :style="computedHeadStyle"
          />
          <TableDatumMix
            v-bind="props as Table.Head"
            :style="computedDatumStyle"
          />
        </tr>
      </tbody>
    </table>
  </TableWrapper>
</template>

<script setup lang="ts">
import TableWrapper from '../atoms/TableWrapper.vue'
import TableHeadMix from './TableHeadMix.vue'
import TableDatumMix from './TableDatumMix.vue'

import type { ComponentCommonProperty, Table } from '@/types/components'

import { computed, type StyleValue } from 'vue'

const props = withDefaults(
  defineProps<
    ComponentCommonProperty &
      Table.Head &
      Table.Datum & {
        /** @description  ヘーダ列幅（設定しない場合は文字数によって自動で決まる）*/
        headWidth?: number | string
        /** @description  データ列幅（設定しない場合は文字数によって自動で決まる）*/
        datumWidth?: number | string
        /** @description  ヘーダのバックグラウンド色*/
        background?: string
      }
  >(),

  {
    textAlign: 'right',
  },
)

const isColumn = computed<boolean>(() => props.scope === 'col')

const computedHeadStyle = computed<StyleValue>(() => ({
  minWidth: props.headWidth,
}))

const computedDatumStyle = computed<StyleValue>(() => ({
  minWidth: props.datumWidth,
}))
</script>

<style scoped>
.total-table {
  border-collapse: collapse;
}
</style>
