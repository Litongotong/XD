import type { JCFScreenData } from '.'

export class JCFContext {
  static DEFAULT_SCREEN = 'defaultScreen'

  globalData: Record<string /* screenId */, JCFScreenData> = {}
  currentScreenId: string

  constructor(options?: { defaultScreenId: string }) {
    this.globalData = {}
    this.currentScreenId = options?.defaultScreenId ?? JCFContext.DEFAULT_SCREEN
  }

  changeScreen(screenId: string) {
    this.currentScreenId = screenId
  }

  getCurrentScreenData(): JCFScreenData {
    return this.globalData[this.currentScreenId]
  }
}
