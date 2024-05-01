/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFGUIErrorInfo {
        public constructor(itemID: string, errorCode: string, retry: boolean) {
            if (this.itemID === undefined) { this.itemID = null; }
            if (this.errorCode === undefined) { this.errorCode = null; }
            if (this.retry === undefined) { this.retry = false; }
            this.itemID = itemID;
            this.errorCode = errorCode;
            this.retry = retry;
        }

        public getItemID(): string {
            return this.itemID;
        }

        public getErrorCode(): string {
            return this.errorCode;
        }

        public isRetry(): boolean {
            return this.retry;
        }

        setItemID(itemID: string) {
            this.itemID = itemID;
        }

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFGUIErrorInfo";

        /*private*/ itemID: string;

        /*private*/ errorCode: string;

        /*private*/ retry: boolean;
    }
    JCFGUIErrorInfo["__class"] = "lib.com.fujitsu.jcf.gui.JCFGUIErrorInfo";

}

