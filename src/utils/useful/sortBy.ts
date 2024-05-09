export const sortBy = <T extends any = any>(
  arr: T[],
  func: (item: T) => any,
) => {
  return arr.concat().sort((a, b) => {
    const aVal = func(a)
    const bVal = func(b)
    if (aVal < bVal) {
      return -1
    }
    if (aVal > bVal) {
      return 1
    }
    return 0
  })
}
