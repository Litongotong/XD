/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys.cjf {
    /**
     * Constructor for SMSJCFSpreadData.<BR>
     * @param {string} arg0
     * @class
     * @extends lib.com.fujitsu.jcf.gui.JCFSpreadData
     */
    export class SMSJCFSpreadData extends lib.com.fujitsu.jcf.gui.JCFSpreadData {
        stools: lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools;

        editableFlg: boolean;

        /**
         * フォーカス設定用ポジション
         */
        /*private*/ intFocusPosition: number[];

        /**
         * フォーカス設定用レコード位置
         */
        /*private*/ focusRow: number;

        /**
         * フォーカス設定用列名
         */
        /*private*/ focusColumnName: string;

        /**
         * レコード件数0チェックフラグ
         */
        /*private*/ check0: boolean;

        /**
         * ゼロ詰め用指定列(最大桁用)
         */
        /*private*/ zeroIntColumn: Array<any>;

        /**
         * ゼロ詰め用指定列（小数用）
         */
        /*private*/ zeroDecimalColumn: Array<any>;

        /**
         * ゼロ詰め指定長
         */
        /*private*/ zeroLength: Array<any>;

        /**
         * 編集状態指定列名
         */
        /*private*/ editTargetColumns: any;

        /**
         * チェック状態レコード背景色
         */
        /*private*/ checkedBgColor: com.java.Color;

        public constructor(arg0: string) {
            super(arg0);
            if (this.stools === undefined) { this.stools = null; }
            if (this.editableFlg === undefined) { this.editableFlg = false; }
            this.intFocusPosition = null;
            this.focusRow = -1;
            this.focusColumnName = "";
            this.check0 = false;
            this.zeroIntColumn = <any>([]);
            this.zeroDecimalColumn = <any>([]);
            this.zeroLength = <any>([]);
            this.editTargetColumns = <any>({});
            this.checkedBgColor = null;
        }

        /**
         * Returns the spreadTools.<BR>
         * @return {lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools} SpreadTools
         */
        public getSpreadTools(): lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools {
            return this.stools;
        }

        /**
         * Sets the spreadToolTip.<BR>
         * @param spreadToolTip The spreadToolTip to set
         * @param {lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools} spreadTool
         */
        public setSpreadTools(spreadTool: lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools) {
            this.stools = spreadTool;
        }

        public setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData: lib.com.fujitsu.jcf.gui.JCFItemData) {
            if (itemData == null){
                return;
            }
            if (!(itemData != null && itemData instanceof <any>lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData)){
                return;
            }
            this.setData(itemData);
            super.setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData);
            const data: SMSJCFSpreadData = <SMSJCFSpreadData>itemData;
            this.setEditableFlg(data.isEditableFlg());
            this.setSpreadTools(data.getSpreadTools());
            this.zeroIntColumn = data.getZeroIntColumn();
            this.zeroDecimalColumn = data.getZeroDecimalColumn();
            this.zeroLength = data.getZeroLength();
            this.editTargetColumns = data.getEditTargetColumns();
        }

        /**
         * @see lib.com.fujitsu.jcf.gui.JCFItemData#setDataAndAttributes(JCFItemData)
         * @param {lib.com.fujitsu.jcf.gui.JCFItemData} itemData
         */
        public setDataAndAttributes(itemData?: any) {
            if (((itemData != null && itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFItemData) || itemData === null)) {
                return <any>this.setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData);
            } else if (((itemData != null && itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFDataBean) || itemData === null)) {
                super.setDataAndAttributes(itemData);
            } else throw new Error('invalid overload');
        }

        /**
         * GUI部品の変更有無を設定します。<BR>
         * @param {boolean} b GUI部品変更有無（true：変更あり）
         */
        setModified(b: boolean) {
        }

        public addRow(row?: any) {
            if (((typeof row === 'number') || row === null)) {
                super.addRow(row);
            } else if (row === undefined) {
                return <any>this.addRow$();
            } else throw new Error('invalid overload');
        }

        public addRow$() {
        }

        /**
         * Returns the editableFlg.<BR>
         * @return {boolean} boolean
         */
        public isEditableFlg(): boolean {
            return this.editableFlg;
        }

        /**
         * Sets the editableFlg.<BR>
         * @param {boolean} editableFlg The editableFlg to set
         */
        public setEditableFlg(editableFlg: boolean) {
            this.editableFlg = editableFlg;
        }

        /**
         * 項目部品とデータＢｅａｎの関連を付けます。<BR>
         * @return {lib.com.fujitsu.jcf.gui.JCFItemData}
         */
        public createDataBean(): lib.com.fujitsu.jcf.gui.JCFItemData {
            return new SMSJCFSpreadData(super.getItemID());
        }

        /**
         * 通信データを返します。<BR>
         * このクラスでは通信データは文字列データです。<BR>
         * String型にキャストしてください。<BR>
         * 
         * @return {*} 通信データ
         */
        public getCommunicationData(): any {
            return this.getValue();
        }

        /**
         * 通信データを設定します。<BR>
         * このクラスでは通信データは文字列データです。<BR>
         * String型にキャストしてください。<BR>
         * 
         * @param {*} newValue 通信データ
         */
        public setCommunicationData(newValue: any) {
            this.setValue(<string>newValue);
        }

        /**
         * 別の項目データBeanからデータをコピーします。<BR>
         * 
         * @param itemlData 項目データBean
         * @param {lib.com.fujitsu.jcf.gui.JCFItemData} itemData
         */
        public setData(itemData: lib.com.fujitsu.jcf.gui.JCFItemData) {
            if (itemData == null){
                return;
            }
            if (!(itemData != null && itemData instanceof <any>lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData)){
                return;
            }
            const data: SMSJCFSpreadData = <SMSJCFSpreadData>itemData;
            this.setValue(data.getValue());
        }

        /**
         * 指定列の整数部をmaxLengthに達しない分ゼロ詰め設定します。
         * 編集型が数値項目以外の場合は、何もしません。<br>
         * @param {string} column 列位置
         */
        public setZeroPaddingInteger(column: string) {
            /* add */(this.zeroIntColumn.push(column)>0);
        }

        /**
         * 指定列の少数部を表示したい桁数に達しない分ゼロ詰め設定します。
         * <p>
         * 編集型が数値項目以外の場合は、何もしません。<br>
         * </p>
         * @param {string} column 列位置
         * @param {number} decimal 小数点以下表示したい桁数(最大3桁)
         */
        public setZeroPaddingDecimal(column: string, decimal: number) {
            /* add */(this.zeroDecimalColumn.push(column)>0);
            const Idecimal: number = new Number(decimal).valueOf();
            /* add */(this.zeroLength.push(Idecimal)>0);
        }

        /**
         * ゼロ詰め指定長を返します
         * @return {Array} int
         */
        public getZeroLength(): Array<any> {
            return this.zeroLength;
        }

        public setPosition$int$java_lang_String(row: number, columnName: string) {
            this.focusRow = row;
            this.focusColumnName = columnName;
        }

        /**
         * 指定したレコード位置、列名にフォーカスをセットします。
         * @param {number} row レコード位置
         * @param {string} columnName 列名
         */
        public setPosition(row?: any, columnName?: any) {
            if (((typeof row === 'number') || row === null) && ((typeof columnName === 'string') || columnName === null)) {
                return <any>this.setPosition$int$java_lang_String(row, columnName);
            } else if (((row != null && row instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadCellPosition) || row === null) && columnName === undefined) {
                super.setPosition(row);
            } else throw new Error('invalid overload');
        }

        /**
         * フォーカス設定用列名をセットします
         * @param String
         * @param {string} columnName
         */
        public setFocusColumnName(columnName: string) {
            this.focusColumnName = columnName;
        }

        /**
         * フォーカス設定用レコード位置をセットします
         * @param int
         * @param {number} row
         */
        public setFocusRow(row: number) {
            this.focusRow = row;
        }

        /**
         * レコード件数0チェックフラグをセットします
         * @param boolean
         * @param {boolean} check
         */
        public setCheck0(check: boolean) {
            this.check0 = check;
        }

        /**
         * フォーカス設定用列名を返します
         * @return {string} String
         */
        public getFocusColumnName(): string {
            return this.focusColumnName;
        }

        /**
         * フォーカス設定用レコード位置を返します
         * @return {number} int
         */
        public getFocusRow(): number {
            return this.focusRow;
        }

        /**
         * レコード件数0チェックフラグを返します
         * @return {boolean} boolean
         */
        public getCheck0(): boolean {
            return this.check0;
        }

        /**
         * ゼロ詰め用指定列（小数用）を返します
         * @return {Array} String
         */
        public getZeroDecimalColumn(): Array<any> {
            return this.zeroDecimalColumn;
        }

        /**
         * ゼロ詰め用指定列(最大桁用)を返します
         * @return {Array} String
         */
        public getZeroIntColumn(): Array<any> {
            return this.zeroIntColumn;
        }

        /**
         * 指定した列名の編集状態を設定します
         * @return {void} String
         * @param {string} column
         * @param {boolean} editable
         */
        public setColumnInformationEditable(column: string, editable: boolean) {
        }

        /**
         * 編集状態指定列名を返します
         * @return {*} HashMap
         */
        public getEditTargetColumns(): any {
            return this.editTargetColumns;
        }

        /**
         * 
         * セル情報を取得します。<p>
         * 指定された行位置、列位置のセル情報を取得します。<br>
         * 
         * @param {number} row 行位置
         * @param {number} column 列位置
         * @return {lib.com.fujitsu.jcf.gui.JCFSpreadCellData} セル情報
         */
        getCell(row: number, column: number): lib.com.fujitsu.jcf.gui.JCFSpreadCellData {
            return super.getCell(row, column);
        }

        /**
         * setRowCount をオーバーライドします。
         * 
         * スプレッドの行数を設定します。
         * 「0」が設定される場合は、 ヘッダのソート記号「▲▼」を初期化します。
         * 
         * @param {number} row 行数
         */
        public setRowCount(row: number) {
        }

        /**
         * removeRow をオーバーライドします。
         * 
         * スプレッドの指定行を削除します。
         * スプレッドの行数が「0」になる場合は、 ヘッダのソート記号「▲▼」を初期化します。
         * 
         * @param {number} row 行数
         */
        public removeRow(row: number) {
        }

        /**
         * removeAllRow をオーバーライドします。
         * 
         * スプレッドの行を全て削除し、
         * ヘッダのソート記号「▲▼」を初期化します。
         */
        public removeAllRow() {
            super.removeAllRow();
            super.setLastSorted(null);
            this.focusRow = 0;
            this.focusColumnName = "column";
            this.check0 = true;
        }

        /**
         * 行を生成します。
         * <p>
         * １行分のセル情報を生成します。<br>
         * 拡張したセルデータクラス(SampleSpreadCellData)を設定<br>
         * </p>
         * @return {lib.com.fujitsu.jcf.gui.JCFSpreadCellData[]} １行分の空のセル情報
         */
        createCells(): lib.com.fujitsu.jcf.gui.JCFSpreadCellData[] {
            const columns: number = this.getColumnCount();
            const cells: lib.com.fujitsu.jcf.gui.JCFSpreadCellData[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(columns);
            for(let col: number = 0; col < columns; col++) {{
                const cell: lib.com.fujitsu.jcf.gui.JCFSpreadCellData = new lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadCellData();
                const columnInfo: lib.com.fujitsu.jcf.gui.JCFSpreadColumnData = this.getColumnData(col);
                this.initializeCell(cell, columnInfo);
                cells[col] = cell;
            };}
            return cells;
        }

        public setCellBackground$int$int$java_lang_String(row: number, col: number, warning: string) {
            super.setCellBackground(row, col, new com.java.Color(warning));
        }

        public setCellBackground(row?: any, col?: any, warning?: any) {
            if (((typeof row === 'number') || row === null) && ((typeof col === 'number') || col === null) && ((typeof warning === 'string') || warning === null)) {
                return <any>this.setCellBackground$int$int$java_lang_String(row, col, warning);
            } else if (((typeof row === 'number') || row === null) && ((typeof col === 'number') || col === null) && ((warning != null && warning instanceof <any>com.java.Color) || warning === null)) {
                super.setCellBackground(row, col, warning);
            } else throw new Error('invalid overload');
        }
    }
    SMSJCFSpreadData["__class"] = "lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData";

}

