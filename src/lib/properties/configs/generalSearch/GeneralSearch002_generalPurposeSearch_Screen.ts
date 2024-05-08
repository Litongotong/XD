// FWClib/properties/client/GeneralSearch002_generalPurposeSearch_Screen.properties

export default {
  // ##JAN検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch002.title': 'JAN検索',

  // 検索条件部項目設定
  'GeneralSearch002.condition.1.labelValue': 'JANコード',
  'GeneralSearch002.condition.1.fieldType': '1',
  'GeneralSearch002.condition.1.paramName': 'condition01',
  'GeneralSearch002.condition.1.fieldMaxLength': '13',

  'GeneralSearch002.condition.2.labelValue': 'JAN製品ｶﾅ名',
  'GeneralSearch002.condition.2.fieldType': '1',
  'GeneralSearch002.condition.2.paramName': 'condition02',
  'GeneralSearch002.condition.2.fieldMaxLength': '20',
  'GeneralSearch002.condition.2.imeFlg': 'true',

  'GeneralSearch002.condition.3.labelValue': 'ユーザID',
  'GeneralSearch002.condition.3.fieldType': '1',
  'GeneralSearch002.condition.3.paramName': 'condition03',
  'GeneralSearch002.condition.3.fieldMaxLength': '8',

  'GeneralSearch002.condition.4.labelValue': 'ユーザ名',
  'GeneralSearch002.condition.4.fieldType': '1',
  'GeneralSearch002.condition.4.paramName': 'condition04',
  'GeneralSearch002.condition.4.fieldMaxLength': '40',
  'GeneralSearch002.condition.4.imeFlg': 'true',

  'GeneralSearch002.condition.5.labelValue': '業務区分',
  'GeneralSearch002.condition.5.fieldType': '3',
  'GeneralSearch002.condition.5.paramName': 'condition05',
  'GeneralSearch002.condition.5.fieldMaxLength': '2',
  'GeneralSearch002.condition.5.combo.text.1': '乳食家庭用',
  'GeneralSearch002.condition.5.combo.id.1': '01',
  'GeneralSearch002.condition.5.combo.text.2': '乳食業務用',
  'GeneralSearch002.condition.5.combo.id.2': '02',
  'GeneralSearch002.condition.5.combo.text.3': '市乳用',
  'GeneralSearch002.condition.5.combo.id.3': '03',

  'GeneralSearch002.condition.6.labelValue': '使用済判定',
  'GeneralSearch002.condition.6.fieldType': '3',
  'GeneralSearch002.condition.6.paramName': 'condition06',
  'GeneralSearch002.condition.6.fieldMaxLength': '1',
  'GeneralSearch002.condition.6.combo.text.1': '未使用',
  'GeneralSearch002.condition.6.combo.id.1': '0',
  'GeneralSearch002.condition.6.combo.text.2': '使用済',
  'GeneralSearch002.condition.6.combo.id.2': '1',

  // 検索結果表示部項目設定
  'GeneralSearch002.result.1.headerTitle': 'JANコード',
  'GeneralSearch002.result.1.columnWidth': '100',
  'GeneralSearch002.result.1.resultName': 'result01',

  'GeneralSearch002.result.2.headerTitle': 'JAN製品ｶﾅ名',
  'GeneralSearch002.result.2.columnWidth': '200',
  'GeneralSearch002.result.2.resultName': 'result02',

  'GeneralSearch002.result.3.headerTitle': 'ユーザID',
  'GeneralSearch002.result.3.columnWidth': '100',
  'GeneralSearch002.result.3.resultName': 'result03',

  'GeneralSearch002.result.4.headerTitle': 'ユーザ名',
  'GeneralSearch002.result.4.columnWidth': '200',
  'GeneralSearch002.result.4.resultName': 'result04',

  'GeneralSearch002.result.5.headerTitle': '業務区分',
  'GeneralSearch002.result.5.columnWidth': '100',
  'GeneralSearch002.result.5.resultName': 'result05',

  'GeneralSearch002.result.6.headerTitle': '使用済判定',
  'GeneralSearch002.result.6.columnWidth': '100',
  'GeneralSearch002.result.6.resultName': 'result06',
}
