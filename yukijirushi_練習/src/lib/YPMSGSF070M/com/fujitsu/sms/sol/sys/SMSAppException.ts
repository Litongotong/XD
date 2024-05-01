/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys {
    export class SMSAppException extends lib.com.fujitsu.sms.sol.sys.SMSException {
        public constructor(messageCode?: any, detail?: any) {
            if (((typeof messageCode === 'string') || messageCode === null) && ((detail != null && detail instanceof <any>Array && (detail.length == 0 || detail[0] == null ||(typeof detail[0] === 'string'))) || detail === null)) {
                let __args = arguments;
                super(messageCode, detail);
                if (this.cdErrorKoumoku === undefined) { this.cdErrorKoumoku = null; } 
                if (this.qtErrorRecordPosition === undefined) { this.qtErrorRecordPosition = null; } 
                if (this.nmErrorColumn === undefined) { this.nmErrorColumn = null; } 
                if (this.fgPopup === undefined) { this.fgPopup = null; } 
                this.cdErrorKoumoku = "";
                this.qtErrorRecordPosition = "";
                this.nmErrorColumn = "";
                this.fgPopup = true;
            } else if (((typeof messageCode === 'string') || messageCode === null) && detail === undefined) {
                let __args = arguments;
                super(messageCode);
                if (this.cdErrorKoumoku === undefined) { this.cdErrorKoumoku = null; } 
                if (this.qtErrorRecordPosition === undefined) { this.qtErrorRecordPosition = null; } 
                if (this.nmErrorColumn === undefined) { this.nmErrorColumn = null; } 
                if (this.fgPopup === undefined) { this.fgPopup = null; } 
                this.cdErrorKoumoku = "";
                this.qtErrorRecordPosition = "";
                this.nmErrorColumn = "";
                this.fgPopup = true;
            } else throw new Error('invalid overload');
        }

        public getCdErrorKoumoku(): string {
            return this.cdErrorKoumoku;
        }

        public setCdErrorKoumoku(cdErrorKoumoku: string) {
            this.cdErrorKoumoku = cdErrorKoumoku;
        }

        public getNmErrorColumn(): string {
            return this.nmErrorColumn;
        }

        public getQtErrorRecordPosition(): string {
            return this.qtErrorRecordPosition;
        }

        public setNmErrorColumn(nmErrorColumn: string) {
            this.nmErrorColumn = nmErrorColumn;
        }

        public setQtErrorRecordPosition(qtErrorRecordPosition: string) {
            this.qtErrorRecordPosition = qtErrorRecordPosition;
        }

        public getFgPopup(): boolean {
            return this.fgPopup;
        }

        public setFgPopup(fgPopup: boolean) {
            this.fgPopup = fgPopup;
        }

        /*private*/ cdErrorKoumoku: string;

        /*private*/ qtErrorRecordPosition: string;

        /*private*/ nmErrorColumn: string;

        /*private*/ fgPopup: boolean;
    }
    SMSAppException["__class"] = "lib.com.fujitsu.sms.sol.sys.SMSAppException";

}

