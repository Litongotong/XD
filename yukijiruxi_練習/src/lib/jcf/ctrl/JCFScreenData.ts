import type { JCFItemData } from "../gui/JCFItemData"
import type { JCFPanelData } from "../gui/JCFPanelData"
import type { JCFContext } from "./JCFContext"

export class JCFScreenData {
  screenId: string
  context: JCFContext
  data: Record<string /* frameId */, JCFPanelData>

  constructor(
    context: JCFContext,
    screenId: string,
    data: Record<string, JCFPanelData>,
  ) {
    this.screenId = screenId
    this.context = context
    this.data = data
  }

  getPanelData(frameId: string): JCFPanelData {
    return this.data[frameId]
  }

  getItemData(frameId: string, itemId: string): JCFItemData {
    return this.data[frameId].getItemData(itemId)
  }
}
