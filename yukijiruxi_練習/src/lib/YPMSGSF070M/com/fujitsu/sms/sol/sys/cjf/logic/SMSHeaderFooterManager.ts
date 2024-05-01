/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.sms.sol.sys.cjf.logic {
  /**
   * <PRE>
   * ヘッダパネル、フッタパネルの設定を行います。<BR>
   * ボタンラベル、活性非活性、タイトル設定はこのクラスを使用してください。<BR>
   * </PRE>
   * @author 富士通)宇津宮
   * @version
   * @class
   */
  export class SMSHeaderFooterManager {
    public static ITEM_HEADER_TITLE: string = 'title'

    public static ITEM_CD_SCREEN: string = 'cdScreen'

    public static ITEM_LOGIN_NAME: string = 'login_name'

    public static ITEM_KAISHA_NAME: string = 'kaisha_name'

    public static ITEM_BUSHO_NAME: string = 'busho_name'

    public static ITEM_LOGIN_TIME: string = 'login_time'

    public static ITEM_DT_UNYO: string = 'unyo_dt'

    public static ITEM_FUNCBTN1: string = 'button1'

    public static ITEM_FUNCBTN2: string = 'button2'

    public static ITEM_FUNCBTN3: string = 'button3'

    public static ITEM_FUNCBTN4: string = 'button4'

    public static ITEM_FUNCBTN5: string = 'button5'

    public static ITEM_FUNCBTN6: string = 'button6'

    public static ITEM_FUNCBTN7: string = 'button7'

    public static ITEM_FUNCBTN8: string = 'button8'

    public static ITEM_FUNCBTN9: string = 'button9'

    public static ITEM_MESSAGE: string = 'footer_message'

    public static FRAME_HEADER: string = 'FLM_MAIN_HEAD'

    public static FRAME_MAIN: string = 'FLM_MAIN_BODY'

    public static FRAME_FOOTER: string = 'FLM_MAIN_FOOT'

    public static MENU_BUTTON: string = 'mainMenuButton'

    public static RETURN_BUTTON: string = 'returnButton'

    public static EXIT_BUTTON: string = 'exitButton'

    /**
     * ヘッダ部の初期表示処理を行います。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFEvent} event
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @exception Exception
     */
    public static initHeader(
      event: lib.com.fujitsu.jcf.ctrl.JCFEvent,
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const headerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_HEADER,
          )
        const headerTitleData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_HEADER_TITLE)
        const loginNameData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_LOGIN_NAME)
        const kaishaIDData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_KAISHA_NAME)
        const bushoIDData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_BUSHO_NAME)
        const loginTimeData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_LOGIN_TIME)
        const unyoDtData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_DT_UNYO)
        const loginInfo: lib.com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <
          lib.com.fujitsu.sms.sol.sys.SMSLoginInfoImpl
        >context.getApplicationData(
          lib.com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON,
        )
        loginNameData.setValue(
          loginInfo.getNmUserMyoji() + '\u3000' + loginInfo.getNmUserNamae(),
        )
        kaishaIDData.setValue(loginInfo.getNmKaisha())
        bushoIDData.setValue(loginInfo.getBushoName())
        const stDate: string = loginInfo.getTmLogin().substring(0, 8)
        loginTimeData.setValue(
          lib.com.fujitsu.sms.sol.sys.SMSDateStringUtil.conversion(
            stDate,
            lib.com.fujitsu.sms.sol.sys.SMSDateStringUtil.YYYYMMDD,
          ),
        )
        const gamenMode: string = <string>(
          lib.com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(
            'YCSCMN',
            'YCSCMNF010M_ENV_MODE',
          )
        )
        if ('1' === gamenMode) {
          const dtUnyo: string = loginInfo.getDtUnyo()
          unyoDtData.setValue(
            '\u904b\u7528\u65e5\uff1a' +
              lib.com.fujitsu.sms.sol.sys.SMSDateStringUtil.conversion(
                dtUnyo,
                lib.com.fujitsu.sms.sol.sys.SMSDateStringUtil.YYYYMMDD,
              ),
          )
        } else {
          unyoDtData.setValue('')
          unyoDtData.setVisible(false)
        }
      } catch (ex) {
        console.error(ex.message, ex)
      }
    }

    /**
     * フッタ部のボタンラベルを設定します。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {java.lang.String[]} labels
     * @throws JCFIllegalStateException
     * @throws JCFIllegalArgumentException
     */
    public static initFooter(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      labels: string[],
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const footerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_FOOTER,
          )
        if (labels == null || labels.length === 0) {
          return
        }
        const buttonID: string[] = [
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
        for (let i: number = 0; i < buttonID.length; i++) {
          {
            if (labels[i] == null || labels[i] === '') {
            } else {
            }
          }
        }
      } catch (ex) {
        console.error(ex.message, ex)
      }
    }

    /**
     * フッタ部のボタンラベルを設定します。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {java.lang.String[]} labels
     * @throws JCFIllegalStateException
     * @throws JCFIllegalArgumentException
     * @param {number} level
     */
    public static setFooterButtonLabel(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      labels: string[],
      level: number,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const footerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_FOOTER,
          )
        if (labels == null || labels.length === 0) {
          return
        }
        const buttonID: string[] = [
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
        for (let i: number = 0; i < buttonID.length; i++) {
          {
            const item: lib.com.fujitsu.jcf.gui.JCFItemData = <
              lib.com.fujitsu.jcf.gui.JCFItemData
            >footerPanelData.getItemData(buttonID[i])
            item.setVisible(false)
            item.setEnabled(false)
          }
        }
        for (let i: number = 0; i < buttonID.length; i++) {
          {
            if (labels[i] == null || labels[i].length === 0) continue
          }
        }
      } catch (ex) {
        console.error(ex.message, ex)
      }
    }

    /**
     * フッタ部のボタンをすべて非表示にします。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     */
    public static setAllFooterButtonInvisible(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
    ) {
      try {
        const buttonID: string[] = [
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
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const footerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_FOOTER,
          )
        for (let i: number = 0; i < buttonID.length; i++) {
          {
            const item: lib.com.fujitsu.jcf.gui.JCFItemData = <
              lib.com.fujitsu.jcf.gui.JCFItemData
            >footerPanelData.getItemData(buttonID[i])
            item.setVisible(false)
            item.setEnabled(false)
          }
        }
      } catch (ex) {
        console.error(ex.message, ex)
      }
    }

    /**
     * フッタ部のボタンの活性・非活性を設定をします。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {boolean} enabled false:非活性/true:活性
     */
    public static setAllFooterButtonEnabled(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      enabled: boolean,
    ) {
      try {
        const buttonID: string[] = [
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
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const footerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_FOOTER,
          )
        for (let i: number = 0; i < buttonID.length; i++) {
          {
            const item: lib.com.fujitsu.jcf.gui.JCFItemData = <
              lib.com.fujitsu.jcf.gui.JCFItemData
            >footerPanelData.getItemData(buttonID[i])
            item.setEnabled(enabled)
            item.setVisible(true)
          }
        }
      } catch (ex) {
        console.error(ex.message, ex)
      }
    }

    public static showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      msgID: string,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const footerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_FOOTER,
          )
        const item: lib.com.fujitsu.jcf.gui.JCFItemData = <
          lib.com.fujitsu.jcf.gui.JCFItemData
        >footerPanelData.getItemData(SMSHeaderFooterManager.ITEM_MESSAGE)
        const msgUtil: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow =
          context.getMessageUtil()
        item.setValue(msgUtil.getMessage$java_lang_String(msgID))
      } catch (ex) {
        console.error(ex.message, ex)
      }
    }

    public static showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      msgID: string,
      messages: string[],
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const footerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_FOOTER,
          )
        const item: lib.com.fujitsu.jcf.gui.JCFItemData = <
          lib.com.fujitsu.jcf.gui.JCFItemData
        >footerPanelData.getItemData(SMSHeaderFooterManager.ITEM_MESSAGE)
        const msgUtil: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow =
          context.getMessageUtil()
        item.setValue(
          msgUtil.getMessage$java_lang_String$java_lang_String_A(
            msgID,
            messages,
          ),
        )
      } catch (ex) {
        console.error(ex.message, ex)
      }
    }

    /**
     * メッセージ表示を設定します。<BR>
     * 埋め文字付きメッセージ用。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {string} msgID
     * @param {java.lang.String[]} messages
     */
    public static showInformation(context?: any, msgID?: any, messages?: any) {
      if (
        ((context != null &&
          context instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof msgID === 'string' || msgID === null) &&
        ((messages != null &&
          messages instanceof <any>Array &&
          (messages.length == 0 ||
            messages[0] == null ||
            typeof messages[0] === 'string')) ||
          messages === null)
      ) {
        return <any>(
          lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(
            context,
            msgID,
            messages,
          )
        )
      } else if (
        ((context != null &&
          context instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof msgID === 'string' || msgID === null) &&
        messages === undefined
      ) {
        return <any>(
          lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(
            context,
            msgID,
          )
        )
      } else throw new Error('invalid overload')
    }

    /**
     * メッセージ表示を初期化します。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     */
    public static initInformation(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const footerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_FOOTER,
          )
        const item: lib.com.fujitsu.jcf.gui.JCFItemData = <
          lib.com.fujitsu.jcf.gui.JCFItemData
        >footerPanelData.getItemData(SMSHeaderFooterManager.ITEM_MESSAGE)
        item.setValue('')
      } catch (ex) {
        console.error(ex.message, ex)
      }
    }

    public static setHeaderTitle$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      title: string,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const headerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_HEADER,
          )
        const headerTitleData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_HEADER_TITLE)
        headerTitleData.setValue(title)
      } catch (e) {
        console.error(e.message, e)
      }
    }

    /**
     * メインメニューボタンの可視／不可視処理を行います。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {boolean} bool
     * @exception Exception
     */
    public static setVisibleMainMenuButton(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      bool: boolean,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const headerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_HEADER,
          )
      } catch (e) {
        console.error(e.message, e)
      }
    }

    /**
     * ヘッダボタンの活性／非活性処理を行います。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {string} itemId
     * @param {boolean} flag
     * @exception Exception
     */
    public static setEnabledHeaderButton(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      itemId: string,
      flag: boolean,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const headerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_HEADER,
          )
      } catch (e) {
        console.error(e.message, e)
      }
    }

    /**
     * フッタボタンの活性／非活性処理を行います。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {string} itemId
     * @param {boolean} flag
     * @exception Exception
     */
    public static setEnabledFooterButton(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      itemId: string,
      flag: boolean,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const headerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_FOOTER,
          )
        const buttonData: lib.com.fujitsu.jcf.gui.JCFPushButtonData = <
          lib.com.fujitsu.jcf.gui.JCFPushButtonData
        >headerPanelData.getItemData(itemId)
        buttonData.setEnabled(flag)
      } catch (e) {
        console.error(e.message, e)
      }
    }

    public static setHeaderTitle$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: lib.com.fujitsu.jcf.ctrl.JCFContext,
      title: string,
      cdScreen: string,
    ) {
      try {
        const screenData: lib.com.fujitsu.jcf.ctrl.JCFScreenData =
          context.getCurrentScreenData()
        const headerPanelData: lib.com.fujitsu.jcf.gui.JCFPanelData =
          screenData.getPanelData$java_lang_String(
            SMSHeaderFooterManager.FRAME_HEADER,
          )
        const headerTitleData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_HEADER_TITLE)
        headerTitleData.setValue(title)
        const cdScreenData: lib.com.fujitsu.jcf.gui.JCFFieldStringData = <
          lib.com.fujitsu.jcf.gui.JCFFieldStringData
        >headerPanelData.getItemData(SMSHeaderFooterManager.ITEM_CD_SCREEN)
        cdScreenData.setValue(cdScreen)
      } catch (e) {
        console.error(e.message, e)
      }
    }

    /**
     * ヘッダのタイトル・画面ＩＤを設定します。<BR>
     * @param {lib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {string} title タイトル
     * @param {string} cdScreen 画面ＩＤ
     * @exception Exception
     */
    public static setHeaderTitle(context?: any, title?: any, cdScreen?: any) {
      if (
        ((context != null &&
          context instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof title === 'string' || title === null) &&
        (typeof cdScreen === 'string' || cdScreen === null)
      ) {
        return <any>(
          lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setHeaderTitle$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            title,
            cdScreen,
          )
        )
      } else if (
        ((context != null &&
          context instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof title === 'string' || title === null) &&
        cdScreen === undefined
      ) {
        return <any>(
          lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setHeaderTitle$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(
            context,
            title,
          )
        )
      } else throw new Error('invalid overload')
    }
  }
  SMSHeaderFooterManager['__class'] =
    'lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager'
}
