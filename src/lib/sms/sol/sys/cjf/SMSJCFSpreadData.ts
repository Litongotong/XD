import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData'
import type { SMSSpreadTools } from './tools/SMSSpreadTools'
import { ref, type Ref } from 'vue'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { HashMap } from '@/lib/native/util/HashMap'
import { Color } from '@/components/jcf/entry'
import { bindThis } from '@/utils/class/bind'
import { isNil } from '@/utils/useful'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { Integer } from '@/lib/native/lang/Integer'
import { NativeBoolean } from '@/lib/native/lang/Boolean'
import { createArrayByInstance } from '@/utils/array/1D'

export class SMSJCFSpreadData extends JCFSpreadData {
  stools: Ref<SMSSpreadTools | undefined> = ref()
  editableFlg: Ref<boolean | undefined> = ref()

  /** フォーカス設定用ポジション*/
  intFocusPosition = ref<number[]>([])

  /** フォーカス設定用レコード位置*/
  focusRow = ref(-1)

  /** フォーカス設定用列名*/
  focusColumnName = ref('')

  /** レコード件数0チェックフラグ*/
  check0 = ref(false)

  /** ゼロ詰め用指定列(最大桁用)*/
  zeroIntColumn = ref(new ArrayList())

  /** ゼロ詰め用指定列（小数用）*/
  zeroDecimalColumn = ref(new ArrayList())

  /** ゼロ詰め指定長*/
  //private int zeroLength = -1;
  zeroLength = ref(new ArrayList())

  /** 編集状態指定列名*/
  editTargetColumns = ref(new HashMap())

  /** チェック状態レコード背景色*/
  checkedBgColor = ref(new Color(100, 149, 237))

  constructor(itemId: string) {
    super(itemId)

    bindThis(this)
  }

  /**
   * Returns the spreadTools.<BR>
   * @return SpreadTools
   */
  getSpreadTools(): SMSSpreadTools {
    return this.stools.value!
  }
  /**
   * Sets the spreadToolTip.<BR>
   * @param spreadToolTip The spreadToolTip to set
   */
  setSpreadTools(spreadTool: SMSSpreadTools) {
    this.stools.value = spreadTool
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (isNil(itemData)) {
      return
    }

    if (!(itemData instanceof SMSJCFSpreadData)) {
      return
    }
    this.setData(itemData as any)

    super.setDataAndAttributes(itemData as any)

    let data: SMSJCFSpreadData = itemData as SMSJCFSpreadData

    //this.setSpreadToolTip(data.getSpreadToolTip());
    this.setEditableFlg(data.isEditableFlg())
    this.setSpreadTools(data.getSpreadTools())

    //ゼロ詰め用指定列(最大桁用)
    this.zeroIntColumn.value = data.getZeroIntColumn()
    //ゼロ詰め用指定列（小数用）
    this.zeroDecimalColumn.value = data.getZeroDecimalColumn()
    //ゼロ詰め指定長
    this.zeroLength.value = data.getZeroLength()
    //編集状態指定列名
    this.editTargetColumns.value = data.getEditTargetColumns()
  }

  /**
   * GUI部品の変更有無を設定します。<BR>
   * @param b GUI部品変更有無（true：変更あり）
   */
  protected setModified(b: boolean) {
    super.setModified(b)
  }

  addRow() {
    super.addRow()
  }

  /**
   * Returns the editableFlg.<BR>
   * @return boolean
   */
  isEditableFlg(): boolean {
    return this.editableFlg.value!
  }

  /**
   * Sets the editableFlg.<BR>
   * @param editableFlg The editableFlg to set
   */
  setEditableFlg(editableFlg: boolean) {
    this.editableFlg.value = editableFlg
  }

