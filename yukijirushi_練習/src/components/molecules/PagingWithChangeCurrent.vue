<template>
  <ItemWrapper v-bind="props">
    <div class="paging-group">
      <input
        type="number"
        class="change-page-input"
        @change="props.changePage"
        v-model="currentPage"
        @blur="changeCurrentPage"
      />
      <label>-</label>
      <div class="current-count">{{ totalPage }}</div>
      <label>頁</label>
      <ButtonExtend
        :button-title="setPageButton.title"
        :disabled="setPageButton.disabled"
        :button-height="setPageButton.height"
        :button-width="setPageButton.width"
        @on-click="setPageButton.onClick"
      />
      <ButtonExtend
        class="page-changer"
        :button-title="prePageButton.title"
        :disabled="prePageButton.disabled"
        :button-height="prePageButton.height"
        :button-width="prePageButton.width"
        @on-click="prePageButton.onClick"
      />
      <ButtonExtend
        class="page-changer"
        :button-title="nextPageButton.title"
        :disabled="nextPageButton.disabled"
        :button-height="nextPageButton.height"
        :button-width="nextPageButton.width"
        @on-click="nextPageButton.onClick"
      />
    </div>
  </ItemWrapper>
</template>

<script lang="ts" setup>
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ItemWrapper from '../atoms/ItemWrapper.vue'

import type { Button, ItemWrapperProperty } from '@/types/components'

import { ensureUnit } from '@/utils'
import { computed } from 'vue'
import { useVModel } from '@/utils/hooks'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description　入力欄の幅　*/
    pageInputWidth: number
    /** @description　ページ数　*/
    currentPage?: number | string
    /** @description　総ページ数　*/
    totalPage: number
    /** @description　入力欄数値が変化する時実行するメソッド　*/
    changePage?: Function
    /** @description　頁指定　ボタンの属性　*/
    setPageButton: Button.Config
    /** @description　前のページ　ボタンの属性　*/
    prePageButton: Button.Config
    /** @description　次のページ　ボタンの属性　*/
    nextPageButton: Button.Config
  }
>()

const currentPage = useVModel(props, 'currentPage')

const computedWidth = computed<string | undefined>(() =>
  props.pageInputWidth ? ensureUnit(props.pageInputWidth) : ' auto',
)

/** @description 指定されたページは総ページ数を超える場合、指定されたページを総ページ数に設置する */
const changeCurrentPage = () => {
  if (Number(currentPage.value) > props.totalPage) {
    currentPage.value = props.totalPage
  }
}
</script>

<style scoped>
.paging-group {
  display: flex;
  align-items: center;
}

.page-changer,
.paging-group {
  gap: var(--button-gap);
}

.current-count,
.change-page-input {
  text-align: right;
  width: v-bind('computedWidth');
}

.change-page-input::-webkit-outer-spin-button,
.change-page-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
