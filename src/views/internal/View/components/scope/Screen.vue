<template>
  <div :data-screen-id="props.screenId" class="_screen">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useSetup } from '@/lib/adapter/hooks'
import { provider } from '@/lib/adapter/provider'

const props = defineProps<{
  screenId: string
}>()

const getScreenId = () => {
  return props.screenId
}
provider.provide.screen(getScreenId)

const { setupScreen } = useSetup()
setupScreen(props.screenId)
</script>

<style scoped>
._screen {
  background-color: #000;
}
</style>
