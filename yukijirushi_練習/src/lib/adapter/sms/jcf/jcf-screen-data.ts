import type { JCFContext, JCFPanelData } from '.'

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
}
