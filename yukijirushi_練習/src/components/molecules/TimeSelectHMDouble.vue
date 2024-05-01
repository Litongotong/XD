<template>
  <ItemWrapper v-bind="props" class="time-input-container">
    <div class="time-picker">
      <div class="time-dropdown">
        <BaseDropdown
          class="hour-dropdown"
          v-model="selectHourValue"
          :options="hourOptions"
          :disabled="disabled"
          :dropdownWidth="selectHourWidth"
          :height="selectHourHeight"
        />
      </div>
      <BaseText :label="hyphenLineType" class="hyphen-label" />
      <div class="time-dropdown">
        <BaseDropdown
          class="minute-dropdown"
          v-model="selectMinValue"
          :options="minuteOptions"
          :disabled="disabled"
          :dropdownWidth="selectMinWidth"
          :height="selectMinHeight"
        />
      </div>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { Dropdown } from '@/types/components/dropdown'
import type { ItemWrapperProperty } from '@/types/components'

import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description Hour属性  */
      selectHourWidth?: string
      selectHourHeight?: string
      /** @description Hour選択値  */
      selectHourValue?: string

      /** @description ハイフンラインのタイプ */
      hyphenLineType?: string

      /** @description Minute属性  */
      selectMinWidth?: string
      selectMinHeight?: string
      /** @description Minute選択値  */
      selectMinValue?: string
      disabled?: boolean
    }
  >(),
  {
    selectHourValue: '00',
    selectMinValue: '00',
    hyphenLineType: ':',
  },
)

const selectHourValue = useVModel(props, 'selectHourValue')
const selectMinValue = useVModel(props, 'selectMinValue')

const hourOptions: Dropdown.Option[] = generateOptions(24)
const minuteOptions: Dropdown.Option[] = generateOptions(60)

function generateOptions(length: number): Dropdown.Option[] {
  return Array.from({ length }, (_, index) => ({
    value: index.toString().padStart(2, '0'),
    display: index.toString().padStart(2, '0'),
  }))
}
</script>

<style scoped>
.time-input-container {
  margin: var(--margin-top-bottom);
}
.time-picker {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.hyphen-label {
  margin: var(--margin-left-right);
}
</style>
