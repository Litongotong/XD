import { Color } from '@/lib/native/awt/Color'
import { JCFSpreadCellPosition } from './JCFSpreadCellPosition'
import { JCFItemData } from './JCFItemData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { toRaw, type Ref } from 'vue'
import { Row, type FlexGrid } from '@grapecity/wijmo.grid'
import { CellRange, FormatItemEventArgs, Column } from '@grapecity/wijmo.grid'
import { MsisDebug } from '@/utils/debug/log'
import { create2DStringArray } from '@/utils/array/2D'

export class JCFSpreadData extends JCFItemData {
  flexGridRef: Ref<FlexGrid | undefined>

  /** セルを複数選択できるかどうか */
  multipleMode: boolean = false

  get flexGrid(): FlexGrid | undefined {
    return toRaw(this.flexGridRef?.value)
  }

  get rowCount(): number {
    return this.flexGrid?.rows.length || 0
  }

  get columnCount(): number {
    return this.flexGrid?.rows.length || 0
  }

  constructor(itemId: string) {
    super(itemId)
  }

  _setFlexGrid(flexGrid: Ref<FlexGrid | undefined>) {
    console.log('jcfspread instance stalled', flexGrid)
    this.flexGridRef = flexGrid
  }

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
   * Append a row on the last of table
   */
  addRow(): void {
    const grid = this.flexGrid
    if (grid) {
      grid.itemsSource = grid.itemsSource ? [...grid.itemsSource, {}] : []
    }
  }

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
   * Get the value of checkbox in the given cell
   * @param row
   * @param column
   */
  getCellBooleanValue(row: number, column: number): boolean {
    const grid = this.flexGrid
    const value = grid?.getCellData(row, column, true)
    return !!value
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
    // TOOD
  }

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
