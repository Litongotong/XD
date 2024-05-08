import { NativeNumber } from './Number'

export class Double extends NativeNumber {
  constructor() {
    super()
  }

  static parseDouble(s: string) {
    return parseFloat(s)
  }
}
