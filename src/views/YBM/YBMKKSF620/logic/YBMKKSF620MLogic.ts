import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { YBMKKSCjfLogicBase } from '../../YBMKKSF000/logic/YBMKKSCjfLogicBase'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import { YBMKKSCjfConst } from '../../YBMKKSF000/logic/YBMKKSCjfConst'
import type { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField'
import type { List } from '@/lib/native/util/List'
import { ArrayList } from '@/lib/native/util/ArrayList'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { Integer } from '@/lib/native/lang/Integer'
import { createArrayByInstance, createStringArray } from '@/utils/array/1D'
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { JCFSpreadCellPosition } from '@/lib/jcf/gui/JCFSpreadCellPosition'
import type { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'
import { BigDecimal } from '@/lib/native/math/BigDecimal'
import { SMSColor } from '@/lib/sms/sol/sys/SMSColor'
import { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFToggleButtonData } from '@/lib/jcf/gui/JCFToggleButtonData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'
import type { SMSJCFSpreadData } from '@/lib/sms/sol/sys/cjf/SMSJCFSpreadData'
import type { JCFFieldDoubleData } from '@/lib/jcf/gui/JCFFieldDoubleData'
import { DecimalFormat } from '@/lib/native/text/DecimalFormat'
import { Double } from '@/lib/native/lang/Double'
import { SMSDateStringUtil } from '@/lib/sms/sol/sys/SMSDateStringUtil'
import { HashMap } from '@/lib/native/util/HashMap'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase'
import type { JCFEventAdditionalInfo } from '@/lib/jcf/ctrl/JCFEventAdditionalInfo'
import type { JCFSpreadAdditionalInfo } from '@/lib/jcf/gui/JCFSpreadAdditionalInfo'
import { SMSRuntimeException } from '@/lib/sms/sol/sys/SMSRuntimeException'
import type { JCFFieldLongData } from '@/lib/jcf/gui/JCFFieldLongData'
import { Long } from '@/lib/native/lang/Long'
import type { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData'

/**
 * 配賦マスタ画面ロジッククラスです。
 */
export default class YBMKKSF620MLogic extends YBMKKSCjfLogicBase {
  // ------------------------------------------------
  // アイテムID
  // ------------------------------------------------
  /** アイテムID 事業登録比率(ラジオボタン) */
  protected static ITEM_JIGYO_TOROKU_HIRITSU = 'jigyoTorokuHiritsu'

  /** アイテムID ライン比率(ラジオボタン) */
  protected static ITEM_LINE_HIRITSU = 'lineHiritsu'

  /** アイテムID 年度 */
  protected static ITEM_DT_NENDO = 'dtNendo'

  /** アイテムID 組織コード */
  protected static ITEM_CD_SOSHIKI = 'cdSoshiki'

  /** アイテムID 組織名 */
  protected static ITEM_NM_SOSHIKI = 'nmSoshiki'

  /** アイテムID 勘定科目コード */
  protected static ITEM_CD_KAMOKU = 'cdKanjokamoku'

  /** アイテムID 勘定科目名 */
  protected static ITEM_NM_KAMOKU = 'nmKanjokamoku'

  /** アイテムID 補助科目コード */
  protected static ITEM_CD_HOJOKAMOKU = 'cdHojokamoku'

  /** アイテムID 補助科目名 */
  protected static ITEM_NM_HOJOKAMOKU = 'nmHojokamoku'

  /** アイテムID 予算比率合計 */
  protected static ITEM_SUM_YOSAN_HIRITSU = 'sumYosanHiritsu'

  /** アイテムID 実績比率合計 */
  protected static ITEM_SUM_JISSEKI_HIRITSU = 'sumJissekiHiritsu'

  /** アイテムID 前回予算合計 */
  protected static ITEM_SUM_ZENKAI_YOSAN = 'sumZenkaiYosan'

  /** アイテムID 前回実績合計 */
  protected static ITEM_SUM_ZENKAI_JISSEKI = 'sumZenkaiJisseki'

  /** アイテムID 件数 */
  protected static ITEM_NO_COUNT = 'count'

  /** アイテムID 行追加ボタン */
  private static ITEM_BTN_LINE_ADD = 'addRow'

  /** アイテムID 複写ボタン */
  private static ITEM_BTN_COPY = 'fukusya'

  /** アイテムID スプレッド */
  protected static ITEM_SPREAD = 'spread'

  /** ユースケースID */
  private static USECASE = 'YBMKKSF620'

  // ----------------------------------------------------------
  // 電文メッセージKEY
  // ----------------------------------------------------------

  /** 配賦Msgキー ヘッダMsg */
  private static HAIFU_MSG_KEY_HEADER_MSG = 'headerMsg'

  /** 配賦Msgキー 明細Msg */
  private static HAIFU_MSG_KEY_DETAIL_MSG_LIST = 'detailMsgList'

  /** 配賦ヘッダMsgキー 配賦区分 */
  private static HEADER_MSG_KEY_ST_HAIFU = 'stHaifu'

  /** 配賦ヘッダMsgキー 年度 */
  private static HEADER_MSG_KEY_DT_NENDO = 'dtNendo'

  /** 配賦ヘッダMsgキー 損益管理組織コード */
  private static HEADER_MSG_KEY_CD_SOSHIKI = 'cdSoshiki'

  /** 配賦ヘッダMsgキー 損益管理組織略式名称 */
  private static HEADER_MSG_KEY_NM_SOSHIKI = 'nmSoshiki'

  /** 配賦ヘッダMsgキー 勘定科目コード */
  private static HEADER_MSG_KEY_CD_KAMOKU = 'cdKamoku'

  /** 配賦ヘッダMsgキー 勘定科目略式名称 */
  private static HEADER_MSG_KEY_NM_KAMOKU = 'nmKamoku'

  /** 配賦ヘッダMsgキー 補助科目コード */
  private static HEADER_MSG_KEY_CD_HOJOKAMOKU = 'cdHojokamoku'

  /** 配賦ヘッダMsgキー 補助科目略式名称 */
  private static HEADER_MSG_KEY_NM_HOJOKAMOKU = 'nmHojokamoku'

  /** 配賦ヘッダMsgキー 基準日 */
  private static HEADER_MSG_KEY_DT_KIJUN = 'dtKijun'

  /** 配賦ヘッダMsgキー 画面名 */
  private static HEADER_MSG_KEY_CD_GAMEN = 'cdGamen'

  /** 配賦明細Msgキー 配賦コード */
  private static DETAIL_MSG_KEY_CD_HAIFU = 'cdHaifu'

  /** 配賦明細Msgキー 配賦略式名称 */
  private static DETAIL_MSG_KEY_NM_HAIFU = 'nmHaifu'

  /** 配賦明細Msgキー 階層レベル */
  private static DETAIL_MSG_KEY_NO_KAISO_LEVEL = 'noKaisoLevel'

  /** 配賦明細Msgキー 予算・配賦率 */
  private static DETAIL_MSG_KEY_NU_YSN_HAIFURITSU = 'nuYsnHaifuritsu'

  /** 配賦明細Msgキー 実績・配賦率 */
  private static DETAIL_MSG_KEY_NU_JISK_HAIFURITSU = 'nuJiskHaifuritsu'

  /** 配賦明細Msgキー 予算・前回配賦率 */
  private static DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU = 'nuYsnZenHaifuritsu'

  /** 配賦明細Msgキー 実績・前回配賦率 */
  private static DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU = 'nuJiskZenHaifuritsu'

  /** 配賦明細Msgキー 更新日時 */
  private static DETAIL_MSG_KEY_TM_KOSHIN = 'tmKoshin'

  /** 配賦明細Msgキー 更新者名 */
  private static DETAIL_MSG_KEY_NM_KOSHINSHA = 'nmKoshinsha'

  /** 配賦明細Msgキー 論理削除フラグ */
  private static DETAIL_MSG_KEY_FG_RONRISAKUJO = 'fgRonrisakujo'

  /** 配賦明細Msgキー 行番号 */
  private static DETAIL_MSG_KEY_NO_GYO = 'noGyo'

  /** 管理会計初期化共通メッセージキー 利用制限Msg */
  static RIYO_SEIGEN_MSG = 'riyoSeigenMsg'

  /** 管理会計初期化共通メッセージキー 組織Msg */
  static SONEKI_SOSHIKI_MSG = 'sonekiSoshikiMsg'

  /** 利用制限メッセージキー チェック結果 */
  static RIYO_SEIGEN_FG_RESULT = 'fgResult'

  /** 利用制限メッセージキー エラーメッセージ */
  static RIYO_SEIGEN_IF_MSG = 'ifMsg'

  /** 組織メッセージキー 帳票セキュリティ区分 */
  static ST_KEIHI_CYOHYO = 'stKeieiCyohyoSecurity'

  // -----------------------------------------------------
  // プロパティファイルKEY
  // -----------------------------------------------------

  /** 画面名取得キー */
  private static PROPERTIES_KEY_NM_GAMEN = 'YBMKKSF620M_SCREEN_NAME'

  /** 最大表示数取得キー */
  private static PROPERTIES_KEY_MAX_DISPLAY_CNT = 'YBMKKSF620M_MAX_DISPLAY_CNT'

  /** 最大検索数取得キー */
  private static PROPERTIES_KEY_MAX_SELECT_CNT = 'YBMKKSF620M_MAX_SELECT_CNT'

  // -------------------------------------------------------
  // その他定数
  // -------------------------------------------------------

  /** 画面ID */
  private static CD_GAMEN_ID = 'YBMKKSF620M'

  /** 配賦区分 値 事業登録比率*/
  private static ST_HAIFU_JIGYO_TOROKU_HIRITSU = '01'

  /** 配賦区分 値 ライン比率 */
  private static ST_HAIFU_LINE_HIRITSU = '02'

  /** コマンド(verb) 初期表示 */
  private static COMMAND_INIT = 'YBMHaifuCBSHandler.init3'

  /** コマンド(verb) 事業登録比率取得 */
  private static COMMAND_GET_JIGYO_TOROKU_HIRITSU =
    'YBMHaifuCBSHandler.getJigyoTorokuHiritsu'

  /** コマンド(verb) 事業登録比率登録 */
  private static COMMAND_RGS_JIGYO_TOROKU_HIRITSU =
    'YBMHaifuCBSHandler.rgsJigyoTorokuHiritsu'

  /** コマンド(verb) 事業登録比率CSVダウンロード */
  private static COMMAND_GET_JIGYO_TOROKU_HIRITSU_CSV =
    'YBMHaifuCBSHandler.getJigyoTorokuHiritsuCSV'

  /** フッタボタンラベル */
  protected static FOOTER_LABEL: string[] = [
    'CSV取込(F1)',
    '(F2)',
    '(F3)',
    '(F4)',
    '計算(F5)',
    '(F6)',
    'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)',
    '帳票印刷(F8)',
    '登録(F9)',
  ]

  /** 計算済フラグ 計算済み */
  private static FG_KEISANZUMI_TRUE = 'TRUE'

  /** 計算済フラグ 未計算 */
  private static FG_KEISANZUMI_FALSE = 'FALSE'

  /** 予算編成CBS名 */
  private static VAL_CBS_NAME = 'YBMKKSCBS'

  /** 利用制限判定フラグ 値 */
  static FG_SEIGEN_NASHI = '0'

  /** 利用制限判定フラグ 値 */
  static FG_SEIGEN_ARI = '1'

  /** 帳票セキュリティ区分(管理部) 値 */
  static ST_CYOHYO_KANRI = '01'

  // -----------------------------------------------------------
  // 明細(Spread)部品列インデックス定数
  // -----------------------------------------------------------

  /** スプレッド インデックス 削除 */
  protected static SPREAD_FG_DELETE = 0

  /** スプレッド インデックス 配賦コード */
  protected static SPREAD_CD_HAIFU = 1

  /** スプレッド インデックス 配賦名 */
  protected static SPREAD_NM_HAIFU = 3

  /** スプレッド インデックス 階層 */
  protected static SPREAD_NO_KAISOLEVEL = 4

  /** スプレッド インデックス 予算比率 */
  protected static SPREAD_YOSAN_HIRITSU = 5

  /** スプレッド インデックス 実績比率 */
  protected static SPREAD_JISSEKI_HIRITSU = 6

  /** スプレッド インデックス 前回予算 */
  protected static SPREAD_ZENKAI_YOSAN = 7

  /** スプレッド インデックス 前回実績 */
  protected static SPREAD_ZENKAI_JISSEKI = 8

  /** スプレッド インデックス 更新日時 */
  protected static SPREAD_DT_KOSHIN = 9

  /** スプレッド インデックス 更新者 */
  protected static SPREAD_NM_KOSHIN = 10

  // ---------------------------------------------
  // ユーザ領域キー
  // ---------------------------------------------

  /** ユーザ領域キー 明細MsgList */
  protected static USER_DATA_KEY_DETAIL_MSG_LIST = 'detailMsgList'

  /** ユーザ領域キー 年度 */
  private static USER_DATA_KEY_DT_NENDO = 'dtNendo'

  /** ユーザ領域キー 組織コード */
  private static USER_DATA_KEY_CD_SOSHIKI = 'cdSoshiki'

  /** ユーザ領域キー 科目コード */
  private static USER_DATA_KEY_CD_KAMOKU = 'cdKamoku'

  /** ユーザ領域キー 補助科目コード */
  private static USER_DATA_KEY_CD_HOJOKAMOKU = 'cdHojokamoku'

  /** ユーザ領域キー 計算済フラグ */
  protected static USER_DATA_KEY_FG_KEISANZUMI = 'fgKeisanzumi'

  /** ユーザ領域キー 利用制限フラグ */
  protected static USER_DATA_FG_SEIGEN = 'fgRiyouSeigen'

  /** ユーザ領域キー 帳票セキュリティ区分 */
  protected static USER_DATA_ST_CYOHYO = 'stKeieiCyohyoSecurity'

  protected setUseCaseID() {
    this.useCaseID = YBMKKSF620MLogic.USECASE
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
    SMSCLLog.debug('YBMKKSF620MLogic.beforeDisplay start')
    try {
      super.checkDialogException(context)
      this.beforeDisplay2(
        event,
        context,
        returnInfo,
        YBMKKSF620MLogic.CD_GAMEN_ID,
        YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN,
        YBMKKSF620MLogic.ITEM_JIGYO_TOROKU_HIRITSU,
        YBMKKSF620MLogic.PROPERTIES_KEY_MAX_DISPLAY_CNT,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.beforeDisplay end')
  }

  /**
   * 行追加ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  addRow(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.addRow start')
    try {
      this.addRow2(
        event,
        context,
        returnInfo,
        YBMKKSF620MLogic.PROPERTIES_KEY_MAX_DISPLAY_CNT,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.addRow end')
  }

  /**
   * 表示ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showJigyoTorokuHiritsu(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF620MLogic.showJigyoTorokuHiritsu start')
    try {
      this.show(
        event,
        context,
        returnInfo,
        YBMKKSF620MLogic.COMMAND_GET_JIGYO_TOROKU_HIRITSU,
        YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.showJigyoTorokuHiritsu end')
  }

  /**
   * 組織検索ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.showSoshiki start')
    try {
      // 画面部品取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let dtNendo: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_DT_NENDO,
      ) as JCFComboBoxData

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_SOSHIKI,
      )
      context.putSucceedData(
        YBMKKSCjfConst.DT_TAISHO,
        this.getDtKijun(super.getComboID(dtNendo)),
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.showSoshiki end')
  }

  /**
   * 組織検索後表示前イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  setSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.setSoshiki start')
    try {
      super.checkDialogException(context)
      // 画面部品取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
      ) as JCFFieldStringData
      let nmSoshiki: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_NM_SOSHIKI,
      ) as JCFFieldStringData

      // コンテキストより検索結果情報取得
      if (
        context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI as string) !=
        null
      ) {
        cdSoshiki.setValue(
          context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI) as string,
        )
        nmSoshiki.setValue(
          context.getSucceedData(
            YBMKKSCjfConst.SEARCH_NM_SOSHIKI_RYAKU,
          ) as string,
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
        )
      }
      return
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.setSoshiki end')
  }

  /**
   * 科目検索ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.showKamoku start')
    try {
      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_KAMOKU_HOJOKAMOKU,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.showKamoku end')
  }

  /**
   * 科目検索後表示前イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  setKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.setKamoku start')
    try {
      super.checkDialogException(context)
      // 画面部品取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_KAMOKU,
      ) as JCFFieldStringData
      let cdHojokamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
      ) as JCFFieldStringData
      let nmKamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_NM_KAMOKU,
      ) as JCFFieldStringData
      let nmHojokamoku: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU,
      ) as JCFFieldStringData

      // コンテキストより検索結果情報取得
      if (
        (context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU) as string) !=
        null
      ) {
        cdKamoku.setValue(
          context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU) as string,
        )
        cdHojokamoku.setValue(
          context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_HOJOKAMOKU) as string,
        )
        nmKamoku.setValue(
          context.getSucceedData(
            YBMKKSCjfConst.SEARCH_NM_KAMOKU_RYAKU,
          ) as string,
        )
        nmHojokamoku.setValue(
          context.getSucceedData(
            YBMKKSCjfConst.SEARCH_NM_HOJOKAMOKU_RYAKU,
          ) as string,
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_CD_KAMOKU,
        )
      }
      return
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.setKamoku end')
  }

  /**
   * 事業検索ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  showJigyo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.showJigyo start')
    try {
      let cdKaisha: string = null!
      let dtKijun: string = null!
      let inData: HashMap = new HashMap()

      // 共通情報取得から会社コード取得
      let loginInfo: SMSLoginInfoImpl = super.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl
      cdKaisha = loginInfo.getCdKaisha()

      // 画面情報取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let eventInfo: JCFEventAdditionalInfo = event.getEventAdditionalInfo()
      let spreadAdditionalInfo: JCFSpreadAdditionalInfo =
        eventInfo.getAdditionalInfo() as JCFSpreadAdditionalInfo
      let position: JCFSpreadCellPosition =
        spreadAdditionalInfo.getCellPosition()
      let dtNendo: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_DT_NENDO,
      ) as JCFComboBoxData

      // 事業コード取得
      let cdJigyo: string = spread.getCellValue(
        position.row,
        YBMKKSF620MLogic.SPREAD_CD_HAIFU,
      )
      // スプレッド対象行をユーザ領域に格納
      super.putUserData(
        context,
        SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION,
        spreadAdditionalInfo.getCellPosition(),
      )

      if (
        SMSCheckField.isValidString(cdJigyo) &&
        SMSCheckField.checkLength(cdJigyo, 6)
      ) {
        let literalCondition: List = new ArrayList()
        // リテラル条件にセットするパラメタ
        literalCondition.add(cdKaisha)

        inData.put(YBMKKSCjfConst.HANYO_CONDITION_1, cdJigyo)
        // 年度コンボボックスで選ばれている年度の4月1日を渡す。
        inData.put(
          YBMKKSCjfConst.HANYO_CONDITION_2,
          this.getDtKijun(super.getComboID(dtNendo)),
        )
        let nmSeihingun: string = null!
        let noKaisoLevel: string = null!

        if (SMSCheckField.isValidString(cdJigyo)) {
          nmSeihingun = super.getNameByGeneralSearch(
            context,
            YBMKKSCjfConst.HANYO_SEARCH_SEIHINGUN_2,
            inData,
            literalCondition,
            YBMKKSCjfConst.HANYO_RESULT_3,
          )
          noKaisoLevel = super.getNameByGeneralSearch(
            context,
            YBMKKSCjfConst.HANYO_SEARCH_SEIHINGUN_2,
            inData,
            literalCondition,
            YBMKKSCjfConst.HANYO_RESULT_5,
          )
        }
        if (SMSCheckField.isValidString(nmSeihingun)) {
          spread.setCellValue(
            position.row,
            YBMKKSF620MLogic.SPREAD_NM_HAIFU,
            nmSeihingun,
          )
          spread.setCellValue(
            position.row,
            YBMKKSF620MLogic.SPREAD_NO_KAISOLEVEL,
            noKaisoLevel,
          )
          returnInfo.cancelScreenTransition()
          spread.setPosition(
            position.row,
            spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_CD_HAIFU),
          )
          return
        }
      }

      // 個別検索呼び出し
      context.putSucceedData(
        YBMKKSCjfConst.SEARCH_ST_MODE,
        YBMKKSCjfConst.ST_MODE_SEIHINGUN,
      )
      context.putSucceedData(
        YBMKKSCjfConst.DT_TAISHO,
        this.getDtKijun(super.getComboID(dtNendo)),
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.showJigyo end')
  }

  /**
   * 事業検索後表示前イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  setJigyo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.setJigyo start')
    try {
      super.checkDialogException(context)
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let position: JCFSpreadCellPosition = null!

      position = super.getUserData(
        context,
        SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION,
      ) as JCFSpreadCellPosition

      if (position == null) {
        return
      }

      if (
        (context.getSucceedData(
          YBMKKSCjfConst.SEARCH_CD_SEIHINGUN,
        ) as string) != null
      ) {
        spread.setCellValue(
          position.row,
          YBMKKSF620MLogic.SPREAD_CD_HAIFU,
          context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SEIHINGUN) as string,
        )
        spread.setCellValue(
          position.row,
          YBMKKSF620MLogic.SPREAD_NM_HAIFU,
          context.getSucceedData(
            YBMKKSCjfConst.SEARCH_NM_SEIHINGUN_RYAKU,
          ) as string,
        )
        spread.setCellValue(
          position.row,
          YBMKKSF620MLogic.SPREAD_NO_KAISOLEVEL,
          context.getSucceedData(
            YBMKKSCjfConst.SEARCH_JIGYO_NO_KAISO_LEVEL,
          ) as string,
        )
      }

      super.removeUserDataWithObject(
        context,
        SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION as any,
      )

      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      )
      spread.setPosition(
        position.row,
        spread.getColumnInformationName(position.column),
      )
      return
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.setJigyo end')
  }

  /**
   * 計算ボタン押下イベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  calcGokei(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.calcGokei start')
    try {
      this.calcGokei2(
        event,
        context,
        returnInfo,
        YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.calcGokei end')
  }

  /**
	/* CSVﾀﾞｳﾝﾛｰﾄﾞボタン押下イベントハンドラです。 
	 * @param event イベントクラス
	 * @param context コンテキスト
	 * @param returnInfo 業務ロジック復帰情報クラス
	 */
  csvDownload(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.csvDownload start-----')
    try {
      this.csvDownload2(
        event,
        context,
        returnInfo,
        YBMKKSF620MLogic.COMMAND_GET_JIGYO_TOROKU_HIRITSU_CSV,
        YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN,
        YBMKKSF620MLogic.CD_GAMEN_ID,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.csvDownload end--------')
  }

  /**
	/* 登録ボタン押下イベントハンドラです。 
	 * @param event イベントクラス
	 * @param context コンテキスト
	 * @param returnInfo 業務ロジック復帰情報クラス
	 */
  register(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.register start')
    try {
      this.register2(
        event,
        context,
        returnInfo,
        YBMKKSF620MLogic.COMMAND_RGS_JIGYO_TOROKU_HIRITSU,
        YBMKKSF620MLogic.ITEM_JIGYO_TOROKU_HIRITSU,
        YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN,
      )
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.register end')
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
    SMSCLLog.debug('YBMKKSF620MLogic.removeInitFlag start')
    try {
      let fgInit: any = null
      let fgKeisanzumi: any = null

      // 共有領域から初期化実行判定フラグを取得
      fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT)

      // Initフラグがnullでなければキー削除
      if (fgInit != null) {
        super.removeUserDataWithObject(context, YBMKKSCjfConst.FG_INIT as any)
      }
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.removeInitFlag end')
  }

  /**
   * 初期表示実行済フラグクリアイベントハンドラです。
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   */
  removeInitFlag1(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF620MLogic.removeInitFlag start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()

      let fgInit: any = null
      let fgKeisanzumi: any = null

      // ヘッダ情報の変更チェック
      if (
        this.isHeaderConditionChanged(context, current, returnInfo, [
          '複写',
          '複写',
        ])
      ) {
        returnInfo.cancelScreenTransition()
        return
      }

      // 共有領域から初期化実行判定フラグを取得
      fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT)

      // Initフラグがnullでなければキー削除
      if (fgInit != null) {
        super.removeUserDataWithObject(context, YBMKKSCjfConst.FG_INIT as any)
      }
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.removeInitFlag end')
  }

  /**
	/* 初期表示の実際の処理を行います。(YBMKKSF620MとYBMKKSF624Sの共通化のため) 
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
    maxDispCount: string,
  ) {
    // 変数宣言
    let loginInfo: SMSLoginInfoImpl = super.getLoginInfo(
      context,
    ) as SMSLoginInfoImpl
    let sysData: HashMap = null!
    let kankyoSetteiJoho: HashMap = null!

    // 部品取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let toggle: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      cursorItem,
    ) as JCFToggleButtonData
    let dtNendo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_DT_NENDO,
    ) as JCFComboBoxData
    let btnLineAdd: JCFPushButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_BTN_LINE_ADD,
    ) as JCFPushButtonData
    let spread: SMSJCFSpreadData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SPREAD,
    ) as SMSJCFSpreadData
    let btnFukusha: JCFPushButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_BTN_COPY,
    ) as JCFPushButtonData
    let fgInit: any = null

    // ----------- 2007/11/29 BSC)鮫島 ME-00422-000対応 --------
    // 検索画面からの戻り遷移時も最大件数制限の情報を設定する為、
    // 初期化実行判定より前に処理を行う。
    // 最大表示件数をYBMYHS.propertiesから取得
    let maxDisplayCnt: string = SMSPropsInfos.getProperty(
      YBMKKSCjfConst.SUB_SYSTEM_ID,
      maxDispCount,
    )
    loginInfo.setQtSaidaiHyouji(maxDisplayCnt)

    // 最大検索件数をYBMYHS.propertiesから取得
    let maxSelectCnt: string = SMSPropsInfos.getProperty(
      YBMKKSCjfConst.SUB_SYSTEM_ID,
      YBMKKSF620MLogic.PROPERTIES_KEY_MAX_SELECT_CNT,
    )
    loginInfo.setQtSaidaiKensaku(maxSelectCnt)
    // ---------------------------------------------------------

    // 画面IDを取得
    super.setCdGamen(context, cdGamenId)

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
    SMSHeaderFooterManager.initFooter(context, YBMKKSF620MLogic.FOOTER_LABEL)
    SMSHeaderFooterManager.setAllFooterButtonEnabled(context, false)

    // メッセージ消去
    SMSHeaderFooterManager.initInformation(context)

    // 行追加ボタンの設定
    btnLineAdd.setEnabled(false)

    // 複写ボタンを非活性にする
    btnFukusha.setEnabled(false)

    // スプレッドクリア
    spread.removeAllRow()

    // 年度コンボボックスの設定
    let dtUnyo: string = loginInfo.getDtUnyo()

    let nendo: number = Integer.parseInt(dtUnyo.substring(0, 4))
    let tsuki: string = dtUnyo.substring(4, 6)

    // 1月〜3月なら年度は-1
    if (tsuki.equals('01') || tsuki.equals('02') || tsuki.equals('03')) {
      nendo -= 1
    }

    // 年度コンボボックスに当年度、次年度を設定
    // 2011/08/07 ME2-01017-000 修正 Start
    //JCFSelectableElement[] dtNendoElement = new JCFSelectableElement[2];
    //String tonendo = Integer.toString(nendo);
    //String jinendo = Integer.toString(nendo + 1);
    //dtNendoElement[0] = new JCFSelectableElement(tonendo, tonendo, true);
    //dtNendoElement[1] = new JCFSelectableElement(jinendo, jinendo, false);
    let dtNendoElement: JCFSelectableElement[] = createArrayByInstance(
      JCFSelectableElement,
      3,
    )
    let tonendo: string = Integer.toString(nendo)
    let jinendo: string = Integer.toString(nendo + 1)
    let zennendo: string = Integer.toString(nendo - 1)
    dtNendoElement[0] = new JCFSelectableElement(zennendo, zennendo, false)
    dtNendoElement[1] = new JCFSelectableElement(tonendo, tonendo, true)
    dtNendoElement[2] = new JCFSelectableElement(jinendo, jinendo, false)
    // 2011/08/07 ME2-01017-000 修正 End
    dtNendo.setValue(dtNendoElement)

    // スプレッドの書式設定
    spread.setZeroPaddingDecimal(
      spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
      2,
    )
    spread.setZeroPaddingDecimal(
      spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU),
      2,
    )
    spread.setZeroPaddingDecimal(
      spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_ZENKAI_YOSAN),
      2,
    )
    spread.setZeroPaddingDecimal(
      spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_ZENKAI_JISSEKI),
      2,
    )

    // ラジオボタンの選択を設定
    toggle.setValue(true)
    returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, cursorItem)

    // CSV取込ボタンを活性化する
    SMSHeaderFooterManager.setEnabledFooterButton(
      context,
      SMSHeaderFooterManager.ITEM_FUNCBTN1,
      true,
    )

    // EJB呼び出し
    let inData: HashMap = new HashMap()
    let headerMap: HashMap = new HashMap()

    let outData: HashMap = this.callEJB(
      context,
      event,
      YBMKKSF620MLogic.VAL_CBS_NAME,
      YBMKKSF620MLogic.COMMAND_INIT,
      inData,
    )

    // ユーザデータ取り出し
    if (outData.containsKey(SMSHashKeyConst.PARAM_KEY_DATA)) {
      sysData = outData.get(SMSHashKeyConst.PARAM_KEY_DATA) as HashMap
    } else {
      SMSCLLog.error('環境設定情報の取得に失敗しました。')
      throw new SMSRuntimeException(
        context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
      )
    }

    // 利用制限チェック
    if (sysData.containsKey(YBMKKSF620MLogic.RIYO_SEIGEN_MSG)) {
      let riyoSeigenMsg: HashMap = sysData.get(
        YBMKKSF620MLogic.RIYO_SEIGEN_MSG,
      ) as HashMap
      let riyoFlg: boolean = !(
        riyoSeigenMsg.get(YBMKKSF620MLogic.RIYO_SEIGEN_FG_RESULT) as boolean
      ).booleanValue()
      let errorMessage: string = riyoSeigenMsg.get(
        YBMKKSF620MLogic.RIYO_SEIGEN_IF_MSG,
      ) as string

      if (riyoFlg) {
        SMSHeaderFooterManager.showInformation(context, errorMessage)
        super.putUserData(
          context,
          YBMKKSF620MLogic.USER_DATA_FG_SEIGEN,
          YBMKKSF620MLogic.FG_SEIGEN_ARI,
        )
      } else {
        super.putUserData(
          context,
          YBMKKSF620MLogic.USER_DATA_FG_SEIGEN,
          YBMKKSF620MLogic.FG_SEIGEN_NASHI,
        )
      }
    } else {
      SMSCLLog.error('利用制限情報の取得に失敗しました。')
      throw new SMSRuntimeException(
        context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
      )
    }

    // ユーザ所属権限チェック
    if (sysData.containsKey(YBMKKSF620MLogic.SONEKI_SOSHIKI_MSG)) {
      let SoshikiMsg: HashMap = sysData.get(
        YBMKKSF620MLogic.SONEKI_SOSHIKI_MSG,
      ) as HashMap
      let stChohyo: string = SoshikiMsg.get(
        YBMKKSF620MLogic.ST_KEIHI_CYOHYO,
      ) as string

      // 管理部以外の場合
      if (!stChohyo.equals(YBMKKSF620MLogic.ST_CYOHYO_KANRI)) {
        // 実績比率を非活性化
        spread.setColumnInformationEditable('__COL_6', false)
        super.putUserData(
          context,
          YBMKKSF620MLogic.USER_DATA_ST_CYOHYO,
          stChohyo,
        )
      } else {
        super.putUserData(
          context,
          YBMKKSF620MLogic.USER_DATA_ST_CYOHYO,
          stChohyo,
        )
      }
    } else {
      SMSCLLog.error('利用制限情報の取得に失敗しました。')
      throw new SMSRuntimeException(
        context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
      )
    }
  }

  /**
	/* 表示ボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため) 
	 * @param event イベントクラス
	 * @param context コンテキスト
	 * @param returnInfo 業務ロジック復帰情報クラス
	 * @param command コマンド
	 */
  protected show(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    command: string,
    gamenID: string,
  ) {
    // 部品取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let dtNendo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_DT_NENDO,
    ) as JCFComboBoxData
    let cdSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
    )
    let nmSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_SOSHIKI,
    )
    let cdKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_KAMOKU,
    )
    let nmKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_KAMOKU,
    )
    let cdHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
    )
    let nmHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU,
    )
    let count: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NO_COUNT,
    )
    let btnLineAdd: JCFPushButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_BTN_LINE_ADD,
    ) as JCFPushButtonData
    let spread: SMSJCFSpreadData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SPREAD,
    ) as SMSJCFSpreadData
    let btnFukusha: JCFPushButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_BTN_COPY,
    ) as JCFPushButtonData

    // エラー表示クリア
    this.clearError(context, false)

    // 入力チェック
    if (!this.checkHeaderCondition(context, current, returnInfo, gamenID)) {
      return
    }

    // 検索条件を共有データ領域に保持する
    super.putUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_DT_NENDO,
      super.getComboID(dtNendo),
    ) // 年度
    super.putUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_CD_SOSHIKI,
      cdSoshiki.getValue(),
    ) // 組織コード
    super.putUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_CD_KAMOKU,
      cdKamoku.getValue(),
    ) // 勘定科目コード
    super.putUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_CD_HOJOKAMOKU,
      cdHojokamoku.getValue(),
    ) // 補助科目コード

    // ヘッダMsg生成
    let headerMsg: HashMap = new HashMap()
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_ST_HAIFU,
      this.getStHaifu(context),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_DT_NENDO,
      super.getComboID(dtNendo),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI,
      cdSoshiki.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU,
      cdKamoku.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU,
      cdHojokamoku.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_DT_KIJUN,
      this.getDtKijun(super.getComboID(dtNendo)),
    )

    let inData: HashMap = new HashMap()
    inData.put(YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG, headerMsg)

    let outData: HashMap = null!
    let detailMsgList: HashMap[] = null!

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
    let loginInfo: SMSLoginInfoImpl = super.getLoginInfo(
      context,
    ) as SMSLoginInfoImpl

    // 戻りヘッダ情報の取得
    headerMsg = rtnData.get(
      YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG,
    ) as HashMap
    // エラーが無かった場合
    if (
      (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
        SMSHashKeyConst.IS_SUCCESS,
      )
    ) {
      detailMsgList = rtnData.get(
        YBMKKSF620MLogic.HAIFU_MSG_KEY_DETAIL_MSG_LIST,
      ) as HashMap[]
      // 件数表示
      count.setValue(Integer.toString(detailMsgList.length))

      nmSoshiki.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_SOSHIKI) as string,
      ) // ヘッダ情報の組織名を表示
      nmKamoku.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_KAMOKU) as string,
      ) // ヘッダ情報の勘定科目名を表示
      nmHojokamoku.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_HOJOKAMOKU) as string,
      ) // ヘッダ情報の補助科目名を表示
      // 行追加ボタンの設定
      btnLineAdd.setEnabled(true)
      // CSVダウンロードボタンを活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN7,
        true,
      )
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )

      // 検索結果が0件の場合
      if (detailMsgList.length == 0) {
        spread.removeAllRow()
        // ClassCastException対策
        super.putUserData(
          context,
          YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST,
          createArrayByInstance(HashMap, 0),
        )
        // 計算ボタンを非活性化する
        SMSHeaderFooterManager.setEnabledFooterButton(
          context,
          SMSHeaderFooterManager.ITEM_FUNCBTN5,
          false,
        )
        // 複写ボタンを非活性にする
        btnFukusha.setEnabled(false)
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_JIGYO_TOROKU_HIRITSU,
        )
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSW056,
        )

        // 合計欄クリア
        let sumYosanHiritsu: JCFItemData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU,
        )
        let sumJissekiHiritsu: JCFItemData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU,
        )
        let sumZenkaiYosanHiritsu: JCFItemData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_SUM_ZENKAI_YOSAN,
        )
        let sumZenkaiJissekiHiritsu: JCFItemData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_SUM_ZENKAI_JISSEKI,
        )
        sumYosanHiritsu.setValue('0.00')
        sumJissekiHiritsu.setValue('0.00')
        sumZenkaiYosanHiritsu.setValue('0.00')
        sumZenkaiJissekiHiritsu.setValue('0.00')
      } else {
        // 取得データをスプレッドに表示
        this.setDataToSpread(context, detailMsgList)
        // 複写ボタンを活性にする
        btnFukusha.setEnabled(true)
        // 計算ボタンを活性化する
        SMSHeaderFooterManager.setEnabledFooterButton(
          context,
          SMSHeaderFooterManager.ITEM_FUNCBTN5,
          true,
        )
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSI020,
          [Integer.toString(detailMsgList.length)],
        )
        //returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, ITEM_SPREAD);
      }
    } else if (
      (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
        SMSHashKeyConst.IS_WARNING,
      )
    ) {
      // エラーの場合
      // 明細部クリア
      spread.removeAllRow()
      // 合計欄クリア
      let sumYosanHiritsu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU,
      )
      let sumJissekiHiritsu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU,
      )
      let sumZenkaiYosanHiritsu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_ZENKAI_YOSAN,
      )
      let sumZenkaiJissekiHiritsu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_ZENKAI_JISSEKI,
      )
      sumYosanHiritsu.setValue('0.00')
      sumJissekiHiritsu.setValue('0.00')
      sumZenkaiYosanHiritsu.setValue('0.00')
      sumZenkaiJissekiHiritsu.setValue('0.00')
      let kensu: JCFFieldLongData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_NO_COUNT,
      ) as JCFFieldLongData
      kensu.setValue(Long.parseLong('0'))
      // 複写ボタン無効化
      btnFukusha.setEnabled(false)

      // ログイン情報取得
      loginInfo = rtnData.get(
        SMSHashKeyConst.PARAM_KEY_COMMON,
      ) as SMSLoginInfoImpl
      // エラー項目ID取得
      let errorItem: string = loginInfo.getCdErrorKoumoku()

      let cdErrorKomokuItem: string = null!
      if (errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU)) {
        cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_KAMOKU
        nmKamoku.setValue('')
      } else if (errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI)) {
        cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_SOSHIKI
        nmSoshiki.setValue('')
      } else if (
        errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU)
      ) {
        cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU
        nmHojokamoku.setValue('')
      }

      // 画面項目部品取得
      if (SMSCheckField.isValidString(cdErrorKomokuItem)) {
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
    }

    let kengen: string = super
      .getUserData(context, YBMKKSF620MLogic.USER_DATA_FG_SEIGEN)
      .toString()

    // 利用制限による登録機能の無効化
    if (kengen.equals(YBMKKSF620MLogic.FG_SEIGEN_ARI)) {
      // 登録無効
      // 計算ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN5,
        false,
      )
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN5,
        false,
      )
      // 行追加ボタンを非活性化する
      btnLineAdd.setEnabled(false)
      // 複写ボタンを非活性化する
      btnFukusha.setEnabled(false)
      // スプレッドを非活性化する
      spread.setEnabled(false)
    }
  }

  /**
   * 行追加ボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @param subSystemId サブシステムID
   * @param maxDisplayCnt 最大表示件数
   */
  protected addRow2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    maxDisplayCnt: string,
  ) {
    let current: JCFScreenData = context.getCurrentScreenData()
    let spread: SMSJCFSpreadData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SPREAD,
    ) as SMSJCFSpreadData
    let positions: JCFSpreadCellPosition[] = null!
    let rowCnt: number = spread.getRowCount() - 1 // 追加行の行数

    if (
      spread.getRowCount() >=
      Integer.parseInt(
        SMSPropsInfos.getProperty(YBMKKSCjfConst.SUB_SYSTEM_ID, maxDisplayCnt),
      )
    ) {
      // 最大表示件数超えました、追加できません。
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YBMYHSMCW009,
      )
      return
    } else {
      spread.addRow()
      positions = spread.getSelectedCellsPosition()
      if (positions != null) {
        for (let i = 0; i < positions.length; i++) {
          spread.setCellSelected(positions[i].row, positions[i].column, false)
        }
      }
      rowCnt = spread.getRowCount() - 1
      spread.setViewport(new JCFSpreadCellPosition(rowCnt, 0))
      spread.setCellSelected(rowCnt, 0, true)

      // 計算ボタンを活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN5,
        true,
      )
      // CSVダウンロードボタンを活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN7,
        true,
      )
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )
    }
  }

  /**
   * 計算ボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @param cursorItem フォーカス設定項目
   */
  protected calcGokei2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    gamenID: string,
  ) {
    let current: JCFScreenData = context.getCurrentScreenData()
    let spread: JCFSpreadData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SPREAD,
    ) as JCFSpreadData
    let sumYosanHiritsuFdb: JCFFieldDoubleData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU,
    ) as JCFFieldDoubleData
    let sumJissekiHiritsuFdb: JCFFieldDoubleData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU,
    ) as JCFFieldDoubleData

    // ファンクションキーが非活性の場合、処理中止
    let f5Button: JCFPushButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_FOOTER,
      SMSHeaderFooterManager.ITEM_FUNCBTN5,
    ) as JCFPushButtonData
    if (!f5Button.isEnabled()) {
      return
    }

    // メッセージ消去
    this.clearError(context, false)

    // 0件の場合、処理中止
    if (spread.getRowCount() == 0) {
      return
    }

    // 配賦コードが未入力の場合のメッセージ文言を画面名で判断し設定する。
    let messageString: string[] = createStringArray(1)
    let nmHaifu: string = null!
    if (gamenID.equals(YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN)) {
      messageString[0] = '事業コード'
      nmHaifu = '事業コード'
    } else {
      messageString[0] = '職場コード'
      nmHaifu = '職場コード'
    }

    // ヘッダ情報の変更チェック
    if (
      this.isHeaderConditionChanged(context, current, returnInfo, [
        '計算',
        '計算',
      ])
    ) {
      return
    }

    // 明細部の配賦コードの変更チェック用に表示アクション終了後の明細Msgを取り出す。
    let detailMsgListOld: HashMap[] = super.getUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST,
    ) as HashMap[]
    let cdHaifuOld: string = null!

    // 明細部のセル選択をクリア
    for (let i = 0; i < spread.getRowCount(); i++) {
      for (
        let k = YBMKKSF620MLogic.SPREAD_CD_HAIFU;
        k < YBMKKSF620MLogic.SPREAD_ZENKAI_YOSAN;
        k++
      ) {
        // 各セルの警告色をクリアする。
        spread.setCellSelected(i, k, false)
        spread.setCellBackground(i, k, SMSColor.DEFAULT)
      }
    }

    let sumYosanHiritsu: BigDecimal = null!
    let sumJissekiHiritsu: BigDecimal = null!

    sumYosanHiritsu = new BigDecimal(0.0).setScale(2)
    sumJissekiHiritsu = new BigDecimal(0.0).setScale(2)

    // 帳票セキュリティ区分の取得
    let stCyohyo: string = super.getUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_ST_CYOHYO,
    ) as string

    // 重複チェック用HashMap
    let cdHaifuMap: HashMap = new HashMap()

    for (let i = 0; i < spread.getRowCount(); i++) {
      // 配賦コードを取得
      if (i < detailMsgListOld.length) {
        // 既存行
        cdHaifuOld = detailMsgListOld[i].get(
          YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU,
        ) as string
        if (
          !cdHaifuOld.equals(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
          )
        ) {
          // キー変更チェック
          spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true)
          spread.setViewport(
            new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
          )
          spread.setCellBackground(
            i,
            YBMKKSF620MLogic.SPREAD_CD_HAIFU,
            SMSColor.WARNING,
          )
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YBMKKSMCW014,
            messageString,
          )
          SMSHeaderFooterManager.setEnabledFooterButton(
            context,
            SMSHeaderFooterManager.ITEM_FUNCBTN9,
            false,
          )
          returnInfo.setFocus(
            SMSHeaderFooterManager.FRAME_MAIN,
            YBMKKSF620MLogic.ITEM_SPREAD,
          )
          return
        } else {
          // 重複チェック用に配賦コードを保存
          cdHaifuMap.put(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            new Integer(i),
          )
          if (
            spread.getCellBooleanValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE)
          ) {
            // 削除データあり
          } else if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
            )
          ) {
            // 予算比率必須入力チェック
            let params: string[] = ['予算比率']
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              params,
            )
            spread.setCellSelected(
              i,
              YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              true,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                i,
                YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              ),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU),
            ) &&
            stCyohyo.equals(YBMKKSF620MLogic.ST_CYOHYO_KANRI)
          ) {
            // 実績比率必須入力チェック(管理部のみ)
            let params: string[] = ['実績比率']
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              params,
            )
            spread.setCellSelected(
              i,
              YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              true,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                i,
                YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              ),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else {
            // 合計値加算
            sumYosanHiritsu = sumYosanHiritsu.add(
              new BigDecimal(
                spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
              ).setScale(2, BigDecimal.ROUND_HALF_UP),
            )
            sumJissekiHiritsu = sumJissekiHiritsu.add(
              new BigDecimal(
                this.Zeros(
                  spread.getCellValue(
                    i,
                    YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
                  ),
                ),
              ).setScale(2, BigDecimal.ROUND_HALF_UP),
            )
          }
        }
      } else {
        // 新規追加行
        if (spread.getCellBooleanValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE)) {
          // 新規かつ削除行ならスキップ
          continue
        } else if (
          !SMSCheckField.isValidString(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
          ) &&
          !SMSCheckField.isValidString(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
          ) &&
          !SMSCheckField.isValidString(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU),
          )
        ) {
          // 新規かつ空行ならスキップ
          continue
        } else {
          if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
          ) {
            // 必須入力チェック
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              messageString,
            )
            spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true)
            spread.setViewport(
              new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              SMSColor.WARNING,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            return
          } else if (
            !SMSCheckField.checkLength(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
              6,
            )
          ) {
            // フル桁入力チェック
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW028,
              [nmHaifu, '6'],
            )
            spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true)
            spread.setViewport(
              new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else if (
            cdHaifuMap.containsKey(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
          ) {
            let rowNumber: Integer = cdHaifuMap.get(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            ) as Integer
            // 重複チェック
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW043,
              messageString,
            )
            spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true)
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              SMSColor.WARNING,
            )
            spread.setCellSelected(
              rowNumber.intValue(),
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              true,
            )
            spread.setCellBackground(
              rowNumber.intValue(),
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              SMSColor.WARNING,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                rowNumber.intValue(),
                YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              ),
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
            )
          ) {
            // 予算比率必須入力チェック
            let params: string[] = ['予算比率']
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              params,
            )
            spread.setCellSelected(
              i,
              YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              true,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                i,
                YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              ),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU),
            ) &&
            stCyohyo.equals(YBMKKSF620MLogic.ST_CYOHYO_KANRI)
          ) {
            // 実績比率必須入力チェック
            let params: string[] = ['実績比率']
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              params,
            )
            spread.setCellSelected(
              i,
              YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              true,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                i,
                YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              ),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else {
            // 合計値加算
            sumYosanHiritsu = sumYosanHiritsu.add(
              new BigDecimal(
                spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
              ).setScale(2, BigDecimal.ROUND_HALF_UP),
            )
            sumJissekiHiritsu = sumJissekiHiritsu.add(
              new BigDecimal(
                this.Zeros(
                  spread.getCellValue(
                    i,
                    YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
                  ),
                ),
              ).setScale(2, BigDecimal.ROUND_HALF_UP),
            )
          }
        }
      }
    }

    // 合計表示を更新
    sumYosanHiritsuFdb.setValue(sumYosanHiritsu.doubleValue())
    sumJissekiHiritsuFdb.setValue(sumJissekiHiritsu.doubleValue())

    if (
      sumYosanHiritsu.doubleValue() != 100.0 &&
      sumYosanHiritsu.doubleValue() != 0.0
    ) {
      // 予算比率合計が100%または0%以外の場合はエラー処理。
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YBMKKSMCW018,
      )
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      )
      return
    } else if (
      sumJissekiHiritsu.doubleValue() != 100.0 &&
      sumJissekiHiritsu.doubleValue() != 0.0 &&
      stCyohyo.equals(YBMKKSF620MLogic.ST_CYOHYO_KANRI)
    ) {
      // 実績比率合計が100%または0%以外の場合はエラー処理。(管理部のみ)
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YBMKKSMCW018,
      )
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      )
      return
    } else {
      // 登録ボタンを活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        true,
      )
    }
  }

  /**
   * CSVﾀﾞｳﾝﾛｰﾄﾞボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @param command コマンド
   * @param cursorItem フォーカス設定項目
   */
  protected csvDownload2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    command: string,
    gamenID: string,
    cdGamenId: string,
  ) {
    // 部品取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let dtNendo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_DT_NENDO,
    ) as JCFComboBoxData
    let cdSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
    )
    let nmSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_SOSHIKI,
    )
    let cdKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_KAMOKU,
    )
    let nmKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_KAMOKU,
    )
    let cdHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
    )
    let nmHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU,
    )

    // ファンクションキーが非活性の場合、処理中止
    let f7Button: JCFPushButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_FOOTER,
      SMSHeaderFooterManager.ITEM_FUNCBTN7,
    ) as JCFPushButtonData
    if (!f7Button.isEnabled()) {
      return
    }

    // エラー表示クリア
    this.clearError(context, false)

    // 入力チェック
    if (!this.checkHeaderCondition(context, current, returnInfo, gamenID)) {
      return
    }

    // 画面IDを取得
    super.setCdGamen(context, cdGamenId)

    // 確認メッセージをポップアップ表示
    let msgUtil: JCFMessageOnWindow = context.getMessageUtil()
    let ret: string = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC008)
    if (JCFMessageOnWindow.BTN_NO.equals(ret)) {
      // いいえ(NO)を選択した場合
      return
    }

    // ヘッダMsg生成
    let headerMsg: HashMap = new HashMap()
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_ST_HAIFU,
      this.getStHaifu(context),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_DT_NENDO,
      super.getComboID(dtNendo),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI,
      cdSoshiki.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU,
      cdKamoku.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU,
      cdHojokamoku.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_DT_KIJUN,
      this.getDtKijun(super.getComboID(dtNendo)),
    )

    let inData: HashMap = new HashMap()
    inData.put(YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG, headerMsg)

    let outData: HashMap = null!
    let detail: HashMap[] = null!

    // EJB呼び出し
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

    // 共通情報を取得
    let loginInfo: SMSLoginInfoImpl = super.getLoginInfo(
      context,
    ) as SMSLoginInfoImpl

    // 件数取得
    let cntKensu: string = loginInfo.getQtKensaku() as string
    if (
      (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
        SMSHashKeyConst.IS_SUCCESS,
      )
    ) {
      // callEJBが成功した場合の処理
      headerMsg = rtnData.get(
        YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG,
      ) as HashMap
      nmSoshiki.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_SOSHIKI) as string,
      )
      nmKamoku.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_KAMOKU) as string,
      )
      nmHojokamoku.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_HOJOKAMOKU) as string,
      )

      if (!'0'.equals(cntKensu)) {
        // CSVダウンロード実行
        super.downloadFile(context, SMSCjfLogicBase.DW_LOCAL)
        // 件数表示
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSI020,
          [cntKensu],
        )
      } else {
        // 件数が0件の場合はエラーメッセージ表示
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSW056,
        )
      }
    } else if (
      (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
        SMSHashKeyConst.IS_WARNING,
      )
    ) {
      // ログイン情報取得
      loginInfo = rtnData.get(
        SMSHashKeyConst.PARAM_KEY_COMMON,
      ) as SMSLoginInfoImpl
      // エラー項目ID取得
      let errorItem: string = loginInfo.getCdErrorKoumoku()

      let cdErrorKomokuItem: string = null!
      if (errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU)) {
        cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_KAMOKU
        nmKamoku.setValue('')
      } else if (errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI)) {
        cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_SOSHIKI
        nmSoshiki.setValue('')
      } else if (
        errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU)
      ) {
        cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU
        nmHojokamoku.setValue('')
      }

      // 画面項目部品取得
      if (SMSCheckField.isValidString(cdErrorKomokuItem)) {
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
    }
  }

  /**
   * 登録ボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
   * @param event イベントクラス
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @param command コマンド
   * @param cursorItem フォーカス設定項目
   */
  protected register2(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    command: string,
    cursorItem: string,
    gamenID: string,
  ) {
    // 部品取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let dtNendo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_DT_NENDO,
    ) as JCFComboBoxData
    let cdSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
    )
    let nmSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_SOSHIKI,
    )
    let cdKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_KAMOKU,
    )
    let nmKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_KAMOKU,
    )
    let cdHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
    )
    let nmHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU,
    )
    let btnFukusha: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_BTN_COPY,
    )
    let count: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NO_COUNT,
    )
    let f9Button: JCFPushButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_FOOTER,
      SMSHeaderFooterManager.ITEM_FUNCBTN9,
    ) as JCFPushButtonData
    let spread: SMSJCFSpreadData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SPREAD,
    ) as SMSJCFSpreadData
    let sumYosanHiritsuFdb: JCFFieldDoubleData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU,
    ) as JCFFieldDoubleData
    let sumJissekiHiritsuFdb: JCFFieldDoubleData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU,
    ) as JCFFieldDoubleData

    // F9ファンクションキーが非活性の場合、処理中止
    if (!f9Button.isEnabled()) {
      return
    }

    let sumYosanHiritsu: BigDecimal = null!
    let sumJissekiHiritsu: BigDecimal = null!

    // 変数宣言
    let loginInfo: SMSLoginInfoImpl = super.getLoginInfo(
      context,
    ) as SMSLoginInfoImpl

    // メッセージ消去
    this.clearError(context, false)

    // ヘッダ情報の変更チェック
    if (
      this.isHeaderConditionChanged(context, current, returnInfo, [
        '登録',
        '登録',
      ])
    ) {
      return
    }

    // エラーメッセージに埋める文言を設定
    let nmHaifu: string = ''
    let messageString: string[] = createStringArray(1)
    if (gamenID.equals(YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN)) {
      nmHaifu = '事業コード'
      messageString[0] = '事業コード'
    } else {
      nmHaifu = '職場コード'
      messageString[0] = '職場コード'
    }

    sumYosanHiritsu = new BigDecimal(0.0)
    sumYosanHiritsu.setScale(2)
    sumJissekiHiritsu = new BigDecimal(0.0)
    sumJissekiHiritsu.setScale(2)

    // 帳票セキュリティ区分の取得
    let stCyohyo: string = super.getUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_ST_CYOHYO,
    ) as string

    // 明細部に変更があればtrueを設定する。
    let fgChange: boolean = false
    // 削除データがあればtrueを設定する。
    let fgDelete: boolean = false

    // 新規追加・更新データ作成用ArrayList
    let detailMsgArrayList: ArrayList = new ArrayList()
    // 1行分のデータを保持するHashMap
    let detailMsg: HashMap = null!
    // 重複チェック用HashMap
    let cdHaifuMap: HashMap = new HashMap()

    // 明細部の配賦コードの変更チェック用に表示アクション終了後の明細Msgを取り出す。
    let detailMsgListOld: HashMap[] = super.getUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST,
    ) as HashMap[]
    let cdHaifuOld: string = null!

    // 明細部のセル選択をクリア
    for (let i = 0; i < spread.getRowCount(); i++) {
      for (
        let k = YBMKKSF620MLogic.SPREAD_CD_HAIFU;
        k < YBMKKSF620MLogic.SPREAD_ZENKAI_YOSAN;
        k++
      ) {
        // 各セルの警告色をクリアする。
        spread.setCellSelected(i, k, false)
        spread.setCellBackground(i, k, SMSColor.DEFAULT)
      }
    }

    // ----------------------------------
    // 入力値チェック
    // ----------------------------------
    for (let i = 0; i < spread.getRowCount(); i++) {
      // 配賦コードを取得
      if (i < detailMsgListOld.length) {
        // 既存行
        cdHaifuOld = detailMsgListOld[i].get(
          YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU,
        ) as string
        if (
          !cdHaifuOld.equals(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
          )
        ) {
          // キー変更チェック
          spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true)
          spread.setViewport(
            new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
          )
          spread.setCellBackground(
            i,
            YBMKKSF620MLogic.SPREAD_CD_HAIFU,
            SMSColor.WARNING,
          )
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YBMKKSMCW014,
            messageString,
          )
          SMSHeaderFooterManager.setEnabledFooterButton(
            context,
            SMSHeaderFooterManager.ITEM_FUNCBTN9,
            false,
          )
          returnInfo.setFocus(
            SMSHeaderFooterManager.FRAME_MAIN,
            YBMKKSF620MLogic.ITEM_SPREAD,
          )
          return
        } else {
          // 重複チェック用に配賦コードを保存
          cdHaifuMap.put(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            new Integer(i),
          )

          // 送信データ編集
          detailMsg = new HashMap()
          detailMsg.put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU,
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
          )
          detailMsg.put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_GYO,
            Integer.toString(i),
          )
          detailMsg.put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU,
            detailMsgListOld[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
            ) as string,
          )
          detailMsg.put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU,
            detailMsgListOld[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
            ) as string,
          )
          detailMsg.put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN,
            detailMsgListOld[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN),
          )

          if (
            spread.getCellBooleanValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE)
          ) {
            // 削除データ
            fgChange = true
            fgDelete = true
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
              '0.00',
            )
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
              '0.00',
            )
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU,
              detailMsgListOld[i].get(
                YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
              ) as string,
            )
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU,
              detailMsgListOld[i].get(
                YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
              ) as string,
            )
            detailMsg.put(YBMKKSF620MLogic.DETAIL_MSG_KEY_FG_RONRISAKUJO, '1')
            detailMsgArrayList.add(detailMsg)
          } else if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
            )
          ) {
            // 予算比率必須入力チェック
            let params: string[] = ['予算比率']
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              params,
            )
            spread.setCellSelected(
              i,
              YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              true,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                i,
                YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              ),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU),
            ) &&
            stCyohyo.equals(YBMKKSF620MLogic.ST_CYOHYO_KANRI)
          ) {
            // 実績比率必須入力チェック(管理部のみ)
            let params = ['実績比率']
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              params,
            )
            spread.setCellSelected(
              i,
              YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              true,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                i,
                YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              ),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else {
            // 更新データ
            // 表示直後の予算比率、実績比率を取得
            let nuYosanHiritsu: string = detailMsgListOld[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
            ) as string
            let nuJissekiHiritsu: string = detailMsgListOld[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
            ) as string

            // 合計値加算
            sumYosanHiritsu = sumYosanHiritsu.add(
              new BigDecimal(
                spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
              ).setScale(2, BigDecimal.ROUND_HALF_UP),
            )
            sumJissekiHiritsu = sumJissekiHiritsu.add(
              new BigDecimal(
                this.Zeros(
                  spread.getCellValue(
                    i,
                    YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
                  ),
                ),
              ).setScale(2, BigDecimal.ROUND_HALF_UP),
            )
            if (
              !spread
                .getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU)
                .equals(nuYosanHiritsu) ||
              !spread
                .getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU)
                .equals(nuJissekiHiritsu)
            ) {
              // 予算比率または実績比率が変更されていた場合はtrueを設定。
              detailMsg.put(
                YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
                spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
              )
              detailMsg.put(
                YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
                this.Zeros(
                  spread.getCellValue(
                    i,
                    YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
                  ),
                ),
              )
              detailMsg.put(YBMKKSF620MLogic.DETAIL_MSG_KEY_FG_RONRISAKUJO, '0')
              detailMsgArrayList.add(detailMsg)
              fgChange = true
            } else {
              // 変更なし
            }
          }
        }
      } else {
        // 新規追加行
        if (spread.getCellBooleanValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE)) {
          // 新規かつ削除行ならスキップ
          continue
        } else if (
          !SMSCheckField.isValidString(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
          ) &&
          !SMSCheckField.isValidString(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
          ) &&
          !SMSCheckField.isValidString(
            spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU),
          )
        ) {
          // 新規かつ空行ならスキップ
          continue
        } else {
          if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
          ) {
            // 必須入力チェック
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              messageString,
            )
            spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true)
            spread.setViewport(
              new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              SMSColor.WARNING,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            return
          } else if (
            !SMSCheckField.checkLength(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
              6,
            )
          ) {
            // フル桁入力チェック
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW028,
              [nmHaifu, '6'],
            )
            spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true)
            spread.setViewport(
              new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else if (
            cdHaifuMap.containsKey(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
          ) {
            let rowNumber: Integer = cdHaifuMap.get(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            ) as Integer
            // 重複チェック
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW043,
              messageString,
            )
            spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true)
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              SMSColor.WARNING,
            )
            spread.setCellSelected(
              rowNumber.intValue(),
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              true,
            )
            spread.setCellBackground(
              rowNumber.intValue(),
              YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              SMSColor.WARNING,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                rowNumber.intValue(),
                YBMKKSF620MLogic.SPREAD_CD_HAIFU,
              ),
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
            )
          ) {
            // 予算比率必須入力チェック
            let params: string[] = ['予算比率']
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              params,
            )
            spread.setCellSelected(
              i,
              YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              true,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                i,
                YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              ),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else if (
            !SMSCheckField.isValidString(
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU),
            ) &&
            stCyohyo.equals(YBMKKSF620MLogic.ST_CYOHYO_KANRI)
          ) {
            // 実績比率必須入力チェック(管理部のみ)
            let params: string[] = ['実績比率']
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW025,
              params,
            )
            spread.setCellSelected(
              i,
              YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              true,
            )
            spread.setViewport(
              new JCFSpreadCellPosition(
                i,
                YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              ),
            )
            spread.setCellBackground(
              i,
              YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
              SMSColor.WARNING,
            )
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              SMSHeaderFooterManager.ITEM_FUNCBTN9,
              false,
            )
            returnInfo.setFocus(
              SMSHeaderFooterManager.FRAME_MAIN,
              YBMKKSF620MLogic.ITEM_SPREAD,
            )
            return
          } else {
            // 新規追加データ
            detailMsg = new HashMap()
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU,
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU),
            )
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_GYO,
              Integer.toString(i),
            )
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
              spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
            )
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
              this.Zeros(
                spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU),
              ),
            )
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU,
              '0.00',
            )
            detailMsg.put(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU,
              '0.00',
            )
            detailMsg.put(YBMKKSF620MLogic.DETAIL_MSG_KEY_FG_RONRISAKUJO, '0')
            detailMsgArrayList.add(detailMsg)
            fgChange = true
            // 合計値加算
            sumYosanHiritsu = sumYosanHiritsu.add(
              new BigDecimal(
                spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU),
              ).setScale(2, BigDecimal.ROUND_HALF_UP),
            )
            sumJissekiHiritsu = sumJissekiHiritsu.add(
              new BigDecimal(
                this.Zeros(
                  spread.getCellValue(
                    i,
                    YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
                  ),
                ),
              ).setScale(2, BigDecimal.ROUND_HALF_UP),
            )
          }
        }
      }
    }

    // 合計表示を更新
    sumYosanHiritsuFdb.setValue(sumYosanHiritsu.doubleValue())
    sumJissekiHiritsuFdb.setValue(sumJissekiHiritsu.doubleValue())

    if (
      sumYosanHiritsu.doubleValue() != 100.0 &&
      sumYosanHiritsu.doubleValue() != 0.0
    ) {
      // 予算比率合計が100%または0%以外の場合はエラー処理。
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YBMKKSMCW018,
      )
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      )
      return
    } else if (
      sumJissekiHiritsu.doubleValue() != 100.0 &&
      sumJissekiHiritsu.doubleValue() != 0.0 &&
      stCyohyo.equals(YBMKKSF620MLogic.ST_CYOHYO_KANRI)
    ) {
      // 実績比率合計が100%または0%以外の場合はエラー処理。
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YBMKKSMCW018,
      )
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      )
      return
    } else if (!fgChange) {
      // 更新するレコードがない場合はメッセージを表示し処理を終了
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMSW057,
      )
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      )
      return
    } else {
      // 登録確認メッセージをポップアップ表示
      let msgUtil: JCFMessageOnWindow = context.getMessageUtil()
      if (fgDelete) {
        let ret: string = msgUtil.showMessage(SMSMessageConst.YBMKKSMSC031)
        if (JCFMessageOnWindow.BTN_NO.equals(ret)) {
          // いいえを選択した場合は処理を終了
          return
        }
      } else {
        let ret: string = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC001)
        if (JCFMessageOnWindow.BTN_NO.equals(ret)) {
          // いいえを選択した場合は処理を終了
          return
        }
      }
    }

    // ヘッダMsg生成
    let headerMsg: HashMap = new HashMap()
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_ST_HAIFU,
      this.getStHaifu(context),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_DT_NENDO,
      super.getComboID(dtNendo),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI,
      cdSoshiki.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU,
      cdKamoku.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU,
      cdHojokamoku.getValue(),
    )
    headerMsg.put(
      YBMKKSF620MLogic.HEADER_MSG_KEY_DT_KIJUN,
      this.getDtKijun(super.getComboID(dtNendo)),
    )

    let inData: HashMap = new HashMap()
    inData.put(YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG, headerMsg)
    let detailMsgList: HashMap[] = detailMsgArrayList.toArray() as HashMap[]
    inData.put(YBMKKSF620MLogic.HAIFU_MSG_KEY_DETAIL_MSG_LIST, detailMsgList)

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
    loginInfo = super.getLoginInfo(context) as SMSLoginInfoImpl

    // 戻りヘッダ情報の取得
    headerMsg = rtnData.get(
      YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG,
    ) as HashMap

    if (
      (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
        SMSHashKeyConst.IS_SUCCESS,
      )
    ) {
      let itemSumYosanHiritsu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU,
      )
      let itemSumJissekiHiritsu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU,
      )
      let itemSumZenkaiYosanHiritsu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_ZENKAI_YOSAN,
      )
      let itemSumZenkaiJissekiHiritsu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_ZENKAI_JISSEKI,
      )
      itemSumYosanHiritsu.setValue('0.00')
      itemSumJissekiHiritsu.setValue('0.00')
      itemSumZenkaiYosanHiritsu.setValue('0.00')
      itemSumZenkaiJissekiHiritsu.setValue('0.00')
      nmSoshiki.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_SOSHIKI) as string,
      )
      // ヘッダ情報の損益管理組織略式名称を表示
      nmKamoku.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_KAMOKU) as string,
      )
      // ヘッダ情報の勘定科目略式名称を表示
      nmHojokamoku.setValue(
        headerMsg.get(YBMKKSF620MLogic.HEADER_MSG_KEY_NM_HOJOKAMOKU) as string,
      )
      // ヘッダ情報の補助科目略式名称を表示
      detailMsgList = rtnData.get(
        YBMKKSF620MLogic.HAIFU_MSG_KEY_DETAIL_MSG_LIST,
      ) as HashMap[]

      // 件数表示
      count.setValue(Integer.toString(detailMsgList.length))
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMSI019,
        ['登録処理'],
      )

      if (detailMsgList.length == 0) {
        // 検索結果0件
        // ClassCastException対策
        super.putUserData(
          context,
          YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST,
          createArrayByInstance(HashMap, 0),
        )
        // 明細削除
        spread.removeAllRow()
        // 複写ボタン非活性化
        btnFukusha.setEnabled(false)
        // 計算ボタン非活性化
        SMSHeaderFooterManager.setEnabledFooterButton(
          context,
          SMSHeaderFooterManager.ITEM_FUNCBTN5,
          false,
        )
        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, cursorItem)
        return
      } else {
        // 複写ボタン活性化
        btnFukusha.setEnabled(true)
        // 取得データをスプレッドに表示
        this.setDataToSpread(context, detailMsgList)
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_SPREAD,
        )
      }
    } else if (
      (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
        SMSHashKeyConst.IS_WARNING,
      )
    ) {
      // callEJBが警告だった場合の処理
      // 複写ボタン無効化
      btnFukusha.setEnabled(false)
      // 登録ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN9,
        false,
      )
      // -------------------------------------
      // ログイン情報取得
      loginInfo = rtnData.get(
        SMSHashKeyConst.PARAM_KEY_COMMON,
      ) as SMSLoginInfoImpl
      // エラー項目ID取得
      let errorItem: string = loginInfo.getCdErrorKoumoku()
      let cdErrorItem: string = null!
      let nmErrorItem: string = null!
      // エラー列番号取得
      let noErrorColumnCd: number = -1
      let noErrorColumnNm: number = -1
      let fgSpread: boolean = false
      let noErrorGyo: number = 0
      if (errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU)) {
        cdErrorItem = YBMKKSF620MLogic.ITEM_CD_KAMOKU
        nmErrorItem = YBMKKSF620MLogic.ITEM_NM_KAMOKU
      } else if (errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI)) {
        cdErrorItem = YBMKKSF620MLogic.ITEM_CD_SOSHIKI
        nmErrorItem = YBMKKSF620MLogic.ITEM_NM_SOSHIKI
      } else if (
        errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU)
      ) {
        cdErrorItem = YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU
        nmErrorItem = YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU
      } else if (errorItem.equals(YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU)) {
        noErrorColumnCd = YBMKKSF620MLogic.SPREAD_CD_HAIFU
        // エラー行番号取得
        noErrorGyo = Integer.parseInt(loginInfo.getQtErrorRecordPosition())
        fgSpread = true
      } else if (errorItem.equals(YBMKKSF620MLogic.HEADER_MSG_KEY_DT_NENDO)) {
        dtNendo.setBackground(SMSColor.WARNING)
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_DT_NENDO,
        )
      }

      if (!fgSpread) {
        // 画面項目部品取得
        if (SMSCheckField.isValidString(cdErrorItem)) {
          let fieldErrorKoumoku: JCFFieldStringData = current.getItemData(
            SMSHeaderFooterManager.FRAME_MAIN,
            cdErrorItem,
          ) as JCFFieldStringData
          // 部品背景（エラー）色を設定
          fieldErrorKoumoku.setBackground(SMSColor.WARNING)
          // フォーカスを設定
          returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, cdErrorItem)
        }
        if (SMSCheckField.isValidString(nmErrorItem)) {
          // 画面項目部品取得
          let fieldErrorKoumokuNm: JCFFieldStringData = current.getItemData(
            SMSHeaderFooterManager.FRAME_MAIN,
            nmErrorItem,
          ) as JCFFieldStringData
          fieldErrorKoumokuNm.setValue('')
        }
      } else {
        if (-1 != noErrorColumnCd) {
          spread.setCellSelected(noErrorGyo, noErrorColumnCd, true)
          spread.setViewport(
            new JCFSpreadCellPosition(noErrorGyo, noErrorColumnCd),
          )
          spread.setCellBackground(
            noErrorGyo,
            noErrorColumnCd,
            SMSColor.WARNING,
          )
          // フォーカスを設定
          returnInfo.setFocus(
            SMSHeaderFooterManager.FRAME_MAIN,
            YBMKKSF620MLogic.ITEM_SPREAD,
          )

          let errorNm: string = loginInfo.getNmErrorColumn()

          if (!errorNm.equals('')) {
            spread.setCellValue(noErrorGyo, 3, '')
          }
        }
      }
    }
  }

  /**
   * 取込画面遷移時の業務ロジック
   *
   * @param event					ＣＪＦイベントオブジェクト
   * @param context					ＣＪＦコンテキストオブジェクト
   * @param returnInfo				ＣＪＦ復帰情報オブジェクト
   * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   */
  torikomiData(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF620MLogicMLogic:torikomiData() start')

    try {
      let fgInit: any = null
      // 共有領域から初期化実行判定フラグを取得
      fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT)

      // Initフラグがnullでなければキー削除
      if (fgInit != null) {
        super.removeUserDataWithObject(context, YBMKKSCjfConst.FG_INIT as any)
      }

      //　フッタメッセージの初期化
      SMSHeaderFooterManager.initInformation(context)

      let current: JCFScreenData =
        context.getCurrentScreenData() as JCFScreenData

      let dtNendo: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_DT_NENDO,
      ) as JCFComboBoxData

      let stHaifu: string = this.getStHaifu(context)

      // 配賦区分
      this.putUserData(
        context,
        YBMKKSF620MLogic.HEADER_MSG_KEY_ST_HAIFU,
        stHaifu,
      )

      // 年度
      this.putUserData(
        context,
        YBMKKSF620MLogic.USER_DATA_KEY_DT_NENDO,
        super.getComboID(dtNendo),
      )
    } catch (th: any) {
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF620MLogicMLogic:torikomiData() end')
  }

  /** 配賦区分の値を返します。
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @return String 配賦区分の値
   */
  private getStHaifu(context: JCFContext): string {
    let current: JCFScreenData = context.getCurrentScreenData()
    let jigyoTorokuHiritsu: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_JIGYO_TOROKU_HIRITSU,
    ) as JCFToggleButtonData
    if (jigyoTorokuHiritsu.getBooleanValue()) {
      return YBMKKSF620MLogic.ST_HAIFU_JIGYO_TOROKU_HIRITSU
    } else {
      return YBMKKSF620MLogic.ST_HAIFU_LINE_HIRITSU
    }
  }

  /**
   * ヘッダ部の検索条件が変更されたかを判定します。変更されていた場合はtrueを返します。<BR>
   * @param context コンテキスト画面データ域
   * @param currentt 画面データ域
   * @param errorItem エラーメッセージ設定項目
   */
  protected isHeaderConditionChanged(
    context: JCFContext,
    current: JCFScreenData,
    returnInfo: JCFReturnInfo,
    errorItem: string[],
  ): boolean {
    SMSCLLog.debug('YBMKKSF620MLogic.isHeaderConditionChanged start')
    let dtNendo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_DT_NENDO,
    ) as JCFComboBoxData
    let cdSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
    )
    let cdKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_KAMOKU,
    )
    let cdHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
    )

    // ワーニング色の初期化
    dtNendo.setBackground(SMSColor.DEFAULT)
    cdSoshiki.setBackground(SMSColor.DEFAULT)
    cdKamoku.setBackground(SMSColor.DEFAULT)
    cdHojokamoku.setBackground(SMSColor.DEFAULT)

    // 表示アクション終了時の検索条件をユーザ領域から取得
    let dtNendoBefore: string = super.getUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_DT_NENDO,
    ) as string
    // 年度
    let cdSoshikiBefore: string = super.getUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_CD_SOSHIKI,
    ) as string
    // 組織コード
    let cdKamokuBefore: string = super.getUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_CD_KAMOKU,
    ) as string
    // 勘定科目コード
    let cdHojokamokuBefore: string = super.getUserData(
      context,
      YBMKKSF620MLogic.USER_DATA_KEY_CD_HOJOKAMOKU,
    ) as string
    // 補助科目コード
    // 表示時と検索条件が異なっていないかチェックする

    // 年度チェック
    if (!dtNendoBefore.equals(super.getComboID(dtNendo))) {
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.SMSCMNMCI011,
        errorItem,
      )
      dtNendo.setBackground(SMSColor.WARNING)
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_DT_NENDO,
      )
      return true
    }

    // 組織チェック
    if (!cdSoshikiBefore.equals(cdSoshiki.getValue())) {
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.SMSCMNMCI011,
        errorItem,
      )
      cdSoshiki.setBackground(SMSColor.WARNING)
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
      )
      return true
    }

    // 科目チェック
    if (!cdKamokuBefore.equals(cdKamoku.getValue())) {
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.SMSCMNMCI011,
        errorItem,
      )
      cdKamoku.setBackground(SMSColor.WARNING)
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_KAMOKU,
      )
      return true
    }

    // 補助科目チェック
    if (!cdHojokamokuBefore.equals(cdHojokamoku.getValue())) {
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.SMSCMNMCI011,
        errorItem,
      )
      cdHojokamoku.setBackground(SMSColor.WARNING)
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
      )
      return true
    }

    SMSCLLog.debug('YBMKKSF620MLogic.isHeaderConditionChanged end')
    return false
  }

  /**
   * 入力チェックを行います。チェックOK時はTRUEを返します。<BR>
   * @param context コンテキスト画面データ域
   * @param currentt 画面データ域
   * @return errorFlag エラーフラグ
   */
  private checkHeaderCondition(
    context: JCFContext,
    current: JCFScreenData,
    returnInfo: JCFReturnInfo,
    gamenID: string,
  ): boolean {
    SMSCLLog.debug('YBMKKSF620MLogic.inputCheck start')
    // 画面部品取得
    let dtNendo: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_DT_NENDO,
    ) as JCFComboBoxData
    let cdSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
    )
    let nmSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_SOSHIKI,
    )
    let cdKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_KAMOKU,
    )
    let nmKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_KAMOKU,
    )
    let cdHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
    )
    let nmHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU,
    )
    // 画面の入力項目取得
    let dtNendoVal: Integer = new Integer(super.getComboID(dtNendo))
    let cdSoshikiVal: string = cdSoshiki.getValue()
    let cdKamokuVal: string = cdKamoku.getValue()
    let cdHojyoKamokuVal: string = cdHojokamoku.getValue()
    // エラーフラグ
    let errorFlag: boolean = false
    let msg: string[] = createStringArray(1)
    let msg2: string = ''
    if (gamenID.equals(YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN)) {
      msg[0] = '組織'
      msg2 = '組織'
    } else {
      msg[0] = '職場'
      msg2 = '職場'
    }

    // 年度チェック
    if (!SMSCheckField.isValidString(dtNendoVal.toString())) {
      SMSCLLog.debug('年度未入力')
      // 複写元年度未選択の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        ['年度'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_DT_NENDO,
      )
      return errorFlag
    }
    // 組織チェック
    if (!SMSCheckField.isValidString(cdSoshikiVal)) {
      SMSCLLog.debug('組織未入力')
      // 組織未入力の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        msg,
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
      )
      cdSoshiki.setBackground(SMSColor.WARNING)
      return errorFlag
    } else if (!SMSCheckField.checkLength(cdSoshikiVal, 6)) {
      SMSCLLog.debug('組織桁数入力不足')
      // 組織6桁以外の場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW028,
        [msg2, '6'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
      )
      cdSoshiki.setBackground(SMSColor.WARNING)
      return errorFlag
    }
    // 科目チェック（１桁以上入力時）
    if (SMSCheckField.isValidString(cdKamokuVal)) {
      if (!SMSCheckField.checkLength(cdKamokuVal, 5)) {
        SMSCLLog.debug('勘定科目桁数入力不足')
        // 科目5桁以外の場合はエラー
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW028,
          ['勘定科目', '5'],
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_CD_KAMOKU,
        )
        cdKamoku.setBackground(SMSColor.WARNING)
        return errorFlag
      }
    }
    // 補助科目チェック（１桁以上入力時）
    if (SMSCheckField.isValidString(cdHojyoKamokuVal)) {
      if (!SMSCheckField.checkLength(cdHojyoKamokuVal, 6)) {
        SMSCLLog.debug('補助科目桁数入力不足')
        // 補助科目6桁以外の場合はエラー
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW028,
          ['補助科目', '6'],
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
        )
        cdHojokamoku.setBackground(SMSColor.WARNING)
        return errorFlag
      }
    }
    // 科目と補助科目の相関チェック
    if (
      !SMSCheckField.isValidString(cdKamokuVal) &&
      SMSCheckField.isValidString(cdHojyoKamokuVal)
    ) {
      SMSCLLog.debug('勘定科目未入力')
      // 複写元科目未入力かつ複写元補助科目入力済みの場合はエラー
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        ['勘定科目'],
      )
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_CD_KAMOKU,
      )
      cdKamoku.setBackground(SMSColor.WARNING)
      return errorFlag
    }

    SMSCLLog.debug('YBMKKSF620MLogic.inputCheck end')
    return (errorFlag = true)
  }

  /**
   * HashMapからスプレッド部へデータをセットします。
   * @param context コンテキスト
   * @param outData ハッシュマップ
   */
  private setDataToSpread(context: JCFContext, detailMsgList: HashMap[]) {
    SMSCLLog.debug('YBMKKSF620MLogic.setDataToSpread start')
    let nuYsnHaifuritsu: string = null!
    let nuJiskHaifuritsu: string = null!
    let nuYsnZenHaifuritsu: string = null!
    let nuJiskZenHaifuritsu: string = null!
    let sumYosanHiritsu: number = 0
    let sumJissekiHiritsu: number = 0
    let sumZenkaiYosan: number = 0
    let sumZenkaiJisseki: number = 0
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let sumYosanHiritsuFdb: JCFFieldDoubleData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU,
      ) as JCFFieldDoubleData
      let sumJissekiHiritsuFdb: JCFFieldDoubleData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU,
      ) as JCFFieldDoubleData
      let sumZenkaiYosanFdb: JCFFieldDoubleData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_ZENKAI_YOSAN,
      ) as JCFFieldDoubleData
      let sumZenkaiJissekiFdb: JCFFieldDoubleData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF620MLogic.ITEM_SUM_ZENKAI_JISSEKI,
      ) as JCFFieldDoubleData
      // 金額の整数部３桁区切り削除用
      let decFormat: DecimalFormat = new DecimalFormat('#,####.00')
      // decFormat.setGroupingSize(4);
      // decFormat.setMinimumFractionDigits(2);
      // 全行クリア
      spread.removeAllRow()
      // 予算基礎値CBMMsgの内容をスプレッドに設定
      for (let i = 0; i < detailMsgList.length; i++) {
        spread.addRow()
        // 削除
        spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE, false)
        // 事業コード or 職場コード
        if (
          detailMsgList[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_CD_HAIFU,
            detailMsgList[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU,
            ) as string,
          )
        }
        // 事業略式名称 or 職場略式名称
        if (
          detailMsgList[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_NM_HAIFU,
            detailMsgList[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU,
            ) as string,
          )
        }
        // 階層
        if (
          detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL,
          ) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_NO_KAISOLEVEL,
            detailMsgList[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL,
            ) as string,
          )
        }
        // 予算比率
        if (
          detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
          ) != null
        ) {
          nuYsnHaifuritsu = detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
          ) as string
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU,
            nuYsnHaifuritsu,
          )
          sumYosanHiritsu += Double.parseDouble(nuYsnHaifuritsu)
        }
        // 実績比率
        if (
          detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
          ) != null
        ) {
          nuJiskHaifuritsu = detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
          ) as string
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU,
            nuJiskHaifuritsu,
          )
          sumJissekiHiritsu += Double.parseDouble(nuJiskHaifuritsu)
        }
        // 前回予算
        if (
          detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU,
          ) != null
        ) {
          nuYsnZenHaifuritsu = detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU,
          ) as string
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_ZENKAI_YOSAN,
            nuYsnZenHaifuritsu,
          )
          sumZenkaiYosan += Double.parseDouble(nuYsnZenHaifuritsu)
        }
        // 前回実績
        if (
          detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU,
          ) != null
        ) {
          nuJiskZenHaifuritsu = detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU,
          ) as string
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_ZENKAI_JISSEKI,
            nuJiskZenHaifuritsu,
          )
          sumZenkaiJisseki += Double.parseDouble(nuJiskZenHaifuritsu)
        }
        // 更新日時
        if (
          detailMsgList[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN) !=
          null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_DT_KOSHIN,
            SMSDateStringUtil.conversion(
              (
                detailMsgList[i].get(
                  YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN,
                ) as string
              ).substring(0, 14),
              6,
            ),
          )
        }
        // 更新者
        if (
          detailMsgList[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA) !=
          null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF620MLogic.SPREAD_NM_KOSHIN,
            detailMsgList[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA,
            ) as string,
          )
        }
      }
      // 合計値表示
      sumYosanHiritsuFdb.setValue(sumYosanHiritsu)
      sumJissekiHiritsuFdb.setValue(sumJissekiHiritsu)
      sumZenkaiYosanFdb.setValue(sumZenkaiYosan)
      sumZenkaiJissekiFdb.setValue(sumZenkaiJisseki)
      // 共通領域に表示直後の値を設定
      let detailMsgMapList: HashMap[] = createArrayByInstance(
        HashMap,
        detailMsgList.length,
      )
      for (let i = 0; i < detailMsgList.length; i++) {
        detailMsgMapList[i] = new HashMap()
        if (
          detailMsgList[i].containsKey(YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU)
        ) {
          // 事業コード or 職場コード
          detailMsgMapList[i].put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU,
            detailMsgList[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU),
          ) as string
        }
        if (
          detailMsgList[i].containsKey(YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU)
        ) {
          // 事業略式名称 or 職場略式名称
          detailMsgMapList[i].put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU,
            detailMsgList[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU),
          ) as string
        }
        if (
          detailMsgList[i].containsKey(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL,
          )
        ) {
          // 階層
          detailMsgMapList[i].put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL,
            detailMsgList[i].get(
              YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL,
            ),
          ) as string
        }
        if (
          detailMsgList[i].containsKey(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
          )
        ) {
          // 予算比率
          nuYsnHaifuritsu = detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
          ) as string
          detailMsgMapList[i].put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU,
            decFormat.format(Double.parseDouble(nuYsnHaifuritsu)),
          )
        }
        if (
          detailMsgList[i].containsKey(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
          )
        ) {
          // 実績比率
          nuJiskHaifuritsu = detailMsgList[i].get(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
          ) as string
          detailMsgMapList[i].put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU,
            decFormat.format(Double.parseDouble(nuJiskHaifuritsu)),
          )
        }
        if (
          detailMsgList[i].containsKey(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN,
          )
        ) {
          // 更新日時
          detailMsgMapList[i].put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN,
            detailMsgList[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN),
          ) as string
        }
        if (
          detailMsgList[i].containsKey(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA,
          )
        ) {
          // 更新者
          detailMsgMapList[i].put(
            YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA,
            detailMsgList[i].get(YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA),
          ) as string
        }
      }
      // 予算基礎値CBMMsg（検索結果）をユーザ領域に格納
      super.putUserData(
        context,
        YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST,
        detailMsgMapList,
      )
      // スプレッド活性化
      spread.setEnabled(true)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF620MLogic.setDataToSpread error')
      SMSCLLog.debug(th.toString())
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF620MLogic.setDataToSpread end')
  }

  /**
   *
   */
  private clearError(context: JCFContext, isClearNames: boolean) {
    let current: JCFScreenData = context.getCurrentScreenData()
    let dtNendo: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_DT_NENDO,
    )
    let cdSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_SOSHIKI,
    )
    let cdKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_KAMOKU,
    )
    let cdHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU,
    )
    let nmSoshiki: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_SOSHIKI,
    )
    let nmKamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_KAMOKU,
    )
    let nmHojokamoku: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU,
    )
    // メッセージ消去
    SMSHeaderFooterManager.initInformation(context)
    // ワーニング色の初期化
    dtNendo.setBackground(SMSColor.DEFAULT)
    cdSoshiki.setBackground(SMSColor.DEFAULT)
    cdKamoku.setBackground(SMSColor.DEFAULT)
    cdHojokamoku.setBackground(SMSColor.DEFAULT)
    if (isClearNames) {
      // 名称のクリア
      nmSoshiki.setValue('')
      nmKamoku.setValue('')
      nmHojokamoku.setValue('')
    }
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

  /**
   * Null値を0に変換。<BR>
   */
  protected Zeros(atai: string): string {
    if (atai == null || atai == '') {
      atai = '0'
    }
    return atai
  }
}
