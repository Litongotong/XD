import { FilterOutputStream } from "./FilterOutputStream"

export enum EPrintStreamLogType {
  out = 'out',
  err = 'err',
}

export class PrintStream extends FilterOutputStream {
  private type?: EPrintStreamLogType

  println(s: string) {
    if (this.type === EPrintStreamLogType.out) {
      console.log(s)
    } else if (this.type === EPrintStreamLogType.err) {
      console.error(s)
    } else {
      console.log(s)
    }
  }

  static _createWithType(type: EPrintStreamLogType) {
    const ins = new PrintStream()
    ins.type = type
    return ins
  }

  _getType() {
    return PrintStream
  }
}
