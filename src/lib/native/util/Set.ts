import { IteratorImpl, type NativeIterator } from './Iterator'

export interface NativeSet<T extends any = any> {
  /**
   * boolean add(E e);
   * void add(int index, E element);
   * @param obj
   */
  iterator(): NativeIterator<T>
  toArray<V extends any = T>(list?: V[]): V[]
}

export class KeySet<T extends any = any> implements NativeSet {
  private set = new Set<T>()
  constructor(arr: any[]) {
    arr.forEach((value) => {
      this.set.add(value)
    })
  }

  iterator(): NativeIterator<T> {
    const impl = new IteratorImpl([...this.set])
    return impl
  }

  toArray(list?: any[]): any[] {
    const arr = [...this.set.values()]
    return arr
  }
}
