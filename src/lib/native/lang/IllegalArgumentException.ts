import { RuntimeException } from './RuntimeException'
import type { Throwable } from './Throwable'

export class IllegalArgumentException extends RuntimeException {
  constructor(message?: string, cause?: Throwable) {
    super(message, cause)
  }

  _getName(): string {
    return 'IllegalArgumentException'
  }
}
