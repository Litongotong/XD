export class StringBuffer {
  private str: string
  constructor(strOrNumber?: string | number) {
    const asString = typeof strOrNumber === 'string'
    const asNumber = typeof strOrNumber === 'number'
    const asUndefined = typeof strOrNumber === 'undefined'
    if (asString) {
      this.str = strOrNumber as string
    } else if (asNumber) {
      // capacity
      this.str = ''
    } else if (asUndefined) {
      // default capacity 16
      this.str = ''
    } else {
      throw new Error('Invalid argument')
    }
  }

  insert(index: number, str: string): void {
    this.str = this.str.slice(0, index) + str + this.str.slice(index)
  }

  toString(): string {
    return this.str
  }

  length() {
    return this.str.length
  }

  charAt(index: number) {
    return this.str.charAt(index)
  }

  setCharAt(index: number, char: string) {
    this.str = this.str.slice(0, index) + char + this.str.slice(index + 1)
  }

  append(str: any) {
    if (typeof str === 'number') {
      this.str += str.toString()
    } else if (typeof str === 'string') {
      this.str += str
    } else {
      if (str?.toString && typeof str.toString === 'function') {
        this.str += str.toString()
      } else {
        throw new Error('Invalid argument')
      }
    }
    return this
  }

  setLength(length: number) {
    this.str = this.str.slice(0, length)
  }

  _getType() {
    return StringBuffer
  }
}
