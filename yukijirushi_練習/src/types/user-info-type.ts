import { ViewMode } from '@/enums'

export interface UserInfo {
  // ユーザID
  userId: string
  // ユーザ名（苗字）
  userFirstName: string
  // ユーザ名（名前）
  userGivenName: string
  // ユーザ名（カナ）
  userKatakanaName: string
  // 従業員コード
  staffCode: string
  // 会社コード
  companyCode: string
  // 会社名
  companyName: string
  // 部署名
  departmentName: string
  // 工場・在庫場所コード
  factoryCode: string
  // 倉庫コード
  warehouseCode: string
  // 工程コード
  projectCode: string
  // 損益管理組織コード（レベル3）
  departmentCodeLeve3: string
  // 損益管理組織コード（レベル4）
  departmentCodeLeve4: string
  // 役割区分
  roleDistinguish: string
  // 権限コード　（※未使用）
  // roleCode: string;
  // 処理モード
  mode: ViewMode
  // 自ポスト名
  myPostName: string
  // クライアントIPアドレス
  clientIpAddress: string
  // ログイン日時
  loginDate: string
  // 運用日付
  useDate: string
}
