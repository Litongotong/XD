// FWClib/properties/client/GeneralSearch022_generalPurposeSearch_Screen.properties

export default {
  // ##損益管理組織検索U用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch022.title': '損益管理組織検索U',

  // 検索条件部項目設定
  'GeneralSearch022.condition.1.labelValue': '組織ｺｰﾄﾞ(L3)',
  'GeneralSearch022.condition.1.fieldType': '1',
  'GeneralSearch022.condition.1.paramName': 'cdKojoZaikoBasho',
  'GeneralSearch022.condition.1.fieldMaxLength': '6',

  'GeneralSearch022.condition.2.labelValue': '組織名称(L3)',
  'GeneralSearch022.condition.2.fieldType': '1',
  'GeneralSearch022.condition.2.paramName': 'nmKojoZaikoBasho',
  'GeneralSearch022.condition.2.fieldMaxLength': '20',
  'GeneralSearch022.condition.2.imeFlg': 'true',

  'GeneralSearch022.condition.3.labelValue': '組織ｺｰﾄﾞ(L4)',
  'GeneralSearch022.condition.3.fieldType': '1',
  'GeneralSearch022.condition.3.paramName': 'cdShokuba',
  'GeneralSearch022.condition.3.fieldMaxLength': '6',

  'GeneralSearch022.condition.4.labelValue': '組織名称(L4)',
  'GeneralSearch022.condition.4.fieldType': '1',
  'GeneralSearch022.condition.4.paramName': 'nmShokuba',
  'GeneralSearch022.condition.4.fieldMaxLength': '15',
  'GeneralSearch022.condition.4.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch022.result.1.headerTitle': '組織ｺｰﾄﾞ(L3)',
  'GeneralSearch022.result.1.columnWidth': '100',
  'GeneralSearch022.result.1.resultName': 'cdKojoZaikoBasho',

  'GeneralSearch022.result.2.headerTitle': '組織名称(L3)',
  'GeneralSearch022.result.2.columnWidth': '200',
  'GeneralSearch022.result.2.resultName': 'nmKojoZaikoBasho',

  'GeneralSearch022.result.3.headerTitle': '組織略式名称(L3)',
  'GeneralSearch022.result.3.columnWidth': '200',
  'GeneralSearch022.result.3.resultName': 'nmKojoZaikoBashoRyaku',

  'GeneralSearch022.result.4.headerTitle': '組織ｺｰﾄﾞ(L4)',
  'GeneralSearch022.result.4.columnWidth': '100',
  'GeneralSearch022.result.4.resultName': 'cdShokuba',

  'GeneralSearch022.result.5.headerTitle': '組織名称(L4)',
  'GeneralSearch022.result.5.columnWidth': '200',
  'GeneralSearch022.result.5.resultName': 'nmShokuba',

  'GeneralSearch022.result.6.headerTitle': '組織略式名称(L4)',
  'GeneralSearch022.result.6.columnWidth': '200',
  'GeneralSearch022.result.6.resultName': 'nmShokubaRyaku',
}
