import type { Serializable } from '../io/Serializable'
import { IllegalArgumentException } from '../lang/IllegalArgumentException'

export class EventObject implements Serializable {
  protected source: any

  constructor(source: any) {
    if (source === null || source === undefined)
      throw new IllegalArgumentException('null source')

    this.source = source
  }

  getSource(): any {
    return this.source
  }

  toString(): string {
    return 'EventObject' + '[source=' + this.source + ']'
  }

  _getName(): string {
    return 'EventObject'
  }
}
