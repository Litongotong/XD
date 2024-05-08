<template>
  <div :data-component-name="EComponentName.JCFGroupBox">
    <!-- ラベル付けの外枠線 -->

    <fieldset v-if="label" :style="commonStyle" class="outLine">
      <legend v-if="label">
        {{ label }}
      </legend>
      <slot></slot>
    </fieldset>

    <!-- ラベルなしの外枠線 -->
    <div v-else :style="commonStyle" class="outLine">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JCFGroupBoxProps } from './types'
import type { JCFGroupBoxData } from '@/lib/jcf/gui/JCFGroupBoxData'
import { computed } from 'vue'
import { calculateCommonStyle } from '../utils/transform'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { installInstance } from '../utils/instance'
import { JFLineType } from '../entry'
import { SystemColor } from '../entry'
import { toRGB, toPX } from '../utils/common'

defineOptions({
  name: EComponentName.JCFGroupBox,
})

// 部品 props
const props = defineProps<JCFGroupBoxProps>()

// 部品データを用意する
const instance = installInstance<JCFGroupBoxData>(
  EComponentName.JCFGroupBox,
  props,
)

const [left, top, width, height] = props.bounds!

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ instance, props })
  style.borderColor = toRGB(SystemColor.GRAY)
  style.left = toPX(left + 8)
  style.top = toPX(top + 8)
  style.width = toPX(width - 16)
  style.height = toPX(height - 16)
  return style
})
</script>

<style scoped>
.outLine {
  border: 1px solid rgb(0, 0, 0);
}
</style>
