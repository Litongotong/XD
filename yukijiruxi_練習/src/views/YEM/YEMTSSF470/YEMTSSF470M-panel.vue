<template>
  <FileUpload
    label="＊ファイル名"
    label-width="82"
    input-width="678"
    button-title="選択"
    button-width="182"
    x="30"
    y="32"
    @on-change="logic.uploadFile"
  />

  <CheckboxText
    checked-label="タイトル行有"
    width="112"
    x="800"
    y="64"
    v-model="logic.chkTitleGyoUmu"
  />

  <InputSearchButtonWithResult
    type="text"
    label="ユーザ"
    label-width="72"
    input-width="72"
    button-width="40"
    v-model="logic.txtUserId"
    :result="logic.txtUserNm"
    @on-click="logic.gene054"
    x="40"
    y="96"
  />

  <DateInputYMDHmsStartEnd
    label="取込日時"
    label-width="72"
    x="40"
    y="136"
    v-model:start-date-value="logic.datTorikomiKaishi"
    v-model:end-date-value="logic.datTorikomiShuryo"
  />

  <ButtonExtend
    button-title="表示"
    button-width="40"
    x="936"
    y="144"
    @on-click="logic.body_button01"
  />

  <TotalAllItems :countValue="logic.txtCountDisp" x="920" y="176" />

  <!-- 20231121 wangxin NOTE: width="968px" -->
  <TableCommon
    height="296px"
    datumHeight="22"
    x="24"
    y="200"
    :heads="[
      [
        {
          id: 'select',
          head: '選択',
          textAlign: 'center',
          datumType: 'checkbox',
          width: '32',
        },
        {
          id: 'nmUserShimei',
          head: 'ユーザ名',
          headType: 'marked',
          headTextAlign: 'center',
          width: '140',
        },
        {
          id: 'nmFile',
          head: 'ファイル名',
          headType: 'marked',
          headTextAlign: 'center',
          width: '186',
        },
        {
          id: 'ifTirikomiKekka',
          head: '処理結果',
          headType: 'marked',
          headTextAlign: 'center',
          width: '72',
        },
        {
          id: 'tmTorikomi',
          head: '取込日時',
          headType: 'marked',
          headTextAlign: 'center',
          width: '130',
        },
        {
          id: 'nuTorikomiKensu',
          head: '取込件数',
          headTextAlign: 'right',
          width: '64',
        },
        { id: 'ifBiko', head: '備考', width: '440' },
      ],
    ]"
    :data="logic.spdSpread"
  />
</template>

<script lang="ts" setup>
// 共通部品を導入する。
import ButtonExtend from '@/components/atoms/ButtonExtend.vue'
import CheckboxText from '@/components/molecules/CheckboxText.vue'
import DateInputYMDHmsStartEnd from '@/components/molecules/DateInputYMDHmsStartEnd.vue'
import InputSearchButtonWithResult from '@/components/molecules/InputSearchButtonWithResult.vue'
import TableCommon from '@/components/molecules/TableCommon.vue'
import TotalAllItems from '@/components/atoms/TotalAllItems.vue'
import FileUpload from '@/components/molecules/FileUpload.vue'

// ロジックを導入する。
import useYEMTSSF470MLogic from './YEMTSSF470M-logic'

// ロジックのインスタンス取得。リアクティビティを保つため、reactiveを使用する。
import { reactive } from 'vue'
const logic = reactive(useYEMTSSF470MLogic())
</script>
