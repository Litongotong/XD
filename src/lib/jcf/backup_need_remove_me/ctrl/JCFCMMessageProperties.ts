/******************************************************************************
 * jcf.ctrl.JCFCMMessageProperties
 *
 * プログラム名     : jcf.ctrl.JCFCMMessageProperties
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFCMMessageProperties を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
const messages = `{
  "E1194": "E1194",
  "E1106": "E1106"
}`

export class JCFCMMessageProperties {
  public static getMessage(msgID: string): string {
    let ret = JSON.parse(messages)
    return ret[msgID] || 'Message not found'
  }

  public static getExceptionMessage(msgID: string): string {
    return JCFCMMessageProperties.getMessage(msgID)
  }
}
