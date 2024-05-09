export class StringTokenizer {
  private str: string
  private delims: string[]
  private index: number = 0

  constructor(str: string, delim: string) {
    this.str = str
    this.delims = delim.split('')
  }

  hasMoreTokens(): boolean {
    const tailStr = this.str.slice(this.index)
    // find next
    for (let i = 0; i < tailStr.length; i++) {
      if (this.delims.includes(tailStr[i])) {
        return true
      }
    }
    return false
  }

  nextToken(): string {
    const tailStr = this.str.slice(this.index)
    let nextDelimIndex = tailStr.length
    for (let i = 0; i < tailStr.length; i++) {
      if (this.delims.includes(tailStr[i])) {
        nextDelimIndex = i
        break
      }
    }
    const token = tailStr.slice(0, nextDelimIndex)
    this.index += nextDelimIndex + 1
    return token
  }
}
