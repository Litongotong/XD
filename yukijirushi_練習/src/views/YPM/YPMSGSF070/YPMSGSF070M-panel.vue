<template>
  <TextLabelValue
    label="　 工場"
    label-width="104"
    :text-value1="logic.nmJoisonekiSoshikiRyaku"
    x="16"
    y="8"
  />

  <BaseDropdown
    dropdown-width="304"
    label="＊ 管理工程"
    label-width="96"
    :options="logic.kanriCmbOptions"
    v-model="logic.kanriCmb"
    x="536"
    y="8"
  />

  <DropdownInputSearchButtonWithResult
    button-width="40"
    dropdown-width="80"
    input-width="56"
    label="＊ 製品"
    label-width="104"
    :options="logic.hinmokuCmbOptions"
    v-model:dropdown-value="logic.hinmokuCmb"
    v-model:input-value="logic.cdHinmoku"
    @on-click="logic.searchBtn"
    :result="logic.nmHinmoku"
    x="16"
    y="40"
  />

  <TextLabelValue
    label="　 計上年月"
    label-width="96"
    :text-value1="logic.dtDenyoHiduke"
    x="536"
    y="40"
  />

  <CheckboxText
    checked-label="原材料追加"
    v-model="logic.chkGenzairyoAdd"
    :disabled="true"
    x="808"
    y="40"
  />

  <ButtonExtend
    button-title="表示"
    @on-click="logic.body_button04"
    width="40"
    x="936"
    y="40"
  />

  <InputWithDescription
    label="仕掛品重量"
    label-width="96"
    label-wrapper-background="rgb(182, 198, 250)"
    label-align="center"
    textAlign="right"
    :no-koron="true"
    v-model="logic.qtJuryo"
    :description="logic.ifTani"
    width="128"
    x="16"
    y="80"
  />

  <TotalAllItems :count-value="logic.qtKensu" x="888" y="80" />

  <TableCommon
    :heads="logic.spread01Heads"
    :data="logic.body_spread01"
    height="384"
    datum-height="32"
    head-height="20"
    x="16"
    y="112"
  />
</template>

<script lang="ts" setup>
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import DropdownInputSearchButtonWithResult from '@/components/molecules/DropdownInputSearchButtonWithResult.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import TotalAllItems from '@/components/atoms/TotalAllItems.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import InputWithDescription from '@/components/molecules/InputWithDescription.vue'

import useYPMSGSF070MLogic from './YPMSGSF070M-logic'
import { reactive } from 'vue'

const logic = reactive(useYPMSGSF070MLogic())
</script>
