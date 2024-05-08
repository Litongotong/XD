// FWClib/properties/client/GeneralSearch011_generalPurposeSearch_Screen.properties

export default {
  // ##原料乳用途検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch011.title': '原料乳用途検索',

  // 検索条件部項目設定
  'GeneralSearch011.condition.1.labelValue': '用途コード',
  'GeneralSearch011.condition.1.fieldType': '1',
  'GeneralSearch011.condition.1.paramName': 'condition01',
  'GeneralSearch011.condition.1.fieldMaxLength': '6',

  'GeneralSearch011.condition.2.labelValue': '用途名称',
  'GeneralSearch011.condition.2.fieldType': '1',
  'GeneralSearch011.condition.2.paramName': 'condition02',
  'GeneralSearch011.condition.2.fieldMaxLength': '20',
  'GeneralSearch011.condition.2.imeFlg': 'true',

  'GeneralSearch011.condition.3.labelValue': '階層レベル',
  'GeneralSearch011.condition.3.fieldType': '3',
  'GeneralSearch011.condition.3.paramName': 'condition03',
  'GeneralSearch011.condition.3.required': 'true',
  'GeneralSearch011.condition.3.fieldMaxLength': '2',
  'GeneralSearch011.condition.3.combo.text.1': '大区分',
  'GeneralSearch011.condition.3.combo.id.1': '1',
  'GeneralSearch011.condition.3.combo.text.2': '中区分',
  'GeneralSearch011.condition.3.combo.id.2': '2',
  'GeneralSearch011.condition.3.combo.text.3': '小区分',
  'GeneralSearch011.condition.3.combo.id.3': '3',

  // 検索結果表示部項目設定
  'GeneralSearch011.result.1.headerTitle': '原料乳用途コード',
  'GeneralSearch011.result.1.columnWidth': '150',
  'GeneralSearch011.result.1.resultName': 'result01',

  'GeneralSearch011.result.2.headerTitle': '原料乳用途名称',
  'GeneralSearch011.result.2.columnWidth': '200',
  'GeneralSearch011.result.2.resultName': 'result02',

  'GeneralSearch011.result.3.headerTitle': '階層レベル',
  'GeneralSearch011.result.3.columnWidth': '100',
  'GeneralSearch011.result.3.resultName': 'result03',
}
