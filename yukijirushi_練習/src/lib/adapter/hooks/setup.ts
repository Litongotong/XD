import { JCFItemData, JCFPanelData, JCFScreenData } from '../sms/jcf'
import { provider } from '../provider'
import { useContext } from './context'

export const useSetup = () => {
  const { context } = useContext()

  const setupScreen = (screenId: string) => {
    context.currentScreenId = screenId
    context.globalData[screenId] ||= new JCFScreenData(context, screenId, {})
    return context.globalData[screenId]
  }

  const setupFrame = (frameId: string) => {
    const screenId = provider.inject.screen() || 'defaultId'
    console.log('setup frame', screenId, context.globalData[screenId])
    context.globalData[screenId].data[frameId] ||= new JCFPanelData(
      context,
      frameId,
      {},
    )
    return context.globalData[screenId].data[frameId]
  }

  const setupItem = <Value = any>(itemId: string, defaultValue?: Value) => {
    const screenId = provider.inject.screen() || 'defaultId'
    const frameId = provider.inject.frame() || 'defaultId'

    let screenData = context.globalData[screenId]
    if (!screenData) screenData = setupScreen(screenId)

    let frameData = screenData.data[frameId]
    if (!frameData) frameData = setupFrame(frameId)

    frameData.data[itemId] ||= new JCFItemData(
      itemId,
      defaultValue,
    )
  }

  return {
    setupScreen,
    setupFrame,
    setupItem,
  }
}
