export interface Enumeration<T extends any = any> {
  hasMoreElements(): boolean
  nextElement(): T
}

export class Enumerator<T> implements Enumeration {
  private arr: T[] = []
  private index = 0
  constructor(arr: T[]) {
    this.arr = arr
  }
  hasMoreElements(): boolean {
    return this.index < this.arr.length
  }
  nextElement(): T {
    return this.arr[this.index++]
  }
}
