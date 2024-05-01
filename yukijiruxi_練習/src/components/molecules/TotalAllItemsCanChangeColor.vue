<template>
  <ItemWrapper v-bind="props">
    <div class="total-all-items">
      <div>全</div>
      <div class="count-value">
        <slot>{{ countValue }}</slot>
      </div>
      <div>件</div>
    </div>
  </ItemWrapper>
</template>
<script setup lang="ts">
import type { ItemWrapperProperty } from '@/types/components'

import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description カウント値 */
      countValue: number
      /** @description カウント値の色 */
      countValueColor?: string
    }
  >(),

  {
    /** @description カウント値の色のデフォルト値を設定 */
    countValueColor: 'var(--color-black)',
  },
)
</script>

<style scoped>
.total-all-items {
  display: flex;
  position: absolute;
}
.count-value {
  color: v-bind('countValueColor');
  margin-left: 10px;
  margin-right: 10px;
}
</style>
