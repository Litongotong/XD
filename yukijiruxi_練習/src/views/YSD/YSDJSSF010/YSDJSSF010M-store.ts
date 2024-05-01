import type { Table } from '@/types/components'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYSDJSSF010MStore = defineStore('YSDJSSF010M', () => {
  /** @description 納品日FROM */
  const nohinFdt = ref<string>('')

  /**
   * @description 納品日FROMを設定
   * @param value
   */
  function setNohinFdt(value: string) {
    nohinFdt.value = value
  }

  /** @description 納品日TO */
  const nohinTdt = ref<string>('')

  /**
   * @description 納品日TOを設定
   * @param value
   */
  function setNohinTdt(value: string) {
    nohinTdt.value = value
  }

  /** @description 受注日FROM */
  const jyuchuFdt = ref<string>('')

  /**
   * @description 受注日FROMを設定
   * @param value
   */
  function setJyuchuFdt(value: string) {
    jyuchuFdt.value = value
  }

  /** @description 受注日TO */
  const jyuchuTdt = ref<string>('')

  /**
   * @description 受注日TOを設定
   * @param value
   */
  function setJyuchuTdt(value: string) {
    jyuchuTdt.value = value
  }

  /** @description 発注番号 */
  const hachuNo = ref<string>('')

  /**
   * @description 発注番号を設定
   * @param value
   */
  function setHachuNo(value: string) {
    hachuNo.value = value
  }

  /** @description 受注番号 */
  const jyuchuNo = ref<string>('')

  /**
   * @description 受注番号を設定
   * @param value
   */
  function setJyuchuNo(value: string) {
    jyuchuNo.value = value
  }

  /** @description 納品先コード */
  const nouhinsakiCd = ref<string>('')

  /**
   * @description 納品先コードを設定
   * @param value
   */
  function setNouhinsakiCd(value: string) {
    nouhinsakiCd.value = value
  }

  /** @description 納品先名 */
  const nouhinsakiNm = ref<string>('')

  /**
   * @description 納品先名を設定
   * @param value
   */
  function setNouhinsakiNm(value: string) {
    nouhinsakiNm.value = value
  }

  /** @description 特約店コード */
  const tokuyakutenCd = ref<string>('')

  /**
   * @description 特約店コードを設定
   * @param value
   */
  function setTokuyakutenCd(value: string) {
    tokuyakutenCd.value = value
  }

  /** @description 特約店名 */
  const tokuyakutenNm = ref<string>('')

  /**
   * @description 特約店名を設定
   * @param value
   */
  function setTokuyakutenNm(value: string) {
    tokuyakutenNm.value = value
  }

  /** @description 品目コード */
  const hinmokuCd = ref<string>('')

  /**
   * @description 品目コードを設定
   * @param value
   */
  function setHinmokuCd(value: string) {
    hinmokuCd.value = value
  }

  /** @description 品目名 */
  const hinmokuNm = ref<string>('')

  /**
   * @description 品目名を設定
   * @param value
   */
  function setHinmokuNm(value: string) {
    hinmokuNm.value = value
  }

  /** @description 出荷指示 */
  const syukasiji = ref<string>('')

  /**
   * @description 出荷指示を設定
   * @param value
   */
  function setSyukasiji(value: string) {
    syukasiji.value = value
  }

  /** @description 出荷方面 */
  const syukaHomen = ref<string>('')

  /**
   * @description 出荷方面を設定
   * @param value
   */
  function setSyukaHomen(value: string) {
    syukaHomen.value = value
  }

  /** @description 在庫場所１ */
  const basho1 = ref<number>(0)

  /**
   * @description 在庫場所１を設定
   * @param value
   */
  function setBasho1(value: number) {
    basho1.value = value
  }

  /** @description 在庫場所２ */
  const basho2 = ref<number>(0)

  /**
   * @description 在庫場所２を設定
   * @param value
   */
  function setBasho2(value: number) {
    basho2.value = value
  }

  /** @description 在庫場所３ */
  const basho3 = ref<number>(0)

  /**
   * @description 在庫場所３を設定
   * @param value
   */
  function setBasho3(value: number) {
    basho3.value = value
  }

  /** @description 在庫場所名 */
  const zaikoBashoNm = ref<string>('')

  /**
   * @description 在庫場所名を設定
   * @param value
   */
  function setZaikoBashoNm(value: string) {
    zaikoBashoNm.value = value
  }

  /** @description 受払区分 */
  const ukebaraiKbn = ref<string>('')

  /**
   * @description 受払区分を設定
   * @param value
   */
  function setUkebaraiKbn(value: string) {
    ukebaraiKbn.value = value
  }

  /** @description 受注形態 */
  const jyuchuKeitai = ref<string>('')

  /**
   * @description 受注形態を設定
   * @param value
   */
  function setJyuchuKeitai(value: string) {
    jyuchuKeitai.value = value
  }

  /** @description 地域 */
  const chiiki = ref<string>('')

  /**
   * @description 地域を設定
   * @param value
   */
  function setChiiki(value: string) {
    chiiki.value = value
  }

  /** @description ユーザID */
  const userId = ref<string>('')

  /**
   * @description ユーザIDを設定
   * @param value
   */
  function setUserId(value: string) {
    userId.value = value
  }

  /** @description 作成者のみ */
  const sakuseisya = ref<boolean>(false)

  /**
   * @description 作成者のみを設定
   * @param value
   */
  function setSakuseisya(value: boolean) {
    sakuseisya.value = value
  }

  /** @description 更新者のみ */
  const koshinsya = ref<boolean>(false)

  /**
   * @description 更新者のみを設定
   * @param value
   */
  function setKoshinsya(value: boolean) {
    koshinsya.value = value
  }

  /** @description 事業区分 */
  const jigyoKbn = ref<string>('')

  /**
   * @description 事業区分を設定
   * @param value
   */
  function setJigyoKbn(value: string) {
    jigyoKbn.value = value
  }

  /** @description バッチ指定のみ */
  const batchSitei = ref<boolean>(false)

  /**
   * @description バッチ指定のみを設定
   * @param value
   */
  function setBatchSitei(value: boolean) {
    batchSitei.value = value
  }

  /** @description 対象製品のみ */
  const taishoSeihin = ref<boolean>(false)

  /**
   * @description 対象製品のみを設定
   * @param value
   */
  function setTaishoSeihin(value: boolean) {
    taishoSeihin.value = value
  }

  /** @description 未引当のみ */
  const mihikiate = ref<boolean>(false)

  /**
   * @description 未引当のみを設定
   * @param value
   */
  function setMihikiate(value: boolean) {
    mihikiate.value = value
  }

  /** @description 訂正分を含む */
  const teiseibun = ref<boolean>(false)

  /**
   * @description 訂正分を含むを設定
   * @param value
   */
  function setTeiseibun(value: boolean) {
    teiseibun.value = value
  }

  /** @description 品薄宣言分のみ */
  const sinausu = ref<boolean>(false)

  /**
   * @description 品薄宣言分のみを設定
   * @param value
   */
  function setSinausu(value: boolean) {
    sinausu.value = value
  }

  /** @description 未出力のみ */
  const misyuturyoku = ref<boolean>(false)

  /**
   * @description 未出力のみを設定
   * @param value
   */
  function setMisyuturyoku(value: boolean) {
    misyuturyoku.value = value
  }

  /** @description 出荷指示後数量訂正のみ */
  const shijigoSuryoTeisei = ref<boolean>(false)

  /**
   * @description 出荷指示後数量訂正のみを設定
   * @param value
   */
  function setShijigoSuryoTeisei(value: boolean) {
    shijigoSuryoTeisei.value = value
  }

  /** @description 表示件数開始 */
  const firstRecord = ref<number>(0)

  /**
   * @description 表示件数開始を設定
   * @param value
   */
  function setFirstRecord(value: number) {
    firstRecord.value = value
  }

  /** @description 表示件数終了 */
  const lastRecord = ref<number>(0)

  /**
   * @description 表示件数終了を設定
   * @param value
   */
  function setLastRecord(value: number) {
    lastRecord.value = value
  }

  /** @description 検索結果件数 */
  const totalRecord = ref<number>(0)

  /**
   * @description 検索結果件数を設定
   * @param value
   */
  function setTotalRecord(value: number) {
    totalRecord.value = value
  }

  /** @description スプレッドシート */
  const SMSJCFSpread1 = ref<Table.DatumRow[]>([])

  /**
   * @description スプレッドシートデータを設定
   * @param value
   */
  function setSMSJCFSpread1(data: Table.DatumRow[]) {
    SMSJCFSpread1.value = data
  }

  /** @description 出力帳票「受注一覧」 */
  const outList1 = ref<string>('')

  /**
   * @description 出力帳票「受注一覧」を設定
   * @param value
   */
  function setOutList1(value: string) {
    outList1.value = value
  }

  /** @description 出力帳票「欠品一覧」 */
  const outList2 = ref<string>('')

  /**
   * @description 出力帳票「欠品一覧」を設定
   * @param value
   */
  function setOutList2(value: string) {
    outList2.value = value
  }

  /** @description 出力帳票「オンライン受注チェックリスト」 */
  const outList3 = ref<string>('')

  /**
   * @description 出力帳票「オンライン受注チェックリスト」を設定
   * @param value
   */
  function setOutList3(value: string) {
    outList3.value = value
  }

  /** @description ページ */
  const currentPage = ref<number>(0)

  /**
   * @description ページを設定
   * @param value
   */
  function setCurrentPage(value: number) {
    currentPage.value = value
  }

  /** @description 総ページ */
  const totalPage = ref<number>(0)

  /**
   * @description 総ページを設定
   * @param value
   */
  function setTotalPage(value: number) {
    totalPage.value = value
  }

  return {
    nohinFdt,
    setNohinFdt,
    nohinTdt,
    setNohinTdt,
    jyuchuFdt,
    setJyuchuFdt,
    jyuchuTdt,
    setJyuchuTdt,
    hachuNo,
    setHachuNo,
    jyuchuNo,
    setJyuchuNo,
    nouhinsakiCd,
    setNouhinsakiCd,
    nouhinsakiNm,
    setNouhinsakiNm,
    tokuyakutenCd,
    setTokuyakutenCd,
    tokuyakutenNm,
    setTokuyakutenNm,
    hinmokuCd,
    setHinmokuCd,
    hinmokuNm,
    setHinmokuNm,
    syukasiji,
    setSyukasiji,
    syukaHomen,
    setSyukaHomen,
    basho1,
    setBasho1,
    basho2,
    setBasho2,
    basho3,
    setBasho3,
    zaikoBashoNm,
    setZaikoBashoNm,
    ukebaraiKbn,
    setUkebaraiKbn,
    jyuchuKeitai,
    setJyuchuKeitai,
    chiiki,
    setChiiki,
    userId,
    setUserId,
    sakuseisya,
    setSakuseisya,
    koshinsya,
    setKoshinsya,
    jigyoKbn,
    setJigyoKbn,
    batchSitei,
    setBatchSitei,
    taishoSeihin,
    setTaishoSeihin,
    mihikiate,
    setMihikiate,
    teiseibun,
    setTeiseibun,
    sinausu,
    setSinausu,
    misyuturyoku,
    setMisyuturyoku,
    shijigoSuryoTeisei,
    setShijigoSuryoTeisei,
    firstRecord,
    setFirstRecord,
    lastRecord,
    setLastRecord,
    totalRecord,
    setTotalRecord,
    SMSJCFSpread1,
    setSMSJCFSpread1,
    outList1,
    setOutList1,
    outList2,
    setOutList2,
    outList3,
    setOutList3,
    currentPage,
    setCurrentPage,
    totalPage,
    setTotalPage,
  }
})
