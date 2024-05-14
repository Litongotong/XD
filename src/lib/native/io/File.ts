export class NativeFile {
  private pathname: string

  _file?: File
  
  _dirName?: string
  _listFile?: File[]

  constructor(pathname: string) {
    this.pathname = pathname
  }

  length(): number {
    return this._file?.length || 0
  }

  delete() {
    throw new Error('Method not implemented.')
  }

  list(): string[] {
    if (this._listFile?.length) {
      return this._listFile.map(file => file?.name).filter(Boolean) as string[]
    }
    return []
  }

  getName(): string {
    return this._file?.name || ''
  }

  getParent(): string {
    if (this._dirName?.length) {
      return this._dirName
    }
    return ''
  }
}
