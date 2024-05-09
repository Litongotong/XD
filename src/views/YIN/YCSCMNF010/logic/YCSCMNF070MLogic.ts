import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import type { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow'
import type { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import type { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import type { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { JCFPanelData } from '@/lib/jcf/gui/JCFPanelData'
import type { JCFTextAreaData } from '@/lib/jcf/gui/JCFTextAreaData'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import type { Throwable } from '@/lib/native/lang/Throwable'
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase'
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog'
import { SMSDateUtil } from '@/lib/sms/sol/sys/SMSDateUtil'
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos'
import { SMSRuntimeException } from '@/lib/sms/sol/sys/SMSRuntimeException'

/**
 * エラー画面のロジッククラスです。
 */
export default class YCSCMNF070MLogic extends SMSCjfLogicBase {
  /** ユースケースID */
  private static USECASE: string = 'YCSCMNF010'

  /** YCSCMNF070M */
  private static YCSCMNF070M: string = 'YCSCMNF070M'

  /** タイトル */
  private static TITLE_LOGIN: string = 'システムエラー'

  /** エラーコードアイテムID */
  private static ITM_CD_ERROR: string = 'messageCode'

  /** エラー詳細アイテムID */
  private static ITM_DETAIL_ERROR: string = 'errorDetail'

  /** エラー日付アイテムID */
  private static ITM_DT_ERROR: string = 'errorDate'

  //	2014/01/24 システム統合開発プロジェクト Add Start
  /** タイムアウト時間 */
  private static TIMEOUT_MIN: string = '90'
  //

  /**
   * システムエラー画面表示前処理<BR>
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
    SMSCLLog.debug('##YCSCMNF070MLogic.beforeDisplay start')

    //画面ロック解除
    returnInfo.setUnlockDeterrent(false)

    // ================================================================================================
    // ヘッダ部設定
    // ================================================================================================

    //ヘッダのタイトル設定処理
    let screenName: string = SMSPropsInfos.getProperty(
      'YCSCMN',
      'YCSCMNF070M_SCREEN_NAME',
    ) as string
    SMSHeaderFooterManager.setHeaderTitle(context, screenName, YCSCMNF070MLogic.YCSCMNF070M)

    let returnBtnItem: JCFItemData = this.getHeaderPanelData(
      context,
    ).getItemData(SMSHeaderFooterManager.RETURN_BUTTON) as JCFItemData
    let menuBtnItem: JCFItemData = this.getHeaderPanelData(context).getItemData(
      SMSHeaderFooterManager.MENU_BUTTON,
    ) as JCFItemData
    let exitBtnItem: JCFItemData = this.getHeaderPanelData(context).getItemData(
      SMSHeaderFooterManager.EXIT_BUTTON,
    ) as JCFItemData
    let loginNameItem: JCFItemData = this.getHeaderPanelData(
      context,
    ).getItemData(SMSHeaderFooterManager.ITEM_LOGIN_NAME) as JCFItemData
    let loginTimeItem: JCFItemData = this.getHeaderPanelData(
      context,
    ).getItemData(SMSHeaderFooterManager.ITEM_LOGIN_TIME) as JCFItemData

    returnBtnItem.setVisible(true)
    menuBtnItem.setVisible(true)
    exitBtnItem.setVisible(true)
    //業務終了ボタンを活性にする。
    SMSHeaderFooterManager.setEnabledHeaderButton(
      context,
      SMSHeaderFooterManager.EXIT_BUTTON,
      true,
    )
    //メニューボタンを非活性にする。
    SMSHeaderFooterManager.setEnabledHeaderButton(
      context,
      SMSHeaderFooterManager.MENU_BUTTON,
      false,
    )
    //戻るボタンを非活性にする。
    SMSHeaderFooterManager.setEnabledHeaderButton(
      context,
      SMSHeaderFooterManager.RETURN_BUTTON,
      false,
    )

    loginNameItem.setValue('')
    loginTimeItem.setValue('')

    // ================================================================================================
    // フッダ部設定
    // ================================================================================================

    //フッタのボタンは使わないので，すべて非表示にする。
    SMSHeaderFooterManager.setAllFooterButtonInvisible(context)

    // フッタ部のパネルデータを取得
    let footerPanelData: JCFPanelData = this.getFooterPanelData(context)
    // フッター部のメッセージ領域を初期化
    SMSHeaderFooterManager.initInformation(context)

    // ボディ部のパネルデータを取得
    let bodyPanelData: JCFPanelData = this.getBodyPanelData(context)

    let th: Throwable = super.getUserData(
      context,
      SMSHashKeyConst.PARAM_KEY_THROWABLE,
    ) as Throwable

    let buf: StringBuffer = new StringBuffer()

    //ボディ部のパネル項目を取得
    let errorMsg: JCFFieldStringData = bodyPanelData.getItemData(
      YCSCMNF070MLogic.ITM_CD_ERROR,
    ) as JCFFieldStringData
    //		JCFFieldStringData errorDetail =
    //					(JCFFieldStringData) bodyPanelData.getItemData(ITM_DETAIL_ERROR);
    let errorDetail: JCFTextAreaData = bodyPanelData.getItemData(
      YCSCMNF070MLogic.ITM_DETAIL_ERROR,
    ) as JCFTextAreaData

    if (th != null) {
      buf.append(th.getMessage() + '\n')
    }
    //エラーコード表示
    let msgCD: string = ''
    if (th instanceof SMSRuntimeException) {
      msgCD = (th as SMSRuntimeException).getCdError()
      if (msgCD != null && !msgCD.equals('')) {
        errorMsg.setValue(msgCD)
      } else {
        errorMsg.setValue(SMSMessageConst.SMSSYSMCE001)
      }
    } else {
      errorMsg.setValue(SMSMessageConst.SMSSYSMCE001)
    }

    //エラー詳細表示
    let jcfMsgUtil: JCFMessageOnWindow = context.getMessageUtil()

    //2014/01/24 システム統合開発プロジェクト Add Start
    //エラーコードによって表示させるメッセージを分岐
    if (msgCD.equals(SMSMessageConst.SMSSYSMCE002)) {
      //タイムアウト時
      errorDetail.setValue(
        jcfMsgUtil.getMessage(msgCD, YCSCMNF070MLogic.TIMEOUT_MIN) +
          '\r\n' +
          jcfMsgUtil.getMessage(SMSMessageConst.SMSSYSMCE007),
      )
    } else if (msgCD.equals(SMSMessageConst.SMSCMNMCE067)) {
      //利用不可時
      errorDetail.setValue(jcfMsgUtil.getMessage(SMSMessageConst.SMSSYSMCE005))
    } else {
      //その他異常時
      errorDetail.setValue(
        jcfMsgUtil.getMessage(SMSMessageConst.SMSSYSMCE001) +
          '\r\n' +
          jcfMsgUtil.getMessage(SMSMessageConst.SMSSYSMCE006),
      )
    }
    //2014/01/24 システム統合開発プロジェクト Add End

    /* 2014/01/24 システム統合開発プロジェクト コメントアウト
		//タイムアウト時のみそれを伝えるメッセージを表示
		if(msgCD.equals(SMSMessageConst.SMSSYSMCE002)){
			errorDetail.setValue(jcfMsgUtil.getMessage(msgCD));
		}else{
			errorDetail.setValue(jcfMsgUtil.getMessage(SMSMessageConst.SMSSYSMCE001));
		}
*/

    let errorDate: JCFFieldStringData = bodyPanelData.getItemData(
      YCSCMNF070MLogic.ITM_DT_ERROR,
    ) as JCFFieldStringData
    //現在日付を取得、フォーマット
    let date: string = SMSDateUtil.format(
      SMSDateUtil.DATETYPE_OF_SEC_WITH_SLUSH,
    )
    errorDate.setValue(date)

    //====2006/09/17 test==============================
    SMSCLLog.debug('★★★★★★★★★★★システムエラー終了★★★★★★★★★★')
    SMSCLLog.debug('ユーザ領域データ　キー：' + context.userDataSize())
    SMSCLLog.debug(
      'アプリケーション領域データ　キー：' + context.applicationDataSize(),
    )
    //====2006/09/17 test==============================

    SMSCLLog.debug('##YCSCMNF070MLogic.beforeDisplay end')
  }

  /**
   * システムエラー画面入力前処理<BR>
   * アダプタで画面遷移したあとは画面入力イベント前で画面ロックを解除する必要がある。
   * @param event
   * @param context
   * @param returnInfo
   * @throws Exception
   */
  beforeInput(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
    SMSCLLog.debug('##YCSCMNF070MLogic.beforeInput start')
    SMSCLLog.debug('##YCSCMNF070MLogic.beforeInput start　その２')

    // ================================================================================================
    // ヘッダ部設定
    // ================================================================================================
    //画面ロック解除
    returnInfo.setUnlockDeterrent(false)

    SMSCLLog.debug('##YCSCMNF070MLogic.beforeInput end')
  }

  /**
   * ユースケースIDを設定します。
   */
  protected setUseCaseID() {
    this.useCaseID = YCSCMNF070MLogic.USECASE
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
