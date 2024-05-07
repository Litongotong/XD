import { ArrayList } from '@/lib/native/util/ArrayList'

export interface JCFSYNativeWindowInterface {
  activeWindow(): void

  abort(code: number): void

  addWindowActivatedListener(): void

  removeWindowActivatedListener(): void

  closeChildWindow(): void

  showDocument(arraylist: ArrayList): void

  callScript(s: string, aobj: any[]): void

  activeParentWindow(): void
}
