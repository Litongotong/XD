<template>
  <ItemWrapper v-bind="props">
    <a class="link" :href="url" @click="handleClick" :target="target">{{
      text
    }}</a>
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { HTMLEvents } from '@/enums'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      target?: '_blank' | '_self' | '_parent' | '_top'
      text: string
      url?: string
    }
  >(),

  { url: 'https://example.com' }
)

const EVENT = {
  CLICK: HTMLEvents.CLICK,
}
const emit = defineEmits<{
  (event: typeof EVENT.CLICK): void
}>()

function handleClick(event: Event) {
  emit(EVENT.CLICK)
}
</script>

<style scoped>
.link {
  color: var(--color-link-text);
  font-weight: bold;
  text-decoration: underline;
}
</style>
