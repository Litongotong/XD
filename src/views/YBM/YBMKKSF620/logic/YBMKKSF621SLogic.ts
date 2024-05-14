import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { YBMKKSCjfLogicBase } from '../../YBMKKSF000/logic/YBMKKSCjfLogicBase'
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
import type { JCFToggleButtonData } from '@/lib/jcf/gui/JCFToggleButtonData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { Integer } from '@/lib/native/lang/Integer'
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import { createArrayByInstance } from '@/utils/array/1D'
import { SMSColor } from '@/lib/sms/sol/sys/SMSColor'
import { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'

/**
 * 配賦マスタ(複写)画面ロジッククラスです。
 */
export default class YBMKKSF621SLogic extends YBMKKSCjfLogicBase {
  /** アイテムID 配賦区分-事業登録比率 */
  private static ITEM_JIGYO_TOROKU_HIRITSU: string = 'jigyouTourokuHiritsu'

  /** アイテムID 配賦区分-ライン比率 */
  private static ITEM_LINE_HIRITSU: string = 'lineHiritsu'

  /** アイテムID 年度（複写元） */
  private static ITEM_DT_NENDO_FROM: string = 'dtNendo'

  /** アイテムID 年度（複写先） */
  private static ITEM_DT_NENDO_TO: string = 'dtNendoDown'

  /** アイテムID 組織コード（複写元） ★*/
  private static ITEM_CD_SOSHIKI_FROM: string = 'cdSoshiki'

  /** アイテムID 組織略式名称（複写元） */
  private static ITEM_NM_SOSHIKI_FROM: string = 'nmSoshiki'

  /** アイテムID 組織検索ボタン（複写元） */
  private static ITEM_BTN_SOSHIKI_FROM: string = 'buttonSoshikiUp'

  /** アイテムID 組織コード（複写先）★ */
  private static ITEM_CD_SOSHIKI_TO: string = 'cdSoshikiDown'

  /** アイテムID 組織略式名称（複写先） */
  private static ITEM_NM_SOSHIKI_TO: string = 'nmSoshikiRyakuDown'

  /** アイテムID 組織検索ボタン（複写先） */
  private static ITEM_BTN_SOSHIKI_TO: string = 'buttonSoshikiDown'

  /** アイテムID 科目コード（複写元） */
  private static ITEM_CD_KAMOKU_FROM: string = 'cdKanjokamoku'

  /** アイテムID 科目略式名称（複写元） */
  private static ITEM_NM_KAMOKU_FROM: string = 'nmKanjokamoku'

  /** アイテムID 補助科目コード（複写元）★ */
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
  private static ITEM_NM_HOJOKAMOKU_TO: string = 'nmHojyoKamokuRyakuDown'

  /** アイテムID 科目検索ボタン（複写元） */
  private static ITEM_BTN_KAMOKU_FROM: string = 'buttonKamokuUp'

  /** アイテムID 科目検索ボタン（複写先） */
  private static ITEM_BTN_KAMOKU_TO: string = 'buttonKamokuDown'

  /** ユースケースID */
  private static USECASE: string = 'YBMKKSF620'

  /** 画面ID */
  private static CD_GAMEN_ID: string = 'YBMKKSF621S'

  /** 画面名取得キー */
  private static PROPERTIES_KEY_NM_GAMEN: string = 'YBMKKSF621S_SCREEN_NAME'

  /** フッタボタンラベル */
  private static FOOTER_LABEL: string[] = [
    '(F1)',
    '(F2)',
    '(F3)',
    '(F4)',
    '(F5)',
    '(F6)',
    'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)',
    '帳票印刷(F8)',
    '登録(F9)',
  ]

  /** コマンド(verb) 事業登録比率複写 */
  private static COMMAND_COPY_JIGYO_TOROKU_HIRITSU: string =
    'YBMHaifuCBSHandler.copyJigyoTorokuHiritsu'

  /** 配賦ヘッダMsgキー */
  private static HAIFU_HEADER_MSG_KEY: string = 'headerMsg'

  /** 配賦CBMMsgキー */
  private static HAIFU_DETAIL_MSG_KEY: string = 'detailList'

  /** 複写元Msgキー */
  private static HAIFU_COPY_FROM_MSG_KEY: string = 'copyFrom'

  /** 複写先Msgキー */
  private static HAIFU_COPY_TO_MSG_KEY: string = 'copyTo'

  /** 複写元Msgキー 配賦区分 */
  private static FROM_MSG_KEY_ST_HAIFU: string = 'stHaifu'

  /** 複写元Msgキー 年度 */
  private static FROM_MSG_KEY_DT_NENDO: string = 'dtNendo'

  /** 複写元Msgキー 損益管理組織コード */
  private static FROM_MSG_KEY_CD_SOSHIKI: string = 'cdSoshiki'

  /** 複写元Msgキー 損益管理組織略式名称 */
  private static FROM_MSG_KEY_NM_SOSHIKI: string = 'nmSoshiki'

  /** 複写元Msgキー 勘定科目コード */
  private static FROM_MSG_KEY_CD_KAMOKU: string = 'cdKamoku'

  /** 複写元Msgキー 勘定科目略式名称 */
  private static FROM_MSG_KEY_NM_KAMOKU: string = 'nmKamoku'

  /** 複写元Msgキー 補助科目コード */
  private static FROM_MSG_KEY_CD_HOJOKAMOKU: string = 'cdHojokamoku'

  /** 複写元Msgキー 補助科目略式名称 */
  private static FROM_MSG_KEY_NM_HOJOKAMOKU: string = 'nmHojokamoku'

  /** 複写元Msgキー 基準日 */
  private static FROM_MSG_KEY_DT_KIJUN: string = 'dtKijun'

  /** 複写先Msgキー 配賦区分 */
  private static TO_MSG_KEY_ST_HAIFU: string = 'stHaifu'

  /** 複写先Msgキー 年度 */
  private static TO_MSG_KEY_DT_NENDO: string = 'dtNendo'

  /** 複写先Msgキー 損益管理組織コード★ */
  private static TO_MSG_KEY_CD_SOSHIKI: string = 'cdSoshiki'

  /** 複写先Msgキー 損益管理組織略式名称 */
  private static TO_MSG_KEY_NM_SOSHIKI: string = 'nmSoshiki'

  /** 複写先Msgキー 勘定科目コード★ */
  private static TO_MSG_KEY_CD_KAMOKU: string = 'cdKamoku'

  /** 複写先Msgキー 勘定科目略式名称 */
  private static TO_MSG_KEY_NM_KAMOKU: string = 'nmKamoku'

  /** 複写先Msgキー 補助科目コード★ */
  private static TO_MSG_KEY_CD_HOJOKAMOKU: string = 'cdHojokamoku'

  /** 複写先Msgキー 補助科目略式名称 */
  private static TO_MSG_KEY_NM_HOJOKAMOKU: string = 'nmHojokamoku'

  /** 複写先Msgキー 基準日 */
  private static TO_MSG_KEY_DT_KIJUN: string = 'dtKijun'

  /** ユーザ領域格納キー 組織検索ボタン */
  private static USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM: string =
    'buttonSoshiki'

  /** ユーザ領域格納キー 科目検索ボタン */
  private static USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM: string =
    'buttonKamoku'

  /** 配賦区分 値 事業登録比率*/
  private static ST_HAIFU_JIGYO_TOROKU_HIRITSU: string = '01'

  /** 配賦区分 値 ライン比率 */
  private static ST_HAIFU_LINE_HIRITSU: string = '02'

  /** 配賦Msgキー ヘッダMsg */
  private static HAIFU_MSG_KEY_HEADER_MSG: string = 'headerMsg'

  /** 配賦ヘッダMsgキー 基準日 */
  private static HEADER_MSG_KEY_DT_KIJUN: string = 'dtKijun'

  protected setUseCaseID() {
    this.useCaseID = YBMKKSF621SLogic.USECASE
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
    SMSCLLog.debug('YBMKKSF621SLogic.beforeDisplay start')
    try {
      super.checkDialogException(context)
      this.beforeDisplay2(
        event,
        context,
        returnInfo,
        YBMKKSF621SLogic.CD_GAMEN_ID,
        YBMKKSF621SLogic.PROPERTIES_KEY_NM_GAMEN,
        YBMKKSF621SLogic.ITEM_JIGYO_TOROKU_HIRITSU,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF621SLogic.beforeDisplay end')
  }

  /**
   * 組織検索(複写元)ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF621SLogic.showSoshiki start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
      ) as JCFFieldStringData
      let nmSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_SOSHIKI_FROM,
      ) as JCFFieldStringData

      // 検索ボタン押下位置をユーザ領域に格納
      super.putUserData(
        context,
        YBMKKSF621SLogic.USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM,
        YBMKKSF621SLogic.ITEM_BTN_SOSHIKI_FROM,
      )

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_SOSHIKI,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF621SLogic.showSoshiki end')
  }

  /**
   * 組織検索(複写先)ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showSoshiki2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF621SLogic.showSoshiki2 start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
      ) as JCFFieldStringData
      let nmSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_SOSHIKI_TO,
      ) as JCFFieldStringData
      let dtNendo: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_DT_NENDO_TO,
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
        YBMKKSF621SLogic.USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM,
        YBMKKSF621SLogic.ITEM_BTN_SOSHIKI_TO,
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
    SMSCLLog.debug('YBMKKSF621SLogic.showSoshiki2 end')
  }

  /**
   * 組織検索後表示前イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  setSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF621SLogic.setSoshiki start')
    try {
      super.checkDialogException(context)
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdSoshikiFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
      ) as JCFFieldStringData
      let nmSoshikiFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_SOSHIKI_FROM,
      ) as JCFFieldStringData
      let cdSoshikiTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
      ) as JCFFieldStringData
      let nmSoshikiTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_SOSHIKI_TO,
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
              YBMKKSF621SLogic.USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM,
            ) as string
          ).equals(YBMKKSF621SLogic.ITEM_BTN_SOSHIKI_FROM)
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
            YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
          )
          // 複写先の場合
        } else if (
          (
            super.getUserData(
              context,
              YBMKKSF621SLogic.USER_DATA_KEY_SOSHIKI_SEARCH_CALLED_FROM,
            ) as string
          ).equals(YBMKKSF621SLogic.ITEM_BTN_SOSHIKI_TO)
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
            YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
          )
        }
      }

      return
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF621SLogic.setSoshiki end')
  }

  /**
   * 科目検索(複写元)ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF621SLogic.showKamoku start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
      ) as JCFFieldStringData
      let cdHojokamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_FROM,
      ) as JCFFieldStringData
      let nmKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_KAMOKU_FROM,
      ) as JCFFieldStringData
      let nmHojokamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_HOJOKAMOKU_FROM,
      ) as JCFFieldStringData

      // 検索ボタン押下位置をユーザ領域に格納
      super.putUserData(
        context,
        YBMKKSF621SLogic.USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM,
        YBMKKSF621SLogic.ITEM_BTN_KAMOKU_FROM,
      )

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_KAMOKU_HOJOKAMOKU,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF621SLogic.showKamoku end')
  }

  /**
   * 科目検索(複写先)ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showKamoku2(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF621SLogic.showKamoku2 start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO,
      ) as JCFFieldStringData
      let cdHojokamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_TO,
      ) as JCFFieldStringData
      let nmKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_KAMOKU_TO,
      ) as JCFFieldStringData
      let nmHojokamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_HOJOKAMOKU_TO,
      ) as JCFFieldStringData

      // 検索ボタン押下位置をユーザ領域に格納
      super.putUserData(
        context,
        YBMKKSF621SLogic.USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM,
        YBMKKSF621SLogic.ITEM_BTN_KAMOKU_TO,
      )

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_KAMOKU_HOJOKAMOKU,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF621SLogic.showKamoku2 end')
  }

  /**
   * 科目検索後表示前イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  setKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF621SLogic.setKamoku start')
    try {
      super.checkDialogException(context)
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamokuFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
      ) as JCFFieldStringData
      let cdHojokamokuFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_FROM,
      ) as JCFFieldStringData
      let nmKamokuFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_KAMOKU_FROM,
      ) as JCFFieldStringData
      let nmHojokamokuFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_HOJOKAMOKU_FROM,
      ) as JCFFieldStringData
      let cdKamokuTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO,
      ) as JCFFieldStringData
      let cdHojokamokuTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_TO,
      ) as JCFFieldStringData
      let nmKamokuTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_KAMOKU_TO,
      ) as JCFFieldStringData
      let nmHojokamokuTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_NM_HOJOKAMOKU_TO,
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
              YBMKKSF621SLogic.USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM,
            ) as string
          ).equals(YBMKKSF621SLogic.ITEM_BTN_KAMOKU_FROM)
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
            YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
          )
          // 複写先の場合
        } else if (
          (
            super.getUserData(
              context,
              YBMKKSF621SLogic.USER_DATA_KEY_KAMOKU_SEARCH_CALLED_FROM,
            ) as string
          ).equals(YBMKKSF621SLogic.ITEM_BTN_KAMOKU_TO)
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
            YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO,
          )
        }
      }

      return
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF621SLogic.setKamoku end')
  }

  /**
   * 登録ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  register(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF621SLogic.register start')
    try {
      this.register2(
        event,
        context,
        returnInfo,
        YBMKKSF621SLogic.COMMAND_COPY_JIGYO_TOROKU_HIRITSU,
        YBMKKSF621SLogic.ITEM_JIGYO_TOROKU_HIRITSU,
        YBMKKSF621SLogic.CD_GAMEN_ID,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF621SLogic.register end')
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
    SMSCLLog.debug('YBMKKSF621SLogic.removeInitFlag start')
    try {
      let fgInit: any = null
      // 共有領域から初期化実行判定フラグを取得
      fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT)

      // Initフラグがnullでなければキー削除
      if (fgInit != null) {
        super.removeUserDataWithObject(context, YBMKKSCjfConst.FG_INIT as any)
      }
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF621SLogic.removeInitFlag end')
  }

  /**
   * 初期表示の実際の処理を行います。(YBMKKSF621SとYBMKKSF625Sの共通化のため)
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @param cdGamenId 画面ID
   * @param nmGamen 画面名
   * @param cursorItem フォーカス設定項目
   */
  protected beforeDisplay2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    cdGamenId: string,
    nmGamen: string,
    cursorItem: string,
  ) {
    // 共通情報取得
    let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
      context,
    ) as SMSLoginInfoImpl

    // 画面項目部品取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let dtNendoFrom: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_DT_NENDO_FROM,
    ) as JCFComboBoxData
    let dtNendoTo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_DT_NENDO_TO,
    ) as JCFComboBoxData
    let stHaifu: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      cursorItem,
    ) as JCFToggleButtonData

    // 組織コード
    let cdSoshikiFrom: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
    )
    // 組織名称
    let nmSoshikiFrom: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_SOSHIKI_FROM,
    )

    // 科目コード
    let cdKamokuFrom: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
    )
    // 科目名称
    let nmKamokuFrom: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_KAMOKU_FROM,
    )

    // 補助科目コード
    let cdHojokamokuFrom: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_FROM,
    )
    // 補助科目名称
    let nmHojokamokuFrom: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_HOJOKAMOKU_FROM,
    )

    let fgInit: any = null

    // 共有領域から初期化実行判定フラグを取得
    fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT)

    // Initフラグがnullでなければ初期化実行済み
    if (fgInit != null) {
      SMSCLLog.debug('初期化実行判定：初期化実行済み')
      return
    }

    // 初期化実行判定フラグを共有領域へセット
    super.putUserData(
      context,
      YBMKKSCjfConst.FG_INIT,
      YBMKKSCjfConst.FG_INIT_TRUE,
    )

    // ヘッダ情報の設定
    SMSHeaderFooterManager.initHeader(event, context)
    let screenName: string = SMSPropsInfos.getProperty(
      YBMKKSCjfConst.SUB_SYSTEM_ID,
      nmGamen,
    )
    SMSHeaderFooterManager.setHeaderTitle(context, screenName, cdGamenId)

    // フッタボタンの設定
    SMSHeaderFooterManager.initFooter(context, YBMKKSF621SLogic.FOOTER_LABEL)
    SMSHeaderFooterManager.setAllFooterButtonEnabled(context, false)

    // メッセージ消去
    SMSHeaderFooterManager.initInformation(context)

    // 登録ボタンを活性化する
    SMSHeaderFooterManager.setEnabledFooterButton(
      context,
      SMSHeaderFooterManager.ITEM_FUNCBTN9,
      true,
    )

    // トグルボタンを設定
    stHaifu.setValue(true)

    // 年度コンボボックスの設定
    let dtUnyo: string = loginInfo.getDtUnyo()

    let nendo: number = Integer.parseInt(dtUnyo.substring(0, 4))
    let tsuki: string = dtUnyo.substring(4, 6)

    // 1月〜3月なら年度は-1
    if (tsuki.equals('01') || tsuki.equals('02') || tsuki.equals('03')) {
      nendo -= 1
    }

    // 年度コンボボックスに当年度、次年度を設定
    let dtNendoElement: JCFSelectableElement[] = createArrayByInstance(
      JCFSelectableElement,
      2,
    )
    let tonendo: string = new Integer(nendo).toString()
    let jinendo: string = new Integer(nendo + 1).toString()
    dtNendoElement[0] = new JCFSelectableElement(tonendo, tonendo, true)
    dtNendoElement[1] = new JCFSelectableElement(jinendo, jinendo, false)
    dtNendoTo.setValue(dtNendoElement)
  }

  /**
   * 登録ボタン押下イベントの実際の処理を行います。(YBMKKSF621S、YBMKKSF625S共通化のため)
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @param cursorItem フォーカス設定項目
   */
  protected register2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    command: string,
    cursorItem: string,
    gamenCD: string,
  ) {
    // 共通情報取得
    let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
      context,
    ) as SMSLoginInfoImpl

    // メッセージ消去
    SMSHeaderFooterManager.initInformation(context)

    // 画面項目部品取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let jigyoTourokuHiritsu: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_JIGYO_TOROKU_HIRITSU,
    ) as JCFToggleButtonData
    let lineHiritsu: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_LINE_HIRITSU,
    ) as JCFToggleButtonData
    let dtNendoUpCombo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_DT_NENDO_FROM,
    ) as JCFComboBoxData
    let cdSoshikiUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
    )
    let nmSoshikiRyakuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_SOSHIKI_FROM,
    )
    let cdKamokuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
    )
    let cdHojyoKamokuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_FROM,
    )
    let nmKamokuRyakuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_KAMOKU_FROM,
    )
    let nmHojyoKamokuRyakuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_HOJOKAMOKU_FROM,
    )
    let dtNendoDownCombo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_DT_NENDO_TO,
    ) as JCFComboBoxData
    let cdSoshikiDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
    )
    let nmSoshikiRyakuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_SOSHIKI_TO,
    )
    let cdKamokuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO,
    )
    let cdHojyoKamokuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_TO,
    )
    let nmKamokuRyakuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_KAMOKU_TO,
    )
    let nmHojyoKamokuRyakuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_NM_HOJOKAMOKU_TO,
    )

    // 画面入力内容取得
    let cdKaisha: string = loginInfo.getCdKaisha()
    let cdSoshikiUp: string = cdSoshikiUpItem.getValue()
    let cdKamokuUp: string = cdKamokuUpItem.getValue()
    let cdHojyoKamokuUp: string = cdHojyoKamokuUpItem.getValue()
    let cdSoshikiDown: string = cdSoshikiDownItem.getValue()
    let cdKamokuDown: string = cdKamokuDownItem.getValue()
    let cdHojyoKamokuDown: string = cdHojyoKamokuDownItem.getValue()

    // 背景色のクリア
    cdSoshikiUpItem.setBackground(SMSColor.DEFAULT)
    cdKamokuUpItem.setBackground(SMSColor.DEFAULT)
    cdHojyoKamokuUpItem.setBackground(SMSColor.DEFAULT)

    cdSoshikiDownItem.setBackground(SMSColor.DEFAULT)
    cdKamokuDownItem.setBackground(SMSColor.DEFAULT)
    cdHojyoKamokuDownItem.setBackground(SMSColor.DEFAULT)

    // 入力チェック
    if (!this.inputCheck(context, current, returnInfo)) {
      return
    }

    // 複写元と複写先の同一チェック
    if (!this.inputEqualCheck(context, current, returnInfo)) {
      return
    }

    // 登録確認メッセージをポップアップ表示
    let msgUtil: JCFMessageOnWindow = context.getMessageUtil()
    let ret: string = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC001)
    // はい：yes; いいえ：no;キャンセル：cancel
    // 「x」ボタン無効
    if (JCFMessageOnWindow.BTN_NO.equals(ret)) {
      // いいえ(NO)を選択した場合
      return
    }
    //		// ヘッダMsg生成
    //		HashMap headerMsg = new HashMap(10);
    //		headerMsg.put(HEADER_MSG_KEY_CD_GAMEN, gamenCD);

    // 複写元Msg生成
    let copyFromMsg: HashMap = new HashMap(10)
    copyFromMsg.put(
      YBMKKSF621SLogic.FROM_MSG_KEY_ST_HAIFU,
      this.getStHaifu(context),
    )
    copyFromMsg.put(
      YBMKKSF621SLogic.FROM_MSG_KEY_DT_NENDO,
      super.getComboID(dtNendoUpCombo),
    )
    copyFromMsg.put(YBMKKSF621SLogic.FROM_MSG_KEY_CD_SOSHIKI, cdSoshikiUp)
    copyFromMsg.put(YBMKKSF621SLogic.FROM_MSG_KEY_CD_KAMOKU, cdKamokuUp)
    copyFromMsg.put(
      YBMKKSF621SLogic.FROM_MSG_KEY_CD_HOJOKAMOKU,
      cdHojyoKamokuUp,
    )
    copyFromMsg.put(
      YBMKKSF621SLogic.FROM_MSG_KEY_DT_KIJUN,
      this.getDtKijun(super.getComboID(dtNendoUpCombo)),
    )

    // 複写先Msg生成
    let copyToMsg: HashMap = new HashMap(10)
    copyToMsg.put(
      YBMKKSF621SLogic.TO_MSG_KEY_ST_HAIFU,
      this.getStHaifu(context),
    )
    copyToMsg.put(
      YBMKKSF621SLogic.TO_MSG_KEY_DT_NENDO,
      super.getComboID(dtNendoDownCombo),
    )
    copyToMsg.put(YBMKKSF621SLogic.TO_MSG_KEY_CD_SOSHIKI, cdSoshikiDown)
    copyToMsg.put(YBMKKSF621SLogic.TO_MSG_KEY_CD_KAMOKU, cdKamokuDown)
    copyToMsg.put(YBMKKSF621SLogic.TO_MSG_KEY_CD_HOJOKAMOKU, cdHojyoKamokuDown)
    copyToMsg.put(
      YBMKKSF621SLogic.TO_MSG_KEY_DT_KIJUN,
      this.getDtKijun(super.getComboID(dtNendoDownCombo)),
    )

    let headerMsg: HashMap = new HashMap()
    headerMsg.put(
      YBMKKSF621SLogic.HEADER_MSG_KEY_DT_KIJUN,
      this.getDtKijun(super.getComboID(dtNendoDownCombo)),
    )

    // CBSに渡すデータを作成
    let inData: HashMap = new HashMap(10)
    inData.put(YBMKKSF621SLogic.HAIFU_COPY_FROM_MSG_KEY, copyFromMsg)
    inData.put(YBMKKSF621SLogic.HAIFU_COPY_TO_MSG_KEY, copyToMsg)
    inData.put(YBMKKSF621SLogic.HAIFU_MSG_KEY_HEADER_MSG, copyToMsg)

    //		inData.put(HAIFU_MSG_KEY_HEADER_MSG, headerMsg);

    // EJB呼び出し
    let outData: HashMap = null!
    outData = this.callEJB(
      context,
      event,
      YBMKKSCjfConst.CBS_NAME,
      command,
      inData,
    )
    let rtnData: HashMap = outData.get(
      SMSHashKeyConst.PARAM_KEY_DATA,
    ) as HashMap
    let errFlg: string = outData.get(
      SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
    ) as string

    // 共通情報取得
    loginInfo = this.getLoginInfo(context) as SMSLoginInfoImpl

    // 戻り複写情報の取得
    copyFromMsg = rtnData.get(
      YBMKKSF621SLogic.HAIFU_COPY_FROM_MSG_KEY,
    ) as HashMap
    copyToMsg = rtnData.get(YBMKKSF621SLogic.HAIFU_COPY_TO_MSG_KEY) as HashMap

    // エラーが無かった場合
    if (
      (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
        SMSHashKeyConst.IS_SUCCESS,
      )
    ) {
      // 複写元略式名称設定
      nmSoshikiRyakuUpItem.setValue(
        copyFromMsg.get(YBMKKSF621SLogic.FROM_MSG_KEY_NM_SOSHIKI) as string,
      ) // ヘッダ情報の組織名を表示
      nmKamokuRyakuUpItem.setValue(
        copyFromMsg.get(YBMKKSF621SLogic.FROM_MSG_KEY_NM_KAMOKU) as string,
      ) // ヘッダ情報の科目名を表示
      nmHojyoKamokuRyakuUpItem.setValue(
        copyFromMsg.get(YBMKKSF621SLogic.FROM_MSG_KEY_NM_HOJOKAMOKU) as string,
      ) // ヘッダ情報の補助科目名を表示

      // 複写先略式名称設定
      nmSoshikiRyakuDownItem.setValue(
        copyToMsg.get(YBMKKSF621SLogic.TO_MSG_KEY_NM_SOSHIKI) as string,
      ) // ヘッダ情報の組織名を表示
      nmKamokuRyakuDownItem.setValue(
        copyToMsg.get(YBMKKSF621SLogic.TO_MSG_KEY_NM_KAMOKU) as string,
      ) // ヘッダ情報の科目名を表示
      nmHojyoKamokuRyakuDownItem.setValue(
        copyToMsg.get(YBMKKSF621SLogic.TO_MSG_KEY_NM_HOJOKAMOKU) as string,
      ) // ヘッダ情報の補助科目名を表示

      // 登録ボタンを活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        true,
      )

      // メッセージ表示
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMSI019,
        ['登録処理'],
      )
    } else if (
      (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
        SMSHashKeyConst.IS_WARNING,
      )
    ) {
      // ------------
      // ログイン情報取得
      loginInfo = rtnData.get(
        SMSHashKeyConst.PARAM_KEY_COMMON,
      ) as SMSLoginInfoImpl
      // エラー項目ID取得
      let cdErrorKomoku: string = loginInfo.getCdErrorKoumoku()

      let cdErrorKomokuItem: string = ''
      let nmErrorKomokuItem1: string = ''
      // エラー列番号取得
      let noErrorColumnCd: number = -1
      let noErrorColumnNm: number = -1

      let spreadFlag: boolean = false // スプレットからのエラーかどうか判定するフラグ
      let noErrorGyo: number = 0
      if (cdErrorKomoku.equals(YBMKKSF621SLogic.TO_MSG_KEY_CD_KAMOKU)) {
        // 科目
        cdErrorKomokuItem = YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO
        nmErrorKomokuItem1 = YBMKKSF621SLogic.ITEM_NM_KAMOKU_TO
      } else if (cdErrorKomoku.equals(YBMKKSF621SLogic.TO_MSG_KEY_CD_SOSHIKI)) {
        // 組織
        cdErrorKomokuItem = YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO
        nmErrorKomokuItem1 = YBMKKSF621SLogic.ITEM_NM_SOSHIKI_TO
      } else if (
        cdErrorKomoku.equals(YBMKKSF621SLogic.TO_MSG_KEY_CD_HOJOKAMOKU)
      ) {
        // 補助科目
        cdErrorKomokuItem = YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_TO
        nmErrorKomokuItem1 = YBMKKSF621SLogic.ITEM_NM_HOJOKAMOKU_TO
      } else if (cdErrorKomoku.equals(YBMKKSF621SLogic.TO_MSG_KEY_DT_NENDO)) {
        // 年度
        dtNendoDownCombo.setBackground(SMSColor.WARNING)
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF621SLogic.ITEM_DT_NENDO_TO,
        )
      }

      // 画面GUI部品取得
      if (!''.equals(cdErrorKomokuItem)) {
        let fieldErrorKoumoku: JCFFieldStringData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          cdErrorKomokuItem,
        ) as JCFFieldStringData
        // 部品背景（エラー）色を設定
        fieldErrorKoumoku.setBackground(SMSColor.WARNING)
        // フォーカスを設定
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          cdErrorKomokuItem,
        )
      }
      if (!''.equals(nmErrorKomokuItem1)) {
        // 画面GUI部品取得
        let fieldErrorKoumokuNm: JCFFieldStringData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          nmErrorKomokuItem1,
        ) as JCFFieldStringData
        fieldErrorKoumokuNm.setValue('')
      }
    }
  }

  /**
	/* 配賦区分の値を返します。  
	 * @param context コンテキスト
	 * @return String 配賦区分の値
	 */
  private getStHaifu(context: JCFContext): string {
    SMSCLLog.debug('YBMKKSF621SLogic.getStHaifu start')

    let current: JCFScreenData = context.getCurrentScreenData()
    let jigyoTorokuHiritsu: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_JIGYO_TOROKU_HIRITSU,
    ) as JCFToggleButtonData

    if (jigyoTorokuHiritsu.getBooleanValue()) {
      SMSCLLog.debug('YBMKKSF621SLogic.getStHaifu end')
      return YBMKKSF621SLogic.ST_HAIFU_JIGYO_TOROKU_HIRITSU
    } else {
      SMSCLLog.debug('YBMKKSF621SLogic.getStHaifu end')
      return YBMKKSF621SLogic.ST_HAIFU_LINE_HIRITSU
    }
  }

  /**
   * 入力チェックを行います。チェックOK時はTRUEを返します。<BR>
   * @param context     コンテキスト
   * @param currentt     画面データ域
   * @param returnInfo 業務ロジック復帰情報クラス
   * @return errorFlag  エラーフラグ
   */
  private inputCheck(
    context: JCFContext,
    current: JCFScreenData,
    returnInfo: JCFReturnInfo,
  ): boolean {
    SMSCLLog.debug('YBMKKSF621SLogic.inputCheck start')

    // 画面項目部品取得

    // 年度（複写元）
    let dtNendoUpCombo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_DT_NENDO_FROM,
    ) as JCFComboBoxData

    // 組織コード（複写元）
    let cdSoshikiUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
    )

    // 科目コード(複写元）
    let cdKamokuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
    )

    // 補助科目コード（複写元）
    let cdHojyoKamokuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_FROM,
    )

    // 年度（複写先）
    let dtNendoDownCombo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_DT_NENDO_TO,
    ) as JCFComboBoxData

    // 組織コード（複写先）
    let cdSoshikiDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
    )

    // 科目コード(複写先）
    let cdKamokuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO,
    )

    // 補助科目コード（複写先）
    let cdHojyoKamokuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_TO,
    )

    // 画面の複写元入力項目取得
    let dtNendoUp: Integer = new Integer(super.getComboID(dtNendoUpCombo))
    let cdSoshikiUp: string = cdSoshikiUpItem.getValue()
    let cdKamokuUp: string = cdKamokuUpItem.getValue()
    let cdHojyoKamokuUp: string = cdHojyoKamokuUpItem.getValue()
    // 画面の複写先入力項目取得
    let dtNendoDown: Integer = new Integer(super.getComboID(dtNendoDownCombo))
    let cdSoshikiDown: string = cdSoshikiDownItem.getValue()
    let cdKamokuDown: string = cdKamokuDownItem.getValue()
    let cdHojyoKamokuDown: string = cdHojyoKamokuDownItem.getValue()

    // エラーフラグ
    let errorFlag: boolean = false

    // --------------------------------------------------
    // ここから複写元チェック
    // --------------------------------------------------

    // 複写元年度チェック
    if (!SMSCheckField.isValidString(dtNendoUp.toString())) {
      SMSCLLog.debug('複写元年度未入力')
      // 複写元年度未選択の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        ['複写元年度'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_DT_NENDO_FROM,
      )
      return errorFlag
    }

    // 複写元組織チェック
    if (!SMSCheckField.isValidString(cdSoshikiUp)) {
      SMSCLLog.debug('複写元組織未入力')
      // 複写元組織未入力の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        ['複写元組織'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
      )
      cdSoshikiUpItem.setBackground(SMSColor.WARNING)
      return errorFlag
    } else if (!SMSCheckField.checkLength(cdSoshikiUp, 6)) {
      SMSCLLog.debug('複写元組織桁数入力不足')
      // 複写元組織6桁以外の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW028,
        ['複写元組織', '6'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
      )
      cdSoshikiUpItem.setBackground(SMSColor.WARNING)
      return errorFlag
    }

    // 複写元科目チェック（１桁以上入力時）
    if (SMSCheckField.isValidString(cdKamokuUp)) {
      if (!SMSCheckField.checkLength(cdKamokuUp, 5)) {
        SMSCLLog.debug('複写元科目桁数入力不足')
        // 複写元科目5桁以外の場合はエラー
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW028,
          ['複写元科目', '5'],
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
        )
        cdKamokuUpItem.setBackground(SMSColor.WARNING)
        return errorFlag
      }
    }

    // 複写元補助科目チェック（１桁以上入力時）
    if (SMSCheckField.isValidString(cdHojyoKamokuUp)) {
      if (!SMSCheckField.checkLength(cdHojyoKamokuUp, 6)) {
        SMSCLLog.debug('複写元補助科目桁数入力不足')
        // 複写元補助科目6桁以外の場合はエラー
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW028,
          ['複写元補助科目', '6'],
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_FROM,
        )
        cdHojyoKamokuUpItem.setBackground(SMSColor.WARNING)
        return errorFlag
      }
    }

    // 複写元科目と複写元補助科目の相関チェック
    if (
      !SMSCheckField.isValidString(cdKamokuUp) &&
      SMSCheckField.isValidString(cdHojyoKamokuUp)
    ) {
      SMSCLLog.debug('複写元科目未入力')
      // 複写元科目未入力かつ複写元補助科目入力済みの場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        ['複写元科目'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
      )
      cdKamokuUpItem.setBackground(SMSColor.WARNING)
      return errorFlag
    }

    // --------------------------------------------------
    // ここから複写先
    // --------------------------------------------------

    // 複写先年度チェック
    if (!SMSCheckField.isValidString(dtNendoDown.toString())) {
      SMSCLLog.debug('複写先年度未入力')
      // 複写先年度未選択の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        ['複写先年度'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_DT_NENDO_TO,
      )
      return errorFlag
    }

    // 複写先組織チェック
    if (!SMSCheckField.isValidString(cdSoshikiDown)) {
      SMSCLLog.debug('複写先組織未入力')
      // 複写先組織未入力の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        ['複写先組織'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
      )
      cdSoshikiDownItem.setBackground(SMSColor.WARNING)
      return errorFlag
    } else if (!SMSCheckField.checkLength(cdSoshikiDown, 6)) {
      SMSCLLog.debug('複写先組織桁数入力不足')
      // 複写先組織6桁以外の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW028,
        ['複写先組織', '6'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
      )
      cdSoshikiDownItem.setBackground(SMSColor.WARNING)
      return errorFlag
    }

    // 複写先科目チェック（１桁以上入力時）
    if (SMSCheckField.isValidString(cdKamokuDown)) {
      if (!SMSCheckField.checkLength(cdKamokuDown, 5)) {
        SMSCLLog.debug('複写先科目桁数入力不足')
        // 複写先科目5桁以外の場合はエラー
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW028,
          ['複写先科目', '5'],
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO,
        )
        cdKamokuDownItem.setBackground(SMSColor.WARNING)
        return errorFlag
      }
    }

    // 複写先補助科目チェック（１桁以上入力時）
    if (SMSCheckField.isValidString(cdHojyoKamokuDown)) {
      if (!SMSCheckField.checkLength(cdHojyoKamokuDown, 6)) {
        SMSCLLog.debug('複写先補助科目桁数入力不足')
        // 複写先補助科目6桁以外の場合はエラー
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW028,
          ['複写先補助科目', '6'],
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_TO,
        )
        cdHojyoKamokuDownItem.setBackground(SMSColor.WARNING)
        return errorFlag
      }
    }

    // 複写先科目と複写先補助科目の相関チェック
    if (
      !SMSCheckField.isValidString(cdKamokuDown) &&
      SMSCheckField.isValidString(cdHojyoKamokuDown)
    ) {
      SMSCLLog.debug('複写先科目未入力')
      // 複写先科目未入力かつ複写元補助科目入力済みの場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        ['複写先科目'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO,
      )
      cdKamokuDownItem.setBackground(SMSColor.WARNING)
      return errorFlag
    }

    SMSCLLog.debug('YBMKKSF621SLogic.inputCheck end')

    return (errorFlag = true)
  }

  /**
   * 複写元と複写先の突合チェックを行います。違う場合はTRUEを返します。<BR>
   * @param context     コンテキスト
   * @param currentt     画面データ域
   * @param returnInfo 業務ロジック復帰情報クラス
   * @return errorFlag  エラーフラグ
   */
  private inputEqualCheck(
    context: JCFContext,
    current: JCFScreenData,
    returnInfo: JCFReturnInfo,
  ): boolean {
    SMSCLLog.debug('YBMKKSF621SLogic.inputEqualCheck start')

    // 画面項目部品取得
    let dtNendoUpCombo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_DT_NENDO_FROM,
    ) as JCFComboBoxData
    let cdSoshikiUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_SOSHIKI_FROM,
    )
    let cdKamokuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_KAMOKU_FROM,
    )
    let cdHojyoKamokuUpItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_FROM,
    )
    let dtNendoDownCombo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_DT_NENDO_TO,
    ) as JCFComboBoxData
    let cdSoshikiDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
    )
    let cdKamokuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_KAMOKU_TO,
    )
    let cdHojyoKamokuDownItem: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF621SLogic.ITEM_CD_HOJOKAMOKU_TO,
    )

    // 画面の複写元入力項目取得
    let dtNendoUp: Integer = new Integer(super.getComboID(dtNendoUpCombo))
    let cdSoshikiUp: string = cdSoshikiUpItem.getValue()
    let cdKamokuUp: string = cdKamokuUpItem.getValue()
    let cdHojyoKamokuUp: string = cdHojyoKamokuUpItem.getValue()
    // 画面の複写先入力項目取得
    let dtNendoDown: Integer = new Integer(super.getComboID(dtNendoDownCombo))
    let cdSoshikiDown: string = cdSoshikiDownItem.getValue()
    let cdKamokuDown: string = cdKamokuDownItem.getValue()
    let cdHojyoKamokuDown: string = cdHojyoKamokuDownItem.getValue()

    // エラーフラグ
    let errorFlag: boolean = false

    // 複写元年度チェック
    if (
      dtNendoUp.equals(dtNendoDown) &&
      cdSoshikiUp.equals(cdSoshikiDown) &&
      cdKamokuUp.equals(cdKamokuDown) &&
      cdHojyoKamokuUp.equals(cdHojyoKamokuDown)
    ) {
      // SMSCLLog.debug("複写元と複写先の入力内容が同じ");
      // 複写元と複写先の入力内容が同じ場合はエラー
      // String[] param = {"複写元と複写先の入力内容が同じです。"};
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YBMKKSMCW024,
      )
      // フォーカスを事業登録比率に設定
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF621SLogic.ITEM_CD_SOSHIKI_TO,
      )
      return errorFlag
    }

    SMSCLLog.debug('YBMKKSF621SLogic.inputEqualCheck end')

    return (errorFlag = true)
  }

  /**
   * パラメタで渡された年度から基準日を生成して返します。<BR>
   * 基準日は4月1日で固定です。<BR>
   * 2008/04/01 ME-00719-000対応により、年度末日に変更。
   */
  protected getDtKijun(dtNendo: string): string {
    let dtKijun: StringBuffer = new StringBuffer(8)
    let nendo: number = Integer.parseInt(dtNendo)
    nendo++
    dtNendo = Integer.toString(nendo)
    dtKijun.append(dtNendo)
    dtKijun.append('0331')
    return dtKijun.toString()
  }
}
