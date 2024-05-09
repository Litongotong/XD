import { ref } from 'vue'
import { JCFItemData } from './JCFItemData'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFLabelData extends JCFItemData {
  value = ref('')

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  setValue(newValue?: string): void {
    if (!newValue?.length) {
      this.value.value = ''
    } else {
      this.value.value = newValue
    }
  }

  getValue(): string {
    return this.value.value
  }

  setData(jcfitemdata?: JCFItemData): void {
    if (!jcfitemdata) {
      return
    }
    if (jcfitemdata?._getType?.() !== JCFLabelData) {
      return
    }
    const data = jcfitemdata as JCFLabelData
    // value
    this.setValue(data.getValue())
  }

  setDataAndAttributes(item?: JCFItemData) {
    if (!item) {
      return
    }
    if (item?._getType?.() !== JCFLabelData) {
      return
    }
    // set data
    this.setData(item)
    // super
    super.setDataAndAttributes(item)
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any): void {
    this.setValue(newValue as string)
  }

  _getComponentName(): string {
    return EComponentName.JCFLabel
  }

  _getName(): string {
    return 'JCFLabelData'
  }

  static _getName(): string {
    return 'JCFLabelData'
  }

  _getType() {
    return JCFLabelData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFLabelData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFLabelData'
  }
}
