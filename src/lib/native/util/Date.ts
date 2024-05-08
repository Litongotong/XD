// because `Date` is a JavaScript built-in keyword, we use `NativeDate` instead
export class NativeDate {
  private date: Date
  constructor(textOrNumber?: string | number) {
    const asString = typeof textOrNumber === 'string'
    const asNumber = typeof textOrNumber === 'number'
    const asUndefined = typeof textOrNumber === 'undefined'
    if (asString) {
      this.date = new Date(textOrNumber)
    } else if (asNumber) {
      this.date = new Date(textOrNumber)
    } else if (asUndefined) {
      this.date = new Date()
    } else {
      throw new Error('Invalid argument')
    }
  }

  _getDate() {
    return this.date
  }

  getTime() {
    return this.date.getTime()
  }
}
