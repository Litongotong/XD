<template>
  <ItemWrapper v-bind="props">
    <BaseNumberInput
      :width="width"
      class="input-number"
      :disabled="disabled"
      textAlign="right"
      :needHandle="true"
      v-model="modelValue"
    />
    <span>{{ description }}</span>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseNumberInput from '@/components/atoms/BaseNumberInput.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { ref } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    width?: string | number
    disabled?: boolean
    /** @description 表示される文字 */
    description?: string
    modelValue?: string | number
  }
>()

const dataPassed = typeof props.modelValue != 'undefined'
const modelValue = dataPassed ? useVModel(props, 'modelValue') : ref<string>('')
</script>

<style scoped>
.input-number {
  margin-right: var(--standard-gap);
}
</style>
