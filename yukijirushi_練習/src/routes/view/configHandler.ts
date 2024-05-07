import type { IAction, IPanelConfig } from '../config/interface'
import { CLASSNAME } from '../className'
import { MsisDebug } from '@/utils/debug/log'

const ACT_BEFORE_DISPLAY = 'ACT_BEFORE_DISPLAY'
const ERROR_PAGE_ON_MOUNT_METHOD = 'beforeDisplay'
const ERROR_LOGIC_CLASS_NAME = CLASSNAME.SMSSystemErrorPanel.logic
const ERROR_SCREEN_ID = 'ERROR'

const ERROR_ACTION: IAction = {
  screenID: ERROR_SCREEN_ID,
  className: ERROR_LOGIC_CLASS_NAME,
  methodName: ERROR_PAGE_ON_MOUNT_METHOD,
}

export const useConfigHandler = () => {
  const addErrorAction = (config: IPanelConfig) => {
    const actionBeforeDisplay = config?.actionMap?.[ACT_BEFORE_DISPLAY]
    if (actionBeforeDisplay) {
      const errorAction = actionBeforeDisplay.find((i) => {
        const isErrorLogic = i.className === ERROR_LOGIC_CLASS_NAME
        const isErrorMethod = i?.methodName === ERROR_PAGE_ON_MOUNT_METHOD
        if (isErrorLogic && isErrorMethod) {
          return i
        }
      })
      if (!errorAction) {
        MsisDebug.log(`Patch error action to current page`)
        // manally add error action
        actionBeforeDisplay.push(ERROR_ACTION)
      }
    }
    return config
  }

  const handleConfig = (config: IPanelConfig) => {
    const newConfig = addErrorAction(config)
    return newConfig
  }

  return {
    handleConfig,
  }
}
