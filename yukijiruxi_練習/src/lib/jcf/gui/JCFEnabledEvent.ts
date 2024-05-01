/******************************************************************************
 * jcf.gui.JCFEnabledEvent
 *
 * プログラム名     : jcf.gui.JCFEnabledEvent
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）佐藤亮之介  | JCFEnabledEvent を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { ref } from 'vue'

export class JCFEnabledEvent {
  private itemID = ref<string>('')

  /**
   * JCFEnabledEvent インスタンスを作成する。
   * @param newItemID newID。
   */

  constructor(newItemID: string) {
    this.itemID.value = newItemID
  }

  /**
   * jcf.gui.JCFEnabledEvent::getItemID()
   * @see cjfJavadoc/javadoc_cjfgui/com/fujitsu/jcf/gui/JCFEnabledEvent.html#getItemID()
   */

  getItemID = (): string => {
    return this.itemID.value
  }
}
