import { System } from '@/lib/native/lang/System'
import { SMSProperties } from './SMSProperties'

/**
 * プロパティファイルアクセスです。
 * @author 富士通)young-joon. AHN
 * @version
 */
export class SMSGeneralPurposeSearchScreenPropsInfo extends SMSProperties {
  /** 読込むプロパティファイル名 */
  private static FILE_NAME = 'generalPurposeSearch_Screen.properties'

  private searchID: string = ''

  /**
   * コンストラクタです。
   */
  constructor(searchID: string) {
    super()
    //	   //　検索IDをパネル初期化データオブジェクトから取得する。
    //	   searchID = SMSPanelInitDataHolder.getInstance().getSearchID();
    this.searchID = searchID
    // プロパティファイルを読込みます
    super.load()
  }

  /**
   * ファイル名を通知します。
   * @return String プロパティ値
   */
  getFileName(): string {
    return (
      this.searchID + '_' + SMSGeneralPurposeSearchScreenPropsInfo.FILE_NAME
    )
  }

  /**
   * nmPropertyの値をプロパティファイルから取得します。
   * @param      nmProperty
   * @return     String プロパティ値
   * @exception NullPointerException
   */
  getProperties(nmProperty: string): string {
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
    return 'SMSGeneralPurposeSearchScreenPropsInfo'
  }

  static _getName(): string {
    return 'SMSGeneralPurposeSearchScreenPropsInfo'
  }

  _getType() {
    return SMSGeneralPurposeSearchScreenPropsInfo as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSGeneralPurposeSearchScreenPropsInfo'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSGeneralPurposeSearchScreenPropsInfo'
  }
}
