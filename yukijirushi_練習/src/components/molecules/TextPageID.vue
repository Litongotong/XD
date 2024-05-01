<template>
  <ItemWrapper v-bind="props">
    <span class="text-page-id">{{ pageId }}</span>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description　画面ID　*/
      pageId?: string
    }
  >(),

  {
    pageId: '',
  },
)
</script>

<style scoped>
.text-page-id {
  color: var(--color-light-gray);
}
</style>
