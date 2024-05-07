import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase'
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { YBMCMNCommon } from '../client/msg/YBMCMNCommon'
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField'
import type { List } from '@/lib/native/util/List'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { StringTokenizer } from '@/lib/native/util/StringTokenizer'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { createArrayByInstance, createStringArray } from '@/utils/array/1D'
import { Integer } from '@/lib/native/lang/Integer'
import { System } from '@/lib/native/lang/System'
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import { HashMap } from '@/lib/native/util/HashMap'
import { YBMSonekiSoshiki } from '../client/msg/YBMSonekiSoshiki'
import { YBMSeihingun } from '../client/msg/YBMSeihingun'
import { YBMSeihin } from '../client/msg/YBMSeihin'
import { YBMHanyoBunrui } from '../client/msg/YBMHanyoBunrui'
import { JCFException } from '@/lib/jcf/ctrl/JCFException'
import { NativeString } from '@/lib/native/lang/String'

/**
 * 帳票指示画面ロジッククラスの基底クラス(経営情報帳票共通)です。
 *
 * ロジッククラス共通(経営情報帳票)の処理を提供します。
 * @version 0.1
 * @author  富士通) 軽部
 */
export abstract class YBMCMNLogicBase extends SMSCjfLogicBase {
  /** === アイテム定義 =========================================================== */
  //帳票指示画面共通
  /** 対象年度コンボボックス アイテムIDです。 */
  protected static ITEM_DT_NENDO = 'combo_nendo'
  /** 期間：開始月のコンボボックス アイテムIDです。 */
  protected static ITEM_DT_KAISHI_DUKI = 'combo_fromM'
  /** 期間：終了月のコンボボックス アイテムIDです。 */
  protected static ITEM_DT_SHURYO_DUKI = 'combo_endM'

  /** 組織（レベル１）コンボボックス アイテムIDです。 */
  protected static ITEM_SOSHIKI1 = 'combo_soshiki1'
  /** 組織（レベル２）コンボボックス アイテムIDです。 */
  protected static ITEM_SOSHIKI2 = 'combo_soshiki2'
  /** 組織（レベル３）コンボボックス アイテムIDです。 */
  protected static ITEM_SOSHIKI3 = 'combo_soshiki3'
  /** 組織（レベル４）コンボボックス アイテムIDです。 */
  protected static ITEM_SOSHIKI4 = 'combo_soshiki4'

  /** 事業（レベル１）コンボボックス アイテムIDです。 */
  protected static ITEM_GUN1 = 'combo_gun1'
  /** 事業（レベル２）コンボボックス アイテムIDです。 */
  protected static ITEM_GUN2 = 'combo_gun2'
  /** 事業（レベル３）コンボボックス アイテムIDです。 */
  protected static ITEM_GUN3 = 'combo_gun3'
  /** 事業（レベル４）コンボボックス アイテムIDです。 */
  protected static ITEM_GUN4 = 'combo_gun4'
  /** 事業（レベル５）コンボボックス アイテムIDです。 */
  protected static ITEM_GUN5 = 'combo_gun5'
  /** 事業（レベル６）コンボボックス アイテムIDです。 */
  protected static ITEM_GUN6 = 'combo_gun6'

  /** 製品コンボボックス アイテムIDです。 */
  protected static ITEM_SEIHIN = 'combo_seihin'

  /** 乳市区分ラジオボタン(すべて) アイテムIDです。 */
  protected static ITEM_NYUSHI_ALL = 'radio_subete'
  /** 乳市区分ラジオボタン(乳食) アイテムIDです。 */
  protected static ITEM_NYUSHI_NYU = 'radio_nyushoku'
  /** 乳市区分ラジオボタン(市乳) アイテムIDです。 */
  protected static ITEM_NYUSHI_SHI = 'radio_shinyu'

  /** 費目コンボボックス アイテムIDです。 */
  protected static ITEM_HIMOKU = 'combo_himoku'

  /** 補助科目ラジオボタン(表示) アイテムIDです。 */
  protected static ITEM_HOJO_HYOJI = 'radio_hyoji'
  /** 補助科目ラジオボタン(非表示) アイテムIDです。 */
  protected static ITEM_HOJO_HIHYOJI = 'radio_hihyoji'

  /** 物量出力単位ラジオボタン( ｺ) アイテムIDです。 */
  protected static ITEM_TANI_KO = 'radio_tani01'
  /** 物量出力単位ラジオボタン(KG/L) アイテムIDです。 */
  protected static ITEM_TANI_KGL = 'radio_tani02'

  /** 補助科目ラジオ、物量出力単位ラジオの 
	    クリア時の選択用ダミーボタン アイテムIDです。 */
  protected static ITEM_RADIO_DUMMY = 'dummy'

  /** === 固定値キーの定義 ========================================================= */
  protected static LEVEL_1 = '1'
  protected static LEVEL_2 = '2'
  protected static LEVEL_3 = '3'
  protected static LEVEL_4 = '4'
  protected static LEVEL_5 = '5'
  protected static LEVEL_6 = '6'

  /** === フレーム定義 ============================================================= */
  protected static FLM_MAIN_BODY = 'FLM_MAIN_BODY'

  /** === ユーザ領域のキー定義 ====================================================== */
  /** 出力制御情報 */
  protected static KEY_USER_SHUTSURYOKU_SEIGYO = 'shutsuryokuSeigyo'
  /** 対象外損益管理組織 */
  protected static KEY_USER_TAISHOGAI_SOSHIKI = 'taishogaiSoshiki'
  /** 対象外事業 */
  protected static KEY_USER_TAISHOGAI_JIGYO = 'taishogaiJigyo'
  /** マスタ索引対象年月日 */
  protected static KEY_USER_DT_TEKIYO = 'dtTekiyo'

  /** === HashMapのキー定義 ======================================================== */
  private static KEY_HASHMAP_SYSDATA = 'sys_data'

  /** === 帳票IDの定義 ============================================================= */
  protected static ID_CHOHYO01 = 'YBMYHSR020' //事業別損益月別予算書（上期）
  protected static ID_CHOHYO02 = 'YBMYHSR030' //事業別損益月別予算書（下期）
  protected static ID_CHOHYO03 = 'YBMYHSR040' //予定製造原価計算表
  protected static ID_CHOHYO04 = 'YBMYHSR050' //製造原価管理表・月別予算書
  protected static ID_CHOHYO05 = 'YBMYHSR060' //製造原価管理表・月別予算書（組替表）
  protected static ID_CHOHYO06 = 'YBMYHSR130' //経費予算書（補助科目別）
  protected static ID_CHOHYO07 = 'YBMYHSR011' //全社月別予算損益計算書（事業別）
  protected static ID_CHOHYO08 = 'YBMYHSR010' //全社月別予算損益計算書
  protected static ID_CHOHYO09 = 'YBMYHSR131' //経費予算書（科目別）

