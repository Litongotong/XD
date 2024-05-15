<template>
  <button @click="handleClick()" :style="commonStyle">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import type { JCFBoardButtonProps } from './types'
import type { CSSProperties } from 'vue'
import { toAlignment, toPX } from '@/components/jcf/utils/common'
import type { JCFCommonStaticProps } from '@/components/jcf/utils/types'

defineOptions({
  name: EComponentName.JCFBoardButton,
})

const props = defineProps<JCFBoardButtonProps>()

const emits = defineEmits(['click'])

/** calculateCommonStyle の引数  */
interface ICalculateCommonStyleOpts<T> {
  props: JCFCommonStaticProps
}

/**
 * 部品位置のスタイルを整形する。
 * @template T JCFItemData の属性を継承したもの
 * @param opts 部品データの実例及び共通属性を提供する
 * @returns 位置スタイル
 */
function calculateCommonStyle<T>(opts: ICalculateCommonStyleOpts<T>) {
  const { props } = opts

  // static value
  const { bounds, alignmentHorizontal, alignmentVertical } = props

  const x = bounds?.[0] || 0
  const y = bounds?.[1] || 0
  const width = bounds?.[2] || 0
  const height = bounds?.[3] || 0

  const positionStyle: CSSProperties = {
    position: 'absolute',
    left: toPX(x),
    top: toPX(y),
    height: toPX(height),
    width: toPX(width),
  }

  const alignStyle: CSSProperties = toAlignment({
    alignmentHorizontal,
    alignmentVertical,
  })

  const style: CSSProperties = {
    ...positionStyle,
    ...alignStyle,
  }

  return style
}

// 算出スタイル
const commonStyle = computed(() => {
  const style = calculateCommonStyle({ props })

  return style
})

// ボタン押下
function handleClick() {
  emits('click')
}
</script>

<style scoped>
button {
  justify-content: center;
  cursor: pointer;
  color: var(--jcf-button-color);
  border: var(--jcf-button-border);
  box-shadow: var(--jcf-button-shadow);
}

button:active {
  box-shadow: none;
  transform: translateY(2px);
}
</style>
