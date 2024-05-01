import type { Table } from '@/types/components'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYPMGSSF060MStore = defineStore('YPMGSSF060M', () => {
  /** @description 工場・在庫場所 */
  const cdKojoZaikoBasho = ref<string>('')

  /**
   * @description 工場・在庫場所を設定
   * @param value
   */
  function setCdKojoZaikoBasho(value: string) {
    cdKojoZaikoBasho.value = value
  }

  /** @description 工場・在庫場所名称 */
  const nmKojoZaikoBasho = ref<string>('')

  /**
   * @description 工場・在庫場所名称を設定
   * @param value
   */
  function setNmKojoZaikoBasho(value: string) {
    nmKojoZaikoBasho.value = value
  }

  /** @description 倉庫 */
  const cdSoko = ref<string>('')

  /**
   * @description 倉庫を設定
   * @param value
   */
  function setCdSoko(value: string) {
    cdSoko.value = value
  }

  /** @description 倉庫略式名称 */
  const nmSokoRyaku = ref<string>('')

  /**
   * @description 倉庫略式名称を設定
   * @param value
   */
  function setNmSokoRyaku(value: string) {
    nmSokoRyaku.value = value
  }

  /** @description エリア */
  const cdArea = ref<string>('')

  /**
   * @description エリアを設定
   * @param value
   */
  function setCdArea(value: string) {
    cdArea.value = value
  }

  /** @description エリア略式名称 */
  const nmAreaRyaku = ref<string>('')

  /**
   * @description エリア略式名称を設定
   * @param value
   */
  function setNmAreaRyaku(value: string) {
    nmAreaRyaku.value = value
  }

  /** @description ゾーン */
  const cdZone = ref<string>('')

  /**
   * @description ゾーンを設定
   * @param value
   */
  function setCdZone(value: string) {
    cdZone.value = value
  }

  /** @description ゾーン略式名称 */
  const nmZoneRyaku = ref<string>('')

  /**
   * @description ゾーン略式名称を設定
   * @param value
   */
  function setNmZoneRyaku(value: string) {
    nmZoneRyaku.value = value
  }

  /** @description 倉庫エリアゾーン略式名称 */
  const nmBashoRyaku = ref<string>('')

  /**
   * @description 倉庫エリアゾーン略式名称を設定
   * @param value
   */
  function setNmBashoRyaku(value: string) {
    nmBashoRyaku.value = value
  }

  /** @description 出力対象品目 */
  const stHinmokuCdShikibetsu = ref<string>('')

  /**
   * @description 出力対象品目を設定
   * @param value
   */
  function setStHinmokuCdShikibetsu(value: string) {
    stHinmokuCdShikibetsu.value = value
  }

  /** @description 棚札数量出力 */
  const tanafudaSuryoSyutsuryokuCheck = ref<boolean>(false)

  /**
   * @description 棚札数量出力を設定
   * @param value
   */
  function setTanafudaSuryoSyutsuryokuCheck(value: boolean) {
    tanafudaSuryoSyutsuryokuCheck.value = value
  }

  /** @description 対象日from */
  const dtTaishoFrom = ref<string>('')

  /**
   * @description 対象日fromを設定
   * @param value
   */
  function setDtTaishoFrom(value: string) {
    dtTaishoFrom.value = value
  }

  /** @description 対象日to */
  const dtTaishoTo = ref<string>('')

  /**
   * @description 対象日toを設定
   * @param value
   */
  function setDtTaishoTo(value: string) {
    dtTaishoTo.value = value
  }

  /** @description 対象年月from */
  const dtTaishoNengetsuFrom = ref<number>(0)

  /**
   * @description 対象年月fromを設定
   * @param value
   */
  function setDtTaishoNengetsuFrom(value: number) {
    dtTaishoNengetsuFrom.value = value
  }

  /** @description 対象年月to */
  const dtTaishoNengetsuTo = ref<number>(0)

  /**
   * @description 対象年月toを設定
   * @param value
   */
  function setDtTaishoNengetsuTo(value: number) {
    dtTaishoNengetsuTo.value = value
  }

  /** @description 原材料 */
  const cdGenzairyo = ref<number>(0)

  /**
   * @description 原材料を設定
   * @param value
   */
  function setCdGenzairyo(value: number) {
    cdGenzairyo.value = value
  }

  /** @description 原材料略式名称 */
  const nmGenzairyoRyaku = ref<string>('')

  /**
   * @description 原材料略式名称を設定
   * @param value
   */
  function setNmGenzairyoRyaku(value: string) {
    nmGenzairyoRyaku.value = value
  }

  /** @description ０印字なし */
  const zeroInjiNashiCheck = ref<boolean>(false)

  /**
   * @description ０印字なしを設定
   * @param value
   */
  function setZeroInjiNashiCheck(value: boolean) {
    zeroInjiNashiCheck.value = value
  }

  /** @description 生産日報（日別） */
  const rdSeisanNichi = ref<string>('')

  /**
   * @description 生産日報（日別）を設定
   * @param value
   */
  function setRdSeisanNichi(value: string) {
    rdSeisanNichi.value = value
  }

  /** @description 生産月報（個別表） */
  const rdKobetsuNen = ref<string>('')

  /**
   * @description 生産月報（個別表）を設定
   * @param value
   */
  function setRdKobetsuNen(value: string) {
    rdKobetsuNen.value = value
  }

  /** @description 生産月報（総括表） */
  const rdSoukatsuGetsu = ref<string>('')

  /**
   * @description 生産月報（総括表）を設定
   * @param value
   */
  function setRdSoukatsuGetsu(value: string) {
    rdSoukatsuGetsu.value = value
  }

  /** @description 原材料使用実績内訳表（様式１） */
  const rdJisseki1 = ref<string>('')

  /**
   * @description 原材料使用実績内訳表（様式１）を設定
   * @param value
   */
  function setRdJisseki1(value: string) {
    rdJisseki1.value = value
  }

  /** @description 原材料使用実績内訳表（様式２） */
  const rdJisseki2 = ref<string>('')

  /**
   * @description 原材料使用実績内訳表（様式２）を設定
   * @param value
   */
  function setRdJisseki2(value: string) {
    rdJisseki2.value = value
  }

  /** @description 決算棚卸表 */
  const rdKessan = ref<string>('')

  /**
   * @description 決算棚卸表を設定
   * @param value
   */
  function setRdKessan(value: string) {
    rdKessan.value = value
  }

  /** @description 棚札（乳食） */
  const rdNyuusyoku = ref<string>('')

  /**
   * @description 棚札（乳食）を設定
   * @param value
   */
  function setRdNyuusyoku(value: string) {
    rdNyuusyoku.value = value
  }

  /** @description 棚札（市乳） */
  const rdShinyuu = ref<string>('')

  /**
   * @description 棚札（市乳）を設定
   * @param value
   */
  function setRdShinyuu(value: string) {
    rdShinyuu.value = value
  }

  /** @description 入荷予定一覧 */
  const rdNyuuka = ref<string>('')

  /**
   * @description 入荷予定一覧を設定
   * @param value
   */
  function setRdNyuuka(value: string) {
    rdNyuuka.value = value
  }

  /** @description ピッキングリスト */
  const rdPicking = ref<string>('')

  /**
   * @description ピッキングリストを設定
   * @param value
   */
  function setRdPicking(value: string) {
    rdPicking.value = value
  }

  /** @description 工程実績入力チェック（乳食品工場用) */
  const rdSelect11 = ref<string>('')

  /**
   * @description 工程実績入力チェック（乳食品工場用)を設定
   * @param value
   */
  function setRdSelect11(value: string) {
    rdSelect11.value = value
  }

  return {
    cdKojoZaikoBasho,
    setCdKojoZaikoBasho,
    nmKojoZaikoBasho,
    setNmKojoZaikoBasho,
    cdSoko,
    setCdSoko,
    nmSokoRyaku,
    setNmSokoRyaku,
    cdArea,
    setCdArea,
    nmAreaRyaku,
    setNmAreaRyaku,
    cdZone,
    setCdZone,
    nmZoneRyaku,
    setNmZoneRyaku,
    nmBashoRyaku,
    setNmBashoRyaku,
    stHinmokuCdShikibetsu,
    setStHinmokuCdShikibetsu,
    tanafudaSuryoSyutsuryokuCheck,
    setTanafudaSuryoSyutsuryokuCheck,
    dtTaishoFrom,
    setDtTaishoFrom,
    dtTaishoTo,
    setDtTaishoTo,
    dtTaishoNengetsuFrom,
    setDtTaishoNengetsuFrom,
    dtTaishoNengetsuTo,
    setDtTaishoNengetsuTo,
    cdGenzairyo,
    setCdGenzairyo,
    nmGenzairyoRyaku,
    setNmGenzairyoRyaku,
    zeroInjiNashiCheck,
    setZeroInjiNashiCheck,
    rdNyuuka,
    setRdNyuuka,
    rdPicking,
    setRdPicking,
    rdKessan,
    setRdKessan,
    rdNyuusyoku,
    setRdNyuusyoku,
    rdShinyuu,
    setRdShinyuu,
    rdJisseki1,
    setRdJisseki1,
    rdJisseki2,
    setRdJisseki2,
    rdSeisanNichi,
    setRdSeisanNichi,
    rdSoukatsuGetsu,
    setRdSoukatsuGetsu,
    rdKobetsuNen,
    setRdKobetsuNen,
    rdSelect11,
    setRdSelect11,
  }
})
