<template>
  <ItemWrapper v-bind="props" height="auto">
    <!-- 外枠線がある -->
    <fieldset v-if="showOuterBorder" :style="containerStyle">
      <legend v-if="outerBorderLabel">
        {{ outerBorderLabel }}
      </legend>
      <div
        v-for="(label, index) in numberOfCheckboxes"
        :key="index"
        class="margin-right-20"
      >
        <BaseCheckbox :disabled="false" v-model="checkedValue" />
        <span class="margin-left-5">{{ checkboxLabels?.[index] }}</span>
      </div>
    </fieldset>

    <!-- 外枠線がない -->
    <div v-else :style="containerStyle">
      <div
        v-for="(label, index) in numberOfCheckboxes"
        :key="index"
        class="margin-right-20"
      >
        <BaseCheckbox :disabled="false" v-model="checkedValue" />
        <span class="margin-left-5">{{ checkboxLabels?.[index] }}</span>
      </div>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'
import type { CSSProperties } from 'vue'

import { useVModel } from '@/utils/hooks'
import { computed } from 'vue'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description checkboxの個数 */
    numberOfCheckboxes?: number
    /** @description checkboxLabelsのvaule */
    checkboxLabels: string[]
    /** @description checkboxディスプレイ（vertical：縦並び 、horizontal：横並び）*/
    orientation?: 'vertical' | 'horizontal'
    /** @description チェック状態又はチェック済みリスト、デフォルトはfalse */
    modelValue?: boolean
    /** @description 外辺框の表示有無、デフォルトはfalse */
    showOuterBorder?: boolean
    /** @description 外辺框のラベル */
    outerBorderLabel?: string
  }
>()

const checkedValue = useVModel(props, 'modelValue')

const containerStyle = computed(() => {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: props.orientation === 'vertical' ? 'column' : 'row',
  }

  return style
})
</script>

<style scoped>
.checkbox-list {
  display: flex;
  margin-top: auto;
}
.margin-right-20 {
  padding-top: var(--checkboxgroup-padding-top);
  padding-bottom: var(--checkboxgroup-padding-bottom);
}
</style>
