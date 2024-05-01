/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
namespace lib.com.fujitsu.sms.sol.sys.cjf {
    /**
     * <PRE>
     * CJFSPREADを拡張したSPREADクラスです。<BR>
     * </PRE>
     * @author 富士通)young-joon.Ahn
     * @version
     * @class
     * @extends lib.com.fujitsu.jcf.gui.JCFSpread
     */
    export class SMSJCFSpread extends lib.com.fujitsu.jcf.gui.JCFSpread {
        __com_fujitsu_sms_sol_sys_cjf_SMSJCFSpread___cdInitBean() {
            try {
                this.__cdEnableEventDispatch = true;
            } catch(e) {
                console.error(e.message, e);
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        __cdEnableEventDispatch: boolean;

        /**
         * スプレッド列名
         */
        public column_names: string[];

        /**
         * 二色表示するか否か
         */
        doubleColor: boolean;

        /**
         * 選択された行の背景色を変更するか否か
         */
        unchangeCheckedRecord: boolean;

        spread: SMSJCFSpread;

        /**
         * スプレッドツール
         */
        stools: lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools;

        focusFlg: boolean;

        /**
         * 偶数行 確認色
         */
        static color: com.java.Color; public static color_$LI$(): com.java.Color { if (SMSJCFSpread.color == null) { SMSJCFSpread.color = new com.java.Color(255, 255, 187); }  return SMSJCFSpread.color; }

        /**
         * スプレッドのチェックボックスがチェックしているかを判別
         */
        /*private*/ isChecked: boolean;

        /**
         * マウスプレスとマウスクリックの判断
         */
        /*private*/ pressedPoint: com.java.Point;

        /**
         * 編集可能ヘッダ色
         */
        static editableColor: com.java.Color; public static editableColor_$LI$(): com.java.Color { if (SMSJCFSpread.editableColor == null) { SMSJCFSpread.editableColor = new com.java.Color(123, 149, 251); }  return SMSJCFSpread.editableColor; }

        /**
         * 編集不可能ヘッダ色
         */
        static diseditableColor: com.java.Color; public static diseditableColor_$LI$(): com.java.Color { if (SMSJCFSpread.diseditableColor == null) { SMSJCFSpread.diseditableColor = new com.java.Color(182, 198, 250); }  return SMSJCFSpread.diseditableColor; }

        /**
         * コンボボックス２　オープン判断用フラグ
         */
        /*private*/ choice2Space: boolean;

        /**
         * チェック状態レコード背景色
         */
        static checkedBgColor: com.java.Color; public static checkedBgColor_$LI$(): com.java.Color { if (SMSJCFSpread.checkedBgColor == null) { SMSJCFSpread.checkedBgColor = new com.java.Color(100, 149, 237); }  return SMSJCFSpread.checkedBgColor; }

        /**
         * チェックBOXの無効化状態での背景色
         */
        static disableboxBgColor: com.java.Color; public static disableboxBgColor_$LI$(): com.java.Color { if (SMSJCFSpread.disableboxBgColor == null) { SMSJCFSpread.disableboxBgColor = new com.java.Color(195, 195, 195); }  return SMSJCFSpread.disableboxBgColor; }

        /**
         * チェックBOXの無効化状態での前景色
         */
        static disableboxFgColor: com.java.Color; public static disableboxFgColor_$LI$(): com.java.Color { if (SMSJCFSpread.disableboxFgColor == null) { SMSJCFSpread.disableboxFgColor = new com.java.Color(120, 120, 120); }  return SMSJCFSpread.disableboxFgColor; }

        /**
         * スプレッド日付項目フォーマットパターン　yyyy/MM/dd H:mm:ss
         */
        /*private*/ DATE_FORMAT_PATTERN_YYYYMMDDHMMSS: string;

        /**
         * スプレッド日付項目フォーマットパターン　yyyy/MM/dd H:mm
         */
        /*private*/ DATE_FORMAT_PATTERN_YYYYMMDDHMM: string;

        /**
         * スプレッド日付項目フォーマットパターン　yyyy/MM/dd
         */
        /*private*/ DATE_FORMAT_PATTERN_YYYYMMDD: string;

        /**
         * スプレッド日付項目フォーマットパターン　yyyy/MM
         */
        /*private*/ DATE_FORMAT_PATTERN_YYYYMM: string;

        /**
         * スプレッド日付項目フォーマットパターン　MM/dd H:mm:ss
         */
        /*private*/ DATE_FORMAT_PATTERN_MMDDHMMSS: string;

        /**
         * スプレッド日付項目フォーマットパターン　MM/dd H:mm
         */
        /*private*/ DATE_FORMAT_PATTERN_MMDDHMM: string;

        /**
         * スプレッド日付項目フォーマットパターン　H:mm:ss
         */
        /*private*/ DATE_FORMAT_PATTERN_HMMSS: string;

        /**
         * スプレッド日付項目フォーマットパターン　H:mm
         */
        /*private*/ DATE_FORMAT_PATTERN_HMM: string;

        /**
         * スプレッド日付項目フォーマットパターン　MM/dd
         */
        /*private*/ DATE_FORMAT_PATTERN_MMDD: string;

        /**
         * スプレッド日付項目フォーマットパターン　mm:ss
         */
        /*private*/ DATE_FORMAT_PATTERN_MMSS: string;

        /**
         * スプレッド日付項目フォーマットパターン　yyyy'年'MM'月'dd'日'H'時'mm'分'ss'秒'
         */
        /*private*/ DATE_FORMAT_PATTERN_YYYYMMDDHMMSS_J: string;

        /**
         * スプレッド日付項目フォーマットパターン　yyyy'年'MM'月'dd'日'H'時'mm'分'
         */
        /*private*/ DATE_FORMAT_PATTERN_YYYYMMDDHMM_J: string;

        /**
         * スプレッド日付項目フォーマットパターン　yyyy'年'MM'月'dd'日'
         */
        /*private*/ DATE_FORMAT_PATTERN_YYYYMMDD_J: string;

        /**
         * スプレッド日付項目フォーマットパターン　yyyy'年'MM'月'
         */
        /*private*/ DATE_FORMAT_PATTERN_YYYYMM_J: string;

        /**
         * スプレッド日付項目フォーマットパターン　MM'月'dd'日'H'時'mm'分'ss'秒'
         */
        /*private*/ DATE_FORMAT_PATTERN_MMDDHMMSS_J: string;

        /**
         * スプレッド日付項目フォーマットパターン　H'時'mm'分'ss'秒'
         */
        /*private*/ DATE_FORMAT_PATTERN_HMMSS_J: string;

        /**
         * スプレッド日付項目フォーマットパターン　H'時'mm'分'
         */
        /*private*/ DATE_FORMAT_PATTERN_HMM_J: string;

        /**
         * スプレッド日付項目フォーマットパターン　MM'月'dd'日'
         */
        /*private*/ DATE_FORMAT_PATTERN_MMDD_J: string;

        /**
         * スプレッド日付項目フォーマットパターン　mm'分'ss'秒'
         */
        /*private*/ DATE_FORMAT_PATTERN_MMSS_J: string;

        /**
         * スプレッド日付フォーマット記号「/」
         */
        /*private*/ DATE_FORMAT_SYMBOL_DEFAULT: string;

        /**
         * スプレッド日付フォーマット記号「年」
         */
        /*private*/ DATE_FORMAT_SYMBOL_NEN: string;

        __com_fujitsu_sms_sol_sys_cjf_SMSJCFSpread_initBeanUser() {
        }

        /**
         * カーソル位置がコンボボックス２の時にドロップダウンリストをオープンします。
         */
        dropdownList() {
        }

        /**
         * 指定したキーコードをコンポーネントへ送ります。
         * @param {com.java.Component} component コンポーネント
         * @param {number} keyCode キーコード
         */
        sendKeyCode(component: com.java.Component, keyCode: number) {
        }

        /**
         * セルの編集可否を取得します。<BR>
         * @param {number} columnIdx
         * @param {number} rowIdx
         * @return	{boolean} ret
         * @private
         */
        getCellEditable(columnIdx: number, rowIdx: number): boolean {
            const ret: boolean = true;
            return ret;
        }

        /**
         * SpreadToolsプロパティを取得します。<BR>
         * @return	{lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools} stools
         */
        public getSpreadTools(): lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools {
            return this.stools;
        }

        /**
         * 実際、画面をデザインする時、何時でも列初期化後、必ずsetBoundsが実行される。<BR>
         * で、setBounds中で、列名を取れる。<BR>
         * ここで、initColumnNames()が実行すると、業務側は列名が初期化しなくても大丈夫です。<BR>
         * @param {number} arg0
         * @param {number} arg1
         * @param {number} arg2
         * @param {number} arg3
         */
        public setBounds(arg0: number, arg1: number, arg2: number, arg3: number) {
        }

        /**
         * 偶数行の色を変える処理をします。<BR>
         * @param {com.java.Color} color
         */
        public initRowColor(color: com.java.Color) {
            if (this.isDoubleColor()){
            }
        }

        /**
         * スプレッド内のチェックボックスが無効状態の場合の背景色を変更します。<BR>
         */
        public setDisableboxBackground() {
        }

        /**
         * コンボボックスにチェックされている場合、
         * チェックされたrecordの行の色を変更します。<BR>
         * @param {number} row      列番号
         * @param {com.java.Color} value	変更後の色
         * @param {com.java.Color} target	変更の対象になる色
         */
        public checkedChangeRowColor(row: number, value: com.java.Color, target: com.java.Color) {
        }

        /**
         * 指定列の整数部をmaxLengthに達しない分ゼロ詰め設定します。
         * <p>
         * 編集型が数値項目以外の場合は、何もしません。<br>
         * </p>
         * @param {com.java.ArrayList} column 列位置
         */
        public setZeroPaddingInteger(column: com.java.ArrayList) {
        }

        /**
         * 指定列の少数部を表示したい桁数に達しない分ゼロ詰め設定します。
         * <p>
         * 編集型が数値項目以外の場合は、何もしません。<br>
         * </p>
         * @param {com.java.ArrayList} column 列位置
         * @param {com.java.ArrayList} decimal 小数点以下表示したい桁数(最大3桁)
         */
        public setZeroPaddingDecimal(column: com.java.ArrayList, decimal: com.java.ArrayList) {
        }

        /**
         * 指定列のフォーマットを設定します。
         * <p>
         * 編集型が数値項目以外の場合は、何もしません。<br>
         * </p>
         * @param column 列位置
         * @param {boolean} allowed true:カンマ編集を許す、false:カンマ編集を許さない
         * @param {string} format ユーザ定義の編集型
         * @param {boolean} flag 整数ゼロ詰め/小数ゼロ詰め判断フラグ
         * @since V01L20-UT030
         * @param {string} columnName
         * @private
         */
        setColumnInformationUserFormat(columnName: string, allowed: boolean, format: string, flag: boolean) {
        }

        /**
         * キーを通知します。<BR>
         * 
         * @param  {lib.com.fujitsu.jcf.gui.JCFActionEvent} jcfEvent CJFアクションイベント
         * @param  {com.java.KeyEvent} keyEvent キーイベント
         * @return {boolean} true:CJFアクションイベントをfireした場合、<BR>
         * false:CJFアクションイベントをfireしなかった場合<BR>
         */
        public fireKey(jcfEvent: lib.com.fujitsu.jcf.gui.JCFActionEvent, keyEvent: com.java.KeyEvent): boolean {
            return true;
        }

        /**
         * 入力フィールドをオープンする前に発行されるイベントです。<BR>
         * @param {lib.com.fujitsu.caa.CJSpreadActionEvent} event スプレッドアクションイベント
         */
        public inputAreaOpen(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        /**
         * 入力フィールドをクローズする前に発行されるイベントです。<BR>
         * 編集型が自由項目、数値項目、日付項目、コンボボックス、コンボボックス２のときに通知されます。<BR>
         * このイベントはセルに値が反映される前に生成されますので、
         * 通知された位置のセルには更新された文字列は格納されていません。<BR>
         * 新しい設定値は入力コンポーネントから取得する必要があります。<BR>
         * @param {lib.com.fujitsu.caa.CJSpreadActionEvent} event スプレッドアクションイベント
         */
        public inputAreaClose(event: lib.com.fujitsu.caa.CJSpreadActionEvent) {
        }

        /**
         * 入力フィールドがクローズされた後に発行されるイベントです。<BR>
         * このメソッド以降、inputAreaOpened(CJCellEditEvent)はfalseに設定されます。<BR>
         * 編集タイプが数値項目の場合はこのメソッドで編集部品へのキーリスナ登録解除処理を行います。<BR>
         * このメソッドをオーバーライドする場合、メソッド中で JCFSpread.inputAreaClosed() を呼び出して <BR>
         * inputAreaOpened(CJCellEditEvent) の設定処理およびキーリスナ登録処理を阻害しないように配慮する必要があります。 <BR>
         * @param {lib.com.fujitsu.caa.event.CJCellEditEvent} event セル編集イベント
         */
        public inputAreaClosed(event: lib.com.fujitsu.caa.event.CJCellEditEvent) {
        }

        /**
         * 時間(H)が含まれているフォーマットパターンか判定します。
         * @param {string} formatPattern フォーマットパターン文字列
         * @return {boolean} true：含まれている　false：含まれていない
         * @private
         */
        containsHFormat(formatPattern: string): boolean {
            let ret: boolean = false;
            if (formatPattern != null && formatPattern.indexOf("H") >= 0){
                ret = true;
            }
            return ret;
        }

        /**
         * 年(yyyy)が含まれているフォーマットパターンか判定します。
         * @param {string} formatPattern フォーマットパターン文字列
         * @return {boolean} true：含まれている　false：含まれていない
         * @private
         */
        containsYearFormat(formatPattern: string): boolean {
            let ret: boolean = false;
            if (formatPattern != null && formatPattern.indexOf("y") >= 0){
                ret = true;
            }
            return ret;
        }

        /**
         * 時刻のみのフォーマットパターンか判定します。
         * @param {string} formatPattern フォーマットパターン文字列
         * @return {boolean} true：時刻のみ　false：時刻以外も含む
         * @private
         */
        isTimeOnlyFormatPattern(formatPattern: string): boolean {
            let ret: boolean = false;
            if (formatPattern != null && ((formatPattern === this.DATE_FORMAT_PATTERN_HMMSS) || (formatPattern === this.DATE_FORMAT_PATTERN_HMM) || (formatPattern === this.DATE_FORMAT_PATTERN_MMSS) || (formatPattern === this.DATE_FORMAT_PATTERN_HMMSS_J) || (formatPattern === this.DATE_FORMAT_PATTERN_HMM_J) || (formatPattern === this.DATE_FORMAT_PATTERN_MMSS_J))){
                ret = true;
            }
            return ret;
        }

        /**
         * @see lib.com.fujitsu.jcf.gui.JCFItemInterface#createDataBean()
         * @return {lib.com.fujitsu.jcf.gui.JCFItemData}
         */
        public createDataBean(): lib.com.fujitsu.jcf.gui.JCFItemData {
            return null;
        }

        /**
         * @see lib.com.fujitsu.jcf.gui.JCFItemInterface#setData(JCFItemData)
         * @param {lib.com.fujitsu.jcf.gui.JCFItemData} itemData
         */
        public setData(itemData: lib.com.fujitsu.jcf.gui.JCFItemData) {
        }

        /**
         * 指定セルを選択状態にします。
         * @param {number} row
         * @param colum
         * @param {string} colmn
         */
        selectCell(row: number, colmn: string) {
        }

        /**
         * 指定行を選択状態にします。
         * @param {number} row
         */
        selectRow(row: number) {
        }

        /**
         * 先頭セルがチェックされた行の背景色を変更します。
         * 業務で変更したセル背景色を保持したいので、変更の対象になる色を引数にします。
         * @param {number} row     　行番号
         * @param {com.java.Color} value	変更後の色
         * @param {com.java.Color} target	変更の対象になる色
         */
        setCheckedRowBackGround(row: number, value: com.java.Color, target: com.java.Color) {
        }

        /**
         * @see lib.com.fujitsu.jcf.gui.JCFItemInterface#setDataAndAttributes(JCFItemData)
         * @param {lib.com.fujitsu.jcf.gui.JCFItemData} itemData
         */
        public setDataAndAttributes(itemData: lib.com.fujitsu.jcf.gui.JCFItemData) {
            if (itemData == null){
                return;
            }
            if (!(itemData != null && itemData instanceof <any>lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData)){
                return;
            }
            const data: lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData = <lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData>itemData;
            this.setData(itemData);
        }

        /**
         * @see lib.com.fujitsu.jcf.gui.JCFSpread#getData(JCFItemData, boolean)
         * @param {lib.com.fujitsu.jcf.gui.JCFItemData} itemData
         * @param {boolean} unconditional
         * @return {lib.com.fujitsu.jcf.gui.JCFItemData}
         */
        public getData(itemData: lib.com.fujitsu.jcf.gui.JCFItemData, unconditional: boolean): lib.com.fujitsu.jcf.gui.JCFItemData {
            if (itemData == null){
                return itemData;
            }
            if (!(itemData != null && itemData instanceof <any>lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData)){
                return itemData;
            }
            return itemData;
        }

        /**
         * @see lib.com.fujitsu.jcf.gui.JCFSpread#getDataAndAttributes(JCFItemData, boolean)
         * @param {lib.com.fujitsu.jcf.gui.JCFItemData} itemData
         * @param {boolean} unconditional
         * @return {lib.com.fujitsu.jcf.gui.JCFItemData}
         */
        public getDataAndAttributes(itemData: lib.com.fujitsu.jcf.gui.JCFItemData, unconditional: boolean): lib.com.fujitsu.jcf.gui.JCFItemData {
            if (itemData == null){
                return itemData;
            }
            if (!(itemData != null && itemData instanceof <any>lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpreadData)){
                return itemData;
            }
            return itemData;
        }

        public addVetoableChangeListener(listener: com.java.VetoableChangeListener) {
        }

        public removeVetoableChangeListener(listener: com.java.VetoableChangeListener) {
        }

        public addPropertyChangeListener(listener: com.java.PropertyChangeListener) {
        }

        public removePropertyChangeListener(listener: com.java.PropertyChangeListener) {
        }

        public fireEvent(eventName?: any, listenerMethodName?: any, param?: any, listeners?: any, isMulticast?: any) {
            if (((typeof eventName === 'string') || eventName === null) && ((typeof listenerMethodName === 'string') || listenerMethodName === null) && ((param != null) || param === null) && ((listeners != null && listeners instanceof <any>com.java.Vector) || listeners === null) && ((typeof isMulticast === 'boolean') || isMulticast === null)) {
                super.fireEvent(eventName, listenerMethodName, param, listeners, isMulticast);
            } else if (((typeof eventName === 'string') || eventName === null) && ((typeof listenerMethodName === 'string') || listenerMethodName === null) && ((param != null) || param === null) && ((typeof listeners === 'boolean') || listeners === null) && isMulticast === undefined) {
                return <any>this.fireEvent$java_lang_String$java_lang_String$java_lang_Object$boolean(eventName, listenerMethodName, param, listeners);
            } else throw new Error('invalid overload');
        }

        fireEvent$java_lang_String$java_lang_String$java_lang_Object$boolean(eventName: string, listenerMethodName: string, param: any, isMulticast: boolean) {
        }

        /*private*/ __cdIsdoubleColorPropertyConstrained: boolean;

        /*private*/ __cdIsdoubleColorPropertyBounded: boolean;

        /**
         * doubleColorプロパティの取得メソッド
         * @return {boolean}
         */
        public isDoubleColor(): boolean {
            return this.doubleColor;
        }

        /**
         * doubleColorプロパティの設定メソッド
         * @param {boolean} newValue
         */
        public setDoubleColor(newValue: boolean) {
        }

        /**
         * HeaderAndColumnプロパティの設定メソッド
         * 基底クラスから日付列の入力制限を行う修正を追加
         * @param {lib.com.fujitsu.jcf.gui.JCFSpreadHeaderAndColumnProperty} newValue JCFSpreadHeaderAndColumnProperty
         */
        public setHeaderAndColumnProperty(newValue: lib.com.fujitsu.jcf.gui.JCFSpreadHeaderAndColumnProperty) {
        }

        /**
         * パネルの再利用時(*)にスプレッド部品の初期値を復元するメソッド
         * {0,0}位置のセルが選択状態になるためオーバーライドして回避
         */
        public restoreInitialStatus() {
        }

        public setColumnInformationEditable(column?: any, editable?: any) {
            if (((typeof column === 'string') || column === null) && ((typeof editable === 'boolean') || editable === null)) {
                super.setColumnInformationEditable(column, editable);
            } else if (((column != null && column instanceof <any>com.java.HashMap) || column === null) && editable === undefined) {
                return <any>this.setColumnInformationEditable$com_java_HashMap(column);
            } else throw new Error('invalid overload');
        }

        setColumnInformationEditable$com_java_HashMap(value: com.java.HashMap) {
        }

        setCellNumberDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column: number, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: boolean) {
        }

        public setCellNumberDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData, attribute: number) {
            this.setCellFormatNumber(column, spreadData);
        }

        /**
         * 
         * 項目データBeanから、指定した列のセルのデータと属性を設定します。
         * <p>
         * 列の編集型が数値項目の時に使用します。<br>
         * attribute の設定により、”データのみ設定”と、”データと属性を設定”の選択が行えます。<br>
         * </p>
         * @param {string} column 列位置
         * @param {lib.com.fujitsu.jcf.gui.JCFSpreadData} spreadData 項目データBean
         * @param {number} attribute コピー範囲を整数値で指定します。
         */
        public setCellNumberDataAndAttributes(column?: any, spreadData?: any, attribute?: any) {
            if (((typeof column === 'string') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'number') || attribute === null)) {
                return <any>this.setCellNumberDataAndAttributes$java_lang_String$com_fujitsu_jcf_gui_JCFSpreadData$int(column, spreadData, attribute);
            } else if (((typeof column === 'number') || column === null) && ((spreadData != null && spreadData instanceof <any>lib.com.fujitsu.jcf.gui.JCFSpreadData) || spreadData === null) && ((typeof attribute === 'boolean') || attribute === null)) {
                return <any>this.setCellNumberDataAndAttributes$int$com_fujitsu_jcf_gui_JCFSpreadData$boolean(column, spreadData, attribute);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * 項目データBeanから、指定した列のセルにフォーマットした文字列を設定します。
         * <p>
         * 列の編集型が数値項目の時に使用します。<br>
         * </p>
         * @param {string} column 列位置
         * @param {lib.com.fujitsu.jcf.gui.JCFSpreadData} spreadData 項目データBean
         * @private
         */
        setCellFormatNumber(column: string, spreadData: lib.com.fujitsu.jcf.gui.JCFSpreadData) {
        }

        /*private*/ __cdIsunchangeCheckedRecordPropertyConstrained: boolean;

        /*private*/ __cdIsunchangeCheckedRecordPropertyBounded: boolean;

        /**
         * unchangeCheckedRecordプロパティの取得メソッド
         * @return {boolean}
         */
        public isUnchangeCheckedRecord(): boolean {
            return this.unchangeCheckedRecord;
        }

        /**
         * unchangeCheckedRecordプロパティの設定メソッド
         * @param {boolean} newValue
         */
        public setUnchangeCheckedRecord(newValue: boolean) {
        }

        /**
         * 項目データBeanからデータと属性を設定します。<p>
         * attribute の設定により、”データのみ設定”と、”データと属性を設定”の選択が行えます。<br>
         * 
         * @param {lib.com.fujitsu.jcf.gui.JCFItemData} dataBean 項目データBean
         * @param {boolean} attribute true:データと属性、false:データのみ
         */
        setSpreadDataBean(dataBean: lib.com.fujitsu.jcf.gui.JCFItemData, attribute: boolean) {
        }

        /**
         * 列名を取得します。<p>
         * 
         * @param CJPosition セルポジション
         * @param {lib.com.fujitsu.caa.CJPosition} pos
         * @return {string}
         */
        public jcfGetColumnName(pos: lib.com.fujitsu.caa.CJPosition): string {
            return null;
        }

        getColumnNameExt(col: number): string {
            return null;
        }

        constructor() {
            super();
            this.__cdEnableEventDispatch = false;
            if (this.column_names === undefined) { this.column_names = null; }
            if (this.doubleColor === undefined) { this.doubleColor = false; }
            if (this.unchangeCheckedRecord === undefined) { this.unchangeCheckedRecord = false; }
            this.spread = this;
            this.stools = new lib.com.fujitsu.sms.sol.sys.cjf.tools.SMSSpreadTools(this.spread);
            this.focusFlg = false;
            this.isChecked = false;
            this.pressedPoint = null;
            this.choice2Space = false;
            this.DATE_FORMAT_PATTERN_YYYYMMDDHMMSS = "yyyy/MM/dd H:mm:ss";
            this.DATE_FORMAT_PATTERN_YYYYMMDDHMM = "yyyy/MM/dd H:mm";
            this.DATE_FORMAT_PATTERN_YYYYMMDD = "yyyy/MM/dd";
            this.DATE_FORMAT_PATTERN_YYYYMM = "yyyy/MM";
            this.DATE_FORMAT_PATTERN_MMDDHMMSS = "MM/dd H:mm:ss";
            this.DATE_FORMAT_PATTERN_MMDDHMM = "MM/dd H:mm";
            this.DATE_FORMAT_PATTERN_HMMSS = "H:mm:ss";
            this.DATE_FORMAT_PATTERN_HMM = "H:mm";
            this.DATE_FORMAT_PATTERN_MMDD = "MM/dd";
            this.DATE_FORMAT_PATTERN_MMSS = "mm:ss";
            this.DATE_FORMAT_PATTERN_YYYYMMDDHMMSS_J = "yyyy\'\u5e74\'MM\'\u6708\'dd\'\u65e5\'H\'\u6642\'mm\'\u5206\'ss\'\u79d2\'";
            this.DATE_FORMAT_PATTERN_YYYYMMDDHMM_J = "yyyy\'\u5e74\'MM\'\u6708\'dd\'\u65e5\'H\'\u6642\'mm\'\u5206\'";
            this.DATE_FORMAT_PATTERN_YYYYMMDD_J = "yyyy\'\u5e74\'MM\'\u6708\'dd\'\u65e5\'";
            this.DATE_FORMAT_PATTERN_YYYYMM_J = "yyyy\'\u5e74\'MM\'\u6708\'";
            this.DATE_FORMAT_PATTERN_MMDDHMMSS_J = "MM\'\u6708\'dd\'\u65e5\'H\'\u6642\'mm\'\u5206\'ss\'\u79d2\'";
            this.DATE_FORMAT_PATTERN_HMMSS_J = "H\'\u6642\'mm\'\u5206\'ss\'\u79d2\'";
            this.DATE_FORMAT_PATTERN_HMM_J = "H\'\u6642\'mm\'\u5206\'";
            this.DATE_FORMAT_PATTERN_MMDD_J = "MM\'\u6708\'dd\'\u65e5\'";
            this.DATE_FORMAT_PATTERN_MMSS_J = "mm\'\u5206\'ss\'\u79d2\'";
            this.DATE_FORMAT_SYMBOL_DEFAULT = "/";
            this.DATE_FORMAT_SYMBOL_NEN = "\u5e74";
            this.__cdIsdoubleColorPropertyConstrained = false;
            this.__cdIsdoubleColorPropertyBounded = false;
            this.__cdIsunchangeCheckedRecordPropertyConstrained = true;
            this.__cdIsunchangeCheckedRecordPropertyBounded = true;
        }
    }
    SMSJCFSpread["__class"] = "lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpread";


    export namespace SMSJCFSpread {

        /**
         * キーListenerの動作を設定します。<BR>
         * @extends com.java.KeyAdapter
         * @class
         */
        export class CJFKeyAdapter extends com.java.KeyAdapter {
            public __parent: any;
            public keyPressed(e: com.java.KeyEvent) {
            }

            public keyTyped(e: com.java.KeyEvent) {
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
            }
        }
        CJFKeyAdapter["__class"] = "lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpread.CJFKeyAdapter";


        /**
         * マウスListenerの動作を設定します。<BR>
         * @class
         */
        export class SpreadMouseListener implements com.java.MouseListener {
            public __parent: any;
            public mouseClicked(e: com.java.MouseEvent) {
                this.__parent.initRowColor(lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpread.color_$LI$());
            }

            public mousePressed(e: com.java.MouseEvent) {
            }

            public mouseReleased(e: com.java.MouseEvent) {
            }

            public mouseEntered(e: com.java.MouseEvent) {
            }

            public mouseExited(e: com.java.MouseEvent) {
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        SpreadMouseListener["__class"] = "lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpread.SpreadMouseListener";
        SpreadMouseListener["__interfaces"] = ["com.java.MouseListener"];



        /**
         * アイテムイベントListenerの動作を設定します。<BR>
         * @class
         */
        export class SMSItemListener implements lib.com.fujitsu.caa.CJCellItemListener {
            public __parent: any;
            /**
             * @see lib.com.fujitsu.caa.CJCellItemListener#itemStateChanged(CJCellItemEvent)
             * @param {lib.com.fujitsu.caa.CJCellItemEvent} e
             */
            public itemStateChanged(e: lib.com.fujitsu.caa.CJCellItemEvent) {
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        SMSItemListener["__class"] = "lib.com.fujitsu.sms.sol.sys.cjf.SMSJCFSpread.SMSItemListener";
        SMSItemListener["__interfaces"] = ["lib.com.fujitsu.caa.CJCellItemListener"];


    }

}

