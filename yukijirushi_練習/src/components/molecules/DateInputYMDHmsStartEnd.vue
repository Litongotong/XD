<template>
  <ItemWrapper v-bind="props">
    <DateInput type="time" v-model="startDateValue" />
    <span class="text-wave-line">{{ textBetweenStartEnd }} </span>
    <DateInput type="time" v-model="endDateValue" />
  </ItemWrapper>
</template>

<script setup lang="ts">
import type { ItemWrapperProperty } from '@/types/components'

import { useVModel } from '@/utils/hooks'
import { computed } from 'vue'
import { ensureUnit } from '@/utils'

import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import DateInput from '@/components/atoms/DateInput.vue'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 開始日付値 */
      startDateValue?: Date
      /** @description 終了日付値 */
      endDateValue?: Date
      /** @description 開始と終了間の幅 */
      widthBetweenStartEnd?: string
      /** @description 開始と終了間のテキスト */
      textBetweenStartEnd?: string
    }
  >(),

  {
    textBetweenStartEnd: '～',
  },
)

const startDateValue = useVModel(props, 'startDateValue')
const endDateValue = useVModel(props, 'endDateValue')

/** @description 開始と終了間の幅を計算する */
const computedWidth = computed<string | undefined>(() =>
  props.widthBetweenStartEnd
    ? ensureUnit(props.widthBetweenStartEnd)
    : 'var(--width-between-start-end)',
)

//2024/03/19 wangxin TODO:日付処理
</script>

<style scoped>
.text-wave-line {
  width: v-bind('computedWidth');
  text-align: center;
}
</style>
