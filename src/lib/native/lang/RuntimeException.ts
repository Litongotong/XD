import { Exception } from './Exception'
import type { Throwable } from './Throwable'

export class RuntimeException extends Exception {
  constructor(message?: string, cause?: Throwable) {
    super(message, cause)
  }

  _getName(): string {
    return 'RuntimeException'
  }
}
