<template>
  <ItemWrapper v-bind="props">
    <input
      class="base-checkbox"
      type="checkbox"
      v-model="payload"
      :disabled="disabled"
      :style="dynamicCheckboxStyle"
      :value="value"
    />
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { computed, type StyleValue } from 'vue'
import { ensureUnit } from '@/utils'
import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description チェック状態又はチェック済みリスト */
    modelValue?: boolean | any[]
    /** @description 入力禁止状態 */
    disabled?: boolean
    /** @description サイズ */
    size?: string
    /** @description 背景色 */
    backgroundColor?: string
    /** @description エラー状態 */
    hasError?: boolean
    /** @description チェックボックス用の値 */
    value?: string | number
  }
>()

const payload = useVModel(props, 'modelValue')

const computedSize = computed<string | undefined>(() =>
  props.size ? ensureUnit(props.size) : 'var(--base-checkbox-dafult-size)',
)

const dynamicCheckboxStyle = computed<StyleValue>(() => {
  let background: string

  // 非活性の場合、背景色はグレー
  if (props.disabled) {
    background = 'var(--color-font-disabled)'
  } else {
    // 背景色を設定する場合、背景色は設定された色
    if (props.backgroundColor) {
      background = props.backgroundColor
    } else {
      // ディフォルト背景色を設定する
      background = 'var(--color-white)'
    }

    // エラーの場合、背景色はピンク
    if (props.hasError) {
      background = 'var(--color-error)'
    }
  }

  return {
    background,
    height: computedSize.value,
    width: computedSize.value,
  }
})
</script>

<style scoped>
.base-checkbox {
  all: unset;
  border: var(--base-checkbox-border);
  display: inline-block;
  line-height: 1;
}

.base-checkbox:focus {
  outline: var(--base-border);
}

.base-checkbox::after {
  align-items: center;
  content: '';
  color: var(--color-black);
  cursor: v-bind('disabled ? "normal" : "pointer"');
  display: inline-flex;
  justify-content: center;
  font-size: v-bind('computedSize');
  height: inherit;
  width: inherit;
}

.base-checkbox:checked::after {
  content: '✔';
}
</style>
