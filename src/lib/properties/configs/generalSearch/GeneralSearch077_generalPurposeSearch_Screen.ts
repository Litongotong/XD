// FWClib/properties/client/GeneralSearch077_generalPurposeSearch_Screen.properties

export default {
  // ##ラベル出力先検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch077.title': 'ラベル出力先検索',

  // 検索条件部項目設定
  'GeneralSearch077.condition.1.labelValue': '工場ｺｰﾄﾞ',
  'GeneralSearch077.condition.1.fieldType': '1',
  'GeneralSearch077.condition.1.paramName': 'cdKojo',
  'GeneralSearch077.condition.1.fieldMaxLength': '6',

  'GeneralSearch077.condition.2.labelValue': '工場名称',
  'GeneralSearch077.condition.2.fieldType': '1',
  'GeneralSearch077.condition.2.paramName': 'nmKojoZaikoBasho',
  'GeneralSearch077.condition.2.fieldMaxLength': '32',

  'GeneralSearch077.condition.3.labelValue': 'プリンタＩＤ',
  'GeneralSearch077.condition.3.fieldType': '1',
  'GeneralSearch077.condition.3.paramName': 'cdPrinterId',
  'GeneralSearch077.condition.3.fieldMaxLength': '6',

  'GeneralSearch077.condition.4.labelValue': 'プリンタ名称',
  'GeneralSearch077.condition.4.fieldType': '1',
  'GeneralSearch077.condition.4.paramName': 'nmRonri',
  'GeneralSearch077.condition.4.fieldMaxLength': '32',

  'GeneralSearch077.condition.5.labelValue': 'ラベル区分',
  'GeneralSearch077.condition.5.fieldType': '3',
  'GeneralSearch077.condition.5.paramName': 'stLabel',
  'GeneralSearch077.condition.5.fieldMaxLength': '3',
  'GeneralSearch077.condition.5.combo.text.1': '原材料ラベル',
  'GeneralSearch077.condition.5.combo.id.1': '01',
  'GeneralSearch077.condition.5.combo.text.2': '製品ラベル',
  'GeneralSearch077.condition.5.combo.id.2': '02',
  'GeneralSearch077.condition.5.combo.text.3': '小分ラベル',
  'GeneralSearch077.condition.5.combo.id.3': '03',

  // 検索結果表示部項目設定
  'GeneralSearch077.result.1.headerTitle': 'プリンタＩＤ',
  'GeneralSearch077.result.1.columnWidth': '100',
  'GeneralSearch077.result.1.resultName': 'cdPrinterId',

  'GeneralSearch077.result.2.headerTitle': 'プリンタ名称',
  'GeneralSearch077.result.2.columnWidth': '200',
  'GeneralSearch077.result.2.resultName': 'nmRonri',

  'GeneralSearch077.result.3.headerTitle': 'ＩＰアドレス',
  'GeneralSearch077.result.3.columnWidth': '100',
  'GeneralSearch077.result.3.resultName': 'ifIp',

  'GeneralSearch077.result.4.headerTitle': 'ポート番号',
  'GeneralSearch077.result.4.columnWidth': '100',
  'GeneralSearch077.result.4.resultName': 'noPort',

  'GeneralSearch077.result.5.headerTitle': '工場コード',
  'GeneralSearch077.result.5.columnWidth': '100',
  'GeneralSearch077.result.5.resultName': 'cdKojoZaikoBasho',

  'GeneralSearch077.result.6.headerTitle': '工場名称',
  'GeneralSearch077.result.6.columnWidth': '200',
  'GeneralSearch077.result.6.resultName': 'nmKojoZaikoBashoRyaku',
}
