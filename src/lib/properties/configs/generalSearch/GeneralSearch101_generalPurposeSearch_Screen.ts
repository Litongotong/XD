// FWClib/properties/client/GeneralSearch101_generalPurposeSearch_Screen.properties

export default {
  // ##金融機関・振込口座マスタ申請用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch101.title': '金融機関・振込口座マスタ申請',

  // 検索条件部項目設定
  'GeneralSearch101.condition.1.labelValue': '承認日',
  'GeneralSearch101.condition.1.fieldType': '4',
  'GeneralSearch101.condition.1.paramNameFrom': 'condition01From',
  'GeneralSearch101.condition.1.paramNameTo': 'condition01To',
  'GeneralSearch101.condition.1.fieldMaxLength': '8',

  'GeneralSearch101.condition.2.labelValue': '口座保有先',
  'GeneralSearch101.condition.2.fieldType': '1',
  'GeneralSearch101.condition.2.paramName': 'condition02',
  'GeneralSearch101.condition.2.fieldMaxLength': '40',
  'GeneralSearch101.condition.2.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch101.result.1.headerTitle': '承認日時',
  'GeneralSearch101.result.1.columnWidth': '150',
  'GeneralSearch101.result.1.resultName': 'result01',

  'GeneralSearch101.result.2.headerTitle': '口座保有先コード',
  'GeneralSearch101.result.2.columnWidth': '80',
  'GeneralSearch101.result.2.resultName': 'result02',

  'GeneralSearch101.result.3.headerTitle': '口座保有先',
  'GeneralSearch101.result.3.columnWidth': '350',
  'GeneralSearch101.result.3.resultName': 'result03',

  'GeneralSearch101.result.4.headerTitle': '金融機関',
  'GeneralSearch101.result.4.columnWidth': '80',
  'GeneralSearch101.result.4.resultName': 'result04',

  'GeneralSearch101.result.5.headerTitle': '支店',
  'GeneralSearch101.result.5.columnWidth': '80',
  'GeneralSearch101.result.5.resultName': 'result05',

  'GeneralSearch101.result.6.headerTitle': '通番',
  'GeneralSearch101.result.6.columnWidth': '50',
  'GeneralSearch101.result.6.resultName': 'result06',
}
