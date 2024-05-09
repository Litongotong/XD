// 🟡 参考用

/******************************************************************************
 * jcf.ctrl.JCFMessageOnWindow
 *
 * プログラム名     : jcf.ctrl.JCFMessageOnWindow
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFMessageOnWindow を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFCMReference } from './JCFCMReference'
import { JCFEvent } from './JCFEvent'
import { JCFMessageParameter } from './JCFMessageParameter'
import { JCFIllegalStateException } from './JCFIllegalStateException'
import { JCFIllegalArgumentException } from './JCFIllegalArgumentException'
import { JCFCMMessageProperties } from './JCFCMMessageProperties'
import { JCFDebug } from './JCFDebug'
import { JCFInnerContext } from './JCFInnerContext'
import type { JCFUTMessageDialogInterface } from './JCFUTMessageDialogInterface'
import { JCFMessageInfo } from './JCFMessageInfo'
import { ArrayList } from '@/lib/native/util/ArrayList'

class JCFMessageOnWindow {
  public static readonly BTN_OK: string = 'ok'
  public static readonly BTN_CANCEL: string = 'cancel'
  public static readonly BTN_YES: string = 'yes'
  public static readonly BTN_NO: string = 'no'

  private reference: JCFCMReference
  private context: JCFInnerContext
  private dialog: JCFUTMessageDialogInterface | null = null
  private selectValue: string | null = null

  constructor(context: JCFInnerContext, reference: JCFCMReference) {
    this.context = context
    this.reference = reference
  }

  showMessage(messageID: string): string
  showMessage(messageID: string, inStr: string): string
  showMessage(messageID: string, inStr: string[]): string
  showMessage(messageID: string, x: number, y: number): string
  showMessage(messageID: string, inStr: string, x: number, y: number): string
  showMessage(messageID: string, inStr: string[], x: number, y: number): string
  showMessage(para: JCFMessageParameter): string
  showMessage(messageID: string, event: JCFEvent): string
  showMessage(messageID: string, inStr: string, event: JCFEvent): string
  showMessage(messageID: string, inStr: string[], event: JCFEvent): string
  showMessage(messageID: string, event: JCFEvent, x: number, y: number): string
  showMessage(
    messageID: string,
    inStr: string,
    event: JCFEvent,
    x: number,
    y: number,
  ): string
  showMessage(
    messageID: string,
    inStr: string[],
    event: JCFEvent,
    x: number,
    y: number,
  ): string

  showMessage(...args: any[]): string {
    if (args.length === 1 && typeof args[0] === 'string') {
      // showMessage(String messageID)
      return this.__showMessageById(args[0])
    } else if (
      args.length === 2 &&
      typeof args[0] === 'string' &&
      typeof args[1] === 'string'
    ) {
      // showMessage(String messageID, String inStr)
      return this.__showMessageInStr(args[0], args[1])
    } else if (
      args.length === 2 &&
      typeof args[0] === 'string' &&
      Array.isArray(args[1])
    ) {
      // showMessage(String messageID, String[] inStr)
      return this.__showMessageArrayInStr(args[0], args[1])
    } else if (
      args.length === 3 &&
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number'
    ) {
      // showMessage(String messageID, int x, int y)
      return this.__showMessageByXY(args[0], args[1], args[2])
    } else if (
      args.length === 4 &&
      typeof args[0] === 'string' &&
      typeof args[1] === 'string' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number'
    ) {
      // showMessage(String messageID, String inStr, int x, int y)
      return this.__showMessageInStrXY(args[0], args[1], args[2], args[3])
    } else if (
      args.length === 4 &&
      typeof args[0] === 'string' &&
      Array.isArray(args[1]) &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number'
    ) {
      // showMessage(String messageID, String[] inStr, int x, int y)
      return this.__showMessageArrayInStrXY(args[0], args[1], args[2], args[3])
    } else if (args.length === 1 && args[0] instanceof JCFMessageParameter) {
      // showMessage(JCFMessageParameter para)
      return this.__showMessageParameter(args[0])
    } else if (
      args.length === 2 &&
      typeof args[0] === 'string' &&
      args[1] instanceof JCFEvent
    ) {
      // showMessage(String messageID, JCFEvent event)
      return this.__showMessageByEvent(args[0], args[1])
    } else if (
      args.length === 3 &&
      typeof args[0] === 'string' &&
      typeof args[1] === 'string' &&
      args[2] instanceof JCFEvent
    ) {
      // showMessage(String messageID, String inStr, JCFEvent event)
      return this.__showMessageInStrEvent(args[0], args[1], args[2])
    } else if (
      args.length === 3 &&
      typeof args[0] === 'string' &&
      Array.isArray(args[1]) &&
      args[2] instanceof JCFEvent
    ) {
      // showMessage(String messageID, String inStr[], JCFEvent event)
      return this.__showMessageArrayInStrEvent(args[0], args[1], args[2])
    } else if (
      args.length === 4 &&
      typeof args[0] === 'string' &&
      args[1] instanceof JCFEvent &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number'
    ) {
      // showMessage(String messageID, JCFEvent event, int x, int y)
      return this.__showMessageEventXY(args[0], args[1], args[2], args[3])
    } else if (
      args.length === 5 &&
      typeof args[0] === 'string' &&
      typeof args[1] === 'string' &&
      args[2] instanceof JCFEvent &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number'
    ) {
      // showMessage(String messageID, String inStr, JCFEvent event, int x, int y)
      return this.__showMessageInStrEventXY(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
      )
    } else {
      // showMessage(String messageID, String inStr[], JCFEvent event, int x, int y)
      return this.__showMessageArrayInStrEventXY(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
      )
    }
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID)
   * @param messageID
   */
  private __showMessageById(messageID: string): string {
    return this.showMessage(messageID, [])
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, String inStr)
   * @param messageID
   * @param inStr
   */
  private __showMessageInStr(messageID: string, inStr: string): string {
    const inStrArray: string[] = [inStr]
    return this.showMessage(messageID, inStrArray)
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, String[] inStr)
   * @param messageID
   * @param inStr
   */
  private __showMessageArrayInStr(messageID: string, inStr: string[]): string {
    // java.awt.Point point = null; TODO
    return this.showMessage(new JCFMessageParameter(messageID, inStr, [], null))
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, int x, int y)
   * @param messageID
   * @param x
   * @param y
   */
  private __showMessageByXY(messageID: string, x: number, y: number): string {
    return this.showMessage(
      new JCFMessageParameter(messageID, [], [], null, x, y),
    )
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, String inStr, int x, int y)
   * @param messageID
   * @param inStr
   * @param x
   * @param y
   */
  private __showMessageInStrXY(
    messageID: string,
    inStr: string,
    x: number,
    y: number,
  ): string {
    const inStrArray: string[] = [inStr]
    return this.showMessage(
      new JCFMessageParameter(messageID, inStrArray, [], null, x, y),
    )
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, String[] inStr, int x, int y)
   * @param messageID
   * @param inStr
   * @param x
   * @param y
   */
  private __showMessageArrayInStrXY(
    messageID: string,
    inStr: string[],
    x: number,
    y: number,
  ): string {
    return this.showMessage(
      new JCFMessageParameter(messageID, inStr, [], null, x, y),
    )
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(JCFMessageParameter para)
   * @param para
   */
  private __showMessageParameter(para: JCFMessageParameter): string {
    let messageID: string
    let inStr: string[]
    let inAddStr: string[]
    // let point: any // TODO java.awt.Point
    let event: JCFEvent | null
    let messageObject: any
    let retInfo: string

    this.validityCheckOfRequester('showMessage')

    messageID = para.getMessageID()
    inStr = para.getInStrs()
    inAddStr = para.getInAddStrs()
    // point = para.getPoint()
    event = para.getEvent()
    messageObject = para.getData()

    let param: any[] = [messageID]
    if (inStr !== null) {
      for (let i = 0; i < inStr.length; i++) {
        param.push(inStr[i])
      }
    }

    JCFDebug.write(
      'JCFMessageOnWindow',
      'showMessage',
      param,
      1025,
      '',
      this.reference.getSubsystemID(),
      this.reference.getWindowID(),
    )

    if (this.context == null) {
      const ise: JCFIllegalStateException = new JCFIllegalStateException(
        JCFCMMessageProperties.getExceptionMessage('E1173'),
      )
      JCFDebug.write(
        'JCFMessageOnWindow',
        'showMessage',
        ise,
        1282,
        '',
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw ise
    }

    this.context.modalDialogOpening()
    retInfo = ''

    if (messageID === null || messageID.length === 0) {
      const iae: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1175'),
      )
      JCFDebug.write(
        'JCFMessageOnWindow',
        'showMessage',
        iae,
        1282,
        '',
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw iae
    }

    if (inStr === null || inAddStr === null) {
      const iae: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1194'),
      )
      JCFDebug.write(
        'JCFMessageOnWindow',
        'showMessage',
        iae,
        1282,
        '',
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw iae
    }

    if (para.isSpecifiedEvent()) {
      if (event === null) {
        const iae: JCFIllegalArgumentException =
          new JCFIllegalArgumentException(
            JCFCMMessageProperties.getExceptionMessage('E1194'),
          )
        JCFDebug.write(
          'JCFMessageOnWindow',
          'showMessage',
          iae,
          1282,
          '',
          this.reference.getSubsystemID(),
          this.reference.getWindowID(),
        )
        throw iae
      }

      if (event.getType() !== 5) {
        const iae: JCFIllegalArgumentException =
          new JCFIllegalArgumentException(
            JCFCMMessageProperties.getExceptionMessage('E1179'),
          )
        JCFDebug.write(
          'JCFMessageOnWindow',
          'showMessage',
          iae,
          1282,
          '',
          this.reference.getSubsystemID(),
          this.reference.getWindowID(),
        )
        throw iae
      }
    }

    const window = this.context.getActiveWindow()
    const messageInfo = this.getMessageInfo(messageID)

    if (messageInfo === null) {
      const iae: JCFIllegalArgumentException = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1176'),
      )
      JCFDebug.write(
        'JCFMessageOnWindow',
        'showMessage',
        iae,
        1282,
        '',
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw iae
    }

    this.dialog = this.createDialog(
      window,
      messageInfo,
      inStr,
      inAddStr,
      messageObject,
      true,
    )

    if (para.isSpecifiedEvent()) {
      this.disposeMessage()
    }

    retInfo = this.selectValue as string
    this.selectValue = null

    param = [retInfo]
    JCFDebug.write(
      'JCFMessageOnWindow',
      'showMessage',
      param,
      1026,
      '',
      this.reference.getSubsystemID(),
      this.reference.getWindowID(),
    )
    return retInfo
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, JCFEvent event)
   * @param messageID
   * @param event
   */
  private __showMessageByEvent(messageID: string, event: JCFEvent): string {
    return this.showMessage(messageID, [], event)
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, String inStr, JCFEvent event)
   * @param messageID
   * @param inStr
   * @param event
   */
  private __showMessageInStrEvent(
    messageID: string,
    inStr: string,
    event: JCFEvent,
  ): string {
    const inStrArray: string[] = [inStr]
    return this.showMessage(messageID, inStrArray, event)
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, String inStr[], JCFEvent event)
   * @param messageID
   * @param inStr
   * @param event
   */
  private __showMessageArrayInStrEvent(
    messageID: string,
    inStr: string[],
    event: JCFEvent,
  ): string {
    return this.showMessage(
      new JCFMessageParameter(messageID, event, inStr, [], null),
    )
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, JCFEvent event, int x, int y)
   * @param messageID
   * @param event
   * @param x
   * @param y
   */
  private __showMessageEventXY(
    messageID: string,
    event: JCFEvent,
    x: number,
    y: number,
  ): string {
    return this.showMessage(
      new JCFMessageParameter(messageID, event, [], [], null, x, y),
    )
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, String inStr, JCFEvent event, int x, int y)
   * @param messageID
   * @param inStr
   * @param event
   * @param x
   * @param y
   */
  private __showMessageInStrEventXY(
    messageID: string,
    inStr: string,
    event: JCFEvent,
    x: number,
    y: number,
  ): string {
    const inStrArray: string[] = [inStr]
    return this.showMessage(
      new JCFMessageParameter(messageID, event, inStrArray, [], null, x, y),
    )
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::showMessage(String messageID, String inStr[], JCFEvent event, int x, int y)
   * @param messageID
   * @param inStr
   * @param event
   * @param x
   * @param y
   */
  private __showMessageArrayInStrEventXY(
    messageID: string,
    inStr: string[],
    event: JCFEvent,
    x: number,
    y: number,
  ): string {
    return this.showMessage(
      new JCFMessageParameter(messageID, event, inStr, [], null, x, y),
    )
  }

  disposeMessage(): void {
    this.validityCheckOfRequester('disposeMessage')
    let param = new ArrayList(0)
    JCFDebug.write(
      'JCFMessageOnWindow',
      'disposeMessage',
      param,
      1025,
      '',
      this.reference.getSubsystemID(),
      this.reference.getWindowID(),
    )

    if (this.context == null) {
      const ise: JCFIllegalStateException = new JCFIllegalStateException(
        JCFCMMessageProperties.getExceptionMessage('E1173'),
      )
      JCFDebug.write(
        'JCFMessageOnWindow',
        'disposeMessage',
        ise,
        1282,
        '',
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw ise
    }
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::getMessage(String messageID)
   */
  getMessage(messageID: string): string
  /**
   * jcf.ctrl.JCFMessageOnWindow::getMessage(String messageID, String inStr)
   */
  getMessage(messageID: string, inStr: string): string
  /**
   * jcf.ctrl.JCFMessageOnWindow::getMessage(String messageID, String[] inStr)
   */
  getMessage(messageID: string, inStr: string[]): string

  getMessage(messageID: string, inStr?: string | string[]): string {
    if (inStr === undefined) {
      // getMessage(String messageID)
      return this.__getMessage(messageID, [], 0)
    } else if (typeof inStr === 'string') {
      // getMessage(String messageID, String inStr)
      return this.__getMessage(messageID, [inStr], 0)
    } else {
      // getMessage(String messageID, String[] inStr)
      return this.__getMessage(messageID, inStr, 0)
    }
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::getMessage(String messageID, String[] inStr, int type)
   */
  private __getMessage(
    messageID: string,
    inStr: string[],
    type: number,
  ): string {
    this.validityCheckOfRequester('getMessage')

    let param = new ArrayList()
    param.add(messageID)
    if (inStr !== null) {
      for (let i = 0; i < inStr.length; i++) {
        param.add(inStr[i])
      }
    }

    JCFDebug.write(
      'JCFMessageOnWindow',
      'getMessage',
      param,
      1025,
      '',
      this.reference.getSubsystemID(),
      this.reference.getWindowID(),
    )
    let iae: JCFIllegalArgumentException

    if (messageID !== null && messageID.length !== 0) {
      if (inStr === null) {
        iae = new JCFIllegalArgumentException(
          JCFCMMessageProperties.getExceptionMessage('E1194'),
        )
        JCFDebug.write(
          'JCFMessageOnWindow',
          'getMessage',
          iae,
          1282,
          '',
          this.reference.getSubsystemID(),
          this.reference.getWindowID(),
        )
        throw iae
      } else {
        const messageInfo = this.getMessageInfo(messageID)
        if (messageInfo === null) {
          iae = new JCFIllegalArgumentException(
            JCFCMMessageProperties.getExceptionMessage('E1176'),
          )
          JCFDebug.write(
            'JCFMessageOnWindow',
            'getMessage',
            iae,
            1282,
            '',
            this.reference.getSubsystemID(),
            this.reference.getWindowID(),
          )
          throw iae
        } else {
          let message: string = ''
          switch (type) {
            case 0:
              message = this.getMessageString(messageInfo.msg, inStr)
              break
            case 1:
              message = this.getMessageString(messageInfo.addValue, inStr)
              break
          }

          param = new ArrayList()
          param.add(message)
          JCFDebug.write(
            'JCFMessageOnWindow',
            'getMessage',
            param,
            1026,
            '',
            this.reference.getSubsystemID(),
            this.reference.getWindowID(),
          )

          return message
        }
      }
    } else {
      iae = new JCFIllegalArgumentException(
        JCFCMMessageProperties.getExceptionMessage('E1175'),
      )
      JCFDebug.write(
        'JCFMessageOnWindow',
        'getMessage',
        iae,
        1282,
        '',
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw iae
    }
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::validityCheckOfRequester(String methodName)
   * @param methodName
   */
  private validityCheckOfRequester(methodName: string): boolean {
    if (this.context == null) {
      const ise: JCFIllegalStateException = new JCFIllegalStateException(
        JCFCMMessageProperties.getExceptionMessage('E1173'),
      )
      JCFDebug.write(
        'JCFMessageOnWindow',
        methodName,
        ise,
        1282,
        JCFCMMessageProperties.getExceptionMessage('E1282'),
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw ise
    }
    if (!this.context.getManagerInterface().isDispatchThread()) {
      const ise: JCFIllegalStateException = new JCFIllegalStateException(
        JCFCMMessageProperties.getExceptionMessage('E1225'),
      )
      JCFDebug.write(
        'JCFMessageOnWindow',
        methodName,
        ise,
        1282,
        JCFCMMessageProperties.getExceptionMessage('E1283'),
        this.reference.getSubsystemID(),
        this.reference.getWindowID(),
      )
      throw ise
    } else {
      return true
    }
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::getMessageInfo(String messageID)
   * @param messageID
   */
  private getMessageInfo(messageID: string): JCFMessageInfo {
    return this.reference.getDefReference().getMessageInfo(messageID)
  }

  private createDialog(
    window: any,
    messageInfo: JCFMessageInfo,
    inStr: string[],
    inAddStr: string[],
    messageObject: any,
    isSync: boolean,
  ): JCFUTMessageDialogInterface {
    return new Object() as JCFUTMessageDialogInterface
  }

  /**
   * jcf.ctrl.JCFMessageOnWindow::getMessageString(String msg, String[] inStr)
   */
  private getMessageString(msg: string, inStr: string[]): string {
    if (msg === null) {
      msg = ''
    }

    let outMsg = ''
    let index = 0

    let es: number
    let c: string
    for (let i = 0; i < msg.length; i = es + 2) {
      es = msg.indexOf('\\', i)
      if (es < 0) {
        msg += msg.substring(i)
        break
      }

      if (es + 1 >= msg.length) {
        msg += msg.substring(es)
        break
      }

      msg += msg.substring(i, es)
      c = msg.charAt(es + 1)
      if (c === 'n') {
        msg += '\n'
      } else if (c === '\\') {
        msg += '\\'
      } else {
        msg += '\\' + c
      }
    }

    for (let i = 0; i < msg.length; i = es + 2) {
      es = msg.indexOf('$', i)
      if (es < 0) {
        outMsg += msg.substring(i)
        break
      }

      if (es + 1 >= msg.length) {
        outMsg += msg.substring(i, es)
        if (inStr.length > index) {
          outMsg += inStr[index]
          index++
        }
        break
      }

      outMsg += msg.substring(i, es)
      c = msg.charAt(es + 1)
      if (c === '$') {
        outMsg += '$'
      } else {
        if (inStr.length > index) {
          outMsg += inStr[index]
          index++
        }
        outMsg += c
      }
    }

    return outMsg
  }
}
