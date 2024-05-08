const TOKEN_VERSION = 'v1'
export const TOKEN_KEY = `__msis_token_info_${TOKEN_VERSION}__`

const usingLS = sessionStorage // localStorage

export const tokenUtil = {
  get: () => {
    const token = usingLS.getItem(TOKEN_KEY)
    return token
  },
  set: (token: string) => {
    usingLS.setItem(TOKEN_KEY, token)
  },
} as const
