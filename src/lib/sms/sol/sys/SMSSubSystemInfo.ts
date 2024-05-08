import type { JCCProperties } from '@/lib/jcc/util/JCCProperties'
import { SMSProperties } from './SMSProperties'

/**
 * システム情報取得クラスです。
 * SMSSystem.propertiesを参照してシステム設定情報を通知します。
 * @author  販売管理WG
 */
export class SMSSubSystemInfo extends SMSProperties {
  /** 読込むプロパティファイル名 */
  private static FILE_NAME: string = 'SMSSubSystem.properties'

  /** このクラスのインスタンス */
  private static ins: SMSSubSystemInfo = new SMSSubSystemInfo()

  /** サービス状態チェックキー */
  private static KEY_SERVICE_STATE_CHECK: string = 'SERVICE_STATE_CHECK'
  /**
   * コンストラクタです。
   * 外部へは公開しません。
   */
  private constructor() {
    super()
    // プロパティファイルを読込みます
    super.load()
  }

  /**
   * インスタンス取得メソッドです。
   * (singletonパターン仕様)
   */
  static getInstance(): SMSSubSystemInfo {
    return this.ins
  }

  /**
   * ファイル名を通知します。
   * @return String ファイル名
   */
  getFileName(): string {
    return SMSSubSystemInfo.FILE_NAME
  }

  /**
   * パッケージ名からサブシステムIDを取得します。
   * @param String name パッケージ名
   * @return String サブシステムID
   */
  static getSubSystemID(pkgName: string): string {
    if (!pkgName?.length) {
      return ''
    }
    let prop: JCCProperties = this.getInstance().getProperty()
    let work: string = pkgName
    let rtnValue: string = ''
    while (true) {
      rtnValue = prop.getString(work)
      if (rtnValue != null) {
        break
      }
      let idx: number = work.lastIndexOf('.')
      if (idx <= 0) {
        break
      }
      work = work.substring(0, idx)
    }

    return rtnValue
  }

  /**
   * フルクラス名からシステムIDを取得します。
   * @param String name フルクラス名
   * @return String システムID
   */
  static getSystemID(fullClassName: string): string {
    const smsPrefix = 'sms.sol'
    if (fullClassName.startsWith(smsPrefix)) {
      return this.getSubSystemID(smsPrefix)
    }
    const firstStepName = fullClassName.includes('.') ? fullClassName.split('.')[0] : fullClassName
    return this.getSubSystemID(firstStepName)
  }

  _getName(): string {
    return 'SMSSubSystemInfo'
  }

  static _getName(): string {
    return 'SMSSubSystemInfo'
  }

  _getType() {
    return SMSSubSystemInfo as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSSubSystemInfo'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSSubSystemInfo'
  }
}
