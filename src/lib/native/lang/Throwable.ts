export interface IError {
  _getName(): string
}

export class Throwable extends Error implements IError {
  cause: Throwable

  constructor(messageOrThrowable?: string | Throwable, cause?: Throwable) {
    const asString = typeof messageOrThrowable === 'string'
    if (asString) {
      super(messageOrThrowable)
    } else {
      super(messageOrThrowable?.message || 'Error')
    }
    if (cause) {
      this.cause = cause
    }
  }

  _getName(): string {
    return 'Throwable'
  }

  getClass() {
    return {
      getName: () => {
        const insName = this?._getName?.() || 'UnknownError'
        return insName
      },
    }
  }
}
