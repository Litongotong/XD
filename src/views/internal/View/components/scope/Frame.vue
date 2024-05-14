<template>
  <div
    class="_frame"
    :data-frame-id="props.frameId"
    :data-panel-id="props.panelId"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useSetup } from '@/lib/adapter/hooks'
import { provider } from '@/lib/adapter/provider'

const props = defineProps<{
  frameId: string
  panelId: string
}>()

const getFrameId = () => {
  return props.frameId
}
provider.provide.frame(getFrameId)

const { setupPanel } = useSetup()
setupPanel(props.panelId)
</script>

<style scoped>
._frame {
  position: relative;
  background-color: #fff;
}
</style>
