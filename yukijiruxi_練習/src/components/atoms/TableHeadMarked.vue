<template>
  <TableHead class="table-head-marked" v-bind="props">
    <span class="content-wrapper">
      <span class="string-box">
        <span class="string">
          {{ head }}
        </span>
      </span>
    </span>
  </TableHead>
</template>

<script setup lang="ts">
import TableHead from './TableHead.vue'

import type { CSS } from '@/types'
import type { Table } from '@/types/components'

import { computed } from 'vue'
import { TABLE_HEAD_MARK } from '@/config'

const props = withDefaults(
  defineProps<
    Table.HeadCommonProperty & {
      /** @description 列ヘッダ */
      head?: Table.HeadText
      /** @description マーク */
      mark?: string
      background?: string
      headTextAlign?: CSS.TextAlign
    }
  >(),

  { mark: TABLE_HEAD_MARK, headTextAlign: 'left' },
)

const computedMark = computed<string>(() => `'${props.mark}'`)
</script>

<style scoped>
.content-wrapper {
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 0 2px;
  width: 100%;
}

.content-wrapper .string-box {
  flex: 1;
  display: inline-flex;
  justify-content: v-bind(headTextAlign);
}

.content-wrapper::after {
  display: inline-block;
  content: v-bind('computedMark');
}
</style>
