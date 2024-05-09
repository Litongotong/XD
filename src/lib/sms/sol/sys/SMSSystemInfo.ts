import { SMSProperties } from './SMSProperties'

/**
 * システム情報取得クラスです。
 * SMSSystem.propertiesを参照してシステム設定情報を通知します。
 * @author  販売管理WG
 */
export class SMSSystemInfo extends SMSProperties {
  /** 別端末強制ログイン許可定数 */
  static FORCE_LOGIN_OK = '1'

  /** 別端末強制ログイン不許可定数（デフォルト） */
  static FORCE_LOGIN_NG = '0'

  /** 読込むプロパティファイル名 */
  private static FILE_NAME = 'SMSSystem.properties'

  /** このクラスのインスタンス */
  private static ins: SMSSystemInfo = new SMSSystemInfo()

  /** サービス状態チェックキー */
  private static KEY_SERVICE_STATE_CHECK = 'SERVICE_STATE_CHECK'

  /** 営業日日付モードキー */
  private static BUSINESS_DATE_MODE = 'BUSINESS_DATE_MODE'

  /** ファイルアクセスクラス名を取得するためのキー */
  private static FILE_ACCESSER = 'FILE_ACCESSER'

  /** SMSCommonCBS呼び出し時のEJB名を取得するためのキー */
  private static CBS_NAME = 'CBS_NAME'

  /** SMSCommonCBS2呼び出し時のEJB名を取得するためのキー */
  private static CBS_PRINT_NAME = 'CBS_PRINT_NAME'

  /** SMSProcessStatusEntityBean呼び出し時のEJB名を取得するためのキー */
  private static ENTITY_BEAN_NAME = 'ENTITY_BEAN_NAME'

  /** ログイン・ログアウト用のEJB名を取得するためのキー */
  private static LOGIN_CBS_NAME = 'LOGIN_CBS_NAME'

  /** 強制ログインモード用キー */
  private static FORCE_LOGIN = 'FORCE_LOGIN'

  /**
   * コンストラクタです。
   * 外部へは公開しません。
   */
  private SMSSystemInfo() {
    // プロパティファイルを読込みます
    super.load()
  }

  /**
   * インスタンス取得メソッドです。
   * (singletonパターン仕様)
   */
  static getInstance(): SMSSystemInfo {
    return this.ins
  }

  /**
   * ファイル名を通知します。
   * @return String ファイル名
   */
  getFileName(): string {
    return SMSSystemInfo.FILE_NAME
  }

  /**
   * サービス状態チェックが有効かを通知します。
   * @return boolean チェックが有効の場合true、無効の場合はfalse
   */
  static isServiceStateCheck(): boolean {
    return SMSSystemInfo.getInstance()
      .getProperty()
      .getBoolean(SMSSystemInfo.KEY_SERVICE_STATE_CHECK, true)
  }

  /**
   * 営業日日付モードを取得します。
   * @return String 営業日日付モード
   */
  static getBusinessDateMode(): string {
    return SMSSystemInfo.getInstance()
      .getProperty()
      .getString(SMSSystemInfo.BUSINESS_DATE_MODE)
  }

  /**
   * ファイルアクセスクラス名取得
   * @return String ファイルアクセスクラス名
   */
  getFileAccesserName(): string {
    const fileAccesserName: string = super
      .getProperty()
      .getString(SMSSystemInfo.FILE_ACCESSER)
    return fileAccesserName
  }

  /**
   * システムプロパティより指定プロパティの値を取得する
   * @return String 値
   */
  static getString(value: string): string {
    return SMSSystemInfo.getInstance().getProperty().getString(value)
  }

  /**
   * SMSCommonCBS呼び出し時のEJB名を取得する
   * @return String 値
   */
  static getCbsName(): string {
    return SMSSystemInfo.getInstance()
      .getProperty()
      .getString(SMSSystemInfo.CBS_NAME)
  }

  /**
   * SMSCommonCBS2呼び出し時のEJB名を取得する
   * @return String 値
   */
  static getPrintCbsName(): string {
    return SMSSystemInfo.getInstance()
      .getProperty()
      .getString(SMSSystemInfo.CBS_PRINT_NAME)
  }

  /**
   * SMSProcessStatusEntityBean呼び出し時のEJB名を取得する
   * @return String 値
   */
  static getProcessStatusEntityBeanName(): string {
    return SMSSystemInfo.getInstance()
      .getProperty()
      .getString(SMSSystemInfo.ENTITY_BEAN_NAME)
  }

  /**
   * ログイン・ログアウト時のEJB名を取得する
   * @return String 値
   */
  static getLoginCbsName(): string {
    return SMSSystemInfo.getInstance()
      .getProperty()
      .getString(SMSSystemInfo.LOGIN_CBS_NAME)
  }

  /**
   * 強制ログインモードを取得する
   * @return String 値
   */
  static getForceLogin(): string {
    //1以外なら0を返す
    return !SMSSystemInfo.FORCE_LOGIN_OK.equals(
      SMSSystemInfo.getInstance()
        .getProperty()
        .getString(SMSSystemInfo.FORCE_LOGIN),
    )
      ? SMSSystemInfo.FORCE_LOGIN_NG
      : SMSSystemInfo.FORCE_LOGIN_OK
  }

  _getName(): string {
    return 'SMSSystemInfo'
  }

  static _getName(): string {
    return 'SMSSystemInfo'
  }

  _getType() {
    return SMSSystemInfo as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSSystemInfo'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSSystemInfo'
  }
}
