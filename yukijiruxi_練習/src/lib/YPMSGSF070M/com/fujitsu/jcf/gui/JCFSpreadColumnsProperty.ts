/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadColumnsProperty {
        public constructor(headerColumns?: any, columnCount?: any, headerColumnInfo?: any, columnInfo?: any) {
            if (((typeof headerColumns === 'number') || headerColumns === null) && ((typeof columnCount === 'number') || columnCount === null) && ((headerColumnInfo != null && headerColumnInfo instanceof <any>Array && (headerColumnInfo.length == 0 || headerColumnInfo[0] == null ||(headerColumnInfo[0] != null && headerColumnInfo[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty))) || headerColumnInfo === null) && ((columnInfo != null && columnInfo instanceof <any>Array && (columnInfo.length == 0 || columnInfo[0] == null ||(columnInfo[0] != null && columnInfo[0] instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty))) || columnInfo === null)) {
                let __args = arguments;
                if (this.headerColumns === undefined) { this.headerColumns = 0; } 
                if (this.columnCount === undefined) { this.columnCount = 0; } 
                if (this.headerColumnInfo === undefined) { this.headerColumnInfo = null; } 
                if (this.columnInfo === undefined) { this.columnInfo = null; } 
                if (this.defaultHeaderColumnInfo === undefined) { this.defaultHeaderColumnInfo = null; } 
                if (this.defaultColumnInfo === undefined) { this.defaultColumnInfo = null; } 
                if (this.name2column === undefined) { this.name2column = null; } 
                if (this.undefMap === undefined) { this.undefMap = null; } 
                this.headerColumns = 0;
                this.columnCount = 0;
                this.headerColumnInfo = null;
                this.columnInfo = null;
                this.defaultHeaderColumnInfo = null;
                this.defaultColumnInfo = null;
                this.name2column = null;
                this.undefMap = null;
                this.setColumnCount(columnCount);
                this.setHeaderColumns(headerColumns);
                this.setColumnInfo(columnInfo);
                this.setHeaderColumnInfo(headerColumnInfo);
            } else if (headerColumns === undefined && columnCount === undefined && headerColumnInfo === undefined && columnInfo === undefined) {
                let __args = arguments;
                if (this.headerColumns === undefined) { this.headerColumns = 0; } 
                if (this.columnCount === undefined) { this.columnCount = 0; } 
                if (this.headerColumnInfo === undefined) { this.headerColumnInfo = null; } 
                if (this.columnInfo === undefined) { this.columnInfo = null; } 
                if (this.defaultHeaderColumnInfo === undefined) { this.defaultHeaderColumnInfo = null; } 
                if (this.defaultColumnInfo === undefined) { this.defaultColumnInfo = null; } 
                if (this.name2column === undefined) { this.name2column = null; } 
                if (this.undefMap === undefined) { this.undefMap = null; } 
                this.headerColumns = 0;
                this.columnCount = 0;
                this.headerColumnInfo = null;
                this.columnInfo = null;
                this.defaultHeaderColumnInfo = null;
                this.defaultColumnInfo = null;
                this.name2column = null;
                this.undefMap = null;
            } else throw new Error('invalid overload');
        }

        public static getDefaultColumnName(column: number): string {
            return /* toString *//* append */(sb => { sb.str += <any>column; return sb; })(({ str: "__COL_", toString: function() { return this.str; } })).str;
        }

        public static getDefaultHeaderColumnName(hcolumn: number): string {
            return /* toString *//* append */(sb => { sb.str += <any>hcolumn; return sb; })(({ str: "__HCOL_", toString: function() { return this.str; } })).str;
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

        public getHeaderColumns(): number {
            return this.headerColumns;
        }

        public setHeaderColumns(headerColumns: number) {
            this.headerColumns = headerColumns;
        }

        public getColumnCount(): number {
            return this.columnCount;
        }

        public setColumnCount(columnCount: number) {
            this.columnCount = columnCount;
        }

        public getHeaderColumnInfo(column: number): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty {
            return null;
        }

        public setHeaderColumnInfo(headerColumnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty[]) {
        }

        public getColumnInfo$int(column: number): lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty {
            return null;
        }

        public getColumnInfo$java_lang_String(column: string): lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty {
            return null;
        }

        public getColumnInfo$java_lang_String$com_fujitsu_jcf_gui_JCFSpread(column: string, spread: lib.com.fujitsu.jcf.gui.JCFSpread): lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty {
            return null;
        }

        public getColumnInfo(column?: any, spread?: any): lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty {
            if (((typeof column === 'string') || column === null) && ((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null)) {
                return <any>this.getColumnInfo$java_lang_String$com_fujitsu_jcf_gui_JCFSpread(column, spread);
            } else if (((typeof column === 'string') || column === null) && spread === undefined) {
                return <any>this.getColumnInfo$java_lang_String(column);
            } else if (((typeof column === 'number') || column === null) && spread === undefined) {
                return <any>this.getColumnInfo$int(column);
            } else throw new Error('invalid overload');
        }

        public setColumnInfo(columnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty[]) {
        }

        public getDefaultHeaderColumnInfo(): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty {
            return this.defaultHeaderColumnInfo;
        }

        public setDefaultHeaderColumnInfo(defaultHeaderColumnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty) {
            this.defaultHeaderColumnInfo = defaultHeaderColumnInfo;
        }

        public getDefaultColumnInfo(): lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty {
            return this.defaultColumnInfo;
        }

        public setDefaultColumnInfo(defaultColumnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty) {
            this.defaultColumnInfo = defaultColumnInfo;
        }

        public iterator(): com.java.Iterator {
            return null;
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadColumnsProperty.java 13    09/02/25 13:19 Kura $";

        static Modtime: string = "$Modtime: 09/02/24 18:52 $";

        static Workfile: string = "$Workfile: JCFSpreadColumnsProperty.java $";

        static Revision: string = "$Revision: 13 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadColumnsProperty";

        static LOG_CLASS_NAME: string = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty";

        static logstr_null: string = "";

        static serialVersionUID: number = 3754098349955645818;

        headerColumns: number;

        columnCount: number;

        headerColumnInfo: com.java.List;

        columnInfo: com.java.List;

        defaultHeaderColumnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty;

        defaultColumnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty;

        name2column: any;

        undefMap: any;
    }
    JCFSpreadColumnsProperty["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty";

}

