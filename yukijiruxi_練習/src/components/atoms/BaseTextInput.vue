<template>
  <ItemWrapper v-bind="props">
    <input
     :autofocus="autoFocus" 
      class="base-input"
      type="text"
      :value="displayValue"
      :disabled="disabled"
      :style="customStyle"
      @input="handleInput"
      @blur="handleBlur"
    />
  </ItemWrapper>
</template>
  <!-- ref="inputRef" -->
<script lang="ts" setup>
import ItemWrapper from './ItemWrapper.vue'

import type { CSS } from '@/types'
import type { ItemWrapperProperty } from '@/types/components'

import { RegexpRules } from '@/utils/regexp-rules'
import { ensureUnit } from '@/utils'

import { computed, ref, type StyleValue, watchEffect,onMounted} from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 入力欄の幅　*/
      width?: string | number
      /** @description 文字の水平位置　*/
      textAlign?: CSS.TextAlign
      /** @description 使用不可　*/
      disabled?: boolean
      /** @description 入力値　*/
      modelValue?: string | number
      /** @description エラーフラグ　*/
      hasError?: boolean
      /** @description ハンドル処理フラグ　*/
      needHandle?: boolean
      /** @description 新ルール用プロパティ　*/
      customRules?: RegExp
      autoFocus?: boolean; 
    }
  >(),

  {
    modelValue: '',
    hasError: false,
    needHandle: false,
  },
)

// 実際の値とディスプレイの区別するため
const displayValue = ref('')
const inputedValue = useVModel(props, 'modelValue')

watchEffect(() => {
  displayValue.value = inputedValue.value.toString()
})

function handleInput(event: Event) {
  const node = event.target as HTMLInputElement
  let finalValue = node.value
  // displayValueの値を更新
  displayValue.value = finalValue
  // inputedValueの値を更新
  // inputedValue.valueの値はフォーマット前の値
  inputedValue.value = node.value
}

const regexpRule = computed(
  () => props.customRules ?? RegexpRules.TEXT_INPUT_RULE,
)

function handleBlur(event: Event) {
  const node = event.target as HTMLInputElement
  let finalValue = node.value

  if (props.needHandle) {
    //処理必要な場合、フォカスアウト時に入力ルール以外の部分を取り除く
    finalValue = finalValue.replace(regexpRule.value, '')
  }
  // displayValueの値を更新
  displayValue.value = finalValue
  // inputedValue.valueの値を更新
  // inputedValue.valueの値はフォーマット前の値
  inputedValue.value = node.value
}

const customStyle = computed<StyleValue>(() => {
  let backgroundColor: string
  // 非活性の場合、背景色はグレー
  if (props.disabled) {
    backgroundColor = 'var(--color-font-disabled)'
  } else {
    // ディフォルト背景色を設定する
    backgroundColor = 'var(--color-white)'
  }

  // エラーの場合、背景色はピンク
  if (props.hasError) {
    backgroundColor = 'var(--color-error)'
  }

  return {
    backgroundColor,
    width: props.width ? ensureUnit(props.width) : '100%',
    textAlign: props.textAlign ?? 'left',
  }
})
//focus
// const inputRef = ref<HTMLInputElement | null>(null)

// onMounted(() => {
//   // 在组件挂载后自动聚焦到输入框
//   if (inputRef.value) {
//     inputRef.value.focus()
//   }
// })
</script>

<style scoped>
.base-input {
  box-sizing: border-box;
  height: var(--standard-height);
  font: var(--font-family-default);
  font-size: var(--font-size-10-5);
  color: var(--color-font);
  border-color: var(--color-light-gray);
}
</style>
