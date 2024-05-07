<template>
  <!--
    必須属性：
    data-item-id -> Item ID 
    data-compoennt-name -> 部品名
  -->
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
        :disabled="disabled"
        v-model="instance!.value.value"
        class="input"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { JCFFieldStringProps } from './types'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { computed } from 'vue'
import { installInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'
import { JFLineType } from '@/lib/jcf/gui/JFLineType'

// 部品名の明記
defineOptions({
  name: EComponentName.JCFFieldString,
})

// 部品 props
const props = defineProps<JCFFieldStringProps>()

// 部品データを用意する
const instance = installInstance<JCFFieldStringData>(
  EComponentName.JCFFieldString,
  props,
)

/** 部品が編集可否 */
const isInputMode =
  props.inputMode !== undefined && props.borderType !== JFLineType.NOTHING
/** コピー不可 */
const canNotCut = props.editable === false
/** 活性化 */
const disabled = props.enabled === false
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

  // more style handle
  // if (...) {
  //   style.backgroundColor = 'lightpink'
  // }

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
  padding: 0;
}

/* magic move */
.box :deep(+ button) {
  margin-left: 1px;
}
</style>
