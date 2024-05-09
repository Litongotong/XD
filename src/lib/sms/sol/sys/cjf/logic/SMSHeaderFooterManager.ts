import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import { JCFPanelData } from '@/lib/jcf/gui/JCFPanelData'
import type { SMSLoginInfoImpl } from '../../SMSLoginInfoImpl'
import { SMSHashKeyConst } from '../../SMSHashKeyConst'
import { SMSDateStringUtil } from '../../SMSDateStringUtil'
import { SMSPropsInfos } from '../../SMSPropsInfos'
import { System } from '@/lib/native/lang/System'
import type { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow'

/**
 * ヘッダパネル、フッタパネルの設定を行います。
 * ボタンラベル、活性非活性、タイトル設定はこのクラスを使用してください。
 */
export class SMSHeaderFooterManager {
  //アイテムID
  //⇒ヘッダフレーム
  static ITEM_HEADER_TITLE = 'title'
  static ITEM_CD_SCREEN = 'cdScreen'
  static ITEM_LOGIN_NAME = 'login_name'
  static ITEM_KAISHA_NAME = 'kaisha_name'
  static ITEM_BUSHO_NAME = 'busho_name'
  static ITEM_LOGIN_TIME = 'login_time'
  static ITEM_DT_UNYO = 'unyo_dt' // 2014/06/23 富士通)久保田 追加
  //⇒フッタフレーム
  static ITEM_FUNCBTN1 = 'button1'
  static ITEM_FUNCBTN2 = 'button2'
  static ITEM_FUNCBTN3 = 'button3'
  static ITEM_FUNCBTN4 = 'button4'
  static ITEM_FUNCBTN5 = 'button5'
  static ITEM_FUNCBTN6 = 'button6'
  static ITEM_FUNCBTN7 = 'button7'
  static ITEM_FUNCBTN8 = 'button8'
  static ITEM_FUNCBTN9 = 'button9'
  static ITEM_MESSAGE = 'footer_message'
  //フレームID
  static FRAME_HEADER = 'FLM_MAIN_HEAD'
  static FRAME_MAIN = 'FLM_MAIN_BODY'
  static FRAME_FOOTER = 'FLM_MAIN_FOOT'

  //アイテムＩＤ
  static MENU_BUTTON = 'mainMenuButton'
  static RETURN_BUTTON = 'returnButton'
  static EXIT_BUTTON = 'exitButton'

  /**
   * ヘッダ部の初期表示処理を行います。
   */
  static initHeader(event: JCFEvent, context: JCFContext) {
    try {
      const screenData: JCFScreenData = context.getCurrentScreenData()

      //============================
      //ヘッダパネル　データ出力処理
      //============================
      const headerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_HEADER,
      )

      const headerTitleData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_HEADER_TITLE,
      ) as JCFFieldStringData
      const loginNameData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_LOGIN_NAME,
      ) as JCFFieldStringData
      const kaishaIDData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_KAISHA_NAME,
      ) as JCFFieldStringData
      const bushoIDData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_BUSHO_NAME,
      ) as JCFFieldStringData
      const loginTimeData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_LOGIN_TIME,
      ) as JCFFieldStringData
      const unyoDtData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_DT_UNYO,
      ) as JCFFieldStringData // 2014/06/23 富士通)久保田 追加

      const loginInfo: SMSLoginInfoImpl = context.getApplicationData(
        SMSHashKeyConst.PARAM_KEY_COMMON,
      ) as SMSLoginInfoImpl

      //タイトル表示
      //String screenID = event.getScreenID();
      //headerTitleData.setValue(SMSS01F010TitleData.getTitle(screenID));

      //ログインユーザ表示
      //loginNameData.setValue(LOGIN_NAME);

      //			loginNameData.setValue(loginInfo.getUserName());
      loginNameData.setValue(
        loginInfo.getNmUserMyoji() + '　' + loginInfo.getNmUserNamae(),
      )

      //画面ＩＤ表示
      //gamenIDData.setValue(GAMEN_ID);

      kaishaIDData.setValue(loginInfo.getNmKaisha())
      bushoIDData.setValue(loginInfo.getBushoName())

      //ログイン日時表示
      let stDate: string = loginInfo.getTmLogin().substring(0, 8)
      loginTimeData.setValue(
        SMSDateStringUtil.conversion(stDate, SMSDateStringUtil.YYYYMMDD),
      )

      // 2014/06/23 富士通)久保田 追加 Start
      // -----------------------------------------------------------------------------------------------------
      //運用日付表示
      // -----------------------------------------------------------------------------------------------------
      // プロパティファイル(YCSCMN.properties)から画面モード(YCSCMNF010M_ENV_MODE)の値を取得
      let gamenMode: string = String(
        SMSPropsInfos.getProperty('YCSCMN', 'YCSCMNF010M_ENV_MODE'),
      )
      if ('1'.equals(gamenMode)) {
        let dtUnyo: string = loginInfo.getDtUnyo()
        unyoDtData.setValue(
          '運用日：' +
            SMSDateStringUtil.conversion(dtUnyo, SMSDateStringUtil.YYYYMMDD),
        )
      } else {
        unyoDtData.setValue('')
        unyoDtData.setVisible(false)
      }
      // -----------------------------------------------------------------------------------------------------
      // 2014/06/23 富士通)久保田 追加 End
    } catch (ex: any) {
      ex.printStackTrace(System.out)
    }
  }

  /**
   * フッタ部のボタンラベルを設定します。
   * @param context
   * @param labels
   * @throws JCFIllegalStateException
   * @throws JCFIllegalArgumentException
   */
  static initFooter(context: JCFContext, labels: string[]) {
    try {
      const screenData: JCFScreenData = context.getCurrentScreenData()
      const footerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_FOOTER,
      )

      //ボタン域の初期化
      if (labels == null || labels.length == 0) {
        return
      }

      let buttonID = [
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

      //全てのボタンを活性化
      for (let i = 0; i < buttonID.length; i++) {
        let button: JCFPushButtonData = footerPanelData.getItemData(
          buttonID[i],
        ) as JCFPushButtonData

        button.setValue(labels[i])

        if (labels[i] == null || labels[i].equals('')) {
          //button.setVisible(false);
        } else {
          button.setVisible(true)
        }
      }
    } catch (ex: any) {
      ex.printStackTrace(System.out)
    }
  }

  /**
   * フッタ部のボタンラベルを設定します。
   * @param context
   * @param labels
   * @throws JCFIllegalStateException
   * @throws JCFIllegalArgumentException
   */
  static setFooterButtonLabel(
    context: JCFContext,
    labels: string[],
    level: number,
  ) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let footerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_FOOTER,
      )

      //ボタン域の初期化
      if (labels == null || labels.length == 0) {
        return
      }

      let buttonID: string[] = [
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

      //ボタン非表示化
      for (let i = 0; i < buttonID.length; i++) {
        let item: JCFItemData = footerPanelData.getItemData(
          buttonID[i],
        ) as JCFItemData
        item.setVisible(false)
        item.setEnabled(false)
      }

      //任意のボタンを表示化
      for (let i = 0; i < buttonID.length; i++) {
        if (labels[i] == null || labels[i].length == 0) continue

        let button: JCFPushButtonData = footerPanelData.getItemData(
          buttonID[i],
        ) as JCFPushButtonData
        button.setValue(labels[i])
        button.setVisible(true)
        if (i < level) {
          button.setEnabled(true)
        } else {
          button.setEnabled(false)
        }
      }
    } catch (ex: any) {
      ex.printStackTrace(System.out)
    }
  }

  /**
   * フッタ部のボタンをすべて非表示にします。
   * @param context
   */
  static setAllFooterButtonInvisible(context: JCFContext) {
    try {
      let buttonID: string[] = [
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

      let screenData: JCFScreenData = context.getCurrentScreenData()
      let footerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_FOOTER,
      )

      //ボタン非表示化
      for (let i = 0; i < buttonID.length; i++) {
        let item: JCFItemData = footerPanelData.getItemData(
          buttonID[i],
        ) as JCFItemData
        item.setVisible(false)
        item.setEnabled(false)
      }
    } catch (ex: any) {
      ex.printStackTrace(System.out)
    }
  }

  /**
   * フッタ部のボタンの活性・非活性を設定をします。
   * @param context
   * @param enabled false:非活性/true:活性
   */
  static setAllFooterButtonEnabled(context: JCFContext, enabled: boolean) {
    try {
      let buttonID: string[] = [
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

      let screenData: JCFScreenData = context.getCurrentScreenData()
      let footerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_FOOTER,
      )

      //ボタン非表示化
      for (let i = 0; i < buttonID.length; i++) {
        let item: JCFItemData = footerPanelData.getItemData(
          buttonID[i],
        ) as JCFItemData
        item.setEnabled(enabled)
        item.setVisible(true)
      }
    } catch (ex: any) {
      ex.printStackTrace(System.out)
    }
  }

  static showInformation(context: JCFContext, msgID: string): void
  static showInformation(
    context: JCFContext,
    msgID: string,
    messages: string[],
  ): void
  static showInformation(...params: any[]): void {
    if (params.length === 2) {
      this.__showInformation(params[0], params[1])
    } else {
      this.__showInformationWithContextMsgIDMessages(
        params[0],
        params[1],
        params[2],
      )
    }
  }

  /**
   * メッセージ表示を設定します。
   * @param context
   * @param msgID
   */
  private static __showInformation(context: JCFContext, msgID: string) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let footerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_FOOTER,
      )

      let item: JCFItemData = footerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_MESSAGE,
      ) as JCFItemData
      let msgUtil: JCFMessageOnWindow = context.getMessageUtil()

      //			item.setValue(JCFMessage.getMessage(msgID));
      item.setValue(msgUtil.getMessage(msgID))
      //item.setValue(msgID);
    } catch (ex: any) {
      ex.printStackTrace(System.out)
    }
  }

  /**
   * メッセージ表示を設定します。
   * 埋め文字付きメッセージ用。
   * @param context
   * @param msgID
   * @param messages
   */
  private static __showInformationWithContextMsgIDMessages(
    context: JCFContext,
    msgID: string,
    messages: string[],
  ) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let footerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_FOOTER,
      )

      let item: JCFItemData = footerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_MESSAGE,
      ) as JCFItemData
      let msgUtil: JCFMessageOnWindow = context.getMessageUtil()
      //			item.setValue(JCFMessage.getMessage(msgID));
      item.setValue(msgUtil.getMessage(msgID, messages))
      //item.setValue(msgID);
    } catch (ex: any) {
      ex.printStackTrace(System.out)
    }
  }

  /**
   * メッセージ表示を初期化します。
   * @param context
   */
  static initInformation(context: JCFContext) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let footerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_FOOTER,
      )

      let item: JCFItemData = footerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_MESSAGE,
      ) as JCFItemData
      item.setValue('')
    } catch (ex: any) {
      ex.printStackTrace(System.out)
    }
    //item.setValue(msgID);
  }

  /**
   * メインメニューボタンの可視／不可視処理を行います。
   * @param context
   * @param bool
   * @exception Exception
   */
  static setVisibleMainMenuButton(context: JCFContext, bool: boolean) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let headerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_HEADER,
      )
      let mainMenuButtonData: JCFPushButtonData = headerPanelData.getItemData(
        'mainMenuButton',
      ) as JCFPushButtonData
      mainMenuButtonData.setVisible(bool)
    } catch (e: any) {
      e.printStackTrace(System.out)
    }
  }

  /**
   * ヘッダボタンの活性／非活性処理を行います。
   * @param context
   * @param itemId
   * @param flag
   * @exception Exception
   */
  static setEnabledHeaderButton(
    context: JCFContext,
    itemId: string,
    flag: boolean,
  ) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let headerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_HEADER,
      )
      let buttonData: JCFPushButtonData = headerPanelData.getItemData(
        itemId,
      ) as JCFPushButtonData
      buttonData.setEnabled(flag)
    } catch (e: any) {
      e.printStackTrace(System.out)
    }
  }

  /**
   * フッタボタンの活性／非活性処理を行います。
   * @param context
   * @param itemId
   * @param flag
   * @exception Exception
   */
  static setEnabledFooterButton(
    context: JCFContext,
    itemId: string,
    flag: boolean,
  ) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let headerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_FOOTER,
      )
      let buttonData: JCFPushButtonData = headerPanelData.getItemData(
        itemId,
      ) as JCFPushButtonData
      buttonData.setEnabled(flag)
    } catch (e: any) {
      e.printStackTrace(System.out)
    }
  }

  static setHeaderTitle(context: JCFContext, title: string): void
  static setHeaderTitle(
    context: JCFContext,
    title: string,
    cdScreen: string,
  ): void
  static setHeaderTitle(...params: any[]): void {
    if (params.length === 2) {
      this.__setHeaderTitle(params[0], params[1])
    } else {
      this.__setHeaderTitleWithContextTitleCdScreen(
        params[0],
        params[1],
        params[2],
      )
    }
  }

  /**
   * ヘッダのタイトル・画面ＩＤを設定します。
   * @param context
   * @param title タイトル
   * @param cdScreen 画面ＩＤ
   * @exception Exception
   */
  private static __setHeaderTitleWithContextTitleCdScreen(
    context: JCFContext,
    title: string,
    cdScreen: string,
  ) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let headerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_HEADER,
      )
      let headerTitleData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_HEADER_TITLE,
      ) as JCFFieldStringData
      headerTitleData.setValue(title)
      let cdScreenData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_CD_SCREEN,
      ) as JCFFieldStringData
      cdScreenData.setValue(cdScreen)
    } catch (e: any) {
      e.printStackTrace(System.out)
    }
  }

  /**
   * ヘッダのタイトル設定処理を行います。
   * @param context
   * @param title
   * @exception Exception
   */
  private static __setHeaderTitle(context: JCFContext, title: string) {
    try {
      let screenData: JCFScreenData = context.getCurrentScreenData()
      let headerPanelData: JCFPanelData = screenData.getPanelData(
        SMSHeaderFooterManager.FRAME_HEADER,
      )
      let headerTitleData: JCFFieldStringData = headerPanelData.getItemData(
        SMSHeaderFooterManager.ITEM_HEADER_TITLE,
      ) as JCFFieldStringData
      headerTitleData.setValue(title)
    } catch (e: any) {
      e.printStackTrace(System.out)
    }
  }

  _getName(): string {
    return 'SMSHeaderFooterManager'
  }

  static _getName(): string {
    return 'SMSHeaderFooterManager'
  }

  _getType() {
    return SMSHeaderFooterManager as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSHeaderFooterManager'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.logic.SMSHeaderFooterManager'
  }
}
