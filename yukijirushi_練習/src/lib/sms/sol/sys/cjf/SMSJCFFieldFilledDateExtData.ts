/******************************************************************************
 * sms.sol.sys.cjf.SMSJCFFieldFilledDateExtData
 *
 * プログラム名     : sms.sol.sys.cjf.SMSJCFFieldFilledDateExtData
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | SMSJCFFieldFilledDateExtData を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/
import { JCFFieldFilledDateData } from '@/lib/jcf/gui/JCFFieldFilledDateData'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { Color } from '@/lib/native/awt/Color'
import { bindThis } from '@/utils/class/bind'

// 🟢 完成

export class SMSJCFFieldFilledDateExtData extends JCFFieldFilledDateData {
  constructor(itemID: string) {
    super(itemID)

    bindThis(this)
  }

  setDataAndAttributes(itemData: JCFItemData) {
    if (itemData?._getType() === SMSJCFFieldFilledDateExtData) {
      super.setDataAndAttributes(itemData)
    }
  }

  setData(itemData: JCFItemData) {
    if (itemData?._getType() === SMSJCFFieldFilledDateExtData) {
      super.setData(itemData)
    }
  }

  setModified(newModified: boolean) {
    super.setModified(newModified)
  }

  setErrorCode(newErrorCode: string) {
    super.setErrorCode(newErrorCode)
  }

  setMaxLengths(newMaxLengths: number[]) {
    super.setMaxLengths(newMaxLengths)
  }

  //	protected setValue(String value) {
  //		super.setValue(value);
  //	}

  setBackground(color: Color) {
    super.setBackground(color)
  }

  _getName(): string {
    return 'SMSJCFFieldFilledDateExtData'
  }

  static _getName(): string {
    return 'SMSJCFFieldFilledDateExtData'
  }

  _getType() {
    return SMSJCFFieldFilledDateExtData as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJCFFieldFilledDateExtData'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.cjf.SMSJCFFieldFilledDateExtData'
  }
}
