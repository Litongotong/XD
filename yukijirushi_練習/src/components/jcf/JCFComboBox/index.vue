<template>
  <div
    :style="commonStyle"
    :data-item-id="id"
    :data-component-name="EComponentName.JCFComboBox"
  >
    <select @change="updateSelection" :disabled="!enabled">
      <option
        v-for="element in processedSelectableElements"
        :key="element.id.value"
        :value="element.id.value"
        :selected="element.selected.value"
      >
        {{ element.text }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import type { JCFComboBoxProps } from './types'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'

import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { installInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'

// 部品名の明記
defineOptions({
  name: EComponentName.JCFComboBox,
})

// 部品 props
const props = withDefaults(defineProps<JCFComboBoxProps>(), {
  enabled: true,
  selectableElements: Array as PropType<JCFSelectableElement[]>,
})
const id = props.id

// 部品データを用意する
const instance = installInstance<JCFComboBoxData>(
  EComponentName.JCFComboBox,
  props,
)

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  return style
})

// 最初に選択されたオプションのIDを検索し、なければ配列の最初の要素のIDを使用
const selectedElementValue = ref(
  props.selectableElements?.find((el) => el.selected)?.id ??
    props.selectableElements?.[0]?.id ??
    '',
)

// オプションが更新されたとき、新しいオプションIDをイベントオブジェクトから取得する
const updateSelection = (event) => {
  const newSelectedId = event.target.value

  props.selectableElements.forEach((el) => {
    el.selected.value = el.id.value === newSelectedId
  })
}

// 選択可能な要素リストを処理し、テキストからシングルクォートとダブルクォートを削除し、selected情報を追加する
const processedSelectableElements = computed(() => {
  return props.selectableElements.map((el) => {
    const cleanedText = el.text.value.replace(/['"]+/g, '')
    return {
      ...el,
      text: cleanedText,
      selected: ref(el.selected.value),
    }
  })
})
</script>

<style scoped>
select {
  height: 100%;
  width: 100%;
  font-size: inherit;
}
</style>
