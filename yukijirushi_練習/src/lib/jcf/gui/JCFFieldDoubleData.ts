/******************************************************************************
 * jcf.gui.JCFFieldDoubleData
 *
 * プログラム名     : jcf.gui.JCFFieldDoubleData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/12 | itac）佐藤亮之介  | JCFFieldDoubleData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import { LanguageNativeType } from '@/lib/native/config/enums'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { JCFDataException } from '@/lib/jcf/gui/JCFDataException'

export class JCFFieldDoubleData extends JCFItemData {
  private value = ref<number>(0.0)
  private viewText = ref<string>('')

  /**
   * JCFFieldDoubleData インスタンスを作成する。
   * @param itemID itemID
   */
  constructor(itemID: string) {
    super(itemID)
    this.value.value = 0.0
    this.viewText.value = ''
  }

  /**
   * jcf.gui.JCFFieldDoubleData::getValue()
   * @see {@link JCFItemData#getValue}
   */
  getValue = (): string => {
    return this.value.value.toString()
  }

  // [[setValue]]
  /**
   * jcf.gui.JCFFieldDoubleData::setValue(number newValue)
   * @param newValue newValue for appends
   * @see {@link JCFItemData#setValue}
   */
  setValue(newValue: number): void

  /**
   * jcf.gui.JCFFieldDoubleData::setValue(string newValue)
   * @param newValue newValue for appends
   * @see {@link JCFItemData#setValue}
   */
  setValue(newValue: string): void

  setValue(newValue: number | string): void {
    const numberNewValue = !Number.isNaN(newValue)
    const stringNewValue = typeof newValue === LanguageNativeType.STRING

    if (newValue == null || newValue == undefined) {
      this.value.value = 0.0
      this.viewText.value = ''
      return
    }
    if (stringNewValue) {
      this._setStringValue(newValue as string)
      return
    }
    if (numberNewValue) {
      this._setNumberDoubleValue(newValue as number)
      return
    }
  }

  private _setStringValue(newValue: string): void {
    try {
      this.value.value = Number(newValue)
      this.viewText.value = newValue
      this.callChangedListener()
    } catch (e: any) {
      throw new JCFDataException('ERROR_TYPE')
    }
  }

  private _setNumberDoubleValue(newValue: number): void {
    this.value.value = newValue
    this.viewText.value = this.value.toString()
    this.callChangedListener()
  }

  /**
   * jcf.gui.JCFFieldDoubleData::getDoubleValue()
   */
  getDoubleValue = (): number => {
    return this.value.value
  }

  /**
   * jcf.gui.JCFFieldDoubleData::setData(JCFItemData itemData)
   * @param JCFItemData itemData for appends
   * @see {@link JCFItemData#setData}
   */
  setData = (itemData: JCFItemData): void => {
    if (itemData == null || itemData == undefined) {
      return
    }
    if (!(itemData instanceof JCFFieldDoubleData)) {
      return
    } else {
      const fieldLongData: JCFFieldDoubleData = itemData as JCFFieldDoubleData
      this.setValue(fieldLongData.getDoubleValue())
      this.setViewText(fieldLongData.getViewText())
      return
    }
  }

  /**
   * jcf.gui.JCFFieldDoubleData::getCommunicationData()
   * @see {@link JCFItemData#getCommunicationData}
   */
  getCommunicationData = (): Object => {
    return Object(this.getValue())
  }

  /**
   * jcf.gui.JCFFieldDoubleData::setCommunicationData(Object newValue)
   * @param newValue CommunicationData for appends
   * @see {@link JCFItemData#setCommunicationData}
   */
  setCommunicationData = (newValue: Object): void => {
    this.setValue(newValue.toString())
  }

  /**
   * jcf.gui.JCFFieldDoubleData::getViewText()
   */
  getViewText = (): string => {
    return this.viewText.value
  }

  /**
   * jcf.gui.JCFFieldDoubleData::setViewText()
   */
  setViewText = (viewText: string): void => {
    this.viewText.value = viewText
  }
}
