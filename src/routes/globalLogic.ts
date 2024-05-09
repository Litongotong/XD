
export interface IGlobalLogic {
  className: string
  instanceLoader: () => any | Promise<any>
}

export const GLOBAL_LOGIC: IGlobalLogic[] = []
