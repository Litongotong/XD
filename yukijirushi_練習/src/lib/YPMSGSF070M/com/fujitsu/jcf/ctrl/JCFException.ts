/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.ctrl {
    export class JCFException extends Error {
        public constructor(message?: any, cause?: any) {
            if (((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
                let __args = arguments;
                {
                    let __args = arguments;
                    super(message); this.message=message;
                    if (this.__com_fujitsu_jcf_ctrl_JCFException_cause === undefined) { this.__com_fujitsu_jcf_ctrl_JCFException_cause = null; } 
                    this.__com_fujitsu_jcf_ctrl_JCFException_cause = null;
                }
                if (this.__com_fujitsu_jcf_ctrl_JCFException_cause === undefined) { this.__com_fujitsu_jcf_ctrl_JCFException_cause = null; } 
                (() => {
                    this.__com_fujitsu_jcf_ctrl_JCFException_cause = cause;
                })();
            } else if (((typeof message === 'string') || message === null) && cause === undefined) {
                let __args = arguments;
                super(message); this.message=message;
                if (this.__com_fujitsu_jcf_ctrl_JCFException_cause === undefined) { this.__com_fujitsu_jcf_ctrl_JCFException_cause = null; } 
                this.__com_fujitsu_jcf_ctrl_JCFException_cause = null;
            } else if (message === undefined && cause === undefined) {
                let __args = arguments;
                super();
                if (this.__com_fujitsu_jcf_ctrl_JCFException_cause === undefined) { this.__com_fujitsu_jcf_ctrl_JCFException_cause = null; } 
                this.__com_fujitsu_jcf_ctrl_JCFException_cause = null;
            } else throw new Error('invalid overload');
        }

        public getCause(): Error {
            return this.__com_fujitsu_jcf_ctrl_JCFException_cause;
        }

        public printStackTraceWithCause$() {
            if (this.__com_fujitsu_jcf_ctrl_JCFException_cause != null)console.error(this.__com_fujitsu_jcf_ctrl_JCFException_cause.message, this.__com_fujitsu_jcf_ctrl_JCFException_cause);
        }

        public printStackTraceWithCause$java_lang_Object(s: any) {
        }

        public printStackTraceWithCause(s?: any) {
            if (((s != null) || s === null)) {
                return <any>this.printStackTraceWithCause$java_lang_Object(s);
            } else if (s === undefined) {
                return <any>this.printStackTraceWithCause$();
            } else throw new Error('invalid overload');
        }

        public getStackTraceString(): string {
            return this.getStackTrace(this);
        }

        public getStackTraceStringOfCause(): string {
            return this.getStackTrace(this.__com_fujitsu_jcf_ctrl_JCFException_cause);
        }

        /*private*/ getStackTrace(th: Error): string {
            const trace: string = null;
            return trace;
        }

        public static CLASS_VERSION: string = "V01L20";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFException";

        /*private*/ __com_fujitsu_jcf_ctrl_JCFException_cause: Error;
    }
    JCFException["__class"] = "lib.com.fujitsu.jcf.ctrl.JCFException";

}

