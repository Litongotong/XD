import { isNumber } from './isNumber'
import { isNaN } from './isNaN'
import { toNumber } from './toNumber'
import { toString } from './toString'

export const isStringNumber = (value: string): boolean => {
  const asNumber = toNumber(value)
  if (isNaN(asNumber)) {
    return false
  }
  const isEqual = toString(asNumber) === value
  if (isEqual && isNumber(asNumber)) {
    return true
  }
  return false
}
