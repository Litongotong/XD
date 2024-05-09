export class NativeFile {
  private pathname: string
  static readonly separator: string = '\\'

  constructor(pathname: string) {
    this.pathname = pathname
  }

  // TODO
  length(): number {
    throw new Error('Method not implemented.')
    return 0
  }

  // todo
  delete() {
    throw new Error('Method not implemented.')
    return true
  }

  // todo
  list() {
    throw new Error('Method not implemented.')
    return []
  }

  // TODO
  getName(): string {
    throw new Error('Method not implemented.')
    return ''
  }

  // TODO
  getParent(): string {
    throw new Error('Method not implemented.')
    return ''
  }
}
