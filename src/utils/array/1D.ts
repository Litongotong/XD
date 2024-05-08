// new String[num]
export const createStringArray = (num: number): string[] => {
  const arr: string[] = []
  for (let i = 0; i < num; i++) {
    arr.push('')
  }
  return arr
}

// new Integer[num]
export const createNumberArray = (num: number): number[] => {
  const arr: number[] = []
  for (let i = 0; i < num; i++) {
    arr.push(0)
  }
  return arr
}

type CreateInstanceArrayReturn<T> = T extends { new (...args: any[]): any } ? InstanceType<T>[] : T[]

// e.g. `new JCFSelectableElement[2]`
export const createArrayByInstance = <T extends any = any>(
  instance: T,
  num: number,
) => {
  const arr: T[] = []
  for (let i = 0; i < num; i++) {
    arr.push(null!)
  }
  return arr as CreateInstanceArrayReturn<T>
}
