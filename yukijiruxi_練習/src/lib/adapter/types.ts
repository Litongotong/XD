export type Func = (...args: any[]) => any

export interface IAdapterExtra {
    screenId: string
    frameId: string
    get: (itemId: string) => JCFItemData
    wrap: (viewAction: Func) => void
    setupItem: (itemId: string, defaultValue?: any) => void
  }