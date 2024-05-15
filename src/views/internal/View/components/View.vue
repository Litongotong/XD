<template>
  <Layout>
    <Screen
      :screen-id="view.screen.screenID"
      :style="view.screen.style"
      :key="view.screen.screenID"
    >
      <Frame
        v-for="item in view.frame.components"
        :key="item.key"
        :frame-id="item.frameID"
        :panel-id="item.panelID"
        :style="item.style"
      >
        <component :is="item.component"></component>
      </Frame>
    </Screen>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../../Layout/index.vue'
import Frame from './scope/Frame.vue'
import Screen from './scope/Screen.vue'
import { useView } from '@/routes/view/useView'

const view = useView()
</script>
