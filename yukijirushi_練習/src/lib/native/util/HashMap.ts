import type { NativeMap } from './Map'
import { KeySet, type NativeSet } from './Set'

export class HashMap<K extends any = any, V extends any = any>
  implements NativeMap
{
  private map = new Map<K, V>()

  constructor();
  constructor(initialCapacity: number);
  constructor(map: NativeMap<K, V>);
  constructor(mapOrInitialCapacity?: NativeMap | number) {
    if (!mapOrInitialCapacity) {
      return
    }
    if (typeof mapOrInitialCapacity === 'number') {
      return
    } else {
      const map = mapOrInitialCapacity
      // support Map<K, V> and NativeMap<K, V>
      if (map?.forEach && typeof map.forEach === 'function') {
        if (map instanceof Map) {
          // JavaScript Map
          // FIXME: JS Map.forEach() has different signature
          map.forEach((value, key) => {
            this.map.set(key, value)
          })
        } else {
          // NativeMap
          map.forEach((key, value) => {
            this.map.set(key, value)
          })
        }
        return
      }
      // support Record<string, any>
      if (typeof map === 'object' && !Array.isArray(map)) {
        Object.entries(map).forEach(([key, value]) => {
          this.map.set(key as K, value as V)
        })
        return
      }
    }
  }

  put(key: K, value: V): any {
    this.map.set(key, value)
    return value
  }

  putAll(map: NativeMap<K, V>): void {
    map.forEach((key, value) => {
      this.map.set(key, value)
    })
  }

  clear(): void {
    this.map.clear()
  }

  remove(key: any) {
    const value = this.map.get(key)
    this.map.delete(key)
    return value
  }

  containsKey(key: K): boolean {
    return this.map.has(key)
  }

  get(key: K): V | undefined {
    return this.map.get(key)
  }

  length(): number {
    return this.map.size
  }

  isEmpty(): boolean {
    return this.map.size === 0
  }

  forEach(callback: (key: K, value: V) => void): void {
    // FIXME: JS Map.forEach() has different signature
    this.map.forEach((value, key) => {
      callback(key, value)
    })
  }

  size(): number {
    return this.map.size
  }

  keySet(): NativeSet {
    const keySet = new KeySet([...this.map.keys()])
    return keySet
  }

  toString(): string {
    let str = ''
    // FIXME: JS Map.forEach() has different signature
    this.map.forEach((value, key) => {
      str += key + '=' + value + ','
    })
    const result = `{${str}}`
    return result
  }

  containsValue(value: V): boolean {
    return [...this.map.values()].includes(value)
  }

  _setMap(map: Map<K, V>) {
    this.map = map
  }

  _getMap(): Map<K, V> {
    return this.map
  }

  _toObject(): Record<string, V> {
    return Object.fromEntries(this.map)
  }

  _getType() {
    return HashMap
  }
}
