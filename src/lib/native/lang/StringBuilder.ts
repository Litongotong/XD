import { NativeString } from './String'

export class StringBuilder {
  private value: string = ''

  constructor(str?: string) {
    this.value = str || ''
  }

  append(str: string | NativeString | any): StringBuilder {
    if (typeof str === 'string') {
      this.value += str
    } else if (str instanceof NativeString) {
      this.value += (str as NativeString)._getValue()
    } else if (str?.toString && typeof str.toString === 'function') {
      this.value += str.toString()
    } else {
      throw new Error('Invalid argument')
    }
    return this
  }

  toString(): string {
    return this.value
  }
}
