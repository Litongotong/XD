import { HTTPMethods } from '@/services/interface'
import { syncHttp } from '../../commonRequest'

/**
 * 特売精算条件設定・初期化API
 * @param data
 * @returns
 */
export function YEMTSSF260M_init(data: any): any {
  const response = syncHttp({
    url: '/YEMTSSF260M_init',
    method: HTTPMethods.POST,
    data,
  })

  return response.data
}

/**
 * 特売精算条件設定・特売設定取得API
 * @param data
 * @returns
 */
export function YEMTSSF260M_getTokubaiSettei(data: any): any {
  const response = syncHttp({
    url: '/YEMTSSF260M_getTokubaiSettei',
    method: HTTPMethods.POST,
    data,
  })

  return response.data
}

/**
 * 特売精算条件設定・特売設定更新API
 * @param data
 * @returns
 */
export function YEMTSSF260M_updateTokubaiSettei(data: any): any {
  const response = syncHttp({
    url: '/YEMTSSF260M_updateTokubaiSettei',
    method: HTTPMethods.POST,
    data,
  })

  return response.data
}

/**
 * 特売精算条件設定・特売設定登録API
 * @param data
 * @returns
 */
export function YEMTSSF260M_rgsTokubaiSettei(data: any): any {
  const response = syncHttp({
    url: '/YEMTSSF260M_rgsTokubaiSettei',
    method: HTTPMethods.POST,
    data,
  })

  return response.data
}

/**
 * 特売精算条件設定・帳票印刷API
 * @param data
 * @returns
 */
export function YEMTSSF260M_print(data: any): any {
  const response = syncHttp({
    url: '/YEMTSSF260M_print',
    method: HTTPMethods.POST,
    data,
  })

  return response.data
}
