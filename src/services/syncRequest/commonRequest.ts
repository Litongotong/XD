import { SYNC_HTTP_DEFAULT_CONFIG } from '../interface'
import type {
  IResponse,
  ISyncRequestHeaders,
  ISyncRequestParams,
  ISyncResponse,
} from '../interface'
import { cloneDeep } from '@/utils/useful'
import { tokenUtil } from '../axios/token'
import { trim } from '@/utils/useful/trim'

export function syncHttp(params: ISyncRequestParams): ISyncResponse {
  const { url, configs, method } = params

  const finalConfig = Object.assign({}, SYNC_HTTP_DEFAULT_CONFIG, configs)
  const { baseURL, headers: userHeaders, timeout } = finalConfig
  const headers: ISyncRequestHeaders = {
    ...cloneDeep(SYNC_HTTP_DEFAULT_CONFIG.headers),
    ...(userHeaders || {}),
  }

  // schema check
  if (!url?.length) {
    throw new Error('The URL is required.')
  }
  if (!method?.length) {
    throw new Error('The method is required.')
  }

  // --- request interceptors start ---
  // TODO: we really need token ???
  // set token
  const token = tokenUtil.get()
  if (token?.length) {
    headers.Authorization = token
  }
  // --- request interceptors end ---

  const requestUrl = `${trimEndSlash(baseURL)}/${trimStartSlash(url)}`
  const xhr = new XMLHttpRequest()
  xhr.open(method, requestUrl, false)

  // set xhr request headers
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value)
  })

  try {
    const requestDataAsString = JSON.stringify(params.data)
    // send
    xhr.send(requestDataAsString)
  } catch (e: any) {
    console.error(`Request failed (${url}, ${method}), error: ${e.message}`, e)
    throw e
  }

  const retHeaders = parseResponseHeaders(xhr.getAllResponseHeaders())

  let json: IResponse
  try {
    json = JSON.parse(xhr.response)
  } catch (e) {
    console.error(
      `Failed to parse response JSON: ${xhr.response}, from ${url}, ${method}`,
      e,
    )
    throw e
  }
  const response: ISyncResponse = {
    data: json,
    status: xhr.status,
    headers: retHeaders,
    xhr,
  }

  // --- response interceptors start ---
  responseHandler(response)
  // --- response interceptors end ---

  return response
}

function responseHandler(response: ISyncResponse): ISyncResponse {
  const newToken = response.headers?.Authorization
  if (newToken?.length) {
    tokenUtil.set(newToken)
  }
  return response
}

function parseResponseHeaders(headers: string): ISyncRequestHeaders {
  const lines = headers.split(/\r?\n/)

  const result: ISyncRequestHeaders = {}

  lines.forEach((line) => {
    line = trim(line)
    if (!line?.length) {
      return
    }
    const firstColonIndex = line.indexOf(':')
    if (!~firstColonIndex) {
      return
    }
    const key = line.slice(0, firstColonIndex)
    const value = line.slice(firstColonIndex + 1)
    result[key] = value
  })

  return result
}

function trimEndSlash(path: string) {
  return path.endsWith('/') ? path.slice(0, -1) : path
}

function trimStartSlash(path: string) {
  return path.startsWith('/') ? path.slice(1) : path
}
