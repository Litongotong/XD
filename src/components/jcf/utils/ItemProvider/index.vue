<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provider } from '@/lib/adapter/provider'

defineOptions({
  name: 'ItemProvider',
})

const props = defineProps<{ id?: string }>()

const id = props?.id

if (id?.length) {
  provider.provide.item(id)
}
</script>
