import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import { provider } from './provider'
import { getGlobalContext } from './hooks'
import { useView } from '@/routes/view/useView'
import type {
  IAdapterExtraGet,
  IAdapterExtraWrap,
  IExtraWrapOpts,
} from './interface'
import type { JCFItemData } from '../jcf/gui/JCFItemData'
import { MsisDebug } from '@/utils/debug/log'
import type { ISystemActionDispatchOpts } from '@/routes/view/interface'

export interface IAdapterExtra {
  get: IAdapterExtraGet
  wrap: IAdapterExtraWrap
}

function createEmptyItemData() {
  const v = Object.create(null)
  const proxyV: any = new Proxy(v, {
    get(target, p, receiver) {
      if (target[p] === undefined) {
        return proxyV
      } else {
        return Reflect.get(target, p, receiver)
      }
    },
  })
  return proxyV
}

const EMPTY_ITEM_DATA = createEmptyItemData()

export class Adapter {
  extra: IAdapterExtra

  private _context: JCFContext

  private getScreenId: () => string
  private getFrameId: () => string

  // in Vue `setup`
  constructor() {
    const getScreenId = provider.inject.screen()
    this.getScreenId = getScreenId
    const getFrameId = provider.inject.frame()
    this.getFrameId = getFrameId
    const getItemId = provider.inject.item()

    // context
    const { context } = getGlobalContext()
    this._context = context

    // registry context
    const view = useView()

    this.extra = {
      get: (itemId) => this.getItemDataById(itemId),
      wrap: async (opts: IExtraWrapOpts) => {
        const screenId = getScreenId()
        const frameId = getFrameId()
        const itemId = getItemId()
        const dispatchOpts: ISystemActionDispatchOpts = {
          ...opts, // actionCode, itemId, additionalParams
          frameId,
          screenId,
        }
        // auto inject itemId for friendly usage
        if (!dispatchOpts.itemId?.length) {
          const fallbackItemId = itemId
          if (!fallbackItemId?.length) {
            // actually, we can ignore item id.
          } else {
            dispatchOpts.itemId = fallbackItemId
          }
        }
        MsisDebug.log(`"logic.extra.wrap" dispatchOpts`, dispatchOpts)
        await view.system.action.dispatch(dispatchOpts)
      },
    }

    // registry to logic container
    const logicClassName = provider.inject.logicClassName()()
    if (logicClassName) {
      view.adapter.registerLogic(logicClassName, this)
    }
  }

  private getItemDataById(itemId: string): JCFItemData {
    const screenId = this.getScreenId()
    const frameId = this.getFrameId()
    const globalData = this._context.globalData
    const screenData = globalData[screenId].data
    const panelId = this._context.viewData.frameIdToPanelIdMap[frameId]
    if (!panelId) {
      throw new Error(`panelId is not found, frameId: ${frameId}`)
    }
    const panelData = screenData[panelId].data
    const itemData = panelData[itemId] || EMPTY_ITEM_DATA
    return itemData
  }

  static create() {
    if (MsisDebug.isDevPage()) {
      const mockExtra: IAdapterExtra = {
        get: (itemId) => {
          MsisDebug.log(`"logic.extra.get" itemId`, itemId)
          return EMPTY_ITEM_DATA
        },
        wrap: async (opts) => {
          MsisDebug.log(`"logic.extra.wrap" opts`, opts)
        },
      }
      const mockIns = {
        extra: mockExtra,
      }
      return mockIns
    }

    const ins = new Adapter()
    return ins
  }
}
