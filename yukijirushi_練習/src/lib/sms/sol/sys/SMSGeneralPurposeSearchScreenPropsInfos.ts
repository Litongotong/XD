import { HashMap } from '@/lib/native/util/HashMap'
import { SMSGeneralPurposeSearchScreenPropsInfo } from './SMSGeneralPurposeSearchScreenPropsInfo'

/**
 * 汎用検索で使用されるプロパティのアクセスクラスです。
 * @author 富士通)青木恒一
 * @version
 */
export class SMSGeneralPurposeSearchScreenPropsInfos {
  private static ins: SMSGeneralPurposeSearchScreenPropsInfos =
    new SMSGeneralPurposeSearchScreenPropsInfos()

  /**  汎用検索プロパティのハッシュマップ*/
  private static props: HashMap = new HashMap()

  /**
   * コンストラクタです。
   * 外部非公開。
   */
  private constructor() {}

  /**
   * サーチIDに応じたプロパティを取得します。
   * @return String プロパティ値
   */
  static getInfo(searchID: string): SMSGeneralPurposeSearchScreenPropsInfo {
    //指定のIDで汎用検索プロパティが存在しなければ
    if (!this.props.containsKey(searchID)) {
      SMSGeneralPurposeSearchScreenPropsInfos.props.put(
        searchID,
        new SMSGeneralPurposeSearchScreenPropsInfo(searchID),
      )
    }
    return SMSGeneralPurposeSearchScreenPropsInfos.props.get(
      searchID,
    ) as SMSGeneralPurposeSearchScreenPropsInfo
  }

  _getName(): string {
    return 'SMSGeneralPurposeSearchScreenPropsInfos'
  }

  static _getName(): string {
    return 'SMSGeneralPurposeSearchScreenPropsInfos'
  }

  _getType() {
    return SMSGeneralPurposeSearchScreenPropsInfos as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSGeneralPurposeSearchScreenPropsInfos'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSGeneralPurposeSearchScreenPropsInfos'
  }
}
