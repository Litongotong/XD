import type { InputStream } from './InputStream'
import { Reader } from './Reader'

export class InputStreamReader extends Reader {
  private inputStream: InputStream
  private encoding: string

  constructor(inputStream: InputStream, encoding?: string) {
    super()
    this.inputStream = inputStream
    this.encoding = encoding || 'utf-8'
  }

  _getInputStream() {
    return this.inputStream
  }

  _getType() {
    return InputStreamReader
  }
}
