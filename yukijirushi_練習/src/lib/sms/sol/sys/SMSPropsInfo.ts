import { System } from '@/lib/native/lang/System'
import { SMSProperties } from './SMSProperties'

/**
 * プロパティファイルアクセスクラスです。
 * @author 富士通)青木恒一
 * @version
 */
export class SMSPropsInfo extends SMSProperties {
  private static propertyFileNameExtension = '.properties'
  private propertyFileName = ''

  /**
   * コンストラクタです。
   */
  constructor(propertyFileName: string) {
    super()
    //　検索IDをパネル初期化データオブジェクトから取得する。
    this.propertyFileName =
      propertyFileName + SMSPropsInfo.propertyFileNameExtension
    // プロパティファイルを読込みます
    super.load()
  }

  /**
   * ファイル名を通知します。
   * @return String プロパティ値
   */
  public getFileName(): string {
    return this.propertyFileName
  }

  /**
   * nmPropertyの値をプロパティファイルから取得します。
   * @param      nmProperty
   * @return     String プロパティ値
   * @exception NullPointerException
   */
  public getProperties(nmProperty: string): string {
    let value: string = ''

    try {
      value = this.getProperty().getString(nmProperty)
    } catch (e: any) {
      value = ''
      e.printStackTrace(System.out)
    }
    return value
  }

  _getName(): string {
    return 'SMSPropsInfo'
  }

  static _getName(): string {
    return 'SMSPropsInfo'
  }

  _getType() {
    return SMSPropsInfo as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSPropsInfo'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSPropsInfo'
  }
}
