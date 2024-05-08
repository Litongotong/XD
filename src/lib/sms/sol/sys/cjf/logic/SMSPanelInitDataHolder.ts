import type { ArrayList } from '@/lib/native/util/ArrayList'
import { HashMap } from '@/lib/native/util/HashMap'
import type { SMSScreenInfo } from './SMSScreenInfo'

/**
 * パネルデータ共通処理クラスです。
 * @author 富士通)宇津宮
 * @version
 */
export class SMSPanelInitDataHolder {
  //共通データ域キー

  /**  推奨されません。	SMSHashKeyConstのキーを使ってください */
  static RESULT_DATA = 'DLG_DATA'

  /**  推奨されません。	SMSHashKeyConstのキーを使ってください */
  static KEY_PANEL_DATA = 'PANEL_DATA'

  /**  推奨されません。	SMSHashKeyConstのキーを使ってください */
  static KEY_SPREAD_EVENT_POS = 'SPREAD_EVENT_POS'

  private static ins: SMSPanelInitDataHolder
  private data: HashMap

  //　汎用検索ID
  private searchID: string
  //　汎用検索画面タイトル
  private value: string
  //　汎用検索画面フッタ部表示エラーメッセージ
  private errorMessage: string
  //　汎用検索画面の【閉じる】ボタンチェックフラグ
  private closeFlg = false
  //　汎用検索画面の検索が出来るかどうかを判断フラグ
  private searchFlg = false
  //　SMSScreenInfoのインスタンス初期化
  private screenInfo: SMSScreenInfo

  private searchResultLst: ArrayList

  /**
   * SMSPanelInitDataHolderのコンストラクト
   */
  private constructor() {
    this.data = new HashMap()
  }

  /**
   * SMSPanelInitDataHolderのインスタンスを取得します。
   * @return　ins
   */
  static getInstance(): SMSPanelInitDataHolder {
    if (this.ins == null) {
      this.ins = new SMSPanelInitDataHolder()
    }
    return this.ins
  }

  /**
   * 推奨されません。
   * @param key
   * @param obj
   */
  setData(key: string, obj: any) {
    this.data.put(key, obj)
  }

  /**
   * 推奨されません。
   * @param key
   * @return Object
   */
  getData(key: string): any {
    return this.data.get(key)
  }

  /**
   * 汎用検索のタイトルを設定します。
   * @param str
   */
  setValue(str: string) {
    this.value = str
  }

  /**
   * 汎用検索のタイトルを返します。
   * @return　value
   */
  getValue(): string {
    return this.value
  }

  /**
   * 汎用検索IDを設定します。
   * @param str
   */
  setSearchID(str: string) {
    this.searchID = str
  }

  /**
   * 汎用検索IDを返します。
   * @return　searchID
   */
  getSearchID(): string {
    return this.searchID
  }

  /**
   * 汎用検索画面情報を設定します。
   * @param sci
   */
  setScreenInfo(sci: SMSScreenInfo) {
    this.screenInfo = sci
  }

  /**
   * 汎用検索画面情報を返します。
   * @return　screenInfo
   */
  getScreenInfo(): SMSScreenInfo {
    return this.screenInfo
  }

  /**
   * 汎用検索画面の【閉じる】ボタンチェックフラグを設定します。
   * @param closeFlg
   */
  setCloseButton(closeFlg: boolean) {
    this.closeFlg = closeFlg
  }

  /**
   * 汎用検索画面の【閉じる】ボタンチェックフラグを返します。
   * @return　closeFlg
   */
  getCloseButton(): boolean {
    return this.closeFlg
  }

  /**
   * 汎用検索画面で検索が出来るかどうかを判断するフラグを
   * 設定します。
   * @param searchFlg
   */
  setSearchFlg(searchFlg: boolean) {
    this.searchFlg = searchFlg
  }

  /**
   * 汎用検索画面で検索が出来るかどうかを判断するフラグを
   * 返します。
   * @return　searchFlg
   */
  isSearchFlg(): boolean {
    return this.searchFlg
  }

  /**
   * 汎用検索画面のフッタ部に表示するエラーメッセージを
   * 設定します。
   * @param errorMessage
   */
  setErrorMessage(errorMessage: string) {
    this.errorMessage = errorMessage
  }

  /**
   * 汎用検索画面のフッタ部にエラーメッセージを返します。
   * @return　errorMessage
   */
  getErrorMessage(): string {
    return this.errorMessage
  }

  _getName(): string {
    return 'SMSPanelInitDataHolder'
  }

  static _getName(): string {
    return 'SMSPanelInitDataHolder'
  }

  _getType() {
    return SMSPanelInitDataHolder as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSPanelInitDataHolder'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSPanelInitDataHolder'
  }
}
