<template>
  <div v-if="view.system.status.isInited">
    <template v-if="view.dialog.visible">
      <Dialog :height="view.dialog.height" :width="view.dialog.width">
        <View key="dialog"></View>
      </Dialog>
    </template>
    <template v-if="!view.dialog.visible">
      <View key="normal"></View>
    </template>
  </div>
</template>

<script setup lang="ts">
import View from './components/View.vue'
import Dialog from './components/Dialog.vue'
import { useView } from '@/routes/view/useView'
import { onBeforeMount, watch } from 'vue'
import { useRoute } from 'vue-router'

const view = useView()
const route = useRoute()
const getPageId = () => route.params.pageId as string

const init = async () => {
  const pageId = getPageId()
  view.system.status.setInited(false)
  await view.system.action.event.onSystemStart(pageId)
  view.system.status.setInited(true)
}
onBeforeMount(async () => {
  await init()
})

watch(
  () => getPageId(),
  async () => {
    await init()
  },
)
</script>
