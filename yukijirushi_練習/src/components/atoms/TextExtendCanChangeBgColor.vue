<template>
  <ItemWrapper v-bind="props">
    <span class="text-extend-can-change-bgcolor">{{ label }}</span>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from './ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { ensureUnit } from '@/utils'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 表示ラベル */
    label: string
    /** @description テキストサイズ */
    textSize: string
    /** @description テキスト色 */
    textColor: string
    /** @description 背景色 */
    backgroundColor: string
  }
>()
</script>

<style scoped>
.text-extend-can-change-bgcolor {
  font: var(--font-family-default);
  font-size: v-bind('ensureUnit(textSize)');
  color: v-bind('textColor');
  background-color: v-bind('backgroundColor');
}
</style>
