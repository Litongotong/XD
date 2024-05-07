/******************************************************************************
 * jcf.ctrl.JCFCMReference
 *
 * プログラム名     : jcf.ctrl.JCFCMReference
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFCMReference を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFCMDefReference } from './JCFCMDefReference'

export class JCFCMReference {
  private windowID: string
  private subsystemID: string = ''
  defReference: JCFCMDefReference | null = null

  constructor(windowID: string) {
    this.windowID = windowID
  }

  /**
   * jcf.ctrl.JCFCMReference::getWindowID()
   * @returns string
   */
  getWindowID(): string {
    return this.windowID
  }

  /**
   * jcf.ctrl.JCFCMReference::getSubsystemID()
   * @returns string
   */
  getSubsystemID(): string {
    return this.subsystemID
  }

  getDefReference(): JCFCMDefReference {
    return this.defReference as JCFCMDefReference
  }
}
