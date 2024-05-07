import { HashMap } from '@/lib/native/util/HashMap'
import { SMSPropsInfo } from './SMSPropsInfo'
import { System } from '@/lib/native/lang/System'

/**
 * 汎用的に使用されるプロパティのアクセスクラスです。
 * @author 富士通)青木恒一
 * @version
 */
export class SMSPropsInfos {
  private static ins = new SMSPropsInfos()

  /**  プロパティファイルのハッシュマップ*/
  private static props: HashMap = new HashMap()

  private constructor() {}

  /**
   * サーチIDに応じたプロパティを取得します。
   * @param  プロパティファイル名
   * @return String プロパティ値
   */
  static getInfo(searchID: string): SMSPropsInfo {
    //指定のIDでプロパティが存在しなければ
    if (!this.props.containsKey(searchID)) {
      SMSPropsInfos.props.put(searchID, new SMSPropsInfo(searchID))
    }
    return SMSPropsInfos.props.get(searchID)
  }

  /**
   * サーチIDに応じたプロパティを取得します。
   * キャッシュしないため、毎回プロパティを読み込みます。
   * @param  プロパティファイル名
   * @return String プロパティ値
   */
  static getInfoNonCache(searchID: string): SMSPropsInfo {
    let info: SMSPropsInfo = new SMSPropsInfo(searchID)
    return info
  }

  /**
   * nmPropertyの値をsearchID.プロパティファイルから取得します。
   * @param      searchID
   * @param      nmProperty
   * @return     String プロパティ値
   * @exception NullPointerException
   */
  static getProperty(searchID: string, nmProperty: string): string {
    let value: string = ''

    try {
      value = this.getInfo(searchID).getProperty().getString(nmProperty)
    } catch (e: any) {
      value = ''
      e.printStackTrace(System.out)
    }
    return value
  }

  /**
   * nmPropertyの値をsearchID.プロパティファイルから取得します。
   * 非キャッシュ対応メソッドのため、毎回nmPropertyの値をsearchID.プロパティファイルから取得します。
   * @param      searchID
   * @param      nmProperty
   * @return     String プロパティ値
   * @exception NullPointerException
   */
  static getPropertyNonCache(searchID: string, nmProperty: string): string {
    let value: string = ''

    try {
      value = this.getInfoNonCache(searchID).getProperty().getString(nmProperty)
    } catch (e: any) {
      value = ''
      e.printStackTrace(System.out)
    }
    return value
  }

  _getName(): string {
    return 'SMSPropsInfos'
  }

  static _getName(): string {
    return 'SMSPropsInfos'
  }

  _getType() {
    return SMSPropsInfos as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSPropsInfos'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSPropsInfos'
  }
}
