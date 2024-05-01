<!-- 
******************************************************************************
* TreeSearch
* 
* システム名       : 共通部品
* サブシステム名   : 共通部品
* プログラム名     : コード検索ツリー
* 担当者           : 共通部品
*-----------------------------------------------------------------------------
* 【修正履歴】
* +-------+------------+-------------------+----------------------------------
* | 版数  | 修正日     | 担当者            | 修正概要                         
* +-------+------------+-------------------+----------------------------------
* | 改訂版  | 2024/01/30 | 共通部品          | コメントの添付
* +-------+------------+-------------------+----------------------------------
* 
* All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
******************************************************************************
-->
<template>
  <div :style="computedWrapperStyle">
    <div>
      <ul>
        <!-- ツリーアイテム -->
        <TreeItem
          v-model="inputValue"
          :item="searchTree"
          :level="1"
          :inject-key="TREE_VALUE_CHANGER"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeItem from '@/components/molecules/TreeItem.vue'

import type { ComponentCommonProperty, SearchTree } from '@/types/components'

import { ref, provide } from 'vue'
import { useVModel } from '@/utils/hooks'
import { computed, type CSSProperties } from 'vue'
import { calculatePositionStyle } from '@/utils'

const ROOT_NODE_NAME = '* 工場・在庫場所コード:'
const CHILD_NODE_NAME = '* 在庫場所コード：'
const AREA_NODE_NAME = '* エリアコード：'
const ZONE_NODE_NAME = '* ゾーンコード:'

const props = withDefaults(
  defineProps<
    ComponentCommonProperty & {
      modelValue?: string
    }
  >(),
  {},
)

// x,yによって、位置を設定する
const computedWrapperStyle = computed<CSSProperties>(() => ({
  ...calculatePositionStyle(props.x, props.y),
}))

// 入力値
const inputValue = useVModel(props, 'modelValue')

// ツリー値変更用のシンボル
const TREE_VALUE_CHANGER = Symbol('treeValueChanger')

// ツリーデータ
const searchTree = ref<Readonly<SearchTree.Node>>({
  value: '',
  id: 1,
  name: ROOT_NODE_NAME,
  children: [
    {
      value: '',
      id: 2,
      name: CHILD_NODE_NAME,
      children: [
        {
          value: '',
          id: 3,
          name: AREA_NODE_NAME,
          children: [
            {
              value: '',
              id: 4,
              name: ZONE_NODE_NAME,
            },
          ],
        },
      ],
    },
  ],
})

// ツリー値変更関数を提供
provide(TREE_VALUE_CHANGER, (id: number, value?: string | number) => {
  value &&
    typeof value === 'string' &&
    modifyNodeValue(searchTree.value, id, value)
})

// ID によるノード検索
function findNodeById(
  root: SearchTree.Node,
  id: number,
): SearchTree.Node | undefined {
  if (root.id === id) {
    return root
  }
  if (root.children) {
    for (const child of root.children) {
      const foundNode = findNodeById(child, id)
      if (foundNode) {
        return foundNode
      }
    }
  }
  return undefined
}

// ノード値変更
function modifyNodeValue(
  root: SearchTree.Node,
  id: number,
  newValue: string,
): void {
  const nodeToModify = findNodeById(root, id)

  if (nodeToModify) {
    nodeToModify.value = newValue
  }
}
</script>
