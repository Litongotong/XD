<template>
  <div
    :style="commonStyle"
    :data-item-id="id"
    :data-component-name="EComponentName.JCFTextArea"
  >
    <template v-if="canNotEdit">
      <span class="_text">{{ text }}</span>
    </template>

    <template v-if="!canNotEdit">
      <textarea v-model="inputValue" :readonly="isReadonly"></textarea>
    </template>
  </div>
</template>

<script setup lang="ts">
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import type { JCFTextAreaProps } from './types'
import { getInstance } from '../utils/instance'
import type { JCFTextAreaData } from '@/lib/jcf/gui/JCFTextAreaData'
import { computed } from 'vue'
import { calculateCommonStyle } from '../utils/transform'

defineOptions({
  name: EComponentName.JCFTextArea,
})

const props = defineProps<JCFTextAreaProps>()

const id = props.id

const instance = getInstance<JCFTextAreaData>(props)

const fallbackText = props.text || ''

const isReadonly = props.editable === false
const canNotEdit = props.enabled === false

const text = computed(() => {
  return instance ? instance.value.value || fallbackText : fallbackText
})
const inputValue = instance?.value

const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })

  if (props.editable === false) {
    style.userSelect = 'none'
  }

  return style
})
</script>

<style scoped>
._text {
  white-space: pre;
  margin: 0;
  padding: 0;
}
</style>
