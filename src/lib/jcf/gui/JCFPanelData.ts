import type { IGlobalPanelData } from '@/lib/adapter/interface'
import type { JCFContext } from '../ctrl/JCFContext'
import type { JCFItemData } from './JCFItemData'
import { JCFDataBean } from './JCFDataBean'
import type { Color } from '@/lib/native/awt/Color'
import { SystemColor } from '@/lib/native/awt/SystemColor'
import { bindThis } from '@/utils/class/bind'
import { ref } from 'vue'
import { ArrayList } from '@/lib/native/util/ArrayList'

// 🟢 完成

export class JCFPanelData extends JCFDataBean {
  // custom property
  context: JCFContext
  panelId: string
  data: IGlobalPanelData

  // origin property
  enabledInner = ref(false)

  constructor(opts: {
    context: JCFContext
    panelId: string
    data?: IGlobalPanelData
  }) {
    super()
    const { context, panelId, data } = opts
    this.context = context
    this.panelId = panelId
    this.data = data || {}

    bindThis(this)
  }

  getPanelID(): string {
    return this.panelId
  }

  addItemData(itemData: JCFItemData): void {
    throw new Error('Method not implemented.')
  }

  getItemDataCount(): number {
    return Object.keys(this.data).length
  }

  getAllItemData(): ArrayList<JCFItemData> {
    const arr = Object.values(this.data)
    return ArrayList._fromArray(arr)
  }

  setBackground(color?: Color): void {
    if (!color) {
      color = SystemColor.window
    }
    super.setBackground(color)
  }

  existsItemData(itemData: JCFItemData): boolean {
    if (!itemData) {
      return false
    }
    const item = this.getItemData(itemData.itemId)
    if (!item) {
      return false
    }
    return true
  }

  getItemData(index: number): JCFItemData
  getItemData(itemId: string): JCFItemData
  getItemData(itemId: string | number): JCFItemData {
    const asString = typeof itemId === 'string'
    const asNumber = typeof itemId === 'number'
    if (asString) {
      return this.__getItemDataWithItemID(itemId)
    } else if (asNumber) {
      return this.__getItemData(itemId)
    } else {
      throw new Error('Invalid argument')
    }
  }

  enabledChanged(event: any /* JCFEnabledEvent */) {
    this.enabledInner.value = true
  }

  isEnabledInner(): boolean {
    return this.enabledInner.value
  }

  setEnabledInner(newEnabled: boolean) {
    if (!this.enabledInner.value && !newEnabled) {
      return
    }

    this.enabledInner.value = newEnabled

    Object.values(this.data).forEach((itemData) => {
      itemData.setEnabled(newEnabled)
    })
  }

  //  /**
  //   * jcf.gui.JCFPanelData::getChangedItemData()
  //   */
  //  getChangedItemData(): HashMap | null {
  //    return this.changedItemDataHashMap.value ?? null
  //  }

  private __getItemData(index: number): JCFItemData {
    throw new Error('Method not implemented.')
  }
  private __getItemDataWithItemID(itemId: string): JCFItemData {
    return this.data[itemId]
  }

  _getName(): string {
    return 'JCFPanelData'
  }

  static _getName(): string {
    return 'JCFPanelData'
  }

  _getType() {
    return JCFPanelData as any
  }

  _getFullName(): string {
    return 'jcf.gui.JCFPanelData'
  }

  static _getFullName(): string {
    return 'jcf.gui.JCFPanelData'
  }
}
