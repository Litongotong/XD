import type { JCFSYNativeWindowInterface } from "./JCFSYNativeWindowInterface"

export interface JCFMainInterface extends JCFSYNativeWindowInterface {
  getBaseContainer(): JCFMainInterface

  getModelType(): number

  callScriptRealTime(var1: string, var2: any[]): void

  existChildWindow(var1?: string): boolean
}
