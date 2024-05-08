import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFFieldFilledDateData } from '@/lib/jcf/gui/JCFFieldFilledDateData'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { JCFPanelData } from '@/lib/jcf/gui/JCFPanelData'
import { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'
import type { JCFTextAreaData } from '@/lib/jcf/gui/JCFTextAreaData'
import type { NativeBoolean } from '@/lib/native/lang/Boolean'
import type { ArrayList } from '@/lib/native/util/ArrayList'
import { HashMap } from '@/lib/native/util/HashMap'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import type { SMSMenuAuthorityManager } from '@/lib/sms/sol/sys/cjf/logic/SMSMenuAuthorityManager'
import type { SMSMenuManager } from '@/lib/sms/sol/sys/cjf/logic/SMSMenuManager'
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase'
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField'
import { SMSClientInfo } from '@/lib/sms/sol/sys/SMSClientInfo'
import { SMSDateStringUtil } from '@/lib/sms/sol/sys/SMSDateStringUtil'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'

/**
 * システムメニュー画面のロジッククラスです。
 */
export default class YCSCMNF030MLogic extends SMSCjfLogicBase {
  /** ユースケースID */
  private static USECASE: string = 'YCSCMNF010'
  /** YCSCMNF030M */
  private static YCSCMNF030M: string = 'YCSCMNF030M'

  /** サブシステム プロパティファイル読み込みに使用 */
  private static SUBSYSID: string = 'YCSCMN'
  /** システムメニュー画面親メニューコード プロパティファイル読み込みに使用 */
  private static MAIN_MENU_KEY: string = 'MAIN_MENU_KEY'

  /** ボタン */
  private static BUTTON_LOGOUT: string = 'ログアウト(F12)'

  /** CBS名 */
  private static YCSCMNCBS: string = 'YCSCMNCBS'
  /** verb（メニュー情報取得） */
  private static VERB_MENUINFO: string = 'YCSMenuCBSHandler.getMenuInfo'
  /** verb（ログイン状態を取得） */
  private static VERB_INIT: string = 'YCSPasswordHenkoCBSHandler.init'
  /** verb（ログアウト）*/
  private static VERB_LOGOUT: string = 'logout'
  /** ファンクションID（ログアウト） */
  private static ADAPTER_FUNCTION_ID_LOGOUT: string = 'LOGOUT'

  /** システムメニューで選択されたメニューコード（メインメニューにて利用） */
  static SELECTED_MENU_CODE_MAIN: string = 'selectedMenuCode_main'
  // 2007/05/15 Add start
  /** システムメニューで選択されたメニュー名称（メインメニューにて利用） */
  static SELECTED_MENU_NAME_MAIN: string = 'selectedMenuName_main'
  // 2007/05/15 Add end

  /** メニュー項目情報 */
  private static MENUINFO_MSG: string = 'menuItemInfoMsgList'
  /** 権限情報 */
  private static KENGENINFO_MSG: string = 'authorityMsgList'

  /** メニューコード */
  private static CDMENU: string = 'cdMenu'
  /** メニュー名称 */
  private static NMMENU: string = 'nmMenu'

  /** トピック更新日アイテムID */
  private static CD_ITEM_TOPIC_KOSHIN: string = 'topicDate'
  /** トピックタイトルアイテムID */
  private static CD_ITEM_TOPIC_TITLE: string = 'topicLabel'
  /** トピック内容アイテムID */
  private static CD_ITEM_TOPIC_CONTENTS: string = 'topicContents'
  /** 前回ログイン日時アイテムID */
  private static CD_ITEM_ZENKAI_LOGIN: string = 'zenkaiLogin'

  /** 状態区分（ログイン） */
  private static ST_JOTAI_LOGIN: string = '01'

  /** トピック情報取得用キー */
  private static TOPIC_INFO_MSG: string = 'topicInfoCBMMsg'
  /** トピック更新日取得用キー */
  private static TOPIC_KOSHIN: string = 'dtTopicKoshin'
  /** トピックタイトル取得用キー */
  private static TOPIC_TITLE: string = 'ifTopicTitle'
  /** トピック内容取得用キー */
  private static TOPIC_CONTENTS: string = 'ifTopicContent'
  /** パスワード変更画面フッタメッセージ格納用キー */
  private static MSG_CHANGE_PW: string = 'msgChangePw'
  /** 遷移元パネルID取得用キー */
  private static CD_PANEL: string = 'cdPanel'
  /** パスワード有効期限フラグ取得用キー */
  private static FG_PASSWORD_YUKO_KIGEN: string = 'fgPasswordYukoKigen'
  /** システムメニュー画面フッタメッセージ格納用キー（パスワード変更済み） */
  private static MSG_CHANGE_PW_OK: string = 'msgChangePwOk'
  /** ログイン状態取得用キー */
  private static ST_LOGIN_JOTAI: string = 'stLoginJotai'

  /** 端末区分用キー */
  private static ST_TANMATSU: string = 'stTammatsu'
  /** 端末区分用キー(Applet) */
  private static ST_TANMATSU_APPLET: string = '01'
  /** 削除フラグ（ログイン管理テーブル）用キー */
  private static FG_SAKUJO_LOGIN_KANRI: string = 'fgSakujoLoginKanri'

  /** DWHログインサーブレット */
  private static SERVLET_NAME_DWH: string = '/SMSDWServlet?uji.verb=dwhLogin'
  /** ListWorksログインサーブレット */
  private static SERVLET_NAME_LW: string =
    '/SMSDWServlet?uji.verb=listworksLogin'

  //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT START-------
  // 2008/07/18 [YIN-KM-00002] Add start
  //	/** DWH(実販・販売実績)ログインサーブレット */
  //	private static final String SERVLET_NAME_RB = "/SMSDWServlet?uji.verb=redbrickLogin";
  // 2008/07/18 [YIN-KM-00002] Add end
  //	-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT END-------

  //2006.08.28 add
  /** 前回ログイン日時格納用キー */
  private static TM_ZENKAI_LOGIN: string = 'tmZenkaiLogin'

  //2006.09.11 aoki add
  /** ユーザID取得用キー */
  private static CD_USER_ID: string = 'cdUserId'
  //2006.09.11 aoki add

  /**
   * ログアウト<BR>
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  logout(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YCSCMNF030MLogic:logout() start')

    try {
      // メニュー情報マネージャ
      let menuManager: SMSMenuManager = context.getApplicationData(
        YCSCMNF030MLogic.MENU_MANAGER,
      ) as SMSMenuManager
      // メニュー権限マネージャ
      let menuAuthManager: SMSMenuAuthorityManager = context.getApplicationData(
        YCSCMNF030MLogic.MENU_AUTH_MANAGER,
      ) as SMSMenuAuthorityManager

      // メッセージダイアログ表示
      let msgUtil: JCFMessageOnWindow = context.getMessageUtil()
      let msgResult: string

      // ログイン画面にてシステムエラーが発生した場合
      if (menuManager == null && menuAuthManager == null) {
        msgResult = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC077)

        // システムメニュー画面「ログアウト」ボタン押下時
        // あるいはシステムメニュー画面にてシステムエラーが発生した場合
      } else {
        msgResult = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC007)
      }

      // "いいえ"を選択
      if (msgResult.equals(msgUtil.BTN_NO)) {
        returnInfo.cancelScreenTransition()
        return
      }

      // システムメニュー画面から遷移の場合のみログアウト
      // 2006/09/15 Mod start
      // システムエラーが発生している場合、すでにログアウト済み
      let errorFlg: any = context.getApplicationData(
        SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
      )

      if (menuManager != null && menuAuthManager != null && errorFlg == null) {
        //			if (menuManager != null && menuAuthManager != null) {
        // 2006/09/15 Mod end
        SMSCLLog.debug('YCSCMNF030MLogic:logout:ログアウト処理')
        let inData: HashMap = new HashMap()
        inData.put(
          YCSCMNF030MLogic.ST_TANMATSU,
          YCSCMNF030MLogic.ST_TANMATSU_APPLET,
        ) // 端末区分（アプレット）
        inData.put(YCSCMNF030MLogic.FG_SAKUJO_LOGIN_KANRI, '0') // ログアウト処理
        let logoutHash: HashMap = this.callEJB(
          context,
          event,
          YCSCMNF030MLogic.ADAPTER_FUNCTION_ID_LOGOUT,
          YCSCMNF030MLogic.YCSCMNCBS,
          YCSCMNF030MLogic.VERB_LOGOUT,
          inData,
        ) as HashMap
      }

      // アプリケーションデータ域、共有データ域のデータを削除
      SMSCLLog.debug(
        'YCSCMNF030MLogic:logout:アプリケーションデータ域、共有データ域のデータを削除',
      )
      context.clearApplicationData()
      context.clearUserData()

      // 子画面を閉じる
      if (context.existChildWindow()) {
        context.closeChildWindow()
      }

      //====2006/09/17 test==============================
      SMSCLLog.debug('★★★★★★★★★★★ログアウト終了★★★★★★★★★★')
      SMSCLLog.debug('ユーザ領域データ　キー：' + context.userDataSize())
      SMSCLLog.debug(
        'アプリケーション領域データ　キー：' + context.applicationDataSize(),
      )
      //====2006/09/17 test==============================
    } catch (th: any) {
      returnInfo.cancelScreenTransition()
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YCSCMNF030MLogic:logout() end')
  }

  /**
   * システムメニュー｢基幹システム｣用ロジック<BR>
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  infraSystem(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YCSCMNF030MLogic:infraSystem() start')

    try {
      // 2006/09/15 Add start
      // システムエラーが発生している場合起動しない
      let errorFlg: any = context.getApplicationData(
        SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
      )
      if (errorFlg != null) {
        returnInfo.cancelChangeConfiguration()
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSE014,
        )
        returnInfo.cancelChangeConfiguration()
      }
      // 2006/09/15 Add end

      // 二重起動禁止
      if (context.existChildWindow()) {
        SMSCLLog.debug(
          'YCSCMNF030MLogic:基幹システム起動中のため処理を中断します。',
        )
        returnInfo.cancelChangeConfiguration()
      }

      // パスワード有効期限間近メッセージは一度だけの表示であるため
      let footerMsg: string = context.getApplicationData(
        YCSCMNF030MLogic.MSG_CHANGE_PW_OK,
      ) as string
      if (footerMsg != null) {
        context.removeApplicationData(YCSCMNF030MLogic.MSG_CHANGE_PW_OK)
      }

      // IT1-00048 「基幹システム」以外にフォーカスがある状態で「基幹システム」押下でボタンなし画面に遷移
      let oyaMainCD: string = event
        .getEventAdditionalInfo()
        .getItemID() as string
      // アプリケーションデータ領域に，メインメニュー親コード情報、メニュー情報，権限情報を設定。
      SMSCLLog.debug(
        'YCSCMNF030MLogic:アプリケーションデータ領域に親メニューコードを設定:開始' +
          oyaMainCD,
      )
      context.putApplicationData(
        YCSCMNF030MLogic.SELECTED_MENU_CODE_MAIN,
        oyaMainCD,
      )
      SMSCLLog.debug(
        'YCSCMNF030MLogic:アプリケーションデータ領域に親メニューコードを設定:終了' +
          oyaMainCD,
      )

      // 2007/05/15 Add start
      // ボディ部のパネルデータを取得
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let panelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_MAIN,
      )
      // ボタンデータを取得
      let btnData: JCFPushButtonData = panelData.getItemData(
        oyaMainCD,
      ) as JCFPushButtonData
      // ボタンメニュー名称を取得
      let nmMenu: string = btnData.getValue()
      // アプリケーションデータ領域にメニュー名称を設定
      context.putApplicationData(
        YCSCMNF030MLogic.SELECTED_MENU_NAME_MAIN,
        nmMenu,
      )
      // 2007/05/15 Add end
    } catch (th: any) {
      returnInfo.cancelScreenTransition()
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YCSCMNF030MLogic:infraSystem() end')
  }

  /**
   * システムメニュー｢DWH｣用ロジック<BR>
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  dwh(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YCSCMNF030MLogic:dwh() start')

    let context_root: string = SMSClientInfo.getContextRoot()
    let protcol: string = SMSClientInfo.getProtcol()
    //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT START-------
    //		String dwh_name = SMSClientInfo.getDWHName();
    //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT END-------

    try {
      // 2006/09/15 Add start
      // システムエラーが発生している場合起動しない
      let errorFlg: any = context.getApplicationData(
        SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
      )
      if (errorFlg != null) {
        returnInfo.cancelChangeConfiguration()
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSE014,
        )
        return
      }
      // 2006/09/15 Add end

      let applet: Applet = JCFContext.getBaseContainer() as Applet
      let serverName: string = applet.getCodeBase().getHost()
      let contextRoot: string = applet.getParameter(context_root)
      // 2006/09/11 aoki Add start
      let cdUser: string = super.getLoginInfo(context).getUserId()
      // 2006/09/11 aoki Add end

      let url: URL = new URL(
        protcol +
          serverName +
          contextRoot +
          '/' +
          YCSCMNF030MLogic.SERVLET_NAME_DWH +
          '&' +
          YCSCMNF030MLogic.CD_USER_ID +
          '=' +
          cdUser,
      )

      context.showDocument(url, 'window1')
    } catch (th: any) {
      returnInfo.cancelScreenTransition()
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YCSCMNF030MLogic:dwh() end')
  }

  /**
   * システムメニュー｢ListWorks｣用ロジック<BR>
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  listworks(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YCSCMNF030MLogic:listworks() start')

    try {
      // 2006/09/15 Add start
      // システムエラーが発生している場合起動しない
      let errorFlg: any = context.getApplicationData(
        SMSHashKeyConst.PARAM_KEY_ERROR_FLG,
      )
      if (errorFlg != null) {
        returnInfo.cancelChangeConfiguration()
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.YCSCMNMSE014,
        )
        return
      }
      // 2006/09/15 Add end

      let context_root: string = SMSClientInfo.getContextRoot()
      let protcol: string = SMSClientInfo.getProtcol()

      let applet: Applet = JCFContext.getBaseContainer() as Applet
      let serverName: string = applet.getCodeBase().getHost()
      let contextRoot: string = applet.getParameter(context_root)
      // 2006/09/11 aoki Add start
      let cdUser: string = super.getLoginInfo(context).getUserId()
      // 2006/09/11 aoki Add end

      let url: URL = new URL(
        protcol +
          serverName +
          contextRoot +
          '/' +
          YCSCMNF030MLogic.SERVLET_NAME_LW +
          '&' +
          YCSCMNF030MLogic.CD_USER_ID +
          '=' +
          cdUser,
      )

      //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト MOD START-------
      //			context.showDocument(url, "window1");
      context.showDocument(url, 'window2')
      //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト MOD END-------
    } catch (th: any) {
      returnInfo.cancelScreenTransition()
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YCSCMNF030MLogic:listworks() end')
  }

  //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT START-------
  // 2008/07/18 [YIN-KM-00002] Add start
  //	/**
  //	 * システムメニュー｢DWH(実販・販売実績)｣用ロジック<BR>
  //	 * @param event
  //	 * @param context
  //	 * @param returnInfo
  //	 * @throws Exception
  //	 */
  /*
	redbrick(JCFEvent event, JCFContext context, JCFReturnInfo returnInfo) throws Exception {

		SMSCLLog.debug("YCSCMNF030MLogic:redbrick() start");

		try {
			// システムエラーが発生している場合起動しない
			Object errorFlg = context.getApplicationData(SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
			if (errorFlg != null) {
				returnInfo.cancelChangeConfiguration();
				SMSHeaderFooterManager.showInformation(context,SMSMessageConst.YCSCMNMSE014);
				return;
			}

			String context_root = SMSClientInfo.getContextRoot();
			String protcol = SMSClientInfo.getProtcol();

			Applet applet = (Applet) JCFContext.getBaseContainer();
			String serverName = applet.getCodeBase().getHost();
			String contextRoot = applet.getParameter(context_root);
			String cdUser = super.getLoginInfo(context).getUserId();
			
			URL url = new URL(protcol + serverName + contextRoot + "/" + SERVLET_NAME_RB + "&" + 
							CD_USER_ID + "=" + cdUser );
			
			context.showDocument(url, "window1");

		} catch (Throwable th) {
			returnInfo.cancelScreenTransition();
			// 例外画面に遷移
			super.callErrorAdapter(context,th);
		}
		
		SMSCLLog.debug("YCSCMNF030MLogic:redbrick() end");
	}
*/
  // 2008/07/18 [YIN-KM-00002] Add end
  //-------------2014.01.31 富士通)大平 システム統合開発プロジェクト DLT END-------

  /**
   * システム画面表示前処理<BR>
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  beforeDisplay(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('YCSCMNF030MLogic:beforeDisplay() start')

    try {
      // ================================================================================================
      // ヘッダ部設定
      // ================================================================================================
      // ヘッダ情報の設定
      SMSHeaderFooterManager.initHeader(event, context)
      let screenName: string = SMSPropsInfos.getProperty(
        YCSCMNF030MLogic.SUBSYSID,
        YCSCMNF030MLogic.YCSCMNF030M + '_SCREEN_NAME',
      ) as string
      SMSHeaderFooterManager.setHeaderTitle(
        context,
        screenName,
        YCSCMNF030MLogic.YCSCMNF030M,
      )
      // ヘッダボタンの設定
      let returnBtnItem: JCFItemData = this.getHeaderPanelData(
        context,
      ).getItemData(SMSHeaderFooterManager.RETURN_BUTTON) as JCFItemData
      let menuBtnItem: JCFItemData = this.getHeaderPanelData(
        context,
      ).getItemData(SMSHeaderFooterManager.MENU_BUTTON) as JCFItemData
      let exitBtnItem: JCFItemData = this.getHeaderPanelData(
        context,
      ).getItemData(SMSHeaderFooterManager.EXIT_BUTTON) as JCFItemData
      returnBtnItem.setVisible(false)
      menuBtnItem.setVisible(false)
      exitBtnItem.setValue(YCSCMNF030MLogic.BUTTON_LOGOUT)
      exitBtnItem.setVisible(true)

      // ================================================================================================
      // ボディ部設定
      // ================================================================================================
      // ボディ部のパネルデータ取得
      let panelData: JCFPanelData = this.getBodyPanelData(context)

      // メニュー情報マネージャ
      let menuManager: SMSMenuManager = context.getApplicationData(
        YCSCMNF030MLogic.MENU_MANAGER,
      ) as SMSMenuManager
      let menuData: HashMap[] = null!
      let menuKey: string = SMSPropsInfos.getProperty(
        YCSCMNF030MLogic.SUBSYSID,
        YCSCMNF030MLogic.MAIN_MENU_KEY,
      )
      SMSCLLog.debug('YCSCMNF030MLogic:MAIN_MENU_KEY:' + menuKey)
      menuData = menuManager.getMainMenuData(menuKey)
      SMSCLLog.debug(
        'YCSCMNF030MLogic:menuData:' + JCCObjectTextConv.toString(menuData),
      )
      // メニュー権限マネージャ
      let menuAuthManager: SMSMenuAuthorityManager = context.getApplicationData(
        YCSCMNF030MLogic.MENU_AUTH_MANAGER,
      ) as SMSMenuAuthorityManager
      // 表示しようとしているパネル上にある全てのItemDataを取得。
      let array: ArrayList = panelData.getAllItemData()
      let buttonData: JCFPushButtonData = null!
      // ボタンの制御開始
      for (let i = 0; i < array.size(); i++) {
        // ItemData
        let o: any = array.get(i)
        // ItemDataがJCFPushButtonDataの場合
        if (o instanceof JCFPushButtonData) {
          buttonData = o as JCFPushButtonData
          let itemId: string = buttonData.getItemID()
          SMSCLLog.debug(
            'YCSCMNF030MLogic:システムメニューボタンitemId:' + itemId,
          )
          // 権限チェック
          // ※ボタンIDとメニュー項目マスタのメニューコードを同一にする必要あり。
          let enabled: boolean = menuAuthManager.isArrow(itemId)
          if (enabled) {
            for (let cnt = 0; cnt < menuData.length; cnt++) {
              if (itemId.equals(menuData[cnt].get(YCSCMNF030MLogic.CDMENU))) {
                buttonData.setValue(
                  menuData[cnt].get(YCSCMNF030MLogic.NMMENU) as string,
                ) // ラベル表示
              }
            }
            buttonData.setVisible(true) // ボタン表示
          } else {
            buttonData.setVisible(false) // ボタン非表示
          }
        }
      }

      // 2007/09/25 add start OT2-00191-000
      // トピックのアイテムデータ取得
      let topicKoshinData: JCFFieldFilledDateData = panelData.getItemData(
        YCSCMNF030MLogic.CD_ITEM_TOPIC_KOSHIN,
      ) as JCFFieldFilledDateData
      let topicTitleData: JCFFieldStringData = panelData.getItemData(
        YCSCMNF030MLogic.CD_ITEM_TOPIC_TITLE,
      ) as JCFFieldStringData
      let topicContentsData: JCFTextAreaData = panelData.getItemData(
        YCSCMNF030MLogic.CD_ITEM_TOPIC_CONTENTS,
      ) as JCFTextAreaData
      // トピック情報設定
      let topicKoshin: string = context.getApplicationData(
        YCSCMNF030MLogic.TOPIC_KOSHIN,
      ) as string
      let topicTitle: string = context.getApplicationData(
        YCSCMNF030MLogic.TOPIC_TITLE,
      ) as string
      let topicContents: string = context.getApplicationData(
        YCSCMNF030MLogic.TOPIC_CONTENTS,
      ) as string
      SMSCLLog.debug('YCSCMNF030MLogic:topicKoshin:' + topicKoshin)
      SMSCLLog.debug('YCSCMNF030MLogic:topicTitle:' + topicTitle)
      SMSCLLog.debug('YCSCMNF030MLogic:topicContents:' + topicContents)

      //			if (!"".equals(topicKoshin)) {
      //				topicKoshinData.setValue(SMSDateStringUtil.reverse(topicKoshin));
      //トピック更新日がnullまたは空文字の場合は、何も表示しない。
      if (topicKoshin != null && !''.equals(topicKoshin)) {
        let buf: string = SMSDateStringUtil.reverse(topicKoshin)

        //トピック更新日の桁数が不正(8桁(年月日)以外)
        if (buf.length != 8) {
          SMSCLLog.debug(
            'YCSCMNF030MLogic:フッタメッセージ:トピック更新日が正しくありません。',
          )
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YCSCMNMCW030,
            ['トピック更新日'],
          )
        } else {
          //数字以外の文字が入力されているかチェック
          if (!SMSCheckField.checkField(SMSCheckField.FIELD_N, buf)) {
            SMSCLLog.debug(
              'YCSCMNF030MLogic:フッタメッセージ:トピック更新日が正しくありません。',
            )
            SMSHeaderFooterManager.showInformation(
              context,
              SMSMessageConst.YCSCMNMCW030,
              ['トピック更新日'],
            )
            //トピック更新日に問題が無い為、表示
          } else {
            topicKoshinData.setValue(buf)
          }
        }
      }

      //トピックタイトルがnullまたは空文字の場合は、何も表示しない。
      if (topicTitle != null && !''.equals(topicTitle)) {
        topicTitleData.setValue(topicTitle)
      }

      //トピックコンテンツデータがnullまたは空文字の場合は、何も表示しない。
      if (topicContentsData != null && !''.equals(topicContentsData)) {
        topicContentsData.setValue(topicContents)
      }
      // 2007/09/25 add end OT2-00191-000

      // ================================================================================================
      // フッダ部設定
      // ================================================================================================
      // フッタボタンを非表示
      SMSHeaderFooterManager.setAllFooterButtonInvisible(context)

      // フッタ部のメッセージ領域を取得
      let item: JCFItemData = this.getFooterPanelData(context).getItemData(
        SMSHeaderFooterManager.ITEM_MESSAGE,
      )

      // 共有データ域からパスワード有効期限フラグを取得
      let fgPasswordYukoKigen: NativeBoolean = this.getUserData(
        context,
        YCSCMNF030MLogic.FG_PASSWORD_YUKO_KIGEN,
      ) as NativeBoolean
      if (fgPasswordYukoKigen != null) {
        if (fgPasswordYukoKigen.booleanValue()) {
          // パスワードの有効期間が近づいている場合
          SMSCLLog.debug(
            'YCSCMNF030MLogic:フッタメッセージ:パスワード有効期限メッセージ表示',
          )
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YCSCMNMSW062,
          )
        } else {
          // 2007/09/25 add start OT2-00191-000
          //					SMSCLLog.debug("YCSCMNF030MLogic:フッタメッセージ:初期化");
          //					item.setValue("");
        }
      } else {
        //				SMSCLLog.debug("YCSCMNF030MLogic:フッタメッセージ:初期化");
        //				item.setValue("");
        // 2007/09/25 add end OT2-00191-000
      }

      // 共有データ域からパスワード変更済みのメッセージは存在すれば表示
      let footerMsg: string = context.getApplicationData(
        YCSCMNF030MLogic.MSG_CHANGE_PW_OK,
      ) as string
      if (footerMsg != null && !''.equals(footerMsg)) {
        SMSHeaderFooterManager.showInformation(context, footerMsg)
      }

      // @初回ログイン時
      // Aパスワード有効期限切れ
      // 上記からの遷移の場合、パスワード変更画面のフッタメッセージ用のデータをクリア
      // ※@Aを経た上で、さらにメニュー画面からパスワード変更画面へ遷移する際に、
      // 　@A用のメッセージが表示されないようにする
      if (context.getApplicationData(YCSCMNF030MLogic.MSG_CHANGE_PW) != null) {
        context.putApplicationData(YCSCMNF030MLogic.MSG_CHANGE_PW, null)
      }

      // 2006/08/28 Add start
      // 前回ログイン日時を表示
      let tmZenkailogin: string = super.getUserData(
        context,
        YCSCMNF030MLogic.TM_ZENKAI_LOGIN as string,
      ) as string
      let zenkaiLogin: JCFFieldStringData = panelData.getItemData(
        YCSCMNF030MLogic.CD_ITEM_ZENKAI_LOGIN,
      ) as JCFFieldStringData
      zenkaiLogin.setValue(tmZenkailogin)
    } catch (th: any) {
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
    }

    SMSCLLog.debug('YCSCMNF030MLogic:beforeDisplay() end')
  }

  /**
   * ユースケースIDを設定します。
   */
  protected setUseCaseID() {
    this.useCaseID = YCSCMNF030MLogic.USECASE
  }

  /**
   * ボディ部のパネルデータを取得します。<BR>
   * @param context
   */
  private getBodyPanelData(context: JCFContext): JCFPanelData {
    let screenData: JCFScreenData = context.getCurrentScreenData()
    let panelData: JCFPanelData = screenData.getPanelData(
      SMSHeaderFooterManager.FRAME_MAIN,
    )
    return panelData
  }

  /**
   * ヘッダ部のパネルデータを取得します。<BR>
   * @param context
   */
  private getHeaderPanelData(context: JCFContext): JCFPanelData {
    let screenData: JCFScreenData = context.getCurrentScreenData()
    let panelData: JCFPanelData = screenData.getPanelData(
      SMSHeaderFooterManager.FRAME_HEADER,
    )
    return panelData
  }

  /**
   * フッタ部のパネルデータを取得します。<BR>
   * @param context
   */
  private getFooterPanelData(context: JCFContext): JCFPanelData {
    let screenData: JCFScreenData = context.getCurrentScreenData()
    let panelData: JCFPanelData = screenData.getPanelData(
      SMSHeaderFooterManager.FRAME_FOOTER,
    )
    return panelData
  }
}
