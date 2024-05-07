import type { Serializable } from '@/lib/native/io/Serializable'
import { Integer } from '@/lib/native/lang/Integer'
import { NativeNumber } from '@/lib/native/lang/Number'
import { NativeString } from '@/lib/native/lang/String'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import { StringBuilder } from '@/lib/native/lang/StringBuilder'

// 🟢 完成

export class CJPosition implements Serializable {
  row: number
  column: number

  constructor()
  constructor(row: number, column: number)
  constructor(pos: CJPosition)
  constructor(...args: any[]) {
    if (args.length === 0) {
      this.row = 0
      this.column = 0
    } else if (args.length === 1) {
      this.row = args[0].row
      this.column = args[0].column
    } else if (args.length === 2) {
      const isNumber =
        typeof args[0] === 'number' && typeof args[1] === 'number'
      if (isNumber) {
        this.row = args[0]
        this.column = args[1]
      } else {
        throw new Error('Invalid arguments')
      }
    } else {
      throw new Error('Invalid arguments')
    }
  }

  duplicate(): CJPosition {
    return new CJPosition(this)
  }

  clone(): any {
    try {
      const newIns = new CJPosition(this.row, this.column)
      let copy: CJPosition = newIns
      return copy
    } catch (e: any) {
      return new CJPosition(this.row, this.column)
    }
  }

  equals(obj: any): boolean {
    if (obj !== null && obj !== undefined && obj instanceof CJPosition) {
      let compare: number = this.compareTo(obj)
      return compare == 0
    } else {
      return false
    }
  }

  hashCode(): number {
    return this.row ^ (this.column * 31)
  }

  paramString(): string {
    let buf: StringBuffer = new StringBuffer()
    buf.append('row=')
    buf.append(this.row)
    buf.append(',column=')
    buf.append(this.column)
    return buf.toString()
  }

  toString(): string {
    return new StringBuilder(NativeString.valueOf(this._getName()))
      .append('[')
      .append(this.paramString())
      .append(']')
      .toString()
  }

  compareTo(obj: any): number {
    let target: CJPosition = obj as CJPosition
    return this.comparePos(target.row, target.column)
  }

  comparePos(row: number, column: number): number {
    let rowdiff: number = this.row - row
    if (rowdiff != 0) {
      return rowdiff
    } else {
      let coldiff: number = this.column - column
      return coldiff
    }
  }

  translate(rows: number, columns: number) {
    this.row += rows
    this.column += columns
  }

  getTranslate(rows: number, columns: number): CJPosition {
    let translatePos: CJPosition = this.clone()
    translatePos.translate(rows, columns)
    return translatePos
  }

  setLocation(pos: CJPosition): void
  setLocation(row: number, column: number): void
  setLocation(...args: any[]): void {
    if (args.length === 1) {
      this.__setLocationWithPos(args[0])
    } else if (args.length === 2) {
      this.__setLocationWithRowColumn(args[0], args[1])
    } else {
      throw new Error('Invalid arguments')
    }
  }

  private __setLocationWithPos(pos: CJPosition) {
    this.row = pos.row
    this.column = pos.column
  }

  private __setLocationWithRowColumn(row: number, column: number) {
    this.row = row
    this.column = column
  }

  invalidate() {
    this.setLocation(-1, -1)
  }

  isValid(): boolean {
    return this.isValidateRow() && this.isValidateColumn()
  }

  isValidateRow(): boolean {
    return this.row >= 0
  }

  isValidateColumn(): boolean {
    return this.column >= 0
  }

  getRowNum(): NativeNumber {
    return new Integer(this.row)
  }

  getColNum(): NativeNumber {
    return new Integer(this.column)
  }

  containsRow(r1: number, r2: number): boolean {
    let min: number = Math.min(r1, r2)
    let max: number = Math.max(r1, r2)
    return this.row >= min && this.row <= max
  }

  containsCol(c1: number, c2: number): boolean {
    let min: number = Math.min(c1, c2)
    let max: number = Math.max(c1, c2)
    return this.column >= min && this.column <= max
  }

  _getName(): string {
    return 'CJPosition'
  }

  static _getName(): string {
    return 'CJPosition'
  }

  _getType() {
    return CJPosition as any
  }

  _getFullName(): string {
    return 'jcf.gui.CJPosition'
  }

  static _getFullName(): string {
    return 'jcf.gui.CJPosition'
  }
}
