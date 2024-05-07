export enum EBoolean {
  TRUE = 'true',
  FALSE = 'false',
}

// because `Boolean` is a JavaScript built-in keyword, we use `NativeBoolean` instead
export class NativeBoolean {
  private value: EBoolean

  constructor(v: boolean | string) {
    if (typeof v === 'boolean') {
      this.value = v === true ? EBoolean.TRUE : EBoolean.FALSE
      return
    }
    if (typeof v === 'string') {
      if (v.toLowerCase() === EBoolean.TRUE) {
        this.value = EBoolean.TRUE
      } else {
        this.value = EBoolean.FALSE
      }
      return
    }
    this.value = EBoolean.FALSE
  }

  static valueOf(value: boolean | string): NativeBoolean {
    return new NativeBoolean(value)
  }

  booleanValue(): boolean {
    return this.value === EBoolean.TRUE
  }

  toString(): string {
    return this.value.toString()
  }
}
