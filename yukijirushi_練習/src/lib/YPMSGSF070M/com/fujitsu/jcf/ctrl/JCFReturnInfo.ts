/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.jcf.ctrl {
  export class JCFReturnInfo {
    public setTransitionScreenID(errorScreenId: string) {}

    public cancelScreenTransition() {}

    public setSubsystemID$java_lang_String$boolean(
      mENU_SUBSYSTEM_ID: string,
      b: boolean,
    ) {}

    public setSubsystemID(mENU_SUBSYSTEM_ID?: any, b?: any) {
      if (
        (typeof mENU_SUBSYSTEM_ID === 'string' || mENU_SUBSYSTEM_ID === null) &&
        (typeof b === 'boolean' || b === null)
      ) {
        return <any>(
          this.setSubsystemID$java_lang_String$boolean(mENU_SUBSYSTEM_ID, b)
        )
      } else if (
        (typeof mENU_SUBSYSTEM_ID === 'string' || mENU_SUBSYSTEM_ID === null) &&
        b === undefined
      ) {
        return <any>this.setSubsystemID$java_lang_String(mENU_SUBSYSTEM_ID)
      } else throw new Error('invalid overload')
    }

    public setSubsystemID$java_lang_String(mENU_SUBSYSTEM_ID: string) {}

    public setFocus$java_lang_String$java_lang_String(
      frameID: string,
      itemID: string,
    ) {
      if (frameID == null || itemID == null) {
        const e: lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException =
          new lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException(
            lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
              'E1194',
            ),
          )
      } else {
        this.setFocus$int$java_lang_String$java_lang_String(1, frameID, itemID)
        return
      }
    }

    public setFocus$int$java_lang_String$java_lang_String(
      focusType: number,
      frameID: string,
      itemID: string,
    ) {
      if (focusType !== 1) {
        const e: lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException =
          new lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException(
            lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
              'E1106',
            ),
          )
      }
      if (frameID == null || itemID == null) {
        const e: lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException =
          new lib.com.fujitsu.jcf.ctrl.JCFIllegalArgumentException(
            lib.com.fujitsu.jcf.ctrl.JCFCMMessageProperties.getExceptionMessage(
              'E1194',
            ),
          )
      } else {
        focusType = focusType
        this.focusFrameID = frameID
        this.focusItemID = itemID
        return
      }
    }

    public setFocus(focusType?: any, frameID?: any, itemID?: any) {
      if (
        (typeof focusType === 'number' || focusType === null) &&
        (typeof frameID === 'string' || frameID === null) &&
        (typeof itemID === 'string' || itemID === null)
      ) {
        return <any>(
          this.setFocus$int$java_lang_String$java_lang_String(
            focusType,
            frameID,
            itemID,
          )
        )
      } else if (
        (typeof focusType === 'string' || focusType === null) &&
        (typeof frameID === 'string' || frameID === null) &&
        itemID === undefined
      ) {
        return <any>(
          this.setFocus$java_lang_String$java_lang_String(focusType, frameID)
        )
      } else throw new Error('invalid overload')
    }

    /*private*/ focusFrameID: string

    /*private*/ focusItemID: string

    constructor() {
      if (this.focusFrameID === undefined) {
        this.focusFrameID = null
      }
      if (this.focusItemID === undefined) {
        this.focusItemID = null
      }
    }
  }
  JCFReturnInfo['__class'] = 'lib.com.fujitsu.jcf.ctrl.JCFReturnInfo'
}
