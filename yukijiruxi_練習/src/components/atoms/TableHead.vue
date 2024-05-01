<template>
  <th class="table-head" ref="tableHeadRef" v-bind="props">
    <div class="head-text">
      <slot></slot>
    </div>
    <span class="resizer" @pointerdown="startResize" @pointerup="stopResize" />
  </th>
</template>

<script setup lang="ts">
import { TABLE_COLUMN_WIDTH_MIX } from '@/config/components'
import type { CSS } from '@/types'
import type { Table } from '@/types/components'
import { onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<
    Table.HeadCommonProperty & {
      background?: string
      /** @description ヘッダのボーダーカラー */
      headBorderColor?: string
      /** @description ヘッダ文字の水平位置 */
      headTextAlign?: CSS.TextAlign
    }
  >(),
  {
    background: 'var(--table-head-background)',
    headBorderColor: 'var(--color-black)',
    headTextAlign: 'center',
  },
)

/** @description table head 元素 */
const tableHeadRef = ref<HTMLElement>()
/** @description table 元素 */
const tableRef = ref<HTMLElement>()

/** @description サイズ編集の錠 */
const isResizing = ref<boolean>(false)
/** @description ポインターの開始位置 */
const startX = ref<number>()
/** @description サイズ編集の錠 */
const columnStartWidth = ref<number>()

function startResize(event: PointerEvent): void {
  // サイズ編集を開錠
  isResizing.value = true

  // init start data
  startX.value = event.clientX

  if (tableHeadRef.value) {
    const headWidth = Math.floor(
      tableHeadRef.value.getBoundingClientRect().width,
    )

    columnStartWidth.value = headWidth
  }

  const parent = event.target as HTMLElement
  tableRef.value = parent.parentNode?.parentNode?.parentNode?.parentNode
    ?.parentNode as HTMLElement
}

function resize(event: PointerEvent) {
  if (isResizing.value && tableHeadRef.value) {
    const increment = event.clientX - (startX.value ?? 0)
    const newWidth = columnStartWidth.value! + increment

    // 列幅の合計値が表幅の設定値より少ない場合、レイアウト崩れを防ぐため、
    // ブラウザは `TABLE_COLUMN_WIDTH_MIX` を失効させる
    if (newWidth > TABLE_COLUMN_WIDTH_MIX) {
      tableHeadRef.value.style.width = newWidth + 'px'
    }
  }
}

function stopResize(): void {
  isResizing.value = false
}

onMounted(() => {
  document.addEventListener('pointermove', resize)
  document.addEventListener('pointerup', stopResize)
})
</script>

<style scoped>
.table-head {
  background: v-bind(background);
  box-sizing: border-box;
  border: var(--table-head-border);
  font-weight: unset;
  overflow: hidden;
  padding: unset;
  position: relative;
  user-select: none;
  white-space: pre;
  text-align: v-bind(headTextAlign);
}

.head-text {
  text-align: v-bind('headTextAlign');
  padding: 1px;
}
.table-head .resizer {
  display: inline-block;
  cursor: ew-resize;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 0.5rem;
}
</style>
