import { MsisDebug } from "@/utils/debug/log"

const TOKEN_VERSION = 'v1'
export const TOKEN_KEY = `__msis_token_info_${TOKEN_VERSION}__`

const getUsingStorage = () => {
  const isDebug = MsisDebug.isDebug()
  if (isDebug) {
    return localStorage
  }
  return sessionStorage
}

export const tokenUtil = {
  get: () => {
    const usingLS = getUsingStorage()
    const token = usingLS.getItem(TOKEN_KEY)
    return token
  },
  set: (token: string) => {
    const usingLS = getUsingStorage()
    usingLS.setItem(TOKEN_KEY, token)
  },
} as const
