/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.jcf.ctrl {
  export class JCFMessageOnWindow {
    public static CLASS_VERSION: string = 'V3L20'

    public static COPYRIGHT: string =
      'All Rights Reserved, Copyright(c) FUJITSU LIMITED 2004-2013'

    public static FUJITSU_CONFIDENTIAL: string = 'FUJITSU CONFIDENTIAL'

    static CLASS_NAME: string = 'JCFMessageOnWindow'

    static CHAR_DOLLER: string = String.fromCharCode(36)

    static ES: string = String.fromCharCode(92)

    static CHAR_N: string = String.fromCharCode(110)

    static DEFAULT_CLASS_NAME: string =
      'lib.com.fujitsu.jcf.ctrl.JCFUTMessageDefaultPanel'

    public static BTN_OK: string = 'ok'

    public static BTN_CANCEL: string = 'cancel'

    public static BTN_YES: string = 'yes'

    public static BTN_NO: string = 'no'

    /*private*/ isSuspend: boolean

    /*private*/ reserveInStr: string[]

    /*private*/ selectValue: string

    /*private*/ exclusive: any

    static MESSAGE_STRING_TYPE_VIEW: number = 0

    static MESSAGE_STRING_TYPE_ADD: number = 1

    /*private*/ reserveInAddStr: string[]

    /*private*/ reserveMessageObject: any

    /*private*/ activeclose: boolean

    /*private*/ context: lib.com.fujitsu.jcf.ctrl.JCFInnerContext

    /*private*/ reference: lib.com.fujitsu.jcf.ctrl.JCFCMReference

    /*private*/ dialog: lib.com.fujitsu.jcf.ctrl.JCFUTMessageDialogInterface

    /*private*/ sem: lib.com.fujitsu.jcf.ctrl.JCFCMSemaphore

    public constructor(
      context: lib.com.fujitsu.jcf.ctrl.JCFInnerContext,
      reference: lib.com.fujitsu.jcf.ctrl.JCFCMReference,
    ) {
      if (this.isSuspend === undefined) {
        this.isSuspend = false
      }
      if (this.reserveInStr === undefined) {
        this.reserveInStr = null
      }
      if (this.selectValue === undefined) {
        this.selectValue = null
      }
      if (this.exclusive === undefined) {
        this.exclusive = null
      }
      if (this.reserveInAddStr === undefined) {
        this.reserveInAddStr = null
      }
      if (this.reserveMessageObject === undefined) {
        this.reserveMessageObject = null
      }
      if (this.activeclose === undefined) {
        this.activeclose = false
      }
      if (this.context === undefined) {
        this.context = null
      }
      if (this.reference === undefined) {
        this.reference = null
      }
      if (this.dialog === undefined) {
        this.dialog = null
      }
      if (this.sem === undefined) {
        this.sem = null
      }
    }

    public getMessage$java_lang_String$java_lang_String_A(
      wMsgID: string,
      wMsgContents: string[],
    ): string {
      return null
    }

    public getMessage(wMsgID?: any, wMsgContents?: any): string {
      if (
        (typeof wMsgID === 'string' || wMsgID === null) &&
        ((wMsgContents != null &&
          wMsgContents instanceof <any>Array &&
          (wMsgContents.length == 0 ||
            wMsgContents[0] == null ||
            typeof wMsgContents[0] === 'string')) ||
          wMsgContents === null)
      ) {
        return <any>(
          this.getMessage$java_lang_String$java_lang_String_A(
            wMsgID,
            wMsgContents,
          )
        )
      } else if (
        (typeof wMsgID === 'string' || wMsgID === null) &&
        wMsgContents === undefined
      ) {
        return <any>this.getMessage$java_lang_String(wMsgID)
      } else throw new Error('invalid overload')
    }

    public getMessage$java_lang_String(wMsgID: string): string {
      return null
    }

    public showAsyncMessage$java_lang_String$java_lang_String_A(
      messageID: string,
      inStr: string[],
    ) {}

    public showAsyncMessage$java_lang_String$java_lang_String_A$int$int(
      messageID: string,
      inStr: string[],
      x: number,
      y: number,
    ) {}

    public showAsyncMessage(messageID?: any, inStr?: any, x?: any, y?: any) {
      if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>Array &&
          (inStr.length == 0 ||
            inStr[0] == null ||
            typeof inStr[0] === 'string')) ||
          inStr === null) &&
        (typeof x === 'number' || x === null) &&
        (typeof y === 'number' || y === null)
      ) {
        return <any>(
          this.showAsyncMessage$java_lang_String$java_lang_String_A$int$int(
            messageID,
            inStr,
            x,
            y,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>Array &&
          (inStr.length == 0 ||
            inStr[0] == null ||
            typeof inStr[0] === 'string')) ||
          inStr === null) &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showAsyncMessage$java_lang_String$java_lang_String_A(
            messageID,
            inStr,
          )
        )
      } else if (
        ((messageID != null &&
          messageID instanceof
            <any>lib.com.fujitsu.jcf.ctrl.JCFMessageParameter) ||
          messageID === null) &&
        inStr === undefined &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showAsyncMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
            messageID,
          )
        )
      } else throw new Error('invalid overload')
    }

    public disposeMessage() {}

    public isAsyncMessageShowing(): boolean {
      return false
    }

    public setMessageEventAdapter(
      adapter: lib.com.fujitsu.jcf.ctrl.JCFMessageAdapter,
    ) {}

    public clearMessageEventAdapter() {}

    public getMessageEventAdapter(): lib.com.fujitsu.jcf.ctrl.JCFMessageAdapter {
      return null
    }

    public showAsyncMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
      para: lib.com.fujitsu.jcf.ctrl.JCFMessageParameter,
    ) {}

    public getAdditionalMessage$java_lang_String(messageID: string): string {
      return null
    }

    public getAdditionalMessage$java_lang_String$java_lang_String(
      messageID: string,
      inStr: string,
    ): string {
      return null
    }

    public getAdditionalMessage(messageID?: any, inStr?: any): string {
      if (
        (typeof messageID === 'string' || messageID === null) &&
        (typeof inStr === 'string' || inStr === null)
      ) {
        return <any>(
          this.getAdditionalMessage$java_lang_String$java_lang_String(
            messageID,
            inStr,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>Array &&
          (inStr.length == 0 ||
            inStr[0] == null ||
            typeof inStr[0] === 'string')) ||
          inStr === null)
      ) {
        return <any>(
          this.getAdditionalMessage$java_lang_String$java_lang_String_A(
            messageID,
            inStr,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        inStr === undefined
      ) {
        return <any>this.getAdditionalMessage$java_lang_String(messageID)
      } else throw new Error('invalid overload')
    }

    public getAdditionalMessage$java_lang_String$java_lang_String_A(
      messageID: string,
      inStrs: string[],
    ): string {
      return null
    }

    public showMessage$java_lang_String(messageID: string): string {
      return this.showMessage$java_lang_String$java_lang_String_A(messageID, [])
    }

    public showMessage$java_lang_String$java_lang_String(
      messageID: string,
      inStr: string,
    ): string {
      const inStrArray: string[] = [inStr]
      return this.showMessage$java_lang_String$java_lang_String_A(
        messageID,
        inStrArray,
      )
    }

    public showMessage$java_lang_String$java_lang_String_A(
      messageID: string,
      inStr: string[],
    ): string {
      const point: com.java.Point = null
      return this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
        new lib.com.fujitsu.jcf.ctrl.JCFMessageParameter(
          messageID,
          inStr,
          [],
          null,
        ),
      )
    }

    public showMessage$java_lang_String$int$int(
      messageID: string,
      x: number,
      y: number,
    ): string {
      return this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
        new lib.com.fujitsu.jcf.ctrl.JCFMessageParameter(
          messageID,
          [],
          [],
          null,
          x,
          y,
        ),
      )
    }

    public showMessage$java_lang_String$java_lang_String$int$int(
      messageID: string,
      inStr: string,
      x: number,
      y: number,
    ): string {
      const inStrArray: string[] = [inStr]
      return this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
        new lib.com.fujitsu.jcf.ctrl.JCFMessageParameter(
          messageID,
          inStrArray,
          [],
          null,
          x,
          y,
        ),
      )
    }

    public showMessage$java_lang_String$java_lang_String_A$int$int(
      messageID: string,
      inStr: string[],
      x: number,
      y: number,
    ): string {
      return this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
        new lib.com.fujitsu.jcf.ctrl.JCFMessageParameter(
          messageID,
          inStr,
          [],
          null,
          x,
          y,
        ),
      )
    }

    public showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
      para: lib.com.fujitsu.jcf.ctrl.JCFMessageParameter,
    ): string {
      const obj: any = this.exclusive
      let messageID: string
      let inStr: string[]
      let inAddStr: string[]
      let point: com.java.Point
      let event: lib.com.fujitsu.jcf.ctrl.JCFEvent
      let messageObject: any
      let retInfo: string
      messageID = para.getMessageID()
      inStr = para.getInStrs()
      inAddStr = para.getInAddStrs()
      point = para.getPoint()
      event = para.getEvent()
      messageObject = para.getData()
      const param: Array<any> = <any>[]
      /* add */ param.push(messageID) > 0
      if (inStr != null) {
        for (let i: number = 0; i < inStr.length; i++) {
          /* add */ param.push(inStr[i]) > 0
        }
      }
      if (this.context == null) {
        const ise: Error = Object.defineProperty(
          new Error(
            lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
              'E1173',
            ),
          ),
          '__classes',
          {
            configurable: true,
            value: [
              'java.lang.Throwable',
              'java.lang.Object',
              'java.lang.Exception',
            ],
          },
        )
        throw ise
      }
      this.context.modalDialogOpening()
      retInfo = ''
      if (messageID == null || messageID.length === 0) {
        const iae: Error = Object.defineProperty(
          new Error(
            lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
              'E1175',
            ),
          ),
          '__classes',
          {
            configurable: true,
            value: [
              'java.lang.Throwable',
              'java.lang.Object',
              'java.lang.Exception',
            ],
          },
        )
        throw iae
      }
      if (inStr == null || inAddStr == null) {
        const iae: Error = Object.defineProperty(
          new Error(
            lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
              'E1194',
            ),
          ),
          '__classes',
          {
            configurable: true,
            value: [
              'java.lang.Throwable',
              'java.lang.Object',
              'java.lang.Exception',
            ],
          },
        )
        throw iae
      }
      if (para.isSpecifiedEvent()) {
        if (event == null) {
          const iae: Error = Object.defineProperty(
            new Error(
              lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
                'E1194',
              ),
            ),
            '__classes',
            {
              configurable: true,
              value: [
                'java.lang.Throwable',
                'java.lang.Object',
                'java.lang.Exception',
              ],
            },
          )
          throw iae
        }
        if (event.getType() !== 5) {
          const iae: Error = Object.defineProperty(
            new Error(
              lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
                'E1179',
              ),
            ),
            '__classes',
            {
              configurable: true,
              value: [
                'java.lang.Throwable',
                'java.lang.Object',
                'java.lang.Exception',
              ],
            },
          )
          throw iae
        }
      } else if (this.dialog != null) {
        const ise: Error = Object.defineProperty(
          new Error(
            lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
              'E1174',
            ),
          ),
          '__classes',
          {
            configurable: true,
            value: [
              'java.lang.Throwable',
              'java.lang.Object',
              'java.lang.Exception',
            ],
          },
        )
        throw ise
      }
      const window: com.java.Window = this.context.getActiveWindow()
      const messageInfo: lib.com.fujitsu.jcf.ctrl.JCFMessageInfo =
        this.getMessageInfo(messageID)
      if (messageInfo == null) {
        const iae: Error = Object.defineProperty(
          new Error(
            lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
              'E1176',
            ),
          ),
          '__classes',
          {
            configurable: true,
            value: [
              'java.lang.Throwable',
              'java.lang.Object',
              'java.lang.Exception',
            ],
          },
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
      if (point != null) this.dialog.setLocation(point)
      if (para.isSpecifiedEvent()) this.disposeMessage()
      this.openDialog()
      this.context.modalDialogOpened()
      this.sem.decrementSemaphore()
      retInfo = this.selectValue
      this.selectValue = null
      this.context.modalDialogClosed()
      if (
        this.activeclose &&
        !this.context.getWindowController().isDialogVisible()
      )
        this.context
          .getWindowController()
          .nativeWindowInterface.activeParentWindow()
      this.context.modalDialogClosed()
      if (
        this.activeclose &&
        !this.context.getWindowController().isDialogVisible()
      )
        this.context
          .getWindowController()
          .nativeWindowInterface.activeParentWindow()
      const param1: Array<any> = <any>[]
      /* add */ param1.push(retInfo) > 0
      return retInfo
    }

    /*private*/ openDialog() {}

    /*private*/ createDialog(
      window: com.java.Window,
      messageInfo: lib.com.fujitsu.jcf.ctrl.JCFMessageInfo,
      inStr: string[],
      inAddStr: string[],
      messageObject: any,
      b: boolean,
    ): lib.com.fujitsu.jcf.ctrl.JCFUTMessageDialogInterface {
      return null
    }

    /*private*/ getMessageInfo(
      messageID: string,
    ): lib.com.fujitsu.jcf.ctrl.JCFMessageInfo {
      const messageInfo: lib.com.fujitsu.jcf.ctrl.JCFMessageInfo =
        this.reference.getDefReference().getMessageInfo(messageID)
      return messageInfo
    }

    public showMessage$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent(
      messageID: string,
      event: lib.com.fujitsu.jcf.ctrl.JCFEvent,
    ): string {
      return this.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(
        messageID,
        [],
        event,
      )
    }

    public showMessage$java_lang_String$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent(
      messageID: string,
      inStr: string,
      event: lib.com.fujitsu.jcf.ctrl.JCFEvent,
    ): string {
      const inStrArray: string[] = [inStr]
      return this.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(
        messageID,
        inStrArray,
        event,
      )
    }

    public showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(
      messageID: string,
      inStr: string[],
      event: lib.com.fujitsu.jcf.ctrl.JCFEvent,
    ): string {
      return this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
        new lib.com.fujitsu.jcf.ctrl.JCFMessageParameter(
          messageID,
          event,
          inStr,
          [],
          null,
        ),
      )
    }

    public showMessage$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent$int$int(
      messageID: string,
      event: lib.com.fujitsu.jcf.ctrl.JCFEvent,
      x: number,
      y: number,
    ): string {
      return this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
        new lib.com.fujitsu.jcf.ctrl.JCFMessageParameter(
          messageID,
          event,
          [],
          [],
          null,
          x,
          y,
        ),
      )
    }

    public showMessage$java_lang_String$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent$int$int(
      messageID: string,
      inStr: string,
      event: lib.com.fujitsu.jcf.ctrl.JCFEvent,
      x: number,
      y: number,
    ): string {
      const inStrArray: string[] = [inStr]
      return this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
        new lib.com.fujitsu.jcf.ctrl.JCFMessageParameter(
          messageID,
          event,
          inStrArray,
          [],
          null,
          x,
          y,
        ),
      )
    }

    public showMessage(
      messageID?: any,
      inStr?: any,
      event?: any,
      x?: any,
      y?: any,
    ): string {
      if (
        (typeof messageID === 'string' || messageID === null) &&
        (typeof inStr === 'string' || inStr === null) &&
        ((event != null &&
          event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) ||
          event === null) &&
        (typeof x === 'number' || x === null) &&
        (typeof y === 'number' || y === null)
      ) {
        return <any>(
          this.showMessage$java_lang_String$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent$int$int(
            messageID,
            inStr,
            event,
            x,
            y,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>Array &&
          (inStr.length == 0 ||
            inStr[0] == null ||
            typeof inStr[0] === 'string')) ||
          inStr === null) &&
        ((event != null &&
          event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) ||
          event === null) &&
        (typeof x === 'number' || x === null) &&
        (typeof y === 'number' || y === null)
      ) {
        return <any>(
          this.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent$int$int(
            messageID,
            inStr,
            event,
            x,
            y,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        (typeof inStr === 'string' || inStr === null) &&
        (typeof event === 'number' || event === null) &&
        (typeof x === 'number' || x === null) &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$java_lang_String$int$int(
            messageID,
            inStr,
            event,
            x,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>Array &&
          (inStr.length == 0 ||
            inStr[0] == null ||
            typeof inStr[0] === 'string')) ||
          inStr === null) &&
        (typeof event === 'number' || event === null) &&
        (typeof x === 'number' || x === null) &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$java_lang_String_A$int$int(
            messageID,
            inStr,
            event,
            x,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) ||
          inStr === null) &&
        (typeof event === 'number' || event === null) &&
        (typeof x === 'number' || x === null) &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent$int$int(
            messageID,
            inStr,
            event,
            x,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        (typeof inStr === 'string' || inStr === null) &&
        ((event != null &&
          event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) ||
          event === null) &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent(
            messageID,
            inStr,
            event,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>Array &&
          (inStr.length == 0 ||
            inStr[0] == null ||
            typeof inStr[0] === 'string')) ||
          inStr === null) &&
        ((event != null &&
          event instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) ||
          event === null) &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent(
            messageID,
            inStr,
            event,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        (typeof inStr === 'number' || inStr === null) &&
        (typeof event === 'number' || event === null) &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$int$int(messageID, inStr, event)
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        (typeof inStr === 'string' || inStr === null) &&
        event === undefined &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$java_lang_String(messageID, inStr)
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>Array &&
          (inStr.length == 0 ||
            inStr[0] == null ||
            typeof inStr[0] === 'string')) ||
          inStr === null) &&
        event === undefined &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$java_lang_String_A(messageID, inStr)
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        ((inStr != null &&
          inStr instanceof <any>lib.com.fujitsu.jcf.ctrl.JCFEvent) ||
          inStr === null) &&
        event === undefined &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$java_lang_String$com_fujitsu_jcf_ctrl_JCFEvent(
            messageID,
            inStr,
          )
        )
      } else if (
        (typeof messageID === 'string' || messageID === null) &&
        inStr === undefined &&
        event === undefined &&
        x === undefined &&
        y === undefined
      ) {
        return <any>this.showMessage$java_lang_String(messageID)
      } else if (
        ((messageID != null &&
          messageID instanceof
            <any>lib.com.fujitsu.jcf.ctrl.JCFMessageParameter) ||
          messageID === null) &&
        inStr === undefined &&
        event === undefined &&
        x === undefined &&
        y === undefined
      ) {
        return <any>(
          this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(messageID)
        )
      } else throw new Error('invalid overload')
    }

    public showMessage$java_lang_String$java_lang_String_A$com_fujitsu_jcf_ctrl_JCFEvent$int$int(
      messageID: string,
      inStr: string[],
      event: lib.com.fujitsu.jcf.ctrl.JCFEvent,
      x: number,
      y: number,
    ): string {
      return this.showMessage$com_fujitsu_jcf_ctrl_JCFMessageParameter(
        new lib.com.fujitsu.jcf.ctrl.JCFMessageParameter(
          messageID,
          event,
          inStr,
          [],
          null,
          x,
          y,
        ),
      )
    }
  }
  JCFMessageOnWindow['__class'] = 'lib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow'
}
