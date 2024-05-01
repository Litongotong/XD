<template>
   <WijmoGrid
   :columns="logic.spreadColumns"
    :item-source="logic.body_spread01"
    :height="200"
    :width="408"
    :x="440"
    :y="200"
   
  /> -
  <!-- <TableCommon
    :heads="[
      [
        {
          id: '1',
          textAlign: 'end',
          width: '32',
          headBackground: 'rgb(123, 149, 251)',
          commaNumber: true,
          datumType: 'checkbox',
          minimumFractionDigits: 3,
          head: '選\n択',
          
        },
        {
          id: '2',
          textAlign: 'start',
          width: '48',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '店\nコード',
        },
        {
          id: '3',
          textAlign: 'start',
          width: '240',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '店名',
        },
        {
          id: '4',
          textAlign: 'start',
          width: '160',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '事業区分',
        },
        {
          id: '5',
          textAlign: 'start',
          width: '146',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '地域区分',
        },
        {
          id: '6',
          textAlign: 'start',
          width: '160',
          headBackground: undefined,
          commaNumber: true,
          datumType: 'text',
          minimumFractionDigits: 3,
          head: '職場',
        },
      ],
    ]"
    v-model:data="logic.spread"
    :height="200"
    :width="408"
    :x="440"
    :y="200"
    :datum-height="46"
    head-height="24"
  /> -->
  <BaseText
    :x="8"
    :y="8"
    :height="24"
    :width="416"
    :label="`店群検索`"
    :label-color="`rgb(0, 0, 0)`"
    :label-background="`rgb(53, 105, 237)`"
  />
  <BaseText
    :label="`店検索`"
    :label-color="`rgb(0, 0, 0)`"
    :label-background="`rgb(53, 105, 237)`"
    :height="24"
    :width="416"
    :data="[logic.nmTengun, logic.nmTen, logic.nmTengunKana, logic.nmTenKana]"
    :x="440"
    :y="8"
  />
  <BaseTextInput
    :x="8"
    :y="40"
    :label="`店群名　`"
    :label-width="104"
    :max-length="10"
    :width="230"
    v-model="logic.nmTengun"
    @on-input="() => {}"
  />
  <BaseTextInput
    :x="8"
    :y="72"
    :label="`店群カナ名　`"
    :label-width="104"
    :max-length="10"
    :width="130"
    v-model:model-value="logic.nmTengunKana"
    @on-input="() => {}"
  />
  <BaseTextInput
    :x="440"
    :y="40"
    :label="`店名　`"
    :label-width="104"
    :max-length="10"
    :width="230"
    v-model="logic.nmTen"
  />
  <BaseTextInput
    :x="440"
    :y="72"
    :label="`店カナ名　`"
    :label-width="104"
    :max-length="10"
    :width="130"
    v-model:nmTenKana="logic.nmTenKana"
    @on-input="() => {}"
  />
  <BaseTextInput
    :x="8"
    :y="168"
    :label="`店群コード　`"
    :label-width="104"
    :max-length="10"
    :width="50"
    v-model:model-value="logic.cdTengun"
  />
  <BaseTextInput
    :x="440"
    :y="168"
    :label="`店コード　　`"
    :label-width="104"
    :max-length="10"
    :width="50"
    v-model="logic.cdTen"
  />
  <BaseTextInput
    :x="16"
    :y="408"
    :label="`&nbsp;店群略称　`"
    :label-width="96"
    :max-length="10"
    :width="150"
    v-model:model-value="logic.nmTengunRyaku"
    @on-input="() => {}"
  />
  <BaseDropdown
    :x="8"
    :y="104"
    :label="`店群体系　　`"
    v-model="logic.noKaisolevel"
    :dropdown-width="152.0"
    :label-width="104"
    :options="logic.noKaisolevelOptions"
  />
  <BaseDropdown
    :x="440"
    :y="104"
    :label="`事業区分　　`"
    v-model="logic.stJigyo"
    :dropdown-width="152.0"
    :label-width="104"
    :options="logic.stJigyoOpt"
  />
  <BaseDropdown
    :x="8"
    :y="136"
    :label="`地域区分　　`"
    v-model="logic.stChiiki1"
    :dropdown-width="152.0"
    :label-width="104"
    :options="logic.stChiiki1Options"
  />
  <BaseDropdown
    :x="440"
    :y="136"
    :label="`地域区分　　`"
    v-model="logic.stChiiki2"
    :label-width="104"
    :dropdown-width="152.0"
    :options="logic.stChiiki2Options"
  />
  <ButtonExtend
    :x="368"
    :y="168"
    :button-title="`店群検索`"
    @on-click="logic.body_button01"
    :button-width="56"
  />
  <ButtonExtend
    :x="800"
    :y="168"
    :button-title="`店検索`"
    @on-click="logic.body_button05"
    :button-width="48"
  />
  <ButtonExtend
    :x="296"
    :y="408"
    :button-title="`次へ`"
    @on-click="logic.body_button02"
    :button-width="32"
  />
  <ButtonExtend
    :x="336"
    :y="408"
    :button-title="`前へ`"
    @on-click="logic.body_button03"
    :button-width="32"
  />
  <ButtonExtend
    :x="376"
    :y="408"
    :button-title="`店表示`"
    @on-click="logic.body_button04"
    :button-width="48"
  />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import WijmoGrid from '@/components/molecules/WijmoGrid.vue'
import TextNumberDisplay from '@/components/molecules/TextNumberDisplay.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import BaseTextInput from '@/components/atoms/BaseTextInput.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'
// ロジックを導入する。
import useYBMKKSF600SLogic from './YBMKKSF600S-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'
const logic = reactive(useYBMKKSF600SLogic())
</script>
