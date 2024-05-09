<template>
  <div class="screen_base screen_size screen_border J_screen_layout reset">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.screen_base {
  position: relative;
  padding-bottom: var(--panel-padding);
}
.screen_size {
  /* 80px + 534px + 64px === 678px */
  --_default-height: 678px; 
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
