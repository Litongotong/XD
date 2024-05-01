/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys {
    export class SMSRuntimeException extends Error {
        public constructor(message?: any, th?: any) {
            if (((typeof message === 'string') || message === null) && ((th != null && (th["__classes"] && th["__classes"].indexOf("java.lang.Throwable") >= 0) || th != null && th instanceof <any>Error) || th === null)) {
                let __args = arguments;
                super();
                if (this.th === undefined) { this.th = null; } 
                if (this.cdError === undefined) { this.cdError = null; } 
            } else if (((typeof message === 'string') || message === null) && th === undefined) {
                let __args = arguments;
                super();
                if (this.th === undefined) { this.th = null; } 
                if (this.cdError === undefined) { this.cdError = null; } 
            } else if (((message != null && (message["__classes"] && message["__classes"].indexOf("java.lang.Throwable") >= 0) || message != null && message instanceof <any>Error) || message === null) && th === undefined) {
                let __args = arguments;
                let th: any = __args[0];
                super();
                if (this.th === undefined) { this.th = null; } 
                if (this.cdError === undefined) { this.cdError = null; } 
            } else throw new Error('invalid overload');
        }

        public getException(): Error {
            return this.th;
        }

        public printStackTrace$() {
        }

        public printStackTrace$java_lang_Object(ps: any) {
        }

        public printStackTrace(ps?: any) {
            if (((ps != null) || ps === null)) {
                return <any>this.printStackTrace$java_lang_Object(ps);
            } else if (ps === undefined) {
                return <any>this.printStackTrace$();
            } else throw new Error('invalid overload');
        }

        public getCdError(): string {
            return this.cdError;
        }

        public setCdError(cdError: string) {
            this.cdError = cdError;
        }

        /*private*/ th: Error;

        /*private*/ cdError: string;
    }
    SMSRuntimeException["__class"] = "lib.com.fujitsu.sms.sol.sys.SMSRuntimeException";

}

