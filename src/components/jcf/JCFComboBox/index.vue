<template>
  <div
    :style="commonStyle"
    :data-item-id="id"
    :data-component-name="EComponentName.JCFComboBox"
  >
    <select
      v-model="selectedElementValue"
      @change="onSelectedChange"
      :disabled="isDisabled"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import type { JCFComboBoxProps } from './types'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'

import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { getInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'
import { Adapter } from '@/lib/adapter/adapter'
import { getRaw } from '@/utils/vue/getRaw'

// 部品名の明記
defineOptions({
  name: EComponentName.JCFComboBox,
})

const adapter = Adapter.create()

// 部品 props
const props = defineProps<JCFComboBoxProps>()
const id = props.id

// 部品データを用意する
const instance = getInstance<JCFComboBoxData>(props)

const isDisabled = computed(() => {
  const usingEnabled = instance ? instance.enabled.value : props.enabled
  return usingEnabled === false
})

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  // 文字選択不可にする
  style.userSelect = 'none'
  return style
})

// 最初に選択された要素のIDを検索し、なければ配列の最初の要素のIDを使用
const selectedElementValue = instance
  ? instance.value
  : ref<string | undefined>(undefined)

const setDefaultSelectedElementValue = () => {
  const list = instance
    ? instance.selectableElements.value
    : props.selectableElements
  if (Array.isArray(list)) {
    const target = list.find((i) => {
      return getRaw(i.selected)
    })
    if (target) {
      const id = getRaw(target.id)
      if (!selectedElementValue.value) {
        selectedElementValue.value = getRaw(id) as string
      }
    }
  }
}
setDefaultSelectedElementValue()

// watch instance change and reset default value
if (instance) {
  watch(() => instance.selectableElements, () => {
    setDefaultSelectedElementValue()
  }, { deep: true })
}

const actionCode = props.selectedActionCode

// selectedをリアルタイムに更新する
const onSelectedChange = (e: Event) => {
  const newValue = (e.target as HTMLSelectElement).value
  const optionsList = instance
    ? instance.selectableElements.value || []
    : (props.selectableElements || [])
  optionsList.forEach((i) => {
    const isSelected = newValue === getRaw(i.id)
    i.selected = isSelected
  })
  // dispatch action
  if (actionCode?.length) {
    adapter.extra.wrap({
      actionCode,
      itemId: id,
    })
  }
}

const fallbackLabel = props.text || ''

const toOptions = (selectableElements: JCFSelectableElement[]) => {
  return selectableElements.map((elm) => {
    const usingLabel = getRaw(elm.text) || fallbackLabel

    return {
      label: usingLabel,
      value: getRaw(elm.id)
    }
  })
}
const options = computed(() => {
  if (!instance) {
    if (props.selectableElements?.length) {
      return toOptions(props.selectableElements)
    }
    return []
  }
  const selectableElements = instance.selectableElements
    .value as any as JCFSelectableElement[]
  const opts = toOptions(selectableElements)
  return opts as any[]
})
</script>

<style scoped>
select {
  height: 100%;
  width: 100%;
  font-size: inherit;
}
</style>
