<template>
  <ItemWrapper v-bind="props">
    <span class="success-message-text">{{ message }}</span>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description　表示する成功メッセージ　*/
      message: string
    }
  >(),

  {
    message: '',
  },
)
</script>

<style scoped>
.success-message-text {
  color: var(--color-message-success);
  font-size: var(--font-size-10-5);
  font-weight: var(--font-weight-common);
}
</style>
