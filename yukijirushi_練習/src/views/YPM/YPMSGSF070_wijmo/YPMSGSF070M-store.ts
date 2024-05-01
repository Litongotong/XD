import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYPMSGSF070MStore = defineStore('YPMSGSF070M', () => {
  const spreadColumns = ref()
  function setSpreadColumns(value: any) {
    spreadColumns.value = value
  }

  const body_spread01 = ref()
  function setBody_spread01(value: any) {
    body_spread01.value = value
  }

  const hinmokuCmb = ref()
  function setHinmokuCmb(value: any) {
    hinmokuCmb.value = value
  }

  const hinmokuCmbOptions = ref()
  function setHinmokuCmbOptions(value: any) {
    hinmokuCmbOptions.value = value
  }

  const cdHinmoku = ref()
  function setCdHinmoku(value: any) {
    cdHinmoku.value = value
  }

  const nmHinmoku = ref()
  function setNmHinmoku(value: any) {
    nmHinmoku.value = value
  }

  const nmJoisonekiSoshikiRyaku = ref()
  function setNmJoisonekiSoshikiRyaku(value: any) {
    nmJoisonekiSoshikiRyaku.value = value
  }

  const dtDenyoHiduke = ref()
  function setDtDenyoHiduke(value: any) {
    dtDenyoHiduke.value = value
  }

  const qtJuryo = ref()
  function setQtJuryo(value: any) {
    qtJuryo.value = value
  }

  const ifTani = ref()
  function setIfTani(value: any) {
    ifTani.value = value
  }

  const kanriCmb = ref()
  function setKanriCmb(value: any) {
    kanriCmb.value = value
  }

  const kanriCmbOptions = ref()
  function setKanriCmbOptions(value: any) {
    kanriCmbOptions.value = value
  }

  const qtKensu = ref()
  function setQtKensu(value: any) {
    qtKensu.value = value
  }

  const chkGenzairyoAdd = ref()
  function setChkGenzairyoAdd(value: any) {
    chkGenzairyoAdd.value = value
  }

  return {
    spreadColumns,
    setSpreadColumns,
    body_spread01,
    setBody_spread01,
    hinmokuCmb,
    setHinmokuCmb,
    hinmokuCmbOptions,
    setHinmokuCmbOptions,
    cdHinmoku,
    setCdHinmoku,
    nmHinmoku,
    setNmHinmoku,
    nmJoisonekiSoshikiRyaku,
    setNmJoisonekiSoshikiRyaku,
    dtDenyoHiduke,
    setDtDenyoHiduke,
    qtJuryo,
    setQtJuryo,
    ifTani,
    setIfTani,
    kanriCmb,
    setKanriCmb,
    kanriCmbOptions,
    setKanriCmbOptions,
    qtKensu,
    setQtKensu,
    chkGenzairyoAdd,
    setChkGenzairyoAdd,
  }
})
