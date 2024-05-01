<!-- 
******************************************************************************
* TableCommonLengthways
* 
* システム名       : 共通部品
* サブシステム名   : 共通部品
* プログラム名     : スプレッドシート10（スプレッドシート1と基本同じ、縦並び）
* 担当者           : 共通部品
*-----------------------------------------------------------------------------
* 【修正履歴】
* +-------+------------+-------------------+----------------------------------
* | 版数  | 修正日     | 担当者            | 修正概要                         
* +-------+------------+-------------------+----------------------------------
* | 初版  | 2023/12/19 | 共通部品          | 共通部品新規作成
* +-------+------------+-------------------+----------------------------------
* 
* All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
******************************************************************************
-->
<template>
  <!-- 
    スクロールバーを出すには `display: block` 系の元素が必要で、  
    `<table>` 元素の `display: table` を破壊したくないので `<div>` で包括することにした。
  -->
  <TableWrapper v-bind="props">
    <!-- スプレッドシート部品は基本 `<table>` タグで作成する -->
    <table class="table-common">
      <tbody>
        <tr
          v-for="(row, rowIndex) in heads"
          :key="JSON.stringify(row)"
          :style="computedHeadStyle"
        >
          <TableHeadMix
            v-if="!row[0].skipTableHeadMix"
            v-bind="row[0]"
            :key="row[0].id"
            :type="row[0].headType"
            :background="row[0].headBackground"
            :style="{ width: ensureUnit(row[0].width) }"
          />
          <TableDatumMix
            v-for="(datum, datumIndex) in (data ?? [])[rowIndex]"
            :key="JSON.stringify(datum)"
            v-bind="{ ...findHead(datum, heads), ...datum } as Table.Head"
            :datum-background="datum.datumBackground"
            :disabled="datum.disabled ?? false"
            :type="findHead(datum, heads)?.datumType"
            :value="rowIndex"
            v-model="payload![rowIndex][datumIndex].datum"
            :checkedLabel="datum.checkedLabel"
            :style="{
              width: ensureUnit(datum.datumWidth),
              height: ensureUnit(props.datumHeight),
            }"
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

import { ensureUnit, findHead } from '@/utils'
import { computed, type CSSProperties } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ComponentCommonProperty & {
      /** @description チェックされたアイテムのインデックスの配列 */
      checkedItemIndexes?: number[]
      /** @description データ */
      data?: Table.DatumRow[]
      /** @description ボーダーカラー */
      datumBorderColor?: string
      /** @description データ高さ */
      datumHeight?: number | string
      /** @description ヘッダリスト */
      heads?: Table.HeadRow[]
      /** @description ヘッダのボーダーカラー */
      headBorderColor?: string
      /** @description データ高さ */
      headHeight?: number | string
      /** @description トップボーダー */
      setTopBorder?: string
    }
  >(),
  {
    datumBorderColor: 'var(--color-light-gray)',
    datumHeight: 'var(--table-datum-height-default)',
    headBorderColor: 'var(--color-black)',
    setTopBorder: 'var(--table-datum-border)',
  },
)

const payload = useVModel(props, 'data')

// [[動的スタイル]]
const computedHeadStyle = computed<CSSProperties>(() => ({
  height: ensureUnit(props.headHeight),
}))

/** @description ヘッダーのラストセルのBorderを計算 */
const computedHeadBorder = computed<string>(() =>
  props.heads?.length === 1 ? `1px solid ${props.headBorderColor}` : 'unset',
)

/** @description ボディーのラストセルのBorderを計算 */
const computedBodyBorder = computed<string>(() =>
  props.data?.reduce(
    (accumulator, current, _, array) =>
      accumulator && current.length === array[0].length,
    true,
  )
    ? 'var(--table-datum-border)'
    : 'unset',
)
</script>

<style scoped>
.table-common {
  /*
    border-collapse のデフォルトは separate で、隣接するセルが個別に境界線を持つ。
    隣接するセルに境界線を共有させるには collapse に設定する必要がある。
  */
  border-top: v-bind(setTopBorder);
  border-collapse: separate;
  border-spacing: unset;

  /*
    auto の場合は td, th の幅は内容により計算される；
    fixed の場合は `100% / 列数` で均等に分けられる。

    auto の場合は th に設定された幅は
    各列の合計内容の自動幅が表全体の幅より小さい時にのみ作動する。

    fixed の場合に th に幅を設定したら設定された th の幅は有効になり、
    残りの列の幅はは `(100% - th 設定幅) / 列数` で計算を行う。
  */
  table-layout: auto;
}

.table-common th {
  position: sticky;
  left: 0;
  border-top: v-bind(computedHeadBorder);
  border-color: v-bind(headBorderColor);
}

.table-common th:last-child {
  border-right: var(--table-head-border);
}

.table-common tbody tr:last-child th {
  border-top: v-bind(computedHeadBorder);
}

.table-common tbody tr:last-child th:last-child {
  border-right: v-bind(computedHeadBorder);
}
.table-common td {
  border-color: v-bind(datumBorderColor);
  border-top: unset;
  border-right: unset;
}

.table-common td:last-child {
  border-right: var(--table-datum-border);
}

.table-common tbody tr td:last-child {
  border-right: v-bind(computedBodyBorder);
}

.table-common tbody tr td:last-child[rowspan] {
  border-right: var(--table-datum-border);
}
</style>