  /**
   * ※推奨されません。<BR>
   */
  /*setViewport(JCFSpreadCellPosition position)
		throws JCFDataIllegalArgumentException {
			
		//super.setViewport(arg0);
		// nullチェック
		if (position == null) {
			throw new JCFDataIllegalArgumentException(ERROR_TYPE);
		}
	
		// 行位置の範囲チェック
		//if (position.row < 0 || rowCount <= position.row ) {
		if (position.row < 0 ) {
			
			throw new JCFDataIllegalArgumentException(ERROR_RANGE_ROW);
		}
	
		
		// 列位置の範囲チェック
		if (position.column < 0 || columnCount <= position.column) {
			throw new JCFDataIllegalArgumentException(ERROR_RANGE_COLUMN);
		}
	
		// ▼▼▼ UT020 V01L20 2004.05.27 性能改善　追加 ▼▼▼
		super.callChangedListener();
		
		// ▲▲▲ UT020 V01L20 2004.05.27 性能改善　追加 ▲▲▲
	
		viewport = position;
	}
	*/

  /**
   * 項目部品とデータＢｅａｎの関連を付けます。<BR>
   */
  createDataBean(): JCFItemData {
    return new SMSJCFSpreadData(super.getItemID()) as any as JCFItemData
  }

  /**
   * 通信データを返します。<BR>
   * このクラスでは通信データは文字列データです。<BR>
   * String型にキャストしてください。<BR>
   *
   * @return 通信データ
   */
  getCommunicationData(): any {
    return this.getValue()
  }

  /**
   * 通信データを設定します。<BR>
   * このクラスでは通信データは文字列データです。<BR>
   * String型にキャストしてください。<BR>
   *
   * @param newValue 通信データ
   */
  setCommunicationData(newValue: any) {
    this.setValue(newValue as string)
  }

  /**
   * 別の項目データBeanからデータをコピーします。<BR>
   *
   * @param itemlData 項目データBean
   */
  setData(itemData: JCFItemData) {
    if (isNil(itemData)) {
      return
    }

    if (!(itemData instanceof SMSJCFSpreadData)) {
      return
    }

    let data: SMSJCFSpreadData = itemData as SMSJCFSpreadData
    this.setValue(data.getValue())
  }

  /**
   * 指定列の整数部をmaxLengthに達しない分ゼロ詰め設定します。
   * 編集型が数値項目以外の場合は、何もしません。<br>
   * @param column 列位置
   */
  setZeroPaddingInteger(column: string) {
    this.zeroIntColumn.value.add(column)
  }

  /**
   * 指定列の少数部を表示したい桁数に達しない分ゼロ詰め設定します。
   * <p>
   * 編集型が数値項目以外の場合は、何もしません。<br>
   * </p>
   * @param column 列位置
   * @param decimal 小数点以下表示したい桁数(最大3桁)
   */
  setZeroPaddingDecimal(column: string, decimal: number) {
    this.zeroDecimalColumn.value.add(column)
    let Idecimal: Integer = new Integer(decimal)
    this.zeroLength.value.add(Idecimal)
  }

  /**
   * ゼロ詰め指定長を返します
   * @return int
   */
  getZeroLength(): ArrayList {
    return this.zeroLength.value as ArrayList
  }

  /**
   * 指定したレコード位置、列名にフォーカスをセットします。
   * @param row レコード位置
   * @param columnName 列名
   */
  setPosition(row: number, columnName: string) {
    this.focusRow.value = row
    this.focusColumnName.value = columnName
  }

  /**
   * フォーカス設定用列名をセットします
   * @param String
   */
  setFocusColumnName(columnName: string) {
    this.focusColumnName.value = columnName
  }

  /**
   * フォーカス設定用レコード位置をセットします
   * @param int
   */
  setFocusRow(row: number) {
    this.focusRow.value = row
  }

  /**
   * レコード件数0チェックフラグをセットします
   * @param boolean
   */
  setCheck0(check: boolean) {
    this.check0.value = check
  }

  /**
   * フォーカス設定用列名を返します
   * @return String
   */
  getFocusColumnName(): string {
    return this.focusColumnName.value
  }

  /**
   * フォーカス設定用レコード位置を返します
   * @return int
   */
  getFocusRow(): number {
    return this.focusRow.value
  }

  /**
   * レコード件数0チェックフラグを返します
   * @return boolean
   */
  getCheck0(): boolean {
    return this.check0.value
  }

