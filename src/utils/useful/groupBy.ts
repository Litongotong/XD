export const groupBy = <T extends any = any, K extends keyof T = any>(
  values: T[],
  keyFinder: K | ((value: T) => any),
) => {
  return values.reduce<Record<string, any[]>>((a, b) => {
    const key = (
      typeof keyFinder === 'function' ? keyFinder(b) : b[keyFinder]
    ) as string

    if (!a[key]) {
      a[key] = [b]
    } else {
      a[key] = [...a[key], b]
    }

    return a
  }, {})
}
