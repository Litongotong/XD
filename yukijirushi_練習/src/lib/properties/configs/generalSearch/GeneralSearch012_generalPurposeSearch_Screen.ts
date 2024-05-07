// FWClib/properties/client/GeneralSearch012_generalPurposeSearch_Screen.properties

export default {
  // ##工場・在庫場所検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch012.title': '工場・在庫場所検索',

  // 検索条件部項目設定
  'GeneralSearch012.condition.1.labelValue': '工場ｺｰﾄﾞ',
  'GeneralSearch012.condition.1.fieldType': '1',
  'GeneralSearch012.condition.1.paramName': 'condition01',
  'GeneralSearch012.condition.1.fieldMaxLength': '6',

  'GeneralSearch012.condition.2.labelValue': '工場名称',
  'GeneralSearch012.condition.2.fieldType': '1',
  'GeneralSearch012.condition.2.paramName': 'condition02',
  'GeneralSearch012.condition.2.fieldMaxLength': '20',
  'GeneralSearch012.condition.2.imeFlg': 'true',

  'GeneralSearch012.condition.3.labelValue': '工場区分',
  'GeneralSearch012.condition.3.fieldType': '3',
  'GeneralSearch012.condition.3.paramName': 'condition03',
  'GeneralSearch012.condition.3.combo.text.1': '倉庫',
  'GeneralSearch012.condition.3.combo.id.1': '01',
  'GeneralSearch012.condition.3.combo.text.2': '工場',
  'GeneralSearch012.condition.3.combo.id.2': '02',
  'GeneralSearch012.condition.3.combo.text.3': '支店',
  'GeneralSearch012.condition.3.combo.id.3': '03',
  'GeneralSearch012.condition.3.combo.text.4': '部署',
  'GeneralSearch012.condition.3.combo.id.4': '04',
  'GeneralSearch012.condition.3.combo.text.5': '製造委託先',
  'GeneralSearch012.condition.3.combo.id.5': '05',

  // 検索結果表示部項目設定
  'GeneralSearch012.result.1.headerTitle': '工場・在庫場所コード',
  'GeneralSearch012.result.1.columnWidth': '150',
  'GeneralSearch012.result.1.resultName': 'result01',

  'GeneralSearch012.result.2.headerTitle': '工場・在庫場所名称',
  'GeneralSearch012.result.2.columnWidth': '200',
  'GeneralSearch012.result.2.resultName': 'result02',

  'GeneralSearch012.result.3.headerTitle': '工場・在庫場所略式名称',
  'GeneralSearch012.result.3.columnWidth': '200',
  'GeneralSearch012.result.3.resultName': 'result03',

  'GeneralSearch012.result.4.headerTitle': '工場・在庫場所区分',
  'GeneralSearch012.result.4.columnWidth': '200',
  'GeneralSearch012.result.4.resultName': 'result04',
}
