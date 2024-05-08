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
        :disabled="!enabled"
        :style="commonStyle"
        v-model="inputedValue"
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
import { addThousandsSeparator, toRGB } from '../utils/common'
import { installInstance } from '../utils/instance'
import { calculateCommonStyle, transformToColor } from '../utils/transform'

// 部品名
defineOptions({
  name: EComponentName.JCFFieldLong,
})

// 部品 props
const props = defineProps<JCFFieldLongProps>()

// 部品データを用意する
const instance = installInstance<JCFFieldLongData, JCFFieldLongProps>(
  EComponentName.JCFFieldLong,
  props,
)

const inputedValue = ref(instance!.value.value)

watch(inputedValue, (newValue) => {
  let finalValue = newValue.toString()
  if (props.isYuki) {
    // YUKIFieldDoubleの場合、カンマを入力できないように制御する
    // const rule = /[^\d]+/g
    // finalValue = finalValue.replace(rule, '')
  }

  instance?.setValue(Number(finalValue))
})

const id = props.id

/** 部品が編集可否 */
const isInputMode = props.inputMode !== undefined

/** 編集不可時の表示値 */
const text = computed(() => {
  const fallback = props.value || ''
  return instance ? instance.value.value : fallback
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
  return style
})

// フォカス時に「,」を取り除く
const handleFocus = (event: Event): void => {
  const node = event.target as HTMLInputElement
  node.value = (instance ? instance.value.value : 0).toString()
}

// フォカスアウト時に3桁毎にカンマ「,」を付ける
const handleBlur = (event: Event): void => {
  const node = event.target as HTMLInputElement
  node.value = addThousandsSeparator(instance!.value.value)
}
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
  box-sizing: border-box;
}
</style>
