/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys.cjf.tools {
    /**
     * 初期化処理をします。(コンストラクト)<BR>
     * @param {lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpread} spread スプレッドオブジェクト
     * @class
     */
    export class SMSSpreadTools {
        smsSpread: lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpread;

        /**
         * 一つ結合行の中で、含めている行数
         */
        public unionCellCnt: number;

        /**
         * 列名のレコードセット
         */
        /*private*/ recordSet: string[][];

        /**
         * 前回セルレコード内上下位置
         */
        public cellRecordRowPosition: number;

        public constructor(spread: lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpread) {
            if (this.smsSpread === undefined) { this.smsSpread = null; }
            if (this.unionCellCnt === undefined) { this.unionCellCnt = 0; }
            if (this.recordSet === undefined) { this.recordSet = null; }
            if (this.cellRecordRowPosition === undefined) { this.cellRecordRowPosition = 0; }
            return;
        }

        /**
         * 部品のプロパティーcolumn_namesを初期化します。<BR>
         * 結合していないスプレット用です。<BR>
         */
        public initColumnNames() {
        }

        /**
         * 部品のプロパティーcolumn_namesを初期化します。<BR>
         * 結合しているスプレット用です。<BR>
         */
        public initUnionColumnNames() {
        }

        /**
         * 最後から、入力できる列の番号を探し、見つからないと、−１戻します。<BR>
         * @return	{number} serial
         */
        public getLastEditableColumn(): number {
            let serial: number = -1;
            for(let i: number = this.smsSpread.column_names.length - 1; i >= 0; i--) {{
                if (this.getColumnEditable(i)){
                    serial = i;
                    break;
                }
            };}
            return serial;
        }

        /**
         * 列の編集可否を取得します。<BR>
         * @param {number} idx
         * @return	{boolean} ret
         */
        public getColumnEditable(idx: number): boolean {
            let ret: boolean = true;
            ret = this.smsSpread.getHeaderAndColumnProperty().getColumns().getColumnInfo$int(idx).isEditable();
            return ret;
        }

        /**
         * 右に移動します。<BR>
         */
        public rightMoveFocus() {
            this.moveFocus(1);
        }

        /**
         * フォーカスを移動します。<BR>
         * @param int direction 1:右 2:
         * @param {number} direction
         * @private
         */
        /*private*/ moveFocus(direction: number) {
        }

        /**
         * 左に移動します。<BR>
         */
        public leftMoveFocus() {
            this.moveFocus(2);
        }

        /**
         * 次行の先頭に行きます。<BR>
         */
        public nextRowFirstCell() {
        }

        /**
         * Ctrl+Homeキーを押下した場合、<BR>
         * セルフォーカスを一行の最初セルに移動します。<BR>
         */
        public initFirstCell() {
        }

        /**
         * 列の編集可否を取得します。<BR>
         * @return	{boolean} ret
         */
        public getSpreadEditable(): boolean {
            let ret: boolean = false;
            let column_: boolean = false;
            for(let i: number = 0; i < this.smsSpread.column_names.length; i++) {{
                column_ = this.smsSpread.getHeaderAndColumnProperty().getColumns().getColumnInfo$java_lang_String(this.smsSpread.column_names[i]).isEditable();
                ret = ret || column_;
                if (ret)break;
            };}
            return ret;
        }

        /**
         * 上に移動します。<BR>
         */
        public upMoveFocus() {
        }

        /**
         * 列名を戻します。<BR>
         * @return	{java.lang.String[]} column_names[]
         */
        public getsetColumnNamesMap(): string[] {
            return this.smsSpread.column_names;
        }

        /**
         * 遷移先行番号、列番号を返します。<BR>
         * @param {number} direction 1： 右移動  2： 左移動
         * @param {number} row 行番号
         * @param {number} column 列番号
         * @return	{int[]} int[] 0:行番号、1:列番号
         * @private
         */
        /*private*/ getNextCell(direction: number, row: number, column: number): number[] {
            return null;
        }

        /**
         * 遷移先行番号、列番号を返します。<BR>
         * @param {number} direction 1： 右移動  2： 左移動
         * @param {number} row 行番号
         * @param {number} column 列番号
         * @return	{int[]} int[] 0:行番号、1:列番号
         * @private
         */
        /*private*/ getNextCellRecordMode(direction: number, row: number, column: number): number[] {
            return null;
        }

        /**
         * 遷移先行番号、列番号を返します。<BR>
         * @param {number} direction 1： 右移動  2： 左移動
         * @param {number} row 行番号
         * @param {number} column 列番号
         * @return	{int[]} int[] 0:行番号、1:列番号
         * @private
         */
        /*private*/ getNextCellSingleMode(direction: number, row: number, column: number): number[] {
            return null;
        }

        /**
         * 上下同一セルの場合の有効な行番号を返します。<BR>
         * @param {number} row
         * @return	{number} int 行番号
         * @private
         */
        /*private*/ getUpperRowNumber(row: number): number {
            return row - (row % this.recordSet.length);
        }

        /**
         * 行番号からレコード番号を返します。<BR>
         * @param {number} row　行番号
         * @return	{number} int レコード番号
         * @private
         */
        /*private*/ getRecordNumber(row: number): number {
            return 0;
        }

        /**
         * 現在行がレコード中何行目かを返します。<BR>
         * 2段組のスプレッドの場合、0-1が返ってきます。
         * @param {number} row　行番号
         * @return	{number} int レコード番号
         * @private
         */
        /*private*/ getRecordRowNumber(row: number): number {
            return 0;
        }

        /**
         * 改行後のセル位置を返します。<BR>
         * @param {number} direction 1： 右移動  2： 左移動
         * @param {number} row 行番号
         * @param {number} column 列番号
         * @return	{int[]} int[] 0:行番号、1:列番号
         * @private
         */
        /*private*/ getNextRecordCellPosition(direction: number, row: number, column: number): number[] {
            return null;
        }

        /**
         * 左右同一セルの端位置を返します。<BR>
         * @param {number} direction 1： 右移動  2： 左移動
         * @param {number} row 行番号
         * @param {number} column 列番号
         * @return	{int[]} int[] 0:行番号、1:列番号
         * @private
         */
        /*private*/ getHorizontallyMatchCellPosition(direction: number, row: number, column: number): number[] {
            const rtn: number[] = [row, column];
            if (direction === 1){
                for(let i: number = rtn[1] + 1; i < this.recordSet[0].length; i++) {{
                    if (this.recordSet[this.getRecordRowNumber(rtn[0])][rtn[1]] === (this.recordSet[this.getRecordRowNumber(rtn[0])][i])){
                        rtn[1] = i;
                    } else {
                        break;
                    }
                };}
            } else {
                for(let i: number = rtn[1] - 1; i > -1; i--) {{
                    if (this.recordSet[this.getRecordRowNumber(rtn[0])][rtn[1]] === (this.recordSet[this.getRecordRowNumber(rtn[0])][i])){
                        rtn[1] = i;
                    } else {
                        break;
                    }
                };}
            }
            return rtn;
        }
    }
    SMSSpreadTools["__class"] = "lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools";

}

