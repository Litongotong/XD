import { RuntimeException } from './RuntimeException'
import { Throwable } from './Throwable'

export class NullPointerException extends RuntimeException {
  constructor(message?: string) {
    super(message, new Throwable('NullPointerException'))
  }

  _getName(): string {
    return 'NullPointerException'
  }
}
