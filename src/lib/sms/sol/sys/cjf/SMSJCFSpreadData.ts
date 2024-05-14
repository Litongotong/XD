import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData'
import { ref, type Ref } from 'vue'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { HashMap } from '@/lib/native/util/HashMap'
import { Color } from '@/components/jcf/entry'
import { bindThis } from '@/utils/class/bind'
import { isNil } from '@/utils/useful'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { Row, type FlexGrid } from '@grapecity/wijmo.grid'

export class SMSJCFSpreadData extends JCFSpreadData {

  // Q: what is editable mean in spread data?
  get editableFlg(): boolean {
    if (!this.flexGrid) return false

    return this.flexGrid.columns.filter(column => {
      column.isReadOnly === false
    }).length > 0
  }

  /** フォーカス設定用ポジション*/
  intFocusPosition = []

  /** フォーカス設定用レコード位置*/
  focusRow = -1

  /** フォーカス設定用列名*/
  focusColumnName = ''

  /** ゼロ詰め用指定列(最大桁用)*/
  zeroIntColumn = new ArrayList()

  /** ゼロ詰め用指定列（小数用）*/
  zeroDecimalColumn = new ArrayList()

  /** ゼロ詰め指定長*/
  //private int zeroLength = -1;
  zeroLength = new ArrayList()

  /** 編集状態指定列名*/
  get editTargetColumns() {
    if (!this.flexGrid) 
      return new HashMap()

    const editColumns = new HashMap()
    this.flexGrid.columns.forEach(column => {
      editColumns.put(column.binding, !column.isReadOnly)
    })

    return editColumns
  }

  set editTargetColumns(newTargetColumns: HashMap<string, boolean>) {
    if (!this.flexGrid) return

    newTargetColumns.forEach((key, value) => {
      const column = this.flexGrid?.columns.find(column => column.binding === key)
      if (column) {
        column.isReadOnly = !value
      }
    })
  }

  /** チェック状態レコード背景色*/
  checkedBgColor = new Color(100, 149, 237)

  constructor(itemId: string, flexGrid: Ref<FlexGrid | undefined>) {
    super(itemId, flexGrid)

    bindThis(this)
  }

  // TODO(spread): implement when it is used
  setDataAndAttributes(itemData: JCFItemData) {
    // if (isNil(itemData)) {
    //   return
    // }

    // if (!(itemData instanceof SMSJCFSpreadData)) {
    //   return
    // }
    // this.setData(itemData as any)

    // super.setDataAndAttributes(itemData as any)

    // let data: SMSJCFSpreadData = itemData as SMSJCFSpreadData

    // //this.setSpreadToolTip(data.getSpreadToolTip());
    // this.setEditableFlg(data.isEditableFlg())

    // //ゼロ詰め用指定列(最大桁用)
    // this.zeroIntColumn = data.getZeroIntColumn()
    // //ゼロ詰め用指定列（小数用）
    // this.zeroDecimalColumn = data.getZeroDecimalColumn()
    // //ゼロ詰め指定長
    // this.zeroLength = data.getZeroLength()
    // //編集状態指定列名
    // this.editTargetColumns = data.getEditTargetColumns()
  }

  /**
   * GUI部品の変更有無を設定します。<BR>
   * @param b GUI部品変更有無（true：変更あり）
   */
  setModified(b: boolean) {
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
    return this.editableFlg
  }

  /**
   * Sets the editableFlg.<BR>
   * @param editableFlg The editableFlg to set
   */
  setEditableFlg(editableFlg: boolean) {
    if (!this.flexGrid) return

    this.flexGrid.columns.forEach(column => {
      column.isReadOnly = !editableFlg
    })
  }

  /**
   * 項目部品とデータＢｅａｎの関連を付けます。<BR>
   */
  createDataBean(): JCFItemData {
    return new SMSJCFSpreadData(super.getItemID(), this.flexGridRef) as any as JCFItemData
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
    this.zeroIntColumn.add(column)
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
    super.setZeroPaddingDecimal(column, decimal)
  }

  /**
   * ゼロ詰め指定長を返します
   * @return int
   */
  // getZeroLength(): ArrayList {
  //   return this.zeroLength as ArrayList
  // }

  /**
   * 指定したレコード位置、列名にフォーカスをセットします。
   * @param row レコード位置
   * @param columnName 列名
   */
  setPosition(row: number, columnName: string) {
    super.setPosition(row, columnName)
  }

  /**
   * フォーカス設定用列名をセットします
   * @param String
   */
  setFocusColumnName(columnName: string) {
    this.focusColumnName = columnName
  }

  /**
   * フォーカス設定用レコード位置をセットします
   * @param int
   */
  setFocusRow(row: number) {
    this.focusRow = row
  }

  /**
   * フォーカス設定用列名を返します
   * @return String
   */
  getFocusColumnName(): string {
    return this.focusColumnName
  }

  /**
   * フォーカス設定用レコード位置を返します
   * @return int
   */
  getFocusRow(): number {
    return this.focusRow
  }

  /**
   * ゼロ詰め用指定列（小数用）を返します
   * @return String
   */
  getZeroDecimalColumn(): ArrayList {
    return this.zeroDecimalColumn as ArrayList
  }

  /**
   * ゼロ詰め用指定列(最大桁用)を返します
   * @return String
   */
  getZeroIntColumn(): ArrayList {
    return this.zeroIntColumn as ArrayList
  }

  /**
   * 指定した列名の編集状態を設定します
   * @return String
   */
  setColumnInformationEditable(column: string, editable: boolean) {
    super.setColumnInformationEditable(column, editable)
  }

  /**
   * 編集状態指定列名を返します
   * @return HashMap
   */
  getEditTargetColumns(): HashMap {
    return this.editTargetColumns as HashMap
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
