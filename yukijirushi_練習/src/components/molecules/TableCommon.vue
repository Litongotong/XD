<template>
  <!-- 
    スクロールバーを出すには `display: block` 系の元素が必要で、  
    `<table>` 元素の `display: table` を破壊したくないので `<div>` で包括することにした。
  -->
  <TableWrapper v-bind="props">
    <!-- スプレッドシート部品は基本 `<table>` タグで作成する -->
    <table
      class="table-common"
      :class="{ 'need-fixed': handleFix }"
      ref="tableCommonRef"
    >
      <thead>
        <tr
          v-for="row in heads"
          :key="JSON.stringify(row)"
          :style="computedHeadStyle"
        >
          <TableHeadMix
            v-for="head in row"
            v-bind="head"
            :key="head.id"
            :type="head.headType"
            :background="head.headBackground"
            :style="{ width: ensureUnit(head.width) }"
          />
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(row, rowIndex) in data"
          :key="JSON.stringify(row)"
          :style="computedDatumStyle"
        >
          <TableDatumMix
            v-for="(datum, datumIndex) in row"
            v-bind="{ ...findHead(datum, heads), ...datum } as Table.Head"
            :datum-background="datum.datumBackground"
            :disabled="datum.disabled ?? false"
            :key="JSON.stringify(datum)"
            :type="findHead(datum, heads)?.datumType"
            :value="rowIndex"
            v-model="payload![rowIndex][datumIndex].datum"
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
import { computed, onMounted, type CSSProperties, ref } from 'vue'
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
      /** @description 固定列数 */
      fixedColumns?: number
      /** @description ヘッダリスト */
      heads?: Table.HeadRow[]
      /** @description ヘッダのボーダーカラー */
      headBorderColor?: string
      /** @description データ高さ */
      headHeight?: number | string
    }
  >(),
  {
    datumBorderColor: 'var(--color-light-gray)',
    datumHeight: 'var(--table-datum-height-default)',
    headBorderColor: 'var(--color-black)',
    fixedColumns: 0,
  },
)

const payload = useVModel(props, 'data')

// [[動的スタイル]]
const computedHeadStyle = computed<CSSProperties>(() => ({
  height: ensureUnit(props.headHeight),
}))

const computedDatumStyle = computed<CSSProperties>(() => ({
  height: ensureUnit(props.datumHeight),
}))

/** @description ヘッダーのラストセルのBorderを計算 */
const computedHeadBorder = computed<string>(() =>
  props.heads?.length === 1 ? `1px solid ${props.headBorderColor}` : 'unset',
)

const tableCommonRef = ref<HTMLElement>()

const setEveryHeadRowLastCellRightBorder = () => {
  const lastHeadChildren =
    tableCommonRef.value?.querySelectorAll('tr th:last-child')
  Array.from(lastHeadChildren ?? []).forEach((child, index, array) => {
    const _child = child as HTMLElement
    const proviousIndex = index - 1 < 0 ? '0' : index - 1
    const proviousChild = array[proviousIndex]
    const proviousRowSpanNotOne = (proviousChild as any)['rowSpan'] !== 1
    const currentRowSpanNotOne = (_child as any)['rowSpan'] !== 1
    if (proviousRowSpanNotOne || currentRowSpanNotOne) {
      return
    }
    _child.style.borderRight = `1px solid ${props.headBorderColor}`
  })
}

onMounted(() => {
  // ヘッダーのラストセルのタイプを判断し、セールの右ボーダーを添付する。
  setEveryHeadRowLastCellRightBorder()
})

/** @description データムのラストセルのBorderを計算 */
const setEveryRowLastCellRightBorder = () => {
  const lastChildren =
    tableCommonRef.value?.querySelectorAll('tr td:last-child')

  Array.from(lastChildren ?? []).forEach((child, index, array) => {
    const _child = child as HTMLElement
    const proviousIndex = index - 1 < 0 ? '0' : index - 1
    const proviousChild = array[proviousIndex]

    const proviousRowSpanNotOne = (proviousChild as any)['rowSpan'] !== 1
    const currentRowSpanNotOne = (_child as any)['rowSpan'] !== 1

    if (proviousRowSpanNotOne || currentRowSpanNotOne) {
      return
    }

    _child.style.borderRight = `1px solid ${props.datumBorderColor}`
  })
}

onMounted(() => {
  // データムのラストセルのタイプを判断し、セールの右ボーダーを添付する。
  setEveryRowLastCellRightBorder()
})

