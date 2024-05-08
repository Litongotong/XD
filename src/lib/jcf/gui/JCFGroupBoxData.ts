/******************************************************************************
 * jcf.gui.JCFGroupBoxData
 *
 * プログラム名     : jcf.gui.JCFGroupBoxData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/12 | itac）佐藤亮之介  | JCFGroupBoxData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/

import { ref } from 'vue'
import { LanguageNativeType } from '@/lib/native/config/enums'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFGroupBoxData extends JCFItemData {
  value = ref('')
  enabledInner = ref(false)

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  getValue(): string {
    return this.value.value
  }

  setValue(newValue: string): void {
    if (newValue === null || newValue === undefined) {
      newValue = ''
    }
    this.value.value = newValue
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() !== JCFGroupBoxData)) {
      return
    } else {
      this.setData(itemData)
      super.setDataAndAttributes(itemData)
      return
    }
  }

  setData(itemData: JCFItemData): void {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() !== JCFGroupBoxData)) {
      return
    } else {
      let groupBoxData: JCFGroupBoxData = itemData as JCFGroupBoxData
      this.setValue(groupBoxData.getValue())
      return
    }
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any): void {
    this.setValue(newValue)
  }

  setEnabled(newEnabled: boolean): void
  setEnabled(newEnabled: boolean, innerTo: boolean): void
  setEnabled(newEnabled: boolean, innerTo?: boolean): void {
    const isMultipleArguments = typeof innerTo === LanguageNativeType.BOOLEAN
    if (isMultipleArguments) {
      super.setEnabled(newEnabled)
      this.setEnabledInner(innerTo as boolean)
    } else {
      this.setEnabled(newEnabled, false)
    }
  }

  protected isEnabledInner(): boolean {
    return this.enabledInner.value
  }

  protected setEnabledInner(innerTo: boolean) {
    this.enabledInner.value = innerTo
  }

  _getComponentName() {
    return EComponentName.JCFGroupBox
  }

  _getName(): string {
    return 'JCFGroupBoxData'
  }

  static _getName(): string {
    return 'JCFGroupBoxData'
  }

  _getType() {
    return JCFGroupBoxData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFGroupBoxData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFGroupBoxData'
  }
}
