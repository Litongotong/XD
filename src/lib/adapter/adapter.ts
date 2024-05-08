import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import { provider } from './provider'
import { useSetup } from './hooks/setup'
import { getGlobalContext } from './hooks'
import { useView } from '@/routes/view/useView'
import type {
  IAdapterExtraGet,
  IAdapterExtraWrap,
  IExtraWrapOpts,
  ISetupItem,
} from './interface'
import type { JCFItemData } from '../jcf/gui/JCFItemData'
import { MsisDebug } from '@/utils/debug/log'
import type { ISystemActionDispatchOpts } from '@/routes/view/interface'

export interface IAdapterExtra {
  screenId: string
  frameId: string
  get: IAdapterExtraGet
  wrap: IAdapterExtraWrap
  setupItem: ISetupItem
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

  // in Vue `setup`
  constructor() {
    const screenId = provider.inject.screen()
    const frameId = provider.inject.frame()
    const itemId = provider.inject.item()

    // context
    const { context } = getGlobalContext()
    this._context = context

    // registry context
    const view = useView()

    const { setupItem } = useSetup()

    this.extra = {
      screenId,
      frameId,
      setupItem,
      get: (itemId) => this.getItemDataById(itemId),
      wrap: async (opts: IExtraWrapOpts) => {
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
    const logicClassName = provider.inject.logicClassName()
    if (logicClassName) {
      view.adapter.registerLogic(logicClassName, this)
    }
  }

  private getItemDataById(itemId: string): JCFItemData {
    const globalData = this._context.globalData
    const screenData = globalData[this.extra.screenId].data
    const panelId =
      this._context.viewData.frameIdToPanelIdMap[this.extra.frameId]
    if (!panelId) {
      throw new Error(`panelId is not found, frameId: ${this.extra.frameId}`)
    }
    const panelData = screenData[panelId].data
    const itemData = panelData[itemId] || EMPTY_ITEM_DATA
    return itemData
  }

  static create() {
    if (MsisDebug.isDevPage()) {
      const mockExtra: IAdapterExtra = {
        screenId: 'SCR_MOCK_SCREEN_ID',
        frameId: 'MOCK_FLM_BODY_FRAME',
        setupItem: () => {},
        get: (itemId) => {
          MsisDebug.log(`"logic.extra.get" itemId`, itemId)
          return EMPTY_ITEM_DATA
        },
        wrap: async (opts) => {
          MsisDebug.log(`"logic.extra.wrap" opts`, opts)
        }
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
