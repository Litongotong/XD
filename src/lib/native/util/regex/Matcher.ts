export class Matcher {
  constructor() {}

  private regexp: RegExp
  private input: string

  _setRegex(regex: RegExp) {
    this.regexp = regex
  }

  _setInput(input: string) {
    this.input = input
  }

  static _from(regex: RegExp, input: string) {
    const matcher = new Matcher()
    matcher._setRegex(regex)
    matcher._setInput(input)
    return matcher
  }

  matches(): boolean {
    return this.regexp.test(this.input)
  }
}
