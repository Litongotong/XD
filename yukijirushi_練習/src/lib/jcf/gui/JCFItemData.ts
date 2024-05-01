/******************************************************************************
 * jcf.gui.JCFItemData
 *
 * プログラム名     : jcf.gui.JCFItemData
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）佐藤亮之介  | JCFItemData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import type { JCFEnabledListener } from '@/lib/jcf/gui/JCFEnabledListener'
import { JCFDataBean } from '@/lib/jcf/gui/JCFDataBean'
import { JCFEnabledEvent } from '@/lib/jcf/gui/JCFEnabledEvent'

export abstract class JCFItemData<Value extends any = any> extends JCFDataBean {
  private enabledListener = ref<JCFEnabledListener | null>(null)
  private visible = ref<boolean>(false)
  private reverse = ref<boolean>(false)
  private modified = ref<boolean>(false)
  private errorCode = ref<string>('')

  /**
   * JCFItemData インスタンスを作成する。
   * @param newItemID アイテムID。
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#JCFItemData(java.lang.String)
   */
  constructor(newItemID: string) {
    super(newItemID)
    this.enabledListener.value = null
    this.visible.value = false
    this.reverse.value = false
    this.modified.value = false
    this.errorCode.value = 'ERROR_NOTHING'
  }

  /**
   * jcf.gui.JCFItemData::getItemID()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#getItemID()
   */
  getItemID = (): string => {
    return super.getID()
  }

  /**
   * jcf.gui.JCFItemData::isVisible()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#isVisible()
   */
  isVisible = (): boolean => {
    return this.visible.value
  }

  /**
   * jcf.gui.JCFItemData::setVisible(boolean newVisible)
   * @param newVisible Visible for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setVisible(boolean)
   */
  setVisible = (newVisible: boolean): void => {
    this.visible.value = newVisible
    this.callChangedListener()
  }

  /**
   * jcf.gui.JCFItemData::isReverse()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#isReverse()
   */
  isReverse = (): boolean => {
    return this.reverse.value
  }

  /**
   * jcf.gui.JCFItemData::setReverse(boolean newReverse)
   * @param newReverse Reverse for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setReverse(boolean)
   */
  setReverse = (newReverse: boolean): void => {
    this.reverse.value = newReverse
    this.callChangedListener()
  }

  /**
   * jcf.gui.JCFItemData::isModified()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#isModified()
   */
  isModified = (): boolean => {
    return this.modified.value
  }

  /**
   * jcf.gui.JCFItemData::setModified(boolean newModified)
   * @param newModified Modified for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setModified(boolean)
   */
  setModified = (newModified: boolean): void => {
    this.modified.value = newModified
  }

  /**
   * jcf.gui.JCFItemData::getErrorCode()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#getErrorCode()
   */
  getErrorCode = (): string => {
    return this.errorCode.value
  }

  /**
   * jcf.gui.JCFItemData::setErrorCode(boolean newErrorCode)
   * @param newErrorCode ErrorCode for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setErrorCode(boolean)
   */
  setErrorCode = (newErrorCode: string): void => {
    this.errorCode.value = newErrorCode
  }

  /**
   * jcf.gui.JCFItemData::getValue
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#getValue()
   */
  abstract getValue(): Value

  /**
   * jcf.gui.JCFItemData::setValue
   * @param s Value for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setValue(java.lang.String)
   */
  abstract setValue(s: Value): void

  /**
   * jcf.gui.JCFItemData::setDataAndAttributes(JCFItemData itemData)
   * @param itemData itemData for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setDataAndAttributes(JCFItemData)
   */
  setDataAndAttributes = (itemData: JCFItemData): void => {
    if (itemData == null) {
      return
    } else {
      this.setVisible(itemData.isVisible())
      this.setReverse(itemData.isReverse())
      this.setModified(itemData.isModified())
      this.setErrorCode(itemData.getErrorCode())
      super.setDataAndAttributes(itemData)
      return
    }
  }

  protected undo(itemData: JCFItemData) {
    this.setDataAndAttributes(itemData)
  }

  /**
   * jcf.gui.JCFItemData::setData(JCFItemData jcfitemdata)
   * @param jcfitemdata JCFitemdata for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setData(JCFItemData)
   */
  abstract setData(jcfitemdata: JCFItemData): void

  /**
   * jcf.gui.JCFItemData::getCommunicationData
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#getCommunicationData()
   */
  abstract getCommunicationData(): Object

  /**
   * jcf.gui.JCFItemData::setCommunicationData(Object obj)
   * @param jcfitemdata JCFitemdata for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setCommunicationData(Object)
   */
  abstract setCommunicationData(obj: Object): void

  /**
   * jcf.gui.JCFItemData::setEnabled(boolean newEnabled)
   * @param newEnabled Enabled for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFItemData.html#setEnabled(boolean)
   */
  setEnabled = (newEnabled: boolean): void => {
    if (!this.isEnabled() && newEnabled && this.enabledListener.value != null) {
      const enabledEvent = new JCFEnabledEvent(this.getItemID())
      this.enabledListener.value.enabledChanged(enabledEvent)
    }
    super.setEnabled(newEnabled)
  }

  protected setEnabledListener(listener: JCFEnabledListener) {
    this.enabledListener.value = listener
  }

  protected clearEnabledListener() {
    this.enabledListener.value = null
  }
}
