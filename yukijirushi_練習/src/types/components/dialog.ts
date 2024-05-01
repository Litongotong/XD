import type { Button } from './button'
export namespace Dialog {
  export interface Property {
    showDialog?: boolean
    dialogButtonConfigs?: Button.Config[]
    dialogWidth?: string
    dialogHeight?: string
    describeText?: string
    describeHeight?: string
    closeButtonDisabled?: boolean
    closeButtonWidth?: string | number
    closeButtonHeight?: string | number
  }
}
