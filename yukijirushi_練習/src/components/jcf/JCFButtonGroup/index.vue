<template>
  <div :data-component-name="EComponentName.JCFButtonGroup">
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
// import type { JCFButtonGroupData } from '@/lib/jcf/gui/JCFButtonGroupData'
// JCFButtonGroupDataがないため、一時保存
import { computed, provide } from 'vue'
import { calculateCommonStyle } from '../utils/transform'
import { installInstance } from '../utils/instance'
defineOptions({
  name: EComponentName.JCFButtonGroup,
})
// 部品 props
const props = defineProps<JCFButtonGroupProps>()

// 部品データを用意する
const instance = installInstance<any>(EComponentName.JCFButtonGroup, props)
// const instance = installInstance<JCFButtonGroupData>(EComponentName.JCFButtonGroup, props)
// JCFButtonGroupDataがないため、一時保存

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  return style
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
provide(JCF_BUTTON_GROUP_PROVIDE_KEY, {
  onChange,
  container,
})

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
</script>

<style scoped></style>
