<template>
  <span class="item-wrapper" :style="computedWrapperStyle">
    <BaseLabel class="label" v-bind="props" :style="computedLabelStyle" />
    <span class="items" :style="computedItemsStyle"><slot></slot></span>
  </span>
</template>

<script setup lang="ts">
import BaseLabel from './BaseLabel.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { ensureUnit, calculatePositionStyle } from '@/utils'
import { computed, type CSSProperties } from 'vue'

const props = withDefaults(defineProps<ItemWrapperProperty>(), {
  height: 'var(--standard-height)',
  itemGap: 'var(--standard-gap)',
})

//部品全体的スタイル
const computedWrapperStyle = computed<CSSProperties>(() => ({
  display: props.invisible ? 'none' : 'inline-flex',
  height: ensureUnit(props.height),
  width: ensureUnit(props.width),
  ...calculatePositionStyle(props.x, props.y),
}))

//テキスト文字とコロンのスタイル
const computedLabelStyle = computed<CSSProperties>(() => ({
  display: !props.label ? 'none' : 'inline-flex',
}))

//コロン以後部分のスタイル
const computedItemsStyle = computed<CSSProperties>(() => ({
  border: props.isShowBorderLine ? 'var(--base-border) ' : 'none',
  width: ensureUnit(props.borderLineWidth),
  height: ensureUnit(props.borderLineHeight),
  // 項目の間の隙間
  gap: ensureUnit(props.itemGap),
}))
</script>

<style scoped>
.item-wrapper {
  align-items: center;
  height: var(--standard-height);

  /* 横並び垂直ずれ対処 https://qiita.com/okalog/items/b3e9c344ce0bacdcd5d0 */
  vertical-align: middle;
}

.items {
  align-items: center;
  display: inline-flex;
  gap: var(--standard-gap);
  height: inherit;
  vertical-align: middle;
  width: inherit;
}
</style>
