import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { Integer } from '@/lib/native/lang/Integer'
import { HashMap } from '@/lib/native/util/HashMap'
import { Vector } from '@/lib/native/util/Vector'
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase'
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import type { SMSJCFSpreadData } from '@/lib/sms/sol/sys/cjf/SMSJCFSpreadData'
import { SMSJFTreeColumnData } from '@/lib/sms/sol/sys/cjf/SMSJFTreeColumnData'
import type { SMSJFTreeData } from '@/lib/sms/sol/sys/cjf/SMSJFTreeData'
import { SMSJFTreeNode } from '@/lib/sms/sol/sys/cjf/SMSJFTreeNode'
import { SMSAppException } from '@/lib/sms/sol/sys/SMSAppException'
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField'
import { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { SMSRuntimeException } from '@/lib/sms/sol/sys/SMSRuntimeException'
import { create2DStringArray } from '@/utils/array/2D'

export default class YBMKKSF610SLogic extends SMSCjfLogicBase {
  /** ユースケースID */
  private static USECASE: string = 'YBMKKSF610'

  /** 画面ID */
  private static GAMEN_ID: string = 'YBMKKSF610S'

  /** サブシステムID */
  private static SUB_SYSTEM_ID: string = 'YBMKKS'

  /** フレームID ヘッダフレーム */
  private static FRAME_HEAD: string = 'FLM_YBM_SUB_HEAD'

  /** フレームID ボディフレーム */
  private static FRAME_BODY: string = 'FLM_YBM_SUB_BODY'

  /** フレームID フッタフレーム */
  private static FRAME_FOOT: string = 'FLM_YBM_SUB_FOOT'

  /** 画面引継ぎ領域キー 起動モード */
  private static SEARCH_ST_MODE: string = 'stMode'

  /** アイテムID 損益管理組織コード */
  private static ITEM_CD_SOSHIKI: string = 'cdSoshiki'

  /** アイテムID 損益管理組織名 */
  private static ITEM_NM_SOSHIKI: string = 'nmSoshiki'

  /** アイテムID 損益管理組織略 */
  private static ITEM_NM_SOSHIKI_RYAKU: string = 'nmSoshikiRyaku'

  /** アイテムID 損益管理組織カナ名 */
  private static ITEM_NM_SOSHIKI_KANA: string = 'nmSoshikiKana'

  /** アイテムID 損益管理組織体系 */
  private static ITEM_NO_KAISOLEVEL: string = 'noKaisolevel'

  /** アイテムID 経理場所 */
  private static ITEM_CD_SOSHIKI_LEVEL2: string = 'cdSoshikilevel2'

  /** アイテムID ツリー部品 */
  private static ITEM_TREE: string = 'tree'

  /** アイテムID 従業員コード */
  private static ITEM_CD_JUGYOIN: string = 'cdJugyoin'

  /** アイテムID 従業員名(苗字) */
  private static ITEM_NM_JUGYOIN_MYOJI: string = 'nmJugyoinMyoji'

  /** アイテムID 従業員カナ名 */
  private static ITEM_NM_JUGYOIN_KANA: string = 'nmJugyoinKana'

  /** アイテムID 社員区分 */
  private static ITEM_ST_SHAIN: string = 'stShain'

  /** アイテムID スプレッド部品 */
  private static ITEM_SPREAD: string = 'spread'

  /** アイテムID 損益管理組織検索ボタン */
  private static ITEM_SOSHIKI_KENSAkU: string = 'body_button01'

  /** アイテムID 次へボタン */
  private static ITEM_NEXT: string = 'body_button02'

  /** アイテムID 前へボタン */
  private static ITEM_PREVIOUS: string = 'body_button03'

  /** アイテムID 従業員表示ボタン */
  private static ITEM_JUGYOIN_HYOJI: string = 'body_button04'

  /** アイテムID 従業員検索ボタン */
  private static ITEM_JUGYOIN_KENSAKU: string = 'body_button05'

  /** アイテムID タイトル */
  private static ITEM_TITLE: string = 'subtitle'

  /** アイテムID 損益管理組織確定ボタン */
  private static ITEM_SOSHIKI_KAKUTEI: string = 'kakutei_upper'

  /** アイテムID 従業員確定ボタン */
  private static ITEM_JUGYOIN_KAKUTEI: string = 'kakutei_lower'

  /** アイテムID 閉じるボタン */
  private static ITEM_CLOSE: string = 'close_ybm_search'

  /** アイテムID メッセージ表示域 */
  private static ITEM_MESSAGE: string = 'errorMessage'

  /** 画面名取得キー */
  private static SCREEN_NAME: string = 'YBMKKSF610S_SCREEN_NAME'

  /** 最大表示数取得キー */
  private static MAX_DISPLAY_CNT: string = 'YBMKKSF610S_MAX_DISPLAY_CNT'

  /** 最大検索数取得キー */
  private static MAX_SELECT_CNT: string = 'YBMKKSF610S_MAX_SELECT_CNT'

  /** 日付条件キー */
  private static TO_DATE_CONDITION: string = 'TO_DATE_CONDITION'

  /** 日付条件 適用終了日*/
  private static DT_TEKIYOSHURYO: string = 'DT_TEKIYOSHURYO'

  /** 日付条件 有効期限日 */
  private static DT_YUKOKIGEN: string = 'DT_YUKOKIGEN'

  /** 画面引継ぎ領域キー 損益管理組織検索条件CBMMsg */
  private static CONDITON_MSG_KEY: string = 'condition'

  /** 画面引継ぎ領域キー 損益管理組織検索CBMMsg */
  private static SOSHIKI_MSG_KEY: string = 'soshikiList'

  /** 画面引継ぎ領域キー 従業員検索CBMMsg */
  private static JUGYOIN_MSG_KEY: string = 'JugyoinList'

  /** 画面引継ぎ領域キー 対象日 */
  private static DT_TAISHO_KEY: string = 'dtTaisho'

  /** 画面引継ぎ領域キー 従業員検索フラグ */
  private static FG_JUGYOIN_KEY: string = 'fgJugyoin'

  /** 事業検索条件キー 日付条件 */
  private static TO_DATE_CONDITION_KEY: string = 'toDateCondition'

  /** 画面引継ぎ領域キー 損益管理組織コード */
  private static CD_SOSHIKI_KEY: string = 'cdSonekikanriSoshiki'

  /** 画面引継ぎ領域キー 上位損益管理組織コード */
  private static CD_JOISOSHIKI_KEY: string = 'cdJoisonekikanriSoshiki'

  /** 画面引継ぎ領域キー 表示順 */
  private static NO_HYOJI_KEY: string = 'noHyoji'

  /** 画面引継ぎ領域キー 損益管理組織略称 */
  private static NM_SOSHIKI_RYAKU_KEY: string = 'nmSonekiSoshikiRyaku'

  /** 画面引継ぎ領域キー 階層レベル(組織体系) */
  private static NO_KAISOLEVEL_KEY: string = 'noKaisolevel'

  /** 画面引継ぎ領域キー 経理場所 */
  private static CD_SOSHIKI_LEVEL2_KEY: string = 'cdSoshikilevel2'

  /** 画面引継ぎ領域キー 損益管理組織名 */
  private static NM_SOSHIKI_KEY: string = 'nmSonekikanriSoshiki'

  /** 画面引継ぎ領域キー 損益管理組織カナ名 */
  private static NM_SOSHIKI_KANA_KEY: string = 'nmSoshikiKana'

  /** 画面引継ぎ領域キー 損益管理組織略称 */
  private static NM_SOSHIKI_RYAKUSHIKI_KEY: string = 'nmSonekiSoshikiRyaku'

  /** 画面引継ぎ領域キー 従業員コード */
  private static CD_JUGYOIN_KEY: string = 'cdJugyoin'

  /** 画面引継ぎ領域キー 従業員名(苗字) */
  private static NM_JUGYOIN_MYOJI_KEY: string = 'nmJugyoinMyoji'

  /** 画面引継ぎ領域キー 従業員名(名前) */
  private static NM_JUGYOIN_NAMAE_KEY: string = 'nmJugyoinNamae'

  /** 画面引継ぎ領域キー 従業員名(カナ) */
  private static NM_JUGYOIN_KANA_KEY: string = 'nmJugyoinKana'

  /** 画面引継ぎ領域キー 社員区分 */
  private static ST_SHAIN_KEY: string = 'stShain'

  /** 画面引継ぎ領域キー 従業員名 */
  private static NM_JUGYOIN_KEY: string = 'nmJugyoinRyaku'

  /** 画面引継ぎ領域キー  損益管理組織レベル3(主管場所)コード */
  private static CD_SOSHIKI_LEVEL3_KEY: string = 'cdSoshikiLevel3'

  /** 画面引継ぎ領域キー  損益管理組織レベル3(主管場所) */
  private static NM_SOSHIKI_LEVEL3_KEY: string = 'nmSoshikiLevel3'

  /** 画面引継ぎ領域キー  損益管理組織レベル4(職場)コード */
  private static CD_SOSHIKI_LEVEL4_KEY: string = 'cdSoshikiLevel4'

  /** 画面引継ぎ領域キー  損益管理組織レベル4(職場) */
  private static NM_SOSHIKI_LEVEL4_KEY: string = 'nmSoshikiLevel4'

  /** ＣＢＳ名 */
  static CBS_NAME: string = 'YBMKKSCBS'

  /** ユーザデータキー */
  static SYS_DATA: string = 'sys_data'

  /** コマンド名(Verb) 初期化 */
  private static COMMAND_INIT: string = 'YBMSoshikiKensakuCBSHandler.init'

  /** コマンド名(Verb) 損益管理組織取得 YBMSoshikiKensakuCBSHandler.getSoshiki */
  private static COMMAND_GET_SOSHIKI: string =
    'YBMSoshikiKensakuCBSHandler.getSoshiki'

  /** コマンド名(Verb) 従業員取得 YBMSoshikiKensakuCBSHandler.getJugyoin */
  private static COMMAND_GET_JUGYOIN: string =
    'YBMSoshikiKensakuCBSHandler.getJugyoin'

  /** ツリー部　インデックス ツリー表示文字列 */
  private static TREE_VIEW: number = 0

  /** ツリー部 インデックス 損益管理組織コード */
  private static TREE_CD_SOSHIKI: number = 1

  /** ツリー部 インデックス 親コード */
  private static TREE_CD_JOI_SOSHIKI: number = 2

  /** ツリー部 インデックス 階層レベル(組織体系) */
  private static TREE_NO_KAISOLEVEL: number = 3

  /** ツリー部 インデックス 表示順 */
  private static TREE_NO_HYOJI: number = 4

  /** ツリー部 インデックス 損益管理組織名称 */
  private static TREE_NM_SOSHIKI: number = 5

  /** ツリー部 インデックス 損益管理組織略称 */
  private static TREE_NM_SOSHIKI_RYAKU: number = 6

  /** ツリー部 カラム数 */
  private static TREE_COLUMN_WIDTH: number = 7

  /** スプレッド部 インデックス 選択 */
  private static SPREAD_SELECT: number = 0

  /** スプレッド部 インデックス 従業員コード */
  private static SPREAD_CD_JUGYOIN: number = 1

  /** スプレッド部 インデックス 従業員名 */
  private static SPREAD_NM_JUGYOIN: number = 2

  /** スプレッド部 インデックス 損益管理組織(主管場所) */
  private static SPREAD_NM_SOSHIKI_LEVEL3: number = 3

  /** スプレッド部 インデックス 損益管理組織(職場) */
  private static SPREAD_NM_SOSHIKI_LEVEL4: number = 4

  /** スプレッド部 インデックス 従業員名(苗字) */
  private static SPREAD_NM_JUGYOIN_MYOJI: number = 5

  /** スプレッド部 インデックス 従業員名(名前) */
  private static SPREAD_NM_JUGYOIN_NAMAE: number = 6

  /** スプレッド部 インデックス 従業員名(カナ) */
  private static SPREAD_NM_JUGYOIN_KANA: number = 7

  /** 最下位階層レベル */
  private static LOWEST_LEVEL: string = '4'

  /** 経理場所階層レベル */
  private static NO_KAISOLEVEL_KEIRIBASHO: string = '2'

  /** 次へ、前へ検索結果格納キー */
  private static SEARCH_RESULTS_KEY: string = 'results_key'

  /** 次へ、前へ検索インデックスキー */
  private static SEARCH_INDEX_KEY: string = 'index_key'

  /** 次へ、前へ検索キーワードキー */
  private static SEARCH_KEYWORD_KEY: string = 'keyword_key'

  /** 次へ、前へ検索 損益管理組織略称 キー */
  private static SEARCH_NM_SOSHIKI_RYAKU_KEY: string = 'nmSonekiRyaku_key'

  /** 従業員検索Msg エラーメッセージコード */
  private static MSG_CD_ERR_MESSAGE: string = 'cdErrMessage'

  /** 従業員検索Msg エラーメッセージの埋め文字 */
  private static MSG_IF_ERR_MSG_PARAMS: string = 'ifErrMsgParamsList'

  /** ユーザ領域キー 起動モード */
  private static KIDO_MODE: string = 'kidoMode'

  //コンボ動的対応
  /** 汎用分類条件Msgキー名称 サブシステム種別コード */
  private static CD_KAISHA_KEY: string = 'cdKaisha'

  /** 汎用分類条件Msgキー名称 サブシステム種別コード */
  private static CD_SUBSYSTEM_SHUBETU_KEY: string = 'cdSubsystemShubetu'

  /** 汎用分類条件Msgキー名称 データ種別コード */
  private static CD_DATASHUBETSU_KEY: string = 'cdDatashubetsu'

  /** 汎用分類条件Msgデータ サブシステム種別コード */
  private static CD_SUBSYSTEM_SHUBETU_DATA: string = '100'

  /** 汎用分類条件Msgデータ データ種別コード */
  private static CD_DATASHUBETSU_DATA: string = '00109'

  /** 汎用分類CBMMsgキー 汎用分類条件Msg */
  private static HANYO_BUNRUI_JOKEN_MSG: string = 'hanyoBunruiCBMMsg'

  /** 汎用分類結果Msgキー 汎用分類検索結果MsgList */
  private static HANYO_BUNRUI_KEKKA_MSG_LIST: string = 'hanyoBunruiKekkaMsg'

  /** コマンド(verb) 初期化 */
  private static COMMAND_SHAINKUBUN: string =
    'YBMSoshikiKensakuCBSHandler.initJugyoin'

  /** 汎用分類結果Msgキー名称 サブシステム種別コード */
  private static CD_HANYO_KEY: string = 'cdHanyo'

  /** 汎用分類結果Msgキー名称 データ種別コード */
  private static NM_NAIYO1_KEY: string = 'nmNaiyo1'

  /**
   * 初期表示イベントハンドラです。
   */
  beforeDisplay(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF610SLogic.beforeDisplay() start')

    try {
      // 変数宣言
      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl

      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let title: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_HEAD,
        YBMKKSF610SLogic.ITEM_TITLE,
      )
      let next: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NEXT,
      )
      let previous: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_PREVIOUS,
      )
      let soshikiKensaku: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_SOSHIKI_KENSAkU,
      )
      let jugyoinHyoji: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_JUGYOIN_HYOJI,
      )
      let jugyoinKensaku: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_JUGYOIN_KENSAKU,
      )
      let tree: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_TREE,
      )
      let spread: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_SPREAD,
      )
      let soshikiKakutei: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_SOSHIKI_KAKUTEI,
      )
      let jugyoinKakutei: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_JUGYOIN_KAKUTEI,
      )
      let close: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_CLOSE,
      )
      let cdSoshiki: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_CD_SOSHIKI,
      )
      let nmSoshiki: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_SOSHIKI,
      )
      let nmSoshikiKana: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_SOSHIKI_KANA,
      )
      let noKaisolevel: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NO_KAISOLEVEL,
      )
      let cdKeiribasho: JCFComboBoxData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_CD_SOSHIKI_LEVEL2,
      ) as JCFComboBoxData
      let cdJugyoin: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_CD_JUGYOIN,
      )
      let nmJugyoinMyoji: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_JUGYOIN_MYOJI,
      )
      let nmJugyoinKana: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_JUGYOIN_KANA,
      )
      let stShain: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_ST_SHAIN,
      )
      let nmSoshikiRyaku: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_SOSHIKI_RYAKU,
      )

      // ヘッダ情報の設定
      let screenName: string = SMSPropsInfos.getProperty(
        YBMKKSF610SLogic.SUB_SYSTEM_ID,
        YBMKKSF610SLogic.SCREEN_NAME,
      ) as string
      title.setValue(screenName)

      // 最大表示件数をYBMYHS.propertiesから取得
      let maxDisplayCnt: string = SMSPropsInfos.getProperty(
        YBMKKSF610SLogic.SUB_SYSTEM_ID,
        YBMKKSF610SLogic.MAX_DISPLAY_CNT,
      ) as string
      loginInfo.setQtSaidaiHyouji(maxDisplayCnt)

      // 最大検索件数をYBMYHS.propertiesから取得
      let maxSelectCnt: string = SMSPropsInfos.getProperty(
        YBMKKSF610SLogic.SUB_SYSTEM_ID,
        YBMKKSF610SLogic.MAX_SELECT_CNT,
      ) as string
      loginInfo.setQtSaidaiKensaku(maxSelectCnt)

      // 起動モードの取得
      let stMode: string = null!
      stMode = context.getSucceedData(YBMKKSF610SLogic.SEARCH_ST_MODE) as string
      if (stMode == null) {
        SMSCLLog.debug('起動パラメタがnullです。')
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // 対象日を取得・保存
      let dtTaisho: string = null!
      dtTaisho = context.getSucceedData(
        YBMKKSF610SLogic.DT_TAISHO_KEY,
      ) as string
      this.putUserData(context, YBMKKSF610SLogic.DT_TAISHO_KEY, dtTaisho)

      // 日付条件を取得
      let toDateCondition: string = null!
      toDateCondition = context.getSucceedData(
        YBMKKSF610SLogic.TO_DATE_CONDITION,
      ) as string
      this.putUserData(
        context,
        YBMKKSF610SLogic.TO_DATE_CONDITION,
        toDateCondition,
      )

      // 起動モード保存
      this.putUserData(context, YBMKKSF610SLogic.KIDO_MODE, stMode)

      // フッタボタンラベル設定
      soshikiKakutei.setValue('組織確定')
      jugyoinKakutei.setValue('従業員確定')
      close.setValue('閉じる')

      // 次へ、前へボタン非活性化
      next.setEnabled(false)
      previous.setEnabled(false)

      // ボタンの活性・非活性設定
      if (stMode.equals('01')) {
        // ツリー検索のみ
        soshikiKensaku.setEnabled(true)
        jugyoinHyoji.setEnabled(false)
        jugyoinKensaku.setEnabled(false)
        soshikiKakutei.setEnabled(true)
        jugyoinKakutei.setEnabled(false)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
        cdJugyoin.setEnabled(false)
        nmJugyoinMyoji.setEnabled(false)
        nmJugyoinKana.setEnabled(false)
        stShain.setEnabled(false)
      } else if (stMode.equals('02')) {
        // ツリー検索後、下位マスタ検索
        soshikiKensaku.setEnabled(true)
        jugyoinHyoji.setEnabled(false)
        jugyoinKensaku.setEnabled(true)
        soshikiKakutei.setEnabled(false)
        jugyoinKakutei.setEnabled(true)
        cdJugyoin.setEnabled(true)
        nmJugyoinMyoji.setEnabled(true)
        nmJugyoinKana.setEnabled(true)
        stShain.setEnabled(true)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
      } else if (stMode.equals('03')) {
        // 下位マスタのみ
        soshikiKensaku.setEnabled(false)
        jugyoinHyoji.setEnabled(false)
        jugyoinKensaku.setEnabled(true)
        soshikiKakutei.setEnabled(false)
        jugyoinKakutei.setEnabled(true)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
        cdSoshiki.setEnabled(false)
        nmSoshiki.setEnabled(false)
        nmSoshikiKana.setEnabled(false)
        noKaisolevel.setEnabled(false)
        cdKeiribasho.setEnabled(false)
        nmSoshikiRyaku.setEnabled(false)
      } else {
        // 不正パラメタ
        SMSCLLog.debug('起動パラメタが異常値です。')
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }
    } catch (th: any) {
      // エラーアダプタ呼出し
      SMSCLLog.debug('YBMKKSF610SLogic:beforeDisplay() error')
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF610SLogic.beforeDisplay() end')
  }

  /**
   * 損益管理組織検索ボタン押下イベントハンドラです。
   */
  findSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    // トレースログ出力
    SMSCLLog.debug('YBMKKSF610SLogic.findSoshiki() start')

    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let next: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NEXT,
      )
      let previous: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_PREVIOUS,
      )
      let message: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_MESSAGE,
      )
      let nmSoshikiRyaku: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_SOSHIKI_RYAKU,
      )
      let jugyoinHyoji: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_JUGYOIN_HYOJI,
      )
      let cdSoshiki: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_CD_SOSHIKI,
      )

      let spread: SMSJCFSpreadData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData

      // メッセージクリア
      message.setValue('')

      // 組織(従業員)検索Msg
      let inData: HashMap = this.prepareRequest(context)

      // inDataがnullなら必須入力チェックエラー
      if (inData == null) {
        return
      }

      // ツリー内容をクリア
      tree.setRoot(null!)

      // 共有領域リセット
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY)
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY)
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY)

      // 次へ、前へボタン非活性化
      next.setEnabled(false)
      previous.setEnabled(false)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF610SLogic.CBS_NAME,
        YBMKKSF610SLogic.COMMAND_GET_SOSHIKI,
        inData,
      )

      // 戻り値nullならシステムエラー(共通部品でチェック済み？)
      if (outData == null) {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      let sysData: HashMap = null!
      if (outData.containsKey(YBMKKSF610SLogic.SYS_DATA)) {
        sysData = outData.get(YBMKKSF610SLogic.SYS_DATA) as HashMap
      } else {
        // 戻り値nullならシステムエラー
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // エラーフラグを取得
      let cdErrMessage: string = sysData.get(
        YBMKKSF610SLogic.MSG_CD_ERR_MESSAGE,
      ) as string

      // 業務エラー処理
      if (cdErrMessage != null) {
        SMSCLLog.debug(
          'YBMYHSF610SLogic.showData:cdErrMessage：' + cdErrMessage,
        )
        if (spread.isEnabled()) {
          spread.removeAllRow()
          spread.setEnabled(false)
        }
        if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW003)) {
          // 検索結果０件
          let params: string[] = sysData.get(
            YBMKKSF610SLogic.MSG_IF_ERR_MSG_PARAMS,
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
            YBMKKSF610SLogic.MSG_IF_ERR_MSG_PARAMS,
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

      let soshikiList: HashMap[] = null!
      if (sysData.containsKey(YBMKKSF610SLogic.SOSHIKI_MSG_KEY)) {
        soshikiList = sysData.get(YBMKKSF610SLogic.SOSHIKI_MSG_KEY) as HashMap[]
      } else {
        // 検索結果がなければシステムエラー(ここもチェック済みか・・・？)
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // ツリー構築
      this.buildTree(context, soshikiList)

      // ツリー活性化
      tree.setEnabled(true)

      // 損益管理組織略称活性化
      nmSoshikiRyaku.setEnabled(true)

      // 次へ、前へボタン活性化
      next.setEnabled(true)
      previous.setEnabled(true)

      let stMode: string = null!
      stMode = this.getUserData(context, YBMKKSF610SLogic.KIDO_MODE) as string

      if (stMode == null) {
        stMode = ''
      }

      if (stMode.equals('02')) {
        // 従業員表示ボタン活性化
        jugyoinHyoji.setEnabled(true)
      }

      let count: string = new Integer(soshikiList.length).toString()
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.YCSCMNMSI020, count),
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF610SLogic.findSoshiki() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF610SLogic.findSoshiki() end')
  }

  /**
   * 次へボタン押下イベントハンドラです。
   */
  nextSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    // トレースログ
    SMSCLLog.debug('YBMKKSF610SLogic.nextSoshiki() start')

    // データビーン取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let nmSoshikiRyaku: JCFItemData = current.getItemData(
      YBMKKSF610SLogic.FRAME_BODY,
      YBMKKSF610SLogic.ITEM_NM_SOSHIKI_RYAKU,
    )
    let tree: SMSJFTreeData = current.getItemData(
      YBMKKSF610SLogic.FRAME_BODY,
      YBMKKSF610SLogic.ITEM_TREE,
    ) as SMSJFTreeData
    let next: JCFItemData = current.getItemData(
      YBMKKSF610SLogic.FRAME_BODY,
      YBMKKSF610SLogic.ITEM_NEXT,
    )
    let previous: JCFItemData = current.getItemData(
      YBMKKSF610SLogic.FRAME_BODY,
      YBMKKSF610SLogic.ITEM_PREVIOUS,
    )
    let message: JCFItemData = current.getItemData(
      YBMKKSF610SLogic.FRAME_FOOT,
      YBMKKSF610SLogic.ITEM_MESSAGE,
    )

    // メッセージクリア
    message.setValue('')

    let nmValue: string = null!
    nmValue = nmSoshikiRyaku.getValue()

    // データビーンはnullを返さないはずなので恐らく不要だが、nullなら空文字列を設定
    if (nmValue == null) {
      nmValue = ''
    }

    // 検索条件が未入力の場合打ち切り
    if (nmValue.trim().equals('')) {
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.SMSCMNMCW138, '組織略称'),
      )

      // 念のため共有領域リセット
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY as any)
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY as any)
      this.removeUserData(
        context,
        YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY as any,
      )
      return
    }

    // 前回検索条件
    let nmValueObj: any = this.getUserData(
      context,
      YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY,
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
      YBMKKSF610SLogic.SEARCH_RESULTS_KEY,
    )

    if (same && object != null) {
      // 検索条件が前回と同じ場合、前回検索結果を再利用
      results = object as SMSJFTreeNode[]
      index = (
        this.getUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY) as Integer
      ).intValue()
      index++
      tree.setCursorNode(results[index])
      previous.setEnabled(true)
      if (index == results.length - 1) {
        // 最終データなら非活性
        next.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF610SLogic.FRAME_BODY,
          YBMKKSF610SLogic.ITEM_PREVIOUS,
        )
      }
      this.putUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY, results)
      this.putUserData(
        context,
        YBMKKSF610SLogic.SEARCH_INDEX_KEY,
        new Integer(index),
      )

      SMSCLLog.debug('YBMYHSF610SLogic.nextSoshiki() end')
      return
    }
    // 前回検索結果が無ければ検索する。
    results = tree.search(
      YBMKKSF610SLogic.TREE_NM_SOSHIKI_RYAKU,
      nmValue,
      false,
    )
    // ----↓↓ 2006/09/13 BSC)鮫島 ↓↓-------
    // ボタンの活性化状態を一旦リセット
    next.setEnabled(true)
    previous.setEnabled(true)
    // ----↑↑ 2006/09/13 BSC)鮫島 ↑↑-------
    if (results != null && results.length != 0) {
      tree.setCursorNode(results[index])
      this.putUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY, results)
      this.putUserData(
        context,
        YBMKKSF610SLogic.SEARCH_INDEX_KEY,
        new Integer(index),
      )
      this.putUserData(
        context,
        YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY,
        nmValue,
      )
      previous.setEnabled(false)
      if (results.length == 1) {
        // 長さ1なら次へ、前へボタン非活性
        next.setEnabled(false)
        previous.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF610SLogic.FRAME_BODY,
          YBMKKSF610SLogic.ITEM_TREE,
        )
        SMSCLLog.debug('YBMYHSF610SLogic.nextSoshiki() end')
        return
      }
      if (index == results.length - 1) {
        // 最終データなら非活性
        next.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF610SLogic.FRAME_BODY,
          YBMKKSF610SLogic.ITEM_PREVIOUS,
        )
        SMSCLLog.debug('YBMYHSF660SLogic.nextSoshiki() end')
        return
      }
    } else {
      // 検索0件
      this.putUserData(
        context,
        YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY,
        nmValue,
      )
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.SMSCMNMCW003, '損益管理組織'),
      )
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY)
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY)
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY)
      return
    }

    SMSCLLog.debug('YBMYHSF660SLogic.nextSoshiki() end')
  }

  /**
   * 前へボタン押下イベントハンドラです。
   */
  previousSoshiki(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    // トレースログ
    SMSCLLog.debug('YBMKKSF610SLogic.previousSoshiki() start')
    // データビーン取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let nmSoshikiRyaku: JCFItemData = current.getItemData(
      YBMKKSF610SLogic.FRAME_BODY,
      YBMKKSF610SLogic.ITEM_NM_SOSHIKI_RYAKU,
    )
    let tree: SMSJFTreeData = current.getItemData(
      YBMKKSF610SLogic.FRAME_BODY,
      YBMKKSF610SLogic.ITEM_TREE,
    ) as SMSJFTreeData
    let next: JCFItemData = current.getItemData(
      YBMKKSF610SLogic.FRAME_BODY,
      YBMKKSF610SLogic.ITEM_NEXT,
    )
    let previous: JCFItemData = current.getItemData(
      YBMKKSF610SLogic.FRAME_BODY,
      YBMKKSF610SLogic.ITEM_PREVIOUS,
    )
    let message: JCFItemData = current.getItemData(
      YBMKKSF610SLogic.FRAME_FOOT,
      YBMKKSF610SLogic.ITEM_MESSAGE,
    )

    // メッセージクリア
    message.setValue('')

    let nmValue: string = null!
    nmValue = nmSoshikiRyaku.getValue()

    // データビーンはnullを返さないはずなので恐らく不要だが、nullなら空文字列を設定
    if (nmValue == null) {
      nmValue = ''
    }

    if (nmValue.trim().equals('')) {
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.SMSCMNMCW138, '組織略称'),
      )

      // 念のため共有領域リセット
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY as any)
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY as any)
      this.removeUserData(
        context,
        YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY as any,
      )
      return
    }

    // 前回検索条件
    let nmValueObj: any = this.getUserData(
      context,
      YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY,
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
      YBMKKSF610SLogic.SEARCH_RESULTS_KEY,
    )

    if (same && object != null) {
      results = object as SMSJFTreeNode[]
      index = (
        this.getUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY) as Integer
      ).intValue()
      index--
      tree.setCursorNode(results[index])
      next.setEnabled(true)
      if (index == 0) {
        // 最前データなら非活性
        previous.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF610SLogic.FRAME_BODY,
          YBMKKSF610SLogic.ITEM_NEXT,
        )
      }
      this.putUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY, results)
      this.putUserData(
        context,
        YBMKKSF610SLogic.SEARCH_INDEX_KEY,
        new Integer(index),
      )

      SMSCLLog.debug('YBMYHSF610SLogic.previousSoshiki() end')
      return
    }
    // 前回検索結果が無ければ検索する。
    results = tree.search(
      YBMKKSF610SLogic.TREE_NM_SOSHIKI_RYAKU,
      nmValue,
      false,
    )
    // ----↓↓ 2006/09/13 BSC)鮫島 ↓↓-------
    // ボタンの活性化状態を一旦リセット
    next.setEnabled(true)
    previous.setEnabled(true)
    // ----↑↑ 2006/09/13 BSC)鮫島 ↑↑-------
    if (results != null && results.length != 0) {
      // 検索結果がなかった場合は必ず先頭要素のはず→前へボタン非活性。
      tree.setCursorNode(results[index])
      this.putUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY, results)
      this.putUserData(
        context,
        YBMKKSF610SLogic.SEARCH_INDEX_KEY,
        new Integer(index),
      )
      this.putUserData(
        context,
        YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY,
        nmValue,
      )
      previous.setEnabled(false)
      // 前へボタンは非活性なので次へボタンにフォーカス設定
      returnInfo.setFocus(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NEXT,
      )
      if (results.length == 1) {
        // 長さ1なら次へ、前へボタン非活性
        next.setEnabled(false)
        returnInfo.setFocus(
          YBMKKSF610SLogic.FRAME_BODY,
          YBMKKSF610SLogic.ITEM_TREE,
        )
        SMSCLLog.debug('YBMYHSF610SLogic.previousSoshiki() end')
        return
      }
    } else {
      // 検索0件
      this.putUserData(
        context,
        YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY,
        nmValue,
      )
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.SMSCMNMCW003, '損益管理組織'),
      )
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY as any)
      this.removeUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY as any)
      this.removeUserData(
        context,
        YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY as any,
      )
      return
    }

    SMSCLLog.debug('YBMYHSF610SLogic.previousSoshiki() end')
  }

  /**
   * 従業員表示ボタン押下イベントハンドラです。
   */
  viewJugyoin(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    // トレースログ
    SMSCLLog.debug('YBMKKSF610SLogic.viewJugyoin() start')
    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let message: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_MESSAGE,
      )

      // メッセージクリア
      message.setValue('')

      let node: SMSJFTreeNode = null!

      node = tree.getCursorNode()

      if (node == null) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.SMSCMNMCA105, '職場'),
        )
        return
      }
      let noKaisolevel: string = node.getColumnObject(
        YBMKKSF610SLogic.TREE_NO_KAISOLEVEL,
      ) as string
      if (!noKaisolevel.equals(YBMKKSF610SLogic.LOWEST_LEVEL)) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.SMSCMNMCA105, '職場'),
        )
        return
      }
      let cdSoshiki: string = null!
      cdSoshiki = node.getColumnObject(
        YBMKKSF610SLogic.TREE_CD_SOSHIKI,
      ) as string

      // EJB呼び出し準備
      let inData: HashMap = new HashMap()
      let joken: HashMap = new HashMap()
      // 損益管理組織コード
      joken.put(YBMKKSF610SLogic.CD_SOSHIKI_KEY, cdSoshiki)
      // ツリー検索後の従業員検索はフラグ"0"を設定。
      joken.put(YBMKKSF610SLogic.FG_JUGYOIN_KEY, '0')
      // 対象日
      let dtTaisho: string = this.getUserData(
        context,
        YBMKKSF610SLogic.DT_TAISHO_KEY,
      ) as string
      if (dtTaisho == null) {
        // 入力されていない場合は運用日付を設定
        let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
          context,
        ) as SMSLoginInfoImpl
        joken.put(YBMKKSF610SLogic.DT_TAISHO_KEY, loginInfo.getDtUnyo())
      } else {
        if (SMSCheckField.checkField(SMSCheckField.FIELD_D, dtTaisho)) {
          joken.put(YBMKKSF610SLogic.DT_TAISHO_KEY, dtTaisho)
        } else {
          let params: string[] = ['対象日']
          throw new SMSAppException(
            context
              .getMessageUtil()
              .getMessage(SMSMessageConst.YCSCMNMCW030, params),
          )
        }
      }

      // 日付条件
      let toDateCondition: string = null!
      toDateCondition = this.getUserData(
        context,
        YBMKKSF610SLogic.TO_DATE_CONDITION,
      ) as string
      if (toDateCondition == null || toDateCondition.equals('')) {
        // 設定されていない場合は有効期限日:1 viewJugyoin
        joken.put(
          YBMKKSF610SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF610SLogic.DT_YUKOKIGEN,
        )
      } else {
        // 設定されている場合は適用終了日
        joken.put(
          YBMKKSF610SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF610SLogic.DT_TEKIYOSHURYO,
        )
      }

      //			//デバック
      //			//joken.put(DT_TAISHO_KEY, null);
      //			joken.put(TO_DATE_CONDITION_KEY, null);

      inData.put(YBMKKSF610SLogic.CONDITON_MSG_KEY, joken)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF610SLogic.CBS_NAME,
        YBMKKSF610SLogic.COMMAND_GET_JUGYOIN,
        inData,
      )

      this.setDataToSpread(context, returnInfo, outData)
    } catch (th: any) {
      SMSCLLog.debug('YBMYHSF610SLogic.viewJugyoin error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMYHSF610SLogic.viewJugyoin() end')
  }

  /**
   * 従業員検索ボタン押下イベントハンドラです。
   */
  findJugyoin(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    // トレースログ
    SMSCLLog.debug('YBMKKSF610SLogic.findJugyoin() start')
    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdJugyoin: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_CD_JUGYOIN,
      )
      let nmJugyoinMyoji: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_JUGYOIN_MYOJI,
      )
      let nmJugyoinKana: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_JUGYOIN_KANA,
      )
      //			JCFComboBoxData stShain = (JCFComboBoxData) current.getItemData(YBMKKSF610SLogic.FRAME_BODY, YBMKKSF610SLogic.ITEM_ST_SHAIN);
      let message: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_MESSAGE,
      )

      // メッセージクリア
      message.setValue('')

      // 入力チェック
      if (
        cdJugyoin.getValue().trim().equals('') &&
        nmJugyoinMyoji.getValue().trim().equals('') &&
        nmJugyoinKana.getValue().trim().equals('')
      ) {
        // 従業員コード、従業員名(苗字)、従業員名(カナ)ともに未入力の場合はエラー
        SMSCLLog.debug('コード、名称ともに未入力')
        let param: string = '従業員名(苗字)、従業員カナ名、従業員コード'
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

      // 従業員コード
      if (!cdJugyoin.getValue().trim().equals('')) {
        joken.put(YBMKKSF610SLogic.CD_JUGYOIN_KEY, cdJugyoin.getValue())
      }

      // 従業員名(苗字)
      if (!nmJugyoinMyoji.getValue().trim().equals('')) {
        joken.put(
          YBMKKSF610SLogic.NM_JUGYOIN_MYOJI_KEY,
          nmJugyoinMyoji.getValue(),
        )
      }

      // 従業員名(カナ)
      if (!nmJugyoinKana.getValue().trim().equals('')) {
        joken.put(
          YBMKKSF610SLogic.NM_JUGYOIN_KANA_KEY,
          nmJugyoinKana.getValue(),
        )
      }

      //			// 社員区分
      //			String stShainValue = null;
      //			stShainValue = super.getComboID(stShain);
      //			if (!stShainValue.equals("0")) {
      //				joken.put(ST_SHAIN_KEY, stShainValue);
      //			}

      // 対象日
      let dtTaisho: string = null!
      dtTaisho = this.getUserData(
        context,
        YBMKKSF610SLogic.DT_TAISHO_KEY,
      ) as string
      if (dtTaisho == null) {
        // 入力されていない場合は運用日付を設定
        let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
          context,
        ) as SMSLoginInfoImpl
        joken.put(YBMKKSF610SLogic.DT_TAISHO_KEY, loginInfo.getDtUnyo())
        //SMSCLLog.debug("□□□□□□対象が空なので運用日を設定================"+loginInfo.getDtUnyo());
      } else {
        if (SMSCheckField.checkField(SMSCheckField.FIELD_D, dtTaisho)) {
          joken.put(YBMKKSF610SLogic.DT_TAISHO_KEY, dtTaisho)
          //SMSCLLog.debug("■■■■■■■対象が空ではない==============="+dtTaisho);
        } else {
          let params: string[] = ['対象日']
          throw new SMSAppException(
            context
              .getMessageUtil()
              .getMessage(SMSMessageConst.YCSCMNMCW030, params),
          )
        }
      }

      // 日付条件
      let toDateCondition: string = null!
      toDateCondition = this.getUserData(
        context,
        YBMKKSF610SLogic.TO_DATE_CONDITION,
      ) as string
      if (toDateCondition == null || toDateCondition.equals('')) {
        // 設定されていない場合は有効期限日:2 findJugyoin
        joken.put(
          YBMKKSF610SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF610SLogic.DT_YUKOKIGEN,
        )
      } else {
        // 設定されている場合は適用終了日
        joken.put(
          YBMKKSF610SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF610SLogic.DT_TEKIYOSHURYO,
        )
      }

      // 従業員検索の場合は"1"を設定する。
      joken.put(YBMKKSF610SLogic.FG_JUGYOIN_KEY, '1')

      inData.put(YBMKKSF610SLogic.CONDITON_MSG_KEY, joken)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF610SLogic.CBS_NAME,
        YBMKKSF610SLogic.COMMAND_GET_JUGYOIN,
        inData,
      )

      // スプレッド部へ表示
      this.setDataToSpread(context, returnInfo, outData)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF610SLogic.findJugyoin() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF610SLogic.findJugyoin() end')
  }

  /**
   * 損益管理組織確定ボタン押下イベントハンドラです。
   */
  kakuteiUpper(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    // トレースログ
    SMSCLLog.debug('YBMKKSF610SLogic.kakuteiUpper() start')
    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let message: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_MESSAGE,
      )
      let selected: SMSJFTreeNode = null!
      selected = tree.getCursorNode()
      if (selected == null) {
        // 未選択　エラーメッセージ表示
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '損益管理組織'),
        )
        returnInfo.cancelScreenTransition()
        return
      }
      // 画面引継ぎ領域へデータ格納
      let objects: string[] = selected.getColumnObjects() as string[]
      context.putSucceedData(
        YBMKKSF610SLogic.CD_SOSHIKI_KEY,
        objects[YBMKKSF610SLogic.TREE_CD_SOSHIKI],
      )
      context.putSucceedData(
        YBMKKSF610SLogic.CD_JOISOSHIKI_KEY,
        objects[YBMKKSF610SLogic.TREE_CD_JOI_SOSHIKI],
      )
      context.putSucceedData(
        YBMKKSF610SLogic.NO_KAISOLEVEL_KEY,
        objects[YBMKKSF610SLogic.TREE_NO_KAISOLEVEL],
      )
      context.putSucceedData(
        YBMKKSF610SLogic.NM_SOSHIKI_KEY,
        objects[YBMKKSF610SLogic.TREE_NM_SOSHIKI],
      )
      context.putSucceedData(
        YBMKKSF610SLogic.NM_SOSHIKI_RYAKUSHIKI_KEY,
        objects[YBMKKSF610SLogic.TREE_NM_SOSHIKI_RYAKU],
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF610SLogic.kakuteiUpper error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF610SLogic.kakuteiUpper() end')
  }

  /**
   * 従業員確定ボタン押下イベントハンドラです。
   */
  kakuteiLower(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    // トレースログ
    SMSCLLog.debug('YBMKKSF610SLogic.kakuteiLower() start')
    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let message: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_MESSAGE,
      )

      let count: number = 0
      let selectedRow: number = 0
      for (let i = 0; i < spread.getRowCount(); i++) {
        if (spread.getCellBooleanValue(i, YBMKKSF610SLogic.SPREAD_SELECT)) {
          count++
          selectedRow = i
        }
      }

      if (count == 0) {
        // 未選択
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '従業員'),
        )
        SMSCLLog.debug('YBMKKSF610SLogic.kakuteiLower() error')
        returnInfo.cancelScreenTransition()
        return
      } else if (count > 1) {
        // 複数選択
        message.setValue(
          context.getMessageUtil().getMessage(SMSMessageConst.YBMYHSMCW013),
        )
        SMSCLLog.debug('YBMKKSF610SLogic.kakuteiLower() error')
        returnInfo.cancelScreenTransition()
        return
      }

      // 画面引継ぎ領域へデータ格納
      context.putSucceedData(
        YBMKKSF610SLogic.CD_JUGYOIN_KEY,
        spread.getCellValue(selectedRow, YBMKKSF610SLogic.SPREAD_CD_JUGYOIN),
      )
      context.putSucceedData(
        YBMKKSF610SLogic.NM_JUGYOIN_KEY,
        spread.getCellValue(selectedRow, YBMKKSF610SLogic.SPREAD_NM_JUGYOIN),
      )
      context.putSucceedData(
        YBMKKSF610SLogic.NM_JUGYOIN_MYOJI_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF610SLogic.SPREAD_NM_JUGYOIN_MYOJI,
        ),
      )
      context.putSucceedData(
        YBMKKSF610SLogic.NM_JUGYOIN_NAMAE_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF610SLogic.SPREAD_NM_JUGYOIN_NAMAE,
        ),
      )
      context.putSucceedData(
        YBMKKSF610SLogic.NM_JUGYOIN_KANA_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF610SLogic.SPREAD_NM_JUGYOIN_KANA,
        ),
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF610SLogic.kakuteiLower() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF610SLogic.kakuteiLower() end')
  }

  /**
   * 閉じるボタン押下イベントハンドラです。
   */
  closeYbmSearch(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF610SLogic.closeYbmSearch() start')
    super.removeUserData(context, YBMKKSF610SLogic.USECASE)
    SMSCLLog.debug('YBMKKSF610SLogic.closeYbmSearch() end')
  }

  /**
   * リクエスト用のHashMapを生成します。
   *
   */
  private prepareRequest(context: JCFContext): HashMap {
    SMSCLLog.debug('YBMYHSF610SLogic.prepareRequest() start')
    // 組織(従業員)検索Msg
    let inData: HashMap = new HashMap()
    try {
      // データビーンの取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdSoshiki: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_CD_SOSHIKI,
      )
      let nmSoshiki: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_SOSHIKI,
      )
      let nmSoshikikana: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NM_SOSHIKI_KANA,
      )
      let noKaisolevel: JCFComboBoxData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_NO_KAISOLEVEL,
      ) as JCFComboBoxData
      //JCFComboBoxData cdSoshikilevel2 = (JCFComboBoxData) current.getItemData(YBMKKSF610SLogic.FRAME_BODY, YBMKKSF610SLogic.ITEM_CD_SOSHIKI_LEVEL2);

      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let message: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_MESSAGE,
      )

      if (
        cdSoshiki.getValue().trim().equals('') &&
        nmSoshiki.getValue().trim().equals('') &&
        nmSoshikikana.getValue().trim().equals('')
      ) {
        SMSCLLog.debug('コード、名称、カナともに未入力')
        let param: string = '組織名、組織カナ名、組織コード'
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW026, param),
        )
        return null!
      }

      // 組織(従業員)検索条件CBMMsg
      let joken: HashMap = new HashMap()
      // 損益管理組織コード
      if (!cdSoshiki.getValue().equals('')) {
        joken.put(YBMKKSF610SLogic.CD_SOSHIKI_KEY, cdSoshiki.getValue())
      }
      // 損益管理組織名
      if (!nmSoshiki.getValue().equals('')) {
        joken.put(YBMKKSF610SLogic.NM_SOSHIKI_KEY, nmSoshiki.getValue())
      }
      // 損益管理組織カナ名
      if (!nmSoshikikana.getValue().equals('')) {
        joken.put(
          YBMKKSF610SLogic.NM_SOSHIKI_KANA_KEY,
          nmSoshikikana.getValue(),
        )
      }
      // 損益管理組織体系
      let noKaisolevelValue: string = null!
      noKaisolevelValue = super.getComboID(noKaisolevel)
      if (!noKaisolevelValue.equals('0')) {
        joken.put(YBMKKSF610SLogic.NO_KAISOLEVEL_KEY, noKaisolevelValue)
      }
      // 経理場所
      //String cdKeiribashoValue = null;
      //cdKeiribashoValue = super.getComboID(cdSoshikilevel2);
      //if (!cdKeiribashoValue.equals("0")) {
      //	joken.put(CD_SOSHIKI_LEVEL2_KEY, cdKeiribashoValue);
      //}
      // 対象日
      let dtTaisho: string = null!
      dtTaisho = this.getUserData(
        context,
        YBMKKSF610SLogic.DT_TAISHO_KEY,
      ) as string

      if (dtTaisho == null) {
        //System.out.println("１：対象日無し⇒運用日");
        // 入力されていない場合は運用日付を設定
        let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
          context,
        ) as SMSLoginInfoImpl
        joken.put(YBMKKSF610SLogic.DT_TAISHO_KEY, loginInfo.getDtUnyo())
      } else {
        if (SMSCheckField.checkField(SMSCheckField.FIELD_D, dtTaisho)) {
          //System.out.println("２：対象日あり");
          joken.put(YBMKKSF610SLogic.DT_TAISHO_KEY, dtTaisho)
        } else {
          let params: string[] = ['対象日']
          throw new SMSAppException(
            context
              .getMessageUtil()
              .getMessage(SMSMessageConst.YCSCMNMCW030, params),
          )
        }
      }

      // 日付条件
      let toDateCondition: string = null!
      toDateCondition = this.getUserData(
        context,
        YBMKKSF610SLogic.TO_DATE_CONDITION,
      ) as string
      //System.out.println("toDateCondition----------"+toDateCondition);
      if (toDateCondition == null || toDateCondition.equals('')) {
        //System.out.println("３：有効期限");
        // 設定されていない場合は有効期限日:3 prepareRequest
        joken.put(
          YBMKKSF610SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF610SLogic.DT_YUKOKIGEN,
        )
      } else if (toDateCondition.equals('DT_TEKIYOSHURYO')) {
        //System.out.println("４：適用終了日");
        // 設定されている場合は適用終了日
        joken.put(
          YBMKKSF610SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF610SLogic.DT_TEKIYOSHURYO,
        )
      }

      inData.put(YBMKKSF610SLogic.CONDITON_MSG_KEY, joken)
    } catch (th: any) {
      SMSCLLog.debug('YBMYHSF610SLogic.prepareRequest() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMYHSF610SLogic.prepareRequest() end')
    return inData
  }

  /**
   * ツリー構造を構築します。
   */
  private buildTree(context: JCFContext, soshikiList: HashMap[]) {
    SMSCLLog.debug('YBMYHSF610SLogic.buildTree() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_TREE,
      ) as SMSJFTreeData

      let dummy: string[] = ['', '', '', '', '', '', '']

      let root: SMSJFTreeNode = new SMSJFTreeNode(dummy)
      tree.setRoot(root)

      let objects: string[][] = create2DStringArray(
        soshikiList.length,
        YBMKKSF610SLogic.TREE_COLUMN_WIDTH,
      )

      let node: SMSJFTreeNode = null!
      let parent: SMSJFTreeNode = null!
      let results: SMSJFTreeNode[] = null!
      for (let i = 0; i < soshikiList.length; i++) {
        // ツリー表示部
        objects[i][YBMKKSF610SLogic.TREE_VIEW] =
          (soshikiList[i].get(YBMKKSF610SLogic.CD_SOSHIKI_KEY) as string) +
          ' ' +
          (soshikiList[i].get(YBMKKSF610SLogic.NM_SOSHIKI_RYAKU_KEY) as string)
        // 損益管理組織コード
        objects[i][YBMKKSF610SLogic.TREE_CD_SOSHIKI] = soshikiList[i].get(
          YBMKKSF610SLogic.CD_SOSHIKI_KEY,
        ) as string
        // 親コード
        objects[i][YBMKKSF610SLogic.TREE_CD_JOI_SOSHIKI] = soshikiList[i].get(
          YBMKKSF610SLogic.CD_JOISOSHIKI_KEY,
        ) as string
        // 階層レベル(組織体系)
        objects[i][YBMKKSF610SLogic.TREE_NO_KAISOLEVEL] = soshikiList[i].get(
          YBMKKSF610SLogic.NO_KAISOLEVEL_KEY,
        ) as string
        // 表示順
        objects[i][YBMKKSF610SLogic.TREE_NO_HYOJI] = soshikiList[i].get(
          YBMKKSF610SLogic.NO_HYOJI_KEY,
        ) as string
        // 損益管理組織名
        objects[i][YBMKKSF610SLogic.TREE_NM_SOSHIKI] = soshikiList[i].get(
          YBMKKSF610SLogic.NM_SOSHIKI_KEY,
        ) as string
        // 損益管理組織略称
        objects[i][YBMKKSF610SLogic.TREE_NM_SOSHIKI_RYAKU] = soshikiList[i].get(
          YBMKKSF610SLogic.NM_SOSHIKI_RYAKU_KEY,
        ) as string

        if (objects[i][YBMKKSF610SLogic.TREE_NO_KAISOLEVEL].equals('1')) {
          // 階層レベルが1の場合はrootノードの子とする。
          node = new SMSJFTreeNode(objects[i])
          root.add(node)
        } else {
          node = new SMSJFTreeNode(objects[i])
          results = tree.search(
            YBMKKSF610SLogic.TREE_CD_SOSHIKI,
            objects[i][YBMKKSF610SLogic.TREE_CD_JOI_SOSHIKI],
            true,
          )
          if (results.length != 0) {
            parent = results[0]
            parent.add(node)
          } else {
            SMSCLLog.debug('YBMYHSF610SLogic.buildTree() error')
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
      columnInfoVec.add(new SMSJFTreeColumnData(1, 0, '損益管理組織コード'))
      columnInfoVec.add(new SMSJFTreeColumnData(2, 0, '上位損益管理組織コード'))
      columnInfoVec.add(new SMSJFTreeColumnData(3, 0, '階層レベル'))
      columnInfoVec.add(new SMSJFTreeColumnData(4, 0, '表示順'))
      columnInfoVec.add(new SMSJFTreeColumnData(5, 0, '損益管理組織名'))
      columnInfoVec.add(new SMSJFTreeColumnData(6, 0, '損益管理組織名略称'))
      tree.setColumnInfoVec(columnInfoVec)
    } catch (th: any) {
      SMSCLLog.debug('YBMYHSF610SLogic.buildTree error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMYHSF610SLogic.buildTree() end')
  }

  /**
   * HashMapからスプレッド部へデータをセットします。
   */
  private setDataToSpread(
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    outData: HashMap,
  ) {
    SMSCLLog.debug('YBMYHSF610SLogic.setDataToSpread start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let message: JCFItemData = current.getItemData(
        YBMKKSF610SLogic.FRAME_FOOT,
        YBMKKSF610SLogic.ITEM_MESSAGE,
      )

      if (outData == null) {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      let sysData: HashMap = null!
      if (outData.containsKey(YBMKKSF610SLogic.SYS_DATA)) {
        sysData = outData.get(YBMKKSF610SLogic.SYS_DATA) as HashMap
      } else {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // エラーフラグを取得
      let cdErrMessage: string = sysData.get(
        YBMKKSF610SLogic.MSG_CD_ERR_MESSAGE,
      ) as string

      if (cdErrMessage != null) {
        SMSCLLog.debug(
          'YBMYHSF610SLogic.showData:cdErrMessage：' + cdErrMessage,
        )

        if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW003)) {
          // 検索結果０件
          let params: string[] = sysData.get(
            YBMKKSF610SLogic.MSG_IF_ERR_MSG_PARAMS,
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
          this.removeUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY)
          this.removeUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY)
          this.removeUserData(
            context,
            YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY,
          )

          return
        } else if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW001)) {
          // 最大表示件数オーバー
          let params: string[] = sysData.get(
            YBMKKSF610SLogic.MSG_IF_ERR_MSG_PARAMS,
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
          this.removeUserData(context, YBMKKSF610SLogic.SEARCH_RESULTS_KEY)
          this.removeUserData(context, YBMKKSF610SLogic.SEARCH_INDEX_KEY)
          this.removeUserData(
            context,
            YBMKKSF610SLogic.SEARCH_NM_SOSHIKI_RYAKU_KEY,
          )

          return
        }
      }

      let JugyoinList: HashMap[] = null!
      if (sysData.containsKey(YBMKKSF610SLogic.JUGYOIN_MSG_KEY)) {
        JugyoinList = sysData.get(YBMKKSF610SLogic.JUGYOIN_MSG_KEY) as HashMap[]
      } else {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      spread.setRowCount(JugyoinList.length)
      for (let i = 0; i < JugyoinList.length; i++) {
        // 選択状態z
        spread.setCellValue(i, YBMKKSF610SLogic.SPREAD_SELECT, false)

        // 従業員コード
        if (
          JugyoinList[i].containsKey(YBMKKSF610SLogic.CD_JUGYOIN_KEY) &&
          JugyoinList[i].get(YBMKKSF610SLogic.CD_JUGYOIN_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF610SLogic.SPREAD_CD_JUGYOIN,
            JugyoinList[i].get(YBMKKSF610SLogic.CD_JUGYOIN_KEY) as string,
          )
        }
        // 従業員名
        if (
          JugyoinList[i].containsKey(YBMKKSF610SLogic.NM_JUGYOIN_KEY) &&
          JugyoinList[i].get(YBMKKSF610SLogic.NM_JUGYOIN_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF610SLogic.SPREAD_NM_JUGYOIN,
            JugyoinList[i].get(YBMKKSF610SLogic.NM_JUGYOIN_KEY) as string,
          )
        }
        // 主管場所
        if (
          JugyoinList[i].containsKey(YBMKKSF610SLogic.NM_SOSHIKI_LEVEL3_KEY) &&
          JugyoinList[i].get(YBMKKSF610SLogic.NM_SOSHIKI_LEVEL3_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF610SLogic.SPREAD_NM_SOSHIKI_LEVEL3,
            JugyoinList[i].get(
              YBMKKSF610SLogic.NM_SOSHIKI_LEVEL3_KEY,
            ) as string,
          )
        }
        // 職場
        if (
          JugyoinList[i].containsKey(YBMKKSF610SLogic.NM_SOSHIKI_LEVEL4_KEY) &&
          JugyoinList[i].get(YBMKKSF610SLogic.NM_SOSHIKI_LEVEL4_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF610SLogic.SPREAD_NM_SOSHIKI_LEVEL4,
            JugyoinList[i].get(
              YBMKKSF610SLogic.NM_SOSHIKI_LEVEL4_KEY,
            ) as string,
          )
        }
        // 従業員名(苗字)
        if (
          JugyoinList[i].containsKey(YBMKKSF610SLogic.NM_JUGYOIN_MYOJI_KEY) &&
          JugyoinList[i].get(YBMKKSF610SLogic.NM_JUGYOIN_MYOJI_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF610SLogic.SPREAD_NM_JUGYOIN_MYOJI,
            JugyoinList[i].get(YBMKKSF610SLogic.NM_JUGYOIN_MYOJI_KEY) as string,
          )
        }
        // 従業員名(名前)
        if (
          JugyoinList[i].containsKey(YBMKKSF610SLogic.NM_JUGYOIN_NAMAE_KEY) &&
          JugyoinList[i].get(YBMKKSF610SLogic.NM_JUGYOIN_NAMAE_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF610SLogic.SPREAD_NM_JUGYOIN_NAMAE,
            JugyoinList[i].get(YBMKKSF610SLogic.NM_JUGYOIN_NAMAE_KEY) as string,
          )
        }
        // 従業員名(カナ)
        if (
          JugyoinList[i].containsKey(YBMKKSF610SLogic.NM_JUGYOIN_KANA_KEY) &&
          JugyoinList[i].get(YBMKKSF610SLogic.NM_JUGYOIN_KANA_KEY) != null
        ) {
          spread.setCellValue(
            i,
            YBMKKSF610SLogic.SPREAD_NM_JUGYOIN_KANA,
            JugyoinList[i].get(YBMKKSF610SLogic.NM_JUGYOIN_KANA_KEY) as string,
          )
        }
      }
      let count: string = new Integer(JugyoinList.length).toString()
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.YCSCMNMSI020, count),
      )

      // スプレッド活性化
      spread.setEnabled(true)

      // フォーカス設定
      returnInfo.setFocus(
        YBMKKSF610SLogic.FRAME_BODY,
        YBMKKSF610SLogic.ITEM_SPREAD,
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMYHSF610SLogic.setDataToSpread error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMYHSF610SLogic.setDataToSpread end')
  }

  protected setUseCaseID() {
    this.useCaseID = YBMKKSF610SLogic.USECASE
  }
}
