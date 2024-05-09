import { nativeDateFormat } from '@/utils/date/nativeFormat'
import { NativeDate } from '../util/Date'
import { DateFormat } from './DateFormat'

export class SimpleDateFormat extends DateFormat {
  private pattern: string

  constructor(pattern: string) {
    super()
    this.pattern = pattern
  }

  parse(text: string) {
    return new NativeDate(text)
  }

  format(date: NativeDate) {
    const result = nativeDateFormat(date._getDate(), this.pattern)
    return result
  }
}
