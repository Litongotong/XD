<template>
  <ItemWrapper v-bind="props">
    <select
      v-model="selected"
      class="base-dropdown"
      :disabled="disabled"
      :style="computedDropdownStyle"
    >
      <option
        v-for="item in options"
        :disabled="item.disabled"
        :key="item.display"
        :value="item.value ?? item.display"
      >
        {{ item.display }}
      </option>
    </select>
  </ItemWrapper>
</template>

<script setup lang="ts">
import ItemWrapper from './ItemWrapper.vue'

import type { ItemWrapperProperty } from '@/types/components'
import type { Dropdown } from '@/types/components/dropdown'

import { ensureUnit } from '@/utils'
import { useVModel } from '@/utils/hooks'
import { computed, type CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      // ドロップダウン属性
      /** @description 使用不可か */
      disabled?: boolean
      /** @description ドロップダウン幅 */
      dropdownWidth?: string | number
      /** @description 選択値  */
      modelValue?: string | number
      /** @description 選択肢 */
      options?: Dropdown.Option[]
      /** @description 水平方向の整列プロパティ */
      textAlign?: string
    }
  >(),

  { modelValue: '' }
)

const selected = useVModel(props, 'modelValue')

const computedDropdownStyle = computed<CSSProperties>(() => ({
  width: ensureUnit(props.dropdownWidth),
}))
</script>

<style scoped>
.base-dropdown {
  height: inherit;
  text-align: v-bind(textAlign);
}
</style>
