<!-- 
******************************************************************************
* BaseTimeInput
* 
* システム名       : 共通部品
* サブシステム名   : 共通部品
* プログラム名     : 日付（時分別々）
* 担当者           : 共通部品
*-----------------------------------------------------------------------------
* 【修正履歴】
* +-------+------------+-------------------+----------------------------------
* | 版数  | 修正日     | 担当者            | 修正概要                         
* +-------+------------+-------------------+----------------------------------
* | 改訂版  | 2024/01/30 | 共通部品          | 正規表現の修正
* +-------+------------+-------------------+----------------------------------
* 
* All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
******************************************************************************
-->
<template>
  <ItemWrapper v-bind="props">
    <input
      class="basetimenew"
      v-model="formattedTime"
      type="text"
      :style="{ width: props.width }"
    />
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { HTMLEvents } from '@/enums'
import { RegexpRules } from '@/utils/regexp-rules'
import { watch, computed } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      type: 'hour' | 'minute'
      modelValue?: string
      width?: string
      /** @description 新ルール用プロパティ　*/
      customRules?: RegExp
    }
  >(),
  { modelValue: '' },
)

const formattedTime = useVModel(props, 'modelValue')

watch(formattedTime, (newValue) => {
  formattedTime.value = handleInputedValue(newValue)
})

const RegexpRulesType = computed(() => {
  if (props.type === 'hour') {
    return RegexpRules.HOUR_INPUT_RULE
  } else if (props.type === 'minute') {
    return RegexpRules.MINUTE_INPUT_RULE
  } else {
    return RegexpRules.NUMBER_ONLY
  }
})

const regexpRule = computed(() => props.customRules ?? RegexpRulesType.value)

const EVENT = {
  INPUT_CHANGE: HTMLEvents.CHANGE,
  INPUT_BLUR: HTMLEvents.BLUR,
}
const emit = defineEmits<{
  (event: typeof EVENT.INPUT_CHANGE, value: string): void
  (event: typeof EVENT.INPUT_BLUR, value: string): void
}>()

function handleInputedValue(value: string) {
  /** @description 数字以外の入力を制限する */
  let finalValue = value.replace(RegexpRules.NUMBER_ONLY, '')
  /** @description 全角数字を空白にする */
  finalValue = finalValue.replace(RegexpRules.ZENKAKU_SUUJI, '')
  /** @description 1桁数字の場合、前に0を補足する */
  if (finalValue.length === 1) {
    finalValue = '0' + finalValue
  }
  /** @description 入力値の最後2桁を切り取る */
  if (1 < finalValue.length && finalValue.length <= 3) {
    finalValue = finalValue.substring(finalValue.length - 2)
    /** @description 時間の最大値を超える場合、最大値にする　例：'64' ＝＞ '59' */
    const maxValue = props.type === 'hour' ? '23' : '59'
    if (finalValue > maxValue) {
      finalValue = maxValue
    }
  }
  /** @description 2桁以上の入力を制限する */
  finalValue = finalValue.replace(RegexpRules.DOUBLE_DIGIT_RULE, '')
  /** @description 時間タイプ以外の入力を制限する */
  finalValue = finalValue.replace(regexpRule.value, '')
  return finalValue
}
</script>

<style scoped>
.basetimenew {
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: var(--font-size-10-5);
  border: var(--base-button-border);
  width: var(--time-input-width);
  text-align: right;
}
</style>
