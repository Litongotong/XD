import { Color } from '@/lib/native/awt/Color'
import { JCFSpreadCellPosition } from './JCFSpreadCellPosition'
import { JCFItemData } from './JCFItemData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { toRaw, watch, type Ref } from 'vue'
import { Row, type FlexGrid } from '@grapecity/wijmo.grid'
import { CellRange, FormatItemEventArgs, Column } from '@grapecity/wijmo.grid'
import { MsisDebug } from '@/utils/debug/log'
import { create2DStringArray } from '@/utils/array/2D'
import { isNil } from '@/utils/useful'
import { DataType } from '@grapecity/wijmo'
import { getRaw } from '@/utils/vue/getRaw'
import { JCFSpreadCellData } from './JCFSpreadCellData'
import { Vector } from '@/lib/native/util/Vector'

export class JCFSpreadData extends JCFItemData {
  flexGridRef: Ref<FlexGrid | undefined>

  /** column edit types */
  public static STRING = 1
  public static NUMBER = 2
  public static DATE = 3
  public static COMBOBOX = 5
  public static COMBOBOX2 = 11
  public static CHECKBOX = 7
  public static PUSHBUTTON = 8
  public static TOGGLEBUTTON = 10

  public static ERROR_RANGE_COLUMN = 'ERROR_RANGE_COLUMN'
  public static ERROR_RANGE_ROW = 'ERROR_RANGE_ROW'
  public static ERROR_NO_GRID = 'ERROR_NO_GRID'

  protected dataCellsVec: Vector<JCFSpreadCellData[]> = new Vector()

  /** セルを複数選択できるかどうか */
  multipleMode: boolean = false

  protected setModified(b: boolean) {
    super.setModified(b)
  }

  get flexGrid(): FlexGrid | undefined {
    return getRaw(this.flexGridRef)
  }

  get rowCount(): number {
    return this.flexGrid?.rows.length || 0
  }

  get columnCount(): number {
    return this.flexGrid?.columns.length || 0
  }

  constructor(itemId: string)
  constructor(itemId: string, flexGrid: Ref<FlexGrid | undefined>)
  constructor(itemId: string, flexGrid?: Ref<FlexGrid | undefined>) {
    super(itemId)

    flexGrid && this._setFlexGrid(flexGrid)
  }

  _setFlexGrid(flexGrid: Ref<FlexGrid | undefined>) {
    MsisDebug.log('jcfspread instance stalled', flexGrid)


    this.flexGridRef = flexGrid

    this.addListeners()
  }

  addListeners() {
    if (!this.flexGridRef) return

    watch(this.flexGridRef, (newVal, oldVal) => {
      if (newVal === oldVal) return

      if (!this.flexGrid) return

      // Regist listener

      this.flexGrid.beginningEdit.addHandler((s, e) => {
        let cell = this.getCell(e.row, e.col)

        if (!cell) return

        if (!cell.isEditable()) {
          e.cancel = true
        }
      })
    })
  }

  isReverse() {
    return false
  }

  getColumnCount() {
    return this.columnCount
  }

  setReverse(flag: boolean) {}

  getCellValue(row: number, column: number): string {
    const grid = this.flexGrid
    return grid?.getCellData(row, column, true) || ''
  }

  /**
   * In Java code of JCFSpreadData, it takes data formatting logic in `setCellValue` function.
   * Because wijmo has implemented the data formatting internally, we just need set the value to the cell.
   * It will be automatically formatted according to the format set during initialization.
   * @param row row position
   * @param column column position
   * @param value the value to be set
   */
  setCellValue(row: number, column: number, value: number): void
  setCellValue(row: number, column: number, value: string): void
  setCellValue(row: number, column: number, value: boolean): void
  setCellValue(row: number, column: number, value: any): void {
    const grid = this.flexGrid
    if (!grid) return
    grid.setCellData(row, column, value, true)
  }

  /**
   * Return the name of this column
   * @param column
   */
  getColumnInformationName(column: number): string {
    const grid = this.flexGrid
    if (grid && column >= 0 && column < grid.columns.length) {
      return grid.columns[column]?.header || ''
    }
    return ''
  }

