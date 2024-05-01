import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Table } from '@/types/components'

// 画面YEMTSSF261Sのstoreを定義する。画面の状態をstoreに保存する。
export const useYEMTSSF261SStore = defineStore('YEMTSSF261S', () => {
  const txtCountDisp = ref<number>(0)
  function setTxtCountDisp(value: number) {
    txtCountDisp.value = value
  }

  const spdSpread = ref<string>('')
  function setSpdSpread(text: string) {
    spdSpread.value = text
  }

  const btnPlus = ref<string>('')
  function setBtnPlus(text: string) {
    btnPlus.value = text
  }

  const txdYM = ref<string>('')
  function setTxdYM(text: string) {
    txdYM.value = text
  }

  const txtChoaisaki = ref<string>('')
  function setTxtChoaisaki(text: string) {
    txtChoaisaki.value = text
  }

  const txtTenRyakuNm = ref<string>('')
  function setTxtTenRyakuNm(text: string) {
    txtTenRyakuNm.value = text
  }

  const txtChainCd = ref<string>('')
  function setTxtChainCd(text: string) {
    txtChainCd.value = text
  }

  const txtChainRyakuNm = ref<string>('')
  function setTxtChainRyakuNm(text: string) {
    txtChainRyakuNm.value = text
  }

  const txtKijokuSosiki = ref<string>('')
  function setTxtKijokuSosiki(text: string) {
    txtKijokuSosiki.value = text
  }

  const txtKijokuSosikiRyakuNm = ref<string>('')
  function setTxtKijokuSosikiRyakuNm(text: string) {
    txtKijokuSosikiRyakuNm.value = text
  }

  const txtKeisanHoho = ref<string>('')
  function setTxtKeisanHoho(text: string) {
    txtKeisanHoho.value = text
  }

  const txtChainKubun = ref<string>('')
  function setTxtChainKubun(text: string) {
    txtChainKubun.value = text
  }

  const datatable = ref<Table.DatumRow[]>([])
  function setDatatable(data: Table.DatumRow[]) {
    datatable.value = data
  }

  return {
    txtCountDisp,
    setTxtCountDisp,
    spdSpread,
    setSpdSpread,
    btnPlus,
    setBtnPlus,
    txdYM,
    setTxdYM,
    txtChoaisaki,
    setTxtChoaisaki,
    txtTenRyakuNm,
    setTxtTenRyakuNm,
    txtChainCd,
    setTxtChainCd,
    txtChainRyakuNm,
    setTxtChainRyakuNm,
    txtKijokuSosiki,
    setTxtKijokuSosiki,
    txtKijokuSosikiRyakuNm,
    setTxtKijokuSosikiRyakuNm,
    txtKeisanHoho,
    setTxtKeisanHoho,
    txtChainKubun,
    setTxtChainKubun,
    datatable,
    setDatatable,
  }
})
