// 🟡 まだ最低限の実装

import { SMSMessageMgr } from '@/lib/sms/sol/sys/SMSMessageMgr'

export class JCFMessageOnWindow {
  BTN_OK = 'ok'
  BTN_CANCEL = 'cancel'
  BTN_YES = 'yes'
  BTN_NO = 'no'

  static BTN_OK = 'ok'
  static BTN_CANCEL = 'cancel'
  static BTN_YES = 'yes'
  static BTN_NO = 'no'

  showMessage(messageID: string): string
  showMessage(messageID: string, inStr: string): string
  showMessage(messageID: string, inStr: string[]): string
  showMessage(messageID: string, x: number, y: number): string
  showMessage(messageID: string, inStr: string, x: number, y: number): string
  showMessage(messageID: string, inStr: string[], x: number, y: number): string
  showMessage(para: any): string
  showMessage(...params: any[]): string {
    if (params.length === 1) {
      const asString = typeof params[0] === 'string'
      if (asString) {
        return this.__showMessage(params[0], [])
      } else {
        throw new Error('Invalid parameter')
      }
    } else if (params.length === 2) {
      const isSecondAsString = typeof params[1] === 'string'
      if (isSecondAsString) {
        return this.__showMessage(params[0], [params[1]])
      } else if (Array.isArray(params[1])) {
        return this.__showMessage(params[0], params[1])
      } else {
        throw new Error('Invalid parameter')
      }
    } else if (params.length === 3) {
      // ignore x, y
      return this.__showMessage(params[0], [])
    } else if (params.length === 4) {
      // ignore x, y
      const isSecondAsString = typeof params[1] === 'string'
      if (isSecondAsString) {
        return this.__showMessage(params[0], [params[1]])
      } else if (Array.isArray(params[1])) {
        return this.__showMessage(params[0], params[1])
      } else {
        throw new Error('Invalid parameter')
      }
    } else {
      throw new Error('Invalid parameter')
    }
  }

  private __showMessage(messageID: string, inStr: string[]) {
    const rawMsg = this.getMessage(messageID, inStr)
    const result = window.confirm(rawMsg)
    if (result) {
      return JCFMessageOnWindow.BTN_YES
    } else {
      return JCFMessageOnWindow.BTN_NO
    }
  }

  getMessage(msgCode: string): string
  getMessage(msgCode: string, detail: string): string
  getMessage(msgCode: string, details: string[]): string
  getMessage(...params: any[]): string {
    const msg = SMSMessageMgr.getMessage(params[0], params[1])
    return msg
  }

  _getName(): string {
    return 'JCFMessageOnWindow'
  }

  static _getName(): string {
    return 'JCFMessageOnWindow'
  }

  _getType() {
    return JCFMessageOnWindow as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFMessageOnWindow'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFMessageOnWindow'
  }
}
