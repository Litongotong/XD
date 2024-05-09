<template>
  <button
    :data-item-id="id"
    :data-component-name="EComponentName.JCFPushButton"
    :style="commonStyle"
    class="new_button_style center"
    @click="onClick"
    :data-name="name"
    :tabindex="isDisableFocus ? -1 : undefined"
    :disabled="isDisabled"
  >
    <img
      v-if="backgroundImage"
      :src="backgroundImage"
      :style="backgroundImageStyle"
    />

    <div class="text_box">
      <span :style="labelStyle">{{ text }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { JCFPushButtonProps } from './types'
import type { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'

import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { getInstance } from '../utils/instance'
import { calculateCommonStyle } from '../utils/transform'
import { computed } from 'vue'
import { Adapter } from '@/lib/adapter/adapter'
import { toPoint, toRectangle } from '../utils/common'

defineOptions({
  name: EComponentName.JCFPushButton,
})

const logic = Adapter.create()

// 部品 props
const props = defineProps<JCFPushButtonProps>()

const id = props.id

const autoWrap = props.autoTurn
const isDisableFocus = props.focusable === false

// 部品データを用意する
const instance = getInstance<JCFPushButtonData>(props)

const isDisabled = computed(() => {
  const usingEnabled = instance ? instance.enabled.value : props.enabled
  return usingEnabled === false
})

const name = props.name?.length ? props.name : undefined

// background image
const backgroundImage = props.image
const backgroundImageStyle = computed(() => {
  if (!props.image || !props.imageRegion) {
    return {}
  }
  const css = toRectangle(props.imageRegion)
  return css
})

// label
const labelStyle = computed(() => {
  if (!props.labelPosition) {
    return {}
  }
  const css = toPoint(props.labelPosition)
  return css
})

// ボタン文字を計算する
const fallbackText = props.label || ''
const text = computed(() => {
  return instance?.value?.value || fallbackText
})

// スタイルを計算する
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })

  if (autoWrap) {
    style.flexWrap = 'wrap'
    style.whiteSpace = 'pre-wrap'
  }

  if (isDisabled.value) {
    style.color = 'var(--color-light-gray)'
  }

  return style
})

// ボタンを押下する
const onClick = () => {
  const pushedActionCode = props?.pushedActionCode
  if (!pushedActionCode?.length) {
    return
  }
  logic.extra.wrap({
    actionCode: pushedActionCode,
    itemId: id,
  })
}
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  white-space: nowrap;
}
.new_button_style {
  color: var(--jcf-button-color);
  border: var(--jcf-button-border);
  box-shadow: var(--jcf-button-shadow);
  cursor: pointer;
  font-size: inherit;
  user-select: none;
}
.new_button_style:disabled {
  cursor: not-allowed;
  color: var(--jcf-button-disabled-color);
}
.new_button_style:active:not(:disabled) {
  box-shadow: none;
  transform: translateY(2px);
}
.text_box {
  position: relative;
  display: flex;
  align-items: center;
}
</style>
