enum CloneType {
  Object = 'Object',
  Array = 'Array',
  Date = 'Date',
  RegExp = 'RegExp',
  Function = 'Function',
  String = 'String',
  Number = 'Number',
  Boolean = 'Boolean',
  Undefined = 'Undefined',
  Null = 'Null',
  Symbol = 'Symbol',
  Set = 'Set',
  Map = 'Map',
}

type _CloneType = keyof typeof CloneType

function isType<T>(type: _CloneType, obj: T) {
  return Object.prototype.toString.call(obj) === `[object ${type}]`
}

export function cloneDeep<T>(obj: T, cache = new WeakMap()): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (isType(CloneType.Symbol, obj)) {
    return obj.constructor((obj as unknown as Symbol).description)
  }
  if (cache.has(obj)) {
    return cache.get(obj)
  }

  let temp: T, param: T
  if (isType(CloneType.Date, obj) || isType(CloneType.RegExp, obj)) {
    param = obj
  }
  // @ts-expect-error
  temp = new obj!.constructor(param)
  if (isType(CloneType.Array, obj) || isType(CloneType.Object, obj)) {
    Object.keys(obj).forEach((key) => {
      if (obj.hasOwnProperty(key)) {
        // @ts-expect-error
        temp[key] = cloneDeep(obj[key], cache)
      }
    })
  }
  if (isType(CloneType.Set, obj)) {
    for (let value of obj as unknown as Set<T>) {
      ;(temp as Set<T>).add(cloneDeep(value, cache))
    }
  }
  if (isType(CloneType.Map, obj)) {
    for (let [key, value] of obj as unknown as Map<T, T>) {
      ;(temp as Map<T, T>).set(cloneDeep(key, cache), cloneDeep(value, cache))
    }
  }
  cache.set(obj, temp)
  return temp
}
