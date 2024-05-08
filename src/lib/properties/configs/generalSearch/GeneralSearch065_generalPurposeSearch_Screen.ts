// FWClib/properties/client/GeneralSearch065_generalPurposeSearch_Screen.properties

export default {
  // ##損益管理組織検索W用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch065.title': '損益管理組織検索W',

  // 検索条件部項目設定
  'GeneralSearch065.condition.1.labelValue': '組織ｺｰﾄﾞ(L3)',
  'GeneralSearch065.condition.1.fieldType': '1',
  'GeneralSearch065.condition.1.paramName': 'cdKojoZaikoBasho',
  'GeneralSearch065.condition.1.fieldMaxLength': '6',

  'GeneralSearch065.condition.2.labelValue': '組織名称(L3)',
  'GeneralSearch065.condition.2.fieldType': '1',
  'GeneralSearch065.condition.2.paramName': 'nmKojoZaikoBasho',
  'GeneralSearch065.condition.2.fieldMaxLength': '20',
  'GeneralSearch065.condition.2.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch065.result.1.headerTitle': '組織ｺｰﾄﾞ(L3)',
  'GeneralSearch065.result.1.columnWidth': '100',
  'GeneralSearch065.result.1.resultName': 'cdKojoZaikoBasho',

  'GeneralSearch065.result.2.headerTitle': '組織名称(L3)',
  'GeneralSearch065.result.2.columnWidth': '200',
  'GeneralSearch065.result.2.resultName': 'nmKojoZaikoBasho',

  'GeneralSearch065.result.3.headerTitle': '組織略式名称(L3)',
  'GeneralSearch065.result.3.columnWidth': '200',
  'GeneralSearch065.result.3.resultName': 'nmKojoZaikoBashoRyaku',
}
