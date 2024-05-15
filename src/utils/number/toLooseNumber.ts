
/**
 * not working with negative number
 */
export const toLooseNumber = (str?: any): number => {
  if (typeof str === 'number') {
    if (Number.isNaN(str)) {
      return 0
    }
    const asStr = str.toString()
    return toLooseNumber(asStr)
  }
  if (typeof str !== 'string') {
    return 0
  }
  if (!str?.length) {
    return 0
  }
  const numberStringArr: string[] = []
  let isHasDot = false
  for (let i = 0; i < str.length; i++) {
    if (!isHasDot && str[i] === '.') {
      numberStringArr.push('.')
      isHasDot = true
    }
    if (!Number.isNaN(parseInt(str[i]))) {
      numberStringArr.push(str[i])
    }
  }
  if (!numberStringArr.length) {
    return 0
  }
  // `.`
  const isOnlyDot = numberStringArr.length === 1 && numberStringArr[0] === '.'
  if (isOnlyDot) {
    return 0
  }
  // `.0`
  const isStartWithDot = numberStringArr[0] === '.'
  if (isStartWithDot) {
    numberStringArr.unshift('0')
  }
  const asNumber = parseFloat(numberStringArr.join(''))
  return asNumber
}

export const toLooseIntNumber = (str?: any) => {
  const looseNumber = toLooseNumber(str)
  const asString = looseNumber.toString()
  const hasDot = asString.includes('.')
  if (hasDot) {
    const asInt = parseInt(asString.split('.')[0])
    return asInt
  }
  const asInt = parseInt(asString)
  return asInt
}
