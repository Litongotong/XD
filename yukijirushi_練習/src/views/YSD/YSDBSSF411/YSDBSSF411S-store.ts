import type { Table } from '@/types/components'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYSDBSSF411SStore = defineStore('YSDBSSF411S', () => {
  /** @description 製品コード */
  const topCdSeihin = ref<string>('')

  /**
   * @description 製品コードを設定
   * @param value
   */
  function setTopCdSeihin(value: string) {
    topCdSeihin.value = value
  }

  /** @description 製品名 */
  const topNmSeihinRyakushiki = ref<string>('')

  /**
   * @description 製品名を設定
   * @param value
   */
  function setTopNmSeihinRyakushiki(value: string) {
    topNmSeihinRyakushiki.value = value
  }

  /** @description スプレッドシート左 */
  const meisaiList1 = ref<Table.DatumRow[]>([])

  /**
   * @description スプレッドシート左データを設定
   * @param data
   */
  function setMeisaiList1(data: Table.DatumRow[]) {
    meisaiList1.value = data
  }

  /** @description スプレッドシート右 */
  const meisaiList2 = ref<Table.DatumRow[]>([])

  /**
   * @description スプレッドシート右データを設定
   * @param data
   */
  function setMeisaiList2(data: Table.DatumRow[]) {
    meisaiList2.value = data
  }

  /** @description 出荷日 */
  const dtShukka = ref<string>('')

  /**
   * @description 出荷日を設定
   * @param value
   */
  function setDtShukka(value: string) {
    dtShukka.value = value
  }

  /** @description 納品日 */
  const dtNohin = ref<string>('')

  /**
   * @description 納品日を設定
   * @param value
   */
  function setDtNohin(value: string) {
    dtNohin.value = value
  }

  /** @description 出荷場所Part1 */
  const cdShukkaBashoKojo = ref<string>('')

  /**
   * @description 出荷場所Part1を設定
   * @param value
   */
  function setCdShukkaBashoKojo(value: string) {
    cdShukkaBashoKojo.value = value
  }

  /** @description 出荷場所Part2 */
  const cdShukkaBashoSoko = ref<string>('')

  /**
   * @description 出荷場所Part2を設定
   * @param value
   */
  function setCdShukkaBashoSoko(value: string) {
    cdShukkaBashoSoko.value = value
  }

  /** @description 出荷場所Part3 */
  const cdShukkaBashoArea = ref<string>('')

  /**
   * @description 出荷場所Part3を設定
   * @param value
   */
  function setCdShukkaBashoArea(value: string) {
    cdShukkaBashoArea.value = value
  }

  /** @description 出荷場所Part4 */
  const cdShukkaBashoZone = ref<string>('')

  /**
   * @description 出荷場所Part4を設定
   * @param value
   */
  function setCdShukkaBashoZone(value: string) {
    cdShukkaBashoZone.value = value
  }

  /** @description 出荷場所Part5 */
  const nmShukkaBashoRyakushiki = ref<string>('')

  /**
   * @description 出荷場所Part5を設定
   * @param value
   */
  function setNmShukkaBashoRyakushiki(value: string) {
    nmShukkaBashoRyakushiki.value = value
  }

  /** @description 入荷場所Part1 */
  const cdNyukaBashoKojo = ref<string>('')

  /**
   * @description 入荷場所Part1を設定
   * @param value
   */
  function setCdNyukaBashoKojo(value: string) {
    cdNyukaBashoKojo.value = value
  }

  /** @description 入荷場所Part2 */
  const cdNyukaBashoSoko = ref<string>('')

  /**
   * @description 入荷場所Part2を設定
   * @param value
   */
  function setCdNyukaBashoSoko(value: string) {
    cdNyukaBashoSoko.value = value
  }

  /** @description 入荷場所Part3 */
  const cdNyukaBashoArea = ref<string>('')

  /**
   * @description 入荷場所Part3を設定
   * @param value
   */
  function setCdNyukaBashoArea(value: string) {
    cdNyukaBashoArea.value = value
  }

  /** @description 入荷場所Part4 */
  const cdNyukaBashoZone = ref<string>('')

  /**
   * @description 入荷場所Part4を設定
   * @param value
   */
  function setCdNyukaBashoZone(value: string) {
    cdNyukaBashoZone.value = value
  }

  /** @description 入荷場所Part5 */
  const stChiiki = ref<string>('')

  /**
   * @description 入荷場所Part5を設定
   * @param value
   */
  function setStChiiki(value: string) {
    stChiiki.value = value
  }

  // NOTE: 項目不明（画像に表示されない）
  /** @description 入荷場所略式 */
  const nmNyukaBashoRyakushiki = ref<string>('')

  /**
   * @description 入荷場所略式を設定
   * @param value
   */
  function setNmNyukaBashoRyakushiki(value: string) {
    nmNyukaBashoRyakushiki.value = value
  }

  /** @description 製造日 */
  const dtSeizo = ref<string>('')

  /**
   * @description 製造日を設定
   * @param value
   */
  function setDtSeizo(value: string) {
    dtSeizo.value = value
  }

  /** @description サブロット */
  const ifSubLot = ref<string>('')

  /**
   * @description サブロットを設定
   * @param value
   */
  function setIfSubLot(value: string) {
    ifSubLot.value = value
  }

  /** @description 出荷数量 上の部分 */
  const qtSuryo = ref<string>('')

  /**
   * @description 出荷数量 上の部分
   * @param value
   */
  function setQtSuryo(value: string) {
    qtSuryo.value = value
  }

  /** @description 出荷数量 上の単位 */
  const ifSuryoTani = ref<string>('')

  /**
   * @description 出荷数量 上の単位を設定
   * @param value
   */
  function setIfSuryoTani(value: string) {
    ifSuryoTani.value = value
  }

  /** @description 出荷数量 下の部分 */
  const qtHasu = ref<string>('')

  /**
   * @description 出荷数量 下の部分を設定
   * @param value
   */
  function setQtHasu(value: string) {
    qtHasu.value = value
  }

  /** @description 出荷数量 下の単位 */
  const ifHasuTani = ref<string>('')

  /**
   * @description 出荷数量 下の単位を設定
   * @param value
   */
  function setIfHasuTani(value: string) {
    ifHasuTani.value = value
  }

  return {
    topCdSeihin,
    setTopCdSeihin,
    topNmSeihinRyakushiki,
    setTopNmSeihinRyakushiki,
    meisaiList1,
    setMeisaiList1,
    meisaiList2,
    setMeisaiList2,
    dtShukka,
    setDtShukka,
    dtNohin,
    setDtNohin,
    cdShukkaBashoKojo,
    setCdShukkaBashoKojo,
    cdShukkaBashoSoko,
    setCdShukkaBashoSoko,
    cdShukkaBashoArea,
    setCdShukkaBashoArea,
    cdShukkaBashoZone,
    setCdShukkaBashoZone,
    nmShukkaBashoRyakushiki,
    setNmShukkaBashoRyakushiki,
    cdNyukaBashoKojo,
    setCdNyukaBashoKojo,
    cdNyukaBashoSoko,
    setCdNyukaBashoSoko,
    cdNyukaBashoArea,
    setCdNyukaBashoArea,
    cdNyukaBashoZone,
    setCdNyukaBashoZone,
    stChiiki,
    setStChiiki,
    nmNyukaBashoRyakushiki,
    setNmNyukaBashoRyakushiki,
    dtSeizo,
    setDtSeizo,
    ifSubLot,
    setIfSubLot,
    qtSuryo,
    setQtSuryo,
    ifSuryoTani,
    setIfSuryoTani,
    qtHasu,
    setQtHasu,
    ifHasuTani,
    setIfHasuTani,
  }
})
