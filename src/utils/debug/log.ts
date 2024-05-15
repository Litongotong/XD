import { FIRST_BUILD_FOR_PREVIEW_240508 } from './constants'

const DEBUG_STYLE = {
  log: `color: #fff; background-color: rgba(0,0,0,.5); padding: 2px 4px; border-radius: 4px;`,
  error: `color: #fff; background-color: #f00; padding: 2px 4px; border-radius: 4px;`,
  warn: `color: #fff; background-color: orange; padding: 2px 4px; border-radius: 4px;`,
} as const

const DEBUG_LS_KEY = `__msis_debug_v1__`
enum EDebugMode {
  open = '1',
  close = '0',
}

const setDebugMode = (debug: boolean) => {
  localStorage.setItem(DEBUG_LS_KEY, debug ? EDebugMode.open : EDebugMode.close)
}
const getDebugMode = () => {
  return localStorage.getItem(DEBUG_LS_KEY) === EDebugMode.open
}

const isDev = import.meta.env.DEV || FIRST_BUILD_FOR_PREVIEW_240508

export class MsisDebug {
  private static debug: boolean | undefined
  private static devPage: boolean | undefined

  private static init() {
    ;(window as any).setDebugMode = (debug: boolean) => {
      setDebugMode(debug)
    }
  }

  static {
    this.init()
  }

  static isDevPage() {
    if (!isDev) {
      return false
    }
    if (typeof this.devPage === 'boolean') {
      return this.devPage
    }
    const isDevPage = window.location.hash.includes('/dev')
    this.devPage = isDevPage
    return isDevPage
  }

  static isDebug() {
    if (!isDev) {
      return false
    }
    if (typeof this.debug === 'boolean') {
      return this.debug
    }
    // set by url params
    const search = window.location.search
    const params = new URLSearchParams(search)
    if (params.get('debug')?.length) {
      this.debug = true
    }
    // set by local storage
    if (typeof this.debug === 'undefined' && getDebugMode()) {
      this.debug = true
    }
    return this.debug
  }

  static log(...args: any[]) {
    if (isDev) {
      if (!this.isDebug()) {
        return
      }
      const prefix = '%c[DEBUG]'
      console.log(prefix, DEBUG_STYLE.log, ...args)
    }
  }

  static error(...args: any[]) {
    if (isDev) {
      if (!this.isDebug()) {
        return
      }
      const prefix = '%c[DEBUG]'
      console.log(prefix, DEBUG_STYLE.error, ...args)
    }
  }

  static warn(...args: any[]) {
    if (isDev) {
      if (!this.isDebug()) {
        return
      }
      const prefix = '%c[DEBUG]'
      console.log(prefix, DEBUG_STYLE.warn, ...args)
    }
  }
}
