/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys.cjf.logic {
    export class SMSPanelInitDataHolder {
        constructor() {
            if (this.data === undefined) { this.data = null; }
            if (this.searchID === undefined) { this.searchID = null; }
            if (this.value === undefined) { this.value = null; }
            if (this.errorMessage === undefined) { this.errorMessage = null; }
            if (this.closeFlg === undefined) { this.closeFlg = false; }
            if (this.searchFlg === undefined) { this.searchFlg = false; }
            if (this.screenInfo === undefined) { this.screenInfo = null; }
            if (this.searchResultLst === undefined) { this.searchResultLst = null; }
            this.closeFlg = false;
            this.searchFlg = false;
            this.data = <any>({});
        }

        public static getInstance(): SMSPanelInitDataHolder {
            if (SMSPanelInitDataHolder.ins == null)SMSPanelInitDataHolder.ins = new SMSPanelInitDataHolder();
            return SMSPanelInitDataHolder.ins;
        }

        public setData(key: string, obj: any) {
            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>this.data, key, obj);
        }

        public getData(key: string): any {
            return /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>this.data, key);
        }

        public setValue(str: string) {
            this.value = str;
        }

        public getValue(): string {
            return this.value;
        }

        public setSearchID(str: string) {
            this.searchID = str;
        }

        public getSearchID(): string {
            return this.searchID;
        }

        public setScreenInfo(sci: lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSScreenInfo) {
            this.screenInfo = sci;
        }

        public getScreenInfo(): lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSScreenInfo {
            return this.screenInfo;
        }

        public setCloseButton(closeFlg: boolean) {
            this.closeFlg = closeFlg;
        }

        public getCloseButton(): boolean {
            return this.closeFlg;
        }

        public setSearchFlg(searchFlg: boolean) {
            this.searchFlg = searchFlg;
        }

        public isSearchFlg(): boolean {
            return this.searchFlg;
        }

        public setErrorMessage(errorMessage: string) {
            this.errorMessage = errorMessage;
        }

        public getErrorMessage(): string {
            return this.errorMessage;
        }

        public static RESULT_DATA: string = "DLG_DATA";

        public static KEY_PANEL_DATA: string = "PANEL_DATA";

        public static KEY_SPREAD_EVENT_POS: string = "SPREAD_EVENT_POS";

        static ins: SMSPanelInitDataHolder = null;

        /*private*/ data: any;

        /*private*/ searchID: string;

        /*private*/ value: string;

        /*private*/ errorMessage: string;

        /*private*/ closeFlg: boolean;

        /*private*/ searchFlg: boolean;

        /*private*/ screenInfo: lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSScreenInfo;

        /*private*/ searchResultLst: Array<any>;
    }
    SMSPanelInitDataHolder["__class"] = "lib.com.fujitsu.sms.sol.sys.cjf.logic.SMSPanelInitDataHolder";

}

