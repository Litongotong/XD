<template>
  <ItemWrapper v-bind="props" class="container">
    <div class="base-radio-button">
      <BaseRadioButton
        value="DailyReport"
        :display="displayValue"
        :disabled="disabled"
        v-model="radioChecked"
      />
    </div>
    <DateInput :type="dateInputType" />
    <BaseText class="base-text" :label="hyphenLineType" />
    <DateInput :type="dateInputType" />
  </ItemWrapper>
</template>

<script setup lang="ts">
import BaseRadioButton from '@/components/atoms/BaseRadioButton.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'
import DateInput from '@/components/atoms/DateInput.vue'

import type { ItemWrapperProperty } from '@/types/components'

import { useVModel } from '@/utils/hooks'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description labelのvaule */
      displayValue: string
      /** @description 選択禁止状態,デフォルトはfalse，選択できる */
      disabled?: boolean
      radioChecked?: string

      /** @description label と radio の css */
      radioLabelMaginLeft?: string
      radioLabelMaginRight?: string
      radioLabelMaginTop?: string

      /** @description component BaseText と component DateInputYMD の　css */
      hyphenLineType?: string

      /** @description 日付タイプ */
      dateType?: string
    }
  >(),
  {
    hyphenLineType: '-',
    radioLabelMaginLeft: '2px',
    radioLabelMaginRight: '2px',
    radioLabelMaginTop: '1px',
  },
)

const radioChecked = useVModel(props, 'radioChecked')

const dateInputType = computed<'date' | 'month'>(() =>
  props.dateType === 'month' ? 'month' : 'date',
)
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

:deep(.base-radio-button-label) {
  margin-left: v-bind('radioLabelMaginLeft');
  margin-right: v-bind('radioLabelMaginRight');
  margin-top: v-bind('radioLabelMaginTop');
}
.base-text {
  width: var(--base-test-width);
  text-align: center;
}
</style>
