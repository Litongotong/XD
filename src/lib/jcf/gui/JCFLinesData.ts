import { bindThis } from '@/utils/class/bind'
import { JCFItemData } from './JCFItemData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFLinesData extends JCFItemData {
  constructor(itemId: string) {
    super(itemId)

    bindThis(this)
  }

  getValue(): string {
    return null!
  }

  setValue(value: string): void {}

  setDataAndAttributes(itemData: JCFItemData) {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() !== JCFLinesData)) {
      return
    } else {
      this.setData(itemData)
      super.setDataAndAttributes(itemData)
      return
    }
  }

  setData(itemData: JCFItemData) {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() !== JCFLinesData)) {
      return
    } else {
      let linesData: JCFLinesData = itemData as JCFLinesData
      this.setValue(linesData.getValue())
      return
    }
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any): void {
    this.setValue(newValue as string)
  }

  _getComponentName(): string {
    return EComponentName.JCFLines
  }

  _getName(): string {
    return 'JCFLinesData'
  }

  static _getName(): string {
    return 'JCFLinesData'
  }

  _getType() {
    return JCFLinesData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFLinesData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFLinesData'
  }
}
