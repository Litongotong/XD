/******************************************************************************
 * jcf.ctrl.JCFAdapterOutParam
 *
 * プログラム名     : jcf.ctrl.JCFAdapterOutParam
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFAdapterOutParam を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFAdapterParam } from './JCFAdapterParam'
import { JCFAdapterException } from './JCFAdapterException'

// 🟢 完成

export class JCFAdapterOutParam extends JCFAdapterParam {
  private exceptionThrown: boolean
  private exception: JCFAdapterException

  constructor() {
    super()
    this.exceptionThrown = false
  }

  setExceptionThrown(exceptionThrown: boolean) {
    this.exceptionThrown = exceptionThrown
  }

  isExceptionThrown(): boolean {
    return this.exceptionThrown
  }

  setException(exception: JCFAdapterException) {
    this.exception = exception
  }

  getException(): JCFAdapterException {
    return this.exception
  }

  toString(): string {
    return `JCFAdapterOutParam [exceptionThrown=${this.exceptionThrown}, exception=${this.exception}]`
  }

  _getName(): string {
    return 'JCFAdapterOutParam'
  }

  static _getName(): string {
    return 'JCFAdapterOutParam'
  }

  _getType() {
    return JCFAdapterOutParam as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFAdapterOutParam'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFAdapterOutParam'
  }
}
