import { Throwable } from './Throwable'

export class Exception extends Throwable {
  constructor(message?: string, cause?: Throwable) {
    super(message, cause)
  }

  _getName(): string {
    return 'Exception'
  }
}
