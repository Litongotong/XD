<template>
  <TableCommon
    :heads ="[[{'id':'1','textAlign':'end','width':'32','headBackground':'rgb(123, 149, 251)','commaNumber': true,'datumType':'checkbox','minimumFractionDigits':3,'head':'削除'},{'id':'2','textAlign':'start','width':'80','headBackground':'rgb(123, 149, 251)','commaNumber': true,'datumType':'input-text','minimumFractionDigits':3,'head':'事業コード'},{'id':'3','textAlign':'end','width':'32','headBackground':'rgb(123, 149, 251)','commaNumber': true,'datumType':'button','minimumFractionDigits':3,'head':undefined},{'id':'4','textAlign':'start','width':'176','headBackground':undefined,'commaNumber': true,'datumType':'text','minimumFractionDigits':3,'head':'事業名'},{'id':'5','textAlign':'end','width':'32','headBackground':undefined,'commaNumber': true,'datumType':'text','minimumFractionDigits':3,'head':'階層'},{'id':'6','textAlign':'end','width':'64','headBackground':'rgb(123, 149, 251)','commaNumber': true,'datumType':'input-number','minimumFractionDigits':3,'head':'予算比率'},{'id':'7','textAlign':'end','width':'64','headBackground':'rgb(123, 149, 251)','commaNumber': true,'datumType':'input-number','minimumFractionDigits':3,'head':'実績比率'},{'id':'8','textAlign':'end','width':'64','headBackground':undefined,'commaNumber': true,'datumType':'text','minimumFractionDigits':3,'head':'前回予算'},{'id':'9','textAlign':'end','width':'64','headBackground':undefined,'commaNumber': true,'datumType':'text','minimumFractionDigits':3,'head':'前回実績'},{'id':'10','textAlign':'start','width':'144','headBackground':undefined,'commaNumber': true,'datumType':'text','minimumFractionDigits':3,'head':'更新日時'},{'id':'11','textAlign':'start','width':'144','headBackground':undefined,'commaNumber': true,'datumType':'text','minimumFractionDigits':3,'head':'更新者'}],]"
    v-model:data="vModelTempData"
    :height="301"
    :width="928"
    :x="24"
    :y="136"
    :datum-height="24"
    head-height="24"
  />
  <TextLabelValue
    :x="920"
    :y="80"
    :label="`件`"
    :label-width="-752"
    id="cdKanjokamoku"
    :text-value1="logic.extra.get('cdKanjokamoku').value.value"
    :no-koron=" false"
  />
  <TextLabelValue
    :x="24"
    :y="72"
    :label="`* 組織　　　　　　`"
    :label-width="144"
    id="cdSoshiki"
    :text-value1="logic.extra.get('cdSoshiki').value.value"
    :no-koron=" false"
  />
  <TextLabelValue
    :x="216"
    :y="104"
    :label="`―`"
    :label-width="24"
    id="cdHojokamoku"
    :text-value1="logic.extra.get('cdHojokamoku').value.value"
    :no-koron=" true"
  />
  <TextLabelValue
    :x="440"
    :y="104"
    :label="`―`"
    :label-width="24"
    id="nmHojokamoku"
    :text-value1="logic.extra.get('nmHojokamoku').value.value"
    :no-koron=" true"
  />
  <BaseNumberInput
    :label="`合　計`"
    :label-width="88"
    :label-align="`center`"
    :no-koron=" true"
    v-model="vModelTempData"
    :width="64"
    :x="296"
    :y="456"
    :height="24"
    :label-background="`rgb(182, 198, 250)`"
    :input-width="64"
  />
  <BaseDropdown
    :x="24"
    :y="40"
    :label="`* 年度　　　　　　`"
    v-model="vModelTempData"
    :dropdown-width ="64"
    :label-width="144"
    id="dtNendoOptions"
    :options="logic.extra.get('dtNendoOptions').value.value"
  />
  <BaseText
    :x ="24"
    :y ="8"
    :height="24"
    :width="144"
    :label="`* 配賦区分　　　　`"
  />
  <BaseText
    :x ="240"
    :y ="40"
    :height="24"
    :width="24"
    :label="`年`"
    :label-background="'white'"
  />
  <BaseText
    :x ="848"
    :y ="80"
    :height="24"
    :width="24"
    :label="`全`"
  />
  <BaseText
    :x ="856"
    :y ="104"
    :height="24"
    :width="88"
    :label="`（単位％）`"
  />
  <TextInput
    :x ="248"
    :y ="72"
    :height="24"
    :width="112"
  />
  <TextInput
    :x ="328"
    :y ="104"
    :height="24"
    :width="112"
  />
  <CheckboxText
    :x ="0"
    :y ="0"
    :checked-label="`事業登録比率`"
    v-model="logic.extra.get('jigyoTorokuHiritsu').value.value"
    :width="112"
  />
  <CheckboxText
    :x ="120"
    :y ="0"
    :checked-label="`ライン比率（共通職場→ライン職場）`"
    v-model="vModelTempBool"
    :width="264"
  />
  <ButtonExtend
    :x="848"
    :y="48"
    :button-title="`複写`"
    :width="32"
    @on-click="logic.extra.wrap(logic.fukusya)"
  />

  <!-- ActionCode -->
  <ButtonExtend
    :x="896"
    :y="48"
    :button-title="`表示`"
    :width="32"
    @on-click="logic.extra.wrap('body_button03')"
  />
  <!-- ActionCode to Method -->
  <ButtonExtend
    :x="896"
    :y="48"
    :button-title="`表示`"
    :width="32"
    @on-click="logic.extra.wrap(logic.showJigyoTorokuHiritsu)"
  />
  <ButtonExtend
    :x="216"
    :y="72"
    :button-title="`検索`"
    :width="32"
    @on-click="logic.extra.wrap(logic.body_button05)"
  />
  <ButtonExtend
    :x="288"
    :y="104"
    :button-title="`検索`"
    :width="32"
    @on-click="logic.extra.wrap(logic.body_button06)"
  />
  <ButtonExtend
    :x="888"
    :y="456"
    :button-title="`行追加`"
    :width="48"
    @on-click="logic.extra.wrap(logic.addRow)"
  />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import TableCommon from '@/components/molecules/TableCommon.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import BaseNumberInput from '@/components/atoms/BaseNumberInput.vue'
import BaseDropdown from '@/components/atoms/BaseDropdown.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'

// ロジックを導入する。
import YBMKKSF620MLogic from './YBMKKSF620M-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive, ref } from 'vue'

const logic = new YBMKKSF620MLogic()

</script>