  /**
   * ゼロ詰め用指定列（小数用）を返します
   * @return String
   */
  getZeroDecimalColumn(): ArrayList {
    return this.zeroDecimalColumn.value as ArrayList
  }

  /**
   * ゼロ詰め用指定列(最大桁用)を返します
   * @return String
   */
  getZeroIntColumn(): ArrayList {
    return this.zeroIntColumn.value as ArrayList
  }

  /**
   * 指定した列名の編集状態を設定します
   * @return String
   */
  setColumnInformationEditable(column: string, editable: boolean) {
    this.editTargetColumns.value.put(column, NativeBoolean.valueOf(editable))
  }

  /**
   * 編集状態指定列名を返します
   * @return HashMap
   */
  getEditTargetColumns(): HashMap {
    return this.editTargetColumns.value as HashMap
  }

  /**
   * セル情報を取得します。<p>
   * 指定された行位置、列位置のセル情報を取得します。<br>
   *
   * @param row 行位置
   * @param column 列位置
   * @return セル情報
   */
  protected getCell(row: number, column: number): JCFSpreadCellData {
    return super.getCell(row, column)
  }

  /**
   * setRowCount をオーバーライドします。
   *
   * スプレッドの行数を設定します。
   * 「0」が設定される場合は、 ヘッダのソート記号「▲▼」を初期化します。
   *
   * @param row 行数
   */
  setRowCount(row: number) {
    super.setRowCount(row)
    //「0」が設定される場合
    if (row === 0) {
      //ヘッダのソート記号「▲▼」を初期化
      super.setLastSorted(null)
      //スプレッド内のフォーカスを左上端に設定するために、以下を設定
      this.focusRow.value = 0
      this.focusColumnName.value = 'column'
      this.check0.value = true
    }
  }

  /**
   * removeRow をオーバーライドします。
   *
   * スプレッドの指定行を削除します。
   * スプレッドの行数が「0」になる場合は、 ヘッダのソート記号「▲▼」を初期化します。
   *
   * @param row 行数
   */
  removeRow(row: number) {
    super.removeRow(row)
    //上記の処理によりスプレッドの行数が「0」になった場合
    if (super.getRowCount() == 0) {
      //ヘッダのソート記号「▲▼」を初期化
      super.setLastSorted(null)
      //スプレッド内のフォーカスを左上端に設定するために、以下を設定
      this.focusRow.value = 0
      this.focusColumnName.value = 'column'
      this.check0.value = true
    }
  }

  /**
   * removeAllRow をオーバーライドします。
   *
   * スプレッドの行を全て削除し、
   * ヘッダのソート記号「▲▼」を初期化します。
   */
  removeAllRow() {
    super.removeAllRow()
    //ヘッダのソート記号「▲▼」を初期化
    super.setLastSorted(null)
    //スプレッド内のフォーカスを左上端に設定するために、以下を設定
    this.focusRow.value = 0
    this.focusColumnName.value = 'column'
    this.check0.value = true
  }

  /**
   * 行を生成します。
   * <p>
   * １行分のセル情報を生成します。<br>
   * 拡張したセルデータクラス(SampleSpreadCellData)を設定<br>
   * </p>
   * @return １行分の空のセル情報
   */
  protected createCells(): JCFSpreadCellData[] {
    let columns: number = this.getColumnCount() // 列数
    let cells: JCFSpreadCellData[] = createArrayByInstance(
      JCFSpreadCellData,
      columns,
    )
    for (let col = 0; col < columns; col++) {
      // セルの初期化
      // 列属性の背景色、前景色を設定
      let cell: JCFSpreadCellData = new SMSJCFSpreadCellData()
      let columnInfo: JCFSpreadColumnData = this.getColumnData(col)
      this.initializeCell(cell, columnInfo)
      cells[col] = cell
    }
    return cells
  }

  _getComponentName(): string {
    return EComponentName.SMSJCFSpread
  }

  _getName(): string {
    return 'SMSJCFSpreadData'
  }

  static _getName(): string {
    return 'SMSJCFSpreadData'
  }

  _getType() {
    return SMSJCFSpreadData as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJCFSpreadData'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJCFSpreadData'
  }
}
