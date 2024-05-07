// FWClib/properties/client/GeneralSearch080_generalPurposeSearch_Screen.properties

export default {
  // ##受託製品検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch080.title': '受託製品検索',

  // 検索条件部項目設定
  'GeneralSearch080.condition.1.labelValue': '製品コード',
  'GeneralSearch080.condition.1.fieldType': '1',
  'GeneralSearch080.condition.1.paramName': 'cdSeihin',
  'GeneralSearch080.condition.1.fieldMaxLength': '6',

  'GeneralSearch080.condition.2.labelValue': '製品名称',
  'GeneralSearch080.condition.2.fieldType': '1',
  'GeneralSearch080.condition.2.paramName': 'nmSeihin',
  'GeneralSearch080.condition.2.fieldMaxLength': '42',
  'GeneralSearch080.condition.2.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch080.result.1.headerTitle': '製品コード',
  'GeneralSearch080.result.1.columnWidth': '100',
  'GeneralSearch080.result.1.resultName': 'cdSeihin',

  'GeneralSearch080.result.2.headerTitle': '製品名称',
  'GeneralSearch080.result.2.columnWidth': '310',
  'GeneralSearch080.result.2.resultName': 'nmSeihin',

  'GeneralSearch080.result.3.headerTitle': '受託製品コード',
  'GeneralSearch080.result.3.columnWidth': '110',
  'GeneralSearch080.result.3.resultName': 'cdJutakuSeihin',

  'GeneralSearch080.result.4.headerTitle': '受託製品名称',
  'GeneralSearch080.result.4.columnWidth': '310',
  'GeneralSearch080.result.4.resultName': 'nmJutakuSeihin',

  'GeneralSearch080.result.5.headerTitle': '数量単位1',
  'GeneralSearch080.result.5.columnWidth': '80',
  'GeneralSearch080.result.5.resultName': 'ifTani1',

  'GeneralSearch080.result.6.headerTitle': '数量単位2',
  'GeneralSearch080.result.6.columnWidth': '80',
  'GeneralSearch080.result.6.resultName': 'ifTani2',

  'GeneralSearch080.result.7.headerTitle': '不定貫管理区分',
  'GeneralSearch080.result.7.columnWidth': '80',
  'GeneralSearch080.result.7.resultName': 'ifFuteikanKanri',
}
