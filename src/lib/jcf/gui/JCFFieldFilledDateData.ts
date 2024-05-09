/******************************************************************************
 * jcf.gui.JCFFieldFilledDateData
 *
 * プログラム名     : jcf.gui.JCFFieldFilledDateData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/12 | itac）佐藤亮之介  | JCFFieldFilledDateData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { JCFDataException } from '@/lib/jcf/gui/JCFDataException'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import { Integer } from '@/lib/native/lang/Integer'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'

// 🟢 完成

export class JCFFieldFilledDateData extends JCFItemData {
  private ERROR_MESSAGE: string = 'ERROR_TYPE'
  values = ref<number[]>([])
  maxLengths = ref<number[]>([])
  fieldCount = ref(0)
  totalMaxLength = ref(0)
  full = ref(false)

  constructor(itemID: string) {
    super(itemID)

    this.setMaxLengths([4, 2, 2])

    bindThis(this)
  }

  getValue(): string {
    if (!this.maxLengths.value?.length) {
      return ''
    }
    if (!this.values.value?.length) {
      return ''
    }
    let sb: StringBuffer = new StringBuffer(this.totalMaxLength.value)
    for (let i = 0; i < this.fieldCount.value; i++) {
      let value: string = Integer.toString(this.values.value[i])
      let length: number = value.length
      if (length > this.maxLengths.value[i]) {
        return ''
      }
      for (; length < this.maxLengths.value[i]; length++) {
        sb.append('0')
      }
      sb.append(value)
    }
    return sb.toString()
  }

  setValue(newValue: number[]): void
  setValue(newValue: string): void
  setValue(newValue: number[] | string): void {
    if (Array.isArray(newValue)) {
      this.__setValueWithNumber(newValue)
    } else if (typeof newValue === 'string') {
      this.__setValueWithString(newValue)
    } else {
      throw new Error('Invalid type')
    }
  }

  private __setValueWithString(newValue: string): void {
    if (newValue === null || newValue === undefined) {
      throw new JCFDataException(this.ERROR_MESSAGE)
    }
    if (newValue.length !== this.totalMaxLength.value) {
      throw new JCFDataException(this.ERROR_MESSAGE)
    }

    let j: number
    for (let i = (j = 0); i < this.fieldCount.value; i++) {
      let field: string = newValue.substring(j, j + this.maxLengths.value[i])
      let value: number
      try {
        value = Integer.parseInt(field)
      } catch (e: any) {
        throw new JCFDataException(this.ERROR_MESSAGE)
      }
      if (value < 0) {
        throw new JCFDataException('ERROR_TYPE')
      }
      this.values.value[i] = value
      j += this.maxLengths.value[i]
    }
  }

  private __setValueWithNumber(newValue: number[]): void {
    if (newValue === null || newValue === undefined) {
      throw new JCFDataException(this.ERROR_MESSAGE)
    }

    if (newValue.length !== this.fieldCount.value) {
      throw new JCFDataException('ERROR_TYPE')
    } else {
      this.values.value = newValue
      return
    }
  }

  getIntArrayValue(): number[] {
    return this.values.value
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (!itemData) {
      return
    }
    if (!(itemData?._getType() !== JCFFieldFilledDateData)) {
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
    if (!(itemData?._getType() !== JCFFieldFilledDateData)) {
      return
    }
    let fieldDateData: JCFFieldFilledDateData =
      itemData as JCFFieldFilledDateData
    try {
      this.setValue(fieldDateData.getIntArrayValue())
    } catch (e) {}
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any) {
    this.setValue(newValue as string)
  }

  setMaxLengths(newMaxLengths: number[]) {
    if (newMaxLengths === undefined || newMaxLengths === null) {
      return
    }
    this.maxLengths.value = newMaxLengths
    this.fieldCount.value = this.maxLengths.value.length
    for (
      let i = (this.totalMaxLength.value = 0);
      i < this.fieldCount.value;
      i++
    ) {
      this.totalMaxLength.value += this.maxLengths.value[i]
    }
  }

  isFull(): boolean {
    return this.full.value
  }

  protected setFull(full: boolean) {
    this.full.value = full
  }

  _getComponentName(): string {
    return EComponentName.JCFFieldFilledDate
  }

  _getName(): string {
    return 'JCFFieldFilledDateData'
  }

  static _getName(): string {
    return 'JCFFieldFilledDateData'
  }

  _getType() {
    return JCFFieldFilledDateData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFFieldFilledDateData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFFieldFilledDateData'
  }
}
