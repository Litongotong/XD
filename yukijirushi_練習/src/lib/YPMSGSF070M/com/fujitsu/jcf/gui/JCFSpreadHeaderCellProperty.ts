/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadHeaderCellProperty extends lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty {
        public constructor(baseHeaderCell?: any, string?: any, sortcolumn?: any) {
            if (((baseHeaderCell != null && baseHeaderCell instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty) || baseHeaderCell === null) && ((typeof string === 'string') || string === null) && ((typeof sortcolumn === 'string') || sortcolumn === null)) {
                let __args = arguments;
                super(baseHeaderCell);
                if (this.string === undefined) { this.string = null; } 
                if (this.sortcolumn === undefined) { this.sortcolumn = null; } 
                this.string = "";
                this.sortcolumn = null;
                this.string = string;
                this.sortcolumn = sortcolumn;
            } else if (((baseHeaderCell != null && baseHeaderCell instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderColumnInfoProperty) || baseHeaderCell === null) && ((typeof string === 'string') || string === null) && sortcolumn === undefined) {
                let __args = arguments;
                super(baseHeaderCell);
                if (this.string === undefined) { this.string = null; } 
                if (this.sortcolumn === undefined) { this.sortcolumn = null; } 
                this.string = "";
                this.sortcolumn = null;
                this.string = string;
            } else if (((baseHeaderCell != null && baseHeaderCell instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty) || baseHeaderCell === null) && string === undefined && sortcolumn === undefined) {
                let __args = arguments;
                let headerCell: any = __args[0];
                super(headerCell.getHeaderColumnInfoProperty());
                if (this.string === undefined) { this.string = null; } 
                if (this.sortcolumn === undefined) { this.sortcolumn = null; } 
                this.string = "";
                this.sortcolumn = null;
                this.string = headerCell.getString();
                this.sortcolumn = headerCell.getSortColumn();
            } else if (baseHeaderCell === undefined && string === undefined && sortcolumn === undefined) {
                let __args = arguments;
                super();
                if (this.string === undefined) { this.string = null; } 
                if (this.sortcolumn === undefined) { this.sortcolumn = null; } 
                this.string = "";
                this.sortcolumn = null;
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

        public getString(): string {
            return this.string;
        }

        public setString(string: string) {
            this.string = string;
        }

        public getSortColumn(): string {
            return this.sortcolumn;
        }

        public setSortColumn(column: string) {
            this.sortcolumn = column;
        }

        public load(spread?: any, hcolumn?: any) {
            if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null) && ((typeof hcolumn === 'number') || hcolumn === null)) {
                super.load(spread, hcolumn);
            } else if (((spread != null && spread instanceof <any>lib.com.fujitsu.caa.CJCell) || spread === null) && hcolumn === undefined) {
                return <any>this.load$com_fujitsu_caa_CJCell(spread);
            } else throw new Error('invalid overload');
        }

        load$com_fujitsu_caa_CJCell(cell: lib.com.fujitsu.caa.CJCell) {
        }

        public store(spread?: any, column?: any) {
            if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null) && ((typeof column === 'number') || column === null)) {
                super.store(spread, column);
            } else if (((spread != null && spread instanceof <any>lib.com.fujitsu.caa.CJCell) || spread === null) && column === undefined) {
                return <any>this.store$com_fujitsu_caa_CJCell(spread);
            } else throw new Error('invalid overload');
        }

        store$com_fujitsu_caa_CJCell(cell: lib.com.fujitsu.caa.CJCell) {
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadHeaderCellProperty.java 9     09/02/25 14:26 Kura $";

        static Modtime: string = "$Modtime: 09/02/25 10:42 $";

        static Workfile: string = "$Workfile: JCFSpreadHeaderCellProperty.java $";

        static Revision: string = "$Revision: 9 $";

        static serialVersionUID: number = 2124500017306713228;

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadHeaderCellProperty";

        string: string;

        sortcolumn: string;
    }
    JCFSpreadHeaderCellProperty["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadHeaderCellProperty";

}

