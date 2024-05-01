import type { Table } from '@/types/components/table'

import { defineStore } from 'pinia'
import { ref } from 'vue'

// 画面YEMTSSF470Mのstoreを定義する。画面の状態をstoreに保存する。
export const useYEMTSSF470MStore = defineStore('YEMTSSF470M', () => {
  //アップロードしたファイル
  const uploadFile = ref({} as File)
  function setUploadFile(file: File) {
    uploadFile.value = file
  }


  //タイトル行有りか否か
  const chkTitleGyoUmu = ref(true)
  function setChkTitleGyoUmu(status: boolean) {
    chkTitleGyoUmu.value = status
  }

  //ユーザ検索条件
  const txtUserId = ref('')
  function setTxtUserId(search: string) {
    txtUserId.value = search
  }

  //ユーザ検索結果
  const txtUserNm = ref('')
  function setTxtUserNm(result: string) {
    txtUserNm.value = result
  }

  //取り込む開始日時
  const datTorikomiKaishi = ref('')
  function setDatTorikomiKaishi(date: string) {
    datTorikomiKaishi.value = date
  }

  //取り込む終了日時
  const datTorikomiShuryo = ref('')
  function setDatTorikomiShuryo(date: string) {
    datTorikomiShuryo.value = date
  }

  //全件数
  const txtCountDisp = ref(0)
  function setTxtCountDisp(count: number) {
    txtCountDisp.value = count
  }

  //テーブルの内容データ
  const spdSpread = ref<Table.DatumRow[]>([])
  function setSpdSpread(newDatas: Table.DatumRow[]): void {
    spdSpread.value = [...newDatas]
  }

  const tableData = ref<any>([])
  function setTableData(data: any): void {
    tableData.value = [...data]
  }


  return {
    uploadFile, setUploadFile,
    chkTitleGyoUmu, setChkTitleGyoUmu,
    txtUserId, setTxtUserId,
    txtUserNm, setTxtUserNm,
    datTorikomiKaishi, setDatTorikomiKaishi,
    datTorikomiShuryo, setDatTorikomiShuryo,
    txtCountDisp, setTxtCountDisp,
    spdSpread, setSpdSpread,
    tableData, setTableData,
  }
})
