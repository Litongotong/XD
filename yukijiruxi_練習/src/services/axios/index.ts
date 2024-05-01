import axios, { HttpStatusCode } from 'axios'

import { AXIOS_CONFIG, STORAGE_KEYS } from '@/config'
import { getSystemDateTime, storageSession } from '@/utils'
import { ApiResponseStatus, MSGPositions, MSGTypes } from '@/enums'
import { getMessage, handlerMessage } from '@/utils/message'
import { useDialog } from '@/stores/dialog'
import { handleSystemException } from '@/utils/exception'

const { setShowDialog } = useDialog()

export const http = axios.create({
  baseURL: AXIOS_CONFIG.BASE_URL,
  headers: { 'Content-Type': AXIOS_CONFIG.CONTENT_TYPE },
  timeout: AXIOS_CONFIG.TIMEOUT,
})

http.interceptors.request.use((config) => {
  config.headers!.Authorization = computeAuthorization()
  return config
})

function computeAuthorization(): string {
  const token = storageSession.get<string>(STORAGE_KEYS.TOKEN_INFO)
  return token ?? ''
}

// リクエスト インターセプターを追加します
http.interceptors.response.use(
  // ステータスコードが 2xx の範囲にある場合、この関数が起動します
  // リクエスト データの処理
  function (response) {
    if (response.headers.Authorization) {
      storageSession.set<string>(
        STORAGE_KEYS.TOKEN_INFO,
        response.headers.Authorization,
      )
    }

    // 異常終了場合
    if (response.status != HttpStatusCode.Ok) {
      const errorMessage: string =
        response.data.result?.message?.[0] ?? response.data.message?.[0]

      // resposeステータスは220（業務エラー）の場合、ダイアローグを表示する
      if (response.status == ApiResponseStatus.APPLICATION_ERROR_STATUS) {
        handlerMessage(MSGPositions.POPUP, MSGTypes.ERROR, errorMessage, [
          {
            title: '閉じる',
            disabled: false,
            width: '80',
            height: '15',
            onClick: () => setShowDialog(false), // ダイアログ非表示処理
          },
        ])
      }

      // resposeステータスは500（システムエラー）の場合、システムエラー画面へ遷移する
      if (response.status == ApiResponseStatus.SYSTEM_ERROR_STATUS) {
        handleSystemException(
          errorMessage.slice(0, 12),
          errorMessage.slice(13),
          getSystemDateTime(),
        )
      }
    }

    return response
  },

  // resposeなしの場合、システムエラー画面へ遷移する
  function (error) {
    handleSystemException(
      'SMSCMNMCE002',
      getMessage('SMSCMNMCE002'),
      getSystemDateTime(),
    )
    return Promise.reject(error)
  },
)
