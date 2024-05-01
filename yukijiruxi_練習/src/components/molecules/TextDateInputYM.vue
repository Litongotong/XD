<template>
  <ItemWrapper v-bind="props">
    <div class="label-value">
      <div class="text-start">
        <BaseText :label="labelStart" />
      </div>
      <div class="text-colon">
        <BaseText :label="labelColon" />
      </div>
      <div class="input-ym">
        <DateInputYMD type="month" v-model="dateInput" />
      </div>
    </div>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import BaseText from '@/components/atoms/BaseText.vue'
import DateInputYMD from '@/components/atoms/DateInputYMD.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { ensureUnit } from '@/utils'
import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 開始ラベル */
    labelStart: string
    /** @description コロンラベル */
    labelColon: string
    /** @description ラベルの幅 */
    labelWidth: string
    /** @description 入力値の幅 */
    inputValueWidth: string
    /** @description モデルの値 */
    modelValue?: string
    x?: string
    y?: string
  }
>()

/** @description 日付入力のモデルバインディング */
const dateInput = useVModel(props, 'modelValue')
</script>

<style scoped>
.label-value {
  display: flex;
  align-items: center;
  position: absolute;
  height: var(--standard-height);
  top: v-bind('ensureUnit(y ?? "")');
  left: v-bind('ensureUnit(x ?? "")');
}
.text-start {
  width: v-bind('labelWidth');
}
.text-colon {
  width: v-bind('inputValueWidth');
}
</style>
