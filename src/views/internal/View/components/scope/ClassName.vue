<template>
  <div
    :data-classinfo-panel="classInfo.panel"
    :data-classinfo-logic="classInfo.logic"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { IClassInfo } from '@/routes/interface'
import { provider } from '@/lib/adapter/provider'

const props = defineProps<{
  classInfo: IClassInfo
}>()

const getPanelClassName = () => {
  return props.classInfo.panel
}
const getLogicClassName = () => {
  return props.classInfo.logic
}
provider.provide.panelClassName(getPanelClassName)
provider.provide.logicClassName(getLogicClassName)
</script>

<style scoped></style>
