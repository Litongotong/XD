/******************************************************************************
 * jcf.gui.JCFListBoxData
 *
 * プログラム名     : jcf.gui.JCFListBoxData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/12 | itac）佐藤亮之介  | JCFListBoxData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/

import { ref } from 'vue'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import { ArrayList } from '@/lib/native/util/ArrayList'
import { bindThis } from '@/utils/class/bind'
import { StringBuilder } from '@/lib/native/lang/StringBuilder'
import { NativeString } from '@/lib/native/lang/String'
import { StringBuffer } from '@/lib/native/lang/StringBuffer'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { getRaw } from '@/utils/vue/getRaw'

// 🟢 完成

export class JCFListBoxData extends JCFItemData {
  selectableElements = ref<JCFSelectableElement[]>([])

  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  getValue = (): string => {
    let string = ''
    if (!this.selectableElements.value?.length) {
      return string
    }
    for (let i = 0; i < this.selectableElements.value.length; i++)
      if (
        this.selectableElements.value[i] != null &&
        this.selectableElements.value[i].isSelected()
      ) {
        if (string.length !== 0) {
          string = new StringBuilder(NativeString.valueOf(string))
            .append('\n')
            .toString()
        }
        string = new StringBuilder(NativeString.valueOf(string))
          .append(this.selectableElements.value[i].getText())
          .toString()
      }

    return string
  }

  setValue(newValue: JCFSelectableElement[]): void
  setValue(newValue: string): void
  setValue(newValue: string | JCFSelectableElement[]): void {
    if (typeof newValue === 'string') {
      this.__setValueWithString(newValue)
    } else if (Array.isArray(newValue)) {
      this.__setValueWithArray(newValue)
    }
  }

  private __setValueWithString(newValue: string): void {
    if (newValue === null || newValue === undefined) {
      return
    }
    if (!this.selectableElements.value?.length) {
      return
    }
    for (let i = 0; i < this.selectableElements.value.length; i++) {
      if (this.selectableElements.value[i] != null) {
        this.selectableElements.value[i].setSelected(false)
      }
    }
    let arrayList: ArrayList | null = this.getArrayList(newValue)
    if (arrayList == null) {
      return
    }
    let size: number = arrayList.size()
    for (let j = 0; j < size; j++) {
      let s: string = arrayList.get(j) as string
      if (s !== null && s !== undefined) {
        for (let i = 0; i < this.selectableElements.value.length; i++) {
          if (
            this.selectableElements.value[i] != null &&
            s.equals(this.selectableElements.value[i].getText())
          ) {
            this.selectableElements.value[i].setSelected(true)
          }
        }
      }
    }
  }

  private __setValueWithArray(newValue: JCFSelectableElement[]): void {
    this.selectableElements.value = JCFSelectableElement.copy(newValue)! as any
  }

  getSelectableElementValue(): JCFSelectableElement[] {
    return getRaw(this.selectableElements)
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (!itemData) {
      return
    }

    if (!(itemData?._getType() !== JCFListBoxData)) {
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

    if (!(itemData?._getType() !== JCFListBoxData)) {
      return
    } else {
      let listBoxData: JCFListBoxData = itemData as JCFListBoxData
      this.setValue(listBoxData.getSelectableElementValue())
      return
    }
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any) {
    this.setValue(newValue as string)
  }

  private getArrayList(s: string): ArrayList | null {
    if (s === null || s === undefined) {
      return null
    }
    let arrayList: ArrayList = new ArrayList()
    let sb: StringBuffer = new StringBuffer(0)
    let length: number = s.length
    for (let i = 0; i < length; i++) {
      let c: string = s.charAt(i)
      if (c == '\n') {
        if (sb.length() > 0) {
          arrayList.add(sb.toString())
          sb.setLength(0)
        }
      } else {
        sb.append(c)
      }
    }

    if (sb.length() > 0) {
      arrayList.add(sb.toString())
    }

    return arrayList
  }

  _getComponentName(): string {
    return EComponentName.JCFListBox
  }

  _getName(): string {
    return 'JCFListBoxData'
  }

  static _getName(): string {
    return 'JCFListBoxData'
  }

  _getType() {
    return JCFListBoxData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFListBoxData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFListBoxData'
  }
}
