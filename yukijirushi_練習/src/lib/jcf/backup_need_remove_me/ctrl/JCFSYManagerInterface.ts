/******************************************************************************
 * jcf.ctrl.JCFSYManagerInterface
 *
 * プログラム名     : jcf.ctrl.JCFSYManagerInterface
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFSYManagerInterface を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
export interface JCFSYManagerInterface {
  changeSubsystem(s: string, s1: string): void
  openMultiWindow(s: string, s1: string, s2: string): void
  startDynamicReadChangeSequence(s: string, s1: string): void
  isDispatchThread(): boolean
}
