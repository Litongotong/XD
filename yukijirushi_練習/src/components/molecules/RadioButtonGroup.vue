<template>
  <ItemWrapper v-bind="props" height="auto">
    <!-- 外枠線がある -->
    <fieldset
      v-if="isDisplayOuterBorder"
      :class="{ 'radio-inline-display': isInlineDisplay }"
    >
      <legend v-if="labelOfOuterBorder">
        {{ labelOfOuterBorder }}
      </legend>
      <div
        v-for="radio in radios"
        :key="radio.value"
        :class="{ 'radio-button': isInlineDisplay }"
      >
        <BaseRadioButton v-bind="radio" v-model="picked" />
      </div>
    </fieldset>

    <!-- 外枠線がない -->
    <div v-else :class="{ 'radio-inline-display': isInlineDisplay }">
      <div
        v-for="radio in radios"
        :key="radio.value"
        :class="{ 'radio-button': isInlineDisplay }"
      >
        <BaseRadioButton v-bind="radio" v-model="picked" />
      </div>
    </div>
  </ItemWrapper>
</template>
<script setup lang="ts">
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import BaseRadioButton from '@/components/atoms/BaseRadioButton.vue'

import type { ItemWrapperProperty, Radio } from '@/types/components'

import { useVModel } from '@/utils/hooks'
import { computed } from 'vue'
import { ensureUnit } from '@/utils'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 外枠線の表示フラグ */
    isDisplayOuterBorder?: boolean
    /** @description インライン表示フラグ */
    isInlineDisplay?: boolean
    /** @description 外枠線のラベル */
    labelOfOuterBorder?: string
    /** @description ラジオボタンの設定 */
    radios?: Radio.Item[]
    /** @description モデル値 */
    modelValue?: string
    /** @description フィールドセットの高さ */
    fieldsetHeight?: string
  }
>()

const picked = useVModel(props, 'modelValue')

const computedHeight = computed<string | undefined>(() =>
  props.fieldsetHeight
    ? ensureUnit(props.fieldsetHeight)
    : 'var(--standard-height)',
)
</script>
<style scoped>
.radio-inline-display {
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  height: v-bind('computedHeight');
}
.radio-button:not(:last-child) > span:last-child {
  margin-right: var(--standard-gap);
}
</style>
