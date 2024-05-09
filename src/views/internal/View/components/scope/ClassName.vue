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

provider.provide.panelClassName(props.classInfo.panel)
provider.provide.logicClassName(props.classInfo.logic)
</script>

<style scoped></style>
