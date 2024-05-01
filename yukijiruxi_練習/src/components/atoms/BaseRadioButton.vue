<template>
  <ItemWrapper v-bind="props">
    <div class="base-radio-button">
      <input
        class="base-radio-button-input"
        type="radio"
        v-model="payload"
        :id="value"
        :name="name"
        :value="value"
        :disabled="disabled"
      />
      <label :for="value" class="base-radio-button-label">
        {{ display }}
      </label>
    </div>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import type { ItemWrapperProperty, Radio } from '@/types/components'

import { useVModel } from '@/utils/hooks'

import ItemWrapper from './ItemWrapper.vue'

const props = defineProps<
  ItemWrapperProperty &
    Radio.Config & {
      /** @description 選択された項目 */
      modelValue?: string
    }
>()

const payload = useVModel(props, 'modelValue')
</script>

<style scoped>
.base-radio-button {
  align-items: center;
  display: flex;
}

.base-radio-button-input {
  height: var(--size-rem-1);
  width: var(--size-rem-1);
  accent-color: var(--color-black);
}
</style>
