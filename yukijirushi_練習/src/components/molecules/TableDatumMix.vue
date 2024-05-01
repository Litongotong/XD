<template>
  <TableDatumText v-if="isText" v-bind="props" />
  <TableDatumDropdown v-else-if="isDropdown" v-bind="props" v-model="payload" />

  <TableDatumCheckbox
    v-else-if="isCheckbox"
    v-bind="props"
    v-model="payload"
    :value="value"
  />

  <TableDatumButton v-else-if="isButton" v-bind="props" />

  <TableDatumInput v-else-if="isInput" v-bind="props" v-model="payload" />

  <TableDatumTimeInput
    v-else-if="isInputTime"
    v-bind="props"
    v-model="payload"
  />
</template>

<script setup lang="ts">
import TableDatumButton from './TableDatumButton.vue'
import TableDatumCheckbox from './TableDatumCheckbox.vue'
import TableDatumDropdown from './TableDatumDropdown.vue'
import TableDatumText from './TableDatumText.vue'
import TableDatumTimeInput from './TableDatumTimeInput.vue'
import TableDatumInput from './TableDatumInput.vue'

import type { Dropdown, Table } from '@/types/components'
import type { CSS } from '@/types'

import { computed } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = defineProps<
  Table.Head &
    Table.Datum & {
      // Mix 汎用属性
      /** @description 入力値  */
      modelValue?: any
      /** @description 内容水平位置  */
      textAlign?: CSS.TextAlign
      /** @description  */
      type?: Table.DatumType
      /** @description 使用不可か */
      disabled?: boolean
    } & {
      // Text 属性
      /** @description データム */
      datum?: string | number | boolean
    } & {
      // Dropdown 属性
      /** @description 選択肢 */
      options?: Dropdown.Option[]
    } & {
      // Checkbox 属性
      /** @description Checkbox 用値 */
      value?: string | number
    } & {
      // Button 属性
      /** @description Button タイトル */
      buttonTitle?: string
    }
>()

const isText = computed<boolean>(() => !props.type || props.type === 'text')
const isButton = computed<boolean>(() => !props.type || props.type === 'button')
const isDropdown = computed<boolean>(() => props.type === 'dropdown')
const isCheckbox = computed<boolean>(() => props.type === 'checkbox')
const isInput = computed<boolean>(
  () => props.type === 'input-number' || props.type === 'input-text',
)
const isInputTime = computed<boolean>(
  () => !props.type || props.type === 'input-time',
)

const payload = useVModel(props, 'modelValue')
</script>
