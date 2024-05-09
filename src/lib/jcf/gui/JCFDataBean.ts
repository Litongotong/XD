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
import type { Color } from '@/lib/native/awt/Color'
import { bindThis } from '@/utils/class/bind'

// 🟢 完成

export class JCFDataBean {
  foreground = ref<Color>()
  background = ref<Color>()
  enabled = ref(true)
  tag = ref('')

  /**
   * JCFDataBean インスタンスを作成する。
   * @param newID newID。
   */
  constructor() {
    bindThis(this)
  }

  /**
   * jcf.gui.JCFDataBean::getForeground()
   */
  getForeground(): Color {
    return this.foreground.value!
  }

  /**
   * jcf.gui.JCFDataBean::setForeground(Color color)
   * @param color Color for appends
   */
  setForeground(color?: Color): void {
    if (!this.foreground.value && !color) {
      return
    }
    if (color && this.foreground.value && color.equals(this.foreground.value)) {
      return
    }
    this.foreground.value = color
  }

  /**
   * jcf.gui.JCFDataBean::setBackground(Color color)
   * @param color Color for appends
   */
  setBackground(color?: Color): void {
    if (!this.background.value && !color) {
      return
    }
    if (color && this.background.value && color.equals(this.background.value)) {
      return
    }
    this.background.value = color
  }

  /**
   * jcf.gui.JCFDataBean::getBackground()
   */
  getBackground(): Color {
    return this.background.value!
  }

  /**
   * jcf.gui.JCFDataBean::isEnabled()
   */
  isEnabled(): boolean {
    return !!this.enabled.value
  }

  /**
   * jcf.gui.JCFDataBean::setEnabled(boolean newEnabled)
   * @param newEnabled Enabled for appends
   */
  setEnabled(enabled: boolean) {
    if (this.enabled.value === enabled) {
      return
    }
    this.enabled.value = enabled
  }

  /**
   * jcf.gui.JCFDataBean::getTag()
   */
  getTag(): string {
    return this.tag.value
  }

  /**
   * jcf.gui.JCFDataBean::setTag(String newTag)
   * @param newTag tag for appends
   */
  setTag(tag?: string): void {
    if (!this.tag.value && !tag) {
      return
    }
    if (tag && this.tag.value && this.tag.value === tag) {
      return
    }
    if (!tag) {
      this.tag.value = ''
      return
    }
    this.tag.value = tag
  }

  /**
   * jcf.gui.JCFDataBean::setDataAndAttributes(any dataBean)
   * @param dataBean dataBean for appends
   */
  setDataAndAttributes(dataBean: any) {
    if (!dataBean) {
      return
    } else {
      const data = dataBean as JCFDataBean
      this.setForeground(data.getForeground())
      this.setBackground(data.getBackground())
      this.setEnabled(data.isEnabled())
      this.setTag(data.getTag())
      return
    }
  }

  _getName(): string {
    return 'JCFDataBean'
  }

  static _getName(): string {
    return 'JCFDataBean'
  }

  _getType() {
    return JCFDataBean as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFDataBean'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFDataBean'
  }
}
