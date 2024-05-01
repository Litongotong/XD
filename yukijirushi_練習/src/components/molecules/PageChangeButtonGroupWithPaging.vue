<!-- 
******************************************************************************
* PageChangeButtonGroupWithPaging
* 
* システム名       : 共通部品
* サブシステム名   : 共通部品
* プログラム名     : 件数・ページ目（スプレッドシート用）4
* 担当者           : 共通部品
*-----------------------------------------------------------------------------
* 【修正履歴】
* +-------+------------+-------------------+----------------------------------
* | 版数  | 修正日     | 担当者            | 修正概要                         
* +-------+------------+-------------------+----------------------------------
* | 改訂版  | 2024/01/30 | 共通部品          | 属性とメソッドの修正
* +-------+------------+-------------------+----------------------------------
* 
* All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
******************************************************************************
-->
<template>
  <ItemWrapper class="page-change-button-group-with-paging" v-bind="props">
    <div>
      <ButtonExtend
        :buttonTitle="prePageButton.title"
        :disabled="precedingPageFlag"
        :button-height="prePageButton.height"
        :button-width="prePageButton.width"
        @on-click="handlePrePageClick"
      />
    </div>

    <div>
      <ButtonExtend
        :buttonTitle="nextPageButton.title"
        :disabled="lastPageFlag"
        :button-height="nextPageButton.height"
        :button-width="nextPageButton.width"
        @on-click="handleNextPageClick"
      />
    </div>

    <div class="paging">
      <span>[</span>
      <input
        type="number"
        class="change-page-input"
        v-model="currentPage"
        @input="handleInput"
        @change="props.changePage"
        min="1"
        :max="totalPage"
      />
      <span>/</span>
      <div class="count-value">
        <div>{{ totalPage }}</div>
      </div>
      <span>]</span>
    </div>

    <div>
      <ButtonExtend
        :buttonTitle="moveButton.title"
        :disabled="moveButton.disabled"
        :button-height="moveButton.height"
        :button-width="moveButton.width"
        @on-click="moveButton.onClick"
      />
    </div>
  </ItemWrapper>
</template>

<script setup lang="ts">
import type { ItemWrapperProperty, Button } from '@/types/components'

import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import { computed } from 'vue'
import { ensureUnit } from '@/utils'
import { RegexpRules } from '@/utils/regexp-rules'
import { useVModel } from '@/utils/hooks'

const props = withDefaults(
  defineProps<
    ItemWrapperProperty & {
      /** @description　移動ボタン */
      moveButton: Button.Config
      /** @description　前頁ボタン */
      prePageButton: Button.Config
      /** @description　後頁ボタン */
      nextPageButton: Button.Config
    } & {
      /** @description　後頁ボタン */
      pageInputWidth?: number
      /** @description　ページ数 */
      currentPage?: number
      /** @description　入力欄数値が変化する時実行するメソッド　*/
      changePage?: Function
      /** @description　総ページ数 */
      totalPage?: number
    }
  >(),
  {
    currentPage: 1,
  },
)

const currentPage = useVModel(props, 'currentPage')

const computedWidth = computed<string | undefined>(() =>
  props.pageInputWidth ? ensureUnit(props.pageInputWidth) : ' auto',
)

/** @description　最初のページかどうかを判断する */
const precedingPageFlag = computed(() => {
  return (
    typeof props.currentPage === 'string' ||
    props.currentPage === 1 ||
    props.prePageButton.disabled
  )
})

/** @description　最後のページかどうかを判断する */
const lastPageFlag = computed(() => {
  return (
    typeof props.currentPage === 'string' ||
    props.currentPage === props.totalPage ||
    props.nextPageButton.disabled
  )
})

const handlePrePageClick = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    if (props.changePage) {
      props.changePage(currentPage.value)
    }
  }
}

const handleNextPageClick = () => {
  if (
    !props.nextPageButton.disabled &&
    currentPage.value < Number(props.totalPage)
  ) {
    currentPage.value++
    if (props.changePage) {
      props.changePage(currentPage.value)
    }
  }
}

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value.trim()
  if (inputValue === '') {
    return
  }
  let parsedValue = Number(inputValue)
  if (!RegexpRules.POSITIVE_INTEGER_RULE.test(inputValue)) {
    parsedValue = 1
  } else if (parsedValue > Number(props.totalPage)) {
    parsedValue = Number(props.totalPage)
  }
  currentPage.value = Math.floor(parsedValue)
}
</script>

<style scoped>
.page-change-button-group-with-paging {
  align-items: center;
  display: inline-flex;
}

.paging {
  align-items: center;
  display: inline-flex;
  margin-left: 30px;
  margin-right: 10px;
}

.change-page-input {
  text-align: left;
  width: v-bind('computedWidth');
}
</style>
