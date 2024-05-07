import { EPrintStreamLogType, PrintStream } from '../io/PrintStream'

export class System {
  static out = PrintStream._createWithType(EPrintStreamLogType.out)
  static err = PrintStream._createWithType(EPrintStreamLogType.err)

  static arraycopy<T>(src: T[], srcPos: number, dest: T[], destPos: number, length: number) {
    for (let i = 0; i < length; i++) {
      dest[destPos + i] = src[srcPos + i]
    }
  }

  static currentTimeMillis() {
    // 13 digits
    return Date.now()
  }
}
