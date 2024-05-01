<template>
  <ItemWrapper v-bind="props">
    <BaseCheckbox :disabled="disabled" v-model="checkedValue" />
    <span
      v-html="checkedLabel"
      :class="{ 'checked-text-disabled': disabled }"
    ></span>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'
import type { CheckboxTextConfig } from '@/types/components/checkbox-text'

import { useVModel } from '@/utils/hooks'

const props = defineProps<ItemWrapperProperty & CheckboxTextConfig.Option>()

// チェック状態の値を取得する
const checkedValue = useVModel(props, 'modelValue')
</script>

<style scoped>
/* 無効な状態のテキストのスタイル */
.checked-text-disabled {
  color: var(--color-font-disabled);
}
</style>
