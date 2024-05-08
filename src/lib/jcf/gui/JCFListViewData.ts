/******************************************************************************
 * jcf.gui.JCFListViewData
 *
 * プログラム名     : jcf.gui.JCFListViewData
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFListViewData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { JCFDataIllegalArgumentException } from './JCFDataIllegalArgumentException'
import { JCFListViewCellProperties } from './JCFListViewCellProperties'
import { JCFListViewRowProperties } from './JCFListViewRowProperties'
import { JCFListViewColumnProperties } from './JCFListViewColumnProperties'
import { LanguageNativeType } from '@/lib/native/config/enums'
import { Color } from '@/lib/native/awt/Color'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟡 要修正

interface Image {}

export class JCFListViewData extends JCFItemData {
  private cellInfo = ref<ArrayList<ArrayList<JCFListViewCellProperties>>>(
    new ArrayList(),
  )
  private columnInfo = ref<ArrayList<JCFListViewColumnProperties>>(
    new ArrayList(),
  )
  private rowInfo = ref<ArrayList<JCFListViewRowProperties>>(new ArrayList())
  private columnCount = ref<number>(0)
  private rowCount = ref<number>(0)
  private rowHeight = ref<number>(0)
  private headerHeight = ref<number>(0)
  private topIndex = ref<number>(-1)
  private cursorIndex = ref<number>(-1)
  private multipleMode = ref<boolean>(true)
  private sortColumn = ref<number>(-1)
  private sortOrder = ref<number>(1)
  private visibleHeader = ref<boolean>(true)
  private viewMode = ref<boolean>(false)
  private horizontalUnitIncrement = ref<number>(1)

  /**
   * JCFListViewData インスタンスを作成する。
   * @param itemID itemID
   */
  constructor(itemID: string) {
    super(itemID)
    this.initialValue()
  }

  protected initialValue(): void {
    this.cellInfo.value = new ArrayList()
    this.columnInfo.value = new ArrayList()
    this.rowInfo.value = new ArrayList()
    this.columnCount.value = 0
    this.rowCount.value = 0
    this.rowHeight.value = 0
    this.headerHeight.value = 0
    this.topIndex.value = -1
    this.cursorIndex.value = -1
    this.multipleMode.value = true
    this.sortColumn.value = -1
    this.sortOrder.value = 1
    this.visibleHeader.value = true
    this.viewMode.value = false
    this.horizontalUnitIncrement.value = 1
  }

  /**
   * jcf.gui.JCFListViewData::setCommunicationData(any newValue)
   * @param newValue CommunicationData for appends
   */
  setCommunicationData = (newValue: any): void => {
    if (newValue === null || newValue === undefined) {
      throw new JCFDataIllegalArgumentException(
        'パラメータにnullが設定されました',
      )
    }

    if (
      !Array.isArray(newValue) ||
      !Array.isArray(newValue[0]) ||
      typeof newValue[0][0] !== LanguageNativeType.STRING
    ) {
      throw new JCFDataIllegalArgumentException(
        '通信データが、Stringの二次元配列ではありません',
      )
    }

    const value = newValue as string[][]

    if (value.length !== this.rowCount.value) {
      throw new JCFDataIllegalArgumentException(
        'リストビューの行数と、通信データの行数が異なります',
      )
    }

    for (let row = 0; row < this.rowCount.value; row++) {
      if (value[row].length !== this.columnCount.value) {
        throw new JCFDataIllegalArgumentException(
          'リストビューの列数と、通信データの列数が異なります',
        )
      }
      const cellValue = value[row] as string[]
      for (let col = 0; col < this.columnCount.value; col++) {
        if (cellValue[col] === null || cellValue[col] === undefined) {
          cellValue[col] = ''
        }
      }
    }

    for (let row = 0; row < this.rowCount.value; row++) {
      for (let col = 0; col < this.columnCount.value; col++) {
        this.getCellInfo(row, col).setString(value[row][col])
      }
    }
  }

  /**
   * jcf.gui.JCFListViewData::getString(number row, number column)
   * @param row
   * @param column
   */
  getString = (row: number, column: number): string => {
    if (!this.checkRowIndex(row))
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    if (!this.checkColumnIndex(column))
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    else return this.getCellInfo(row, column).getString()
  }

  /**
   * jcf.gui.JCFListViewData::addRow()
   */
  addRow = (): void => {
    try {
      this.insertRow(this.rowCount.value)
    } catch (ignore) {
      console.error(ignore)
    }
  }

  private renewRowArrays = (newRowCount: number): void => {
    const oldRowCount = this.rowCount.value
    if (oldRowCount === newRowCount) {
      return
    }

    try {
      for (let i = 0; i < Math.abs(oldRowCount - newRowCount); i++) {
        if (oldRowCount < newRowCount) {
          this.addRow()
        } else {
          this._removeRow()
        }
      }
    } catch (ignore) {
      console.error(ignore)
    }
  }

  /**
   * jcf.gui.JCFListViewData::setColumnCount(number column)
   * @param column
   */
  setColumnCount = (column: number): void => {
    if (column < 0) {
      throw new JCFDataIllegalArgumentException('負の値が設定されました')
    }
    this.renewColumnArrays(column)
    if (this.sortColumn.value >= column) {
      this.sortColumn.value = -1
    }
  }

  private renewColumnArrays = (newColumnCount: number): void => {
    const oldColumnCount = this.columnCount.value
    if (oldColumnCount === newColumnCount) {
      return
    }

    if (oldColumnCount < newColumnCount) {
      for (let col = oldColumnCount; col < newColumnCount; col++) {
        this.columnInfo.value.add(new JCFListViewColumnProperties())
      }

      for (let row = 0; row < this.rowCount.value; row++) {
        const list = this.cellInfo.value.get(row)
        for (let col = oldColumnCount; col < newColumnCount; col++) {
          list.add(new JCFListViewCellProperties())
        }
      }
      this.columnCount.value = newColumnCount
    } else {
      this.columnCount.value = newColumnCount
      for (let col = oldColumnCount - 1; col >= newColumnCount; col--) {
        this.columnInfo.value.splice(col, 1) //ArrayListのremove
      }
      for (let row = 0; row < this.rowCount.value; row++) {
        const list = this.cellInfo.value.get(row)
        for (let col = oldColumnCount - 1; col >= newColumnCount; col--) {
          list.remove(col)
        }
      }
    }
  }

  /**
   * jcf.gui.JCFListViewData::removeRow(number row)
   * @param row
   */
  removeRow = (row: number): void => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    }

    this.rowCount.value--
    this.rowInfo.value.splice(row, 1) //ArrayListのremoveに置き換え
    this.cellInfo.value.splice(row, 1) ////ArrayListのremoveに置き換え

    if (this.cursorIndex.value >= this.rowCount.value) {
      this.cursorIndex.value--
    }
    if (this.topIndex.value >= this.rowCount.value) {
      this.topIndex.value--
    }
  }

  private _removeRow = (): void => {
    this.removeRow(this.rowCount.value - 1)
  }

  /**
   * jcf.gui.JCFListViewData::insertRow(number row)
   * @param row
   */
  insertRow = (row: number): void => {
    if (row < 0 || row > this.rowCount.value) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    }

    this.rowInfo.value.add(row, new JCFListViewRowProperties())
    const list = new ArrayList<JCFListViewCellProperties>()
    this.cellInfo.value.add(row, list)

    for (let col = 0; col < this.columnCount.value; col++) {
      const cellProp = new JCFListViewCellProperties()
      const columnProp = this.columnInfo.value.get(col)
      cellProp.setAlignment(columnProp.getColumnAlignment())
      cellProp.setBackground(columnProp.getColumnBackground())
      cellProp.setForeground(columnProp.getColumnForeground())
      list.add(cellProp)
    }

    if (this.rowCount.value === 0) {
      this.cursorIndex.value = 0
      this.topIndex.value = 0
    }
    this.rowCount.value++
  }

  /**
   * jcf.gui.JCFListViewData::setRowCount(number row)
   * @param row
   */
  setRowCount = (row: number): void => {
    if (row < 0) {
      throw new JCFDataIllegalArgumentException('負の値が設定されました')
    }

    this.renewRowArrays(row)
    if (row === 0) {
      this.cursorIndex.value = -1
      this.topIndex.value = -1
    } else {
      if (this.cursorIndex.value < 0) this.cursorIndex.value = 0
      else if (this.cursorIndex.value >= row) this.cursorIndex.value = row - 1

      if (this.topIndex.value < 0) this.topIndex.value = 0
      else if (this.topIndex.value >= row) this.topIndex.value = row - 1
    }
  }

  /**
   * jcf.gui.JCFListViewData::getColumnCount()
   */
  getColumnCount = (): number => {
    return this.columnCount.value
  }

  /**
   * jcf.gui.JCFListViewData::setSelected(number row, boolean select)
   * @param row
   * @param select
   */
  setSelected = (row: number, select: boolean): void => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    }
    if (!this.multipleMode.value) {
      if (!select) {
        return
      }
      for (let i = 0; i < this.rowCount.value; i++) {
        this.getRowInfo(i).setSelected(false)
      }
      this.cursorIndex.value = row
    }
    this.getRowInfo(row).setSelected(select)
  }

  /**
   * jcf.gui.JCFListViewData::isSelected(number row)
   * @param row
   */
  isSelected = (row: number): boolean => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    } else {
      return this.getRowInfo(row).isSelected()
    }
  }

  /**
   * jcf.gui.JCFListViewData::getSelectedIndexes()
   */
  getSelectedIndexes = (): number[] => {
    let selectedCount = 0
    const selected = new Array(this.rowCount.value)

    for (let row = 0; row < this.rowCount.value; row++) {
      const rowProp = this.rowInfo.value.get(row)
      if (rowProp.isSelected()) {
        selectedCount++
        selected[row] = true
      } else {
        selected[row] = false
      }
    }

    const selectedIndexes = new Array(selectedCount)
    let i = 0
    for (let row = 0; row < this.rowCount.value; row++) {
      if (selected[row]) {
        selectedIndexes[i] = row
        i++
      }
    }

    return selectedIndexes
  }

  /**
   * jcf.gui.JCFListViewData::setBackground(number | Color rowOrColor, number column, Color color)
   * @param rowOrColor
   * @param column
   * @param color
   */
  setBackground(
    rowOrColor: number | Color,
    column?: number,
    color?: Color,
  ): void {
    if (
      typeof rowOrColor === LanguageNativeType.NUMBER &&
      typeof column === LanguageNativeType.NUMBER &&
      color instanceof Color
    ) {
      const row = rowOrColor
      if (!this.checkRowIndex(row as number)) {
        throw new JCFDataIllegalArgumentException('行インデックスが無効です')
      }
      if (!this.checkColumnIndex(column as number)) {
        throw new JCFDataIllegalArgumentException('列インデックスが無効です')
      }
      this.getCellInfo(row as number, column as number).setBackground(color)
    } else {
      super.setBackground(rowOrColor as Color)
    }
  }

  /**
   * jcf.gui.JCFListViewData::setForeground(number | Color rowOrColor, number column, Color color)
   * @param rowOrColor
   * @param column
   * @param color
   */
  setForeground(
    rowOrColor: number | Color,
    column?: number,
    color?: Color,
  ): void {
    if (
      typeof rowOrColor === LanguageNativeType.NUMBER &&
      typeof column === LanguageNativeType.NUMBER &&
      color instanceof Color
    ) {
      const row = rowOrColor
      if (!this.checkRowIndex(row as number)) {
        throw new JCFDataIllegalArgumentException('行インデックスが無効です')
      }
      if (!this.checkColumnIndex(column as number)) {
        throw new JCFDataIllegalArgumentException('列インデックスが無効です')
      }
      this.getCellInfo(row as number, column as number).setForeground(color)
    } else {
      super.setForeground(rowOrColor as Color)
    }
  }

  /**
   * jcf.gui.JCFListViewData::setAlignment(number row, number column, number alignment)
   * @param row
   * @param column
   * @param alignment
   */
  setAlignment = (row: number, column: number, alignment: number): void => {
    if (!this.checkRowIndex(row as number)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    }
    if (!this.checkColumnIndex(column as number)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    }
    if (![1, 2, 4].includes(alignment)) {
      throw new JCFDataIllegalArgumentException(
        '既定値以外の値が設定されました',
      )
    } else {
      this.getCellInfo(row, column).setAlignment(alignment)
    }
  }

  /**
   * jcf.gui.JCFListViewData::getRowCount()
   */
  getRowCount = (): number => {
    return this.rowCount.value
  }

  /**
   * jcf.gui.JCFListViewData::getValue()
   */
  getValue = (): string | null => {
    return null
  }

  /**
   * jcf.gui.JCFListViewData::setValue(string | null s)
   * @param s
   */
  setValue = (s: string | null): void => {}

  /**
   * jcf.gui.JCFListViewData::getTopIndex()
   */
  getTopIndex = (): number => {
    return this.topIndex.value
  }

  /**
   * jcf.gui.JCFListViewData::setTopIndex(number row)
   * @param row
   */
  setTopIndex = (row: number): void => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    } else {
      this.topIndex.value = row
      return
    }
  }

  /**
   * jcf.gui.JCFListViewData::getCursorIndex()
   */
  getCursorIndex = (): number => {
    return this.cursorIndex.value
  }

  /**
   * jcf.gui.JCFListViewData::setCursorIndex(number row)
   * @param row
   */
  setCursorIndex = (row: number): void => {
    if (!this.checkRowIndex(row))
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    this.cursorIndex.value = row
    if (!this.multipleMode.value) {
      for (let i = 0; i < this.rowCount.value; i++)
        this.getRowInfo(i).setSelected(false)

      this.getRowInfo(row).setSelected(true)
    }
  }

  /**
   * jcf.gui.JCFListViewData::getSortColumn()
   */
  getSortColumn = (): number => {
    return this.sortColumn.value
  }

  /**
   * jcf.gui.JCFListViewData::setSortColumn(number column)
   * @param column
   */
  setSortColumn = (column: number): void => {
    if (column < -1 || column >= this.columnCount.value) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    } else {
      this.sortColumn.value = column
      return
    }
  }

  /**
   * jcf.gui.JCFListViewData::getSortOrder()
   */
  getSortOrder = (): number => {
    return this.sortOrder.value
  }

  /**
   * jcf.gui.JCFListViewData::setSortOrder(number order)
   * @param order
   */
  setSortOrder = (order: number): void => {
    if (order != 1 && order != 2) {
      throw new JCFDataIllegalArgumentException(
        '既定値以外の値が設定されました',
      )
    } else {
      this.sortOrder.value = order
      return
    }
  }

  /**
   * jcf.gui.JCFListViewData::setSelectedIndexes(number[] indexes)
   * @param indexes
   */
  setSelectedIndexes = (indexes: number[]): void => {
    if (indexes == null) {
      throw new JCFDataIllegalArgumentException(
        'パラメータにnullが設定されました',
      )
    }
    for (let row = 0; row < this.rowCount.value; row++) {
      this.getRowInfo(row).setSelected(false)
    }

    if (this.multipleMode.value) {
      indexes.forEach((index) => {
        if (index < 0 || index >= this.rowCount.value) {
          throw new JCFDataIllegalArgumentException(
            'インデックスの範囲が無効です',
          )
        }
        const rowProp = this.rowInfo.value.get(index)
        rowProp.setSelected(true)
      })
    } else {
      indexes.forEach((index) => {
        if (index < 0 || index >= this.rowCount.value) {
          throw new JCFDataIllegalArgumentException(
            'インデックスの範囲が無効です',
          )
        }
      })

      if (indexes.length > 0) {
        this.getRowInfo(indexes[indexes.length - 1]).setSelected(true)
        this.cursorIndex.value = indexes[indexes.length - 1]
      }
    }
  }

  /**
   * jcf.gui.JCFListViewData::getHorizontalUnitIncrement()
   */
  getHorizontalUnitIncrement = (): number => {
    return this.horizontalUnitIncrement.value
  }

  /**
   * jcf.gui.JCFListViewData::setHorizontalUnitIncrement(number pixel)
   * @param pixel
   */
  setHorizontalUnitIncrement = (pixel: number): void => {
    if (pixel < 1) {
      throw new JCFDataIllegalArgumentException('0以下の値が設定されました')
    } else {
      this.horizontalUnitIncrement.value = pixel
      return
    }
  }

  /**
   * jcf.gui.JCFListViewData::getHeaderString(number column)
   * @param column
   */
  getHeaderString = (column: number): string => {
    if (!this.checkColumnIndex(column)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    } else
      return (
        this.getColumnInfo(column).getHeaderCellProperties()?.getString() ?? ''
      )
  }

  /**
   * jcf.gui.JCFListViewData::setHeaderString(number column, string string)
   * @param column
   * @param string
   */
  setHeaderString = (column: number, string: string): void => {
    if (!this.checkColumnIndex(column)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    }
    if (string == null) {
      string = ''
    }
    this.getColumnInfo(column).getHeaderCellProperties()?.setString(string)
  }

  /**
   * jcf.gui.JCFListViewData::setString(number row, number column, string string)
   * @param row
   * @param column
   * @param string
   */
  setString = (row: number, column: number, string: string): void => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    }
    if (!this.checkColumnIndex(column)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    }
    if (string == null) {
      string = ''
    }
    this.getCellInfo(row, column).setString(string)
  }

  /**
   * jcf.gui.JCFListViewData::setRowID(number row, string string)
   * @param row
   * @param string
   */
  setRowID = (row: number, string: string): void => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    } else {
      this.getRowInfo(row).setRowID(string)
      return
    }
  }

  /**
   * jcf.gui.JCFListViewData::getRowID(number row)
   * @param row
   */
  getRowID = (row: number): string => {
    if (!this.checkRowIndex(row))
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    else {
      return this.getRowInfo(row).getRowID() ?? ''
    }
  }

  /**
   * jcf.gui.JCFListViewData::getImage(number row, number column)
   * @param row
   * @param column
   */
  getImage = (row: number, column: number): Image | null => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    }
    if (!this.checkColumnIndex(column)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    }
    return this.getCellInfo(row, column).getImage()
  }

  /**
   * jcf.gui.JCFListViewData::setImage(number row, number column, Image | null image)
   * @param row
   * @param column
   * @param Image
   */
  setImage = (row: number, column: number, image: Image | null): void => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    }
    if (!this.checkColumnIndex(column)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    }
    this.getCellInfo(row, column).setImage(image)
  }

  /**
   * jcf.gui.JCFListViewData::getRowImage(number row)
   * @param row
   */
  getRowImage = (row: number): Image | null => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    } else {
      return this.getRowInfo(row).getImage()
    }
  }

  /**
   * jcf.gui.JCFListViewData::setRowImage(number row, Image | null image)
   * @param row
   * @param image
   */
  setRowImage = (row: number, image: Image | null): void => {
    if (!this.checkRowIndex(row)) {
      throw new JCFDataIllegalArgumentException('行インデックスが無効です')
    } else {
      this.getRowInfo(row).setImage(image)
      return
    }
  }

  /**
   * jcf.gui.JCFListViewData::setHeaderAlignment(number column, number alignment)
   * @param column
   * @param alignment
   */
  setHeaderAlignment = (column: number, alignment: number): void => {
    if (!this.checkColumnIndex(column)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    }
    if (![1, 2, 4].includes(alignment)) {
      throw new JCFDataIllegalArgumentException(
        '既定値以外の値が設定されました',
      )
    } else {
      this.getColumnInfo(column)
        .getHeaderCellProperties()
        ?.setAlignment(alignment)
    }
  }

  /**
   * jcf.gui.JCFListViewData::setColumnAlignment(number column, number alignment)
   * @param column
   * @param alignment
   */
  setColumnAlignment = (column: number, alignment: number): void => {
    if (!this.checkColumnIndex(column)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    }
    if (![1, 2, 4].includes(alignment)) {
      throw new JCFDataIllegalArgumentException(
        '既定値以外の値が設定されました',
      )
    } else {
      this.getColumnInfo(column).setColumnAlignment(alignment)
    }
  }

  /**
   * jcf.gui.JCFListViewData::setColumnWidth(number column, number width)
   * @param column
   * @param width
   */
  setColumnWidth = (column: number, width: number): void => {
    if (!this.checkColumnIndex(column)) {
      throw new JCFDataIllegalArgumentException('列インデックスが無効です')
    }
    if (width <= 0) {
      throw new JCFDataIllegalArgumentException('0以下の値が設定されました')
    } else {
      this.getColumnInfo(column).setWidth(width)
    }
  }

  /**
   * jcf.gui.JCFListViewData::getCommunicationData()
   */
  getCommunicationData = (): Object => {
    const value = Array(this.rowCount.value)
    for (let i = 0; i < this.rowCount.value; i++) {
      value[i] = Array(this.columnCount.value)
    }

    try {
      for (let row = 0; row < this.rowCount.value; row++) {
        for (let col = 0; col < this.columnCount.value; col++) {
          value[row][col] = this.getCellInfo(row, col).getString() ?? ''
        }
      }
    } catch (ignore) {
      console.error(ignore)
    }
    return value
  }

  /**
   * jcf.gui.JCFListViewData::setData(JCFItemData | null itemData)
   * @param itemData
   */
  setData = (itemData: JCFItemData | null): void => {
    if (itemData === null || !(itemData instanceof JCFListViewData)) {
      return
    } else {
      this.setDataOnly(itemData)
    }
  }

  private setDataOnly = (itemData: JCFItemData): void => {
    try {
      const listViewData = itemData as JCFListViewData
      const rowCount = listViewData.getRowCount()
      const colCount = listViewData.getColumnCount()
      this.setRowCount(rowCount)
      this.setColumnCount(colCount)

      if (rowCount !== 0) {
        this.setTopIndex(listViewData.getTopIndex())
        this.setCursorIndex(listViewData.getCursorIndex())
      }

      if (colCount !== 0) {
        this.setSortColumn(listViewData.getSortColumn())
        this.setSortOrder(listViewData.getSortOrder())
      }

      this.setSelectedIndexes(listViewData.getSelectedIndexes())
      this.setHorizontalUnitIncrement(listViewData.getHorizontalUnitIncrement())

      for (let col = 0; col < colCount; col++) {
        this.setHeaderString(col, listViewData.getHeaderString(col))
        for (let row = 0; row < rowCount; row++) {
          this.setString(row, col, listViewData.getString(row, col))
          this.setImage(row, col, listViewData.getImage(row, col))
        }
      }

      for (let row = 0; row < rowCount; row++) {
        this.setRowID(row, listViewData.getRowID(row))
        this.setRowImage(row, listViewData.getRowImage(row))
      }
    } catch (ignore) {
      console.error(ignore)
    }
  }

  private checkRowIndex(row: number): boolean {
    return row >= 0 && row < this.rowCount.value
  }

  private checkColumnIndex(column: number): boolean {
    return column >= 0 && column < this.columnCount.value
  }

  private getCellInfo(row: number, column: number): JCFListViewCellProperties {
    return this.cellInfo.value.get(row).get(column)
  }

  private getRowInfo = (row: number): JCFListViewRowProperties => {
    return this.rowInfo.value.get(row)
  }

  private getColumnInfo = (column: number): JCFListViewColumnProperties => {
    return this.columnInfo.value.get(column)
  }

  _getComponentName() {
    return EComponentName.JCFListView
  }

  _getName(): string {
    return 'JCFListViewData'
  }

  static _getName(): string {
    return 'JCFListViewData'
  }

  _getType() {
    return JCFListViewData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFListViewData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFListViewData'
  }
}
