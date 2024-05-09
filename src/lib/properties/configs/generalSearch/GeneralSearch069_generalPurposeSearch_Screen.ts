// FWClib/properties/client/GeneralSearch069_generalPurposeSearch_Screen.properties

export default {
  // ##仕掛品口座替検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch069.title': '仕掛品口座替検索',

  // 検索条件部項目設定
  'GeneralSearch069.condition.1.labelValue': '伝票番号',
  'GeneralSearch069.condition.1.fieldType': '1',
  'GeneralSearch069.condition.1.paramName': 'condition01',
  'GeneralSearch069.condition.1.fieldMaxLength': '12',

  'GeneralSearch069.condition.2.labelValue': '年',
  'GeneralSearch069.condition.2.fieldType': '1',
  'GeneralSearch069.condition.2.paramName': 'condition02',
  'GeneralSearch069.condition.2.fieldMaxLength': '4',

  'GeneralSearch069.condition.3.labelValue': '月',
  'GeneralSearch069.condition.3.fieldType': '3',
  'GeneralSearch069.condition.3.paramName': 'condition03',
  'GeneralSearch069.condition.3.fieldMaxLength': '2',
  'GeneralSearch069.condition.3.combo.text.1': '1',
  'GeneralSearch069.condition.3.combo.id.1': '01',
  'GeneralSearch069.condition.3.combo.text.2': '2',
  'GeneralSearch069.condition.3.combo.id.2': '02',
  'GeneralSearch069.condition.3.combo.text.3': '3',
  'GeneralSearch069.condition.3.combo.id.3': '03',
  'GeneralSearch069.condition.3.combo.text.4': '4',
  'GeneralSearch069.condition.3.combo.id.4': '04',
  'GeneralSearch069.condition.3.combo.text.5': '5',
  'GeneralSearch069.condition.3.combo.id.5': '05',
  'GeneralSearch069.condition.3.combo.text.6': '6',
  'GeneralSearch069.condition.3.combo.id.6': '06',
  'GeneralSearch069.condition.3.combo.text.7': '7',
  'GeneralSearch069.condition.3.combo.id.7': '07',
  'GeneralSearch069.condition.3.combo.text.8': '8',
  'GeneralSearch069.condition.3.combo.id.8': '08',
  'GeneralSearch069.condition.3.combo.text.9': '9',
  'GeneralSearch069.condition.3.combo.id.9': '09',
  'GeneralSearch069.condition.3.combo.text.10': '10',
  'GeneralSearch069.condition.3.combo.id.10': '10',
  'GeneralSearch069.condition.3.combo.text.11': '11',
  'GeneralSearch069.condition.3.combo.id.11': '11',
  'GeneralSearch069.condition.3.combo.text.12': '12',
  'GeneralSearch069.condition.3.combo.id.12': '12',

  'GeneralSearch069.condition.4.labelValue': '工場ｺｰﾄﾞ',
  'GeneralSearch069.condition.4.fieldType': '1',
  'GeneralSearch069.condition.4.paramName': 'condition04',
  'GeneralSearch069.condition.4.fieldMaxLength': '6',

  'GeneralSearch069.condition.5.labelValue': '工場名称',
  'GeneralSearch069.condition.5.fieldType': '1',
  'GeneralSearch069.condition.5.paramName': 'condition05',
  'GeneralSearch069.condition.5.fieldMaxLength': '20',
  'GeneralSearch069.condition.5.imeFlg': 'true',

  'GeneralSearch069.condition.6.labelValue': '製品ｺｰﾄﾞ',
  'GeneralSearch069.condition.6.fieldType': '1',
  'GeneralSearch069.condition.6.paramName': 'condition06',
  'GeneralSearch069.condition.6.fieldMaxLength': '6',

  'GeneralSearch069.condition.7.labelValue': '製品略称',
  'GeneralSearch069.condition.7.fieldType': '1',
  'GeneralSearch069.condition.7.paramName': 'condition07',
  'GeneralSearch069.condition.7.fieldMaxLength': '20',
  'GeneralSearch069.condition.7.imeFlg': 'true',

  'GeneralSearch069.condition.8.labelValue': '管理工程ｺｰﾄﾞ',
  'GeneralSearch069.condition.8.fieldType': '1',
  'GeneralSearch069.condition.8.paramName': 'condition08',
  'GeneralSearch069.condition.8.fieldMaxLength': '6',

  'GeneralSearch069.condition.9.labelValue': '管理工程名称',
  'GeneralSearch069.condition.9.fieldType': '1',
  'GeneralSearch069.condition.9.paramName': 'condition09',
  'GeneralSearch069.condition.9.fieldMaxLength': '20',
  'GeneralSearch069.condition.9.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch069.result.1.headerTitle': '伝票番号',
  'GeneralSearch069.result.1.columnWidth': '100',
  'GeneralSearch069.result.1.resultName': 'noDenpyo',

  'GeneralSearch069.result.2.headerTitle': '伝票日付',
  'GeneralSearch069.result.2.columnWidth': '80',
  'GeneralSearch069.result.2.resultName': 'dtDenpyo',

  'GeneralSearch069.result.3.headerTitle': '年月',
  'GeneralSearch069.result.3.columnWidth': '80',
  'GeneralSearch069.result.3.resultName': 'dtNengetsu',

  'GeneralSearch069.result.4.headerTitle': '工場ｺｰﾄﾞ',
  'GeneralSearch069.result.4.columnWidth': '80',
  'GeneralSearch069.result.4.resultName': 'cdHaraiKojo',

  'GeneralSearch069.result.5.headerTitle': '工場名称',
  'GeneralSearch069.result.5.columnWidth': '200',
  'GeneralSearch069.result.5.resultName': 'nmKojoZaikoBasho',

  'GeneralSearch069.result.6.headerTitle': '払出職場ｺｰﾄﾞ',
  'GeneralSearch069.result.6.columnWidth': '120',
  'GeneralSearch069.result.6.resultName': 'cdHaraiSonekikanri',

  'GeneralSearch069.result.7.headerTitle': '払出職場略称',
  'GeneralSearch069.result.7.columnWidth': '200',
  'GeneralSearch069.result.7.resultName': 'nmSonekiSoshikiRyaku',

  'GeneralSearch069.result.8.headerTitle': '払出製品ｺｰﾄﾞ',
  'GeneralSearch069.result.8.columnWidth': '120',
  'GeneralSearch069.result.8.resultName': 'cdHaraiSeihin',

  'GeneralSearch069.result.9.headerTitle': '払出製品略称',
  'GeneralSearch069.result.9.columnWidth': '200',
  'GeneralSearch069.result.9.resultName': 'nmSeihinRyakushiki',

  'GeneralSearch069.result.10.headerTitle': '払出管理工程ｺｰﾄﾞ',
  'GeneralSearch069.result.10.columnWidth': '150',
  'GeneralSearch069.result.10.resultName': 'cdKanrikotei',

  'GeneralSearch069.result.11.headerTitle': '払出管理工程名称',
  'GeneralSearch069.result.11.columnWidth': '200',
  'GeneralSearch069.result.11.resultName': 'nmKanrikotei',

  'GeneralSearch069.result.12.headerTitle': '製造ﾛｯﾄ',
  'GeneralSearch069.result.12.columnWidth': '200',
  'GeneralSearch069.result.12.resultName': 'ifSeizoLot',

  'GeneralSearch069.result.13.headerTitle': '受入職場ｺｰﾄﾞ',
  'GeneralSearch069.result.13.columnWidth': '120',
  'GeneralSearch069.result.13.resultName': 'cdUkeSonekikanri',

  'GeneralSearch069.result.14.headerTitle': '受入職場略称',
  'GeneralSearch069.result.14.columnWidth': '200',
  'GeneralSearch069.result.14.resultName': 'nmUkeSonekiSoshikiRyaku',

  'GeneralSearch069.result.15.headerTitle': '受入製品ｺｰﾄﾞ',
  'GeneralSearch069.result.15.columnWidth': '120',
  'GeneralSearch069.result.15.resultName': 'cdUkeSeihinRyaku',

  'GeneralSearch069.result.16.headerTitle': '受入製品略称',
  'GeneralSearch069.result.16.columnWidth': '200',
  'GeneralSearch069.result.16.resultName': 'nmUkeSeihinRyaku',

  'GeneralSearch069.result.17.headerTitle': '受入管理工程ｺｰﾄﾞ',
  'GeneralSearch069.result.17.columnWidth': '150',
  'GeneralSearch069.result.17.resultName': 'cdUkeKanrikotei',

  'GeneralSearch069.result.18.headerTitle': '払出管理工程ｺｰﾄﾞ',
  'GeneralSearch069.result.18.columnWidth': '200',
  'GeneralSearch069.result.18.resultName': 'nmUkeKanrikotei',

  'GeneralSearch069.result.19.headerTitle': '数量',
  'GeneralSearch069.result.19.columnWidth': '100',
  'GeneralSearch069.result.19.resultName': 'qtSuryo',

  'GeneralSearch069.result.20.headerTitle': 'FAT量',
  'GeneralSearch069.result.20.columnWidth': '100',
  'GeneralSearch069.result.20.resultName': 'qtFat',

  'GeneralSearch069.result.21.headerTitle': 'SNF量',
  'GeneralSearch069.result.21.columnWidth': '100',
  'GeneralSearch069.result.21.resultName': 'qtSnf',
}
