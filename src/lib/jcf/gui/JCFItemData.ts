import { ref } from 'vue'
import { JCFDataBean } from './JCFDataBean'
import { bindThis } from '@/utils/class/bind'

// 🟢 完成

export abstract class JCFItemData extends JCFDataBean {
  // custom props
  itemId: string

  // jcf item data props
  visible = ref(true)
  reverse = ref(false)
  modified = ref(false)
  errorCode = ref('')

  constructor(itemId: string) {
    super()
    this.itemId = itemId

    bindThis(this)
  }

  // ----- item data -----
  isVisible() {
    return this.visible.value
  }
  setVisible(visible: boolean): void {
    this.visible.value = visible
  }
  isReverse(): boolean {
    return this.reverse.value
  }
  setReverse(reverse: boolean): void {
    this.reverse.value = reverse
  }
  isModified(): boolean {
    return this.modified.value
  }
  protected setModified(modified: boolean): void {
    this.modified.value = modified
  }
  setErrorCode(errorCode: string): void {
    this.errorCode.value = errorCode
  }
  getErrorCode(): string {
    return this.errorCode.value
  }

  abstract getValue(): string
  abstract setValue(newValue: any): void
  abstract setData(jcfitemdata: JCFItemData): void
  getItemID(): string {
    return this.itemId
  }

  setDataAndAttributes(itemData?: JCFItemData): void {
    return this.__setDataAndAttributes(itemData)
  }
  private __setDataAndAttributes(itemData?: JCFItemData): void {
    if (!itemData) {
      return
    }
    this.setValue(itemData.getValue())
    this.setVisible(itemData.isVisible())
    this.setReverse(itemData.isReverse())
    this.setModified(itemData.isModified())
    super.setDataAndAttributes(itemData as any)
  }

  protected undo(itemData: JCFItemData) {
    this.setDataAndAttributes(itemData)
  }

  abstract getCommunicationData(): any
  abstract setCommunicationData(obj: any): void

  /**
   * get self component name
   */
  abstract _getComponentName(): string

  _getName(): string {
    return 'JCFItemData'
  }

  static _getName(): string {
    return 'JCFItemData'
  }

  _getType() {
    return JCFItemData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFItemData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFItemData'
  }
}
