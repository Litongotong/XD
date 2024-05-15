import { Adapter } from '@/lib/adapter/adapter'
import { SMSClientInfo } from '../SMSClientInfo'
import { SMSCLLog } from './SMSCLLog'
import { Exception } from '@/lib/native/lang/Exception'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import { SMSRuntimeException } from '../SMSRuntimeException'
import type { Throwable } from '@/lib/native/lang/Throwable'
import { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import { HashMap } from '@/lib/native/util/HashMap'
import { SMSHashKeyConst } from '../SMSHashKeyConst'
import { System } from '@/lib/native/lang/System'
import { SMSDateStringUtil } from '../SMSDateStringUtil'
import { SMSMessageConst } from '../SMSMessageConst'
import { Long } from '@/lib/native/lang/Long'
import { SMSLoginInfoImpl } from '../SMSLoginInfoImpl'
import { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow'
import type { StackTraceElement } from '@/lib/native/lang/StackTraceElement'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFPanelData } from '@/lib/jcf/gui/JCFPanelData'
import { SMSHeaderFooterManager } from './logic/SMSHeaderFooterManager'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import type { List } from '@/lib/native/util/List'
import { createStringArray } from '@/utils/array/1D'
import { SMSPanelInitDataHolder } from './logic/SMSPanelInitDataHolder'
import type { JCFEventAdditionalInfo } from '@/lib/jcf/ctrl/JCFEventAdditionalInfo'
import type { JCFSpreadAdditionalInfo } from '@/lib/jcf/gui/JCFSpreadAdditionalInfo'
import type { byte } from '@/lib/native/lang/byte'
import { SMSColor } from '../SMSColor'
import { Integer } from '@/lib/native/lang/Integer'
import { SMSPageTranUtil } from '../SMSPageTranUtil'
import type { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'
import type { ArrayList } from '@/lib/native/util/ArrayList'
import { SMSPropsInfos } from '../SMSPropsInfos'
import type { JCFAdapterOutParam } from '@/lib/jcf/ctrl/JCFAdapterOutParam'
import type { MimeSource } from '../MimeSource'
import { NativeURL } from '@/lib/native/net/URL'
import type { SMSLoginInfo } from '../SMSLoginInfo'
import { SMSAppException } from '../SMSAppException'
import { SMSFileUtil } from '../SMSFileUtil'
import type { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData'
import type { JCFFieldLongData } from '@/lib/jcf/gui/JCFFieldLongData'
import { NativeString } from '@/lib/native/lang/String'
import { type NativeIterator } from '@/lib/native/util/Iterator'
import type { NativeSet } from '@/lib/native/util/Set'
import { JCFAdapterInParam } from '@/lib/jcf/ctrl/JCFAdapterInParam'
import { MsisDebug } from '@/utils/debug/log'
import { callSync } from '@/lib/call/callSync'
import { API_GAMEN_ID } from '@/lib/call/constants'
import { callASync } from '@/lib/call/callAsync'

/**
 * 画面ロジッククラスの基底クラスです。ロジッククラス共通の処理を提供します。
 * 画面ロジッククラスはこのクラスを必ず実装してください。
 */
export abstract class SMSCjfLogicBase extends Adapter {
  //フレームID
  static SUB_HEADER = 'FLM_SUB_HEAD'
  static SUB_MAIN = 'FLM_SUB_BODY'
  static SUB_FOOTER = 'FLM_SUB_FOOT'

  static MENU_MANAGER = 'sms_menu_manager'
  static MENU_AUTH_MANAGER = 'sms_menu_auth_manager'

  /**	次レコードボタン itemID */
  static ITEM_PAGE_FORWARD = 'page_forward'
  /**	前レコードボタン itemID */
  static ITEM_PAGE_REVERSE = 'page_reverse'
  /**	頁遷移ボタン itemID */
  static ITEM_PAGE_JUMP = 'page_jump'

  /**	表示開始レコード itemID */
  static ITEM_FIRST_RECORD = 'first_record'
  /**	表示終了レコード itemID */
  static ITEM_LAST_RECORD = 'last_record'
  /**	合計レコード数 itemID */
  static ITEM_TOTAL_RECORD = 'total_record'

  /**	表示頁 itemID */
  static ITEM_CURRENT_PAGE = 'current_page'
  /**	頁数 itemID */
  static ITEM_TOTAL_PAGE = 'total_page'

  /** CSVダウンロードサーブレット */
  private static SERVLET_NAME_DW_LOCAL = '/SMSDWServlet?uji.verb=downloadLocal'
  /** PDFダウンロードサーブレット */
  private static SERVLET_NAME_DW_REMOTE =
    '/SMSDWServlet?uji.verb=downloadRemote'
  /** ダウンロードファイルタイプ ファイルがAPサーバ上 */
  protected static DW_LOCAL = 0
  /** ダウンロードファイルタイプ ファイルがAPサーバではない */
  protected static DW_REMOTE = 1
  // 2007/08/14 Add start
  /** リクエストパラメータ区切り文字 */
  protected static PARAM_DELIM = '&'

  // 2007/08/14 Add end

  /** ユースケースID　共有データ領域の値を取得、設定する際に利用します*/
  protected useCaseID: string = ''

  private static CONTEXT_ROOT_KEY = 'contextRoot'
  private static PROTCOL = 'http://'
  /** ダウンロードサーブレット */
  private static SERVLET_NAME_DW = '/SMSDWServlet?uji.verb=download'

  /** 共通アダプタ名 */
  private static ADAPTER_NAME = 'SVADAPTER'
  /** ファンクションID */
  private static ADAPTER_FUNCTION_ID = 'EXECUTE'
  /** エラースクリーンID */
  private static ERROR_SCREEN_ID = 'ERROR'
  /** エラーアダプタ名 */
  private static ERROR_ADAPTER_NAME = 'EVADAPTER'
  /** サブエラーアダプタ名 */
  private static ERROR_SUB_ADAPTER_NAME = 'EVSUBADAPTER'
  /** エラーファンクションID */
  private static ERROR_FUNCTION_ID = 'ERROR'
  /** サブエラーファンクションID */
  private static ERROR_SUB_FUNCTION_ID = 'ERRORSUB'

  /** 汎用検索ID  */
  private static SEARCH_ID = 'searchID'
  /** 検索結果キー */
  private static RESULT_KEY = 'resultList'

  /** メニューサブシステムID */
  private MENU_SUBSYSTEM_ID: string = 'YCSCMNF030M'
  /** サブメニュー識別フラグ */
  private FG_SUB_MENU: string = 'fgSubMenu'

  /** 基盤システム起動チェック用キー */
  private static FG_INFRA = 'fgInfra'

  /** システムで妥当される日付プロパティファイルキー */
  static PARAM_VALID_PROP = 'SMSValidDate'

  /** システムで妥当される日付開始キー */
  static PARAM_VALID_FROM = 'fromDate'

  /** システムで妥当される日付終了キー */
  static PARAM_VALID_TO = 'toDate'

  //2006/09/14 add
  /** CBS名 */
  private static LOGIN_CBS = SMSClientInfo.getLoginCBSName()
  /** verb（ログアウト）*/
  private static VERB_LOGOUT = 'logout'
  /** 端末区分用キー */
  private static ST_TANMATSU = 'stTammatsu'
  /** 削除フラグ（ログイン管理テーブル）用キー */
  private static FG_SAKUJO_LOGIN_KANRI = 'fgSakujoLoginKanri'
  //2006/09/14 add

  /**
   * コンストラクタ
   */
  constructor() {
    super()
    this.setUseCaseID()
  }

  /**
   * ユースケースIDをセットします。
   * 派生先では
   * 以下の用に実装してください。
   * 	protected setUseCaseID() {
   *  	super.useCaseID = USECASE;
   *  }
   */
  protected abstract setUseCaseID(): void

  protected callEJB(
    context: JCFContext,
    event: JCFEvent,
    cbsName: string,
    cbsVerb: string,
    data: HashMap,
  ): HashMap
  protected callEJB(
    context: JCFContext,
    event: JCFEvent,
    functionID: string,
    cbsName: string,
    cbsVerb: string,
    data: HashMap,
  ): HashMap
  protected callEJB(...params: any[]) {
    if (params.length === 5) {
      return this.__callEJB(
        params[0],
        params[1],
        params[2],
        params[3],
        params[4],
      )
    } else if (params.length === 6) {
      return this.__callEJBWithFunctionID(
        params[0],
        params[1],
        params[2],
        params[3],
        params[4],
        params[5],
      )
    } else {
      throw new Error('Invalid parameters')
    }
  }

  /**
   * Method callEJB. EJB呼び出しを行います。
   * 実行するCBSHandlerメソッドの結果を返します。
   * @param context CJFのコンテキスト
   * @param event イベントクラス
   * @param cbsName 呼び出したいCBSのEJBアプリケーション名
   * @param cbsVerb 呼び出したいCBSに渡すverb
   * @param data (HashMap)CBSに渡すデータ
   * @return HashMap EJB呼び出し結果データ(警告、エラー時はnull)
   * @throws Throwable
   */
  private __callEJB(
    context: JCFContext,
    event: JCFEvent,
    cbsName: string,
    cbsVerb: string,
    data: HashMap,
  ): HashMap {
    return this.callEJB(
      context,
      event,
      SMSCjfLogicBase.ADAPTER_FUNCTION_ID,
      cbsName,
      cbsVerb,
      data,
    )
  }

  /**
   * Method callEJB. ファンクションIDを指定してアダプタを呼び出し
   * 					EJB呼び出しを行います。
   * @param context CJFのコンテキスト
   * @param event イベントクラス
   * @param functionID 呼び出したいアダプタのファンクションID
   * @param cbsName 呼び出したいCBSのEJBアプリケーション名
   * @param cbsVerb 呼び出したいCBSに渡すverb
   * @param data CBSに渡すデータ
   * @return HashMap EJB呼び出し結果データ
   * @throws Throwable
   */
  private __callEJBWithFunctionID(
    context: JCFContext,
    event: JCFEvent,
    functionID: string,
    cbsName: string,
    cbsVerb: string,
    data: HashMap,
  ): HashMap {
    //******* サーバー通信処理 **********************************************
    //データビーンとverbをパラメータにset
    let paramMap: HashMap = new HashMap()

    const inParam = new JCFAdapterInParam()

    paramMap.put(SMSHashKeyConst.PARAM_KEY_CBS_NAME, cbsName)
    paramMap.put(SMSHashKeyConst.PARAM_KEY_CBS_VERB, cbsVerb)
    paramMap.put(SMSHashKeyConst.PARAM_KEY_DATA, data)
    paramMap.put(
      API_GAMEN_ID,
      context.view.utils.getCurrentGamenId()
    )

    //2014/01/24 システム統合開発プロジェクト Add Start
    if (event) {
      SMSCLLog.debug('SMSCjfLogicBase：SubSystemID:' + event.getSubsystemID())
      paramMap.put(
        SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM,
        event.getSubsystemID(),
      )
    } else {
      SMSCLLog.debug('SMSCjfLogicBase：SubSystemID:null（強制）')
      paramMap.put(SMSHashKeyConst.PARAM_KEY_JCFEVENT_SUBSYSTEM, null)
    }
    //2014/01/24 システム統合開発プロジェクト Add End

    let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
      context,
    ) as SMSLoginInfoImpl
    //プログラムIDをセットする(loginInfoがnullなのはログイン時のみ)
    if (loginInfo) {
      loginInfo.setCdProgram(this.useCaseID.substring(0, 10))
    } else {
      // 2006/11/27 Add start
      loginInfo = new SMSLoginInfoImpl()
      // 2006/11/27 Add end
    }
    paramMap.put(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)

    inParam.setCommunicationData(paramMap)

    //Servletにデータを送信して，結果を受け取る。

    let outParam: JCFAdapterOutParam = null!

    try {
      outParam = callSync(functionID, inParam)
    } finally {
      //2007/04/24 Mod start
      /*
			// ファイルアップロード用ファイルデータのclose処理
			HashMap fileUploadMap = (HashMap) data.get(SMSHashKeyConst.PARAM_MSG_FILEUPLOAD);
			SMSCLLog.debug("ファイルアップロード用ファイルデータ：" + ((fileUploadMap != null) ? "有": "無"));
			if (fileUploadMap != null) {
				SMSCLLog.debug("ファイルアップロード用ファイルデータの解放処理 start");
				MimeSource fileData = (MimeSource) fileUploadMap.get(SMSHashKeyConst.F_U_FILELIST);
				fileData.getInputStream().close();
				SMSCLLog.debug("ファイルアップロード用ファイルデータの解放処理 end");
			}
*/
      //複数ファイル(HashMap配列)対応追加
      // ファイルアップロード用ファイルデータのclose処理
      //ファイルオブジェクト取得
      let obj: any = data.get(SMSHashKeyConst.PARAM_MSG_FILEUPLOAD)

      //ファイルデータが存在するか確認
      if (obj) {
        SMSCLLog.debug('ファイルアップロード用ファイルデータの解放処理 start')
        //1ファイル対応
        if (obj instanceof HashMap) {
          //HashMapに変換
          let fileUploadMap: HashMap = obj as HashMap

          SMSCLLog.debug('ファイル数：1')

          //MimeSourceを取得
          let fileData: MimeSource = fileUploadMap.get(
            SMSHashKeyConst.F_U_FILELIST,
          ) as MimeSource
          if (fileData != null) {
            fileData.getInputStream().close()
            SMSCLLog.debug(
              'ファイルアップロード用ファイルデータのclose処理実行',
            )
          }
          //複数ファイル対応
        } else if (obj[0] instanceof HashMap) {
          //HashMap配列に変換
          let fileUploadMap: HashMap[] = obj as HashMap[]

          SMSCLLog.debug('ファイル数：' + fileUploadMap.length)

          //配列分だけファイルclose処理を実行
          for (let i = 0; i < fileUploadMap.length; i++) {
            //MimeSourceを取得
            let fileData: MimeSource = fileUploadMap[i].get(
              SMSHashKeyConst.F_U_FILELIST,
            ) as MimeSource
            if (fileData != null) {
              fileData.getInputStream().close()
              SMSCLLog.debug(
                'ファイルアップロード用ファイルデータのclose処理実行(' +
                  i +
                  '回目)',
              )
            }
          }
        } else {
          //あり得ない処理
          //throw new SMSRuntimeException("想定していないオブジェクトがセットされています");
          SMSCLLog.debug('想定していないオブジェクトがセットされています')
        }
        SMSCLLog.debug('ファイルアップロード用ファイルデータの解放処理 end')
      } else {
        SMSCLLog.debug(
          'ファイルアップロード用ファイルデータがnullの為、何もしない',
        )
      }

      //2007/04/24 Mod end
    }

    if (outParam.isExceptionThrown()) {
      let e: Exception = outParam.getException()
      e.printStackTrace(System.out)
      throw e
      //			this.callErrorAdapter(context,e);
    }

    //エラーと警告の取り扱い
    let rtn: HashMap = new HashMap()
    try {
      rtn = this.checkRtnHash(context, outParam)
      //共通情報が戻ってきたらアプリケーション領域に再セット
      let outLoginInfo: SMSLoginInfoImpl = outParam
        .getCommunicationData()
        .get(SMSHashKeyConst.PARAM_KEY_COMMON) as SMSLoginInfoImpl

      MsisDebug.log('out login info:', outLoginInfo)
      if (outLoginInfo) {
        this.setLoginInfo(context, outLoginInfo)
      }
    } catch (th: any) {
      let buf: StringBuffer = new StringBuffer()
      buf.append(th.toString() + '\n')
      let elm: StackTraceElement[] = th.getStackTrace()
      for (let i = 0; i < elm.length; i++) {
        buf.append(elm[i].toString() + '\n')
      }

      if (th instanceof SMSRuntimeException) {
        let cdError: string = (th as SMSRuntimeException).getCdError()
        //異常番号が存在したら出力
        if (cdError != null && !cdError.equals('')) {
          SMSCLLog.error('異常番号:' + cdError)
        }
      }

      let cause: Throwable = th.getCause()
      if (cause != null) {
        buf.append('cause:' + cause.toString() + '\n')
        let causeElm: StackTraceElement[] = cause.getStackTrace()
        for (let i = 0; i < causeElm.length; i++) {
          buf.append(causeElm[i].toString() + '\n')
        }
      }
      SMSCLLog.error(buf.toString())
      //			this.callErrorAdapter(context,th);
      throw th
    }
    return rtn
  }

  /**
   * ファイルダウンロードを行います。
   * @param context CJFのコンテキスト
   * @param fileLocation ダウンロードするファイルの所在
   * @throws Throwable
   */
  protected downloadFile(context: JCFContext, fileLocation: number) {
    //Adapterクラスに実装すべきか？　新山
    SMSCLLog.trace('--------LogicBase#downloadFile() start')

    let applet: Applet = JCFContext.getBaseContainer() as Applet
    let serverName: string = applet.getCodeBase().getHost()
    let contextRoot: string = applet.getParameter(
      SMSCjfLogicBase.CONTEXT_ROOT_KEY,
    )

    let servletName: string = SMSCjfLogicBase.SERVLET_NAME_DW
    switch (fileLocation) {
      case SMSCjfLogicBase.DW_REMOTE:
        //PDFファイルダウンロード
        servletName = SMSCjfLogicBase.SERVLET_NAME_DW_REMOTE
        //SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
        break

      case SMSCjfLogicBase.DW_LOCAL:
        //CSVファイルダウンロード
        servletName = SMSCjfLogicBase.SERVLET_NAME_DW_LOCAL
        //SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
        break

      default:
        //ありえない場合
        //ログに出力してPDFダウンロードのverbをセット
        SMSCLLog.debug(
          'SMSCjfLogicBase#downloadFile() 未定義のファイルタイプ.fileType = ' +
            fileLocation,
        )
        servletName = SMSCjfLogicBase.SERVLET_NAME_DW_LOCAL
      //SMSCLLog.trace("LogicBase#downloadFile() servletName = " + servletName);
    }

    // 2007/08/14 Mod start
    //		URL url = new URL(PROTCOL + serverName + contextRoot + servletName);
    let timestamp: string = SMSDateStringUtil.getTimeStamp()
    let userid: string = (
      this.getLoginInfo(context) as SMSLoginInfoImpl
    ).getUserId()
    let url: NativeURL = new NativeURL(
      SMSCjfLogicBase.PROTCOL +
        serverName +
        contextRoot +
        servletName +
        SMSCjfLogicBase.PARAM_DELIM +
        userid +
        timestamp,
    )

    // 2007/08/14 Mod end

    //2014/01/24 システム統合開発プロジェクト Mod Start
    //DWH(window1)、電子帳票(window2)と重複しないように⇒window3と修正
    //		context.showDocument(url, "window1");
    context.showDocument(url, 'window3')
    //2014/01/24 システム統合開発プロジェクト Mod End
  }

  protected getUserData(context: JCFContext, key: any): any
  protected getUserData(context: JCFContext, usecaseID: string, key: any): any
  protected getUserData(...params: any[]) {
    if (params.length === 2) {
      return this.__getUserData(params[0], params[1])
    } else if (params.length === 3) {
      return this.__getUserDataWithUseCaseID(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid parameters')
    }
  }

  /**
   * Method 共有データを取得します。
   * @param context CJFのコンテキスト
   * @param key     共有データから取得する値のキー名（内部的にはユースケースIDが付加される）
   * @return Object 共有データから取得する値
   */
  private __getUserData(context: JCFContext, key: any) {
    // 共有データ領域からデータ取得
    let obj: any = context.getUserData(this.useCaseID + '_' + key)
    return obj
  }

  /**
   * Method 汎用検索等で他ユースケースの共有データを取得するためユースケースを指定して共有データを取得します。
   * @param context CJFのコンテキスト
   * @param usecaseID     取得したい共有データのユースケースID
   * @param key     共有データから取得する値のキー名（内部的にはユースケースIDが付加される）
   * @return Object 共有データから取得する値
   */
  private __getUserDataWithUseCaseID(
    context: JCFContext,
    usecaseID: string,
    key: any,
  ) {
    // 共有データ領域からデータ取得
    let obj: any = context.getUserData(usecaseID + '_' + key)
    return obj
  }

  protected putUserData(context: JCFContext, key: any, value: any): void
  protected putUserData(
    context: JCFContext,
    usecaseID: string,
    key: any,
    value: any,
  ): void
  protected putUserData(...params: any[]) {
    if (params.length === 3) {
      this.__putUserData(params[0], params[1], params[2])
    } else if (params.length === 4) {
      this.__putUserDataWithUseCaseID(
        params[0],
        params[1],
        params[2],
        params[3],
      )
    } else {
      throw new Error('Invalid parameters')
    }
  }

  /**
   * Method 共有データを設定します。
   * @param context CJFのコンテキスト
   * @param key     共有データに設定するキー名（内部的にはユースケースIDが付加される）
   * @param key     共有データに設定する値
   */
  private __putUserData(context: JCFContext, key: any, value: any) {
    // 共有データ領域に値を設定
    context.putUserData(this.useCaseID + '_' + key, value)
  }

  /**
   * Method エラー画面遷移等でユースケースを指定して、他ユースケースの共有データを設定します。
   * @param context CJFのコンテキスト
   * @param usecaseID     設定したい共有データのユースケースID
   * @param key     共有データに設定するキー名（内部的にはユースケースIDが付加される）
   * @param value     共有データに設定する値
   */
  private __putUserDataWithUseCaseID(
    context: JCFContext,
    usecaseID: string,
    key: any,
    value: any,
  ) {
    // 共有データ領域に値を設定
    context.putUserData(usecaseID + '_' + key, value)
  }

  protected removeUserData(context: JCFContext): void
  protected removeUserData(
    context: JCFContext,
    usecaseID: string,
    key: any,
  ): void
  protected removeUserData(...params: any[]) {
    if (params.length === 1) {
      this.__removeUserDataOnlyContext(params[0])
    } else if (params.length === 2) {
      throw new Error(`Please use 'removeUserDataWithObject' or 'removeUserDataWithUsecase' instead.`)
    } else if (params.length === 3) {
      this.__removeUserDataWithUseCaseIDAndKey(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid parameters')
    }
  }

  protected removeUserDataWithObject(context: JCFContext, key: any): void {
    this.__removeUserDataWithKey(context, key)
  }
   
  protected removeUserDataWithUsecase(context: JCFContext, usecaseID: string): void {
    this.__removeUserDataWithUseCaseID(context, usecaseID)
  }

  /**
   * Method 共有データを削除します。
   * @param context CJFのコンテキスト
   * @param key     共有データから削除したいキー名（内部的にはユースケースIDが付加される）
   */
  private __removeUserDataWithKey(context: JCFContext, key: any) {
    if (this.useCaseID.equals('')) {
      throw new SMSRuntimeException('ユースケースIDがセットされていません')
    }
    // 共有データ領域の値を削除
    context.removeUserData(this.useCaseID + '_' + key)
  }

  /**
   * Method 汎用検索等で他ユースケースの共有データを削除します。
   * @param context CJFのコンテキスト
   * @param usecaseID     削除したい共有データのユースケースID
   * @param key     共有データから削除する値のキー名（内部的にはユースケースIDが付加される）
   */
  private __removeUserDataWithUseCaseIDAndKey(
    context: JCFContext,
    usecaseID: string,
    key: any,
  ) {
    if (this.useCaseID.equals('')) {
      throw new Exception('ユースケースIDがセットされていません')
    }
    // 共有データ領域の値を削除
    context.removeUserData(usecaseID + '_' + key)
  }

  /**
   * Method ユースケース内のすべての共有データを削除します。
   * @param context CJFのコンテキスト
   */
  private __removeUserDataOnlyContext(context: JCFContext) {
    if (this.useCaseID.equals('')) {
      throw new SMSRuntimeException('ユースケースIDがセットされていません')
    }
    //共有データのキーセットを取得
    let dataSet: NativeSet = context.userDataKeySet() as NativeSet

    let keys: any[] = dataSet.toArray()

    for (let i = 0; i < keys.length; i++) {
      let key: string = keys[i] as string
      //同ユースケースなら
      if (key.startsWith(this.useCaseID)) {
        // 共有データ領域の値を削除
        context.removeUserData(key)
      }
    }
  }

  /**
   * Method 汎用検索等で他ユースケース内のすべての共有データを削除します。
   * @param context CJFのコンテキスト
   */
  private __removeUserDataWithUseCaseID(
    context: JCFContext,
    usecaseID: string,
  ) {
    if (this.useCaseID.equals('')) {
      throw new SMSRuntimeException('ユースケースIDがセットされていません')
    }
    //共有データのキーセットを取得
    let dataSet: NativeSet = context.userDataKeySet() as NativeSet

    let keys: any[] = dataSet.toArray()

    for (let i = 0; i < keys.length; i++) {
      let key: string = keys[i] as string
      //同ユースケースなら
      if (key.startsWith(usecaseID)) {
        // 共有データ領域の値を削除
        context.removeUserData(key)
      }
    }
  }

  /**
   * Method ログイン情報を取得します。
   * @param context CJFのコンテキスト
   * @return SMSLoginInfo ログイン情報
   */
  protected getLoginInfo(context: JCFContext): SMSLoginInfo {
    //アプリケーションデータ領域からデータ取得
    let loginInFo: SMSLoginInfo = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfo
    return loginInFo
  }

  /**
   * Method ログイン情報を設定します。
   * @param context CJFのコンテキスト
   * @return SMSLoginInfo ログイン情報
   */
  private setLoginInfo(context: JCFContext, loginInfo: SMSLoginInfoImpl) {
    //アプリケーションデータ領域へデータ設定
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   *
   * @param context CJFのコンテキスト
   */
  //protected setReturnInfo( JCFReturnInfo returnInfo ) {
  //this.returnInfo = returnInfo;
  //}

  /**
   *
   * @return SMSMenuAuthorityManager 権限情報
   */
  //protected JCFReturnInfo getReturnInfo() {

  //if( returnInfo == null  ) {
  //return null;
  //}

  //return returnInfo;
  //}

  /**
   * Method getFileDialog.現在使用してないメソッド！！
   * @param title
   * @return FileDialog
   */
  protected getFileDialog(title: string): FileDialog {
    //アプレットオブジェクトを取得
    let container: Container = JCFContext.getBaseContainer()
    //GraphicsConfigurationオブジェットを取得
    let gc: GraphicsConfiguration = container.getGraphicsConfiguration()
    //Frameクラスを生成
    let frame: Frame = new Frame(gc)

    //ファイル選択ダイアログのインスタンスを生成
    let fileDialog: FileDialog = new FileDialog(frame, '', FileDialog.LOAD)

    return fileDialog
  }

  /**
   * ファイルのパーミッションチェック・サイズチェックを行い、ファイルを読み込みます。
   * @param fileName ファイル名
   * @param sizeChekcFlg ファイルサイズチェックフラグ true:チェックする, false:チェックしない
   * @return MimeSource 読み込んだファイルのMimeSourceオブジェクト
   */
  protected readFile(fileName: string, sizeCheckFlg: boolean): MimeSource {
    //開こうとしているファイルの読み込み権限がない場合、
    //jbkplugin.policyの設定確認を促すエラーメッセージを表示
    try {
      let filePm: FilePermission = new FilePermission(fileName, 'read')

      AccessController.checkPermission(filePm)
    } catch (ac: any) {
      SMSCLLog.trace(
        'SMSCjfLogicBase#readFile() ファイルパーミッションチェックによるエラー',
      )
      throw new SMSAppException(SMSMessageConst.YCSCMNMCW076)
    }

    let fileUtil: SMSFileUtil = new SMSFileUtil()

    //ファイルサイズチェック
    if (sizeCheckFlg) {
      let size: number = fileUtil.getFileSize(fileName)

      let strMax: string = SMSClientInfo.getFileUploadMaxSize()
      let max: number = Long.parseLong(strMax)
      if (size > max) {
        SMSCLLog.trace(
          'SMSCjfLogicBase#readFile() ファイルサイズチェックによるエラー',
        )
        throw new SMSAppException(SMSMessageConst.YCSCMNMCW078, [
          strMax + 'バイト',
        ])
      }
    }

    // MimeSourceオブジェクトを作成
    let bis: BufferedInputStream = null
    let ms: MimeSource = null

    try {
      //ファイル読み込み
      bis = new BufferedInputStream(new FileInputStream(fileName))
      ms = new MimeSource(bis, fileName, 100000)
    } catch (fe: any) {
      //			throw new SMSRuntimeException(fe);
      throw new SMSAppException(SMSMessageConst.SMSCMNMCA019)

      // 2013/11/29 開始 到達不可能なcatchブロックのため削除
      //		} catch (IOException ie) {
      //			throw new SMSRuntimeException(ie);
      //
      // 2013/11/29 終了 到達不可能なcatchブロックのため削除
    }

    return ms
  }

  /**
   * 例外と警告が発生した場合のメッセージセットを行います。
   * @param context CJFのコンテキスト
   * @param outParam 編集対象アダプタアウトパラメタ
   * @return HashMap 編集後ハッシュマップ
   */
  private checkRtnHash(
    context: JCFContext,
    outParam: JCFAdapterOutParam,
  ): HashMap {
    //エラーと警告の確認
    let errFlg: string = outParam
      .getCommunicationData()
      .get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string


    if (errFlg.equals(SMSHashKeyConst.IS_WARNING)) {
      let wMsgID: string = outParam
        .getCommunicationData()
        .get(SMSHashKeyConst.WARNING_MSG_KEY) as string
      SMSCLLog.debug('SMSCjfLogicBase#checkRtnHash：wMsgID：' + wMsgID)

      let wMsgContents: string[] = outParam
        .getCommunicationData()
        .get(SMSHashKeyConst.WARNING_MSG_PARAM_KEY) as string[]
      SMSCLLog.debug(
        'SMSCjfLogicBase#checkRtnHash：wMsgContents：' + wMsgContents,
      )

      let wMsgPopup: boolean = Boolean(
        outParam
          .getCommunicationData()
          .get(SMSHashKeyConst.WARNING_POPUP_PARAM_KEY),
      )
      SMSCLLog.debug('SMSCjfLogicBase#checkRtnHash：wMsgPopup：' + wMsgPopup)

      /* 2014/01/24 システム統合開発プロジェクト コメントアウト
            //（補足）サブ画面ではスクリーンデータを取得できないため、ここでは呼び出せない
			JCFScreenData screenData = context.getCurrentScreenData();
			//フッタ部のパネルデータを取得
			JCFPanelData footerPanelData = screenData.getPanelData(SMSHeaderFooterManager.FRAME_FOOTER);			
			JCFItemData item = (JCFItemData) footerPanelData.getItemData(SMSHeaderFooterManager.ITEM_MESSAGE);
*/

      let msgUtil: JCFMessageOnWindow = context.getMessageUtil()

      //2014/01/24 システム統合開発プロジェクト Add Start

      SMSCLLog.debug(
        'SMSCjfLogicBase#checkRtnHash：警告メッセージID：' + wMsgID,
      )

      //メニューが利用不可になっていた場合の警告
      if (wMsgID.equals(SMSMessageConst.SMSCMNMCE067)) {
        SMSCLLog.debug('SMSCjfLogicBase#checkRtnHash：利用時間外の警告を表示')
        msgUtil.showMessage(SMSMessageConst.SMSCMNMCE067)

        SMSCLLog.debug('SMSCjfLogicBase#checkRtnHash：エラー画面に遷移')
        let ex: SMSRuntimeException = new SMSRuntimeException(
          SMSMessageConst.SMSCMNMCE067,
        )
        ex.setCdError(SMSMessageConst.SMSCMNMCE067)
        throw ex

        //その他の警告の場合
      } else {
        SMSCLLog.debug('SMSCjfLogicBase#checkRtnHash：警告を表示')

        let screenData: JCFScreenData = context.getCurrentScreenData()

        //フッタ部のパネルデータを取得
        let footerPanelData: JCFPanelData = screenData.getPanelData(
          SMSHeaderFooterManager.FRAME_FOOTER,
        )
        let item: JCFItemData = footerPanelData.getItemData(
          SMSHeaderFooterManager.ITEM_MESSAGE,
        ) as JCFItemData

        if (wMsgContents != null) {
          //埋め文字あり
          item.setValue(msgUtil.getMessage(wMsgID, wMsgContents))
        } else {
          item.setValue(msgUtil.getMessage(wMsgID))
        }
        //ポップアップ表示指定なら
        if (wMsgPopup.booleanValue()) {
          msgUtil.showMessage(SMSHashKeyConst.WARNING_DIALOG_MSG_KEY)
        }
      }

      //2014/01/24 システム統合開発プロジェクト Add End
      /* 2014/01/24 システム統合開発プロジェクト コメントアウト
			if (wMsgContents != null) {
				//埋め文字あり
				item.setValue(msgUtil.getMessage(wMsgID, wMsgContents));
			} else {
				item.setValue(msgUtil.getMessage(wMsgID));
			}
			//ポップアップ表示指定なら
			if (wMsgPopup.booleanValue()) {
				msgUtil.showMessage(SMSHashKeyConst.WARNING_DIALOG_MSG_KEY);
			}
*/
    } else if (errFlg.equals(SMSHashKeyConst.IS_ERROR)) {
      let th: Throwable = outParam
        .getCommunicationData()
        .get(SMSHashKeyConst.PARAM_KEY_THROWABLE) as Throwable
      this.putUserData(
        context,
        SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID,
        SMSHashKeyConst.PARAM_KEY_THROWABLE,
        th,
      )
      throw th
    }

    return outParam.getCommunicationData()
  }

  /**
   * Method headerToMenu.ヘッダ部分の，メインメニューボタンが押されたときの処理です。
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  headerToMenu(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    returnInfo.setSubsystemID(this.MENU_SUBSYSTEM_ID)
  }

  /**
   * エラー画面に遷移します。
   * @param event
   * @param context
   * @param returnInfo
   * @throws Throwable
   */
  error(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.trace('LogicBase:error() start')
    //エラー画面に遷移するよう，CJFに通知
    returnInfo.setTransitionScreenID(SMSCjfLogicBase.ERROR_SCREEN_ID)
    SMSCLLog.trace('LogicBase:error() end')
  }

  /**
   * エラー画面に遷移アダプタを呼び出します。
   * @param context CJFのコンテキスト
   * @param th 発生したThrowableオブジェクト
   */
  callErrorAdapter(context: JCFContext, th: Throwable) {
    MsisDebug.error(`callErrorAdapter: [${th._getName()}]`, th)

    let inParam: JCFAdapterInParam
    try {
      this.putUserData(
        context,
        SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID,
        SMSHashKeyConst.PARAM_KEY_THROWABLE,
        th,
      )
      context.putApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG, 'true')
      //2006/09/14 例外時ログアウト処理追加
      try {
        // 2006/11/28 Mod start
        if (th instanceof SMSRuntimeException) {
          let cdError: string = (th as SMSRuntimeException).getCdError()
          if (
            cdError != null &&
            !cdError.equals(SMSMessageConst.SMSSYSMCE002)
          ) {
            // タイムアウト発生以外ではログアウト処理を行う
            let inData: HashMap = new HashMap()
            inData.put(SMSCjfLogicBase.ST_TANMATSU, '01') // 端末区分（アプレット）
            inData.put(SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, '0') // ログアウト処理
            let logoutHash: HashMap = this.callEJB(
              context,
              null!,
              SMSCjfLogicBase.LOGIN_CBS,
              SMSCjfLogicBase.VERB_LOGOUT,
              inData,
            ) as HashMap
          }
        } else {
          //2014/1/24 システム統合開発プロジェクト（デバッグコメント追加）
          SMSCLLog.debug(
            'SMSCjfLogicBase#callErrorAdapter:RuntimeException以外のエラー発生（ログアウト処理の実行）',
          )
          let inData: HashMap = new HashMap()
          inData.put(SMSCjfLogicBase.ST_TANMATSU, '01') // 端末区分（アプレット）
          inData.put(SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, '0') // ログアウト処理
          let logoutHash: HashMap = this.callEJB(
            context,
            null!,
            SMSCjfLogicBase.LOGIN_CBS,
            SMSCjfLogicBase.VERB_LOGOUT,
            inData,
          ) as HashMap
        }
        // 2006/11/28 Mod end
      } catch (e: any) {
        e.printStackTrace()
      }
      //2006/09/14 例外時ログアウト処理追加

      //Servletに送信するパラメータ作成
      let inParam = new JCFAdapterInParam()

      //Servletにデータを送信して，結果を受け取る。
      callASync(SMSCjfLogicBase.ERROR_FUNCTION_ID, inParam, context)

      th.printStackTrace()
    } catch (e: any) {
      e.printStackTrace()
    }
  }

  /**
   * エラー画面に遷移アダプタを呼び出します。サブ画面で使用します。
   * @param context CJFのコンテキスト
   * @param th 発生したThrowableオブジェクト
   */
  protected callSubErrorAdapter(context: JCFContext, th: Throwable) {
    try {
      this.putUserData(
        context,
        SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID,
        SMSHashKeyConst.PARAM_KEY_THROWABLE,
        th,
      )
      this.putUserData(
        context,
        SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID,
        SMSHashKeyConst.PARAM_KEY_SUB_ERROR,
        th,
      )

      context.putApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG, 'true')

      //2006/09/14 例外時ログアウト処理追加
      try {
        let inData: HashMap = new HashMap()
        inData.put(SMSCjfLogicBase.ST_TANMATSU, '01') // 端末区分（アプレット）
        inData.put(SMSCjfLogicBase.FG_SAKUJO_LOGIN_KANRI, '0') // ログアウト処理

        let logoutHash: HashMap = this.callEJB(
          context,
          null!,
          SMSCjfLogicBase.LOGIN_CBS,
          SMSCjfLogicBase.VERB_LOGOUT,
          inData,
        ) as HashMap
      } catch (e: any) {
        //タイムアウト時はここを通る
        e.printStackTrace()
      }
      //2006/09/14 例外時ログアウト処理追加

      //Servletに送信するパラメータ作成
      let inParam = new JCFAdapterInParam()

      //Servletにデータを送信して，結果を受け取る。
      callASync(SMSCjfLogicBase.ERROR_SUB_FUNCTION_ID, inParam, context)
    } catch (e: any) {
      e.printStackTrace()
    }
  }

  /**
   * ダイアログで例外が発生したか判断します。
   * 表示前処理で使用します。
   * @exception Throwable
   */
  protected checkDialogException(context: JCFContext) {
    let th: Throwable = this.getUserData(
      context,
      SMSHashKeyConst.PARAM_KEY_ERROR_SCREENID,
      SMSHashKeyConst.PARAM_KEY_SUB_ERROR,
    ) as Throwable
    if (th != null) {
      throw th
    }
  }

  /**
   * 選択されているコンボボックスのIDを取得します。
   * @param comboBoxData コンボボックスデータアイテム
   * @return value コンボボックス要素ID 選択されていなかったら""を返します。
   */
  getComboID(comboBoxData: JCFComboBoxData): string {
    let rtnID: string = ''
    let selectElement: JCFSelectableElement[] =
      comboBoxData.getSelectableElementValue()
    for (let i = 0; i < selectElement.length; i++) {
      if (selectElement[i].isSelected()) {
        rtnID = selectElement[i].getID()
      }
    }
    return rtnID
  }

  /**
   * Method プログラムIDを設定します。
   * @param context CJFのコンテキスト
   * @param String プログラムID
   */
  protected setCdProgram(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setCdProgram(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method 画面IDを設定します。
   * @param context CJFのコンテキスト
   * @param String 画面ID
   */
  protected setCdGamen(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setCdGamen(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method 画面名を設定します。
   * @param context CJFのコンテキスト
   * @param String 画面名
   */
  protected setNmGamen(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setNmGamen(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method 最大検索件数を設定します。
   * @param context CJFのコンテキスト
   * @param String 最大検索件数
   */
  protected setQtSaidaiKensaku(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setQtSaidaiKensaku(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method 最大表示件数を設定します。
   * @param context CJFのコンテキスト
   * @param String 最大表示件数
   */
  protected setQtSaidaiHyouji(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setQtSaidaiHyouji(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method 表示済み数を設定します。
   * @param context CJFのコンテキスト
   * @param String 表示済み数
   */
  protected setQtHyoujiZumi(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setQtHyoujiZumi(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method 検索方向を設定します。
   * @param context CJFのコンテキスト
   * @param String 検索方向
   */
  protected setStKensakuHoukou(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setStKensakuHoukou(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method 表示頁を設定します。
   * @param context CJFのコンテキスト
   * @param String 表示頁
   */
  protected setQtHyoujiPage(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setQtHyoujiPage(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method 頁情報をクリアします。
   * @param context CJFのコンテキスト
   */
  protected clearPageInfo(context: JCFContext) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setQtSaidaiKensaku('')
    loginInfo.setQtSaidaiHyouji('')
    loginInfo.setQtHyoujiZumi('')
    loginInfo.setStKensakuHoukou('')
    loginInfo.setQtKensaku('')
    loginInfo.setQtHyoujiPage('')
    loginInfo.setQtPage('')
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * 汎用検索画面を表示する前の準備処理を行います。
   * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。
   * @param event
   * @param context
   * @param cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
   * @param enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
   * @param kidoKensaku true:起動時検索する false:起動時検索しない
   * @param literalList リテラル条件に渡すパラメータ
   * @param returnInfo
   */
  geneSearchPrepare(
    event: JCFEvent,
    context: JCFContext,
    cons: string[],
    enableCons: boolean[],
    kidoKensaku: boolean,
    literalList: List,
  ) {
    //　イベントからアクションID（検索ID）を取得する。
    let searchID: string = event.getEventAdditionalInfo().getActionID()
    let ACTION_HEAD: string = 'ACT_'
    //"ACT_"を取り除く
    searchID = searchID.substring(
      searchID.indexOf(ACTION_HEAD) + ACTION_HEAD.length,
    )
    this.geneSearchPrepareWithID(
      event,
      context,
      searchID,
      cons,
      enableCons,
      kidoKensaku,
      literalList,
    )
  }

  /**
   * 汎用検索画面を表示する前の準備処理を行います。
   * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。
   * @param event
   * @param context
   * @param searchID 汎用検索キー e.g GeneralSearch001
   * @param cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
   * @param enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
   * @param kidoKensaku true:起動時検索する false:起動時検索しない
   * @param literalList リテラル条件に渡すパラメータ
   * @param returnInfo
   */
  geneSearchPrepareWithID(
    event: JCFEvent,
    context: JCFContext,
    searchID: string,
    cons: string[],
    enableCons: boolean[],
    kidoKensaku: boolean,
    literalList: List,
  ) {
    let USECASE: string = SMSHashKeyConst.PARAM_KEY_GENERALID
    let SEARCHID: string = 'searchID'
    SMSCLLog.trace('SMSCjfLogicBase:geneSearchPrepareWithID() start')

    let jouken: string[] = createStringArray(10)

    try {
      //　検索画面の【閉じる】ボタンチェックフラグ
      SMSPanelInitDataHolder.getInstance().setCloseButton(false)

      /**業務画面の項目値を取得して、共通領域に格納する。↓*/
      context.putUserData(SEARCHID, searchID)
      /**業務画面の項目値を取得して、共通領域に格納する。↑*/

      //　表示元の行列情報を保持する。
      let eventAddInfo: JCFEventAdditionalInfo = event.getEventAdditionalInfo()

      //　業務画面のスプレッド情報を保存する。
      let spreadAddInfo: JCFSpreadAdditionalInfo =
        eventAddInfo.getAdditionalInfo() as JCFSpreadAdditionalInfo

      if (spreadAddInfo != null) {
        this.putUserData(
          context,
          SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION,
          spreadAddInfo.getCellPosition(),
        )
      }

      //　検索IDをパネル初期化データオブジェクトに格納する。
      SMSPanelInitDataHolder.getInstance().setSearchID(searchID)

      //汎用検索で使用する条件を保存する。
      if (cons != null) {
        this.putUserData(
          context,
          SMSHashKeyConst.PARAM_KEY_GENERALID,
          SMSHashKeyConst.GENERAL_VALUE,
          cons,
        )
      } else {
        //ST-0563-000
        this.removeUserData(
          context,
          SMSHashKeyConst.PARAM_KEY_GENERALID,
          SMSHashKeyConst.GENERAL_VALUE,
        )
      }
      //汎用検索で変更条件を保存する。
      if (enableCons != null) {
        this.putUserData(
          context,
          SMSHashKeyConst.PARAM_KEY_GENERALID,
          SMSHashKeyConst.GENERAL_ENABLE_CONS,
          enableCons,
        )
      } else {
        //ST-0563-000
        this.removeUserData(
          context,
          SMSHashKeyConst.PARAM_KEY_GENERALID,
          SMSHashKeyConst.GENERAL_ENABLE_CONS,
        )
      }
      //初期表示時検索または非検索の情報を保存する。
      this.putUserData(
        context,
        SMSHashKeyConst.PARAM_KEY_GENERALID,
        SMSHashKeyConst.GENERA_SEARCH_START,
        new Boolean(kidoKensaku),
      )
      //汎用検索でリテラル条件用パラメータを保存する。
      if (literalList != null) {
        this.putUserData(
          context,
          SMSHashKeyConst.PARAM_KEY_GENERALID,
          SMSHashKeyConst.GENERAL_LITERAL_CONS,
          literalList,
        )
      } else {
        //ST-0563-000
        this.removeUserData(
          context,
          SMSHashKeyConst.PARAM_KEY_GENERALID,
          SMSHashKeyConst.GENERAL_LITERAL_CONS,
        )
      }
    } catch (e: any) {
      let buf: StringBuffer = new StringBuffer()

      if (e != null) {
        buf.append(e.toString() + '\n')
      }

      SMSCLLog.error(
        'SMSCjfLogicBase:geneSearchPrepareWithID()…' + buf.toString(),
      )
      e.printStackTrace(System.out)
    }

    SMSCLLog.trace('SMSCjfLogicBase:geneSearchPrepareWithID() end')
  }

  /**
   * 汎用検索画面を表示する前の準備処理を行います。
   * 検索ID(アクションコード)を元に，画面定義プロパティファイルより定義を読み込みます。
   * @param event
   * @param context
   * @param cons 親画面で使用するアイテムIDの配列 null指定で汎用検索画面への引継ぎなし
   * @param enableCons 親画面で変更不可の条件を指定する null指定で変更不可条件なし
   * @param kidoKensaku true:起動時検索する false:起動時検索しない
   * @param returnInfo
   */
  geneSearchComboPrepare(
    event: JCFEvent,
    context: JCFContext,
    comboName: string,
    comboCondition: List,
  ) {
    let USECASE: string = SMSHashKeyConst.PARAM_KEY_GENERALID
    let SEARCHID: string = 'searchID'
    SMSCLLog.trace('SMSCjfLogicBase:geneSearchComboPrepare() start')

    try {
      //汎用検索で使用する条件を保存する。
      if (comboCondition != null) {
        this.putUserData(
          context,
          SMSHashKeyConst.PARAM_KEY_GENERALID,
          comboName,
          comboCondition,
        )
      }
    } catch (e: any) {
      let buf: StringBuffer = new StringBuffer()

      if (e != null) {
        buf.append(e.toString() + '\n')
      }

      SMSCLLog.error(
        'YCSCMNF060SLogic:geneSearchComboPrepare()…' + buf.toString(),
      )
      e.printStackTrace(System.out)
    }

    SMSCLLog.trace('YCSCMNF060SLogic:geneSearchComboPrepare() end')
  }

  /**
   * Method ディレクトリを設定します。
   * @param context CJFのコンテキスト
   * @param String ディレクトリ
   */
  protected setStDirectory(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setStDirectory(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method ファイル名を設定します。
   * @param context CJFのコンテキスト
   * @param String ファイル名
   */
  protected setNmFile(context: JCFContext, value: string) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setNmFile(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * Method ファイルデータを設定します。
   * @param context CJFのコンテキスト
   * @param byte[] ファイルデータ
   */
  protected setFile(context: JCFContext, value: byte[]) {
    //アプリケーションデータ領域からデータ取得
    let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_COMMON,
    ) as SMSLoginInfoImpl
    loginInfo.setFile(value)
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  /**
   * 頁制御を実行した後に行う部品へのセット処理を行います。
   * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。
   * @param context			CJFコンテキストオブジェクト
   */
  protected setPageInfo(context: JCFContext) {
    let current: JCFScreenData = context.getCurrentScreenData()
    let itemForward: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_PAGE_FORWARD,
    ) as JCFItemData
    let itemReverse: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_PAGE_REVERSE,
    ) as JCFItemData
    let itemPageJump: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_PAGE_JUMP,
    ) as JCFItemData

    let itemFirst: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_FIRST_RECORD,
    ) as JCFFieldLongData
    let itemLast: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_LAST_RECORD,
    ) as JCFFieldLongData
    let itemTotal: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_TOTAL_RECORD,
    ) as JCFFieldLongData

    let itemCurrentPage: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_CURRENT_PAGE,
    ) as JCFFieldLongData
    let itemTotalPage: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_TOTAL_PAGE,
    ) as JCFFieldLongData

    //共通情報取得
    let loginInfo: SMSLoginInfoImpl = this.getLoginInfo(
      context,
    ) as SMSLoginInfoImpl
    //「次へ」「前へ」の活性非活性処理

    if (loginInfo.getStJiPage() != null) {
      if (loginInfo.getStJiPage().booleanValue()) {
        itemForward.setEnabled(true)
      } else {
        itemForward.setEnabled(false)
        itemLast.setEnabled(false)
      }
    }

    if (loginInfo.getStZenPage() != null) {
      if (loginInfo.getStZenPage().booleanValue()) {
        itemReverse.setEnabled(true)
      } else {
        itemReverse.setEnabled(false)
      }
    }

    //頁指定入力部品の背景色デフォルト
    itemCurrentPage.setBackground(SMSColor.DEFAULT)

    //頁指定の活性、非活性
    if (loginInfo.getQtPage() != null) {
      try {
        if (Integer.parseInt(loginInfo.getQtPage()) > 1) {
          itemPageJump.setEnabled(true)
          itemCurrentPage.setEnabled(true)
        } else {
          itemPageJump.setEnabled(false)
          itemCurrentPage.setEnabled(false)
        }
      } catch (e: any) {
        itemPageJump.setEnabled(false)
        itemCurrentPage.setEnabled(false)
      }
    }

    //件数情報をセット
    let hyoujiZumi: number
    let maxHyouji: number
    let cnt: number
    try {
      hyoujiZumi = Integer.parseInt(loginInfo.getQtHyoujiZumi())
      maxHyouji = Integer.parseInt(loginInfo.getQtSaidaiHyouji())
      cnt = Integer.parseInt(loginInfo.getQtKensaku())
      itemFirst.setValue(
        SMSPageTranUtil.getHyoujiKaishi(hyoujiZumi, maxHyouji, cnt),
      )
      itemLast.setValue(hyoujiZumi)
      itemTotal.setValue(Long.parseLong(loginInfo.getQtKensaku()))
      itemCurrentPage.setValue(loginInfo.getQtHyoujiPage())
      itemTotalPage.setValue(loginInfo.getQtPage())
    } catch (e: any) {
      //初期表示なしで本メソッドを実行した場合と想定。
      itemCurrentPage.setValue(0)
    }
  }

  /**
   * 頁制御必要な部品の初期化処理を行います。
   * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。
   * @param context			CJFコンテキストオブジェクト
   */
  protected initPageInfo(context: JCFContext) {
    let current: JCFScreenData = context.getCurrentScreenData()
    let itemForward: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_PAGE_FORWARD,
    ) as JCFItemData
    let itemReverse: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_PAGE_REVERSE,
    ) as JCFItemData
    let itemPageJump: JCFItemData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_PAGE_JUMP,
    ) as JCFItemData

    let itemFirst: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_FIRST_RECORD,
    ) as JCFFieldLongData
    let itemLast: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_LAST_RECORD,
    ) as JCFFieldLongData
    let itemTotal: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_TOTAL_RECORD,
    ) as JCFFieldLongData

    let itemCurrentPage: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_CURRENT_PAGE,
    ) as JCFFieldLongData
    let itemTotalPage: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_TOTAL_PAGE,
    ) as JCFFieldLongData

    // 「次へ」「前へ」の非活性処理
    itemForward.setEnabled(false)
    itemReverse.setEnabled(false)
    // 「頁指定」の非活性処理
    itemPageJump.setEnabled(false)

    // 頁指定入力部品の非活性処理
    itemCurrentPage.setEnabled(false)

    //頁指定入力部品の背景色デフォルト
    itemCurrentPage.setBackground(SMSColor.DEFAULT)

    // 件数情報をセット
    itemFirst.setValue('0')
    itemLast.setValue('0')
    itemTotal.setValue('0')
    itemCurrentPage.setValue('0')
    itemTotalPage.setValue('0')
  }

  getNameByGeneralSearch(
    context: JCFContext,
    searchID: string,
    columnName: string,
    code: string,
    literalList: List,
    resultName: string,
  ): string
  getNameByGeneralSearch(
    context: JCFContext,
    searchID: string,
    conditionMap: HashMap,
    literalList: List,
    resultName: string,
  ): string
  getNameByGeneralSearch(
    context: JCFContext,
    inData: HashMap,
    resultName: string,
  ): string
  getNameByGeneralSearch(...params: any[]): string {
    if (params.length == 6) {
      return this.__getNameByGeneralSearchWithCode(
        params[0],
        params[1],
        params[2],
        params[3],
        params[4],
        params[5],
      )
    } else if (params.length == 5) {
      return this.__getNameByGeneralSearchWithoutCode(
        params[0],
        params[1],
        params[2],
        params[3],
        params[4],
      )
    } else if (params.length == 3) {
      return this.__getNameByGeneralSearch(params[0], params[1], params[2])
    } else {
      throw new Error('Illegal argument count.')
    }
  }

  /**
   * 汎用検索の検索ロジックを用いてコードに対応した名称を取得します。
   * 汎用検索のSQLをそのまま用いるため、コードとの比較条件は'=','LIKE'のいずれかである必要があります。
   * コード検索が一意にならなかった場合SMSRuntimeExceptionを発生します。
   * @param context
   * @param searchID 汎用検索ID
   * @param columnName 検索対象カラム名 *screen.propetiesのparamNameと対応
   * @param code 検索対象コード
   * @param literalList 文字列検索条件バインド値
   * @param resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
   * @return 名称
   * @exception Throwable callEJB失敗時例外
   */
  private __getNameByGeneralSearchWithCode(
    context: JCFContext,
    searchID: string,
    columnName: string,
    code: string,
    literalList: List,
    resultName: string,
  ): string {
    let rtn: string = ''
    if (searchID == null || ''.equals(searchID)) {
      return rtn
    }
    if (code == null || ''.equals(code)) {
      return rtn
    }

    let inData: HashMap = new HashMap()
    let outData: HashMap = new HashMap()

    //***************** サーバー通信処理 ****************************

    try {
      //汎用検索キー
      inData.put(SMSCjfLogicBase.SEARCH_ID, searchID)
      //汎用検索画面条件にあたるものをコードのみセット
      inData.put(columnName, code)
      //汎用検索親画面セット条件をセット
      inData.put(SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList)

      rtn = this.getNameByGeneralSearch(context, inData, resultName)
    } catch (e: any) {
      throw e
    }
    return rtn
  }

  /**
   * 汎用検索の検索ロジックを用いてコードに対応した名称を取得します。
   * 名称特定に複数条件（コードだけでなく）が必要な場合、使用します。
   * コード検索が一意にならなかった場合SMSRuntimeExceptionを発生します。
   * @param context
   * @param searchID 汎用検索ID
   * @param conditionMap 検索対象カラム名をキー、検索条件を値とするHashMap
   * @param literalList 文字列検索条件バインド値
   * @param resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
   * @return 名称
   * @exception Throwable callEJB失敗時例外
   */
  private __getNameByGeneralSearchWithoutCode(
    context: JCFContext,
    searchID: string,
    conditionMap: HashMap,
    literalList: List,
    resultName: string,
  ): string {
    let rtn: string = ''
    if (searchID == null || ''.equals(searchID)) {
      return rtn
    }
    if (conditionMap == null || conditionMap.size() < 1) {
      return rtn
    }

    let inData: HashMap = new HashMap()

    //***************** サーバー通信処理 ****************************

    try {
      //汎用検索キー
      inData.put(SMSCjfLogicBase.SEARCH_ID, searchID)
      //汎用検索画面条件にあたるものをセット
      let keySet: NativeSet = conditionMap.keySet()
      let it: NativeIterator = keySet.iterator()
      while (it.hasNext()) {
        let key: string = it.next() as string
        inData.put(key, conditionMap.get(key))
      }

      //汎用検索親画面セット条件をセット
      inData.put(SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList)

      rtn = this.getNameByGeneralSearch(context, inData, resultName)
    } catch (e: any) {
      throw e
    }
    return rtn
  }

  /**
   * 汎用検索呼び出しを行います。
   * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。
   * @param context
   * @param inData 汎用検索呼び出し条件
   * @param resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
   * @return 検索結果
   */
  private __getNameByGeneralSearch(
    context: JCFContext,
    inData: HashMap,
    resultName: string,
  ): string {
    let rtn: string = ''
    let outData: HashMap = new HashMap()
    //EJB呼び出し
    let data: HashMap = this.callEJB(
      context,
      null!,
      'SMSSYSCBS',
      'find',
      inData,
    )
    outData = data.get(SMSHashKeyConst.PARAM_KEY_DATA) as HashMap
    //　検索結果の値をマップから取得する。
    let map: HashMap[] = outData.get(SMSCjfLogicBase.RESULT_KEY) as HashMap[]

    //検索結果が返っている
    if (map.length == 1) {
      rtn = map[0].get(resultName) as string
    }
    if (map.length > 1) {
      throw new SMSRuntimeException('レコードが特定できません')
    }

    return rtn
  }

  /**
   * 頁遷移する前に行うチェック処理です。
   * 使用するには頁遷移に必要な部品をパネルに配置する必要があります。
   * @param context			CJFコンテキストオブジェクト
   * @return true:指定ページは正常 false:指定ページが最大より大きい、または0,空白
   */
  protected checkPageInfo(context: JCFContext): boolean {
    let rtn: boolean = false
    let current: JCFScreenData = context.getCurrentScreenData()

    let itemCurrentPage: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_CURRENT_PAGE,
    ) as JCFFieldLongData
    let itemTotalPage: JCFFieldLongData = current.getItemData(
      SMSHeaderFooterManager.FRAME_MAIN,
      SMSCjfLogicBase.ITEM_TOTAL_PAGE,
    ) as JCFFieldLongData

    let currentPage: number = itemCurrentPage.getLongValue()
    let totalPage: number = itemTotalPage.getLongValue()

    //指定ページが最大を超えている　または0
    if (currentPage > totalPage || currentPage == 0) {
      //元の頁に戻す
      this.setPageInfo(context)
      itemCurrentPage.setBackground(SMSColor.WARNING)
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.SMSCMNMCA104,
        ['頁', '1', Long.toString(totalPage)],
      )
    } else {
      rtn = true
    }

    return rtn
  }

  /**
   * 業務終了します。
   *
   * @param event ＣＪＦイベントオブジェクト
   * @param context ＣＪＦコンテキストオブジェクト
   * @param returnInfo ＣＪＦ復帰情報オブジェクト
   * @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
   */
  exitSystem(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('exitSystem() start')

    //業務終了ボタンの活性状態を取得
    let current: JCFScreenData = context.getCurrentScreenData()

    let pushButton: JCFPushButtonData
    try {
      pushButton = current.getItemData(
        SMSHeaderFooterManager.FRAME_HEADER,
        SMSHeaderFooterManager.EXIT_BUTTON,
      ) as JCFPushButtonData
    } catch (e: any) {
      //サブ画面なのでアイテムデータ取得失敗と判断
      return
    }

    //業務終了ボタンが非活性の場合、終了
    if (!pushButton.isEnabled()) {
      return
    }

    //メッセージの表示
    let msgUtil: JCFMessageOnWindow = context.getMessageUtil()
    let ret: string = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC077)

    //「いいえ」の場合
    if (ret.equals(JCFMessageOnWindow.BTN_NO)) {
      returnInfo.cancelScreenTransition()
      return

      //「はい」の場合
    } else if (ret.equals(JCFMessageOnWindow.BTN_YES)) {
      //二重起動フラグ削除
      context.removeApplicationData(SMSCjfLogicBase.FG_INFRA)
      context.exit()

      // どのメニュー画面に戻るかを判断去るためのキーを初期化
      context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null)
      context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SCREEN, null)
    }

    SMSCLLog.debug('exitSystem() end')
  }

  /**
   * サブメニューに戻ります。
   *
   * @param event ＣＪＦイベントオブジェクト
   * @param context ＣＪＦコンテキストオブジェクト
   * @param returnInfo ＣＪＦ復帰情報オブジェクト
   * @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
   */
  returnSubMenu(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('returnSubMenu() start')

    //サブメニューボタンの活性状態を取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let pushButton: JCFPushButtonData
    try {
      pushButton = current.getItemData(
        SMSHeaderFooterManager.FRAME_HEADER,
        SMSHeaderFooterManager.RETURN_BUTTON,
      ) as JCFPushButtonData
    } catch (e: any) {
      //サブ画面なのでアイテムデータ取得失敗と判断
      return
    }

    //業務終了ボタンが非活性の場合、終了
    if (!pushButton.isEnabled()) {
      return
    }

    returnInfo.cancelScreenTransition()
    returnInfo.setSubsystemID(this.MENU_SUBSYSTEM_ID, false)

    // どのメニュー画面に戻るかを判断去るためのキーを設定
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, 'true')

    SMSCLLog.debug('returnSubMenu() end')
  }

  /**
   * メインメニューに戻ります。
   *
   * @param event ＣＪＦイベントオブジェクト
   * @param context ＣＪＦコンテキストオブジェクト
   * @param returnInfo ＣＪＦ復帰情報オブジェクト
   * @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
   */
  returnMainMenu(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('returnMainMenu() start')

    //サブメニューボタンの活性状態を取得
    let current: JCFScreenData = context.getCurrentScreenData()
    let pushButton: JCFPushButtonData
    try {
      pushButton = current.getItemData(
        SMSHeaderFooterManager.FRAME_HEADER,
        SMSHeaderFooterManager.MENU_BUTTON,
      ) as JCFPushButtonData
    } catch (e: any) {
      //サブ画面なのでアイテムデータ取得失敗と判断
      return
    }

    //業務終了ボタンが非活性の場合、終了
    if (!pushButton.isEnabled()) {
      return
    }

    returnInfo.cancelScreenTransition()
    returnInfo.setSubsystemID(this.MENU_SUBSYSTEM_ID, false)

    // どのメインメニュー画面に戻るためのキーを設定
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null)

    SMSCLLog.debug('returnMainMenu() end')
  }

  /**
   * パネルデータ上のアイテムデータの値をアイテムIDをキーとして共有データにコピーします。
   * コピーできるアイテムデータはgetValue(String)メソッドが有効なJCFItemDataの派生クラスのみです。（スプレッドは不可）
   * アイテムIDが未入力場合はBean名がキーとして使用されます。
   * 共有データのキーにはユースケースIDが付加されます。
   * 既存の共有データに同一キーが存在する場合、値は上書きされます。
   *
   * @param context ＣＪＦコンテキストオブジェクト
   * @param panelData コピー対象のパネルデータ
   * @param usecaseID 共有データのキーに付加されるユースケースID
   */
  protected copyPanelToUser(
    context: JCFContext,
    panelData: JCFPanelData,
    usecaseID: string,
  ) {
    SMSCLLog.debug('copyPanelToUser() start')

    //表示しようとしているパネル上にある全てのItemDataを取得。
    let array: ArrayList = panelData.getAllItemData()
    let itemData: JCFItemData = null!
    // ボタンの制御開始
    for (let i = 0; i < array.size(); i++) {
      // ItemData
      let obj: any = array.get(i)
      // JCFItemDataの場合
      if (obj instanceof JCFItemData) {
        itemData = obj as JCFItemData
        let key: string = itemData.getItemID()
        let value: any = itemData.getValue()
        if (key != null && obj != null) {
          this.putUserData(context, usecaseID, key, value)
        }
      }
    }

    SMSCLLog.debug('copyPanelToUser() end')
  }

  /**
   * 共有データのキーと一致するアイテムIDのアイテムデータに値をコピーします
   * コピーできるアイテムデータはsetValue(String)メソッドが有効なJCFItemDataの派生クラスのみです。（スプレッドは不可）
   *
   * @param context ＣＪＦコンテキストオブジェクト
   * @param panelData コピー対象のパネルデータ
   * @param usecaseID 共有データのキーに付加されるユースケースID
   */
  protected copyUserToPanel(
    context: JCFContext,
    panelData: JCFPanelData,
    usecaseID: string,
  ) {
    SMSCLLog.debug('copyUserlToPanel() start')

    //表示しようとしているパネル上にある全てのItemDataを取得。
    let array: ArrayList = panelData.getAllItemData()
    let itemData: JCFItemData = null!
    // ボタンの制御開始
    for (let i = 0; i < array.size(); i++) {
      // ItemData
      let obj: any = array.get(i)
      // JCFItemDataの場合
      if (obj instanceof JCFItemData) {
        itemData = obj as JCFItemData
        let key: string = itemData.getItemID()
        let userValue: string = this.getUserData(
          context,
          usecaseID,
          key,
        ) as string
        //共有データにアイテムIDと等しいキーが存在する
        if (userValue != null) {
          try {
            itemData.setValue(userValue)
          } catch (e: any) {
            //無効な値が設定された場合なにもしない
          }
        }
      }
    }

    SMSCLLog.debug('copyUserlToPanel() end')
  }

  protected deserialize(context: JCFContext, screen_id: string): void
  protected deserialize(
    context: JCFContext,
    screen_id: string,
    frame_id: string,
  ): void
  protected deserialize(...params: any[]): void {
    if (params.length == 2) {
      this.__deserializeWithScreenID(params[0], params[1])
    } else if (params.length == 3) {
      this.__deserializeWithScreenIDAndFrameID(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * パネルデータの復元
   * @param context ＣＪＦコンテキストオブジェクト
   * @param screen_id 復元対象スクリーンID
   */
  private __deserializeWithScreenID(context: JCFContext, screen_id: string) {
    //フッタボタン復元
    this.deserialize(context, screen_id, SMSHeaderFooterManager.FRAME_FOOTER)

    //業務パネル復元
    this.deserialize(context, screen_id, SMSHeaderFooterManager.FRAME_MAIN)

    //フラグ削除
    this.removeUserDataWithObject(context, screen_id as any)
  }

  /**
   * パネルデータの復元
   * @param context ＣＪＦコンテキストオブジェクト
   * @param screen_id 復元対象スクリーンID
   * @param frame_id 復元対象フレームID
   */
  private __deserializeWithScreenIDAndFrameID(
    context: JCFContext,
    screen_id: string,
    frame_id: string,
  ) {
    let map: HashMap = this.getUserData(
      context,
      screen_id + '_' + frame_id,
    ) as HashMap
    // 項目データ取得
    let screenData: JCFScreenData = context.getCurrentScreenData()
    // BODY部のパネルデータを取得
    let panel: JCFPanelData = screenData.getPanelData(frame_id)

    if (map != null && panel != null) {
      //パネル内のアイテムを全て取得
      let arItems: ArrayList = panel.getAllItemData()

      for (let i = 0; i < arItems.size(); i++) {
        let item: JCFItemData = arItems.get(i) as JCFItemData

        if (item.getItemID() != null) {
          //アイテムの復元
          let old: JCFItemData = map.get(item.getItemID()) as JCFItemData
          if (old != null) {
            item.setDataAndAttributes(old)
          }
        }
      }
      //画面に復元後資源開放する
      //2006.11.21 change start
      //removeUserData(JCFContext, String)ではなく、removeUserData(JCFContext, Object)を実行するように変更
      //			removeUserData(context,screen_id + "_" + frame_id);
      this.removeUserDataWithObject(context, (screen_id + '_' + frame_id) as any)
      //2006.11.21 change end
    }
  }

  protected serialize(context: JCFContext, screen_id: string): void
  protected serialize(
    context: JCFContext,
    screen_id: string,
    frame_id: string,
  ): void
  protected serialize(...params: any[]): void {
    if (params.length == 2) {
      this.__serializeWithScreenID(params[0], params[1])
    } else if (params.length == 3) {
      this.__serializeWithScreenIDAndFrameID(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * パネルデータの保存
   * @param context ＣＪＦコンテキストオブジェクト
   * @param screen_id 保存対象スクリーンID
   */
  private __serializeWithScreenID(context: JCFContext, screen_id: string) {
    //フラグ保存
    this.putUserData(context, screen_id, true)

    //フッタボタン保存
    this.serialize(context, screen_id, SMSHeaderFooterManager.FRAME_FOOTER)

    //業務パネル保存
    this.serialize(context, screen_id, SMSHeaderFooterManager.FRAME_MAIN)
  }

  /**
   * パネルデータの保存
   * @param context ＣＪＦコンテキストオブジェクト
   * @param screen_id 保存対象スクリーンID
   * @param frame_id 保存対象フレームID
   */
  private __serializeWithScreenIDAndFrameID(
    context: JCFContext,
    screen_id: string,
    frame_id: string,
  ) {
    // 項目データ取得
    let screenData: JCFScreenData = context.getCurrentScreenData()
    // BODY部のパネルデータを取得
    let panel: JCFPanelData = screenData.getPanelData(frame_id)

    let arItems: ArrayList = panel.getAllItemData()

    let map: HashMap = new HashMap()

    //パネル内のアイテムを全て取得
    for (let i = 0; i < arItems.size(); i++) {
      //アイテムを取得
      let item: JCFItemData = arItems.get(i) as JCFItemData
      //アイテムをアイテムIDをキーに保存
      if (item.getItemID() != null) {
        map.put(item.getItemID(), item)
      }
    }

    this.putUserData(context, screen_id + '_' + frame_id, map)
  }

  /**
   * パネルデータが保存されているか確認します。
   * @param context ＣＪＦコンテキストオブジェクト
   * @param screen_id 保存対象スクリーンID
   * @return true:指定されたスクリーンIDのパネルデータが保存されている false:そうでない場合
   */
  protected isPanelSerialized(context: JCFContext, screen_id: string): boolean {
    let rtn: boolean = false

    //serializeメソッドで保存されるフラグの存在を確認します。
    let fgPanelSerialized: boolean = this.getUserData(
      context,
      screen_id as any,
    ) as boolean
    if (fgPanelSerialized != null && fgPanelSerialized.booleanValue()) {
      rtn = true
    }

    return rtn
  }

  protected isValidFilledDate(date: string): boolean
  protected isValidFilledDate(required: boolean, date: string): boolean
  protected isValidFilledDate(...params: any[]): boolean {
    if (params.length == 1) {
      return this.__isValidFilledDate(params[0])
    } else if (params.length == 2) {
      return this.__isValidFilledDateWithRequired(params[0], params[1])
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  /**
   * YUKIFieldFilledDateに入力された値が正当か判断します。
   * GregorianCalendarクラスで正当性を判定します。
   * @param date yyyyMMddフォーマットの日付文字列
   * @return true:正常値 false:異常値
   */
  private __isValidFilledDate(date: string): boolean {
    return this.isValidFilledDate(true, date)
  }

  /**
   * YUKIFieldFilledDateに入力された値が正当か判断します。
   * GregorianCalendarクラスで正当性を判定します。
   * @param required true:必須 false:必須ではない
   * @param date yyyyMMddフォーマットの日付文字列
   * @return true:正常値 false:異常値
   */
  private __isValidFilledDateWithRequired(
    required: boolean,
    date: string,
  ): boolean {
    let rtn: boolean = false

    try {
      //nullならエラー
      if (date == null) {
        return rtn
      }
      //"/"除去
      date = NativeString.replaceAll(date, '/', '')
      //6桁なら年月までと判断して"01"追加
      if (date.length == 6) {
        date += '01'
      }
      //8桁でなかったら
      if (date.length != 8) {
        return rtn
      }

      //必須でなく"00000000"ならOK
      if (!required && '00000000'.equals(date)) {
        return true
      }

      //妥当な日付でなかったらSMSCheckException発生
      SMSDateStringUtil.checkExistDay(date, null!, null!)

      let fromDate: number = Integer.parseInt(this.getValidFromDate())
      let toDate: number = Integer.parseInt(this.getValidToDate())

      if (
        Integer.parseInt(date) >= fromDate &&
        Integer.parseInt(date) <= toDate
      ) {
        rtn = true
      }
    } catch (e: any) {}

    return rtn
  }

  /**
   * システムで妥当とされる日付開始をプロパティから取得します。
   * @return システムで妥当とされる日付開始
   */
  protected getValidFromDate(): string {
    let value: string = SMSPropsInfos.getProperty(
      SMSCjfLogicBase.PARAM_VALID_PROP,
      SMSCjfLogicBase.PARAM_VALID_FROM,
    ) as string
    if (''.equals(value)) {
      value = '19510101'
    }
    return value
  }

  /**
   * システムで妥当とされる日付終了をプロパティから取得します。
   * @return システムで妥当とされる日付終了
   */
  protected getValidToDate(): string {
    let value: string = SMSPropsInfos.getProperty(
      SMSCjfLogicBase.PARAM_VALID_PROP,
      SMSCjfLogicBase.PARAM_VALID_TO,
    ) as string
    if (''.equals(value)) {
      value = '20501231'
    }
    return value
  }

  /**
   * システムで妥当とされる日付開始、終了をプロパティから取得し、メッセージ用にフォーマットします。
   * @param  obj 「XX」はYY〜ZZの範囲で入力してください。　のXX
   * @return [0]:システムで妥当とされる日付開始 [1]:システムで妥当とされる日付終了
   */
  protected getValidDatesMessage(obj: string): string[] {
    let dates: string[] = createStringArray(3)

    dates[0] = obj
    dates[1] = SMSDateStringUtil.conversion(
      this.getValidFromDate(),
      SMSDateStringUtil.YYYYMMDD,
    )
    dates[2] = SMSDateStringUtil.conversion(
      this.getValidToDate(),
      SMSDateStringUtil.YYYYMMDD,
    )

    return dates
  }

  // 2006/12/14 Add start

  /**
   * システムエラーが発生したか判定します。
   * @param context ＣＪＦコンテキストオブジェクト
   * @return true：システムエラーが発生した　false：システムエラーが発生していない
   */
  protected isErrorOccurs(context: JCFContext): boolean {
    let ret: boolean = false

    // アプリケーション領域のエラー情報フラグで判断する
    let errorFlg: any = context.getApplicationData(
      SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
    )
    return (ret = errorFlg != null ? true : false)
  }

  // 2006/12/14 Add end

  //	/**
  //	* 共有データを引継データにコピーします。引継データのキーからはユースケースIDが削除されます。<br>
  //	* 引継データに同一キーが存在する場合、値は上書きされます。
  //	*
  //	* @param context ＣＪＦコンテキストオブジェクト
  //	* @param usecaseID 共有データのキーから削除されるユースケースID
  //	*/
  //	public void copyUserToSucceed(
  //		JCFContext context,
  //		String usecaseID){
  //
  //		SMSCLLog.debug("copyUserToSucceed() start");
  //
  //		Set dataSet = context.userDataKeySet();
  //
  //		if(dataSet!=null){
  //			Object[] keys = dataSet.toArray();
  //
  //			for (int i=0; i<keys.length;i++) {
  //				String key = (String) keys[i];
  //				//同ユースケースなら
  //				if (key.startsWith(useCaseID)) {
  //					key = key.substring(useCaseID.length(),key.length());
  //					context.putSucceedData(key,context.getUserData(key));
  //				}
  //			}
  //		}
  //
  //		SMSCLLog.debug("copyUserToSucceed() end");
  //
  //	}

  _getName(): string {
    return 'SMSCjfLogicBase'
  }

  static _getName(): string {
    return 'SMSCjfLogicBase'
  }

  _getType() {
    return SMSCjfLogicBase as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSCjfLogicBase'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSCjfLogicBase'
  }
}
