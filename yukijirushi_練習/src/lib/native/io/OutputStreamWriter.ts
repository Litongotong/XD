import type { OutputStream } from './OutputStream'
import { Writer } from './Writer'

export class OutputStreamWriter extends Writer {
  private out: OutputStream

  constructor(out: OutputStream) {
    super()
    this.out = out
  }

  _getOut() {
    return this.out
  }

  _getType() {
    return OutputStreamWriter
  }
}
