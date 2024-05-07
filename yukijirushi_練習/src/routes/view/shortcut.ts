import { SYSTEM_ACTION_CODE } from '../config/interface'
import type {
  ISystemActionDispatcherCreateOptions,
  ISystemActionShortcut,
} from './interface'

export function createSystemShortcutDispatcher(
  opts: ISystemActionDispatcherCreateOptions,
) {
  const { dispatch } = opts

  const F1 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF01000 })
  }
  const F1_EX = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF010C0 })
  }
  const F2 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF02000 })
  }
  const F2_EX = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF020C0 })
  }
  const F3 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF03000 })
  }
  const F4 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF04000 })
  }
  const F5 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF05000 })
  }
  const F5_EX1 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF050C0 })
  }
  const F5_EX2 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF0500A })
  }
  const F6 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF06000 })
  }
  const F6_EX = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF060C0 })
  }
  const F7 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF07000 })
  }
  const F7_EX = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF070C0 })
  }
  const F8 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF08000 })
  }
  const F8_EX = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF080C0 })
  }
  const F9 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF09000 })
  }
  const F10 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF10000 })
  }
  const F11 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF11000 })
  }
  const F12 = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSF12000 })
  }
  const ENTER = async () => {
    await dispatch({ actionCode: SYSTEM_ACTION_CODE.SYSENTER000 })
  }

  const shortcut: ISystemActionShortcut = {
    F1,
    F1_EX,
    F2,
    F2_EX,
    F3,
    F4,
    F5,
    F5_EX1,
    F5_EX2,
    F6,
    F6_EX,
    F7,
    F7_EX,
    F8,
    F8_EX,
    F9,
    F10,
    F11,
    F12,
    ENTER,
  }

  return shortcut
}
