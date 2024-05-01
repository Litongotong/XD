<template>
  <td class="table-datum" v-bind="props" :style="dataStyle">
    <slot></slot>
  </td>
</template>

<script setup lang="ts">
import type { CSS } from '@/types'
import type { Table } from '@/types/components'

const props = withDefaults(
  defineProps<
    Table.DatumCommonProperty & {
      /** @description データムの背景 */
      background?: string
      /** @description データムのボーダーカラー */
      datumBorderColor?: string
      /** @description 文字の水平位置 */
      textAlign?: CSS.TextAlign
    }
  >(),
  {
    datumBorderColor: 'var(--color-light-gray)',
  }
)

const dataStyle = {
  background: props.background
    ? props.background
    : 'var(--table-datum-background)',
}
</script>

<style scoped>
.table-datum {
  border: var(--table-datum-border);
  box-sizing: border-box;
  height: inherit;
  overflow: hidden;
  text-align: v-bind('textAlign');
  white-space: nowrap;
  width: inherit;
}
</style>
