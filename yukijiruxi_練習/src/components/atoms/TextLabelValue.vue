<template>
  <ItemWrapper
    class="label-value-div"
    v-bind="props"
    :label="label ?? label"
    :label-width="labelWidth ?? labelWidth"
  >
    <span v-for="data of list" class="text-value">{{ data }}</span>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { ensureUnit } from '@/utils'
import { computed } from 'vue'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 内容の背景色 */
    contentBackground?: string
    textValue1?: string
    textValue2?: string
    textValue3?: string
    textValue4?: string
    /** @description 内容の文字色 */
    contentColor?: string
    /** @description 内容文字フォントの太さ */
    contentFontWeight?: string
  }
>()

const list = computed(() => [
  props.textValue1,
  props.textValue2,
  props.textValue3,
  props.textValue4,
])
</script>

<style scoped>
.label-value-div {
  height: var(--standard-height);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: v-bind('ensureUnit(y)');
  left: v-bind('ensureUnit(x)');
}
.text-value {
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  background: v-bind('contentBackground');
  color: v-bind('contentColor');
  font-weight: v-bind('contentFontWeight');
}
</style>
