import { OutputStream } from "./OutputStream"

export class FileOutputStream extends OutputStream {
  private filename: string

  constructor(filename: string) {
    super()
    this.filename = filename
  }

  _getFilename() {
    return this.filename
  }

  _getType() {
    return FileOutputStream
  }
}
