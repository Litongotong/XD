
const emptyConfig = () => Promise.resolve({ default: {} })

export const configs = {
  // FWC
  SMS: emptyConfig,
  // YIN
  YCSCMNF010: () => import('@/views/YIN/YCSCMNF010/env/config.json'),
  YCSCMNF030: () => import('@/views/YIN/YCSCMNF030/env/config.json'),
  // YBM
  YBMCMNF000: emptyConfig,
  YBMKKSF580: emptyConfig,
  YBMKKSF590: emptyConfig,
  YBMKKSF610: emptyConfig,
  YBMKKSF620: () => import('@/views/YBM/YBMKKSF620/env/config.json'),
  //YCM
  YCMKMSFB30: () => import('@/views/YCM/YCMKMSFB30/env/config.json'),

} as const satisfies IConfigsMap

export type IConfigJsonModule = Promise<{ default: Record<string, any> }>
export type IConfigJsonLoader = () => IConfigJsonModule

export interface IConfigsMap {
  [pageId: string]: IConfigJsonLoader
}
