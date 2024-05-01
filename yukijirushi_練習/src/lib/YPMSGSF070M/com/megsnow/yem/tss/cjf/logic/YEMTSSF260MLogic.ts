/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.megsnow.yem.tss.cjf.logic {
    /**
     * @author Administrator
     * 
     * 生成されるコメントを変更したい場合は、ウィンドウ>設定>Java>テンプレート
     * の""typecomment""テンプレート変数を編集してください。
     * コメントを生成するかどうかについては、ウィンドウ>設定>Java>コード生成
     * で設定してください。
     * @class
     * @extends lib.com.megsnow.yem.tss.cjf.YEMTSSF000LogicBase
     */
    export class YEMTSSF260MLogic extends lib.com.megsnow.yem.tss.cjf.YEMTSSF000LogicBase {
        /**
         * コピーライト情報
         */
        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2005";

        static SUBSYS: string = "YEMTSS";

        static USECASE: string = "YEMTSSF260";

        static GAMEN_ID: string = "YEMTSSF260M";

        static PROP_KEY_MAXDISPLAYCNT: string; public static PROP_KEY_MAXDISPLAYCNT_$LI$(): string { if (YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT == null) { YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT = YEMTSSF260MLogic.GAMEN_ID + "_QT_SAIDAI_KENSAKU"; }  return YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT; }

        static PROP_KEY_SCREEN_NAME: string; public static PROP_KEY_SCREEN_NAME_$LI$(): string { if (YEMTSSF260MLogic.PROP_KEY_SCREEN_NAME == null) { YEMTSSF260MLogic.PROP_KEY_SCREEN_NAME = YEMTSSF260MLogic.GAMEN_ID + "_SCREEN_NAME"; }  return YEMTSSF260MLogic.PROP_KEY_SCREEN_NAME; }

        static KEY_IS_PROCESSED_BEFOREDISPLAY: string; public static KEY_IS_PROCESSED_BEFOREDISPLAY_$LI$(): string { if (YEMTSSF260MLogic.KEY_IS_PROCESSED_BEFOREDISPLAY == null) { YEMTSSF260MLogic.KEY_IS_PROCESSED_BEFOREDISPLAY = YEMTSSF260MLogic.GAMEN_ID + "isProcessedBeforedisplay"; }  return YEMTSSF260MLogic.KEY_IS_PROCESSED_BEFOREDISPLAY; }

        /**
         * コンボボックスMsg名称 です。
         * データはStringで保持します。
         */
        static NM_NAIYO1: string = "nmNaiyo1";

        static fgHanyobunrui: string = "1";

        static SPRD_COL_CHOAI: number = 4;

        static SPRD_COL_CHAIN: number = 7;

        static SPRD_COL_SYOKUBA: number = 10;

        static SPRD_COL_TANTOSHA: number = 13;

        static SPRD_COL_DT_KAKUNIN: number = 16;

        static SPRD_COL_NM_KAKUNIN: number = 17;

        static SPRD_COL_KEISAN_HOUHO: number = 18;

        static SPRD_COL_NENGETSU: number = 19;

        static ON_DB_COLUMN: number = 20;

        static SPRD_COL_NMCHOAI: number = 6;

        static SPRD_COL_NMCHAIN: number = 9;

        static SPRD_COL_NMSYOKUBA: number = 12;

        static SPRD_COL_NMTANTOSHA: number = 15;

        static UCHK_SPRD_COL_CHOAI: number = 21;

        static UCHK_SPRD_COL_CHAIN: number = 23;

        static UCHK_SPRD_COL_SYOKUBA: number = 25;

        static UCHK_SPRD_COL_TANTOSHA: number = 27;

        static UCHK_SPRD_COL_DT_KOSHIN: number = 31;

        static UCHK_SPRD_COL_FG_KYU_KA_MODE: number = 32;

        static SPRD_COL_ST_CHAIN: number = 33;

        static UCHK_SPRD_COL_ST_CHAIN: number = 34;

        static UCHK_SPRD_COL_NM_CHAIN_KUBUN: number = 35;

        static ON_DB_COLUMN_STR: string = "20";

        static NO_DB_ADD_ROW: string = "0";

        static ON_DB: string = "1";

        static DELETE: string = "2";

        static LEN_SEIHIN_CD: number = 6;

        static LEN_CHOAI_CD: number = 6;

        static LEN_CHAIN_CD: number = 6;

        static LEN_SHOKUBA_CD: number = 6;

        static LEN_JUGYOIN_CD: number = 9;

        /**
         * 　SPREAD明細 YEMSeihinHenkanCBMMsgカラム対応表
         */
        /*private*/ COL_LIST_BODY: string[][];

        /**
         * SPREADにて行追加や初期表示時に編集不可にする列位置を指定
         */
        /*private*/ SPRD_EDITABLE_FALSE_CELLS: number[];

        /*private*/ SPRD_EDITABLE_FALSE_CELLS_ADD: number[];

        /*private*/ SPRD_EDITABLE_FALSE_CELLS_SERCH: number[];

        static TXT_COUNT_DISP_MAIN: string = "txtCountDispMain";

        /**
         * ユースケースIDを設定します。
         * 
         * @param useCaseID ユースケースID
         */
        setUseCaseID() {
            this.useCaseID = YEMTSSF260MLogic.USECASE;
        }

        /**
         * 「初期表示」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public beforeDisplay(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.beforeDisplay Logic start");
            try {
                if ((<string>this.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, YEMTSSF260MLogic.KEY_IS_PROCESSED_BEFOREDISPLAY_$LI$())) != null){
                    com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("\u3010\u521d\u671f\u8868\u793a\u51e6\u7406\uff1a\u518d\u5b9f\u884c\u6291\u5236\u3011beforeDisplay Logic skip");
                    return;
                }
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, YEMTSSF260MLogic.KEY_IS_PROCESSED_BEFOREDISPLAY_$LI$(), YEMTSSF260MLogic.KEY_IS_PROCESSED_BEFOREDISPLAY_$LI$());
                const screenName: string = <string>com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_SCREEN_NAME_$LI$());
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setHeaderTitle$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(context, screenName, YEMTSSF260MLogic.GAMEN_ID);
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>this.getLoginInfo(context);
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initHeader(event, context);
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                this.setCdProgram(context, YEMTSSF260MLogic.USECASE);
                const dtKoshin: string = loginInfo.getTmKoshin();
                const buttonLabels: string[] = ["\u78ba\u8a8d(F1)", "(F2)", "(F3)", "(F4)", "(F5)", "(F6)", "CSV\uff80\uff9e\uff73\uff9d\uff9b\uff70\uff84\uff9e(F7)", "\u5e33\u7968\u5370\u5237(F8)", "\u767b\u9332(F9)"];
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initFooter(context, buttonLabels);
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setAllFooterButtonEnabled(context, false);
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initInformation(context);
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const dtUnyo: string = loginInfo.getDtUnyo();
                let comObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                const nengetsuBeforeHash: any[] = this.getBeforeMonth(dtUnyo, -2);
                const nengetsuAfterHash: any[] = this.getMonth(dtUnyo, 3);
                const nengetsuHash: any[] = this.setPlusMinusMonth(nengetsuBeforeHash, nengetsuAfterHash);
                this.setComboboxFromMessage(comObj, nengetsuHash, false);
                const selectNengetsu: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>nengetsuHash[2], YEMTSSF260MLogic.NM_NAIYO1);
                comObj.setValue$java_lang_String(selectNengetsu);
                const sendMsg: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_KEISANHOUHOU, YEMTSSF260MLogic.fgHanyobunrui);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.FG_ST_JITSUHAN_JIGYO, "1");
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_CHAIN, YEMTSSF260MLogic.fgHanyobunrui);
                let recevieMsg: any = <any>({});
                /* clear */(<any>recevieMsg).entries=[];
                recevieMsg = this.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.YEM_CBS_NAME, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.VERB_INIT, sendMsg);
                comObj = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                const outData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>recevieMsg, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_DATA);
                const comboData: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_KEISANHOUHOU_CBMMSG);
                const filHash: any[] = [null, null];
                let cntSet: number = 0;
                for(let i: number = 0; i < comboData.length; i++) {{
                    const cdValue: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>comboData[i], lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CMB_HANYO);
                    const nmValue: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>comboData[i], lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CMB_NAIYO1);
                    if (cdValue != null){
                        if ((cdValue === ("01")) || (cdValue === ("06"))){
                            filHash[cntSet] = <any>({});
                            filHash[cntSet++].putAll(comboData[i]);
                        }
                    }
                };}
                this.setComboboxFromMessage(comObj, filHash, false);
                context.putUserData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_JITSUHAN_MSG, outData);
                this.setDefaultValue(comObj, outData);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const spdComboData: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_CHAIN_CBMMSG);
                this.setSprdComboboxFromMessage$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$java_util_HashMap_A$int$java_lang_String$java_lang_String$boolean(spreadData, spdComboData, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CMB_HANYO, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CMB_NAIYO2, true);
                const radioKeisankekka: com.fujitsu.jcf.gui.JCFToggleButtonData = <com.fujitsu.jcf.gui.JCFToggleButtonData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_RD_SEISANJOKEN);
                radioKeisankekka.setValue$boolean(true);
                const cdshokuba: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SHITENSYOKUBACD);
                cdshokuba.setValue(loginInfo.getCdSonekiKanriSoshiki4());
                const rnShokuba: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SONEKIKANRISOSIKIRYAKUNM);
                rnShokuba.setValue(loginInfo.getBushoName());
                const cdTantosha: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_TANTOSHACD);
                cdTantosha.setValue(loginInfo.getCdJugyoin());
                const nmJugyoin: string = loginInfo.getNmUserMyoji() + loginInfo.getNmUserNamae();
                const nmTantosha: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_JYUGYOINNM);
                nmTantosha.setValue(nmJugyoin);
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.error("YEMTSSF260MLogic:beforeDisplay() \u4f8b\u5916\u767a\u751f");
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.beforeDisplay Logic end");
        }

        /**
         * 「引当条件画面遷移」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public goHikiateJoken(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            this.removeUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_Object(context, YEMTSSF260MLogic.USECASE, YEMTSSF260MLogic.KEY_IS_PROCESSED_BEFOREDISPLAY_$LI$());
        }

        /**
         * 「表示ボタン」押下処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public showData(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showData Logic start: ");
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                this.clearSpreadBgColor(spreadData);
                const message: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_FOOT, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_MESSAGE);
                const messageUtil: com.fujitsu.jcf.ctrl.JCFMessageOnWindow = context.getMessageUtil();
                const txtNmChain: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINRYAKUNM);
                const txtNmSoshiki: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SONEKIKANRISOSIKIRYAKUNM);
                const txtNmChoaisaki: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKIRYAKUNM);
                const txtNmTantou: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_JYUGYOINNM);
                const txtCountItem: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, YEMTSSF260MLogic.TXT_COUNT_DISP_MAIN);
                this.setForcus(spreadData, returnInfo, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                if (spreadData.getRowCount() > 0){
                    spreadData.removeAllRow();
                    txtCountItem.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_ZERO);
                }
                const txtCdChain: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINCD);
                const txtCdChoaisaki: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKI);
                const txtCdShiten: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SHITENSYOKUBACD);
                const txtCdtantou: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_TANTOSHACD);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdChain);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdChoaisaki);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdShiten);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdtantou);
                let comObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                let comboDt: string = this.getComboboxSelectedText(comObj.getSelectableElementValue());
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showData:comboDt\uff1a" + comboDt);
                comObj = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                const comboKeisanHouho: string = this.getComboID(comObj);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showData:comboKeisanHouho\uff1a" + comboKeisanHouho);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, comObj);
                const cdChain: string = this.blankToNull(txtCdChain.getValue());
                const cdChoai: string = this.blankToNull(txtCdChoaisaki.getValue());
                const cdShiten: string = this.blankToNull(txtCdShiten.getValue());
                const cdTantou: string = this.blankToNull(txtCdtantou.getValue());
                if (cdChain != null && cdChain.length !== YEMTSSF260MLogic.LEN_CHAIN_CD){
                    this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdChain);
                    txtNmChain.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                    returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINCD);
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW031, ["\u30c1\u30a7\u30fc\u30f3\u30b3\u30fc\u30c9"]);
                    return;
                }
                if (cdChoai != null && cdChoai.length !== YEMTSSF260MLogic.LEN_CHOAI_CD){
                    this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdChoaisaki);
                    txtNmChoaisaki.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                    returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKI);
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW031, ["\u5e33\u5408\u5148\u30b3\u30fc\u30c9"]);
                    return;
                }
                if (cdShiten != null && cdShiten.length !== YEMTSSF260MLogic.LEN_SHOKUBA_CD){
                    this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdShiten);
                    txtNmSoshiki.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                    returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SHITENSYOKUBACD);
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW031, ["\u8077\u5834\u30b3\u30fc\u30c9"]);
                    return;
                }
                if (cdTantou != null && cdTantou.length !== YEMTSSF260MLogic.LEN_JUGYOIN_CD){
                    this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdtantou);
                    txtNmTantou.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                    returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_TANTOSHACD);
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW031, ["\u62c5\u5f53\u8005\u30b3\u30fc\u30c9"]);
                    return;
                }
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initInformation(context);
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>this.getLoginInfo(context);
                const kaisyaCd: string = loginInfo.getCdKaisha();
                const userId: string = loginInfo.getUserId();
                const currentSysTime: string = loginInfo.getTmKoshin();
                const unyobi: string = loginInfo.getDtUnyo();
                let jokenMsg: any = <any>({});
                comboDt = comboDt.substring(0, 4) + comboDt.substring(5, 7);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, this.blankToNull(comboDt));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_KEISAN_HOUHO, this.blankToNull(comboKeisanHouho));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, this.blankToNull(txtCdChain.getValue()));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, this.blankToNull(txtCdChoaisaki.getValue()));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SHOKUBA_SEISAN, this.blankToNull(txtCdShiten.getValue()));
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA, this.blankToNull(txtCdtantou.getValue()));
                this.showHashMapKey(jokenMsg);
                const sendMsg: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TOKUBAI_SETTEI_JOKEN_CBMMSG, jokenMsg);
                this.showHashMap$java_util_HashMap(sendMsg);
                let receiveMap: any = <any>({});
                receiveMap = this.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.YEM_CBS_NAME, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.VERB_GET_TOKUBAI_SETTEI, sendMsg);
                this.showHashMap$java_util_HashMap(receiveMap);
                const errFlag: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
                if (errFlag === com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_WARNING){
                    const sysData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_DATA);
                    const commonMsg: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>sysData, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
                    const waringItemId: string = <string>commonMsg.getCdErrorKoumoku();
                    if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SHOKUBA_SEISAN){
                        this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdShiten);
                        txtNmSoshiki.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                        returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SHITENSYOKUBACD);
                    } else if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI){
                        this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdChoaisaki);
                        txtNmChoaisaki.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                        returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKI);
                    } else if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN){
                        this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdChain);
                        txtNmChain.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                        returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINCD);
                    } else if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA){
                        this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdtantou);
                        txtNmTantou.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                        returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_TANTOSHACD);
                    } else if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_KEISAN_HOHO){
                        this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, txtCdChoaisaki);
                        this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, comObj);
                        returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                    } else {
                        const strMaxDisplayCnt: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSW037, [strMaxDisplayCnt]);
                    }
                    return;
                }
                const outData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_DATA);
                jokenMsg = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TOKUBAI_SETTEI_JOKEN_CBMMSG);
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TYOAISAKI_RYAKU) != null){
                    txtNmChoaisaki.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TYOAISAKI_RYAKU));
                } else {
                    txtNmChoaisaki.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SYOKUBA_RYAKU) != null){
                    txtNmSoshiki.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SYOKUBA_RYAKU));
                } else {
                    txtNmSoshiki.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_RYAKU) != null){
                    txtNmChain.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_RYAKU));
                } else {
                    txtNmChain.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TANTOSHA_MYOJI) != null){
                    let nmTantou: string = null;
                    const nmTantouMyoji: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TANTOSHA_MYOJI);
                    const nmTantouNamae: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TANTOSHA_NAMAE);
                    nmTantou = this.joinName(nmTantouMyoji, nmTantouNamae);
                    txtNmTantou.setValue(nmTantou);
                } else {
                    txtNmTantou.setValue(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.STR_BLANK);
                }
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_BTN_PLUS);
                const rowCount: number = this.setSpreadData(spreadData, outData, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_TOKUBAI_SETTEI_CBMMSG_LIST, comboKeisanHouho);
                txtCountItem.setValue(/* toString */(''+(rowCount)));
                this.setbuttonStatus(context);
                if (rowCount === 0){
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSW056);
                    return;
                }
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSI020, [(/* toString */(''+(rowCount)))]);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showData Logic end");
            }
        }

        /**
         * 「確認ボタン押下」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public updateData(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.updateData Logic start");
            try {
                if (!this.isEnabledFuncbtn(event, context, returnInfo)){
                    return;
                }
                const messageUtil: com.fujitsu.jcf.ctrl.JCFMessageOnWindow = context.getMessageUtil();
                if (messageUtil.showMessage$java_lang_String(com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSC004) === com.fujitsu.jcf.ctrl.JCFMessageOnWindow.BTN_NO){
                    return;
                }
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const selectedRow: number = this.getSpreadCheckedCnt$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int(spreadData, 0);
                if (selectedRow === 0){
                    messageUtil.showMessage$java_lang_String$java_lang_String_A(com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW033, ["\u78ba\u8a8d\u3059\u308b\u884c"]);
                    return;
                }
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>this.getLoginInfo(context);
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                let jokenMsg: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA, loginInfo.getCdJugyoin());
                const jokenArray: Array<any> = <any>([]);
                for(let i: number = 0; i < spreadData.getRowCount(); i++) {{
                    if (spreadData.getCellBooleanValue(i, 0)){
                        const ListMsg: any = <any>({});
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_NENGETSU));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SONEKI_KANRISOSHIKI_RYAKU, spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_SYOKUBA));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_TOKUBAI_KEISAN, spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_KEISAN_HOUHO));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_CHOAI));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_CHAIN));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TM_KOSHIN, spreadData.getCellValue(i, YEMTSSF260MLogic.UCHK_SPRD_COL_DT_KOSHIN));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ROW_INDEX, new Number(i).valueOf().toString());
                        /* add */(jokenArray.push(ListMsg)>0);
                    }
                };}
                const sendMsg: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TOKUBAI_SETTEI_JOKEN_CBMMSG, jokenMsg);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_TOKUBAI_SETTEI_CBMMSG_LIST, <any[]>/* toArray */jokenArray.slice(0));
                this.showHashMapKey(sendMsg);
                const receiveMap: any = this.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.YEM_CBS_NAME, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.VERB_UPDATE_TOKUBAI_SEISAN_KAKUNIN, sendMsg);
                this.showHashMap$java_util_HashMap(receiveMap);
                const errFlag: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
                if (errFlag === com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_WARNING){
                    const commonMsg: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
                    if (commonMsg != null){
                        const waringItemId: string = <string>commonMsg.getCdErrorKoumoku();
                        if (errFlag === com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_WARNING){
                            if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA){
                            }
                        }
                    }
                    return;
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG) != null && ((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_SUCCESS)){
                    const outData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_DATA);
                    const kakuninList: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_TOKUBAI_SETTEI_CBMMSG_LIST);
                    jokenMsg = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TOKUBAI_SETTEI_JOKEN_CBMMSG);
                    const RowCount: number = kakuninList.length;
                    const nmKakuninMyoji: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TANTOSHA_MYOJI);
                    const nmKakuninNamae: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TANTOSHA_NAMAE);
                    for(let i: number = 0; i < RowCount; i++) {{
                        const mesaiMap: any = <any>kakuninList[i];
                        const tmKoshin: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TM_KOSHIN);
                        const rowIndex: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ROW_INDEX);
                        const index: number = /* intValue */(new Number(rowIndex).valueOf()|0);
                        const dtKakunin: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_KAKUNIN);
                        const sb: { str: string, toString: Function } = { str: dtKakunin, toString: function() { return this.str; } };
                        /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(/* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/'), 7, '/');
                        spreadData.setCellValue$int$int$java_lang_String(index, YEMTSSF260MLogic.SPRD_COL_DT_KAKUNIN, /* toString */sb.str);
                        spreadData.setCellValue$int$int$java_lang_String(index, YEMTSSF260MLogic.SPRD_COL_NM_KAKUNIN, this.joinName(nmKakuninMyoji, nmKakuninNamae));
                        spreadData.setCellValue$int$int$java_lang_String(index, YEMTSSF260MLogic.UCHK_SPRD_COL_DT_KOSHIN, tmKoshin);
                    };}
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSI019, ["\u78ba\u8a8d"]);
                }
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.updateData Logic end ");
            }
        }

        /**
         * 「登録ボタン押下」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public rgsData(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.rgsData Logic start: ");
            try {
                if (!this.isEnabledFuncbtn(event, context, returnInfo)){
                    return;
                }
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const messageUtil: com.fujitsu.jcf.ctrl.JCFMessageOnWindow = context.getMessageUtil();
                const result: string = messageUtil.showMessage$java_lang_String(com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSC001);
                if (result === lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.DIALOG_BTN_NO){
                    return;
                }
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const message: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_FOOT, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_MESSAGE);
                this.clearSpreadBgColor(spreadData);
                const txtNmChain: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINRYAKUNM);
                const txtNmSoshiki: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SONEKIKANRISOSIKIRYAKUNM);
                const txtNmChoaisaki: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKIRYAKUNM);
                const txtNmTantou: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_JYUGYOINNM);
                const txtCdChain: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINCD);
                const txtCdChoaisaki: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKIRYAKUNM);
                const txtCdShiten: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SHITENSYOKUBACD);
                const txtCdtantou: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_TANTOSHACD);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdChain);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdChoaisaki);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdShiten);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdtantou);
                let comObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                let cmbNengetu: string = this.getComboboxSelectedText(comObj.getSelectableElementValue());
                cmbNengetu = cmbNengetu.substring(0, 4) + cmbNengetu.substring(5, 7);
                comObj = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                const comboKeisanHouho: string = this.getComboID(comObj);
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>this.getLoginInfo(context);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.makeSendMsg4Regist Logic start: ");
                const shosaiMsgArray: Array<any> = this.makeSendMsg4Regist(context, spreadData, loginInfo.getCdKaisha(), cmbNengetu, comboKeisanHouho);
                if (shosaiMsgArray == null){
                    return;
                }
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdChain);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdChoaisaki);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdShiten);
                this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(false, txtCdtantou);
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initInformation(context);
                const sendMsg: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_TOKUBAI_SETTEI_CBMMSG_LIST, <any[]>/* toArray */shosaiMsgArray.slice(0));
                let receiveMap: any = <any>({});
                receiveMap = this.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.YEM_CBS_NAME, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.VERB_RGS_TOKUBAI_SETTEI, sendMsg);
                this.showHashMap$java_util_HashMap(receiveMap);
                const errFlag: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
                if (errFlag === com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_WARNING){
                    const sysData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_DATA);
                    const commonMsg: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>sysData, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
                    const waringItemId: string = <string>commonMsg.getCdErrorKoumoku();
                    if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SHOKUBA_SEISAN){
                        const waringRowInex: number = /* parseInt */parseInt(commonMsg.getQtErrorRecordPosition());
                        spreadData.setCellBackground(waringRowInex, YEMTSSF260MLogic.SPRD_COL_SYOKUBA, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(waringRowInex, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_SYOKUBA));
                    } else if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI){
                        const waringRowInex: number = /* parseInt */parseInt(commonMsg.getQtErrorRecordPosition());
                        spreadData.setCellBackground(waringRowInex, YEMTSSF260MLogic.SPRD_COL_CHOAI, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(waringRowInex, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_CHOAI));
                    } else if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN){
                        const waringRowInex: number = /* parseInt */parseInt(commonMsg.getQtErrorRecordPosition());
                        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("\u3010YEMTSSF260MLogic.rgsData\u3011waringRowInex:" + waringRowInex);
                        spreadData.setCellBackground(waringRowInex, YEMTSSF260MLogic.SPRD_COL_CHAIN, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(waringRowInex, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_CHAIN));
                    } else if (waringItemId === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA){
                        const waringRowInex: number = /* parseInt */parseInt(commonMsg.getQtErrorRecordPosition());
                        com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("\u3010YEMTSSF260MLogic.rgsData\u3011waringRowInex:" + waringRowInex);
                        spreadData.setCellBackground(waringRowInex, YEMTSSF260MLogic.SPRD_COL_TANTOSHA, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(waringRowInex, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_TANTOSHA));
                    }
                    return;
                }
                const outData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_DATA);
                const shosaiCBMMsgList: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_TOKUBAI_SETTEI_CBMMSG_LIST);
                for(let i: number = 0; i < shosaiCBMMsgList.length; i++) {{
                    const mesaiMap: any = <any>shosaiCBMMsgList[i];
                    const fgToroku: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_TOROKU);
                    const tmKoshin: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TM_KOSHIN);
                    const nmTyoaisaki: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TYOAISAKI_RYAKU);
                    const nmChain: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_RYAKU);
                    const nmSoneki: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SONEKI_KANRISOSHIKI_RYAKU);
                    const nmTanto: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_JUGYOIN_MIYOJI) + <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_JUGYOIN_NAMAE);
                    const dtKakunin: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_KAKUNIN);
                    const nmKakuninM: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_KAKUNINSHA_MYOJI);
                    const nmKakuninN: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_KAKUNINSHA_NAMAE);
                    const nmKakunin: string = this.joinName(nmKakuninM, nmKakuninN);
                    const cdChoaisaki: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI);
                    const cdChain: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN);
                    const stChain: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_CHAIN);
                    const cdShokuba: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SONEKIKANRI_SOSHIKI);
                    const cdTantousha: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA);
                    const fgKyuKaMode: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_KYU_KA_MODE);
                    const row: number = /* parseInt */parseInt(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ROW_INDEX));
                    if (fgToroku === YEMTSSF260MLogic.NO_DB_ADD_ROW){
                        spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.SPRD_COL_NMCHOAI, this.nullToBlank(nmTyoaisaki));
                        spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.SPRD_COL_NMCHAIN, this.nullToBlank(nmChain));
                    }
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.SPRD_COL_NMSYOKUBA, this.nullToBlank(nmSoneki));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.SPRD_COL_NMTANTOSHA, this.nullToBlank(nmTanto));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.ON_DB_COLUMN, YEMTSSF260MLogic.ON_DB);
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_DT_KOSHIN, this.nullToBlank(tmKoshin));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_CHOAI, this.nullToBlank(cdChoaisaki));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_CHAIN, this.nullToBlank(cdChain));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_SYOKUBA, this.nullToBlank(cdShokuba));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_TANTOSHA, this.nullToBlank(cdTantousha));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_DT_KOSHIN, this.nullToBlank(tmKoshin));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.SPRD_COL_KEISAN_HOUHO, this.nullToBlank(comboKeisanHouho));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.SPRD_COL_NENGETSU, this.nullToBlank(cmbNengetu));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_FG_KYU_KA_MODE, this.nullToBlank(fgKyuKaMode));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_ST_CHAIN, this.nullToBlank(stChain));
                    spreadData.setCellValue$int$int$java_lang_String(row, YEMTSSF260MLogic.UCHK_SPRD_COL_NM_CHAIN_KUBUN, spreadData.getCellValue(row, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN));
                    spreadData.setCellValue$int$int$java_lang_String(row, 16, "");
                    spreadData.setCellValue$int$int$java_lang_String(row, 17, "");
                    spreadData.setCellValue$int$int$java_lang_String(row, 29, "");
                    spreadData.setCellValue$int$int$java_lang_String(row, 30, "");
                    if (fgToroku === YEMTSSF260MLogic.NO_DB_ADD_ROW){
                        spreadData.setCellEditable(row, 0, true);
                        spreadData.setCellEditable(row, 1, true);
                        spreadData.setCellEditable(row, 2, true);
                        if (comboKeisanHouho === ("01")){
                            spreadData.setCellEditable(row, 3, true);
                        }
                        this.SprCellEditableFalse(spreadData, row, this.SPRD_EDITABLE_FALSE_CELLS_SERCH);
                    }
                };}
                for(let i: number = shosaiCBMMsgList.length - 1; i >= 0; i--) {{
                    const mesaiMap: any = <any>shosaiCBMMsgList[i];
                    const fgToroku: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_TOROKU);
                    const row: number = /* parseInt */parseInt(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ROW_INDEX));
                    if (fgToroku === YEMTSSF260MLogic.DELETE){
                        this.setForcus(spreadData, returnInfo, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                        break;
                    }
                };}
                for(let i: number = shosaiCBMMsgList.length - 1; i >= 0; i--) {{
                    const mesaiMap: any = <any>shosaiCBMMsgList[i];
                    const fgToroku: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_TOROKU);
                    const row: number = /* parseInt */parseInt(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ROW_INDEX));
                    if (fgToroku === YEMTSSF260MLogic.DELETE){
                        spreadData.removeRow(row);
                    }
                };}
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSI019, ["\u767b\u9332"]);
                this.setbuttonStatus(context);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.rgsData Logic end");
            }
        }

        /**
         * 「帳票印刷」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public print(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.print Logic start");
            try {
                if (!this.isEnabledFuncbtn(event, context, returnInfo)){
                    return;
                }
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const messageUtil: com.fujitsu.jcf.ctrl.JCFMessageOnWindow = context.getMessageUtil();
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const selectedRow: number = this.getSpreadCheckedCnt$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int(spreadData, 0);
                if (selectedRow === 0){
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW033, ["\u5370\u5237\u3059\u308b\u30c7\u30fc\u30bf"]);
                    return;
                }
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>this.getLoginInfo(context);
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                let nCheckCount: number = 0;
                for(let i: number = 0; i < spreadData.getRowCount(); i++) {{
                    if (spreadData.getCellBooleanValue(i, 0)){
                        nCheckCount++;
                    }
                };}
                const jokenMsg: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOHYO_ID, "YEMTSSR070");
                const comObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                let comboDt: string = this.getComboboxSelectedText(comObj.getSelectableElementValue());
                comboDt = comboDt.substring(0, 4) + comboDt.substring(5, 7);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, this.blankToNull(comboDt));
                const KeisanhohoObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                const comboKeisanHouho: string = this.getComboID(KeisanhohoObj);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>jokenMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_KEISAN_HOUHO, this.blankToNull(comboKeisanHouho));
                const jokenArray: Array<any> = <any>([]);
                if (nCheckCount > 0){
                    for(let i: number = 0; i < spreadData.getRowCount(); i++) {{
                        if (spreadData.getCellBooleanValue(i, 0)){
                            const ListMsg: any = <any>({});
                            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_CHOAI));
                            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>ListMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_CHAIN));
                            /* add */(jokenArray.push(ListMsg)>0);
                        }
                    };}
                }
                const sendMsg: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TOKUBAI_SETTEI_JOKEN_CBMMSG, jokenMsg);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>sendMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_TOKUBAI_SETTEI_CBMMSG_LIST, <any[]>/* toArray */jokenArray.slice(0));
                this.showHashMapKey(sendMsg);
                const receiveMap: any = this.callEJB$com_fujitsu_jcf_ctrl_JCFContext$com_fujitsu_jcf_ctrl_JCFEvent$java_lang_String$java_lang_String$java_util_HashMap(context, event, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.YEM_CBS_NAME, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.VERB_PRINT_SEISANKINGAKU_SETTEI, sendMsg);
                this.showHashMap$java_util_HashMap(receiveMap);
                const errFlag: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
                const commonMsg: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
                if (commonMsg != null){
                    const waringItemId: string = <string>commonMsg.getCdErrorKoumoku();
                    if (errFlag === com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_WARNING){
                    }
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG) != null && ((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === com.fujitsu.sms.sol.sys.SMSHashKeyConst.IS_SUCCESS)){
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSI019, ["\u5e33\u7968\u5370\u5237"]);
                    super.downloadFile(context, com.fujitsu.sms.sol.sys.cjf.SMSCjfLogicBase.DW_REMOTE);
                }
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.print Logic end ");
            }
        }

        /**
         * 「帳合先検索」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public showTokuyakuten(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showTokuyakuten Logic start");
            try {
                context.putSucceedData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.ST_MODE_02);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showTokuyakuten Logic end");
        }

        /**
         * 「チェーン検索」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public showChain(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showChain Logic start");
            try {
                context.putSucceedData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.ST_MODE_01);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showChain Logic end");
        }

        /**
         * 「組織検索」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public showSoshiki(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showSoshiki Logic start ");
            try {
                context.putSucceedData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.ST_MODE_01);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showSoshiki Logic end ");
        }

        /**
         * 「担当者検索」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public showJugyoin(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showJugyoin Logic start ");
            try {
                context.putSucceedData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.ST_MODE_02);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showJugyoin Logic end ");
        }

        /**
         * 「全選択」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public ZenSentaku(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.ZenSentaku Logic start ");
            this.setSpreadSelected(context, true);
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.ZenSentaku Logic end ");
        }

        /**
         * 「全選択解除」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public ZenKaijo(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.ZenKaijo Logic start ");
            this.setSpreadSelected(context, false);
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.ZenKaijo Logic end ");
        }

        /**
         * 「行追加」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public GyoTsuika(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.GyoTsuika Logic start ");
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initInformation(context);
            this.clearSpreadBgColor(spreadData);
            const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
            const maxCount: number = new Number(qtSaidaiKensaku).valueOf();
            if (/* intValue */(maxCount|0) !== spreadData.getRowCount()){
                this.addRowSprAndCellEditableFalse(spreadData, this.SPRD_EDITABLE_FALSE_CELLS_ADD);
                const count: number = spreadData.getRowCount();
                spreadData.setCellValue$int$int$java_lang_String(count - 1, YEMTSSF260MLogic.ON_DB_COLUMN, YEMTSSF260MLogic.NO_DB_ADD_ROW);
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setEnabledFooterButton(context, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN9, true);
            }
            returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
            spreadData.setPosition$int$java_lang_String(spreadData.getRowCount() - 1, spreadData.getColumnInformationName(4));
            spreadData.setViewport(com.fujitsu.jcf.gui.JCFSpreadData.VIEWPORT_LASTROW_$LI$());
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.GyoTsuika Logic end ");
        }

        /**
         * 「条件複写」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public goJokenFukusha(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goJokenFukusha Logic start ");
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                let comObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                let DtNengetsu: string = this.getComboboxSelectedText(comObj.getSelectableElementValue());
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goJokenFukusha:comboDt\uff1a" + DtNengetsu);
                DtNengetsu = DtNengetsu.substring(0, 4) + DtNengetsu.substring(5, 7);
                const txtCdChain: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINCD);
                const txtNmChain: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINRYAKUNM);
                const txtCdChoaisaki: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKI);
                const txtNmChoaisaki: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKIRYAKUNM);
                const txtCdShiten: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SHITENSYOKUBACD);
                const txtNmSoshiki: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SONEKIKANRISOSIKIRYAKUNM);
                const txtCdtantou: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_TANTOSHACD);
                const txtNmTantou: com.fujitsu.jcf.gui.JCFItemData = <com.fujitsu.jcf.gui.JCFItemData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_JYUGYOINNM);
                comObj = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                const comboKeisanHouho: string = this.getComboID(comObj);
                const cdChain: string = this.blankToNull(txtCdChain.getValue());
                const nmChain: string = this.blankToNull(txtNmChain.getValue());
                const cdChoai: string = this.blankToNull(txtCdChoaisaki.getValue());
                const nmChoai: string = this.blankToNull(txtNmChoaisaki.getValue());
                const cdSoshiki: string = this.blankToNull(txtCdShiten.getValue());
                const nmSoshiki: string = this.blankToNull(txtNmSoshiki.getValue());
                const cdTantou: string = this.blankToNull(txtCdtantou.getValue());
                const nmTantou: string = this.blankToNull(txtNmTantou.getValue());
                const selectedRowMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, DtNengetsu);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, cdChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_RYAKU, nmChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, cdChoai);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TYOAISAKI_RYAKU, nmChoai);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SHOKUBA2, cdSoshiki);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SONEKI_KANRISOSHIKI_RYAKU, nmSoshiki);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_TOKUBAI_KEISAN, comboKeisanHouho);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA, cdTantou);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TANTOSHA, nmTantou);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_KEISANHOUHO_MAP, comObj.getSelectableElementValue());
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF350MLogic.goJokenFukusha \u8a73\u7d30\u753b\u9762\uff29\uff26 start: ");
                this.showHashMap$java_util_HashMap(selectedRowMap);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF350MLogic.goJokenFukusha \u8a73\u7d30\u753b\u9762\uff29\uff26 end: ");
                context.putUserData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_SELECTED_ROW_INFO, selectedRowMap);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goJokenFukusha Logic end : ");
            }
        }

        /**
         * 「月次チェーン見込参照」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public goGetsujiChain(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goGetsujiChain Logic start ");
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                let comObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                const comboKeisanHouho: string = this.getComboID(comObj);
                if (comboKeisanHouho === ("06")){
                    this.setCompErrColor$boolean$com_fujitsu_jcf_gui_JCFItemData(true, comObj);
                    returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW155, ["\u8a08\u7b97\u65b9\u6cd5", "\u5e02\u4e73\u5bb6\u5ead\u7528", "\u6708\u6b21\u30c1\u30a7\u30fc\u30f3\u898b\u8fbc\u53c2\u7167"]);
                    returnInfo.cancelScreenTransition();
                }
                comObj = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                let comboDt: string = this.getComboboxSelectedText(comObj.getSelectableElementValue());
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showData:comboDt\uff1a" + comboDt);
                comboDt = comboDt.substring(0, 4) + comboDt.substring(5, 7);
                const selectedRowMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, comboDt);
                context.putUserData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_SELECTED_ROW_INFO, selectedRowMap);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goGetsujiChain Logic end : ");
            }
        }

        /**
         * 「詳細」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public goShosai(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goShosai Logic start ");
            try {
                const cellPos: com.fujitsu.jcf.gui.JCFSpreadCellPosition = this.getSpreadCellPosition(event);
                const currentRow: number = cellPos.row;
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goShosai:currentRow" + currentRow);
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const onDb: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.ON_DB_COLUMN);
                if ((onDb === YEMTSSF260MLogic.ON_DB) === false){
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YEMSPSMCW006);
                    return;
                }
                const comObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_YM);
                let comboDt: string = this.getComboboxSelectedText(comObj.getSelectableElementValue());
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.showData:comboDt\uff1a" + comboDt);
                comboDt = comboDt.substring(0, 4) + comboDt.substring(5, 7);
                const DtNengetsu: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NENGETSU);
                const cdChain: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_CHAIN);
                const nmChain: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NMCHAIN);
                const cdChoai: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_CHOAI);
                const nmChoai: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NMCHOAI);
                const cdSoshiki: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_SYOKUBA);
                const nmSoshiki: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NMSYOKUBA);
                const stKeisanHoho: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_KEISAN_HOUHO);
                const tmKoshin: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.UCHK_SPRD_COL_DT_KOSHIN);
                const fgKyuKaMode: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.UCHK_SPRD_COL_FG_KYU_KA_MODE);
                const stChain: string = this.getSelectedSprdComboId(spreadData, currentRow, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN);
                const nmChainKubun: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.UCHK_SPRD_COL_NM_CHAIN_KUBUN);
                const selectedRowMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, DtNengetsu);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, cdChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_RYAKU, nmChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, cdChoai);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TYOAISAKI_RYAKU, nmChoai);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SHOKUBA2, cdSoshiki);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SONEKI_KANRISOSHIKI_RYAKU, nmSoshiki);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_TOKUBAI_KEISAN, stKeisanHoho);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ROW_INDEX, new Number(currentRow).valueOf().toString());
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TM_KOSHIN, tmKoshin);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_KYU_KA_MODE, fgKyuKaMode);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_CHAIN, stChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_KUBUN, nmChainKubun);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF350MLogic.goShosai \u8a73\u7d30\u753b\u9762\uff29\uff26 start: ");
                this.showHashMap$java_util_HashMap(selectedRowMap);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF350MLogic.goShosai \u8a73\u7d30\u753b\u9762\uff29\uff26 end: ");
                context.putUserData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_SELECTED_ROW_INFO, selectedRowMap);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goShosai Logic end : ");
            }
        }

        /**
         * 「配信」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public goHaishin(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goHaishin Logic start ");
            try {
                const cellPos: com.fujitsu.jcf.gui.JCFSpreadCellPosition = this.getSpreadCellPosition(event);
                const currentRow: number = cellPos.row;
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goHaishin:currentRow" + currentRow);
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const onDb: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.ON_DB_COLUMN);
                if ((onDb === YEMTSSF260MLogic.ON_DB) === false){
                    com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YEMSPSMCW013);
                    return;
                }
                const keisanHouho: string = spreadData.getCellValue(currentRow, 18);
                const comObj: com.fujitsu.jcf.gui.JCFComboBoxData = <com.fujitsu.jcf.gui.JCFComboBoxData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_CMB_KEISANHOUHO);
                const stKeisan: string = this.getComboboxText(comObj.getSelectableElementValue(), keisanHouho);
                const cdChain: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_CHAIN);
                const nmChain: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NMCHAIN);
                const cdChoai: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_CHOAI);
                const nmChoai: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NMCHOAI);
                const cdSoshiki: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_SYOKUBA);
                const nmSoshiki: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NMSYOKUBA);
                const cdTantou: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_TANTOSHA);
                const nmTantou: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NMTANTOSHA);
                const dtNengetsu: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.SPRD_COL_NENGETSU);
                const stChain: string = this.getSelectedSprdComboId(spreadData, currentRow, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN);
                const nmChainKubun: string = spreadData.getCellValue(currentRow, YEMTSSF260MLogic.UCHK_SPRD_COL_NM_CHAIN_KUBUN);
                const selectedRowMap: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_TOKUBAI_KEISAN, stKeisan);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, cdChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_RYAKU, nmChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, cdChoai);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TYOAISAKI_RYAKU, nmChoai);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SHOKUBA2, cdSoshiki);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SONEKI_KANRISOSHIKI_RYAKU, nmSoshiki);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA, cdTantou);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_JUGYOIN_MIYOJI, nmTantou);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, dtNengetsu);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_CHAIN, stChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>selectedRowMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_KUBUN, nmChainKubun);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF350MLogic.goShosai \u8a73\u7d30\u753b\u9762\uff29\uff26 start: ");
                this.showHashMap$java_util_HashMap(selectedRowMap);
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF350MLogic.goShosai \u8a73\u7d30\u753b\u9762\uff29\uff26 end: ");
                context.putUserData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.KEY_SELECTED_ROW_INFO, selectedRowMap);
            } catch(th) {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug(th.message);
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.goHaishin Logic end : ");
            }
        }

        /**
         * 「店検索」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
         */
        public showTokuyakutenM(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showTokuyakuten2 Logic start : ");
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const eventInfo: com.fujitsu.jcf.ctrl.JCFEventAdditionalInfo = event.getEventAdditionalInfo();
                const spreadAdditionalInfo: com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo = <com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo>eventInfo.getAdditionalInfo();
                const position: com.fujitsu.jcf.gui.JCFSpreadCellPosition = spreadAdditionalInfo.getCellPosition();
                const cdTen: string = spreadData.getCellValue(position.row, YEMTSSF260MLogic.SPRD_COL_CHOAI);
                const literalCondition: Array<any> = <any>([]);
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>context.getApplicationData(com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
                const cdKaisha: string = loginInfo.getCdKaisha();
                const dtUnyo: string = loginInfo.getDtUnyo();
                /* add */(literalCondition.push(cdKaisha)>0);
                const inData: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, "condition01", cdTen);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, "condition02", dtUnyo);
                let nmTen: string = null;
                if (cdTen != null && !("" === cdTen)){
                    nmTen = super.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, "GeneralSearch061", inData, literalCondition, "result03");
                }
                if (nmTen != null && !("" === nmTen)){
                    spreadData.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_NMCHOAI, nmTen);
                    returnInfo.cancelScreenTransition();
                    spreadData.setPosition$int$java_lang_String(position.row, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_CHOAI));
                } else {
                    context.putSucceedData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.ST_MODE_02);
                    this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAdditionalInfo.getCellPosition());
                }
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showTokuyakuten2 Logic end : ");
        }

        /**
         * 「CHAINコード検索」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
         * @modelguid {A02A85F6-C032-4287-BDB1-5E8E87E3AE65}
         */
        public showChainM(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showChain2 Logic start");
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const eventInfo: com.fujitsu.jcf.ctrl.JCFEventAdditionalInfo = event.getEventAdditionalInfo();
                const spreadAdditionalInfo: com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo = <com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo>eventInfo.getAdditionalInfo();
                const position: com.fujitsu.jcf.gui.JCFSpreadCellPosition = spreadAdditionalInfo.getCellPosition();
                const cdChain: string = spreadData.getCellValue(position.row, YEMTSSF260MLogic.SPRD_COL_CHAIN);
                const literalCondition: Array<any> = <any>([]);
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>context.getApplicationData(com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
                const cdKaisha: string = loginInfo.getCdKaisha();
                /* add */(literalCondition.push(cdKaisha)>0);
                const inData: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, "condition02", cdChain);
                let nmChain: string = null;
                if (cdChain != null && !("" === cdChain)){
                    nmChain = super.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, "GeneralSearch023", inData, literalCondition, "result04");
                }
                if (nmChain != null && !("" === nmChain)){
                    spreadData.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_NMCHAIN, nmChain);
                    returnInfo.cancelScreenTransition();
                    spreadData.setPosition$int$java_lang_String(position.row, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_CHAIN));
                } else {
                    context.putSucceedData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.ST_MODE_01);
                    this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAdditionalInfo.getCellPosition());
                }
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showChain2 Logic end");
        }

        /**
         * 「支店･職場検索」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
         */
        public showSoshikiM(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showSoshiki Logic start : ");
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const eventInfo: com.fujitsu.jcf.ctrl.JCFEventAdditionalInfo = event.getEventAdditionalInfo();
                const spreadAdditionalInfo: com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo = <com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo>eventInfo.getAdditionalInfo();
                const position: com.fujitsu.jcf.gui.JCFSpreadCellPosition = spreadAdditionalInfo.getCellPosition();
                const cdShokuba: string = spreadData.getCellValue(position.row, YEMTSSF260MLogic.SPRD_COL_SYOKUBA);
                const literalCondition: Array<any> = <any>([]);
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>context.getApplicationData(com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
                const cdKaisha: string = loginInfo.getCdKaisha();
                const dtUnyo: string = loginInfo.getDtUnyo();
                /* add */(literalCondition.push(cdKaisha)>0);
                const inData: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, "condition01", cdShokuba);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, "condition02", dtUnyo);
                let nmShukuba: string = null;
                if (cdShokuba != null && !("" === cdShokuba)){
                    nmShukuba = super.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, "GeneralSearch056", inData, literalCondition, "result03");
                }
                if (nmShukuba != null && !("" === nmShukuba)){
                    spreadData.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_NMSYOKUBA, nmShukuba);
                    returnInfo.cancelScreenTransition();
                    spreadData.setPosition$int$java_lang_String(position.row, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_SYOKUBA));
                } else {
                    context.putSucceedData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.ST_MODE_01);
                    this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAdditionalInfo.getCellPosition());
                }
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showSoshiki Logic end : ");
        }

        /**
         * 「担当者」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
         */
        public showJugyoinM(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showJugyoin2 Logic start : ");
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
                const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                const eventInfo: com.fujitsu.jcf.ctrl.JCFEventAdditionalInfo = event.getEventAdditionalInfo();
                const spreadAdditionalInfo: com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo = <com.fujitsu.jcf.gui.JCFSpreadAdditionalInfo>eventInfo.getAdditionalInfo();
                const position: com.fujitsu.jcf.gui.JCFSpreadCellPosition = spreadAdditionalInfo.getCellPosition();
                const cdTantosha: string = spreadData.getCellValue(position.row, YEMTSSF260MLogic.SPRD_COL_TANTOSHA);
                const literalCondition: Array<any> = <any>([]);
                const loginInfo: com.fujitsu.sms.sol.sys.SMSLoginInfoImpl = <com.fujitsu.sms.sol.sys.SMSLoginInfoImpl>context.getApplicationData(com.fujitsu.sms.sol.sys.SMSHashKeyConst.PARAM_KEY_COMMON);
                const cdKaisha: string = loginInfo.getCdKaisha();
                /* add */(literalCondition.push(cdKaisha)>0);
                const inData: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, "condition01", cdTantosha);
                let nmTantosha: string = null;
                if (cdTantosha != null && !("" === cdTantosha)){
                    const nmMyoji: string = super.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, "GeneralSearch036", inData, literalCondition, "result02");
                    const nmName: string = super.getNameByGeneralSearch$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_util_HashMap$java_util_List$java_lang_String(context, "GeneralSearch036", inData, literalCondition, "result03");
                    nmTantosha = nmMyoji + nmName;
                }
                if (nmTantosha != null && !("" === nmTantosha)){
                    spreadData.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_NMTANTOSHA, nmTantosha);
                    returnInfo.cancelScreenTransition();
                    spreadData.setPosition$int$java_lang_String(position.row, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_TANTOSHA));
                } else {
                    context.putSucceedData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.ST_MODE_02);
                    this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAdditionalInfo.getCellPosition());
                }
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("showJugyoin2 Logic end : ");
        }

        /**
         * 「店群検索結果反映」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public setTen(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setTen Logic start ");
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
            const cdTenItem: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKI);
            const nmTenItem: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKIRYAKUNM);
            try {
                if (<string>context.getSucceedData("cdTen") != null){
                    cdTenItem.setValue(<string>context.getSucceedData("cdTen"));
                    nmTenItem.setValue(<string>context.getSucceedData("nmTenRyaku"));
                }
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHOAISAKI);
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                return;
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setTen Logic end");
        }

        /**
         * 「チェーン果反映」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public setChain(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setChain Logic start ");
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
            const cdChainItem: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINCD);
            const nmChainItem: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINRYAKUNM);
            try {
                if (<string>context.getSucceedData("cdChain") != null){
                    cdChainItem.setValue(<string>context.getSucceedData("cdChain"));
                    nmChainItem.setValue(<string>context.getSucceedData("nmChainRyakusiki"));
                }
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_CHAINCD);
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                return;
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setChain Logic end");
        }

        /**
         * 「組織検索結果反映」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public setSoshiki(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setSoshiki Logic start ");
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
            const cdSoshikiItem: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SHITENSYOKUBACD);
            const nmSoshikiItem: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SONEKIKANRISOSIKIRYAKUNM);
            try {
                if (<string>context.getSucceedData("cdSonekikanriSoshiki") != null){
                    cdSoshikiItem.setValue(<string>context.getSucceedData("cdSonekikanriSoshiki"));
                    nmSoshikiItem.setValue(<string>context.getSucceedData("nmSonekiSoshikiRyaku"));
                }
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_SHITENSYOKUBACD);
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                return;
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setSoshiki Logic end");
        }

        /**
         * 「従業員検索結果反映」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public setJugyoin(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setJugyoin Logic start ");
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
            const cdSoshikiItem: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_TANTOSHACD);
            const nmSoshikiItem: com.fujitsu.jcf.gui.JCFFieldStringData = <com.fujitsu.jcf.gui.JCFFieldStringData>panelData.getItemData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_JYUGYOINNM);
            try {
                if (<string>context.getSucceedData("cdJugyoin") != null){
                    cdSoshikiItem.setValue(<string>context.getSucceedData("cdJugyoin"));
                    const nmMyoji: string = <string>context.getSucceedData("nmJugyoinMyoji");
                    const nmNamae: string = <string>context.getSucceedData("nmJugyoinNamae");
                    nmSoshikiItem.setValue(nmMyoji + nmNamae);
                }
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_TXT_TANTOSHACD);
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                return;
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setJugyoin Logic end");
        }

        /**
         * 「店コード反映」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
         * @modelguid {EAF417A7-ADF4-4048-8AD3-B86C034DB43E}
         */
        public setTenM(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                let position: com.fujitsu.jcf.gui.JCFSpreadCellPosition = null;
                position = <com.fujitsu.jcf.gui.JCFSpreadCellPosition>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION);
                if (position == null){
                    return;
                }
                if (<string>context.getSucceedData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_CD_TEN) != null){
                    spread.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_CHOAI, <string>context.getSucceedData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_CD_TEN));
                    spread.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_NMCHOAI, <string>context.getSucceedData(lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_NM_TEN_RYAKU));
                }
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, null);
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, null);
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                spread.setPosition$int$java_lang_String(position.row, spread.getColumnInformationName(position.column));
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                return;
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
        }

        /**
         * 「CHAINコード反映」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
         * @modelguid {EAF417A7-ADF4-4048-8AD3-B86C034DB43E}
         */
        public setChainM(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                let position: com.fujitsu.jcf.gui.JCFSpreadCellPosition = null;
                position = <com.fujitsu.jcf.gui.JCFSpreadCellPosition>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION);
                if (position == null){
                    return;
                }
                if (<string>context.getSucceedData("cdChain") != null){
                    spread.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_CHAIN, <string>context.getSucceedData("cdChain"));
                    spread.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_NMCHAIN, <string>context.getSucceedData("nmChainRyakusiki"));
                }
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, null);
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, null);
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                spread.setPosition$int$java_lang_String(position.row, spread.getColumnInformationName(position.column));
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                return;
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
        }

        /**
         * 「支店･職場検索コード反映」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
         * @modelguid {EAF417A7-ADF4-4048-8AD3-B86C034DB43E}
         */
        public setSoshikiM(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                let position: com.fujitsu.jcf.gui.JCFSpreadCellPosition = null;
                position = <com.fujitsu.jcf.gui.JCFSpreadCellPosition>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION);
                if (position == null){
                    return;
                }
                if (<string>context.getSucceedData("cdSonekikanriSoshiki") != null){
                    spread.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_SYOKUBA, <string>context.getSucceedData("cdSonekikanriSoshiki"));
                    spread.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_NMSYOKUBA, <string>context.getSucceedData("nmSonekiSoshikiRyaku"));
                }
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, null);
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, null);
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                spread.setPosition$int$java_lang_String(position.row, spread.getColumnInformationName(position.column));
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                return;
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
        }

        /**
         * 「担当者コード反映」処理時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
         * @modelguid {EAF417A7-ADF4-4048-8AD3-B86C034DB43E}
         */
        public setJugyoinM(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            try {
                const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
                const spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                let position: com.fujitsu.jcf.gui.JCFSpreadCellPosition = null;
                position = <com.fujitsu.jcf.gui.JCFSpreadCellPosition>super.getUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION);
                if (position == null){
                    return;
                }
                if (<string>context.getSucceedData("cdJugyoin") != null){
                    spread.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_TANTOSHA, <string>context.getSucceedData("cdJugyoin"));
                    const myoJi: string = <string>context.getSucceedData("nmJugyoinMyoji");
                    const name: string = <string>context.getSucceedData("nmJugyoinNamae");
                    spread.setCellValue$int$int$java_lang_String(position.row, YEMTSSF260MLogic.SPRD_COL_NMTANTOSHA, this.nullToBlank(myoJi) + this.nullToBlank(name));
                }
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, com.fujitsu.sms.sol.sys.SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, null);
                this.putUserData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_Object$java_lang_Object(context, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.SEARCH_ST_MODE, null);
                returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
                spread.setPosition$int$java_lang_String(position.row, spread.getColumnInformationName(position.column));
                const qtSaidaiKensaku: string = com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_MAXDISPLAYCNT_$LI$());
                this.setQtSaidaiKensaku(context, qtSaidaiKensaku);
                return;
            } catch(th) {
                super.callErrorAdapter(context, th);
            }
        }

        /**
         * 「戻り」時の業務ロジック
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFEvent} event                ＣＪＦイベントオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context              ＣＪＦコンテキストオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         */
        public preShowBack(event: com.fujitsu.jcf.ctrl.JCFEvent, context: com.fujitsu.jcf.ctrl.JCFContext, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setShosai Logic start");
            try {
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setEnabledFooterButton(context, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN8, true);
                const screenName: string = <string>com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(YEMTSSF260MLogic.SUBSYS, YEMTSSF260MLogic.PROP_KEY_SCREEN_NAME_$LI$());
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setHeaderTitle$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(context, screenName, YEMTSSF260MLogic.GAMEN_ID);
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.initInformation(context);
            } catch(th) {
                super.callErrorAdapter(context, th);
            } finally {
                com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setShosai Logic end");
            }
        }

        /**
         * スプレッドシートにデータをセットする<BR>
         * 
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData           スプレッドシートオブジェクト
         * @param {*} receiveMap           検索結果ハッシュマップオブジェクト
         * @param {string} keyStr           　　検索結果リストキー名
         * @return {number} int: 　　　　　　　 検索結果行数
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFDataException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @param {string} comboKeisanHouho
         */
        public setSpreadData(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, receiveMap: any, keyStr: string, comboKeisanHouho: string): number {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setSpreadData Logic start ");
            const seisankingakuKakuteiList: any[] = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>receiveMap, keyStr);
            let rowCount: number = 0;
            if (seisankingakuKakuteiList != null){
                rowCount = seisankingakuKakuteiList.length;
            }
            for(let i: number = 0; i < rowCount; i++) {{
                this.addRowSprAndCellEditableFalse(spreadData, this.SPRD_EDITABLE_FALSE_CELLS_SERCH);
                const mesaiMap: any = <any>seisankingakuKakuteiList[i];
                const colKey: Array<any> = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>mesaiMap);
                for(let ci: number = 0; ci < this.COL_LIST_BODY.length; ci++) {{
                    const colId: number = /* parseInt */parseInt(this.COL_LIST_BODY[ci][1]);
                    const colName: string = this.getSpreadColName(this.COL_LIST_BODY, /* valueOf */String(colId).toString());
                    if (colName == null || ("" === colName)){
                        continue;
                    }
                    switch((spreadData.getColumnInformationEditType(colId))) {
                    case com.fujitsu.jcf.gui.JCFSpread.STRING:
                        if (colName === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_JUGYOIN_MIYOJI){
                            const nmMiyoji: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, colName);
                            const nmNamae: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_JUGYOIN_NAMAE);
                            const strShimei: string = this.joinName(nmMiyoji, nmNamae);
                            spreadData.setCellValue$int$int$java_lang_String(i, colId, this.nullToBlank(strShimei));
                        } else if (colName === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_KAKUNINSHA_MYOJI){
                            const nmMiyoji: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, colName);
                            const nmNamae: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_KAKUNINSHA_NAMAE);
                            const strShimei: string = this.joinName(nmMiyoji, nmNamae);
                            spreadData.setCellValue$int$int$java_lang_String(i, colId, this.nullToBlank(strShimei));
                        } else if (colName === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_KAKUNIN){
                            if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, colName) != null){
                                const sb: { str: string, toString: Function } = { str: /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, colName).toString(), toString: function() { return this.str; } };
                                /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 4, '/');
                                /* insert */((sb, index, c) => { sb.str = sb.str.substr(0, index) + c + sb.str.substr(index); return sb; })(sb, 7, '/');
                                spreadData.setCellValue$int$int$java_lang_String(i, colId, /* toString */sb.str);
                            }
                        } else if (colName === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_KUBUN){
                            spreadData.setCellValue$int$int$java_lang_String(i, colId, this.nullToBlank(spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN)));
                        } else {
                            spreadData.setCellValue$int$int$java_lang_String(i, colId, this.nullToBlank(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, colName)));
                        }
                        break;
                    case com.fujitsu.jcf.gui.JCFSpread.COMBOBOX:
                        break;
                    case com.fujitsu.jcf.gui.JCFSpread.COMBOBOX2:
                        if (colName === lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_CHAIN){
                            const selectedCode: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, colName);
                            this.setSelectedSprdCombo(spreadData, i, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN, selectedCode);
                        }
                        break;
                    case com.fujitsu.jcf.gui.JCFSpread.PUSHBUTTON:
                        break;
                    case com.fujitsu.jcf.gui.JCFSpread.DATE:
                        break;
                    default:
                        spreadData.setCellValue$int$int$java_lang_String(i, colId, this.nullToBlank(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>mesaiMap, colName)));
                    }
                };}
                spreadData.setCellValue$int$int$java_lang_String(i, YEMTSSF260MLogic.ON_DB_COLUMN, YEMTSSF260MLogic.ON_DB);
            };}
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setSpreadData Logic end");
            return rowCount;
        }

        /**
         * マイナス月ハッシュマップとプラス月ハッシュマップを結合する<BR>
         * 
         * @param {java.util.HashMap[]} minus          マイナス月ハッシュマップ
         * @param {java.util.HashMap[]} plus           プラス月ハッシュマップ
         * @return {java.util.HashMap[]} HashMap: 　　　結合されたハッシュマップオブジェクト
         * @exception FException     例外が発生した場合にスローされる例外オブジェクト
         * @private
         */
        /*private*/ setPlusMinusMonth(minus: any[], plus: any[]): any[] {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setPlusMinusMonth Logic start ");
            const minusSize: number = minus.length - 1;
            const plusSize: number = plus.length;
            const size: number = minusSize + plusSize;
            const retHash: any[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(size);
            let i: number = 0;
            let count: number = 0;
            for(i = 0; i < minusSize; i++) {{
                const colKey: Array<any> = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>minus[i]);
                retHash[count] = <any>({});
                for(const colite: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(colKey); colite.hasNext(); ) {{
                    const colName: string = <string>colite.next();
                    const value: string = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>minus[i], colName).toString();
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>retHash[count], colName, value);
                };}
                count++;
            };}
            for(i = 0; i < plusSize; i++) {{
                const colKey: Array<any> = /* keySet */((m) => { let r=[]; if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) r.push(m.entries[i].key); return r; })(<any>plus[i]);
                retHash[count] = <any>({});
                for(const colite: any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(colKey); colite.hasNext(); ) {{
                    const colName: string = <string>colite.next();
                    const value: string = /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>plus[i], colName).toString();
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>retHash[count], colName, value);
                };}
                count++;
            };}
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setPlusMinusMonth Logic end");
            return retHash;
        }

        /**
         * スプレッドの全選択チェックボックスを選択・非選択にする<BR>
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context          ＣＪＦコンテキストオブジェクト
         * @param {boolean} isSelect         true:全選択　false:全解除
         * @exception FException     例外が発生した場合にスローされる例外オブジェクト
         * @private
         */
        /*private*/ setSpreadSelected(context: com.fujitsu.jcf.ctrl.JCFContext, isSelect: boolean) {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setSpreadSelected Logic start ");
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
            let i: number = 0;
            let onDbfg: string;
            for(i = 0; i < spreadData.getRowCount(); i++) {{
                onDbfg = spreadData.getCellValue(i, YEMTSSF260MLogic.ON_DB_COLUMN);
                if ((onDbfg === YEMTSSF260MLogic.NO_DB_ADD_ROW) === false){
                    spreadData.setCellValue$int$int$boolean(i, 0, isSelect);
                }
            };}
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.setSpreadSelected Logic end");
        }

        /**
         * コンボボックスの選択されているテキストを取得する<br>
         * 
         * @param {com.fujitsu.jcf.gui.JCFSelectableElement[]} cellElement コンボボックス選択リスト<br>
         * @return {string} 選択されているコード<br>
         */
        public getComboboxSelectedText(cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[]): string {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.getComboboxSelectedText Logic start ");
            let selectedTxtd: string = "";
            for(let cnt: number = 0; cnt < cellElement.length; cnt++) {{
                if (cellElement[cnt].isSelected()){
                    selectedTxtd = cellElement[cnt].getText();
                    break;
                }
            };}
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("YEMTSSF260MLogic.getComboboxSelectedText Logic end");
            return selectedTxtd;
        }

        /**
         * コンボボックスの選択されているテキストを取得する<br>
         * 
         * @param {com.fujitsu.jcf.gui.JCFSelectableElement[]} cellElement コンボボックス選択リスト<br>
         * @return {string} 選択されているコード<br>
         * @param {string} id
         */
        public getComboboxText(cellElement: com.fujitsu.jcf.gui.JCFSelectableElement[], id: string): string {
            let combId: string = "";
            let matchTxtd: string = "";
            for(let cnt: number = 0; cnt < cellElement.length; cnt++) {{
                combId = cellElement[cnt].getID();
                if (combId === id){
                    matchTxtd = cellElement[cnt].getText();
                    break;
                }
            };}
            return matchTxtd;
        }

        public getSpreadCheckedCnt$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int(spread: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, column: number): number {
            let count: number = 0;
            if (spread.getRowCount() === 0)return count;
            for(let i: number = 0; i < spread.getRowCount(); i++) {{
                if (spread.getCellBooleanValue(i, column)){
                    count = count + 1;
                }
            };}
            return count;
        }

        /**
         * スプレッドシートのチェックされている行数を取得する<br>
         * 
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spread スプレッドオブジェクト<br>
         * @param {number} column カラム番号０〜
         * @return {number} 選択されているコード<br>
         */
        public getSpreadCheckedCnt(spread?: any, column?: any): number {
            if (((spread != null && spread instanceof <any>com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData) || spread === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.getSpreadCheckedCnt$com_fujitsu_sms_sol_sys_cjf_SMSJCFSpreadData$int(spread, column);
            } else if (((spread != null && spread instanceof <any>com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData) || spread === null) && column === undefined) {
                return super.getSpreadCheckedCnt(spread);
            } else throw new Error('invalid overload');
        }

        /**
         * スプレッド内のデータをメッセージリストに設定する<br>
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context	ＣＪＦコンテキストオブジェクト
         * @param spread 	スプレッドオブジェクト<br>
         * @param {string} cdKaisya 会社コード
         * @param {string} cmbNengetu 年月
         * @param {string} cmbKeisan 計算方法
         * @return {Array} 登録リスト<br>
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData
         * @private
         */
        /*private*/ makeSendMsg4Regist(context: com.fujitsu.jcf.ctrl.JCFContext, spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, cdKaisya: string, cmbNengetu: string, cmbKeisan: string): Array<any> {
            let shosaiMsgArray: Array<any> = null;
            for(let i: number = 0; i < spreadData.getRowCount(); i++) {{
                const cdChoaisaki: string = spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_CHOAI);
                const cdChain: string = spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_CHAIN);
                const cdSyokuba: string = spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_SYOKUBA);
                const cdTantou: string = spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_TANTOSHA);
                const stChain: string = this.getSelectedSprdComboId(spreadData, i, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN);
                const dtNengetu: string = spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_NENGETSU);
                const stKeisan: string = spreadData.getCellValue(i, YEMTSSF260MLogic.SPRD_COL_KEISAN_HOUHO);
                const tmKoshin: string = spreadData.getCellValue(i, YEMTSSF260MLogic.UCHK_SPRD_COL_DT_KOSHIN);
                const onDbfg: string = spreadData.getCellValue(i, YEMTSSF260MLogic.ON_DB_COLUMN);
                const hdcdChoaisaki: string = spreadData.getCellValue(i, YEMTSSF260MLogic.UCHK_SPRD_COL_CHOAI);
                const hdcdChain: string = spreadData.getCellValue(i, YEMTSSF260MLogic.UCHK_SPRD_COL_CHAIN);
                const hdcdSyokuba: string = spreadData.getCellValue(i, YEMTSSF260MLogic.UCHK_SPRD_COL_SYOKUBA);
                const hdcdTantou: string = spreadData.getCellValue(i, YEMTSSF260MLogic.UCHK_SPRD_COL_TANTOSHA);
                const hdstChain: string = spreadData.getCellValue(i, YEMTSSF260MLogic.UCHK_SPRD_COL_ST_CHAIN);
                const isDelete: boolean = spreadData.getCellBooleanValue(i, 1);
                if (isDelete && (onDbfg === YEMTSSF260MLogic.NO_DB_ADD_ROW)){
                    continue;
                }
                if ((onDbfg === YEMTSSF260MLogic.NO_DB_ADD_ROW) || (onDbfg === YEMTSSF260MLogic.ON_DB)){
                    if ((onDbfg === YEMTSSF260MLogic.NO_DB_ADD_ROW) && (this.blankToNull(cdChoaisaki) == null && this.blankToNull(cdChain) == null && this.blankToNull(cdSyokuba) == null && this.blankToNull(cdTantou) == null && this.blankToNull(stChain) == null)){
                        continue;
                    }
                    if (this.blankToNull(cdChoaisaki) == null){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_CHOAI, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_CHOAI));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW025, ["\u5e33\u5408\u5148\u30b3\u30fc\u30c9"]);
                        return null;
                    }
                    if (this.blankToNull(cdChain) == null){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_CHAIN, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_CHAIN));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW025, ["\u30c1\u30a7\u30fc\u30f3\u30b3\u30fc\u30c9"]);
                        return null;
                    }
                    if ((cmbKeisan === ("01")) && this.blankToNull(stChain) != null){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_ST_CHAIN));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW035, ["\u8a08\u7b97\u65b9\u6cd5\u306b\u4e73\u98df\u5bb6\u5ead\u7528", "\u30c1\u30a7\u30fc\u30f3\u533a\u5206"]);
                        return null;
                    }
                    if ((cmbKeisan === ("06")) && this.blankToNull(stChain) == null){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_ST_CHAIN));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW025, ["\u30c1\u30a7\u30fc\u30f3\u533a\u5206"]);
                        return null;
                    }
                    if (this.blankToNull(cdSyokuba) == null){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_SYOKUBA, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_SYOKUBA));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW025, ["\u8077\u5834\u30b3\u30fc\u30c9"]);
                        return null;
                    }
                    if (this.blankToNull(cdTantou) == null){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_TANTOSHA, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_TANTOSHA));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW025, ["\u62c5\u5f53\u8005\u30b3\u30fc\u30c9"]);
                        return null;
                    }
                    if (this.numck(cdChoaisaki) === false || cdChoaisaki.length !== YEMTSSF260MLogic.LEN_CHOAI_CD){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_CHOAI, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_CHOAI));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW031, ["\u5e33\u5408\u5148\u30b3\u30fc\u30c9"]);
                        return null;
                    }
                    if (this.numck(cdChain) === false || cdChain.length !== YEMTSSF260MLogic.LEN_CHOAI_CD){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_CHAIN, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_CHAIN));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW031, ["\u30c1\u30a7\u30fc\u30f3\u30b3\u30fc\u30c9"]);
                        return null;
                    }
                    if (this.numck(cdSyokuba) === false || cdSyokuba.length !== YEMTSSF260MLogic.LEN_SHOKUBA_CD){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_SYOKUBA, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_SYOKUBA));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW031, ["\u8077\u5834\u30b3\u30fc\u30c9"]);
                        return null;
                    }
                    if (com.fujitsu.sms.sol.sys.SMSCheckField.checkField(com.fujitsu.sms.sol.sys.SMSCheckField.FIELD_H, cdTantou) === false || cdTantou.length !== YEMTSSF260MLogic.LEN_JUGYOIN_CD){
                        spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_TANTOSHA, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_ON_COLOR_$LI$());
                        spreadData.setPosition$int$java_lang_String(i, spreadData.getColumnInformationName(YEMTSSF260MLogic.SPRD_COL_TANTOSHA));
                        com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String_A(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW031, ["\u62c5\u5f53\u8005\u30b3\u30fc\u30c9"]);
                        return null;
                    }
                }
                if ((YEMTSSF260MLogic.ON_DB === onDbfg) && !isDelete && (cdSyokuba === hdcdSyokuba) && (cdTantou === hdcdTantou) && (stChain === hdstChain)){
                    continue;
                }
                const shosaiMsg: any = <any>({});
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, cdChoaisaki);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, cdChain);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_TOKUBAI_KEISAN, cmbKeisan);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SONEKIKANRI_SOSHIKI, cdSyokuba);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA, cdTantou);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TM_KOSHIN, tmKoshin);
                if (onDbfg === YEMTSSF260MLogic.NO_DB_ADD_ROW){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_HIKIATE_HOHO, "01");
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NU_HIKIATE_HIYORITSU, "0");
                }
                const rowindex: string = new Number(i).valueOf().toString();
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ROW_INDEX, rowindex);
                if (isDelete){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, dtNengetu);
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_TOROKU, YEMTSSF260MLogic.DELETE);
                } else {
                    if (onDbfg === YEMTSSF260MLogic.NO_DB_ADD_ROW){
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, cmbNengetu);
                    } else {
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, dtNengetu);
                    }
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_TOROKU, onDbfg);
                }
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ROW_INDEX, /* valueOf */String(i).toString());
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>shosaiMsg, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_CHAIN, stChain);
                if (shosaiMsgArray == null){
                    shosaiMsgArray = <any>([]);
                }
                /* add */(shosaiMsgArray.push(shosaiMsg)>0);
            };}
            if (shosaiMsgArray == null){
                com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.showInformation$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String(context, com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSW057);
                return null;
            }
            return shosaiMsgArray;
        }

        /**
         * Spreadにて編集可否Cellを指定する
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData： SMSJCFSpreadDataObj
         * @param {int[]} colIdArray[] ：編集不可にする行のColumIndexを指定したint型配列
         * @return {void} void
         * @param {number} row
         */
        public SprCellEditableFalse(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, row: number, colIdArray: number[]) {
            for(let i: number = 0; i < colIdArray.length; i++) {{
                spreadData.setCellEditable(row, colIdArray[i], false);
            };}
        }

        /**
         * 氏名文字列の連結
         * 
         * @param String 			苗字
         * @param String 			名前
         * @param current		         JCFScreenData
         * @exception JCFException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFIllegalArgumentException ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @param {string} nmMiyoji
         * @param {string} nmNamae
         * @return {string}
         * @private
         */
        /*private*/ joinName(nmMiyoji: string, nmNamae: string): string {
            const nmJygoin: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
            if (nmMiyoji != null && nmMiyoji.length !== 0){
                /* append */(sb => { sb.str += <any>nmMiyoji; return sb; })(nmJygoin);
            }
            if (nmNamae != null && nmNamae.length !== 0){
                /* append */(sb => { sb.str += <any>nmNamae; return sb; })(nmJygoin);
            }
            return /* toString */nmJygoin.str;
        }

        /**
         * スプレッド内のバックグランドカラーを白にする
         * 
         * @param spread 	スプレッドオブジェクト
         * @return {number} 対象数
         * @exception JCFDataIllegalArgumentException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @exception JCFIllegalArgumentException     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData
         * @private
         */
        /*private*/ clearSpreadBgColor(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData): number {
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("clearSpreadBgColor Logic strat");
            const nCount: number = 0;
            for(let i: number = 0; i < spreadData.getRowCount(); i++) {{
                spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_CHOAI, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_OFF_COLOR_$LI$());
                spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_CHAIN, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_OFF_COLOR_$LI$());
                spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_SYOKUBA, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_OFF_COLOR_$LI$());
                spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_TANTOSHA, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_OFF_COLOR_$LI$());
                spreadData.setCellBackground(i, YEMTSSF260MLogic.SPRD_COL_ST_CHAIN, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.CL_ERR_OFF_COLOR_$LI$());
            };}
            com.fujitsu.sms.sol.sys.cjf.SMSCLLog.debug("clearSpreadBgColor Logic end");
            return nCount;
        }

        /**
         * スプレッドの状態によりフッタボタンの活性・非活性を制御する
         * 
         * @param {com.fujitsu.jcf.ctrl.JCFContext} context	ＣＪＦコンテキストオブジェクト
         * @exception Exception     ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
         * @private
         */
        /*private*/ setbuttonStatus(context: com.fujitsu.jcf.ctrl.JCFContext) {
            const current: com.fujitsu.jcf.ctrl.JCFScreenData = context.getCurrentScreenData();
            const panelData: com.fujitsu.jcf.gui.JCFPanelData = current.getPanelData$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY);
            const spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>current.getItemData$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ITEM_SPD_SPREAD);
            let stat: boolean = false;
            if (spreadData.getRowCount() !== 0){
                stat = true;
            }
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setEnabledFooterButton(context, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN1, stat);
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setEnabledFooterButton(context, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN8, stat);
            com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.setEnabledFooterButton(context, com.fujitsu.sms.sol.sys.cjf.logic.SMSHeaderFooterManager.ITEM_FUNCBTN9, stat);
        }

        /**
         * スプレッドからフォーカスを外し指定アイテムにフォーカスを当てる
         * @param {com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData} spreadData	スプレッドオブジェクト
         * @param {com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo           ＣＪＦ復帰情報オブジェクト
         * @param {string} item
         * @private
         */
        /*private*/ setForcus(spreadData: com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData, returnInfo: com.fujitsu.jcf.ctrl.JCFReturnInfo, item: string) {
            spreadData.setPosition$int$java_lang_String(-1, spreadData.getColumnInformationName(0));
            returnInfo.setFocus$java_lang_String$java_lang_String(lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FLM_MAIN_BODY, item);
        }

        /**
         * 計算方法などのコンボボックスのデフォルト値を決定する
         * 
         * @param {com.fujitsu.jcf.gui.JCFComboBoxData} comKeisanHoho コンボボックスデータ(中身は入っていること)
         * @param {*} outComboData	実販マップ
         * @throws JCFDataException
         * 
         * @private
         */
        /*private*/ setDefaultValue(comKeisanHoho: com.fujitsu.jcf.gui.JCFComboBoxData, outComboData: any) {
            const stJitsuhanJigyo: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outComboData, lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines.KEY_ST_JITSUHAN_JIGYO);
            let defaultKeisanHoho: string = null;
            if (stJitsuhanJigyo != null){
                if (stJitsuhanJigyo === ("01")){
                    defaultKeisanHoho = "01";
                } else if (stJitsuhanJigyo === ("02")){
                    defaultKeisanHoho = "02";
                }
            }
            if (defaultKeisanHoho != null){
                const elements: com.fujitsu.jcf.gui.JCFSelectableElement[] = comKeisanHoho.getSelectableElementValue();
                if (elements != null){
                    for(let i: number = 0; i < elements.length; i++) {{
                        const element: com.fujitsu.jcf.gui.JCFSelectableElement = elements[i];
                        const id: string = element.getID();
                        if (id === defaultKeisanHoho){
                            const text: string = element.getText();
                            comKeisanHoho.setValue$java_lang_String(text);
                            break;
                        }
                    };}
                }
            }
        }

        constructor() {
            super();
            this.COL_LIST_BODY = [[lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, "4"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TYOAISAKI_RYAKU, "6"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, "7"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_RYAKU, "9"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SHOKUBA2, "10"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SONEKI_KANRISOSHIKI_RYAKU, "12"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA, "13"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_JUGYOIN_MIYOJI, "15"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_KAKUNIN, "16"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_KAKUNINSHA_MYOJI, "17"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_TOKUBAI_KEISAN, "18"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_NENGETU, "19"], ["ON_COLUMN_DB", YEMTSSF260MLogic.ON_DB_COLUMN_STR], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHOAISAKI, "21"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_TYOAISAKI_RYAKU, "22"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_CHAIN, "23"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_RYAKU, "24"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_SHOKUBA2, "25"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_SONEKI_KANRISOSHIKI_RYAKU, "26"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.CD_TANTOSHA, "27"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_JUGYOIN_MIYOJI, "28"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.DT_KAKUNIN, "29"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_KAKUNINSHA_MYOJI, "30"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.TM_KOSHIN, "31"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.FG_KYU_KA_MODE, "32"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_CHAIN, "33"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.ST_CHAIN, "34"], [lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines.NM_CHAIN_KUBUN, "35"]];
            this.SPRD_EDITABLE_FALSE_CELLS = [6, 9, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
            this.SPRD_EDITABLE_FALSE_CELLS_ADD = [0, 1, 2, 3, 6, 9, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
            this.SPRD_EDITABLE_FALSE_CELLS_SERCH = [4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
        }
    }
    YEMTSSF260MLogic["__class"] = "lib.com.megsnow.yem.tss.cjf.logic.YEMTSSF260MLogic";
    YEMTSSF260MLogic["__interfaces"] = ["lib.com.megsnow.yem.tss.cjf.YEMTSSF000Defines","lib.com.megsnow.yem.tss.cjf.YEMTSSF000ItemDefines"];


}

