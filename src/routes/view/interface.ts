import { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import type { ActionCode } from '../config/interface'
import { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'

// base info for jcf event
interface ISystemActionDispatchOptsFromLogicWrap {
  /**
   * when use `logic.extra.wrap` method, recommand to set `itemId`
   */
  itemId?: string
  /**
   * either `panelId` or `frameId` is required
   * if you dispatch action from logic wrap, you should set this
   */
  panelId?: string
  frameId?: string
  /**
   * if you dispatch action from logic wrap, you should set this
   */
  screenId?: string
  /**
   * additional instance params
   */
  additionalParams?: any[]
}

interface ISystemActionDispatchOptsWithAdvanced {}

export interface ISystemActionDispatchOpts
  extends ISystemActionDispatchOptsFromLogicWrap,
    ISystemActionDispatchOptsWithAdvanced {
  actionCode: ActionCode
}

export type SystemActionDispatch = (
  opts: ISystemActionDispatchOpts,
) => Promise<void>

export type SystemActionCommonDispatcher = () => Promise<void>

export interface ISystemActionShortcut {
  F1: SystemActionCommonDispatcher
  F1_EX: SystemActionCommonDispatcher
  F2: SystemActionCommonDispatcher
  F2_EX: SystemActionCommonDispatcher
  F3: SystemActionCommonDispatcher
  F4: SystemActionCommonDispatcher
  F5: SystemActionCommonDispatcher
  F5_EX1: SystemActionCommonDispatcher
  F5_EX2: SystemActionCommonDispatcher
  F6: SystemActionCommonDispatcher
  F6_EX: SystemActionCommonDispatcher
  F7: SystemActionCommonDispatcher
  F7_EX: SystemActionCommonDispatcher
  F8: SystemActionCommonDispatcher
  F8_EX: SystemActionCommonDispatcher
  F9: SystemActionCommonDispatcher
  F10: SystemActionCommonDispatcher
  F11: SystemActionCommonDispatcher
  F12: SystemActionCommonDispatcher
  ENTER: SystemActionCommonDispatcher
}

export interface ISystemActionEventBase {
  onDialogClose: SystemActionCommonDispatcher
  onWindowClose: SystemActionCommonDispatcher
  onBackwardBefore: SystemActionCommonDispatcher
  onSystemExit: SystemActionCommonDispatcher
  onSystemError: SystemActionCommonDispatcher
  onInputBefore: SystemActionCommonDispatcher
  onPanelCreateAfter: SystemActionCommonDispatcher
  onSystemEnd: SystemActionCommonDispatcher
  onItemClick: SystemActionCommonDispatcher
  onDisplayBefore: SystemActionCommonDispatcher
}

export interface ISystemActionEvent extends ISystemActionEventBase {
  onSystemStart: (pageId: string) => Promise<void>
}

export type ActionFunc = (
  event: JCFEvent,
  context: JCFContext,
  returnInfo: JCFReturnInfo,
) => void | Promise<void>
export type ActionFuncParams = Parameters<ActionFunc>

export interface ISystemActionDispatcherCreateOptions {
  dispatch: SystemActionDispatch
}

export type Func = () => Promise<void> | void

interface ISubSystemConfig {
  pageId: string
}

export interface ISubSystemMap {
  [key: string]: ISubSystemConfig
}