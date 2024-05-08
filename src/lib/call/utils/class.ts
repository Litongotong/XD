import { HashMap } from '@/lib/native/util/HashMap'
import { isNil } from '@/utils/useful'
import { toRaw } from 'vue'

type Instance = {
  [key: string]: any
}

// if instance has `_objectify` function, use it to objectify
const OBJECTIFY_INTERNAL_FUNCTION = `_objectify`

export function objectifyInstance(instance: Instance) {
  if (
    instance?.[OBJECTIFY_INTERNAL_FUNCTION] &&
    typeof instance[OBJECTIFY_INTERNAL_FUNCTION] === 'function'
  ) {
    return instance[OBJECTIFY_INTERNAL_FUNCTION]()
  }

  const rawInstance = toRaw(instance)
  const keys: string[] = []
  let proto = Object.getPrototypeOf(rawInstance);
  while (proto) {
    if (proto === Object.prototype) {
      break
    }
    const inheritedProps = Object.getOwnPropertyNames(proto);
    keys.push(...inheritedProps);
    proto = Object.getPrototypeOf(proto);
  }
  const result: Record<string, any> = {}

  keys.forEach((key) => {
    const isStartWithSet = key.startsWith('get')
    const isFunc = instance?.[key] && typeof instance[key] === 'function'
    const isGetter = isStartWithSet && isFunc
    if (isGetter) {
      // getXxx => xxx
      const filedName = `${key[3].toLowerCase()}${key.slice(4)}`
      const value = instance[key]()
      result[filedName] = value
    }
  })

  return result
}

export function setInstanceValue(
  instance: Instance,
  sourceObj: Record<string, any> = {},
) {
  if (!instance || !sourceObj) {
    return
  }

  const rawSourceObj = toRaw(sourceObj)
  Object.entries(rawSourceObj).forEach(([key, value]) => {
    const methodName = `set${key[0].toUpperCase()}${key.slice(1)}`
    const hasMethod =
      instance?.[methodName] && typeof instance[methodName] === 'function'
    // set
    if (hasMethod) {
      instance[methodName](value)
    }
  })
}

export const toHashMap = (data: any) => {
  const toMap = (data: any): HashMap => {
    if (!data) {
      return data
    }
    if (Array.isArray(data)) {
      throw new Error('Array is not supported')
    }
    if (data instanceof HashMap) {
      return data
    }
    // is Object
    if (typeof data === 'object') {
      const map = new HashMap()
      for (const [key, value] of Object.entries(data)) {
        if (isNil(value)) {
          map.put(key, value)
        } else {
          // is Array or Object
          if (typeof value === 'object') {
            map.put(key, toMap(value))
          } else {
            map.put(key, value);
          }
        }
      }
      return map
    }
    return data
  }

  return toMap(data)
}
