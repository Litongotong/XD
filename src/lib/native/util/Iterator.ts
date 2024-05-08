export interface NativeIterator<T extends any = any> {
  /**
   * public final boolean hasNext()
   */
  hasNext(): boolean

  /**
   *
   */
  next(): T
}

export class IteratorImpl<T extends any = any> implements NativeIterator<T> {
  private index = 0
  private arr: T[]

  constructor(arr: T[]) {
    this.arr = arr
  }

  hasNext(): boolean {
    return this.index < this.arr.length
  }

  next(): T {
    return this.arr[this.index++]
  }
}
