/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.jcf.gui {
    export class JCFSpreadRecordInfo {
        getInteger(value: number): number {
            return 0;
        }

        public constructor(layout?: any, colWidth?: any, rowHeight?: any, fixedColumns?: any) {
            if (((layout != null && layout instanceof <any>Array && (layout.length == 0 || layout[0] == null ||layout[0] instanceof Array)) || layout === null) && ((colWidth != null && colWidth instanceof <any>Array && (colWidth.length == 0 || colWidth[0] == null ||(typeof colWidth[0] === 'number'))) || colWidth === null) && ((rowHeight != null && rowHeight instanceof <any>Array && (rowHeight.length == 0 || rowHeight[0] == null ||(typeof rowHeight[0] === 'number'))) || rowHeight === null) && ((typeof fixedColumns === 'number') || fixedColumns === null)) {
                let __args = arguments;
                if (this.layout === undefined) { this.layout = null; } 
                if (this.realLayout === undefined) { this.realLayout = null; } 
                if (this.rowHeight === undefined) { this.rowHeight = null; } 
                if (this.colWidth === undefined) { this.colWidth = null; } 
                if (this.spans === undefined) { this.spans = null; } 
                if (this.conflicts === undefined) { this.conflicts = null; } 
                if (this.rects === undefined) { this.rects = null; } 
                if (this.fixedColumns === undefined) { this.fixedColumns = 0; } 
                if (this.columns === undefined) { this.columns = null; } 
                if (this.headers === undefined) { this.headers = null; } 
                if (this.removedMap === undefined) { this.removedMap = null; } 
                if (this.removedList === undefined) { this.removedList = null; } 
                if (this.intList === undefined) { this.intList = null; } 
                if (this.lastIndex === undefined) { this.lastIndex = 0; } 
                this.colWidth = null;
                this.spans = null;
                this.conflicts = null;
                this.rects = null;
                this.fixedColumns = 0;
                this.columns = null;
                this.headers = null;
                this.removedMap = null;
                this.removedList = null;
                this.intList = <any>([]);
                this.lastIndex = 0;
                this.layout = layout;
                this.colWidth = colWidth;
                this.rowHeight = rowHeight;
                this.fixedColumns = fixedColumns;
            } else if (layout === undefined && colWidth === undefined && rowHeight === undefined && fixedColumns === undefined) {
                let __args = arguments;
                if (this.layout === undefined) { this.layout = null; } 
                if (this.realLayout === undefined) { this.realLayout = null; } 
                if (this.rowHeight === undefined) { this.rowHeight = null; } 
                if (this.colWidth === undefined) { this.colWidth = null; } 
                if (this.spans === undefined) { this.spans = null; } 
                if (this.conflicts === undefined) { this.conflicts = null; } 
                if (this.rects === undefined) { this.rects = null; } 
                if (this.fixedColumns === undefined) { this.fixedColumns = 0; } 
                if (this.columns === undefined) { this.columns = null; } 
                if (this.headers === undefined) { this.headers = null; } 
                if (this.removedMap === undefined) { this.removedMap = null; } 
                if (this.removedList === undefined) { this.removedList = null; } 
                if (this.intList === undefined) { this.intList = null; } 
                if (this.lastIndex === undefined) { this.lastIndex = 0; } 
                this.colWidth = null;
                this.spans = null;
                this.conflicts = null;
                this.fixedColumns = 0;
                this.columns = null;
                this.headers = null;
                this.removedMap = null;
                this.removedList = null;
                this.intList = <any>([]);
                this.lastIndex = 0;
                this.layout = null;
                this.colWidth = null;
                this.rowHeight = null;
                this.fixedColumns = 0;
            } else throw new Error('invalid overload');
        }

        public getJavaInitializationString$java_lang_StringBuffer(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            if (buf == null)buf = { str: "", toString: function() { return this.str; } };
            /* append */(sb => { sb.str += <any>"new lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo("; return sb; })(buf);
            buf = this.storeJavaInitializationLayout(buf);
            /* append */(sb => { sb.str += <any>", "; return sb; })(buf);
            buf = this.storeJavaInitializationColumnWidth(buf);
            /* append */(sb => { sb.str += <any>", "; return sb; })(buf);
            buf = this.storeJavaInitializationRowHeight(buf);
            /* append */(sb => { sb.str += <any>", "; return sb; })(buf);
            /* append */(sb => { sb.str += <any>this.fixedColumns; return sb; })(buf);
            /* append */(sb => { sb.str += <any>" )"; return sb; })(buf);
            return buf;
        }

        public getJavaInitializationString(buf?: any): any {
            if (((buf != null && (buf instanceof Object)) || buf === null)) {
                return <any>this.getJavaInitializationString$java_lang_StringBuffer(buf);
            } else if (buf === undefined) {
                return <any>this.getJavaInitializationString$();
            } else throw new Error('invalid overload');
        }

        public getJavaInitializationString$(): string {
            const buf: { str: string, toString: Function } = this.getJavaInitializationString$java_lang_StringBuffer(null);
            return buf.str;
        }

        /*private*/ storeJavaInitializationRowHeight(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        /*private*/ storeJavaInitializationColumnWidth(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        /*private*/ storeJavaInitializationLayout(buf: { str: string, toString: Function }): { str: string, toString: Function } {
            return null;
        }

        /*private*/ isValidLayout$(): boolean {
            return true;
        }

        createHeaderAndColumnProperty(spread: lib.com.fujitsu.jcf.gui.JCFSpread): lib.com.fujitsu.jcf.gui.JCFSpreadHeaderAndColumnProperty {
            return null;
        }

        init(spread: lib.com.fujitsu.jcf.gui.JCFSpread, columns: lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty, headers: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty) {
        }

        public resetColumnWidth$com_fujitsu_jcf_gui_JCFSpread$com_fujitsu_jcf_gui_JCFSpreadColumnsProperty$int$int(spread: lib.com.fujitsu.jcf.gui.JCFSpread, columns: lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty, start: number, end: number) {
        }

        public resetColumnWidth(spread?: any, columns?: any, start?: any, end?: any) {
            if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null) && ((columns != null && columns instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty) || columns === null) && ((typeof start === 'number') || start === null) && ((typeof end === 'number') || end === null)) {
                return <any>this.resetColumnWidth$com_fujitsu_jcf_gui_JCFSpread$com_fujitsu_jcf_gui_JCFSpreadColumnsProperty$int$int(spread, columns, start, end);
            } else if (((spread != null && spread instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpread) || spread === null) && ((typeof columns === 'string') || columns === null) && start === undefined && end === undefined) {
                return <any>this.resetColumnWidth$com_fujitsu_jcf_gui_JCFSpread$java_lang_String(spread, columns);
            } else throw new Error('invalid overload');
        }

        initGrid(spread: lib.com.fujitsu.jcf.gui.JCFSpread) {
        }

        public isRecordMode(): boolean {
            return false;
        }

        getLayout(): string[][] {
            return this.layout;
        }

        setLayout(layout: string[][]) {
            this.layout = layout;
        }

        public getColumnCount(): number {
            const layout: string[][] = this.layout;
            if (layout == null || layout.length === 0)return 0; else return layout[0].length;
        }

        public getHeaderColumnCount(): number {
            return this.columns.getHeaderColumns();
        }

        public getRowCount(): number {
            const layout: string[][] = this.layout;
            if (layout == null)return 0; else return layout.length;
        }

        public getFixedColumns(): number {
            return this.fixedColumns;
        }

        setFixedColumns(columns: number) {
            this.fixedColumns = columns;
        }

        public getColumnWidth(): number[] {
            return this.colWidth;
        }

        public setColumnWidth(width: number[]) {
            this.colWidth = width;
        }

        public getRowHeight(): number[] {
            return this.rowHeight;
        }

        public setRowHeight(height: number[]) {
            this.rowHeight = height;
        }

        regulate() {
            if (this.isRecordMode())this.regulateMulti(); else this.regulateSingle();
        }

        static getConflictName(n: number, name: string): string {
            return null;
        }

        static getOriginalName(name: string): string {
            return null;
        }

        regulateSingle() {
        }

        regulateMulti() {
        }

        public iterator(): any {
            return null;
        }

        public getMergeRect(name: string): com.java.Rectangle {
            return null;
        }

        setRecordCount(spread: lib.com.fujitsu.jcf.gui.JCFSpread, nofrec: number) {
        }

        resetRecordHeight(spread: lib.com.fujitsu.jcf.gui.JCFSpread, rec: number) {
        }

        /*private*/ initRecord(spread: lib.com.fujitsu.jcf.gui.JCFSpread, record: number) {
        }

        addRecord(spread: lib.com.fujitsu.jcf.gui.JCFSpread) {
        }

        insertRecord(spread: lib.com.fujitsu.jcf.gui.JCFSpread, record: number) {
        }

        removeRecord(spread: lib.com.fujitsu.jcf.gui.JCFSpread, record: number) {
        }

        getColumnName(colno: number): string {
            return null;
        }

        getColumnIndex(name: string): number {
            return -1;
        }

        public isValidLayout$int$int(row: number, column: number): boolean {
            return false;
        }

        public isValidLayout(row?: any, column?: any): boolean {
            if (((typeof row === 'number') || row === null) && ((typeof column === 'number') || column === null)) {
                return <any>this.isValidLayout$int$int(row, column);
            } else if (row === undefined && column === undefined) {
                return <any>this.isValidLayout$();
            } else throw new Error('invalid overload');
        }

        getColumnInfo(name: string): lib.com.fujitsu.jcf.gui.JCFSpreadColumnInfoProperty {
            return null;
        }

        initializeDataBean(spread: lib.com.fujitsu.jcf.gui.JCFSpread, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData) {
        }

        public isVisible(column: string): boolean {
            return false;
        }

        public getRowIndex(spread: lib.com.fujitsu.jcf.gui.JCFSpread, visiblerow: number): number {
            return 0;
        }

        public getRemoveRowCount(): number {
            return 0;
        }

        public getRemoveRow(n: number): any {
            return 0;
        }

        getRemovedMap(index: number, flag: number): any {
            return null;
        }

        getRemovedCell(spread: lib.com.fujitsu.jcf.gui.JCFSpread, index: number, column: string): lib.com.fujitsu.caa.CJCell {
            return null;
        }

        /*private*/ static getDebugCopyGetFlagString(copy: number): string {
            return null;
        }

        /*private*/ static getDebugCopySetFlagString(attribute: number): string {
            return null;
        }

        getSpreadDataBean(spread: lib.com.fujitsu.jcf.gui.JCFSpread, dataBean: lib.com.fujitsu.jcf.gui.JCFItemData, copy: number): lib.com.fujitsu.jcf.gui.JCFItemData {
            return null;
        }

        setSpreadDataBean(spread: lib.com.fujitsu.jcf.gui.JCFSpread, dataBean: lib.com.fujitsu.jcf.gui.JCFItemData, attribute: number) {
        }

        getHiddenData(hcell: lib.com.fujitsu.caa.CJCell): lib.com.fujitsu.jcf.gui.JCFSpreadHiddenData {
            return null;
        }

        public getSpan(name: string): com.java.Rectangle {
            return null;
        }

        public getRecordCount(): number {
            return this.lastIndex;
        }

        /*private*/ readObject(stream: com.java.ObjectInputStream) {
        }

        resetColumnWidth$com_fujitsu_jcf_gui_JCFSpread$java_lang_String(spread: lib.com.fujitsu.jcf.gui.JCFSpread, column: string) {
        }

        static Header: string = "$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadRecordInfo.java 78    09/06/19 14:21 Kura $";

        static Modtime: string = "$Modtime: 09/06/19 13:45 $";

        static Workfile: string = "$Workfile: JCFSpreadRecordInfo.java $";

        static Revision: string = "$Revision: 78 $";

        public static CLASS_VERSION: string = "V2L10";

        public static COPYRIGHT: string = "All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009";

        public static FUJITSU_CONFIDENTIAL: string = "FUJITSU CONFIDENTIAL";

        static CLASS_NAME: string = "JCFSpreadRecordInfo";

        static LOG_CLASS_NAME: string = "lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo";

        static logstr_null: string = "";

        static serialVersionUID: number = 4765484193014862055;

        static CONFLICT_PREFIX: string = "__CONFLICT_";

        layout: string[][];

        realLayout: string[][];

        rowHeight: number[];

        colWidth: number[];

        spans: any;

        conflicts: any;

        rects: com.java.Rectangle[][];

        fixedColumns: number;

        columns: lib.com.fujitsu.jcf.gui.JCFSpreadColumnsProperty;

        headers: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderProperty;

        removedMap: any;

        removedList: Array<any>;

        intList: Array<any>;

        lastIndex: number;

        static REMOVEDMAP_CREATE: number = 1;

        static SETDATABEAN_DATA: number = 1;

        static SETDATABEAN_ATTRIBUTE: number = 2;

        static GETDATABEAN_DATA: number = 1;

        static GETDATABEAN_ATTRIBUTE: number = 2;

        static GETDATABEAN_ALL: number = 4;

        static GETDATABEAN_MODIFIED: number = 8;

        static GETDATABEAN_SELMODIFIED: number = 16;

        static INDEX: string = "__INDEX";
    }
    JCFSpreadRecordInfo["__class"] = "lib.com.fujitsu.jcf.gui.JCFSpreadRecordInfo";

}

