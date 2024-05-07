/******************************************************************************
 * jcf.ctrl.JCFEventAdditionalInfo
 *
 * プログラム名     : jcf.ctrl.JCFEventAdditionalInfo
 * 担当者           : itac）南楠
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/08/31 | itac）南楠  | JCFEventAdditionalInfo を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 ******************************************************************************/

import type { Serializable } from '@/lib/native/io/Serializable'

export class JCFEventAdditionalInfo {
  private itemID: string
  private panelID: string
  private actionCode: string
  private actionID: string
  private frameID: string
  private screenID: string
  private _isWindowOpened: boolean
  private _isSubsystemChanged: boolean
  private _isWindowClosing: boolean
  private additionalInfo: Serializable

  constructor(closeWindow: boolean)
  constructor(openWindow: boolean, changeSubsystem: boolean)
  constructor(
    actionCode: string,
    actionID: string,
    itemID: string,
    panelID: string,
    frameID: string,
    screenID: string,
    additionalInfo: Serializable,
  )
  constructor(...args: any[]) {
    if (args.length === 1) {
      const [closeWindow] = args
      this.itemID = ''
      this.panelID = ''
      this.actionCode = ''
      this.actionID = ''
      this.frameID = ''
      this.screenID = ''
      this._isWindowOpened = false
      this._isSubsystemChanged = false
      this._isWindowClosing = false
      this.additionalInfo = null!
      this.isWindowClosing = closeWindow
    } else if (args.length === 2) {
      const [openWindow, changeSubsystem] = args
      this.itemID = ''
      this.panelID = ''
      this.actionCode = ''
      this.actionID = ''
      this.frameID = ''
      this.screenID = ''
      this._isWindowOpened = false
      this._isSubsystemChanged = false
      this._isWindowClosing = false
      this.additionalInfo = null!
      this.isWindowOpened = openWindow
      this.isSubsystemChanged = changeSubsystem
    } else {
      const [
        actionCode,
        actionID,
        itemID,
        panelID,
        frameID,
        screenID,
        additionalInfo,
      ] = args
      this.itemID = ''
      this.panelID = ''
      this.actionCode = ''
      this.actionID = ''
      this.frameID = ''
      this.screenID = ''
      this._isWindowOpened = false
      this._isSubsystemChanged = false
      this._isWindowClosing = false
      this.additionalInfo = null!
      this.panelID = panelID
      this.itemID = itemID
      this.additionalInfo = additionalInfo
      this.actionCode = actionCode
      this.actionID = actionID
      this.frameID = frameID
      this.screenID = screenID
    }
  }

  getPanelID(): string {
    return this.panelID
  }

  getItemID(): string {
    return this.itemID
  }

  getAdditionalInfo(): Serializable {
    return this.additionalInfo
  }

  getActionCode(): string {
    return this.actionCode
  }

  getActionID(): string {
    return this.actionID
  }

  getFrameID(): string {
    return this.frameID
  }

  getScreenID(): string {
    return this.screenID
  }

  isWindowOpened(): boolean {
    throw new Error('Method not implemented.')
    // return this._isWindowOpened
  }

  isSubsystemChanged(): boolean {
    throw new Error('Method not implemented.')
    // return this._isSubsystemChanged
  }

  isWindowClosing(): boolean {
    throw new Error('Method not implemented.')
    // return this._isWindowClosing
  }

  _getName(): string {
    return 'JCFEventAdditionalInfo'
  }

  static _getName(): string {
    return 'JCFEventAdditionalInfo'
  }

  _getType() {
    return JCFEventAdditionalInfo as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFEventAdditionalInfo'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFEventAdditionalInfo'
  }
}
