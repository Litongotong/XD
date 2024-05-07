import { IndexOutOfBoundsException } from './IndexOutOfBoundsException'
import { Throwable } from './Throwable'

export class StringIndexOutOfBoundsException extends IndexOutOfBoundsException {
  constructor(message?: string) {
    super(message, new Throwable('StringIndexOutOfBoundsException'))
  }

  _getName(): string {
    return 'StringIndexOutOfBoundsException'
  }
}
