<template>
  <div class="title-text">
    <BaseText :label="label" />
  </div>
</template>

<script lang="ts" setup>
import BaseText from '../atoms/BaseText.vue'
import { ensureUnit } from '@/utils'

defineProps<{
  label: string
  x?: string
  y?: string
}>()
</script>

<style scoped>
.title-text {
  position: absolute;
  top: v-bind('ensureUnit(y ?? "")');
  left: v-bind('ensureUnit(x ?? "")');
}
</style>
