export class StackTraceElement {
  declaringClass: string
  methodName: string
  fileName: string
  lineNumber: number

  constructor(
    declaringClass: string,
    methodName: string,
    fileName: string,
    lineNumber: number,
  ) {
    this.declaringClass = declaringClass
    this.methodName = methodName
    this.fileName = fileName
    this.lineNumber = lineNumber
  }
}
