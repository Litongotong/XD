import { lib as JCFDataBean } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/gui/JCFDataBean'

/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.jcf.gui {
  export abstract class JCFItemData extends JCFDataBean.com.fujitsu.jcf.gui
    .JCFDataBean {
    public constructor(newItemID: string) {
      super(newItemID)
      if (this.enabledListener === undefined) {
        this.enabledListener = null
      }
      if (this.visible === undefined) {
        this.visible = false
      }
      if (this.reverse === undefined) {
        this.reverse = false
      }
      if (this.modified === undefined) {
        this.modified = false
      }
      if (this.errorCode === undefined) {
        this.errorCode = null
      }
      this.enabledListener = null
      this.visible = false
      this.reverse = false
      this.modified = false
      this.errorCode = 'ERROR_NOTHING'
    }

    public getItemID(): string {
      return this.getID()
    }

    public isVisible(): boolean {
      return this.visible
    }

    public setVisible(newVisible: boolean) {
      this.visible = newVisible
      this.callChangedListener()
    }

    public isReverse(): boolean {
      return this.reverse
    }

    public setReverse(newReverse: boolean) {
      this.reverse = newReverse
      this.callChangedListener()
    }

    public isModified(): boolean {
      return this.modified
    }

    setModified(newModified: boolean) {
      this.modified = newModified
    }

    public getErrorCode(): string {
      return this.errorCode
    }

    setErrorCode(newErrorCode: string) {
      this.errorCode = newErrorCode
    }

    public abstract getValue(): string

    public abstract setValue(s: string)

    public setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(
      itemData: JCFItemData,
    ) {
      if (itemData == null) {
        return
      } else {
        this.setVisible(itemData.isVisible())
        this.setReverse(itemData.isReverse())
        this.setModified(itemData.isModified())
        this.setErrorCode(itemData.getErrorCode())
        super.setDataAndAttributes(itemData)
        return
      }
    }

    public setDataAndAttributes(itemData?: any) {
      if (
        (itemData != null &&
          itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFItemData) ||
        itemData === null
      ) {
        return <any>(
          this.setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData)
        )
      } else if (
        (itemData != null &&
          itemData instanceof <any>lib.com.fujitsu.jcf.gui.JCFDataBean) ||
        itemData === null
      ) {
        super.setDataAndAttributes(itemData)
      } else throw new Error('invalid overload')
    }

    undo(itemData: JCFItemData) {
      this.setDataAndAttributes$com_fujitsu_jcf_gui_JCFItemData(itemData)
    }

    public abstract setData(jcfitemdata: JCFItemData)

    public abstract getCommunicationData(): any

    public abstract setCommunicationData(obj: any)

    public setEnabled(newEnabled: boolean) {}

    setEnabledListener(listener: lib.com.fujitsu.jcf.gui.JCFEnabledListener) {
      this.enabledListener = listener
    }

    clearEnabledListener() {
      this.enabledListener = null
    }

    public static CLASS_VERSION: string = 'V1L30B'

    public static COPYRIGHT: string =
      'All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009'

    public static FUJITSU_CONFIDENTIAL: string = 'FUJITSU CONFIDENTIAL'

    static __com_fujitsu_jcf_gui_JCFItemData_CLASS_NAME: string = 'JCFItemData'

    public static ERROR_NOTHING: string = 'ERROR_NOTHING'

    public static ERROR_INDISPENSABLE: string = 'ERROR_INDISPENSABLE'

    public static ERROR_FULL: string = 'ERROR_FULL'

    public static ERROR_LIMIT: string = 'ERROR_LIMIT'

    public static ERROR_TYPE: string = 'ERROR_TYPE'

    public static ERROR_RANGE: string = 'ERROR_RANGE'

    /*private*/ enabledListener: lib.com.fujitsu.jcf.gui.JCFEnabledListener

    /*private*/ visible: boolean

    /*private*/ reverse: boolean

    /*private*/ modified: boolean

    /*private*/ errorCode: string

    public setBackground$java_lang_String(warning: string) {}

    public setBackground(warning?: any) {
      if (typeof warning === 'string' || warning === null) {
        return <any>this.setBackground$java_lang_String(warning)
      } else if (
        (warning != null && warning instanceof <any>com.java.Color) ||
        warning === null
      ) {
        super.setBackground(warning)
      } else throw new Error('invalid overload')
    }
  }
  JCFItemData['__class'] = 'lib.com.fujitsu.jcf.gui.JCFItemData'
}
