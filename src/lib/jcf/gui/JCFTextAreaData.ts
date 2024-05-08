/******************************************************************************
 * jcf.gui.JCFTextAreaData
 *
 * プログラム名     : jcf.gui.JCFTextAreaData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/12 | itac）佐藤亮之介  | JCFTextAreaData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/

import { ref } from 'vue'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFTextAreaData extends JCFItemData {
  value = ref('')

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  getValue(): string {
    return this.value.value
  }

  setValue(newValue?: string): void {
    this.value.value = newValue || ''
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (!itemData) {
      return
    }

    if (!(itemData?._getType() === JCFTextAreaData)) {
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

    if (!(itemData?._getType() === JCFTextAreaData)) {
      return
    } else {
      let textAreaData: JCFTextAreaData = itemData as JCFTextAreaData
      this.setValue(textAreaData.getValue())
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
    return EComponentName.JCFTextArea
  }

  _getName(): string {
    return 'JCFTextAreaData'
  }

  static _getName(): string {
    return 'JCFTextAreaData'
  }

  _getType() {
    return JCFTextAreaData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFTextAreaData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFTextAreaData'
  }
}
