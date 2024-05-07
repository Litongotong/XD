/******************************************************************************
 * jcf.ctrl.JCFIllegalStateException
 *
 * プログラム名     : jcf.ctrl.JCFIllegalStateException
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFIllegalStateException を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFException } from './JCFException'

export class JCFIllegalStateException extends JCFException {
  constructor(message?: string, cause?: Error) {
    super(message, cause)
  }
}
