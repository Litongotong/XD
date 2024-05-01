<template>
  <TableCommon
    :heads="[
      [
        {
          id: '1',
          textAlign: 'start',
          width: '74',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '製造日',
        },
        {
          id: '2',
          textAlign: 'start',
          width: '144',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '製造ロット',
        },
        {
          id: '3',
          textAlign: 'start',
          width: '48',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: 'コード',
        },
        {
          id: '4',
          textAlign: 'start',
          width: '214',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '原材料略式名称',
        },
        {
          id: '5',
          textAlign: 'end',
          width: '20',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '区\n分',
        },
        {
          id: '6',
          textAlign: 'end',
          width: '20',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '単\n位',
        },
        {
          id: '7',
          textAlign: 'right',
          width: '80',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 0,
          head: '数量',
        },
        {
          id: '8',
          textAlign: 'right',
          width: '80',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '単価',
        },
        {
          id: '9',
          textAlign: 'right',
          width: '95',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '金額（円）',
        },
        {
          id: '10',
          textAlign: 'right',
          width: '80',
          headBackground: 'rgb(123, 149, 251)',
          commaNumber: true,
          datumType: 'input-number',
          minimumFractionDigits: 0,
          head: '修正数量',
        },
        {
          id: '11',
          textAlign: 'right',
          width: '100',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 0,
          head: '修正金額（円）',
        },
      ],
    ]"
    v-model:data="logic.body_spread01"
    :height="384"
    :width="980"
    :x="16"
    :y="112"
    :datum-height="32"
    head-height="20"
  />
  <DropdownInputSearchButtonWithResult
    :x="`16`"
    :y="` 40`"
    :label="`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 製品`"
    :label-width="` 104`"
    :dropdown-width="` 80`"
    :dropdown-value="logic.hinmokuCmb"
    :options="logic.hinmokuCmbOptions"
    :input-width="` 56`"
    :input-value="logic.cdHinmoku"
    @on-click="logic.searchBtn"
    :button-width="` 40`"
    :button-label="`検索`"
  />
  <TextLabelValue
    :x="`16`"
    :y="` 8`"
    :label="`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工場`"
    :label-width="104"
    :text-value1="logic.nmJoisonekiSoshikiRyaku"
    :label-koron-color="false"
  />
  <TextLabelValue
    :label="`&nbsp;&nbsp;&nbsp;計上年月`"
    :label-width="` 96`"
    :no-koron="false"
    v-model="logic.dtDenyoHiduke"
    :x="`536`"
    :y="` 40`"
    :height="` 24`"
  />
  <BaseNumberInput
    :label="`仕掛品重量`"
    :label-width="` 96`"
    :label-align="`center`"
    :no-koron="true"
    v-model="logic.qtJuryo"
    :width="` 128`"
    :x="`16`"
    :y="` 80`"
    :height="` 24`"
    :label-background="`rgb(182, 198, 250)`"
    :input-width="` 128`"
  />
  <BaseDropdown
    :x="`536`"
    :y="` 8`"
    :label="`&nbsp;* 管理工程`"
    v-model="logic.kanriCmb"
    :dropdown-width="` 304`"
    :label-width="` 96`"
    :options="logic.kanriCmbOptions"
  />
  <TotalAllItems
    :x="`888`"
    :y="` 80`"
    v-model="logic.qtKensu"
    :height="` 24`"
    :width="` 88`"
  />
  <CheckboxText
    :x="`808`"
    :y="` 40`"
    :checked-label="`原材料追加`"
    v-model="logic.chkGenzairyoAdd"
    :height="` 24`"
    :width="` 96`"
  />
  <ButtonExtend
    :x="`936`"
    :y="` 40`"
    :button-title="`表示`"
    :width="` 40`"
    @on-click="logic.body_button04"
    :button-width="` 40`"
    :button-height="` 24`"
  />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import TableCommon from '@/components/molecules/TableCommon.vue'
import DropdownInputSearchButtonWithResult from '@/components/molecules/DropdownInputSearchButtonWithResult.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import BaseNumberInput from '@/components/atoms/BaseNumberInput.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import TotalAllItems from '@/components/atoms/TotalAllItems.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'

// ロジックを導入する。
import useYPMSGSF070MLogic from '../YPMSGSF070/YPMSGSF070M-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'
const logic = reactive(useYPMSGSF070MLogic())
</script>
