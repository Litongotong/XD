import { HTTPMethods } from '@/enums'
import { http } from '@/services/axios'
import { HttpStatusCode } from 'axios'
import type { APIYPMCommon } from '../types'

/**
 * 「仕掛品計上」画面の初期化API
 * @param data 初期化引数
 * @returns 初期化用業務データ
 */
export const initYPMSGSF070M = async (
  data: APIYPMCommon.InProcessItemAccountingListMessage,
) => {
  const response = await http<APIYPMCommon.InProcessItemAccountingListMessage>({
    url: '/YPMSGSF070M_init',
    method: HTTPMethods.POST,
    data,
  })

  const succeed = response.status === HttpStatusCode.Ok
  return succeed ? response.data : undefined
}

/**
 * 月次仕掛品入力一覧取得 API
 * @param data 一覧取得引数
 * @returns 一覧
 */
export const queryInProcessItemInputList = async (
  data: APIYPMCommon.InProcessItemAccountingListMessage,
) => {
  const response = await http<APIYPMCommon.InProcessItemAccountingListMessage>({
    url: 'YPMSGSF070M_getShikakarihinKeijoNyuryokuIchiran',
    method: HTTPMethods.POST,
    data,
  })

  const succeed = response.status === HttpStatusCode.Ok
  return succeed ? response.data : undefined
}

/**
 * 仕掛情報更新 API
 * @param data 更新用引数
 */
export const updateInProcesssItems = async (
  data: APIYPMCommon.InProcessItemAccountingListMessage,
) => {
  const response = await http<APIYPMCommon.InProcessItemAccountingListMessage>({
    url: '/YPMSGSF070M_updateGetsujiShikakarihinMeisai',
    method: HTTPMethods.POST,
    data,
  })

  if(response.status===HttpStatusCode.Ok){
    return response.data
  }else{
    return {}
  }
}
