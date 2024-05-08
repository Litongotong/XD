import { Enumerator, type Enumeration } from '../lang/Enumeration'
import { Dictionary } from './Dictionary'
import { HashMap } from './HashMap'
import type { NativeMap } from './Map'

export class Hashtable extends Dictionary {
  private map = new Map<any, any>()

  constructor(dict?: NativeMap | Properties) {
    super()
    if (dict) {
      const isProperties = dict?._getType() === Properties
      if (isProperties) {
        const properties = dict as Properties
        this.map = properties._getMap()
      } else {
        // is NativeMap
        const nativeMap = dict as NativeMap
        nativeMap.forEach((key, value) => {
          this.map.set(key, value)
        })
      }
    }
  }

  put(key: any, value: any) {
    this.map.set(key, value)
  }

  get(key: any) {
    return this.map.get(key)
  }

  keys(): Enumeration {
    return new Enumerator(Array.from(this.map.keys()))
  }

  remove(key: any) {
    const target = this.map.get(key)
    this.map.delete(key)
    return target
  }

  clone(): Hashtable {
    const newIns = new Hashtable()
    // FIXME: JS Map.forEach() has different signature
    this.map.forEach((value, key) => {
      newIns.put(key, value)
    })
    return newIns
  }

  clear() {
    this.map.clear()
  }

  _toHashMap(): NativeMap {
    const ins = new HashMap()
    ins._setMap(this.map)
    return ins
  }

  _getMap() {
    return this.map
  }

  _getType() {
    return Hashtable
  }
}

export class Properties<K extends any = any, V extends any = any> extends Hashtable {
  constructor() {
    super()
  }

  _getType() {
    return Properties
  }
}
