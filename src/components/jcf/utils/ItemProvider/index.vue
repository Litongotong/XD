<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provider } from '@/lib/adapter/provider'

defineOptions({
  name: 'ItemProvider',
})

const props = defineProps<{ id?: string }>()

if (props.id?.length) {
  const getItemId = () => {
    return props.id!
  }
  provider.provide.item(getItemId)
}
</script>
