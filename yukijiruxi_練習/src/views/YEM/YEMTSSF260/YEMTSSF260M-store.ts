import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Dropdown, Table } from '@/types/components'

// 画面YEMTSSF260Mのstoreを定義する。画面の状態をstoreに保存する。
export const useYEMTSSF260MStore = defineStore('YEMTSSF260M', () => {
  const rdSeisanJoken = ref<string>('')
  function setRdSeisanJoken(text: string) {
    rdSeisanJoken.value = text
  }

  const rdHikiateSyudo = ref<string>('')
  function setRdHikiateSyudo(text: string) {
    rdHikiateSyudo.value = text
  }

  const cmbYM = ref<string>('')
  function setCmbYM(text: string) {
    cmbYM.value = text
  }
  const cmbYMOptions = ref<Dropdown.Option[]>([])
  function setCmbYMOptions(list: Dropdown.Option[]) {
    cmbYMOptions.value = list
  }

  const cmbKeisanHouho = ref<string>('')
  function setCmbKeisanHouho(text: string) {
    cmbKeisanHouho.value = text
  }

  const cmbKeisanHouhoOpt = ref<Dropdown.Option[]>([])
  function setCmbKeisanHouhoOpt(list: Dropdown.Option[]) {
    cmbKeisanHouhoOpt.value = list
  }

  const txtChoaisaki = ref<string>('')
  function setTxtChoaisaki(text: string) {
    txtChoaisaki.value = text
  }

  const txtChoaisakiRyakuNm = ref<string>('')
  function setTxtChoaisakiRyakuNm(text: string) {
    txtChoaisakiRyakuNm.value = text
  }

  const txtChainCd = ref<string>('')
  function setTxtChainCd(text: string) {
    txtChainCd.value = text
  }

  const txtChainRyakuNm = ref<string>('')
  function setTxtChainRyakuNm(text: string) {
    txtChainRyakuNm.value = text
  }

  const txtShitenSyokubaCd = ref<string>('')
  function setTxtShitenSyokubaCd(text: string) {
    txtShitenSyokubaCd.value = text
  }

  const txtSonekiKanriSosikiRyakuNm = ref<string>('')
  function setTxtSonekiKanriSosikiRyakuNm(text: string) {
    txtSonekiKanriSosikiRyakuNm.value = text
  }

  const txtTantoshaCd = ref<string>('')
  function setTxtTantoshaCd(text: string) {
    txtTantoshaCd.value = text
  }

  const txtJyugyoinNm = ref<string>('')
  function setTxtJyugyoinNm(text: string) {
    txtJyugyoinNm.value = text
  }

  const txtCountDispMain = ref<string>('')
  function setTxtCountDispMain(text: string) {
    txtCountDispMain.value = text
  }

  const datatable = ref<Table.DatumRow[]>([])
  function setDatatable(data: Table.DatumRow[]) {
    datatable.value = data
  }

  const datalist = ref<any[]>([])
  function setDatalist(data: any[]) {
    datalist.value = data
  }

  return {
    rdSeisanJoken,
    setRdSeisanJoken,
    rdHikiateSyudo,
    setRdHikiateSyudo,
    cmbYM,
    setCmbYM,
    cmbYMOptions,
    setCmbYMOptions,
    cmbKeisanHouho,
    setCmbKeisanHouho,
    cmbKeisanHouhoOpt,
    setCmbKeisanHouhoOpt,
    txtChoaisaki,
    setTxtChoaisaki,
    txtChoaisakiRyakuNm,
    setTxtChoaisakiRyakuNm,
    txtChainCd,
    setTxtChainCd,
    txtChainRyakuNm,
    setTxtChainRyakuNm,
    txtShitenSyokubaCd,
    setTxtShitenSyokubaCd,
    txtSonekiKanriSosikiRyakuNm,
    setTxtSonekiKanriSosikiRyakuNm,
    txtTantoshaCd,
    setTxtTantoshaCd,
    txtJyugyoinNm,
    setTxtJyugyoinNm,
    txtCountDispMain,
    setTxtCountDispMain,
    datatable,
    setDatatable,
    // datalist,
    // setDatalist,
  }
})
