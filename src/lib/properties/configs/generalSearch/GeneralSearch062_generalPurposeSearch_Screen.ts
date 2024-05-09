// FWClib/properties/client/GeneralSearch062_generalPurposeSearch_Screen.properties

export default {
  // ##取引先検索U用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch062.title': '取引先検索U',

  // 検索条件部項目設定
  'GeneralSearch062.condition.1.labelValue': '取引先コード',
  'GeneralSearch062.condition.1.fieldType': '1',
  'GeneralSearch062.condition.1.paramName': 'condition01',
  'GeneralSearch062.condition.1.fieldMaxLength': '6',

  'GeneralSearch062.condition.2.labelValue': '取引先略称',
  'GeneralSearch062.condition.2.fieldType': '1',
  'GeneralSearch062.condition.2.paramName': 'condition02',
  'GeneralSearch062.condition.2.fieldMaxLength': '20',
  'GeneralSearch062.condition.2.imeFlg': 'true',

  'GeneralSearch062.condition.3.labelValue': '組織コード',
  'GeneralSearch062.condition.3.fieldType': '1',
  'GeneralSearch062.condition.3.paramName': 'condition03',
  'GeneralSearch062.condition.3.fieldMaxLength': '6',

  // 検索結果表示部項目設定
  'GeneralSearch062.result.1.headerTitle': '取引先コード',
  'GeneralSearch062.result.1.columnWidth': '96',
  'GeneralSearch062.result.1.resultName': 'result01',

  'GeneralSearch062.result.2.headerTitle': '取引先略式名称',
  'GeneralSearch062.result.2.columnWidth': '160',
  'GeneralSearch062.result.2.resultName': 'result02',

  'GeneralSearch062.result.3.headerTitle': '帰属組織略式名称',
  'GeneralSearch062.result.3.columnWidth': '160',
  'GeneralSearch062.result.3.resultName': 'result03',
}
