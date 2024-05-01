<template>
  <div class="header-title-div">
    <text class="header-title-text">{{ pageName }}</text>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  /** @description タイトル名 */
  pageName: string
}>()
</script>
