import {
  SYSTEM_TRANSITION_TARGET,
  SYSTEM_ACTION_CODE_PREFIX,
} from './interface'

const systemTransitionTargetList = Object.keys(SYSTEM_TRANSITION_TARGET)
export const isSystemTransitionTarget = (value: string) => {
  if (!value?.length) {
    return false
  }
  const isSystemTarget = systemTransitionTargetList.includes(value)
  return isSystemTarget
}

export const isSystemActionCode = (value: string) => {
  if (!value?.length) {
    return false
  }
  const isSystemAction = value.startsWith(SYSTEM_ACTION_CODE_PREFIX)
  return isSystemAction
}
