// 🟡 まだ最低限の実装

import { EViewHint } from '@/lib/adapter/interface'
import { MsisDebug } from '@/utils/debug/log'

export class JCFReturnInfo {
  // origin fields
  transitionFlag: boolean | undefined
  subsystemID: string | undefined
  deterrenceUnlockFlag: boolean

  // custom fields
  _willTransitionToScreenId: string | undefined

  constructor() {}

  setCancelTransitionEnableFlg(flg: boolean) {
    throw new Error('Method not implemented.')
  }

  getSubsystemID() {
    return this.subsystemID
  }

  setSubsystemID(subsystemID: string): void
  setSubsystemID(subsystemID: string, isOpenWindow: boolean): void
  setSubsystemID(subsystemID: string, systemName: string): void
  setSubsystemID(
    subsystemID: string,
    isOpenWindow: boolean,
    systemName: string,
  ): void
  setSubsystemID(...args: any[]) {
    if (args.length === 1) {
      return this.__setSubsystemID(args[0])
    } else if (args.length === 2) {
      const isSecondArgAsBoolean = typeof args[1] === 'boolean'
      if (isSecondArgAsBoolean) {
        return this.__setSubsystemIDWithOpenWindow(args[0], args[1])
      } else {
        return this.__setSubsystemIDWithSystemName(args[0], args[1])
      }
    } else if (args.length === 3) {
      return this.__setSubsystemIDWithOpenWindowAndSystemName(
        args[0],
        args[1],
        args[2],
      )
    } else {
      throw new Error('Invalid arguments')
    }
  }

  private __setSubsystemIDWithOpenWindowAndSystemName(
    subsystemID: string,
    isOpenWindow: boolean,
    systemName: string,
  ) {
    this.subsystemID = subsystemID
  }

  private __setSubsystemID(subsystemID: string) {
    this.setSubsystemID(subsystemID, false)
  }

  private __setSubsystemIDWithSystemName(
    subsystemID: string,
    systemName: string,
  ) {
    this.setSubsystemID(subsystemID, false, systemName)
  }

  private __setSubsystemIDWithOpenWindow(
    subsystemID: string,
    isOpenWindow: boolean,
  ) {
    if (isOpenWindow === true) {
      throw new Error('`isOpenWindow: true` not implemented.')
    }
    this.setSubsystemID(subsystemID, isOpenWindow, subsystemID)
  }

  setFocus(frameId: string, itemId: string) {
    const frameSelector = `[${EViewHint.frameId}="${frameId}"]`
    const itemSelector = `[${EViewHint.itemId}="${itemId}"]`
    const selector = `${frameSelector} ${itemSelector} input`
    const inputElm = document.querySelector(selector) as
      | HTMLInputElement
      | undefined
    if (inputElm) {
      MsisDebug.log(`setFocus: ${selector}`)
      inputElm.focus()
    }
  }

  cancelScreenTransition() {
    this.transitionFlag = false
  }

  isScreenTransited() {
    return !this.transitionFlag
  }

  setTransitionScreenID(screenId: string) {
    if (screenId?.length) {
      this._willTransitionToScreenId = screenId
    } else {
      this._willTransitionToScreenId = undefined
    }
  }

  // FIXME: what is this method ?
  setUnlockDeterrent(deterrenceUnlockFlag: boolean) {
    this.deterrenceUnlockFlag = deterrenceUnlockFlag
  }

  isScreenLockKept(): boolean {
    return this.deterrenceUnlockFlag
  }

  _getName(): string {
    return 'JCFReturnInfo'
  }

  static _getName(): string {
    return 'JCFReturnInfo'
  }

  _getType() {
    return JCFReturnInfo as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFReturnInfo'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFReturnInfo'
  }
}
