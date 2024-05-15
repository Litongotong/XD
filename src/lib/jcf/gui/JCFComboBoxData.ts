/******************************************************************************
 * jcf.gui.JCFComboBoxData
 *
 * プログラム名     : jcf.gui.JCFComboBoxData
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFComboBoxData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement'
import { bindThis } from '@/utils/class/bind'
import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { getRaw } from '@/utils/vue/getRaw'

// 🟢 完成

export class JCFComboBoxData extends JCFItemData {
  value = ref('')
  editable = ref(false)
  selectableElements = ref<JCFSelectableElement[]>([])

  constructor(itemId: string) {
    super(itemId)

    bindThis(this)
  }

  getValue(): string {
    return this.value.value
  }

  setValue(newValue: string): void
  setValue(newValue: JCFSelectableElement[]): void
  setValue(newValue: string | JCFSelectableElement[]): void {
    if (typeof newValue === 'string') {
      this.__setValueWithString(newValue)
    } else {
      this.__setValueWithSelectableElement(newValue)
    }
  }

  private getRawSelectableElements() {
    return getRaw(this.selectableElements) as any as JCFSelectableElement[]
  }

  private __setValueWithString(newValue: string): void {
    if (!newValue?.length) {
      this.value.value = ''
    } else {
      this.value.value = newValue
    }
    if (!this.selectableElements.value?.length) {
      return
    }
    this.selectableElements.value.forEach((element) => {
      element.setSelected(false)
      const text = element.getText()
      if (text?.length && text === this.value.value) {
        element.setSelected(true)
      }
    })
  }

  private __setValueWithSelectableElement(
    elements: JCFSelectableElement[],
  ): void {
    this.selectableElements.value = JCFSelectableElement.copy(elements) as any;
    if (!this.editable.value) {
      this.value.value = ''
    }
    if (!elements?.length) {
      return
    }
    this.selectableElements.value.forEach((elm) => {
      const text = elm.getText()
      if (text?.length) {
        if (elm.isSelected()) {
          this.value.value = text
        } else if (this.editable.value && text === this.value.value) {
          this.value.value = ''
        }
      }
    })
  }

  getSelectableElementValue(): JCFSelectableElement[] {
    return this.getRawSelectableElements()
  }

  setData(jcfitemdata?: JCFItemData): void {
    if (!jcfitemdata) {
      return
    }
    if (jcfitemdata?._getType?.() !== JCFComboBoxData) {
      return
    }
    const data = jcfitemdata as JCFComboBoxData
    // value
    this.setValue(data.getValue())
    // selectableElements
    this.setValue(data.getSelectableElementValue())
  }

  setDataAndAttributes(item?: JCFItemData) {
    if (!item) {
      return
    }
    if (item?._getType?.() !== JCFComboBoxData) {
      return
    }
    // set data
    this.setData(item)
    // super
    super.setDataAndAttributes(item)
  }

  setEditable(editable: boolean): void {
    this.editable.value = editable
  }

  getCommunicationData(): any {
    return this.getValue()
  }

  setCommunicationData(newValue: any) {
    this.setValue(newValue as string)
  }

  _getComponentName(): string {
    return EComponentName.JCFComboBox
  }

  _getName(): string {
    return 'JCFComboBoxData'
  }

  static _getName(): string {
    return 'JCFComboBoxData'
  }

  _getType() {
    return JCFComboBoxData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFComboBoxData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFComboBoxData'
  }
}
