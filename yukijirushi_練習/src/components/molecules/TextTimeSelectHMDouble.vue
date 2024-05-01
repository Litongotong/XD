<template>
  <ItemWrapper v-bind="props">
    <div class="text-time-select-HM-double-with-clear-button-wrapper">
      <BaseDropdownVue
        v-model="selectedStartHourValue"
        :disabled="startHourDisabled"
        :dropdownWidth="startHourWidth"
        :options="Hours"
      />
      <div class="label-colon">{{ textColon }}</div>

      <BaseDropdownVue
        v-model="selectedStartMinuteValue"
        :disabled="startMinuteDisabled"
        :dropdownWidth="startMinuteWidth"
        :options="Minutes"
      />
      <div class="text-wave-line">{{ textWaveLine }}</div>

      <BaseDropdownVue
        v-model="selectedEndHourValue"
        :disabled="endHourDisabled"
        :dropdownWidth="endHourWidth"
        :options="Hours"
      />
      <div class="label-colon">{{ textColon }}</div>

      <BaseDropdownVue
        v-model="selectedEndMinuteValue"
        :disabled="endMinuteDisabled"
        :dropdownWidth="endMinuteWidth"
        :options="Minutes"
      />
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseDropdownVue from '@/components/atoms/BaseDropdown.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description ラッパーの幅 */
      wrapperWidth?: string
    } & {
      /** @description 開始時間（時）の選択値 */
      selectStartHourValue?: string
      /** @description 開始時間（時）の無効化状態 */
      startHourDisabled?: boolean
      /** @description 開始時間（時）のドロップダウンの幅 */
      startHourWidth?: string
    } & {
      /** @description 開始時間（分）の選択値 */
      selectStartMinuteValue?: string
      /** @description 開始時間（分）の無効化状態 */
      startMinuteDisabled?: boolean
      /** @description 開始時間（分）のドロップダウンの幅 */
      startMinuteWidth?: string
    } & {
      /** @description 終了時間（時）の選択値 */
      selectEndHourValue?: string
      /** @description 終了時間（時）の無効化状態 */
      endHourDisabled?: boolean
      /** @description 終了時間（時）のドロップダウンの幅 */
      endHourWidth?: string
    } & {
      /** @description 終了時間（分）の選択値 */
      selectEndMinuteValue?: string
      /** @description 終了時間（分）の無効化状態 */
      endMinuteDisabled?: boolean
      /** @description 終了時間（分）のドロップダウンの幅 */
      endMinuteWidth?: string
    } & {
      /** @description ボタンのラベル */
      buttonLabel?: string
      /** @description ボタンの幅 */
      buttonWidth?: string | number
      /** @description クリアボタンの無効化状態 */
      clearButtonDisabled?: boolean
    }
  >(),

  {
    selectStartHourValue: '0',
    selectStartMinuteValue: '0',
    selectEndHourValue: '0',
    selectEndMinuteValue: '0',
    buttonLabel: 'クリア',
  },
)

// コロンと波線のテキスト
const textColon = ':'
const textWaveLine = '～'

// 選択された時間値
const selectedStartHourValue = useVModel(props, 'selectStartHourValue')
const selectedStartMinuteValue = useVModel(props, 'selectStartMinuteValue')
const selectedEndHourValue = useVModel(props, 'selectEndHourValue')
const selectedEndMinuteValue = useVModel(props, 'selectEndMinuteValue')

// 時間と分の選択肢
const Hours = Array.from({ length: 24 }, (_, index) => ({
  display: String(index).padStart(2, '0'),
  value: String(index),
}))
const Minutes = Array.from({ length: 60 }, (_, index) => ({
  display: String(index).padStart(2, '0'),
  value: String(index),
}))
</script>

<style scoped>
.text-time-select-HM-double-with-clear-button-wrapper {
  display: flex;
  height: var(--standard-height);
  width: v-bind(wrapperWidth);
}
.label-colon {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px;
}
.text-wave-line {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: var(--margin);
}
</style>
