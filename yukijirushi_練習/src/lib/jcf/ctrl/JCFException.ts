/******************************************************************************
 * jcf.ctrl.JCFException
 *
 * プログラム名     : jcf.ctrl.JCFException
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFException を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/

// 🟢 基本完成

import { Exception } from '@/lib/native/lang/Exception'
import type { Throwable } from '@/lib/native/lang/Throwable'

export class JCFException extends Exception {
  constructor(message?: string, cause?: Throwable) {
    super(message, cause)
  }

  _getName(): string {
    return 'JCFException'
  }

  static _getName(): string {
    return 'JCFException'
  }

  _getType() {
    return JCFException as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFException'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFException'
  }
}
