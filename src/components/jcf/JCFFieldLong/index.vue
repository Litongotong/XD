<template>
  <div :data-item-id="id" :data-component-name="EComponentName.JCFFieldLong">
    <template v-if="!isInputMode">
      <div class="flex-row center-right text" :style="commonStyle">
        {{ text }}
      </div>
    </template>

    <template v-else>
      <input
        class="base-input"
        type="text"
        :maxLength="maxLength"
        :disabled="isDisabled"
        :style="commonStyle"
        v-model="inputedValue"
        @input="onInput"
        @change="onChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { JCFFieldLongProps } from './types'
import type { JCFFieldLongData } from '@/lib/jcf/gui/JCFFieldLongData'

import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { computed, ref, watch } from 'vue'
import { toRGB } from '../utils/common'
import { getInstance } from '../utils/instance'
import { calculateCommonStyle, transformToColor } from '../utils/transform'
import { toLooseIntNumber } from '@/utils/number/toLooseNumber'
import { addThousandsSeparator } from '@/utils/number/separator'
import { clearString, clearStringButAllowComma } from './format'

// 部品名
defineOptions({
  name: EComponentName.JCFFieldLong,
})

// 部品 props
const props = defineProps<JCFFieldLongProps>()
const id = props.id
const isYuki = props.isYuki

// 部品データを用意する
const instance = getInstance<JCFFieldLongData>(props)

const isDisabled = computed(() => {
  const usingEnabled = instance ? instance.enabled.value : props.enabled
  return usingEnabled === false
})

const defaultValue = (instance ? instance.value.value : props.value) || 0
const inputedValue = ref<string>(defaultValue.toString())

const onInput = (e: Event) => {
  let newValue = (e.target as HTMLInputElement).value as string
  // clear
  if (isYuki) {
    newValue = clearString(newValue)
  } else {
    newValue = clearStringButAllowComma(newValue)
  }
  // sync to self
  if (inputedValue.value !== newValue) {
    inputedValue.value = newValue
  }
}

const onChange = (e: Event) => {
  const newValue = (e.target as HTMLInputElement).value as string
  const asNumber = toLooseIntNumber(newValue)

  // sync to self
  const asString = asNumber.toString()
  if (inputedValue.value !== asString) {
    inputedValue.value = asString
  }
  // sync to instance
  if (instance) {
    instance.setValue(asNumber)
  }
}

// watch instance
watch(
  () => instance?.value.value,
  (newValue) => {
    // sync to self
    const asNumber = toLooseIntNumber(newValue)
    const asString = asNumber.toString()
    inputedValue.value = asString
  },
)

// フォカス時に「,」を取り除く
const handleFocus = (): void => {
  const asNumber = toLooseIntNumber(inputedValue.value)
  inputedValue.value = asNumber.toString()
}

// フォカスアウト時に3桁毎にカンマ「,」を付ける
const handleBlur = (): void => {
  // ensure number
  const asNumber = toLooseIntNumber(inputedValue.value)
  const strWithSeparator = addThousandsSeparator(asNumber)
  inputedValue.value = strWithSeparator
}

/** 部品が編集可否 */
const isInputMode = props.inputMode !== undefined

/** 編集不可時の表示値 */
const fallbackText = props.value || ''
const text = computed(() => {
  return instance ? instance.value.value || fallbackText : fallbackText
})

// 業務ロジック
const maxLength = props.maxLength

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  //初期化時の背景色
  style.background = toRGB(transformToColor(props.equalBackground))
  //初期化時の文字揃えるを右寄せにする
  style.textAlign = 'right'

  if (props.editable === false) {
    style.userSelect = 'none'
  }

  return style
})
</script>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
}
.center-right {
  align-items: center;
  justify-content: right;
}
.base-input {
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
