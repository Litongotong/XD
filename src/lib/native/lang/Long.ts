import { MsisDebug } from '@/utils/debug/log'
import { NativeNumber } from './Number'
import { NumberFormatException } from './NumberFormatException'

export class Long extends NativeNumber {
  private value: number
  constructor(v: Long | number | string = 0) {
    super()
    if (typeof v === 'number') {
      this.value = v
    } else if (typeof v === 'string') {
      this.value = Long.parseLong(v)
    } else {
      this.value = v.longValue()
    }
  }

  longValue(): number {
    return this.value
  }

  intValue(): number {
    return this.value
  }

  static parseLong(s: string, radix?: number): number {
    const asNumber = parseInt(s, radix || 10)
    const isInt = !Number.isNaN(asNumber) && Number.isInteger(asNumber)
    if (!isInt) {
      MsisDebug.error(`Not a long, ${s}`)
      throw new NumberFormatException('Not a long')
    }
    return asNumber
  }

  static toString(i: number): string {
    return i.toString()
  }
}
