import { JCFPanelData } from '@/lib/jcf/gui/JCFPanelData'
import { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import { provider } from '../provider'
import { getGlobalContext } from './context'
import type { ISetupItem } from '../interface'
import { bindThis } from '@/utils/class/bind'

export const useSetup = () => {
  const { context } = getGlobalContext()

  const setupScreen = (screenId: string) => {
    context.currentScreenId = screenId
    context.globalData[screenId] ||= new JCFScreenData({
      context,
      screenId,
    })
  }

  const setupPanel = (panelId: string) => {
    const getScreenId = provider.inject.screen()
    const screenId = getScreenId()
    context.globalData[screenId].data[panelId] ||= new JCFPanelData({
      context,
      panelId,
    })
  }

  const setupItem: ISetupItem = (itemId, instance) => {
    const getScreenId = provider.inject.screen()
    const screenId = getScreenId()
    const getFrameId = provider.inject.frame()
    const frameId = getFrameId()
    const panelId = context.viewData.frameIdToPanelIdMap[frameId]
    if (!panelId) {
      throw new Error(`Panel ID not found, frameId: ${frameId}`)
    }
    const hasConstructor = typeof instance === 'function'
    const panelData = context.globalData[screenId].data[panelId].data
    if (panelData[itemId]) {
      // pass
    } else {
      const ins = hasConstructor ? new instance(itemId) : instance
      bindThis(ins)
      panelData[itemId] = ins
    }
  }

  return {
    setupScreen,
    setupPanel,
    setupItem,
  }
}
