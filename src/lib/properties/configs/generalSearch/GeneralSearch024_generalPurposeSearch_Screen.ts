// FWClib/properties/client/GeneralSearch024_generalPurposeSearch_Screen.properties

export default {
  // ##業種検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch024.title': '業種検索',

  // 検索条件部項目設定
  'GeneralSearch024.condition.1.labelValue': '業種コード',
  'GeneralSearch024.condition.1.fieldType': '1',
  'GeneralSearch024.condition.1.paramName': 'condition01',
  'GeneralSearch024.condition.1.fieldMaxLength': '6',

  'GeneralSearch024.condition.2.labelValue': '業種名称',
  'GeneralSearch024.condition.2.fieldType': '1',
  'GeneralSearch024.condition.2.paramName': 'condition02',
  'GeneralSearch024.condition.2.fieldMaxLength': '20',
  'GeneralSearch024.condition.2.imeFlg': 'true',

  'GeneralSearch024.condition.3.labelValue': '階層レベル',
  'GeneralSearch024.condition.3.fieldType': '3',
  'GeneralSearch024.condition.3.paramName': 'condition03',
  'GeneralSearch024.condition.3.fieldMaxLength': '2',
  'GeneralSearch024.condition.3.combo.text.1': '業種',
  'GeneralSearch024.condition.3.combo.id.1': '1',
  'GeneralSearch024.condition.3.combo.text.2': '業態区分（大）',
  'GeneralSearch024.condition.3.combo.id.2': '2',
  'GeneralSearch024.condition.3.combo.text.3': '業態区分（小）',
  'GeneralSearch024.condition.3.combo.id.3': '3',

  // 検索結果表示部項目設定
  'GeneralSearch024.result.1.headerTitle': '業種コード',
  'GeneralSearch024.result.1.columnWidth': '100',
  'GeneralSearch024.result.1.resultName': 'result01',

  'GeneralSearch024.result.2.headerTitle': '業種名称',
  'GeneralSearch024.result.2.columnWidth': '200',
  'GeneralSearch024.result.2.resultName': 'result02',

  'GeneralSearch024.result.3.headerTitle': '上位業種名称',
  'GeneralSearch024.result.3.columnWidth': '200',
  'GeneralSearch024.result.3.resultName': 'result03',

  'GeneralSearch024.result.4.headerTitle': '階層レベル',
  'GeneralSearch024.result.4.columnWidth': '100',
  'GeneralSearch024.result.4.resultName': 'result04',
}
