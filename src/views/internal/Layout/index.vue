<template>
  <div class="screen_base screen_size screen_border J_screen_layout reset">
    <slot></slot>
    <template v-if="isDev">
      <DebugLogger />
    </template>
  </div>
</template>

<script setup lang="ts">
import DebugLogger from './DebugLogger.vue'

const isDev = import.meta.env.DEV
</script>

<style scoped>
.screen_base {
  position: relative;
  padding-bottom: var(--panel-padding);
}
.screen_size {
  /* 業務画面標準領域は 1046×684px  */
  --_default-height: 684px;
  --_default-width: 1034px;
  width: var(--_default-width);
  height: var(--_default-height);
  min-height: var(--_default-height);
}
.screen_border {
  outline: var(--frame-gap) solid black;
  margin: var(--frame-gap);
}
.reset *,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
