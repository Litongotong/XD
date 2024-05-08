import { ref } from 'vue'
import { JCFItemData } from './JCFItemData'
import { NativeBoolean } from '@/lib/native/lang/Boolean'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFSwitchButtonData extends JCFItemData {
  value = ref(false)
  label = ref('')

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  getValue(): string {
    let bool = new NativeBoolean(this.value.value)
    return bool.toString()
  }

  getBooleanValue(): boolean {
    return this.value.value
  }

  setValue(newValue: string): void
  setValue(newValue: boolean): void
  setValue(newValue: string | boolean): void {
    if (typeof newValue === 'string') {
      this.__setValueWithString(newValue)
    } else {
      this.__setValueWithBoolean(newValue)
    }
  }

  private __setValueWithString(newValue: string): void {
    if (!newValue?.length) {
      newValue = ''
    }
    let bool = new NativeBoolean(newValue)
    this.value.value = bool.booleanValue()
  }

  private __setValueWithBoolean(newValue: boolean): void {
    this.value.value = newValue
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() !== JCFSwitchButtonData)) {
      return
    } else {
      this.setData(itemData)
      let switchButtonData: JCFSwitchButtonData =
        itemData as JCFSwitchButtonData
      this.setLabel(switchButtonData.getLabel())
      super.setDataAndAttributes(itemData)
      return
    }
  }

  setData(itemData: JCFItemData) {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() !== JCFSwitchButtonData)) {
      return
    } else {
      let switchButtonData: JCFSwitchButtonData =
        itemData as JCFSwitchButtonData
      this.setValue(switchButtonData.getBooleanValue())
      return
    }
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any): void {
    this.setValue(newValue as string)
  }

  getLabel(): string {
    return this.label.value
  }

  setLabel(label: string): void {
    this.label.value = label
  }

  _getComponentName(): string {
    return EComponentName.JCFSwitchButton
  }

  _getName(): string {
    return 'JCFSwitchButtonData'
  }

  static _getName(): string {
    return 'JCFSwitchButtonData'
  }

  _getType() {
    return JCFSwitchButtonData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFSwitchButtonData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFSwitchButtonData'
  }
}
