<template>
  <div class="table-wrapper" :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { ComponentCommonProperty } from '@/types/components'

import { calculatePositionStyle, ensureUnit } from '@/utils'
import { computed, type CSSProperties } from 'vue'

const props = defineProps<ComponentCommonProperty>()

const computedStyle = computed<CSSProperties>(() => ({
  height: ensureUnit(props.height),
  width: ensureUnit(props.width),
  ...calculatePositionStyle(props.x, props.y),
}))
</script>

<style scoped>
.table-wrapper {
  max-width: 96%;
  /* 
    overflow のデフォルトは visible で、内容が max-height を超えても  
    max-height 分の内容が表示されるだけでスクロールバーが出ない。  
    auto に設定すれうばスクロールバーが出る。
  */
  overflow: auto;
}
</style>
