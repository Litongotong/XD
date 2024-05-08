// FWClib/properties/client/GeneralSearch089_generalPurposeSearch_Screen.properties

export default {
  // ##貯蔵品検索V用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch089.title': '貯蔵品検索V',

  // 検索条件部項目設定
  'GeneralSearch089.condition.1.labelValue': '貯蔵品コード',
  'GeneralSearch089.condition.1.fieldType': '1',
  'GeneralSearch089.condition.1.paramName': 'condition01',
  'GeneralSearch089.condition.1.fieldMaxLength': '6',

  'GeneralSearch089.condition.2.labelValue': '貯蔵品名称',
  'GeneralSearch089.condition.2.fieldType': '1',
  'GeneralSearch089.condition.2.paramName': 'condition02',
  'GeneralSearch089.condition.2.fieldMaxLength': '40',
  'GeneralSearch089.condition.2.imeFlg': 'true',

  'GeneralSearch089.condition.3.labelValue': 'ﾏｽﾀ有効日付',
  'GeneralSearch089.condition.3.fieldType': '2',
  'GeneralSearch089.condition.3.paramName': 'condition03',
  'GeneralSearch089.condition.3.fieldMaxLength': '8',

  'GeneralSearch089.condition.4.labelValue': 'ﾏｽﾀ有効日以降',
  'GeneralSearch089.condition.4.fieldType': '2',
  'GeneralSearch089.condition.4.paramName': 'condition04',
  'GeneralSearch089.condition.4.fieldMaxLength': '8',

  'GeneralSearch089.condition.5.labelValue': '貯蔵品区分',
  'GeneralSearch089.condition.5.fieldType': '3',
  'GeneralSearch089.condition.5.paramName': 'condition05',
  'GeneralSearch089.condition.5.combo.text.1': '貯蔵品',
  'GeneralSearch089.condition.5.combo.id.1': '01',
  'GeneralSearch089.condition.5.combo.text.2': '斡旋品',
  'GeneralSearch089.condition.5.combo.id.2': '02',

  // 検索結果表示部項目設定
  'GeneralSearch089.result.1.headerTitle': '貯蔵品コード',
  'GeneralSearch089.result.1.columnWidth': '100',
  'GeneralSearch089.result.1.resultName': 'result01',

  'GeneralSearch089.result.2.headerTitle': '貯蔵品略式名称',
  'GeneralSearch089.result.2.columnWidth': '200',
  'GeneralSearch089.result.2.resultName': 'result02',

  'GeneralSearch089.result.3.headerTitle': '貯蔵品区分',
  'GeneralSearch089.result.3.columnWidth': '100',
  'GeneralSearch089.result.3.resultName': 'result03',
}
