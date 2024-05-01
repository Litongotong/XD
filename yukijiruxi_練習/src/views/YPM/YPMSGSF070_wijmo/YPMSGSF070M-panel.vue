<template>
  <WijmoGrid
    :columns="logic.spreadColumns"
    :item-source="logic.body_spread01"
    :height="384"
    :width="980"
    :x="16"
    :y="112"
  />
  <DropdownInputSearchButtonWithResult
    :x="16"
    :y="40"
    :label="`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 製品`"
    :label-width="104"
    :dropdown-width="80"
    :dropdown-value="logic.hinmokuCmb"
    :options="logic.hinmokuCmbOptions"
    :input-width="56"
    :input-value="logic.cdHinmoku"
    @on-click="logic.searchBtn"
    :button-width="40"
    :button-label="`検索`"
    :result="logic.nmHinmoku"
  />
  <TextLabelValue
    :x="16"
    :y="8"
    :label="`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工場`"
    :label-width="104"
    :text-value1="logic.nmJoisonekiSoshikiRyaku"
    :no-koron="true"
  />
  <DateInputYMD
    :label="`&nbsp;&nbsp;&nbsp;計上年月`"
    :label-width="96"
    v-model="logic.dtDenyoHiduke"
    :x="536"
    :y="40"
  />
  <InputWithDescription
    :label="`仕掛品重量`"
    :label-width="96"
    :label-align="`center`"
    :need-handle="false"
    v-model="logic.qtJuryo"
    :description="logic.ifTani"
    :width="128"
    :x="16"
    :y="80"
    :height="24"
    :label-background="`rgb(182, 198, 250)`"
    :input-width="128"
  />
  <BaseTextInput
    :label="`仕掛品重量2`"
    :label-width="96"
    :label-align="`center`"
    :need-handle="false"
    v-model="logic.qtJuryo"
    :description="logic.ifTani"
    :width="128"
    :x="250"
    :y="80"
    :height="24"
    :label-background="`rgb(182, 198, 250)`"
    :input-width="128"
  />
  <BaseDropdown
    :x="536"
    :y="8"
    :label="`&nbsp;* 管理工程`"
    v-model="logic.kanriCmb"
    :dropdown-width="304"
    :label-width="96"
    :options="logic.kanriCmbOptions"
  />
  <TotalAllItems
    :x="888"
    :y="80"
    :countValue="logic.qtKensu"
    :height="24"
    :width="88"
  />
  <ButtonExtend
    :x="936"
    :y="40"
    :button-title="`表示`"
    @on-click="logic.body_button04"
    :button-width="40"
  />
  <CheckboxText
    :x="808"
    :y="40"
    :checked-label="`原材料追加`"
    v-model="logic.chkGenzairyoAdd"
    :width="96"
  />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import WijmoGrid from '@/components/molecules/WijmoGrid.vue'
import DropdownInputSearchButtonWithResult from '@/components/molecules/DropdownInputSearchButtonWithResult.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import DateInputYMD from '@/components/atoms/DateInputYMD.vue'
import InputWithDescription from '@/components/molecules/InputWithDescription.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import TotalAllItems from '@/components/atoms/TotalAllItems.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import BaseTextInput from '@/components/atoms/BaseTextInput.vue'


// ロジックを導入する。
import useYPMSGSF070MLogic from './YPMSGSF070M-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'
const logic = reactive(useYPMSGSF070MLogic())
</script>
