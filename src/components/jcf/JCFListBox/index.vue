<template>
  <div :data-component-name="EComponentName.JCFListBox">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

defineOptions({
  name: EComponentName.JCFListBox,
})

// TODO
</script>

<style scoped></style>
