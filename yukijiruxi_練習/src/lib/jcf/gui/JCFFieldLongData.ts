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
import { LanguageNativeType } from '@/lib/native/config/enums'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { JCFDataException } from '@/lib/jcf/gui/JCFDataException'

export class JCFFieldLongData extends JCFItemData {
  private value = ref<number>(0)
  private viewText = ref<string>('')

  /**
   * JCFFieldLongData インスタンスを作成する。
   * @param itemID itemID
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#JCFFieldLongData(java.lang.String)
   */
  constructor(itemID: string) {
    super(itemID)
    this.value.value = 0
    this.viewText.value = ''
  }

  /**
   * jcf.gui.JCFFieldLongData::getValue()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#getValue()
   */
  getValue = (): string => {
    return this.value.value.toString()
  }

  // [[setValue]]
  /**
   * jcf.gui.JCFFieldLongData::setValue(number newValue)
   * @param newValue newValue for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#setValue(byte)
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#setValue(short)
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#setValue(int)
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#setValue(long)
   */
  setValue(newValue: number): void

  /**
   * jcf.gui.JCFFieldLongData::setValue(string newValue)
   * @param newValue newValue for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#setValue(java.lang.String)
   */
  setValue(newValue: string): void

  setValue(newValue: number | string): void {
    const numberNewValue = Number.isSafeInteger(newValue)
    const stringNewValue = typeof newValue === LanguageNativeType.STRING

    if (newValue == null || newValue == undefined) {
      this.value.value = 0
      this.viewText.value = ''
      return
    }
    if (stringNewValue) {
      this._setStringValue(newValue as string)
      return
    }
    if (numberNewValue) {
      this._setNumberIntValue(newValue as number)
      return
    } else {
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

  private _setNumberIntValue(newValue: number): void {
    this.value.value = newValue
    this.viewText.value = this.value.toString()
    this.callChangedListener()
  }

  private _setNumberDoubleValue(newValue: number): void {
    this.value.value = Math.floor(newValue)
    this.viewText.value = this.value.toString()
    this.callChangedListener()
  }

  /**
   * jcf.gui.JCFFieldLongData::getLongValue()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#getLongValue()
   */
  getLongValue = (): number => {
    return this.value.value
  }

  /**
   * jcf.gui.JCFFieldLongData::setData(JCFItemData itemData)
   * @param JCFItemData itemData for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#setData(JCFItemData)
   */
  setData = (itemData: JCFItemData): void => {
    if (itemData == null || itemData == undefined) {
      return
    }
    if (!(itemData instanceof JCFFieldLongData)) {
      return
    } else {
      const fieldLongData: JCFFieldLongData = itemData as JCFFieldLongData
      this.setValue(fieldLongData.getLongValue())
      this.setViewText(fieldLongData.getViewText())
      return
    }
  }

  /**
   * jcf.gui.JCFFieldLongData::getCommunicationData()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#getCommunicationData()
   */
  getCommunicationData = (): Object => {
    return Object(this.getValue())
  }

  /**
   * jcf.gui.JCFFieldLongData::setCommunicationData(Object newValue)
   * @param newValue CommunicationData for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFFieldLongData.html#setCommunicationData(Object)
   */
  setCommunicationData = (newValue: Object): void => {
    this.setValue(newValue.toString())
  }

  /**
   * jcf.gui.JCFFieldLongData::getViewText()
   */
  getViewText = (): string => {
    return this.viewText.value
  }

  /**
   * jcf.gui.JCFFieldLongData::setViewText()
   */
  setViewText = (viewText: string): void => {
    this.viewText.value = viewText
  }
}
