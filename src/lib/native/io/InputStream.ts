export class InputStream {
  private url: string
  private content: string

  constructor() {}

  _setUrl(url: string) {
    this.url = url
  }

  _getContent() {
    if (typeof this.content === 'string') {
      return this.content
    }
    // TODO: find content from file
    // TODO: or find content from indexdb, but dose it really save a file by `store()` ?
    const content = ''
    this.content = content || ''
    return this.content
  }

  static _from(url: string) {
    const ins = new InputStream()
    ins.url = url
    return ins
  }
}
