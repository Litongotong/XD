import { JCFSpreadHeaderCellData } from './JCFSpreadHeaderCellData'

export class JCFSpreadCellData extends JCFSpreadHeaderCellData {
  static readonly Header: string =
    '$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadCellData.java 10    09/02/25 11:37 Kura $'
  static readonly Modtime: string = '$Modtime: 09/02/24 18:24 $'
  static readonly Workfile: string = '$Workfile: JCFSpreadCellData.java $'
  static readonly Revision: string = '$Revision: 10 $'
  static readonly CLASS_VERSION: string = 'V2L10'
  static readonly COPYRIGHT: string =
    'All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009'
  static readonly FUJITSU_CONFIDENTIAL: string = 'FUJITSU CONFIDENTIAL'
  protected static readonly CLASS_NAME: string = 'JCFSpreadCellData'
  static readonly serialVersionUID: number = 0x11f80e4a7d31d88d

  protected booleanValue: boolean
  protected selectedIndex: number
  protected dateValue: Date | null
  protected editable: boolean

  constructor() {
    super()
    this.booleanValue = false
    this.selectedIndex = -1
    this.dateValue = null
    this.editable = true
  }

  protected getBooleanValue(): boolean {
    return this.booleanValue
  }

  protected setValue(newValue: Date): void
  protected setValue(newValue: boolean): void
  protected setValue(newValue: Date | boolean) {
    if (typeof newValue === 'boolean') {
      this.booleanValue = newValue
      this.parsed = null
      return
    }
    this.dateValue = newValue
    this.parsed = null
  }

  protected getDateValue(): Date | null {
    return this.dateValue
  }

  protected getSelectedIndex(): number {
    return this.selectedIndex
  }

  protected setSelectedIndex(index: number): void {
    this.selectedIndex = index
  }

  public isEditable(): boolean {
    return this.editable
  }

  public setEditable(editable: boolean): void {
    this.editable = editable
  }

  public isHidden(): boolean {
    return this.hidden
  }

  protected setHidden(hidden: boolean): void {
    this.hidden = hidden
  }
}
