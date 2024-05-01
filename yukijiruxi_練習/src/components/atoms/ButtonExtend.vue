<template>
  <ItemWrapper v-bind="props">
    <button
      class="base-button"
      :class="{ 'base-button-disabled': disabled }"
      :disabled="!!disabled"
      @click="handleClick"
    >
      {{ buttonTitle }}
    </button>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from './ItemWrapper.vue'

import type { Button, ItemWrapperProperty } from '@/types/components'

import { ensureUnit } from '@/utils'
import { computed } from 'vue'
import { HTMLEvents } from '@/enums'

const props = defineProps<ItemWrapperProperty & Button.Property>()

/** @description ボタンの高さを計算 */
const computedHeight = computed<string | undefined>(() =>
  props.buttonHeight
    ? ensureUnit(props.buttonHeight)
    : 'var(--base-button-height)',
)

/** @description ボタンの幅を計算 */
const computedWidth = computed<string | undefined>(() =>
  props.buttonWidth
    ? ensureUnit(props.buttonWidth)
    : ' var(--base-button-width)',
)

const emit = defineEmits<{
  (event: HTMLEvents.CLICK): void
}>()

// ボタンクリック時の処理
function handleClick() {
  emit(HTMLEvents.CLICK)
}
</script>

<style scoped>
.base-button {
  align-items: center;
  box-shadow: var(--shadow-button);
  display: flex;
  font-size: var(--base-button-font-size);
  height: v-bind(computedHeight);
  justify-content: center;
  padding: 0;
  width: v-bind(computedWidth);
}

.base-button-disabled {
  color: var(--color-font-disabled);
}
</style>
