import { lib as JCFEventLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/ctrl/JCFEvent'
import { lib as JCFContextLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/ctrl/JCFContext'
import { lib as JCFReturnInfoLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/ctrl/JCFReturnInfo'
import { lib as JCFItemDataLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/gui/JCFItemData'
import { lib as SMSCjfLogicBaseLib } from '@/lib/YPMSGSF070M/com/fujitsu/sms/sol/sys/cjf/SMSCjfLogicBase'

/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.megsnow.ypm.cmn.cjf.logic {
  /**
   * YPMLogicBaseRel クラスです。
   *
   * @author  富士通）高木
   * @version
   * @class
   * @extends com.fujitsu.sms.sol.sys.cjf.SMSCjfLogicBase
   */
  export abstract class YPMLogicBaseRel extends SMSCjfLogicBaseLib.com.fujitsu
    .sms.sol.sys.cjf.SMSCjfLogicBase {
    /**
     * ＪＣＦコンテキスト
     */
    /*private*/ ctxt: com.fujitsu.jcf.ctrl.JCFContext

    /**
     * ＪＣＦイベント
     */
    /*private*/ evnt: com.fujitsu.jcf.ctrl.JCFEvent

    /**
     * ＪＣＦリターンインフォ
     */
    /*private*/ rinf: com.fujitsu.jcf.ctrl.JCFReturnInfo

    /**
     * スクリーンＩＤを指定するハッシュキー
     */
    /*private*/ SCREEN_ID: string

    /**
     * パネルインスタンスを指定するハッシュキー
     */
    /*private*/ PANEL_INSTANCE: string

    /**
     * ヘッダ、フッタ設定
     * @param {boolean} back
     */
    abstract setHeaderFooter(back: boolean)

    /**
     * コントロール初期化
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
     * @param {boolean} back
     */
    abstract initControl(event: com.fujitsu.jcf.ctrl.JCFEvent, back: boolean)

    /**
     * 画面ID取得
     * @return {string}
     */
    abstract getGamenId(): string

    /**
     * プログラムID取得
     * @return {string}
     */
    abstract getProgramId(): string

    /**
     * サブシステム
     * @return {string}
     */
    abstract getSybsystemId(): string

    /**
     * 画面タイトル
     * @return {string}
     */
    getScreenName(): string {
      try {
        return <string>(
          com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(
            this.getSybsystemId(),
            this.getGamenId() +
              lib.com.megsnow.ypm.cmn.YPMCommonConst._SCREEN_NAME,
          )
        )
      } catch (th) {
        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
          '\u753b\u9762\u540d\u79f0\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002',
        )
      }
      return ''
    }

    /**
     * 最大検索件数
     * @return {string}
     */
    getMaxSelectCount(): string {
      try {
        let max: string = <string>(
          com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(
            this.getSybsystemId(),
            this.getGamenId() +
              lib.com.megsnow.ypm.cmn.YPMCommonConst._MAX_SELECT_CNT,
          )
        )
        if (max == null || max === '') {
          max = lib.com.megsnow.ypm.cmn.YPMCommonConst.DEF_MAX_SELECT_CNT
        }
        return max
      } catch (th) {
        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
          '\u6700\u5927\u4ef6\u6570\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306b\u3066\u51e6\u7406\u3057\u307e\u3059\u3002',
        )
      }
      return lib.com.megsnow.ypm.cmn.YPMCommonConst.DEF_MAX_SELECT_CNT
    }

    /**
     * パネルインスタンス
     */
    /*private*/ panel: com.fujitsu.jcf.gui.JCFPanelInterface

    /**
     * エレメントなし
     */
    NOT_ELEMENT: number

    /**
     * 先頭のエレメント
     */
    FIRST_ELEMENT: number

    /**
     * 取得結果1番目のエレメント（空白行を含まない）
     */
    GET_FIRST_ELEMENT: number

    /**
     * 最後のエレメント
     */
    LAST_ELEMENT: number

    /**
     * 全てのエレメント
     */
    ALL_ELEMENT: number

    /**
     * テキスト比較
     */
    /*private*/ COMP_TEXT: number

    /**
     * ID比較
     */
    /*private*/ COMP_ID: number

    /**
     * パネルインスタンス設定
     */
    setPanel() {
      this.panel = this.getEvent().getPanelInstance()
      super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(
        this.getContext(),
        this.PANEL_INSTANCE + '_' + this.getGamenId(),
        this.panel,
      )
    }

    getPanel$(): com.fujitsu.jcf.gui.JCFPanelInterface {
      this.panel = <com.fujitsu.jcf.gui.JCFPanelInterface>(
        (<any>(
          super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(
            this.getContext(),
            this.PANEL_INSTANCE + '_' + this.getGamenId(),
          )
        ))
      )
      return this.panel
    }

    /**
     *
     * ＪＣＦコンテキスト設定
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context 設定するＪＣＦコンテキスト
     */
    setContext(context: com.fujitsu.jcf.ctrl.JCFContext) {
      this.ctxt = context
    }

    /**
     *
     * ＪＣＦコンテキスト取得
     * @return {com.fujitsu.jcf.ctrl.JCFContext} ＪＣＦコンテキスト
     */
    getContext(): com.fujitsu.jcf.ctrl.JCFContext {
      return this.ctxt
    }

    /**
     * ＪＣＦイベント設定
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event 設定するＪＣＦイベント
     */
    setEvent(event: com.fujitsu.jcf.ctrl.JCFEvent) {
      this.evnt = event
    }

    /**
     * ＪＣＦイベント取得
     * @return {com.fujitsu.jcf.ctrl.JCFEvent} ＪＣＦイベント
     */
    getEvent(): com.fujitsu.jcf.ctrl.JCFEvent {
      return this.evnt
    }

    /**
     * ＪＣＦリターンインフォ設定
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo 設定するＪＣＦリターン情報
     */
    setReturnInfo(returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
      this.rinf = returnInfo
    }

    /**
     * ＪＣＦリターンインフォ取得
     * @return {com.fujitsu.jcf.ctrl.JCFReturnInfo} ＪＣＦリターン情報
     */
    getReturnInfo(): com.fujitsu.jcf.ctrl.JCFReturnInfo {
      return this.rinf
    }

    /**
     * スクリーンＩＤ設定
     * @param {string} strScreenID 設定するスクリーンＩＤ文字列
     */
    setScreenID(strScreenID: string) {
      super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(
        this.getContext(),
        this.SCREEN_ID + '_' + this.getGamenId(),
        strScreenID,
      )
    }

    /**
     * スクリーンＩＤ取得
     * @return {string} スクリーンＩＤ
     */
    getScreenID(): string {
      return <string>(
        super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(
          this.getContext(),
          this.SCREEN_ID + '_' + this.getGamenId(),
        )
      )
    }

    /**
     * ＪＣＦイベント、ＪＣＦコンテキスト、ＪＣＦリターン情報を内部変数へ保存する。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event 設定するＪＣＦイベント
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context 設定するＪＣＦコンテキスト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo 設定するＪＣＦリターン情報
     */
    setJCFParameter(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setEvent(event)
      this.setContext(context)
      this.setReturnInfo(returnInfo)
    }

    /**
     * ＪＣＦパラメータ初期化
     */
    initJCFParameter() {
      this.setEvent(null)
      this.setContext(null)
      this.setReturnInfo(null)
    }

    /**
     * プロパティ取得
     *
     * @param {string} filename 取得したいプロパティファイル名
     * @return {com.fujitsu.jcc.util.JCCProperties} ＪＣＣプロパティクラス
     */
    getProperties(filename: string): com.fujitsu.jcc.util.JCCProperties {
      let prop: com.fujitsu.jcc.util.JCCProperties =
        new com.fujitsu.jcc.util.JCCProperties()
      try {
        prop.load(filename)
      } catch (e) {
        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
          '\u30d7\u30ed\u30d1\u30c6\u30a3\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u307e\u305b\u3093\u3002(' +
            filename +
            ')',
        )
        prop = null
      }
      return prop
    }

    /**
     * 画面遷移領域へ設定
     * @param {string} key ハッシュキー
     * @param {*} map 受け渡すハッシュマップデータ
     */
    putSucceedData(key: string, map: any) {
      this.ctxt.putSucceedData$java_lang_String$java_util_HashMap(key, map)
    }

    /**
     * 画面遷移領域より取得
     * @param {string} key ハッシュキー
     * @return {*} 受け渡されたハッシュマップデータ
     */
    getSucceedData(key: string): any {
      return <any>this.ctxt.getSucceedData(key)
    }

    /**
     * Method エラー画面遷移等でユースケースを指定して、他ユースケースの共有データを設定します。<BR>
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context CJFのコンテキスト
     * @param {string} usecaseID     設定したい共有データのユースケースID
     * @param {*} key     共有データに設定するキー名（内部的にはユースケースIDが付加される）
     * @param {*} value     共有データに設定する値
     */
    public putUserData(context?: any, usecaseID?: any, key?: any, value?: any) {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof usecaseID === 'string' || usecaseID === null) &&
        (key != null || key === null) &&
        (value != null || value === null)
      ) {
        super.putUserData(context, usecaseID, key, value)
      } else if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (usecaseID != null || usecaseID === null) &&
        (key != null || key === null) &&
        value === undefined
      ) {
        return <any>(
          this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(
            context,
            usecaseID,
            key,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        ((usecaseID != null && usecaseID instanceof Object) ||
          usecaseID === null) &&
        key === undefined &&
        value === undefined
      ) {
        return <any>(
          this.putUserData$java_lang_String$java_util_HashMap(
            context,
            usecaseID,
          )
        )
      } else throw new Error('invalid overload')
    }

    putUserData$java_lang_String$java_util_HashMap(key: string, map: any) {
      super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(
        this.getContext(),
        key,
        map,
      )
    }

    /**
     * Method 汎用検索等で他ユースケースの共有データを取得するためユースケースを指定して共有データを取得します。<BR>
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context CJFのコンテキスト
     * @param {string} usecaseID     取得したい共有データのユースケースID
     * @param {*} key     共有データから取得する値のキー名（内部的にはユースケースIDが付加される）
     * @return {*} Object 共有データから取得する値
     */
    public getUserData(context?: any, usecaseID?: any, key?: any): any {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof usecaseID === 'string' || usecaseID === null) &&
        (key != null || key === null)
      ) {
        return super.getUserData(context, usecaseID, key)
      } else if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (usecaseID != null || usecaseID === null) &&
        key === undefined
      ) {
        return <any>(
          this.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(
            context,
            usecaseID,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        usecaseID === undefined &&
        key === undefined
      ) {
        return <any>this.getUserData$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getUserData$java_lang_String(key: string): any {
      return <any>(
        this.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(
          this.getContext(),
          key,
        )
      )
    }

    /**
     * イベント情報の取得
     * @return {com.fujitsu.jcf.ctrl.JCFEventAdditionalInfo} ＪＣＦイベント追加情報
     */
    getEventInfo(): com.fujitsu.jcf.ctrl.JCFEventAdditionalInfo {
      return this.getEvent().getEventAdditionalInfo()
    }

    /**
     * ボディパネルの取得
     *
     * @return {com.fujitsu.jcf.gui.JCFPanelData} 業務パネル
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    getBodyPanel(): com.fujitsu.jcf.gui.JCFPanelData {
      return this.getPanel$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(
        this.getContext(),
        lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_BODY,
      )
    }

    public getPanel$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
    ): com.fujitsu.jcf.gui.JCFPanelData {
      const screenData: com.fujitsu.jcf.ctrl.JCFScreenData =
        context.getCurrentScreenData()
      return screenData.getPanelData$java_lang_String(frame_id)
    }

    /**
     * ＪＣＦパネルデータ取得
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context 取得するパネルのＪＣＦコンテキスト
     * @param panel_id パネルＩＤ
     * @return {com.fujitsu.jcf.gui.JCFPanelData} ＪＣＦパネルデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @param {string} frame_id
     */
    public getPanel(context?: any, frame_id?: any): any {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null)
      ) {
        return <any>(
          this.getPanel$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(
            context,
            frame_id,
          )
        )
      } else if (context === undefined && frame_id === undefined) {
        return <any>this.getPanel$()
      } else throw new Error('invalid overload')
    }

    getItemData$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFItemData {
      return this.getBodyPanel().getItemData(itemId)
    }

    public getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: JCFContextLib.com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): JCFItemDataLib.com.fujitsu.jcf.gui.JCFItemData {
      return this.getPanel$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(
        context,
        frame_id,
      ).getItemData(itemId)
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFItemData} ＪＣＦアイテムデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getItemData(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFItemData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getItemData$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getComboData$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFComboBoxData {
      return <com.fujitsu.jcf.gui.JCFComboBoxData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getComboData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFComboBoxData {
      return <com.fujitsu.jcf.gui.JCFComboBoxData>(
        this.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * ＪＣＦコンボボックスデータクラスにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFComboBoxData} ＪＣＦコンボボックスデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getComboData(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFComboBoxData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getComboData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getComboData$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getFieldStringData$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFFieldStringData {
      return <com.fujitsu.jcf.gui.JCFFieldStringData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getFieldStringData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFFieldStringData {
      return <com.fujitsu.jcf.gui.JCFFieldStringData>(
        this.getFieldStringData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * JCFFieldStringデータクラスにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFFieldStringData} ＪＣＦコンボボックスデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getFieldStringData(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFFieldStringData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getFieldStringData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getFieldStringData$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    /**
     * 業務メインパネル内のアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * YUKIFieldLongデータクラスにキャストした結果を取得します。
     *
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFFieldLongData} ＪＣＦコンボボックスデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    getFieldLongData(itemId: string): com.fujitsu.jcf.gui.JCFFieldLongData {
      return <com.fujitsu.jcf.gui.JCFFieldLongData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * YUKIFieldLongデータクラスにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFFieldLongData} ＪＣＦコンボボックスデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    getFieldLognData(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFFieldLongData {
      return <com.fujitsu.jcf.gui.JCFFieldLongData>(
        this.getFieldLognData(context, frame_id, itemId)
      )
    }

    getPushButtonData$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFPushButtonData {
      return <com.fujitsu.jcf.gui.JCFPushButtonData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getPushButtonData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFPushButtonData {
      return <com.fujitsu.jcf.gui.JCFPushButtonData>(
        this.getPushButtonData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * JCFPushButtonデータクラスにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFPushButtonData} ＪＣＦプッシュボタン
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getPushButtonData(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFPushButtonData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getPushButtonData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getPushButtonData$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getFieldDate$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFFieldFilledDateData {
      return <com.fujitsu.jcf.gui.JCFFieldFilledDateData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getFieldDate$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFFieldFilledDateData {
      return <com.fujitsu.jcf.gui.JCFFieldFilledDateData>(
        this.getFieldDate$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * ＪＣＦＦｉｅｌｄＦｉｌｌｅｄＤａｔｅデータクラスにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFFieldFilledDateData} ＪＣＦコンボボックスデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getFieldDate(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFFieldFilledDateData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getFieldDate$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getFieldDate$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getCheckBox$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFToggleButtonData {
      return <com.fujitsu.jcf.gui.JCFToggleButtonData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getCheckBox$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFToggleButtonData {
      return <com.fujitsu.jcf.gui.JCFToggleButtonData>(
        this.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * ＪＣＦトグルボタンデータクラスにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFToggleButtonData} ＪＣＦトグルボタンデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getCheckBox(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFToggleButtonData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getCheckBox$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getCheckBox$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getRadioButton$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFToggleButtonData {
      return <com.fujitsu.jcf.gui.JCFToggleButtonData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getRadioButton$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFToggleButtonData {
      return <com.fujitsu.jcf.gui.JCFToggleButtonData>(
        this.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * ＪＣＦトグルボタンデータクラスにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFToggleButtonData} ＪＣＦトグルボタンデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getRadioButton(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFToggleButtonData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getRadioButton$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getRadioButton$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getListData$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFListBoxData {
      return <com.fujitsu.jcf.gui.JCFListBoxData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getListData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFListBoxData {
      return <com.fujitsu.jcf.gui.JCFListBoxData>(
        this.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * ＪＣＦリストボックスデータクラスにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFListBoxData} ＪＣＦリストボックスデータクラス
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getListData(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFListBoxData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getListData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getListData$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getListViewData$java_lang_String(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFListViewData {
      return <com.fujitsu.jcf.gui.JCFListViewData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getListViewData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFListViewData {
      return <com.fujitsu.jcf.gui.JCFListViewData>(
        this.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * ＪＣＦリストビューデータにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFListViewData} ＪＣＦリストビューデータ
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getListViewData(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.jcf.gui.JCFListViewData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getListViewData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getListViewData$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    getSpreadData$java_lang_String(
      itemId: string,
    ): com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData {
      return <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>(
        this.getItemData$java_lang_String(itemId)
      )
    }

    public getSpreadData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      context: com.fujitsu.jcf.ctrl.JCFContext,
      frame_id: string,
      itemId: string,
    ): com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData {
      return <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>(
        this.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
          context,
          frame_id,
          itemId,
        )
      )
    }

    /**
     * フレームＩＤとアイテムＩＤを指定し、同パネル内のＪＣＦアイテムデータクラスを
     * ＳＭＳＪＣＦスプレッドデータにキャストした結果を取得します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context ＪＣＦコンテキスト
     * @param {string} frame_id 取得するパネルの属するフレームＩＤ
     * @param {string} itemId 取得するアイテムデータのアイテムＩＤ
     * @return {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} ＳＭＳＪＣＦスプレッドデータ
     *
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public getSpreadData(
      context?: any,
      frame_id?: any,
      itemId?: any,
    ): com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData {
      if (
        ((context != null &&
          context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) ||
          context === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.getSpreadData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
            context,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof context === 'string' || context === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.getSpreadData$java_lang_String(context)
      } else throw new Error('invalid overload')
    }

    /**
     * イベント内の追加情報をＪＣＦスプレッド追加情報にキャストした結果を取得します。
     * このメソッドを実行する場合は、事前にsetJCFParameterを実行する必要があります。
     *
     * return スプレッド追加情報を取得
     * @return {com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo}
     */
    getSpreadInfo(): com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo {
      return <com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo>(
        this.getEventInfo().getAdditionalInfo()
      )
    }

    /**
     * 表示テキストの内容を設定します。
     *
     * @param {string} itemId 値を設定するアイテムＩＤ
     * @param {string} value 設定文字列
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    setValue(itemId: string, value: string) {
      const item: com.fujitsu.jcf.gui.JCFItemData =
        this.getItemData$java_lang_String(itemId)
      item.setValue(value)
    }

    setFocus$java_lang_String(itemId: string) {
      const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo =
        this.getReturnInfo()
      if (returnInfo != null) {
        this.setFocus$com_fujitsu_jcf_ctrl_JCFReturnInfo$java_lang_String$java_lang_String(
          returnInfo,
          lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_BODY,
          itemId,
        )
      }
    }

    public setFocus$com_fujitsu_jcf_ctrl_JCFReturnInfo$java_lang_String$java_lang_String(
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
      frame_id: string,
      itemId: string,
    ) {
      if (returnInfo != null) {
        returnInfo.setFocus$java_lang_String$java_lang_String(frame_id, itemId)
      }
    }

    /**
     *
     * 指定したフレームの指定したアイテムＩＤへフォーカスを移動します。
     *
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo ＪＣＦリターン情報
     * @param {string} frame_id フレームＩＤ
     * @param {string} itemId アイテムＩＤ
     *
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public setFocus(returnInfo?: any, frame_id?: any, itemId?: any) {
      if (
        ((returnInfo != null &&
          returnInfo instanceof <any>com.fujitsu.jcf.ctrl.JCFReturnInfo) ||
          returnInfo === null) &&
        (typeof frame_id === 'string' || frame_id === null) &&
        (typeof itemId === 'string' || itemId === null)
      ) {
        return <any>(
          this.setFocus$com_fujitsu_jcf_ctrl_JCFReturnInfo$java_lang_String$java_lang_String(
            returnInfo,
            frame_id,
            itemId,
          )
        )
      } else if (
        (typeof returnInfo === 'string' || returnInfo === null) &&
        frame_id === undefined &&
        itemId === undefined
      ) {
        return <any>this.setFocus$java_lang_String(returnInfo)
      } else throw new Error('invalid overload')
    }

    createSelectableElement$java_util_HashMap_A$java_lang_String$java_lang_String$int$boolean(
      mapData: any[],
      keyId: string,
      keyText: string,
      select_index: number,
      dsp_id: boolean,
    ): com.fujitsu.jcf.gui.JCFSelectableElement[] {
      let len: number = 0
      let index: number = select_index
      if (mapData == null || keyId == null || keyText == null) {
        return null
      }
      len = mapData.length
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] = ((s) => {
        let a = []
        while (s-- > 0) a.push(null)
        return a
      })(len)
      if (select_index === this.FIRST_ELEMENT) {
        index = 0
      }
      if (select_index === this.LAST_ELEMENT) {
        index = elements.length - 1
      }
      for (let i: number = 0; i < mapData.length; i++) {
        {
          const val: string = <string>/* get */ ((m, k) => {
            if (m.entries == null) m.entries = []
            for (let i = 0; i < m.entries.length; i++)
              if (
                (m.entries[i].key == null && k == null) ||
                (m.entries[i].key.equals != null &&
                  m.entries[i].key.equals(k)) ||
                m.entries[i].key === k
              ) {
                return m.entries[i].value
              }
            return null
          })(<any>mapData[i], keyId)
          let dsp_text: string = <string>/* get */ ((m, k) => {
            if (m.entries == null) m.entries = []
            for (let i = 0; i < m.entries.length; i++)
              if (
                (m.entries[i].key == null && k == null) ||
                (m.entries[i].key.equals != null &&
                  m.entries[i].key.equals(k)) ||
                m.entries[i].key === k
              ) {
                return m.entries[i].value
              }
            return null
          })(<any>mapData[i], keyText)
          if (dsp_id === true) {
            dsp_text = dsp_text + '(' + val + ')'
          }
          const select: boolean =
            index === i || index === this.ALL_ELEMENT ? true : false
          elements[i] = new com.fujitsu.jcf.gui.JCFSelectableElement(
            dsp_text,
            val,
            select,
          )
        }
      }
      return elements
    }

    createSelectableElement$java_lang_String_A$java_lang_String_A$int$boolean(
      id: string[],
      text: string[],
      select_index: number,
      dsp_id: boolean,
    ): com.fujitsu.jcf.gui.JCFSelectableElement[] {
      let len: number = 0
      let index: number = select_index
      if (id == null || text == null) {
        return null
      }
      if (id.length !== text.length) {
        return null
      }
      len = id.length
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] = ((s) => {
        let a = []
        while (s-- > 0) a.push(null)
        return a
      })(len)
      if (select_index === this.FIRST_ELEMENT) {
        index = 0
      }
      if (select_index === this.LAST_ELEMENT) {
        index = elements.length - 1
      }
      for (let i: number = 0; i < len; i++) {
        {
          const val: string = id[i]
          let dsp_text: string = text[i]
          if (dsp_id === true) {
            dsp_text = dsp_text + '(' + val + ')'
          }
          const select: boolean =
            index === i || index === this.ALL_ELEMENT ? true : false
          const element: com.fujitsu.jcf.gui.JCFSelectableElement =
            new com.fujitsu.jcf.gui.JCFSelectableElement(dsp_text, val, select)
          elements[i] = element
        }
      }
      return elements
    }

    public createSelectableElement$com_fujitsu_jcf_gui_JCFSelectableElement_A$java_lang_String$java_lang_String$boolean$int$boolean(
      elements: com.fujitsu.jcf.gui.JCFSelectableElement[],
      id: string,
      text: string,
      select: boolean,
      insert_index: number,
      dsp_id: boolean,
    ): com.fujitsu.jcf.gui.JCFSelectableElement[] {
      const index: number = insert_index
      let new_size: number = 0
      let i: number = 0
      const old_elements: com.fujitsu.jcf.gui.JCFSelectableElement[] = elements
      let new_elements: com.fujitsu.jcf.gui.JCFSelectableElement[] = null
      let element: com.fujitsu.jcf.gui.JCFSelectableElement = null
      if (old_elements == null) {
        new_size = 1
      } else {
        new_size = old_elements.length + 1
      }
      new_elements = ((s) => {
        let a = []
        while (s-- > 0) a.push(null)
        return a
      })(new_size)
      let dsp_text: string = text
      if (dsp_id === true) {
        dsp_text = text + '(' + id + ')'
      }
      switch (index) {
        case 0 /* FIRST_ELEMENT */:
          element = new com.fujitsu.jcf.gui.JCFSelectableElement(
            dsp_text,
            id,
            select,
          )
          new_elements[0] = element
          for (i = 1; i < new_size; i++) {
            {
              if (select === true) {
                old_elements[i - 1].setSelected(false)
              }
              new_elements[i] = new com.fujitsu.jcf.gui.JCFSelectableElement(
                old_elements[i - 1],
              )
            }
          }
          break
        case 99999 /* LAST_ELEMENT */:
          for (i = 0; i < new_size - 1; i++) {
            {
              if (select === true) {
                old_elements[i].setSelected(false)
              }
              new_elements[i] = new com.fujitsu.jcf.gui.JCFSelectableElement(
                old_elements[i],
              )
            }
          }
          element = new com.fujitsu.jcf.gui.JCFSelectableElement(
            dsp_text,
            id,
            select,
          )
          new_elements[new_size - 1] = element
          break
        default:
          let x: number = 0
          for (i = 0; i < new_size; i++) {
            {
              if (i === index) {
                new_elements[i] = new com.fujitsu.jcf.gui.JCFSelectableElement(
                  dsp_text,
                  id,
                  select,
                )
              } else {
                new_elements[i] = new com.fujitsu.jcf.gui.JCFSelectableElement(
                  old_elements[x++],
                )
              }
            }
          }
          break
      }
      return new_elements
    }

    /**
     * パラメータにて指定されたSelectableElement配列の指定された位置にSelectableElementを追加した結果のSelectableElementの配列を応答します。
     *
     * @param {com.fujitsu.jcf.gui.JCFSelectableElement[]} elements 追加元のエレメントの配列
     * @param {string} id ＩＤ文字列
     * @param {string} text 追加するテキスト文字列
     * @param {boolean} select 選択有無
     * @param {number} insert_index アイテムを挿入インデックス
     * FIRST_ELEMENT:先頭のエレメントを選択, LAST_ELEMENT:末尾のエレメントを選択
     * ALL_ELEMENT:全てのエレメントを選択, NOT_ELEMENT:選択なし, その他:任意のインテックスを選択）
     * @param {boolean} dsp_id trueの場合、表示テキストを”テキスト(ＩＤ)”の書式にて設定します。
     * @return {com.fujitsu.jcf.gui.JCFSelectableElement[]} ＪＣＦ選択エレメントの配列
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     *
     */
    public createSelectableElement(
      elements?: any,
      id?: any,
      text?: any,
      select?: any,
      insert_index?: any,
      dsp_id?: any,
    ): com.fujitsu.jcf.gui.JCFSelectableElement[] {
      if (
        ((elements != null &&
          elements instanceof <any>Array &&
          (elements.length == 0 ||
            elements[0] == null ||
            (elements[0] != null &&
              elements[0] instanceof
                <any>com.fujitsu.jcf.gui.JCFSelectableElement))) ||
          elements === null) &&
        (typeof id === 'string' || id === null) &&
        (typeof text === 'string' || text === null) &&
        (typeof select === 'boolean' || select === null) &&
        (typeof insert_index === 'number' || insert_index === null) &&
        (typeof dsp_id === 'boolean' || dsp_id === null)
      ) {
        return <any>(
          this.createSelectableElement$com_fujitsu_jcf_gui_JCFSelectableElement_A$java_lang_String$java_lang_String$boolean$int$boolean(
            elements,
            id,
            text,
            select,
            insert_index,
            dsp_id,
          )
        )
      } else if (
        ((elements != null &&
          elements instanceof <any>Array &&
          (elements.length == 0 ||
            elements[0] == null ||
            elements[0] != null)) ||
          elements === null) &&
        (typeof id === 'string' || id === null) &&
        (typeof text === 'string' || text === null) &&
        (typeof select === 'number' || select === null) &&
        (typeof insert_index === 'boolean' || insert_index === null) &&
        dsp_id === undefined
      ) {
        return <any>(
          this.createSelectableElement$java_util_HashMap_A$java_lang_String$java_lang_String$int$boolean(
            elements,
            id,
            text,
            select,
            insert_index,
          )
        )
      } else if (
        ((elements != null &&
          elements instanceof <any>Array &&
          (elements.length == 0 ||
            elements[0] == null ||
            typeof elements[0] === 'string')) ||
          elements === null) &&
        ((id != null &&
          id instanceof <any>Array &&
          (id.length == 0 || id[0] == null || typeof id[0] === 'string')) ||
          id === null) &&
        (typeof text === 'number' || text === null) &&
        (typeof select === 'boolean' || select === null) &&
        insert_index === undefined &&
        dsp_id === undefined
      ) {
        return <any>(
          this.createSelectableElement$java_lang_String_A$java_lang_String_A$int$boolean(
            elements,
            id,
            text,
            select,
          )
        )
      } else throw new Error('invalid overload')
    }

    /**
     * 選択されたSelectableElementの先頭のインデックスを取得
     *
     * @param {com.fujitsu.jcf.gui.JCFSelectableElement[]} elements 検索対象のSelectableElementの配列
     * @return {number} 選択されたSelectableElementの先頭のインデックス
     */
    getSelectedIndex(
      elements: com.fujitsu.jcf.gui.JCFSelectableElement[],
    ): number {
      if (elements == null) {
        return -1
      }
      for (let i: number = 0; i < elements.length; i++) {
        {
          if (elements[i].isSelected() === true) {
            return i
          }
        }
      }
      return this.NOT_ELEMENT
    }

    /**
     * パラメータに指定された比較値、比較タイプによって、SelectabelElementの情報と比較し、
     * 一致するアイテムをすべて選択状態に設定します。
     *
     * @param {com.fujitsu.jcf.gui.JCFSelectableElement[]} elements
     * @param {string} comp_value
     * @param {number} comp_type
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @private
     */
    /*private*/ setSelectedElement(
      elements: com.fujitsu.jcf.gui.JCFSelectableElement[],
      comp_value: string,
      comp_type: number,
    ) {
      let fgSelect: boolean = false
      if (elements == null) {
        return
      }
      let i: number = 0
      let wk_value: string = null
      switch (comp_type) {
        case 1 /* COMP_TEXT */:
          for (i = 0; i < elements.length; i++) {
            {
              wk_value = elements[i].getText()
              if (wk_value == null) {
                continue
              }
              if ((wk_value === comp_value) === true) {
                elements[i].setSelected(true)
                fgSelect = true
              } else {
                elements[i].setSelected(false)
              }
            }
          }
          break
        case 2 /* COMP_ID */:
          for (i = 0; i < elements.length; i++) {
            {
              wk_value = elements[i].getID()
              if (wk_value == null) {
                continue
              }
              if ((wk_value === comp_value) === true) {
                elements[i].setSelected(true)
                fgSelect = true
              } else {
                elements[i].setSelected(false)
              }
            }
          }
          break
        default:
          break
      }
      if (fgSelect === false) {
        if (comp_type === this.COMP_ID) {
          com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
            '\u6307\u5b9a\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002(ID=' +
              comp_value +
              ')',
          )
        } else if (comp_type === this.COMP_TEXT) {
          com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
            '\u6307\u5b9a\u3055\u308c\u305f\u30a2\u30a4\u30c6\u30e0\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002(TEXT=' +
              comp_value +
              ')',
          )
        }
      }
    }

    /**
     * スプレッドのセル情報の取得
     *
     * @return {com.fujitsu.jcf.gui.JCFSpreadCellPosition} イベントの発生時のスプレッドセルを取得します。
     * 事前に、setJCFParameterを行う必要があります。
     */
    getSpreadEventCellPosition(): com.fujitsu.jcf.gui.JCFSpreadCellPosition {
      const spread_info: com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo =
        this.getSpreadInfo()
      if (spread_info == null) {
        return null
      }
      return spread_info.getCellPosition()
    }

    public getSpreadCellSelectableElement$java_lang_String$int$int(
      itemId: string,
      row: number,
      col: number,
    ): com.fujitsu.jcf.gui.JCFSelectableElement[] {
      const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData =
        this.getSpreadData$java_lang_String(itemId)
      if (spread == null) {
        return null
      }
      return this.getSpreadCellSelectableElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
        spread,
        row,
        col,
      )
    }

    /**
     * アイテムＩＤを元に、スプレッドセルのSelectableElementを取得します。
     *
     * @param {string} itemId スプレッドのアイテムＩＤ
     * @param {number} row 取得する行インデックス（０〜）
     * @param {number} col 取得する列インデックス（０〜）
     *
     * @exception JCFDataIllegalArgumentException	ＣＪＦで例外が発生した���合にスロー���れる例外オブジェクト
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生��た場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例�����������が発生した場合にスローされる例外オブジェクト
     * @return {com.fujitsu.jcf.gui.JCFSelectableElement[]}
     */
    public getSpreadCellSelectableElement(
      itemId?: any,
      row?: any,
      col?: any,
    ): com.fujitsu.jcf.gui.JCFSelectableElement[] {
      if (
        (typeof itemId === 'string' || itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null)
      ) {
        return <any>(
          this.getSpreadCellSelectableElement$java_lang_String$int$int(
            itemId,
            row,
            col,
          )
        )
      } else if (
        ((itemId != null &&
          itemId instanceof <any>com.fujitsu.jcf.gui.JCFSpreadData) ||
          itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null)
      ) {
        return <any>(
          this.getSpreadCellSelectableElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
            itemId,
            row,
            col,
          )
        )
      } else throw new Error('invalid overload')
    }

    getSpreadCellSelectableElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
      spread: com.fujitsu.jcf.gui.JCFSpreadData,
      row: number,
      col: number,
    ): com.fujitsu.jcf.gui.JCFSelectableElement[] {
      if (spread == null) {
        return null
      }
      return spread.getCellSelectableElementValue(row, col)
    }

    public getSpreadCellSelectedElement$java_lang_String$int$int(
      itemId: string,
      row: number,
      col: number,
    ): com.fujitsu.jcf.gui.JCFSelectableElement {
      const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData =
        this.getSpreadData$java_lang_String(itemId)
      if (spread == null) {
        return null
      }
      return this.getSpreadCellSelectedElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
        spread,
        row,
        col,
      )
    }

    /**
     * アイテムＩＤを取得し、スプレッドセルの選択中のSelectableElementを取得します。
     *
     * @param {string} itemId スプレッドのアイテムＩＤ
     * @param {number} row 取得する行インデックス（０〜）
     * @param {number} col 取得する列インデックス（０〜）
     *
     * @exception JCFDataIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @return {com.fujitsu.jcf.gui.JCFSelectableElement}
     */
    public getSpreadCellSelectedElement(
      itemId?: any,
      row?: any,
      col?: any,
    ): com.fujitsu.jcf.gui.JCFSelectableElement {
      if (
        (typeof itemId === 'string' || itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null)
      ) {
        return <any>(
          this.getSpreadCellSelectedElement$java_lang_String$int$int(
            itemId,
            row,
            col,
          )
        )
      } else if (
        ((itemId != null &&
          itemId instanceof <any>com.fujitsu.jcf.gui.JCFSpreadData) ||
          itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null)
      ) {
        return <any>(
          this.getSpreadCellSelectedElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
            itemId,
            row,
            col,
          )
        )
      } else throw new Error('invalid overload')
    }

    getSpreadCellSelectedElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
      spread: com.fujitsu.jcf.gui.JCFSpreadData,
      row: number,
      col: number,
    ): com.fujitsu.jcf.gui.JCFSelectableElement {
      if (spread == null) {
        return null
      }
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        spread.getCellSelectableElementValue(row, col)
      if (elements == null) {
        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
          spread.getItemID() +
            '(' +
            row +
            ',' +
            col +
            '):\u9078\u629e\u30a2\u30a4\u30c6\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5b58\u5728\u3057\u307e\u305b\u3093\u3002',
        )
        return new com.fujitsu.jcf.gui.JCFSelectableElement()
      }
      const index: number = this.getSelectedIndex(elements)
      if (index < 0) {
        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
          spread.getItemID() +
            '(' +
            row +
            ',' +
            col +
            '):\u30a2\u30a4\u30c6\u30e0\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002',
        )
        return new com.fujitsu.jcf.gui.JCFSelectableElement()
      }
      return elements[index]
    }

    public setSpreadCellSelectedByText$java_lang_String$int$int$java_lang_String(
      itemId: string,
      row: number,
      col: number,
      text: string,
    ) {
      const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData =
        this.getSpreadData$java_lang_String(itemId)
      if (spread == null) {
        return
      }
      this.setSpreadCellSelectedByText$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$java_lang_String(
        spread,
        row,
        col,
        text,
      )
    }

    /**
     * 表示テキストを指定にて、指定したスプレッドセルのSelectableElementを選択します。
     *
     * @param {string} itemId スプレッドのアイテムＩＤ
     * @param {number} row 取得する行インデックス（０〜）
     * @param {number} col 取得する列インデックス（０〜）
     * @param {string} text 選択するテキスト
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public setSpreadCellSelectedByText(
      itemId?: any,
      row?: any,
      col?: any,
      text?: any,
    ) {
      if (
        (typeof itemId === 'string' || itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null) &&
        (typeof text === 'string' || text === null)
      ) {
        return <any>(
          this.setSpreadCellSelectedByText$java_lang_String$int$int$java_lang_String(
            itemId,
            row,
            col,
            text,
          )
        )
      } else if (
        ((itemId != null &&
          itemId instanceof
            <any>com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData) ||
          itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null) &&
        (typeof text === 'string' || text === null)
      ) {
        return <any>(
          this.setSpreadCellSelectedByText$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$java_lang_String(
            itemId,
            row,
            col,
            text,
          )
        )
      } else throw new Error('invalid overload')
    }

    setSpreadCellSelectedByText$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$java_lang_String(
      spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData,
      row: number,
      col: number,
      text: string,
    ) {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.getSpreadCellSelectableElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
          spread,
          row,
          col,
        )
      if (elements == null) {
        return
      }
      this.setSelectedElement(elements, text, this.COMP_TEXT)
      spread.setCellValue$int$int$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        row,
        col,
        elements,
      )
    }

    public setSpreadCellSelectedByID$java_lang_String$int$int$java_lang_String(
      itemId: string,
      row: number,
      col: number,
      id: string,
    ) {
      const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData =
        this.getSpreadData$java_lang_String(itemId)
      if (spread == null) {
        return
      }
      this.setSpreadCellSelectedByID$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$java_lang_String(
        spread,
        row,
        col,
        id,
      )
    }

    /**
     * ＩＤを指定にて、指定したスプレッドセルのSelectableElementを選択します。
     *
     * @param {string} itemId スプレッドのアイテムＩＤ
     * @param {number} row 取得する行インデックス（０〜）
     * @param {number} col 取得する列インデックス（０〜）
     * @param {string} id 選択するＩＤ
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public setSpreadCellSelectedByID(
      itemId?: any,
      row?: any,
      col?: any,
      id?: any,
    ) {
      if (
        (typeof itemId === 'string' || itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null) &&
        (typeof id === 'string' || id === null)
      ) {
        return <any>(
          this.setSpreadCellSelectedByID$java_lang_String$int$int$java_lang_String(
            itemId,
            row,
            col,
            id,
          )
        )
      } else if (
        ((itemId != null &&
          itemId instanceof
            <any>com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData) ||
          itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null) &&
        (typeof id === 'string' || id === null)
      ) {
        return <any>(
          this.setSpreadCellSelectedByID$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$java_lang_String(
            itemId,
            row,
            col,
            id,
          )
        )
      } else throw new Error('invalid overload')
    }

    setSpreadCellSelectedByID$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$java_lang_String(
      spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData,
      row: number,
      col: number,
      id: string,
    ) {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.getSpreadCellSelectableElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
          spread,
          row,
          col,
        )
      if (elements == null) {
        return
      }
      this.setSelectedElement(elements, id, this.COMP_ID)
      spread.setCellValue$int$int$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        row,
        col,
        elements,
      )
    }

    public setSpreadCellSelectedByIndex$java_lang_String$int$int$int(
      itemId: string,
      row: number,
      col: number,
      index: number,
    ) {
      const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData =
        this.getSpreadData$java_lang_String(itemId)
      if (spread == null) {
        return
      }
      this.setSpreadCellSelectedByIndex$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$int(
        spread,
        row,
        col,
        index,
      )
    }

    /**
     * インデックスを指定にて、指定したスプレッドセルのSelectableElementを選択します。
     *
     * @param {string} itemId スプレッドのアイテムＩＤ
     * @param {number} row 取得する行インデックス（０〜）
     * @param {number} col 取得する列インデックス（０〜）
     * @param {number} index 選択するインデックス（０〜）
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public setSpreadCellSelectedByIndex(
      itemId?: any,
      row?: any,
      col?: any,
      index?: any,
    ) {
      if (
        (typeof itemId === 'string' || itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null) &&
        (typeof index === 'number' || index === null)
      ) {
        return <any>(
          this.setSpreadCellSelectedByIndex$java_lang_String$int$int$int(
            itemId,
            row,
            col,
            index,
          )
        )
      } else if (
        ((itemId != null &&
          itemId instanceof
            <any>com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData) ||
          itemId === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null) &&
        (typeof index === 'number' || index === null)
      ) {
        return <any>(
          this.setSpreadCellSelectedByIndex$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$int(
            itemId,
            row,
            col,
            index,
          )
        )
      } else throw new Error('invalid overload')
    }

    setSpreadCellSelectedByIndex$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$int(
      spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData,
      row: number,
      col: number,
      index: number,
    ) {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.getSpreadCellSelectableElement$com_fujitsu_jcf_gui_JCFSpreadData$int$int(
          spread,
          row,
          col,
        )
      if (elements == null || index < 0) {
        return
      }
      if (elements.length < index) {
        return
      }
      for (let i: number = 0; i < elements.length; i++) {
        {
          if (i === index) {
            elements[i].setSelected(true)
          } else {
            elements[i].setSelected(false)
          }
        }
      }
      spread.setCellValue$int$int$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        row,
        col,
        elements,
      )
    }

    /**
     * 指定した列のSelectableElementを設定します。
     *
     * @param {string} itemId スプレッドのアイテムＩＤ
     * @param {number} col 列インデックス（０〜）
     * @param {com.fujitsu.jcf.gui.JCFSelectableElement[]} elements 設定するSelectableElement
     *
     * @exception JCFDataIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    setSpreadSelectableElement(
      itemId: string,
      col: number,
      elements: com.fujitsu.jcf.gui.JCFSelectableElement[],
    ) {
      const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData =
        this.getSpreadData$java_lang_String(itemId)
      if (spread == null) {
        return
      }
      spread.setColumnInformationSelectableElements(col, elements)
    }

    public setSpreadCellEditable$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$boolean(
      spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData,
      row: number,
      col: number,
      editable: boolean,
    ) {
      if (spread == null) {
        return
      }
      spread.setCellEditable(row, col, editable)
    }

    /**
     * 指定したセルの編集可不可を設定します。
     *
     * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spread スプレッドデータクラス
     * @param {number} row 取得する行インデックス（０〜）
     * @param {number} col 取得する列インデックス（０〜）
     * @param {boolean} editable true:編集可, false:編集不可
     *
     * @exception JCFDataIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalStateException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFIllegalArgumentException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public setSpreadCellEditable(
      spread?: any,
      row?: any,
      col?: any,
      editable?: any,
    ) {
      if (
        ((spread != null &&
          spread instanceof
            <any>com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData) ||
          spread === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null) &&
        (typeof editable === 'boolean' || editable === null)
      ) {
        return <any>(
          this.setSpreadCellEditable$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int$int$boolean(
            spread,
            row,
            col,
            editable,
          )
        )
      } else if (
        (typeof spread === 'string' || spread === null) &&
        (typeof row === 'number' || row === null) &&
        (typeof col === 'number' || col === null) &&
        (typeof editable === 'boolean' || editable === null)
      ) {
        return <any>(
          this.setSpreadCellEditable$java_lang_String$int$int$boolean(
            spread,
            row,
            col,
            editable,
          )
        )
      } else throw new Error('invalid overload')
    }

    setSpreadCellEditable$java_lang_String$int$int$boolean(
      itemId: string,
      row: number,
      col: number,
      editable: boolean,
    ) {
      const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData =
        this.getSpreadData$java_lang_String(itemId)
      if (spread == null) {
        return
      }
      spread.setCellEditable(row, col, editable)
    }

    setSelectableElement$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(
      itemId: string,
      elements: com.fujitsu.jcf.gui.JCFSelectableElement[],
    ): boolean {
      const item: com.fujitsu.jcf.gui.JCFItemData =
        this.getItemData$java_lang_String(itemId)
      if (itemId == null) {
        return false
      }
      if (
        /* isInstance */ ((c: any, o: any) => {
          if (typeof c === 'string')
            return (
              (o.constructor &&
                o.constructor['__interfaces'] &&
                o.constructor['__interfaces'].indexOf(c) >= 0) ||
              (o['__interfaces'] && o['__interfaces'].indexOf(c) >= 0)
            )
          else if (typeof c === 'function')
            return o instanceof c || (o.constructor && o.constructor === c)
        })(com.fujitsu.jcf.gui.JCFComboBoxData, item) === true
      ) {
        const combo: com.fujitsu.jcf.gui.JCFComboBoxData = <
          com.fujitsu.jcf.gui.JCFComboBoxData
        >item
        combo.setValue$com_fujitsu_jcf_gui_JCFSelectableElement_A(elements)
      } else if (
        /* isInstance */ ((c: any, o: any) => {
          if (typeof c === 'string')
            return (
              (o.constructor &&
                o.constructor['__interfaces'] &&
                o.constructor['__interfaces'].indexOf(c) >= 0) ||
              (o['__interfaces'] && o['__interfaces'].indexOf(c) >= 0)
            )
          else if (typeof c === 'function')
            return o instanceof c || (o.constructor && o.constructor === c)
        })(com.fujitsu.jcf.gui.JCFListBoxData, item) === true
      ) {
        const list: com.fujitsu.jcf.gui.JCFListBoxData = <
          com.fujitsu.jcf.gui.JCFListBoxData
        >item
        list.setValue$com_fujitsu_jcf_gui_JCFSelectableElement_A(elements)
      } else {
        return false
      }
      return true
    }

    /**
     * 指定されたアイテムＩＤより取得したSelectableElement配列に対して、
     * 指定された位置にSelectableElementを追加した結果のSelectableElement配列を、
     * 指定したアイテムＩＤの新しいSelectableElementに設定します。
     *
     * @param {string} itemId アイテムＩＤ
     * @param {string} id ＩＤ文字列
     * @param {string} text 追加するテキスト文字列
     * @param {boolean} select 選択有無
     * @param {number} insert_index アイテムを挿入インデックス
     * FIRST_ELEMENT:先頭のエレメントを選択, LAST_ELEMENT:末尾のエレメントを選択
     * ALL_ELEMENT:全てのエレメントを選択, NOT_ELEMENT:選択なし, その他:任意のインテックスを選択）
     * @param {boolean} dsp_id trueの場合、表示テキストを”テキスト(ＩＤ)”の書式にて設定します。
     * @return {boolean} ＪＣＦ選択エレメントの配列
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    insertSelectableElement(
      itemId: string,
      id: string,
      text: string,
      select: boolean,
      insert_index: number,
      dsp_id: boolean,
    ): boolean {
      let elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.getSelectableElement(itemId)
      if (elements == null) {
        elements = [null]
      }
      const new_elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.createSelectableElement$com_fujitsu_jcf_gui_JCFSelectableElement_A$java_lang_String$java_lang_String$boolean$int$boolean(
          elements,
          id,
          text,
          select,
          insert_index,
          dsp_id,
        )
      return this.setSelectableElement$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        itemId,
        new_elements,
      )
    }

    public setSelectableElement$java_lang_String$java_util_HashMap_A$java_lang_String$java_lang_String$int$boolean(
      itemId: string,
      mapData: any[],
      keyId: string,
      keyText: string,
      select_index: number,
      dsp_id: boolean,
    ): boolean {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.createSelectableElement$java_util_HashMap_A$java_lang_String$java_lang_String$int$boolean(
          mapData,
          keyId,
          keyText,
          select_index,
          dsp_id,
        )
      if (elements == null) {
        return false
      }
      return this.setSelectableElement$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        itemId,
        elements,
      )
    }

    /**
     * ハッシュマップよりSelectableElementを作成します。
     *
     * @param {string} itemId アイテムＩＤ
     * @param {java.util.HashMap[]} mapData データ作成元のハッシュマップ配列
     * @param {string} keyId ＩＤを取得するハッシュマップのキー
     * @param {string} keyText テキストを取得するハッシュマップのキー
     * @param {number} select_index 選択するアイテムインデックス
     * FIRST_ELEMENT:先頭のエレメントを選択, LAST_ELEMENT:末尾のエレメントを選択
     * ALL_ELEMENT:全てのエレメントを選択, NOT_ELEMENT:選択なし, その他:任意のインテックスを選択）
     * @param {boolean} dsp_id trueの場合、表示テキストを”テキスト(ＩＤ)”の書式にて設定します。
     * @return {boolean} ＪＣＦ選択エレメントの配列
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public setSelectableElement(
      itemId?: any,
      mapData?: any,
      keyId?: any,
      keyText?: any,
      select_index?: any,
      dsp_id?: any,
    ): boolean {
      if (
        (typeof itemId === 'string' || itemId === null) &&
        ((mapData != null &&
          mapData instanceof <any>Array &&
          (mapData.length == 0 || mapData[0] == null || mapData[0] != null)) ||
          mapData === null) &&
        (typeof keyId === 'string' || keyId === null) &&
        (typeof keyText === 'string' || keyText === null) &&
        (typeof select_index === 'number' || select_index === null) &&
        (typeof dsp_id === 'boolean' || dsp_id === null)
      ) {
        return <any>(
          this.setSelectableElement$java_lang_String$java_util_HashMap_A$java_lang_String$java_lang_String$int$boolean(
            itemId,
            mapData,
            keyId,
            keyText,
            select_index,
            dsp_id,
          )
        )
      } else if (
        (typeof itemId === 'string' || itemId === null) &&
        ((mapData != null &&
          mapData instanceof <any>Array &&
          (mapData.length == 0 ||
            mapData[0] == null ||
            typeof mapData[0] === 'string')) ||
          mapData === null) &&
        ((keyId != null &&
          keyId instanceof <any>Array &&
          (keyId.length == 0 ||
            keyId[0] == null ||
            typeof keyId[0] === 'string')) ||
          keyId === null) &&
        (typeof keyText === 'number' || keyText === null) &&
        (typeof select_index === 'boolean' || select_index === null) &&
        dsp_id === undefined
      ) {
        return <any>(
          this.setSelectableElement$java_lang_String$java_lang_String_A$java_lang_String_A$int$boolean(
            itemId,
            mapData,
            keyId,
            keyText,
            select_index,
          )
        )
      } else if (
        (typeof itemId === 'string' || itemId === null) &&
        ((mapData != null &&
          mapData instanceof <any>Array &&
          (mapData.length == 0 ||
            mapData[0] == null ||
            (mapData[0] != null &&
              mapData[0] instanceof
                <any>com.fujitsu.jcf.gui.JCFSelectableElement))) ||
          mapData === null) &&
        keyId === undefined &&
        keyText === undefined &&
        select_index === undefined &&
        dsp_id === undefined
      ) {
        return <any>(
          this.setSelectableElement$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(
            itemId,
            mapData,
          )
        )
      } else throw new Error('invalid overload')
    }

    setSelectableElement$java_lang_String$java_lang_String_A$java_lang_String_A$int$boolean(
      itemId: string,
      id: string[],
      text: string[],
      select_index: number,
      dsp_id: boolean,
    ): boolean {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.createSelectableElement$java_lang_String_A$java_lang_String_A$int$boolean(
          id,
          text,
          select_index,
          dsp_id,
        )
      if (elements == null) {
        return false
      }
      return this.setSelectableElement$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        itemId,
        elements,
      )
    }

    /**
     * 指定されたアイテムＩＤのSelectableElement配列を取得します。
     * 対象コントロール（コンボボックス、リストボックス）
     *
     * @param {string} itemId アイテムＩＤ
     * @return {com.fujitsu.jcf.gui.JCFSelectableElement[]} 現在設定されているSelectableElement
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     *
     */
    getSelectableElement(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFSelectableElement[] {
      let elements: com.fujitsu.jcf.gui.JCFSelectableElement[] = null
      const item: com.fujitsu.jcf.gui.JCFItemData =
        this.getItemData$java_lang_String(itemId)
      if (item == null) {
        return elements
      }
      if (
        /* isInstance */ ((c: any, o: any) => {
          if (typeof c === 'string')
            return (
              (o.constructor &&
                o.constructor['__interfaces'] &&
                o.constructor['__interfaces'].indexOf(c) >= 0) ||
              (o['__interfaces'] && o['__interfaces'].indexOf(c) >= 0)
            )
          else if (typeof c === 'function')
            return o instanceof c || (o.constructor && o.constructor === c)
        })(com.fujitsu.jcf.gui.JCFComboBoxData, item) === true
      ) {
        const combo: com.fujitsu.jcf.gui.JCFComboBoxData = <
          com.fujitsu.jcf.gui.JCFComboBoxData
        >item
        elements = combo.getSelectableElementValue()
      } else if (
        /* isInstance */ ((c: any, o: any) => {
          if (typeof c === 'string')
            return (
              (o.constructor &&
                o.constructor['__interfaces'] &&
                o.constructor['__interfaces'].indexOf(c) >= 0) ||
              (o['__interfaces'] && o['__interfaces'].indexOf(c) >= 0)
            )
          else if (typeof c === 'function')
            return o instanceof c || (o.constructor && o.constructor === c)
        })(com.fujitsu.jcf.gui.JCFListBoxData, item) === true
      ) {
        const list: com.fujitsu.jcf.gui.JCFListBoxData = <
          com.fujitsu.jcf.gui.JCFListBoxData
        >item
        elements = list.getSelectableElementValue()
      }
      return elements
    }

    /**
     * 指定したアイテムＩＤのSelectableElementを取得し、
     * 指定した表示テキストを持つSelectableElementを選択状態にします。
     *
     * @param {string} itemId アイテムＩＤ
     * @param {string} text 選択する表示テキスト
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    setSelectedByText(itemId: string, text: string) {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.getSelectableElement(itemId)
      this.setSelectedElement(elements, text, this.COMP_TEXT)
      this.setSelectableElement$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        itemId,
        elements,
      )
    }

    /**
     * 指定したアイテムＩＤのSelectableElementを取得し、
     * 指定したＩＤを持つSelectableElementを選択状態にします。
     *
     * @param {string} itemId アイテムＩＤ
     * @param {string} id 選択するＩＤ
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    setSelectedByID(itemId: string, id: string) {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.getSelectableElement(itemId)
      this.setSelectedElement(elements, id, this.COMP_ID)
      this.setSelectableElement$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        itemId,
        elements,
      )
    }

    /**
     * 指定したアイテムＩＤのSelectableElementを取得し、
     * 指定したインデックスのSelectableElementを選択状態にします。
     *
     * @param {string} itemId アイテムＩＤ
     * @param {number} index 選択するインデックス（０〜）
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    setSelectedByIndex(itemId: string, index: number) {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.getSelectableElement(itemId)
      if (elements == null || index < 0) {
        return
      }
      if (elements.length < index) {
        return
      }
      const item: com.fujitsu.jcf.gui.JCFItemData =
        this.getItemData$java_lang_String(itemId)
      if (item == null) {
        return
      }
      for (let i: number = 0; i < elements.length; i++) {
        {
          if (i === index) {
            elements[i].setSelected(true)
          } else {
            elements[i].setSelected(false)
          }
        }
      }
      this.setSelectableElement$java_lang_String$com_fujitsu_jcf_gui_JCFSelectableElement_A(
        itemId,
        elements,
      )
    }

    /**
     * 指定したアイテムＩＤの選択中のSelectableElementを取得します。
     *
     * @param {string} itemId アイテムＩＤ
     *
     * @exception JCFException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @return {com.fujitsu.jcf.gui.JCFSelectableElement}
     */
    getSelectedElement(
      itemId: string,
    ): com.fujitsu.jcf.gui.JCFSelectableElement {
      const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] =
        this.getSelectableElement(itemId)
      if (elements == null) {
        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
          itemId +
            ':\u9078\u629e\u30a2\u30a4\u30c6\u30e0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5b58\u5728\u3057\u307e\u305b\u3093\u3002',
        )
        return new com.fujitsu.jcf.gui.JCFSelectableElement()
      }
      const index: number = this.getSelectedIndex(elements)
      if (index < 0) {
        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(
          itemId +
            ':\u30a2\u30a4\u30c6\u30e0\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002',
        )
        return new com.fujitsu.jcf.gui.JCFSelectableElement()
      }
      return elements[index]
    }

    /**
     * パネル生成後
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public afterCreate(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
      this.setPanel()
    }

    /**
     * 表示前
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public beforeDisplay(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
      this.setScreenID(event.getScreenID())
    }

    /**
     * 入力前
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public beforeInput(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * 戻り遷移表示前
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public refresh(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * システム異常
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public system_error(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
      try {
        super.error(event, context, returnInfo)
      } catch (th) {
        super.callErrorAdapter(context, th)
      }
    }

    /**
     * F1、フッタボタン１
     *
     * @param {JCFEventLib.com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {JCFContextLib.com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {JCFReturnInfoLib.com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f1(
      event: JCFEventLib.com.fujitsu.jcf.ctrl.JCFEvent,
      context: JCFContextLib.com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: JCFReturnInfoLib.com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F2、フッタボタン２
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f2(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F3、フッタボタン３
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f3(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F4、フッタボタン４
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f4(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F5、フッタボタン５
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f5(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F6、フッタボタン６
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f6(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F7、フッタボタン７
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f7(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F8、フッタボタン８
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f8(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F9、フッタボタン９
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public f9(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * 他項目クリック
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public itemClick(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * 項目脱出
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public lostFocus(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * F11、ヘッダボタン２
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public menu(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
      super.returnMainMenu(event, context, returnInfo)
    }

    /**
     * F10、ヘッダボタン１
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public back(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
      super.returnSubMenu(event, context, returnInfo)
    }

    /**
     * F12、ヘッダボタン３
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public exit(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
      super.exitSystem(event, context, returnInfo)
    }

    /**
     * エンターキー
     *
     * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public enter(
      event: com.fujitsu.jcf.ctrl.JCFEvent,
      context: com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      this.setJCFParameter(event, context, returnInfo)
    }

    /**
     * ＮＵＬＬを空欄の置き換える。
     * @param {string} str
     * @return {string}
     */
    public nullConventEmpty(str: string): string {
      if (str == null) {
        str = ''
      }
      return str
    }

    /**
     * 小数点以下桁数０設定
     * @param {string} itemId アイテムＩＤ
     * @param カラムインデックス[0]、桁数[1]の配列
     * @param {int[][]} column_padding
     */
    setZeroPaddingDecimal(itemId: string, column_padding: number[][]) {
      try {
        const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData =
          this.getSpreadData$java_lang_String(itemId)
        for (let i: number = 0; i < column_padding.length; i++) {
          {
            const name: string = spread.getColumnInformationName(
              column_padding[i][0],
            )
            spread.setZeroPaddingDecimal(name, column_padding[i][1])
          }
        }
      } catch (th) {
        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error(
          'setZeroPaddingDecimal:' + th.message,
        )
      }
    }

    /**
     *
     * spreadの指定行の背景色を設定する
     *
     * @param {com.fujitsu.jcf.gui.JCFSpreadData} spread 背景色の変更対象のスプレッドオブジェクト
     * @param {java.lang.String[]} rowNumList 背景色変更行番号リスト
     * @param {com.java.Color} bgColor 指定背景色
     *
     * @throws JCFDataIllegalArgumentException
     *
     * @return {boolean}
     */
    public setSpreadBackGroundColor(
      spread: com.fujitsu.jcf.gui.JCFSpreadData,
      rowNumList: string[],
      bgColor: com.java.Color,
    ): boolean {
      if (null == rowNumList || rowNumList.length <= 0) {
        return false
      }
      for (let i: number = 0; i < rowNumList.length; i++) {
        {
          this.setSpreadRowBackGroundColor(
            spread,
            /* parseInt */ parseInt(rowNumList[i]),
            bgColor,
          )
        }
      }
      return true
    }

    /**
     *
     * spreadの1行分の背景色を設定する
     *
     * @param {com.fujitsu.jcf.gui.JCFSpreadData} spread 背景色の変更対象のスプレッドオブジェクト
     * @param {number} rowNum 背景色変更行番号
     * @param {com.java.Color} bgColor 指定背景色
     *
     * @throws JCFDataIllegalArgumentException
     *
     */
    public setSpreadRowBackGroundColor(
      spread: com.fujitsu.jcf.gui.JCFSpreadData,
      rowNum: number,
      bgColor: com.java.Color,
    ) {
      for (let colNum: number = 0; colNum < spread.getColumnCount(); colNum++) {
        {
          spread.setCellBackground(rowNum, colNum, bgColor)
        }
      }
    }

    constructor() {
      super()
      this.ctxt = null
      this.evnt = null
      this.rinf = null
      this.SCREEN_ID = 'SCREEN_ID'
      this.PANEL_INSTANCE = 'PANEL_INSTANCE'
      this.panel = null
      this.NOT_ELEMENT = -1
      this.FIRST_ELEMENT = 0
      this.GET_FIRST_ELEMENT = 1
      this.LAST_ELEMENT = 99999
      this.ALL_ELEMENT = -99999
      this.COMP_TEXT = 1
      this.COMP_ID = 2
    }
  }
}
