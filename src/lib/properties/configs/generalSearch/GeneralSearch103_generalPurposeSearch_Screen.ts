// FWClib/properties/client/GeneralSearch103_generalPurposeSearch_Screen.properties

export default {
  // ##仕掛品検索U用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch103.title': '仕掛品検索U',

  // 検索条件部項目設定
  'GeneralSearch103.condition.1.labelValue': '工場コード',
  'GeneralSearch103.condition.1.fieldType': '1',
  'GeneralSearch103.condition.1.paramName': 'cdKojoZaikoBasho',
  'GeneralSearch103.condition.1.required': 'true',
  'GeneralSearch103.condition.1.fieldMaxLength': '6',

  'GeneralSearch103.condition.2.labelValue': '工場名称',
  'GeneralSearch103.condition.2.fieldType': '1',
  'GeneralSearch103.condition.2.paramName': 'nmKojoZaikoBasho',
  'GeneralSearch103.condition.2.fieldMaxLength': '50',
  'GeneralSearch103.condition.2.imeFlg': 'true',

  'GeneralSearch103.condition.3.labelValue': '製品コード',
  'GeneralSearch103.condition.3.fieldType': '1',
  'GeneralSearch103.condition.3.paramName': 'cdSeihin',
  'GeneralSearch103.condition.3.fieldMaxLength': '6',

  'GeneralSearch103.condition.4.labelValue': '製品略称',
  'GeneralSearch103.condition.4.fieldType': '1',
  'GeneralSearch103.condition.4.paramName': 'nmSeihinryakushiki',
  'GeneralSearch103.condition.4.fieldMaxLength': '22',
  'GeneralSearch103.condition.4.imeFlg': 'true',

  'GeneralSearch103.condition.5.labelValue': '製造ロット',
  'GeneralSearch103.condition.5.fieldType': '1',
  'GeneralSearch103.condition.5.paramName': 'ifSeizoLot',
  'GeneralSearch103.condition.5.fieldMaxLength': '30',

  // 検索結果表示部項目設定
  'GeneralSearch103.result.1.headerTitle': '製品コード',
  'GeneralSearch103.result.1.columnWidth': '100',
  'GeneralSearch103.result.1.resultName': 'result01',

  'GeneralSearch103.result.2.headerTitle': '製品略称',
  'GeneralSearch103.result.2.columnWidth': '200',
  'GeneralSearch103.result.2.resultName': 'result02',

  'GeneralSearch103.result.3.headerTitle': '製造ロット',
  'GeneralSearch103.result.3.columnWidth': '200',
  'GeneralSearch103.result.3.resultName': 'result03',

  'GeneralSearch103.result.4.headerTitle': '管理工程',
  'GeneralSearch103.result.4.columnWidth': '100',
  'GeneralSearch103.result.4.resultName': 'result04',

  'GeneralSearch103.result.5.headerTitle': '管理工程名称',
  'GeneralSearch103.result.5.columnWidth': '150',
  'GeneralSearch103.result.5.resultName': 'result05',

  'GeneralSearch103.result.6.headerTitle': '仕掛品数量',
  'GeneralSearch103.result.6.columnWidth': '120',
  'GeneralSearch103.result.6.resultName': 'result06',

  'GeneralSearch103.result.7.headerTitle': 'ＦＡＴ量',
  'GeneralSearch103.result.7.columnWidth': '120',
  'GeneralSearch103.result.7.resultName': 'result07',

  'GeneralSearch103.result.8.headerTitle': 'ＳＮＦ量',
  'GeneralSearch103.result.8.columnWidth': '120',
  'GeneralSearch103.result.8.resultName': 'result08',
}