  getColumnInformationEditType(column: number): number {
    if (column >= 0 && this.columnCount > column) {
      const columnType = this.getColumnData(column)['dataType']

      switch (columnType) {
        case DataType.Date:
          return JCFSpreadData.DATE
        case DataType.Boolean:
          return JCFSpreadData.CHECKBOX
        case DataType.Number:
          return JCFSpreadData.NUMBER
        case DataType.String:
          return JCFSpreadData.STRING
        /** TODO(spread): How to map the rest of edit types?
         * JCFSpreadData: COMBOBOX, COMBOBOX2, TOGGLEBUTTON, PUSHBUTTON
         * Wijmo: Array, Object
         */
        case DataType.Array:
          return JCFSpreadData.COMBOBOX
        case DataType.Object:
          return JCFSpreadData.PUSHBUTTON
        default:
          MsisDebug.warn(
            `No default column edit type in wijmo grid column ${column}`,
          )
          return JCFSpreadData.STRING
      }
    } else {
      throw new Error(JCFSpreadData.ERROR_RANGE_COLUMN)
    }
  }

  /**
   * get the Column object from wijmo according to the given index
   * @param column index of the column
   * @returns
   */
  getColumnData(column: number): Column {
    const grid = this.flexGrid
    if (!this.flexGrid) throw new Error(JCFSpreadData.ERROR_NO_GRID)
    return this.flexGrid.columns[column]
  }

  setLastSorted(column: string | null) {
    // TODO(spread): no such function in Wijmo
  }

  /**
   * Focus on the given cell
   * @param row
   * @param columnName
   */
  setPosition(row: number, columnName: string): void {
    const grid = this.flexGrid
    const columnIndex = grid?.columns.indexOf(columnName) || -1
    if (grid && columnIndex !== -1) {
      grid.select(new CellRange(row, columnIndex), true)
    }
  }

  /**
   * Clear the table
   */
  removeAllRow(): void {
    const grid = this.flexGrid
    if (!grid) return

    this.dataCellsVec.removeAllElements()
    grid.itemsSource = []
  }

  /**
   * Set the length of decimal for the given column
   * @param columnName
   * @param decimal The length of decimal
   */
  setZeroPaddingDecimal(columnName: string, decimal: number): void {
    const grid = this.flexGrid
    const column = grid?.columns.getColumn(columnName)
    if (column) {
      column.format = `n${decimal}`
    }
  }

  /**
   * Set editable for the given column
   * @param columnName
   * @param editable
   */
  setColumnInformationEditable(columnName: string, editable: boolean): void {
    const grid = this.flexGrid
    const column = grid?.columns.getColumn(columnName)
    if (column) {
      column.isReadOnly = !editable
    }
  }

  /**
   * Set enabled for current table
   * @param enabled
   */
  setEnabled(enabled: boolean): void {
    const grid = this.flexGrid
    if (grid) {
      grid.isReadOnly = !enabled
    }
  }

  getRowCount(): number {
    const grid = this.flexGrid
    return grid?.rows.length || 0
  }

  /**
   * Append a row into the selected row index
   */
  addRow(row: number): void
  /**
   * Append a row on the last of table
   */
  addRow(): void
  addRow(row?: number) {
    const grid = this.flexGrid

    if (!grid) return

    if (isNil(row)) {
      grid.itemsSource = grid.itemsSource ? [...grid.itemsSource, {}] : []
      this.dataCellsVec.add(this.createAndInitializeCells())
      return
    }

    if (row < 0 || this.rowCount < row) {
      throw new Error(JCFSpreadData.ERROR_RANGE_ROW)
    }

    this.dataCellsVec.add(row, this.createAndInitializeCells())
    grid.itemsSource.splice(row, 0, {})
    grid.itemsSource = [...grid.itemsSource]
  }

  insertRow(row: number): void {
    this.addRow(row)
  }

