import { JCCProperties } from '@/lib/jcc/util/JCCProperties'
import { MsisDebug } from '@/utils/debug/log'

/**
 * プロパティファイルアクセスクラスです。
 * @author 販売管理WG
 */
export abstract class SMSProperties {
  /** プロパティファイルを読込むためのクラス */
  private properties: JCCProperties = new JCCProperties()

  /**
   * 	プロパティファイル読み込みです。
   */
  protected load() {
    try {
      MsisDebug.log(`Read properties file: ${this.getFileName()}`)
      // プロパティファイルを読込みます
      this.properties.load(this.getFileName())

      // プロパティファイルの読込に失敗した場合
    } catch (err: any) {
      MsisDebug.error(`Failed to read properties file: ${this.getFileName()}`)
      err.printStackTrace()
    }
  }

  /**
   * ファイル名取得です。
   * 派生クラスで実装が必要です。
   */
  abstract getFileName(): string

  /**
   * プロパティ取得メソッドです。
   *
   * 処理概要:
   * プロパティの情報を返します。
   * 該当する値がない場合空文字を返します。
   *
   * @return JCCProperties
   */
  getProperty(): JCCProperties {
    return this.properties
  }

  _getName(): string {
    return 'SMSProperties'
  }

  static _getName(): string {
    return 'SMSProperties'
  }

  _getType() {
    return SMSProperties as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSProperties'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSProperties'
  }
}
