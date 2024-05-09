import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { JCFPanelData } from '@/lib/jcf/gui/JCFPanelData'
import type { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'
import { NativeBoolean } from '@/lib/native/lang/Boolean'
import { Integer } from '@/lib/native/lang/Integer'
import { InetAddress } from '@/lib/native/net/InetAddress'
import { HashMap } from '@/lib/native/util/HashMap'
import type { NativeIterator } from '@/lib/native/util/Iterator'
import type { NativeSet } from '@/lib/native/util/Set'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import { SMSMenuAuthorityManager } from '@/lib/sms/sol/sys/cjf/logic/SMSMenuAuthorityManager'
import { SMSMenuManager } from '@/lib/sms/sol/sys/cjf/logic/SMSMenuManager'
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase'
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { SMSColor } from '@/lib/sms/sol/sys/SMSColor'
import { SMSDateStringUtil } from '@/lib/sms/sol/sys/SMSDateStringUtil'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'

/**
 * ログインのロジッククラスです。
 */
export default class YCSCMNF010MLogic extends SMSCjfLogicBase {
  /** ユースケースID */
  private static USECASE: string = 'YCSCMNF010'
  /** YCSCMNF010M */
  private static YCSCMNF010M: string = 'YCSCMNF010M'

  /** ユーザID取得用キー */
  private static CD_USER_ID: string = 'cdUserId'
  /** パスワード取得用キー */
  private static IF_PASSWORD: string = 'ifPassword'
  // 2014/06/23 富士通)久保田 追加 Start
  /** 運用日付取得用キー*/
  private static DT_UNYOHIDUKE: string = 'dtUnyoHiduke'
  /** 運用日付タイトルラベル取得用キー*/
  private static DT_UNYOHIDUKE_TITLE: string = 'dtUnyoHidukeTitle'
  // 2014/06/23 富士通)久保田 追加 End

  /** メニュー情報取得用キー */
  private static MENU_ITEM_INFO_CBMMSG_LIST: string = 'menuItemInfoCBMMsgList'
  /** 権限情報取得用キー */
  private static AUTHORITY_CBMMSG_LIST: string = 'authorityCBMMsgList'

  /** サブシステムID（ログイン） */
  private static CD_SUBSYSID_YCSCMNF0100: string = 'YCSCMNF0100'
  /** サブシステムID（パスワード変更） */
  private static CD_SUBSYSID_YCSCMNF0200: string = 'YCSCMNF0200'
  /** スクリーンID（サブメニュー画面） */
  private static SCR_YCSCMNF030M: string = 'SCR_YCSCMNF030M'

  /** ログイン端末ID格納用キー */
  private static CD_LOGIN_TANMATSU: string = 'cdLoginTanmatsu'
  /** 端末区分用キー */
  private static ST_TANMATSU_2: string = 'stTammatsu'
  /** ホスト名格納用キー */
  private static NM_HOST: string = 'nmHost'

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
  /** パスワード有効期限フラグ取得用キー */
  private static FG_PASSWORD_YUKO_KIGEN: string = 'fgPasswordYukoKigen'
  /** システムメニュー画面フッタメッセージ格納用キー */
  //private static MSG_SYSMENU_PW: string = "msgSysmenuPw";

  /** CBS名 */
  private static YCSCMNCBS: string = 'YCSCMNCBS'
  /** verb（ログイン） */
  private static VERB_LOGIN: string = 'YCSLoginCBSHandler.login'
  /** verb（強制ログイン） */
  private static VERB_FORCELOGIN: string = 'YCSLoginCBSHandler.forceLogin'

  /** ログイン区分格納用キー */
  private static ST_LOGIN: string = 'stLogin'
  /** ログインフラグ格納用キー */
  private static FG_LOGIN: string = 'fgLogin'

  //2006.08.28 add
  /** 前回ログイン日時格納用キー */
  private static TM_ZENKAI_LOGIN: string = 'tmZenkaiLogin'
  /** ボタン */
  private static BUTTON_CLOSE: string = '閉じる(F12)'

  /** 環境変数computernameのキー */
  //private static COMPUTER_NAME: string = "computername";
  /** リモートホスト IPアドレスのキー OBJECTから渡されるパラメータ */
  //private static NM_CLIENT_IP_KEY: string = "NM_CLIENT_IP";
  /** ホスト名取得用バッチファイル名取得用キー */
  //private static NM_HOST_BAT_KEY: string = "NM_HOST_BAT_KEY";
  /** ホスト名取得用キー */
  //private static NM_HOST_KEY: string = "NM_HOST_KEY";

  /**
   * Method init.ログイン画面の初期処理です。
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  init(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YCSCMNF010MLogic:init() start')

    try {
      //パスワード変更画面「変更」ボタンからの遷移の場合
      //if (context.getApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM)!=null) {
      if (
        YCSCMNF010MLogic.CD_SUBSYSID_YCSCMNF0200.equals(
          context.getApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM),
        )
      ) {
        returnInfo.setTransitionScreenID(YCSCMNF010MLogic.SCR_YCSCMNF030M)
        //遷移元サブシステムIDを初期化
        context.putApplicationData(SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, null)
      }
    } catch (th: any) {
      //			th.printStackTrace();
      //			try{
      returnInfo.cancelScreenTransition()
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
      //			}catch(Throwable e){
      //				e.printStackTrace();
      //			}
    }

    SMSCLLog.debug('YCSCMNF010MLogic:init() end')
  }

  /**
   * ログイン処理をします。<BR>
   *
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  login(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('YCSCMNF010MLogic:login() start')

    // 2006/12/15 Add start
    // アプリケーションデータ域、ユーザデータ域のデータ削除処理
    SMSCLLog.debug(
      'YCSCMNF010MLogic:beforeDisplay アプリケーションデータ域、ユーザデータ域のデータを削除',
    )
    // ユーザデータ域のデータ確認(削除前)
    let userDataSize: number = context.userDataSize()
    SMSCLLog.debug('ユーザデータ域(Before) Size:' + userDataSize)
    if (userDataSize > 0) {
      let userDataKeySet: NativeSet = context.userDataKeySet()
      let itr: NativeIterator = userDataKeySet.iterator()
      while (itr.hasNext()) {
        let userDataKey: any = itr.next()
        let userData: any = context.getUserData(userDataKey)
        SMSCLLog.debug(
          'ユーザデータ域(Before) Key:' + userDataKey + ' Data:' + userData,
        )
      }
    }
    // アプリケーションデータ域のデータ確認(削除前)
    let appDataSize: number = context.applicationDataSize()
    SMSCLLog.debug('アプリケーションデータ域(Before) Size:' + appDataSize)
    if (appDataSize > 0) {
      let appDataKeySet: NativeSet = context.applicationDataKeySet()
      let itr: NativeIterator = appDataKeySet.iterator()
      while (itr.hasNext()) {
        let appDataKey: any = itr.next()
        let appData: any = context.getApplicationData(appDataKey)
        SMSCLLog.debug(
          'アプリケーションデータ域(Before) Key:' +
            appDataKey +
            ' Data:' +
            appData,
        )
      }
    }

    // データ削除
    context.clearApplicationData()
    context.clearUserData()

    // ユーザデータ域のデータ確認(削除後)
    SMSCLLog.debug('ユーザデータ域(After) Size:' + context.userDataSize())
    // アプリケーションデータ域のデータ確認(削除後)
    SMSCLLog.debug(
      'アプリケーションデータ域(After) Size:' + context.applicationDataSize(),
    )
    // 2006/12/15 Add end

    // ボディ部のパネルデータを取得
    let bodyPanelData: JCFPanelData = this.getBodyPanelData(context)
    //背景色の初期化
    bodyPanelData
      .getItemData(YCSCMNF010MLogic.CD_USER_ID)
      .setBackground(SMSColor.DEFAULT)
    bodyPanelData
      .getItemData(YCSCMNF010MLogic.IF_PASSWORD)
      .setBackground(SMSColor.DEFAULT)
    bodyPanelData
      .getItemData(YCSCMNF010MLogic.DT_UNYOHIDUKE)
      .setBackground(SMSColor.DEFAULT) // 2014/06/23 富士通)久保田 追加
    // ユーザIDの取得
    let cdUserId: string = bodyPanelData
      .getItemData(YCSCMNF010MLogic.CD_USER_ID)
      .getValue()
    // パスワードの取得
    let ifPassword: string = bodyPanelData
      .getItemData(YCSCMNF010MLogic.IF_PASSWORD)
      .getValue()
    // 2014/06/23 富士通)久保田 追加 Start
    // 運用日付の取得
    let dtUnyoHiduke: string = bodyPanelData
      .getItemData(YCSCMNF010MLogic.DT_UNYOHIDUKE)
      .getValue()
    // 2014/06/23 富士通)久保田 追加 End

    // フッタ部のパネルデータを取得
    let footerPanelData: JCFPanelData = this.getFooterPanelData(context)
    // フッター部のメッセージ領域を初期化
    let item: JCFItemData = footerPanelData.getItemData(
      SMSHeaderFooterManager.ITEM_MESSAGE,
    )
    item.setValue('')

    // =================================================================================================
    // 必須入力チェック
    // =================================================================================================

    if (cdUserId == null || cdUserId.equals('')) {
      bodyPanelData
        .getItemData(YCSCMNF010MLogic.CD_USER_ID)
        .setBackground(SMSColor.WARNING)
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YCSCMNF010MLogic.CD_USER_ID,
      )
      let message: string[] = ['ユーザID']
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        message,
      )
      returnInfo.cancelScreenTransition()
      return
    }

    if (ifPassword == null || ifPassword.equals('')) {
      bodyPanelData
        .getItemData(YCSCMNF010MLogic.IF_PASSWORD)
        .setBackground(SMSColor.WARNING)
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YCSCMNF010MLogic.IF_PASSWORD,
      )
      let message: string[] = ['パスワード']
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW025,
        message,
      )
      returnInfo.cancelScreenTransition()
      return
    }

    // =================================================================================================
    // 桁チェック
    // =================================================================================================

    // ユーザIDが6文字未満、8文字より大きい場合
    if (cdUserId.length < 6 || cdUserId.length > 8) {
      bodyPanelData
        .getItemData(YCSCMNF010MLogic.CD_USER_ID)
        .setBackground(SMSColor.WARNING)
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YCSCMNF010MLogic.CD_USER_ID,
      )
      let message: string[] = ['ユーザID', '6桁以上、8']
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW029,
        message,
      )
      returnInfo.cancelScreenTransition()
      return
    }
    // パスワードが6文字未満、8文字より大きい場合
    if (ifPassword.length < 6 || ifPassword.length > 8) {
      bodyPanelData
        .getItemData(YCSCMNF010MLogic.IF_PASSWORD)
        .setBackground(SMSColor.WARNING)
      returnInfo.setFocus(
        SMSHeaderFooterManager.FRAME_MAIN,
        YCSCMNF010MLogic.IF_PASSWORD,
      )
      let message: string[] = ['パスワード', '6桁以上、8']
      SMSHeaderFooterManager.showInformation(
        context,
        SMSMessageConst.YCSCMNMCW029,
        message,
      )
      returnInfo.cancelScreenTransition()
      return
    }

    // 2014/06/23 追加 Start

    // =================================================================================================
    // 日付チェック
    // =================================================================================================
    //プロパティファイル：YCSCMN、キー：YCSCMNF010M_ENV_MODE の設定が「"1"」であった場合で、
    //「画面．運用日付」が入力されていた場合に限り、
    //日付として有効であるかチェックを行う。
    let gamenMode: string = SMSPropsInfos.getProperty(
      'YCSCMN',
      'YCSCMNF010M_ENV_MODE',
    ) as string
    if ('1'.equals(gamenMode) && Integer.parseInt(dtUnyoHiduke) != 0) {
      if (!this.isValidFilledDate(false, dtUnyoHiduke)) {
        //入力値エラー
        bodyPanelData
          .getItemData(YCSCMNF010MLogic.DT_UNYOHIDUKE)
          .setBackground(SMSColor.WARNING)
        returnInfo.setFocus(
          SMSHeaderFooterManager.FRAME_MAIN,
          YCSCMNF010MLogic.DT_UNYOHIDUKE,
        )
        let message: string[] = ['運用日付']
        SMSHeaderFooterManager.showInformation(
          context,
          SMSMessageConst.SMSCMNMCA011,
          message,
        )
        returnInfo.cancelScreenTransition()
        return
      }
    }
    // 2014/06/23 追加 End

    // =================================================================================================
    // サーバ呼び出し
    // =================================================================================================
    try {
      //policyファイルにSocketPermissionが許可されていない場合
      //ホスト名：localhost IPアドレス：127.0.0.1が返されます。
      let inetAddress: InetAddress = this.getInetAddress()
      let nmHost: string = inetAddress.getHostName()
      let nmClientIp: string = inetAddress.getHostAddress()

      let inData: HashMap = new HashMap()

      // dataに画面データを詰める
      inData.put(YCSCMNF010MLogic.CD_USER_ID, cdUserId) // ユーザID
      inData.put(YCSCMNF010MLogic.IF_PASSWORD, ifPassword) // パスワード
      inData.put(YCSCMNF010MLogic.NM_HOST, nmHost) // ホスト名
      inData.put(YCSCMNF010MLogic.CD_LOGIN_TANMATSU, nmClientIp) // IPアドレス
      inData.put(YCSCMNF010MLogic.ST_TANMATSU_2, '01') // 端末区分（アプレット）

      // 2006/11/27 Add start
      // login時にもログ出力するため追加
      this.putLoginInfoToApplicationDataBeforeLogin(context, inData)
      // 2006/11/27 Add end

      let loginHash: HashMap = null!

      // ログイン処理開始
      loginHash = this.callEJB(
        context,
        event,
        'LOGIN',
        YCSCMNF010MLogic.YCSCMNCBS,
        YCSCMNF010MLogic.VERB_LOGIN,
        inData,
      ) as HashMap

      if (
        (loginHash.get(SMSHashKeyConst.PARAM_KEY_ERROR_FLG) as string) === SMSHashKeyConst.IS_SUCCESS) {
        let stLogin: number = (
          loginHash.get(YCSCMNF010MLogic.ST_LOGIN) as Integer
        ).intValue()

        let fgLogin: boolean = false

        if (loginHash.containsKey(YCSCMNF010MLogic.FG_LOGIN)) {
          fgLogin = (
            loginHash.get(YCSCMNF010MLogic.FG_LOGIN) as NativeBoolean
          ).booleanValue()
        }

        SMSCLLog.debug('YCSCMNF010MLogic:stLogin = ' + stLogin)

        this.putLoginInfoToApplicationData(context, loginHash)

        // ==========================================================
        // トピック情報を設定する
        // ==========================================================
        if (loginHash.containsKey(YCSCMNF010MLogic.TOPIC_INFO_MSG)) {
          let topicInfo: HashMap = loginHash.get(
            YCSCMNF010MLogic.TOPIC_INFO_MSG,
          ) as HashMap
          context.putApplicationData(
            YCSCMNF010MLogic.TOPIC_KOSHIN,
            topicInfo.get(YCSCMNF010MLogic.TOPIC_KOSHIN),
          )
          context.putApplicationData(
            YCSCMNF010MLogic.TOPIC_TITLE,
            topicInfo.get(YCSCMNF010MLogic.TOPIC_TITLE),
          )
          context.putApplicationData(
            YCSCMNF010MLogic.TOPIC_CONTENTS,
            topicInfo.get(YCSCMNF010MLogic.TOPIC_CONTENTS),
          )
        }

        // ==========================================================
        // 適用期間チェックでエラーが発生した場合
        // ==========================================================
        if (stLogin == 1) {
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YCSCMNMSW072,
          )
          returnInfo.cancelScreenTransition()
          return
        }

        // ==========================================================
        // ログイン失敗回数チェックでエラーが発生した場合
        // ==========================================================
        if (stLogin == 3) {
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YCSCMNMCW079,
          )
          returnInfo.cancelScreenTransition()
          return
        }

        // ==========================================================
        // ログイン認証が失敗した場合
        // ==========================================================
        if (!fgLogin) {
          SMSHeaderFooterManager.showInformation(
            context,
            SMSMessageConst.YCSCMNMSW036,
          )
          returnInfo.cancelScreenTransition()
          return
        } else {
          // メッセージ制御部品
          let msgUtil: JCFMessageOnWindow = context.getMessageUtil()

          // メニュー情報と権限情報をアプリケーションデータに格納
          this.putMenuAuthInfo(context, loginHash)

          // ==========================================================
          // 初回ログインチェックでエラーが発生した場合
          // ==========================================================
          if (stLogin == 2) {
            // フッタに表示するメッセージを設定
            //super.putUserData(context,MSG_CHANGE_PW,msgUtil.getMessage(SMSMessageConst.YCSCMNMSW054));
            context.putApplicationData(
              YCSCMNF010MLogic.MSG_CHANGE_PW,
              msgUtil.getMessage(SMSMessageConst.YCSCMNMSW054),
            )
            // 共有データ域にパスワード有効期限間近フラグを格納(パスワード変更処理が行われればfalseを設定する)
            //super.putUserData(context, FG_PASSWORD_YUKO_KIGEN, new Boolean(true));
            //context.putApplicationData(FG_PASSWORD_YUKO_KIGEN,new Boolean(true));
            // 遷移元サブシステムIDを設定
            context.putApplicationData(
              SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM,
              YCSCMNF010MLogic.CD_SUBSYSID_YCSCMNF0100,
            )
            // サブシステムを起動（パスワード変更）
            SMSCLLog.debug(
              'YCSCMNF010MLogic（初回ログイン時）:setSubsystemID:false',
            )
            returnInfo.cancelScreenTransition()
            returnInfo.setSubsystemID(
              YCSCMNF010MLogic.CD_SUBSYSID_YCSCMNF0200,
              false,
            )
            return
          }

          // ==========================================================
          // パスワード有効期限チェックでエラーが発生した場合
          // ==========================================================
          if (stLogin == 4) {
            // フッタに表示するメッセージを設定
            //super.putUserData(context,MSG_CHANGE_PW,msgUtil.getMessage(SMSMessageConst.YCSCMNMSW061));
            context.putApplicationData(
              YCSCMNF010MLogic.MSG_CHANGE_PW,
              msgUtil.getMessage(SMSMessageConst.YCSCMNMSW061),
            )
            // 共有データ域にパスワード有効期限間近フラグを格納
            //super.putUserData(context, FG_PASSWORD_YUKO_KIGEN, new Boolean(false));
            //context.putApplicationData(FG_PASSWORD_YUKO_KIGEN,new Boolean(false));
            // 遷移元サブシステムIDを設定
            context.putApplicationData(
              SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM,
              YCSCMNF010MLogic.CD_SUBSYSID_YCSCMNF0100,
            )
            // サブシステムを起動（パスワード変更）
            SMSCLLog.debug(
              'YCSCMNF010MLogic（パスワード有効期限切れ）:setSubsystemID:false',
            )
            returnInfo.cancelScreenTransition()
            returnInfo.setSubsystemID(
              YCSCMNF010MLogic.CD_SUBSYSID_YCSCMNF0200,
              false,
            )
            return
          }

          // ==========================================================
          // パスワード有効期限間近フラグが立っていた場合
          // ==========================================================
          let fgPasswordYukoKigen: boolean = (
            loginHash.get(
              YCSCMNF010MLogic.FG_PASSWORD_YUKO_KIGEN,
            ) as NativeBoolean
          ).booleanValue()
          // 共有データ域にパスワード有効期限間近フラグを格納
          if (fgPasswordYukoKigen) {
            super.putUserData(
              context,
              YCSCMNF010MLogic.FG_PASSWORD_YUKO_KIGEN,
              new NativeBoolean(true),
            )
          } else {
            super.putUserData(
              context,
              YCSCMNF010MLogic.FG_PASSWORD_YUKO_KIGEN,
              new NativeBoolean(false),
            )
          }

          // ==========================================================
          // 同一端末から2重ログインした場合
          // ==========================================================
          if (stLogin == 5) {
            // メッセージダイアログ表示
            let msgResult: string = msgUtil.showMessage(
              SMSMessageConst.YCSCMNMSC011,
            )
            // "はい"を選択
            if (msgResult.equals(msgUtil.BTN_YES)) {
              // 強制ログイン開始
              loginHash = this.callEJB(
                context,
                event,
                'LOGIN',
                YCSCMNF010MLogic.YCSCMNCBS,
                YCSCMNF010MLogic.VERB_FORCELOGIN,
                loginHash,
              ) as HashMap
              // "いいえ"を選択
            } else {
              returnInfo.cancelScreenTransition()
              return
            }
          }
          // ==========================================================
          // 別端末から2重ログインした場合
          // ==========================================================
          if (stLogin == 6) {
            item.setValue(msgUtil.getMessage(SMSMessageConst.YCSCMNMSW064))
            returnInfo.cancelScreenTransition()
            return
          }
        }

        // 2014/06/23 追加 Start
        //プロパティファイル：YCSCMN、キー：YCSCMNF010M_ENV_MODE の設定が「"1"」であった場合で、
        //「画面．運用日付」が入力されていた場合に限り、
        //共通メッセージに格納されている（運用日付管理テーブルのオンライン）運用日付を「画面．運用日付」の値に変更する。
        if ('1'.equals(gamenMode) && Integer.parseInt(dtUnyoHiduke) != 0) {
          //変更前の共通情報を取得
          let loginInfo: SMSLoginInfoImpl = context.getApplicationData(
            SMSHashKeyConst.PARAM_KEY_COMMON,
          ) as SMSLoginInfoImpl

          //変更前の運用日付を取得(ログ出力用)
          let orgDtUnyo: string = loginInfo.getDtUnyo()

          //共通情報に格納されている（運用日付管理テーブルのオンライン）運用日付を「画面．運用日付」の値に変更
          loginInfo.setDtUnyo(dtUnyoHiduke)
          context.putApplicationData(
            SMSHashKeyConst.PARAM_KEY_COMMON,
            loginInfo,
          )

          // 運用日付変更をログに出力
          SMSCLLog.debug('共通Msgの運用日付を画面の入力値に変更しました。')
          SMSCLLog.debug('変更前の共通Msgの日付:' + orgDtUnyo)
          SMSCLLog.debug(
            '変更後の共通Msgの日付:' +
              (this.getLoginInfo(context) as SMSLoginInfoImpl).getDtUnyo(),
          )
        }
        // 2014/06/23 追加 End

        //2006.08.28 add
        //前回ログイン日時を格納
        let zenkaiLogin: string = loginHash.get(
          YCSCMNF010MLogic.TM_ZENKAI_LOGIN,
        ) as string
        if (zenkaiLogin != null) {
          zenkaiLogin = SMSDateStringUtil.conversion(
            zenkaiLogin.substring(0, 14),
            SMSDateStringUtil.YYYYMMDDHHmmss,
          )
        } else {
          //初回ログイン
          zenkaiLogin = ''
        }

        super.putUserData(
          context,
          YCSCMNF010MLogic.TM_ZENKAI_LOGIN as any,
          zenkaiLogin,
        )
      }
    } catch (th: any) {
      //			th.printStackTrace();
      //			try{
      returnInfo.cancelScreenTransition()
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
      //			}catch(Throwable e){
      //				e.printStackTrace();
      //			}
    }

    SMSCLLog.debug('YCSCMNF010MLogic:login() end')
  }

  /**
   * ログイン画面表示前処理<BR>
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
    SMSCLLog.debug('YCSCMNF010MLogic:beforeDisplay() start')

    try {
      // ================================================================================================
      // ヘッダ部設定
      // ================================================================================================
      // ヘッダ情報の設定
      // タイトル・画面IDを設定
      let screenName: string = SMSPropsInfos.getProperty(
        'YCSCMN',
        'YCSCMNF010M_SCREEN_NAME',
      ) as string
      SMSHeaderFooterManager.setHeaderTitle(
        context,
        screenName,
        YCSCMNF010MLogic.YCSCMNF010M,
      )

      // ログイン日付・会社/部署名・ユーザ名の初期化
      let headerPanelData: JCFPanelData = this.getHeaderPanelData(context)
      // ログイン日付
      let loginTime: JCFItemData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_LOGIN_TIME,
      ) as JCFItemData
      loginTime.setValue('')
      // 会社/部署名
      let nmKaisha: JCFItemData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_KAISHA_NAME,
      ) as JCFItemData
      nmKaisha.setValue('')
      let nmBusho: JCFItemData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_BUSHO_NAME,
      ) as JCFItemData
      nmBusho.setValue('')
      // ユーザ名
      let loginName: JCFItemData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_LOGIN_NAME,
      ) as JCFItemData
      loginName.setValue('')
      // 2014/06/23 富士通)久保田 追加 Start
      // 運用日付
      let dtUnyo: JCFItemData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_DT_UNYO,
      ) as JCFItemData
      dtUnyo.setValue('')
      // 2014/06/23 富士通)久保田 追加 End

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
      //2006.08.24 「閉じる」ボタンを追加
      //			exitBtnItem.setVisible(false);
      exitBtnItem.setValue(YCSCMNF010MLogic.BUTTON_CLOSE)
      exitBtnItem.setVisible(true)

      // 2014/06/23 富士通)久保田追加 Start
      let gamenMode: string = SMSPropsInfos.getProperty(
        'YCSCMN',
        'YCSCMNF010M_ENV_MODE',
      ) as string
      SMSCLLog.debug('YCSCMNF010MLogic:gamenMode=' + gamenMode)
      let dtUnyoHiduke: JCFItemData = this.getBodyPanelData(
        context,
      ).getItemData(YCSCMNF010MLogic.DT_UNYOHIDUKE) as JCFItemData
      let dtUnyoHidukeTitle: JCFItemData = this.getBodyPanelData(
        context,
      ).getItemData(YCSCMNF010MLogic.DT_UNYOHIDUKE_TITLE) as JCFItemData
      //プロパティファイル：YCSCMN、キー：YCSCMNF010M_ENV_MODE の設定が「"1"」であった場合だけ、
      //『運用日付』のラベル、テキストボックスオブジェクトを表示する。
      //それ以外の設定であった場合には、表示しない。
      if ('1'.equals(gamenMode)) {
        dtUnyoHiduke.setVisible(true)
        dtUnyoHidukeTitle.setVisible(true)
      } else {
        dtUnyoHiduke.setVisible(false)
        dtUnyoHidukeTitle.setVisible(false)
      }
      // 2014/06/23 富士通)久保田追加 End

      // ================================================================================================
      // フッダ部設定
      // ================================================================================================
      // フッタボタンを非表示
      SMSHeaderFooterManager.setAllFooterButtonInvisible(context)
      // 警告メッセージを初期化
      SMSHeaderFooterManager.initInformation(context)
    } catch (th: any) {
      //			th.printStackTrace();
      //			try{
      // 例外画面に遷移
      super.callErrorAdapter(context, th)
      //			}catch(Throwable e){
      //				e.printStackTrace();
      //			}
    }

    SMSCLLog.debug('YCSCMNF010MLogic:beforeDisplay() end')
  }

  /**
   * ユースケースIDを設定します。
   */
  protected setUseCaseID() {
    this.useCaseID = YCSCMNF010MLogic.USECASE
  }

  /**
   * ログイン情報をアプリケーションデータに格納します。<BR>
   * @param context
   * @param loginHash
   */
  private putLoginInfoToApplicationData(
    context: JCFContext,
    loginHash: HashMap,
  ) {
    // ログイン情報を取得
    let commonMsg: HashMap = loginHash.get('commonMsg') as HashMap

    let loginInfo: SMSLoginInfoImpl = new SMSLoginInfoImpl()

    loginInfo.setUserId(commonMsg.get('cdUser') as string)
    loginInfo.setNmUserMyoji(commonMsg.get('nmUserMyoji') as string)
    loginInfo.setNmUserNamae(commonMsg.get('nmUserNamae') as string)
    if (''.equals(commonMsg.get('nmUserMyoji') as string)) {
      loginInfo.setUserName(commonMsg.get('nmUserNamae') as string)
    } else {
      loginInfo.setUserName(
        (commonMsg.get('nmUserMyoji') as string) +
          ' ' +
          (commonMsg.get('nmUserNamae') as string),
      )
    }
    loginInfo.setNmUserKana(commonMsg.get('nmUserKana') as string)
    loginInfo.setCdJugyoin(commonMsg.get('cdJugyoin') as string)
    loginInfo.setCdKaisha(commonMsg.get('cdKaisha') as string)
    loginInfo.setNmKaisha(commonMsg.get('nmKaisha') as string)
    loginInfo.setCdSonekiKanriSoshiki3(
      commonMsg.get('cdSonekiKanriSoshiki3') as string,
    )
    loginInfo.setCdSonekiKanriSoshiki4(
      commonMsg.get('cdSonekiKanriSoshiki4') as string,
    )
    loginInfo.setBushoName(commonMsg.get('nmBusho') as string)
    loginInfo.setStYakuwari(commonMsg.get('stYakuwari') as string)
    loginInfo.setNmHost(commonMsg.get('nmHost') as string)
    loginInfo.setNmClientIP(commonMsg.get('nmClientIP') as string)
    loginInfo.setTmLogin(commonMsg.get('tmLogin') as string)
    loginInfo.setCdGamen('')
    loginInfo.setNmGamen('')
    loginInfo.setQtSaidaiHyouji('') //最大表示件数
    loginInfo.setQtHyoujiZumi('') //表示済位置
    loginInfo.setStKensakuHoukou('') //検索方向区分
    loginInfo.setStDirectory('') //ディレクトリ区分
    loginInfo.setNmFile('') //ファイル名
    loginInfo.setFgInline('') //インラインフラグ
    loginInfo.setStError('') //エラー種別
    loginInfo.setCdErrorKoumoku('') //エラー項目ID
    loginInfo.setQtErrorRecordPosition('') //エラー発生レコード位置
    loginInfo.setNmErrorColumn('') //エラー発生列項目名
    loginInfo.setCdMessage('') //メッセージID
    loginInfo.setDtUnyo(commonMsg.get('dtUnyo') as string) //運用日
    loginInfo.setTmKoshin('') //更新日時

    // アプリケーションデータ領域に共通情報を設定
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }

  // 2006/11/27 Add start
  /**
   * ログイン前のログイン情報をアプリケーションデータに格納します。<BR>
   * @param context
   * @param loginHash
   */
  private putLoginInfoToApplicationDataBeforeLogin(
    context: JCFContext,
    loginHash: HashMap,
  ) {
    let loginInfo: SMSLoginInfoImpl = new SMSLoginInfoImpl()

    // ログイン前のログイン情報を取得
    loginInfo.setUserId(loginHash.get(YCSCMNF010MLogic.CD_USER_ID) as string)
    let nmHost: string = loginHash.get(YCSCMNF010MLogic.NM_HOST) as string
    loginInfo.setNmHost(nmHost.length > 8 ? nmHost.substring(0, 8) : nmHost)
    loginInfo.setNmClientIP(
      loginHash.get(YCSCMNF010MLogic.CD_LOGIN_TANMATSU) as string,
    )

    // アプリケーションデータ領域に共通情報を設定
    context.putApplicationData(SMSHashKeyConst.PARAM_KEY_COMMON, loginInfo)
  }
  // 2006/11/27 Add end

  /**
   * メニュー情報および権限情報をアプリケーションデータに格納します。<BR>
   *
   * @param context
   * @param inHash
   */
  private putMenuAuthInfo(context: JCFContext, inHash: HashMap) {
    //メニュー権限マネージャ
    let menuAuthManager: SMSMenuAuthorityManager = new SMSMenuAuthorityManager()
    //メニューマネージャ
    let menuManager: SMSMenuManager = new SMSMenuManager()

    let menuHashMapArray: HashMap[] = null!
    if (inHash != null) {
      menuHashMapArray = inHash.get(
        YCSCMNF010MLogic.MENU_ITEM_INFO_CBMMSG_LIST,
      ) as HashMap[]
    }
    menuManager.setMenuData(menuHashMapArray)

    let menuAuthHashMapArray: HashMap[] = null!
    if (inHash != null) {
      menuAuthHashMapArray = inHash.get(
        YCSCMNF010MLogic.AUTHORITY_CBMMSG_LIST,
      ) as HashMap[]
    }
    menuAuthManager.setMenuAuthorityData(menuAuthHashMapArray)

    //アプリケーションデータ領域に，メニュー情報，権限情報を設定。
    context.putApplicationData(YCSCMNF010MLogic.MENU_MANAGER, menuManager)
    context.putApplicationData(
      YCSCMNF010MLogic.MENU_AUTH_MANAGER,
      menuAuthManager,
    )
  }

  /**
   * InetAddressを取得します。
   * 取得するためにはpolicyファイルでSocketPermissionを許可する必要があります。
   * @return InetAddress
   */
  private getInetAddress(): InetAddress {
    try {
      let inet: InetAddress = InetAddress.getLocalHost()
      return inet
    } catch (ue: any) {
      SMSCLLog.error('SMSServletAdapter:getInetAddress()...' + ue.toString())
      return null!
    }
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
      context.exit()
    }

    SMSCLLog.debug('exitSystem() end')
  }

  /**
   * ブラウザを終了します。
   *
   * @param event ＣＪＦイベントオブジェクト
   * @param context ＣＪＦコンテキストオブジェクト
   * @param returnInfo ＣＪＦ復帰情報オブジェクト
   * @exception JCFDataException CJFで例外が発生した場合にｽﾛｰされる例外ｵﾌﾞｼﾞｪｸﾄ
   */
  closeBrowser(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    SMSCLLog.debug('closeBrowser() start')

    context.callScript('close', null)

    SMSCLLog.debug('closeBrowser() end')
  }
}
