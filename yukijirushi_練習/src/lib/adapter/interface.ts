import type { ISystemActionDispatchOpts } from '@/routes/view/interface'
import type { JCFScreenData } from '../jcf/ctrl/JCFScreenData'
import type { JCFItemData } from '../jcf/gui/JCFItemData'
import type { JCFPanelData } from '../jcf/gui/JCFPanelData'

export interface IJCFItemDataInstance {
  new (itemId: string): JCFItemData
}

export interface ISetupItem {
  (itemId: string, instance: IJCFItemDataInstance | JCFItemData): void
}

type Pretterify<T> = {
  [P in keyof T]: T[P]
}

export type IExtraWrapOpts = Pretterify<
  // required options
  Required<Pick<ISystemActionDispatchOpts, 'actionCode'>> &
    // optional options
    Pick<ISystemActionDispatchOpts, 'additionalParams' | 'itemId'>
>
export type IAdapterExtraGet = (itemId: string) => JCFItemData
export type IAdapterExtraWrap = (opts: IExtraWrapOpts) => void

export interface IGlobalData {
  [screenId: string]: JCFScreenData
}
export interface IGlobalScreenData {
  [panelId: string]: JCFPanelData
}

export interface IGlobalPanelData {
  [itemId: string]: JCFItemData
}

export interface IViewData {
  frameIdToPanelIdMap: Record<string, string>
}

export enum EViewHint {
  frameId = 'data-frame-id',
  itemId = 'data-item-id',
  panelId = 'data-panel-id',
  screenId = 'data-screen-id',
  panelLayout = 'data-panel-layout',
  componentName = 'data-component-name',
  classInfoPanel = 'data-classinfo-panel',
  classInfoLogic = 'data-classinfo-logic',
}
