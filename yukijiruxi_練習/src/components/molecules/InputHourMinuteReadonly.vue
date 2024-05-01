<template>
  <ItemWrapper v-bind="props">
    <label>{{ hour }}時</label>
    <label>{{ minute }}分</label>
  </ItemWrapper>
</template>
<script lang="ts" setup>
import type { ItemWrapperProperty } from '@/types/components'

import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

const props = defineProps<
  ItemWrapperProperty & {
    hour: number | string
    minute: number | string
  }
>()
</script>
