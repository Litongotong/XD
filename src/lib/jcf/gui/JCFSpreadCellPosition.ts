import type { Serializable } from '@/lib/native/io/Serializable'
import { CJPosition } from './CJPosition'
import { Integer } from '@/lib/native/lang/Integer'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'

export class JCFSpreadCellPosition extends CJPosition implements Serializable {
  protected recno: number
  protected colname: string

  constructor()
  constructor(row: number, column: number)
  constructor(pos: CJPosition)
  constructor(...args: any[]) {
    if (args.length === 0) {
      super()
      this.recno = this.row
      this.colname = this.column >= 0 ? Integer.toString(this.column) : ''
    } else if (args.length === 1) {
      const pos = args[0]
      super(pos)

      // NOT USED
      // if (pos instanceof CJCellPosition) {
      //   let cpos: CJCellPosition = pos as CJCellPosition
      //   let spread: JCFSpread = cpos.getOwner() as JCFSpread
      //   this.recno = cpos.getRecordNumber()
      //   this.colname = spread.jcfGetColumnName(pos)
      // } else
      if (pos instanceof JCFSpreadCellPosition) {
        let src: JCFSpreadCellPosition = pos as JCFSpreadCellPosition
        this.recno = src.recno
        this.colname = src.colname
      } else {
        this.recno = this.row
        this.colname = this.column >= 0 ? Integer.toString(this.column) : ''
      }
    } else if (args.length === 2) {
      const [row, column] = args
      super(row, column)
      this.recno = this.row
      this.colname = this.column >= 0 ? Integer.toString(this.column) : ''
    }
  }

  getRecordNumber(): number {
    return this.recno
  }

  getColumnName(): string {
    return this.colname
  }

  paramString(): string {
    let buf: StringBuffer = new StringBuffer()
    buf.append(super.paramString())
    buf.append(',recno=')
    buf.append(this.recno)
    buf.append(',colname=')
    buf.append(this.colname)
    return buf.toString()
  }

  toString(): string {
    return (
      super.toString() + ',recno=' + this.recno + ',colname=' + this.colname
    )
  }

  _getName(): string {
    return 'JCFSpreadCellPosition'
  }

  static _getName(): string {
    return 'JCFSpreadCellPosition'
  }

  _getType() {
    return JCFSpreadCellPosition as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFSpreadCellPosition'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFSpreadCellPosition'
  }
}
