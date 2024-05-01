<template>
  <TextLabelValue
    label="・製品コード"
    label-width="120"
    :textValue1="logic.topCdSeihin"
    x="24"
    y="8"
  />

  <TextLabelValue
    label="・製品名"
    label-width="88"
    :textValue1="logic.topNmSeihinRyakushiki"
    x="232"
    y="8"
  />

  <TextLabelValue
    label="営業倉庫別状況照会"
    label-width="552"
    label-wrapper-background="rgb(182, 198, 250)"
    label-align="center"
    :no-koron="true"
    x="24"
    y="40"
  />

  <TableCommon
    :heads="[
      [
        { id: '01', head: '倉庫名', width: 165 },
        {
          id: '02',
          head: '在庫数\n（C/S）',
          commaNumber: true,
          width: 80,
        },
        {
          id: '03',
          head: '在庫率\n（％）',
          commaNumber: true,
          minimumFractionDigits: 0,
          maximumFractionDigits: 1,
          width: 80,
        },
        { id: '04', head: '当月\n需要計画', commaNumber: true, width: 80 },
        { id: '05', head: '翌月\n需要計画', commaNumber: true, width: 80 },
        {
          id: '06',
          datumType: 'button',
          textAlign: 'center',
          width: 40,
          buttonTitle: '選択',
        },
      ],
    ]"
    datumHeight="25"
    :data="logic.meisaiList1"
    height="160"
    width="552"
    x="24"
    y="72"
  />

  <TextLabelValue
    label="工場在庫状況"
    label-width="368"
    label-wrapper-background="rgb(182, 198, 250)"
    label-align="center"
    :no-koron="true"
    x="592"
    y="40"
  />

  <TableCommon
    :heads="[
      [
        { id: '01', head: '倉庫', rowspan: 2, width: 32, textAlign: 'left' },
        { id: '02', head: 'エリア', width: 48, textAlign: 'left' },
        { id: '03', head: '製造日', rowspan: 2, width: 80, textAlign: 'left' },
        { id: '04', head: 'サブ\nロット', rowspan: 2, width: 48 },
        { id: '05', head: '数量', width: 64 },
        { id: '06', head: '単位', width: 32 },
        {
          id: '07',
          datumType: 'button',
          textAlign: 'center',
          rowspan: 2,
          width: 40,
          buttonTitle: '選択',
        },
      ],
      [
        { id: '08', head: 'ゾーン', width: 48, textAlign: 'left' },
        { id: '09', head: '端数', width: 64 },
        { id: '10', head: '単位', width: 32 },
      ],
    ]"
    v-model:data="logic.meisaiList2"
    x="592"
    y="72"
    width="368"
    height="385"
  />

  <GroupBox x="16" y="240" height="248" width="568" />

  <DateInputYMD
    label="* 出荷日"
    label-width="96"
    v-model="logic.dtShukka"
    x="32"
    y="256"
  />

  <DateInputYMD
    label="* 納品日"
    label-width="96"
    v-model="logic.dtNohin"
    x="248"
    y="256"
  />

  <TextNumberDisplay
    label="* 出荷場所"
    label-width="96"
    :data="[
      logic.cdShukkaBashoKojo,
      logic.cdShukkaBashoSoko,
      logic.cdShukkaBashoArea,
      logic.cdShukkaBashoZone,
    ]"
    :text-value="logic.nmShukkaBashoRyakushiki"
    x="32"
    y="288"
  />

  <TextNumberDisplay
    label="* 入荷場所"
    label-width="96"
    :data="[
      logic.cdNyukaBashoKojo,
      logic.cdNyukaBashoSoko,
      logic.cdNyukaBashoArea,
      logic.cdNyukaBashoZone,
    ]"
    x="32"
    y="320"
  />

  <ButtonWithText
    button-height="24"
    button-width="48"
    button-label="検索"
    @on-click="logic.searchBtn"
    :resultLabel="logic.stChiiki"
    x="336"
    y="320"
  />

  <!-- NOTE: 項目不明（画像に表示されない） -->
  <TextLabelValue :textValue1="logic.nmNyukaBashoRyakushiki" x="128" y="352" />

  <TextLabelValue
    label="* 製造日"
    label-width="96"
    :textValue1="logic.dtSeizo"
    x="32"
    y="384"
  />

  <TextLabelValue
    label="・サブロット"
    label-width="112"
    :textValue1="logic.ifSubLot"
    x="232"
    y="384"
  />

  <InputWithDescription
    label="* 出荷数量"
    label-width="96"
    width="104"
    v-model="logic.qtSuryo"
    :description="logic.ifSuryoTani"
    x="32"
    y="416"
  />

  <InputWithDescription
    label-width="96"
    width="104"
    v-model="logic.qtHasu"
    :description="logic.ifHasuTani"
    x="160"
    y="448"
  />
</template>

<script setup lang="ts">
import DateInputYMD from '@/components/atoms/DateInputYMD.vue'
import GroupBox from '@/components/atoms/GroupBox.vue'
import TextLabelValue from '@/components/atoms/TextLabelValue.vue'
import TextNumberDisplay from '@/components/molecules/TextNumberDisplay.vue'
import ButtonWithText from '@/components/molecules/ButtonWithText.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'
import InputWithDescription from '@/components/molecules/InputWithDescription.vue'

import useYSDBSSF411SLogic from './YSDBSSF411S-logic'
import { reactive } from 'vue'

const logic = reactive(useYSDBSSF411SLogic())
</script>
