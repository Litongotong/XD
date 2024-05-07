import { NativeDecimalFormat } from '@/utils/number/format'
import { NumberFormat } from './NumberFormat'

export class DecimalFormat extends NumberFormat {
  private pattern: string

  constructor(pattern: string) {
    super()
    this.pattern = pattern
  }

  format(number: number): string {
    const ins = new NativeDecimalFormat(this.pattern)
    return ins.format(number)
  }
}
