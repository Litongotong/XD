import type { Color } from '@/lib/native/awt/Color'

export class JCFSpreadHeaderColumnData {
  static readonly Header: string =
    '$Header: /CJF/V2/cjfguispread/src/com/fujitsu/jcf/gui/JCFSpreadHeaderColumnData.java 6     09/02/25 15:38 Kura $'
  static readonly Modtime: string = '$Modtime: 09/02/25 10:49 $'
  static readonly Workfile: string =
    '$Workfile: JCFSpreadHeaderColumnData.java $'
  static readonly Revision: string = '$Revision: 6 $'
  static readonly CLASS_VERSION: string = 'V2L10'
  static readonly COPYRIGHT: string =
    'All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2009'
  static readonly FUJITSU_CONFIDENTIAL: string = 'FUJITSU CONFIDENTIAL'
  protected static readonly CLASS_NAME: string = 'JCFSpreadHeaderColumnData'
  static readonly serialVersionUID: number = 0x4a3745470245be60

  protected background: Color | null
  protected foreground: Color | null
  protected sortorder: number
  protected hidden: boolean

  constructor() {
    this.background = null
    this.foreground = null
    this.sortorder = 0
    this.hidden = false
  }

  protected getBackground(): Color | null {
    return this.background
  }

  protected setBackground(color: Color | null): void {
    this.background = color
  }

  protected getForeground(): Color | null {
    return this.foreground
  }

  protected setForeground(color: Color | null): void {
    this.foreground = color
  }

  protected getSortOrder(): number {
    return this.sortorder
  }

  protected setSortOrder(order: number): void {
    this.sortorder = order
  }

  protected isHidden(): boolean {
    return this.hidden
  }

  protected setHidden(hidden: boolean): void {
    this.hidden = hidden
  }
}
