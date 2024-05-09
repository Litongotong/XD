/******************************************************************************
 * jcf.gui.JCFPushButtonData
 *
 * プログラム名     : jcf.gui.JCFPushButtonData
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFPushButtonData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { bindThis } from '@/utils/class/bind'
import { ref } from 'vue'

// 🟢 完成

export class JCFPushButtonData extends JCFItemData {
  value = ref('')

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  getValue(): string {
    return this.value.value
  }

  setValue(newValue?: any): void {
    if (!newValue?.length) {
      this.value.value = ''
      return
    }
    this.value.value = String(newValue)
  }

  setData(jcfitemdata: JCFItemData): void {
    if (!jcfitemdata) {
      return
    }
    if (jcfitemdata?._getType?.() !== JCFPushButtonData) {
      return
    }
    this.setValue(jcfitemdata.getValue())
  }

  setDataAndAttributes(item?: JCFItemData) {
    if (!item) {
      return
    }
    if (item?._getType?.() !== JCFPushButtonData) {
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
    return EComponentName.JCFPushButton
  }

  _getName(): string {
    return 'JCFPushButtonData'
  }

  static _getName(): string {
    return 'JCFPushButtonData'
  }

  _getType() {
    return JCFPushButtonData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFPushButtonData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFPushButtonData'
  }
}
