import { HTTPMethods } from '@/enums'
import { http } from '@/services/axios'

/**
 * 共通管理CJFロジック基底クラス・区分一覧取得API（画面で必要な区分のデータ種別コードのリストを引数とする）API
 * @param data
 * @returns
 */
export async function YSDBSSCjf_getKubunIchiran(data: any): Promise<any> {
  const response = await http({
    url: '/YSDBSSCjf_getKubunIchiran',
    method: HTTPMethods.GET,
    data,
  })

  return response.data
}