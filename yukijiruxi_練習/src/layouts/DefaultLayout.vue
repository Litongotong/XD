<template>
  <main class="main">
    <div class="main-wrapper">
      <div class="header-layout">
        <DefaultHeader />
      </div>

      <RouterView>
        <template #default="{ Component, route }">
          <transition :name="(route.name as string)" mode="out-in">
            <div class="content-layout" ref="contentRef">
              <div>
                <component :is="Component" :key="route.fullPath" />
              </div>
            </div>
          </transition>
        </template>
      </RouterView>

      <div class="footer-layout">
        <DefaultFooter />
      </div>
    </div>

    <ConfirmationDialog />
  </main>
</template>

<script lang="ts" setup>
import ConfirmationDialog from '@/components/molecules/ConfirmationDialog.vue'
import DefaultHeader from '@/components/organisms/DefaultHeader/index.vue'
import DefaultFooter from '@/components/organisms/DefaultFooter.vue'

import { useDialog } from '@/stores/dialog'

const { setShowDialog } = useDialog()
setShowDialog(false)
</script>

<style scoped>
.header-layout {
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-layout-background);
  border-bottom: var(--layout-border);
  box-sizing: border-box;
  padding: 0 0 0 var(--standard-gap);
}

.content-layout {
  width: 100%;
  height: var(--content-height);
  position: relative;
  box-sizing: border-box;
  padding: 0 0 0 var(--standard-gap);
  margin: 0 0 0 var(--standard-gap);
}

.footer-layout {
  width: 100%;
  height: var(--footer-height);
  border-top: var(--layout-border);
  box-sizing: border-box;
  padding: 0 0 0 var(--standard-gap);
}
</style>
