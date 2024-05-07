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
  width: 1000px;
  height: 648px;
  min-height: 648px;
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
