export const toInt = (str?: any): number => {
  if (typeof str === 'number') {
    if (Number.isNaN(str)) {
      return 0
    }
    const asStr = str.toString()
    return toInt(asStr)
  }
  if (typeof str !== 'string') {
    return 0
  }
  if (!str?.length) {
    return 0
  }
  const hasDot = str.includes('.')
  if (hasDot) {
    const asInt = parseInt(str.split('.')[0])
    if (Number.isNaN(asInt)) {
      return 0
    }
    return asInt
  }
  const asInt = parseInt(str)
  if (Number.isNaN(asInt)) {
    return 0
  }
  return asInt
}
