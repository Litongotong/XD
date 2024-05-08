import { Matcher } from "./Matcher"

export class Pattern {
  private regex: RegExp

  _setRegex(regex: string) {
    this.regex = new RegExp(regex)
  }

  static compile(regex: string) {
    const pattern = new Pattern()
    pattern._setRegex(regex)
    return pattern
  }

  matcher(input: string) {
    return Matcher._from(this.regex, input)
  }
}
