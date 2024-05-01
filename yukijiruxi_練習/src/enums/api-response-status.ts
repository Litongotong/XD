export enum ApiResponseStatus {
  /** @description 正常終了ステータス */
  SUCCESSFUL_STATUS = 200,
  /** @description 業務エラーステータス */
  APPLICATION_ERROR_STATUS = 220,
  /** @description システムエラーステータス */
  SYSTEM_ERROR_STATUS = 500,
  /** @description 必須入力エラーステータス */
  REQUIRED_ERROR_STATUS = 400,
  /** @description 認証エラーステータス */
  AUTHENTICATION_ERROR_STATUS = 401,
  /** @description 認可エラーステータス */
  AUTHORIZATION_ERROR_STATUS = 403,
}
