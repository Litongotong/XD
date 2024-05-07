// FWClib/properties/client/GeneralSearch161_generalPurposeSearch_Screen.properties

export default {
  // ##製造品目検索U用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch161.title': '製造品目検索U',

  // 検索条件部項目設定
  'GeneralSearch161.condition.1.labelValue': '品目コード',
  'GeneralSearch161.condition.1.fieldType': '1',
  'GeneralSearch161.condition.1.paramName': 'condition01',
  'GeneralSearch161.condition.1.fieldMaxLength': '6',

  'GeneralSearch161.condition.2.labelValue': '品目名称',
  'GeneralSearch161.condition.2.fieldType': '1',
  'GeneralSearch161.condition.2.paramName': 'condition02',
  'GeneralSearch161.condition.2.fieldMaxLength': '42',
  'GeneralSearch161.condition.2.imeFlg': 'true',

  'GeneralSearch161.condition.3.labelValue': '品目略式名称',
  'GeneralSearch161.condition.3.fieldType': '1',
  'GeneralSearch161.condition.3.paramName': 'condition03',
  'GeneralSearch161.condition.3.fieldMaxLength': '42',
  'GeneralSearch161.condition.3.imeFlg': 'true',

  'GeneralSearch161.condition.4.labelValue': '受注製品ｺｰﾄﾞ',
  'GeneralSearch161.condition.4.fieldType': '1',
  'GeneralSearch161.condition.4.paramName': 'condition04',
  'GeneralSearch161.condition.4.fieldMaxLength': '5',

  'GeneralSearch161.condition.5.labelValue': '品目区分',
  'GeneralSearch161.condition.5.fieldType': '3',
  'GeneralSearch161.condition.5.paramName': 'condition05',
  'GeneralSearch161.condition.5.required': 'true',
  'GeneralSearch161.condition.5.fieldMaxLength': '40',
  'GeneralSearch161.condition.5.combo.text.1': '製品',
  'GeneralSearch161.condition.5.combo.id.1': '01',
  'GeneralSearch161.condition.5.combo.text.2': '原材料',
  'GeneralSearch161.condition.5.combo.id.2': '02',

  'GeneralSearch161.condition.6.labelValue': 'ﾏｽﾀ有効日付',
  'GeneralSearch161.condition.6.fieldType': '2',
  'GeneralSearch161.condition.6.paramName': 'condition06',
  'GeneralSearch161.condition.6.required': 'true',
  'GeneralSearch161.condition.6.fieldMaxLength': '8',

  // 検索結果表示部項目設定
  'GeneralSearch161.result.1.headerTitle': '品目コード',
  'GeneralSearch161.result.1.columnWidth': '100',
  'GeneralSearch161.result.1.resultName': 'result01',

  'GeneralSearch161.result.2.headerTitle': '品目名称',
  'GeneralSearch161.result.2.columnWidth': '300',
  'GeneralSearch161.result.2.resultName': 'result02',

  'GeneralSearch161.result.3.headerTitle': '品目略式名称',
  'GeneralSearch161.result.3.columnWidth': '250',
  'GeneralSearch161.result.3.resultName': 'result03',

  'GeneralSearch161.result.4.headerTitle': '受注製品ｺｰﾄﾞ',
  'GeneralSearch161.result.4.columnWidth': '120',
  'GeneralSearch161.result.4.resultName': 'result04',

  'GeneralSearch161.result.5.headerTitle': '容量',
  'GeneralSearch161.result.5.columnWidth': '120',
  'GeneralSearch161.result.5.resultName': 'result05',

  'GeneralSearch161.result.6.headerTitle': '入数',
  'GeneralSearch161.result.6.columnWidth': '120',
  'GeneralSearch161.result.6.resultName': 'result06',

  'GeneralSearch161.result.7.headerTitle': 'バラ換算入数',
  'GeneralSearch161.result.7.columnWidth': '120',
  'GeneralSearch161.result.7.resultName': 'result07',
}
