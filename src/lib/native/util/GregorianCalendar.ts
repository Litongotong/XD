import { Calendar } from './Calendar'

export class GregorianCalendar extends Calendar {
  constructor(...params: any[]) {
    super()
    if (params.length === 3) {
      const isFirstParamAsNumber = typeof params[0] === 'number'
      const isSecondParamAsNumber = typeof params[1] === 'number'
      const isThirdParamAsNumber = typeof params[2] === 'number'
      if (
        isFirstParamAsNumber &&
        isSecondParamAsNumber &&
        isThirdParamAsNumber
      ) {
        this.__constructorWithYearMonthDate(params[0], params[1], params[2])
      } else {
        throw new Error('Invalid arguments')
      }
    } else if (params.length === 0) {
      // pass
    } else {
      throw new Error('Invalid arguments')
    }
  }

  isLeapYear(year: number) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
  }

  __constructorWithYearMonthDate(year: number, month: number, date: number) {
    this.set(year, month, date)
  }
}
