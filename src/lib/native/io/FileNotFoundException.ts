import { Throwable } from '../lang/Throwable'
import { IOException } from './IOException'

export class FileNotFoundException extends IOException {
  constructor(message?: string) {
    super(message, new Throwable('FileNotFoundException'))
  }

  _getName(): string {
    return 'FileNotFoundException'
  }
}
