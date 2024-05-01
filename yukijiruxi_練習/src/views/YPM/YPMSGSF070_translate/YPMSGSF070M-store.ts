import type { Dropdown, Table } from '@/types/components'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYPMSGSF070MStore = defineStore('YPMSGSF070M', () => {
  /** 編集可能ヘッダ色 */
  const EDITABLE_COLOR = 'rgb(123, 149, 251)'

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

  /** @description 品目選択肢 */
  const hinmokuOptions = ref<Dropdown.Option[]>([])

  function setHinmokuOptions(options: Dropdown.Option[]) {
    hinmokuOptions.value = options
  }

  const cdHinmoku = ref('')
  function setCdHinmoku(text: string) {
    cdHinmoku.value = text
  }

  /** @description 品目入力値 */
  const nmHinmoku = ref<string>('')

  /**
   * @description 品目入力値を設定
   * @param value
   */
  function setNmHinmoku(value: string) {
    nmHinmoku.value = value
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

  /** @description 仕掛品重量単位 */
  const ifTani = ref<string>('')

  /**
   * @description 仕掛品重量単位を設定
   * @param value
   */
  function setIfTani(value: string) {
    ifTani.value = value
  }

  const spread01Heads = ref<Table.HeadRow[]>([
    [
      { id: '1', head: '製造日', width: 74 },
      { id: '2', head: '製造ロット', width: 144 },
      { id: '3', head: 'コード', width: 48, textAlign: 'start' },
      { id: '4', head: '原材料略式名称', width: 214 },
      { id: '5', head: '区\n分', width: 20 },
      { id: '6', head: '単\n位', textAlign: 'end', width: 20 },
      { id: '7', head: '数量', commaNumber: true, width: 80 },
      {
        id: '8',
        head: '単価',
        commaNumber: true,
        minimumFractionDigits: 3,
        width: 80,
      },
      { id: '9', head: '金額（円）', commaNumber: true, width: 95 },
      {
        id: '10',
        head: '修正数量',
        width: 80,
        datumType: 'input-number',
        textAlign: 'right',
        headBackground: EDITABLE_COLOR,
      },
      {
        id: '11',
        head: '修正金額（円）',
        width: 100,
        datumType: 'input-number',
        textAlign: 'right',
      },
    ],
  ])

  return {
    body_spread01,
    setBody_spread01,
    hinmokuCmb,
    setHinmokuCmb,
    hinmokuCmbOptions,
    setHinmokuCmbOptions,
    hinmokuOptions,
    setHinmokuOptions,
    cdHinmoku,
    setCdHinmoku,
    nmHinmoku,
    setNmHinmoku,
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
    ifTani,
    setIfTani,
    spread01Heads,
  }
})
