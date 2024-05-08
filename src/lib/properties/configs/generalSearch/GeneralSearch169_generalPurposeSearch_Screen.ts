// FWClib/properties/client/GeneralSearch169_generalPurposeSearch_Screen.properties

export default {
  // ##工場別受払相手先検索W用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch169.title': '工場別受払相手先検索W',

  // 検索条件部項目設定
  'GeneralSearch169.condition.1.labelValue': '工場',
  'GeneralSearch169.condition.1.fieldType': '3',
  'GeneralSearch169.condition.1.paramName': 'cdKojoZaikoBasho',
  'GeneralSearch169.condition.1.required': 'true',
  'GeneralSearch169.condition.1.fieldMaxLength': '6',

  'GeneralSearch169.condition.2.labelValue': '受払区分',
  'GeneralSearch169.condition.2.fieldType': '3',
  'GeneralSearch169.condition.2.paramName': 'stGenryonyuUkeharai',
  'GeneralSearch169.condition.2.required': 'true',
  'GeneralSearch169.condition.2.fieldMaxLength': '2',

  'GeneralSearch169.condition.3.labelValue': '乳区分',
  'GeneralSearch169.condition.3.fieldType': '3',
  'GeneralSearch169.condition.3.paramName': 'stNyu',
  'GeneralSearch169.condition.3.required': 'true',
  'GeneralSearch169.condition.3.fieldMaxLength': '2',

  // 検索結果表示部項目設定
  'GeneralSearch169.result.1.headerTitle': '受払区分',
  'GeneralSearch169.result.1.columnWidth': '60',
  'GeneralSearch169.result.1.resultName': 'nmGenryonyuUkeharai',

  'GeneralSearch169.result.2.headerTitle': '取引先／工場コード',
  'GeneralSearch169.result.2.columnWidth': '100',
  'GeneralSearch169.result.2.resultName': 'cdAitesakiKojo',

  'GeneralSearch169.result.3.headerTitle': '取引先／工場名',
  'GeneralSearch169.result.3.columnWidth': '200',
  'GeneralSearch169.result.3.resultName': 'nmTorihikisakiRyaku',

  'GeneralSearch169.result.4.headerTitle': '乳区分',
  'GeneralSearch169.result.4.columnWidth': '100',
  'GeneralSearch169.result.4.resultName': 'nmNyu',

  'GeneralSearch169.result.5.headerTitle': '買入先',
  'GeneralSearch169.result.5.columnWidth': '100',
  'GeneralSearch169.result.5.resultName': 'nmKaiireSaki',

  'GeneralSearch169.result.6.headerTitle': '受払区分値',
  'GeneralSearch169.result.6.columnWidth': '1',
  'GeneralSearch169.result.6.resultName': 'stGenryonyuUkeharai',

  'GeneralSearch169.result.7.headerTitle': '乳区分値',
  'GeneralSearch169.result.7.columnWidth': '1',
  'GeneralSearch169.result.7.resultName': 'stNyu',

  'GeneralSearch169.result.8.headerTitle': '買入先コード',
  'GeneralSearch169.result.8.columnWidth': '1',
  'GeneralSearch169.result.8.resultName': 'cdKaiireSaki',

  'GeneralSearch169.result.9.headerTitle': '相手先/工場区分',
  'GeneralSearch169.result.9.columnWidth': '1',
  'GeneralSearch169.result.9.resultName': 'stAitesakiKojo',

  'GeneralSearch169.result.10.headerTitle': '相手先/工場区分名',
  'GeneralSearch169.result.10.columnWidth': '1',
  'GeneralSearch169.result.10.resultName': 'nmAitesakiKojo',
}
