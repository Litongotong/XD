import type { JCFSelectableElement } from './JCFSelectableElement'
import { JCFSpreadHeaderColumnData } from './JCFSpreadHeaderColumnData'

export class JCFSpreadColumnData extends JCFSpreadHeaderColumnData {
  static readonly Header: string =
    '$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadColumnData.java 11    09/02/25 12:58 Kura $'
  static readonly Modtime: string = '$Modtime: 09/02/24 18:45 $'
  static readonly Workfile: string = '$Workfile: JCFSpreadColumnData.java $'
  static readonly Revision: string = '$Revision: 11 $'
  static readonly CLASS_VERSION: string = 'V2L10'
  static readonly COPYRIGHT: string =
    'All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009'
  static readonly FUJITSU_CONFIDENTIAL: string = 'FUJITSU CONFIDENTIAL'
  protected static readonly CLASS_NAME: string = 'JCFSpreadColumnData'
  static readonly serialVersionUID: number = 0x96c893ef3a414b48

  protected editType: number
  protected editable: boolean
  protected maxByteLength: number
  protected label: string | null
  protected decimalpointAllowed: boolean
  protected enableInputNegativeValue: boolean
  protected commaEditAllowed: boolean
  protected items: JCFSelectableElement[] | null
  protected initialItemIndex: number
  protected name: string | null
  protected pattern: string | null
  protected maxIntegerDigit: number
  protected maxDecimalDigit: number
  protected columnHidden: boolean
  private intList: number[]

  constructor() {
    super()
    this.editType = 1
    this.editable = true
    this.maxByteLength = -1
    this.label = null
    this.decimalpointAllowed = true
    this.enableInputNegativeValue = true
    this.commaEditAllowed = true
    this.items = null
    this.initialItemIndex = -1
    this.name = null
    this.pattern = null
    this.maxIntegerDigit = -1
    this.maxDecimalDigit = -1
    this.columnHidden = false
    this.intList = []
  }

  protected getEditType(): number {
    return this.editType
  }

  protected setEditType(type: number): void {
    this.editType = type
  }

  protected isEditable(): boolean {
    return this.editable
  }

  protected setEditable(editable: boolean): void {
    this.editable = editable
  }

  protected getItems(): JCFSelectableElement[] | null {
    return this.items
  }

  protected setItems(items: JCFSelectableElement[] | null): void {
    this.items = items
  }

  protected getLabel(): string | null {
    return this.label
  }

  protected setLabel(label: string | null): void {
    this.label = label
  }

  protected getInitialItemIndex(): number {
    return this.initialItemIndex
  }

  protected setInitialItemIndex(index: number): void {
    this.initialItemIndex = index
  }

  protected isDecimalpointAllowed(): boolean {
    return this.decimalpointAllowed
  }

  protected setDecimalpointAllowed(newValue: boolean): void {
    this.decimalpointAllowed = newValue
  }

  protected isEnableInputNegativeValue(): boolean {
    return this.enableInputNegativeValue
  }

  protected setEnableInputNegativeValue(newValue: boolean): void {
    this.enableInputNegativeValue = newValue
  }

  protected isCommaEditAllowed(): boolean {
    return this.commaEditAllowed
  }

  protected setCommaEditAllowed(newValue: boolean): void {
    this.commaEditAllowed = newValue
  }

  protected getMaxByteLength(): number {
    return this.maxByteLength
  }

  protected setMaxByteLength(newValue: number): void {
    this.maxByteLength = newValue
  }

  protected getName(): string | null {
    return this.name
  }

  protected setName(name: string | null): void {
    this.name = name
  }

  protected getPattern(): string | null {
    return this.pattern
  }

  protected setPattern(pattern: string | null): void {
    this.pattern = pattern
  }

  protected getMaxIntegerDigit(): number {
    return this.maxIntegerDigit
  }

  protected setMaxIntegerDigit(integerDigit: number): void {
    this.maxIntegerDigit = integerDigit
  }

  protected getMaxDecimalDigit(): number {
    return this.maxDecimalDigit
  }

  protected setMaxDecimalDigit(decimalDigit: number): void {
    this.maxDecimalDigit = decimalDigit
  }

  private getInteger(value: number): number {
    return value
  }

  protected getValue(cellData: JCFSpreadCellData): any {
    switch (this.getEditType()) {
      case 1:
        return cellData.getValue()
      case 7:
      case 10:
        return cellData.getBooleanValue()
      case 2:
        return cellData.getValue()
      case 5:
      case 11:
        return this.getInteger(cellData.getSelectedIndex())
      case 8:
        return null
      case 3:
        return cellData.getDateValue()
      default:
        return null
    }
  }

  protected setValue(cellData: JCFSpreadCellData, value: any): void {
    if (typeof value === 'string') {
      cellData.setValue(value)
    } else if (value instanceof Date) {
      cellData.setValue(value)
    } else if (typeof value === 'number') {
      cellData.setSelectedIndex(value)
    } else if (typeof value === 'boolean') {
      cellData.setValue(value)
    }
  }

  // DEPRECATE(spread)
  // protected load(spread: JCFSpread, spreadData: JCFSpreadData, column: string, copy: number): void {
  // }

  // DEPRECATE(spread)
  // protected store(spread: JCFSpread, spreadData: JCFSpreadData, column: string, copy: number): void {
  // }

  public isColumnVisible(): boolean {
    return !this.columnHidden
  }

  protected setColumnVisible(visible: boolean): void {
    this.columnHidden = !visible
  }

  // DEPRECATE(spread)
  // private readObject(stream: ObjectInputStream): void {
  // }
}
