<template>
  <ItemWrapper v-bind="props">
    <input
      class="base-input"
      type="text"
      :value="displayValue"
      :disabled="disabled"
      :style="customStyle"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ItemWrapper from './ItemWrapper.vue'

import type { CSS } from '@/types'
import type { ItemWrapperProperty } from '@/types/components'
import type { StyleValue } from 'vue'

import { HTMLEvents } from '@/enums'
import { RegexpRules } from '@/utils/regexp-rules'
import {
  addThousandsSeparator,
  addZeorFirst,
  deleteComma,
  ensureUnit,
} from '@/utils'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description インプットボックス幅 */
      inputWidth?: string | number
      /** @description テキストの水平配置 */
      textAlign?: CSS.TextAlign
      /** @description 無効化 */
      disabled?: boolean
      /** @description モデル値 */
      modelValue?: string | number
      /** @description エラーの有無 */
      hasError?: boolean
      /** @description 処理の必要性 */
      needHandle?: boolean
      /** @description 1桁目がない或いはスペースの場合、0で補完するかどうか。　例：.33 =>0.33  */
      needAddZeroFirst?: boolean
      /** @description 新ルール用プロパティ　*/
      customRules?: RegExp
    }
  >(),

  {
    modelValue: '',
    hasError: false,
    needHandle: false,
    needAddZeroFirst: false,
  },
)
const inputedValue = useVModel(props, 'modelValue')
const displayValue = ref('')

watch(inputedValue, (newValue) => {
  // 入力された値を処理する
  const computedResults = computedFinalValue(newValue.toString())

  // 処理した値と表示値を同期する
  displayValue.value = computedResults
})

onBeforeMount(() => {
  //初期化の場合、3桁毎にカンマ「,」を付ける
  displayValue.value = props.needHandle
    ? addThousandsSeparator(inputedValue.value)
    : inputedValue.value.toString()
})

const regexpRule = computed(
  () => props.customRules ?? RegexpRules.NUMBER_INPUT_RULE,
)

const customStyle = computed<StyleValue>(() => {
  return {
    width: ensureUnit(props.width) ?? '100%',
    textAlign: props.textAlign ?? 'left',
    backgroundColor: props.hasError
      ? 'var(--color-error) '
      : 'var(--color-white)',
  }
})

const EVENT = {
  // 入力変更時のイベント
  INPUT_CHANGE: HTMLEvents.CHANGE,

  // フォーカスアウト時のイベント
  INPUT_BLUR: HTMLEvents.BLUR,
}

const emit = defineEmits<{
  (event: typeof EVENT.INPUT_CHANGE, value: string): void
  (event: typeof EVENT.INPUT_BLUR, value: string): void
}>()

function handleInput(event: Event) {
  const node = event.target as HTMLInputElement
  const nodeValue = node.value
  let finalValue = nodeValue.replace(regexpRule.value, '')

  //テーブル入力列の動作がおかしくなるので、inputedValueの値をここで付けない。
  displayValue.value = finalValue
  emit(EVENT.INPUT_CHANGE, finalValue)
}

function handleFocus(event: Event) {
  const node = event.target as HTMLInputElement
  const nodeValue = node.value
  let finalValue = nodeValue

  if (props.needHandle) {
    //処理必要な場合、フォカス時に「,」を取り除く
    finalValue = deleteComma(nodeValue)
  }

  inputedValue.value = finalValue
  displayValue.value = finalValue
}

function handleBlur(event: Event) {
  const node = event.target as HTMLInputElement
  const nodeValue = node.value

  // 入力された値を処理する
  const computedResults = computedFinalValue(nodeValue)

  displayValue.value = computedResults
  inputedValue.value = deleteComma(computedResults)
  emit(EVENT.INPUT_BLUR, computedResults)
}

// 入力された値を処理する
const computedFinalValue = (nodeValue: string): string => {
  //addZeorFirst:　1桁目を0で補完する
  let finalValue = props.needAddZeroFirst ? addZeorFirst(nodeValue) : nodeValue
  finalValue = finalValue.replace(regexpRule.value, '')

  if (props.needHandle) {
    //処理必要な場合、フォカスアウト時に3桁毎にカンマ「,」を付ける
    finalValue = addThousandsSeparator(finalValue)
  }

  // 月と日の数値は０入力の省略を許可し、項目脱出時に補完する
  if (
    finalValue &&
    (props.customRules == RegexpRules.MONTH_INPUT_RULE ||
      props.customRules == RegexpRules.DATE_INPUT_RULE)
  ) {
    return `0${finalValue}`.slice(-2)
  } else {
    return finalValue
  }
}
</script>

<style scoped>
.base-input {
  box-sizing: border-box;
  height: var(--standard-height);
  font: var(--font-family-default);
  font-size: var(--font-size-common);
  color: var(--color-font);
  border-color: var(--color-light-gray);
}
</style>
