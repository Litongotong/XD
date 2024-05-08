/******************************************************************************
 * jcf.gui.JCFChangedEvent
 *
 * プログラム名     : jcf.gui.JCFChangedEvent
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）佐藤亮之介  | JCFChangedEvent を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFDataBean } from '@/lib/jcf/gui/JCFDataBean'
import { ref } from 'vue'

export class JCFChangedEvent {
  private dataBean = ref<JCFDataBean | undefined>()

  /**
   * JCFChangedEvent インスタンスを作成する。
   * @param newID newID。
   */

  constructor(newDataBean: JCFDataBean) {
    this.dataBean.value = newDataBean
  }

  /**
   * jcf.gui.JCFDataBean::getDataBean()
   */

  getDataBean = (): JCFDataBean | undefined => {
    return this.dataBean.value
  }
}
