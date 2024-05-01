/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.fujitsu.jcf.gui {
  export class JCFDataBean {
    public constructor(newID: string) {
      if (this.id === undefined) {
        this.id = null
      }
      if (this.changedListener === undefined) {
        this.changedListener = null
      }
      if (this.foreground === undefined) {
        this.foreground = null
      }
      if (this.background === undefined) {
        this.background = null
      }
      if (this.enabled === undefined) {
        this.enabled = false
      }
      if (this.tag === undefined) {
        this.tag = null
      }
      this.changedListener = null
      this.foreground = null
      this.background = null
      this.enabled = false
      this.tag = ''
      this.id = newID
    }

    getID(): string {
      return this.id
    }

    public getForeground(): com.java.Color {
      return this.foreground
    }

    public setForeground(color: com.java.Color) {
      if (this.foreground == null && color == null) return
      if (this.foreground != null && color != null && /* equals */ <any>((
          o1: any,
          o2: any,
        ) => {
          if (o1 && o1.equals) {
            return o1.equals(o2)
          } else {
            return o1 === o2
          }
        })(this.foreground, color)) {
        return
      } else {
        this.foreground = color
        this.callChangedListener()
        return
      }
    }

    public getBackground(): com.java.Color {
      return this.background
    }

    public setBackground(color: com.java.Color) {
      if (this.background == null && color == null) return
      if (this.background != null && color != null && /* equals */ <any>((
          o1: any,
          o2: any,
        ) => {
          if (o1 && o1.equals) {
            return o1.equals(o2)
          } else {
            return o1 === o2
          }
        })(this.background, color)) {
        return
      } else {
        this.background = color
        this.callChangedListener()
        return
      }
    }

    public isEnabled(): boolean {
      return this.enabled
    }

    setEnabled(newEnabled: boolean) {
      if (this.enabled === newEnabled) {
        return
      } else {
        this.enabled = newEnabled
        this.callChangedListener()
        return
      }
    }

    public getTag(): string {
      return this.tag
    }

    public setTag(newTag: string) {
      if (this.tag == null && newTag == null) return
      if (this.tag != null && newTag != null && this.tag === newTag) {
        return
      } else {
        this.tag = newTag
        this.callChangedListener()
        return
      }
    }

    public setDataAndAttributes(dataBean: JCFDataBean) {
      if (dataBean == null) {
        return
      } else {
        this.setForeground(dataBean.getForeground())
        this.setBackground(dataBean.getBackground())
        this.setEnabled(dataBean.isEnabled())
        this.setTag(dataBean.getTag())
        return
      }
    }

    callChangedListener() {
      if (this.changedListener == null) {
        return
      } else {
        this.changedListener.changed(
          new lib.com.fujitsu.jcf.gui.JCFChangedEvent(this),
        )
        return
      }
    }

    setChangedListener(listener: lib.com.fujitsu.jcf.gui.JCFChangedListener) {
      this.changedListener = listener
    }

    clearChangedListener() {
      this.changedListener = null
    }

    public static CLASS_VERSION: string = 'V1L30B'

    public static COPYRIGHT: string =
      'All Rights Reserved, Copyright(c) FUJITSU LIMITED 2003-2009'

    public static FUJITSU_CONFIDENTIAL: string = 'FUJITSU CONFIDENTIAL'

    static CLASS_NAME: string = 'JCFDataBean'

    /*private*/ id: string

    /*private*/ changedListener: lib.com.fujitsu.jcf.gui.JCFChangedListener

    /*private*/ foreground: com.java.Color

    /*private*/ background: com.java.Color

    /*private*/ enabled: boolean

    /*private*/ tag: string
  }
  JCFDataBean['__class'] = 'lib.com.fujitsu.jcf.gui.JCFDataBean'
}
