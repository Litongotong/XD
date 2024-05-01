/******************************************************************************
 * jcf.gui.JCFDataException
 *
 * プログラム名     : jcf.gui.JCFDataException
 * 担当者           : itac）佐藤亮之介
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）佐藤亮之介  | JCFDataException を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
export class JCFDataException extends Error {
  /**
   * JCFDataException インスタンスを作成する。
   * @param s message
   */
  constructor()
  constructor(s: string)
  constructor(s?: string) {
    if (s != null) {
      super(s!)
    } else {
      super()
    }
  }
}
