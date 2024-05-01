<template>
  <ItemWrapper class="radio-button-date-input" v-bind="props">
    <BaseRadioButton
      display="月報"
      v-model="picked"
      :id="value"
      :value="value"
      :disabled="disabled"
    />
    <DateInput type="month" />
  </ItemWrapper>
</template>

<script setup lang="ts">
import type { ItemWrapperProperty, Radio } from '@/types/components'

import BaseRadioButton from '@/components/atoms/BaseRadioButton.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import DateInput from '@/components/atoms/DateInput.vue'

import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty &
    Radio.Config & {
      /** @description ラジオボタン状態 */
      picked?: string
    }
>()

const picked = useVModel(props, 'picked')
</script>

<style scoped></style>
