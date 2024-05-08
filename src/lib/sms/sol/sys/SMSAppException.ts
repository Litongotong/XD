import { NativeBoolean } from '@/lib/native/lang/Boolean'
import { SMSException } from './SMSException'

/**
 * チェックで異常例外を通知するクラスです。<br>
 *
 * @author  販売管理WG
 */
export class SMSAppException extends SMSException {
  private cdErrorKoumoku: string = '' // エラー発生項目ID
  private qtErrorRecordPosition: string = '' // エラー発生レコード位置
  private nmErrorColumn: string = '' // エラー発生列項目名
  private fgPopup: NativeBoolean = NativeBoolean.valueOf(true) // ポップアップフラグ　デフォルトはポップアップを行う

  /**
   * コンストラクタです。<br>
   * @param String messageCode
   * @param String[] detail
   */
  constructor(messageCode: string, detail?: string[]) {
    super(messageCode, detail)
  }

  /**
   * エラー項目IDを返します
   * @return String
   */
  getCdErrorKoumoku(): string {
    return this.cdErrorKoumoku
  }

  /**
   * エラー項目IDをセットします。
   * @param cdErrorKoumoku The cdErrorKoumoku to set
   */
  setCdErrorKoumoku(cdErrorKoumoku: string) {
    this.cdErrorKoumoku = cdErrorKoumoku
  }

  /**
   * エラー発生列項目名を返します。
   * @return String
   */
  getNmErrorColumn(): string {
    return this.nmErrorColumn
  }

  /**
   * エラー発生レコード位置を返します。
   * @return String
   */
  getQtErrorRecordPosition(): string {
    return this.qtErrorRecordPosition
  }

  /**
   * エラー発生列項目名をセットします。
   * @param nmErrorColumn The nmErrorColumn to set
   */
  setNmErrorColumn(nmErrorColumn: string) {
    this.nmErrorColumn = nmErrorColumn
  }

  /**
   * エラー発生レコード位置をセットします。
   * @param qtErrorRecordPosition The qtErrorRecordPosition to set
   */
  setQtErrorRecordPosition(qtErrorRecordPosition: string) {
    this.qtErrorRecordPosition = qtErrorRecordPosition
  }

  /**
   * ポップアップフラグを返します
   * @return Boolean
   */
  getFgPopup(): NativeBoolean {
    return this.fgPopup
  }

  /**
   * ポップアップフラグをセットします
   * @param fgPopup The fgPopup to set
   */
  setFgPopup(fgPopup: NativeBoolean) {
    this.fgPopup = fgPopup
  }

  _getName(): string {
    return 'SMSAppException'
  }

  static _getName(): string {
    return 'SMSAppException'
  }

  _getType() {
    return SMSAppException as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSAppException'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSAppException'
  }
}
