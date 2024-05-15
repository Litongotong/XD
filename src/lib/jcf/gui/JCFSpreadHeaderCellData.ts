import type { Color } from '@/lib/native/awt/Color'

export class JCFSpreadHeaderCellData {
  static readonly Header: string =
    '$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadHeaderCellData.java 11    09/02/25 14:26 Kura $'
  static readonly Modtime: string = '$Modtime: 09/02/25 10:41 $'
  static readonly Workfile: string = '$Workfile: JCFSpreadHeaderCellData.java $'
  static readonly Revision: string = '$Revision: 11 $'
  static readonly CLASS_VERSION: string = 'V2L10'
  static readonly COPYRIGHT: string =
    'All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009'
  static readonly FUJITSU_CONFIDENTIAL: string = 'FUJITSU CONFIDENTIAL'
  protected static readonly CLASS_NAME: string = 'JCFSpreadHeaderCellData'
  static readonly serialVersionUID: number = 0xc314c7a6d71cd7d7

  protected background: Color | null
  protected foreground: Color | null
  protected value: string
  protected selected: boolean
  protected recno: number
  protected hidden: boolean
  protected deleted: boolean
  protected rowHidden: boolean
  protected parsed: any | null

  constructor() {
    this.background = null
    this.foreground = null
    this.value = ''
    this.selected = false
    this.recno = -1
    this.hidden = false
    this.deleted = false
    this.rowHidden = false
    this.parsed = null
  }

  protected getBackground(): Color | null {
    return this.background
  }

  public setBackground(color: Color | null): void {
    this.background = color
  }

  protected getForeground(): Color | null {
    return this.foreground
  }

  public setForeground(color: Color | null): void {
    this.foreground = color
  }

  protected getValue(): string {
    return this.value
  }

  protected setValue(newValue: any): void {
    this.value = newValue
    this.parsed = null
  }

  protected isSelected(): boolean {
    return this.selected
  }

  protected setSelected(select: boolean): void {
    this.selected = select
  }

  protected getRecordNumber(): number {
    return this.recno
  }

  protected setRecordNumber(recno: number): void {
    this.recno = recno
  }

  public isDeleted(): boolean {
    return this.deleted
  }

  protected setDeleted(deleted: boolean): void {
    this.deleted = deleted
  }

  public isRowVisible(): boolean {
    return !this.rowHidden
  }

  public setRowVisible(visible: boolean): void {
    this.rowHidden = !visible
  }
}
