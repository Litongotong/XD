import { Writer } from './Writer'

export class PrintWriter extends Writer {
  constructor() {
    super()
  }

  _getType() {
    return PrintWriter
  }

  println(str: string) {
    console.log(str)
  }
}
