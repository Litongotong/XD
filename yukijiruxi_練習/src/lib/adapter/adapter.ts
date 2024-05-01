import type { Func, IAdapterExtra } from './types'
import { JCFEvent, JCFItemData, JCFReturnInfo } from './sms/jcf'
import { provider } from './provider'
import { useSetup } from './hooks/setup'
import { useContext } from './hooks'
import type { Ref } from 'vue'


export class Adapter {
  extra: IAdapterExtra

  constructor() {
    const screenId = provider.inject.screen() || 'defaultId'
    const frameId = provider.inject.frame() || 'defaultId'

    const { setupItem } = useSetup()

    this.extra = {
      screenId,
      frameId,
      setupItem,
      get: (itemId: string) => {
        return this.getItemDataById(itemId)
      },
      wrap: (viewAction: Func) => {
        this.wrapAction(viewAction)
      },
    }
  }

  private getItemDataById(itemId: string): JCFItemData {
    const { context } = useContext()

    const globalData = context.globalData

    const screenData = globalData[this.extra.screenId].data
    const panelData = screenData[this.extra.frameId].data
    const itemData = panelData[itemId]

    return itemData
  }

  private wrapAction(viewAction: Func) {
    const { context } = useContext()
    viewAction(new JCFEvent(), context, new JCFReturnInfo())
  }
}
