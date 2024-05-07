<template>
  <div class="_box">
    <div :style="dialogStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CSSProperties } from 'vue'

const props = defineProps<{
  width?: number
  height?: number
}>()

const dialogStyle: CSSProperties = {
  width: props.width ? `${props.width}px` : '100%',
  height: props.height ? `${props.height}px` : '100%',
}
</script>

<style scoped>
._box {
  width: 100%;
  height: 100%;
}
</style>
