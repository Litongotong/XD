import { getNumericValue } from '@/utils/number/unicode'
import { trim } from '@/utils/useful/trim'

export class Character {
  static toChars(codePoint: number): string {
    return String.fromCodePoint(codePoint)
  }

  static charCount(codePoint: number): number {
    return codePoint < 0x10000 ? 1 : 2
  }

  static getNumericValue(ch: string): number {
    return getNumericValue(ch)
  }

  static isWhitespace(ch: string): boolean {
    return trim(ch).length === 0
  }
}
