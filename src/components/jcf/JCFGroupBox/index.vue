<template>
  <div :data-component-name="EComponentName.JCFGroupBox" :data-item-id="id">
    <!-- ラベル付けの外枠線 -->
    <fieldset v-if="label" :style="commonStyle" class="box_outline">
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
import type { JCFGroupBoxProps } from './types'
import type { JCFGroupBoxData } from '@/lib/jcf/gui/JCFGroupBoxData'
import { computed, type CSSProperties } from 'vue'
import { calculateCommonStyle } from '../utils/transform'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { getInstance } from '../utils/instance'
import { toFlowLayout, toRGB } from '../utils/common'
import { SystemColor } from '../entry'

defineOptions({
  name: EComponentName.JCFGroupBox,
})

// 部品 props
const props = defineProps<JCFGroupBoxProps>()
const id = props.id
const label = props.label

// 部品データを用意する
const instance = getInstance<JCFGroupBoxData>(props)

const outlineDefaultColor = toRGB(SystemColor.GRAY)
const outlineCss: CSSProperties = {
  outline: `1px solid ${outlineDefaultColor}`,
  // TODO: need re check
  outlineOffset: '-10px',
}

// 算出スタイル
const commonStyle = computed(() => {
  let style = calculateCommonStyle({ instance, props })
  // 文字選択不可にする
  style.userSelect = 'none'

  const hasBorder = style.borderWidth !== undefined
  if (!hasBorder && !label) {
    // add default outline
    style = {
      ...style,
      ...outlineCss,
    }
  }

  const layoutStyle = toFlowLayout(props.layout)

  return {
    ...style,
    ...layoutStyle,
  }
})
</script>

<style scoped>
.box_outline {
  margin: -5px 0 0 0;
}
</style>
