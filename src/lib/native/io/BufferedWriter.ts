import { FileSystem } from '@/utils/filesystem'
import { FileOutputStream } from './FileOutputStream'
import { OutputStreamWriter } from './OutputStreamWriter'
import { Writer } from './Writer'

const ENTER_CHAR = '\n'

export class BufferedWriter extends Writer {
  private writer: Writer
  constructor(writer: Writer) {
    super()
    this.writer = writer
  }

  private _getFileSystemFilename() {
    const writer = this.writer
    const isOutputStreamWriter = writer._getType() === OutputStreamWriter
    if (isOutputStreamWriter) {
      const outputStreamWriter = writer as OutputStreamWriter
      const out = outputStreamWriter._getOut()
      const isFileOutputStream = out._getType() === FileOutputStream
      if (isFileOutputStream) {
        const fileoutputStraem = out as FileOutputStream
        const filename = fileoutputStraem._getFilename()
        return filename
      }
    }
  }

  // FIXME: maybe we need impl the `write` method to parent class, not this class.
  write(str: string) {
    const filename = this._getFileSystemFilename()
    if (filename?.length) {
      FileSystem.write(filename, str, { append: true })
    }
  }

  close() {
    // not need implemented
  }

  newLine() {
    const filename = this._getFileSystemFilename()
    if (filename?.length) {
      FileSystem.write(filename, ENTER_CHAR, { append: true })
    }
  }

  _getType() {
    return BufferedWriter
  }
}
