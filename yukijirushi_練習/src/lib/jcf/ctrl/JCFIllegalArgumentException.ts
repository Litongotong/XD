/******************************************************************************
 * jcf.ctrl.JCFIllegalArgumentException
 *
 * プログラム名     : jcf.ctrl.JCFIllegalArgumentException
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFIllegalArgumentException を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import type { Throwable } from '@/lib/native/lang/Throwable'
import { JCFException } from './JCFException'

export class JCFIllegalArgumentException extends JCFException {
  constructor(message?: string, cause?: Throwable) {
    if (message && cause) {
      super(message, cause)
    } else if (message) {
      super(message)
    } else {
      super()
    }
  }

  _getName(): string {
    return 'JCFIllegalArgumentException'
  }

  static _getName(): string {
    return 'JCFIllegalArgumentException'
  }

  _getType() {
    return JCFIllegalArgumentException as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFIllegalArgumentException'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFIllegalArgumentException'
  }
}
