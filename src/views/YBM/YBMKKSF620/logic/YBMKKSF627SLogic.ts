import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { YBMKKSCjfLogicBase } from '../../YBMKKSF000/logic/YBMKKSCjfLogicBase'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { YBMKKSCjfConst } from '../../YBMKKSF000/logic/YBMKKSCjfConst'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'
import type { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { HashMap } from '@/lib/native/util/HashMap'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import { createArrayByInstance, createStringArray } from '@/utils/array/1D'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData'
import { NativeString } from '@/lib/native/lang/String'
import { Integer } from '@/lib/native/lang/Integer'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'

/**
 * 配賦マスタ 取込結果確認画面ロジッククラスです。
 */
export default class YBMKKSF627SLogic extends YBMKKSCjfLogicBase {
  // --------------------------------------------------------
  // アイテムID
  // --------------------------------------------------------

  /** 処理番号 */
  private static ITEM_NO_SHORI: string = 'noShori'

  /** 年度 */
  private static ITEM_DT_NENDO: string = 'dtNendo'

  /** 配賦区分 */
  private static ITEM_ST_HAIFU: string = 'kbnHaifu'

  /** エラー種別 */
  private static ITEM_ST_ERROR: string = 'stError'

  /** 件数 */
  private static ITEM_KENSU: string = 'kensu'

  /** スプレッド */
  private static ITEM_SPREAD: string = 'spread'

  // -------------------------------------------------------
  // その他定数
  // -------------------------------------------------------

  /** 画面ID */
  private static GAMEN_ID: string = 'YBMKKSF627S'

  /** YBMKKS.properties キー */
  private static SCREEN_NAME_KEY: string = 'YBMKKSF627S_SCREEN_NAME'
  private static MAX_DISPLAY_CNT_KEY: string = 'YBMKKSF627S_MAX_DISPLAY_CNT'
  private static MAX_SELECT_CNT_KEY: string = 'YBMKKSF627S_MAX_SELECT_CNT'

  /** CBSコマンド名(Verb) 初期表示 */
  private static COMMAND_INIT: string = 'YBMHaifuCBSHandler.init'

  /** CBSコマンド名(Verb) 表示 */
  private static COMMAND_GET_ERROR: string =
    'YBMHaifuCBSHandler.getHaifuErrorDetail'

  /** ユースケースID */
  private static USECASE: string = 'YBMKKSF620'

  /** フッタボタンラベル */
  protected static FOOTER_LABEL: string[] = [
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

  /** 処理内容の分類 */
  private static VAL_cdSubsystemShubetu: string = '642'

  /** 会社コード */
  private static KEY_CD_KAISHA: string = 'cdKaisha'

  /** サブシステム種別コード */
  private static KEY_CD_SUBSYSTEM_SHUBETU: string = 'cdSubsystemShubetu'

  /** データ種別コード */
  private static KEY_CD_DATASHUBEITSU: string = 'cdDatashubetsu'

  /** 汎用分類検索条件CBMMsg */
  private static KEY_HANYO_BUNRUI_JOKEN: string = 'hanyoBunruiJokenMsgList'

  /** 汎用分類検索結果CBMMsg */
  private static KEY_HANYO_BUNRUI_KEKKA_LIST: string =
    'hanyoBunruiShubetsuListList'

  /** 汎用分類種別CBSMsg */
  private static KEY_HANYO_BUNRUI_SHUBETSU_LIST: string =
    'hanyoBunruiShubetsuList'

  /** 汎用分類CBMMsg */
  private static KEY_HANYO_BUNRUI_LIST: string = 'hanyoBunruiList'

  /** 環境設定Msg */
  private static KEY_KANKYOSETTEIJOHOMSG: string = 'kankyoSetteiJohoMsg'

  /** 汎用コード */
  private static KEY_CD_HANYO: string = 'cdHanyo'

  /** 内容１ */
  private static KEY_NM_NAIYO: string = 'nmNaiyo1'

  /** 処理内容の分類 */
  private static VAL_CBS_NAME: string = 'YBMKKSCBS'

  /** エラー種別 */
  private static KEY_ERROR_TYPE_LIST: string = 'errorTypeList'

  // -------------------------------------------------------
  // メッセージスキーマ用キー定数
  // -------------------------------------------------------

  /** 配布マスタ取込エラーヘッダMsg */
  private static HAIFU_TORIKOMI_ERROR_HEARDER_MSG: string =
    'HaifuTorikomiErrorHearderMsg'

  /** 処理番号 */
  private static KEY_NO_SHORI: string = 'noShoriIrai'

  /** エラー種別 */
  private static KEY_ST_ERROR: string = 'stError'

  /** 配布マスタ取込エラー明細Msg */
  private static HAIFU_TORIKOMI_ERROR_DETAIL_MSG_LIST: string =
    'HaifuTorikomiErrorDetailMsgList'

  /** エラー行 */
  private static KEY_NOGYO: string = 'noGyo'

  /** エラー名 */
  private static KEY_NMERROR: string = 'nmError'

  // -----------------------------------------------------------
  // 明細(Spread)部品列インデックス定数
  // -----------------------------------------------------------

  /** スプレッド インデックス 行NO */
  private static SPREAD_NO_GYO: number = 0

  /** スプレッド インデックス エラー名 */
  private static SPREAD_NM_ERROR: number = 1

  protected setUseCaseID() {
    this.useCaseID = YBMKKSF627SLogic.USECASE
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
    SMSCLLog.debug('YBMKKSF627SLogic.beforeDisplay start')
    try {
      //フッタメッセージの初期化
      SMSHeaderFooterManager.initInformation(context)

      //ヘッダ情報の設定
      SMSHeaderFooterManager.initHeader(event, context)
      let screenName: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF627SLogic.SCREEN_NAME_KEY,
      ) as string
      SMSHeaderFooterManager.setHeaderTitle(
        context,
        screenName,
        YBMKKSF627SLogic.GAMEN_ID,
      )
      this.setNmGamen(context, screenName)

      //フッタボタンの設定
      SMSHeaderFooterManager.initFooter(context, YBMKKSF627SLogic.FOOTER_LABEL)
      SMSHeaderFooterManager.setAllFooterButtonEnabled(context, false)

      //画面GUI部品を取得
      let current: JCFScreenData =
        context.getCurrentScreenData() as JCFScreenData

      //処理番号
      let noShori: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF627SLogic.ITEM_NO_SHORI,
      ) as JCFFieldStringData
      //年度
      let dtNendo: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF627SLogic.ITEM_DT_NENDO,
      ) as JCFFieldStringData
      //配賦区分
      let stHaifu: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF627SLogic.ITEM_ST_HAIFU,
      ) as JCFFieldStringData
      //エラー種別
      let stError: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF627SLogic.ITEM_ST_ERROR,
      ) as JCFComboBoxData

      // 共通情報を取得
      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl

      // 会社コード
      let cdKaisha: string = loginInfo.getCdKaisha()

      // 入力データ
      let inData: HashMap = new HashMap()

      let jokenMap: HashMap = new HashMap(3)
      inData.put(YBMKKSF627SLogic.KEY_HANYO_BUNRUI_JOKEN, jokenMap)

      //会社
      jokenMap.put(YBMKKSCjfConst.CD_KAISHA_HANYO, cdKaisha)
      //サブシステムコード
      jokenMap.put(YBMKKSCjfConst.CD_SUBSYSTEM_SHUBETSU, '642')
      //データコード
      jokenMap.put(YBMKKSCjfConst.CD_DATASHUBETSU, '00120')

      //配賦取込エラー確認のCBSHandleのメソッドを呼び出し
      let outData: HashMap = this.callEJB(
        context,
        event,
        YBMKKSCjfConst.CBS_NAME,
        YBMKKSF627SLogic.COMMAND_INIT,
        inData,
      )

      let errorTypeList: ArrayList = this.getUserData(
        context,
        YBMKKSF627SLogic.KEY_HANYO_BUNRUI_LIST,
      ) as ArrayList

      if (
        (outData.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string).equals(
          SMSHashKeyConst.IS_SUCCESS,
        )
      ) {
        let rtnData: HashMap = outData.get(
          SMSHashKeyConst.PARAM_KEY_DATA,
        ) as HashMap
        let kekkaList: HashMap[] = rtnData.get(
          YBMKKSF627SLogic.KEY_HANYO_BUNRUI_KEKKA_LIST,
        ) as HashMap[]
        errorTypeList = new ArrayList(20)
        if (kekkaList != null) {
          for (let i: number = 0; i < kekkaList.length; i++) {
            let errorContent: string[] = createStringArray(2)
            errorContent[0] = kekkaList[i].get(
              YBMKKSCjfConst.CD_HANYO,
            ) as string
            errorContent[1] = kekkaList[i].get(
              YBMKKSCjfConst.NM_NAIYO_1,
            ) as string
            errorTypeList.add(errorContent)
          }
        }

        this.putUserData(
          context,
          YBMKKSF627SLogic.KEY_HANYO_BUNRUI_SHUBETSU_LIST,
          kekkaList,
        )
      }

      // エラー種別コンボ
      this.setErrorShubetsuCombo(context)

      // 処理番号
      noShori.setValue(this.getUserData(context, 'noShori').toString())

      // 年度
      dtNendo.setValue(this.getUserData(context, 'dtNendo').toString())

      // 配賦区分
      if (this.getUserData(context, 'stHaifuKubun').toString().equals('01')) {
        stHaifu.setValue('事業登録比率')
      } else {
        stHaifu.setValue('ライン比率(共通職場→ライン職場)')
      }

      // フォーカスを設定
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF627SLogic.ITEM_ST_ERROR,
      )

      // 件数
      let kensuu: JCFItemData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF627SLogic.ITEM_KENSU,
      )
      kensuu.setVisible(false)
    } catch (th: any) {
      super.callErrorAdapter(context, th)
    }
    SMSCLLog.debug('YBMKKSF627SLogic.beforeDisplay end')
  }

  /**
   * 表示時の業務ロジック
   * 表示の処理を行う
   *
   * @param event					ＣＪＦイベントオブジェクト
   * @param context					ＣＪＦコンテキストオブジェクト
   * @param returnInfo				ＣＪＦ復帰情報オブジェクト
   * @exception JCFException			ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
   */
  view(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YBMKKSF627SLogic:view() start')

    try {
      //　フッタメッセージの初期化
      SMSHeaderFooterManager.initInformation(context)

      //　最大表示件数を取得
      let maxDisplayCount: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF627SLogic.MAX_DISPLAY_CNT_KEY,
      ) as string
      this.setQtSaidaiHyouji(context, maxDisplayCount)

      // 最大検索件数を取得
      let maxSelectCount: string = SMSPropsInfos.getProperty(
        YBMKKSCjfConst.SUB_SYSTEM_ID,
        YBMKKSF627SLogic.MAX_SELECT_CNT_KEY,
      ) as string
      this.setQtSaidaiKensaku(context, maxSelectCount)

      //項目部品の取得
      let current: JCFScreenData =
        context.getCurrentScreenData() as JCFScreenData

      //処理番号
      let noShori: JCFFieldStringData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF627SLogic.ITEM_NO_SHORI,
      ) as JCFFieldStringData

      //エラー種別
      let stError: JCFComboBoxData = current.getItemData(
        SMSHeaderFooterManager.FRAME_MAIN,
        YBMKKSF627SLogic.ITEM_ST_ERROR,
      ) as JCFComboBoxData

      //Valueの作成
      let noShoriVal: string = noShori.getValue()
      let stErrorVal: string = stError.getValue()

      if (stErrorVal.equals('全エラー')) {
        stErrorVal = '0'
      } else {
        let hanyoshubetsuList: HashMap[] = this.getUserData(
          context,
          YBMKKSF627SLogic.KEY_HANYO_BUNRUI_SHUBETSU_LIST,
        ) as HashMap[]

        let count: number = hanyoshubetsuList.length

        for (let j: number = 0; j < count; j++) {
          let nmHanyo: string = hanyoshubetsuList[j].get(
            YBMKKSF627SLogic.KEY_NM_NAIYO,
          ) as string

          if (stErrorVal.equals(nmHanyo)) {
            stErrorVal = hanyoshubetsuList[j].get(
              YBMKKSF627SLogic.KEY_CD_HANYO,
            ) as string
          }
        }
      }

      //CBSに渡すデータを作成
      // EJB呼び出し
      let inData: HashMap = new HashMap(101)
      // 年度と期中修正開始月を設定
      let headerMap: HashMap = new HashMap()
      headerMap.put(YBMKKSF627SLogic.KEY_NO_SHORI, noShoriVal)
      headerMap.put(YBMKKSF627SLogic.KEY_ST_ERROR, stErrorVal)
      inData.put(YBMKKSF627SLogic.HAIFU_TORIKOMI_ERROR_HEARDER_MSG, headerMap)

      // EJB呼び出し
      let outData: HashMap = this.callEJB(
        context,
        event,
        YBMKKSCjfConst.CBS_NAME,
        YBMKKSF627SLogic.COMMAND_GET_ERROR,
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
        this.refreshPanel(context, current, rtnData)
      }
    } catch (th: any) {
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YBMKKSF627SLogic:view() end')
  }

  /**
   * Method refreshPanel 画面再表示処理
   * @param context
   * @param outData
   */
  private refreshPanel(
    context: JCFContext,
    current: JCFScreenData,
    rtnData: HashMap,
  ) {
    //画面GUI部品を取得
    let spread: JCFSpreadData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF627SLogic.ITEM_SPREAD,
    ) as JCFSpreadData
    let kensuu: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF627SLogic.ITEM_KENSU,
    )

    let johoList: HashMap[] = rtnData.get(
      YBMKKSF627SLogic.HAIFU_TORIKOMI_ERROR_DETAIL_MSG_LIST,
    ) as HashMap[]
    spread.removeAllRow()
    if (johoList != null) {
      let count: number = johoList.length
      for (let i: number = 0; i < count; i++) {
        spread.addRow()
        spread.setRowHeaderCellValue(i, 0, NativeString.valueOf(i + 1))
        // 行No
        let noGyo: string = johoList[i].get(
          YBMKKSF627SLogic.KEY_NOGYO,
        ) as string
        spread.setCellValue(i, YBMKKSF627SLogic.SPREAD_NO_GYO, noGyo.toString())
        // エラー名
        let nmError: string = johoList[i].get(
          YBMKKSF627SLogic.KEY_NMERROR,
        ) as string
        let nmErrorVal: string = ''

        //汎用分類マスタ設定内容を取得して設定
        let hanyoshubetsuList: HashMap[] = this.getUserData(
          context,
          YBMKKSF627SLogic.KEY_HANYO_BUNRUI_SHUBETSU_LIST,
        ) as HashMap[]

        for (let j = 0; j < hanyoshubetsuList.length; j++) {
          if (
            nmError.equals(
              hanyoshubetsuList[j].get(YBMKKSF627SLogic.KEY_CD_HANYO) as string,
            )
          ) {
            nmErrorVal = hanyoshubetsuList[j].get(
              YBMKKSF627SLogic.KEY_NM_NAIYO,
            ) as string
            j = hanyoshubetsuList.length
          }
        }

        spread.setCellValue(i, YBMKKSF627SLogic.SPREAD_NM_ERROR, nmErrorVal)
      }
      //件数を表示
      kensuu.setValue(NativeString.valueOf(count))
      kensuu.setVisible(true)

      let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
        context,
      ) as SMSLoginInfoImpl
      if (loginInfo != null) {
        if (loginInfo.getQtKensaku() != null) {
          count = Integer.parseInt(loginInfo.getQtKensaku())
        }
      }

      if (count == 0) {
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSW056,
        )
      } else {
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSI020,
          [NativeString.valueOf(count)],
        )
      }
    }
  }

  /**
   * Method setErrorShubetsuCombo.	エラー種別のコンボ内容を作成
   * @param context
   * @throws JCFIllegalStateException
   * @throws JCFIllegalArgumentException
   */
  private setErrorShubetsuCombo(context: JCFContext) {
    //表示中の画面データ領域を取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let itemErrorShubetsu: JCFComboBoxData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      YBMKKSF627SLogic.ITEM_ST_ERROR,
    ) as JCFComboBoxData

    let hanyoList: HashMap[] = this.getUserData(
      context,
      YBMKKSF627SLogic.KEY_HANYO_BUNRUI_SHUBETSU_LIST,
    ) as HashMap[]

    this.putUserData(
      context,
      YBMKKSF627SLogic.KEY_HANYO_BUNRUI_SHUBETSU_LIST,
      hanyoList,
    )

    let count2: number = hanyoList.length

    let tempStError: JCFSelectableElement[] = createArrayByInstance(
      JCFSelectableElement,
      count2 + 1,
    )

    for (let j = 0; j < count2; j++) {
      if (j == 0) {
        tempStError[j] = new JCFSelectableElement()

        tempStError[j].setText('全エラー')
      }

      tempStError[j + 1] = new JCFSelectableElement()

      tempStError[j + 1].setText(
        hanyoList[j].get(YBMKKSF627SLogic.KEY_NM_NAIYO) as string,
      )
    }

    // エラー種別 値を置く
    itemErrorShubetsu.setValue(tempStError)
  }
}
