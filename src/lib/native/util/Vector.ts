import { Enumerator, type Enumeration } from '../lang/Enumeration'
import { AbstractList } from './AbstractList'
import type { List } from './List'

export class Vector<T extends any = any> extends AbstractList implements List {
  private list: T[] = []

  constructor(initialCapacity?: number) {
    super()
  }

  add(item: any): void
  add(index: number, item: any): void
  add(...params: any[]): void {
    if (params.length === 1) {
      this.list.push(params[0])
    } else if (params.length === 2) {
      this.list.splice(params[0], 0, params[1])
    } else {
      throw new Error('Invalid number of arguments')
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

  elements(): Enumeration<T> {
    const arr = this.list
    return new Enumerator(arr)
  }

  elementAt(index: number): T {
    return this.list[index]
  }

  indexOf(item: T): number {
    return this.list.indexOf(item)
  }

  firstElement(): T {
    return this.list[0]
  }

  lastElement(): T {
    return this.list[this.list.length - 1]
  }

  addElement(item: T): void {
    this.list.push(item)
  }

  insertElementAt(item: T, index: number): void {
    this.list.splice(index, 0, item)
  }

  removeElement(item: T): boolean {
    const index = this.list.indexOf(item)
    if (index === -1) {
      return false
    }
    this.list.splice(index, 1)
    return true
  }

  removeAllElements(): void {
    this.list = []
  }

  toString(): string {
    return `[Vector] ${this.list
      .map((item) => {
        if (item?.toString && typeof item.toString === 'function') {
          return item.toString()
        } else {
          return `${item}`
        }
      })
      .join(', ')}`
  }

  removeElementAt(index: number): void {
    this.list.splice(index, 1)
  }

  _getType() {
    return Vector
  }
}
