import type { JCFContext, JCFItemData } from '.'

export class JCFPanelData {
  frameId: string
  context: JCFContext
  data: Record<string /* itemId */, JCFItemData>

  constructor(
    context: JCFContext,
    frameId: string,
    data: Record<string, JCFItemData>,
  ) {
    this.frameId = frameId
    this.context = context
    this.data = data
  }

  getItemData(itemId: string): JCFItemData {
    return this.data[itemId]
  }
}
