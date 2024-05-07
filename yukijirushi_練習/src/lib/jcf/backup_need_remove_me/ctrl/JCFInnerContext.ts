import { JCFSCWindowController } from './JCFSCWindowController'
import type { JCFSYManagerInterface } from './JCFSYManagerInterface'

export class JCFInnerContext {
  private windowController: JCFSCWindowController
  managerInterface: JCFSYManagerInterface

  constructor(
    windowController: JCFSCWindowController,
    managerInterface: JCFSYManagerInterface,
  ) {
    this.windowController = windowController
    this.managerInterface = managerInterface
  }

  getWindowController(): JCFSCWindowController {
    return this.windowController
  }

  getActiveWindow(): Window {
    return this.windowController.getActiveWindow()
  }

  modalDialogOpening(): void {
    this.windowController.modalDialogOpening()
  }

  modalDialogOpened(): void {
    // this.windowController.modalDialogOpened()
  }

  modalDialogClosing(): void {
    // this.windowController.modalDialogClosing()
  }

  modalDialogClosed(): void {
    // this.windowController.modalDialogClosed()
  }

  // addJCFDialogListener(listener: JCFDialogListener): void {
  //   this.windowController.addJCFDialogListener(listener)
  // }

  getManagerInterface(): JCFSYManagerInterface {
    return this.managerInterface
  }
}
