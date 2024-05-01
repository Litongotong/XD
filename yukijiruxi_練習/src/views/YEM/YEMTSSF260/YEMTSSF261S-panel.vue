<template>
  <TextLabelValue
    x="24"
    y="16"
    labelWidth="64"
    label="年月"
    :text-value1="logic.txdYM"
  />
  <TextLabelValue
    x="192"
    y="16"
    labelWidth="64"
    label="帳合先"
    :text-value1="logic.txtChoaisaki"
  />
  <TextLabelValue
    x="568"
    y="16"
    labelWidth="88"
    label="職場"
    :text-value1="logic.txtKijokuSosiki"
  />
  <TextLabelValue
    x="24"
    y="48"
    labelWidth="64"
    label="計算方法"
    :text-value1="logic.txtKeisanHoho"
  />
  <TextLabelValue
    x="192"
    y="48"
    labelWidth="64"
    label="チェーン"
    :text-value1="logic.txtChainCd"
  />
  <TextLabelValue
    x="568"
    y="48"
    labelWidth="88"
    label="チェーン区分"
    :text-value1="logic.txtChainKubun"
  />

  <TotalAllItems x="744" y="80" :countValue="logic.txtCountDisp" />

  <TableCommon
    x="16"
    y="104"
    height="288px"
    :heads="[
      [
        {
          id: 'D01',
          head: '削除',
          textAlign: 'center',
          datumType: 'checkbox',
          width: 30,
          headTextAlign: 'center',
        },
        {
          id: 'D02',
          head: '製品\nコード',
          width: 60,
          headType: 'marked',
          headTextAlign: 'left',
        },
        {
          id: 'D03',
          head: '　',
          width: 32,
          datumType: 'button',
          headTextAlign: 'center',
        },
        {
          id: 'D04',
          head: '製品名称',
          width: 200,
          headType: 'marked',
          headTextAlign: 'center',
        },
        {
          id: 'D05',
          head: '精算方法',
          headType: 'marked',
          datumType: 'dropdown',
          width: 120,
          headTextAlign: 'center',
        },
        {
          id: 'D06',
          head: '基準納価',
          width: 120,
          headType: 'marked',
          headTextAlign: 'center',
        },
        {
          id: 'D07',
          head: '　',
          width: 32,
          datumType: 'button',
          headTextAlign: 'center',
        },
        {
          id: 'D08',
          head: 'マージン率',
          headType: 'marked',
          width: 120,
          headTextAlign: 'center',
        },
        {
          id: 'D09',
          head: '基準対策単価',
          headType: 'marked',
          width: 120,
          headTextAlign: 'center',
        },
      ],
    ]"
    :data="logic.datatable"
  />
  <ButtonExtend
    x="792"
    y="472"
    button-width="48"
    button-title="行追加"
    :disabled="false"
  />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import TotalAllItems from '@/components/atoms/TotalAllItems.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'

// ロジックを導入する。
import useYEMTSSF261SLogic from './YEMTSSF261S-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'
const logic = reactive(useYEMTSSF261SLogic())
</script>
