// FWClib/properties/client/GeneralSearch127_generalPurposeSearch_Screen.properties

export default {
  // ##個別店検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch127.title': '個別店検索',

  // 検索条件部項目設定
  'GeneralSearch127.condition.1.labelValue': '個別店ｺｰﾄﾞ',
  'GeneralSearch127.condition.1.fieldType': '1',
  'GeneralSearch127.condition.1.paramName': 'condition01',
  'GeneralSearch127.condition.1.fieldMaxLength': '6',

  'GeneralSearch127.condition.2.labelValue': '個別店略称',
  'GeneralSearch127.condition.2.fieldType': '1',
  'GeneralSearch127.condition.2.paramName': 'condition02',
  'GeneralSearch127.condition.2.fieldMaxLength': '40',
  'GeneralSearch127.condition.2.imeFlg': 'true',

  'GeneralSearch127.condition.3.labelValue': '正式名(ｶﾅ)',
  'GeneralSearch127.condition.3.fieldType': '1',
  'GeneralSearch127.condition.3.paramName': 'condition03',
  'GeneralSearch127.condition.3.fieldMaxLength': '80',
  'GeneralSearch127.condition.3.imeFlg': 'true',

  'GeneralSearch127.condition.4.labelValue': 'AS支店口座CD',
  'GeneralSearch127.condition.4.fieldType': '1',
  'GeneralSearch127.condition.4.paramName': 'condition04',
  'GeneralSearch127.condition.4.fieldMaxLength': '5',

  'GeneralSearch127.condition.5.labelValue': 'AS店舗ｺｰﾄﾞ',
  'GeneralSearch127.condition.5.fieldType': '1',
  'GeneralSearch127.condition.5.paramName': 'condition05',
  'GeneralSearch127.condition.5.fieldMaxLength': '4',

  'GeneralSearch127.condition.6.labelValue': '閉店判定ﾌﾗｸﾞ',
  'GeneralSearch127.condition.6.fieldType': '3',
  'GeneralSearch127.condition.6.paramName': 'condition06',
  'GeneralSearch127.condition.6.fieldMaxLength': '1',
  'GeneralSearch127.condition.6.combo.text.1': '',
  'GeneralSearch127.condition.6.combo.id.1': '',
  'GeneralSearch127.condition.6.combo.text.2': '現役店',
  'GeneralSearch127.condition.6.combo.id.2': '0',
  'GeneralSearch127.condition.6.combo.text.3': '閉店',
  'GeneralSearch127.condition.6.combo.id.3': '1',

  'GeneralSearch127.condition.7.labelValue': 'ﾏｽﾀ有効日付',
  'GeneralSearch127.condition.7.fieldType': '2',
  'GeneralSearch127.condition.7.paramName': 'condition07',
  'GeneralSearch127.condition.7.fieldMaxLength': '8',

  'GeneralSearch127.condition.8.labelValue': 'ﾏｽﾀ有効日以降',
  'GeneralSearch127.condition.8.fieldType': '2',
  'GeneralSearch127.condition.8.paramName': 'condition08',
  'GeneralSearch127.condition.8.fieldMaxLength': '8',

  // 検索結果表示部項目設定
  'GeneralSearch127.result.1.headerTitle': '個別店ｺｰﾄﾞ',
  'GeneralSearch127.result.1.columnWidth': '80',
  'GeneralSearch127.result.1.resultName': 'result01',

  'GeneralSearch127.result.2.headerTitle': '個別店略称',
  'GeneralSearch127.result.2.columnWidth': '200',
  'GeneralSearch127.result.2.resultName': 'result02',

  'GeneralSearch127.result.3.headerTitle': '個別店正式名称(ｶﾅ)',
  'GeneralSearch127.result.3.columnWidth': '300',
  'GeneralSearch127.result.3.resultName': 'result03',
}
