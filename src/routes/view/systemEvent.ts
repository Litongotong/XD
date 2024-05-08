import { SYSTEM_ACTION_CODE } from '../config/interface'
import type {
  ISystemActionDispatcherCreateOptions,
  ISystemActionEventBase,
} from './interface'

export function createSystemEventDispatcher(
  opts: ISystemActionDispatcherCreateOptions,
) {
  const { dispatch } = opts

  // [IMPLEMENT]: 🟢
  const SYSDIALOGCLOSE = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSDIALOGCLOSE,
    })
  }

  // todo: maybe we don't need to implement this
  // [IMPLEMENT]: 🟡
  const SYSWINDOWCLOSE = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSWINDOWCLOSE,
    })
  }

  // [IMPLEMENT]: 🟢
  const SYSBACKWARDPRE = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSBACKWARDPRE,
    })
  }

  // [IMPLEMENT]: 🟡
  const SYSITEMEXIT = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSITEMEXIT,
    })
  }

  // [IMPLEMENT]: 🟡
  const SYSERROR = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSERROR,
    })
  }

  // [IMPLEMENT]: 🟡
  const SYSINPUTPRE = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSINPUTPRE,
    })
  }

  // todo: maybe we don't need to implement this
  // [IMPLEMENT]: 🟡
  const SYSCRTPNL = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSCRTPNL,
    })
  }

  // [IMPLEMENT]: 🟢
  const SYSEND = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSEND,
    })
  }

  // todo: maybe we don't need to implement this
  // [IMPLEMENT]: 🟡
  const SYSITEMCLICK = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSITEMCLICK,
    })
  }

  // [IMPLEMENT]: 🟢
  const SYSSCREENPRE = async () => {
    await dispatch({
      actionCode: SYSTEM_ACTION_CODE.SYSSCREENPRE,
    })
  }

  const event: ISystemActionEventBase = {
    onDialogClose: SYSDIALOGCLOSE,
    onWindowClose: SYSWINDOWCLOSE,
    onBackwardBefore: SYSBACKWARDPRE,
    onSystemExit: SYSITEMEXIT,
    onSystemError: SYSERROR,
    onInputBefore: SYSINPUTPRE,
    onPanelCreateAfter: SYSCRTPNL,
    onSystemEnd: SYSEND,
    onItemClick: SYSITEMCLICK,
    onDisplayBefore: SYSSCREENPRE,
  }

  return event
}
