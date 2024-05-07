// FWClib/properties/client/GeneralSearch105_generalPurposeSearch_Screen.properties

export default {
  // ##投入元設備検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch105.title': '投入元設備検索',

  // 検索条件部項目設定
  'GeneralSearch105.condition.1.labelValue': '工場名',
  'GeneralSearch105.condition.1.fieldType': '1',
  'GeneralSearch105.condition.1.paramName': 'nmKojoZaikoBasho',
  'GeneralSearch105.condition.1.fieldMaxLength': '50',
  'GeneralSearch105.condition.1.imeFlg': 'true',

  'GeneralSearch105.condition.2.labelValue': '管理工程ｺｰﾄﾞ',
  'GeneralSearch105.condition.2.fieldType': '1',
  'GeneralSearch105.condition.2.paramName': 'cdKanrikotei',
  'GeneralSearch105.condition.2.fieldMaxLength': '3',

  'GeneralSearch105.condition.3.labelValue': '管理工程名',
  'GeneralSearch105.condition.3.fieldType': '1',
  'GeneralSearch105.condition.3.paramName': 'nmKanrikotei',
  'GeneralSearch105.condition.3.fieldMaxLength': '80',
  'GeneralSearch105.condition.3.imeFlg': 'true',

  // 検索結果表示部項目設定
  'GeneralSearch105.result.1.headerTitle': '投入元設備コード',
  'GeneralSearch105.result.1.columnWidth': '150',
  'GeneralSearch105.result.1.resultName': 'result01',

  'GeneralSearch105.result.2.headerTitle': '投入元設備名称',
  'GeneralSearch105.result.2.columnWidth': '200',
  'GeneralSearch105.result.2.resultName': 'result02',

  'GeneralSearch105.result.3.headerTitle': '倉庫コード',
  'GeneralSearch105.result.3.columnWidth': '100',
  'GeneralSearch105.result.3.resultName': 'result03',

  'GeneralSearch105.result.4.headerTitle': 'エリアコード',
  'GeneralSearch105.result.4.columnWidth': '100',
  'GeneralSearch105.result.4.resultName': 'result04',

  'GeneralSearch105.result.5.headerTitle': 'ゾーンコード',
  'GeneralSearch105.result.5.columnWidth': '100',
  'GeneralSearch105.result.5.resultName': 'result05',
}
