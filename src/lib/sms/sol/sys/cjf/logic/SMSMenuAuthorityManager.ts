import { Integer } from '@/lib/native/lang/Integer'
import { HashMap } from '@/lib/native/util/HashMap'

/**
 * メニューの権限情報を保持するクラスです。
 */
export class SMSMenuAuthorityManager {
  static HASHMAP_KEY_CD_MENU: string = 'cdMenu'
  static HASHMAP_KEY_FG_AUTH: string = 'fgAuth'
  static HASHMAP_KEY_NO_LEVEL: string = 'noLevel'

  static ARROWED: string = '1'
  static DENIED: string = '0'

  //権限テーブル。key:メニューコード,value:権限フラグ（権限あり=1,権限なし=0)
  private authorityTable: HashMap = new HashMap()

  /**
   * Method setMenuAuthorityData.メニューの権限情報を設定します。
   * @param autorityData 機能権限テーブルの情報。
   */
  setMenuAuthorityData(autorityData: HashMap[]) {
    for (let i = 0; i < autorityData.length; i++) {
      let cdMenu: string = autorityData[i].get(
        SMSMenuAuthorityManager.HASHMAP_KEY_CD_MENU,
      ) as string
      let fgAuth: string = autorityData[i].get(
        SMSMenuAuthorityManager.HASHMAP_KEY_FG_AUTH,
      ) as string
      let noLevel: Integer = autorityData[i].get(
        SMSMenuAuthorityManager.HASHMAP_KEY_NO_LEVEL,
      ) as Integer
      this.authorityTable.put(
        SMSMenuAuthorityManager.HASHMAP_KEY_FG_AUTH + '_' + cdMenu,
        fgAuth,
      )
      this.authorityTable.put(
        SMSMenuAuthorityManager.HASHMAP_KEY_NO_LEVEL + '_' + cdMenu,
        noLevel,
      )
    }
  }

  /**
   * メニューコードを指定して，そのメニューに権限があるかどうかを判断します。
   * 権限がある場合，trueを返します。
   * @param cdMenu メニューコード
   * @return boolean
   */
  isArrow(cdMenu: string): boolean {
    let ret: boolean = false

    let flg: string = this.authorityTable.get(
      SMSMenuAuthorityManager.HASHMAP_KEY_FG_AUTH + '_' + cdMenu,
    ) as string
    if (flg == null) {
      ret = false
    } else if (flg.equals(SMSMenuAuthorityManager.ARROWED)) {
      ret = true
    } else if (flg.equals(SMSMenuAuthorityManager.DENIED)) {
      ret = false
    } else {
      ret = false
    }
    return ret
  }

  /**
   * Method getLevel.メニューコードを指定して，そのメニューの権限レベルを取得します。
   * @param cdMenu メニューコード
   * @return int
   */
  getLevel(cdMenu: string): Integer {
    let ret: Integer = null!

    let level: Integer = this.authorityTable.get(
      SMSMenuAuthorityManager.HASHMAP_KEY_NO_LEVEL + '_' + cdMenu,
    ) as Integer
    if (level == null) {
      ret = new Integer(0)
    } else {
      ret = level
    }
    return ret
  }

  _getName(): string {
    return 'SMSMenuAuthorityManager'
  }

  static _getName(): string {
    return 'SMSMenuAuthorityManager'
  }

  _getType() {
    return SMSMenuAuthorityManager as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSMenuAuthorityManager'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSMenuAuthorityManager'
  }
}
