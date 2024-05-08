/******************************************************************************
 * jcf.gui.JCFChangedListener
 *
 * プログラム名     : jcf.gui.JCFChangedListener
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）佐藤亮之介  | JCFChangedListener を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFChangedEvent } from '@/lib/jcf/gui/JCFChangedEvent'

export interface JCFChangedListener {
  changed(jcfchangedevent: JCFChangedEvent): void
}
