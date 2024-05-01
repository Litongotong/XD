/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.megsnow.yem.cmn.cjf.logic {
    /**
     * 　サブシステムＩＤより、ユースケースID等を編集する。
     * 
     * @param {string} strSubSystemID サブシステムＩＤ
     * @param {com.fujitsu.jcf.ctrl.JCFContext} context
     * @class
     */
    export class YEMCMNF040MPropsInfos {
        /*private*/ context: com.fujitsu.jcf.ctrl.JCFContext;

        /**
         * サブシステムＩＤ
         */
        /*private*/ subSystemID: string;

        /**
         * ユースケースＩＤ
         */
        /*private*/ useCaseID: string;

        /**
         * システムＩＤ
         */
        /*private*/ systemID: string;

        /**
         * 画面ＩＤ
         */
        /*private*/ gamenID: string;

        /**
         * 画面名
         */
        /*private*/ gamenName: string;

        /**
         * スクリーンＩＤ
         */
        /*private*/ screenID: string;

        /**
         * 最大検索件数ＩＤ
         */
        /*private*/ qtSaidaiKensakuID: string;

        /**
         * 最大検索件数
         */
        /*private*/ qtSaidaiKensaku: number;

        /**
         * 最大表示件数ＩＤ
         */
        /*private*/ qtSaidaiHyojiID: string;

        /**
         * 最大表示件数
         */
        /*private*/ qtSaidaiHyoji: number;

        /**
         * 最大アップロードファイルサイズＩＤ
         */
        /*private*/ qtMaxFileSizeID: string;

        /**
         * 最大アップロードファイルサイズ
         */
        /*private*/ qtMaxFileSize: number;

        /**
         * 最大アップロードレコード件数ＩＤ
         */
        /*private*/ qtMaxRecordCountID: string;

        /**
         * 最大アップロードレコード件数
         */
        /*private*/ qtMaxRecordCount: number;

        /**
         * 最大アップロードエラー件数ＩＤ
         */
        /*private*/ qtMaxErrorCountID: string;

        /**
         * 最大アップロードエラー件数
         */
        /*private*/ qtMaxErrorCount: number;

        /**
         * 最大ダウンロード件数ＩＤ
         */
        /*private*/ qtMaxDownloadCountID: string;

        /**
         * 最大ダウンロード件数
         */
        /*private*/ qtMaxDownloadCount: number;

        /**
         * アップロードファイル名最大長ＩＤ
         */
        /*private*/ qtMaxFileNameLengthID: string;

        /**
         * アップロードファイル名最大長
         */
        /*private*/ qtMaxFileNameLength: number;

        /**
         * アップロードデータ項目属性チェッククラスＩＤ
         */
        /*private*/ clsUploadDataItemCheckID: string;

        /**
         * アップロードデータ項目属性チェッククラス
         */
        /*private*/ clsUploadDataItemCheck: string;

        /**
         * アップロード処理メソッドＩＤ
         */
        /*private*/ msdUploadID: string;

        /**
         * アップロード処理メソッド
         */
        /*private*/ msdUpload: string;

        /**
         * アップロード処理ＣＢＳＩＤ
         */
        /*private*/ cbsUploadID: string;

        /**
         * アップロード処理ＣＢＳ
         */
        /*private*/ cbsUpload: string;

        /**
         * 初期処理メソッドＩＤ
         */
        /*private*/ msdInitID: string;

        /**
         * 初期処理メソッド
         */
        /*private*/ msdInit: string;

        /**
         * 　サブシステムＩＤより、ユースケースID等を編集する。
         * 
         * @param {string} strSubSystemID サブシステムＩＤ
         * @private
         */
        /*private*/ EditUseCase(strSubSystemID: string) {
            this.subSystemID = strSubSystemID;
            this.useCaseID = this.subSystemID.substring(0, 10);
            this.systemID = this.useCaseID.substring(0, 6);
            this.gamenID = this.useCaseID + "M";
            this.screenID = this.gamenID + "_SCREEN_NAME";
            this.qtSaidaiKensakuID = this.gamenID + "_MAX_SELECT_CNT";
            this.qtSaidaiHyojiID = this.gamenID + "_MAX_DISPLAY_CNT";
            this.qtMaxFileSizeID = this.gamenID + "_MAX_FILE_SIZE";
            this.qtMaxRecordCountID = this.gamenID + "_MAX_UPLOAD_COUNT";
            this.qtMaxErrorCountID = this.gamenID + "_MAX_UPLOAD_ERROR_COUNT";
            this.qtMaxDownloadCountID = this.gamenID + "_MAX_DOWNLOAD_COUNT";
            this.qtMaxFileNameLengthID = this.gamenID + "_MAX_FILENAME_LENGTH";
            this.clsUploadDataItemCheckID = this.gamenID + "_CLASS_CHECK_UPLOADDATA";
            this.msdUploadID = this.gamenID + "_METHOD_RGS_UPLOAD";
            this.cbsUploadID = this.gamenID + "_CBS_RGS_UPLOAD";
            this.msdInitID = this.gamenID + "_METHOD_INIT";
        }

        /**
         * 　ユースケースID等より、プロパティ値を取得する。
         * @private
         */
        /*private*/ GetPropsInfos() {
            this.gamenName = this.GetPropInfo(this.systemID, this.screenID);
            this.clsUploadDataItemCheck = this.GetPropInfo(this.systemID, this.clsUploadDataItemCheckID);
            this.msdUpload = this.GetPropInfo(this.systemID, this.msdUploadID);
            this.cbsUpload = this.GetPropInfo(this.systemID, this.cbsUploadID);
            this.qtSaidaiKensaku = this.intGetPropInfo(this.systemID, this.qtSaidaiKensakuID);
            this.qtSaidaiHyoji = this.intGetPropInfo(this.systemID, this.qtSaidaiHyojiID);
            this.qtMaxFileSize = this.longGetPropInfo(this.systemID, this.qtMaxFileSizeID);
            this.qtMaxRecordCount = this.intGetPropInfo(this.systemID, this.qtMaxRecordCountID);
            this.qtMaxErrorCount = this.intGetPropInfo(this.systemID, this.qtMaxErrorCountID);
            this.qtMaxDownloadCount = this.intGetPropInfo(this.systemID, this.qtMaxDownloadCountID);
            this.qtMaxFileNameLength = this.intGetPropInfo(this.systemID, this.qtMaxFileNameLengthID);
            this.msdInit = this.GetPropInfoWithoutException(this.systemID, this.msdInitID);
        }

        /**
         * 　プロパティ値を取得する。
         * @param String strSubSystemID サブシステムＩＤ
         * @param String strID キー値
         * @return {string} String プロパティ値
         * @param {string} strSystemID
         * @param {string} strID
         * @private
         */
        /*private*/ GetPropInfo(strSystemID: string, strID: string): string {
            try {
                const rtn: string = <string>com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(strSystemID, strID);
                if (rtn == null){
                    throw new com.fujitsu.sms.sol.sys.SMSRuntimeException(this.context.getMessageUtil().showMessage$java_lang_String$java_lang_String_A(<string>this.context.getMessageUtil().getMessage$java_lang_String(com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSE279), [strSystemID, strID]));
                }
                return rtn;
            } catch(th) {
                throw new com.fujitsu.sms.sol.sys.SMSRuntimeException(this.context.getMessageUtil().showMessage$java_lang_String$java_lang_String(<string>this.context.getMessageUtil().getMessage$java_lang_String(com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSE071), strSystemID));
            }
        }

        /**
         * 　プロパティ値を取得する。(int型)
         * @param String strSubSystemID サブシステムＩＤ
         * @param String strID キー値
         * @return {number} int プロパティ値
         * @param {string} strSystemID
         * @param {string} strID
         * @private
         */
        /*private*/ intGetPropInfo(strSystemID: string, strID: string): number {
            try {
                const rtn: number = /* parseInt */parseInt(this.GetPropInfo(strSystemID, strID));
                return rtn;
            } catch(th) {
                throw new com.fujitsu.sms.sol.sys.SMSRuntimeException(this.context.getMessageUtil().showMessage$java_lang_String$java_lang_String_A(<string>this.context.getMessageUtil().getMessage$java_lang_String(com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSE280), [strSystemID, strID]));
            }
        }

        /**
         * 　プロパティ値を取得する。(long型)
         * @param String strSubSystemID サブシステムＩＤ
         * @param String strID キー値
         * @return {number} int プロパティ値
         * @param {string} strSystemID
         * @param {string} strID
         * @private
         */
        /*private*/ longGetPropInfo(strSystemID: string, strID: string): number {
            try {
                const rtn: number = /* parseInt */parseInt(this.GetPropInfo(strSystemID, strID));
                return rtn;
            } catch(th) {
                throw new com.fujitsu.sms.sol.sys.SMSRuntimeException(this.context.getMessageUtil().showMessage$java_lang_String$java_lang_String_A(<string>this.context.getMessageUtil().getMessage$java_lang_String(com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSE280), [strSystemID, strID]));
            }
        }

        /**
         * 　プロパティ値を取得する。（取得できない場合はＮＵＬＬを返却）
         * @param String strSubSystemID サブシステムＩＤ
         * @param String strID キー値
         * @return {string} String プロパティ値
         * @param {string} strSystemID
         * @param {string} strID
         * @private
         */
        /*private*/ GetPropInfoWithoutException(strSystemID: string, strID: string): string {
            try {
                const rtn: string = <string>com.fujitsu.sms.sol.sys.SMSPropsInfos.getProperty(strSystemID, strID);
                return rtn;
            } catch(th) {
                throw new com.fujitsu.sms.sol.sys.SMSRuntimeException(this.context.getMessageUtil().showMessage$java_lang_String$java_lang_String(<string>this.context.getMessageUtil().getMessage$java_lang_String(com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSE071), strSystemID));
            }
        }

        public constructor(context?: any, strSubSystemID?: any) {
            if (((context != null && context instanceof <any>com.fujitsu.jcf.ctrl.JCFContext) || context === null) && ((typeof strSubSystemID === 'string') || strSubSystemID === null)) {
                let __args = arguments;
                if (this.context === undefined) { this.context = null; } 
                if (this.subSystemID === undefined) { this.subSystemID = null; } 
                if (this.useCaseID === undefined) { this.useCaseID = null; } 
                if (this.systemID === undefined) { this.systemID = null; } 
                if (this.gamenID === undefined) { this.gamenID = null; } 
                if (this.gamenName === undefined) { this.gamenName = null; } 
                if (this.screenID === undefined) { this.screenID = null; } 
                if (this.qtSaidaiKensakuID === undefined) { this.qtSaidaiKensakuID = null; } 
                if (this.qtSaidaiKensaku === undefined) { this.qtSaidaiKensaku = 0; } 
                if (this.qtSaidaiHyojiID === undefined) { this.qtSaidaiHyojiID = null; } 
                if (this.qtSaidaiHyoji === undefined) { this.qtSaidaiHyoji = 0; } 
                if (this.qtMaxFileSizeID === undefined) { this.qtMaxFileSizeID = null; } 
                if (this.qtMaxFileSize === undefined) { this.qtMaxFileSize = 0; } 
                if (this.qtMaxRecordCountID === undefined) { this.qtMaxRecordCountID = null; } 
                if (this.qtMaxRecordCount === undefined) { this.qtMaxRecordCount = 0; } 
                if (this.qtMaxErrorCountID === undefined) { this.qtMaxErrorCountID = null; } 
                if (this.qtMaxErrorCount === undefined) { this.qtMaxErrorCount = 0; } 
                if (this.qtMaxDownloadCountID === undefined) { this.qtMaxDownloadCountID = null; } 
                if (this.qtMaxDownloadCount === undefined) { this.qtMaxDownloadCount = 0; } 
                if (this.qtMaxFileNameLengthID === undefined) { this.qtMaxFileNameLengthID = null; } 
                if (this.qtMaxFileNameLength === undefined) { this.qtMaxFileNameLength = 0; } 
                if (this.clsUploadDataItemCheckID === undefined) { this.clsUploadDataItemCheckID = null; } 
                if (this.clsUploadDataItemCheck === undefined) { this.clsUploadDataItemCheck = null; } 
                if (this.msdUploadID === undefined) { this.msdUploadID = null; } 
                if (this.msdUpload === undefined) { this.msdUpload = null; } 
                if (this.cbsUploadID === undefined) { this.cbsUploadID = null; } 
                if (this.cbsUpload === undefined) { this.cbsUpload = null; } 
                if (this.msdInitID === undefined) { this.msdInitID = null; } 
                if (this.msdInit === undefined) { this.msdInit = null; } 
                this.context = context;
                this.EditUseCase(strSubSystemID);
                this.GetPropsInfos();
            } else if (context === undefined && strSubSystemID === undefined) {
                let __args = arguments;
                if (this.context === undefined) { this.context = null; } 
                if (this.subSystemID === undefined) { this.subSystemID = null; } 
                if (this.useCaseID === undefined) { this.useCaseID = null; } 
                if (this.systemID === undefined) { this.systemID = null; } 
                if (this.gamenID === undefined) { this.gamenID = null; } 
                if (this.gamenName === undefined) { this.gamenName = null; } 
                if (this.screenID === undefined) { this.screenID = null; } 
                if (this.qtSaidaiKensakuID === undefined) { this.qtSaidaiKensakuID = null; } 
                if (this.qtSaidaiKensaku === undefined) { this.qtSaidaiKensaku = 0; } 
                if (this.qtSaidaiHyojiID === undefined) { this.qtSaidaiHyojiID = null; } 
                if (this.qtSaidaiHyoji === undefined) { this.qtSaidaiHyoji = 0; } 
                if (this.qtMaxFileSizeID === undefined) { this.qtMaxFileSizeID = null; } 
                if (this.qtMaxFileSize === undefined) { this.qtMaxFileSize = 0; } 
                if (this.qtMaxRecordCountID === undefined) { this.qtMaxRecordCountID = null; } 
                if (this.qtMaxRecordCount === undefined) { this.qtMaxRecordCount = 0; } 
                if (this.qtMaxErrorCountID === undefined) { this.qtMaxErrorCountID = null; } 
                if (this.qtMaxErrorCount === undefined) { this.qtMaxErrorCount = 0; } 
                if (this.qtMaxDownloadCountID === undefined) { this.qtMaxDownloadCountID = null; } 
                if (this.qtMaxDownloadCount === undefined) { this.qtMaxDownloadCount = 0; } 
                if (this.qtMaxFileNameLengthID === undefined) { this.qtMaxFileNameLengthID = null; } 
                if (this.qtMaxFileNameLength === undefined) { this.qtMaxFileNameLength = 0; } 
                if (this.clsUploadDataItemCheckID === undefined) { this.clsUploadDataItemCheckID = null; } 
                if (this.clsUploadDataItemCheck === undefined) { this.clsUploadDataItemCheck = null; } 
                if (this.msdUploadID === undefined) { this.msdUploadID = null; } 
                if (this.msdUpload === undefined) { this.msdUpload = null; } 
                if (this.cbsUploadID === undefined) { this.cbsUploadID = null; } 
                if (this.cbsUpload === undefined) { this.cbsUpload = null; } 
                if (this.msdInitID === undefined) { this.msdInitID = null; } 
                if (this.msdInit === undefined) { this.msdInit = null; } 
            } else throw new Error('invalid overload');
        }

        /**
         * サブシステムＩＤ
         * @return {string} subSystemID
         */
        public getSubSystemID(): string {
            return this.subSystemID;
        }

        /**
         * サブシステムＩＤ
         * @param {string} subSystemID 設定する subSystemID
         */
        public setSubSystemID(subSystemID: string) {
            this.subSystemID = subSystemID;
        }

        /**
         * 画面ＩＤ
         * @return {string} gamenID
         */
        public getGamenID(): string {
            return this.gamenID;
        }

        /**
         * 最大ファイルサイズＩＤ
         * @return {string} qtMaxFileSizeID
         */
        public getQtMaxFileSizeID(): string {
            return this.qtMaxFileSizeID;
        }

        /**
         * 最大レコード件数ＩＤ
         * @return {string} qtMaxRecordCountID
         */
        public getQtMaxRecordCountID(): string {
            return this.qtMaxRecordCountID;
        }

        /**
         * 最大表示件数ＩＤ
         * @return {string} qtSaidaiHyojiID
         */
        public getQtSaidaiHyojiID(): string {
            return this.qtSaidaiHyojiID;
        }

        /**
         * 最大検索件数ＩＤ
         * @return {string} qtSaidaiKensakuID
         */
        public getQtSaidaiKensakuID(): string {
            return this.qtSaidaiKensakuID;
        }

        /**
         * スクリーンＩＤ
         * @return {string} screenID
         */
        public getScreenID(): string {
            return this.screenID;
        }

        /**
         * システムＩＤ
         * @return {string} systemID
         */
        public getSystemID(): string {
            return this.systemID;
        }

        /**
         * ユースケースＩＤ
         * @return {string} useCaseID
         */
        public getUseCaseID(): string {
            return this.useCaseID;
        }

        /**
         * アップロードデータ項目属性チェッククラス名
         * @return {string} clsUploadDataItemCheck
         */
        public getClsUploadDataItemCheck(): string {
            return this.clsUploadDataItemCheck;
        }

        /**
         * アップロードデータ項目属性チェッククラスＩＤ
         * @return {string} clsUploadDataItemCheckID
         */
        public getClsUploadDataItemCheckID(): string {
            return this.clsUploadDataItemCheckID;
        }

        /**
         * 画面名
         * @return {string} gamenName
         */
        public getGamenName(): string {
            return this.gamenName;
        }

        /**
         * アップロードメソッド
         * @return {string} msdUpload
         */
        public getMsdUpload(): string {
            return this.msdUpload;
        }

        /**
         * アップロードメソッドＩＤ
         * @return {string} msdUploadID
         */
        public getMsdUploadID(): string {
            return this.msdUploadID;
        }

        /**
         * アップロードＣＢＳ
         * @return {string} cbsUpload
         */
        public getCbsUpload(): string {
            return this.cbsUpload;
        }

        /**
         * アップロードＣＢＳＩＤ
         * @return {string} cbsUploadID
         */
        public getCbsUploadID(): string {
            return this.cbsUploadID;
        }

        /**
         * 最大ファイルサイズ
         * @return {number} qtMaxFileSize
         */
        public getQtMaxFileSize(): number {
            return this.qtMaxFileSize;
        }

        /**
         * 最大レコード件数
         * @return {number} qtMaxRecordCount
         */
        public getQtMaxRecordCount(): number {
            return this.qtMaxRecordCount;
        }

        /**
         * 最大表示件数
         * @return {number} qtSaidaiHyoji
         */
        public getQtSaidaiHyoji(): number {
            return this.qtSaidaiHyoji;
        }

        /**
         * 最大検索件数
         * @return {number} qtSaidaiKensaku
         */
        public getQtSaidaiKensaku(): number {
            return this.qtSaidaiKensaku;
        }

        /**
         * @return {number} qtMaxFileNameLength
         */
        public getQtMaxFileNameLength(): number {
            return this.qtMaxFileNameLength;
        }

        /**
         * @return {string} qtMaxFileNameLengthID
         */
        public getQtMaxFileNameLengthID(): string {
            return this.qtMaxFileNameLengthID;
        }

        /**
         * @return {number} qtMaxDownloadCount
         */
        public getQtMaxDownloadCount(): number {
            return this.qtMaxDownloadCount;
        }

        /**
         * @return {string} qtMaxDownloadCountID
         */
        public getQtMaxDownloadCountID(): string {
            return this.qtMaxDownloadCountID;
        }

        /**
         * @return {number} qtMaxErrorCount
         */
        public getQtMaxErrorCount(): number {
            return this.qtMaxErrorCount;
        }

        /**
         * @return {string} qtMaxErrorCountID
         */
        public getQtMaxErrorCountID(): string {
            return this.qtMaxErrorCountID;
        }

        /**
         * 初期処理メソッド
         * @return {string} msdInit
         */
        public getMsdInit(): string {
            return this.msdInit;
        }

        /**
         * 初期処理メソッドＩＤ
         * @return {string} msdInitID
         */
        public getMsdInitID(): string {
            return this.msdInitID;
        }
    }
    YEMCMNF040MPropsInfos["__class"] = "lib.com.megsnow.yem.cmn.cjf.logic.YEMCMNF040MPropsInfos";

}