  protected static ID_CHOHYO11 = 'YBMKKSR510' //事業別損益実績表
  protected static ID_CHOHYO12 = 'YBMKKSR220' //事業別損益（予算実績）管理表
  protected static ID_CHOHYO13 = 'YBMKKSR200' //全社事業別損益実績表
  protected static ID_CHOHYO14 = 'YBMKKSR500' //全社事業別損益実績表（事業振替前）
  protected static ID_CHOHYO15 = 'YBMKKSR210' //全社事業別損益（予算実績）管理表
  protected static ID_CHOHYO16 = 'YBMKKSR340' //経費内訳表
  protected static ID_CHOHYO17 = 'YBMKKSR530' //経費内訳表（補助科目別）
  protected static ID_CHOHYO18 = 'YBMKKSR350' //補助科目別経費実績表
  protected static ID_CHOHYO19 = 'YBMKKSR310' //物流費事業別内訳表
  protected static ID_CHOHYO20 = 'YBMKKSR320' //物流費予算実績比較表（事業別表）
  protected static ID_CHOHYO21 = 'YBMKKSR330' //物流費予算実績比較表（経理場所別表）
  protected static ID_CHOHYO22 = 'YBMKKSR270' //製品原価（予実）管理表（配賦前）
  protected static ID_CHOHYO23 = 'YBMKKSR520' //製品原価（予実）管理表（配賦後）
  protected static ID_CHOHYO24 = 'YBMKKSR280' //製品原価（予実）管理表（組替表）
  protected static ID_CHOHYO25 = 'YBMKKSR300' //製造原価計算表
  protected static ID_CHOHYO26 = 'YBMKKSR260' //全社利益予算実績比較表

  /** 職場コンボにラインのみ表示する帳票IDリスト */
  private static ID_LINE_ONLY_ARRAY: string[] = [
    this.ID_CHOHYO03,
    this.ID_CHOHYO04,
    this.ID_CHOHYO22,
    this.ID_CHOHYO23,
    this.ID_CHOHYO25,
  ]

  /** 最大表示・取得レコード件数のデフォルト値 です。 */
  protected static MAX_RECORD_COUNT = '99'
  /** 画面名取得用キーの接尾語 です。 */
  protected static SCRNAME_ATTR_SUFFIX = '_SCREEN_NAME'
  /** フッタボタンラベル取得用キーの接尾語 です。 */
  protected static BUTTON_LABELES_ATTR_SUFFIX = '_BUTTON_LABELES'
  /** 活性フッタボタン取得用キーの接尾語 です。 */
  protected static ENABLE_BUTTON_ATTR_SUFFIX = '_ENABLE_BUTTON'
  /** 最大表示件数 取得用キーの接尾語 です。 */
  protected static MAX_DISPLAY_CNT_ATTR_SUFFIX = '_MAX_DISPLAY_CNT'
  /** 最大表示件数 取得用キーの接尾語 です。 */
  protected static MAX_SELECT_CNT_ATTR_SUFFIX = '_MAX_SELECT_CNT'

  /** フッタボタンアイテムＩＤ です。 */
  private static ITEM_FUNCBTN_ARRAY: string[] = [
    SMSHeaderFooterManager.ITEM_FUNCBTN1,
    SMSHeaderFooterManager.ITEM_FUNCBTN2,
    SMSHeaderFooterManager.ITEM_FUNCBTN3,
    SMSHeaderFooterManager.ITEM_FUNCBTN4,
    SMSHeaderFooterManager.ITEM_FUNCBTN5,
    SMSHeaderFooterManager.ITEM_FUNCBTN6,
    SMSHeaderFooterManager.ITEM_FUNCBTN7,
    SMSHeaderFooterManager.ITEM_FUNCBTN8,
    SMSHeaderFooterManager.ITEM_FUNCBTN9,
  ]

