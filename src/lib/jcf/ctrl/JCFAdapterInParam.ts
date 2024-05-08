/******************************************************************************
 * jcf.ctrl.JCFAdapterInParam
 *
 * プログラム名     : jcf.ctrl.JCFAdapterInParam
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFAdapterInParam を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFAdapterParam } from './JCFAdapterParam'

// 🟢 基本完成

export class JCFAdapterInParam extends JCFAdapterParam {
  constructor() {
    super()
  }

  _getName(): string {
    return 'JCFAdapterInParam'
  }

  static _getName(): string {
    return 'JCFAdapterInParam'
  }

  _getType() {
    return JCFAdapterInParam as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFAdapterInParam'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFAdapterInParam'
  }
}
