<template>
  <div class="base-divider" :style="computedStyle"></div>
</template>

<script lang="ts" setup>
import { calculatePositionStyle } from '@/utils'
import { computed, type StyleValue } from 'vue'

const props = defineProps<{
  y?: number | string
  x?: number | string
}>()

/** @description 位置を計算する */
const computedStyle = computed<StyleValue>(() => ({
  // 位置スタイルを計算する
  ...calculatePositionStyle(props.x, props.y),
}))
</script>

<style scoped>
.base-divider {
  width: 1000px;
  margin: 0px 5px;
  border-bottom: 0.5px solid black;
  position: absolute;
}
</style>
