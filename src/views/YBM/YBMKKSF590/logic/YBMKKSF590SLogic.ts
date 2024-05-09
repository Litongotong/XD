import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import { Integer } from '@/lib/native/lang/Integer'
import { NativeString } from '@/lib/native/lang/String'
import { HashMap } from '@/lib/native/util/HashMap'
import { Vector } from '@/lib/native/util/Vector'
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase'
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import type { SMSJCFSpreadData } from '@/lib/sms/sol/sys/cjf/SMSJCFSpreadData'
import { SMSJFTreeColumnData } from '@/lib/sms/sol/sys/cjf/SMSJFTreeColumnData'
import type { SMSJFTreeData } from '@/lib/sms/sol/sys/cjf/SMSJFTreeData'
import { SMSJFTreeNode } from '@/lib/sms/sol/sys/cjf/SMSJFTreeNode'
import { SMSAppException } from '@/lib/sms/sol/sys/SMSAppException'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import type { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { SMSRuntimeException } from '@/lib/sms/sol/sys/SMSRuntimeException'
import { createArrayByInstance } from '@/utils/array/1D'
import { create2DStringArray } from '@/utils/array/2D'

export default class YBMKKSF590SLogic extends SMSCjfLogicBase {
  private static USECASE: string = 'YBMKKSF590'

  /** 画面ID */
  private static GAMEN_ID: string = 'YBMKKSF590S'

  /** サブシステムID */
  private static SUB_SYSTEM_ID: string = 'YBMKKS'

  /** CBS名 */
  static CBS_NAME: string = 'YBMKKSCBS'

  /** ユーザデータキー */
  static SYS_DATA: string = 'sys_data'

  /** フレームID ヘッダフレーム */
  private static FRAME_HEAD: string = 'FLM_YBM_SUB_HEAD'

  /** フレームID ボディフレーム */
  private static FRAME_BODY: string = 'FLM_YBM_SUB_BODY'

  /** フレームID フッタフレーム */
  private static FRAME_FOOT: string = 'FLM_YBM_SUB_FOOT'

  /** 画面引継ぎ領域キー 起動モード */
  private static SEARCH_ST_MODE: string = 'stMode'

  /** アイテムID 科目１(左) */
  private static ITEM_CD_KAMOKU1_1: string = 'cdKamoku1_1'

  /** アイテムID 科目コード */
  private static ITEM_CD_KAMOKU: string = 'cdKamoku'

  /** アイテムID 科目名 */
  private static ITEM_NM_KAMOKU: string = 'nmKamoku'

  /** アイテムID 科目体系 */
  private static ITEM_NO_KAISOLEVEL: string = 'noKaisolevel'

  /** アイテムID ツリー部品 */
  private static ITEM_TREE: string = 'tree'

  /** アイテムID 科目名略式 */
  private static ITEM_NM_KAMOKU_RYAKU: string = 'nmKamokuRyaku'

  /** アイテムID 補助科目コード */
  private static ITEM_CD_HOJOKAMOKU: string = 'cdHojokamoku'

  /** アイテムID 補助科目名 */
  private static ITEM_NM_HOJOKAMOKU: string = 'nmHojokamoku'

  /** アイテムID 科目１(右) */
  private static ITEM_CD_KAMOKU1_2: string = 'cdKamoku1_2'

  /** アイテムID スプレッド部品 */
  private static ITEM_SPREAD: string = 'spread'

  /** アイテムID 科目検索ボタン */
  private static ITEM_KAMOKU_KENSAkU: string = 'body_button01'

  /** アイテムID 次へボタン */
  private static ITEM_NEXT: string = 'body_button02'

  /** アイテムID 前へボタン */
  private static ITEM_PREVIOUS: string = 'body_button03'

  /** アイテムID 補助科目表示ボタン */
  private static ITEM_HOJOKAMOKU_HYOJI: string = 'body_button04'

  /** アイテムID 補助科目検索ボタン */
  private static ITEM_HOJOKAMOKU_KENSAKU: string = 'body_button05'

  /** アイテムID タイトル */
  private static ITEM_TITLE: string = 'subtitle'

  /** アイテムID 科目確定ボタン */
  private static ITEM_KAMOKU_KAKUTEI: string = 'kakutei_upper'

  /** アイテムID 補助科目確定ボタン */
  private static ITEM_HOJOKAMOKU_KAKUTEI: string = 'kakutei_lower'

  /** アイテムID 閉じるボタン */
  private static ITEM_CLOSE: string = 'close_ybm_search'

  /** アイテムID メッセージ表示域 */
  private static ITEM_MESSAGE: string = 'errorMessage'

  /** 画面名取得キー */
  private static SCREEN_NAME: string = 'YBMKKSF590S_SCREEN_NAME'

  /** 最大表示数取得キー */
  private static MAX_DISPLAY_CNT: string = 'YBMKKSF590S_MAX_DISPLAY_CNT'

  /** 最大検索数取得キー */
  private static MAX_SELECT_CNT: string = 'YBMKKSF590S_MAX_SELECT_CNT'

  /** 科目検索Msgキー 科目検索条件CBMMsg */
  private static CONDITON_MSG_KEY: string = 'kamokuKensakuJokenCBMMsg'

  /** 科目検索Msgキー 科目CBMMsg */
  private static KAMOKU_MSG_KEY: string = 'kamokuKensakuCBMMsgList'

  /** 科目検索Msgキー 補助科目検索CBMMsg */
  private static HOJOKAMOKU_MSG_KEY: string = 'hojoKamokuKensakuCBMMsgList'

  /** 科目検索条件CBMMsgキー 補助科目検索フラグ */
  private static FG_KAMOKU_KEY: string = 'fgHojoKamoku'

  /** 画面引継ぎ領域キー 科目コード */
  private static CD_KAMOKU_KEY: string = 'cdKamoku'

  /** 画面引継ぎ領域キー 上位科目コード */
  private static CD_JOIKAMOKU_KEY: string = 'cdJoikamoku'

  /** 画面引継ぎ領域キー 階層レベル */
  private static NO_KAISOLEVEL_KEY: string = 'noKaisoLevel'

  /** 画面引継ぎ領域キー 科目名 */
  private static NM_KAMOKU_KEY: string = 'nmKamoku'

  /** 画面引継ぎ領域キー 科目名(略) */
  private static NM_KAMOKU_RYAKU_KEY: string = 'nmKamokuRyaku'

  /** 画面引継ぎ領域キー 補助科目コード */
  private static CD_HOJOKAMOKU_KEY: string = 'cdHojokamoku'

  /** 画面引継ぎ領域キー 補助科目名 */
  private static NM_HOJOKAMOKU_KEY: string = 'nmHojokamoku'

  /** 画面引継ぎ領域キー 科目１ */
  private static CD_KAMOKU1_KEY: string = 'cdKamoku1'

  /** 画面引継ぎ領域キー 補助科目名(略) */
  private static NM_HOJOKAMOKU_RYAKU_KEY: string = 'nmHojokamokuRyaku'

  /** 画面引継ぎ領域キー 科目１略式名称 */
  private static NM_KAMOKU1_RYAKU_KEY: string = 'nmKamoku1Ryaku'

  /** 画面引継ぎ領域キー 科目５略式名称 */
  private static NM_KAMOKU5_RYAKU_KEY: string = 'nmKamoku5Ryaku'

  /** コマンド名(Verb) 科目取得 */
  private static COMMAND_GET_KAMOKU: string =
    'YBMKamokuKensakuCBSHandler.getKamoku'

  /** コマンド名(Verb) 補助科目取得 */
  private static COMMAND_GET_HOJOKAMOKU: string =
    'YBMKamokuKensakuCBSHandler.getHojoKamoku'

  /** ツリー部　インデックス ツリー表示文字列 */
  private static TREE_VIEW: number = 0

  /** ツリー部 インデックス 科目コード */
  private static TREE_CD_KAMOKU: number = 1

  /** ツリー部 インデックス 親コード */
  private static TREE_CD_JOI_KAMOKU: number = 2

  /** ツリー部 インデックス 階層レベル */
  private static TREE_NO_KAISOLEVEL: number = 3

  /** ツリー部 インデックス 科目名称 */
  private static TREE_NM_KAMOKU: number = 4

  /** ツリー部 インデックス 科目略称 */
  private static TREE_NM_KAMOKU_RYAKU: number = 5

  /** ツリー部 カラム数 */
  private static TREE_COLUMN_WIDTH: number = 6

  /** スプレッド部 インデックス 選択 */
  private static SPREAD_SELECT: number = 0

  /** スプレッド部 インデックス 補助科目コード */
  private static SPREAD_CD_HOJOKAMOKU: number = 1

  /** スプレッド部 インデックス 補助科目名(略) */
  private static SPREAD_NM_HOJOKAMOKU_RYAKU: number = 2

  /** スプレッド部 インデックス 科目コード */
  private static SPREAD_CD_KAMOKU: number = 3

  /** スプレッド部 インデックス 科目名(略) */
  private static SPREAD_NM_KAMOKU_RYAKU: number = 4

  /** スプレッド部 インデックス 科目１(略) */
  private static SPREAD_NM_KAMOKU1_RYAKU: number = 5

  /** スプレッド部 インデックス 科目５(略) */
  private static SPREAD_NM_KAMOKU5_RYAKU: number = 6

  /** スプレッド部 インデックス 補助科目名 */
  private static SPREAD_NM_HOJOKAMOKU: number = 7

  /** スプレッド部 インデックス 科目名 */
  private static SPREAD_NM_KAMOKU: number = 8

  /** 最下位階層レベル */
  private static LOWEST_LEVEL: string = '6'

  /** 次へ、前へ検索結果格納キー */
  private static SEARCH_RESULTS_KEY: string = 'results_key'

  /** 次へ、前へ検索インデックスキー */
  private static SEARCH_INDEX_KEY: string = 'index_key'

  /** 次へ、前へ検索キーワードキー */
  private static SEARCH_KEYWORD_KEY: string = 'keyword_key'

  /** 次へ、前へ検索 店群略称 キー */
  private static SEARCH_NM_KAMOKU_RYAKU_KEY: string = 'nmKamokuRyaku_key'

  /** 補助科目検索Msg エラーメッセージコード */
  private static MSG_CD_ERR_MESSAGE: string = 'cdErrMessage'

  /** 補助科目検索Msg エラーメッセージの埋め文字 */
  private static MSG_IF_ERR_MSG_PARAMS: string = 'ifErrMsgParamsList'

  /** ユーザ領域キー 起動モード */
  private static KIDO_MODE: string = 'kidoMode'

  //-----コンボ中身動的化対応
  /** 汎用分類条件Msgキー名称 サブシステム種別コード */
  private static CD_KAISHA_KEY: string = 'cdKaisha'

  /** 汎用分類条件Msgキー名称 サブシステム種別コード */
  private static CD_SUBSYSTEM_SHUBETU_KEY: string = 'cdSubsystemShubetu'

  /** 汎用分類条件Msgキー名称 データ種別コード */
  private static CD_DATASHUBETSU_KEY: string = 'cdDatashubetsu'

  /** 汎用分類条件Msgデータ サブシステム種別コード */
  private static CD_SUBSYSTEM_SHUBETU_DATA_Kamoku: string = '100'

  /** 汎用分類条件Msgデータ データ種別コード */
  private static CD_DATASHUBETSU_DATA_Kamoku: string = '00224'

  /** 汎用分類CBMMsgキー 汎用分類条件Msg */
  private static HANYO_BUNRUI_JOKEN_MSG: string = 'hanyoBunruiCBMMsg'

  /** 汎用分類結果Msgキー 汎用分類検索結果MsgList */
  private static HANYO_BUNRUI_KEKKA_MSG_LIST: string = 'hanyoBunruiKekkaMsgList'

  /** コマンド(verb) 初期化 */
  private static COMMAND_AREAKUBUN: string = 'YBMKamokuKensakuCBSHandler.init'

  /** 汎用分類結果Msgキー名称 サブシステム種別コード */
  private static CD_HANYO_KEY: string = 'cdHanyo'

  /** 汎用分類結果Msgキー名称 データ種別コード */
  private static NM_NAIYO1_KEY: string = 'nmNaiyo1'

  // 科目集計CTRLコード選択可能フラグ
  private static FG_CTRL_SELECTABLE: string = '04'

  /**
   * 初期表示イベントハンドラです。
   */
  beforeDisplay(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF590SLogic.beforeDisplay() start')

    try {
      // 変数宣言
      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl

      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let title: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_HEAD,
        YBMKKSF590SLogic.ITEM_TITLE,
      )
      let next: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NEXT,
      )
      let previous: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_PREVIOUS,
      )
      let kamokuKensaku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_KAMOKU_KENSAkU,
      )
      let hojokamokuHyoji: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_HOJOKAMOKU_HYOJI,
      )
      let hojokamokuKensaku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_HOJOKAMOKU_KENSAKU,
      )
      let tree: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_TREE,
      )
      let spread: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_SPREAD,
      )
      let kamokuKakutei: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_KAMOKU_KAKUTEI,
      )
      let hojokamokuKakutei: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_HOJOKAMOKU_KAKUTEI,
      )
      let close: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_CLOSE,
      )
      let cdKamoku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_CD_KAMOKU,
      )
      let nmKamoku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NM_KAMOKU,
      )
      let cdKamoku1_1: JCFComboBoxData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_CD_KAMOKU1_1,
      ) as JCFComboBoxData
      let noKaisolevel: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NO_KAISOLEVEL,
      )
      let cdKamoku1_2: JCFComboBoxData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_CD_KAMOKU1_2,
      ) as JCFComboBoxData
      let cdHojokamoku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_CD_HOJOKAMOKU,
      )
      let nmHojokamoku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NM_HOJOKAMOKU,
      )
      let nmKamokuRyaku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NM_KAMOKU_RYAKU,
      )

      // ヘッダ情報の設定
      let screenName: string = SMSPropsInfos.getProperty(
        YBMKKSF590SLogic.SUB_SYSTEM_ID,
        YBMKKSF590SLogic.SCREEN_NAME,
      ) as string
      title.setValue(screenName)

      let maxDisplayCnt: string = SMSPropsInfos.getProperty(
        YBMKKSF590SLogic.SUB_SYSTEM_ID,
        YBMKKSF590SLogic.MAX_DISPLAY_CNT,
      ) as string
      loginInfo.setQtSaidaiHyouji(maxDisplayCnt)

      let maxSelectCnt: string = SMSPropsInfos.getProperty(
        YBMKKSF590SLogic.SUB_SYSTEM_ID,
        YBMKKSF590SLogic.MAX_SELECT_CNT,
      ) as string
      loginInfo.setQtSaidaiKensaku(maxSelectCnt)

      // 起動モードの取得
      let stMode: string = null!
      stMode = context.getSucceedData(YBMKKSF590SLogic.SEARCH_ST_MODE) as string
      if (stMode == null) {
        SMSCLLog.debug('起動パラメタがnullです。')
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // 起動モード保存
      this.putUserData(context, YBMKKSF590SLogic.KIDO_MODE, stMode)

      // フッタボタンラベル設定
      kamokuKakutei.setValue('科目確定')
      hojokamokuKakutei.setValue('補助科目確定')
      close.setValue('閉じる')

      //---------------------------------------------------------------
      //科目区分のコンボの中身を生成
      //---------------------------------------------------------------
      //コンボボックス
      let ComboDataElement: JCFSelectableElement[] = null!
      ComboDataElement = this.getHanyobunrui(
        context,
        event,
        YBMKKSF590SLogic.CD_SUBSYSTEM_SHUBETU_DATA_Kamoku,
        YBMKKSF590SLogic.CD_DATASHUBETSU_DATA_Kamoku,
      )
      let ComboDataElement2: JCFSelectableElement[] = createArrayByInstance(
        JCFSelectableElement,
        ComboDataElement.length,
      )
      ComboDataElement2 = ComboDataElement

      cdKamoku1_1.setValue(ComboDataElement2) //科目１（左側）
      cdKamoku1_2.setValue(ComboDataElement2) //科目２（右側）

      // 次へ、前へボタン非活性化
      next.setEnabled(false)
      previous.setEnabled(false)

      // ボタンの活性・非活性設定
      if (stMode.equals('01')) {
        // 科目設定、科目　科目確定(科目集計CTRLコードはNG)
        kamokuKensaku.setEnabled(true)
        hojokamokuHyoji.setEnabled(false)
        hojokamokuKensaku.setEnabled(false)
        kamokuKakutei.setEnabled(true)
        hojokamokuKakutei.setEnabled(false)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
        nmKamoku.setEnabled(true)
        cdHojokamoku.setEnabled(false)
        nmHojokamoku.setEnabled(false)
        cdKamoku1_2.setEnabled(false)
        nmKamokuRyaku.setEnabled(false)
      } else if (stMode.equals('02')) {
        // 科目設定、科目→補助科目or補助科目単独 補助科目確定
        kamokuKensaku.setEnabled(true)
        hojokamokuHyoji.setEnabled(false)
        hojokamokuKensaku.setEnabled(true)
        kamokuKakutei.setEnabled(false)
        hojokamokuKakutei.setEnabled(true)
        nmKamoku.setEnabled(true)
        cdHojokamoku.setEnabled(true)
        nmHojokamoku.setEnabled(true)
        cdKamoku1_2.setEnabled(true)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
        nmKamokuRyaku.setEnabled(false)
      } else if (stMode.equals('03')) {
        // 科目確定(科目集計CTRLコードはNG)・補助科目確定
        kamokuKensaku.setEnabled(true)
        hojokamokuHyoji.setEnabled(false)
        hojokamokuKensaku.setEnabled(true)
        kamokuKakutei.setEnabled(true)
        hojokamokuKakutei.setEnabled(true)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
        cdKamoku.setEnabled(true)
        nmKamoku.setEnabled(true)
        cdKamoku1_1.setEnabled(true)
        noKaisolevel.setEnabled(true)
        nmKamokuRyaku.setEnabled(false)
      } else if (stMode.equals('04')) {
        // 科目集計CTRLコードのみ選択可
        kamokuKensaku.setEnabled(true)
        hojokamokuHyoji.setEnabled(false)
        hojokamokuKensaku.setEnabled(false)
        kamokuKakutei.setEnabled(true)
        hojokamokuKakutei.setEnabled(false)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
        cdKamoku.setEnabled(true)
        nmKamoku.setEnabled(true)
        cdKamoku1_1.setEnabled(true)
        noKaisolevel.setEnabled(true)
        cdKamoku1_2.setEnabled(false)
        cdHojokamoku.setEnabled(false)
        nmHojokamoku.setEnabled(false)
      } else {
        // 不正パラメタ
        SMSCLLog.debug('起動パラメタが異常値です。')
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }
    } catch (th: any) {
      // エラーアダプタ呼出し
      //			th.printStackTrace();
      SMSCLLog.debug('YBMKKSF590SLogic:beforeDisplay() error')
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF590SLogic.beforeDisplay() end')
  }

  /**
   * 科目検索ボタン押下イベントハンドラです。
   */
  findKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF590SLogic.findKamoku() start')

    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let next: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NEXT,
      )
      let previous: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_PREVIOUS,
      )
      let message: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_MESSAGE,
      )
      let hojoKamokuHyoji: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_HOJOKAMOKU_HYOJI,
      )

      //メッセージクリア
      message.setValue('')

      // 特約店検索Msg
      let inData: HashMap = this.prepareRequest(context)

      // inDataがnullなら必須入力チェックエラー
      if (inData == null) {
        return
      }

      // ツリー内容をクリア
      tree.setRoot(null!)

      // 共有領域リセット
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY)
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY)
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY)

      // 次へ、前へボタン非活性化
      next.setEnabled(false)
      previous.setEnabled(false)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF590SLogic.CBS_NAME,
        YBMKKSF590SLogic.COMMAND_GET_KAMOKU,
        inData,
      )

      // 戻り値nullならシステムエラー(共通部品でチェック済み？)
      if (outData == null) {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      let sysData: HashMap = null!
      if (outData.containsKey(YBMKKSF590SLogic.SYS_DATA)) {
        sysData = outData.get(YBMKKSF590SLogic.SYS_DATA) as HashMap
      } else {
        // 戻り値nullならシステムエラー
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // エラーフラグを取得
      let cdErrMessage: string = sysData.get(
        YBMKKSF590SLogic.MSG_CD_ERR_MESSAGE,
      ) as string

      // 業務エラー処理
      if (cdErrMessage != null) {
        SMSCLLog.debug(
          'YBMKKSF590SLogic.showData:cdErrMessage：' + cdErrMessage,
        )

        if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW003)) {
          // 検索結果０件
          let params: string[] = sysData.get(
            YBMKKSF590SLogic.MSG_IF_ERR_MSG_PARAMS,
          ) as string[]
          if (params == null) {
            message.setValue(
              context.getMessageUtil().getMessage(SMSMessageConst.SMSCMNMCW003),
            )
          } else if (params.length == 1) {
            message.setValue(
              context
                .getMessageUtil()
                .getMessage(SMSMessageConst.SMSCMNMCW003, params[0]),
            )
          } else {
            message.setValue(
              context
                .getMessageUtil()
                .getMessage(SMSMessageConst.SMSCMNMCW003, params),
            )
          }
          return
        } else if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW001)) {
          // 最大表示件数オーバー
          let params: string[] = sysData.get(
            YBMKKSF590SLogic.MSG_IF_ERR_MSG_PARAMS,
          ) as string[]
          if (params == null) {
            message.setValue(
              context.getMessageUtil().getMessage(SMSMessageConst.SMSCMNMCW001),
            )
          } else if (params.length == 1) {
            message.setValue(
              context
                .getMessageUtil()
                .getMessage(SMSMessageConst.SMSCMNMCW001, params[0]),
            )
          } else {
            message.setValue(
              context
                .getMessageUtil()
                .getMessage(SMSMessageConst.SMSCMNMCW001, params),
            )
          }
          return
        }
      }

      let kamokuList: HashMap[] = null!
      if (sysData.containsKey(YBMKKSF590SLogic.KAMOKU_MSG_KEY)) {
        kamokuList = sysData.get(YBMKKSF590SLogic.KAMOKU_MSG_KEY) as HashMap[]
      } else {
        // 検索結果がなければシステムエラー(ここもチェック済みか・・・？)
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      //ツリー作成
      this.buildTree(context, kamokuList)

      // ツリー活性化
      tree.setEnabled(true)

      // 次へ、前へボタン活性化
      next.setEnabled(true)
      previous.setEnabled(true)

      let stMode: string = null!
      stMode = this.getUserData(context, YBMKKSF590SLogic.KIDO_MODE) as string

      if (stMode == null) {
        stMode = ''
      }

      if (stMode.equals('02') || stMode.equals('03')) {
        // 製品表示ボタン活性化
        hojoKamokuHyoji.setEnabled(true)
      }

      let count: string = new Integer(kamokuList.length).toString()
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.YCSCMNMSI020, count),
      )

      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY)
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY)
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_KEYWORD_KEY)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF590SLogic.findKamoku() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF590SLogic.findKamoku() end')
  }

  /**
   * 次へボタン押下イベントハンドラです。
   */
  nextKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF590SLogic.nextKamoku() start')

    let current: JCFScreenData = context.getCurrentScreenData()
    let nmKamokuRyaku: JCFItemData = current.getItemData(
      YBMKKSF590SLogic.FRAME_BODY,
      YBMKKSF590SLogic.ITEM_NM_KAMOKU_RYAKU,
    )
    let tree: SMSJFTreeData = current.getItemData(
      YBMKKSF590SLogic.FRAME_BODY,
      YBMKKSF590SLogic.ITEM_TREE,
    ) as SMSJFTreeData
    let next: JCFItemData = current.getItemData(
      YBMKKSF590SLogic.FRAME_BODY,
      YBMKKSF590SLogic.ITEM_NEXT,
    )
    let previous: JCFItemData = current.getItemData(
      YBMKKSF590SLogic.FRAME_BODY,
      YBMKKSF590SLogic.ITEM_PREVIOUS,
    )
    let message: JCFItemData = current.getItemData(
      YBMKKSF590SLogic.FRAME_FOOT,
      YBMKKSF590SLogic.ITEM_MESSAGE,
    )

    // メッセージクリア
    message.setValue('')

    let nmValue: string = null!
    nmValue = nmKamokuRyaku.getValue()

    // データビーンはnullを返さないはずなので恐らく不要だが、nullなら空文字列を設定
    if (nmValue == null) {
      nmValue = ''
    }

    // 検索条件が未入力の場合打ち切り
    if (nmValue.trim().equals('')) {
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.SMSCMNMCW138, '科目略称'),
      )

      // 念のため共有領域リセット
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY)
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY)
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY)
      return
    }

    // 前回検索条件
    let nmValueObj: any = this.getUserData(
      context,
      YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY,
    )

    let same: boolean = false

    if (nmValue.equals(nmValueObj as string)) {
      same = true
    }

    let results: SMSJFTreeNode[] = null!
    let index: number = 0

    // ユーザ領域から前回検索結果を取得する。
    let object: any = this.getUserData(
      context,
      YBMKKSF590SLogic.SEARCH_RESULTS_KEY,
    )

    if (same && object != null) {
      // 検索条件が前回と同じ場合、前回検索結果を再利用
      results = object as SMSJFTreeNode[]
      index = (
        this.getUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY) as Integer
      ).intValue()
      index++
      tree.setCursorNode(results[index])
      previous.setEnabled(true)
      if (index == results.length - 1) {
        // 最終データなら非活性
        next.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF590SLogic.FRAME_BODY,
          YBMKKSF590SLogic.ITEM_PREVIOUS,
        )
      }
      this.putUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY, results)
      this.putUserData(
        context,
        YBMKKSF590SLogic.SEARCH_INDEX_KEY,
        new Integer(index),
      )

      SMSCLLog.debug('YBMKKSF590SLogic.nextKamoku() end')
      return
    }
    // 前回検索結果が無ければ検索する。
    results = tree.search(YBMKKSF590SLogic.TREE_NM_KAMOKU_RYAKU, nmValue, false)
    // ----↓↓ 2006/09/13 BSC)鮫島 ↓↓-------
    // ボタンの活性化状態を一旦リセット
    next.setEnabled(true)
    previous.setEnabled(true)
    // ----↑↑ 2006/09/13 BSC)鮫島 ↑↑-------
    if (results != null && results.length != 0) {
      tree.setCursorNode(results[index])
      this.putUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY, results)
      this.putUserData(
        context,
        YBMKKSF590SLogic.SEARCH_INDEX_KEY,
        new Integer(index),
      )
      this.putUserData(
        context,
        YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY,
        nmValue,
      )
      previous.setEnabled(false)
      if (results.length == 1) {
        // 長さ1なら次へ、前へボタン非活性
        next.setEnabled(false)
        previous.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF590SLogic.FRAME_BODY,
          YBMKKSF590SLogic.ITEM_TREE,
        )
        SMSCLLog.debug('YBMKKSF590SLogic.nextKamoku() end')
        return
      }
      if (index == results.length - 1) {
        // 最終データなら非活性
        next.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF590SLogic.FRAME_BODY,
          YBMKKSF590SLogic.ITEM_PREVIOUS,
        )
        SMSCLLog.debug('YBMKKSF590SLogic.nextKamoku() end')
        return
      }
    } else {
      // 検索0件
      this.putUserData(
        context,
        YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY,
        nmValue,
      )
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.SMSCMNMCW003, '科目'),
      )
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY as any)
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY as any)
      this.removeUserData(
        context,
        YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY as any,
      )
      return
    }

    SMSCLLog.debug('YBMKKSF590SLogic.nextKamoku() end')
  }

  /**
   * 前へボタン押下イベントハンドラです。
   */
  previousKamoku(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF590SLogic.previousKamoku() start')

    let current: JCFScreenData = context.getCurrentScreenData()
    let nmKamokuRyaku: JCFItemData = current.getItemData(
      YBMKKSF590SLogic.FRAME_BODY,
      YBMKKSF590SLogic.ITEM_NM_KAMOKU_RYAKU,
    )
    let tree: SMSJFTreeData = current.getItemData(
      YBMKKSF590SLogic.FRAME_BODY,
      YBMKKSF590SLogic.ITEM_TREE,
    ) as SMSJFTreeData
    let next: JCFItemData = current.getItemData(
      YBMKKSF590SLogic.FRAME_BODY,
      YBMKKSF590SLogic.ITEM_NEXT,
    )
    let previous: JCFItemData = current.getItemData(
      YBMKKSF590SLogic.FRAME_BODY,
      YBMKKSF590SLogic.ITEM_PREVIOUS,
    )
    let message: JCFItemData = current.getItemData(
      YBMKKSF590SLogic.FRAME_FOOT,
      YBMKKSF590SLogic.ITEM_MESSAGE,
    )

    // メッセージクリア
    message.setValue('')

    let nmValue: string = null!
    nmValue = nmKamokuRyaku.getValue()

    // データビーンはnullを返さないはずなので恐らく不要だが、nullなら空文字列を設定
    if (nmValue == null) {
      nmValue = ''
    }

    if (nmValue.trim().equals('')) {
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.SMSCMNMCW138, '科目略称'),
      )

      // 念のため共有領域リセット
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY as any)
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY as any)
      this.removeUserData(
        context,
        YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY as any,
      )
      return
    }

    // 前回検索条件
    let nmValueObj: any = this.getUserData(
      context,
      YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY,
    )

    let same: boolean = false

    if (nmValue.equals(nmValueObj as string)) {
      same = true
    }

    let results: SMSJFTreeNode[] = null!
    let index: number = 0

    // ユーザ領域から前回検索結果を取得する。
    let object: any = this.getUserData(
      context,
      YBMKKSF590SLogic.SEARCH_RESULTS_KEY,
    )

    if (same && object != null) {
      results = object as SMSJFTreeNode[]
      index = (
        this.getUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY) as Integer
      ).intValue()
      index--
      tree.setCursorNode(results[index])
      next.setEnabled(true)
      if (index == 0) {
        // 最前データなら非活性
        previous.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF590SLogic.FRAME_BODY,
          YBMKKSF590SLogic.ITEM_NEXT,
        )
      }
      this.putUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY, results)
      this.putUserData(
        context,
        YBMKKSF590SLogic.SEARCH_INDEX_KEY,
        new Integer(index),
      )

      SMSCLLog.debug('YBMKKSF590SLogic.nextKamoku() end')
      return
    }
    // 前回検索結果が無ければ検索する。
    results = tree.search(YBMKKSF590SLogic.TREE_NM_KAMOKU_RYAKU, nmValue, false)
    // ----↓↓ 2006/09/13 BSC)鮫島 ↓↓-------
    // ボタンの活性化状態を一旦リセット
    next.setEnabled(true)
    previous.setEnabled(true)
    // ----↑↑ 2006/09/13 BSC)鮫島 ↑↑-------
    if (results != null && results.length != 0) {
      tree.setCursorNode(results[index])
      this.putUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY, results)
      this.putUserData(
        context,
        YBMKKSF590SLogic.SEARCH_INDEX_KEY,
        new Integer(index),
      )
      this.putUserData(
        context,
        YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY,
        nmValue,
      )
      previous.setEnabled(false)

      // 前へボタンは非活性なので次へボタンにフォーカス設定
      returnInfo.setFocus(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NEXT,
      )
      if (results.length == 1) {
        // 長さ1なら次へボタン非活性
        next.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF590SLogic.FRAME_BODY,
          YBMKKSF590SLogic.ITEM_TREE,
        )
        SMSCLLog.debug('YBMKKSF590SLogic.previousTebgun() end')
        return
      }
    } else {
      // 検索0件
      this.putUserData(
        context,
        YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY,
        nmValue,
      )
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.SMSCMNMCW003, '科目'),
      )
      this.removeUserData(
        context,
        YBMKKSF590SLogic.SEARCH_RESULTS_KEY as string,
      )
      this.removeUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY as string)
      this.removeUserData(
        context,
        YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY as string,
      )
      return
    }

    SMSCLLog.debug('YBMKKSF590SLogic.previousKamoku() end')
  }

  /**
   * 補助科目表示ボタン押下イベントハンドラです。
   */
  viewHojokamoku(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF590SLogic.viewHojokamoku() start')
    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let message: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_MESSAGE,
      )
      message.setValue('')

      let node: SMSJFTreeNode = null!

      node = tree.getCursorNode()

      if (node == null) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '勘定科目'),
        )
        return
      }
      let noKaisolevel: string = node.getColumnObject(
        YBMKKSF590SLogic.TREE_NO_KAISOLEVEL,
      ) as string
      if (!noKaisolevel.equals(YBMKKSF590SLogic.LOWEST_LEVEL)) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '勘定科目'),
        )
        return
      }
      let cdKamoku: string = null!
      cdKamoku = node.getColumnObject(YBMKKSF590SLogic.TREE_CD_KAMOKU) as string

      // EJB呼び出し準備
      let inData: HashMap = new HashMap()
      let joken: HashMap = new HashMap()

      // 科目コード
      joken.put(YBMKKSF590SLogic.CD_KAMOKU_KEY, cdKamoku)

      // ツリー検索後の補助科目検索はフラグ"0"を設定。
      joken.put(YBMKKSF590SLogic.FG_KAMOKU_KEY, '0')

      inData.put(YBMKKSF590SLogic.CONDITON_MSG_KEY, joken)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF590SLogic.CBS_NAME,
        YBMKKSF590SLogic.COMMAND_GET_HOJOKAMOKU,
        inData,
      )

      this.setDataToSpread(context, returnInfo, outData)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF590SLogic.viewHojokamoku error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF590SLogic.viewHojokamoku() end')
  }

  /**
   * 補助科目検索ボタン押下イベントハンドラです。
   */
  findHojokamoku(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF590SLogic.findHojokamoku() start')
    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdHojokamoku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_CD_HOJOKAMOKU,
      )
      let nmHojokamoku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NM_HOJOKAMOKU,
      )
      let cdkamoku1_2: JCFComboBoxData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_CD_KAMOKU1_2,
      ) as JCFComboBoxData
      let message: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_MESSAGE,
      )

      message.setValue('')

      // 入力チェック
      if (
        cdHojokamoku.getValue().trim().equals('') &&
        nmHojokamoku.getValue().trim().equals('')
      ) {
        // 補助科目コード、補助科目名(苗字)、補助科目名(カナ)ともに未入力の場合はエラー
        SMSCLLog.debug('コード、名称ともに未入力')
        let param: string = '補助科目コード、補助科目名'
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW026, param),
        )
        return
      }

      // リクエストデータ生成
      let inData: HashMap = new HashMap()
      let joken: HashMap = new HashMap()

      // 補助科目コード
      if (!cdHojokamoku.getValue().trim().equals('')) {
        joken.put(YBMKKSF590SLogic.CD_HOJOKAMOKU_KEY, cdHojokamoku.getValue())
      }

      // 補助科目名
      if (!nmHojokamoku.getValue().trim().equals('')) {
        joken.put(YBMKKSF590SLogic.NM_HOJOKAMOKU_KEY, nmHojokamoku.getValue())
      }

      // 科目１(右)
      let cdKamoku1Value: string = null!
      cdKamoku1Value = super.getComboID(cdkamoku1_2)
      if (!'0'.equals(cdKamoku1Value)) {
        joken.put(YBMKKSF590SLogic.CD_KAMOKU1_KEY, cdKamoku1Value)
      }

      // 補助科目検索の場合は"1"を設定する。
      joken.put(YBMKKSF590SLogic.FG_KAMOKU_KEY, '1')

      inData.put(YBMKKSF590SLogic.CONDITON_MSG_KEY, joken)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF590SLogic.CBS_NAME,
        YBMKKSF590SLogic.COMMAND_GET_HOJOKAMOKU,
        inData,
      )

      // スプレッド部へ表示
      this.setDataToSpread(context, returnInfo, outData)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF590SLogic.findHojokamoku() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF590SLogic.findHojokamoku() end')
  }

  /**
   * 科目確定ボタン押下イベントハンドラです。
   */
  kakuteiUpper(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF590SLogic.kakuteiUpper() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let message: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_MESSAGE,
      )
      let selected: SMSJFTreeNode = null!
      let stMode: string = null!
      selected = tree.getCursorNode()
      if (selected == null) {
        // 未選択　エラーメッセージ表示
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '科目'),
        )
        returnInfo.cancelScreenTransition()
        return
      }

      let node: SMSJFTreeNode = null!

      node = tree.getCursorNode()

      if (node == null) {
        return
      }

      stMode = this.getUserData(context, YBMKKSF590SLogic.KIDO_MODE) as string

      let noKaisolevel: string = node.getColumnObject(
        YBMKKSF590SLogic.TREE_NO_KAISOLEVEL,
      ) as string

      // ------- 2006/08/21 BSC)鮫島↓↓モード04の時のみ科目集計CTRLコードを選択可能とするように修正↓↓--------
      // ------- 2006/07/24 BSC)鮫島↓↓科目集計CTLコードも選択可能に修正↓↓------
      if (
        !noKaisolevel.equals(YBMKKSF590SLogic.LOWEST_LEVEL) &&
        !stMode.equals(YBMKKSF590SLogic.FG_CTRL_SELECTABLE)
      ) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '勘定科目'),
        )
        SMSCLLog.debug('YBMKKSF590SLogic.kakuteiUpper() error')
        returnInfo.cancelScreenTransition()
        return
      } else if (
        noKaisolevel.equals(YBMKKSF590SLogic.LOWEST_LEVEL) &&
        stMode.equals(YBMKKSF590SLogic.FG_CTRL_SELECTABLE)
      ) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '科目内部集計コード'),
        )
        SMSCLLog.debug('YBMKKSF590SLogic.kakuteiUpper() error')
        returnInfo.cancelScreenTransition()
        return
      }
      // ------- 2006/07/24 BSC)鮫島↑↑科目集計CTLコードも選択可能に修正↑↑------
      // ------- 2006/08/21 BSC)鮫島↑↑モード04の時のみ科目集計CTRLコードを選択可能とするように修正↑↑--------

      // 画面引継ぎ領域へデータ格納
      let objects: string[] = selected.getColumnObjects() as string[]
      context.putSucceedData(
        YBMKKSF590SLogic.CD_KAMOKU_KEY,
        objects[YBMKKSF590SLogic.TREE_CD_KAMOKU],
      )
      context.putSucceedData(
        YBMKKSF590SLogic.CD_JOIKAMOKU_KEY,
        objects[YBMKKSF590SLogic.TREE_CD_JOI_KAMOKU],
      )
      context.putSucceedData(
        YBMKKSF590SLogic.NO_KAISOLEVEL_KEY,
        objects[YBMKKSF590SLogic.TREE_NO_KAISOLEVEL],
      )
      context.putSucceedData(
        YBMKKSF590SLogic.NM_KAMOKU_KEY,
        objects[YBMKKSF590SLogic.TREE_NM_KAMOKU],
      )
      context.putSucceedData(
        YBMKKSF590SLogic.NM_KAMOKU_RYAKU_KEY,
        objects[YBMKKSF590SLogic.TREE_NM_KAMOKU_RYAKU],
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF590SLogic.kakuteiUpper error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF590SLogic.kakuteiUpper() end')
  }

  /**
   * 補助科目確定ボタン押下イベントハンドラです。
   */
  kakuteiLower(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF590SLogic.kakuteiLower() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let message: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_MESSAGE,
      )

      let count: number = 0
      let selectedRow: number = 0
      for (let i = 0; i < spread.getRowCount(); i++) {
        if (spread.getCellBooleanValue(i, YBMKKSF590SLogic.SPREAD_SELECT)) {
          count++
          selectedRow = i
        }
      }

      if (count == 0) {
        // 未選択
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '補助科目'),
        )
        SMSCLLog.debug('YBMKKSF590SLogic.kakuteiLower() error')
        returnInfo.cancelScreenTransition()
        return
      } else if (count > 1) {
        // 複数選択
        message.setValue(
          context.getMessageUtil().getMessage(SMSMessageConst.YBMYHSMCW013),
        )
        SMSCLLog.debug('YBMKKSF590SLogic.kakuteiLower() error')
        returnInfo.cancelScreenTransition()
        return
      }

      // 画面引継ぎ領域へデータ格納
      context.putSucceedData(
        YBMKKSF590SLogic.CD_HOJOKAMOKU_KEY,
        spread
          .getCellValue(selectedRow, YBMKKSF590SLogic.SPREAD_CD_HOJOKAMOKU)
          .trim(),
      )
      context.putSucceedData(
        YBMKKSF590SLogic.NM_HOJOKAMOKU_RYAKU_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF590SLogic.SPREAD_NM_HOJOKAMOKU_RYAKU,
        ),
      )
      context.putSucceedData(
        YBMKKSF590SLogic.CD_KAMOKU_KEY,
        spread
          .getCellValue(selectedRow, YBMKKSF590SLogic.SPREAD_CD_KAMOKU)
          .trim(),
      )
      context.putSucceedData(
        YBMKKSF590SLogic.NM_KAMOKU_RYAKU_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF590SLogic.SPREAD_NM_KAMOKU_RYAKU,
        ),
      )
      context.putSucceedData(
        YBMKKSF590SLogic.NM_HOJOKAMOKU_KEY,
        spread.getCellValue(selectedRow, YBMKKSF590SLogic.SPREAD_NM_HOJOKAMOKU),
      )
      context.putSucceedData(
        YBMKKSF590SLogic.NM_KAMOKU_KEY,
        spread.getCellValue(selectedRow, YBMKKSF590SLogic.SPREAD_NM_KAMOKU),
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF590SLogic.kakuteiLower() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF590SLogic.kakuteiLower() end')
  }

  /**
   * 閉じるボタン押下イベントハンドラです。
   */
  closeYbmSearch(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF590SLogic.closeYbmSearch() start')
    super.removeUserData(context, YBMKKSF590SLogic.USECASE)
    SMSCLLog.debug('YBMKKSF590SLogic.closeYbmSearch() end')
  }

  /**
   * リクエスト用のHashMapを生成します。
   *
   */
  private prepareRequest(context: JCFContext): HashMap {
    SMSCLLog.debug('YBMKKSF590SLogic.prepareRequest() start')

    // 特約店検索Msg
    let inData: HashMap = new HashMap()

    try {
      // データビーンの取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdKamoku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_CD_KAMOKU,
      )
      let nmKamoku: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NM_KAMOKU,
      )
      let cdKamoku1: JCFComboBoxData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_CD_KAMOKU1_1,
      ) as JCFComboBoxData
      let kaisolevel: JCFComboBoxData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NO_KAISOLEVEL,
      ) as JCFComboBoxData
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let message: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_MESSAGE,
      )

      if (
        ''.equals(cdKamoku.getValue().trim()) &&
        ''.equals(nmKamoku.getValue().trim())
      ) {
        SMSCLLog.debug('コード、名称ともに未入力')
        let param: string = '科目コード、科目名'
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW026, param),
        )
        return null!
      }

      // 科目検索条件CBMMsg
      let joken: HashMap = new HashMap()
      // 科目コード
      if (!''.equals(cdKamoku.getValue())) {
        joken.put(YBMKKSF590SLogic.CD_KAMOKU_KEY, cdKamoku.getValue())
      }
      // 科目名
      if (!''.equals(nmKamoku.getValue())) {
        joken.put(YBMKKSF590SLogic.NM_KAMOKU_KEY, nmKamoku.getValue())
      }

      // 科目１
      let cdKamoku1Value: string = null!
      cdKamoku1Value = super.getComboID(cdKamoku1)
      if (!'0'.equals(cdKamoku1Value)) {
        joken.put(YBMKKSF590SLogic.CD_KAMOKU1_KEY, cdKamoku1Value)
      }

      // 科目体系
      let noKaisolevelValue: string = null!
      noKaisolevelValue = super.getComboID(kaisolevel)
      if (!'0'.equals(noKaisolevelValue)) {
        joken.put(YBMKKSF590SLogic.NO_KAISOLEVEL_KEY, noKaisolevelValue)
      }

      inData.put(YBMKKSF590SLogic.CONDITON_MSG_KEY, joken)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF590SLogic.prepareRequest() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF590SLogic.prepareRequest() end')
    return inData
  }

  /**
   * ツリー構造を構築します。
   */
  private buildTree(context: JCFContext, kamokuList: HashMap[]) {
    SMSCLLog.debug('YBMKKSF590SLogic.buildTree() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let nmKamokuRyaku: JCFFieldStringData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_NM_KAMOKU_RYAKU,
      ) as JCFFieldStringData

      nmKamokuRyaku.setEnabled(true)

      let dummy: string[] = ['', '', '', '', '', '']

      let root: SMSJFTreeNode = new SMSJFTreeNode(dummy)
      tree.setRoot(root)

      let objects: string[][] = create2DStringArray(
        kamokuList.length,
        YBMKKSF590SLogic.TREE_COLUMN_WIDTH,
      )

      let node: SMSJFTreeNode = null!
      let parent: SMSJFTreeNode = null!
      let results: SMSJFTreeNode[] = null!
      for (let i = 0; i < kamokuList.length; i++) {
        //ツリー表示部
        objects[i][YBMKKSF590SLogic.TREE_VIEW] =
          (kamokuList[i].get(YBMKKSF590SLogic.CD_KAMOKU_KEY) as string) +
          ' ' +
          (kamokuList[i].get(YBMKKSF590SLogic.NM_KAMOKU_RYAKU_KEY) as string)
        // 科目コード
        objects[i][YBMKKSF590SLogic.TREE_CD_KAMOKU] = kamokuList[i].get(
          YBMKKSF590SLogic.CD_KAMOKU_KEY,
        ) as string
        // 親コード
        objects[i][YBMKKSF590SLogic.TREE_CD_JOI_KAMOKU] = kamokuList[i].get(
          YBMKKSF590SLogic.CD_JOIKAMOKU_KEY,
        ) as string
        // 階層レベル
        objects[i][YBMKKSF590SLogic.TREE_NO_KAISOLEVEL] = kamokuList[i].get(
          YBMKKSF590SLogic.NO_KAISOLEVEL_KEY,
        ) as string
        //				// 表示順
        //				objects[i][YBMKKSF590SLogic.TREE_NO_HYOJI] = kamokuList[i].get(YBMKKSF590SLogic.NO_HYOJI_KEY) as string;
        // 科目名
        objects[i][YBMKKSF590SLogic.TREE_NM_KAMOKU] = kamokuList[i].get(
          YBMKKSF590SLogic.NM_KAMOKU_KEY,
        ) as string
        // 科目略称
        objects[i][YBMKKSF590SLogic.TREE_NM_KAMOKU_RYAKU] = kamokuList[i].get(
          YBMKKSF590SLogic.NM_KAMOKU_RYAKU_KEY,
        ) as string

        if (objects[i][YBMKKSF590SLogic.TREE_NO_KAISOLEVEL].equals('2')) {
          // 階層レベルが2の場合はrootノードの子とする。
          node = new SMSJFTreeNode(objects[i])
          root.add(node)
        } else {
          node = new SMSJFTreeNode(objects[i])
          results = tree.search(
            YBMKKSF590SLogic.TREE_CD_KAMOKU,
            objects[i][YBMKKSF590SLogic.TREE_CD_JOI_KAMOKU],
            true,
          )
          if (results.length != 0) {
            parent = results[0]
            parent.add(node)
          } else {
            SMSCLLog.debug('YBMKKSF590SLogic.buildTree() error')
            SMSCLLog.debug('ツリー構築に失敗しました。')
            throw new SMSRuntimeException(
              context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
            )
          }
        }
      }

      let columnInfoVec: Vector = new Vector()
      // ツリーコンポーネントの幅より2ポイント小さく設定。
      columnInfoVec.add(new SMSJFTreeColumnData(0, 414, 'ツリー表示部'))

      // ツリー表示部以外は幅を0に設定。とりあえず列名は入れておく。
      columnInfoVec.add(new SMSJFTreeColumnData(1, 0, '科目コード'))
      columnInfoVec.add(new SMSJFTreeColumnData(2, 0, '上位科目コード'))
      columnInfoVec.add(new SMSJFTreeColumnData(3, 0, '階層レベル'))
      columnInfoVec.add(new SMSJFTreeColumnData(4, 0, '科目名'))
      columnInfoVec.add(new SMSJFTreeColumnData(5, 0, '科目略称'))
      tree.setColumnInfoVec(columnInfoVec)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF590SLogic.buildTree error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF590SLogic.buildTree() end')
  }

  /**
   * HashMapからスプレッド部へデータをセットします。
   */
  private setDataToSpread(
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    outData: HashMap,
  ) {
    SMSCLLog.debug('YBMKKSF590SLogic.setDataToSpread start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let message: JCFItemData = current.getItemData(
        YBMKKSF590SLogic.FRAME_FOOT,
        YBMKKSF590SLogic.ITEM_MESSAGE,
      )

      if (outData == null) {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      let sysData: HashMap = null!
      if (outData.containsKey(YBMKKSF590SLogic.SYS_DATA)) {
        sysData = outData.get(YBMKKSF590SLogic.SYS_DATA) as HashMap
      } else {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // エラーフラグを取得
      let cdErrMessage: string = sysData.get(
        YBMKKSF590SLogic.MSG_CD_ERR_MESSAGE,
      ) as string

      if (cdErrMessage != null) {
        SMSCLLog.debug(
          'YBMKKSF590SLogic.setDataToSpread:cdErrMessage：' + cdErrMessage,
        )

        if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW003)) {
          // 検索結果０件
          let params: string[] = sysData.get(
            YBMKKSF590SLogic.MSG_IF_ERR_MSG_PARAMS,
          ) as string[]
          if (params == null) {
            message.setValue(
              context.getMessageUtil().getMessage(SMSMessageConst.SMSCMNMCW003),
            )
          } else if (params.length == 1) {
            message.setValue(
              context
                .getMessageUtil()
                .getMessage(SMSMessageConst.SMSCMNMCW003, params[0]),
            )
          } else {
            message.setValue(
              context
                .getMessageUtil()
                .getMessage(SMSMessageConst.SMSCMNMCW003, params),
            )
          }
          // スプレッド内容をクリア
          spread.removeAllRow()
          this.removeUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY)
          this.removeUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY)
          this.removeUserData(
            context,
            YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY,
          )

          return
        } else if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW001)) {
          // 最大表示件数オーバー
          let params: string[] = sysData.get(
            YBMKKSF590SLogic.MSG_IF_ERR_MSG_PARAMS,
          ) as string[]
          if (params == null) {
            message.setValue(
              context.getMessageUtil().getMessage(SMSMessageConst.SMSCMNMCW001),
            )
          } else if (params.length == 1) {
            message.setValue(
              context
                .getMessageUtil()
                .getMessage(SMSMessageConst.SMSCMNMCW001, params[0]),
            )
          } else {
            message.setValue(
              context
                .getMessageUtil()
                .getMessage(SMSMessageConst.SMSCMNMCW001, params),
            )
          }
          // スプレッド内容をクリア
          spread.removeAllRow()
          this.removeUserData(context, YBMKKSF590SLogic.SEARCH_RESULTS_KEY)
          this.removeUserData(context, YBMKKSF590SLogic.SEARCH_INDEX_KEY)
          this.removeUserData(
            context,
            YBMKKSF590SLogic.SEARCH_NM_KAMOKU_RYAKU_KEY,
          )

          return
        }
      }

      let hojoKamokuList: HashMap[] = null!
      if (sysData.containsKey(YBMKKSF590SLogic.HOJOKAMOKU_MSG_KEY)) {
        hojoKamokuList = sysData.get(
          YBMKKSF590SLogic.HOJOKAMOKU_MSG_KEY,
        ) as HashMap[]
      } else {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      spread.setRowCount(hojoKamokuList.length)
      for (let i = 0; i < hojoKamokuList.length; i++) {
        // 選択状態
        spread.setCellValue(i, YBMKKSF590SLogic.SPREAD_SELECT, false)

        // 補助科目コード
        if (
          hojoKamokuList[i].containsKey(YBMKKSF590SLogic.CD_HOJOKAMOKU_KEY) &&
          hojoKamokuList[i].get(YBMKKSF590SLogic.CD_HOJOKAMOKU_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF590SLogic.SPREAD_CD_HOJOKAMOKU,
            hojoKamokuList[i].get(YBMKKSF590SLogic.CD_HOJOKAMOKU_KEY) as string,
          )
        }
        // 補助科目略式名称
        if (
          hojoKamokuList[i].containsKey(
            YBMKKSF590SLogic.NM_HOJOKAMOKU_RYAKU_KEY,
          ) &&
          hojoKamokuList[i].get(YBMKKSF590SLogic.NM_HOJOKAMOKU_RYAKU_KEY) !=
            null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF590SLogic.SPREAD_NM_HOJOKAMOKU_RYAKU,
            hojoKamokuList[i].get(
              YBMKKSF590SLogic.NM_HOJOKAMOKU_RYAKU_KEY,
            ) as string,
          )
        }
        // 科目コード
        if (
          hojoKamokuList[i].containsKey(YBMKKSF590SLogic.CD_KAMOKU_KEY) &&
          hojoKamokuList[i].get(YBMKKSF590SLogic.CD_KAMOKU_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF590SLogic.SPREAD_CD_KAMOKU,
            hojoKamokuList[i].get(YBMKKSF590SLogic.CD_KAMOKU_KEY) as string,
          )
        }
        // 科目略式名称
        if (
          hojoKamokuList[i].containsKey(YBMKKSF590SLogic.NM_KAMOKU_RYAKU_KEY) &&
          hojoKamokuList[i].get(YBMKKSF590SLogic.NM_KAMOKU_RYAKU_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF590SLogic.SPREAD_NM_KAMOKU_RYAKU,
            hojoKamokuList[i].get(
              YBMKKSF590SLogic.NM_KAMOKU_RYAKU_KEY,
            ) as string,
          )
        }
        // 科目１
        if (
          hojoKamokuList[i].containsKey(
            YBMKKSF590SLogic.NM_KAMOKU1_RYAKU_KEY,
          ) &&
          hojoKamokuList[i].get(YBMKKSF590SLogic.NM_KAMOKU1_RYAKU_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF590SLogic.SPREAD_NM_KAMOKU1_RYAKU,
            hojoKamokuList[i].get(
              YBMKKSF590SLogic.NM_KAMOKU1_RYAKU_KEY,
            ) as string,
          )
        }
        // 科目５
        if (
          hojoKamokuList[i].containsKey(
            YBMKKSF590SLogic.NM_KAMOKU5_RYAKU_KEY,
          ) &&
          hojoKamokuList[i].get(YBMKKSF590SLogic.NM_KAMOKU5_RYAKU_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF590SLogic.SPREAD_NM_KAMOKU5_RYAKU,
            hojoKamokuList[i].get(
              YBMKKSF590SLogic.NM_KAMOKU5_RYAKU_KEY,
            ) as string,
          )
        }
      }
      let count: string = new Integer(hojoKamokuList.length).toString()
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.YCSCMNMSI020, count),
      )

      // スプレッド活性化
      spread.setEnabled(true)

      // フォーカス設定
      returnInfo.setFocus(
        YBMKKSF590SLogic.FRAME_BODY,
        YBMKKSF590SLogic.ITEM_SPREAD,
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF590SLogic.setDataToSpread error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF590SLogic.setDataToSpread end')
  }

  protected setUseCaseID() {
    this.useCaseID = YBMKKSF590SLogic.USECASE
  }

  /**
   * 汎用分類マスタより取得したデータをコンボで返します
   */
  private getHanyobunrui(
    context: JCFContext,
    event: JCFEvent,
    subSystemShubetuData: string,
    dataShubetsuData: string,
  ): JCFSelectableElement[] {
    //コンボボックス
    let ComboDataElement: JCFSelectableElement[] = null!
    try {
      // 変数宣言
      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl
      //会社コードの取得
      let cdKaisha: string = loginInfo.getCdKaisha()
      // EJB呼び出し準備
      let inData: HashMap = new HashMap(1)

      // 汎用分類マスタの検索条件(汎用分類マスタを検索しない場合は長さ0の配列)
      let hanyoBunruiJokenMsg: HashMap = new HashMap(1)

      hanyoBunruiJokenMsg.put(YBMKKSF590SLogic.CD_KAISHA_KEY, cdKaisha)
      hanyoBunruiJokenMsg.put(
        YBMKKSF590SLogic.CD_SUBSYSTEM_SHUBETU_KEY,
        subSystemShubetuData,
      )
      hanyoBunruiJokenMsg.put(
        YBMKKSF590SLogic.CD_DATASHUBETSU_KEY,
        dataShubetsuData,
      )
      inData.put(YBMKKSF590SLogic.HANYO_BUNRUI_JOKEN_MSG, hanyoBunruiJokenMsg)

      // EJB呼び出し
      let outData: HashMap = new HashMap(0)
      try {
        outData = this.callEJB(
          context,
          event,
          YBMKKSF590SLogic.CBS_NAME,
          YBMKKSF590SLogic.COMMAND_AREAKUBUN,
          inData,
        )
      } catch (ta: any) {
        //				ta.printStackTrace();
        super.callErrorAdapter(context, ta)
      }

      //戻りヘッダ情報の取得
      let rtnData: HashMap = outData.get(
        SMSHashKeyConst.PARAM_KEY_DATA,
      ) as HashMap

      //汎用分類結果Msg取得
      let haifuHiritsuKubun: HashMap[] = null!
      if (rtnData.containsKey(YBMKKSF590SLogic.HANYO_BUNRUI_KEKKA_MSG_LIST)) {
        haifuHiritsuKubun = rtnData.get(
          YBMKKSF590SLogic.HANYO_BUNRUI_KEKKA_MSG_LIST,
        ) as HashMap[]
      } else {
        throw new SMSAppException(SMSMessageConst.YCSCMNMSE015)
      }

      // nullチェック
      if (haifuHiritsuKubun == null) {
        throw new SMSAppException(SMSMessageConst.YCSCMNMSE015)
      }

      // 0件チェック
      if (haifuHiritsuKubun.length == 0) {
        throw new SMSAppException(SMSMessageConst.YCSCMNMSE015)
      }
      //コンボボックス
      ComboDataElement = createArrayByInstance(
        JCFSelectableElement,
        haifuHiritsuKubun.length,
      )

      //汎用分類結果Msgの数分、処理を繰り返す
      for (let i = 0; i < haifuHiritsuKubun.length; i++) {
        //配賦比率区分取得
        let cdHanyoStr: string = haifuHiritsuKubun[i].get(
          YBMKKSF590SLogic.CD_HANYO_KEY,
        ) as string //汎用コード内容１
        let cdHanyoInt: number = Integer.valueOf(cdHanyoStr).intValue() //汎用コード内容１

        //				if(cdHanyoStr.equals("00")){
        //					ComboDataElement[i] = new JCFSelectableElement("", "", true);
        //					continue;
        //				}

        let nmNaiyo1Str: string = haifuHiritsuKubun[i].get(
          YBMKKSF590SLogic.NM_NAIYO1_KEY,
        ) as string //内容１
        let nmNaiyo1Text: string =
          NativeString.valueOf(cdHanyoInt) + '.' + nmNaiyo1Str

        ComboDataElement[i] = new JCFSelectableElement(
          nmNaiyo1Text,
          cdHanyoStr,
          false,
        )
      }
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF600SLogic.getHanyobunrui error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    return ComboDataElement
  }
}
