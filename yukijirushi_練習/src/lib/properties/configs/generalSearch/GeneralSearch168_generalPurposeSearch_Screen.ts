// FWClib/properties/client/GeneralSearch168_generalPurposeSearch_Screen.properties

export default {
  // ##工場別受払相手先検索V用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch168.title': '工場別受払相手先検索V',

  // 検索条件部項目設定
  'GeneralSearch168.condition.1.labelValue': '経理場所',
  'GeneralSearch168.condition.1.fieldType': '3',
  'GeneralSearch168.condition.1.paramName': 'stKeiribasyo',
  'GeneralSearch168.condition.1.required': 'true',
  'GeneralSearch168.condition.1.fieldMaxLength': '2',

  // 検索結果表示部項目設定
  'GeneralSearch168.result.1.headerTitle': '取引先／工場コード',
  'GeneralSearch168.result.1.columnWidth': '100',
  'GeneralSearch168.result.1.resultName': 'cdAitesakiKojo',

  'GeneralSearch168.result.2.headerTitle': '取引先／工場名',
  'GeneralSearch168.result.2.columnWidth': '260',
  'GeneralSearch168.result.2.resultName': 'nmTorihikisakiRyaku',

  'GeneralSearch168.result.3.headerTitle': '経理場所',
  'GeneralSearch168.result.3.columnWidth': '1',
  'GeneralSearch168.result.3.resultName': 'stKeiribasyo',
}
