import type { PrintStream } from "../native/io/PrintStream"
import type { PrintWriter } from "../native/io/PrintWriter"
import type { StackTraceElement } from "../native/lang/StackTraceElement"

declare global {
  interface String {
    // String.prototype.equals
    equals(value: string): boolean
    // String.prototype.compareTo
    compareTo(value: string): number
    // String.prototype.codePointCount
    codePointCount(beginIndex: number, endIndex: number): number
    // String.prototype.contains
    contains(value: string): boolean
    // String.prototype.equalsIgnoreCase
    equalsIgnoreCase(value: string): boolean
    // String.prototype.replaceAll
    replaceAll(regex: string, replacement: string): string
  }

  interface Number {
    // Number.prototype.intValue
    intValue(): number
  }

  interface Boolean {
    // Boolean.prototype.booleanValue
    booleanValue(): boolean
  }

  interface Error {
    // Error.prototype.printStackTrace
    printStackTrace(out?: PrintStream | PrintWriter): void
    // Error.prototype.setStackTrace
    setStackTrace(stackTrace: StackTraceElement[]): void
    // Error.prototype.getStackTrace
    getStackTrace(): StackTraceElement[]
    // Error.prototype.getMessage
    getMessage(): string
    // Error.prototype._getName
    _getName(): string
  }
}

export {}
