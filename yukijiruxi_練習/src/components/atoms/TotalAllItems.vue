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

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 件数 */
    countValue?: number | string
  }
>()
</script>

<style scoped>
.total-all-items {
  align-items: center;
  display: flex;
  position: absolute;
}
.count-value {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
