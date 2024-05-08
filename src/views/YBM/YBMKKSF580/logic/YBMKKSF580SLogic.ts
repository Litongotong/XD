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
import type { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { SMSRuntimeException } from '@/lib/sms/sol/sys/SMSRuntimeException'
import { create2DStringArray } from '@/utils/array/2D'

export default class YBMKKSF580SLogic extends SMSCjfLogicBase {
  private static USECASE: string = 'YBMKKSF580'

  /** 画面ID */
  private static GAMEN_ID: string = 'YBMKKSF580S'

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

  /** 検索画面　呼出元判断 */
  static SEARCH_CHECK_YBMYHS: string = 'checkYBMYHS'

  /** 事業検索Msgキー　予算フラグ */
  static FG_YBMYHS: string = 'fgYbmyhs'

  /** アイテムID 製品群コード */
  private static ITEM_CD_SEIHINGUN: string = 'cdSeihingun'

  /** アイテムID 製品群名 */
  private static ITEM_NM_SEIHINGUN: string = 'nmSeihingun'

  /** アイテムID 製品群名略式 */
  private static ITEM_NM_SEIHINGUN_RYAKU: string = 'nmSeihingunRyaku'

  /** アイテムID 製品群体系 */
  private static ITEM_NO_KAISOLEVEL: string = 'noKaisolevel'

  /** アイテムID ツリー部品 */
  private static ITEM_TREE: string = 'tree'

  /** アイテムID JANコード */
  private static ITEM_CD_JAN: string = 'cdJAN'

  /** アイテムID 製品コード */
  private static ITEM_CD_SEIHIN: string = 'cdSeihin'

  /** アイテムID 製品名 */
  private static ITEM_NM_SEIHIN: string = 'nmSeihin'

  /** アイテムID スプレッド部品 */
  private static ITEM_SPREAD: string = 'spread'

  /** アイテムID 製品群検索ボタン */
  private static ITEM_SEIHINGUN_KENSAkU: string = 'body_button01'

  /** アイテムID 次へボタン */
  private static ITEM_NEXT: string = 'body_button02'

  /** アイテムID 前へボタン */
  private static ITEM_PREVIOUS: string = 'body_button03'

  /** アイテムID 製品表示ボタン */
  private static ITEM_SEIHIN_HYOJI: string = 'body_button04'

  /** アイテムID 製品検索ボタン */
  private static ITEM_SEIHIN_KENSAKU: string = 'body_button05'

  /** アイテムID タイトル */
  private static ITEM_TITLE: string = 'subtitle'

  /** アイテムID 製品群確定ボタン */
  private static ITEM_SEIHINGUN_KAKUTEI: string = 'kakutei_upper'

  /** アイテムID 製品確定ボタン */
  private static ITEM_SEIHIN_KAKUTEI: string = 'kakutei_lower'

  /** アイテムID 閉じるボタン */
  private static ITEM_CLOSE: string = 'close_ybm_search'

  /** アイテムID メッセージ表示域 */
  private static ITEM_MESSAGE: string = 'errorMessage'

  /** 画面名取得キー */
  private static SCREEN_NAME: string = 'YBMKKSF580S_SCREEN_NAME'

  /** 最大表示数取得キー */
  private static MAX_DISPLAY_CNT: string = 'YBMKKSF580S_MAX_DISPLAY_CNT'

  /** 最大検索数取得キー */
  private static MAX_SELECT_CNT: string = 'YBMKKSF580S_MAX_SELECT_CNT'

  /** 日付条件キー */
  private static TO_DATE_CONDITION: string = 'TO_DATE_CONDITION'

  /** 日付条件 適用終了日*/
  private static DT_TEKIYOSHURYO: string = 'DT_TEKIYOSHURYO'

  /** 日付条件 有効期限日 */
  private static DT_YUKOKIGEN: string = 'DT_YUKOKIGEN'

  /** 事業検索Msgキー 事業検索条件CBMMsg */
  private static CONDITON_MSG_KEY: string = 'jigyoKensakuJokenCBMMsg'

  /** 事業検索Msgキー 製品群CBMMsg */
  private static SEIHINGUN_MSG_KEY: string = 'seihingunKensakuCBMMsgList'

  /** 事業検索Msgキー 製品検索CBMMsg */
  private static SEIHIN_MSG_KEY: string = 'seihinKensakuCBMMsgList'

  /** 事業検索条件CBMMsgキー 製品検索フラグ */
  private static FG_SEIHIN_KEY: string = 'fgSeihin'

  /** 事業検索条件CBMMsgキー 日付条件 */
  private static TO_DATE_CONDITION_KEY: string = 'toDateCondition'

  /** 事業検索条件CBMMsgキー 製品検索フラグ */
  private static DT_KIJUN_KEY: string = 'dtKijun'

  /** 画面引継ぎ領域キー 対象日 */
  private static DT_TAISHO_KEY: string = 'dtTaisho'

  /** 画面引継ぎ領域キー 製品群コード */
  private static CD_SEIHINGUN_KEY: string = 'cdSeihingun'

  /** 画面引継ぎ領域キー 上位製品群コード */
  private static CD_JOISEIHINGUN_KEY: string = 'cdJoiseihingun'

  /** 画面引継ぎ領域キー 階層レベル */
  private static NO_KAISOLEVEL_KEY: string = 'noKaisolevel'

  /** 画面引継ぎ領域キー 階層レベル */
  private static JOKEN_KAISOLEVEL_KEY: string = 'noKaisoLevel'

  /** 画面引継ぎ領域キー 製品群名 */
  private static NM_SEIHINGUN_KEY: string = 'nmSeihingun'

  /** 画面引継ぎ領域キー 製品群略称 */
  private static NM_SEIHINGUN_RYAKUSHIKI_KEY: string = 'nmSeihingunRyakushiki'

  /** 画面引継ぎ領域キー JANコード */
  private static CD_JAN_KEY: string = 'cdJAN'

  /** 画面引継ぎ領域キー 製品コード */
  private static CD_SEIHIN_KEY: string = 'cdSeihin'

  /** 画面引継ぎ領域キー 製品略式名称 */
  private static NM_SEIHIN_RYAKUSHIKI_KEY: string = 'nmSeihinRyakushiki'

  /** 画面引継ぎ領域キー 容量 */
  private static QT_YORYO_KEY: string = 'qtYoryo'

  /** 画面引継ぎ領域キー 入数 */
  private static QT_IRISU_KEY: string = 'qtIrisu'

  /** 画面引継ぎ領域キー 受払単位 */
  private static IF_UKEHARAITANI_KEY: string = 'ifUkeharaitani'

  /** 画面引継ぎ領域キー 容量単位 */
  private static IF_YORYOTANI_KEY: string = 'ifYoryotani'

  /** 画面引継ぎ領域キー 数量単位1 */
  private static IF_SURYOTANI1_KEY: string = 'ifSuryotani1'

  /** 画面引継ぎ領域キー 数量単位2 */
  private static IF_SURYOTANI2_KEY: string = 'ifSuryotani2'

  /** 画面引継ぎ領域キー 事業区分コード */
  private static CD_SEIHINGUN_LEVEL3_KEY: string = 'cdSeihingunLevel3'

  /** 画面引継ぎ領域キー 売上高区分コード */
  private static CD_SEIHINGUN_LEVEL4_KEY: string = 'cdSeihingunLevel4'

  /** 画面引継ぎ領域キー 市場区分コード */
  private static CD_SEIHINGUN_LEVEL5_KEY: string = 'cdSeihingunLevel5'

  /** 画面引継ぎ領域キー 市場区分コード */
  private static CD_SEIHINGUN_LEVEL6_KEY: string = 'cdSeihingunLevel6'

  /** 画面引継ぎ領域キー 事業区分略式名称 */
  private static NM_SEIHINGUN_RYAKU_LEVEL3_KEY: string = 'nmSeihingunLevel3'

  /** 画面引継ぎ領域キー 売上高区分略式名称 */
  private static NM_SEIHINGUN_RYAKU_LEVEL4_KEY: string = 'nmSeihingunLevel4'

  /** 画面引継ぎ領域キー 市場区分略式名称 */
  private static NM_SEIHINGUN_RYAKU_LEVEL5_KEY: string = 'nmSeihingunLevel5'

  /** 画面引継ぎ領域キー 製品群略式名称 */
  private static NM_SEIHINGUN_RYAKU_LEVEL6_KEY: string = 'nmSeihingunLevel6'

  /** 画面引継ぎ領域キー 表示順 */
  private static NO_HYOJI_KEY: string = 'noHyoji'

  /** 画面引継ぎ領域キー 製品名 */
  private static NM_SEIHIN_KEY: string = 'nmSeihin'

  /** 画面引継ぎ領域キー 代表製品コード */
  private static CD_DAIHYOSEIHIN_KEY: string = 'cdDaihyoseihin'

  /** 画面引継ぎ領域キー M価 */
  private static MN_M_KA_KEY: string = 'mnMKa'

  /** 画面引継ぎ領域キー C価 */
  private static MN_C_KA_KEY: string = 'mnCKa'

  /** 画面引継ぎ領域キー 旧M価 */
  private static MN_KYU_M_KA_KEY: string = 'mnKyuMKa'

  /** 画面引継ぎ領域キー 旧C価 */
  private static MN_KYU_C_KA_KEY: string = 'mnKyuCKa'

  /** 画面引継ぎ領域キー M価改定日 */
  private static DT_M_KA_KAITEI_KEY: string = 'dtMKaKaitei'

  /** 画面引継ぎ領域キー C価改定日 */
  private static DT_C_KA_KAITEI_KEY: string = 'dtCKaKaitei'

  /** コマンド名(Verb) 製品群取得 */
  private static COMMAND_GET_SEIHINGUN: string =
    'YBMJigyoKensakuCBSHandler.getSeihingun'

  /** コマンド名(Verb) 製品取得 */
  private static COMMAND_GET_SEIHIN: string =
    'YBMJigyoKensakuCBSHandler.getSeihin'

  /** ツリー部　インデックス ツリー表示文字列 */
  private static TREE_VIEW: number = 0

  /** ツリー部 インデックス 製品群コード */
  private static TREE_CD_SEIHINGUN: number = 1

  /** ツリー部 インデックス 親コード */
  private static TREE_CD_JOI_SEIHINGUN: number = 2

  /** ツリー部 インデックス 階層レベル */
  private static TREE_NO_KAISOLEVEL: number = 3

  /** ツリー部 インデックス 表示順 */
  private static TREE_NO_HYOJI: number = 4

  /** ツリー部 インデックス 製品群名称 */
  private static TREE_NM_SEIHINGUN: number = 6

  /** ツリー部 インデックス 製品群略称 */
  private static TREE_NM_SEIHINGUN_RYAKU: number = 5

  /** ツリー部 カラム数 */
  private static TREE_COLUMN_WIDTH: number = 7

  /** スプレッド部 インデックス 選択 */
  private static SPREAD_SELECT: number = 0

  /** スプレッド部 インデックス 製品コード */
  private static SPREAD_CD_SEIHIN: number = 1

  /** スプレッド部 インデックス 製品略式名称 */
  private static SPREAD_NM_SEIHIN_RYAKUSHIKI: number = 2

  /** スプレッド部 インデックス 容量 */
  private static SPREAD_QT_YORYO: number = 3

  /** スプレッド部 インデックス 容量単位 */
  private static SPREAD_IF_YORYOTANI: number = 4

  /** スプレッド部 インデックス 入数 */
  private static SPREAD_QT_IRISU: number = 5

  /** スプレッド部 インデックス 受払単位 */
  private static SPREAD_IF_UKEHARAITANI: number = 6

  /** スプレッド部 インデックス JANコード */
  private static SPREAD_CD_JAN: number = 7

  /** スプレッド部 インデックス 事業区分 */
  private static SPREAD_NM_SEIHINGUN_RYAKU_LEVEL3: number = 8

  /** スプレッド部 インデックス 売上高区分 */
  private static SPREAD_NM_SEIHINGUN_RYAKU_LEVEL4: number = 9

  /** スプレッド部 インデックス 市場区分 */
  private static SPREAD_NM_SEIHINGUN_RYAKU_LEVEL5: number = 10

  /** スプレッド部 インデックス 製品群 */
  private static SPREAD_NM_SEIHINGUN_RYAKU_LEVEL6: number = 11

  /** スプレッド部 インデックス 製品名 */
  private static SPREAD_NM_SEIHIN: number = 12

  /** スプレッド部 インデックス 製品群レベル3コード */
  private static SPREAD_CD_SEIHINGUN_LEVEL3: number = 13

  /** スプレッド部 インデックス 製品群レベル4コード */
  private static SPREAD_CD_SEIHINGUN_LEVEL4: number = 14

  /** スプレッド部 インデックス 製品群レベル5コード */
  private static SPREAD_CD_SEIHINGUN_LEVEL5: number = 15

  /** スプレッド部 インデックス 製品群レベル6コード */
  private static SPREAD_CD_SEIHINGUN_LEVEL6: number = 16

  /** スプレッド部 インデックス 代表製品コード */
  private static SPREAD_CD_DAIHYOSEIHIN: number = 17

  /** スプレッド部 インデックス M価 */
  private static SPREAD_MN_M_KA: number = 18

  /** スプレッド部 インデックス C価 */
  private static SPREAD_MN_C_KA: number = 19

  /** スプレッド部 インデックス 旧M価 */
  private static SPREAD_MN_KYU_M_KA: number = 20

  /** スプレッド部 インデックス 旧C価 */
  private static SPREAD_MN_KYU_C_KA: number = 21

  /** スプレッド部 インデックス M価改定日 */
  private static SPREAD_DT_M_KA_KAITEI: number = 22

  /** スプレッド部 インデックス C価改定日 */
  private static SPREAD_DT_C_KA_KAITEI: number = 23

  /** スプレッド部 インデックス 数量単位2 */
  private static SPREAD_IF_SURYOTANI2: number = 24

  /** スプレッド部 インデックス 数量単位1 */
  private static SPREAD_IF_SURYOTANI1: number = 25

  /** 最下位階層レベル */
  private static LOWEST_LEVEL: string = '6'

  /** 次へ、前へ検索結果格納キー */
  private static SEARCH_RESULTS_KEY: string = 'results_key'

  /** 次へ、前へ検索インデックスキー */
  private static SEARCH_INDEX_KEY: string = 'index_key'

  /** 次へ、前へ検索キーワードキー */
  private static SEARCH_KEYWORD_KEY: string = 'keyword_key'

  /** 次へ、前へ検索 製品群略称 キー */
  private static SEARCH_NM_SEIHINGUN_RYAKU_KEY: string = 'nmSeihingunRyaku_key'

  /** 製品検索Msg エラーメッセージコード */
  private static MSG_CD_ERR_MESSAGE: string = 'cdErrMessage'

  /** 製品検索Msg エラーメッセージの埋め文字 */
  private static MSG_IF_ERR_MSG_PARAMS: string = 'ifErrMsgParamsList'

  /** ユーザ領域キー 起動モード */
  private static KIDO_MODE: string = 'kidoMode'

  /**
   * 初期表示イベントハンドラです。
   */
  beforeDisplay(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF580SLogic.beforeDisplay() start')
    try {
      // 変数宣言
      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl

      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let title: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_HEAD,
        YBMKKSF580SLogic.ITEM_TITLE,
      )
      let next: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NEXT,
      )
      let previous: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_PREVIOUS,
      )
      let seihingunKensaku: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_SEIHINGUN_KENSAkU,
      )
      let seihinHyoji: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_SEIHIN_HYOJI,
      )
      let seihinKensaku: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_SEIHIN_KENSAKU,
      )
      let tree: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_TREE,
      )
      let spread: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_SPREAD,
      )
      let seihingunKakutei: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_SEIHINGUN_KAKUTEI,
      )
      let seihinKakutei: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_SEIHIN_KAKUTEI,
      )
      let close: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_CLOSE,
      )
      let cdSeihingun: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_CD_SEIHINGUN,
      )
      let nmSeihingun: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NM_SEIHINGUN,
      )
      let nmSeihingunRyaku: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NM_SEIHINGUN_RYAKU,
      )
      let noKaisolevel: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NO_KAISOLEVEL,
      )
      let cdJan: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_CD_JAN,
      )
      let cdSeihin: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_CD_SEIHIN,
      )
      let nmSeihin: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NM_SEIHIN,
      )

      // ヘッダ情報の設定
      let screenName: string = SMSPropsInfos.getProperty(
        YBMKKSF580SLogic.SUB_SYSTEM_ID,
        YBMKKSF580SLogic.SCREEN_NAME,
      ) as string
      title.setValue(screenName)

      //最大表示件数取得
      let maxDisplayCnt: string = SMSPropsInfos.getProperty(
        YBMKKSF580SLogic.SUB_SYSTEM_ID,
        YBMKKSF580SLogic.MAX_DISPLAY_CNT,
      ) as string
      loginInfo.setQtSaidaiHyouji(maxDisplayCnt)

      //最大検索件数取得
      let maxSelectCnt: string = SMSPropsInfos.getProperty(
        YBMKKSF580SLogic.SUB_SYSTEM_ID,
        YBMKKSF580SLogic.MAX_SELECT_CNT,
      ) as string
      loginInfo.setQtSaidaiKensaku(maxSelectCnt)

      // 起動モードの取得
      let stMode: string = null!
      stMode = context.getSucceedData(YBMKKSF580SLogic.SEARCH_ST_MODE) as string
      if (stMode == null) {
        SMSCLLog.debug('起動パラメタがnullです。')
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // 対象日を取得・保存
      let dtTaisho: string = null!
      dtTaisho = context.getSucceedData(
        YBMKKSF580SLogic.DT_TAISHO_KEY,
      ) as string
      this.putUserData(context, YBMKKSF580SLogic.DT_TAISHO_KEY, dtTaisho)

      // 日付条件を取得
      let toDateCondition: string = null!
      toDateCondition = context.getSucceedData(
        YBMKKSF580SLogic.TO_DATE_CONDITION,
      ) as string
      this.putUserData(
        context,
        YBMKKSF580SLogic.TO_DATE_CONDITION,
        toDateCondition,
      )

      // 起動モード保存
      this.putUserData(context, YBMKKSF580SLogic.KIDO_MODE, stMode)

      // 予算フラグの取得
      let fgYBMYHS: string = null!
      fgYBMYHS = context.getSucceedData(
        YBMKKSF580SLogic.SEARCH_CHECK_YBMYHS,
      ) as string
      // 予算フラグ保存
      this.putUserData(context, YBMKKSF580SLogic.SEARCH_CHECK_YBMYHS, fgYBMYHS)

      // フッタボタンラベル設定
      seihingunKakutei.setValue('製品群確定')
      seihinKakutei.setValue('製品確定')
      close.setValue('閉じる')

      // 次へ、前へボタン非活性化
      next.setEnabled(false)
      previous.setEnabled(false)

      // ボタンの活性・非活性設定
      if (stMode.equals('01')) {
        // ツリー検索のみ
        seihingunKensaku.setEnabled(true)
        seihinHyoji.setEnabled(false)
        seihinKensaku.setEnabled(false)
        seihingunKakutei.setEnabled(true)
        seihinKakutei.setEnabled(false)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
        cdJan.setEnabled(false)
        cdSeihin.setEnabled(false)
        nmSeihin.setEnabled(false)
      } else if (stMode.equals('02')) {
        // ツリー検索後、下位マスタ検索
        seihingunKensaku.setEnabled(true)
        seihinHyoji.setEnabled(false)
        seihinKensaku.setEnabled(true)
        seihingunKakutei.setEnabled(false)
        seihinKakutei.setEnabled(true)
        cdJan.setEnabled(true)
        cdSeihin.setEnabled(true)
        nmSeihin.setEnabled(true)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
      } else if (stMode.equals('03')) {
        // 下位マスタのみ
        seihingunKensaku.setEnabled(false)
        seihinHyoji.setEnabled(false)
        seihinKensaku.setEnabled(true)
        seihingunKakutei.setEnabled(false)
        seihinKakutei.setEnabled(true)
        close.setEnabled(true)
        tree.setEnabled(false)
        spread.setEnabled(false)
        cdSeihingun.setEnabled(false)
        nmSeihingun.setEnabled(false)
        noKaisolevel.setEnabled(false)
        nmSeihingunRyaku.setEnabled(false)
      } else if (stMode.equals('04')) {
        // ツリー検索、条件検索共有
        seihinHyoji.setEnabled(false)
        seihingunKakutei.setEnabled(false)
      } else {
        // 不正パラメタ
        SMSCLLog.debug('起動パラメタが異常値です。')
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }
    } catch (th: any) {
      // エラーアダプタ呼出し
      SMSCLLog.debug('YBMKKSF580SLogic:beforeDisplay() error')
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF580SLogic.beforeDisplay() end')
  }

  /**
   * 製品群検索ボタン押下イベントハンドラです。
   */
  findSeihingun(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF580SLogic.findSeihingun() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let next: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NEXT,
      )
      let previous: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_PREVIOUS,
      )
      let message: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_MESSAGE,
      )
      let nmSeihingunRyaku: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NM_SEIHINGUN_RYAKU,
      )
      let seihinHyoji: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_SEIHIN_HYOJI,
      )

      //メッセージクリア
      message.setValue('')

      // 事業検索Msg
      let inData: HashMap = this.prepareRequest(context)

      // inDataがnullなら必須入力チェックエラー
      if (inData == null) {
        return
      }

      // ツリー内容をクリア
      tree.setRoot(null!)

      // 共有領域リセット
      this.removeUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY as any)
      this.removeUserData(context, YBMKKSF580SLogic.SEARCH_INDEX_KEY as any)
      this.removeUserData(
        context,
        YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY as any,
      )

      // 次へ、前へボタン非活性化
      next.setEnabled(false)
      previous.setEnabled(false)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF580SLogic.CBS_NAME,
        YBMKKSF580SLogic.COMMAND_GET_SEIHINGUN,
        inData,
      )

      // 戻り値nullならシステムエラー(共通部品でチェック済み？)
      if (outData == null) {
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      let sysData: HashMap = null!
      if (outData.containsKey(YBMKKSF580SLogic.SYS_DATA)) {
        sysData = outData.get(YBMKKSF580SLogic.SYS_DATA) as HashMap
      } else {
        // 戻り値nullならシステムエラー
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      // エラーフラグを取得
      let cdErrMessage: string = sysData.get(
        YBMKKSF580SLogic.MSG_CD_ERR_MESSAGE,
      ) as string

      // 業務エラー処理
      if (cdErrMessage != null) {
        SMSCLLog.debug(
          'YBMKKSF580SLogic.showData:cdErrMessage：' + cdErrMessage,
        )

        if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW003)) {
          // 検索結果０件
          let params: string[] = sysData.get(
            YBMKKSF580SLogic.MSG_IF_ERR_MSG_PARAMS,
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
            YBMKKSF580SLogic.MSG_IF_ERR_MSG_PARAMS,
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

      let seihingunList: HashMap[] = null!
      if (sysData.containsKey(YBMKKSF580SLogic.SEIHINGUN_MSG_KEY)) {
        seihingunList = sysData.get(
          YBMKKSF580SLogic.SEIHINGUN_MSG_KEY,
        ) as HashMap[]
      } else {
        // 検索結果がなければシステムエラー(ここもチェック済みか・・・？)
        throw new SMSRuntimeException(
          context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
        )
      }

      //ツリー作成
      this.buildTree(context, seihingunList)

      // ツリー活性化
      tree.setEnabled(true)

      // 製品群略称活性化
      nmSeihingunRyaku.setEnabled(true)

      // 次へ、前へボタン活性化
      next.setEnabled(true)
      previous.setEnabled(true)

      let stMode: string = null!
      stMode = this.getUserData(context, YBMKKSF580SLogic.KIDO_MODE) as string

      if (stMode == null) {
        stMode = ''
      }

      if (stMode.equals('02') || stMode.equals('04')) {
        // 製品表示ボタン活性化
        seihinHyoji.setEnabled(true)
      }

      let count: string = new Integer(seihingunList.length).toString()
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.YCSCMNMSI020, count),
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF580SLogic.findSeihingun() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF580SLogic.findSeihingun() end')
  }

  /**
   * 次へボタン押下イベントハンドラです。
   */
  nextSeihingun(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF580SLogic.nextSeihingun() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let next: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NEXT,
      )
      let previous: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_PREVIOUS,
      )
      let message: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_MESSAGE,
      )
      let nmSeihingunRyaku: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NM_SEIHINGUN_RYAKU,
      )

      // メッセージクリア
      message.setValue('')

      let nmValue: string = null!
      nmValue = nmSeihingunRyaku.getValue()

      // データビーンはnullを返さないはずなので恐らく不要だが、nullなら空文字列を設定
      if (nmValue == null) {
        nmValue = ''
      }

      // 検索条件が未入力の場合打ち切り
      if (nmValue.trim().equals('')) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.SMSCMNMCW138, '製品群略称'),
        )

        // 念のため共有領域リセット
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY as any)
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_INDEX_KEY as any)
        this.removeUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY as any,
        )
        return
      }

      // 前回検索条件
      let nmValueObj: any = this.getUserData(
        context,
        YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY,
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
        YBMKKSF580SLogic.SEARCH_RESULTS_KEY,
      )

      if (same && object != null) {
        // 検索条件が前回と同じ場合、前回検索結果を再利用
        results = object as SMSJFTreeNode[]
        index = (
          this.getUserData(
            context,
            YBMKKSF580SLogic.SEARCH_INDEX_KEY,
          ) as Integer
        ).intValue()
        index++
        tree.setCursorNode(results[index])
        previous.setEnabled(true)
        if (index == results.length - 1) {
          // 最終データなら非活性
          next.setEnabled(false)
          returnInfo.setFocus(
            YBMKKSF580SLogic.FRAME_BODY,
            YBMKKSF580SLogic.ITEM_PREVIOUS,
          )
        }
        this.putUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY, results)
        this.putUserData(
          context,
          YBMKKSF580SLogic.SEARCH_INDEX_KEY,
          new Integer(index),
        )

        SMSCLLog.debug('YBMKKSF580SLogic.nextSeihingun() end')
        return
      }

      // 前回検索結果が無ければ検索する。
      results = tree.search(
        YBMKKSF580SLogic.TREE_NM_SEIHINGUN_RYAKU,
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
        this.putUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY, results)
        this.putUserData(
          context,
          YBMKKSF580SLogic.SEARCH_INDEX_KEY,
          new Integer(index),
        )
        this.putUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY,
          nmValue,
        )
        previous.setEnabled(false)
        if (results.length == 1) {
          // 長さ1なら次へ、前へボタン非活性
          next.setEnabled(false)
          previous.setEnabled(false)
          returnInfo.setFocus(
            YBMKKSF580SLogic.FRAME_BODY,
            YBMKKSF580SLogic.ITEM_TREE,
          )
          SMSCLLog.debug('YBMKKSF580SLogic.nextSeihingun() end')
          return
        }
        if (index == results.length - 1) {
          // 最終データなら非活性
          next.setEnabled(false)
          returnInfo.setFocus(
            YBMKKSF580SLogic.FRAME_BODY,
            YBMKKSF580SLogic.ITEM_PREVIOUS,
          )
          SMSCLLog.debug('YBMKKSF580SLogic.nextSeihingun() end')
          return
        }
      } else {
        // 検索0件
        this.putUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY,
          nmValue,
        )
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.SMSCMNMCW003, '製品群'),
        )
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY as any)
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_INDEX_KEY as any)
        this.removeUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY as any,
        )
        return
      }
    } catch (th: any) {
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF580SLogic.nextSeihingun() end')
  }

  /**
   * 前へボタン押下イベントハンドラです。
   */
  previousSeihingun(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF580SLogic.previousSeihingun() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let nmSeihingunRyaku: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NM_SEIHINGUN_RYAKU,
      )
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let next: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NEXT,
      )
      let previous: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_PREVIOUS,
      )
      let message: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_MESSAGE,
      )

      // メッセージクリア
      message.setValue('')

      let nmValue: string = null!
      nmValue = nmSeihingunRyaku.getValue()

      // データビーンはnullを返さないはずなので恐らく不要だが、nullなら空文字列を設定
      if (nmValue == null) {
        nmValue = ''
      }

      if (nmValue.trim().equals('')) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.SMSCMNMCW138, '製品群略称'),
        )

        // 念のため共有領域リセット
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY as any)
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_INDEX_KEY as any)
        this.removeUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY as any,
        )
        return
      }

      // 前回検索条件
      let nmValueObj: any = this.getUserData(
        context,
        YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY,
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
        YBMKKSF580SLogic.SEARCH_RESULTS_KEY,
      )

      if (same && object != null) {
        results = object as SMSJFTreeNode[]
        index = (
          this.getUserData(
            context,
            YBMKKSF580SLogic.SEARCH_INDEX_KEY,
          ) as Integer
        ).intValue()
        index--
        tree.setCursorNode(results[index])
        next.setEnabled(true)
        if (index == 0) {
          // 最前データなら非活性
          previous.setEnabled(false)
          returnInfo.setFocus(
            YBMKKSF580SLogic.FRAME_BODY,
            YBMKKSF580SLogic.ITEM_NEXT,
          )
        }
        this.putUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY, results)
        this.putUserData(
          context,
          YBMKKSF580SLogic.SEARCH_INDEX_KEY,
          new Integer(index),
        )

        SMSCLLog.debug('YBMKKSF580SLogic.nextSeihingun() end')
        return
      }
      // 前回検索結果が無ければ検索する。
      results = tree.search(
        YBMKKSF580SLogic.TREE_NM_SEIHINGUN_RYAKU,
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
        this.putUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY, results)
        this.putUserData(
          context,
          YBMKKSF580SLogic.SEARCH_INDEX_KEY,
          new Integer(index),
        )
        this.putUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY,
          nmValue,
        )
        previous.setEnabled(false)
        // 前へボタンは非活性なので次へボタンにフォーカス設定
        returnInfo.setFocus(
          YBMKKSF580SLogic.FRAME_BODY,
          YBMKKSF580SLogic.ITEM_NEXT,
        )
        if (results.length == 1) {
          // 長さ1なら次へボタン非活性
          next.setEnabled(false)
          returnInfo.setFocus(
            YBMKKSF580SLogic.FRAME_BODY,
            YBMKKSF580SLogic.ITEM_TREE,
          )
          SMSCLLog.debug('YBMKKSF580SLogic.previousSeihingun() end')
          return
        }
      } else {
        // 検索0件
        this.putUserData(context, YBMKKSF580SLogic.SEARCH_KEYWORD_KEY, nmValue)
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.SMSCMNMCW003, '製品群'),
        )
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY as any)
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_INDEX_KEY as any)
        this.removeUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY as any,
        )
        return
      }
    } catch (th: any) {
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF580SLogic.previousSeihingun() end')
  }

  /**
   * 製品表示ボタン押下イベントハンドラです。
   */
  viewSeihin(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF580SLogic.viewSeihin() start')
    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let message: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_MESSAGE,
      )
      message.setValue('')

      let node: SMSJFTreeNode = null!

      node = tree.getCursorNode()

      if (node == null) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '製品群'),
        )
        return
      }
      let noKaisolevel: string = node.getColumnObject(
        YBMKKSF580SLogic.TREE_NO_KAISOLEVEL,
      ) as string
      if (!noKaisolevel.equals(YBMKKSF580SLogic.LOWEST_LEVEL)) {
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '製品群'),
        )
        return
      }
      let cdSeihingun: string = null!
      cdSeihingun = node.getColumnObject(
        YBMKKSF580SLogic.TREE_CD_SEIHINGUN,
      ) as string

      // EJB呼び出し準備
      let inData: HashMap = new HashMap()
      let joken: HashMap = new HashMap()
      // 製品群コード
      joken.put(YBMKKSF580SLogic.CD_SEIHINGUN_KEY, cdSeihingun)
      // ツリー検索後の製品検索はフラグ"0"を設定。
      joken.put(YBMKKSF580SLogic.FG_SEIHIN_KEY, '0')
      // 対象日
      let dtTaisho: string = this.getUserData(
        context,
        YBMKKSF580SLogic.DT_TAISHO_KEY,
      ) as string

      if (dtTaisho == null) {
        // 入力されていない場合は運用日付を設定
        let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
          context,
        ) as SMSLoginInfoImpl
        joken.put(YBMKKSF580SLogic.DT_KIJUN_KEY, loginInfo.getDtUnyo())
      } else {
        if (SMSCheckField.checkField(SMSCheckField.FIELD_D, dtTaisho)) {
          joken.put(YBMKKSF580SLogic.DT_KIJUN_KEY, dtTaisho)
        } else {
          let params = ['対象日']
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
        YBMKKSF580SLogic.TO_DATE_CONDITION,
      ) as string
      if (toDateCondition == null) {
        // 設定されていない場合は有効期限日
        joken.put(
          YBMKKSF580SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF580SLogic.DT_YUKOKIGEN,
        )
      } else {
        // 設定されている場合は適用終了日
        joken.put(
          YBMKKSF580SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF580SLogic.DT_TEKIYOSHURYO,
        )
      }

      //予算フラグ
      let fgYBMYHS: string = this.getUserData(
        context,
        YBMKKSF580SLogic.SEARCH_CHECK_YBMYHS,
      ) as string

      if (fgYBMYHS == null) {
        //予算フラグが無い場合は0をセット
        joken.put(YBMKKSF580SLogic.SEARCH_CHECK_YBMYHS, '0')
      } else {
        //予算フラグをセット
        joken.put(YBMKKSF580SLogic.FG_YBMYHS, fgYBMYHS)
      }

      inData.put(YBMKKSF580SLogic.CONDITON_MSG_KEY, joken)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF580SLogic.CBS_NAME,
        YBMKKSF580SLogic.COMMAND_GET_SEIHIN,
        inData,
      )

      this.setDataToSpread(context, returnInfo, outData)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF580SLogic.viewSeihin error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF580SLogic.viewSeihin() end')
  }

  /**
   * 製品検索ボタン押下イベントハンドラです。
   */
  findSeihin(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF580SLogic.findSeihin() start')
    try {
      // データビーン取得
      let current: JCFScreenData = context.getCurrentScreenData()
      let cdJan: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_CD_JAN,
      )
      let cdSeihin: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_CD_SEIHIN,
      )
      let nmSeihin: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_NM_SEIHIN,
      )
      let message: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_MESSAGE,
      )
      message.setValue('')

      // 入力チェック
      if (
        cdJan.getValue().trim().equals('') &&
        cdSeihin.getValue().trim().equals('') &&
        nmSeihin.getValue().trim().equals('')
      ) {
        // JANコード、製品コード、製品名ともに未入力の場合はエラー
        SMSCLLog.debug('コード、名称ともに未入力')
        let param: string = 'JANコード、製品コード、製品名'
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW026, param),
        )
        returnInfo.setFocus(
          YBMKKSF580SLogic.FRAME_BODY,
          YBMKKSF580SLogic.ITEM_CD_JAN,
        )
        return
      }

      // リクエストデータ生成
      let inData: HashMap = new HashMap()
      let joken: HashMap = new HashMap()

      // JANコード
      if (!cdJan.getValue().trim().equals('')) {
        joken.put(YBMKKSF580SLogic.CD_JAN_KEY, cdJan.getValue())
      }

      // 製品コード
      if (!cdSeihin.getValue().trim().equals('')) {
        joken.put(YBMKKSF580SLogic.CD_SEIHIN_KEY, cdSeihin.getValue())
      }

      // 製品名
      if (!nmSeihin.getValue().trim().equals('')) {
        joken.put(YBMKKSF580SLogic.NM_SEIHIN_KEY, nmSeihin.getValue())
      }

      // 対象日
      let dtTaisho: string = null!
      dtTaisho = this.getUserData(
        context,
        YBMKKSF580SLogic.DT_TAISHO_KEY,
      ) as string
      if (dtTaisho == null) {
        // 入力されていない場合は運用日付を設定
        let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
          context,
        ) as SMSLoginInfoImpl
        joken.put(YBMKKSF580SLogic.DT_KIJUN_KEY, loginInfo.getDtUnyo())
      } else {
        if (SMSCheckField.checkField(SMSCheckField.FIELD_D, dtTaisho)) {
          joken.put(YBMKKSF580SLogic.DT_KIJUN_KEY, dtTaisho)
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
        YBMKKSF580SLogic.TO_DATE_CONDITION,
      ) as string
      if (toDateCondition == null) {
        // 設定されていない場合は有効期限日
        joken.put(
          YBMKKSF580SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF580SLogic.DT_YUKOKIGEN,
        )
      } else {
        // 設定されている場合は適用終了日
        joken.put(
          YBMKKSF580SLogic.TO_DATE_CONDITION_KEY,
          YBMKKSF580SLogic.DT_TEKIYOSHURYO,
        )
      }

      // 製品検索の場合は"1"を設定する。
      joken.put(YBMKKSF580SLogic.FG_SEIHIN_KEY, '1')

      // 予算フラグの取得
      let fgYBMYHS: string = this.getUserData(
        context,
        YBMKKSF580SLogic.SEARCH_CHECK_YBMYHS,
      ) as string

      joken.put(YBMKKSF580SLogic.FG_YBMYHS, fgYBMYHS)

      inData.put(YBMKKSF580SLogic.CONDITON_MSG_KEY, joken)

      let outData: HashMap = null!

      // EJB呼び出し
      outData = this.callEJB(
        context,
        event,
        YBMKKSF580SLogic.CBS_NAME,
        YBMKKSF580SLogic.COMMAND_GET_SEIHIN,
        inData,
      )

      // スプレッド部へ表示
      this.setDataToSpread(context, returnInfo, outData)
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF580SLogic.findSeihin() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF580SLogic.findSeihin() end')
  }

  /**
   * 製品群確定ボタン押下イベントハンドラです。
   */
  kakuteiUpper(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF580SLogic.kakuteiUpper() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let tree: SMSJFTreeData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_TREE,
      ) as SMSJFTreeData
      let message: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_MESSAGE,
      )
      let selected: SMSJFTreeNode = null!
      selected = tree.getCursorNode()
      if (selected == null) {
        // 未選択　エラーメッセージ表示
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '製品群'),
        )
        returnInfo.cancelScreenTransition()
        return
      }
      // 画面引継ぎ領域へデータ格納
      let objects: string[] = selected.getColumnObjects() as string[]
      context.putSucceedData(
        YBMKKSF580SLogic.CD_SEIHINGUN_KEY,
        objects[YBMKKSF580SLogic.TREE_CD_SEIHINGUN],
      )
      context.putSucceedData(
        YBMKKSF580SLogic.CD_JOISEIHINGUN_KEY,
        objects[YBMKKSF580SLogic.TREE_CD_JOI_SEIHINGUN],
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NO_KAISOLEVEL_KEY,
        objects[YBMKKSF580SLogic.TREE_NO_KAISOLEVEL],
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NM_SEIHINGUN_KEY,
        objects[YBMKKSF580SLogic.TREE_NM_SEIHINGUN],
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NM_SEIHINGUN_RYAKUSHIKI_KEY,
        objects[YBMKKSF580SLogic.TREE_NM_SEIHINGUN_RYAKU],
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF580SLogic.kakuteiUpper error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF580SLogic.kakuteiUpper() end')
  }

  /**
   * 製品確定ボタン押下イベントハンドラです。
   */
  kakuteiLower(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF580SLogic.kakuteiLower() start')
    try {
      let current: JCFScreenData = context.getCurrentScreenData()
      let spread: SMSJCFSpreadData = current.getItemData(
        YBMKKSF580SLogic.FRAME_BODY,
        YBMKKSF580SLogic.ITEM_SPREAD,
      ) as SMSJCFSpreadData
      let message: JCFItemData = current.getItemData(
        YBMKKSF580SLogic.FRAME_FOOT,
        YBMKKSF580SLogic.ITEM_MESSAGE,
      )

      let count: number = 0
      let selectedRow: number = 0
      for (let i = 0; i < spread.getRowCount(); i++) {
        if (spread.getCellBooleanValue(i, YBMKKSF580SLogic.SPREAD_SELECT)) {
          count++
          selectedRow = i
        }
      }

      if (count == 0) {
        // 未選択
        message.setValue(
          context
            .getMessageUtil()
            .getMessage(SMSMessageConst.YCSCMNMCW033, '製品'),
        )
        SMSCLLog.debug('YBMKKSF580SLogic.kakuteiLower() error')
        returnInfo.cancelScreenTransition()
        return
      } else if (count > 1) {
        // 複数選択
        message.setValue(
          context.getMessageUtil().getMessage(SMSMessageConst.YBMYHSMCW013),
        )
        SMSCLLog.debug('YBMKKSF580SLogic.kakuteiLower() error')
        returnInfo.cancelScreenTransition()
        return
      }

      // 画面引継ぎ領域へデータ格納
      context.putSucceedData(
        YBMKKSF580SLogic.CD_SEIHIN_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_CD_SEIHIN),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NM_SEIHIN_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_NM_SEIHIN),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NM_SEIHIN_RYAKUSHIKI_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_NM_SEIHIN_RYAKUSHIKI,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.IF_YORYOTANI_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_IF_YORYOTANI),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.IF_SURYOTANI1_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_IF_SURYOTANI1),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.IF_SURYOTANI2_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_IF_SURYOTANI2),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL3_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_CD_SEIHINGUN_LEVEL3,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL4_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_CD_SEIHINGUN_LEVEL4,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL5_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_CD_SEIHINGUN_LEVEL5,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL6_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_CD_SEIHINGUN_LEVEL6,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL3_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_NM_SEIHINGUN_RYAKU_LEVEL3,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL4_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_NM_SEIHINGUN_RYAKU_LEVEL4,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL5_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_NM_SEIHINGUN_RYAKU_LEVEL5,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL6_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_NM_SEIHINGUN_RYAKU_LEVEL6,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.CD_DAIHYOSEIHIN_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_CD_DAIHYOSEIHIN,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.MN_M_KA_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_MN_M_KA),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.MN_C_KA_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_MN_C_KA),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.MN_KYU_M_KA_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_MN_KYU_M_KA),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.MN_KYU_C_KA_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_MN_KYU_C_KA),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.DT_M_KA_KAITEI_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_DT_M_KA_KAITEI,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.DT_C_KA_KAITEI_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_DT_C_KA_KAITEI,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.QT_YORYO_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_QT_YORYO),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.QT_IRISU_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_QT_IRISU),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.IF_UKEHARAITANI_KEY,
        spread.getCellValue(
          selectedRow,
          YBMKKSF580SLogic.SPREAD_IF_UKEHARAITANI,
        ),
      )
      context.putSucceedData(
        YBMKKSF580SLogic.CD_JAN_KEY,
        spread.getCellValue(selectedRow, YBMKKSF580SLogic.SPREAD_CD_JAN),
      )
    } catch (th: any) {
      SMSCLLog.debug('YBMKKSF580SLogic.kakuteiLower() error')
      SMSCLLog.debug(th.toString())
      super.callSubErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF580SLogic.kakuteiLower() end')
  }

  /**
   * 閉じるボタン押下イベントハンドラです。
   */
  closeYbmSearch(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YBMKKSF580SLogic.closeYbmSearch() start')
    super.removeUserData(context, YBMKKSF580SLogic.USECASE)
    SMSCLLog.debug('YBMKKSF580SLogic.closeYbmSearch() end')
  }

  /**
   * リクエスト用のHashMapを生成します。
   *
   */
  private prepareRequest(context: JCFContext): HashMap {
    SMSCLLog.debug('YBMKKSF580SLogic.prepareRequest() start')
    // 事業検索Msg
    let inData: HashMap = new HashMap()
    // データビーンの取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let cdSeihingun: JCFItemData = current.getItemData(
      YBMKKSF580SLogic.FRAME_BODY,
      YBMKKSF580SLogic.ITEM_CD_SEIHINGUN,
    )
    let nmSeihingun: JCFItemData = current.getItemData(
      YBMKKSF580SLogic.FRAME_BODY,
      YBMKKSF580SLogic.ITEM_NM_SEIHINGUN,
    )
    let kaisolevel: JCFComboBoxData = current.getItemData(
      YBMKKSF580SLogic.FRAME_BODY,
      YBMKKSF580SLogic.ITEM_NO_KAISOLEVEL,
    ) as JCFComboBoxData
    let tree: SMSJFTreeData = current.getItemData(
      YBMKKSF580SLogic.FRAME_BODY,
      YBMKKSF580SLogic.ITEM_TREE,
    ) as SMSJFTreeData
    let message: JCFItemData = current.getItemData(
      YBMKKSF580SLogic.FRAME_FOOT,
      YBMKKSF580SLogic.ITEM_MESSAGE,
    )

    if (
      ''.equals(cdSeihingun.getValue().trim()) &&
      ''.equals(nmSeihingun.getValue().trim())
    ) {
      SMSCLLog.debug('コード、名称ともに未入力')
      let param: string = '製品群コード、製品群名'
      message.setValue(
        context
          .getMessageUtil()
          .getMessage(SMSMessageConst.YCSCMNMCW026, param),
      )
      return null!
    }

    // 事業検索条件CBMMsg
    let joken: HashMap = new HashMap()
    // 製品群コード
    if (!''.equals(cdSeihingun.getValue())) {
      joken.put(YBMKKSF580SLogic.CD_SEIHINGUN_KEY, cdSeihingun.getValue())
    }
    // 製品群名
    if (!''.equals(nmSeihingun.getValue())) {
      joken.put(YBMKKSF580SLogic.NM_SEIHINGUN_KEY, nmSeihingun.getValue())
    }
    // 製品群体系
    let noKaisolevelValue: string = null!
    noKaisolevelValue = super.getComboID(kaisolevel)
    if (!'0'.equals(noKaisolevelValue)) {
      joken.put(YBMKKSF580SLogic.JOKEN_KAISOLEVEL_KEY, noKaisolevelValue)
    }
    // 対象日
    let dtTaisho: string = null!
    dtTaisho = super.getUserData(
      context,
      YBMKKSF580SLogic.DT_TAISHO_KEY,
    ) as string
    if (dtTaisho == null) {
      // 入力されていない場合は運用日付を設定
      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl
      joken.put(YBMKKSF580SLogic.DT_KIJUN_KEY, loginInfo.getDtUnyo())
    } else {
      if (SMSCheckField.checkField(SMSCheckField.FIELD_D, dtTaisho)) {
        joken.put(YBMKKSF580SLogic.DT_KIJUN_KEY, dtTaisho)
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
      YBMKKSF580SLogic.TO_DATE_CONDITION,
    ) as string
    if (toDateCondition == null) {
      // 設定されていない場合は有効期限日
      joken.put(
        YBMKKSF580SLogic.TO_DATE_CONDITION_KEY,
        YBMKKSF580SLogic.DT_YUKOKIGEN,
      )
    } else {
      // 設定されている場合は適用終了日
      joken.put(
        YBMKKSF580SLogic.TO_DATE_CONDITION_KEY,
        YBMKKSF580SLogic.DT_TEKIYOSHURYO,
      )
    }

    inData.put(YBMKKSF580SLogic.CONDITON_MSG_KEY, joken)
    SMSCLLog.debug('YBMKKSF580SLogic.prepareRequest() end')
    return inData
  }

  /**
   * ツリー構造を構築します。
   */
  private buildTree(context: JCFContext, seihingunList: HashMap[]) {
    SMSCLLog.debug('YBMKKSF580SLogic.buildTree() start')
    let current: JCFScreenData = context.getCurrentScreenData()
    let tree: SMSJFTreeData = current.getItemData(
      YBMKKSF580SLogic.FRAME_BODY,
      YBMKKSF580SLogic.ITEM_TREE,
    ) as SMSJFTreeData

    let dummy: string[] = ['', '', '', '', '', '']

    let root: SMSJFTreeNode = new SMSJFTreeNode(dummy)
    tree.setRoot(root)

    let objects: string[][] = create2DStringArray(
      seihingunList.length,
      YBMKKSF580SLogic.TREE_COLUMN_WIDTH,
    )

    let node: SMSJFTreeNode = null!
    let parent: SMSJFTreeNode = null!
    let results: SMSJFTreeNode[] = null!
    for (let i = 0; i < seihingunList.length; i++) {
      //ツリー表示部
      objects[i][YBMKKSF580SLogic.TREE_VIEW] =
        (seihingunList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_KEY) as string) +
        ' ' +
        (seihingunList[i].get(
          YBMKKSF580SLogic.NM_SEIHINGUN_RYAKUSHIKI_KEY,
        ) as string)
      // 製品群コード
      objects[i][YBMKKSF580SLogic.TREE_CD_SEIHINGUN] = seihingunList[i].get(
        YBMKKSF580SLogic.CD_SEIHINGUN_KEY,
      ) as string
      // 親コード
      objects[i][YBMKKSF580SLogic.TREE_CD_JOI_SEIHINGUN] = seihingunList[i].get(
        YBMKKSF580SLogic.CD_JOISEIHINGUN_KEY,
      ) as string
      // 階層レベル
      objects[i][YBMKKSF580SLogic.TREE_NO_KAISOLEVEL] = seihingunList[i].get(
        YBMKKSF580SLogic.NO_KAISOLEVEL_KEY,
      ) as string
      // 表示順
      objects[i][YBMKKSF580SLogic.TREE_NO_HYOJI] = seihingunList[i].get(
        YBMKKSF580SLogic.NO_HYOJI_KEY,
      ) as string
      // 製品群名
      objects[i][YBMKKSF580SLogic.TREE_NM_SEIHINGUN] = seihingunList[i].get(
        YBMKKSF580SLogic.NM_SEIHINGUN_KEY,
      ) as string
      // 製品群略称
      objects[i][YBMKKSF580SLogic.TREE_NM_SEIHINGUN_RYAKU] = seihingunList[
        i
      ].get(YBMKKSF580SLogic.NM_SEIHINGUN_RYAKUSHIKI_KEY) as string

      if (objects[i][YBMKKSF580SLogic.TREE_NO_KAISOLEVEL].equals('1')) {
        // 階層レベルが1の場合はrootノードの子とする。
        node = new SMSJFTreeNode(objects[i])
        root.add(node)
      } else {
        node = new SMSJFTreeNode(objects[i])
        results = tree.search(
          YBMKKSF580SLogic.TREE_CD_SEIHINGUN,
          objects[i][YBMKKSF580SLogic.TREE_CD_JOI_SEIHINGUN],
          true,
        )
        if (results.length != 0) {
          parent = results[0]
          parent.add(node)
        } else {
          SMSCLLog.debug('YBMKKSF580SLogic.buildTree() error')
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
    columnInfoVec.add(new SMSJFTreeColumnData(1, 0, '製品群コード'))
    columnInfoVec.add(new SMSJFTreeColumnData(2, 0, '上位製品群コード'))
    columnInfoVec.add(new SMSJFTreeColumnData(3, 0, '階層レベル'))
    columnInfoVec.add(new SMSJFTreeColumnData(4, 0, '表示順'))
    columnInfoVec.add(new SMSJFTreeColumnData(5, 0, '製品群名'))
    columnInfoVec.add(new SMSJFTreeColumnData(6, 0, '製品群略称'))
    tree.setColumnInfoVec(columnInfoVec)

    SMSCLLog.debug('YBMKKSF580SLogic.buildTree() end')
  }

  /**
   * HashMapからスプレッド部へデータをセットします。
   */
  private setDataToSpread(
    context: JCFContext,
    returnInfo: JCFReturnInfo,
    outData: HashMap,
  ) {
    SMSCLLog.debug('YBMKKSF580SLogic.setDataToSpread start')
    let current: JCFScreenData = context.getCurrentScreenData()
    let spread: SMSJCFSpreadData = current.getItemData(
      YBMKKSF580SLogic.FRAME_BODY,
      YBMKKSF580SLogic.ITEM_SPREAD,
    ) as SMSJCFSpreadData
    let message: JCFItemData = current.getItemData(
      YBMKKSF580SLogic.FRAME_FOOT,
      YBMKKSF580SLogic.ITEM_MESSAGE,
    )

    if (outData == null) {
      throw new SMSRuntimeException(
        context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
      )
    }

    let sysData: HashMap = null!
    if (outData.containsKey(YBMKKSF580SLogic.SYS_DATA)) {
      sysData = outData.get(YBMKKSF580SLogic.SYS_DATA) as HashMap
    } else {
      throw new SMSRuntimeException(
        context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
      )
    }

    // エラーフラグを取得
    let cdErrMessage: string = sysData.get(
      YBMKKSF580SLogic.MSG_CD_ERR_MESSAGE,
    ) as string

    if (cdErrMessage != null) {
      SMSCLLog.debug(
        'YBMKKSF580SLogic.setDataToSpread:cdErrMessage：' + cdErrMessage,
      )

      if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW003)) {
        // 検索結果０件
        let params: string[] = sysData.get(
          YBMKKSF580SLogic.MSG_IF_ERR_MSG_PARAMS,
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
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY)
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_INDEX_KEY)
        this.removeUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY,
        )

        return
      } else if (cdErrMessage.equals(SMSMessageConst.SMSCMNMCW001)) {
        // 最大表示件数オーバー
        let params: string[] = sysData.get(
          YBMKKSF580SLogic.MSG_IF_ERR_MSG_PARAMS,
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
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_RESULTS_KEY)
        this.removeUserData(context, YBMKKSF580SLogic.SEARCH_INDEX_KEY)
        this.removeUserData(
          context,
          YBMKKSF580SLogic.SEARCH_NM_SEIHINGUN_RYAKU_KEY,
        )

        return
      }
    }

    let seihinList: HashMap[] = null!
    if (sysData.containsKey(YBMKKSF580SLogic.SEIHIN_MSG_KEY)) {
      seihinList = sysData.get(YBMKKSF580SLogic.SEIHIN_MSG_KEY) as HashMap[]
    } else {
      throw new SMSRuntimeException(
        context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015),
      )
    }

    spread.setRowCount(seihinList.length)
    for (let i = 0; i < seihinList.length; i++) {
      // 選択状態
      spread.setCellValue(i, YBMKKSF580SLogic.SPREAD_SELECT, false)

      // 製品コード
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.CD_SEIHIN_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.CD_SEIHIN_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_CD_SEIHIN,
          seihinList[i].get(YBMKKSF580SLogic.CD_SEIHIN_KEY) as string,
        )
      }
      // 製品略式名称
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.NM_SEIHIN_RYAKUSHIKI_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.NM_SEIHIN_RYAKUSHIKI_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_NM_SEIHIN_RYAKUSHIKI,
          seihinList[i].get(
            YBMKKSF580SLogic.NM_SEIHIN_RYAKUSHIKI_KEY,
          ) as string,
        )
      }
      // 容量
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.QT_YORYO_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.QT_YORYO_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_QT_YORYO,
          seihinList[i].get(YBMKKSF580SLogic.QT_YORYO_KEY) as string,
        )
      }
      // 容量単位
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.IF_YORYOTANI_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.IF_YORYOTANI_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_IF_YORYOTANI,
          seihinList[i].get(YBMKKSF580SLogic.IF_YORYOTANI_KEY) as string,
        )
      }
      // 入数
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.QT_IRISU_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.QT_IRISU_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_QT_IRISU,
          seihinList[i].get(YBMKKSF580SLogic.QT_IRISU_KEY) as string,
        )
      }
      // 受払単位
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.IF_UKEHARAITANI_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.IF_UKEHARAITANI_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_IF_UKEHARAITANI,
          seihinList[i].get(YBMKKSF580SLogic.IF_UKEHARAITANI_KEY) as string,
        )
      }
      // JANコード
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.CD_JAN_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.CD_JAN_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_CD_JAN,
          seihinList[i].get(YBMKKSF580SLogic.CD_JAN_KEY) as string,
        )
      }
      // 事業区分
      if (
        seihinList[i].containsKey(
          YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL3_KEY,
        ) &&
        seihinList[i].get(YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL3_KEY) !=
          null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_NM_SEIHINGUN_RYAKU_LEVEL3,
          seihinList[i].get(
            YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL3_KEY,
          ) as string,
        )
      }
      // 売上高区分
      if (
        seihinList[i].containsKey(
          YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL4_KEY,
        ) &&
        seihinList[i].get(YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL4_KEY) !=
          null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_NM_SEIHINGUN_RYAKU_LEVEL4,
          seihinList[i].get(
            YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL4_KEY,
          ) as string,
        )
      }
      // 市場区分
      if (
        seihinList[i].containsKey(
          YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL5_KEY,
        ) &&
        seihinList[i].get(YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL5_KEY) !=
          null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_NM_SEIHINGUN_RYAKU_LEVEL5,
          seihinList[i].get(
            YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL5_KEY,
          ) as string,
        )
      }
      // 製品群
      if (
        seihinList[i].containsKey(
          YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL6_KEY,
        ) &&
        seihinList[i].get(YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL6_KEY) !=
          null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_NM_SEIHINGUN_RYAKU_LEVEL6,
          seihinList[i].get(
            YBMKKSF580SLogic.NM_SEIHINGUN_RYAKU_LEVEL6_KEY,
          ) as string,
        )
      }
      // 製品名
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.NM_SEIHIN_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.NM_SEIHIN_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_NM_SEIHIN,
          seihinList[i].get(YBMKKSF580SLogic.NM_SEIHIN_KEY) as string,
        )
      }
      // レベル3製品群コード
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL3_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL3_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_CD_SEIHINGUN_LEVEL3,
          seihinList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL3_KEY) as string,
        )
      }
      // レベル4製品群コード
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL4_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL4_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_CD_SEIHINGUN_LEVEL4,
          seihinList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL4_KEY) as string,
        )
      }
      // レベル5製品群コード
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL5_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL5_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_CD_SEIHINGUN_LEVEL5,
          seihinList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL5_KEY) as string,
        )
      }
      // レベル6製品群コード
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL6_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL6_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_CD_SEIHINGUN_LEVEL6,
          seihinList[i].get(YBMKKSF580SLogic.CD_SEIHINGUN_LEVEL6_KEY) as string,
        )
      }
      // 代表製品コード
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.CD_DAIHYOSEIHIN_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.CD_DAIHYOSEIHIN_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_CD_DAIHYOSEIHIN,
          seihinList[i].get(YBMKKSF580SLogic.CD_DAIHYOSEIHIN_KEY) as string,
        )
      }
      // Ｍ価
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.MN_M_KA_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.MN_M_KA_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_MN_M_KA,
          seihinList[i].get(YBMKKSF580SLogic.MN_M_KA_KEY) as string,
        )
      }
      // Ｃ価
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.MN_C_KA_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.MN_C_KA_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_MN_C_KA,
          seihinList[i].get(YBMKKSF580SLogic.MN_C_KA_KEY) as string,
        )
      }
      // 旧Ｍ価
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.MN_KYU_M_KA_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.MN_KYU_M_KA_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_MN_KYU_M_KA,
          seihinList[i].get(YBMKKSF580SLogic.MN_KYU_M_KA_KEY) as string,
        )
      }
      // 旧Ｃ価
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.MN_KYU_C_KA_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.MN_KYU_C_KA_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_MN_KYU_C_KA,
          seihinList[i].get(YBMKKSF580SLogic.MN_KYU_C_KA_KEY) as string,
        )
      }
      // Ｍ価改定日
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.DT_M_KA_KAITEI_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.DT_M_KA_KAITEI_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_DT_M_KA_KAITEI,
          seihinList[i].get(YBMKKSF580SLogic.DT_M_KA_KAITEI_KEY) as string,
        )
      }
      // Ｃ価改定日
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.DT_C_KA_KAITEI_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.DT_C_KA_KAITEI_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_DT_C_KA_KAITEI,
          seihinList[i].get(YBMKKSF580SLogic.DT_C_KA_KAITEI_KEY) as string,
        )
      }
      // 数量単位1
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.IF_SURYOTANI1_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.IF_SURYOTANI1_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_IF_SURYOTANI1,
          seihinList[i].get(YBMKKSF580SLogic.IF_SURYOTANI1_KEY) as string,
        )
      }
      // 数量単位2
      if (
        seihinList[i].containsKey(YBMKKSF580SLogic.IF_SURYOTANI2_KEY) &&
        seihinList[i].get(YBMKKSF580SLogic.IF_SURYOTANI2_KEY) != null
      ) {
        spread.setCellValue(
          i,
          YBMKKSF580SLogic.SPREAD_IF_SURYOTANI2,
          seihinList[i].get(YBMKKSF580SLogic.IF_SURYOTANI2_KEY) as string,
        )
      }
    }
    let count: string = new Integer(seihinList.length).toString()
    message.setValue(
      context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSI020, count),
    )

    // スプレッド活性化
    spread.setEnabled(true)

    // フォーカス設定
    returnInfo.setFocus(
      YBMKKSF580SLogic.FRAME_BODY,
      YBMKKSF580SLogic.ITEM_SPREAD,
    )

    SMSCLLog.debug('YBMKKSF580SLogic.setDataToSpread end')
  }

  protected setUseCaseID() {
    this.useCaseID = YBMKKSF580SLogic.USECASE
  }
}
