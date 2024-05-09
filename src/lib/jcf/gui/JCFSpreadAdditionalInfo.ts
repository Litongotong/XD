import type { Serializable } from '@/lib/native/io/Serializable'
import type { JCFSelectableElement } from './JCFSelectableElement'
import { JCFSpreadCellPosition } from './JCFSpreadCellPosition'
import { JCFDataIllegalArgumentException } from './JCFDataIllegalArgumentException'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import type { CJPosition } from './CJPosition'

export class JCFSpreadAdditionalInfo implements Serializable {
  protected selectableElement: JCFSelectableElement
  protected cellPosition: JCFSpreadCellPosition
  protected selectedRowPosition: JCFSpreadCellPosition[]
  protected nextPos: JCFSpreadCellPosition
  protected deselectedRowPosition: JCFSpreadCellPosition[]

  constructor(position: CJPosition) {
    this.selectableElement = null!
    this.cellPosition = new JCFSpreadCellPosition()
    this.selectedRowPosition = null!
    this.nextPos = null!
    this.deselectedRowPosition = null!
    if (position === null || position === undefined) {
      throw new JCFDataIllegalArgumentException('ERROR_TYPE')
    } else {
      this.cellPosition = new JCFSpreadCellPosition(position)
      return
    }
  }

  getCellPosition(): JCFSpreadCellPosition {
    return this.cellPosition
  }

  protected setCellPosition(cellPosition: JCFSpreadCellPosition) {
    this.cellPosition = cellPosition
  }

  getSelectedRowPosition(): JCFSpreadCellPosition[] {
    return this.selectedRowPosition
  }

  protected setSelectedRowPosition(
    selectedRowPosition: JCFSpreadCellPosition[],
  ) {
    this.selectedRowPosition = selectedRowPosition
  }

  getSelectableElement(): JCFSelectableElement {
    return this.selectableElement
  }

  protected setSelectableElement(selectableElement: JCFSelectableElement) {
    this.selectableElement = selectableElement
  }

  getNextPos(): JCFSpreadCellPosition {
    return this.nextPos
  }

  protected setNextPos(nextPos: JCFSpreadCellPosition) {
    this.nextPos = nextPos
  }

  toString(): string {
    let buf: StringBuffer = new StringBuffer()
    buf.append('JCFSpreadAdditionalInfo')
    buf.append('[')
    if (this.cellPosition !== null && this.cellPosition !== undefined) {
      buf.append('cellposition=')
      buf.append(this.cellPosition)
    }
    if (
      this.selectableElement !== null &&
      this.selectableElement !== undefined
    ) {
      if (buf.charAt(buf.length() - 1) !== '[') buf.append(',')
      buf.append('selectableElement=')
      buf.append(this.selectableElement)
    }
    if (
      this.selectedRowPosition !== null &&
      this.selectedRowPosition !== undefined
    ) {
      if (buf.charAt(buf.length() - 1) !== '[') {
        buf.append(',')
      }
      buf.append('selectedRowPosition={')
      for (let n = 0; n < this.selectedRowPosition.length; n++) {
        if (n > 0) {
          buf.append(',')
        }
        let pos: JCFSpreadCellPosition = this.selectedRowPosition[n]
        if (pos === null || pos === undefined) {
          buf.append('(null)')
        } else {
          buf.append(pos)
        }
      }

      buf.append('}')
    }
    if (
      this.deselectedRowPosition !== null &&
      this.deselectedRowPosition !== undefined
    ) {
      if (buf.charAt(buf.length() - 1) !== '[') {
        buf.append(',')
      }
      buf.append('deselectedRowPosition={')
      for (let n = 0; n < this.deselectedRowPosition.length; n++) {
        if (n > 0) {
          buf.append(',')
        }
        let pos: JCFSpreadCellPosition = this.deselectedRowPosition[n]
        if (pos === null || pos === undefined) {
          buf.append('(null)')
        } else {
          buf.append(pos)
        }
      }
      buf.append('}')
    }
    if (this.nextPos !== null && this.nextPos !== undefined) {
      if (buf.charAt(buf.length() - 1) !== '[') {
        buf.append(',')
      }
      buf.append('nextPos=')
      buf.append(this.nextPos)
    }
    return buf.toString()
  }

  getDeselectedRowPosition(): JCFSpreadCellPosition[] {
    return this.deselectedRowPosition
  }

  protected setDeselectedRowPosition(rowpos: JCFSpreadCellPosition[]) {
    this.deselectedRowPosition = rowpos
  }

  _getName(): string {
    return 'JCFSpreadAdditionalInfo'
  }

  static _getName(): string {
    return 'JCFSpreadAdditionalInfo'
  }

  _getType() {
    return JCFSpreadAdditionalInfo as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFSpreadAdditionalInfo'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFSpreadAdditionalInfo'
  }
}
