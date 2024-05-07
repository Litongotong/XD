/******************************************************************************
 * jcf.gui.JCFToggleButtonData
 *
 * プログラム名     : jcf.gui.JCFToggleButtonData
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFToggleButtonData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFToggleButtonData extends JCFItemData {
  value = ref(false)
  label = ref('')

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  getValue(): string {
    return this.value.value.toString()
  }

  setValue(newValue?: boolean | string): void {
    if (newValue === null || newValue === undefined) {
      this.value.value = false
      return
    }
    if (typeof newValue !== 'boolean') {
      this.value.value = false
      return
    }
    this.value.value = newValue
  }

  getLabel(): string {
    return this.label.value
  }

  setLabel(newValue?: string): void {
    if (newValue === null || newValue === undefined) {
      this.label.value = ''
      return
    }
    this.label.value = newValue
  }

  getBooleanValue(): boolean {
    return this.value.value
  }

  setData(itemData: JCFItemData): void {
    if (!itemData) {
      return
    }
    if (itemData?._getType?.() !== JCFToggleButtonData) {
      return
    }
    const ins = itemData as JCFToggleButtonData
    // set value
    this.setValue(ins.getBooleanValue())
    // set label
    this.setLabel(ins.getLabel())
  }

  setDataAndAttributes(item?: JCFItemData) {
    if (!item) {
      return
    }
    if (item?._getType?.() !== JCFToggleButtonData) {
      return
    }
    const ins = item as JCFToggleButtonData
    // set data
    this.setData(ins)
    // super
    super.setDataAndAttributes(item)
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any) {
    this.setValue(newValue as string)
  }

  _getComponentName(): string {
    return EComponentName.JCFToggleButton
  }

  _getName(): string {
    return 'JCFToggleButtonData'
  }

  static _getName(): string {
    return 'JCFToggleButtonData'
  }

  _getType() {
    return JCFToggleButtonData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFToggleButtonData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFToggleButtonData'
  }
}
