import { bindThis } from '@/utils/class/bind'
import { JCFGroupBoxData } from './JCFGroupBoxData'
import type { JCFItemData } from './JCFItemData'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFButtonGroupData extends JCFGroupBoxData {
  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (itemData instanceof JCFButtonGroupData) {
      super.setDataAndAttributes(itemData as any)
    }
  }

  setData(itemData: JCFItemData) {
    if (itemData instanceof JCFButtonGroupData) {
      super.setData(itemData)
    }
  }

  _getComponentName() {
    return EComponentName.JCFButtonGroup
  }

  _getName(): string {
    return 'JCFButtonGroupData'
  }

  static _getName(): string {
    return 'JCFButtonGroupData'
  }

  _getType() {
    return JCFButtonGroupData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFButtonGroupData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFButtonGroupData'
  }
}
