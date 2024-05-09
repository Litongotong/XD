// FWClib/properties/client/GeneralSearch171_generalPurposeSearch_Screen.properties

export default {
  // ##原料乳購入用途検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch171.title': '原料乳購入用途検索',

  // 検索条件部項目設定
  'GeneralSearch171.condition.1.labelValue': '損益管理組織',
  'GeneralSearch171.condition.1.fieldType': '3',
  'GeneralSearch171.condition.1.paramName': 'cdSonekikanriSoshiki',
  'GeneralSearch171.condition.1.required': 'true',
  'GeneralSearch171.condition.1.fieldMaxLength': '6',

  'GeneralSearch171.condition.2.labelValue': '乳市区分',
  'GeneralSearch171.condition.2.fieldType': '3',
  'GeneralSearch171.condition.2.paramName': 'cdNyushi',
  'GeneralSearch171.condition.2.required': 'true',
  'GeneralSearch171.condition.2.fieldMaxLength': '2',

  'GeneralSearch171.condition.3.labelValue': '購入用途ｺｰﾄﾞ',
  'GeneralSearch171.condition.3.fieldType': '1',
  'GeneralSearch171.condition.3.paramName': 'cdKonyuYoto',
  'GeneralSearch171.condition.3.fieldMaxLength': '6',

  'GeneralSearch171.condition.4.labelValue': '購入用途名称',
  'GeneralSearch171.condition.4.fieldType': '1',
  'GeneralSearch171.condition.4.paramName': 'nmKonyuYoto',
  'GeneralSearch171.condition.4.fieldMaxLength': '20',
  'GeneralSearch171.condition.4.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch171.result.1.headerTitle': '購入用途ｺｰﾄﾞ',
  'GeneralSearch171.result.1.columnWidth': '100',
  'GeneralSearch171.result.1.resultName': 'cdKonyuYoto',

  'GeneralSearch171.result.2.headerTitle': '購入用途名称',
  'GeneralSearch171.result.2.columnWidth': '280',
  'GeneralSearch171.result.2.resultName': 'nmKonyuYoto',
}
