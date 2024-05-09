// FWClib/properties/client/GeneralSearch081_generalPurposeSearch_Screen.properties

export default {
  // ##取引先検索X用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch081.title': '取引先検索IV',

  // 検索条件部項目設定
  'GeneralSearch081.condition.1.labelValue': '取引先コード',
  'GeneralSearch081.condition.1.fieldType': '1',
  'GeneralSearch081.condition.1.paramName': 'cdTorihikisaki',
  'GeneralSearch081.condition.1.fieldMaxLength': '6',

  'GeneralSearch081.condition.2.labelValue': '取引先名称',
  'GeneralSearch081.condition.2.fieldType': '1',
  'GeneralSearch081.condition.2.paramName': 'nmTorihikisaki',
  'GeneralSearch081.condition.2.fieldMaxLength': '42',
  'GeneralSearch081.condition.2.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch081.result.1.headerTitle': '取引先コード',
  'GeneralSearch081.result.1.columnWidth': '150',
  'GeneralSearch081.result.1.resultName': 'cdTorihikisaki',

  'GeneralSearch081.result.2.headerTitle': '取引先名称',
  'GeneralSearch081.result.2.columnWidth': '400',
  'GeneralSearch081.result.2.resultName': 'nmTorihikisaki',
}
