import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { YBMKKSCjfLogicBase } from '../../YBMKKSF000/logic/YBMKKSCjfLogicBase'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import { YBMKKSCjfConst } from '../../YBMKKSF000/logic/YBMKKSCjfConst'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFFieldFilledDateData } from '@/lib/jcf/gui/JCFFieldFilledDateData'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import type { JCFToggleButtonData } from '@/lib/jcf/gui/JCFToggleButtonData'
import { SMSDateUtil } from '@/lib/sms/sol/sys/SMSDateUtil'
import type { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { HashMap } from '@/lib/native/util/HashMap'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import type { SMSFileDialogData } from '@/lib/sms/sol/sys/cjf/SMSFileDialogData'
import type { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'
import { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow'
import type { MimeSource } from '@/lib/sms/sol/sys/MimeSource'
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField'
import type { NativeMap } from '@/lib/native/util/Map'
import { SMSAppException } from '@/lib/sms/sol/sys/SMSAppException'
import type { JCFPanelData } from '@/lib/jcf/gui/JCFPanelData'
import { SMSPanelInitDataHolder } from '@/lib/sms/sol/sys/cjf/logic/SMSPanelInitDataHolder'
import type { List } from '@/lib/native/util/List'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { Integer } from '@/lib/native/lang/Integer'
import { SMSColor } from '@/lib/sms/sol/sys/SMSColor'
import { NativeString } from '@/lib/native/lang/String'
import type { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData'
import { SMSDateStringUtil } from '@/lib/sms/sol/sys/SMSDateStringUtil'
import type { JCFSpreadAdditionalInfo } from '@/lib/jcf/gui/JCFSpreadAdditionalInfo'

/**
 * 配賦マスタ取込画面ロジッククラスです。
 */
export default class YBMKKSF626SLogic extends YBMKKSCjfLogicBase {
  // ------------------------------------------------
  // アイテムID
  // ------------------------------------------------

  /** 事業登録比率 */
  private static ST_JIGYOTOUROKU1: string = 'jigyoTourokuHiritsu1'

  /** ライン比率 */
  private static ST_LINE1: string = '	lineHiritsu1'

  /** 事業登録比率 */
  private static ST_JIGYOTOUROKU2: string = 'jigyoTourokuHiritsu2'

  /** ライン比率 */
  private static ST_LINE2: string = 'lineHiritsu2'

  /** ファイルダイアログ */
  private static ITEM_FILE_DIALOG: string = 'smsFileDialog'

  /** 処理番号From */
  private static ITEM_NO_SHORI_FROM: string = 'noShoriFrom'

  /** 処理番号To */
  private static ITEM_NO_SHORI_TO: string = 'noShoriTo'

  /** 取込日From */
  private static ITEM_DT_TORIKOMI_FROM: string = 'tmTorikomiFrom'

  /** 取込日To */
  private static ITEM_DT_TORIKOMI_TO: string = 'tmTorikomiTo'

  /** 取込者ID */
  private static ITEM_CD_TORIKOMISHA_ID: string = 'cdTorikomisha'

  /** 取込者名 */
  private static ITEM_NM_TORIKOMISHA: string = 'nmTorikomisha'

  /** 件数 */
  private static ITEM_KENSU: string = 'kensu'

  /** エラー有無 */
  private static ITEM_SUBETE: string = 'subete'

  /** エラー有 */
  private static ITEM_ARI: string = 'ari'

  /** エラー無 */
  private static ITEM_NASHI: string = 'nashi'

  /** スプレッド */
  private static ITEM_SPREAD: string = 'spread'

  // ----------------------------------------------------------------
  // ユーザ領域キー
  // ----------------------------------------------------------------

  /** ユーザ領域キー 基準日 */
  private static USER_KEY_DT_KIJUN: string = 'dtKijun'

  /** ユーザ領域キー 年度 */
  private static USER_KEY_DT_NENDO: string = 'dtNendo'

  /** ユーザ領域キー 基準日 */
  private static JOHO_KEY_DT_KIJUN: string = 'kijunbi'

  /** ユーザ領域キー 配賦区分 */
  private static JOHO_KEY_ST_HAIFU: string = 'stHaifu'

  // -------------------------------------------------------
  // メッセージスキーマ用キー定数
  // -------------------------------------------------------

  /** HashMapのキー定義 汎用分類詳細Msg */
  private static KEY_HASHMAP_HANYOBUNRUI_SHOSAI_MSG: string =
    'hanyoBunruiShosaiCBMMsg'

  /** CBSコマンド名(Verb) バッチ呼び出しイベントID、イベント名取得 */
  private static COMMAND_HANYO_BUNRUI_ICHIRAN: string =
    'YCMHanyoBunruiCBSHandler.getHanyoBunruiIchiran'

  /** HashMapのキー定義 汎用分類一覧Msg */
  private static KEY_HASHMAP_HANYOBUNRUI_ICHIRAN_MSG: string =
    'hanyoBunruiIchiranCBMMsgList'

  /** 配賦取込Msgキー イベントID */
  private static CD_EVENT_ID_KEY: string = 'cdEventId'

  /** 配賦取込Msgキー イベント名 */
  private static NM_EVENT_ID_KEY: string = 'nmEventId'

  /** 配賦取込Msgキー 処理番号 */
  private static NO_SHORI_KEY: string = 'noShori'

  /** 環境設定情報 */
  private static KEY_KANKYOSETTEIJOHOMSG: string = 'kankyoSetteiJohoMsg'

  /**	情報MSGのキー */
  /** 配賦取込履歴Msg */
  private static KEY_RIREKI_HEADER: string = 'HaifuTorikomiRirekiHeaderMsg'
  private static KEY_RIREKI_DETAIL: string = 'HaifuTorikomiRirekiDetailMsgList'

  /** 処理番号FROM */
  private static KEY_NO_SHORI_FROM: string = 'noShoriIraiFrom'

  /** 処理番号To */
  private static KEY_NO_SHORI_TO: string = 'noShoriiIraiTo'

  /** 年度 */
  private static KEY_DT_NENDO: string = 'dtNendo'

  /** 取込日FROM */
  private static KEY_DT_TORIKOMI_FROM: string = 'dtTorikomiFrom'

  /** 取込日TO */
  private static KEY_DT_TORIKOMI_TO: string = 'dtTorikomiTo'

  /** 取込者ID */
  private static KEY_CD_TORIKOMISHA_ID: string = 'cdSakuseishaId'

  /** 取込者名 */
  private static KEY_NM_TORIKOMISHA: string = 'nmTorikomisha'

  /** 配賦区分 */
  private static KEY_ST_HAIFU: string = 'stHaifuKubun'

  /** エラー有無 */
  private static KEY_ST_ERROR: string = 'stError'

  /** 基準日 */
  private static KEY_DT_KIJUN: string = 'dtKijun'

  /** 配賦マスタ取込履歴明細Msg 処理番号 */
  private static DETAIL_MSG_KEY_NO_SHORI: string = 'noShori'

  /** 配賦マスタ取込履歴明細Msg 年度 */
  private static DETAIL_MSG_KEY_DT_NENDO: string = 'tNendo'

  /** 配賦マスタ取込履歴明細Msg 取込日 */
  private static DETAIL_MSG_KEY_DT_TORIKOMI: string = 'dtTorikomi'

  /** 配賦マスタ取込履歴明細Msg 取込者名 */
  private static DETAIL_MSG_KEY_NM_TORIKOMI: string = 'nmTorikomisha'

  /** 配賦マスタ取込履歴明細Msg ファイル名 */
  private static DETAIL_MSG_KEY_NM_FILE: string = 'nmFile'

  /** 配賦マスタ取込履歴明細Msg エラー有無 */
  private static DETAIL_MSG_KEY_ST_ERROR: string = 'stError'

  /** 配賦マスタ取込履歴明細Msg 正常件数 */
  private static DETAIL_MSG_KEY_QT_SEIJO: string = 'qtSeijo'

  /** 配賦マスタ取込履歴明細Msg 異常件数 */
  private static DETAIL_MSG_KEY_QT_IJO: string = 'qtIjo'

  /** 処理番号 */
  private static KEY_NO_SHORI: string = 'noShori'

  /** 取込日 */
  private static KEY_TM_TORIKOMI: string = 'tmTorikomi'

  /** ファイル名 */
  private static KEY_NM_FILE: string = 'nmFile'

  // -------------------------------------------------------
  // その他定数
  // -------------------------------------------------------

  /** YBMYKKS.properties キー */
  private static SCREEN_NAME_KEY: string = 'YBMKKSF626S_SCREEN_NAME'
  private static MAX_DISPLAY_CNT_KEY: string = 'YBMKKSF626S_MAX_DISPLAY_CNT'
  private static MAX_SELECT_CNT_KEY: string = 'YBMKKSF626S_MAX_SELECT_CNT'

  /** CBSコマンド名(Verb) 初期表示 */
  private static COMMAND_INIT: string = 'YBMHaifuCBSHandler.init1'

  /** CBSコマンド名(Verb) 読み込み開始ボタン押下 */
  private static COMMAND_INCLUDE_HAIFU: string =
    'YBMHaifuCBSHandler.includeHaifu'

  /** CBSコマンド名(Verb) 表示 */
  private static COMMAND_GET_RIREKI: string =
    'YBMHaifuCBSHandler.getHaifuRireki'

  /** 配賦区分 値 事業登録比率*/
  private static ST_HAIFU_JIGYO_TOROKU_HIRITSU: string = '01'

  /** 配賦区分 値 ライン比率 */
  private static ST_HAIFU_LINE_HIRITSU: string = '02'

  /** 画面ID */
  private static GAMEN_ID: string = 'YBMKKSF626S'

  /** ユースケースID */
  private static USECASE_ID: string = 'YBMKKSF620'

  /** フッタボタンラベル */
  protected static FOOTER_LABEL: string[] = [
    '読込開始(F1)',
    '(F2)',
    '(F3)',
    '(F4)',
    '(F5)',
    '(F6)',
    'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)',
    '帳票印刷(F8)',
    '登録(F9)',
  ]

  /** 予算編成CBS名 */
  private static VAL_CBS_NAME: string = 'YBMKKSCBS'

  /** 汎用分類マスタ条件 サブシステム種別コード */
  private static CD_SUBSYSTEM_SHUBETSU_VALUE_BATCH: string = '706'

  /** 汎用分類マスタ条件 データ種別コード */
  private static CD_DATASHUBETSU_VALUE_BATCH: string = 'KF620'

  /**	共通CBS名 */
  private static VAL_YCM_CBS_NAME: string = 'YCMKMSCBS'

  /** ユースケースID */
  private static VAL_USECASEID: string = 'YBMKKSF620'

  /** エラー種別 全て */
  private static VALUE_SUBETE: string = ''

  /** エラー種別 有り */
  private static VALUE_ARI: string = '00'

  /** エラー種別 無し */
  private static VALUE_NASHI: string = '01'

  /** 日付部品未入力時の返却文字列 */
  static FIELD_DATE_NO_ENTRY: string = '00000000'

  // -----------------------------------------------------------
  // 明細(Spread)部品列インデックス定数
  // -----------------------------------------------------------

  /** スプレッド インデックス 処理依頼番号 */
  private static SPREAD_SHORI_NO: number = 0

  /** スプレッド インデックス 年度 */
  private static SPREAD_NENDO: number = 1

  /** スプレッド インデックス ファイル名 */
  private static SPREAD_FILEMEI: number = 2

  /** スプレッド インデックス 取込日 */
  private static SPREAD_TORIKOMIBI: number = 3

  /** スプレッド インデックス 取込者 */
  private static SPREAD_TORIKOMISHA: number = 4

  /** スプレッド インデックス エラー有無 */
  private static SPREAD_ERRORUMU: number = 5

  /** スプレッド インデックス 正常件数 */
  private static SPREAD_SEIJO: number = 6

  /** スプレッド インデックス 異常件数 */
  private static SPREAD_IJO: number = 7

  /** スプレッド インデックス 詳細ボタン */
  private static SPREAD_SHOSAI: number = 8

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
    SMSCLLog.debug('YBMKKSF626SLogic.removeInitFlag start')

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
    SMSCLLog.debug('YBMKKSF626SLogic.removeInitFlag end')
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
    SMSCLLog.debug('YBMKKSF626SLogic.beforeDisplay start')
    try {
      super.checkDialogException(context)

      //　最大表示件数を取得
      let maxDisplayCount: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF626SLogic.MAX_DISPLAY_CNT_KEY,
      ) as string
      this.setQtSaidaiHyouji(context, maxDisplayCount)

      // 最大検索件数を取得
      let maxSelectCount: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF626SLogic.MAX_SELECT_CNT_KEY,
      ) as string
      this.setQtSaidaiKensaku(context, maxSelectCount)

      let fgInit: any = null
      //共用領域から初期化実行判定フラグを取得する。
      fgInit = this.getUserData(context, YBMKKSCjfConst.FG_INIT)
      //initフラグがnullではなければ初期化実行済み

      let fgSeigen: string = this.getUserData(
        context,
        'fgRiyouSeigen',
      ).toString()
      if (fgSeigen.equals('1')) {
        // 読込開始ボタンを活性化する
        SMSHeaderFooterManager.setEnabledFooterButton(
          context,
          SMSHeaderFooterManager.ITEM_FUNCBTN1,
          false,
        )
        if (fgInit != null) {
        }
      } else {
        // 読込開始ボタンを非活性化する
        SMSHeaderFooterManager.setEnabledFooterButton(
          context,
          SMSHeaderFooterManager.ITEM_FUNCBTN1,
          true,
        )
      }

      if (fgInit != null) {
        SMSCLLog.debug('初期化実行判定：初期化実行済み')
        SMSCLLog.debug('YBMKKSF626SLogic.beforeDisplay() end')
        return
      }
      //初期化実行判定フラグを共用領域へセット
      this.putUserData(
        context,
        YBMKKSCjfConst.FG_INIT,
        YBMKKSCjfConst.FG_INIT_TRUE,
      )

      //　フッタメッセージの初期化
      SMSHeaderFooterManager.initInformation(context)

      //　ヘッダ情報の設定
      SMSHeaderFooterManager.initHeader(event, context)
      let screenName: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF626SLogic.SCREEN_NAME_KEY,
      ) as string
      SMSHeaderFooterManager.setHeaderTitle(
        context,
        screenName,
        YBMKKSF626SLogic.GAMEN_ID,
      )
      this.setNmGamen(context, screenName)

      //　フッタボタンの設定
      SMSHeaderFooterManager.initFooter(context, YBMKKSF626SLogic.FOOTER_LABEL)
      SMSHeaderFooterManager.setAllFooterButtonEnabled(context, false)

      // 項目部品の取得
      let current: JCFScreenData = context.getCurrentScreenData()
      // 取込日From
      let dtTorikomiFrom: JCFFieldFilledDateData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_DT_TORIKOMI_FROM,
      ) as JCFFieldFilledDateData
      // 取込日To
      let dtTorikomiTo: JCFFieldFilledDateData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_DT_TORIKOMI_TO,
      ) as JCFFieldFilledDateData

      let cdTorikomisha: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_CD_TORIKOMISHA_ID,
      ) as JCFFieldStringData

      let nmTorikomisha: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_NM_TORIKOMISHA,
      ) as JCFFieldStringData

      // 配賦区分の取得
      // 事業登録比率1
      let radioJigyo1: JCFToggleButtonData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ST_JIGYOTOUROKU1,
      ) as JCFToggleButtonData
      // ライン比率1
      let radioLine1: JCFToggleButtonData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ST_LINE1,
      ) as JCFToggleButtonData
      // 事業登録比率2
      let radioJigyo2: JCFToggleButtonData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ST_JIGYOTOUROKU2,
      ) as JCFToggleButtonData
      // ライン比率2
      let radioLine2: JCFToggleButtonData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ST_LINE2,
      ) as JCFToggleButtonData

      let stHaifu: string = this.getUserData(context, 'stHaifu').toString()

      if (stHaifu.equals(YBMKKSF626SLogic.ST_HAIFU_JIGYO_TOROKU_HIRITSU)) {
        radioJigyo1.setValue(true)
        radioJigyo2.setValue(true)
      } else {
        radioLine1.setValue(true)
        radioLine2.setValue(true)
      }

      // BODY情報の設定
      let sysTime: string = SMSDateUtil.format(
        SMSDateUtil.DATETYPE_OF_DATE_LENGTH_8,
      )
      dtTorikomiFrom.setValue(sysTime)
      dtTorikomiTo.setValue(sysTime)

      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl

      //ログインユーザのユーザIDを取得
      let cdUser: string = loginInfo.getUserId()

      cdTorikomisha.setValue(cdUser)

      // フォーカス設定（処理番号From）
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_FILE_DIALOG,
      )

      // EJB呼び出し
      let inData: HashMap = new HashMap()
      let headerMap: HashMap = new HashMap()

      headerMap.put(YBMKKSF626SLogic.KEY_CD_TORIKOMISHA_ID, cdUser)
      headerMap.put(
        YBMKKSF626SLogic.KEY_DT_KIJUN,
        this.getUserData(context, YBMKKSF626SLogic.KEY_DT_NENDO) + '0331',
      )
      inData.put(YBMKKSF626SLogic.KEY_RIREKI_HEADER, headerMap)

      let outData: HashMap = this.callEJB(
        context,
        event,
        YBMKKSF626SLogic.VAL_CBS_NAME,
        YBMKKSF626SLogic.COMMAND_INIT,
        inData,
      )
      // エラーの有無
      if (
        (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
          SMSHashKeyConst.IS_SUCCESS,
        )
      ) {
        let rtnData: HashMap = outData.get(
          SMSHashKeyConst.PARAM_KEY_DATA,
        ) as HashMap
        let joho: HashMap = rtnData.get(
          YBMKKSF626SLogic.KEY_KANKYOSETTEIJOHOMSG,
        ) as HashMap

        let header: HashMap = rtnData.get(
          YBMKKSF626SLogic.KEY_RIREKI_HEADER,
        ) as HashMap
        if (
          header != null &&
          (header.get(YBMKKSF626SLogic.KEY_NM_TORIKOMISHA) as string) != ''
        ) {
          //取込者名
          let norikomisha: string = header.get(
            YBMKKSF626SLogic.KEY_NM_TORIKOMISHA,
          ) as string
          nmTorikomisha.setValue(norikomisha)
        }
      }

      let kensu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_KENSU,
      )
      kensu.setVisible(false)

      fgSeigen = this.getUserData(context, 'fgRiyouSeigen').toString()
      if (fgSeigen.equals('1')) {
        // 読込開始ボタンを活性化する
        SMSHeaderFooterManager.setEnabledFooterButton(
          context,
          SMSHeaderFooterManager.ITEM_FUNCBTN1,
          false,
        )
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW271,
        )
      } else {
        // 読込開始ボタンを非活性化する
        SMSHeaderFooterManager.setEnabledFooterButton(
          context,
          SMSHeaderFooterManager.ITEM_FUNCBTN1,
          true,
        )
      }
    } catch (th: any) {
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF626SLogic:beforeDisplay() end')
  }

  /**
   * ファイルパス取得用のダミーイベントハンドラです。
   */
  getFilePath(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF626SLogic.setFilePath() start')
    SMSCLLog.debug('YBMKKSF626SLogic.setFilePath() end')
  }

  /**
   * 読込開始ボタン押下イベントハンドラです。
   */
  fileUpload(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogic.fileUpload() start')

    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let smsFileDialog: SMSFileDialogData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_FILE_DIALOG,
      ) as SMSFileDialogData

      //ボタンの非活性
      let button1: JCFPushButtonData = current.getItemData(
        SMSHeaderFooterManager.FRAME_FOOTER,
        SMSHeaderFooterManager.ITEM_FUNCBTN1,
      ) as JCFPushButtonData

      if (!button1.isEnabled()) {
        // ボタンが非活性の場合は何もしない
        return
      }

      // 画面IDを取得
      super.setCdGamen(context, YBMKKSF626SLogic.GAMEN_ID)

      // 最大検索件数を取得
      let maxSelectCount: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF626SLogic.MAX_SELECT_CNT_KEY,
      ) as string
      super.setQtSaidaiKensaku(context, maxSelectCount)

      // 共通情報を取得
      let loginInfo: SMSLoginInfoImpl = super.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl

      // ポップアップ表示
      let msgUtil: JCFMessageOnWindow = context.getMessageUtil()
      let result: string = msgUtil.showMessage(SMSMessageConst.YBMYHSMCC004)
      if (!result.equals(JCFMessageOnWindow.BTN_YES)) {
        // 「はい」ボタンでなければ中止
        return
      }

      // ファイルパス、ファイル名、ファイルデータ取得
      let directoryPath: string = smsFileDialog.getDirectory()
      let fileName: string = smsFileDialog.getFileName()
      let fileData: MimeSource = null!

      // 必須入力チェック：ファイル名
      if (fileName == null || fileName.trim().equals('')) {
        let params: string[] = ['ファイル名']
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW025,
          params,
        )
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF626SLogic.ITEM_FILE_DIALOG,
        )
        return
      }

      // 拡張子チェック
      if (
        !fileName
          .toLowerCase()
          .substring(fileName.length - 4, fileName.length)
          .equals('.csv')
      ) {
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCW115,
        )
        return
      }

      // 禁止文字チェック
      if (SMSCheckField.hasDisableChars(fileName)) {
        let params: string[] = ['ファイル名']
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCA015,
          params,
        )
        return
      }

      // MimeSourceオブジェクト取得
      try {
        fileData = super.readFile(directoryPath + fileName, false)
      } catch (se: any) {
        //メッセージコード
        let messageCode: string = ''
        messageCode = se.getMessageCode()

        SMSHeaderFooterManager.showInformation(context, messageCode)
        return
      }

      //ファイルサイズチェック
      if (!this.checkFileSize(context, directoryPath + fileName)) {
        return
      }

      // ファイルアップロードメッセージ生成
      let uploadMap: HashMap = new HashMap(2)
      uploadMap.put(SMSHashKeyConst.F_U_NMFILE, fileName)
      uploadMap.put(SMSHashKeyConst.F_U_FILELIST, fileData)

      //汎用分類マスタから取得
      // 検索条件の取得
      let hanyoBunruiShosaiCBMMsg: NativeMap = new HashMap()
      hanyoBunruiShosaiCBMMsg.put(
        YBMKKSCjfConst.CD_SUBSYSTEM_SHUBETSU,
        YBMKKSF626SLogic.CD_SUBSYSTEM_SHUBETSU_VALUE_BATCH,
      )
      hanyoBunruiShosaiCBMMsg.put(
        YBMKKSCjfConst.CD_DATASHUBETSU,
        YBMKKSF626SLogic.CD_DATASHUBETSU_VALUE_BATCH,
      )
      hanyoBunruiShosaiCBMMsg.put(YBMKKSCjfConst.CD_HANYO, '01')
      hanyoBunruiShosaiCBMMsg.put('fgRonrisakujo', '0')

      // CBSCBM共通Msgの生成
      let hanyoBunruiMsg: HashMap = new HashMap()
      // CBSCBM共通Msgに検索条件をセット
      hanyoBunruiMsg.put(
        YBMKKSF626SLogic.KEY_HASHMAP_HANYOBUNRUI_SHOSAI_MSG,
        hanyoBunruiShosaiCBMMsg,
      )

      // EJB call
      let outDataHanyo: HashMap = this.callEJB(
        context,
        event,
        YBMKKSF626SLogic.VAL_YCM_CBS_NAME,
        YBMKKSF626SLogic.COMMAND_HANYO_BUNRUI_ICHIRAN,
        hanyoBunruiMsg,
      )
      SMSCLLog.debug(outDataHanyo.toString())

      // イベントID、イベント名の取得
      let cdEventID: string = null!
      let nmEvent: string = null!
      if (outDataHanyo.get(SMSHashKeyConst.WARNING_MSG_KEY) == null) {
        let hanyoBubruiData: HashMap = outDataHanyo.get(
          SMSHashKeyConst.PARAM_KEY_DATA,
        ) as HashMap
        SMSCLLog.debug(hanyoBubruiData.toString())
        // 一覧データの取得
        let hanyoBunruiIchiranData: HashMap[] = hanyoBubruiData.get(
          YBMKKSF626SLogic.KEY_HASHMAP_HANYOBUNRUI_ICHIRAN_MSG,
        ) as HashMap[]

        // 検索結果が0件の場合エラー
        if (
          hanyoBunruiIchiranData == null ||
          hanyoBunruiIchiranData.length == 0
        ) {
          // [YCSCMNMSW056]検索が終了しましたが該当するデータが見つかりません。\n検索条件を見直してください。
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YCSCMNMSW056,
          )
          return
        } else {
          cdEventID = hanyoBunruiIchiranData[0].get(
            YBMKKSCjfConst.NM_NAIYO_1,
          ) as string
          nmEvent = hanyoBunruiIchiranData[0].get(
            YBMKKSCjfConst.NM_NAIYO_2,
          ) as string
        }
      }

      // 配賦区分
      let stHaifu: string = this.getStHaifu(context)

      // 配賦Msg生成
      let inData: HashMap = new HashMap(4)
      inData.put(SMSHashKeyConst.PARAM_MSG_FILEUPLOAD, uploadMap)
      inData.put(YBMKKSF626SLogic.CD_EVENT_ID_KEY, cdEventID)
      inData.put(YBMKKSF626SLogic.NM_EVENT_ID_KEY, nmEvent)
      inData.put(YBMKKSF626SLogic.KEY_ST_HAIFU, stHaifu)

      let dtNendo: string = this.getUserData(context, 'dtNendo').toString()
      inData.put(YBMKKSF626SLogic.USER_KEY_DT_NENDO, dtNendo)

      let outData: HashMap = this.callEJB(
        context,
        event,
        YBMKKSF626SLogic.VAL_CBS_NAME,
        YBMKKSF626SLogic.COMMAND_INCLUDE_HAIFU,
        inData,
      )

      let sysData: HashMap = null!
      let noShoriValue: string = null!

      // ユーザデータ取り出し
      if (outData.containsKey(SMSHashKeyConst.PARAM_KEY_DATA)) {
        sysData = outData.get(SMSHashKeyConst.PARAM_KEY_DATA) as HashMap
      } else {
        throw new SMSAppException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      if (
        (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
          SMSHashKeyConst.IS_WARNING,
        )
      ) {
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW271,
        )
        return
      }

      if (sysData.containsKey(YBMKKSF626SLogic.NO_SHORI_KEY)) {
        noShoriValue = sysData.get(YBMKKSF626SLogic.NO_SHORI_KEY) as string
      } else {
        throw new SMSAppException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      if (noShoriValue == null || noShoriValue.trim().equals('')) {
        throw new SMSAppException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // 正常終了時のメッセージ出力
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YBMKKSMSI029,
        [noShoriValue],
      )
    } catch (th: any) {
      // エラーアダプタ呼出し
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF620MLogic.fileUpload() end')
  }

  /**
   * 「システムユーザ検索」処理時の業務ロジック
   * GeneralSearch054.title=システムユーザ検索
   *
   * 検索条件部項目設定
   * GeneralSearch054.condition.1.labelValue=ユーザＩＤ
   * GeneralSearch054.condition.2.labelValue=従業員苗字
   * GeneralSearch054.condition.3.labelValue=従業員名前
   * GeneralSearch054.condition.4.labelValue=ﾏｽﾀ有効日付
   * GeneralSearch054.condition.5.labelValue=ﾏｽﾀ有効日以降
   * GeneralSearch054.condition.6.labelValue=氏名
   *
   * @param event			ＣＪＦイベントオブジェクト
   * @param context			ＣＪＦコンテキストオブジェクト
   * @param returnInfo		ＣＪＦ復帰情報オブジェクト
   * @exception Exception	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   */
  showGene054(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('showGene054 Logic start : ')

    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let panelData: JCFPanelData = current.getPanelData(
        SMSHeaderFooterManager.FRAME_MAIN,
      )

      SMSPanelInitDataHolder.getInstance().setSearchID('GeneralSearch054')

      let searchID: string = event.getEventAdditionalInfo().getActionID()
      SMSCLLog.debug(searchID)

      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl
      let unyo: string = loginInfo.getDtUnyo()

      let jouken: string[] = ['', '', '', unyo, '', '']

      let enableCons: boolean[] = [true, true, true, true, true, true]

      let literalCondition: List = new ArrayList(1)

      let cdKaisha: string = loginInfo.getCdKaisha()

      literalCondition.add(cdKaisha)

      //汎用検索呼び出し初期化処理
      this.geneSearchPrepare(
        event,
        context,
        jouken,
        enableCons,
        false,
        literalCondition,
      )

      // 親画面再描画抑制キーをセット
      this.putUserData(
        context,
        YBMKKSF626SLogic.VAL_USECASEID,
        YBMKKSCjfConst.KEY_SUPPRESS_BEFOREDISPLAY,
        YBMKKSCjfConst.KEY_SUPPRESS_BEFOREDISPLAY,
      )
    } catch (th: any) {
      //システムエラー画面へ遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('showGene054 Logic end : ')
  }

  /**
   * 「システムユーザ汎用検索戻り」処理時の業務ロジック
   * GeneralSearch021.title=システムユーザ検索
   *
   * 検索結果表示部項目設定
   * GeneralSearch054.result.1.headerTitle=ユーザＩＤ
   * GeneralSearch054.result.2.headerTitle=従業員苗字
   * GeneralSearch054.result.3.headerTitle=従業員名前
   * GeneralSearch054.result.4.headerTitle=氏名
   * GeneralSearch054.result.5.headerTitle=組織コードﾞ
   * GeneralSearch054.result.6.headerTitle=組織名称
   * GeneralSearch054.result.7.headerTitle=適用開始日
   * GeneralSearch054.result.8.headerTitle=従業員フラグ
   *
   * @param event			ＣＪＦイベントオブジェクト
   * @param context			ＣＪＦコンテキストオブジェクト
   * @param returnInfo		ＣＪＦ復帰情報オブジェクト
   * @exception Exception	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   */
  setGeneSearchSystemUser(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('setGeneSearchSystemUser Logic start : ')

    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let panelData: JCFPanelData = current.getPanelData(
        SMSHeaderFooterManager.FRAME_MAIN,
      )

      let txtCdTarget: JCFFieldStringData = panelData.getItemData(
        YBMKKSF626SLogic.ITEM_CD_TORIKOMISHA_ID,
      ) as JCFFieldStringData
      let txtNmTarget: JCFFieldStringData = panelData.getItemData(
        YBMKKSF626SLogic.ITEM_NM_TORIKOMISHA,
      ) as JCFFieldStringData

      //汎用検索画面からの戻り値を取得
      let list: ArrayList = super.getUserData(
        context,
        SMSHashKeyConst.PARAM_KEY_GENERALID,
        SMSHashKeyConst.GENE_SEARCH_RESULT,
      ) as ArrayList
      if (list != null && !list.isEmpty()) {
        txtCdTarget.setValue(list.get(0) as string)

        //従業員フラグの判定
        if ((list.get(7) as string).equals('1')) {
          txtNmTarget.setValue(
            (list.get(1) as string) + (list.get(2) as string),
          )
        } else {
          txtNmTarget.setValue(list.get(3) as string)
        }

        list.clear()
      }
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_CD_TORIKOMISHA_ID,
      )
      this.removeUserData(
        context,
        YBMKKSF626SLogic.VAL_USECASEID,
        SMSHashKeyConst.PARAM_KEY_GENERALID,
      )
    } catch (th: any) {
      //システムエラー画面へ遷移
      this.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('setGeneSearchSystemUser Logic end : ')
  }

  /**
   * 表示時の業務ロジック
   * 表示の処理を行う
   *
   * @param event					ＣＪＦイベントオブジェクト
   * @param context					ＣＪＦコンテキストオブジェクト
   * @param returnInfo				ＣＪＦ復帰情報オブジェクト
   * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   */
  view(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF620MLogicMLogic:view() start')
    try {
      //　フッタメッセージの初期化
      SMSHeaderFooterManager.initInformation(context)

      //　最大表示件数を取得
      let maxDisplayCount: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF626SLogic.MAX_DISPLAY_CNT_KEY,
      ) as string
      this.setQtSaidaiHyouji(context, maxDisplayCount)

      // 最大検索件数を取得
      let maxSelectCount: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF626SLogic.MAX_SELECT_CNT_KEY,
      ) as string
      this.setQtSaidaiKensaku(context, maxSelectCount)

      // 項目部品の取得
      let current: JCFScreenData = context.getCurrentScreenData()

      // 処理番号From
      let noShoriFrom: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_NO_SHORI_FROM,
      ) as JCFFieldStringData
      let noShoriFromVal: string = noShoriFrom.getValue()

      // 処理番号T0
      let noShoriTo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_NO_SHORI_TO,
      ) as JCFFieldStringData
      let noShoriToVal: string = noShoriTo.getValue()

      // 取込日FROM
      let fromDate: JCFFieldFilledDateData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_DT_TORIKOMI_FROM,
      ) as JCFFieldFilledDateData

      // 取込日TO
      let toDate: JCFFieldFilledDateData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_DT_TORIKOMI_TO,
      ) as JCFFieldFilledDateData

      // 取込者ID
      let cdTorikomishaId: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_CD_TORIKOMISHA_ID,
      ) as JCFFieldStringData
      let cdTorikomishaIdVal: string = cdTorikomishaId.getValue()

      // エラー有無
      let stError: string = this.getStError(context)

      // 配賦区分
      let stHaifu: string = this.getStHaifu1(context)

      // 処理番号入力チェック
      if (
        SMSCheckField.isValidString(noShoriFromVal) &&
        SMSCheckField.isValidString(noShoriToVal)
      ) {
        if (
          Integer.parseInt(noShoriFromVal) - Integer.parseInt(noShoriToVal) >
          0
        ) {
          //背景（エラー）色を設定
          noShoriFrom.setBackground(SMSColor.WARNING)
          //フォーカスを設定
          returnInfo.setFocus(
            SMSHeaderFooterManager.FRAME_MAIN,
            YBMKKSF626SLogic.ITEM_NO_SHORI_FROM,
          )
          //画面遷移制御
          returnInfo.cancelScreenTransition()
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YCSCMNMCW030,
            ['処理番号'],
          )
          return
        }
      }
      //背景（正常）色を設定
      noShoriFrom.setBackground(SMSColor.DEFAULT)

      // 日付入力チェック(取込日From)
      if (!this.isValidFilledDate(false, fromDate.getValue())) {
        //背景（エラー）色を設定
        fromDate.setBackground(SMSColor.WARNING)
        //フォーカスを設定
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF626SLogic.ITEM_DT_TORIKOMI_FROM,
        )
        //画面遷移制御
        returnInfo.cancelScreenTransition()
        //日付範囲外メッセージ出力
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCA104,
          super.getValidDatesMessage('取込日'),
        )
        return
      } else {
        fromDate.setBackground(SMSColor.DEFAULT)
      }

      // 日付入力チェック(取込日To)
      if (!this.isValidFilledDate(false, toDate.getValue())) {
        //背景（エラー）色を設定
        toDate.setBackground(SMSColor.WARNING)
        //フォーカスを設定
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF626SLogic.ITEM_DT_TORIKOMI_TO,
        )
        //画面遷移制御
        returnInfo.cancelScreenTransition()
        //日付範囲外メッセージ出力
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCA104,
          super.getValidDatesMessage('取込日'),
        )
        return
      } else {
        toDate.setBackground(SMSColor.DEFAULT)
      }

      // 取込日From
      let fromDateValue: string = null!

      // 取込日To
      let toDateValue: string = null!

      // 取込日Fromに入力がない場合
      if (fromDate.getValue().equals(YBMKKSF626SLogic.FIELD_DATE_NO_ENTRY)) {
        fromDateValue = ''
      } else {
        fromDateValue = fromDate.getValue()
      }

      // 取込日Toに入力がない場合
      if (toDate.getValue().equals(YBMKKSF626SLogic.FIELD_DATE_NO_ENTRY)) {
        toDateValue = ''
      } else {
        toDateValue = toDate.getValue()
      }

      // 日付チェック(項目間)
      if (
        !fromDateValue.equals('') &&
        !toDateValue.equals('') &&
        Integer.parseInt(fromDateValue) - Integer.parseInt(toDateValue) > 0
      ) {
        //背景（エラー）色を設定
        fromDate.setBackground(SMSColor.WARNING)
        toDate.setBackground(SMSColor.WARNING)
        //フォーカスを設定
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF626SLogic.ITEM_DT_TORIKOMI_FROM,
        )
        //画面遷移制御
        returnInfo.cancelScreenTransition()
        // メッセージの表示
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMCW030,
          ['取込日'],
        )
        return
      } else {
        fromDate.setBackground(SMSColor.DEFAULT)
        toDate.setBackground(SMSColor.DEFAULT)
      }

      //桁数のチェック
      //取込者ID
      if (
        cdTorikomishaIdVal.length > 0 &&
        !SMSCheckField.checkLength(cdTorikomishaIdVal, 8)
      ) {
        //背景（エラー）色を設定
        cdTorikomishaId.setBackground(SMSColor.WARNING)
        //フォーカスを設定
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF626SLogic.ITEM_CD_TORIKOMISHA_ID,
        )

        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCA016,
          ['取込者ID', '8'],
        )
        return
      } else {
        cdTorikomishaId.setBackground(SMSColor.DEFAULT)
      }

      // CBSに渡すデータを作成
      // EJB呼び出し
      let inData: HashMap = new HashMap()

      let headerMap: HashMap = new HashMap()

      headerMap.put(YBMKKSF626SLogic.KEY_NO_SHORI_FROM, noShoriFromVal)
      headerMap.put(YBMKKSF626SLogic.KEY_NO_SHORI_TO, noShoriToVal)
      if (!fromDateValue.equals('')) {
        headerMap.put(YBMKKSF626SLogic.KEY_DT_TORIKOMI_FROM, fromDateValue)
      }
      if (!toDateValue.equals('')) {
        headerMap.put(YBMKKSF626SLogic.KEY_DT_TORIKOMI_TO, toDateValue)
      }
      headerMap.put(YBMKKSF626SLogic.KEY_CD_TORIKOMISHA_ID, cdTorikomishaIdVal)
      headerMap.put(
        YBMKKSF626SLogic.KEY_DT_NENDO,
        this.getUserData(context, YBMKKSF626SLogic.KEY_DT_NENDO),
      )

      // 基準日を編集
      let nendo: number = 0
      nendo = Integer.parseInt(
        this.getUserData(context, YBMKKSF626SLogic.KEY_DT_NENDO).toString(),
      )

      let kijunnendo: string = null!

      kijunnendo = NativeString.valueOf(nendo + 1)

      headerMap.put(YBMKKSF626SLogic.KEY_DT_KIJUN, kijunnendo + '0331')
      headerMap.put(YBMKKSF626SLogic.KEY_ST_HAIFU, stHaifu)
      headerMap.put(YBMKKSF626SLogic.KEY_ST_ERROR, stError)
      inData.put(YBMKKSF626SLogic.KEY_RIREKI_HEADER, headerMap)

      let outData: HashMap = this.callEJB(
        context,
        event,
        YBMKKSF626SLogic.VAL_CBS_NAME,
        YBMKKSF626SLogic.COMMAND_GET_RIREKI,
        inData,
      )

      // エラーの有無
      if (
        (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
          SMSHashKeyConst.IS_SUCCESS,
        )
      ) {
        // callEJBが成功した場合の処理
        let rtnData: HashMap = outData.get(
          SMSHashKeyConst.PARAM_KEY_DATA,
        ) as HashMap
        this.refreshPanel(context, rtnData)
        super.putUserData(context, 'stHaifu', stHaifu)
      } else if (
        (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
          SMSHashKeyConst.IS_WARNING,
        )
      ) {
        // 警告時の場合
        // 業務データ取得
        let rtnData: HashMap = outData.get(
          SMSHashKeyConst.PARAM_KEY_DATA,
        ) as HashMap
        // ログイン情報取得
        let loginInfo: SMSLoginInfoImpl = rtnData.get(
          SMSHashKeyConst.PARAM_KEY_COMMON,
        ) as SMSLoginInfoImpl
        // エラー項目ID取得
        let cdErrorKomoku: string = loginInfo.getCdErrorKoumoku()

        // 取込者不正以外の場合
        if (
          !YBMKKSF626SLogic.KEY_CD_TORIKOMISHA_ID.equalsIgnoreCase(
            cdErrorKomoku,
          )
        ) {
          return
        }

        // 画面GUI部品取得
        let fieldErrorKoumoku: JCFFieldStringData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF626SLogic.ITEM_CD_TORIKOMISHA_ID,
        ) as JCFFieldStringData
        // 部品背景（エラー）色を設定
        fieldErrorKoumoku.setBackground(SMSColor.WARNING)
        // フォーカスを設定
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF626SLogic.ITEM_CD_TORIKOMISHA_ID,
        )

        // 画面GUI部品取得
        let fieldErrorKoumokuNm: JCFFieldStringData = current.getItemData(
          SMSHeaderFooterManager.FRAME_MAIN,
          YBMKKSF626SLogic.ITEM_NM_TORIKOMISHA,
        ) as JCFFieldStringData
        fieldErrorKoumokuNm.setValue('')
      }
    } catch (th: any) {
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF620MLogicMLogic:view() end')
  }

  /**
   * 現在選択されているエラー区分を返します。
   */
  private getStError(context: JCFContext): string {
    let current: JCFScreenData = context.getCurrentScreenData()
    // 全て
    let radioSubete: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF626SLogic.ITEM_SUBETE,
    ) as JCFToggleButtonData
    // 有り
    let radioAri: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF626SLogic.ITEM_ARI,
    ) as JCFToggleButtonData

    // 全ての場合
    if (radioSubete.getBooleanValue()) {
      return YBMKKSF626SLogic.VALUE_SUBETE

      // 有りの場合
    } else if (radioAri.getBooleanValue()) {
      return YBMKKSF626SLogic.VALUE_ARI

      // 無しの場合
    } else {
      return YBMKKSF626SLogic.VALUE_NASHI
    }
  }

  /**
   * Method refreshPanel  画面再表示処理
   * @param context
   * @param outData
   */
  private refreshPanel(context: JCFContext, outData: HashMap) {
    let spreadCnt: number = 0
    //画面GUI部品を取得
    let current: JCFScreenData = context.getCurrentScreenData()

    //画面GUI部品を取得
    let spread: JCFSpreadData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF626SLogic.ITEM_SPREAD,
    ) as JCFSpreadData
    let kensu: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF626SLogic.ITEM_KENSU,
    )
    let nmTorikomisha: JCFFieldStringData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF626SLogic.ITEM_NM_TORIKOMISHA,
    ) as JCFFieldStringData

    //　最大表示件数を取得
    let maxDisplayCount: string = SMSPropsInfos.getProperty(
      YBMKKSCjfConst.SUB_SYSTEM_ID,
      YBMKKSF626SLogic.MAX_DISPLAY_CNT_KEY,
    )
    this.setQtSaidaiHyouji(context, maxDisplayCount)

    // データを明細Spread部品にセット
    let detailMsgList: HashMap[] = outData.get(
      YBMKKSF626SLogic.KEY_RIREKI_DETAIL,
    ) as HashMap[]
    if (detailMsgList != null) {
      let count: number = detailMsgList.length
      if (count > Integer.parseInt(maxDisplayCount)) {
        spread.setRowCount(Integer.parseInt(maxDisplayCount))
        spreadCnt = Integer.parseInt(maxDisplayCount)
      } else {
        spread.setRowCount(count)
        spreadCnt = count
      }

      for (let i = 0; i < spreadCnt; i++) {
        spread.setRowHeaderCellValue(i, 0, NativeString.valueOf(i + 1))

        // 処理依頼番号
        let noShori: string = detailMsgList[i].get(
          YBMKKSF626SLogic.DETAIL_MSG_KEY_NO_SHORI,
        ) as string
        spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_SHORI_NO, noShori)

        // 年度
        let dtNendo: string = detailMsgList[i].get(
          YBMKKSF626SLogic.DETAIL_MSG_KEY_DT_NENDO,
        ) as string
        spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_NENDO, dtNendo)

        // ファイル名
        let nmFile: string = detailMsgList[i].get(
          YBMKKSF626SLogic.DETAIL_MSG_KEY_NM_FILE,
        ) as string
        spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_FILEMEI, nmFile)

        // 取込日
        let dtTorikomi: string = detailMsgList[i].get(
          YBMKKSF626SLogic.DETAIL_MSG_KEY_DT_TORIKOMI,
        ) as string
        dtTorikomi = SMSDateStringUtil.conversion(
          dtTorikomi,
          SMSDateStringUtil.YYYYMMDDHHmmssSSS,
        ).substring(0, 19)
        spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_TORIKOMIBI, dtTorikomi)

        // 取込者名
        let nmTorikomi: string = detailMsgList[i].get(
          YBMKKSF626SLogic.DETAIL_MSG_KEY_NM_TORIKOMI,
        ) as string
        spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_TORIKOMISHA, nmTorikomi)

        // エラー有無
        let stShubetsu: string = detailMsgList[i].get(
          YBMKKSF626SLogic.DETAIL_MSG_KEY_ST_ERROR,
        ) as string
        if (stShubetsu.equals(YBMKKSF626SLogic.VALUE_ARI)) {
          spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_ERRORUMU, '有り')
          spread.setCellEditable(i, YBMKKSF626SLogic.SPREAD_SHOSAI, true)
        } else {
          spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_ERRORUMU, '無し')
          spread.setCellEditable(i, YBMKKSF626SLogic.SPREAD_SHOSAI, false)
        }

        // 正常件数
        let nuSeijo: string = detailMsgList[i].get(
          YBMKKSF626SLogic.DETAIL_MSG_KEY_QT_SEIJO,
        ) as string
        spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_SEIJO, nuSeijo)

        // 異常件数
        let nuIjo: string = detailMsgList[i].get(
          YBMKKSF626SLogic.DETAIL_MSG_KEY_QT_IJO,
        ) as string
        spread.setCellValue(i, YBMKKSF626SLogic.SPREAD_IJO, nuIjo)
      }

      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl
      if (loginInfo != null) {
        if (loginInfo.getQtKensaku() != null) {
          count = Integer.parseInt(loginInfo.getQtKensaku())
        }
      }

      if (count > Integer.parseInt(maxDisplayCount)) {
        //件数を表示
        kensu.setVisible(true)
        kensu.setValue(NativeString.valueOf(maxDisplayCount))
      } else {
        //件数を表示
        kensu.setVisible(true)
        kensu.setValue(NativeString.valueOf(count))
      }

      if (count == 0) {
        //結果メッセージ表示
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSW056,
        )
      } else {
        //結果メッセージ表示
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSI020,
          [count + ''],
        )
      }
    }

    // ヘッダにセット
    let header: HashMap = outData.get(
      YBMKKSF626SLogic.KEY_RIREKI_HEADER,
    ) as HashMap
    nmTorikomisha.setValue('') //クリア
    if (header != null) {
      if (header.get(YBMKKSF626SLogic.KEY_NM_TORIKOMISHA) != null) {
        nmTorikomisha.setValue(
          header.get(YBMKKSF626SLogic.KEY_NM_TORIKOMISHA) as string,
        )
      }
    }
  }

  /** 読込開始時配賦区分の値を返します。
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @return String 配賦区分の値
   */
  private getStHaifu(context: JCFContext): string {
    let current: JCFScreenData = context.getCurrentScreenData()
    let jigyoTorokuHiritsu: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF626SLogic.ST_JIGYOTOUROKU1,
    ) as JCFToggleButtonData
    if (jigyoTorokuHiritsu.getBooleanValue()) {
      return YBMKKSF626SLogic.ST_HAIFU_JIGYO_TOROKU_HIRITSU
    } else {
      return YBMKKSF626SLogic.ST_HAIFU_LINE_HIRITSU
    }
  }

  /** 履歴取得時配賦区分の値を返します。
   * @param context コンテキスト
   * @param returnInfo 業務ロジック復帰情報クラス
   * @return String 配賦区分の値
   */
  private getStHaifu1(context: JCFContext): string {
    let current: JCFScreenData = context.getCurrentScreenData()
    let jigyoTorokuHiritsu: JCFToggleButtonData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF626SLogic.ST_JIGYOTOUROKU2,
    ) as JCFToggleButtonData
    if (jigyoTorokuHiritsu.getBooleanValue()) {
      return YBMKKSF626SLogic.ST_HAIFU_JIGYO_TOROKU_HIRITSU
    } else {
      return YBMKKSF626SLogic.ST_HAIFU_LINE_HIRITSU
    }
  }

  /**
   * 明細時の業務ロジック
   * 明細の処理を行う
   *
   * @param event					ＣＪＦイベントオブジェクト
   * @param context					ＣＪＦコンテキストオブジェクト
   * @param returnInfo				ＣＪＦ復帰情報オブジェクト
   * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   */
  detailData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF626SLogic:detailData() start')

    try {
      //　フッタメッセージの初期化
      SMSHeaderFooterManager.initInformation(context)

      let info: JCFSpreadAdditionalInfo = event
        .getEventAdditionalInfo()
        .getAdditionalInfo() as JCFSpreadAdditionalInfo
      let row: number = info.getCellPosition().row

      let current: JCFScreenData =
        context.getCurrentScreenData() as JCFScreenData
      let spread: JCFSpreadData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF626SLogic.ITEM_SPREAD,
      ) as JCFSpreadData
      let dtNendo: string = this.getUserData(
        context,
        YBMKKSF626SLogic.KEY_DT_NENDO,
      ).toString()

      // 処理番号
      this.putUserData(
        context,
        YBMKKSF626SLogic.KEY_NO_SHORI,
        spread.getCellValue(row, YBMKKSF626SLogic.SPREAD_SHORI_NO).toString(),
      )
      // 年度
      this.putUserData(context, YBMKKSF626SLogic.KEY_DT_NENDO, dtNendo)
      // 配賦区分
      this.putUserData(
        context,
        YBMKKSF626SLogic.KEY_ST_HAIFU,
        super.getUserData(context, 'stHaifu'),
      )
    } catch (th: any) {
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF626SLogic:detailData() end')
  }

  /**
   * Method preShowBack.	エラー詳細画面から戻る場合の処理ロジック
   * @param event
   * @param context
   * @param returnInfo
   */
  preShowBack(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF626SLogic:preShowBack() start')
    try {
      this.initHeaderFooter(event, context, returnInfo)
    } catch (th: any) {
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF626SLogic:preShowBack() end')
  }

  /**
   * Method initHeaderFooter.	ヘッダとフッタの初期化
   * @param event
   * @param context
   * @throws JCFIllegalStateException
   * @throws JCFIllegalArgumentException
   */
  private initHeaderFooter(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    // ヘーダー情報設定
    SMSHeaderFooterManager.initHeader(event, context)
    let screenName: string = SMSPropsInfos.getProperty(
      YBMKKSCjfConst.SUB_SYSTEM_ID,
      YBMKKSF626SLogic.SCREEN_NAME_KEY,
    ) as string
    SMSHeaderFooterManager.setHeaderTitle(
      context,
      screenName,
      YBMKKSF626SLogic.GAMEN_ID,
    )

    // フッタボタンの設定
    let buttonLabels: string[] = YBMKKSF626SLogic.FOOTER_LABEL
    SMSHeaderFooterManager.initFooter(context, buttonLabels)
    SMSHeaderFooterManager.setAllFooterButtonEnabled(context, false)
    SMSHeaderFooterManager.setEnabledFooterButton(
      context,
      SMSHeaderFooterManager.ITEM_FUNCBTN1,
      true,
    )

    // フォーカス設定（処理番号From）
    returnInfo.setFocus(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF626SLogic.ITEM_FILE_DIALOG,
    )

    // メッセージ領域をクリアする。
    SMSHeaderFooterManager.initInformation(context)

    let fgSeigen: string = this.getUserData(context, 'fgRiyouSeigen').toString()
    if (fgSeigen.equals('1')) {
      // 読込開始ボタンを活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN1,
        false,
      )
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW271,
      )
    } else {
      // 読込開始ボタンを非活性化する
      SMSHeaderFooterManager.setEnabledFooterButton(
        context,
        SMSHeaderFooterManager.ITEM_FUNCBTN1,
        true,
      )
    }
  }

  protected setUseCaseID() {
    this.useCaseID = YBMKKSF626SLogic.USECASE_ID
  }
}
