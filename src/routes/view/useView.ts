import {
  computed,
  defineAsyncComponent,
  defineComponent,
  h,
  markRaw,
  nextTick,
  ref,
  toRaw,
  watch,
  type CSSProperties,
  type Component,
  type Ref,
} from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep, toNumber, isStringNumber } from '@/utils/useful'
import { useRouter } from 'vue-router'
import { componentsMap } from '../componentsMap'
import {
  SYSTEM_ACTION_CODE,
  SYSTEM_ACTION,
  SYSTEM_TRANSITION_TARGET,
  type ITransitionTo,
  type IPanelConfig,
} from '../config/interface'
import ClassNameWrapper from '@/views/internal/View/components/scope/ClassName.vue'
import type { Adapter } from '@/lib/adapter/adapter'
import { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import { configs } from '../config/configs'
import { isSystemActionCode, isSystemTransitionTarget } from '../config/utils'
import type { IClassInfo } from '../interface'
import { calcFramesStyle } from './frameStyle'
import type {
  ISystemActionShortcut,
  SystemActionDispatch,
  ActionFuncParams,
  ISystemActionDispatcherCreateOptions,
  ISystemActionEvent,
  Func,
  ISubSystemMap,
} from './interface'
import { createSystemShortcutDispatcher } from './shortcut'
import { createSystemEventDispatcher } from './systemEvent'
import { GLOBAL_LOGIC } from '../globalLogic'
import { MsisDebug } from '@/utils/debug/log'
import type { IViewData } from '@/lib/adapter/interface'
import type { IGlobalInstance } from '@/lib/adapter/hooks'
import { useEvent, type IEventBaseInfo } from './event'
import type { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import type { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import { useReturnInfo } from './returnInfo'
import { useConfigHandler } from './configHandler'
import subsystemMap from '../subsystem/subsystemMap.json'

interface IPanelViewComponent {
  frameID: string
  panelID: string
  component: Component
  main: boolean
  style: CSSProperties
  key: string
}

interface IPanelViewLayout {
  layoutID: Ref<string>
}

interface IPanelViewFrame {
  components: Ref<IPanelViewComponent[]>
}

interface IPanelViewScreen {
  screenID: Ref<string>
  style: Ref<CSSProperties>
}

interface IPanelViewSystemAction {
  dispatch: SystemActionDispatch
  shortcut: ISystemActionShortcut
  event: ISystemActionEvent
}

interface IPanelViewSystemStatus {
  isInited: Ref<boolean>
  setInited: (newValue: boolean) => void
}

interface IPanelViewSystem {
  status: IPanelViewSystemStatus
  action: IPanelViewSystemAction
  setGlobalInstance: (opts: IGlobalInstance) => void
  toggleSubsystem: (subsystemID: string) => void
}

interface IPanelViewAdapter {
  registerLogic: (logicClassName: string, logicInstance: LogicInstance) => void
}

type IPanelViewDialog = Ref<IPanelViewDialogInfo>

interface IPanelUtils {
  getFrameIdByPanelId: (panelId?: string) => string | undefined
  getPanelIdByFrameId: (frameId?: string) => string | undefined
  getCurrentGamenId: () => string | undefined
  isPanelInCurrentScreen: (panelId: string) => boolean
  setFrameStatus: (panelId: string, loaded: boolean) => void
}

export interface IPanelView {
  layout: IPanelViewLayout
  frame: IPanelViewFrame
  screen: IPanelViewScreen
  system: IPanelViewSystem
  adapter: IPanelViewAdapter
  dialog: IPanelViewDialog
  utils: IPanelUtils
}

interface IPanelViewComponentKeyOpts {
  screenID?: string
  layoutID?: string
  frameID: string
  panelID: string
  className: string
}

type LogicInstance = Adapter
interface ILogicContainer {
  [logicClassName: string]: LogicInstance
}

interface IPanelViewSnapshot {
  screenID?: string
  layoutID?: string
  components: IPanelViewComponent[]
}

interface IPanelViewPageInfo {
  screenID?: string
  layoutID?: string
  components?: IPanelViewComponent[]
}

interface IPanelViewDialogInfo {
  width?: number
  height?: number
  visible: boolean
}

interface IGetComponentsByToResult {
  components: IPanelViewComponent[]
  newScreenStyle?: CSSProperties
}

type ILogicTask = (ins: Adapter, params: any) => Promise<void> | void

interface ILogicCall {
  className: string
  task: ILogicTask
}

interface ILoop {
  actionList: ILogicCall[]
  actionParams: ActionFuncParams
}

interface IBuildActionFuncParamsOpts {
  baseInfo: IEventBaseInfo
  additionalParams?: any[]
}

interface IDataClassOpts {
  screenId?: string
  panelId?: string
  itemId?: string
}

const SCR_PREFIX = 'SCR_'
const SCR_END_S = 'S'
const SCR_END_M = 'M'
export const useView = defineStore('useView', () => {
  // context
  const context = ref<JCFContext>(null!)
  const setGlobalInstance = (opts: IGlobalInstance) => {
    context.value = opts.context
  }

  // logic container
  const logicContainer = ref<ILogicContainer>({})
  const registerLogic = (
    logicClassName: string,
    logicInstance: LogicInstance,
  ) => {
    // every panel only has one logic instance, if already has, it is sub component item register, so ignore
    if (logicContainer.value[logicClassName]) {
      return
    }
    logicContainer.value[logicClassName] = logicInstance
  }
  const registerGlobalLogic = async () => {
    const ps = GLOBAL_LOGIC.map(async (logic) => {
      const ins = await logic.instanceLoader()
      registerLogic(logic.className, ins)
    })
    await Promise.all(ps)
  }

  // pageId
  const pageID = ref<string>()
  const setPageID = (id: string) => {
    pageID.value = id
  }

  // screen
  const screenID = ref<string>()
  const setScreenID = (id: string) => {
    context.value!.currentScreenId = id
    screenID.value = id
  }
  const screenStyle = ref<CSSProperties>({})
  const setScreenStyle = (style: CSSProperties) => {
    screenStyle.value = style
  }
  const getCurrentGamenId = () => {
    if (!screenID.value?.length) {
      return
    }
    const scrPrefixIndex = screenID.value.indexOf(SCR_PREFIX)
    const startIndex = ~scrPrefixIndex ? scrPrefixIndex + SCR_PREFIX.length : 0
    const endIndex = findLastScreenMark(screenID.value)
    const gamenId = screenID.value.slice(startIndex, endIndex)
    return gamenId
  }
  const pageQuery = computed(() => {
    return getCurrentGamenId()
  })

  // layout
  const layoutID = ref<string>()
  const setLayoutID = (id: string) => {
    layoutID.value = id
  }

  // dialog
  const dialog = ref<IPanelViewDialogInfo>({ visible: false })
  const setDialog = (info: IPanelViewDialogInfo) => {
    dialog.value = info
  }

  // config utils
  const getComponentByPanelID = (config: IPanelConfig, panelID: string) => {
    const className = config.panelMap[panelID]
    if (!className) {
      // TODO: FIXME: jump to other use case page
      console.error(`Not found className for panelID: ${panelID}`)
    }
    const componentInfo = componentsMap[className]
    if (!componentInfo) {
      console.error(
        `Not found componentInfo for className: ${className}, panelID: ${panelID}`,
      )
    }
    const component = createClassInfoWrapper({
      classInfo: componentInfo,
      children: componentInfo.component,
    })
    return {
      component,
      className,
    }
  }
  const { handleConfig } = useConfigHandler()
  const loadConfig = async (pageId: string) => {
    const json = await configs[pageId as keyof typeof configs]()
    const config = json.default as IPanelConfig
    const newConfig = handleConfig(config)
    return newConfig
  }

  // build jcf event
  const { buildEvent } = useEvent({ context })

  // build jcf return info
  const { buildReturnInfo } = useReturnInfo()

  // data class
  const getDataClassByIds = (opts: IDataClassOpts): JCFItemData | undefined => {
    const { screenId, panelId, itemId } = opts
    if (!screenId?.length || !panelId?.length || !itemId?.length) {
      return
    }
    const screenData = context.value?.globalData?.[screenId]
    const panelData = screenData?.data?.[panelId]
    const itemData = panelData?.data?.[itemId]
    return itemData
  }

  // action params
  const buildActionFuncParams = (opts: IBuildActionFuncParamsOpts) => {
    const { baseInfo, additionalParams } = opts
    const itemData = getDataClassByIds({
      screenId: baseInfo.screenID,
      panelId: baseInfo.panelID,
      itemId: baseInfo.itemID,
    })
    const componentName = itemData?._getComponentName?.() as
      | EComponentName
      | undefined
    if (itemData && !componentName?.length) {
      console.error(
        `Not found componentName, please check your data class:`,
        itemData,
      )
      throw new Error('Not found componentName')
    }
    const useEvent = buildEvent({
      componentName,
      additionalParams,
      baseInfo,
    })
    const useContext = context.value!
    const useReturnInfo = buildReturnInfo()
    const params: ActionFuncParams = [useEvent, useContext, useReturnInfo]
    return params
  }
  const backToMenu = () => {
    // todo: which is the menu page ?
    router.push('/')
  }

  // view data for context
  const updateViewData = (updater: (prevData: IViewData) => IViewData) => {
    const originData = context.value!.viewData
    const newData = updater(originData)
    context.value!.viewData = newData
    MsisDebug.log('Update viewData:', newData)
  }

  // frame
  const components = ref<IPanelViewComponent[]>([])
  const setComponents = (newComponents: IPanelViewComponent[]) => {
    const newFrameIdToPanelIdMap: Record<string, string> = {}
    newComponents.forEach((i) => {
      i.component = markRaw(i.component)
      newFrameIdToPanelIdMap[i.frameID] = i.panelID
    })
    updateViewData((prevData) => {
      return {
        ...prevData,
        frameIdToPanelIdMap: newFrameIdToPanelIdMap,
      }
    })
    components.value = newComponents
  }
  const generateComponentKey = (opts: IPanelViewComponentKeyOpts) => {
    const defaultScreenID = screenID.value
    const defaultLayoutID = layoutID.value
    const {
      screenID: newScreenID = defaultScreenID,
      layoutID: newLayoutID = defaultLayoutID,
      frameID,
      panelID,
      className,
    } = opts
    const key = `${newScreenID}-${newLayoutID}-${frameID}-${panelID}-${className}`
    return key
  }
  const getComponentsByTo = (
    config: IPanelConfig,
    to: ITransitionTo,
  ): IGetComponentsByToResult => {
    const { layoutMap } = config
    const newLayoutID = to.layoutID
    const newScreenID = to.screenID
    if (newLayoutID) {
      // new layout
      const layoutInfo = layoutMap[newLayoutID]
      // find components
      const componentList: IPanelViewComponent[] = []
      const screenIDKey = newScreenID
      const layoutIDKey = newLayoutID
      const layoutStyleInfo = calcFramesStyle(layoutInfo)
      layoutInfo.forEach((frame) => {
        const frameID = frame.frameID
        const style = layoutStyleInfo.styleMap[frameID]
        let usingPanelID: string
        const willReplacePanel = to.frame?.[frameID]
        if (willReplacePanel?.panelID) {
          usingPanelID = willReplacePanel.panelID
        } else {
          usingPanelID = frame.defaultPanelID
        }
        const { component, className } = getComponentByPanelID(
          config,
          usingPanelID,
        )
        const isMainFrame = parseBoolean(frame.main)
        const key = generateComponentKey({
          screenID: screenIDKey,
          layoutID: layoutIDKey,
          frameID,
          panelID: usingPanelID,
          className,
        })
        componentList.push({
          frameID,
          component,
          main: isMainFrame,
          style,
          key,
          panelID: usingPanelID,
        })
      })
      return {
        components: componentList,
        newScreenStyle: layoutStyleInfo.gridStyle,
      }
    } else {
      // replace
      const needUpdateFrames = to.frame
      const currentComponents = components.value
      const currentFrameList = currentComponents.map((c) => c.frameID)
      Object.entries(needUpdateFrames).forEach(([frameID, newPanelInfo]) => {
        const isNotInCurrentFrameList = !currentFrameList.includes(frameID)
        if (isNotInCurrentFrameList) {
          console.error(
            `Will replace frameID not in current frame list: ${frameID}`,
          )
          return
        }
        currentComponents.some((c) => {
          const isMatch = c.frameID === frameID
          if (isMatch) {
            // replace this frame
            const usingPanelID = newPanelInfo.panelID!
            const newComponent = getComponentByPanelID(config, usingPanelID)
            c.component = newComponent.component
            const newKey = generateComponentKey({
              screenID: newScreenID,
              layoutID: newLayoutID,
              frameID,
              panelID: usingPanelID,
              className: newComponent.className,
            })
            c.key = newKey
            // update panelID
            c.panelID = usingPanelID
          }
          return isMatch
        })
      })
      return {
        components: currentComponents,
      }
    }
  }

  // page info
  const updatePageInfo = (info: IPanelViewPageInfo) => {
    if (info.screenID) {
      setScreenID(info.screenID)
    }
    if (info.layoutID) {
      setLayoutID(info.layoutID)
    }
    if (info.components) {
      setComponents(info.components)
    }
  }

  // snapshot
  const snapshot = ref<IPanelViewSnapshot>()
  const saveSnapshot = () => {
    const currentSnapshot: IPanelViewSnapshot = {
      screenID: cloneDeep(toRaw(screenID.value)),
      layoutID: cloneDeep(toRaw(layoutID.value)),
      components: cloneDeep(toRaw(components.value)),
    }
    snapshot.value = currentSnapshot
  }
  const restoreSnapshot = () => {
    const currentSnapshot = toRaw(snapshot.value)
    if (currentSnapshot) {
      setScreenID(currentSnapshot.screenID!)
      setLayoutID(currentSnapshot.layoutID!)
      setComponents(currentSnapshot.components)
      // clear snapshot
      snapshot.value = undefined
    }
  }

  // router
  const router = useRouter()
  const changeQuery = (newQuery: Record<string, string | undefined>) => {
    const currentQuery = router.currentRoute.value.query
    const query = cloneDeep(toRaw(currentQuery))
    Object.entries(newQuery).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        delete query[key]
      } else {
        query[key] = value
      }
    })
    // push
    router.replace({
      query,
    })
  }
  // auto change url query for display sub page id
  watch(pageQuery, (newPageQuery) => {
    const newQuery: Record<string, string | undefined> = {
      gamen: undefined,
    }
    if (newPageQuery?.length) {
      newQuery.gamen = newPageQuery
    }
    changeQuery(newQuery)
  })

  // system status: init
  const isInited = ref(false)
  const setInited = (newValue: boolean) => {
    isInited.value = newValue
  }

  // system target: _DIALOG
  const openDialog = (to: ITransitionTo) => {
    const { width, height } = calcDialogSize(to)
    // open dialog
    setDialog({
      width,
      height,
      visible: true,
    })
  }
  const closeDialog = () => {
    setDialog({
      width: undefined,
      height: undefined,
      visible: false,
    })
  }

  // dispatch: loop queue
  const loopQueue = ref<ILoop[]>([])
  const isLoopQueueRunning = ref(false)
  const isLatestLoopTriggerFunc = ref<Func>()
  const setupLoopQueueWatch = () => {
    const check = async (newLogicContainer: ILogicContainer) => {
      const trigger = async () => {
        if (!loopQueue.value.length) {
          return
        }
        const newLoopQueue: ILoop[] = []
        for await (const loop of loopQueue.value) {
          const willCallTasks: ILogicCall[] = []
          const nextCallTasks: ILogicCall[] = []
          loop.actionList.forEach((act) => {
            const ins = newLogicContainer?.[act.className]
            if (ins) {
              willCallTasks.push(act)
            } else {
              nextCallTasks.push(act)
            }
          })
          // serial call
          for await (const task of willCallTasks) {
            const ins = newLogicContainer[task.className]
            MsisDebug.log(`Async Call logic: ${task.className}`)
            await task.task(ins, loop.actionParams)
          }
          if (nextCallTasks.length) {
            const newLoop: ILoop = {
              actionList: nextCallTasks,
              actionParams: loop.actionParams as any,
            }
            newLoopQueue.push(newLoop)
          }
        }
        loopQueue.value = newLoopQueue
      }
      if (isLoopQueueRunning.value) {
        isLatestLoopTriggerFunc.value = trigger
      } else {
        isLoopQueueRunning.value = true
        // trigger
        await trigger()
        while (isLatestLoopTriggerFunc.value) {
          const triggerCopy = isLatestLoopTriggerFunc.value
          isLatestLoopTriggerFunc.value = undefined
          await triggerCopy()
        }
        isLoopQueueRunning.value = false
      }
    }
    watch(logicContainer.value, async (newLogicContainer) => {
      await check(newLogicContainer)
      MsisDebug.log('Loop queue:', loopQueue.value)
    })
  }
  setupLoopQueueWatch()

  // dispatch: on screen change listener
  const setupScreenChangeWatch = () => {
    watch(screenID, async (newScreenID, oldScreenID) => {
      const isChanged = newScreenID !== oldScreenID
      if (isChanged) {
        const task = async () => {
          await systemEvent.onDisplayBefore()
        }
        if (!isAllFrameLoaded.value) {
          // wait loaded, then trigger
          allFrameLoadedCallback.value.push(task)
        } else {
          // immediately trigger
          await task()
        }
      }
    })
  }
  setupScreenChangeWatch()

  // id utils
  const getFrameIdByPanelId = (panelId?: string) => {
    if (!panelId?.length) {
      return
    }
    const map = context.value?.viewData.frameIdToPanelIdMap || {}
    const frameId = Object.entries(map).find(([_frameId, pId]) => {
      return pId === panelId
    })?.[0]
    return frameId
  }
  const getPanelIdByFrameId = (frameId?: string) => {
    if (!frameId?.length) {
      return
    }
    const map = context.value?.viewData.frameIdToPanelIdMap || {}
    return map[frameId]
  }
  const isPanelInCurrentScreen = (panelId?: string) => {
    if (!panelId?.length) {
      return false
    }
    const frameId = getFrameIdByPanelId(panelId)
    if (frameId?.length) {
      return true
    }
    return false
  }

  // frame status
  const allFrameLoadedCallback = ref<Func[]>([])
  const isAllFrameLoaded = ref(false)
  const resetAllFrameLoaded = () => {
    isAllFrameLoaded.value = false
    allFrameLoadedCallback.value = []
  }
  const checkAllFrameLoaded = async () => {
    const map = context.value?.viewData.frameIdToPanelIdMap || {}
    const isEmpty = !Object.keys(map).length
    if (isEmpty) {
      isAllFrameLoaded.value = false
      return
    }
    const hasNotLoaded = Object.entries(map).some(([_frameId, panelId]) => {
      const panelData = context.value?.globalData?.[screenID.value!]?.data?.[panelId]
      const isLoaded = panelData?.status?.loaded
      return !isLoaded
    })
    if (hasNotLoaded) {
      isAllFrameLoaded.value = false
    } else {
      isAllFrameLoaded.value = true
      // callback
      const func = allFrameLoadedCallback.value
      MsisDebug.log(`All frame loaded, callback..., length: ${func.length}`)
      const funcCopy = [...func]
      allFrameLoadedCallback.value = []
      for await (const fun of funcCopy) {
        await fun()
      }
    }
  }
  const setFrameStatus = (frameId: string, loaded: boolean) => {
    const panelId = getPanelIdByFrameId(frameId)
    if (!panelId) {
      MsisDebug.warn(`Not found panelId by frameId: ${frameId}`)
      return
    }
    const panelData =
      context.value?.globalData?.[screenID.value!]?.data?.[panelId]
    if (!panelData) {
      MsisDebug.warn(`Not found panelData by panelId: ${panelId}`)
      return
    } else {
      panelData.status = {
        loaded,
      }
      // check all frame loaded
      checkAllFrameLoaded()
    }
  }

  // dispatch
  const dispatch: SystemActionDispatch = async (opts) => {
    const { actionCode, frameId, panelId, itemId, screenId, additionalParams } =
      opts || {}
    const isSystemAction = isSystemActionCode(actionCode)
    if (isSystemAction) {
      console.log(`Dispatch System actionCode: ${actionCode}`)
    } else {
      console.log('Dispatch actionCode : ', actionCode)
    }
    if (!pageID.value?.length) {
      console.error('pageID is empty')
      return
    }
    const config = await loadConfig(pageID.value)
    const { actionCodeMap, transitionMap, actionMap } = config
    let actionInfo = actionCodeMap[actionCode]
    if (!actionInfo) {
      const isSystemStartAction = actionCode === SYSTEM_ACTION_CODE.SYSSTART
      if (isSystemStartAction) {
        // fallback to ACT_INIT
        actionInfo = {
          actionID: SYSTEM_ACTION.ACT_INIT,
        }
      } else {
        if (isSystemAction) {
          // this system action event is not defined, so ignore it
        } else {
          console.error(`Not found actionInfo for actionCode: ${actionCode}`)
        }
        return
      }
    }
    const currentScreenID = screenID.value
    const actionID = actionInfo.actionID
    // 1. prepare
    const action = actionMap[actionID]
    const transition = transitionMap[actionID]
    const getTransitionTo = (toScreenId?: string) => {
      return transition?.length
        ? transition.find((i) => {
            // if not find `screenID`, it measn this is a common action, use it
            if (!i.screenID?.length) {
              return i
            }
            return i.screenID === toScreenId
          })
        : undefined
    }
    let willPerformTransition = getTransitionTo(currentScreenID)
    let canTransition = true
    // 2. call method from `actionMap`
    let isPerformedAction = false
    if (action) {
      const realActionList: ILogicCall[] = []
      const willPerformActions = action.filter((i) => {
        const hasScreenID = i.screenID?.length
        const hasPanelID = i.panelID?.length
        const hasItemID = i.itemID?.length
        const notFoundPanelWarn = () => {
          MsisDebug.warn(
            `You want trigger an action, but not found panelID is running on current screen: ${i.panelID}`,
          )
        }
        // 3 none
        if (!hasScreenID && !hasPanelID && !hasItemID) {
          return true
        }
        // 2 none, 1 has
        const isSameScreenID = i.screenID === currentScreenID
        const isSameToScreenID =
          willPerformTransition?.to?.screenID &&
          i.itemID === willPerformTransition?.to?.screenID
        const isCurrentHasPanel = isPanelInCurrentScreen(i.panelID)
        // only has screenID
        if (hasScreenID && !hasPanelID && !hasItemID) {
          if (isSameScreenID) {
            return true
          }
          return false
        }
        // only has panelID
        if (!hasScreenID && hasPanelID && !hasItemID) {
          if (!isCurrentHasPanel) {
            notFoundPanelWarn()
            return false
          }
          return true
        }
        // only has itemID
        if (!hasScreenID && !hasPanelID && hasItemID) {
          if (isSameToScreenID) {
            return true
          }
          return false
        }
        // 1 none, 2 has
        // screen id none
        if (!hasScreenID && hasPanelID && hasItemID) {
          if (!isCurrentHasPanel) {
            notFoundPanelWarn()
            return false
          }
          if (isCurrentHasPanel && isSameToScreenID) {
            return true
          }
          return false
        }
        // item id none
        if (hasScreenID && hasPanelID && !hasItemID) {
          if (!isCurrentHasPanel) {
            notFoundPanelWarn()
            return false
          }
          if (isCurrentHasPanel && isSameScreenID) {
            return true
          }
          return false
        }
        // panel id none
        if (hasScreenID && !hasPanelID && hasItemID) {
          if (isSameScreenID && isSameToScreenID) {
            return true
          }
          return false
        }
        // 3 has
        if (hasItemID && hasPanelID && hasScreenID) {
          if (!isCurrentHasPanel) {
            notFoundPanelWarn()
            return false
          }
          if (isSameScreenID && isSameToScreenID && isCurrentHasPanel) {
            return true
          }
          return false
        }
        throw new Error('Not allowed')
      })
      if (willPerformActions.length) {
        isPerformedAction = true
      }
      willPerformActions.forEach((act) => {
        const { className, methodName } = act
        const logicInstance = logicContainer.value[className]
        if (!logicInstance) {
          MsisDebug.log(`Logic instance not found: ${className}, wait...`)
        }
        const logicTask: ILogicTask = async (
          ins: any,
          params: ActionFuncParams,
        ) => {
          if (!ins?.[methodName]) {
            console.warn(
              `Not found method: '${methodName}' in logic: '${className}'`,
            )
          } else {
            await nextTick()
            MsisDebug.log(
              `Real Run method: '${methodName}' in logic: '${className}'`,
              `params:`,
              params,
            )
            await ins[methodName](...params)
          }
        }
        const logicCall: ILogicCall = {
          className,
          task: logicTask,
        }
        realActionList.push(logicCall)
      })
      // set action params
      const buildParams = (): ActionFuncParams => {
        // build action base info
        let usePanelId = panelId
        let useFrameId = frameId
        // compat `panelId` and `frameId`
        if (usePanelId?.length && !useFrameId?.length) {
          useFrameId = getFrameIdByPanelId(usePanelId)
        } else if (!usePanelId?.length && useFrameId?.length) {
          usePanelId = getPanelIdByFrameId(useFrameId)
        }
        const useScreenId = screenId || currentScreenID
        const baseInfo: IEventBaseInfo = {
          actionCode,
          actionID,
          itemID: itemId,
          panelID: usePanelId!,
          frameID: useFrameId!,
          screenID: useScreenId!,
        }
        MsisDebug.log('Action baseInfo:', baseInfo)
        const params: ActionFuncParams = buildActionFuncParams({
          baseInfo,
          additionalParams,
        })
        return params
      }
      const realActionParams = buildParams()
      // perform action
      const asyncActionList: ILogicCall[] = []
      for await (const task of realActionList) {
        const ins = logicContainer.value[task.className]
        if (!ins) {
          asyncActionList.push(task)
        } else {
          MsisDebug.log(`Sync Call logic: ${task.className}`)
          await task.task(ins, realActionParams)
        }
      }
      const returnInfoIns = realActionParams[2]
      // toggle subsystem
      const newSubsystemID = returnInfoIns.getSubsystemID()
      if (newSubsystemID?.length) {
        await toggleSubsystem(newSubsystemID)
        return
      }
      // transition cancel
      const isTransitionCancelled = returnInfoIns.transitionFlag === false
      if (isTransitionCancelled) {
        canTransition = false
        MsisDebug.warn('Transition cancelled')
      } else {
        // manually transition to some screen
        const specifiedWantTransitionToScreenId =
          returnInfoIns._willTransitionToScreenId
        if (specifiedWantTransitionToScreenId?.length) {
          willPerformTransition = getTransitionTo(
            specifiedWantTransitionToScreenId,
          )
          MsisDebug.log(
            'Manually transition to screenId :',
            specifiedWantTransitionToScreenId,
            ', transition: ',
            willPerformTransition,
          )
          // make sure not has async action
          if (asyncActionList.length) {
            MsisDebug.error(
              `Not allowed async action when manually transition, async actions:`,
              asyncActionList,
            )
            throw new Error(`Not allowed`)
          }
        }
        // add loop queue
        if (asyncActionList.length) {
          loopQueue.value.push({
            actionList: asyncActionList,
            actionParams: realActionParams,
          })
        }
      }
    }
    // 3. call transition from `transitionMap`
    let isPerformedTransition = false
    if (canTransition && willPerformTransition) {
      isPerformedTransition = true
      const transitionTask = async () => {
        const to = willPerformTransition.to
        const canBackward = parseBoolean(to?.backward)
        if (canBackward) {
          // save current snapshot
          saveSnapshot()
        }
        // new screenID
        const newScreenID = to.screenID
        // new layoutID
        const newLayoutID = to.layoutID
        // update current page method
        const updateCurrentPage = () => {
          // replace current page
          const { components: newComponents, newScreenStyle } =
            getComponentsByTo(config, to)
          // update page info
          updatePageInfo({
            screenID: newScreenID,
            layoutID: newLayoutID,
            components: newComponents,
          })
          // update screen style
          if (newScreenStyle) {
            setScreenStyle(newScreenStyle)
          }
          // reset all frame loaded
          resetAllFrameLoaded()
        }
        // target
        const target = to.target
        const isSystemTarget = isSystemTransitionTarget(target)
        if (isSystemTarget) {
          // _TOP
          if (target === SYSTEM_TRANSITION_TARGET._TOP) {
            const hasNewLayoutID = newLayoutID?.length
            if (hasNewLayoutID) {
              updateCurrentPage()
            } else {
              // back to menu
              console.log(
                `Not found newLayoutID for target: ${target}, will back to menu`,
              )
              backToMenu()
            }
          }
          // _SELF
          if (target === SYSTEM_TRANSITION_TARGET._SELF) {
            // not to do anything
            const isToScreenEqualCurrent = newScreenID === currentScreenID
            if (!isToScreenEqualCurrent) {
              console.error(
                `Not equal screenID for target: ${target}, newScreenID: ${newScreenID}, currentScreenID: ${currentScreenID}`,
              )
            }
          }
          // _BACK
          if (target === SYSTEM_TRANSITION_TARGET._BACK) {
            if (snapshot.value) {
              // system event: on backward before
              await systemEvent.onBackwardBefore()
              // restore snapshot
              restoreSnapshot()
            } else {
              console.error(`Not found prevScreenID for target: ${target}`)
            }
          }
          // _DIALOG
          if (target === SYSTEM_TRANSITION_TARGET._DIALOG) {
            // save snapshot
            saveSnapshot()
            // open dialog
            openDialog(to)
            // update current page
            updateCurrentPage()
          }
          // _OPENER
          if (target === SYSTEM_TRANSITION_TARGET._OPENER) {
            // system event: on dialog close
            await systemEvent.onDialogClose()
            // close dialog
            closeDialog()
            // restore snapshot
            if (!snapshot.value) {
              console.error(`Not found snapshot for target: ${target}`)
            }
            // check expected screenID
            const willRestoreScreenID = to.screenID
            if (willRestoreScreenID?.length) {
              const snapshotScreenID = snapshot.value?.screenID
              const isExpectedScreenID =
                willRestoreScreenID === snapshotScreenID
              if (!isExpectedScreenID) {
                console.error(
                  `Not expected screenID for target: ${target}, expected: ${willRestoreScreenID}, snapshot: ${snapshotScreenID}`,
                )
              }
            }
            restoreSnapshot()
          }
        } else {
          updateCurrentPage()
        }
      }
      // perform transition
      await transitionTask()
    }
    if (!isPerformedAction && !isPerformedTransition) {
      console.warn(
        `Not performed action or transition for actionCode: ${actionCode}`,
      )
    }
  }
  const systemActionDispatcherOption: ISystemActionDispatcherCreateOptions = {
    dispatch,
  }
  const systemShortcut = createSystemShortcutDispatcher(
    systemActionDispatcherOption,
  )
  const systemEvent = createSystemEventDispatcher(systemActionDispatcherOption)

  const systemStart = async (pageId: string) => {
    // update pageId
    setPageID(pageId)
    // register all global logic
    await registerGlobalLogic()
    // dispatch SYSSTART
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSSTART,
    })
  }
  const setSubsystemId = (subsystemId: string) => {
    context.value.subsystemID = subsystemId
  }
  const subsystemConfig = subsystemMap as ISubSystemMap
  const toggleSubsystem = async (subsystemId: string) => {
    MsisDebug.log('Toggle subsystemId :', subsystemId)
    const value = subsystemConfig?.[subsystemId]
    if (!value) {
      throw new Error(`Not found subsystemId: ${subsystemId}`)
    }
    // update subsystemId
    setSubsystemId(subsystemId)
    const newPageId = value.pageId
    // toggle subsystem
    router.push({
      path: `/view/${newPageId}`,
      replace: true,
      force: true,
    })
  }

  const viewScreen: IPanelViewScreen = {
    screenID: screenID as Ref<string>,
    style: screenStyle,
  }
  const viewLayout: IPanelViewLayout = {
    layoutID: layoutID as Ref<string>,
  }
  const viewFrame: IPanelViewFrame = {
    components,
  }
  const viewSystem: IPanelViewSystem = {
    status: {
      isInited,
      setInited,
    },
    setGlobalInstance,
    toggleSubsystem,
    action: {
      dispatch,
      shortcut: systemShortcut,
      event: {
        ...systemEvent,
        onSystemStart: systemStart,
      },
    },
  }
  const viewAdapter: IPanelViewAdapter = {
    registerLogic,
  }
  const viewDialog: IPanelViewDialog = dialog
  const viewUtils: IPanelUtils = {
    getFrameIdByPanelId,
    getPanelIdByFrameId,
    getCurrentGamenId,
    isPanelInCurrentScreen,
    setFrameStatus,
  }

  const viewModel: IPanelView = {
    screen: viewScreen,
    layout: viewLayout,
    frame: viewFrame,
    system: viewSystem,
    adapter: viewAdapter,
    dialog: viewDialog,
    utils: viewUtils,
  }

  return viewModel
})

