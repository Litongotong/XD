export const AXIOS_DEFAULT_CONFIG = {
  BASE_URL: import.meta.env.VITE_AXIOS_BASE_URL,
  CONTENT_TYPE: 'application/json',
  TIMEOUT: 3000,
} as const

export const SYNC_HTTP_DEFAULT_CONFIG: ISyncRequestCommonConfigs = {
  baseURL: AXIOS_DEFAULT_CONFIG.BASE_URL,
  headers: { 'Content-Type': AXIOS_DEFAULT_CONFIG.CONTENT_TYPE },
  timeout: AXIOS_DEFAULT_CONFIG.TIMEOUT,
}

export enum HTTPMethods {
  GET = 'GET',
  POST = 'POST',
}

interface IResponseError {
  error?: string
  path?: string
  status?: number
  timestamp?: number
}

export interface IResponse extends IResponseError {
  [key: string]: any
}

export interface ISyncResponse<T = IResponse> {
  data: T
  status: number
  headers: ISyncRequestHeaders
  xhr: XMLHttpRequest
}

export interface ISyncRequestParams {
  url: string
  method: HTTPMethods
  data: any
  headers?: ISyncRequestHeaders
  configs?: ISyncRequestCommonConfigs
}

export interface ISyncRequestCommonConfigs {
  baseURL: string
  headers: ISyncRequestHeaders
  timeout: number
}

export interface ISyncRequestHeaders {
  [key: string]: string
}
