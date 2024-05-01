<!-- Document: https://demo.mescius.jp/wijmo/docs/GettingStarted/QuickStart/QuickStart-Vue3 -->
<template>
  <!-- 
    :keyActionEnter="4" // Enter を横移動に
    :keyActionTab="4" // Tab をスプレッド内に有効に 
    :headersVisibility="1" // 行ヘッダを非表示に
    :alternatingRowStep="0" // 交互行を無効に
  -->
   <!-- 添加按钮 -->
  <!-- <button @click="handleButtonClick">按钮</button> -->

  
  <WjFlexGrid
    :itemsSource="itemSource"
    :keyActionEnter="4"
    :keyActionTab="4"
    :headersVisibility="1"
    :alternatingRowStep="0"
    :style="computedStyle"
    :initialized="handleGridInitialize"
  >    
    <WjFlexGridColumn
      v-for="item of columns"
      :key="item.binding"
      v-bind="item"
      :width="Number(item.width) ?? DEFAULT_COLUMN_WIDTH"
    >
    <template #cellTemplate="{ cell }">
        <button @click="handleButtonClick(cell)">按钮</button>
      </template>
       </WjFlexGridColumn>
  </WjFlexGrid>
</template>

<script setup lang="ts">
import { WjFlexGrid, WjFlexGridColumn } from '@grapecity/wijmo.vue2.grid'
import * as wijmo from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid'
import type { ComponentCommonProperty, Table } from '@/types/components'

import { calculatePositionStyle, ensureUnit } from '@/utils'
import { computed, type CSSProperties } from 'vue'

/** 列のデフォルト幅 */
const DEFAULT_COLUMN_WIDTH = '*'

const props = defineProps<
  ComponentCommonProperty & {
    /** 列 */
    columns: Table.WijmoColumn[]
    /** スプレッドシートデータ */
    itemSource: Record<string, any>
  }
>()

const computedStyle = computed<CSSProperties>(() => ({
  height: ensureUnit(props.height),
  width: ensureUnit(props.width),
  ...calculatePositionStyle(props.x, props.y),
}))

/**
 * Flex Grid 初期化トリガー
 * @param grid グリッドインスタンス
 * @see https://demo.mescius.jp/wijmo/api/classes/wijmo_angular2_grid.wjflexgrid.html#initialized
 */
function handleGridInitialize(grid: Record<string, any>) {
  grid.columns.forEach((item: Record<string, any>, index: number) => {
    item.cssClassAll = props.columns[index].isReadOnly
      ? 'column'
      : 'editable-column'
  })
}

</script>

<style scoped>
:deep(.column.wj-cell.wj-header) {
  background-color: var(--table-head-background);
}

:deep(.editable-column.wj-cell.wj-header) {
  background-color: var(--editable-color);
}
</style>
