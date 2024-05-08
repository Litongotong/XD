// FWClib/properties/client/GeneralSearch084_generalPurposeSearch_Screen.properties

export default {
  // ##設備検索U用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch084.title': '設備検索U',

  // 検索条件部項目設定
  'GeneralSearch084.condition.1.labelValue': '職場ｺｰﾄﾞ',
  'GeneralSearch084.condition.1.fieldType': '1',
  'GeneralSearch084.condition.1.paramName': 'cdShokuba',
  'GeneralSearch084.condition.1.fieldMaxLength': '6',

  'GeneralSearch084.condition.2.labelValue': '職場略称',
  'GeneralSearch084.condition.2.fieldType': '1',
  'GeneralSearch084.condition.2.paramName': 'nmShokubaRyaku',
  'GeneralSearch084.condition.2.fieldMaxLength': '20',

  'GeneralSearch084.condition.3.labelValue': '職場名称',
  'GeneralSearch084.condition.3.fieldType': '1',
  'GeneralSearch084.condition.3.paramName': 'nmShokuba',
  'GeneralSearch084.condition.3.fieldMaxLength': '30',

  'GeneralSearch084.condition.4.labelValue': '設備コード',
  'GeneralSearch084.condition.4.fieldType': '1',
  'GeneralSearch084.condition.4.paramName': 'cdSetsubi',
  'GeneralSearch084.condition.4.fieldMaxLength': '3',

  'GeneralSearch084.condition.5.labelValue': '設備名称',
  'GeneralSearch084.condition.5.fieldType': '1',
  'GeneralSearch084.condition.5.paramName': 'nmSetsubi',
  'GeneralSearch084.condition.5.fieldMaxLength': '30',

  'GeneralSearch084.condition.6.labelValue': '設備区分',
  'GeneralSearch084.condition.6.fieldType': '3',
  'GeneralSearch084.condition.6.paramName': 'stSetsubi',
  'GeneralSearch084.condition.6.combo.text.1': '製造設備',
  'GeneralSearch084.condition.6.combo.id.1': '01',
  'GeneralSearch084.condition.6.combo.text.2': 'ストレージタンク',
  'GeneralSearch084.condition.6.combo.id.2': '02',
  'GeneralSearch084.condition.6.combo.text.3': '分離機',
  'GeneralSearch084.condition.6.combo.id.3': '03',
  'GeneralSearch084.condition.6.combo.text.4': 'ライン',
  'GeneralSearch084.condition.6.combo.id.4': '04',

  'GeneralSearch084.condition.7.labelValue': '工場ｺｰﾄﾞ',
  'GeneralSearch084.condition.7.fieldType': '1',
  'GeneralSearch084.condition.7.paramName': 'cdKojoZaikoBasho',
  'GeneralSearch084.condition.7.fieldMaxLength': '6',

  // 検索結果表示部項目設定
  'GeneralSearch084.result.1.headerTitle': '職場ｺｰﾄﾞ',
  'GeneralSearch084.result.1.columnWidth': '60',
  'GeneralSearch084.result.1.resultName': 'cdShokuba',

  'GeneralSearch084.result.2.headerTitle': '職場名称',
  'GeneralSearch084.result.2.columnWidth': '100',
  'GeneralSearch084.result.2.resultName': 'nmShokubaRyaku',

  'GeneralSearch084.result.3.headerTitle': '職場略称',
  'GeneralSearch084.result.3.columnWidth': '180',
  'GeneralSearch084.result.3.resultName': 'nmShokuba',

  'GeneralSearch084.result.4.headerTitle': '設備区分',
  'GeneralSearch084.result.4.columnWidth': '200',
  'GeneralSearch084.result.4.resultName': 'stSetsubi',

  'GeneralSearch084.result.5.headerTitle': '設備ｺｰﾄﾞ',
  'GeneralSearch084.result.5.columnWidth': '60',
  'GeneralSearch084.result.5.resultName': 'cdSetsubi',

  'GeneralSearch084.result.6.headerTitle': '設備名称',
  'GeneralSearch084.result.6.columnWidth': '200',
  'GeneralSearch084.result.6.resultName': 'nmSetsubi',
}
