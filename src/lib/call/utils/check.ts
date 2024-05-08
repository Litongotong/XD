import { MsisDebug } from '@/utils/debug/log'
import Big from 'big.js'

export const checkApiParams = (params: Record<string, any>) => {
  if (!params) {
    return params
  }

  const isObject =
    params && typeof params === 'object' && !Array.isArray(params)
  if (!isObject) {
    return params
  } else {
    const check = (obj: Record<string, any>): Record<string, any> => {
      const newObj: Record<string, any> = {}
      Object.entries(obj).forEach(([key, value]) => {
        const isNil = value === null || value === undefined
        const isString = typeof value === 'string'
        const isNaN = Number.isNaN(value)
        const isNumber = typeof value === 'number'
        const isBoolean = typeof value === 'boolean'
        const isObject =
          typeof value === 'object' && !Array.isArray(value) && !isNil
        const isArray = Array.isArray(value)
        const isFunction = typeof value === 'function'

        // ignore nil value
        if (isNil || isNaN) {
          return
        }

        // skip
        const isSkip = isString || isBoolean || isFunction
        if (isSkip) {
          newObj[key] = value
          return
        }

        // object, recursive check
        if (isObject) {
          newObj[key] = check(value)
          return
        }

        // array, recursive check
        if (isArray) {
          newObj[key] = value.map((item: any) => check(item))
          return
        }

        // number
        if (isNumber) {
          const num = value
          const newNum = tryCompatHasOffsetNumberInIEEE754(num)
          newObj[key] = newNum
          return
        }

        // other, skip
        newObj[key] = value
      })
      return newObj
    }

    return check(params)
  }
}

const OFFSET_MARK_0 = '0'.repeat(10)
const OFFSET_MARK_9 = '9'.repeat(10)

function tryCompatHasOffsetNumberInIEEE754(num: number) {
  const numAsStr = num.toString()
  if (!numAsStr.includes('.')) {
    return num
  }
  // 0.30000000000000004 = 0.1 + 0.2
  // 0.7999999999999999 = 0.7 + 0.1
  // 0.09999999999999998 = 0.3 - 0.2
  // 0.04000000000000001 = 0.2 * 0.2
  // 2.9999999999999996 = 0.3 / 0.1
  const fractionalPart = numAsStr.split('.')[1]
  const detectLength = 10
  if (fractionalPart.length < detectLength) {
    return num
  }
  const maybeHasOffset =
    fractionalPart.includes(OFFSET_MARK_0) ||
    fractionalPart.includes(OFFSET_MARK_9)
  if (!maybeHasOffset) {
    return num
  }
  MsisDebug.error(`The number maybe has offset: ${num}, please check it.`)
  // fixed
  const fixedNumStr = Big(num).toFixed(detectLength)
  const normalNum = Number(fixedNumStr)
  return normalNum
}
