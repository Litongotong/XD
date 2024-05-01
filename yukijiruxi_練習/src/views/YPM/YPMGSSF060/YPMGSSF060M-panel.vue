<template>
  <!--実際の数値と少し違う-->
  <TextLabelValue
    label="帳票名"
    label-width="726"
    label-wrapper-background="rgb(182, 198, 250)"
    label-align="center"
    :no-koron="true"
    width="726"
    height="32"
    x="9"
    y="8"
  />

  <GroupBox width="744" height="304" x="16" y="8" />

  <BaseRadioButton
    label-width="328"
    display="生産日報"
    name="formName"
    v-model:model-value="logic.rdSeisanNichi"
    :value="logic.rdSeisanNichi"
    x="24"
    y="48"
  />

  <BaseRadioButton
    label-width="328"
    display="生産月報（個別表）"
    name="formName"
    :value="logic.rdKobetsuNen"
    x="24"
    y="80"
  />

  <BaseRadioButton
    label-width="328"
    display="生産月報（総括表）"
    name="formName"
    :value="logic.rdSoukatsuGetsu"
    x="360"
    y="80"
  />

  <BaseRadioButton
    label-width="328"
    display="原材料使用実績内訳表（様式１）"
    name="formName"
    :value="logic.rdJisseki1"
    x="24"
    y="112"
  />

  <BaseRadioButton
    label-width="328"
    display="原材料使用実績内訳表（様式２）"
    name="formName"
    :value="logic.rdJisseki2"
    x="360"
    y="112"
  />

  <BaseRadioButton
    label-width="328"
    display="決算棚卸表"
    name="formName"
    :value="logic.rdKessan"
    x="24"
    y="144"
  />

  <BaseRadioButton
    label-width="328"
    display="棚札（乳食）"
    name="formName"
    :value="logic.rdNyuusyoku"
    x="24"
    y="176"
  />

  <BaseRadioButton
    label-width="328"
    display="棚札（市乳）"
    name="formName"
    :value="logic.rdShinyuu"
    x="360"
    y="176"
  />

  <BaseRadioButton
    label-width="328"
    display="入荷予定一覧"
    name="formName"
    :value="logic.rdNyuuka"
    x="24"
    y="208"
  />

  <BaseRadioButton
    label-width="328"
    display="ピッキングリスト"
    name="formName"
    :value="logic.rdPicking"
    x="360"
    y="208"
  />

  <BaseRadioButton
    label-width="328"
    display="工程実績入力チェック(乳食品工場用)"
    name="formName"
    :value="logic.rdSelect11"
    x="24"
    y="240"
  />

  <InputSearchButtonWithResult
    type="text"
    label="* 工場・在庫場所"
    width="324"
    label-width="144"
    input-width="56"
    button-width="40"
    max-length="6"
    x="32"
    y="328"
    v-model:model-value="logic.cdKojoZaikoBasho"
    v-model:result="logic.nmKojoZaikoBasho"
  />

  <!--幅が少しずれてる-->
  <NumberInputFree
    label="倉庫"
    label-width="112"
    input-width="32"
    width="240"
    :num="3"
    :useDash="true"
    x="472"
    y="328"
  />

  <ButtonWithText
    button-height="24"
    button-width="40"
    button-label="検索"
    :disabled="true"
    x="712"
    y="328"
    :text-label="logic.nmBashoRyaku"
  />

  <!--実際の横幅と少し違う-->
  <TextDateInputYMDDouble
    label="* 期間　対象日"
    labelWaveLineWidth="24px"
    dateType="date"
    label-width="144"
    width="320"
    x="32"
    y="368"
    v-model:start-date-value="logic.dtTaishoFrom"
    v-model:end-date-value="logic.dtTaishoTo"
  />

  <TextDateInputYMDouble
    label="対象年月"
    labelWaveLineWidth="24px"
    dateType="month"
    label-width="112"
    width="320"
    x="471"
    y="368"
    v-model:start-date-value="logic.dtTaishoNengetsuFrom"
    v-model:end-date-value="logic.dtTaishoNengetsuTo"
  />

  <BaseDropdown
    label="出力対象品目"
    label-width="144"
    dropdown-width="68"
    :disabled="true"
    x="32"
    y="408"
    v-model:model-value="logic.stHinmokuCdShikibetsu"
    :options="[
      {
        disabled: true,
        display: '',
        value: '',
      },
      { display: '製品' },
      { display: '製品A' },
      { display: '製品B' },
    ]"
  />

  <CheckboxGroup
    :numberOfCheckboxes="1"
    :checkboxLabels="['']"
    :orientation="'vertical'"
    label="棚札数量出力"
    label-width="112"
    x="616"
    y="408"
    :modelValue="logic.tanafudaSuryoSyutsuryokuCheck"
  />

  <!--実際の横幅と少し違う-->
  <InputSearchButtonWithResult
    type="text"
    label="原材料"
    width="324"
    label-width="144"
    input-width="56"
    button-width="40"
    max-length="6"
    x="32"
    y="448"
    v-model:model-value="logic.cdGenzairyo"
    v-model:result="logic.nmGenzairyoRyaku"
    :disabled="true"
  />

  <CheckboxGroup
    :numberOfCheckboxes="1"
    :checkboxLabels="['']"
    :orientation="'vertical'"
    label="数量０印字無し"
    label-width="120"
    x="609"
    y="448"
    :modelValue="logic.tanafudaSuryoSyutsuryokuCheck"
  />
</template>

<script setup lang="ts">
import ButtonWithText from '@/components/molecules/ButtonWithText.vue'
import CheckboxGroup from '@/components/molecules/CheckboxGroup.vue'
import InputSearchButtonWithResult from '@/components/molecules/InputSearchButtonWithResult.vue'
import NumberInputFree from '@/components/molecules/NumberInputFree.vue'
import TextDateInputYMDouble from '@/components/molecules/TextDateInputYMDouble.vue'
import TextDateInputYMDDouble from '@/components/molecules/TextDateInputYMDDouble.vue'

import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import BaseRadioButton from '@/components/atoms/BaseRadioButton.vue'
import GroupBox from '@/components/atoms/GroupBox.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'

import useYPMGSSF060MLogic from './YPMGSSF060M-logic'
import { reactive } from 'vue'

const logic = reactive(useYPMGSSF060MLogic())
</script>
