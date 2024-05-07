// 🟡 参考用

/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { JCFMessageButtonInfo } from './JCFMessageButtonInfo';
import { JCFDebug } from './JCFDebug';
import { JCFCMMessageProperties } from './JCFCMMessageProperties';
import { JCFInternalError } from './JCFInternalError';
import { JCFMessageOnWindow } from './JCFMessageOnWindow';

class JCFMessage {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!JCFMessage.__static_initialized) { JCFMessage.__static_initialized = true; JCFMessage.initializeData(); } }

    constructor() {
    }

    public static getMessageForWindowID$java_lang_String$java_lang_String(windowID: string, methodName: string): JCFMessageOnWindow {
        const messageCtrl: JCFMessageOnWindow = <JCFMessageOnWindow>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>JCFMessage.messageControllerMap_$LI$(), windowID);
        if (messageCtrl == null){
            const error: JCFInternalError = new JCFInternalError(JCFCMMessageProperties.getExceptionMessage("E1178"));
            JCFDebug.write("JCFMessage", methodName, error, 1282, /* toString *//* append */(sb => { sb.str += <any>windowID; return sb; })(({ str: /* valueOf */String(JCFCMMessageProperties.getExceptionMessage("E1294")).toString(), toString: function() { return this.str; } })).str, "", "");
            throw error;
        } else {
            return messageCtrl;
        }
    }

    public static getMessageForWindowID(windowID?: any, methodName?: any): JCFMessageOnWindow {
        if (((typeof windowID === 'string') || windowID === null) && ((typeof methodName === 'string') || methodName === null)) {
            return <any>JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String(windowID, methodName);
        } else if (((typeof windowID === 'string') || windowID === null) && methodName === undefined) {
            return <any>JCFMessage.getMessageForWindowID$java_lang_String(windowID);
        } else throw new Error('invalid overload');
    }

    static getMessageForWindowID$java_lang_String(windowID: string): JCFMessageOnWindow {
        return JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String(windowID, "getMessageForWindowID");
    }

    public static BTN_OK: string = "ok";

    public static BTN_CANCEL: string = "cancel";

    public static BTN_YES: string = "yes";

    public static BTN_NO: string = "no";

    static BTN_LABEL_OK: string; public static BTN_LABEL_OK_$LI$(): string { JCFMessage.__static_initialize();  return JCFMessage.BTN_LABEL_OK; }

    static BTN_LABEL_CANCEL: string; public static BTN_LABEL_CANCEL_$LI$(): string { JCFMessage.__static_initialize();  return JCFMessage.BTN_LABEL_CANCEL; }

    static BTN_LABEL_YES: string; public static BTN_LABEL_YES_$LI$(): string { JCFMessage.__static_initialize();  return JCFMessage.BTN_LABEL_YES; }

    static BTN_LABEL_NO: string; public static BTN_LABEL_NO_$LI$(): string { JCFMessage.__static_initialize();  return JCFMessage.BTN_LABEL_NO; }

    static btnInfoOk: JCFMessageButtonInfo = null;

    static btnInfoCancel: JCFMessageButtonInfo = null;

    static btnInfoYes: JCFMessageButtonInfo = null;

    static btnInfoNo: JCFMessageButtonInfo = null;

    static ICON_ERROR: string = "gui/iconerror.gif";

    static ICON_INFO: string = "gui/iconinfo.gif";

    static ICON_ALERT: string = "gui/iconalert.gif";

    static ICON_QUESTION: string = "gui/iconquestion.gif";

    static messageControllerMap: any; public static messageControllerMap_$LI$(): any { JCFMessage.__static_initialize(); if (JCFMessage.messageControllerMap == null) { JCFMessage.messageControllerMap = <any>({}); }  return JCFMessage.messageControllerMap; }

    static initializeData(): void {
        JCFMessage.BTN_LABEL_OK = '\uFF2F\uFF2B'
        JCFMessage.BTN_LABEL_CANCEL = '\u30AD\u30E3\u30F3\u30BB\u30EB'
        JCFMessage.BTN_LABEL_YES = '\u306F\u3044'
        JCFMessage.BTN_LABEL_NO = '\u3044\u3044\u3048'
        JCFMessage.btnInfoOk = new JCFMessageButtonInfo(JCFMessage.BTN_LABEL_OK_$LI$(), "ok");
        JCFMessage.btnInfoCancel = new JCFMessageButtonInfo(JCFMessage.BTN_LABEL_CANCEL_$LI$(), "cancel");
        JCFMessage.btnInfoYes = new JCFMessageButtonInfo(JCFMessage.BTN_LABEL_YES_$LI$(), "yes");
        JCFMessage.btnInfoNo = new JCFMessageButtonInfo(JCFMessage.BTN_LABEL_NO_$LI$(), "no");
    }
}
JCFMessage["__class"] = "com.fujitsu.jcf.ctrl.JCFMessage";




JCFMessage.initializeData();