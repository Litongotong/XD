import type { JCFUTMessageDialogInterface } from './JCFUTMessageDialogInterface'

export class JCFMessageAdapter {
  private messageDialog: JCFUTMessageDialogInterface | null

  constructor() {
    this.messageDialog = null
  }

  setMessageDialog(messageDialog: JCFUTMessageDialogInterface): void {
    this.messageDialog = messageDialog
  }
}
