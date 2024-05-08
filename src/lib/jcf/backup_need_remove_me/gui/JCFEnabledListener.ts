/******************************************************************************
 * jcf.gui.JCFEnabledListener
 *
 * プログラム名     : jcf.gui.JCFEnabledListener
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）佐藤亮之介  | JCFEnabledListener を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFEnabledEvent } from '@/lib/jcf/gui/JCFEnabledEvent'

export interface JCFEnabledListener {
  enabledChanged(jcfenabledevent: JCFEnabledEvent): void
}
