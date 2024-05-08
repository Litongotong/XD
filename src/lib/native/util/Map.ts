import type { NativeSet } from "./Set"

// because `Map` is a JavaScript built-in keyword, we use `NativeMap` instead
export interface NativeMap<K extends any = any, V extends any = any> {
  get(key: K): V
  put(key: K, value: V): V
  putAll(map: NativeMap<K, V>): void
  length(): number
  containsKey(key: K): boolean
  size(): number
  isEmpty(): boolean
  forEach(callback: (key: K, value: V) => void): void
  containsValue(value: V): boolean
  keySet(): NativeSet<K>
  clear(): void
  remove(key: K): V
  _getType(): any
}
