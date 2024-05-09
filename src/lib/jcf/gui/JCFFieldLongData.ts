/******************************************************************************
 * jcf.gui.JCFFieldLongData
 *
 * プログラム名     : jcf.gui.JCFFieldLongData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）佐藤亮之介  | JCFFieldLongData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { JCFDataException } from '@/lib/jcf/gui/JCFDataException'
import { bindThis } from '@/utils/class/bind'
import { Long } from '@/lib/native/lang/Long'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFFieldLongData extends JCFItemData {
  value = ref(0)
  viewText = ref('')

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  getValue(): string {
    return this.value.value.toString()
  }

  setValue(newValue: number): void
  setValue(newValue: string): void
  setValue(newValue: number | string): void {
    const isString = typeof newValue === 'string'
    const isNumber = typeof newValue === 'number'
    if (isString) {
      this.__setValueWithString(newValue as string)
    } else if (isNumber) {
      this.__setValueWithNumber(newValue as number)
    } else {
      throw new Error('Invalid value')
    }
  }

  private __setValueWithString(newValue: string): void {
    try {
      this.value.value = Long.parseLong(newValue)
      this.viewText.value = newValue
    } catch (e) {
      throw new JCFDataException('ERROR_TYPE')
    }
  }
  private __setValueWithNumber(newValue: number): void {
    this.value.value = newValue
    this.viewText.value = this.value.toString()
  }

  getLongValue(): number {
    return this.value.value
  }

  setData(item?: JCFItemData): void {
    if (!item) {
      return
    }
    if (item?._getType() !== JCFFieldLongData) {
      return
    }
    const ins = item as JCFFieldLongData
    // set value
    this.setValue(ins.getValue())
    // set view text
    this.setViewText(ins.getViewText())
  }

  setDataAndAttributes(item?: JCFItemData): void {
    if (!item) {
      return
    }
    if (item?._getType() !== JCFFieldLongData) {
      return
    }
    // set data
    this.setData(item)
    // super
    super.setDataAndAttributes(item)
  }

  getViewText(): string {
    return this.viewText.value
  }

  setViewText(viewText: string): void {
    this.viewText.value = viewText
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any) {
    this.setValue(newValue as string)
  }

  _getComponentName(): string {
    return EComponentName.JCFFieldLong
  }

  _getName(): string {
    return 'JCFFieldLongData'
  }

  static _getName(): string {
    return 'JCFFieldLongData'
  }

  _getType() {
    return JCFFieldLongData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFFieldLongData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFFieldLongData'
  }
}
