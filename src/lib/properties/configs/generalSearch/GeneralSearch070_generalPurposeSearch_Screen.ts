// FWClib/properties/client/GeneralSearch070_generalPurposeSearch_Screen.properties

export default {
  // ##仕掛品検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch070.title': '仕掛品検索',

  // 検索条件部項目設定
  'GeneralSearch070.condition.1.labelValue': '工場ｺｰﾄﾞ',
  'GeneralSearch070.condition.1.fieldType': '1',
  'GeneralSearch070.condition.1.paramName': 'cdKojoZaikoBasho',
  'GeneralSearch070.condition.1.fieldMaxLength': '6',

  'GeneralSearch070.condition.2.labelValue': '工場名称',
  'GeneralSearch070.condition.2.fieldType': '1',
  'GeneralSearch070.condition.2.paramName': 'nmKojoZaikoBasho',
  'GeneralSearch070.condition.2.fieldMaxLength': '20',
  'GeneralSearch070.condition.2.imeFlg': 'true',

  'GeneralSearch070.condition.3.labelValue': '製造ﾛｯﾄ',
  'GeneralSearch070.condition.3.fieldType': '1',
  'GeneralSearch070.condition.3.paramName': 'ifSeizoLot',
  'GeneralSearch070.condition.3.fieldMaxLength': '30',

  // 検索結果表示部項目設定
  'GeneralSearch070.result.1.headerTitle': '製造日',
  'GeneralSearch070.result.1.columnWidth': '100',
  'GeneralSearch070.result.1.resultName': 'dtJissekiKeijo',

  'GeneralSearch070.result.2.headerTitle': '工場コード',
  'GeneralSearch070.result.2.columnWidth': '80',
  'GeneralSearch070.result.2.resultName': 'cdKojoZaikoBasho',

  'GeneralSearch070.result.3.headerTitle': '工場名称',
  'GeneralSearch070.result.3.columnWidth': '200',
  'GeneralSearch070.result.3.resultName': 'nmKojoZaikoBasho',

  'GeneralSearch070.result.4.headerTitle': '製品コード',
  'GeneralSearch070.result.4.columnWidth': '80',
  'GeneralSearch070.result.4.resultName': 'cdTaishoSeihin',

  'GeneralSearch070.result.5.headerTitle': '製品略称',
  'GeneralSearch070.result.5.columnWidth': '200',
  'GeneralSearch070.result.5.resultName': 'nmTaishoSeihin',

  'GeneralSearch070.result.6.headerTitle': '製造ロット',
  'GeneralSearch070.result.6.columnWidth': '180',
  'GeneralSearch070.result.6.resultName': 'ifSeizoLot',

  'GeneralSearch070.result.7.headerTitle': '仕掛品コード',
  'GeneralSearch070.result.7.columnWidth': '100',
  'GeneralSearch070.result.7.resultName': 'cdHinmoku',

  'GeneralSearch070.result.8.headerTitle': '仕掛品略称',
  'GeneralSearch070.result.8.columnWidth': '120',
  'GeneralSearch070.result.8.resultName': 'nmHinmokuRyakushiki',

  'GeneralSearch070.result.9.headerTitle': '管理工程コード',
  'GeneralSearch070.result.9.columnWidth': '110',
  'GeneralSearch070.result.9.resultName': 'cdKanrikotei',

  'GeneralSearch070.result.10.headerTitle': '管理工程名称',
  'GeneralSearch070.result.10.columnWidth': '200',
  'GeneralSearch070.result.10.resultName': 'nmKanrikotei',

  'GeneralSearch070.result.11.headerTitle': '仕掛品残量',
  'GeneralSearch070.result.11.columnWidth': '100',
  'GeneralSearch070.result.11.resultName': 'qtUkeharai',

  'GeneralSearch070.result.12.headerTitle': '受払設備',
  'GeneralSearch070.result.12.columnWidth': '100',
  'GeneralSearch070.result.12.resultName': 'cdUkeharaiSetsubi',

  'GeneralSearch070.result.13.headerTitle': '受払設備名称',
  'GeneralSearch070.result.13.columnWidth': '200',
  'GeneralSearch070.result.13.resultName': 'nmUkeharaiSetsubi',
}
