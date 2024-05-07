import { JCFPanelData } from '../gui/JCFPanelData'

export class JCFSYGUIInstanceManager {
  private static instanceController: JCFSYGUIInstanceManager | null = null

  private executionType: number
  private modelType: number
  private lookAndFeel: string

  private constructor() {
    this.executionType = 0
    this.modelType = 1
    this.lookAndFeel = ''
  }

  public static getInstance(): JCFSYGUIInstanceManager {
    if (this.instanceController === null) {
      this.instanceController = new JCFSYGUIInstanceManager()
    }
    return this.instanceController
  }

  public createPanelData(panelID: string, itemNumber: number): JCFPanelData {
    return new JCFPanelData(panelID, itemNumber)
  }
}
