export interface List<T extends any = any> {
  /**
   * boolean add(E e);
   * void add(int index, E element);
   * @param obj
   */
  add(item: T): void
  add(index: number, item: T): void

  clear(): void
  get(index: number): T
  isEmpty(): boolean
  size(): number
  toArray<V extends any = T>(list?: V[]): V[]
  _getType(): any
}
