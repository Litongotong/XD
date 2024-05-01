<template>
  <ItemWrapper v-bind="props">
    <input
      type="text"
      v-model="value"
      class="search-input"
      :disabled="disabled"
      :style="computedInputStyle"
      :maxlength="maxlength"
    />

    <ButtonExtend
      :button-title="buttonLabel"
      :disabled="disabled"
      :button-width="buttonWidth"
      @on-click="handleClick"
    />

    <span>{{ result }}</span>
  </ItemWrapper>
</template>

<script setup lang="ts">
import type { ItemWrapperProperty } from '@/types/components'

import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import { ensureUnit } from '@/utils'
import { RegexpRules } from '@/utils/regexp-rules'
import { useVModel } from '@/utils/hooks'
import { computed, watch, type CSSProperties } from 'vue'
import { HTMLEvents } from '@/enums'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      disabled?: boolean
    } & /** 入力欄 */ {
      type?: 'text' | 'number'
      modelValue?: string | number
      inputWidth?: string | number
      maxLength?: string | number
    } /** 検索ボタン */ & {
      buttonLabel?: string
      buttonWidth?: string | number
    } /** 検索結果ラベル */ & {
      result?: string
    }
  >(),

  {
    /** @description ボタンのラベルのデフォルト値を設定 */
    buttonLabel: '検索',
    /** @description 入力欄のタイプのデフォルト値を設定 */
    type: 'text',
  },
)

const value = useVModel(props, 'modelValue')

// 検索結果を計算
const result = computed<string>(() => props.result ?? '')

// 最大長を計算
const maxlength = computed<number>(() => Number(props.maxLength) ?? 100)

// 入力欄のタイプが数値かどうかを計算
const isNumber = computed<boolean>(() => props.type === 'number' ?? false)

// 入力欄のスタイルを計算
const computedInputStyle = computed<CSSProperties>(() => ({
  width: ensureUnit(props.inputWidth),
}))

//数字入力欄について、入力した文字が数字でない場合、数字以外の部分を削除する。
//例：'1234a56c' => '123456'
watch(value, (newValue) => {
  if (isNumber.value && newValue) {
    const inputRule = RegexpRules.NUMBER_ONLY
    if (inputRule.test(newValue.toString())) {
      value.value = newValue.toString().replace(inputRule, '')
    }
  }
})

const EVENT = {
  CLICK_BUTTON: 'click-button',
}

const emit = defineEmits<{
  (event: typeof EVENT.CLICK_BUTTON, search: string): void
}>()

function handleClick() {
  const search = value.value?.toString() ?? ''
  emit(HTMLEvents.CLICK, search)
}
</script>

<style scoped>
.text-input-button-wrapper {
  display: flex;
  align-items: center;
}

.search-input {
  height: var(--standard-height);
  box-sizing: border-box;
}
</style>
