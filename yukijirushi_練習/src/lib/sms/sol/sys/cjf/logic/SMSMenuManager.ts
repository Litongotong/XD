import { ArrayList } from '@/lib/native/util/ArrayList'
import { HashMap } from '@/lib/native/util/HashMap'
import { createArrayByInstance } from '@/utils/array/1D'

/**
 * システムのメニュー画面に配置するメニューボタンの情報を保持するクラスです。
 */
export class SMSMenuManager {
  private menuDataMappedByCdOyaMenu: HashMap = new HashMap()
  static HASHMAP_KEY_OYA_MENU: string = 'cdOyaMenu'
  static HASHMAP_KEY_NM_MENU: string = 'nmMenu'
  static HASHMAP_KEY_CD_MENU: string = 'cdMenu'

  // y_ahn@2005-10-24 システムメニュー　→　サブメニュー直接遷移 start
  static HASHMAP_KEY_NO_DISPLAY: string = 'noDisplay'
  // y_ahn@2005-10-24 システムメニュー　→　サブメニュー直接遷移 end

  /**
   * 全メニュー項目データを設定します。
   * @param menuData
   */
  setMenuData(menuData: HashMap[]) {
    //cdOyaMenuをキーに，メニュー項目を分類して，menuDataMappedByCdOyaMenuにマップする。
    for (let i = 0; i < menuData.length; i++) {
      let oyaMenu: string = menuData[i].get(
        SMSMenuManager.HASHMAP_KEY_OYA_MENU,
      ) as string

      if (this.menuDataMappedByCdOyaMenu.containsKey(oyaMenu)) {
        let array: ArrayList = this.menuDataMappedByCdOyaMenu.get(
          oyaMenu,
        ) as ArrayList
        array.add(menuData[i])
      } else {
        let array: ArrayList = new ArrayList()
        array.add(menuData[i])
        this.menuDataMappedByCdOyaMenu.put(oyaMenu, array)
      }
    }
  }

  /**
   * メインメニューのメニュー項目を取得します。
   * @param oyaMenuCD 親メニューコード
   * @return HashMap[]
   */
  getMainMenuData(oyaMenuCD: string): HashMap[] {
    let array: ArrayList = this.menuDataMappedByCdOyaMenu.get(
      oyaMenuCD,
    ) as ArrayList
    array = this.sortMenu(array)
    return array.toArray() as HashMap[]
  }

  /**
   * 親メニューコードを指定して，メニュー項目を取得します。
   * 指定された親メニューコードに紐付くメニュー項目がなかった場合は，
   * length=0のHashMap配列を返します。
   * @param cdOyaMenu
   * @return HashMap[]
   */
  getMenuDataByCdOyaMenu(cdOyaMenu: string): HashMap[] {
    let ret: HashMap[] = null!
    if (this.menuDataMappedByCdOyaMenu.containsKey(cdOyaMenu)) {
      let array: ArrayList = this.menuDataMappedByCdOyaMenu.get(
        cdOyaMenu,
      ) as ArrayList
      array = this.sortMenu(array)
      ret = array.toArray() as HashMap[]
    } else {
      ret = createArrayByInstance(HashMap, 0)
    }
    return ret
  }

  /**
   * メニュー項目を，表示順でソートします。
   * @param menuData
   * @return ArrayList
   */
  private sortMenu(menuData: ArrayList): ArrayList {
    return menuData
  }

  _getName(): string {
    return 'SMSMenuManager'
  }

  static _getName(): string {
    return 'SMSMenuManager'
  }

  _getType() {
    return SMSMenuManager as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSMenuManager'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSMenuManager'
  }
}
