<template>
  <div :data-component-name="EComponentName.JCFButtonGroup" :data-item-id="id">
    <!-- ラベル付けの外枠線 -->
    <fieldset v-if="label" :style="commonStyle">
      <legend v-if="label">
        {{ label }}
      </legend>
      <slot></slot>
    </fieldset>

    <!-- ラベルなしの外枠線 -->
    <div v-else :style="commonStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import {
  type JCFButtonGroupProps,
  type JCFButtonGroupContainer,
  JCF_BUTTON_GROUP_PROVIDE_KEY,
} from './types'
import { computed, provide } from 'vue'
import { calculateCommonStyle } from '../utils/transform'
import { getInstance } from '../utils/instance'
import type { JCFButtonGroupData } from '@/lib/jcf/gui/JCFButtonGroupData'
import { toFlowLayout } from '../utils/common'

defineOptions({
  name: EComponentName.JCFButtonGroup,
})

// 部品 props
const props = defineProps<JCFButtonGroupProps>()
const id = props.id

// 部品データを用意する
const instance = getInstance<JCFButtonGroupData>(props)

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  // 文字選択不可にする
  style.userSelect = 'none'

  const layoutStyle = toFlowLayout(props.layout)

  return { ...style, ...layoutStyle }
})

// ボックスのフラグを用意する
const container = ref<JCFButtonGroupContainer[]>([])
const onChange = (newValue: boolean, currentIndex: number) => {
  container.value.forEach((item, index) => {
    const isSelf = index === currentIndex
    if (newValue) {
      if (!isSelf) {
        item.isSelected = false
      }
    }
  })
}

watch(
  container.value,
  (newValue) => {
    newValue.forEach((item, index) => {
      item.containerIndex = index
    })
  },
  {
    deep: true,
  },
)

// children control context
provide(JCF_BUTTON_GROUP_PROVIDE_KEY, {
  onChange,
  container,
})

const label = props.label
</script>

<style scoped></style>
