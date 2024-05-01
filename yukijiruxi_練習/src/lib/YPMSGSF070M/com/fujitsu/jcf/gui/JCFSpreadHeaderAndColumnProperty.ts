/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadHeaderAndColumnProperty {
        public constructor(columns?: any, header?: any, recordinfo?: any) {
            if (((columns != null && columns instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty) || columns === null) && ((header != null && header instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty) || header === null) && ((recordinfo != null && recordinfo instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo) || recordinfo === null)) {
                let __args = arguments;
                if (this.columns === undefined) { this.columns = null; } 
                if (this.header === undefined) { this.header = null; } 
                if (this.recordinfo === undefined) { this.recordinfo = null; } 
                this.columns = null;
                this.header = null;
                this.recordinfo = null;
                try {
                    this.columns = columns;
                    this.header = header;
                    this.recordinfo = recordinfo;
                } catch(ex) {
                    console.error(ex.message, ex);
                }
            } else if (((columns != null && columns instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty) || columns === null) && ((header != null && header instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty) || header === null) && recordinfo === undefined) {
                let __args = arguments;
                if (this.columns === undefined) { this.columns = null; } 
                if (this.header === undefined) { this.header = null; } 
                if (this.recordinfo === undefined) { this.recordinfo = null; } 
                this.columns = null;
                this.header = null;
                this.recordinfo = null;
                this.setColumns(columns);
                this.setHeader(header);
            } else if (columns === undefined && header === undefined && recordinfo === undefined) {
                let __args = arguments;
                if (this.columns === undefined) { this.columns = null; } 
                if (this.header === undefined) { this.header = null; } 
                if (this.recordinfo === undefined) { this.recordinfo = null; } 
                this.columns = null;
                this.header = null;
                this.recordinfo = null;
            } else throw new Error('invalid overload');
        }

        public getJavaInitializationString$(): string {
            return null;
        }

        public getJavaInitializationString$java_lang_StringBuffer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        public getJavaInitializationString(buf?: any): any {
            if (((buf != null && (buf instanceof Object)) || buf === null)) {
                return <any>this.getJavaInitializationString$java_lang_StringBuffer(buf);
            } else if (buf === undefined) {
                return <any>this.getJavaInitializationString$();
            } else throw new Error('invalid overload');
        }

        public getColumns(): lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty {
            return this.columns;
        }

        public setColumns(columns: lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty) {
            this.columns = columns;
        }

        public getHeader(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty {
            return this.header;
        }

        public setHeader(header: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty) {
            this.header = header;
        }

        public getRecordInfo(): lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo {
            return this.recordinfo;
        }

        public setRecordInfo(recordinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo) {
            this.recordinfo = recordinfo;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadHeaderAndColumnProperty.java 11    09/02/25 13:46 Kura $";

        static Modtime: string = "$Modtime: 09/02/24 19:06 $";

        static Workfile: string = "$Workfile: JCFSpreadHeaderAndColumnProperty.java $";

        static Revision: string = "$Revision: 11 $";

        static serialVersionUID: number = -5402583788298826029;

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadHeaderAndColumnProperty";

        static LOG_CLASS_NAME: string = "lib.com.fujitsu.jcf.gui.JCFSpreadHeaderAndColumnProperty";

        static logstr_null: string = "";

        columns: lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty;

        header: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty;

        recordinfo: lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo;
    }
    JCFSpreadHeaderAndColumnProperty["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadHeaderAndColumnProperty";

}

