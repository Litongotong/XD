import { IllegalArgumentException } from './IllegalArgumentException'

export class NumberFormatException extends IllegalArgumentException {
  constructor(s?: string) {
    super(s)
  }

  _getName(): string {
    return 'NumberFormatException'
  }
}
