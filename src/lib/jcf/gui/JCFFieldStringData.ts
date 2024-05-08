/******************************************************************************
 * jcf.gui.JCFFieldStringData
 *
 * プログラム名     : jcf.gui.JCFFieldStringData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/12 | itac）佐藤亮之介  | JCFFieldStringData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/

import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { bindThis } from '@/utils/class/bind'
import { ref } from 'vue'

// 🟢 完成

export class JCFFieldStringData extends JCFItemData {
  value = ref('')

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  getValue(): string {
    return this.value.value
  }

  setValue(newValue?: string): void {
    if (!newValue?.length) {
      this.value.value = ''
      return
    }
    this.value.value = String(newValue)
  }

  setData(itemData: JCFItemData): void {
    if (!itemData) {
      return
    }
    if (itemData?._getType?.() !== JCFFieldStringData) {
      return
    }
    // set value
    this.setValue(itemData.getValue())
  }

  setDataAndAttributes(itemData: JCFItemData): void {
    if (!itemData) {
      return
    }
    if (itemData?._getType?.() !== JCFFieldStringData) {
      return
    }
    // set data
    this.setData(itemData)
    // super
    super.setDataAndAttributes(itemData)
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any): void {
    this.setValue(newValue as string)
  }

  _getComponentName(): string {
    return EComponentName.JCFFieldString
  }

  _getName(): string {
    return 'JCFFieldStringData'
  }

  static _getName(): string {
    return 'JCFFieldStringData'
  }

  _getType() {
    return JCFFieldStringData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFFieldStringData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFFieldStringData'
  }
}
