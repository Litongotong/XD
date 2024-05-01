<template>
  <ItemWrapper v-bind="props">
    <!-- @description 入力欄の説明ラベル  -->
    <div class="text-content">
      <span>【通信欄】</span><br />
      <span>(200文字以内)</span><br />
      <span>改行入力不可</span>
    </div>
    <!-- @description 文字の入力エリア  -->
    <BaseTextarea
      class="text-area"
      :value="textArea"
      :height="textAreaHeight"
      :width="textAreaWidth"
      :max-length="maxLength"
    />
    <!-- @description 行追加　ボタン  -->
    <ButtonExtend
      :button-title="button.title"
      :button-height="button.height"
      :button-width="button.width"
      @on-click="button.onClick"
    />
  </ItemWrapper>
</template>

<script lang="ts" setup>
import BaseTextarea from '@/components/atoms/BaseTextarea.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ItemWrapper from '@/components/atoms/ItemWrapper.vue'

import type { ItemWrapperProperty, Button } from '@/types/components'

import { ref } from 'vue'

const props = defineProps<
  ItemWrapperProperty & {
    /** @description 行追加　ボダンの属性 */
    button: Button.Config
    /** @description 入力欄の高さ */
    textAreaHeight: string
    /** @description 入力欄の幅 */
    textAreaWidth: string
  }
>()

const textArea = ref('')
/** @description 入力欄の最大桁数 */
const maxLength = 200
</script>

<style scoped>
.text-content {
  text-align: center;
  width: 80px;
}
.text-area {
  margin: 0 0.5rem;
}
</style>
