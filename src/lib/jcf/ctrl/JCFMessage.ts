// 🟡 まだ最低限の実装

import { JCFMessageOnWindow } from './JCFMessageOnWindow'

export class JCFMessage {
  static getMessageForWindowID(): JCFMessageOnWindow {
    const ins = new JCFMessageOnWindow()
    return ins
  }

  _getName(): string {
    return 'JCFMessage'
  }

  static _getName(): string {
    return 'JCFMessage'
  }

  _getType() {
    return JCFMessage as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFMessage'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFMessage'
  }
}
