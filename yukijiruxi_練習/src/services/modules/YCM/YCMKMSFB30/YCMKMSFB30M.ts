import { HTTPMethods } from '@/enums'
import { http } from '@/services/axios'

/**
 * 共通管理CJFロジック基底クラス・区分一覧取得API（画面で必要な区分のデータ種別コードのリストを引数とする）API
 * @param data
 * @returns
 */
export async function  YCMKMSFB30M_getJugyoinIchiran(data: any): Promise<any> {
  const response = await http({
    url: 'http://localhost:8082/YCMKMSFB30M_getJugyoinIchiran',
    method: HTTPMethods.POST,
    data,
  })

  return response.data
}