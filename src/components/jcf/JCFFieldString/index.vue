<template>
  <div
    :style="commonStyle"
    :data-item-id="id"
    :data-component-name="EComponentName.JCFFieldString"
    class="center string box"
  >
    <template v-if="!isInputMode">
      {{ text }}
    </template>

    <template v-if="isInputMode">
      <input
        :maxlength="maxLength"
        :disabled="isDisabled"
        v-model="inputValue"
        @input="onInput"
        :readonly="canNotEdit"
        class="input"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { JCFFieldStringProps } from './types'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { computed, ref } from 'vue'
import { getInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'
import { getEnableTypeTransformer } from './format'
import { JFLineType } from '@/lib/jcf/gui/JFLineType'

// 部品名の明記
defineOptions({
  name: EComponentName.JCFFieldString,
})

// 部品 props
const props = defineProps<JCFFieldStringProps>()
const id = props.id

// 部品データを用意する
const instance = getInstance<JCFFieldStringData>(props)

const enableTypeTransformer = getEnableTypeTransformer(props.enableType)

const inputValue = instance ? instance.value : ref('')
const onInput = (e: InputEvent) => {
  const newValue = (e.target as HTMLInputElement).value
  const formattedValue = enableTypeTransformer(newValue)
  inputValue.value = formattedValue
}

/** 部品が編集可否 */
const isInputMode =
  props.inputMode !== undefined && props.borderType !== JFLineType.NOTHING

/** コピー不可 */
const canNotEdit = props.editable === false
/** 活性化 */
const isDisabled = computed(() => {
  const usingEnabled = instance ? instance.enabled.value : props.enabled
  return usingEnabled === false
})
/** 編集不可時の表示値 */
const text = computed(() => {
  const fallback = props.text || ''
  return instance ? instance.value.value : fallback
})

// 業務ロジック
const maxLength = props.maxLength

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })

  if (props.editable === false) {
    style.userSelect = 'none'
  }

  return style
})
</script>

<style scoped>
/** 部品個別のスタイル */
.center {
  display: flex;
  align-items: center;
}

.string {
  cursor: default;
}

.input {
  width: 100%;
  height: 100%;
  padding: 0 1px;
  background-color: inherit;
  border-width: 1px;
  border-radius: 2.5px;
}

/* magic move */
.box :deep(+ button) {
  margin-left: 1px;
}
</style>
