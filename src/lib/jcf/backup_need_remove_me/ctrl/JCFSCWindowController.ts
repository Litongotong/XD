import { JCFCMReference } from './JCFCMReference'
import { JCFDTManager } from './JCFDTManager'
import { JCFSCScreenManager } from './JCFSCScreenManager'
import { JCFSCLayoutManager } from './JCFSCLayoutManager'
import type { JCFSYNativeWindowInterface } from './JCFSYNativeWindowInterface'

export class JCFSCWindowController {
  private dialogVisibleFlg: boolean
  nativeWindowInterface: JCFSYNativeWindowInterface
  private messageVisibleFlg: boolean

  constructor(
    reference: JCFCMReference,
    dataManager: JCFDTManager,
    screenManager: JCFSCScreenManager,
    layoutManager: JCFSCLayoutManager,
    // baseContainer: Container,
    // baseFrame: Frame,
    nativeWindowInterface: JCFSYNativeWindowInterface,
  ) {
    this.dialogVisibleFlg = false
    this.nativeWindowInterface = nativeWindowInterface
    this.messageVisibleFlg = false
  }

  getActiveWindow(): any {}

  isDialogVisible(): boolean {
    return this.dialogVisibleFlg
  }

  modalDialogOpening(): void {
    this.messageVisibleFlg = true
  }
}
