import { NativeDate } from './Date'
import { Locale } from './Locale'
import { TimeZone } from './TimeZone'

enum ECalendar {
  YEAR = 1,
  MONTH = 2,
  DATE = 5,
  DAY_OF_YEAR = 6,
  DAY_OF_WEEK = 7,
}

class CalendarConstant {
  field: ECalendar

  constructor(field: ECalendar) {
    this.field = field
  }

  _getType() {
    return CalendarConstant
  }
}

const createCalendarConstant = (field: number) => {
  const ins = new CalendarConstant(field)
  return ins
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000

export class Calendar {
  private date: NativeDate
  private timezone: TimeZone
  private locale: Locale

  static DATE = createCalendarConstant(ECalendar.DATE)
  static YEAR = createCalendarConstant(ECalendar.YEAR)
  static MONTH = createCalendarConstant(ECalendar.MONTH)
  static DAY_OF_YEAR = createCalendarConstant(ECalendar.DAY_OF_YEAR)
  static DAY_OF_WEEK = createCalendarConstant(ECalendar.DAY_OF_WEEK)

  constructor() {
    this.date = new NativeDate()
    this.timezone = TimeZone.getDefault()
    this.locale = Locale.getDefault()
  }

  static getInstance(): Calendar
  static getInstance(timezone: TimeZone, locale: Locale): Calendar
  static getInstance(...params: any[]) {
    if (!params.length) {
      return this.__getInstanceWithoutParams()
    } else if (params.length === 2) {
      return this.__getInstanceWithTimezoneAndLocale(params[0], params[1])
    } else {
      throw new Error('Invalid arguments')
    }
  }

  private static __getInstanceWithoutParams() {
    const ins = new Calendar()
    // use default timezone and locale
    const timezone = TimeZone.getDefault()
    const locale = Locale.getDefault()
    ins.setTimeZone(timezone)
    ins.setLocale(locale)
    return ins
  }

  private static __getInstanceWithTimezoneAndLocale(
    timezone: TimeZone,
    locale: Locale,
  ) {
    const ins = new Calendar()
    // change timezone and locale
    ins.setTimeZone(timezone)
    ins.setLocale(locale)
    return ins
  }

  setTime(date: NativeDate) {
    this.date = date
  }

  getTime() {
    return this.date
  }

  getTimeZone() {
    return this.timezone
  }

  setTimeZone(timezone: TimeZone) {
    this.timezone = timezone
  }

  getLocale() {
    return this.locale
  }

  setLocale(locale: Locale) {
    this.locale = locale
  }

  add(field: CalendarConstant, amount: number) {
    const ins = this.date._getDate()
    const constant = field.field
    if (constant === ECalendar.DATE) {
      ins.setTime(ins.getTime() + amount * ONE_DAY_MS)
    } else if (constant === ECalendar.YEAR) {
      ins.setFullYear(ins.getFullYear() + amount)
    } else if (constant === ECalendar.MONTH) {
      ins.setMonth(ins.getMonth() + amount)
    } else if (constant === ECalendar.DAY_OF_YEAR) {
      ins.setTime(ins.getTime() + amount * ONE_DAY_MS)
    } else if (constant === ECalendar.DAY_OF_WEEK) {
      ins.setTime(ins.getTime() + amount * ONE_DAY_MS)
    } else {
      throw new Error('Invalid field')
    }
  }

  set(field: CalendarConstant, value: number): void
  set(year: number, month: number, date: number): void
  set(...params: any[]) {
    const isFirstParamAsField = params?.[0]?._getType?.() === CalendarConstant
    if (isFirstParamAsField) {
      this.__setWithFieldAndValue(params[0], params[1])
    } else if (params.length === 3) {
      this.__setWithYearMonthDate(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid arguments')
    }
  }
  __setWithYearMonthDate(year: number, month: number, date: number) {
    const ins = this.date._getDate()
    ins.setFullYear(year)
    ins.setMonth(month)
    ins.setDate(date)
  }
  __setWithFieldAndValue(field: CalendarConstant, value: number) {
    const ins = this.date._getDate()
    const constant = field.field
    if (constant === ECalendar.DATE) {
      ins.setDate(value)
    } else if (constant === ECalendar.YEAR) {
      ins.setFullYear(value)
    } else if (constant === ECalendar.MONTH) {
      ins.setMonth(value)
    } else if (constant === ECalendar.DAY_OF_YEAR) {
      ins.setMonth(0)
      ins.setDate(value)
    } else if (constant === ECalendar.DAY_OF_WEEK) {
      ins.setDate(ins.getDate() + value - (ins.getDay() + 1))
    } else {
      throw new Error('Invalid field')
    }
  }

  get(field: CalendarConstant) {
    const ins = this.date._getDate()
    const constant = field.field
    if (constant === ECalendar.DATE) {
      return ins.getDate()
    } else if (constant === ECalendar.YEAR) {
      return ins.getFullYear()
    } else if (constant === ECalendar.MONTH) {
      return ins.getMonth()
    } else if (constant === ECalendar.DAY_OF_YEAR) {
      const now = ins.getTime()
      const start = new Date(ins.getFullYear(), 0, 0).getTime()
      const diff = now - start
      const day = Math.floor(diff / ONE_DAY_MS)
      return day
    } else if (constant === ECalendar.DAY_OF_WEEK) {
      return ins.getDay() + 1
    } else {
      throw new Error('Invalid field')
    }
  }
}
