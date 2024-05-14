<template>
  <span v-html="text"></span>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'

const slots = useSlots()
const text = slots.default?.()?.[0]?.children || ''
</script>
