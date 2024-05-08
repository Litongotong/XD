// FWClib/properties/client/GeneralSearch158_generalPurposeSearch_Screen.properties

export default {
  // ##代表請求店検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch158.title': '代表請求店検索',

  // 検索条件部項目設定
  'GeneralSearch158.condition.1.labelValue': '代表請求店CD',
  'GeneralSearch158.condition.1.fieldType': '1',
  'GeneralSearch158.condition.1.paramName': 'condition01',
  'GeneralSearch158.condition.1.fieldMaxLength': '6',

  'GeneralSearch158.condition.2.labelValue': '代表請求店名',
  'GeneralSearch158.condition.2.fieldType': '1',
  'GeneralSearch158.condition.2.paramName': 'condition02',
  'GeneralSearch158.condition.2.fieldMaxLength': '30',
  'GeneralSearch158.condition.2.imeFlg': 'true',

  'GeneralSearch158.condition.3.labelValue': '乳市区分',
  'GeneralSearch158.condition.3.fieldType': '3',
  'GeneralSearch158.condition.3.paramName': 'condition03',
  'GeneralSearch158.condition.3.fieldMaxLength': '1',
  'GeneralSearch158.condition.3.combo.text.1': '乳食',
  'GeneralSearch158.condition.3.combo.id.1': '01',
  'GeneralSearch158.condition.3.combo.text.2': '市乳',
  'GeneralSearch158.condition.3.combo.id.2': '02',

  // 検索結果表示部項目設定
  'GeneralSearch158.result.1.headerTitle': '代表請求店コード',
  'GeneralSearch158.result.1.columnWidth': '135',
  'GeneralSearch158.result.1.resultName': 'result01',

  'GeneralSearch158.result.2.headerTitle': '代表請求店名称',
  'GeneralSearch158.result.2.columnWidth': '400',
  'GeneralSearch158.result.2.resultName': 'result02',

  'GeneralSearch158.result.3.headerTitle': '乳市',
  'GeneralSearch158.result.3.columnWidth': '60',
  'GeneralSearch158.result.3.resultName': 'result03',
}
