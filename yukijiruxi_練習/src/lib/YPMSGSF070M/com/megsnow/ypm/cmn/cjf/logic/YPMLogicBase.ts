import { lib as SMSLoginInfoImplLib } from '@/lib/YPMSGSF070M/com/fujitsu/sms/sol/sys/SMSLoginInfoImpl'
import { lib as YPMLogicBaseRelLib} from '@/lib/YPMSGSF070M/com/megsnow/ypm/cmn/cjf/logic/YPMLogicBaseRel'

/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.megsnow.ypm.cmn.cjf.logic {
    /**
     * YPMLogicBase クラスです。
     * 
     * @author  富士通）高木
     * @version
     * @class
     * @extends lib.com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel
     */
    export abstract class YPMLogicBase extends YPMLogicBaseRelLib.com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel {
        /**
         * フッタボタンアイテムID
         */
        /*private*/ FOOTER_BUTTONS: string[];

        /**
         * ヘッダボタンアイテムID
         */
        /*private*/ HEADER_BUTTONS: string[];

        /**
         * ハッシュキー：VISIBLE
         */
        /*private*/ IS_VISIBLE: string;

        /**
         * ハッシュキー：ENABLED
         */
        /*private*/ IS_ENABLED: string;

        /**
         * ハッシュキー：VALUE
         */
        /*private*/ VALUE: string;

        /**
         * Method ログイン情報を取得します。<BR>
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context CJFのコンテキスト
         * @return {com.fujitsu.sms.sol.sys.SMSLoginInfo} SMSLoginInfo ログイン情報
         */
        public getLoginInfo(context?: any): any {
            if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null)) {
                return super.getLoginInfo(context);
            } else if (context === undefined) {
                return <any>this.getLoginInfo$();
            } else throw new Error('invalid overload');
        }

        public getLoginInfo$(): SMSLoginInfoImplLib.com.fujitsu.sms.sol.sys.SMSLoginInfoImpl {
            // const info: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>this.getContext().getApplicationData(com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
            // return info;
            return new  SMSLoginInfoImplLib.com.fujitsu.sms.sol.sys.SMSLoginInfoImpl()
        }

        /**
         * 生産管理共通メッセージ情報
         * @return {lib.com.megsnow.ypm.cmn.YPMCommonInfo}
         */
        public getYPMCommonInfo(): lib.com.megsnow.ypm.cmn.YPMCommonInfo {
            const info: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = this.getLoginInfo$();
            if (info != null){
                return new lib.com.megsnow.ypm.cmn.YPMCommonInfo(info.getIfYPM());
            }
            return null;
        }

        /**
         * Method callEJB. ファンクションIDを指定してアダプタを呼び出し<BR>
         * EJB呼び出しを行います。<BR>
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context CJFのコンテキスト
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event イベントクラス
         * @param {string} functionID 呼び出したいアダプタのファンクションID
         * @param {string} cbsName 呼び出したいCBSのEJBアプリケーション名
         * @param {string} cbsVerb 呼び出したいCBSに渡すverb
         * @param {*} data CBSに渡すデータ
         * @return {*} HashMap EJB呼び出し結果データ
         * @throws Throwable
         */
        public callEJB(context?: any, event?: any, functionID?: any, cbsName?: any, cbsVerb?: any, data?: any): any {
            if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((event != null && event instanceof <any>com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && ((typeof functionID === 'string') || functionID === null) && ((typeof cbsName === 'string') || cbsName === null) && ((typeof cbsVerb === 'string') || cbsVerb === null) && ((data != null && (data instanceof Object)) || data === null)) {
                return super.callEJB(context, event, functionID, cbsName, cbsVerb, data);
            } else if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((event != null && event instanceof <any>com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && ((typeof functionID === 'string') || functionID === null) && ((typeof cbsName === 'string') || cbsName === null) && ((cbsVerb != null && (cbsVerb instanceof Object)) || cbsVerb === null) && data === undefined) {
                return <any>this.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, functionID, cbsName, cbsVerb);
            } else throw new Error('invalid overload');
        }

        callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context: com.fujitsu.jcf.ctrl.JCFContext, event: com.fujitsu.jcf.ctrl.JCFEvent, strCbs: string, strMethod: string, parameterMap: any): any {
            let returnMap: any = null;
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:callEJB() start");
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initInformation(context);
            returnMap = <any>super.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, strCbs, strMethod, parameterMap);
            if (((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>returnMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_SUCCESS) === false){
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = this.getLoginInfo$();
                if (loginInfo != null){
                    const cdMessage: string = loginInfo.getCdMessage();
                    const chikanMessage: string[] = loginInfo.getNmMessageChikan();
                    const fgPopup: boolean = /* booleanValue */loginInfo.getFgPopup();
                    if (cdMessage != null && (cdMessage === com.fujitsu.sms.sol.sys.SMSMessageConst.YPMCMNMCI097) === true){
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>returnMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG, com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_SUCCESS);
                        this.setContext(context);
                        this.setMessage$java_lang_String("");
                    }
                }
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:callEJB() end");
            return returnMap;
        }

        setMessage$java_lang_String(message: string) {
            this.setMessage$com_fujitsu_jcf_ctrl_JCFEvent$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFReturnInfo$java_lang_String(this.getEvent(), this.getContext(), this.getReturnInfo(), message);
        }

        public setMessage$com_fujitsu_jcf_ctrl_JCFEvent$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFReturnInfo$java_lang_String(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo, message: string) {
            try {
                const screen: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const footer: com.fujitsu.jcf.gui.JCFPanelData = screen.getPanelData$java_lang_String(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.FRAME_FOOTER);
                const item: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>footer.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_MESSAGE);
                item.setValue(message);
            } catch(e) {
                console.error(e.message, e);
            }
        }

        /**
         * メッセージ表示
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event					ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context					ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
         * @param {string} message					メッセージ本文
         * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public setMessage(event?: any, context?: any, returnInfo?: any, message?: any) {
            if (((event != null && event instanceof <any>com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && ((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((returnInfo != null && returnInfo instanceof <any>com.fujitsu.jcf.ctrl.JCFReturnInfo) || returnInfo === null) && ((typeof message === 'string') || message === null)) {
                return <any>this.setMessage$com_fujitsu_jcf_ctrl_JCFEvent$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFReturnInfo$java_lang_String(event, context, returnInfo, message);
            } else if (((typeof event === 'string') || event === null) && context === undefined && returnInfo === undefined && message === undefined) {
                return <any>this.setMessage$java_lang_String(event);
            } else throw new Error('invalid overload');
        }

        /**
         * メッセージをInformation領域 or ポップアップ表示を表示する。
         * @param {string} messageId メッセージID
         * @param {java.lang.String[]} parameters 可変文字列
         * @param {boolean} fgPopup ポップアップフラグ
         * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @return {string}
         */
        showMessage(messageId: string, parameters: string[] | null, fgPopup: boolean): string {
            let ret: string = "";
            if (messageId == null || (messageId === ("")) === true)return ret;
            if (fgPopup === false){
                if (parameters == null){
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(this.getContext(), messageId);
                } else {
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(this.getContext(), messageId, parameters);
                }
            } else {
                const mw: com.fujitsu.jcf.ctrl.JCFMessageOnWindow = this.getContext().getMessageUtil();
                if (parameters == null){
                    ret = mw.showMessage$java_lang_String(messageId);
                } else {
                    ret = mw.showMessage$java_lang_String$java_lang_String_A(messageId, parameters);
                }
            }
            return ret;
        }

        /**
         * @see lib.com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel#beforeDisplay(JCFEvent, JCFContext, JCFReturnInfo)
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo
         */
        public beforeDisplay(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:beforeDisplay()-" + this.getGamenId() + " start");
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("getScreenID():" + this.getScreenID());
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("event.getScreenID():" + event.getScreenID());
                let event_screenId: string = event.getScreenID();
                if (event_screenId == null){
                    event_screenId = "";
                }
                if (this.getScreenID() == null || (this.getScreenID() === event_screenId) === false){
                    super.beforeDisplay(event, context, returnInfo);
                    this._init(event, false);
                }
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:beforeDisplay()-" + this.getGamenId() + " end");
            } catch(th) {
                this.callErrorAdapter(context, th);
            }
        }

        /**
         * @see lib.com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel#refresh(JCFEvent, JCFContext, JCFReturnInfo)
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo
         */
        public refresh(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:refresh()-" + this.getGamenId() + " start");
                super.refresh(event, context, returnInfo);
                this._init(event, true);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:refresh()-" + this.getGamenId() + " end");
            } catch(th) {
                this.callErrorAdapter(context, th);
            }
        }

        /**
         * 内部初期化メソッド
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
         * @param {boolean} arg
         * @private
         */
        /*private*/ _init(event: com.fujitsu.jcf.ctrl.JCFEvent, arg: boolean) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:_init()-" + this.getGamenId() + " start");
            if (this.getLoginInfo$() != null){
                this.setCdProgram(this.getContext(), this.getProgramId());
                this.setCdGamen(this.getContext(), this.getGamenId());
                this.setNmGamen(this.getContext(), this.getScreenName());
                this.setQtSaidaiKensaku(this.getContext(), this.getMaxSelectCount());
            }
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initHeader(this.getEvent(), this.getContext());
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initInformation(this.getContext());
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setHeaderTitle$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(this.getContext(), this.getScreenName(), this.getGamenId());
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setAllFooterButtonEnabled(this.getContext(), false);
            this.setHeaderFooter(arg);
            this.initControl(event, arg);
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:_init()-" + this.getGamenId() + " end");
        }

        /**
         * @see lib.com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel#back(JCFEvent, JCFContext, JCFReturnInfo)
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo
         */
        public back(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:back()-" + this.getGamenId() + " start");
                try {
                    const item: com.fujitsu.jcf.gui.JCFItemData = super.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(context, lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_HEAD, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.RETURN_BUTTON);
                    if (item != null){
                        if (item.isEnabled() === false){
                            returnInfo.cancelScreenTransition();
                            return;
                        }
                    }
                } catch(e) {
                    returnInfo.cancelScreenTransition();
                    return;
                }
                if (this.getChangeData() != null){
                    const result: string = this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_BACK_$LI$(), null, true);
                    if ((com.fujitsu.jcf.ctrl.JCFMessageOnWindow.BTN_NO === result) === true){
                        returnInfo.cancelScreenTransition();
                        return;
                    }
                }
                super.back(event, context, returnInfo);
                super.setScreenID(null);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:back()-" + this.getGamenId() + " end");
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
        }

        /**
         * @see lib.com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel#menu(JCFEvent, JCFContext, JCFReturnInfo)
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo
         */
        public menu(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:menu()-" + this.getGamenId() + " start");
                try {
                    const item: com.fujitsu.jcf.gui.JCFItemData = super.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(context, lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_HEAD, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.MENU_BUTTON);
                    if (item != null){
                        if (item.isEnabled() === false){
                            returnInfo.cancelScreenTransition();
                            return;
                        }
                    }
                } catch(e) {
                    returnInfo.cancelScreenTransition();
                    return;
                }
                if (this.getChangeData() != null){
                    const result: string = this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_MENU_$LI$(), null, true);
                    if ((com.fujitsu.jcf.ctrl.JCFMessageOnWindow.BTN_NO === result) === true){
                        returnInfo.cancelScreenTransition();
                        return;
                    }
                }
                super.menu(event, context, returnInfo);
                super.setScreenID(null);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:menu()-" + this.getGamenId() + " end");
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
        }

        /**
         * @see lib.com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel#exit(JCFEvent, JCFContext, JCFReturnInfo)
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo
         */
        public exit(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:exit()-" + this.getGamenId() + " start");
                try {
                    const item: com.fujitsu.jcf.gui.JCFItemData = super.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(context, lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_HEAD, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.EXIT_BUTTON);
                    if (item != null){
                        if (item.isEnabled() === false){
                            returnInfo.cancelScreenTransition();
                            return;
                        }
                    }
                } catch(e) {
                    returnInfo.cancelScreenTransition();
                }
                if (this.getChangeData() != null){
                    const result: string = this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_EXIT_$LI$(), null, true);
                    if ((com.fujitsu.jcf.ctrl.JCFMessageOnWindow.BTN_NO === result) === true){
                        returnInfo.cancelScreenTransition();
                        return;
                    }
                }
                super.exit(event, context, returnInfo);
                super.setScreenID(null);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("YPMLogicBase:exit()-" + this.getGamenId() + " end");
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
        }

        save$() {
            this.save$java_lang_String$java_lang_String_A(lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_FOOT, this.FOOTER_BUTTONS);
            this.save$java_lang_String$java_lang_String_A(lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_HEAD, this.HEADER_BUTTONS);
        }

        public save$java_lang_String$java_lang_String_A(frame_id: string, item_id: string[]) {
            const map: any = <any>({});
            let item: com.fujitsu.jcf.gui.JCFItemData = null;
            if (item_id == null){
                super.putUserData$java_lang_String$java_util_HashMap(this.getGamenId() + "_" + lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_FOOT, null);
                return;
            }
            for(let i: number = 0; i < item_id.length; i++) {{
                item = super.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(this.getContext(), frame_id, item_id[i]);
                if (item != null){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>map, item_id[i] + this.IS_VISIBLE, <boolean>new Boolean(item.isVisible()));
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>map, item_id[i] + this.IS_ENABLED, <boolean>new Boolean(item.isEnabled()));
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>map, item_id[i] + this.VALUE, item.getValue());
                }
            };}
            super.putUserData$java_lang_String$java_util_HashMap(this.getGamenId() + "_" + frame_id, map);
        }

        /**
         * 保存
         * @param {string} frame_id 保存するフレーム
         * @param {java.lang.String[]} item_id 保存するアイテムIDの配列
         * @exception Throwable 例外オブジェクト
         */
        public save(frame_id?: any, item_id?: any) {
            if (((typeof frame_id === 'string') || frame_id === null) && ((item_id != null && item_id instanceof <any>Array && (item_id.length == 0 || item_id[0] == null ||(typeof item_id[0] === 'string'))) || item_id === null)) {
                return <any>this.save$java_lang_String$java_lang_String_A(frame_id, item_id);
            } else if (frame_id === undefined && item_id === undefined) {
                return <any>this.save$();
            } else throw new Error('invalid overload');
        }

        load$() {
            this.load$java_lang_String$java_lang_String_A(lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_FOOT, this.FOOTER_BUTTONS);
            this.load$java_lang_String$java_lang_String_A(lib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_HEAD, this.HEADER_BUTTONS);
        }

        public load$java_lang_String$java_lang_String_A(frame_id: string, item_id: string[]) {
            const map: any = super.getUserData$java_lang_String(this.getGamenId() + "_" + frame_id);
            if (map != null){
                for(let i: number = 0; i < item_id.length; i++) {{
                    const item: com.fujitsu.jcf.gui.JCFItemData = this.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(this.getContext(), frame_id, item_id[i]);
                    if (item != null){
                        const visible: boolean = <boolean>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>map, item_id[i] + this.IS_VISIBLE);
                        if (visible != null){
                            item.setVisible(/* booleanValue */visible);
                        }
                        const enabled: boolean = <boolean>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>map, item_id[i] + this.IS_ENABLED);
                        if (enabled != null){
                            item.setEnabled(/* booleanValue */enabled);
                        }
                        const value: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>map, item_id[i] + this.VALUE);
                        if (value != null){
                            item.setValue(value);
                        }
                    }
                };}
            }
        }

        /**
         * 復元
         * @param {string} frame_id 復元するフレーム
         * @param {java.lang.String[]} item_id 復元するアイテムIDの配列
         * @exception Throwable 例外オブジェクト
         */
        public load(frame_id?: any, item_id?: any) {
            if (((typeof frame_id === 'string') || frame_id === null) && ((item_id != null && item_id instanceof <any>Array && (item_id.length == 0 || item_id[0] == null ||(typeof item_id[0] === 'string'))) || item_id === null)) {
                return <any>this.load$java_lang_String$java_lang_String_A(frame_id, item_id);
            } else if (frame_id === undefined && item_id === undefined) {
                return <any>this.load$();
            } else throw new Error('invalid overload');
        }

        /**
         * 他サブシステム画面遷移
         * @param {string} goSubsystemId 遷移先サブシステムＩＤ（ＣＪＦ内部の）
         * @param {string} goUsecaseId 遷移先ユースケースＩＤ
         * @param data 受け渡すデータ
         * @exception Throwable 例外オブジェクト
         * @param {*} inMsg
         */
        goTagamen(goSubsystemId: string, goUsecaseId: string, inMsg: any) {
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, goUsecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_USECASE, this.useCaseID);
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, goUsecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_SCREEN, this.getEvent().getScreenID());
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, goUsecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_GAMEN, this.getGamenId());
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, goUsecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, this.getEvent().getSubsystemID());
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, goUsecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_FW_SUBSYSTEM_DATA, inMsg);
            this.getReturnInfo().setSubsystemID$java_lang_String(goSubsystemId);
            super.setScreenID(null);
            super.serialize$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(context, this.getGamenId());
            this.save$();
            super.removeUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object(context, this.useCaseID, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_USECASE);
            super.removeUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object(context, this.useCaseID, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_SCREEN);
            super.removeUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object(context, this.useCaseID, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_GAMEN);
            super.removeUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object(context, this.useCaseID, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM);
            super.removeUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object(context, this.useCaseID, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_FW_SUBSYSTEM_DATA);
        }

        /**
         * 
         * サブシステム戻り画面遷移
         * @param {*} inMsg 戻り時に設定するハッシュマップです。nullの場合、呼出時のデータを戻します。
         * @exception Throwable 例外オブジェクト
         */
        goBackSubsystem(inMsg: any) {
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const usecaseId: string = <string>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_USECASE);
            const subsystemId: string = <string>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM);
            const screenId: string = <string>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_SCREEN);
            let map: any = <any>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_FW_SUBSYSTEM_DATA);
            if (inMsg != null){
                map = inMsg;
            }
            super.setScreenID(null);
            super.removeUserData$com_fujitsu_jcf_ctrl_JCFContext(context);
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_FW_SUBSYSTEM_DATA, map);
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_SCREEN, screenId);
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_GAMEN, this.getGamenId());
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object$java_lang_Object(context, usecaseId, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_BK_SUBSYSTEM, subsystemId);
            this.getReturnInfo().setSubsystemID$java_lang_String(subsystemId);
        }

        /**
         * 変更データ取得処理。変更データが存在する場合は、NULL以外を応答します。
         * @return {*} 変更データオブジェクト
         * @exception 例外オブジェクト
         */
        getChangeData(): any {
            return null;
        }

        /**
         * 日付チェックメソッドラップ（YUKIFieldFilledDate用）
         * 1951年1月1日?2050年12月31日、妥当性、必須入力を実施
         * @param {boolean} required 必須フラグ(true=必須)
         * @param itemId アイテムＩＤ
         * @param {string} name 項目名称(メッセージ可変文字列&1に埋め込む値)
         * @return {boolean} true=正常、false=異常
         * @param {string} strDate
         * @param {number} message_type
         */
        isValidStringDate(required: boolean, strDate: string, name: string, message_type: number): boolean {
            let start_date: string = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYYMMDD;
            let end_date: string = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYYMMDD;
            try {
                let value: string = strDate;
                const len: number = value.length;
                if (len === 6){
                    value += "01";
                } else if (len === 4){
                    value += "0101";
                }
                if (value.length > 8){
                    value = value.substring(0, 8);
                }
                const result: boolean = super.isValidFilledDate$boolean$java_lang_String(required, value);
                if (result === false){
                    switch((message_type)) {
                    case lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYYMM:
                        start_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYYMM;
                        end_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYYMM;
                        break;
                    case lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYY:
                        start_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYY;
                        end_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYY;
                        break;
                    default:
                        break;
                    }
                    this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_DATE_RANGE_CHECK_$LI$(), [name, start_date, end_date], false);
                }
                return result;
            } catch(th) {
                super.callErrorAdapter(this.getContext(), th);
            }
            return false;
        }

        isValidFilledDate$boolean$java_lang_String$java_lang_String(required: boolean, itemId: string, name: string): boolean {
            let message_type: number = 0;
            try {
                const item: com.fujitsu.jcf.gui.JCFFieldFilledDateData = super.getFieldDate$java_lang_String(itemId);
                const type: number = item.getIntArrayValue().length;
                if (type === 1){
                    message_type = lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYY;
                } else if (type === 2){
                    message_type = lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYYMM;
                } else {
                    message_type = lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYYMMDD;
                }
                return this.isValidFilledDate$boolean$java_lang_String$java_lang_String$int(required, itemId, name, message_type);
            } catch(th) {
                super.callErrorAdapter(this.getContext(), th);
            }
            return false;
        }

        public isValidFilledDate$boolean$java_lang_String$java_lang_String$int(required: boolean, itemId: string, name: string, message_type: number): boolean {
            return this.isValidFilledDate2(required, itemId, name, message_type, true);
        }

        /**
         * 日付チェックメソッドラップ（YUKIFieldFilledDate用）
         * 1951年1月1日?2050年12月31日、妥当性、必須入力を実施
         * @param {boolean} required 必須フラグ(true=必須)
         * @param {string} itemId アイテムＩＤ
         * @param {string} name 項目名称(メッセージ可変文字列&1に埋め込む値)
         * @param {number} message_type エラー発生時のメッセージの種類
         * @return {boolean} true=正常、false=異常
         */
        public isValidFilledDate(required?: any, itemId?: any, name?: any, message_type?: any): boolean {
            if (((typeof required === 'boolean') || required === null) && ((typeof itemId === 'string') || itemId === null) && ((typeof name === 'string') || name === null) && ((typeof message_type === 'number') || message_type === null)) {
                return <any>this.isValidFilledDate$boolean$java_lang_String$java_lang_String$int(required, itemId, name, message_type);
            } else if (((typeof required === 'boolean') || required === null) && ((typeof itemId === 'string') || itemId === null) && ((typeof name === 'string') || name === null) && message_type === undefined) {
                return <any>this.isValidFilledDate$boolean$java_lang_String$java_lang_String(required, itemId, name);
            } else if (((typeof required === 'boolean') || required === null) && ((typeof itemId === 'string') || itemId === null) && name === undefined && message_type === undefined) {
                return super.isValidFilledDate(required, itemId);
            } else if (((typeof required === 'string') || required === null) && itemId === undefined && name === undefined && message_type === undefined) {
                return <any>this.isValidFilledDate$java_lang_String(required);
            } else throw new Error('invalid overload');
        }

        /**
         * 日付チェックメソッドラップ2（YUKIFieldFilledDate用）
         * 1951年1月1日?2050年12月31日、妥当性、必須入力を実施
         * 妥当性チェックだけしてエラーメッセージが不要な場合用にエラーメッセージの表示抑止を選択できるようにしました。
         * @param {boolean} required 必須フラグ(true=必須)
         * @param {string} itemId アイテムＩＤ
         * @param {string} name 項目名称(メッセージ可変文字列&1に埋め込む値)
         * @param {number} message_type エラー発生時のメッセージの種類
         * @param {boolean} messageDisp 日付範囲エラーメッセージをtrue:表示する false:しない
         * @return {boolean} true=正常、false=異常
         */
        isValidFilledDate2(required: boolean, itemId: string, name: string, message_type: number, messageDisp: boolean): boolean {
            let result: boolean = false;
            let start_date: string = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYYMMDD;
            let end_date: string = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYYMMDD;
            try {
                const item: com.fujitsu.jcf.gui.JCFFieldFilledDateData = super.getFieldDate$java_lang_String(itemId);
                let value: string = item.getValue();
                const len: number = value.length;
                if (len === 6){
                    value += "01";
                } else if (len === 4){
                    value += "0101";
                }
                if (value.length > 8){
                    value = value.substring(0, 8);
                }
                result = super.isValidFilledDate$boolean$java_lang_String(required, value);
                if (result === false){
                    switch((message_type)) {
                    case lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYYMM:
                        start_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYYMM;
                        end_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYYMM;
                        break;
                    case lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYY:
                        start_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYY;
                        end_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYY;
                        break;
                    default:
                        break;
                    }
                    if (messageDisp){
                        this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_DATE_RANGE_CHECK_$LI$(), [name, start_date, end_date], false);
                    }
                }
            } catch(th) {
                super.callErrorAdapter(this.getContext(), th);
            }
            return result;
        }

        /**
         * 日付チェックメソッドラップ（スプレッド用）
         * 1951年1月1日?2050年12月31日、妥当性、必須入力を実施
         * @param {boolean} required 必須フラグ(true=必須)
         * @param value /: が含まれた日時
         * @param {string} name 項目名称(メッセージ可変文字列&1に埋め込む値)
         * @return {boolean} true=正常、false=異常
         * @param {com.java.Date} cellval
         * @param {number} message_type
         */
        isValidCellDate(required: boolean, cellval: com.java.Date, name: string, message_type: number): boolean {
            let result: boolean = false;
            let start_date: string = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYYMMDD;
            let end_date: string = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYYMMDD;
            let value: string = "";
            try {
                const fmt: com.java.SimpleDateFormat = new com.java.SimpleDateFormat("yyyy/MM/dd HH:mm");
                if (cellval != null){
                    value = fmt.format(cellval);
                }
                if (value.length > 10){
                    value = value.substring(0, 10);
                }
                value = /* replaceAll */value.replace(new RegExp("/", 'g'),"");
                result = super.isValidFilledDate$boolean$java_lang_String(required, value);
                if (result === false){
                    switch((message_type)) {
                    case lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYYMM:
                        start_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYYMM;
                        end_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYYMM;
                        break;
                    case lib.com.megsnow.ypm.cmn.YPMCommonConst.YYYY:
                        start_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.START_YYYY;
                        end_date = lib.com.megsnow.ypm.cmn.YPMCommonConst.END_YYYY;
                        break;
                    default:
                        break;
                    }
                    this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_DATE_RANGE_CHECK_$LI$(), [name, start_date, end_date], false);
                }
            } catch(th) {
                super.callErrorAdapter(this.getContext(), th);
            }
            return result;
        }

        /**
         * SMSCheckFiled部品を利用したロット・サブロットの禁則文字チェック部品
         * @param {string} itemId アイテムＩＤ
         * @param {string} itemNm アイテム名
         * @param {boolean} fgError エラー処理有無(true=エラー発生時にメッセージを表示、および背景色変更、フォーカス設定をする)
         * @return {boolean} 結果 true=エラーなし、false=エラー
         */
        public checkLotSublot(itemId: string, itemNm: string, fgError: boolean): boolean {
            let fgCheck: boolean = false;
            try {
                const val: string = this.getItemData$java_lang_String(itemId).getValue();
                if (val == null || val.length === 0){
                    return true;
                }
                fgCheck = ((lhs, rhs) => lhs && rhs)(com.fujitsu.sms.sol.sys.SMSCheckField.checkField(com.fujitsu.sms.sol.sys.SMSCheckField.FIELD_DISABLE, val), com.fujitsu.sms.sol.sys.SMSCheckField.checkField(com.fujitsu.sms.sol.sys.SMSCheckField.FIELD_A, val));
                if (fgCheck === false && fgError === true){
                    this.getItemData$java_lang_String(itemId).setBackground$java_lang_String(com.fujitsu.sms.sol.sys.SMSColor.WARNING);
                    this.setFocus$java_lang_String(itemId);
                    this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_KINSOKU_$LI$(), [itemNm], false);
                    this.getReturnInfo().cancelScreenTransition();
                }
            } catch(th) {
            }
            return fgCheck;
        }

        /**
         * SMSCheckFiled部品を利用したスプレッド用のロット・サブロットの禁則文字チェック部品
         * @param {string} itemId スプレッド部品のアイテムＩＤ
         * @param {string} itemNm アイテム名
         * @param {number} row 行番号
         * @param {number} col 列番号
         * @param {boolean} fgError エラー処理有無(true=エラー発生時にメッセージを表示、および背景色変更、フォーカス設定をする)
         * @return {boolean} 結果 true=エラーなし、false=エラー
         */
        public checkLotSublotCell(itemId: string, itemNm: string, row: number, col: number, fgError: boolean): boolean {
            let fgCheck: boolean = false;
            try {
                const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = this.getSpreadData$java_lang_String(itemId);
                const val: string = spread.getCellValue(row, col);
                if (val == null || val.length === 0){
                    return true;
                }
                fgCheck = ((lhs, rhs) => lhs && rhs)(com.fujitsu.sms.sol.sys.SMSCheckField.checkField(com.fujitsu.sms.sol.sys.SMSCheckField.FIELD_DISABLE, val), com.fujitsu.sms.sol.sys.SMSCheckField.checkField(com.fujitsu.sms.sol.sys.SMSCheckField.FIELD_A, val));
                if (fgCheck === false && fgError === true){
                    spread.setCellBackground$int$int$java_lang_String(row, col, com.fujitsu.sms.sol.sys.SMSColor.WARNING);
                    this.setCellFocus(itemId, row, col);
                    this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_KINSOKU_$LI$(), [itemNm], false);
                    this.getReturnInfo().cancelScreenTransition();
                }
            } catch(th) {
            }
            return fgCheck;
        }

        /**
         * スプレッドの指定されたセルをフォーカスに設定する
         * @param {string} itemId アイテムID
         * @param {number} row 行番号(0?)
         * @param {number} col 列番号(0?)
         * @throws 例外オブジェクト
         */
        public setCellFocus(itemId: string, row: number, col: number) {
            try {
                let view_row: number = row;
                const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = super.getSpreadData$java_lang_String(itemId);
                const record_rows: number = spread.getRecordRows();
                const pos: com.fujitsu.jcf.gui.JCFSpreadCellPosition = spread.getViewport();
                if (pos != null && this.getVisibleRowCount() > 0){
                    const visible_top_row: number = (/* intValue */(pos.getRowNum()|0) / record_rows|0);
                    if (row - visible_top_row >= this.getVisibleRowCount()){
                        view_row = row - (this.getVisibleRowCount() - 1);
                    } else if (row < visible_top_row){
                        view_row = row;
                    } else {
                        view_row = visible_top_row;
                    }
                }
                spread.setViewport(new com.fujitsu.jcf.gui.JCFSpreadCellPosition(view_row * record_rows, col));
                spread.setCellSelected(row, col, true);
                spread.setPosition$int$java_lang_String(row, spread.getColumnInformationName(col));
                super.setFocus$java_lang_String(itemId);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30b9\u30d7\u30ec\u30c3\u30c9\u306e\u30bb\u30eb\u9078\u629e\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002");
            }
        }

        /**
         * スプレッドの指定されたセルをフォーカスに設定する
         * @param {string} itemId アイテムID
         * @param {number} row 行番号(0?)
         * @throws 例外オブジェクト
         */
        public setRowFocus(itemId: string, row: number) {
            try {
                this.setCellFocus(itemId, row, 0);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30b9\u30d7\u30ec\u30c3\u30c9\u306e\u884c\u9078\u629e\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002");
            }
        }

        /**
         * 件数表示
         * @param {string} itemId アイテムＩＤ
         * @param {string} kensu 件数(数値)
         */
        public setKensuLabel(itemId: string, kensu: string) {
            try {
                let nKensu: number = 0;
                try {
                    if ((lib.com.megsnow.ypm.cmn.YPMCommonConst.LABEL_INIT === kensu) === true){
                        nKensu = -1;
                    } else {
                        nKensu = /* parseInt */parseInt(kensu);
                    }
                } catch(ne) {
                    nKensu = -1;
                }
                if (nKensu >= 0){
                    super.setValue(itemId, "\u5168 " + nKensu + " \u4ef6");
                } else {
                    super.setValue(itemId, "");
                }
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u4ef6\u6570\u8868\u793a\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002");
            }
        }

        /**
         * スプレッドの１頁の表示行数
         * @return {number} １頁表示行数
         */
        getVisibleRowCount(): number {
            return -1;
        }

        /**
         * 何でも出来るユーザーかチェック
         * 工場ユーザ以外のユーザで、例外的に登録権限を持つユーザ(情報システム部のユーザ等)であるか判定を行なう
         * @param なし
         * @return {boolean} false=登録不可, true=登録可
         * @exception 例外オブジェクト
         */
        isSuperUser(): boolean {
            const fgRegist: boolean = false;
            try {
            } catch(th) {
                super.callErrorAdapter(this.getContext(), th);
            }
            return fgRegist;
        }

        /**
         * 登録権限判定
         * パラメータより渡された工場・在庫場所コード（画面データの表示条件）と、ユーザー情報より
         * 登録可能か判断を行う。（工場・在庫場所コードにnullを渡した場合は、デフォルト工場の有無で判断します。）
         * @param {string} cdKojoZaikoBasho 画面表示中の工場・在庫場所コード
         * @param {boolean} fgMessage 登録不可の場合、共通のメッセージを表示するかのフラグ
         * @return {boolean} false=登録不可, true=登録可
         * @exception 例外オブジェクト
         */
        isRegist(cdKojoZaikoBasho: string, fgMessage: boolean): boolean {
            let fgRegist: boolean = false;
            try {
                const defaultKojoCode: string = this.nullConventEmpty(this.getYPMCommonInfo().getKojoZaikoBashoCode());
                if (!("" === this.nullConventEmpty(cdKojoZaikoBasho)) && (this.nullConventEmpty(cdKojoZaikoBasho) === defaultKojoCode)){
                    fgRegist = true;
                }
                if (fgRegist === false){
                    fgRegist = this.isSuperUser();
                }
                if (fgRegist === false && fgMessage === true){
                    const screen: com.fujitsu.jcf.ctrl.JCFScreenData = this.getContext().getCurrentScreenData();
                    const footer: com.fujitsu.jcf.gui.JCFPanelData = screen.getPanelData$java_lang_String(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.FRAME_FOOTER);
                    const item: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>footer.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_MESSAGE);
                    if (item != null && ("" === item.getValue()) === true){
                        this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_REGIST_KENGEN_$LI$(), [], false);
                    }
                }
            } catch(th) {
                super.callErrorAdapter(this.getContext(), th);
            }
            return fgRegist;
        }

        /**
         * 汎用検索の検索ロジックを用いてコードに対応した名称を取得します。<BR>
         * 汎用検索のSQLをそのまま用いるため、コードとの比較条件は'=','LIKE'のいずれかである必要があります。<BR>
         * コード検索が一意にならなかった場合SMSRuntimeExceptionを発生します。<BR>
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context
         * @param {string} searchID 汎用検索ID
         * @param {string} columnName 検索対象カラム名 *screen.propetiesのparamNameと対応
         * @param {string} code 検索対象コード
         * @param {Array} literalList 文字列検索条件バインド値
         * @param {string} resultName 検索結果キー名 *sql.propetiesのresult.keyと対応
         * @return {string} 名称
         * @exception Throwable callEJB失敗時例外
         */
        public getNameByGeneralSearch(context?: any, searchID?: any, columnName?: any, code?: any, literalList?: any, resultName?: any): any {
            if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((typeof searchID === 'string') || searchID === null) && ((typeof columnName === 'string') || columnName === null) && ((typeof code === 'string') || code === null) && ((literalList != null && (literalList instanceof Array)) || literalList === null) && ((typeof resultName === 'string') || resultName === null)) {
                return super.getNameByGeneralSearch(context, searchID, columnName, code, literalList, resultName);
            } else if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((typeof searchID === 'string') || searchID === null) && ((columnName != null && (columnName instanceof Object)) || columnName === null) && ((code != null && (code instanceof Array)) || code === null) && ((typeof literalList === 'string') || literalList === null) && resultName === undefined) {
                return <any>this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, searchID, columnName, code, literalList);
            } else if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFEvent) || context === null) && ((typeof searchID === 'string') || searchID === null) && ((columnName != null && (columnName instanceof Object)) || columnName === null) && ((code != null && (code instanceof Array)) || code === null) && literalList === undefined && resultName === undefined) {
                return <any>this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(context, searchID, columnName, code);
            } else if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((searchID != null && (searchID instanceof Object)) || searchID === null) && ((typeof columnName === 'string') || columnName === null) && code === undefined && literalList === undefined && resultName === undefined) {
                return <any>this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFContext$java_util_HashMap$java_lang_String(context, searchID, columnName);
            } else throw new Error('invalid overload');
        }

        /*private*/ getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event: com.fujitsu.jcf.ctrl.JCFEvent, searchId: string, conditionMap: any, literalList: Array<any>): any[] {
            let map: any[] = null;
            const inMap: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_ID, searchId);
            const keySet: Array<any> = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>conditionMap);
            const it: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(keySet);
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("debug\u7528\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc");
            while((it.hasNext())) {{
                const key: string = <string>it.next();
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace(key);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>conditionMap, key));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inMap, key, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>conditionMap, key));
            }};
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENERAL_LITERAL_CONS, literalList);
            for(let i: number = 0; i < /* size */(<number>literalList.length); i++) {{
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace(<string>/* get */literalList[i]);
            };}
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace("debug\u7528\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc\u30fc");
            const screen: com.fujitsu.jcf.ctrl.JCFScreenData = this.getContext().getCurrentScreenData();
            const footer: com.fujitsu.jcf.gui.JCFPanelData = screen.getPanelData$java_lang_String(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.FRAME_FOOTER);
            const item: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>footer.getItemData(com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_MESSAGE);
            const nmMessage: string = this.nullConventEmpty(item.getValue());
            const data: any = this.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(this.getContext(), event, lib.com.megsnow.ypm.cmn.YPMCommonConst.SMSSYSCBS, lib.com.megsnow.ypm.cmn.YPMCommonConst.VERB_FIND, inMap);
            if (data != null){
                const outData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_DATA);
                if (outData != null){
                    map = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_RESULT);
                }
            }
            if ((lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY === nmMessage) === false){
                this.setMessage$java_lang_String(nmMessage);
            }
            return map;
        }

        /**
         * 汎用検索結果を指定されたアイテムＩＤのデータより保存
         * @param 汎用検索ＩＤ
         * @param データ保存元のアイテムＩＤ
         * @param {string} searchId
         * @param {java.lang.String[]} itemId
         */
        setGeneSearchResult(searchId: string, itemId: string[]) {
            if (searchId == null || (lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY === searchId) === true){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u6c4e\u7528\u691c\u7d22\uff29\uff24\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002");
                return;
            }
            if (itemId == null){
                super.removeUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object(this.getContext(), this.useCaseID, searchId);
                return;
            }
            const saveMap: any = <any>({});
            const buf: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            for(let i: number = 0; i < itemId.length; i++) {{
                const data: string = this.nullConventEmpty(this.getItemData$java_lang_String(itemId[i]).getValue());
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>saveMap, itemId[i], data);
            };}
            super.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(this.getContext(), searchId, saveMap);
        }

        /**
         * 汎用検索結果の変更有無チェック
         * @param {string} searchId
         * @param {java.lang.String[]} itemId データ比較するアイテムＩＤ
         * @return {boolean}
         */
        isChangeGeneSearchJoken(searchId: string, itemId: string[]): boolean {
            const saveMap: any = <any>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(this.getContext(), searchId);
            if (saveMap == null){
                return true;
            }
            const buf: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            for(let i: number = 0; i < itemId.length; i++) {{
                const oldData: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>saveMap, itemId[i]));
                const newData: string = this.nullConventEmpty(this.getItemData$java_lang_String(itemId[i]).getValue());
                if ((newData === oldData) === false){
                    return true;
                }
            };}
            return false;
        }

        /**
         * 保存されている汎用検索結果をコントロールへ復元します。
         * @param {string} searchId
         * @param {java.lang.String[]} itemId データ復元するアイテムＩＤ
         */
        restoreGeneSearchJoken(searchId: string, itemId: string[]) {
            const saveMap: any = <any>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(this.getContext(), searchId);
            if (saveMap == null){
                return;
            }
            for(let i: number = 0; i < itemId.length; i++) {{
                const oldData: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>saveMap, itemId[i]));
                this.setValue(itemId[i], oldData);
            };}
        }

        /**
         * 汎用検索：製品検索
         * @param {string} cdSeihin 製品コード
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getSeihinInfo(cdSeihin: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN_I_CD_SEIHIN, cdSeihin);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN_I_DT_TEKIYO, dtTekiyo);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SEIHIN, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN_O_NM_SEIHIN));
                const nmSeihinRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN_O_NM_SEIHIN_RYAKU));
                const ifUkehraitani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN_O_IF_UKEHARAITANI));
                const ifSuryotani1: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN_O_IF_SURYOTANI1));
                const ifSuryotani2: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN_O_IF_SURYOTANI2));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN, nmSeihin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN_RYAKU, nmSeihinRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_UKEHARAITANI, ifUkehraitani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI1, ifSuryotani1);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI2, ifSuryotani2);
            }
            return rtnMap;
        }

        public getSeihinInfo4$java_lang_String(cdSeihin: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_I_CD_SEIHIN, cdSeihin);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            /* add */(literalCondition.push(this.getLoginInfo$().getDtUnyo())>0);
            /* add */(literalCondition.push(this.getLoginInfo$().getDtUnyo())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SEIHIN4, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_NM_SEIHIN));
                const nmSeihinRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_NM_SEIHIN_RYAKU));
                const stSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_ST_SEIHIN));
                const ifSuryotani1: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_SURYOTANI_1));
                const ifSuryotani2: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_SURYOTANI_2));
                const ifUkeharaitani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_UKEHARAITANI));
                const ifYoryotani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_YORYOTANI));
                const qtYoryo: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_QT_YORYO));
                const qtIrisu: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_QT_IRISU));
                const ifShomikikan: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_SHOMIKIKAN));
                const stFuteikanKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_ST_FUTEIKAN_KANRI));
                const fgSublotKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_FG_SUBLOT_KANRI));
                const fgCaseKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_FG_CASE_KANRI));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN, nmSeihin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN_RYAKU, nmSeihinRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_SEIHIN, stSeihin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI1, ifSuryotani1);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI2, ifSuryotani2);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_UKEHARAITANI, ifUkeharaitani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_YORYOTANI, ifYoryotani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_YORYO, qtYoryo);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_IRISU, qtIrisu);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SHOMIKIKAN, ifShomikikan);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_FUTEIKAN_KANRI, stFuteikanKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_SUBLOT_KANRI, fgSublotKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_CASE_KANRI, fgCaseKanri);
            }
            return rtnMap;
        }

        public getSeihinInfo4$java_lang_String$java_lang_String(cdSeihin: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_I_CD_SEIHIN, cdSeihin);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SEIHIN4, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_NM_SEIHIN));
                const nmSeihinRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_NM_SEIHIN_RYAKU));
                const stSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_ST_SEIHIN));
                const ifSuryotani1: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_SURYOTANI_1));
                const ifSuryotani2: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_SURYOTANI_2));
                const ifUkeharaitani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_UKEHARAITANI));
                const ifYoryotani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_YORYOTANI));
                const qtYoryo: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_QT_YORYO));
                const qtIrisu: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_QT_IRISU));
                const ifShomikikan: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_IF_SHOMIKIKAN));
                const stFuteikanKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_ST_FUTEIKAN_KANRI));
                const fgSublotKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_FG_SUBLOT_KANRI));
                const fgCaseKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_FG_CASE_KANRI));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN, nmSeihin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN_RYAKU, nmSeihinRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_SEIHIN, stSeihin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI1, ifSuryotani1);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI2, ifSuryotani2);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_UKEHARAITANI, ifUkeharaitani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_YORYOTANI, ifYoryotani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_YORYO, qtYoryo);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_IRISU, qtIrisu);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SHOMIKIKAN, ifShomikikan);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_FUTEIKAN_KANRI, stFuteikanKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_SUBLOT_KANRI, fgSublotKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_CASE_KANRI, fgCaseKanri);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：製品検索?
         * @param {string} cdSeihin 製品コード
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getSeihinInfo4(cdSeihin?: any, dtTekiyo?: any): any {
            if (((typeof cdSeihin === 'string') || cdSeihin === null) && ((typeof dtTekiyo === 'string') || dtTekiyo === null)) {
                return <any>this.getSeihinInfo4$java_lang_String$java_lang_String(cdSeihin, dtTekiyo);
            } else if (((typeof cdSeihin === 'string') || cdSeihin === null) && dtTekiyo === undefined) {
                return <any>this.getSeihinInfo4$java_lang_String(cdSeihin);
            } else throw new Error('invalid overload');
        }

        /**
         * 汎用検索：製造品目検索?（GeneralSearch161）
         * @param {string} cdSeihin 製品コード
         * @param {string} dtTekiyo 適用日
         * @param {string} cdKojo 	工場在庫場所コード
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getSeihinInfo2(cdSeihin: string, dtTekiyo: string, cdKojo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN2_I_CD_SEIHIN, cdSeihin);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_I_ST_SEIHIN, "01");
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN2_I_DT_TEKIYO, dtTekiyo);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            /* add */(literalCondition.push(cdKojo)>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SEIHIN2, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN_O_NM_SEIHIN));
                const nmSeihinRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN2_O_NM_SEIHIN_RYAKU));
                const qtYoryo: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN2_O_QT_YORYO));
                const qtIrisu: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN2_O_QT_IRISU));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN, nmSeihin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN_RYAKU, nmSeihinRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_YORYO, qtYoryo);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_IRISU, qtIrisu);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：製造品目検索（GeneralSearch108）
         * @param {string} cdSeihin 製品コード
         * @param {string} dtTekiyo 適用日
         * @param {string} cdKojo 	工場在庫場所コード
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getSeihinInfo108(cdSeihin: string, dtTekiyo: string, cdKojo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN108_I_CD_SEIHIN, cdSeihin);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN108_I_ST_SEIHIN, "01");
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN108_I_DT_TEKIYO, dtTekiyo);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            /* add */(literalCondition.push(cdKojo)>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SEIHIN108, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN108_O_NM_SEIHIN));
                const nmSeihinRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN108_O_NM_SEIHIN_RYAKU));
                const cdJuchuseihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN108_O_CD_JUCHUSEIHIN));
                const stSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN108_O_ST_HINMOKU_CD_SHIKIBETSU));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN, nmSeihin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN_RYAKU, nmSeihinRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_CD_JUCHUSEIHIN, cdJuchuseihin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_SEIHIN, stSeihin);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：代表製品組検索
         * @param cdSeihin 代表製品組コード
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         * @param {string} cdDaihyoSeihinKumi
         */
        public getDaihyoSeihinKumiInfo(cdDaihyoSeihinKumi: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_I_CD_DAIHYO_SEIHIN_KUMI, cdDaihyoSeihinKumi);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_DAIHYO_SEIHIN_KUMI, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_O_CD_DAIHYO_SEIHIN_KUMI, this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_O_CD_DAIHYO_SEIHIN_KUMI)));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_O_NM_DAIHYO_SEIHIN_KUMI, this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_O_NM_DAIHYO_SEIHIN_KUMI)));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_O_CD_GENRYONYU_YOTO, this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_O_CD_GENRYONYU_YOTO)));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_O_NM_GENRYONYU_YOTO, this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN130_O_NM_GENRYONYU_YOTO)));
            }
            return rtnMap;
        }

        /**
         * 汎用検索：原材料検索
         * @param {string} cdGenzairyo 原材料コード
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getGenzairyoInfo(cdGenzairyo: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO_I_CD_GENZAIRYO, cdGenzairyo);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO_I_DT_TEKIYO, dtTekiyo);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_GENZAIRYO, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmGenzairyo: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO_O_NM_GENZAIRYO));
                const nmGenzairyoRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO_O_NM_GENZAIRYO_RYAKU));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_GENZAIRYO, nmGenzairyo);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_GENZAIRYO_RYAKU, nmGenzairyoRyaku);
            }
            return rtnMap;
        }

        public getGenzairyoInfo3$java_lang_String(cdGenzairyo: string): any {
            return this.getGenzairyoInfo3$java_lang_String$java_lang_String(cdGenzairyo, this.getLoginInfo$().getDtUnyo());
        }

        public getGenzairyoInfo3$java_lang_String$java_lang_String(cdGenzairyo: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_I_CD_GENZAIRYO, cdGenzairyo);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_GENZAIRYO3, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmGenzairyo: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_NM_GENZAIRYO));
                const nmGenzairyoRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_NM_GENZAIRYO_RYAKU));
                const ifSuryoTani1: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_IF_SURYOTANI_1));
                const ifSuryoTani2: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_IF_SURYOTANI_2));
                const ifUkeharaiTani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_IF_UKEHARAITANI));
                const ifYoryoTani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_IF_YORYOTANI));
                const qtYoryo: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_QT_YORYO));
                const qtKatonIrisu: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_QT_KATON_IRISU));
                const fgKatonshiyou: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_FG_KATONSHIYOU));
                const nuHinshitsuhojiKikan: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_NU_HINSHITSUHOJI_KIKAN));
                const stHinshitsuhojiKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_ST_HINSHITSUHOJI_KANRI));
                const fgFuteikan: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_FG_FUTEIKAN));
                const fgLotKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_FG_LOT_KANRI));
                const fgSublotKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_FG_SUBLOT_KANRI));
                const fgJikaseisan: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_FG_JIKASEISAN));
                const fgKansetsuTonyu: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_GENZAIRYO3_O_FG_KANSETSU_TONYU));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_GENZAIRYO, nmGenzairyo);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_GENZAIRYO_RYAKU, nmGenzairyoRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI1, ifSuryoTani1);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI2, ifSuryoTani2);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_UKEHARAITANI, ifUkeharaiTani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_YORYOTANI, ifYoryoTani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_YORYO, qtYoryo);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_KATON_IRISU, qtKatonIrisu);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_KATONSHIYOU, fgKatonshiyou);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_KATONSHIYOU, fgKatonshiyou);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_HINSHITSUHOJI_KANRI, stHinshitsuhojiKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_FUTEIKAN, fgFuteikan);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_LOT_KANRI, fgLotKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_SUBLOT_KANRI, fgSublotKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_JIKASEISAN, fgJikaseisan);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_KANSETSU_TONYU, fgKansetsuTonyu);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：原材料検索?
         * @param {string} cdGenzairyo 原材料コード
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getGenzairyoInfo3(cdGenzairyo?: any, dtTekiyo?: any): any {
            if (((typeof cdGenzairyo === 'string') || cdGenzairyo === null) && ((typeof dtTekiyo === 'string') || dtTekiyo === null)) {
                return <any>this.getGenzairyoInfo3$java_lang_String$java_lang_String(cdGenzairyo, dtTekiyo);
            } else if (((typeof cdGenzairyo === 'string') || cdGenzairyo === null) && dtTekiyo === undefined) {
                return <any>this.getGenzairyoInfo3$java_lang_String(cdGenzairyo);
            } else throw new Error('invalid overload');
        }

        public getKyoutsuInfo$java_lang_String(cdSeihin: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, "condition02", cdSeihin);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, "GeneralSearch133", joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_NM_SEIHIN));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN, nmSeihin);
            }
            return rtnMap;
        }

        public getKyoutsuInfo$java_lang_String$java_lang_String(cdKojoZaikoBasho: string, cdSeihin: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, "condition01", cdKojoZaikoBasho);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, "condition02", cdSeihin);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, "GeneralSearch133", joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSeihin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHIN4_O_NM_SEIHIN));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN, nmSeihin);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：共通配合
         * @param {string} cdKojoZaikoBasho 工場在庫場所コード
         * @param {string} cdSeihin 製品コード
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getKyoutsuInfo(cdKojoZaikoBasho?: any, cdSeihin?: any): any {
            if (((typeof cdKojoZaikoBasho === 'string') || cdKojoZaikoBasho === null) && ((typeof cdSeihin === 'string') || cdSeihin === null)) {
                return <any>this.getKyoutsuInfo$java_lang_String$java_lang_String(cdKojoZaikoBasho, cdSeihin);
            } else if (((typeof cdKojoZaikoBasho === 'string') || cdKojoZaikoBasho === null) && cdSeihin === undefined) {
                return <any>this.getKyoutsuInfo$java_lang_String(cdKojoZaikoBasho);
            } else throw new Error('invalid overload');
        }

        public getChozohinInfo2$java_lang_String(cdChozohin: string): any {
            return this.getChozohinInfo2$java_lang_String$java_lang_String(cdChozohin, "");
        }

        public getChozohinInfo2$java_lang_String$java_lang_String(cdChozohin: string, stChozohin: string): any {
            return this.getChozohinInfo2$java_lang_String$java_lang_String$java_lang_String(cdChozohin, stChozohin, this.getLoginInfo$().getDtUnyo());
        }

        public getChozohinInfo2$java_lang_String$java_lang_String$java_lang_String(cdChozohin: string, stChozohin: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_I_CD_CHOZOHIN, cdChozohin);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_I_ST_CHOZOHIN, stChozohin);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            if (dtTekiyo == null || (lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY === dtTekiyo.trim()) === true){
                /* add */(literalCondition.push(this.getLoginInfo$().getDtUnyo())>0);
                /* add */(literalCondition.push(this.getLoginInfo$().getDtUnyo())>0);
            } else {
                /* add */(literalCondition.push(dtTekiyo)>0);
                /* add */(literalCondition.push(dtTekiyo)>0);
            }
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_CHOZOHIN2, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmChozohin: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_NM_CHOZOHIN));
                const nmChozohinRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_NM_CHOZOHIN_RYAKU));
                const ifSuryotani1: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_IF_SURYOTANI_1));
                const ifSuryotani2: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_IF_SURYOTANI_2));
                const ifUkeharaitani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_IF_UKEHARAITANI));
                const ifYoryotani: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_IF_YORYOTANI));
                const qtYoryo: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_QT_YORYO));
                const qtIrisu: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_QT_IRISU));
                const nuHinshitsuhojiKikan: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_NU_HINSHITSUHOJI_KIKAN));
                const stHinshitsuhojiKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_ST_HINSHITSUHOJI_KANRI));
                const fgLotKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_FG_LOT_KANRI));
                const fgSublotKanri: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_CHOZOHIN2_O_FG_SUBLOT_KANRI));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_CHOZOHIN, nmChozohin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_CHOZOHIN_RYAKU, nmChozohinRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI1, ifSuryotani1);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI2, ifSuryotani2);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_UKEHARAITANI, ifUkeharaitani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_YORYOTANI, ifYoryotani);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_YORYO, qtYoryo);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_QT_IRISU, qtIrisu);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NU_HINSHITSUHOJI_KIKAN, nuHinshitsuhojiKikan);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_HINSHITSUHOJI_KANRI, stHinshitsuhojiKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_LOT_KANRI, fgLotKanri);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_FG_SUBLOT_KANRI, fgSublotKanri);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：貯蔵品検索?
         * @param {string} cdChozohin 貯蔵品コード
         * @param {string} stChozohin 貯蔵品区分
         * @param 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         * @param {string} dtTekiyo
         */
        public getChozohinInfo2(cdChozohin?: any, stChozohin?: any, dtTekiyo?: any): any {
            if (((typeof cdChozohin === 'string') || cdChozohin === null) && ((typeof stChozohin === 'string') || stChozohin === null) && ((typeof dtTekiyo === 'string') || dtTekiyo === null)) {
                return <any>this.getChozohinInfo2$java_lang_String$java_lang_String$java_lang_String(cdChozohin, stChozohin, dtTekiyo);
            } else if (((typeof cdChozohin === 'string') || cdChozohin === null) && ((typeof stChozohin === 'string') || stChozohin === null) && dtTekiyo === undefined) {
                return <any>this.getChozohinInfo2$java_lang_String$java_lang_String(cdChozohin, stChozohin);
            } else if (((typeof cdChozohin === 'string') || cdChozohin === null) && stChozohin === undefined && dtTekiyo === undefined) {
                return <any>this.getChozohinInfo2$java_lang_String(cdChozohin);
            } else throw new Error('invalid overload');
        }

        public getKojoZaikoBashoInfo$java_lang_String$java_lang_String(cdKojoZaikoBasho: string, dtTekiyo: string): any {
            return this.getKojoZaikoBashoInfo$java_lang_String$java_lang_String$java_lang_String(cdKojoZaikoBasho, "", dtTekiyo);
        }

        public getKojoZaikoBashoInfo$java_lang_String$java_lang_String$java_lang_String(cdKojoZaikoBasho: string, stKojoZaikoBasho: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_CD_KOJO_ZAIKO_BASHO, cdKojoZaikoBasho);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_KOJO_ZAIKO_BASHO, stKojoZaikoBasho);
            const outMap: any = super.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(this.getContext(), event, lib.com.megsnow.ypm.cmn.YPMCommonConst.YPMCMNCBS, lib.com.megsnow.ypm.cmn.YPMCommonConst.VERB_GET_KOJO_ZAIKO_BASHO_ICHIRAN, joken);
            const rtnMap: any = <any>({});
            if (this.isSuccess(outMap) === true){
                const gyomuMap: any = this.getGyomuData(outMap);
                const kojoZaikobashoCBMMsgList: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>gyomuMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_KOJO_ZAIKOBASHO_CBMMSG_LIST);
                if (kojoZaikobashoCBMMsgList != null && kojoZaikobashoCBMMsgList.length !== 0){
                    const nmKojoZaikoBasho: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>kojoZaikobashoCBMMsgList[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KOJO_ZAIKOBASHO));
                    const nmKojoZaikoBashoRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>kojoZaikobashoCBMMsgList[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KOJO_ZAIKOBASHO_RYAKU));
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KOJO_ZAIKOBASHO, nmKojoZaikoBasho);
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KOJO_ZAIKOBASHO_RYAKU, nmKojoZaikoBashoRyaku);
                }
            }
            return rtnMap;
        }

        /**
         * 汎用検索：工場・在庫場所検索<br/>
         * YPMCommonMstCBSHandlerにサーバ処理を移行
         * @param {string} cdKojoZaikoBasho 工場・在庫場所コード
         * @param {string} stKojoZaikoBasho 工場・在庫場所区分
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getKojoZaikoBashoInfo(cdKojoZaikoBasho?: any, stKojoZaikoBasho?: any, dtTekiyo?: any): any {
            if (((typeof cdKojoZaikoBasho === 'string') || cdKojoZaikoBasho === null) && ((typeof stKojoZaikoBasho === 'string') || stKojoZaikoBasho === null) && ((typeof dtTekiyo === 'string') || dtTekiyo === null)) {
                return <any>this.getKojoZaikoBashoInfo$java_lang_String$java_lang_String$java_lang_String(cdKojoZaikoBasho, stKojoZaikoBasho, dtTekiyo);
            } else if (((typeof cdKojoZaikoBasho === 'string') || cdKojoZaikoBasho === null) && ((typeof stKojoZaikoBasho === 'string') || stKojoZaikoBasho === null) && dtTekiyo === undefined) {
                return <any>this.getKojoZaikoBashoInfo$java_lang_String$java_lang_String(cdKojoZaikoBasho, stKojoZaikoBasho);
            } else throw new Error('invalid overload');
        }

        /**
         * 汎用検索：取引先検索
         * @param cdTOrihikisaki 取引先コード
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         * @param {string} cdTorihikisaki
         */
        public getTorihikisakiInfo(cdTorihikisaki: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_TORIHIKISAKI_I_CD_TORIHIKISAKI, cdTorihikisaki);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_TORIHIKISAKI_I_DT_TEKIYO, dtTekiyo);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_TORIHIKISAKI, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmTorihikisaki: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_TORIHIKISAKI_O_NM_TORIHIKISAKI));
                const nmTorihikisakiRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_TORIHIKISAKI_O_NM_TORIHIKISAKI_RYAKU));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_TORIHIKISAKI, nmTorihikisaki);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_TORIHIKISAKI_RYAKU, nmTorihikisakiRyaku);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：倉庫検索
         * @param {string} cdKojoZaikoBasho 工場・在庫場所コード
         * @param {string} cdSoko 倉庫コード
         * @param {string} cdArea エリアコード
         * @param {string} cdZone ゾーンコード
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getSokoInfo(cdKojoZaikoBasho: string, cdSoko: string, cdArea: string, cdZone: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_I_CD_KOJO_ZAIKO_BASHO, cdKojoZaikoBasho);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_I_CD_SOKO, cdSoko);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_I_CD_AREA, cdArea);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_I_CD_ZONE, cdZone);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SOKO, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSoko: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_SOKO));
                const nmArea: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_AREA));
                const nmZone: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_ZONE));
                const nmSokoRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_SOKO_RYAKU));
                const nmAreaRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_AREA_RYAKU));
                const nmZoneRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_ZONE_RYAKU));
                const nmSokoHyoji: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_SOKO_HYOJI));
                const nmAreaHyoji: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_AREA_HYOJI));
                const nmZoneHyoji: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_ZONE_HYOJI));
                const nmSokoHyoji1: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SOKO_O_NM_ZONE_HYOJI1));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SOKO, nmSoko);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_AREA, nmArea);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_ZONE, nmZone);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SOKO_RYAKU, nmSokoRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_AREA_RYAKU, nmAreaRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_ZONE_RYAKU, nmZoneRyaku);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SOKO_HYOJI, nmSokoHyoji);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_AREA_HYOJI, nmAreaHyoji);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_ZONE_HYOJI, nmZoneHyoji);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SOKO_HYOJI1, nmSokoHyoji1);
            }
            return rtnMap;
        }

        public getLabelShutsuryokusakiInfo$java_lang_String(cdKojoZaikoBasho: string): any {
            return this.getLabelShutsuryokusakiInfo$java_lang_String$java_lang_String$java_lang_String(cdKojoZaikoBasho, "", "");
        }

        public getLabelShutsuryokusakiInfo$java_lang_String$java_lang_String(cdKojoZaikoBasho: string, idPrinter: string): any {
            return this.getLabelShutsuryokusakiInfo$java_lang_String$java_lang_String$java_lang_String(cdKojoZaikoBasho, idPrinter, "");
        }

        public getLabelShutsuryokusakiInfo$java_lang_String$java_lang_String$java_lang_String(cdKojoZaikoBasho: string, idPrinter: string, stLabel: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_LABEL_SHUTSURYOKUSAKI_I_CD_KOJO_ZAIKO_BASHO, cdKojoZaikoBasho);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_LABEL_SHUTSURYOKUSAKI_I_ID_PRINTER, idPrinter);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_LABEL_SHUTSURYOKUSAKI_I_ST_LABEL, stLabel);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_LABEL_SHUTSURYOKUSAKI, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmPrinter: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_LABEL_SHUTSURYOKUSAKI_O_NM_PRINTER));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_PRINTER, nmPrinter);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：ラベル出力先検索
         * @param {string} cdKojoZaikoBasho 工場・在庫場所コード
         * @param {string} idPrinter プリンタID
         * @param {string} stLabel ラベル区分
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getLabelShutsuryokusakiInfo(cdKojoZaikoBasho?: any, idPrinter?: any, stLabel?: any): any {
            if (((typeof cdKojoZaikoBasho === 'string') || cdKojoZaikoBasho === null) && ((typeof idPrinter === 'string') || idPrinter === null) && ((typeof stLabel === 'string') || stLabel === null)) {
                return <any>this.getLabelShutsuryokusakiInfo$java_lang_String$java_lang_String$java_lang_String(cdKojoZaikoBasho, idPrinter, stLabel);
            } else if (((typeof cdKojoZaikoBasho === 'string') || cdKojoZaikoBasho === null) && ((typeof idPrinter === 'string') || idPrinter === null) && stLabel === undefined) {
                return <any>this.getLabelShutsuryokusakiInfo$java_lang_String$java_lang_String(cdKojoZaikoBasho, idPrinter);
            } else if (((typeof cdKojoZaikoBasho === 'string') || cdKojoZaikoBasho === null) && idPrinter === undefined && stLabel === undefined) {
                return <any>this.getLabelShutsuryokusakiInfo$java_lang_String(cdKojoZaikoBasho);
            } else throw new Error('invalid overload');
        }

        /**
         * 汎用検索：管理工程検索?
         * @param {string} cdKanrikotei 管理工程コード
         * @param {string} cdSonekiSoshiki3 損益管理組織コード(L3)
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getKanrikoteiInfo(cdKanrikotei: string, cdSonekiSoshiki3: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_KANRIKOTEI_2_I_CD_KANRIKOTEI, cdKanrikotei);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_KANRIKOTEI_2_I_CD_SONEKIKANRI_SOSHIKI, cdSonekiSoshiki3);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_KANRIKOTEI_2_I_DT_TEKIYO, dtTekiyo);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_KARIKOTEI_2, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmKanrikotei: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_KANRIKOTEI_2_O_NM_KANRIKOTEI));
                const nmSonekiSoshiki3: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_KANRIKOTEI_2_O_NM_SONEKI_SOSHIKI));
                cdSonekiSoshiki3 = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_KANRIKOTEI_2_O_CD_SONEKIKANRI_SOSHIKI));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KANRIKOTEI, nmKanrikotei);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SONEKIKANRI_SOSHIKI, nmSonekiSoshiki3);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_CD_SONEKIKANRI_SOSHIKI, cdSonekiSoshiki3);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：損益管理組織検索?
         * @param {string} cdSonekikanriSoshiki 損益管理組織コード(L3)
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getSonekikanriSoshiki4(cdSonekikanriSoshiki: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = this.getLoginInfo$().getDtUnyo();
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SONEKIKANRI_SOSHIKI_4_I_CD_SONEKI_SOSHIKI, cdSonekikanriSoshiki);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SONEKIKANRI_SOSHIKI_4, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSonekiSoshiki: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SONEKIKANRI_SOSHIKI_4_O_NM_SONEKI_SOSHIKI));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SONEKIKANRI_SOSHIKI3, nmSonekiSoshiki);
            }
            return rtnMap;
        }

        public getSonekikanriSoshiki2$java_lang_String$java_lang_String(cdSonekikanriSoshiki3: string, dtTekiyo: string): any {
            return this.getSonekikanriSoshiki2$java_lang_String$java_lang_String$java_lang_String(cdSonekikanriSoshiki3, "", dtTekiyo);
        }

        public getSonekikanriSoshiki2$java_lang_String$java_lang_String$java_lang_String(cdSonekikanriSoshiki3: string, cdSonekikanriSoshiki4: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = this.getLoginInfo$().getDtUnyo();
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_I_CD_SONEKI_SOSHIKI_3, cdSonekikanriSoshiki3);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_I_CD_SONEKI_SOSHIKI_4, cdSonekikanriSoshiki4);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            /* add */(literalCondition.push(dtTekiyo)>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SONEKIKANRI_SOSHIKI_2, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSonekiSoshiki3: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_O_NM_SONEKI_SOSHIKI_3));
                const nmSonekiSoshiki4: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_O_NM_SONEKI_SOSHIKI_4));
                const cdSonekiSoshiki3: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_O_CD_SONEKI_SOSHIKI_3));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_CD_SONEKIKANRI_SOSHIKI, cdSonekiSoshiki3);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SONEKIKANRI_SOSHIKI3, nmSonekiSoshiki3);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SONEKIKANRI_SOSHIKI4, nmSonekiSoshiki4);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：損益管理組織検索?
         * @param cdSonekikanriSoshiki 損益管理組織コード(L3)
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         * @param {string} cdSonekikanriSoshiki3
         * @param {string} cdSonekikanriSoshiki4
         */
        public getSonekikanriSoshiki2(cdSonekikanriSoshiki3?: any, cdSonekikanriSoshiki4?: any, dtTekiyo?: any): any {
            if (((typeof cdSonekikanriSoshiki3 === 'string') || cdSonekikanriSoshiki3 === null) && ((typeof cdSonekikanriSoshiki4 === 'string') || cdSonekikanriSoshiki4 === null) && ((typeof dtTekiyo === 'string') || dtTekiyo === null)) {
                return <any>this.getSonekikanriSoshiki2$java_lang_String$java_lang_String$java_lang_String(cdSonekikanriSoshiki3, cdSonekikanriSoshiki4, dtTekiyo);
            } else if (((typeof cdSonekikanriSoshiki3 === 'string') || cdSonekikanriSoshiki3 === null) && ((typeof cdSonekikanriSoshiki4 === 'string') || cdSonekikanriSoshiki4 === null) && dtTekiyo === undefined) {
                return <any>this.getSonekikanriSoshiki2$java_lang_String$java_lang_String(cdSonekikanriSoshiki3, cdSonekikanriSoshiki4);
            } else throw new Error('invalid overload');
        }

        /**
         * 汎用検索：損益管理組織検索?　階層レベル４の組織コードを検索します。
         * @param {string} cdSonekikanriSoshiki4 損益管理組織コード(L4)
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ 損益管理組織略称(L4), 損益管理組織コード(L4), 費目判定区分,　費目判定区分名
         * @exception 例外オブジェクト
         */
        public getSonekikanriSoshiki6(cdSonekikanriSoshiki4: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            if (dtTekiyo == null){
                dtTekiyo = this.getLoginInfo$().getDtUnyo();
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_I_DT_TEKIYO, dtTekiyo);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_I_CD_SONEKI_SOSHIKI_4, cdSonekikanriSoshiki4);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SONEKIKANRI_SOSHIKI_6, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_CD_SONEKI_SOSHIKI_4, this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_CD_SONEKI_SOSHIKI_4)));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_NM_SONEKI_SOSHIKI_RYAKU_4, this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_NM_SONEKI_SOSHIKI_RYAKU_4)));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_ST_HINMOKU_HANTEI, this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_ST_HINMOKU_HANTEI)));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_NM_ST_HINMOKU_HANTEI, this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_NM_ST_HINMOKU_HANTEI)));
            }
            return rtnMap;
        }

        /**
         * 汎用検索：設備検索?
         * @param {string} cdKojoZaikoBasho 工場・在庫場所コード
         * @param {string} cdSetsubi 設備コード
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getSetsubiInfo1(cdKojoZaikoBasho: string, cdSetsubi: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SETSUBI_1_I_CD_KOJO_ZAIKO_BASHO, cdKojoZaikoBasho);
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SETSUBI_1_I_CD_SETSUBI, cdSetsubi);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SETSUBI_1, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSetsubi: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SETSUBI_1_O_NM_SETSUBI));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SETSUBI, nmSetsubi);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：店検索
         * @param {string} cdTen 店コード
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getTenInfo(cdTen: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_TEN_I_CD_TEN, cdTen);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_TEN, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmTen: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_TEN_O_NM_TEN));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_TEN, nmTen);
            }
            return rtnMap;
        }

        /**
         * 汎用検索：製品群
         * @param {string} cdSeihingun 製品群コード
         * @param {string} dtTekiyo 適用日
         * @return {*} ハッシュマップ
         * @exception 例外オブジェクト
         */
        public getSeihingunInfo(cdSeihingun: string, dtTekiyo: string): any {
            const event: com.fujitsu.jcf.ctrl.JCFEvent = this.getEvent();
            const context: com.fujitsu.jcf.ctrl.JCFContext = this.getContext();
            const returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo = this.getReturnInfo();
            const hashMap: any = <any>({});
            if (event == null || context == null || returnInfo == null){
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("\u30a4\u30d9\u30f3\u30c8 or \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 or \u30ea\u30bf\u30fc\u30f3\u30a4\u30f3\u30d5\u30a9\u304c\u7a7a\u3067\u3059\u3002");
                return hashMap;
            }
            const joken: any = <any>({});
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHINGUN_I_CD_SEIHINGUN, cdSeihingun);
            if (dtTekiyo == null || (lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY === dtTekiyo) === true){
                dtTekiyo = this.getLoginInfo$().getDtUnyo();
            }
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>joken, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHINGUN_I_DT_TEKIYO, dtTekiyo);
            const literalCondition: Array<any> = <any>([]);
            /* add */(literalCondition.push(this.getLoginInfo$().getCdKaisha())>0);
            const data: any[] = this.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_util_HashMap$java_util_ArrayList(event, lib.com.megsnow.ypm.cmn.YPMCommonConst.GENE_SEARCH_SEIHINGUN, joken, literalCondition);
            const rtnMap: any = <any>({});
            if (data != null && data.length !== 0){
                const nmSeihingun: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHINGUN_O_NM_SEIHINGUN));
                const nmSeihingunKana: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHINGUN_O_NM_SEIHINGUN_KANA));
                const nmSeihingunRyaku: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>data[0], lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_GENE_SEARCH_SEIHINGUN_O_NM_SEIHINGUN_RYAKU));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHINGUN, nmSeihingun);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHINGUN_KANA, nmSeihingunKana);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>rtnMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHINGUN_RYAKU, nmSeihingun);
            }
            return rtnMap;
        }

        /**
         * 汎用検索結果ハッシュより名称を取り出します。
         * @param {*} inMap 応答ハッシュマップ
         * @param {string} key 取得キー
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @param {java.lang.String[]} detail メッセージ詳細情報
         * @return {string} 指定されたキー値
         * @exception 例外オブジェクト
         * @private
         */
        /*private*/ getName(inMap: any, key: string, fgMessage: boolean, detail: string[]): string {
            let name: string = null;
            if (inMap == null){
                name = lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY;
            } else {
                name = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>inMap, key));
            }
            if ((lib.com.megsnow.ypm.cmn.YPMCommonConst.STR_EMPTY === name) === true && fgMessage === true){
                this.showMessage(lib.com.megsnow.ypm.cmn.YPMCommonConst.MSGID_MASTER_CHECK_$LI$(), detail, false);
            }
            return name;
        }

        /**
         * 汎用検索結果ハッシュより製品郡名称を取り出します。
         * @param {*} inMap getSeihinInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 製品郡名称
         * @exception 例外オブジェクト
         */
        public getNmSeihingun(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHINGUN, fgMessage, ["\u88fd\u54c1\u90e1\u30b3\u30fc\u30c9", "\u88fd\u54c1\u90e1\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより製品群ｶﾅ名称を取り出します。
         * @param {*} inMap getSeihinInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 製品群ｶﾅ名称
         * @exception 例外オブジェクト
         */
        public getNmSeihingunKana(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHINGUN_KANA, fgMessage, ["\u88fd\u54c1\u7fa4\u30b3\u30fc\u30c9", "\u88fd\u54c1\u7fa4\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより製品名称を取り出します。
         * @param {*} inMap getSeihinInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 製品名称
         * @exception 例外オブジェクト
         */
        public getNmSeihin(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN, fgMessage, ["\u88fd\u54c1\u30b3\u30fc\u30c9", "\u88fd\u54c1\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより製品略式名称を取り出します。
         * @param {*} inMap getSeihinInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 製品略式名称
         * @exception 例外オブジェクト
         */
        public getNmSeihinRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN_RYAKU, fgMessage, ["\u88fd\u54c1\u30b3\u30fc\u30c9", "\u88fd\u54c1\u30de\u30b9\u30bf"]);
        }

        public getNmSeihinRyaku2(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SEIHIN_RYAKU, fgMessage, ["\u5bfe\u8c61\u88fd\u54c1\u30b3\u30fc\u30c9", "\u88fd\u54c1\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより代表製品組名称を取り出します。
         * @param {*} inMap getSeihinInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 代表製品組名称
         * @exception 例外オブジェクト
         */
        public getNmDaihyoSeihinKumi(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, "nmDaihyoSeihinKumi", fgMessage, ["\u4ee3\u8868\u88fd\u54c1\u7d44\u30b3\u30fc\u30c9", "\u4ee3\u8868\u88fd\u54c1\u7d44\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより原材料名称を取り出します。
         * @param {*} inMap getGenzairyoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 原材料名称
         * @exception 例外オブジェクト
         */
        public getNmGenzairyo(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_GENZAIRYO, fgMessage, ["\u539f\u6750\u6599\u30b3\u30fc\u30c9", "\u539f\u6750\u6599\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより原材料略式名称を取り出します。
         * @param {*} inMap getGenzairyoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 原材料略式名称
         * @exception 例外オブジェクト
         */
        public getNmGenzairyoRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_GENZAIRYO_RYAKU, fgMessage, ["\u539f\u6750\u6599\u30b3\u30fc\u30c9", "\u539f\u6750\u6599\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより貯蔵品名称を取り出します。
         * @param {*} inMap getGenzairyoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 貯蔵品名称
         * @exception 例外オブジェクト
         */
        public getNmChozohin(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_CHOZOHIN, fgMessage, ["\u8caf\u8535\u54c1\u30b3\u30fc\u30c9", "\u8caf\u8535\u54c1\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより貯蔵品名称を取り出します。
         * @param {*} inMap getGenzairyoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 貯蔵品略式名称
         * @exception 例外オブジェクト
         */
        public getNmChozohinRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_CHOZOHIN_RYAKU, fgMessage, ["\u8caf\u8535\u54c1\u30b3\u30fc\u30c9", "\u8caf\u8535\u54c1\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより貯蔵品名称を取り出します。
         * @param {*} inMap getGenzairyoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 斡旋品名称
         * @exception 例外オブジェクト
         */
        public getNmAssenhin(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_CHOZOHIN, fgMessage, ["\u65a1\u65cb\u54c1\u30b3\u30fc\u30c9", "\u8caf\u8535\u54c1\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより貯蔵品名称を取り出します。
         * @param {*} inMap getGenzairyoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 斡旋品略式名称
         * @exception 例外オブジェクト
         */
        public getNmAssenhinRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_CHOZOHIN_RYAKU, fgMessage, ["\u65a1\u65cb\u54c1\u30b3\u30fc\u30c9", "\u8caf\u8535\u54c1\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより製品群名称を取り出します。
         * @param {*} inMap getSeihinInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 製品群名称
         * @exception 例外オブジェクト
         */
        public getNmKyoutsu(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, "nmSeihin", fgMessage, ["\u5171\u901a\u914d\u5408\u30b3\u30fc\u30c9", "\u5171\u901a\u914d\u5408\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより倉庫名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 倉庫名称
         * @exception 例外オブジェクト
         */
        public getNmSoko(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SOKO, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより倉庫略式名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 倉庫略式名称
         * @exception 例外オブジェクト
         */
        public getNmSokoRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SOKO_RYAKU, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュよりエリア名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} エリア名称
         * @exception 例外オブジェクト
         */
        public getNmArea(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_AREA, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュよりエリア略式名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} エリア略式名称
         * @exception 例外オブジェクト
         */
        public getNmAreaRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_AREA_RYAKU, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュよりゾーン名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} ゾーン名称
         * @exception 例外オブジェクト
         */
        public getNmZone(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_ZONE, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュよりゾーン略式名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} ゾーン略式名称
         * @exception 例外オブジェクト
         */
        public getNmZoneRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_ZONE_RYAKU, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより倉庫表示名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 倉庫表示名称
         * @exception 例外オブジェクト
         */
        public getNmSokoHyoji(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SOKO_HYOJI, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより倉庫表示名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 倉庫表示名称
         * @exception 例外オブジェクト
         */
        public getNmSokoHyoji1(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SOKO_HYOJI1, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュよりエリア表示名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} エリア表示名称
         * @exception 例外オブジェクト
         */
        public getNmAreaHyoji(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_AREA_HYOJI, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュよりゾーン表示名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} ゾーン表示名称
         * @exception 例外オブジェクト
         */
        public getNmZoneHyoji(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_ZONE_HYOJI, fgMessage, ["\u5009\u5eab\u30fb\u30a8\u30ea\u30a2\u30fb\u30be\u30fc\u30f3\u30b3\u30fc\u30c9", "\u5009\u5eab\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより工場・在庫場所名称を取り出します。
         * @param {*} inMap getKojoZaikoBashoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 工場・在庫場所名称
         * @exception 例外オブジェクト
         */
        public getNmKojoZaikoBasho(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KOJO_ZAIKOBASHO, fgMessage, ["\u5de5\u5834\u30fb\u5728\u5eab\u5834\u6240\u30b3\u30fc\u30c9", "\u5de5\u5834\u30fb\u5728\u5eab\u5834\u6240\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより工場・在庫場所略式名称を取り出します。
         * @param {*} inMap getKojoZaikoBashoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 工場・在庫場所略式名称
         * @exception 例外オブジェクト
         */
        public getNmKojoZaikoBashoRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KOJO_ZAIKOBASHO_RYAKU, fgMessage, ["\u5de5\u5834\u30fb\u5728\u5eab\u5834\u6240\u30b3\u30fc\u30c9", "\u5de5\u5834\u30fb\u5728\u5eab\u5834\u6240\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより取引先名称を取り出します。
         * @param {*} inMap getTorihikisakiの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 取引先名称
         * @exception 例外オブジェクト
         */
        public getNmTorihikisaki(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_TORIHIKISAKI, fgMessage, ["\u53d6\u5f15\u5148\u30b3\u30fc\u30c9", "\u53d6\u5f15\u5148\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより取引先略式名称を取り出します。
         * @param {*} inMap getSokoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 取引先略式名称
         * @exception 例外オブジェクト
         */
        public getNmTorihikisakiRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_TORIHIKISAKI_RYAKU, fgMessage, ["\u53d6\u5f15\u5148\u30b3\u30fc\u30c9", "\u53d6\u5f15\u5148\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより生産工場名称を取り出します。
         * @param {*} inMap getKojoZaikoBashoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 生産工場名称
         * @exception 例外オブジェクト
         */
        public getNmSeisanKojo(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KOJO_ZAIKOBASHO, fgMessage, ["\u751f\u7523\u5de5\u5834\u30b3\u30fc\u30c9", "\u5de5\u5834\u30fb\u5728\u5eab\u5834\u6240\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより生産工場略式名称を取り出します。
         * @param {*} inMap getKojoZaikoBashoInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 生産工場略式名称
         * @exception 例外オブジェクト
         */
        public getNmSeisanKojoRyaku(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KOJO_ZAIKOBASHO_RYAKU, fgMessage, ["\u751f\u7523\u5de5\u5834\u30b3\u30fc\u30c9", "\u5de5\u5834\u30fb\u5728\u5eab\u5834\u6240\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより管理工程名称を取り出します。
         * @param {*} inMap getKanrikoteiInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 管理工程名称
         * @exception 例外オブジェクト
         */
        public getNmKanrikotei(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_KANRIKOTEI, fgMessage, ["\u7ba1\u7406\u5de5\u7a0b\u30b3\u30fc\u30c9", "\u7ba1\u7406\u5de5\u7a0b\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュよりプリンター名称を取り出します。
         * @param {*} inMap getKanrikoteiInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 管理工程名称
         * @exception 例外オブジェクト
         */
        public getNmPrinter(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_PRINTER, fgMessage, ["\u30d7\u30ea\u30f3\u30bf\u30fc\uff29\uff24", "\u30e9\u30d9\u30eb\u51fa\u529b\u5148\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより損益管理組織コードを取り出します。
         * @param {*} inMap getKanrikoteiInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 損益管理組織コード
         * @exception 例外オブジェクト
         */
        public getCdSonekiSoshiki(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_CD_SONEKIKANRI_SOSHIKI, fgMessage, ["\u640d\u76ca\u7ba1\u7406\u7d44\u7e54\u30b3\u30fc\u30c9", "\u640d\u76ca\u7ba1\u7406\u7d44\u7e54\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより損益管理組織名称を取り出します。
         * @param {*} inMap getKanrikoteiInfo, getSonekikanriSoshiki4Infoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 損益管理組織名称
         * @exception 例外オブジェクト
         */
        public getNmSonekiSoshiki(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SONEKIKANRI_SOSHIKI, fgMessage, ["\u640d\u76ca\u7ba1\u7406\u7d44\u7e54\u30b3\u30fc\u30c9", "\u640d\u76ca\u7ba1\u7406\u7d44\u7e54\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより損益管理組織コードを取り出します。
         * @param {*} inMap getKanrikoteiInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 損益管理組織名称3
         * @exception 例外オブジェクト
         */
        public getNmSonekiSoshiki3(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SONEKIKANRI_SOSHIKI3, fgMessage, ["\u640d\u76ca\u7ba1\u7406\u7d44\u7e54\u30b3\u30fc\u30c9(L3)", "\u640d\u76ca\u7ba1\u7406\u7d44\u7e54\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより損益管理組織名称を取り出します。
         * @param {*} inMap getKanrikoteiInfo, getSonekikanriSoshiki4Infoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 損益管理組織名称4
         * @exception 例外オブジェクト
         */
        public getNmSonekiSoshiki4(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SONEKIKANRI_SOSHIKI4, fgMessage, ["\u640d\u76ca\u7ba1\u7406\u7d44\u7e54\u30b3\u30fc\u30c9(L4)", "\u640d\u76ca\u7ba1\u7406\u7d44\u7e54\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより設備名称を取り出します。
         * @param {*} inMap getSetsubiInfo1の応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 設備名称
         * @exception 例外オブジェクト
         */
        public getNmSetsubi(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_SETSUBI, fgMessage, ["\u8a2d\u5099\u540d\u79f0", "\u8a2d\u5099\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより店名称を取り出します。
         * @param {*} inMap getTenInfoの応答ハッシュマップ
         * @param {boolean} fgMessage 警告メッセージ表示有無(true=表示あり,false=表示なし)
         * @return {string} 店名称
         * @exception 例外オブジェクト
         */
        public getNmTen(inMap: any, fgMessage: boolean): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_TEN, fgMessage, ["\u5e97\u30b3\u30fc\u30c9", "\u5e97\u30de\u30b9\u30bf"]);
        }

        /**
         * 汎用検索結果ハッシュより受払単位を取り出します。
         * @param {*} inMap ハッシュマップ
         * @return {string} 受払単位
         * @exception 例外オブジェクト
         */
        public getIfUkeharaitani(inMap: any): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_UKEHARAITANI, false, null);
        }

        /**
         * 汎用検索結果ハッシュ数量単位１を取り出します。
         * @param {*} inMap ハッシュマップ
         * @return {string} 数量単位１
         * @exception 例外オブジェクト
         */
        public getIfSuryotani1(inMap: any): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI1, false, null);
        }

        /**
         * 汎用検索結果ハッシュより数量単位２を取り出します。
         * @param {*} inMap ハッシュマップ
         * @return {string} 数量単位２
         * @exception 例外オブジェクト
         */
        public getIfSuryotani2(inMap: any): string {
            return this.getName(inMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_IF_SURYOTANI2, false, null);
        }

        /**
         * ゼロパディング文字生成
         * @param 元の値
         * @param 整数桁数(-1を指定した場合、制御なし)
         * @param 小数点桁数(-1を指定した場合、制御なし)
         * @exception 例外オブジェクト
         * @param {string} value
         * @param {number} ketasu
         * @return {string}
         */
        public createZeroPaddingPoint(value: string, ketasu: number): string {
            let tmpValue: string = value == null ? "" : value;
            let rtnValue: string = null;
            const decimal_ketasu: number = -1;
            const point_ketasu: number = ketasu;
            if (("" === tmpValue) === true){
                tmpValue = "0";
            }
            let decimal: string = "";
            let point: string = "";
            const pos: number = tmpValue.indexOf(".");
            if (pos >= 0){
                if (pos !== 0){
                    decimal = tmpValue.substring(0, pos);
                }
                if (pos !== tmpValue.length){
                    point = tmpValue.substring(pos + 1, tmpValue.length);
                }
                rtnValue = this.createPaddingValue(/* valueOf */String(decimal).toString(), "0", decimal_ketasu, true);
                rtnValue = rtnValue + "." + this.createPaddingValue(/* valueOf */String(point).toString(), "0", point_ketasu, false);
            } else {
                rtnValue = this.createPaddingValue(tmpValue, "0", decimal_ketasu, true);
                if (point_ketasu >= 0){
                    rtnValue = rtnValue + "." + this.createPaddingValue("0", "0", point_ketasu, false);
                }
            }
            return rtnValue;
        }

        /**
         * 指定した桁数、指定した文字を埋めて応答
         * @param 元の値
         * @param 埋める値
         * @param 最大桁数
         * @param どちらを埋めるかフラグ(true=先頭を埋める, false=末尾を埋める)
         * @exception 例外オブジェクト
         * @param {string} value
         * @param {string} padding
         * @param {number} ketasu
         * @param {boolean} fgSento
         * @return {string}
         */
        createPaddingValue(value: string, padding: string, ketasu: number, fgSento: boolean): string {
            if (ketasu === -1){
                return value;
            }
            const tmpValue: string = value == null ? "" : value;
            let rtnValue: string = tmpValue;
            if (fgSento === true){
                for(let i: number = 0; i < ketasu - tmpValue.length; i++) {{
                    rtnValue = padding + rtnValue;
                };}
            } else {
                for(let i: number = tmpValue.length; i < ketasu; i++) {{
                    rtnValue = rtnValue + padding;
                };}
            }
            return rtnValue;
        }

        /**
         * 端数製品取得
         * @param {string} cdJoiseihin 上位製品コード
         * @return {java.util.HashMap[]} HashMap[] 製品マスタ
         * @exception Throwable
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event
         */
        getHasuSeihin(event: com.fujitsu.jcf.ctrl.JCFEvent, cdJoiseihin: string): any[] {
            const inMsg: any = <any>({});
            let hinmokuCBMMsgList: any[] = null;
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inMsg, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_CD_HINMOKU, cdJoiseihin);
            const returnMap: any = super.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(this.getContext(), event, lib.com.megsnow.ypm.cmn.YPMCommonConst.YPMCMNCBS, lib.com.megsnow.ypm.cmn.YPMCommonConst.VERB_GET_HASUSEIHIN, inMsg);
            if (this.isSuccess(returnMap) === true){
                const gomuMap: any = this.getGyomuData(returnMap);
                if (gomuMap != null){
                    hinmokuCBMMsgList = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>gomuMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_HINMOKU_CBMMSG_LIST);
                }
            }
            return hinmokuCBMMsgList;
        }

        /**
         * callEJBの応答正常チェック
         * @param {*} returnMap
         * @return {boolean}
         */
        isSuccess(returnMap: any): boolean {
            if (returnMap == null){
                return false;
            }
            return /* equals */(<any>((o1: any, o2: any) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>returnMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG),com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_SUCCESS));
        }

        /**
         * callEJBの応答正常チェック
         * @param {*} returnMap
         * @return {boolean}
         */
        isError(returnMap: any): boolean {
            if (returnMap == null){
                return false;
            }
            return /* equals */(<any>((o1: any, o2: any) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>returnMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG),com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_ERROR));
        }

        /**
         * callEJBの応答正常チェック
         * @param {*} returnMap
         * @return {boolean}
         */
        isWarning(returnMap: any): boolean {
            if (returnMap == null){
                return false;
            }
            return /* equals */(<any>((o1: any, o2: any) => o1 && o1.equals ? o1.equals(o2) : o1 === o2)(/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>returnMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG),com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_WARNING));
        }

        /**
         * 業務データの取得
         * @param {*} returnMap
         * @return {*}
         */
        getGyomuData(returnMap: any): any {
            if (returnMap == null){
                return <any>({});
            }
            return <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>returnMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_DATA);
        }

        /**
         * 
         * 原価表示明細コンボ設定
         * @param {*} gyomuMap サーバ通信結果（業務データハッシュマップ）
         * @itemId 設定するコンボボックスのアイテムＩＤ
         * @param {string} itemId
         */
        setHyojiMeisai(gyomuMap: any, itemId: string) {
            if (gyomuMap == null){
                return;
            }
            const mapData: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>gyomuMap, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_ST_GENKA_HYOJI_MEISAI);
            if (mapData == null || mapData.length === 0){
                return;
            }
            super.setSelectableElement$java_lang_String$java_util_HashMap_A$java_lang_String$java_lang_String$int$boolean(itemId, mapData, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_CD_HANYO, lib.com.megsnow.ypm.cmn.YPMCommonConst.KEY_NM_NAIYO1, this.FIRST_ELEMENT, false);
        }

        /**
         * カンマ3桁区切り文字列取得
         * @param {string} val
         * @exception Throwable
         * @return {string} 3桁カンマ区切りの文字列
         */
        public getConmaStr(val: string): string {
            let bMinus: boolean = false;
            let bPlus: boolean = false;
            if (val == null || val.length === 0){
                return "";
            }
            const szValue: string[] = /* toCharArray */(val).split('');
            let szTmp: string[] = null;
            let szPoint: string[] = [];
            if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(szValue[0]) == '-'.charCodeAt(0)){
                szTmp = /* toCharArray */(val.substring(1)).split('');
                bMinus = true;
            } else if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(szValue[0]) == '+'.charCodeAt(0)){
                szTmp = /* toCharArray */(val.substring(1)).split('');
                bPlus = true;
            } else {
                szTmp = /* toCharArray */(val).split('');
            }
            for(let i: number = 0; i < szTmp.length; i++) {{
                if ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(szTmp[i]) == '.'.charCodeAt(0)){
                    szPoint = (s => { let a=[]; while(s-->0) a.push(null); return a; })(szTmp.length - i + 1);
                    for(let j: number = i; j < szTmp.length; j++) {{
                        szPoint[j - i] = szTmp[j];
                    };}
                    szPoint[szTmp.length - i] = '\u0000';
                    break;
                }
            };}
            let n: number = szPoint.length;
            if (n === 0){
                n = szTmp.length;
            } else {
                n = szTmp.length - n + 1;
            }
            const tmpConma: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            for(let s: number = n; s !== 0; s--) {{
                if (s % 3 === 0 && s !== 0 && s !== n){
                    /* append */(sb => { sb.str += <any>","; return sb; })(tmpConma);
                }
                /* append */(sb => { sb.str += <any>szTmp[n - s]; return sb; })(tmpConma);
            };}
            if (bPlus === true){
                return "+" + /* toString */tmpConma.str + /* valueOf */String(szPoint).toString().trim();
            } else if (bMinus === true){
                return "-" + /* toString */tmpConma.str + /* valueOf */String(szPoint).toString().trim();
            } else {
                return /* toString */tmpConma.str + /* valueOf */String(szPoint).toString().trim();
            }
        }

        /**
         * 年度取得
         * @param {string} dtNengetsu
         * @exception Throwable
         * @return {string} dtNendo
         */
        public getNendo(dtNengetsu: string): string {
            let yyyy: string = dtNengetsu.substring(0, 4);
            const mm: string = dtNengetsu.substring(4, 6);
            if (/* parseInt */parseInt(mm) < lib.com.megsnow.ypm.cmn.YPMCommonConst.START_NENDO_DUKI){
                yyyy = /* valueOf */String(/* parseInt */parseInt(yyyy) - 1).toString();
            }
            return yyyy;
        }

        /**
         * スプレッドシートに表示用一覧の構成
         * 
         * 
         * @param  {java.util.HashMap[]} inMsgList サンプル判定一覧（内に検査結果一覧が存在）
         * @param  pagesu  表示される頁
         * @param  {number} maxSize スプレッドシートに表示する件数
         * @return {*} HashMap         検査項目ハッシュマップ
         * @param {string} keyNm
         * @param {string} sortKey
         * @param {number} startIndex
         */
        public setKensaKomokuMapForNoHyoji(inMsgList: any[], keyNm: string, sortKey: string, startIndex: number, maxSize: number): any {
            if (inMsgList.length === 0){
                return <any>({});
            }
            let inKensaKekkaMsgList: any[] = null;
            const kensaKomoku: any = <any>({});
            let kensaKekka: any[] = null;
            for(let i: number = 0; i < maxSize; i++) {{
                const index: number = startIndex + i;
                inKensaKekkaMsgList = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>inMsgList[index], keyNm);
                if (inKensaKekkaMsgList != null){
                    for(let j: number = 0; j < inKensaKekkaMsgList.length; j++) {{
                        kensaKekka = (s => { let a=[]; while(s-->0) a.push(null); return a; })(maxSize);
                        const key: string = this.nullConventEmpty(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>inKensaKekkaMsgList[j], sortKey));
                        if (!(lib.com.megsnow.ypm.cmn.YPMCommonConst.LABEL_INIT === key)){
                            const noHyoji: number = /* parseInt */parseInt(key);
                            if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>kensaKomoku, noHyoji) == null){
                                kensaKekka[i] = inKensaKekkaMsgList[j];
                                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>kensaKomoku, noHyoji, kensaKekka);
                            } else {
                                kensaKekka = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>kensaKomoku, noHyoji);
                                kensaKekka[i] = inKensaKekkaMsgList[j];
                            }
                        }
                    };}
                }
            };}
            return kensaKomoku;
        }

        /**
         * 
         * 文字列型(YYYMMDD)を日付型に変換する
         * 
         * @param  {string} strDate 日付文字列(YYYYMMDD)
         * @return {com.java.Date} Date型の運用日付(エラーの場合はNULLを返す)
         * 
         */
        public getDateFormat(strDate: string): com.java.Date {
            let dateFormat: com.java.SimpleDateFormat = new com.java.SimpleDateFormat("yyyyMMdd");
            dateFormat.setLenient(false);
            try {
                return dateFormat.parse(strDate);
            } catch(pe) {
                return null;
            } finally {
                dateFormat = null;
            }
        }

        /**
         * 
         * ログイン情報より取得した運用日付をDate型に変換する。
         * 取得した値がNULLの場合はシステム日付の値を返す。
         * 
         * @return {com.java.Date} Date型の運用日付
         * 
         */
        public getDtUnyoDateFormat(): com.java.Date {
            const DtUnyo: com.java.Date = this.getDateFormat(this.getLoginInfo$().getDtUnyo());
            if (null == DtUnyo){
                return com.java.Calendar.getInstance().getTime();
            }
            return DtUnyo;
        }

        /**
         * 
         * 値がNULL、空文字、半角空白のみの場合は指定文字列を返す
         * 
         * @param {string} val 変換前文字列
         * @param {string} defaultStr 変換文字列
         * 
         * @return {string} 変換後文字列
         */
        public nullConvertValue(val: string, defaultStr: string): string {
            if (null == val || val.trim().length === 0){
                return defaultStr;
            }
            return val;
        }

        /**
         * 指定された年月(YYYYMM)の月末日(YYYYMMDD)を返します。
         * @param	{string} dtNengetsu 年月(YYYYMM)
         * @return	{string} 月末日(YYYYMMDD)
         */
        public getLastDay(dtNengetsu: string): string {
            const year: number = /* parseInt */parseInt(dtNengetsu.substring(0, 4));
            const month: number = /* parseInt */parseInt(dtNengetsu.substring(4, 6));
            const calendar: com.java.Calendar = com.java.Calendar.getInstance();
            calendar.clear();
            calendar.set(year, month - 1, 1);
            return dtNengetsu.substring(0, 6) + calendar.getActualMaximum(com.java.Calendar.DATE);
        }

        constructor() {
            super();
            // this.FOOTER_BUTTONS = [com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN1, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN2, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN3, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN4, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN5, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN6, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN7, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN8, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN9];
            // this.HEADER_BUTTONS = [com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.RETURN_BUTTON, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.MENU_BUTTON, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.EXIT_BUTTON];
            this.IS_VISIBLE = "_IS_VISIBLE";
            this.IS_ENABLED = "_IS_ENABLED";
            this.VALUE = "_VALUE";
        }
    }

}