  removeRow(row: number) {
    if (row < 0 || this.rowCount <= row) {
      throw new Error(JCFSpreadData.ERROR_RANGE_ROW)
    } else {
      this.rmRow(row)
      return
    }
  }

  private rmRow(row: number) {
    const grid = this.flexGrid

    if (!grid) return

    this.dataCellsVec.removeElementAt(row)

    grid.itemsSource.splice(row, 1)
    grid.itemsSource = [...grid.itemsSource]
  }

  /**
   * get the positions of current selected columns
   */
  getSelectedCellsPosition(): JCFSpreadCellPosition[] {
    const grid = this.flexGrid
    const selectedRanges = grid?.selection

    if (!selectedRanges || selectedRanges.col === -1) {
      return []
    }

    let colStart, colEnd, rowStart, rowEnd
    if (selectedRanges.col > selectedRanges.col2) {
      colStart = selectedRanges.col2
      colEnd = selectedRanges.col
    } else {
      colStart = selectedRanges.col
      colEnd = selectedRanges.col2
    }

    if (selectedRanges.row > selectedRanges.row2) {
      rowStart = selectedRanges.row2
      rowEnd = selectedRanges.row
    } else {
      rowStart = selectedRanges.row
      rowEnd = selectedRanges.row2
    }

    const positions: JCFSpreadCellPosition[] = []

    for (let col = colStart; col <= colEnd; col++) {
      for (let row = rowStart; row <= rowEnd; row++) {
        positions.push(new JCFSpreadCellPosition(row, col))
      }
    }

    return positions
  }

  /**
   * Set the selected state for the given cell
   * @param row
   * @param column
   * @param select The cell is selected or not
   */
  setCellSelected(row: number, column: number, select: boolean) {
    const grid = this.flexGrid
    if (grid) {
      let cellRange = new CellRange(row, column)
      if (select) {
        grid.select(cellRange, false)
      } else {
        cellRange = new CellRange()
        grid.select(cellRange)
      }
    }
  }

  /**
   * Focus to the given position
   * @param position The position to be show
   */
  setViewport(position: JCFSpreadCellPosition): void {
    const grid = this.flexGrid
    if (grid && position) {
      grid.scrollIntoView(position.row, position.column, true)
    }
  }

  /**
   * Set a background color for the given cell
   * @param row
   * @param column
   * @param color
   */
  setCellBackground(row: number, column: number, color: Color): void {
    const grid = this.flexGrid
    if (!grid) return
    // Ensure the row and column are within valid range
    if (
      row < 0 ||
      row >= grid.rows.length ||
      column < 0 ||
      column >= grid.columns.length
    ) {
      return // Invalid row or column index
    }

    // Apply cell customization using the formatItem event
    grid.formatItem.addHandler((s: FlexGrid, e: FormatItemEventArgs) => {
      if (e.panel === s.cells && e.row === row && e.col === column) {
        e.cell.style.backgroundColor = color._toRGBString()
      }
    })

    // Refresh the grid to apply the cell customization
    grid.invalidate()
  }

  /**
   * Set a background color for the given column header cell
   * @param chrow column header row index
   * @param chcolumn column header column index
   * @param color
   */
  setColumnHeaderCellBackground(chrow: number, chcolumn: number, color: Color) {
    const grid = this.flexGrid
    if (!grid) return
    if (chrow >= 0 && grid.columnHeaders.rows.length > chrow) {
      if (chcolumn >= 0 && grid.columns.length > chcolumn) {
        const columnHeaderCell = grid.columnHeaders.getCellElement(
          chrow,
          chcolumn,
        )
        if (columnHeaderCell) {
          columnHeaderCell.style.backgroundColor = color._toRGBString()
        }
      } else {
        throw new Error(JCFSpreadData.ERROR_RANGE_COLUMN)
      }
    } else {
      throw new Error(JCFSpreadData.ERROR_RANGE_ROW)
    }
  }