/** @description ヘッダーのtr要素のtop値を設定 */
const setHeadHrTop = () => {
  const table = document.querySelectorAll(`.table-common`)

  for (const item of table) {
    const trList = item.querySelectorAll('.table-common thead tr')

    for (const element of trList) {
      const tableRect = item.getBoundingClientRect()
      const trRect = element.getBoundingClientRect()

      ;(element as HTMLElement).style.top =
        ensureUnit(trRect.y - tableRect.y) ?? '0'
    }
  }
}

onMounted(() => {
  // ヘッダーのtr要素のtop値を設定し、スクロール時に複数行のヘッダーが固定されるようにする
  setHeadHrTop()
})

/** @description 固定列を設定 */
const handleFix = computed(() => {
  if (props.fixedColumns > 0) {
    return true
  }
})

const calculateFixedColumns = () => {
  if (props.fixedColumns > 0) {
    /** @description 固定列のleft値を設定 */
    const table = document.querySelectorAll('.need-fixed')

    for (const item of table) {
      const stickyColumns = item.querySelectorAll(
        `th:nth-child(-n+${props.fixedColumns}), td:nth-child(-n+${props.fixedColumns})`,
      )

      for (const element of stickyColumns) {
        const tableRect = item.getBoundingClientRect()
        const stickyColumnsRect = element.getBoundingClientRect()

        ;(element as HTMLElement).style.left =
          ensureUnit(stickyColumnsRect.x - tableRect.x) || '0'
        ;(element as HTMLElement).style.position = 'sticky'
        ;(element as HTMLElement).style.zIndex = '1'
      }

      const headerRow = item.querySelector('thead tr')

      if (headerRow) {
        ;(headerRow as HTMLElement).style.zIndex = '2'
      }

      /** @description 固定列のボーダーを設定 */
      const lastFixedHead = item.querySelector(
        `th:nth-child(${props.fixedColumns})`,
      )

      if (lastFixedHead) {
        ;(lastFixedHead as HTMLElement).style.borderRight =
          'var(--table-head-border)'
      }

      const lastFixedRightIndex = props.fixedColumns + 1
      const lastFixedHeadRight = item.querySelector(
        `th:nth-child(${lastFixedRightIndex})`,
      )

      if (lastFixedHeadRight) {
        ;(lastFixedHeadRight as HTMLElement).style.borderLeft = 'unset'
      }

      const lastFixedColumns = item.querySelectorAll(
        `td:nth-child(${props.fixedColumns})`,
      )

      for (const tdItem of lastFixedColumns) {
        ;(tdItem as HTMLElement).style.borderRight = 'var(--table-datum-border)'
      }

      const lastFixedColumnsRight = item.querySelectorAll(
        `td:nth-child(${lastFixedRightIndex} )`,
      )

      for (const tdItemRight of lastFixedColumnsRight) {
        ;(tdItemRight as HTMLElement).style.borderLeft = 'unset'
      }
    }
  }
}

onMounted(() => {
  calculateFixedColumns()
})
</script>

<style scoped>
.table-common {
  /*
    border-collapse のデフォルトは separate で、隣接するセルが個別に境界線を持つ。
    隣接するセルに境界線を共有させるには collapse に設定する必要がある。
  */
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
  table-layout: fixed;

  width: 100%;
}

.table-common th {
  border-color: v-bind(headBorderColor);
  border-right: unset;
}

.table-common th:last-child {
  border-right: var(--table-head-border);
  border-color: v-bind(headBorderColor);
}
.table-common thead tr {
  /* stick に設定することで元素をスクロール時に固定表示させることができる */
  position: sticky;
}
.table-common thead tr:last-child th {
  border-top: v-bind(computedHeadBorder);
}

.table-common thead tr:last-child th:last-child {
  border-right: v-bind(computedHeadBorder);
}
.table-common td {
  border-color: v-bind(datumBorderColor);
  border-top: unset;
  border-right: unset;
}

.table-common td:last-child {
  border-right: var(--table-datum-border);
  border-color: v-bind(datumBorderColor);
}

/** 01/16一時的にコメントする */
/* .table-common tbody tr td:last-child {
  border-right: unset;
} */

.table-common tbody tr td:last-child[rowspan] {
  border-right: var(--table-datum-border);
  border-color: v-bind(datumBorderColor);
}
</style>
