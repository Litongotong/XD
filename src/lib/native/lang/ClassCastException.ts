import { RuntimeException } from './RuntimeException'
import { Throwable } from './Throwable'

export class ClassCastException extends RuntimeException {
  constructor(msg?: string) {
    super(msg, new Throwable("ClassCastException"))
  }

  _getName(): string {
    return 'ClassCastException'
  }
}
