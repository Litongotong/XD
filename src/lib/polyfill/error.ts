import { PrintStream } from '../native/io/PrintStream'
import type { PrintWriter } from '../native/io/PrintWriter'
import { StackTraceElement } from '../native/lang/StackTraceElement'

Error.prototype.printStackTrace = function (out?: PrintStream | PrintWriter) {
  if (!out) {
    console.error(this.stack)
  } else {
    const isPrintStream = out?._getType?.() === PrintStream
    if (isPrintStream) {
      ;(out as PrintStream).println(this.stack || 'Unknow error')
    } else {
      // is PrintWriter
      ;(out as PrintWriter).println(this.stack || 'Unknow error')
    }
  }
}

Error.prototype.setStackTrace = function (stackTrace: StackTraceElement[]) {
  const newStack = stackTrace
    .map(({ declaringClass, methodName, fileName, lineNumber }) => {
      return `    at ${declaringClass}.${methodName} (${fileName}:${lineNumber})`
    })
    .join('\n')
  this.stack = newStack
}

Error.prototype.getStackTrace = function (): StackTraceElement[] {
  const stackTrace = new StackTraceElement(
    this.stack || 'Unknow error',
    'getStackTrace',
    'Throwable.ts',
    0,
  )
  return [stackTrace]
}

Error.prototype.getMessage = function (): string {
  return this.message
}

Error.prototype._getName = function (): string {
  return 'Error'
}
