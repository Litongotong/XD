import { InputStreamReader } from './InputStreamReader'
import { Reader } from './Reader'

export class BufferedReader extends Reader {
  private reader: Reader
  
  // for lines
  private lineIndex = 0
  private lines: string[] | undefined

  constructor(reader: Reader) {
    super()
    this.reader = reader
  }

  _getType() {
    return BufferedReader
  }

  readLine() {
    const reader = this.reader
    const isInputStraemReader = reader._getType() === InputStreamReader
    if (isInputStraemReader) {
      const inputStraemReader = reader as InputStreamReader
      const inputStream = inputStraemReader._getInputStream()
      const content = inputStream._getContent()
      if (content?.length) {
        if (Array.isArray(this.lines)) {
          // pass
        } else {
          // build lines
          this.lines = content.split('\n')
        }
        const lineContent = this.lines[this.lineIndex]
        this.lineIndex++
        return lineContent
      }
    }
  }

  close() {
    // clear lines info
    this.lines = undefined
    this.lineIndex = 0
  }
}
