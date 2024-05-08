import type { byte } from "../lang/byte"
import { InputStream } from "./InputStream"

export class FileInputStream extends InputStream {
  private _filename: string

  constructor(filename: string) {
    super()
    super._setUrl(filename)
    this._filename = filename
  }

  // TODO
  read(bytes?: byte[]): number {
    throw new Error("Method not implemented.")
    if (bytes) {
      return 0
    }
    return 0
  }

  // todo
  close() {
    throw new Error("Method not implemented.")
  }
}
