<template>
  <ItemWrapper v-bind="props">
    <div class="paging-group">
      <ButtonExtend
        class="page-changer"
        :button-title="prePageButton.title"
        :disabled="isPrevButtonDisabled"
        :button-height="prePageButton.height"
        :button-width="prePageButton.width"
        @on-click="handlePreviousClick"
      />
      <ButtonExtend
        class="page-changer"
        :button-title="nextPageButton.title"
        :disabled="isNextButtonDisabled"
        :button-height="nextPageButton.height"
        :button-width="nextPageButton.width"
        @on-click="handleNextClick"
      />
      <div class="page-number">
        <div>{{ currentPage }}</div>
        <BaseText :label="hyphenLineType" />

        <div>{{ totalPage }}</div>
      </div>
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { Button } from '@/types/components'
import type { ItemWrapperProperty } from '@/types/components'

import { useVModel } from '@/utils/hooks'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description 前のデータButton表示属性 */
      prePageButton: Button.Config
      /** @description 次のデータButton表示属性 */
      nextPageButton: Button.Config
      /** @description ボタン表示属性 */
      disabled?: boolean

      /** @description page表示属性 */
      currentPage?: number
      hyphenLineType?: string
      totalPage?: number
    }
  >(),
  {
    hyphenLineType: '/',
    currentPage: 1,
    totalPage: 1,
  },
)

const currentPage = useVModel(props, 'currentPage')

const isPrevButtonDisabled = computed(() => currentPage.value === 1)
const isNextButtonDisabled = computed(
  () => currentPage.value === props.totalPage,
)

const handlePreviousClick = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const handleNextClick = () => {
  if (!props.nextPageButton.disabled && currentPage.value < props.totalPage) {
    currentPage.value++
  }
}
</script>

<style scoped>
.paging-group {
  display: flex;
  align-items: center;
  gap: var(--button-gap);
}
.page-number {
  display: flex;
  align-items: center;
  margin-left: var(--base-time-width);
  gap: var(--margin-right-common);
}
</style>
