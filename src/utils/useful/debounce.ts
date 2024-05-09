type Func = (...args: any[]) => any

export const debounce = <T extends Func = any>(fn: T, delay: number) => {
  let timer: ReturnType<typeof setTimeout>
  const func = (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
  return func as T
}