  /** フッタボタンラベル名デフォルト値 です。 */
  private static DEFAULT_BUTTON_LABELES: string[] = [
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

  /**
   * 業務画面初期処理を行います。
   * <PRE>
   * サブシステム用プロパティファイルから値を取得し、
   * 画面情報の設定を行います。
   * プロパティファイルには、各画面IDごとに以下の項目を
   * 定義してください。
   *
   * 　No　項目名(プロパティ名)
   *
   * 　１．画面名 (画面ID_SCREEN_NAME)
   * 　２．最大表示件数 (画面ID_MAX_DISPLAY_CNT)
   * 　３．最大取得件数 (画面ID_MAX_SELECT_CNT)
   * 　４．フッタボタンラベル (画面ID_BUTTON_LABELES)
   * 　５．フッタボタン活性制御 (画面ID_ENABLE_BUTTON)
   *
   * 【記述例】
   *　　　### 受注照会(YSDJSSF010) ###
   *　　　#画面名
   *　　　YSDJSSF010M_SCREEN_NAME=受注照会
   *　　　#最大表示件数
   *　　　YSDJSSF010M_MAX_DISPLAY_CNT=99
   *　　　#最大取得件数
   *　　　YSDJSSF010M_MAX_SELECT_CNT=99
   *　　　#フッタボタンラベル
   *　　　YSDJSSF010M_BUTTON_LABELES=(F1),(F2),(F3),(F4),(F5),(F6),CSVﾀﾞｳﾝﾛｰﾄﾞ(F7),帳票印刷(F8),登録(F9)
   *　　　#フッタボタン活性制御(0:非活性、1:活性)
   *　　　YSDJSSF010M_ENABLE_BUTTON=0,0,0,0,0,0,0,1,1
   *
   *
   * ※各画面で特有の処理は、super.beforeDisplay(event, context, returnInfo);
   * 　を実行した後で行ってください。
   * （例：デフォルト定義以外のフッタボタン活性制御など）
   * ※プロパティファイルに定義がない場合は、ボタンラベルにはデフォルト値
   * 　「(F1),(F2),(F3),(F4),(F5),(F6),CSVﾀﾞｳﾝﾛｰﾄﾞ(F7),帳票印刷(F8),登録(F9)」が、
   * 　また、活性状態は「すべて非活性」が設定されます。
   * </PRE>
   *
   * @param event			JCFイベント
   * @param context			JCFコンテキスト
   * @param returnInfo		業務ロジック復帰情報
   */
  beforeDisplay(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.trace('YBMCMNLogicBase:beforeDisplay() start')
    try {
      //ヘッダ・フッタの設定(初期化)
      this.initHeaderFooter(event, context)
    } catch (th: any) {
      //例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.trace('YBMCMNLogicBase:beforeDisplay() end')
  }

  static getStrArray(val: string): string[]
  static getStrArray(val: string, token: string): string[]
  static getStrArray(...params: any[]): string[] {
    if (params.length === 1) {
      return this.__getStrArray(params[0])
    } else if (params.length === 2) {
      return this.__getStrArrayWithToken(params[0], params[1])
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * カンマ区切り文字列をString配列にして返します。
   *
   * @param val			カンマ区切り文字列
   * @return String[]	編集後String配列
   */
  private static __getStrArray(val: string): string[] {
    return this.getStrArray(val, YBMCMNCommon.STR_COMMA)
  }

  /**
   * 指定トークンで区切られた文字列をString配列にして返します。
   *
   * @param val			区切り文字列
   * @param token		トークン文字列
   * @return String[]	編集後String配列
   */
  private static __getStrArrayWithToken(val: string, token: string): string[] {
    if (!SMSCheckField.isValidString(val)) {
      return null!
    }

    let list: List = new ArrayList<any>()

    let tokenizer: StringTokenizer = new StringTokenizer(val, token)
    while (tokenizer.hasMoreTokens()) {
      list.add(tokenizer.nextToken())
    }

    return list.toArray() as string[]
  }

  //-----------------------------------------------------------------------------------------------------------------
  //  protected
  //-----------------------------------------------------------------------------------------------------------------

  /**
   * ヘッダ・フッタ情報の設定を行います。
   *
   * <PRE>
   * サブシステム用プロパティファイルから値を取得し、
   * ヘッダ部・フッタ部、及び共通メッセージの画面情報を設定します。
   *
   * 　１．ヘッダ部　SMSHeaderFooterManagerのinitHeaderメソッド、及びsetHeaderTitleメソッドを実行します。
   * 　２．フッタ部　SMSHeaderFooterManagerのinitFooterメソッド、及びsetAllFooterButtonEnabledメソッド・
   * 　　　　　　　　setEnabledFooterButtonメソッドを使用し、サブシステム用プロパティファイルの設定に基づき
   * 　　　　　　　　フッタボタンラベルの設定・活性制御を行います。
   * 　３．共通メッセージ
   * 　　　　下記項目にサブシステム用プロパティファイルの値を設定します。
   *
   * 　　　・プログラムID
   * 　　　・画面ID
   * 　　　・画面名
   * 　　　・最大表示件数
   * 　　　・最大取得件数
   * </PRE>
   * @param event			JCFイベント
   * @param context			JCFコンテキスト
   */
  protected initHeaderFooter(event: JCFEvent, context: JCFContext) {
    let fullScreenID: string = null!

    try {
      //JCFイベントよりスクリーンIDを取得
      fullScreenID = event.getScreenID()

      if (this.isFullScreenId(fullScreenID)) {
        //TODO 本番環境ではサブシステムを直接eventかcontextから取得できる？
        //スクリーンIDよりサブシステムIDを取得
        let fileNmHeader: string = fullScreenID.substring(4, 10)
        //スクリーンIDより画面IDを取得
        let screenID: string = fullScreenID.substring(4, 15)
        /*----------------------------------------------------------------------
         *  プロパティファイル読み込みキーを画面IDより作成
         *----------------------------------------------------------------------*/
        let screenNameAttr: string =
          screenID + YBMCMNLogicBase.SCRNAME_ATTR_SUFFIX //画面名
        let maxDispCntAttr: string =
          screenID + YBMCMNLogicBase.MAX_DISPLAY_CNT_ATTR_SUFFIX //最大表示件数
        let maxSelectCntAttr: string =
          screenID + YBMCMNLogicBase.MAX_SELECT_CNT_ATTR_SUFFIX //最大取得件数
        let buttonLabelAttr: string =
          screenID + YBMCMNLogicBase.BUTTON_LABELES_ATTR_SUFFIX //フッタラベル配列
        let enableButtonAttr: string =
          screenID + YBMCMNLogicBase.ENABLE_BUTTON_ATTR_SUFFIX //活性ボタン配列

        /*----------------------------------------------------------------------
         *  プロパティファイルより値を取得
         *----------------------------------------------------------------------*/
        //画面名
        let screenName: string = SMSPropsInfos.getProperty(
          fileNmHeader,
          screenNameAttr,
        ) as string
        //最大表示件数
        let maxDispCnt: string = SMSPropsInfos.getProperty(
          fileNmHeader,
          maxDispCntAttr,
        ) as string
        maxDispCnt =
          maxDispCnt == null ? YBMCMNLogicBase.MAX_RECORD_COUNT : maxDispCnt
        //最大取得件数
        let maxSelectCnt: string = SMSPropsInfos.getProperty(
          fileNmHeader,
          maxSelectCntAttr,
        ) as string
        maxSelectCnt =
          maxSelectCnt == null ? YBMCMNLogicBase.MAX_RECORD_COUNT : maxSelectCnt

        //フッタラベル配列
        let buttonLabels: string = SMSPropsInfos.getProperty(
          fileNmHeader,
          buttonLabelAttr,
        ) as string
        let buttonLabelArray: string[]
        buttonLabelArray =
          buttonLabels == null
            ? YBMCMNLogicBase.DEFAULT_BUTTON_LABELES
            : YBMCMNLogicBase.getStrArray(buttonLabels)
        //活性ボタン配列
        let enableButtons: string = SMSPropsInfos.getProperty(
          fileNmHeader,
          enableButtonAttr,
        ) as string
        let enableButtonArray: string[]
        enableButtonArray =
          enableButtons == null
            ? createStringArray(0)
            : YBMCMNLogicBase.getStrArray(enableButtons)

        /*----------------------------------------------------------------------
         *  ログイン情報の設定
         *----------------------------------------------------------------------*/
        this.setCdProgram(context, this.useCaseID)
        this.setCdGamen(context, screenID)
        this.setNmGamen(context, screenName)
        this.setQtSaidaiHyouji(context, maxDispCnt)
        this.setQtSaidaiKensaku(context, maxSelectCnt)

        //TODO
        //  何回もcontext.putApplicationDataをすることになるが
        //  共通部品のメソッドを使わないと問題があるようなので
        //  直接ログイン情報にセットはしない。。
        //				loginInfo.setCdProgram(useCaseID);	//TODO プログラムIDには何を設定？
        //				loginInfo.setCdGamen(screenID);				//画面ID
        //				loginInfo.setNmGamen(screenName);			//画面名
        //				loginInfo.setQtSaidaiHyouji(maxDispCnt);	//最大表示件数
        //				loginInfo.setQtSaidaiKensaku(maxSelectCnt);	//最大取得件数

        //				context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo);

        /*----------------------------------------------------------------------
         *  ヘッダ・フッタの設定
         *----------------------------------------------------------------------*/
        //ヘッダ部の初期化
        SMSHeaderFooterManager.initHeader(event, context)
        //ヘッダ部に画面名を表示
        SMSHeaderFooterManager.setHeaderTitle(context, screenName, screenID)

        //ボタンのラベルを設定
        if (buttonLabelArray != null && buttonLabelArray.length > 0) {
          SMSHeaderFooterManager.initFooter(context, buttonLabelArray)
        } else {
          SMSHeaderFooterManager.initFooter(
            context,
            YBMCMNLogicBase.DEFAULT_BUTTON_LABELES,
          )
        }

        //全フッタボタンを非活性
        SMSHeaderFooterManager.setAllFooterButtonEnabled(context, false)

        //指定フッタボタンを活性
        for (let i = 0; i < enableButtonArray.length; i++) {
          if (new Integer(enableButtonArray[i]).intValue() > 0) {
            //0以上の値が設定されていれば活性
            SMSHeaderFooterManager.setEnabledFooterButton(
              context,
              YBMCMNLogicBase.ITEM_FUNCBTN_ARRAY[i],
              true,
            )
          }
        }

        //フッタ部のメッセージ初期化
        SMSHeaderFooterManager.initInformation(context)
      } else {
        System.out.println('getScreenID();不正なスクリーンＩＤです。')
        //				//TODO 業務エラー？システムエラー？(メッセージIDは必要か？)
        //				throw new SMSRuntimeException("不正なスクリーンＩＤです。");
      }
    } catch (th: any) {
      th.printStackTrace(System.out)
      //例外画面に遷移
      super.callErrorAdapter(context, th)
    }
  }

  /**
   * 「組織コンボ内容の設定処理」<p>
   * コンボ表示用のリスト作成処理<br>
   *
   * @param context		CJFコンテキストオブジェクト
   * @param event        イベント
   * @param current		CJF画面オブジェクト
   * @param inData1		上位組織コード（検索条件）
   * @param inData2		取得階層レベル（検索条件）
   * @param inData3		表示リストコントロール：""=なし、"1"=「選択なし」「すべて」を追加表示、 "2"=「選択なし」「すべて」のみ表示、
   * 											  "3"=「選択して下さい」「すべて」を追加表示
   * @param inData4		適用日
   * @exception com.fujitsu.jcf.ctrl.JCFException
   * @exception com.fujitsu.jcf.gui.JCFDataException
   */
  protected setSoshikiCombo(
    context: JCFContext,
    event: JCFEvent,
    current: JCFScreenData,
    inData1: string,
    inData2: string,
    inData3: string,
    inData4: string,
  ): JCFSelectableElement[] {
    SMSCLLog.debug('YBMCMNLogicBase:setSoshikiCombo() Start')

    // 損益場所コンボボックスの作成（「選択なし」「すべて」のみ表示）
    if (inData3.equals('2')) {
      let rtnList0: JCFSelectableElement[] = createArrayByInstance(
        JCFSelectableElement,
        2,
      )
      rtnList0[0] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_NOTHING,
        YBMCMNCommon.COMBO_CD_NOTHING,
        true,
      )
      rtnList0[1] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_ALL,
        YBMCMNCommon.COMBO_CD_ALL,
        false,
      )
      SMSCLLog.debug('YBMCMNLogicBase:setSoshikiCombo() end')
      return rtnList0
    }

    let noLevel: string = YBMCMNCommon.STR_EMPTY
    let cdJoiSoshiki: string = YBMCMNCommon.STR_EMPTY
    let add: number = 0
    if (inData3.equals('1') || inData3.equals('3')) {
      add = 2
    } else if (inData3.equals('4')) {
      add = 1
    }

    noLevel = inData2
    cdJoiSoshiki = inData1

    // 組織情報取得
    let outData: HashMap[] = this.getSoshikiNotDataNoErr(
      context,
      event,
      current,
      cdJoiSoshiki,
      noLevel,
      inData4,
    )
    /* **************************************************************
	 		コンボボックス生成
	*****************************************************************/
    let rtnList: JCFSelectableElement[] = createArrayByInstance(
      JCFSelectableElement,
      outData.length + add,
    )
    let nmSoshiki: string
    let cdSoshiki: string

    // 損益場所コンボボックスの作成（「選択なし」または「選択して下さい」と「すべて」を追加して表示）
    if (inData3.equals('1') || inData3.equals('3')) {
      if (inData3.equals('1')) {
        rtnList[0] = new JCFSelectableElement(
          YBMCMNCommon.COMBO_MSG_NOTHING,
          YBMCMNCommon.COMBO_CD_NOTHING,
          true,
        )
      } else {
        rtnList[0] = new JCFSelectableElement(
          YBMCMNCommon.COMBO_MSG_CHOICE,
          YBMCMNCommon.COMBO_CD_NOTHING,
          true,
        )
      }
      rtnList[1] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_ALL,
        YBMCMNCommon.COMBO_CD_ALL,
        false,
      )
      for (let i = 0; i < outData.length; i++) {
        nmSoshiki = outData[i].get(
          YBMSonekiSoshiki.NM_SONEKIKANRI_SOSHIKI,
        ) as string
        cdSoshiki = outData[i].get(
          YBMSonekiSoshiki.CD_SONEKIKANRI_SOSHIKI,
        ) as string
        rtnList[i + add] = new JCFSelectableElement(
          cdSoshiki + '：' + nmSoshiki,
          cdSoshiki,
          false,
        )
      }
      SMSCLLog.debug('YBMCMNLogicBase:setSoshikiCombo() end')
      return rtnList
    }
    // 損益場所コンボボックスの作成（処理種別＝4　⇒　「選択なし」のみを追加して表示）
    if (inData3.equals('4')) {
      rtnList[0] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_NOTHING,
        YBMCMNCommon.COMBO_CD_NOTHING,
        true,
      )
    }
    for (let i = 0; i < outData.length; i++) {
      nmSoshiki = outData[i].get(
        YBMSonekiSoshiki.NM_SONEKIKANRI_SOSHIKI,
      ) as string
      cdSoshiki = outData[i].get(
        YBMSonekiSoshiki.CD_SONEKIKANRI_SOSHIKI,
      ) as string
      rtnList[i + add] = new JCFSelectableElement(
        cdSoshiki + '：' + nmSoshiki,
        cdSoshiki,
        false,
      )
    }
    SMSCLLog.debug('YBMCMNLogicBase:setSoshikiCombo() end')
    return rtnList
  }

