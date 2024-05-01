/******************************************************************************
 * jcf.gui.JCFDataBean
 *
 * プログラム名     : jcf.gui.JCFDataBean
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）佐藤亮之介  | JCFDataBean を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'
import type { JCFChangedListener } from '@/lib/jcf/gui/JCFChangedListener'
import { JCFChangedEvent } from '@/lib/jcf/gui/JCFChangedEvent'

export class JCFDataBean {
  private id: string
  private changedListener = ref<JCFChangedListener | null>(null)
  private foreground = ref<string>('') //後ほどデータ型をColorに修正
  private background = ref<string>('') //後ほどデータ型をColorに修正
  private enabled = ref<boolean>(false)
  private tag = ref<string>('')

  /**
   * JCFDataBean インスタンスを作成する。
   * @param newID newID。
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#JCFDataBean(java.lang.String)
   */
  constructor(newID: string) {
    this.changedListener.value = null
    this.foreground.value = '' //後ほどデータ型をColorに修正:null
    this.background.value = '' //後ほどデータ型をColorに修正:null
    this.tag.value = ''
    this.enabled.value = false
    this.id = newID
  }

  /**
   * jcf.gui.JCFDataBean::getID()
   */
  protected getID() {
    return this.id
  }

  /**
   * jcf.gui.JCFDataBean::getForeground()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#getForeground()
   */
  getForeground = (): string => {
    //後ほどデータ型をColorに修正
    return this.foreground.value
  }

  /**
   * jcf.gui.JCFDataBean::setForeground(Color color)
   * @param color Color for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#setForeground(java.awt.Color)
   */
  setForeground = (color: string): void => {
    //後ほどデータ型をColorに修正
    if (this.foreground.value == null && color == null) {
      return
    }
    if (
      this.foreground.value != null &&
      color != null /* && this.foreground.equals(color) */
    ) {
      return
    } else {
      this.foreground.value = color
      this.callChangedListener()
      return
    }
  }

  /**
   * jcf.gui.JCFDataBean::getBackground()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#getBackground()
   */
  getBackground = (): string => {
    //後ほどデータ型をColorに修正
    return this.background.value
  }

  /**
   * jcf.gui.JCFDataBean::setBackground(Color color)
   * @param color Color for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#setBackground(java.awt.Color)
   */
  setBackground = (color: string): void => {
    //後ほどデータ型をColorに修正
    if (this.background.value == null && color == null) {
      return
    }
    if (
      this.background.value != null &&
      color != null /* && this.background.equals(color) */
    ) {
      return
    } else {
      this.background.value = color
      this.callChangedListener()
      return
    }
  }

  /**
   * jcf.gui.JCFDataBean::isEnabled()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#isEnabled()
   */
  isEnabled = (): boolean => {
    return this.enabled.value
  }

  /**
   * jcf.gui.JCFDataBean::setEnabled(boolean newEnabled)
   * @param newEnabled Enabled for appends
   */
  protected setEnabled(newEnabled: boolean) {
    if (this.enabled.value == newEnabled) {
      return
    } else {
      this.enabled.value = newEnabled
      this.callChangedListener()
      return
    }
  }

  /**
   * jcf.gui.JCFDataBean::getTag()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#getTag()
   */
  getTag = (): string => {
    return this.tag.value
  }

  /**
   * jcf.gui.JCFDataBean::setTag(String newTag)
   * @param newTag tag for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#setTag(String)
   */
  setTag = (newTag: string): void => {
    if (this.tag.value == null && newTag == null) {
      return
    }
    if (this.tag.value != null && newTag != null && this.tag.value == newTag) {
      return
    } else {
      this.tag.value = newTag
      this.callChangedListener()
      return
    }
  }

  /**
   * jcf.gui.JCFDataBean::setDataAndAttributes(JCFDataBean dataBean)
   * @param dataBean tag for appends
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFDataBean.html#setDataAndAttributes(JCFDataBean)
   */
  setDataAndAttributes(dataBean: JCFDataBean) {
    if (dataBean == null) {
      return
    } else {
      this.setForeground(dataBean.getForeground())
      this.setBackground(dataBean.getBackground())
      this.setEnabled(dataBean.isEnabled())
      this.setTag(dataBean.getTag())
      return
    }
  }

  protected callChangedListener() {
    if (this.changedListener.value == null) {
      return
    } else {
      this.changedListener.value.changed(new JCFChangedEvent(this))
      return
    }
  }

  protected setChangedListener(listener: JCFChangedListener) {
    this.changedListener.value = listener
  }

  protected clearChangedListener() {
    this.changedListener.value = null
  }
}
