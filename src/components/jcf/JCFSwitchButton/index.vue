<template>
  <div :data-item-id="id" :data-component-name="EComponentName.JCFSwitchButton">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import type { JCFSwitchButtonProps } from './types'

defineOptions({
  name: EComponentName.JCFSwitchButton,
})

const props = defineProps<JCFSwitchButtonProps>()

const id = props.id
</script>

<style scoped></style>
