import type { JCFContext } from './JCFContext'
import type { JCFPanelData } from '../gui/JCFPanelData'
import type { IGlobalScreenData } from '@/lib/adapter/interface'
import type { JCFItemData } from '../gui/JCFItemData'
import { ref } from 'vue'

// 🟢 完成

export class JCFScreenData {
  screenId: string
  context: JCFContext
  data: IGlobalScreenData

  // origin fields
  enable = ref(true)

  constructor(opts: {
    context: JCFContext
    screenId: string
    data?: IGlobalScreenData
  }) {
    const { context, screenId, data } = opts
    this.screenId = screenId
    this.context = context
    this.data = data || {}
  }

  setEnabled(status: boolean) {
    this.enable.value = status
  }

  isEnable(): boolean {
    return this.enable.value
  }

  removePanelData(panelID: string) {
    throw new Error('Method not implemented.')
  }

  addPanelData(frameID: string, panelID: string, paneldata: JCFPanelData) {
    throw new Error('Method not implemented.')
  }

  getAllPanelIDs(): string[] {
    throw new Error('Method not implemented.')
  }

  getFrameID(panelId: string): string {
    const frameIdToPanelIdMap = this.context.viewData.frameIdToPanelIdMap
    if (!frameIdToPanelIdMap?.length) {
      return ''
    }
    const panel = Object.entries(frameIdToPanelIdMap).find((i) => {
      return i[1] === panelId
    })
    if (!panel) {
      return ''
    }
    return panel[0]
  }

  clearData() {
    throw new Error('Method not implemented.')
  }

  isEmpty(): boolean {
    return Object.keys(this.data).length === 0
  }

  getPanelID(frameID: string): string {
    const frameIdToPanelIdMap = this.context.viewData.frameIdToPanelIdMap
    if (!frameIdToPanelIdMap?.length) {
      return ''
    }
    return frameIdToPanelIdMap[frameID]
  }

  getPanelData(): JCFPanelData
  getPanelData(frameID: string): JCFPanelData
  getPanelData(frameID: string, outLog: boolean): JCFPanelData
  getPanelData(...params: any[]) {
    if (params.length === 0) {
      return this.__getPanelData()
    } else if (params.length === 1) {
      return this.__getPanelDataByFrameID(params[0])
    } else if (params.length === 2) {
      return this.__getPanelDataByFrameIDWithOutLog(params[0], params[1])
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  private __getPanelData(): JCFPanelData {
    throw new Error('Method not implemented.')
  }
  private __getPanelDataByFrameID(frameID: string): JCFPanelData {
    const frameIdToPanelIdMap = this.context.viewData.frameIdToPanelIdMap
    const panelId = frameIdToPanelIdMap[frameID]
    return this.data[panelId]
  }
  private __getPanelDataByFrameIDWithOutLog(
    frameID: string,
    outLog: boolean,
  ): JCFPanelData {
    return this.__getPanelDataByFrameID(frameID)
  }

  getTopFrameItemData(itemID: string) {
    throw new Error('Method not implemented.')
  }

  getItemData(itemID: string): JCFItemData[]
  getItemData(itemID: string, outLog: boolean): JCFItemData[]
  getItemData(frameID: string, itemID: string): JCFItemData
  getItemData(frameID: string, itemID: string, outLog: boolean): JCFItemData
  getItemData(...params: any[]): JCFItemData | JCFItemData[] {
    if (params.length === 1) {
      return this.__getItemDataWithItemID(params[0])
    } else if (params.length === 2) {
      const isFirstArgAsString = typeof params[0] === 'string'
      const isSecondArgAsString = typeof params[1] === 'string'
      const isSecondArgAsBoolean = typeof params[1] === 'boolean'
      if (isFirstArgAsString && isSecondArgAsString) {
        return this.__getItemData(params[0], params[1])
      } else if (isFirstArgAsString && isSecondArgAsBoolean) {
        return this.__getItemDataWithItemIDAndOutLog(params[0], params[1])
      } else {
        throw new Error('Invalid argument')
      }
    } else if (params.length === 3) {
      return this.__getItemDataWithOutlog(params[0], params[1], params[2])
    } else {
      throw new Error('Invalid number of arguments')
    }
  }

  private __getItemDataWithItemIDAndOutLog(
    itemID: string,
    outLog: boolean,
  ): JCFItemData[] {
    const result: JCFItemData[] = []
    Object.entries(this.data).forEach(([panelID, panelData]) => {
      const itemData = panelData.getItemData(itemID)
      if (itemData) {
        result.push(itemData)
      }
    })
    return result
  }

  private __getItemDataWithItemID(itemID: string): JCFItemData[] {
    return this.__getItemDataWithItemIDAndOutLog(itemID, true)
  }

  private __getItemData(frameID: string, itemID: string): JCFItemData {
    const panelData = this.getPanelData(frameID)
    const itemData = panelData.getItemData(itemID)
    return itemData
  }

  private __getItemDataWithOutlog(
    frameID: string,
    itemID: string,
    outLog: boolean,
  ): JCFItemData {
    return this.__getItemData(frameID, itemID)
  }

  getFrameIDList(): string[] {
    return Object.keys(this.context.viewData.frameIdToPanelIdMap)
  }

  hasData(data: JCFItemData | JCFPanelData): boolean {
    throw new Error('Method not implemented.')
  }

  memory() {
    throw new Error('Method not implemented.')
  }

  undo() {
    throw new Error('Method not implemented.')
  }

  getLayoutFrameIDList() {
    throw new Error('Method not implemented.')
  }

  getFrameData() {
    throw new Error('Method not implemented.')
  }

  getLayoutFrameData() {
    throw new Error('Method not implemented.')
  }

  addFrameDataList() {
    throw new Error('Method not implemented.')
  }

  clearFrameDataList() {
    throw new Error('Method not implemented.')
  }

  isFrameDataList() {
    throw new Error('Method not implemented.')
  }

  getFrameDataList() {
    throw new Error('Method not implemented.')
  }

  clearBoundsOnScreen() {
    throw new Error('Method not implemented.')
  }
  addBoundsOnScreen() {
    throw new Error('Method not implemented.')
  }
  getBoundsOnScreen() {
    throw new Error('Method not implemented.')
  }

  _getName(): string {
    return 'JCFScreenData'
  }

  static _getName(): string {
    return 'JCFScreenData'
  }

  _getType() {
    return JCFScreenData as any
  }

  _getFullName(): string {
    return 'jcf.ctrl.JCFScreenData'
  }

  static _getFullName(): string {
    return 'jcf.ctrl.JCFScreenData'
  }
}
