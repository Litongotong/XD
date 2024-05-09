import axios from 'axios'
import { tokenUtil } from './token'
import { AXIOS_DEFAULT_CONFIG } from '../interface'

export const request = axios.create({
  baseURL: AXIOS_DEFAULT_CONFIG.BASE_URL,
  headers: { 'Content-Type': AXIOS_DEFAULT_CONFIG.CONTENT_TYPE },
  timeout: AXIOS_DEFAULT_CONFIG.TIMEOUT,
})

// request interceptors
request.interceptors.request.use((config) => {
  // TODO: we really need token ???
  const token = tokenUtil.get()
  if (token?.length) {
    config.headers!.Authorization = token
  }
  return config
})

// response interceptors
request.interceptors.response.use(
  function (response) {
    const newToken = response.headers?.Authorization as string | undefined
    if (newToken?.length) {
      // update token
      tokenUtil.set(newToken)
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)
