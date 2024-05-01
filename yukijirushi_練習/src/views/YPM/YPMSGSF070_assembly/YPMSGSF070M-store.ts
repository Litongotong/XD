import type { Dropdown, Table } from '@/types/components'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYPMSGSF070MStore = defineStore('YPMSGSF070M', () => {
  const body_spread01 = ref()
  function setBody_spread01(value: Table.DatumRow[]) {
    body_spread01.value = value
  }

  const hinmokuCmb = ref('')
  function setHinmokuCmb(text: string) {
    hinmokuCmb.value = text
  }

  const hinmokuCmbOptions = ref()
  function setHinmokuCmbOptions(value: Dropdown.Option[]) {
    hinmokuCmbOptions.value = value
  }

  const cdHinmoku = ref('')
  function setCdHinmoku(text: string) {
    cdHinmoku.value = text
  }

  const searchBtn = ref('')
  function setSearchBtn(text: string) {
    searchBtn.value = text
  }

  const nmJoisonekiSoshikiRyaku = ref('')
  function setNmJoisonekiSoshikiRyaku(text: string) {
    nmJoisonekiSoshikiRyaku.value = text
  }

  const dtDenyoHiduke = ref('')
  function setDtDenyoHiduke(text: string) {
    dtDenyoHiduke.value = text
  }

  const qtJuryo = ref('')
  function setQtJuryo(text: string) {
    qtJuryo.value = text
  }

  const kanriCmb = ref('')
  function setKanriCmb(text: string) {
    kanriCmb.value = text
  }

  const kanriCmbOptions = ref()
  function setKanriCmbOptions(value: Dropdown.Option[]) {
    kanriCmbOptions.value = value
  }

  const qtKensu = ref()
  function setQtKensu(value: number) {
    qtKensu.value = value
  }

  const chkGenzairyoAdd = ref()
  function setChkGenzairyoAdd(value: boolean) {
    chkGenzairyoAdd.value = value
  }

  const body_button04 = ref('')
  function setBody_button04(text: string) {
    body_button04.value = text
  }

  return {
    body_spread01,
    setBody_spread01,
    hinmokuCmb,
    setHinmokuCmb,
    hinmokuCmbOptions,
    setHinmokuCmbOptions,
    cdHinmoku,
    setCdHinmoku,
    searchBtn,
    setSearchBtn,
    nmJoisonekiSoshikiRyaku,
    setNmJoisonekiSoshikiRyaku,
    dtDenyoHiduke,
    setDtDenyoHiduke,
    qtJuryo,
    setQtJuryo,
    kanriCmb,
    setKanriCmb,
    kanriCmbOptions,
    setKanriCmbOptions,
    qtKensu,
    setQtKensu,
    chkGenzairyoAdd,
    setChkGenzairyoAdd,
    body_button04,
    setBody_button04,
  }
})
