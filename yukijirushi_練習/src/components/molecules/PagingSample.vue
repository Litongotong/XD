<template>
  <ItemWrapper v-bind="props">
    <div class="paging_group">
      <div class="current_page">{{ currentPage }}</div>
      <label>-</label>
      <div class="current_count">{{ currentCount }}</div>
      <label>/</label>
      <div class="total_count">{{ totalCount }}</div>
      <label>件</label>
    </div>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 現在表示されているページ */
    currentPage: number
    /** @description 現在表示されているページの件数 */
    currentCount: number
    /** @description 全件数 */
    totalCount: number
  }
>()
</script>

<style scoped>
.current_page,
.current_count,
.total_count {
  margin-right: 1rem;
  text-align: right;
  width: 5rem;
}

.paging_group {
  display: flex;
  align-items: center;
}
</style>
