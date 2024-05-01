<template>
  <RadioButtonGroup
    x="8"
    y="8"
    label="管理種別"
    labelWidth="88"
    :isInlineDisplay="true"
    :radios="[
      {
        name: 'radioGroupA',
        value: 'rdSeisanJoken',
        display: '精算条件',
      },
      {
        name: 'radioGroupA',
        value: 'rdHikiateSyudo',
        display: '引当条件（手動精算分）',
      },
    ]"
    v-model="logic.rdSeisanJoken"
  />
  <BaseDropdown
    dropdown-width="72"
    label="* 年月"
    labelWidth="80"
    :options="logic.cmbYMOptions"
    v-model="logic.cmbYM"
    x="16"
    y="40"
  />
  <InputSearchButtonWithResult
    x="248"
    y="40"
    type="text"
    label="帳合先"
    maxLength="6"
    :disabled="false"
    labelWidth="64"
    buttonWidth="36"
    inputWidth="48"
    v-model="logic.txtChoaisaki"
    :result="logic.txtChoaisakiRyakuNm"
    @on-click="logic.showTokuyakuten"
  />
  <InputSearchButtonWithResult
    x="600"
    y="40"
    type="text"
    label="支店・職場"
    maxLength="6"
    :disabled="false"
    labelWidth="80"
    buttonWidth="36"
    inputWidth="48"
    v-model="logic.txtShitenSyokubaCd"
    :result="logic.txtSonekiKanriSosikiRyakuNm"
    @on-click="logic.showSoshiki"
  />
  <BaseDropdown
    x="16"
    y="72"
    label="* 計算方法"
    labelWidth="80"
    dropdownWidth="120"
    v-model="logic.cmbKeisanHouho"
    :options="logic.cmbKeisanHouhoOpt"
  />
  <InputSearchButtonWithResult
    x="248"
    y="72"
    type="text"
    label="チェーン"
    maxLength="6"
    :disabled="false"
    labelWidth="64"
    buttonWidth="36"
    inputWidth="48"
    v-model="logic.txtChainCd"
    :result="logic.txtChainRyakuNm"
    @on-click="logic.showChain"
  />
  <InputSearchButtonWithResult
    x="600"
    y="72"
    type="text"
    label="担当者"
    maxLength="9"
    :disabled="false"
    labelWidth="80"
    buttonWidth="36"
    inputWidth="72"
    v-model="logic.txtTantoshaCd"
    :result="logic.txtJyugyoinNm"
    @on-click="logic.showJugyoin"
  />
  <ButtonExtend
    x="728"
    y="104"
    button-width="56"
    button-title="条件複写"
    :disabled="false"
    @click="logic.goJokenFukusha"
  />
  <ButtonExtend
    x="792"
    y="104"
    button-width="128"
    button-title="月次チェーン見込参照"
    :disabled="false"
    @click="logic.goGetsujiChain"
  />
  <ButtonExtend
    x="928"
    y="104"
    button-width="34"
    button-title="表示"
    :disabled="false"
    @on-click="logic.showData"
  />
  <ButtonGroupSelectAll
    x="8"
    y="128"
    :buttons="[
      {
        title: '全選択',
        disabled: false,
        width: 'auto',
        onClick: logic.selectAll,
      },
      {
        title: '全解除',
        disabled: false,
        width: 'auto',
        onClick: logic.unselectAll,
      },
    ]"
  />
  <TotalAllItems x="856" y="136" :countValue="logic.txtCountDispMain" />
  <TableCommon
    x="8"
    y="160"
    height="288px"
    :heads="[
      [
        {
          id: 'D01',
          head: '選\n択',
          textAlign: 'center',
          datumType: 'checkbox',
          width: 20,
          headTextAlign: 'center',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D02',
          head: '削\n除',
          textAlign: 'center',
          datumType: 'checkbox',
          width: 20,
          headTextAlign: 'center',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D03',
          head: '　',
          width: 32,
          datumType: 'button',
          headTextAlign: 'center',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D04',
          head: '　',
          width: 32,
          datumType: 'button',
          headTextAlign: 'center',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D05',
          head: '帳合先\nコード',
          headType: 'marked',
          width: 60,
          headTextAlign: 'left',
          datumType: 'input-text',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D06',
          head: '　',
          width: 18,
          datumType: 'button',
          headTextAlign: 'center',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D07',
          head: '帳合先名',
          headType: 'marked',
          width: 86,
          headTextAlign: 'left',
        },
        {
          id: 'D08',
          head: 'チェーン\nコード',
          headType: 'marked',
          width: 75,
          headTextAlign: 'left',
          datumType: 'input-text',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D09',
          head: '　',
          width: 18,
          datumType: 'button',
          headTextAlign: 'center',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D10',
          head: 'チェーン名',
          width: 86,
          headType: 'marked',
          headTextAlign: 'left',
        },
        {
          id: 'D11',
          head: 'チェーン\n区分',
          width: 74,
          datumType: 'dropdown',
          headType: 'marked',
          headTextAlign: 'left',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D12',
          head: '職場\nコード',
          headType: 'marked',
          width: 65,
          headTextAlign: 'left',
          datumType: 'input-text',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D13',
          head: '　',
          width: 18,
          datumType: 'button',
          headTextAlign: 'center',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D14',
          head: '職場名',
          headType: 'marked',
          width: 65,
          headTextAlign: 'left',
        },
        {
          id: 'D15',
          head: '担当者\nコード',
          headType: 'marked',
          width: 65,
          headTextAlign: 'left',
          datumType: 'input-text',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D16',
          head: '　',
          width: 18,
          datumType: 'button',
          headTextAlign: 'center',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'D17',
          head: '担当者',
          width: 64,
          headTextAlign: 'left',
          headType: 'marked',
        },
        {
          id: 'D18',
          head: '確認日',
          width: 73,
          headTextAlign: 'left',
          headType: 'marked',
        },
        {
          id: 'D19',
          head: '確認者',
          width: 60,
          headTextAlign: 'left',
          headType: 'marked',
        },
      ],
    ]"
    :data="logic.datatable"
  />
  <ButtonExtend
    x="904"
    y="464"
    button-width="48"
    button-title="行追加"
    :disabled="false"
    @onClick="logic.insertRow"
  />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import RadioButtonGroup from '@/components/molecules/RadioButtonGroup.vue'
import InputSearchButtonWithResult from '@/components/molecules/InputSearchButtonWithResult.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import ButtonGroupSelectAll from '@/components/molecules/ButtonGroupSelectAll.vue'
import TotalAllItems from '@/components/atoms/TotalAllItems.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'

// ロジックを導入する。
import useYEMTSSF260MLogic from './YEMTSSF260M-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'
const logic = reactive(useYEMTSSF260MLogic())
</script>
