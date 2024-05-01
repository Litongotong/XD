<template>
  <!-- 共通部品修正後、画面は正しく表示される想定 -->
  <TextDateInputYMDDouble
    label="納品日"
    textLabelWaveLineWidth="20px"
    dateType="date"
    label-width="74"
    width="262"
    x="16"
    y="8"
    v-model:start-date-value="logic.nohinFdt"
    v-model:end-date-value="logic.nohinTdt"
  />

  <TextDateInputYMDDouble
    label="受注日"
    textLabelWaveLineWidth="20px"
    dateType="date"
    label-width="60"
    width="248"
    x="288"
    y="8"
    v-model:start-date-value="logic.jyuchuFdt"
    v-model:end-date-value="logic.jyuchuTdt"
  />

  <BaseTextInput
    label="発注番号"
    label-width="76"
    width="80"
    max-length="10"
    x="660"
    y="8"
    v-model:model-value="logic.hachuNo"
    @on-input="() => {}"
  />

  <BaseTextInput
    label="受注番号"
    label-width="76"
    width="80"
    max-length="10"
    x="828"
    y="8"
    v-model:model-value="logic.jyuchuNo"
    @on-input="() => {}"
  />

  <InputSearchButtonWithResult
    type="text"
    label="納品先"
    width="318"
    label-width="74"
    input-width="48"
    button-width="40"
    max-length="6"
    x="16"
    y="40"
    v-model:model-value="logic.nouhinsakiCd"
    v-model:result="logic.nouhinsakiNm"
  />

  <InputSearchButtonWithResult
    type="text"
    label="特約店"
    width="316"
    label-width="76"
    input-width="48"
    button-width="40"
    max-length="6"
    x="336"
    y="40"
    v-model:model-value="logic.tokuyakutenCd"
    v-model:result="logic.tokuyakutenNm"
  />

  <InputSearchButtonWithResult
    type="text"
    label="品目"
    width="324"
    label-width="76"
    input-width="48"
    button-width="40"
    max-length="5"
    x="660"
    y="40"
    v-model:model-value="logic.hinmokuCd"
    v-model:result="logic.hinmokuNm"
  />

  <BaseDropdown
    label="出荷指示"
    label-width="74"
    dropdown-width="68"
    x="16"
    y="72"
    v-model:model-value="logic.syukasiji"
    :options="[
      {
        disabled: true,
        display: '',
        value: '',
      },
      { display: '指示A' },
      { display: '指示B' },
      { display: '指示C' },
    ]"
  />

  <BaseDropdown
    label="出荷方面"
    label-width="76"
    dropdown-width="148"
    x="208"
    y="72"
    v-model:model-value="logic.syukaHomen"
    :options="[
      {
        disabled: true,
        display: '',
        value: '',
      },
      { display: '方面A' },
      { display: '方面B' },
      { display: '方面C' },
    ]"
  />

  <!-- 共通部品修正後、画面は正しく表示される想定 -->
  <NumberInputFree
    label="在庫場所"
    label-width="76"
    input-width="48"
    :num="3"
    :useDash="true"
    x="440"
    y="72"
  />

  <ButtonWithText
    width="280"
    button-height="24"
    button-width="40"
    button-label="検索"
    x="644"
    y="72"
    :text-label="logic.zaikoBashoNm"
  />

  <BaseDropdown
    label="受払区分"
    label-width="74"
    dropdown-width="108"
    x="16"
    y="104"
    v-model:model-value="logic.ukebaraiKbn"
    :options="[
      {
        disabled: true,
        display: '',
        value: '',
      },
      { display: '区分A' },
      { display: '区分B' },
      { display: '区分C' },
    ]"
  />

  <BaseDropdown
    label="受注形態"
    label-width="76"
    dropdown-width="80"
    x="208"
    y="104"
    v-model:model-value="logic.jyuchuKeitai"
    :options="[
      {
        disabled: true,
        display: '',
        value: '',
      },
      { display: '形態A' },
      { display: '形態B' },
      { display: '形態C' },
    ]"
  />

  <BaseDropdown
    label="地域"
    label-width="48"
    dropdown-width="116"
    x="376"
    y="104"
    v-model:model-value="logic.chiiki"
    :options="[
      {
        disabled: true,
        display: '',
        value: '',
      },
      { display: '地域A' },
      { display: '地域B' },
      { display: '地域C' },
    ]"
  />

  <CheckboxGroup
    width="192"
    :numberOfCheckboxes="2"
    :checkboxLabels="['作成者のみ', '更新者のみ']"
    :orientation="'horizontal'"
    x="568"
    y="104"
  />

  <BaseTextInput
    label="ユーザID"
    label-width="75"
    width="72"
    max-length="8"
    x="808"
    y="104"
    :disabled="true"
    v-model:model-value="logic.userId"
    @on-input="() => {}"
  />

  <CheckboxGroup
    :numberOfCheckboxes="5"
    :checkboxLabels="[
      'バッチ指定のみ',
      '対象製品のみ',
      '未引当のみ',
      '品薄宣言のみ',
      '未出力のみ',
    ]"
    :orientation="'horizontal'"
    width="545"
    x="18"
    y="143"
  />

  <BaseDropdown
    label="事業"
    label-width="42"
    dropdown-width="89"
    x="568"
    y="144"
    v-model:model-value="logic.jigyoKbn"
    :options="[
      {
        disabled: true,
        display: '',
        value: '',
      },
      { display: '事業A' },
      { display: '事業B' },
      { display: '事業C' },
    ]"
  />

  <CheckboxGroup
    :numberOfCheckboxes="2"
    :checkboxLabels="['訂正を含む', '出荷指示後<br>数量訂正のみ']"
    :orientation="'horizontal'"
    x="704"
    y="126"
    width="237"
    height="59"
    :modelValue="false"
    :showOuterBorder="true"
    outerBorderLabel="CSV用"
  />

  <ButtonExtend
    button-title="表示"
    :disabled="false"
    button-width="40"
    button-height="24"
    @on-click="logic.displayBtn"
    x="946"
    y="136"
  />

  <BaseText
    label="*納品日、受注日、受注番号、発注番号、納品先、特約店のいずれか一つを必ず入力してください"
    width="624"
    x="16"
    y="176"
  />

  <PagingSample
    :current-page="1"
    :current-count="100"
    :total-count="471"
    width="208"
    x="776"
    y="176"
  />

  <TableCommon
    :heads="[
      [
        {
          id: 'button',
          buttonTitle: '詳',
          width: 36,
          datumType: 'button',
          headBackground: 'var(--color-light-blue)',
        },
        {
          id: 'siji',
          head: '指示',
          width: 73,
          headType: 'marked',
        },
        {
          id: 'hikiate',
          head: '引当',
          width: 78,
          headType: 'marked',
        },
        {
          id: 'jyuchuDt',
          head: '受注日',
          width: 63,
          headType: 'marked',
        },
        {
          id: 'nohinDt',
          head: '納品日',
          width: 101,
          headType: 'marked',
        },
        {
          id: 'hachuNo',
          head: '発注番号',
          width: 145,
          headType: 'marked',
        },
        {
          id: 'jyuchuNo',
          head: '受注番号',
          width: 75,
          headType: 'marked',
        },
        {
          id: 'tokuyakuten',
          head: '特約店',
          width: 76,
          headType: 'marked',
        },
        {
          id: 'nohinsaki',
          head: '納品先',
          width: 80,
          headType: 'marked',
        },
        {
          id: 'ukebaraiKbn',
          head: '受払区分',
          width: 104,
          headType: 'marked',
        },
        {
          id: 'keitai',
          head: '形態',
          width: 80,
          headType: 'marked',
        },
      ],
    ]"
    :data="logic.SMSJCFSpread1"
    width="984"
    height="260"
    x="8"
    y="200"
  />

  <GroupBox
    x="16"
    y="458"
    width="576"
    height="48"
    border-style="2px groove rgb(192, 192, 192)"
  />

  <BaseText label="【出力帳票】" x="28" y="471" width="88" height="20" />

  <RadioButtonGroup
    :isDisplayOuterBorder="false"
    :isInlineDisplay="true"
    x="116"
    y="471"
    width="384"
    height="24"
    :radios="[
      {
        name: 'radioGroupA',
        value: 'outList1',
        disabled: false,
        display: '受注一覧',
      },
      {
        name: 'radioGroupA',
        value: 'outList2',
        disabled: false,
        display: '欠品一覧',
      },
      {
        name: 'radioGroupA',
        value: 'outList3',
        disabled: false,
        display: 'オンライン受注チェックリスト',
      },
    ]"
  />

  <PagingWithChangeCurrent
    width="288"
    x="664"
    y="472"
    :currentPage="12"
    :totalPage="1000"
    :page-input-width="40"
    :change-page="
      () => {
        console.info('change page')
      }
    "
    :set-page-button="{
      title: '頁指定',
      width: '64',
      onClick: () => {
        console.info('set page')
      },
    }"
    :pre-page-button="{
      title: '<',
      width: '48',
      onClick: () => {
        console.info('pre page')
      },
    }"
    :next-page-button="{
      title: '>',
      width: '48',
      onClick: () => {
        console.info('next')
      },
    }"
  />
</template>

<script setup lang="ts">
import ButtonWithText from '@/components/molecules/ButtonWithText.vue'
import CheckboxGroup from '@/components/molecules/CheckboxGroup.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import GroupBox from '@/components/atoms/GroupBox.vue'
import InputSearchButtonWithResult from '@/components/molecules/InputSearchButtonWithResult.vue'
import NumberInputFree from '@/components/molecules/NumberInputFree.vue'
import PagingSample from '@/components/molecules/PagingSample.vue'
import PagingWithChangeCurrent from '@/components/molecules/PagingWithChangeCurrent.vue'
import RadioButtonGroup from '@/components/molecules/RadioButtonGroup.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'
import TextDateInputYMDDouble from '@/components/molecules/TextDateInputYMDDouble.vue'

import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import BaseTextInput from '@/components/atoms/BaseTextInput.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'

import useYSDJSSF010MLogic from './YSDJSSF010M-logic'
import { reactive } from 'vue'

const logic = reactive(useYSDJSSF010MLogic())
</script>
