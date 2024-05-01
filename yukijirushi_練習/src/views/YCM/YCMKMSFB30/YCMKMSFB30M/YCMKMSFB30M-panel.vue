<template>
  <WijmoGrid
    :columns="logic.spreadColumns"
    :item-source="logic.body_spread"
    :height="360"
    :width="672"
    :x="112"
    :y="112"
  />

  <BaseTextInput
  :label="`従業員コード`"
  labelWidth="152"
  :x="16"
    :y="16"
      width="90px"
      textAlign="left"
      value="temp"
      :needHandle="true"
      v-model="logic.CdJugyoin"
      :autoFocus=true
    />

  <BaseTextInput
    :label="`従業員名称（苗字）`"
    labelWidth="152"
    :x="16"
    :y="48"
    width="150px"
    textAlign="left"
    :needHandle="true"
    v-model="logic.NmJugyoinMyoji"
    :autoFocus=false
    />

  <BaseTextInput
    :label="`（名前）`"
    labelWidth="70"
    :x="328"
    :y="48"
    width="150px"
    textAlign="left"
    value="temp"
    :needHandle="true"
    v-model="logic.NmJugyoinNamae"
    :autoFocus=false
    />

    <InputSearchButtonWithResult
    :x="16"
    :y="80"
    type="text"
    label="損益管理組織コード"
    maxLength="6"
    :disabled="false"
    labelWidth="152"
    buttonWidth="36"
    inputWidth="48"
    @on-click="logic.GeneralSearch021"
    v-model="logic.Search021Result"

  />
  <ButtonExtend
    button-title="表示"
    width="70"
    x="800"
    y="40"
    @on-click="logic.HyoujiButton"
  />
  <ButtonExtend
    button-title="新規追加"
    width="70"
    x="800"
    y="500"
    @on-click="logic.ShinkiButton"

  />
  <CheckboxText 
  checkedLabel="削除済データを含める" 
  :y="80"
  :x="660"
  :modelValue="true"
  />
<!-- v-model="logic.sakujyoFlag" -->
  <TotalAllItemsCanChangeColor
    :x="820"
    :y="80"
    :countValue="logic.kensu"
    countValueColor="rgb(192, 192, 192)"

      />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import WijmoGrid from '@/components/molecules/WijmoGrid.vue'
import InputSearchButtonWithResult from '@/components/molecules/InputSearchButtonWithResult.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import BaseTextInput from '@/components/atoms/BaseTextInput.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import TotalAllItemsCanChangeColor from '@/components/molecules/TotalAllItemsCanChangeColor.vue'
import TotalAllItems from '@/components/atoms/TotalAllItems.vue'


// ロジックを導入する。
import useYCMKMSFB30MLogic from './YCMKMSFB30M-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'
const logic = reactive(useYCMKMSFB30MLogic())
</script>