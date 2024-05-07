/******************************************************************************
 * jcf.ctrl.JCFAdapterException
 *
 * プログラム名     : jcf.ctrl.JCFAdapterException
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFAdapterException を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import type { Throwable } from '@/lib/native/lang/Throwable'
import { JCFException } from './JCFException'

export class JCFAdapterException extends JCFException {
  constructor(message?: string, cause?: Throwable) {
    super(message, cause)
  }

  _getName(): string {
    return 'JCFAdapterException'
  }

  static _getName(): string {
    return 'JCFAdapterException'
  }

  _getType() {
    return JCFAdapterException as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFAdapterException'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFAdapterException'
  }
}
