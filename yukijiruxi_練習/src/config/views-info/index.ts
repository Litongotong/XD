import { YPMSGS } from './YPMSGS'

export interface ViewsInfo {
  [id: string]: {
    SCREEN_NAME: string
    MAX_SELECT_CNT: number
  }
}

export const VIEWS_INFO: ViewsInfo = { ...YPMSGS }
