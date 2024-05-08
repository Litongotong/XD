import { StringBuffer } from "./StringBuffer"

export class NativeString {
  private value: string

  constructor(
    str?: StringBuffer | string
  ) {
    const asString = typeof str === 'string'
    if (asString) {
      this.value = str as string
    } else if (str?._getType?.() === StringBuffer) {
      this.value = str.toString()
    } else {
      this.value = ''
    }
  }

  // new String(int[] codePoints, int offset, int count)
  static fromIntArrayAndOffsetAndLength(
    intArray: number[],
    offset: number,
    length: number,
  ): string {
    const pointArr = intArray.slice(offset, offset + length)
    const hasUtf16Surrogate = pointArr.some((point) => point > 0xffff)
    if (hasUtf16Surrogate) {
      return String.fromCodePoint(...pointArr)
    } else {
      return String.fromCharCode(...pointArr)
    }
  }

  static valueOf(value: any): string {
    return String(value)
  }

  static replaceAll(
    str: string,
    regexp: string,
    replacement: string
  ): string {
    const reg = new RegExp(regexp, 'g')
    return str.replace(reg, replacement)
  }

  _getValue(): string {
    return this.value
  }

  toString(): string {
    return this.value
  }
}
