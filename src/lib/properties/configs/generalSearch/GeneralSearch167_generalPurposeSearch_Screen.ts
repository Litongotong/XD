// FWClib/properties/client/GeneralSearch167_generalPurposeSearch_Screen.properties

export default {
  // ##工場別受払相手先検索U用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch167.title': '工場別受払相手先検索U',

  // 検索条件部項目設定
  'GeneralSearch167.condition.1.labelValue': '工場',
  'GeneralSearch167.condition.1.fieldType': '3',
  'GeneralSearch167.condition.1.paramName': 'cdKojoZaikoBasho',
  'GeneralSearch167.condition.1.required': 'true',
  'GeneralSearch167.condition.1.fieldMaxLength': '6',

  'GeneralSearch167.condition.2.labelValue': '受払区分',
  'GeneralSearch167.condition.2.fieldType': '3',
  'GeneralSearch167.condition.2.paramName': 'ukeharaiKbn',
  'GeneralSearch167.condition.2.required': 'true',
  'GeneralSearch167.condition.2.fieldMaxLength': '2',

  'GeneralSearch167.condition.3.labelValue': '乳区分',
  'GeneralSearch167.condition.3.fieldType': '3',
  'GeneralSearch167.condition.3.paramName': 'stNyu',
  'GeneralSearch167.condition.3.required': 'true',
  'GeneralSearch167.condition.3.fieldMaxLength': '2',

  // 検索結果表示部項目設定
  'GeneralSearch167.result.1.headerTitle': '受払区分',
  'GeneralSearch167.result.1.columnWidth': '96',
  'GeneralSearch167.result.1.resultName': 'nmUkeharai',

  'GeneralSearch167.result.2.headerTitle': '取引先／工場コード',
  'GeneralSearch167.result.2.columnWidth': '100',
  'GeneralSearch167.result.2.resultName': 'cdAitesakiKojo',

  'GeneralSearch167.result.3.headerTitle': '取引先／工場名',
  'GeneralSearch167.result.3.columnWidth': '320',
  'GeneralSearch167.result.3.resultName': 'nmTorihikisaki',

  'GeneralSearch167.result.4.headerTitle': '乳区分',
  'GeneralSearch167.result.4.columnWidth': '100',
  'GeneralSearch167.result.4.resultName': 'nmNyu',

  'GeneralSearch167.result.5.headerTitle': '相手先/工場区分',
  'GeneralSearch167.result.5.columnWidth': '1',
  'GeneralSearch167.result.5.resultName': 'stAitesakiKojo',

  'GeneralSearch167.result.6.headerTitle': '相手先/工場区分名',
  'GeneralSearch167.result.6.columnWidth': '1',
  'GeneralSearch167.result.6.resultName': 'nmAitesakiKojo',

  'GeneralSearch167.result.7.headerTitle': '照会用受払区分',
  'GeneralSearch167.result.7.columnWidth': '1',
  'GeneralSearch167.result.7.resultName': 'stUkeharai',

  'GeneralSearch167.result.8.headerTitle': '乳区分値',
  'GeneralSearch167.result.8.columnWidth': '1',
  'GeneralSearch167.result.8.resultName': 'stNyu',

  'GeneralSearch167.result.9.headerTitle': '原料乳受払区分',
  'GeneralSearch167.result.9.columnWidth': '1',
  'GeneralSearch167.result.9.resultName': 'stGenryonyuUkeharai',
}