function parseBoolean(value?: string) {
  if (!value) {
    return false
  }
  value = value.toLowerCase()
  if (value === 'true') {
    return true
  }
  if (value === 'false') {
    return false
  }
  return false
}

function createClassInfoWrapper(opts: {
  classInfo: IClassInfo
  children: () => Promise<Component>
}) {
  const { classInfo, children } = opts
  const childrenComponent = () =>
    h(
      defineAsyncComponent({
        loader: children,
      }),
    )
  const wrapperRender = () =>
    h(ClassNameWrapper, { classInfo }, childrenComponent)
  const wrapper = defineComponent({
    name: 'ClassInfoWrapper',
    render: wrapperRender,
  })
  const component = markRaw(wrapper)
  return component
}

function findLastScreenMark(screenID: string) {
  const length = screenID.length
  for (let i = length - 1; i >= 0; i--) {
    const char = screenID[i]
    if (char === SCR_END_S || char === SCR_END_M) {
      return i + 1
    }
    if (char === '_') {
      return length
    }
  }
  return length
}

function calcDialogSize(to: ITransitionTo) {
  let width: number | undefined
  let height: number | undefined
  if (to.width?.length && isStringNumber(to.width)) {
    width = toNumber(to.width)
  } else if (to.positionX?.length && isStringNumber(to.positionX)) {
    width = toNumber(to.positionX)
  }
  if (to.height?.length && isStringNumber(to.height)) {
    height = toNumber(to.height)
  } else if (to.positionY?.length && isStringNumber(to.positionY)) {
    height = toNumber(to.positionY)
  }
  return {
    width,
    height,
  }
}
