import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Dropdown, Table } from '@/types/components'

export const useYBMKKSF600SStore = defineStore('YBMKKSF600S', () => {
//wijimo
  const spreadColumns = ref()
  function setSpreadColumns(value: any) {
    spreadColumns.value = value
  }
  const body_spread01 = ref()
  function setBody_spread01(value: any) {
    body_spread01.value = value
  }
  //tablecommon component
  const spread = ref<Table.DatumRow[]>([])
  function setSpread(data: Table.DatumRow[]) {
    spread.value = data
}

  const nmTengun = ref()
  function setNmTengun(value: any) {
    nmTengun.value = value
  }

//店名
  const nmTen = ref<any>('')
  function setNmTen(text: string) {
    nmTen.value = text
  }
//店群カナ名　
  const nmTengunKana = ref<string>('')
  function setNmTengunKana(text: string) {
    nmTengunKana.value = text
  }
//店カナ名
  const nmTenKana = ref<string>('')
  function setNmTenKana(text: string) {
    nmTenKana.value = text
  }
//店群コード
  const cdTengun = ref<string>('')
  function setCdTengun(text: string) {
    cdTengun.value = text
  }
//店コード
  const cdTen = ref<string>('')
  function setCdTen(text: string) {
    cdTen.value = text
  }

  const nmTengunRyaku = ref()
  function setNmTengunRyaku(value: any) {
    nmTengunRyaku.value = value
  }

  const noKaisolevel = ref()
  function setNoKaisolevel(value: any) {
    noKaisolevel.value = value
  }

  const noKaisolevelOptions = ref()
  function setNoKaisolevelOptions(value: any) {
    noKaisolevelOptions.value = value
  }

  const Options = ref()
  function setOptions(value: any) {
    Options.value = value
  }

  const stChiiki1 = ref()
  function setStChiiki1(value: any) {
    stChiiki1.value = value
  }

  const stChiiki1Options = ref<Dropdown.Option[]>([])
  function setStChiiki1Options(list: Dropdown.Option[]) {
    stChiiki1Options.value = list
  }

  const stChiiki2 = ref<string>('')
  function setStChiiki2(text: string) {
    stChiiki2.value = text
  }

  const stChiiki2Options = ref()
  function setStChiiki2Options(value: any) {
    stChiiki2Options.value = value
  }

  const stJigyoOpt = ref<Dropdown.Option[]>([])
  function setstJigyoOpt(list: Dropdown.Option[]) {
    stJigyoOpt.value = list
  }

  const stJigyo = ref<string>('')
  function setstJigyo(text: string) {
    stJigyo.value = text
  }
  const datatable = ref<Table.DatumRow[]>([])
  function setDatatable(data: Table.DatumRow[]) {
    datatable.value = data
  }

  
  return {
    spread,
    setSpread,
    spreadColumns,
    setSpreadColumns,
    body_spread01,
    setBody_spread01,
    nmTengun,
    setNmTengun,
    nmTen,
    setNmTen,
    nmTengunKana,
    setNmTengunKana,
    nmTenKana,
    setNmTenKana,
    cdTengun,
    setCdTengun,
    cdTen,
    setCdTen,
    nmTengunRyaku,
    setNmTengunRyaku,
    noKaisolevel,
    setNoKaisolevel,
    noKaisolevelOptions,
    setNoKaisolevelOptions,
    Options,
    setOptions,
    stChiiki1,
    setStChiiki1,
    stChiiki1Options,
    setStChiiki1Options,
    stChiiki2,
    setStChiiki2,
    stChiiki2Options,
    setStChiiki2Options,
    setstJigyoOpt,
    stJigyoOpt,
    setstJigyo,
    stJigyo,
    datatable,
    setDatatable,
  }
})
