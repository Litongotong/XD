import type { JCFDialogInterface } from '../gui/JCFDialogInterface'
import type { JCFMessagePanelInterface } from './JCFMessagePanelInterface'

export interface JCFUTMessageDialogInterface extends JCFDialogInterface {
  getMessage(): string
  getAdditionalMessage(): string
  getMessageObject(): any
  getMessageID(): string
  getMessagePanel(): JCFMessagePanelInterface
  getWindowID(): string
  getSubsystemID(): string
  isMessageDialogClosable(): boolean
  setVisible(flag: boolean): void
  isActive(): boolean
}
