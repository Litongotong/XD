// FWClib/properties/client/GeneralSearch140_generalPurposeSearch_Screen.properties

export default {
  // ##ノーツ連携実販先検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch140.title': 'ノーツ連携実販先検索',

  // 検索条件部項目設定
  'GeneralSearch140.condition.1.labelValue': '実販先コード',
  'GeneralSearch140.condition.1.fieldType': '1',
  'GeneralSearch140.condition.1.paramName': 'condition01',
  'GeneralSearch140.condition.1.fieldMaxLength': '6',

  'GeneralSearch140.condition.2.labelValue': '実販先名称',
  'GeneralSearch140.condition.2.fieldType': '1',
  'GeneralSearch140.condition.2.paramName': 'condition02',
  'GeneralSearch140.condition.2.fieldMaxLength': '30',
  'GeneralSearch140.condition.2.imeFlg': 'true',

  'GeneralSearch140.condition.3.labelValue': '処理区分',
  'GeneralSearch140.condition.3.fieldType': '3',
  'GeneralSearch140.condition.3.paramName': 'condition03',
  'GeneralSearch140.condition.3.fieldMaxLength': '2',
  'GeneralSearch140.condition.3.combo.text.1': '新規',
  'GeneralSearch140.condition.3.combo.id.1': '01',
  'GeneralSearch140.condition.3.combo.text.2': '更新',
  'GeneralSearch140.condition.3.combo.id.2': '02',

  'GeneralSearch140.condition.4.labelValue': '取込結果',
  'GeneralSearch140.condition.4.fieldType': '3',
  'GeneralSearch140.condition.4.paramName': 'condition04',
  'GeneralSearch140.condition.4.fieldMaxLength': '1',
  'GeneralSearch140.condition.4.combo.text.1': '未取込',
  'GeneralSearch140.condition.4.combo.id.1': '0',
  'GeneralSearch140.condition.4.combo.text.2': '取込済',
  'GeneralSearch140.condition.4.combo.id.2': '1',

  'GeneralSearch140.condition.5.labelValue': '承認日（自）',
  'GeneralSearch140.condition.5.fieldType': '2',
  'GeneralSearch140.condition.5.paramName': 'condition05',
  'GeneralSearch140.condition.5.fieldMaxLength': '8',

  'GeneralSearch140.condition.6.labelValue': '承認日（至）',
  'GeneralSearch140.condition.6.fieldType': '2',
  'GeneralSearch140.condition.6.paramName': 'condition06',
  'GeneralSearch140.condition.6.fieldMaxLength': '8',

  'GeneralSearch140.condition.7.labelValue': '取込日（自）',
  'GeneralSearch140.condition.7.fieldType': '2',
  'GeneralSearch140.condition.7.paramName': 'condition07',
  'GeneralSearch140.condition.7.fieldMaxLength': '8',

  'GeneralSearch140.condition.8.labelValue': '取込日（至）',
  'GeneralSearch140.condition.8.fieldType': '2',
  'GeneralSearch140.condition.8.paramName': 'condition08',
  'GeneralSearch140.condition.8.fieldMaxLength': '8',

  'GeneralSearch140.condition.9.labelValue': '承認取消',
  'GeneralSearch140.condition.9.fieldType': '3',
  'GeneralSearch140.condition.9.paramName': 'condition09',
  'GeneralSearch140.condition.9.fieldMaxLength': '1',
  'GeneralSearch140.condition.9.combo.text.1': '承認済',
  'GeneralSearch140.condition.9.combo.id.1': '0',
  'GeneralSearch140.condition.9.combo.text.2': '取消',
  'GeneralSearch140.condition.9.combo.id.2': '1',

  // 検索結果表示部項目設定
  'GeneralSearch140.result.1.headerTitle': '承認日時',
  'GeneralSearch140.result.1.columnWidth': '150',
  'GeneralSearch140.result.1.resultName': 'result01',

  'GeneralSearch140.result.2.headerTitle': '実販先コード',
  'GeneralSearch140.result.2.columnWidth': '80',
  'GeneralSearch140.result.2.resultName': 'result02',

  'GeneralSearch140.result.3.headerTitle': '実販先名称',
  'GeneralSearch140.result.3.columnWidth': '160',
  'GeneralSearch140.result.3.resultName': 'result03',

  'GeneralSearch140.result.4.headerTitle': '処理区分',
  'GeneralSearch140.result.4.columnWidth': '80',
  'GeneralSearch140.result.4.resultName': 'result04',

  'GeneralSearch140.result.5.headerTitle': '通番',
  'GeneralSearch140.result.5.columnWidth': '50',
  'GeneralSearch140.result.5.resultName': 'result05',

  'GeneralSearch140.result.6.headerTitle': '取込日時',
  'GeneralSearch140.result.6.columnWidth': '80',
  'GeneralSearch140.result.6.resultName': 'result06',

  'GeneralSearch140.result.7.headerTitle': '取込結果',
  'GeneralSearch140.result.7.columnWidth': '80',
  'GeneralSearch140.result.7.resultName': 'result07',

  'GeneralSearch140.result.8.headerTitle': '承認取消',
  'GeneralSearch140.result.8.columnWidth': '80',
  'GeneralSearch140.result.8.resultName': 'result08',
}
