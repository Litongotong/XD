/******************************************************************************
 * jcf.gui.JCFDataIllegalArgumentException
 *
 * プログラム名     : jcf.gui.JCFDataIllegalArgumentException
 * 担当者           : itac）岩澤武
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/01 | itac）岩澤武  | JCFDataIllegalArgumentException を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFDataException } from './JCFDataException'

export class JCFDataIllegalArgumentException extends JCFDataException {
  constructor(s?: string) {
    super(s)
  }

  _getName(): string {
    return 'JCFDataIllegalArgumentException'
  }

  static _getName(): string {
    return 'JCFDataIllegalArgumentException'
  }

  _getType() {
    return JCFDataIllegalArgumentException as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFDataIllegalArgumentException'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFDataIllegalArgumentException'
  }
}