  /**
   * 「製品事業コンボ内容の設定処理」<p>
   * コンボ表示用のリスト作成処理<br>
   *
   * @param context		CJFコンテキストオブジェクト
   * @param event        イベント
   * @param current		CJF画面オブジェクト
   * @param inData1		上位製品群コード（検索条件）
   * @param inData2		取得階層レベル（検索条件）
   * @param inData3		表示リストコントロール：""=なし、"1"=「選択なし」「すべて」を追加表示、 "2"=「選択なし」「すべて」のみ表示、
   * 											  "3"=「選択して下さい」「すべて」を追加表示
   * @exception com.fujitsu.jcf.ctrl.JCFException
   * @exception com.fujitsu.jcf.gui.JCFDataException
   */
  protected setSeihinJigyoCombo(
    context: JCFContext,
    event: JCFEvent,
    current: JCFScreenData,
    inData1: string,
    inData2: string,
    inData3: string,
    inData4: string,
  ): JCFSelectableElement[] {
    SMSCLLog.debug('YBMCMNLogicBase:setSeihinJigyoCombo() Start')

    // 製品事業コンボボックスの作成（「選択なし」「すべて」のみ表示）
    if (inData3.equals('2')) {
      let rtnList0: JCFSelectableElement[] = createArrayByInstance(
        JCFSelectableElement,
        2,
      )
      rtnList0[0] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_NOTHING,
        YBMCMNCommon.COMBO_CD_NOTHING,
        true,
      )
      rtnList0[1] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_ALL,
        YBMCMNCommon.COMBO_CD_ALL,
        false,
      )
      SMSCLLog.debug('YBMCMNLogicBase:setSeihinJigyoCombo() end')
      return rtnList0
    }

    let noLevel: string = YBMCMNCommon.STR_EMPTY
    let cdJoiGun: string = YBMCMNCommon.STR_EMPTY
    let add: number = 0
    if (inData3.equals('1') || inData3.equals('3')) {
      add = 2
    }

    noLevel = inData2
    cdJoiGun = inData1

    // 製品事業情報取得
    let outData: HashMap[] = this.getSeihinJigyoNotDataNoErr(
      context,
      event,
      current,
      cdJoiGun,
      noLevel,
      inData4,
    )
    /* **************************************************************
	 		コンボボックス生成
	*****************************************************************/
    let rtnList: JCFSelectableElement[] = createArrayByInstance(
      JCFSelectableElement,
      outData.length + add,
    )
    let nmGun: string
    let cdGun: string

    // 製品事業コンボボックスの作成（「選択なし」「すべて」を追加して表示）
    if (inData3.equals('1')) {
      rtnList[0] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_NOTHING,
        YBMCMNCommon.COMBO_CD_NOTHING,
        true,
      )
      rtnList[1] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_ALL,
        YBMCMNCommon.COMBO_CD_ALL,
        false,
      )
      for (let i = 0; i < outData.length; i++) {
        nmGun = outData[i].get(YBMSeihingun.NM_SEIHINGUN_RYAKUSHIKI) as string
        cdGun = outData[i].get(YBMSeihingun.CD_SEIHINGUN) as string
        rtnList[i + add] = new JCFSelectableElement(
          cdGun + '：' + nmGun,
          cdGun,
          false,
        )
      }
      SMSCLLog.debug('YBMCMNLogicBase:setSeihinJigyoCombo() end')
      return rtnList
    }
    // 製品事業コンボボックスの作成（「選択して下さい」「すべて」を追加して表示）
    if (inData3.equals('3')) {
      rtnList[0] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_CHOICE,
        YBMCMNCommon.COMBO_CD_NOTHING,
        true,
      )
      rtnList[1] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_ALL,
        YBMCMNCommon.COMBO_CD_ALL,
        false,
      )
      for (let i = 0; i < outData.length; i++) {
        nmGun = outData[i].get(YBMSeihingun.NM_SEIHINGUN_RYAKUSHIKI) as string
        cdGun = outData[i].get(YBMSeihingun.CD_SEIHINGUN) as string
        rtnList[i + add] = new JCFSelectableElement(
          cdGun + '：' + nmGun,
          cdGun,
          false,
        )
      }
      SMSCLLog.debug('YBMCMNLogicBase:setSeihinJigyoCombo() end')
      return rtnList
    }
    // 製品事業コンボボックスの作成（製品事業のみ）
    for (let i = 0; i < outData.length; i++) {
      nmGun = outData[i].get(YBMSeihingun.NM_SEIHINGUN_RYAKUSHIKI) as string
      cdGun = outData[i].get(YBMSeihingun.CD_SEIHINGUN) as string
      rtnList[i + add] = new JCFSelectableElement(
        cdGun + '：' + nmGun,
        cdGun,
        false,
      )
    }

    SMSCLLog.debug('YBMCMNLogicBase:setSeihinJigyoCombo() end')
    return rtnList
  }

  /**
   * 「製品コンボ内容の設定処理」<p>
   * 製品コンボ内容の表示<br>
   *
   * @param context		CJFコンテキストオブジェクト
   * @param event        イベント
   * @param current		CJF画面オブジェクト
   * @param inData1		上位製品群コード（検索条件）
   * @param inData2		表示リストコントロール：""=なし、"1"=「選択なし」「すべて」を追加表示、 "2"=「選択なし」「すべて」のみ表示、
   * 											  "3"=「選択して下さい」「すべて」を追加表示
   * @param inData3		適用日
   * @exception com.fujitsu.jcf.ctrl.JCFException
   * @exception com.fujitsu.jcf.gui.JCFDataException
   */
  protected setSeihinCombo(
    context: JCFContext,
    event: JCFEvent,
    current: JCFScreenData,
    inData1: string,
    inData2: string,
    inData3: string,
  ): JCFSelectableElement[] {
    SMSCLLog.debug('YBMCMNLogicBase:setSeihinCombo() Start')

    // 製品事業コンボボックスの作成（「選択なし」「すべて」のみ表示）
    if (inData2.equals('2')) {
      let rtnList0: JCFSelectableElement[] = createArrayByInstance(
        JCFSelectableElement,
        2,
      )
      rtnList0[0] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_NOTHING,
        YBMCMNCommon.COMBO_CD_NOTHING,
        true,
      )
      rtnList0[1] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_ALL,
        YBMCMNCommon.COMBO_CD_ALL,
        false,
      )
      SMSCLLog.debug('YBMCMNLogicBase:setSeihinCombo() end')
      return rtnList0
    }

    let add: number = 0
    if (inData2.equals('1') || inData2.equals('3')) {
      add = 2
    }

    // 製品情報取得
    let outData: HashMap[] = this.getSeihinNotDataNoErr(
      context,
      event,
      current,
      inData1,
      inData3,
    )
    /* **************************************************************
	 		コンボボックス生成
	*****************************************************************/
    let rtnList: JCFSelectableElement[] = createArrayByInstance(
      JCFSelectableElement,
      outData.length + add,
    )
    let nmSeihin: string
    let cdSeihin: string

    // 製品コンボボックスの作成（「選択なし」「すべて」を追加して表示）
    if (inData2.equals('1')) {
      rtnList[0] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_NOTHING,
        YBMCMNCommon.COMBO_CD_NOTHING,
        true,
      )
      rtnList[1] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_ALL,
        YBMCMNCommon.COMBO_CD_ALL,
        false,
      )
      for (let i = 0; i < outData.length; i++) {
        nmSeihin = outData[i].get(YBMSeihin.NM_SEIHIN_RYAKUSHIKI) as string
        cdSeihin = outData[i].get(YBMSeihin.CD_SEIHIN) as string
        rtnList[i + add] = new JCFSelectableElement(
          cdSeihin + '：' + nmSeihin,
          cdSeihin,
          false,
        )
      }
    }
    // 製品コンボボックスの作成（「選択して下さい」「すべて」を追加して表示）
    if (inData2.equals('3')) {
      rtnList[0] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_CHOICE,
        YBMCMNCommon.COMBO_CD_NOTHING,
        true,
      )
      rtnList[1] = new JCFSelectableElement(
        YBMCMNCommon.COMBO_MSG_ALL,
        YBMCMNCommon.COMBO_CD_ALL,
        false,
      )
      for (let i = 0; i < outData.length; i++) {
        nmSeihin = outData[i].get(YBMSeihin.NM_SEIHIN) as string
        cdSeihin = outData[i].get(YBMSeihin.CD_SEIHIN) as string
        rtnList[i + add] = new JCFSelectableElement(
          cdSeihin + '：' + nmSeihin,
          cdSeihin,
          false,
        )
      }
    }
    // 製品コンボボックスの作成（ DB取得値のみ表示）
    if (!inData2.equals('1') && !inData2.equals('3')) {
      for (let i = 0; i < outData.length; i++) {
        nmSeihin = outData[i].get(YBMSeihin.NM_SEIHIN) as string
        cdSeihin = outData[i].get(YBMSeihin.CD_SEIHIN) as string
        rtnList[i] = new JCFSelectableElement(
          cdSeihin + '：' + nmSeihin,
          cdSeihin,
          false,
        )
      }
    }

    SMSCLLog.debug('YBMCMNLogicBase:setSeihinCombo() end')
    return rtnList
  }

  /**
   * 「費目コンボ内容の設定処理」<p>
   * 費目コンボ内容の表示<br>
   *
   * @param context		CJFコンテキストオブジェクト
   * @param event        イベント
   * @exception com.fujitsu.jcf.ctrl.JCFException
   * @exception com.fujitsu.jcf.gui.JCFDataException
   */
  protected setHimokuCombo(
    context: JCFContext,
    event: JCFEvent,
  ): JCFSelectableElement[] {
    SMSCLLog.debug('YBMCMNLogicBase:setHimokuCombo() Start')

    // 費目情報取得
    let outData: HashMap[] = this.getHimoku(context, event)
    /* **************************************************************
	 		汎用区分コード「00」除外
	*****************************************************************/
    let count: number = 1
    for (let i = 0; i < outData.length; i++) {
      if (!(outData[i].get(YBMHanyoBunrui.CD_HANYO) as string).equals('00')) {
        count += 1
      }
    }
    /* **************************************************************
	 		コンボボックス生成
	*****************************************************************/
    let rtnList: JCFSelectableElement[] = createArrayByInstance(
      JCFSelectableElement,
      count,
    )
    let nmHimoku: string
    let cdHimoku: string

    // 費目コンボボックスの作成
    rtnList[0] = new JCFSelectableElement('すべて', '99', false)

    let j: number = 1
    for (let i = 0; i < outData.length; i++) {
      if (!(outData[i].get(YBMHanyoBunrui.CD_HANYO) as string).equals('00')) {
        nmHimoku = outData[i].get(YBMHanyoBunrui.NM_NAIYO1) as string
        cdHimoku = outData[i].get(YBMHanyoBunrui.CD_HANYO) as string
        rtnList[j] = new JCFSelectableElement(
          cdHimoku + '：' + nmHimoku,
          cdHimoku,
          false,
        )
        j += 1
      }
    }

    SMSCLLog.debug('YBMCMNLogicBase:setHimokuCombo() end')
    return rtnList
  }

  /**
   * 与えられたパラメータに従った環境設定トランの年度を取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @return String			＝年度
   * @exception	Throwable
   */

  protected getKankyoSetteiNendo(context: JCFContext, event: JCFEvent): string {
    SMSCLLog.trace('YBMCMNLogicBase:getKankyoSetteiNendo() start')
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getKankyoSetteiJoho',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: HashMap = rtnMap.get('kankyoSetteiJohoMsg') as HashMap

    if (rtnList == null) {
      throw new JCFException()
    }

    SMSCLLog.trace('YBMCMNLogicBase:getKankyoSetteiNendo() end')
    return rtnList.get('dtNendo') as string
  }

  /**
   * 与えられたパラメータに従った環境設定トランの期中修正開始月を取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @return String			＝期中修正開始月
   * @exception	Throwable
   */

  protected getKankyoSetteiTsuki(context: JCFContext, event: JCFEvent): string {
    SMSCLLog.trace('YBMCMNLogicBase:getKankyoSetteiNendo() start')
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getKankyoSetteiJoho',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: HashMap = rtnMap.get('kankyoSetteiJohoMsg') as HashMap

    if (rtnList == null) {
      throw new JCFException()
    }

    SMSCLLog.trace('YBMCMNLogicBase:getKankyoSetteiNendo() end')
    return rtnList.get('dtTsuki') as string
  }

  /**
   * 与えられたパラメータに従った出力制御情報を取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @return rtnList			＝出力制御情報CBMMsg
   * @exception	Throwable
   */

  protected getSyuturyokuSeigyoJoho(
    context: JCFContext,
    event: JCFEvent,
  ): HashMap[] {
    SMSCLLog.trace('YBMCMNLogicBase:getSyuturyokuSeigyoJoho() start')
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getShutsuryokuSeigyoJoho',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: HashMap[] = rtnMap.get(
      'shutsuryokuSeigyoJohoCBMMsgList',
    ) as HashMap[]

    SMSCLLog.trace('YBMCMNLogicBase:getSyuturyokuSeigyoJoho() end')
    return rtnList
  }

  /**
   * 与えられたパラメータに従った処理対象外損益管理組織コードを取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @return rtnList			＝対象外損益組織CBMMsg
   * @exception	Throwable
   */

  protected getTaishogaiSonekiSoshiki(
    context: JCFContext,
    event: JCFEvent,
  ): string[] {
    SMSCLLog.trace('YBMCMNLogicBase:getTaishogaiSonekiSoshiki() start')
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getTaishogaiSonekiSoshiki',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: string[] = rtnMap.get('taishogaiSonekiSoshikiList') as string[]

    SMSCLLog.trace('YBMCMNLogicBase:getTaishogaiSonekiSoshiki() end')
    return rtnList
  }

  /**
   * 与えられたパラメータに従った処理対象外事業コードを取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @return rtnList			＝対象外事業CBMMsg
   * @exception	Throwable
   */

  protected getTaishogaiJigyo(context: JCFContext, event: JCFEvent): string[] {
    SMSCLLog.trace('YBMCMNLogicBase:getTaishogaiJigyo() start')
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getTaishogaiJigyo',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: string[] = rtnMap.get('taishogaiJigyoList') as string[]

    SMSCLLog.trace('YBMCMNLogicBase:getTaishogaiJigyo() end')
    return rtnList
  }

  /**
   * ログインユーザの損益管理組織コードL2を取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @return rtnList			＝損益管理組織コードL2
   * @exception	Throwable
   */

  protected getSonekiSoshikiL2(
    context: JCFContext,
    event: JCFEvent,
    inData: string,
    dtTekiyo: string,
  ): string {
    SMSCLLog.trace('YBMCMNLogicBase:getSonekiSoshikiL2() start')
    let outCBM: HashMap = new HashMap()
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    outCBM.put('cdSonekikanriSoshiki', inData)
    outCBM.put('dtTekiyo', dtTekiyo)

    outCBS.put('sonekiSoshikiShosaiCBMMsg', outCBM)

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YCMKMSCBS',
      'YCMSonekiSoshikiCBSHandler.getSonekiSoshiki',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let soshikiMap: HashMap = rtnMap.get('sonekiSoshikiShosaiCBMMsg') as HashMap

    SMSCLLog.trace('YBMCMNLogicBase:getTaishogaiSonekiSoshiki() end')
    return soshikiMap.get('cdSonekikanriLevel2') as string
  }

  /**
   * 基準日取得 メソッドです。
   *
   * @param String			画面選択年度
   * @param String			システム運用日付
   * @return String			基準日
   * @exception Throwable	すべての例外
   */
  protected getKijunBi(
    year: string,
    dtUnyo: string,
    dtKankyoNendo: string,
    dtKankyoTsuki: string,
  ): string {
    // 画面選択年度の末日を取得
    let dtNendomatsu: string = NativeString.valueOf(
      (Integer.parseInt(year) + 1) * 10000 + 300 + 31,
    )

    // 運用日付と比較
    if (year.compareTo(dtKankyoNendo) == 0) {
      // 画面.年度　＝　環境設定トラン.年度

      // 環境設定トラン.年度 + 環境設定トラン.期中修正開始月 + 01
      let dtNenTsukiHi: string = dtKankyoNendo + dtKankyoTsuki + '01'

      if (dtUnyo.compareTo(dtNenTsukiHi) > 0) {
        // 環境設定トラン.年度 + 環境設定トラン.期中修正開始月 + 01　＜　運用日付
        return dtUnyo
      } else {
        // 環境設定トラン.年度 + 環境設定トラン.期中修正開始月 + 01　≧　運用日付
        return dtNenTsukiHi
      }
    } else {
      // 画面.年度　≠　環境設定トラン.年度
      if (dtNendomatsu.compareTo(dtUnyo) > 0) {
        // 画面.年度末日　＞　運用日付
        return dtUnyo
      } else {
        // 画面.年度末日　≦　運用日付
        return dtNendomatsu
      }
    }
  }

  /**
   * 年月変換 メソッドです。
   *
   * @param String			画面選択年度
   * @param String			システム運用日付
   * @return String			基準日
   * @exception Throwable	すべての例外
   */
  protected cnvNengetsu(year: string, month: string): string {
    let iMonth: number = Integer.parseInt(month)
    if (iMonth < 4) {
      return NativeString.valueOf((Integer.parseInt(year) + 1) * 100 + iMonth)
    } else {
      return NativeString.valueOf(Integer.parseInt(year) * 100 + iMonth)
    }
  }

  /**
   * 「年月の大小チェック処理」
   * <p>
   * 開始月 > 終了月の場合、falseを返す。<br>
   *
   * @param	String	年度
   * @param	String	開始月
   * @param	String	終了月
   * @return	boolean	true:OK	false:NG
   *
   */
  protected checkNengetsu(
    nendo: string,
    kaishiDuki: string,
    shuryoDuki: string,
  ): boolean {
    let iNendo: number = Integer.parseInt(nendo)
    let kaishi: number = Integer.parseInt(kaishiDuki)
    let shuryo: number = Integer.parseInt(shuryoDuki)

    // 月が4未満の場合、年度+1
    kaishi = (kaishi < 4 ? iNendo + 1 : iNendo) * 100 + kaishi
    shuryo = (shuryo < 4 ? iNendo + 1 : iNendo) * 100 + shuryo

    if (kaishi > shuryo) {
      return false
    } else {
      return true
    }
  }

  /**
   * 指定した帳票の出力制御情報を取得する メソッドです。
   *
   * @param	JCFContext		context
   * @param	String			帳票ID
   * @param	String			取得項目(出力可否 / 事業制限)
   * @return String			区分値
   * @exception Throwable	すべての例外
   */
  protected getChohyoInfo(
    context: JCFContext,
    chohyoId: string,
    param: string,
  ): string {
    let map: HashMap[] = super.getUserData(
      context,
      YBMCMNLogicBase.KEY_USER_SHUTSURYOKU_SEIGYO,
    ) as HashMap[]

    for (let i = 0; i < map.length; i++) {
      let wkMap: HashMap = map[i]
      if (wkMap.containsValue(chohyoId)) {
        return wkMap.get(param) as string
      }
    }

    return '09'
  }

  /**
   * 職場コンボボックスにラインのみ表示するかを取得する メソッドです。
   *
   * @param	String			帳票ID
   * @return String			区分値(ラインのみ："01" 以外："00")
   * @exception Throwable	すべての例外
   */
  protected isOnlyLine(chohyoId: string): string {
    for (let i = 0; i < YBMCMNLogicBase.ID_LINE_ONLY_ARRAY.length; i++) {
      if (chohyoId.equals(YBMCMNLogicBase.ID_LINE_ONLY_ARRAY[i])) {
        return '01'
      }
    }

    return '00'
  }

  /**
   * 「帳票ID取得処理」
   * <p>
   * 選択した帳票のIDを返す<br>
   *
   * @param current
   *            CJFスクリーンオブジェクト
   * @exception com.fujitsu.jcf.ctrl.JCFException
   * @exception com.fujitsu.jcf.gui.JCFDataException
   */
  protected abstract getChohyoID(current: JCFScreenData): string

  //-----------------------------------------------------------------------------------------------------------------
  //  private
  //-----------------------------------------------------------------------------------------------------------------

  /**
   * JCFイベントより取得したスクリーンＩＤをチェックします。
   *
   * @param screenId		スクリーンＩＤ
   * @return boolean		規約に従っていればTrue, 不正ならばFalse
   */
  private isFullScreenId(screenId: string): boolean {
    let rtnVal: boolean = screenId.length > 15
    return rtnVal
    //TODO 命名規約に従えば17だが15あればエラーにならないので、暫定OKとする。
  }

  /**
   * 費目情報を取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @return rtmList			＝汎用分類CBMMsg（費目）
   * @exception	Throwable
   */

  private getHimoku(context: JCFContext, event: JCFEvent): HashMap[] {
    SMSCLLog.trace('YBMCMNLogicBase:getHimoku() start')
    let outCBM: HashMap = new HashMap()
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()
    // サブシステム種別コード
    outCBM.put('cdSubSystemShubetsu', '100')
    // データ種別コード
    outCBM.put('cdDataShubetsu', '00224')

    outCBS.put('himokuJokenCBMMsg', outCBM)

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getHimoku',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: HashMap[] = rtnMap.get('hanyoBunruiCBMMsgList') as HashMap[]

    if (rtnList.length == 0) {
      throw new JCFException()
    }

    SMSCLLog.trace('YBMCMNLogicBase:getHimoku() end')
    return rtnList
  }

  /**
   * 与えられたパラメータに従った損益管理組織を取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @param String inData		＝上位損益管理組織コード
   * @param String inLevel	＝取得したい損益管理組織の階層レベル
   * @return rtmList			＝損益組織CBMMsg
   * @exception	Throwable
   */
  private getSoshikiNotDataNoErr(
    context: JCFContext,
    event: JCFEvent,
    current: JCFScreenData,
    inData: string,
    inLevel: string,
    date: string,
  ): HashMap[] {
    SMSCLLog.trace('YBMCMNLogicBase:getSoshikiNotDataNoErr() start')
    let outCBM: HashMap = new HashMap()
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    outCBM.put('cdSonekikanriSoshiki', inData)
    outCBM.put('noKaisoLevel', inLevel)
    outCBM.put('dtTekiyo', date)
    outCBM.put(
      'stShutsuryokuKahi',
      this.getChohyoInfo(
        context,
        this.getChohyoID(current),
        'stShutsuryokuKahi',
      ),
    )
    outCBM.put(
      'cdTaisyogaiSonekikanriSoshikiList',
      this.getUserData(context, YBMCMNLogicBase.KEY_USER_TAISHOGAI_SOSHIKI),
    )
    outCBM.put('stLineOnly', this.isOnlyLine(this.getChohyoID(current)))

    outCBS.put('soshikiJokenCBMMsg', outCBM)

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getSonekiKanri',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: HashMap[] = rtnMap.get(
      'sonekiSoshikiHyojiCBMMsgList',
    ) as HashMap[]

    SMSCLLog.trace('YBMCMNLogicBase:getSoshikiNotDataNoErr() end')
    return rtnList
  }

  /**
   * 与えられたパラメータに従った製品群事業を取得する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @param String inData	＝上位製品群コード
   * @param String inLevel	＝取得したい製品群事業の階層レベル
   * @return rtmList			＝製品群CBMMsg
   * @exception	Throwable
   */
  private getSeihinJigyoNotDataNoErr(
    context: JCFContext,
    event: JCFEvent,
    current: JCFScreenData,
    inData: string,
    inLevel: string,
    date: string,
  ): HashMap[] {
    SMSCLLog.trace('YBMCMNLogicBase:getSeihinJigyoNotDataNoErr() start')
    let outCBM: HashMap = new HashMap()
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    outCBM.put('cdJigyo', inData)
    outCBM.put('noKaisoLevel', inLevel)
    outCBM.put('dtKijun', date)
    outCBM.put(
      'stJigyoSeigen',
      this.getChohyoInfo(context, this.getChohyoID(current), 'stJigyoSeigen'),
    )
    outCBM.put(
      'cdTaishogaiJigyoList',
      this.getUserData(context, YBMCMNLogicBase.KEY_USER_TAISHOGAI_JIGYO),
    )

    outCBS.put('jigyoJokenCBMMsg', outCBM)

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getSeihingun',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: HashMap[] = rtnMap.get('seihingunHyojiCBMMsgList') as HashMap[]

    SMSCLLog.trace('YBMCMNLogicBase:getSeihinJigyoNotDataNoErr() end')
    return rtnList
  }

  /**
   * 与えられたパラメータに従った製品情報を取得する。
   * <PRE>
   * </PRE>
   *
   * @param context		CJFコンテキストオブジェクト
   * @param event			イベント
   * @param current		CJF画面オブジェクト
   * @param String inData	＝上位損益管理組織コード
   * @param String inLevel	＝取得したい損益管理組織の階層レベル
   * @return rtmList			＝損益組織CBMMsg
   * @exception	Throwable
   */

  private getSeihinNotDataNoErr(
    context: JCFContext,
    event: JCFEvent,
    current: JCFScreenData,
    inData: string,
    date: string,
  ): HashMap[] {
    SMSCLLog.trace('YBMCMNLogicBase:getSeihinNotDataNoErr() start')
    let outCBM: HashMap = new HashMap()
    let outCBS: HashMap = new HashMap()
    let rtnMap: HashMap = new HashMap()

    outCBM.put('cdJigyo', inData)
    outCBM.put('dtKijun', date)
    outCBM.put(
      'stJigyoSeigen',
      this.getChohyoInfo(context, this.getChohyoID(current), 'stJigyoSeigen'),
    )
    outCBM.put(
      'cdTaishogaiJigyoList',
      this.getUserData(context, YBMCMNLogicBase.KEY_USER_TAISHOGAI_JIGYO),
    )

    outCBS.put('jigyoJokenCBMMsg', outCBM)

    //EJB CALL
    rtnMap = super.callEJB(
      context,
      event,
      'YBMYHSCBS',
      'YBMYosanHenseiCBSHandler.getSeihinmei',
      outCBS,
    )
    rtnMap = rtnMap.get(YBMCMNLogicBase.KEY_HASHMAP_SYSDATA) as HashMap
    let rtnList: HashMap[] = rtnMap.get('seihinHyojiCBMMsgList') as HashMap[]

    SMSCLLog.trace('YBMCMNLogicBase:getSeihinNotDataNoErr() end')
    return rtnList
  }

  /**
   * 与えられたパラメータに従った利用制限チェックを実行する。
   * <PRE>
   * </PRE>
   *
   * @param JCFContext context
   * @param event イベント
   * @return rtmList			＝損益組織CBMMsg
   * @exception	Throwable
   */

  //	HashMap[] checkRiyoSeigen(JCFContext context, JCFEvent event) throws Throwable {
  //		SMSCLLog.trace("YBMCMNLogicBase:getSeihin() start");
  //		HashMap outCBM	= new HashMap();
  //		HashMap outCBS	= new HashMap();
  //		HashMap rtnMap	= new HashMap();
  //		// サブシステム種別コード
  //		outCBM.put("cdSubSystemShubetsu", "640");
  //		// データ種別コード
  //		outCBM.put("cdDataShubetsu", "00001");
  //
  //		outCBS.put("syutsuryokuSeigenJokenCBMMsg", outCBM);
  //
  //
  //		//EJB CALL
  //		rtnMap = super.callEJB( context, event, "YBMYHSCBS", "YBMYosanHenseiCBSHandler.getKankyoSetteiJoho", outCBS );
  //		rtnMap = (HashMap)rtnMap.get(KEY_HASHMAP_SYSDATA);
  //		HashMap[] rtnList = (HashMap[])rtnMap.get("seihinCBMMsgList");
  //
  //		if ( rtnList.length == 0 ) {
  //			throw new JCFException();
  //		}
  //
  //		SMSCLLog.trace("YBMCMNLogicBase:getSeihin() end");
  //		return rtnList;
  //	}
}
