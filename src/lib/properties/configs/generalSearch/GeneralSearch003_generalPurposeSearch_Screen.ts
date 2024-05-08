// FWClib/properties/client/GeneralSearch003_generalPurposeSearch_Screen.properties

export default {
  // ##ヴァーチャル口座番号検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch003.title': 'ヴァーチャル口座番号検索',

  // 検索条件部項目設定
  'GeneralSearch003.condition.1.labelValue': '金融機関ｺｰﾄﾞ',
  'GeneralSearch003.condition.1.fieldType': '1',
  'GeneralSearch003.condition.1.paramName': 'condition01',
  'GeneralSearch003.condition.1.fieldMaxLength': '4',

  'GeneralSearch003.condition.2.labelValue': '金融機関略名',
  'GeneralSearch003.condition.2.fieldType': '1',
  'GeneralSearch003.condition.2.paramName': 'condition02',
  'GeneralSearch003.condition.2.fieldMaxLength': '20',
  'GeneralSearch003.condition.2.imeFlg': 'true',

  'GeneralSearch003.condition.3.labelValue': '支店ｺｰﾄﾞ',
  'GeneralSearch003.condition.3.fieldType': '1',
  'GeneralSearch003.condition.3.paramName': 'condition03',
  'GeneralSearch003.condition.3.fieldMaxLength': '4',

  'GeneralSearch003.condition.4.labelValue': '支店略名',
  'GeneralSearch003.condition.4.fieldType': '1',
  'GeneralSearch003.condition.4.paramName': 'condition04',
  'GeneralSearch003.condition.4.fieldMaxLength': '20',
  'GeneralSearch003.condition.4.imeFlg': 'true',

  'GeneralSearch003.condition.5.labelValue': 'Ｖ-口座番号',
  'GeneralSearch003.condition.5.fieldType': '1',
  'GeneralSearch003.condition.5.paramName': 'condition05',
  'GeneralSearch003.condition.5.fieldMaxLength': '10',

  'GeneralSearch003.condition.6.labelValue': '口座名義人名',
  'GeneralSearch003.condition.6.fieldType': '1',
  'GeneralSearch003.condition.6.paramName': 'condition06',
  'GeneralSearch003.condition.6.fieldMaxLength': '40',
  'GeneralSearch003.condition.6.imeFlg': 'true',

  'GeneralSearch003.condition.7.labelValue': '口座種別区分',
  'GeneralSearch003.condition.7.fieldType': '3',
  'GeneralSearch003.condition.7.paramName': 'condition07',
  'GeneralSearch003.condition.7.fieldMaxLength': '20',
  'GeneralSearch003.condition.7.combo.text.1': '',
  'GeneralSearch003.condition.7.combo.id.1': '',
  'GeneralSearch003.condition.7.combo.text.2': '普通',
  'GeneralSearch003.condition.7.combo.id.2': '01',
  'GeneralSearch003.condition.7.combo.text.3': '当座',
  'GeneralSearch003.condition.7.combo.id.3': '02',
  'GeneralSearch003.condition.7.combo.text.4': '決済用',
  'GeneralSearch003.condition.7.combo.id.4': '03',

  // 検索結果表示部項目設定
  'GeneralSearch003.result.1.headerTitle': '金融機関ｺｰﾄﾞ',
  'GeneralSearch003.result.1.columnWidth': '90',
  'GeneralSearch003.result.1.resultName': 'result01',

  'GeneralSearch003.result.2.headerTitle': '金融機関略名',
  'GeneralSearch003.result.2.columnWidth': '140',
  'GeneralSearch003.result.2.resultName': 'result02',

  'GeneralSearch003.result.3.headerTitle': '支店ｺｰﾄﾞ',
  'GeneralSearch003.result.3.columnWidth': '80',
  'GeneralSearch003.result.3.resultName': 'result03',

  'GeneralSearch003.result.4.headerTitle': '支店略名',
  'GeneralSearch003.result.4.columnWidth': '140',
  'GeneralSearch003.result.4.resultName': 'result04',

  'GeneralSearch003.result.5.headerTitle': 'ｳﾞｧｰﾁｬﾙ口座番号',
  'GeneralSearch003.result.5.columnWidth': '120',
  'GeneralSearch003.result.5.resultName': 'result05',

  'GeneralSearch003.result.6.headerTitle': '代表請求店ｺｰﾄﾞ',
  'GeneralSearch003.result.6.columnWidth': '110',
  'GeneralSearch003.result.6.resultName': 'result06',

  'GeneralSearch003.result.7.headerTitle': '代表請求店略名',
  'GeneralSearch003.result.7.columnWidth': '200',
  'GeneralSearch003.result.7.resultName': 'result07',

  'GeneralSearch003.result.8.headerTitle': '口座名義人',
  'GeneralSearch003.result.8.columnWidth': '200',
  'GeneralSearch003.result.8.resultName': 'result08',

  'GeneralSearch003.result.9.headerTitle': '口座種別区分',
  'GeneralSearch003.result.9.columnWidth': '100',
  'GeneralSearch003.result.9.resultName': 'result09',

  'GeneralSearch003.result.10.headerTitle': '金融機関名称',
  'GeneralSearch003.result.10.columnWidth': '140',
  'GeneralSearch003.result.10.resultName': 'result10',
}
