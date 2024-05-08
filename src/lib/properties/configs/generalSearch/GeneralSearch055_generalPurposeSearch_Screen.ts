// FWClib/properties/client/GeneralSearch055_generalPurposeSearch_Screen.properties

export default {
  // ##店検索V用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch055.title': '店検索V',

  // 検索条件部項目設定
  'GeneralSearch055.condition.1.labelValue': '店群ｺｰﾄﾞ',
  'GeneralSearch055.condition.1.fieldType': '1',
  'GeneralSearch055.condition.1.paramName': 'cdTengun',
  'GeneralSearch055.condition.1.fieldMaxLength': '6',

  'GeneralSearch055.condition.2.labelValue': '店群名称',
  'GeneralSearch055.condition.2.fieldType': '1',
  'GeneralSearch055.condition.2.paramName': 'nmTengun',
  'GeneralSearch055.condition.2.fieldMaxLength': '40',
  'GeneralSearch055.condition.2.imeFlg': 'true',

  'GeneralSearch055.condition.3.labelValue': '店コード',
  'GeneralSearch055.condition.3.fieldType': '1',
  'GeneralSearch055.condition.3.paramName': 'cdTen',
  'GeneralSearch055.condition.3.fieldMaxLength': '6',

  'GeneralSearch055.condition.4.labelValue': '店名称',
  'GeneralSearch055.condition.4.fieldType': '1',
  'GeneralSearch055.condition.4.paramName': 'nmTen',
  'GeneralSearch055.condition.4.fieldMaxLength': '40',
  'GeneralSearch055.condition.4.imeFlg': 'true',

  'GeneralSearch055.condition.5.labelValue': '帰属組織ｺｰﾄﾞ',
  'GeneralSearch055.condition.5.fieldType': '1',
  'GeneralSearch055.condition.5.paramName': 'cdKizokuSoshiki',
  'GeneralSearch055.condition.5.fieldMaxLength': '6',

  'GeneralSearch055.condition.6.labelValue': '売掛区分',
  'GeneralSearch055.condition.6.fieldType': '3',
  'GeneralSearch055.condition.6.paramName': 'stUrikake',
  'GeneralSearch055.condition.6.fieldMaxLength': '2',
  'GeneralSearch055.condition.6.combo.text.1': '乳食品',
  'GeneralSearch055.condition.6.combo.id.1': '00',
  'GeneralSearch055.condition.6.combo.text.2': 'ギフト券',
  'GeneralSearch055.condition.6.combo.id.2': '01',
  'GeneralSearch055.condition.6.combo.text.3': '育児品',
  'GeneralSearch055.condition.6.combo.id.3': '02',

  'GeneralSearch055.condition.7.labelValue': '特約店フラグ',
  'GeneralSearch055.condition.7.fieldType': '3',
  'GeneralSearch055.condition.7.paramName': 'fgTokuyakuten',
  'GeneralSearch055.condition.7.fieldMaxLength': '1',
  'GeneralSearch055.condition.7.combo.text.1': '対象外',
  'GeneralSearch055.condition.7.combo.id.1': '0',
  'GeneralSearch055.condition.7.combo.text.2': '特約店',
  'GeneralSearch055.condition.7.combo.id.2': '1',

  'GeneralSearch055.condition.8.labelValue': '請求店フラグ',
  'GeneralSearch055.condition.8.fieldType': '3',
  'GeneralSearch055.condition.8.paramName': 'fgSeikyuten',
  'GeneralSearch055.condition.8.fieldMaxLength': '1',
  'GeneralSearch055.condition.8.combo.text.1': '対象外',
  'GeneralSearch055.condition.8.combo.id.1': '0',
  'GeneralSearch055.condition.8.combo.text.2': '請求店',
  'GeneralSearch055.condition.8.combo.id.2': '1',

  'GeneralSearch055.condition.9.labelValue': '納品先ﾌﾗｸﾞ',
  'GeneralSearch055.condition.9.fieldType': '3',
  'GeneralSearch055.condition.9.paramName': 'fgNohinsaki',
  'GeneralSearch055.condition.9.fieldMaxLength': '1',
  'GeneralSearch055.condition.9.combo.text.1': '対象外',
  'GeneralSearch055.condition.9.combo.id.1': '0',
  'GeneralSearch055.condition.9.combo.text.2': '納品先',
  'GeneralSearch055.condition.9.combo.id.2': '1',

  'GeneralSearch055.condition.10.labelValue': 'ﾏｽﾀ有効日付',
  'GeneralSearch055.condition.10.fieldType': '2',
  'GeneralSearch055.condition.10.paramName': 'dtMasterYuko',
  'GeneralSearch055.condition.10.fieldMaxLength': '6',

  // 検索結果表示部項目設定
  'GeneralSearch055.result.1.headerTitle': '店群ｺｰﾄﾞ',
  'GeneralSearch055.result.1.columnWidth': '70',
  'GeneralSearch055.result.1.resultName': 'cdTengun',

  'GeneralSearch055.result.2.headerTitle': '店群名称',
  'GeneralSearch055.result.2.columnWidth': '150',
  'GeneralSearch055.result.2.resultName': 'nmTengun',

  'GeneralSearch055.result.3.headerTitle': '店ｺｰﾄﾞ',
  'GeneralSearch055.result.3.columnWidth': '70',
  'GeneralSearch055.result.3.resultName': 'cdTen',

  'GeneralSearch055.result.4.headerTitle': '店名称',
  'GeneralSearch055.result.4.columnWidth': '200',
  'GeneralSearch055.result.4.resultName': 'nmTen',

  'GeneralSearch055.result.5.headerTitle': '店略式名称',
  'GeneralSearch055.result.5.columnWidth': '150',
  'GeneralSearch055.result.5.resultName': 'nmTenRyakushiki',

  'GeneralSearch055.result.6.headerTitle': '売掛区分',
  'GeneralSearch055.result.6.columnWidth': '80',
  'GeneralSearch055.result.6.resultName': 'stUrikake',

  'GeneralSearch055.result.7.headerTitle': '特約店ﾌﾗｸﾞ',
  'GeneralSearch055.result.7.columnWidth': '80',
  'GeneralSearch055.result.7.resultName': 'fgTokuyakuten',

  'GeneralSearch055.result.8.headerTitle': '請求店ﾌﾗｸﾞ',
  'GeneralSearch055.result.8.columnWidth': '80',
  'GeneralSearch055.result.8.resultName': 'fgSeikyuten',

  'GeneralSearch055.result.9.headerTitle': '納品先ﾌﾗｸﾞ',
  'GeneralSearch055.result.9.columnWidth': '80',
  'GeneralSearch055.result.9.resultName': 'fgNohinsaki',

  'GeneralSearch055.result.10.headerTitle': '帰属組織ｺｰﾄﾞ',
  'GeneralSearch055.result.10.columnWidth': '90',
  'GeneralSearch055.result.10.resultName': 'cdKizokuSoshiki',

  'GeneralSearch055.result.11.headerTitle': '郵便番号',
  'GeneralSearch055.result.11.columnWidth': '80',
  'GeneralSearch055.result.11.resultName': 'noYubin',

  'GeneralSearch055.result.12.headerTitle': '住所１',
  'GeneralSearch055.result.12.columnWidth': '150',
  'GeneralSearch055.result.12.resultName': 'nmJusho1',

  'GeneralSearch055.result.13.headerTitle': '住所２',
  'GeneralSearch055.result.13.columnWidth': '150',
  'GeneralSearch055.result.13.resultName': 'nmJusho2',

  'GeneralSearch055.result.14.headerTitle': '住所３',
  'GeneralSearch055.result.14.columnWidth': '150',
  'GeneralSearch055.result.14.resultName': 'nmJusho3',
}
