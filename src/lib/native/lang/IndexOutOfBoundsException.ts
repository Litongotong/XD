import { RuntimeException } from './RuntimeException'
import type { Throwable } from './Throwable'

export class IndexOutOfBoundsException extends RuntimeException {
  constructor(message?: string, cause?: Throwable) {
    super(message, cause)
  }

  _getName(): string {
    return 'IndexOutOfBoundsException'
  }
}
