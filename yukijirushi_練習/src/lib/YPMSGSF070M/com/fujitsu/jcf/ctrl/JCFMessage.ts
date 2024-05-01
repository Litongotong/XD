/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.ctrl {
    export class JCFMessage {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!JCFMessage.__static_initialized) { JCFMessage.__static_initialized = true; JCFMessage.__static_initializer_0(); } }

        constructor() {
        }

        static start(windowID: string, context: lib.com.fujitsu.jcf.ctrl.JCFInnerContext, reference: lib.com.fujitsu.jcf.ctrl.JCFCMReference) {
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>JCFMessage.messageControllerMap_$LI$(), windowID, new lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow(context, reference));
        }

        static end(windowID: string) {
        }

        public static showMessage$java_lang_String(messageID: string): string {
            return JCFMessage.showMessage$java_lang_String$java_lang_String_A(messageID, []);
        }

        public static showMessage$java_lang_String$java_lang_String(messageID: string, inStr: string): string {
            const inStrArray: string[] = [inStr];
            return JCFMessage.showMessage$java_lang_String$java_lang_String_A(messageID, inStrArray);
        }

        public static showMessage$java_lang_String$java_lang_String_A(messageID: string, inStr: string[]): string {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "showMessage");
            return messageCtrl.showMessage$java_lang_String$java_lang_String_A(messageID, inStr);
        }

        public static showMessage$java_lang_String$int$int(messageID: string, x: number, y: number): string {
            return JCFMessage.showMessage$java_lang_String$java_lang_String_A$int$int(messageID, [], x, y);
        }

        public static showMessage$java_lang_String$java_lang_String$int$int(messageID: string, inStr: string, x: number, y: number): string {
            const inStrArray: string[] = [inStr];
            return JCFMessage.showMessage$java_lang_String$java_lang_String_A$int$int(messageID, inStrArray, x, y);
        }

        public static showMessage$java_lang_String$java_lang_String_A$int$int(messageID: string, inStr: string[], x: number, y: number): string {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "showMessage");
            return messageCtrl.showMessage$java_lang_String$java_lang_String_A$int$int(messageID, inStr, x, y);
        }

        public static showMessage$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent(messageID: string, event: lib.com.fujitsu.jcf.ctrl.JCFEvent): string {
            return JCFMessage.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(messageID, [], event);
        }

        public static showMessage$java_lang_String$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent(messageID: string, inStr: string, event: lib.com.fujitsu.jcf.ctrl.JCFEvent): string {
            const inStrArray: string[] = [inStr];
            return JCFMessage.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(messageID, inStrArray, event);
        }

        public static showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(messageID: string, inStr: string[], event: lib.com.fujitsu.jcf.ctrl.JCFEvent): string {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "showMessage");
            return messageCtrl.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(messageID, inStr, event);
        }

        public static showMessage$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID: string, event: lib.com.fujitsu.jcf.ctrl.JCFEvent, x: number, y: number): string {
            return JCFMessage.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID, [], event, x, y);
        }

        public static showMessage$java_lang_String$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID: string, inStr: string, event: lib.com.fujitsu.jcf.ctrl.JCFEvent, x: number, y: number): string {
            const inStrArray: string[] = [inStr];
            return JCFMessage.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID, inStrArray, event, x, y);
        }

        public static showMessage(messageID?: any, inStr?: any, event?: any, x?: any, y?: any): string {
            if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'string') || inStr === null) && ((event != null && event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID, inStr, event, x, y);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>Array && (inStr.length == 0 || inStr[0] == null ||(typeof inStr[0] === 'string'))) || inStr === null) && ((event != null && event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID, inStr, event, x, y);
            } else if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'string') || inStr === null) && ((typeof event === 'number') || event === null) && ((typeof x === 'number') || x === null) && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$java_lang_String$int$int(messageID, inStr, event, x);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>Array && (inStr.length == 0 || inStr[0] == null ||(typeof inStr[0] === 'string'))) || inStr === null) && ((typeof event === 'number') || event === null) && ((typeof x === 'number') || x === null) && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$java_lang_String_A$int$int(messageID, inStr, event, x);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) || inStr === null) && ((typeof event === 'number') || event === null) && ((typeof x === 'number') || x === null) && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID, inStr, event, x);
            } else if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'string') || inStr === null) && ((event != null && event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent(messageID, inStr, event);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>Array && (inStr.length == 0 || inStr[0] == null ||(typeof inStr[0] === 'string'))) || inStr === null) && ((event != null && event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) || event === null) && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(messageID, inStr, event);
            } else if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'number') || inStr === null) && ((typeof event === 'number') || event === null) && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$int$int(messageID, inStr, event);
            } else if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'string') || inStr === null) && event === undefined && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$java_lang_String(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>Array && (inStr.length == 0 || inStr[0] == null ||(typeof inStr[0] === 'string'))) || inStr === null) && event === undefined && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$java_lang_String_A(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) || inStr === null) && event === undefined && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && inStr === undefined && event === undefined && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$java_lang_String(messageID);
            } else if (((messageID != null && messageID instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFMessageParameter) || messageID === null) && inStr === undefined && event === undefined && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(messageID);
            } else throw new Error('invalid overload');
        }

        public static showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID: string, inStr: string[], event: lib.com.fujitsu.jcf.ctrl.JCFEvent, x: number, y: number): string {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "showMessage");
            return messageCtrl.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent$int$int(messageID, inStr, event, x, y);
        }

        public static showAsyncMessage$java_lang_String(messageID: string) {
            JCFMessage.showAsyncMessage$java_lang_String$java_lang_String_A(messageID, []);
        }

        public static showAsyncMessage$java_lang_String$java_lang_String(messageID: string, inStr: string) {
            const inStrArray: string[] = [inStr];
            JCFMessage.showAsyncMessage$java_lang_String$java_lang_String_A(messageID, inStrArray);
        }

        public static showAsyncMessage$java_lang_String$java_lang_String_A(messageID: string, inStr: string[]) {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "showAsyncMessage");
            messageCtrl.showAsyncMessage$java_lang_String$java_lang_String_A(messageID, inStr);
        }

        public static showAsyncMessage$java_lang_String$int$int(messageID: string, x: number, y: number) {
            JCFMessage.showAsyncMessage$java_lang_String$java_lang_String_A$int$int(messageID, [], x, y);
        }

        public static showAsyncMessage$java_lang_String$java_lang_String$int$int(messageID: string, inStr: string, x: number, y: number) {
            const inStrArray: string[] = [inStr];
            JCFMessage.showAsyncMessage$java_lang_String$java_lang_String_A$int$int(messageID, inStrArray, x, y);
        }

        public static showAsyncMessage(messageID?: any, inStr?: any, x?: any, y?: any) {
            if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'string') || inStr === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showAsyncMessage$java_lang_String$java_lang_String$int$int(messageID, inStr, x, y);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>Array && (inStr.length == 0 || inStr[0] == null ||(typeof inStr[0] === 'string'))) || inStr === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showAsyncMessage$java_lang_String$java_lang_String_A$int$int(messageID, inStr, x, y);
            } else if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'number') || inStr === null) && ((typeof x === 'number') || x === null) && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showAsyncMessage$java_lang_String$int$int(messageID, inStr, x);
            } else if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'string') || inStr === null) && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showAsyncMessage$java_lang_String$java_lang_String(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>Array && (inStr.length == 0 || inStr[0] == null ||(typeof inStr[0] === 'string'))) || inStr === null) && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showAsyncMessage$java_lang_String$java_lang_String_A(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && inStr === undefined && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showAsyncMessage$java_lang_String(messageID);
            } else if (((messageID != null && messageID instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFMessageParameter) || messageID === null) && inStr === undefined && x === undefined && y === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.showAsyncMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(messageID);
            } else throw new Error('invalid overload');
        }

        public static showAsyncMessage$java_lang_String$java_lang_String_A$int$int(messageID: string, inStr: string[], x: number, y: number) {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "showAsyncMessage");
            messageCtrl.showAsyncMessage$java_lang_String$java_lang_String_A$int$int(messageID, inStr, x, y);
        }

        public static disposeMessage() {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "disposeMessage");
            messageCtrl.disposeMessage();
        }

        public static isAsyncMessageShowing(): boolean {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "isAsyncMessageShowing");
            return messageCtrl.isAsyncMessageShowing();
        }

        public static getMessage$java_lang_String(messageID: string): string {
            return JCFMessage.getMessage$java_lang_String$java_lang_String_A(messageID, []);
        }

        public static getMessage$java_lang_String$java_lang_String(messageID: string, inStr: string): string {
            const inStrArray: string[] = [inStr];
            return JCFMessage.getMessage$java_lang_String$java_lang_String_A(messageID, inStrArray);
        }

        public static getMessage(messageID?: any, inStr?: any): string {
            if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'string') || inStr === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.getMessage$java_lang_String$java_lang_String(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>Array && (inStr.length == 0 || inStr[0] == null ||(typeof inStr[0] === 'string'))) || inStr === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.getMessage$java_lang_String$java_lang_String_A(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && inStr === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.getMessage$java_lang_String(messageID);
            } else throw new Error('invalid overload');
        }

        public static getMessage$java_lang_String$java_lang_String_A(messageID: string, inStr: string[]): string {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "getMessage");
            return messageCtrl.getMessage$java_lang_String$java_lang_String_A(messageID, inStr);
        }

        public static setMessageEventAdapter(adapter: lib.com.fujitsu.jcf.ctrl.JCFMessageAdapter) {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "setMessageEventAdapter");
            messageCtrl.setMessageEventAdapter(adapter);
        }

        public static clearMessageEventAdapter() {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "clearMessageEventAdapter");
            messageCtrl.clearMessageEventAdapter();
        }

        public static getMessageEventAdapter(): lib.com.fujitsu.jcf.ctrl.JCFMessageAdapter {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "getMessageEventAdapter");
            return messageCtrl.getMessageEventAdapter();
        }

        public static getMessageForWindowID$java_lang_String$java_lang_String(windowID: string, methodName: string): lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow {
            const messageCtrl: lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow = <lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>JCFMessage.messageControllerMap_$LI$(), windowID);
            if (messageCtrl == null){
                const error: lib.com.fujitsu.jcf.ctrl.JCFInternalError = new lib.com.fujitsu.jcf.ctrl.JCFInternalError(lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage("E1178"));
                return null;
            } else {
                return messageCtrl;
            }
        }

        public static getMessageForWindowID(windowID?: any, methodName?: any): lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow {
            if (((typeof windowID === 'string') || windowID === null) && ((typeof methodName === 'string') || methodName === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String(windowID, methodName);
            } else if (((typeof windowID === 'string') || windowID === null) && methodName === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.getMessageForWindowID$java_lang_String(windowID);
            } else throw new Error('invalid overload');
        }

        static getMessageForWindowID$java_lang_String(windowID: string): lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow {
            return JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String(windowID, "getMessageForWindowID");
        }

        /*private*/ static getImage(path: string): com.java.Image {
            let image: com.java.Image = null;
            const tk: com.java.Toolkit = com.java.Toolkit.getDefaultToolkit();
            const url: com.java.URL = JCFMessage.getResource(path);
            image = tk.getImage(url);
            return image;
        }

        /*private*/ static getResource(path: string): com.java.URL {
            return null;
        }

        public static showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(para: lib.com.fujitsu.jcf.ctrl.JCFMessageParameter): string {
            return JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "showMessage").showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(para);
        }

        public static showAsyncMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(para: lib.com.fujitsu.jcf.ctrl.JCFMessageParameter) {
            JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "showAsyncMessage").showAsyncMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(para);
        }

        public static getAdditionalMessage$java_lang_String(messageID: string): string {
            return JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "getAdditionalMessage").getAdditionalMessage$java_lang_String(messageID);
        }

        public static getAdditionalMessage$java_lang_String$java_lang_String(messageID: string, inStr: string): string {
            return JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "getAdditionalMessage").getAdditionalMessage$java_lang_String$java_lang_String(messageID, inStr);
        }

        public static getAdditionalMessage(messageID?: any, inStr?: any): string {
            if (((typeof messageID === 'string') || messageID === null) && ((typeof inStr === 'string') || inStr === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.getAdditionalMessage$java_lang_String$java_lang_String(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && ((inStr != null && inStr instanceof <any>Array && (inStr.length == 0 || inStr[0] == null ||(typeof inStr[0] === 'string'))) || inStr === null)) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.getAdditionalMessage$java_lang_String$java_lang_String_A(messageID, inStr);
            } else if (((typeof messageID === 'string') || messageID === null) && inStr === undefined) {
                return <any>lib.com.fujitsu.jcf.ctrl.JCFMessage.getAdditionalMessage$java_lang_String(messageID);
            } else throw new Error('invalid overload');
        }

        public static getAdditionalMessage$java_lang_String$java_lang_String_A(messageID: string, inStrs: string[]): string {
            return JCFMessage.getMessageForWindowID$java_lang_String$java_lang_String("ID0000000000000000-000", "getAdditionalMessage").getAdditionalMessage$java_lang_String$java_lang_String_A(messageID, inStrs);
        }

        public static CLASS_VERSION: string = "V3L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2011";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFMessage";

        public static BTN_OK: string = "ok";

        public static BTN_CANCEL: string = "cancel";

        public static BTN_YES: string = "yes";

        public static BTN_NO: string = "no";

        static BTN_LABEL_OK: string; public static BTN_LABEL_OK_$LI$(): string { JCFMessage.__static_initialize();  return JCFMessage.BTN_LABEL_OK; }

        static BTN_LABEL_CANCEL: string; public static BTN_LABEL_CANCEL_$LI$(): string { JCFMessage.__static_initialize();  return JCFMessage.BTN_LABEL_CANCEL; }

        static BTN_LABEL_YES: string; public static BTN_LABEL_YES_$LI$(): string { JCFMessage.__static_initialize();  return JCFMessage.BTN_LABEL_YES; }

        static BTN_LABEL_NO: string; public static BTN_LABEL_NO_$LI$(): string { JCFMessage.__static_initialize();  return JCFMessage.BTN_LABEL_NO; }

        static btnInfoOk: lib.com.fujitsu.jcf.ctrl.JCFMessageButtonInfo = null;

        static btnInfoCancel: lib.com.fujitsu.jcf.ctrl.JCFMessageButtonInfo = null;

        static btnInfoYes: lib.com.fujitsu.jcf.ctrl.JCFMessageButtonInfo = null;

        static btnInfoNo: lib.com.fujitsu.jcf.ctrl.JCFMessageButtonInfo = null;

        static ICON_ERROR: string = "gui/iconerror.gif";

        static ICON_INFO: string = "gui/iconinfo.gif";

        static ICON_ALERT: string = "gui/iconalert.gif";

        static ICON_QUESTION: string = "gui/iconquestion.gif";

        static ICON_PROCESSING: string = "gui/iconprocessing.gif";

        public static iconImageError: com.java.Image; public static iconImageError_$LI$(): com.java.Image { JCFMessage.__static_initialize(); if (JCFMessage.iconImageError == null) { JCFMessage.iconImageError = JCFMessage.getImage("gui/iconerror.gif"); }  return JCFMessage.iconImageError; }

        public static iconImageInfo: com.java.Image; public static iconImageInfo_$LI$(): com.java.Image { JCFMessage.__static_initialize(); if (JCFMessage.iconImageInfo == null) { JCFMessage.iconImageInfo = JCFMessage.getImage("gui/iconinfo.gif"); }  return JCFMessage.iconImageInfo; }

        public static iconImageAlert: com.java.Image; public static iconImageAlert_$LI$(): com.java.Image { JCFMessage.__static_initialize(); if (JCFMessage.iconImageAlert == null) { JCFMessage.iconImageAlert = JCFMessage.getImage("gui/iconalert.gif"); }  return JCFMessage.iconImageAlert; }

        public static iconImageQuestion: com.java.Image; public static iconImageQuestion_$LI$(): com.java.Image { JCFMessage.__static_initialize(); if (JCFMessage.iconImageQuestion == null) { JCFMessage.iconImageQuestion = JCFMessage.getImage("gui/iconquestion.gif"); }  return JCFMessage.iconImageQuestion; }

        public static iconImageProcessing: com.java.Image; public static iconImageProcessing_$LI$(): com.java.Image { JCFMessage.__static_initialize(); if (JCFMessage.iconImageProcessing == null) { JCFMessage.iconImageProcessing = JCFMessage.getImage("gui/iconprocessing.gif"); }  return JCFMessage.iconImageProcessing; }

        public static iconError: com.java.Icon; public static iconError_$LI$(): com.java.Icon { JCFMessage.__static_initialize();  return JCFMessage.iconError; }

        public static iconInfo: com.java.Icon; public static iconInfo_$LI$(): com.java.Icon { JCFMessage.__static_initialize();  return JCFMessage.iconInfo; }

        public static iconAlert: com.java.Icon; public static iconAlert_$LI$(): com.java.Icon { JCFMessage.__static_initialize();  return JCFMessage.iconAlert; }

        public static iconQuestion: com.java.Icon; public static iconQuestion_$LI$(): com.java.Icon { JCFMessage.__static_initialize();  return JCFMessage.iconQuestion; }

        public static iconProcessing: com.java.Icon; public static iconProcessing_$LI$(): com.java.Icon { JCFMessage.__static_initialize();  return JCFMessage.iconProcessing; }

        static messageControllerMap: any; public static messageControllerMap_$LI$(): any { JCFMessage.__static_initialize(); if (JCFMessage.messageControllerMap == null) { JCFMessage.messageControllerMap = <any>({}); }  return JCFMessage.messageControllerMap; }

        static  __static_initializer_0() {
            JCFMessage.BTN_LABEL_OK = "\uff2f\uff2b";
            JCFMessage.BTN_LABEL_CANCEL = "\u30ad\u30e3\u30f3\u30bb\u30eb";
            JCFMessage.BTN_LABEL_YES = "\u306f\u3044";
            JCFMessage.BTN_LABEL_NO = "\u3044\u3044\u3048";
            JCFMessage.btnInfoOk = new lib.com.fujitsu.jcf.ctrl.JCFMessageButtonInfo(JCFMessage.BTN_LABEL_OK_$LI$(), "ok");
            JCFMessage.btnInfoCancel = new lib.com.fujitsu.jcf.ctrl.JCFMessageButtonInfo(JCFMessage.BTN_LABEL_CANCEL_$LI$(), "cancel");
            JCFMessage.btnInfoYes = new lib.com.fujitsu.jcf.ctrl.JCFMessageButtonInfo(JCFMessage.BTN_LABEL_YES_$LI$(), "yes");
            JCFMessage.btnInfoNo = new lib.com.fujitsu.jcf.ctrl.JCFMessageButtonInfo(JCFMessage.BTN_LABEL_NO_$LI$(), "no");
            if (lib.com.fujitsu.jcf.ctrl.JCFCMMain.executionType === 1){
                JCFMessage.iconError = com.java.UIManager.getIcon("OptionPane.errorIcon");
                JCFMessage.iconInfo = com.java.UIManager.getIcon("OptionPane.informationIcon");
                JCFMessage.iconAlert = com.java.UIManager.getIcon("OptionPane.warningIcon");
                JCFMessage.iconQuestion = com.java.UIManager.getIcon("OptionPane.questionIcon");
            }
        }
    }
    JCFMessage["__class"] = "lib.com.fujitsu.jcf.ctrl.JCFMessage";

}


lib.com.fujitsu.jcf.ctrl.JCFMessage.__static_initialize();
