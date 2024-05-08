<template>
  <div :data-item-id="id" :data-component-name="EComponentName.JCFListView">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import type { JCFListViewProps } from './types'

defineOptions({
  name: EComponentName.JCFListView,
})

const props = defineProps<JCFListViewProps>()

const id = props.id
</script>

<style scoped></style>
