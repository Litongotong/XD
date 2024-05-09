import type { List } from "./List"

export class ArrayList<T extends any = any> implements List {
  private list: T[] = []

  constructor(initialCapacity?: number) {
    // pass
  }

  add(item: any): void
  add(index: number, item: any): void
  add(...params: any[]): void {
    if (params.length === 1) {
      this.list.push(params[0])
    } else if (params.length === 2) {
      this.list.splice(params[0], 0, params[1])
    } else {
      throw new Error("Invalid number of arguments")
    }
  }

  clear(): void {
    this.list = []
  }

  get(index: number): any {
    return this.list[index]
  }

  isEmpty(): boolean {
    return this.list.length === 0
  }

  size() {
    return this.list.length
  }

  toArray<V>(list?: V[]) {
    return this.list.slice() as any[] as V[]
  }

  _getType() {
    return ArrayList
  }

  static _fromArray<V>(list: V[]): ArrayList<V> {
    const ins = new ArrayList<V>()
    list.forEach(item => ins.add(item))
    return ins
  }
}