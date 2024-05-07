import { JCFContext } from '@/lib/jcf/ctrl/JCFContext'
import { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent'
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData'
import { JCFPanelData } from '@/lib/jcf/gui/JCFPanelData'
import { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo'
import { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData'
import { SMSJCFSpreadData } from '@/lib/sms/sol/sys/cjf/SMSJCFSpreadData'
import { YPMCommonConst } from '@/lib/ypm/cmn/YPMCommonConst'
import { Adapter } from '@/lib/adapter/adapter'

export class LogicBaseRel extends Adapter /* custom adapter for jcf */ {
  evnt: JCFEvent = null!
  ctxt: JCFContext = null!
  rinfo: JCFReturnInfo = null!

  constructor() {
    super()
  }

  setEvent(event: JCFEvent) {
    this.evnt = event
  }

  setContext(context: JCFContext) {
    this.ctxt = context
  }

  setReturnInfo(returnInfo: JCFReturnInfo) {
    this.rinfo = returnInfo
  }

  setJCFParameter(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ) {
    this.setEvent(event)
    this.setContext(context)
    this.setReturnInfo(returnInfo)
  }

  public f1(
    event: JCFEvent,
    context: JCFContext,
    returnInfo: JCFReturnInfo,
  ): void {
    this.setJCFParameter(event, context, returnInfo)
  }

  public getPanel(context: JCFContext, frame_id: string): JCFPanelData {
    const screenData: JCFScreenData = context.getCurrentScreenData()
    return screenData.getPanelData(frame_id)
  }

  public getContext(): JCFContext {
    return this.ctxt
  }

  public getBodyPanel(): JCFPanelData {
    return this.getPanel(this.getContext(), YPMCommonConst.FLM_MAIN_BODY)
  }

  // getItemData
  private __getItemData1(itemId: string): JCFItemData {
    return this.getBodyPanel().getItemData(itemId)
  }
  private __getItemData2(
    context: JCFContext,
    frame_id: string,
    itemId: string,
  ): JCFItemData {
    return this.getPanel(context, frame_id).getItemData(itemId)
  }

  public getItemData(itemId: string): JCFItemData
  public getItemData(
    context: JCFContext,
    frame_id: string,
    itemId: string,
  ): JCFItemData
  public getItemData(
    contextOrItemId: JCFContext | string,
    frame_id?: string,
    itemId?: string,
  ): JCFItemData {
    if (typeof contextOrItemId === 'string') {
      return this.__getItemData1(contextOrItemId)
    }
    return this.__getItemData2(contextOrItemId, frame_id!, itemId!)
  }

  // getSpreadData
  private __getSpreadData1(itemId: string): JCFItemData {
    return this.getBodyPanel().getItemData(itemId)
  }
  private __getSpreadData2(
    context: JCFContext,
    frame_id: string,
    itemId: string,
  ): JCFItemData {
    return this.getItemData(context, frame_id, itemId)
  }

  public getSpreadData(itemId: string): SMSJCFSpreadData
  public getSpreadData(
    context: JCFContext,
    frame_id: string,
    itemId: string,
  ): SMSJCFSpreadData
  public getSpreadData(
    contextOrItemId: JCFContext | string,
    frame_id?: string,
    itemId?: string,
  ): SMSJCFSpreadData {
    if (typeof contextOrItemId === 'string') {
      return this.__getSpreadData1(contextOrItemId) as SMSJCFSpreadData
    }
    return this.__getSpreadData2(
      contextOrItemId,
      frame_id!,
      itemId!,
    ) as SMSJCFSpreadData
  }

  _getName(): string {
    return 'LogicBaseRel'
  }

  static _getName(): string {
    return 'LogicBaseRel'
  }

  _getType() {
    return LogicBaseRel as any
  }

  _getFullName(): string {
    return 'ypm.cmn.cjf.logic.YPMLogicBaseRel'
  }

  static _getFullName(): string {
    return 'ypm.cmn.cjf.logic.YPMLogicBaseRel'
  }
}
