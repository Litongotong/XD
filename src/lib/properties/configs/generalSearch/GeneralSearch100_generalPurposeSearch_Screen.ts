// FWClib/properties/client/GeneralSearch100_generalPurposeSearch_Screen.properties

export default {
  // ##取引先マスタ申請用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch100.title': '取引先マスタ申請',

  // 検索条件部項目設定
  'GeneralSearch100.condition.1.labelValue': '承認日',
  'GeneralSearch100.condition.1.fieldType': '4',
  'GeneralSearch100.condition.1.paramNameFrom': 'condition01From',
  'GeneralSearch100.condition.1.paramNameTo': 'condition01To',
  'GeneralSearch100.condition.1.fieldMaxLength': '8',

  'GeneralSearch100.condition.2.labelValue': '適用開始日',
  'GeneralSearch100.condition.2.fieldType': '4',
  'GeneralSearch100.condition.2.paramNameFrom': 'condition02From',
  'GeneralSearch100.condition.2.paramNameTo': 'condition02To',
  'GeneralSearch100.condition.2.fieldMaxLength': '8',

  'GeneralSearch100.condition.3.labelValue': '取引先名称',
  'GeneralSearch100.condition.3.fieldType': '1',
  'GeneralSearch100.condition.3.paramName': 'condition03',
  'GeneralSearch100.condition.3.fieldMaxLength': '40',
  'GeneralSearch100.condition.3.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch100.result.1.headerTitle': '承認日時',
  'GeneralSearch100.result.1.columnWidth': '150',
  'GeneralSearch100.result.1.resultName': 'result01',

  'GeneralSearch100.result.2.headerTitle': '取引先コード',
  'GeneralSearch100.result.2.columnWidth': '80',
  'GeneralSearch100.result.2.resultName': 'result02',

  'GeneralSearch100.result.3.headerTitle': '取引先名称',
  'GeneralSearch100.result.3.columnWidth': '350',
  'GeneralSearch100.result.3.resultName': 'result03',

  'GeneralSearch100.result.4.headerTitle': '適用開始日',
  'GeneralSearch100.result.4.columnWidth': '100',
  'GeneralSearch100.result.4.resultName': 'result04',

  'GeneralSearch100.result.5.headerTitle': '通番',
  'GeneralSearch100.result.5.columnWidth': '50',
  'GeneralSearch100.result.5.resultName': 'result05',
}
