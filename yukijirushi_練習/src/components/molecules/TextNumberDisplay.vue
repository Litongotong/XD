<template>
  <ItemWrapper v-bind="props">
    <div class="text-wrapper">
      <span v-for="(item, index) of data" :key="index.toString()">
        {{ item }}</span
      >
    </div>

    <span>{{ textValue?.toString() }}</span>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description　配列は表示する4つの値　*/
      data?: string[] | number[]
      /** @description　結果の値　*/
      textValue?: number | string
    }
  >(),

  {
    data: () => ['', '', '', ''],
  },
)
</script>

<style scoped>
.text-wrapper {
  display: inline-flex;
  vertical-align: middle;
  gap: var(--standard-gap);
}
.text-wrapper > span {
  text-align: end;
  display: inline-block;
  min-width: 2.5rem;
}
.text-wrapper > span:not(:last-child)::after {
  content: '-';
  display: inline-block;
  margin: 0 0 0 var(--standard-gap);
}

.text-wrapper > span:last-child {
  min-width: 1.5rem;
}
</style>
