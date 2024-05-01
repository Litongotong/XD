<template>
  <ItemWrapper v-bind="props">
    <div class="button-group">
      <ButtonExtend
        v-for="button in buttons"
        :button-title="button.title"
        :disabled="button.disabled"
        :button-height="button.height"
        :button-width="button.width"
        @on-click="button.onClick"
      />
    </div>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { Button } from '@/types/components'

const props = defineProps<{
  /** @description ボタンの設定 */
  buttons?: Button.Config[]
}>()
</script>

<style scoped>
.button-group {
  display: inline-flex;
  vertical-align: middle;
  gap: var(--standard-gap);
}
</style>
