import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import YBMKKSF621SLogic from './YBMKKSF621SLogic'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import { YBMKKSCjfConst } from '../../YBMKKSF000/logic/YBMKKSCjfConst'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'
import { HashMap } from '@/lib/native/util/HashMap'
import type { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField'
import type { List } from '@/lib/native/util/List'
import { ArrayList } from '@/lib/native/util/ArrayList'

/**
 * 配賦マスタ(複写)画面ロジッククラスです。
 */
// @ts-expect-error
export default  class YBMKKSF625SLogic extends YBMKKSF621SLogic {
  /** アイテムID 配賦区分-ライン比率 */
  private static ITEM_LINE_HIRITSU: string = 'lineHiritsu'

  /** アイテムID 年度（複写先） */
  private static ITEM_DT_NENDO_TO: string = 'dtNendoDown'

  /** アイテムID 職場コード（複写元） */
  private static ITEM_CD_SOSHIKI_FROM: string = 'cdSoshiki'

  /** アイテムID 職場略式名称（複写元） */
  private static ITEM_NM_SOSHIKI_FROM: string = 'nmSoshiki'

  /** アイテムID 職場検索ボタン（複写元） */
  private static ITEM_BTN_SOSHIKI_FROM: string = 'buttonSoshikiUp'

  /** アイテムID 職場コード（複写先） */
  private static ITEM_CD_SOSHIKI_TO: string = 'cdSoshikiDown'

  /** アイテムID 職場略式名称（複写先） */
  private static ITEM_NM_SOSHIKI_TO: string = 'nmSoshikiRyakuDown'

  /** アイテムID 職場検索ボタン（複写先） */
  private static ITEM_BTN_SOSHIKI_TO: string = 'buttonSoshikiDown'

  /** アイテムID 科目コード（複写元） */
  private static ITEM_CD_KAMOKU_FROM: string = 'cdKanjokamoku'

  /** アイテムID 科目略式名称（複写元） */
  private static ITEM_NM_KAMOKU_FROM: string = 'nmKanjokamoku'

  /** アイテムID 補助科目コード（複写元） */
  private static ITEM_CD_HOJOKAMOKU_FROM: string = 'cdHojokamoku'

  /** アイテムID 補助科目略式名称（複写元） */
  private static ITEM_NM_HOJOKAMOKU_FROM: string = 'nmHojokamoku'

  /** アイテムID 科目コード（複写先） */
  private static ITEM_CD_KAMOKU_TO: string = 'cdKamokuDown'

  /** アイテムID 科目略式名称（複写先） */
  private static ITEM_NM_KAMOKU_TO: string = 'nmKamokuRyakuDown'

  /** アイテムID 補助科目コード（複写先） */
  private static ITEM_CD_HOJOKAMOKU_TO: string = 'cdHojyoKamokuDown'

  /** アイテムID 補助科目略式名称（複写先） */
  private static ITEM_NM_HOJOKAMOKU: string = 'nmHojyoKamokuRyakuDown'

  /** アイテムID 科目検索ボタン（複写元） */
  private static ITEM_BTN_KAMOKU_FROM: string = 'buttonKamokuUp'

  /** アイテムID 科目検索ボタン（複写先） */
  private static ITEM_BTN_KAMOKU_TO: string = 'buttonKamokuDown'

  /** ユースケースID */
  private static USECASE: string = 'YBMKKSF620'

  /** 画面ID */
  private static CD_GAMEN_ID: string = 'YBMKKSF625S'

  /** 画面名取得キー */
  private static PROPERTIES_KEY_NM_GAMEN: string = 'YBMKKSF625S_SCREEN_NAME'

  /** コマンド(verb) ライン比率複写 */
  private static COMMAND_COPY_LINE_HIRITSU: string =
    'YBMHaifuCBSHandler.copyLineHiritsu'

  /** ユーザ領域格納キー 職場検索ボタン */
  private static USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM: string =
    'buttonSoshiki'

  /** ユーザ領域格納キー 科目検索ボタン */
  private static USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM: string =
    'buttonKamoku'

  protected setUseCaseID() {
    this.useCaseID = YBMKKSF625SLogic.USECASE
  }

  /**
   * 初期表示イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  beforeDisplay(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF625SLogic.beforeDisplay start')
    try {
      super.checkDialogException(context)
      super.beforeDisplay2(
        event,
        context,
        returnInfo,
        YBMKKSF625SLogic.CD_GAMEN_ID,
        YBMKKSF625SLogic.PROPERTIES_KEY_NM_GAMEN,
        YBMKKSF625SLogic.ITEM_LINE_HIRITSU,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.beforeDisplay end')
  }

  /**
   * 職場検索(複写元)ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF625SLogic.showSoshiki start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_SOSHIKI_FROM,
      ) as JCFFieldStringData
      let nmSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_SOSHIKI_FROM,
      ) as JCFFieldStringData

      // 検索ボタン押下位置をユーザ領域に格納
      super.putUserData(
        context,
        YBMKKSF625SLogic.USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM,
        YBMKKSF625SLogic.ITEM_BTN_SOSHIKI_TO,
      )

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_SOSHIKI,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.showSoshiki end')
  }

  /**
   * 職場検索(複写先)ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showSoshiki2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF625SLogic.showSoshiki2 start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_SOSHIKI_TO,
      ) as JCFFieldStringData
      let nmSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_SOSHIKI_TO,
      ) as JCFFieldStringData
      let dtNendo: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_DT_NENDO_TO,
      ) as JCFComboBoxData

      let inData: HashMap = new HashMap()
      let cdKaisha: string = null!
      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl
      cdKaisha = loginInfo.getCdKaisha()

      // 検索ボタン押下位置をユーザ領域に格納
      super.putUserData(
        context,
        YBMKKSF625SLogic.USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM,
        YBMKKSF625SLogic.ITEM_BTN_SOSHIKI_TO,
      )

      let cdSoshikival: string = cdSoshiki.getValue()

      if (
        SMSCheckField.isValidString(cdSoshikival) &&
        SMSCheckField.checkLength(cdSoshikival, 6)
      ) {
        let literalCondition: List = new ArrayList()
        // リテラル条件にセットするパラメタ
        literalCondition.add(cdKaisha)

        inData.put(YBMKKSCjfConst.HANYO_CONDITION_1, cdSoshikival)
        // 年度コンボボックスで選ばれている年度の4月1日を渡す。
        inData.put(
          YBMKKSCjfConst.HANYO_CONDITION_2,
          this.getDtKijun(super.getComboID(dtNendo)),
        )
        let nmSoshikival: string = null!

        if (SMSCheckField.isValidString(cdSoshikival)) {
          nmSoshikival = super.getNameByGeneralSearch(
            context,
            YBMKKSCjfConst.HANYO_SEARCH_SOSHIKI_3,
            inData,
            literalCondition,
            YBMKKSCjfConst.HANYO_RESULT_3,
          )
        }
        if (SMSCheckField.isValidString(nmSoshikival)) {
          nmSoshiki.setValue(nmSoshikival)
          returnInfo.cancelScreenTransition()
          return
        }
      }

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_SOSHIKI,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.showSoshiki2 end')
  }

  /**
   * 職場検索後表示前イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  setSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF625SLogic.setSoshiki start')
    try {
      super.checkDialogException(context)
      // 画面データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdSoshikiFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_SOSHIKI_FROM,
      ) as JCFFieldStringData
      let nmSoshikiFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_SOSHIKI_FROM,
      ) as JCFFieldStringData
      let cdSoshikiTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_SOSHIKI_TO,
      ) as JCFFieldStringData
      let nmSoshikiTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_SOSHIKI_TO,
      ) as JCFFieldStringData

      // コンテキストより検索結果情報取得
      if (
        (context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI) as string) !=
        null
      ) {
        // 複写元の場合
        if (
          (
            super.getUserData(
              context,
              YBMKKSF625SLogic.USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM,
            ) as string
          ).equals(YBMKKSF625SLogic.ITEM_BTN_SOSHIKI_FROM)
        ) {
          cdSoshikiFrom.setValue(
            context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI) as string,
          )
          nmSoshikiFrom.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_NM_SOSHIKI_RYAKU,
            ) as string,
          )
          returnInfo.setFocus(
            SMSHeaderFooterManager.FRAME_MAIN,
            YBMKKSF625SLogic.ITEM_CD_SOSHIKI_FROM,
          )
          // 複写先の場合
        } else if (
          (
            super.getUserData(
              context,
              YBMKKSF625SLogic.USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM,
            ) as string
          ).equals(YBMKKSF625SLogic.ITEM_BTN_SOSHIKI_TO)
        ) {
          cdSoshikiTo.setValue(
            context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI) as string,
          )
          nmSoshikiTo.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_NM_SOSHIKI_RYAKU,
            ) as string,
          )
          returnInfo.setFocus(
            SMSHeaderFooterManager.FRAME_MAIN,
            YBMKKSF625SLogic.ITEM_CD_SOSHIKI_TO,
          )
        }
      }
      return
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.setSoshiki end')
  }

  /**
   * 科目検索(複写元)ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF625SLogic.showKamoku start')
    try {
      super.checkDialogException(context)
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_KAMOKU_FROM,
      ) as JCFFieldStringData
      let cdHojyoKamokuItem: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_HOJOKAMOKU_FROM,
      ) as JCFFieldStringData
      let nmKamokuRyakuItem: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_KAMOKU_FROM,
      ) as JCFFieldStringData
      let nmHojyoKamokuRyakuItem: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_HOJOKAMOKU_FROM,
      ) as JCFFieldStringData

      // 検索ボタン押下位置をユーザ領域に格納
      super.putUserData(
        context,
        YBMKKSF625SLogic.USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM,
        YBMKKSF625SLogic.ITEM_BTN_KAMOKU_FROM,
      )

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_KAMOKU_HOJOKAMOKU,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.showKamoku end')
  }

  /**
   * 科目検索(複写先)ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showKamoku2(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF625SLogic.showKamoku2 start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamokuItem: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_KAMOKU_TO,
      ) as JCFFieldStringData
      let cdHojyoKamokuItem: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_HOJOKAMOKU_TO,
      ) as JCFFieldStringData
      let nmKamokuRyakuItem: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_KAMOKU_TO,
      ) as JCFFieldStringData
      let nmHojyoKamokuRyakuItem: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_HOJOKAMOKU,
      ) as JCFFieldStringData

      // 検索ボタン押下位置をユーザ領域に格納
      super.putUserData(
        context,
        YBMKKSF625SLogic.USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM,
        YBMKKSF625SLogic.ITEM_BTN_KAMOKU_TO,
      )

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_KAMOKU_HOJOKAMOKU,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.showKamoku2 end')
  }

  /**
   * 科目検索後表示前イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  setKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF625SLogic.setKamoku start')
    try {
      super.checkDialogException(context)
      // 画面データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamokuFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_KAMOKU_FROM,
      ) as JCFFieldStringData
      let cdHojokamokuFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_HOJOKAMOKU_FROM,
      ) as JCFFieldStringData
      let nmKamokuFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_KAMOKU_FROM,
      ) as JCFFieldStringData
      let nmHojokamokuFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_HOJOKAMOKU_FROM,
      ) as JCFFieldStringData
      let cdKamokuTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_KAMOKU_TO,
      ) as JCFFieldStringData
      let cdHojokamokuTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_CD_HOJOKAMOKU_TO,
      ) as JCFFieldStringData
      let nmKamokuTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_KAMOKU_TO,
      ) as JCFFieldStringData
      let nmHojokamokuTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF625SLogic.ITEM_NM_HOJOKAMOKU,
      ) as JCFFieldStringData

      // コンテキストより検索結果情報取得
      if (
        (context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU) as string) !=
        null
      ) {
        // 複写元の場合
        if (
          (
            super.getUserData(
              context,
              YBMKKSF625SLogic.USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM,
            ) as string
          ).equals(YBMKKSF625SLogic.ITEM_BTN_KAMOKU_FROM)
        ) {
          cdKamokuFrom.setValue(
            context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU) as string,
          )
          cdHojokamokuFrom.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_CD_HOJOKAMOKU,
            ) as string,
          )
          nmKamokuFrom.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_NM_KAMOKU_RYAKU,
            ) as string,
          )
          nmHojokamokuFrom.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_NM_HOJOKAMOKU_RYAKU,
            ) as string,
          )
          returnInfo.setFocus(
            SMSHeaderFooterManager.FRAME_MAIN,
            YBMKKSF625SLogic.ITEM_CD_KAMOKU_FROM,
          )
          // 複写先の場合
        } else if (
          (
            super.getUserData(
              context,
              YBMKKSF625SLogic.USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM,
            ) as string
          ).equals(YBMKKSF625SLogic.ITEM_BTN_KAMOKU_TO)
        ) {
          cdKamokuTo.setValue(
            context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU) as string,
          )
          cdHojokamokuTo.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_CD_HOJOKAMOKU,
            ) as string,
          )
          nmKamokuTo.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_NM_KAMOKU_RYAKU,
            ) as string,
          )
          nmHojokamokuTo.setValue(
            context.getSucceedData(
              YBMKKSCjfConst.SEARCH_NM_HOJOKAMOKU_RYAKU,
            ) as string,
          )
          returnInfo.setFocus(
            SMSHeaderFooterManager.FRAME_MAIN,
            YBMKKSF625SLogic.ITEM_CD_KAMOKU_TO,
          )
        }
      }
      return
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.setKamoku end')
  }

  /**
   * 登録ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  register(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF625SLogic.register start')
    try {
      super.register2(
        event,
        context,
        returnInfo,
        YBMKKSF625SLogic.COMMAND_COPY_LINE_HIRITSU,
        YBMKKSF625SLogic.ITEM_LINE_HIRITSU,
        YBMKKSF625SLogic.CD_GAMEN_ID,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.register end')
  }

  /**
   * 初期表示実行済フラグクリアイベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  removeInitFlag(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF625SLogic.removeInitFlag start')

    let fgInit: any = null
    try {
      // 共有領域から初期化実行判定フラグを取得
      fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT)

      // Initフラグがnullでなければキー削除
      if (fgInit != null) {
        super.removeUserDataWithObject(context, YBMKKSCjfConst.FG_INIT as any)
      }
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF625SLogic.removeInitFlag end')
  }
}
