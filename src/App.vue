<template>
  <template v-if="isPrepared">
    <RouterView></RouterView>
  </template>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { FileSystem } from '@/utils/filesystem';
import { createContext } from '@/lib/adapter/hooks';
import { useView } from '@/routes/view/useView';
import { Dev } from '@/lib/adapter/dev';
import { MsisDebug } from './utils/debug/log';

const view = useView()
const isPrepared = ref(false)

onBeforeMount(async () => {
  MsisDebug.log('App onBeforeMount')

  // init global db
  await FileSystem.init()

  // create global context
  const insMap = createContext()
  view.system.setGlobalInstance(insMap)

  // mock
  if (import.meta.env.DEV) {
    const devClass = new Dev()
    devClass.login()
  }

  isPrepared.value = true
  MsisDebug.log('App onBeforeMount end, prepared')
})
</script>