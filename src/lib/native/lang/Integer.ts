import { MsisDebug } from '@/utils/debug/log'
import { NativeNumber } from './Number'
import { NumberFormatException } from './NumberFormatException'

export class Integer extends NativeNumber {
  private int: number

  constructor(int: number | string) {
    super()
    if (typeof int === 'number') {
      this.int = int
    } else {
      this.int = Integer.parseInt(int.toString())
    }
  }

  static parseInt(s: string, radix?: number): number {
    const asNumber = parseInt(s, radix || 10)
    const isInt = !Number.isNaN(asNumber) && Number.isInteger(asNumber)
    if (!isInt) {
      MsisDebug.error(`Not a integer, ${s}`)
      throw new NumberFormatException('Not a integer')
    }
    return asNumber
  }

  static valueOf(s: string, radix?: number): Integer {
    const asNumber = parseInt(s, radix || 10)
    const ins = new Integer(asNumber)
    return ins
  }

  intValue(): number {
    return this.int
  }

  static toString(i: number): string {
    return i.toString()
  }

  equals(obj: any): boolean {
    if (!obj) {
      return false
    }
    if (obj instanceof Integer) {
      return this.int === obj.intValue()
    }
    return false
  }
}
