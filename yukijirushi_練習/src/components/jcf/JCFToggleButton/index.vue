<template>
  <div :data-item-id="id" :data-component-name="EComponentName.JCFToggleButton">
    <template v-if="context">
      <div
        class="base-radio-button"
        :style="commonStyle"
        @click="onSelectedChange"
      >
        <input
          class="base-radio-button-input"
          type="radio"
          :checked="isSelected"
          :disabled="isDisabled"
        />
        <label class="radio-button-label">
          {{ label }}
        </label>
      </div>
    </template>
    <template v-else>
      <div
        class="base-checkbox-button"
        :style="commonStyle"
        @click="onSelectedChange"
      >
        <input
          class="base-checkbox-button-input"
          type="checkbox"
          :checked="isSelected"
          :disabled="isDisabled"
        />
        <label class="checkbox-button-label">
          {{ label }}
        </label>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { JCFToggleButtonProps } from './types'
import type { JCFToggleButtonData } from '@/lib/jcf/gui/JCFToggleButtonData'
import { computed, inject, ref, watch } from 'vue'
import { calculateCommonStyle } from '../utils/transform'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { installInstance } from '../utils/instance'
import {
  JCF_BUTTON_GROUP_PROVIDE_KEY,
  type JCFButtonGroupContainerProvide,
} from '../JCFButtonGroup/types'

defineOptions({
  name: EComponentName.JCFToggleButton,
})

const props = defineProps<JCFToggleButtonProps>()

const isDisabled = props.enabled === false

const id = props.id
// 部品データを用意する
const instance = installInstance<JCFToggleButtonData>(
  EComponentName.JCFToggleButton,
  props,
)

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  style.alignItems = 'center'
  style.color = isDisabled ? 'var(--color-light-gray)' : undefined
  return style
})

const context = inject<JCFButtonGroupContainerProvide | undefined>(
  JCF_BUTTON_GROUP_PROVIDE_KEY,
  undefined,
)
const containerIndex = ref<number>(null!)
const isSelected = instance ? instance.value : ref(false)
const onSelectedChange = () => {
  if (!isSelected.value) {
    isSelected.value = true
  }
}

if (context) {
  context.container.value.push({
    isSelected,
    containerIndex,
  })
  watch([isSelected, containerIndex], ([newValue, newIndex]) => {
    if (typeof newIndex === 'number') {
      context.onChange(newValue, newIndex)
    }
  })
}
</script>

<style scoped>
.base-radio-button {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.base-radio-button-input {
  height: 1.2rem;
  width: 1.2rem;
  accent-color: #000;
  margin-top: 0px;
  margin-left: 4px;
}

.radio-button-label {
  padding-left: 3px;
}

.base-checkbox-button {
  display: flex;
  white-space: nowrap;
}

.base-checkbox-button-input {
  all: unset;
  width: 1rem;
  height: 1rem;
  border: 1px solid;
  display: inline-block;
  line-height: 1;
}

.base-checkbox-button-input:focus {
  outline: 1px solid #000;
}

.base-checkbox-button-input::after {
  align-items: center;
  content: '';
  color: #000;
  cursor: v-bind('!enabled ? "normal" : "pointer"');
  display: inline-flex;
  justify-content: center;
  font-size: 1rem;
  height: inherit;
  width: inherit;
}

.base-checkbox-button-input:checked::after {
  content: '✔';
}

.checkbox-button-label {
  display: inline-block;
  vertical-align: middle;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 0px;
}
</style>
