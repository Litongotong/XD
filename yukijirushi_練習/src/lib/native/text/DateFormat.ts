import type { NativeDate } from '../util/Date'
import { Format } from './Format'

export abstract class DateFormat extends Format {
  constructor() {
    super()
  }

  abstract format(date: NativeDate): string
}
