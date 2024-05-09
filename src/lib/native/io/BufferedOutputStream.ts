import type { byte } from '../lang/byte'
import { FilterOutputStream } from './FilterOutputStream'
import type { OutputStream } from './OutputStream'

export class BufferedOutputStream extends FilterOutputStream {
  private outputStream: OutputStream

  constructor(outputStream: OutputStream) {
    super()
    this.outputStream = outputStream
  }

  // TODO
  write(bytes: byte[]) {
    throw new Error('Method not implemented.')
  }

  // TODO
  close() {
    throw new Error('Method not implemented.')
  }

  _getType(): any {
    return BufferedOutputStream
  }
}
