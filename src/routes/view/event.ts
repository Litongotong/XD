import { EComponentName } from '@/lib/adapter/components/SetupData/instanceMap'
import type { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import { JCFEvent, type IJCFEventOptions } from '@/lib/jcf/ctrl/JCFEvent'
import { JCFEventAdditionalInfo } from '@/lib/jcf/ctrl/JCFEventAdditionalInfo'
import { JCFSpreadAdditionalInfo } from '@/lib/jcf/gui/JCFSpreadAdditionalInfo'
import { SMSJFTreeAdditionalInfo } from '@/lib/sms/sol/sys/cjf/SMSJFTreeAdditionalInfo'
import type { Ref } from 'vue'

const additionalInfoClassMap: Partial<Record<EComponentName, any>> = {
  [EComponentName.SMSJFTree]: SMSJFTreeAdditionalInfo,
  [EComponentName.SMSJCFSpread]: JCFSpreadAdditionalInfo,
  [EComponentName.JCFSpread]: JCFSpreadAdditionalInfo,
}

export interface IEventBaseInfo {
  itemID?: string
  actionCode: string
  actionID: string
  panelID: string
  frameID: string
  screenID: string
}

export interface IBuildEventOptions {
  componentName?: EComponentName
  baseInfo: IEventBaseInfo
  additionalParams?: any[]
}

export interface IFallbackIds {
  screenID: string
  frameID: string
}

interface IUseEventOpts {
  context: Ref<JCFContext>
}

export const useEvent = (options: IUseEventOpts) => {
  const buildEvent = (opts: IBuildEventOptions) => {
    const { componentName, baseInfo, additionalParams = [] } = opts
    // ins contructor params
    const { actionCode, actionID, itemID, panelID, frameID, screenID } =
      baseInfo
    let additionalInfoIns: any;
    if (componentName?.length) {
      let additionalInfoInner: any
      const AdditionalInfoClass = additionalInfoClassMap?.[componentName]
      if (AdditionalInfoClass) {
        additionalInfoInner = new AdditionalInfoClass(...additionalParams)
      }
      additionalInfoIns = new JCFEventAdditionalInfo(
        actionCode,
        actionID,
        itemID as any,
        panelID,
        frameID,
        screenID,
        additionalInfoInner,
      )
    }

    const subsystemID = options.context.value.subsystemID

    const eventOpts: IJCFEventOptions = {
      additionalInfo: additionalInfoIns,
      subsystemID,
      actionCode,
      actionID,
      frameID,
      panelID,
      screenID,
      itemID: itemID as any,
    }
    const ins = new JCFEvent(eventOpts)
    return ins
  }

  return {
    buildEvent,
  }
}