  public setRowCount(count: number): void {
    if (count < 0) {
      throw new Error(JCFSpreadData.ERROR_RANGE_ROW)
    } else {
      let row: number
      if (count > this.rowCount) {
        for (row = this.rowCount; row < count; row += 1) {
          this.addRow(this.rowCount)
        }
      } else {
        for (row = this.rowCount; count < row; row -= 1) {
          this.rmRow(count)
        }
      }
    }
  }

  /**
   * Get the value of checkbox in the given cell
   * @param row
   * @param column
   */
  getCellBooleanValue(row: number, column: number): boolean {
    const grid = this.flexGrid
    const value = grid?.getCellData(row, column, true)
    return !!value
  }

  /**
   * Set the editable property of given cell
   * @param row
   * @param column
   * @param editable
   */
  setCellEditable(row: number, column: number, editable: boolean) {
    if (row < 0 || this.rowCount <= row)
      throw new Error(JCFSpreadData.ERROR_RANGE_ROW)
    if (column < 0 || this.columnCount <= column)
      throw new Error(JCFSpreadData.ERROR_RANGE_COLUMN)

    const cell = this.getCell(row, column)

    if (cell.isEditable() == editable) {
      return
    } else {
      cell.setEditable(editable)
      return
    }
  }

  isCellEditable(row: number, column: number) {
    if (row < 0 || this.rowCount <= row) throw new Error('ERROR_RANGE_ROW')
    if (column < 0 || this.columnCount <= column) {
      throw new Error('ERROR_RANGE_COLUMN')
    } else {
      const cell = this.getCell(row, column)
      return cell.isEditable()
    }
  }

  protected createCells(): JCFSpreadCellData[] {
    let columns: number = this.getColumnCount()
    const cells: JCFSpreadCellData[] = Array.from({ length: columns })

    for (let col = 0; col < columns; col++) {
      const cell: JCFSpreadCellData = new JCFSpreadCellData()
      const columnInfo = this.getColumnData(col)
      this.initializeCell(cell, columnInfo)
      cells[col] = cell
    }

    return cells
  }

  protected initializeCells(cells: JCFSpreadCellData[]) {
    for (let col = 0; col < cells.length; col++) {
      const cell: JCFSpreadCellData = cells[col]
      const columnInfo = this.getColumnData(col)
      this.initializeCell(cell, columnInfo)
    }
  }

  protected initializeCell(cell: JCFSpreadCellData, columnInfo: Column) {
    // cell.setBackground(columnInfo.getBackground());
    // cell.setForeground(columnInfo.getForeground());
    cell.setEditable(!columnInfo.isReadOnly)
  }

  /**
   * Comment: In Java source code, createCells and initializeCells include repeating operations.
   * @returns
   */
  protected createAndInitializeCells(): JCFSpreadCellData[] {
    const cells: JCFSpreadCellData[] = this.createCells()
    this.initializeCells(cells)
    return cells
  }

  getCell(row: number, column: number) {
    const cells: JCFSpreadCellData[] = this.dataCellsVec.get(row)
    const cell = cells && cells[column]

    if (!cell) return new JCFSpreadCellData()

    return cell
  }

  getValue(): string {
    return ''
  }

  setValue(newValue: any): void {}

  setData(itemData: JCFItemData): void {
    if (!itemData) {
      return
    } else {
      // TODO
    }
  }

  getCommunicationData() {
    let communicationData = create2DStringArray(this.rowCount, this.columnCount)
    for (let row = 0; row < this.rowCount; row++) {
      for (let column = 0; column < this.columnCount; column++)
        try {
          communicationData[row][column] = this.getCellValue(row, column)
        } catch (e) {}
    }

    return communicationData
  }

  setCommunicationData(obj: any): void {
    // TODO(spread): setCommunicationData (seem not used yet)
  }

  setDataAndAttributes(itemData: JCFItemData): void {}

  _getComponentName(): string {
    return EComponentName.JCFSpread
  }

  _getName(): string {
    return 'JCFSpreadData'
  }

  static _getName(): string {
    return 'JCFSpreadData'
  }

  _getType() {
    return JCFSpreadData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFSpreadData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFSpreadData'
  }
}
