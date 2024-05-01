<template>
  <ItemWrapper v-bind="props">
    <textarea
      class="base-textarea"
      rows="3"
      @keydown="preventEnterKey"
      @input="handleInput"
      v-model="inputedValue"
      :maxlength="maxLength"
    ></textarea>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import type { ItemWrapperProperty } from '@/types/components'

import ItemWrapper from './ItemWrapper.vue'

import { HTMLEvents } from '@/enums'
import { ensureUnit } from '@/utils'

import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 入力値の属性 */
      value: string
      /** @description  テキストエリア幅の属性 */
      width: string
      /** @description テキストエリア高さの属性 */
      height: string
      /** @description 最大入力可能文字数 */
      maxLength?: number
    }
  >(),
  { value: 'temp' },
)

// useVModelを追加する
const inputedValue = useVModel(props, 'value')

const EVENT = {
  INPUT_CHANGE: HTMLEvents.INPUT,
}

const emit = defineEmits<{
  (event: typeof EVENT.INPUT_CHANGE, value: string): void
}>()

// 改行を禁止する
function preventEnterKey(event: KeyboardEvent) {
  if (event.key == 'Enter') {
    event.preventDefault()
  }
}

// 入力が変更されたときに呼び出される関数
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const newValue = target.value
  emit(EVENT.INPUT_CHANGE, newValue)
}
</script>

<style scoped>
.base-textarea {
  box-sizing: border-box;
  width: v-bind('ensureUnit(props.width)');
  height: v-bind('ensureUnit(props.height)');
  font-size: var(--font-size-12);
  color: var(--color-black);
  resize: none !important;
  box-shadow: var(--shadow-input);
  line-height: 15px;
  /* todo:スクロール常に表示するように */
}
</style>
