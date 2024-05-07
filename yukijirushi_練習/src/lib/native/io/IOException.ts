import { Exception } from '../lang/Exception'
import type { Throwable } from '../lang/Throwable'

export class IOException extends Exception {
  constructor(message?: string, cause?: Throwable) {
    super(message, cause)
  }

  _getName(): string {
    return 'IOException'
  }
}
