// 🟡 まだ最低限の実装

import type { JCFEventAdditionalInfo } from './JCFEventAdditionalInfo'

export interface IJCFEventIds {
  subsystemID: string
  actionCode: string
  actionID: string
  itemID: string
  panelID: string
  frameID: string
  screenID: string
}

export interface IJCFEventOptions extends IJCFEventIds {
  additionalInfo: JCFEventAdditionalInfo
}

export class JCFEvent {
  private additionalInfo: JCFEventAdditionalInfo
  private subsystemID: string
  private actionCode: string
  private actionID: string
  private itemID: string
  private panelID: string
  private frameID: string
  private screenID: string

  constructor(opts: IJCFEventOptions) {
    const {
      additionalInfo,
      subsystemID,
      actionCode,
      actionID,
      itemID,
      panelID,
      frameID,
      screenID,
    } = opts
    this.additionalInfo = additionalInfo
    this.subsystemID = subsystemID
    this.actionCode = actionCode
    this.actionID = actionID
    this.itemID = itemID
    this.panelID = panelID
    this.frameID = frameID
    this.screenID = screenID
  }

  getActionCode(): string {
    return this.actionCode
  }

  getActionID(): string {
    return this.actionID
  }

  getItemID(): string {
    return this.itemID
  }

  getPanelID(): string {
    return this.panelID
  }

  getFrameID(): string {
    return this.frameID
  }

  getScreenID(): string {
    return this.screenID
  }

  getSubsystemID(): string {
    return this.subsystemID
  }

  getEventAdditionalInfo(): JCFEventAdditionalInfo {
    return this.additionalInfo
  }

  setEventAdditionalInfo(additionalInfo: JCFEventAdditionalInfo) {
    this.additionalInfo = additionalInfo
  }

  _getName(): string {
    return 'JCFEvent'
  }

  static _getName(): string {
    return 'JCFEvent'
  }

  _getType() {
    return JCFEvent as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFEvent'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFEvent'
  }
}
