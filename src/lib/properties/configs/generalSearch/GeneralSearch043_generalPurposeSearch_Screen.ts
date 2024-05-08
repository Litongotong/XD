// FWClib/properties/client/GeneralSearch043_generalPurposeSearch_Screen.properties

export default {
  // ##取引先検索X用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch043.title': '取引先検索X',

  // 検索条件部項目設定
  'GeneralSearch043.condition.1.labelValue': '取引先コード',
  'GeneralSearch043.condition.1.fieldType': '1',
  'GeneralSearch043.condition.1.paramName': 'condition01',
  'GeneralSearch043.condition.1.fieldMaxLength': '6',

  'GeneralSearch043.condition.2.labelValue': '取引先名称',
  'GeneralSearch043.condition.2.fieldType': '1',
  'GeneralSearch043.condition.2.paramName': 'condition02',
  'GeneralSearch043.condition.2.fieldMaxLength': '60',
  'GeneralSearch043.condition.2.imeFlg': 'true',

  'GeneralSearch043.condition.3.labelValue': '取引先区分',
  'GeneralSearch043.condition.3.fieldType': '3',
  'GeneralSearch043.condition.3.paramName': 'condition03',
  'GeneralSearch043.condition.3.fieldMaxLength': '10',
  'GeneralSearch043.condition.3.combo.text.1': '選択なし',
  'GeneralSearch043.condition.3.combo.id.1': '00',
  'GeneralSearch043.condition.3.combo.text.2': '製造委託先',
  'GeneralSearch043.condition.3.combo.id.2': '01',
  'GeneralSearch043.condition.3.combo.text.3': '原材料業者',
  'GeneralSearch043.condition.3.combo.id.3': '02',
  'GeneralSearch043.condition.3.combo.text.4': '原料乳取引先（支払有）',
  'GeneralSearch043.condition.3.combo.id.4': '03',
  'GeneralSearch043.condition.3.combo.text.5': 'その他取引先',
  'GeneralSearch043.condition.3.combo.id.5': '04',
  'GeneralSearch043.condition.3.combo.text.6': '原料乳委託先',
  'GeneralSearch043.condition.3.combo.id.6': '05',
  'GeneralSearch043.condition.3.combo.text.7': '税関',
  'GeneralSearch043.condition.3.combo.id.7': '06',
  'GeneralSearch043.condition.3.combo.text.8': '保険会社',
  'GeneralSearch043.condition.3.combo.id.8': '07',
  'GeneralSearch043.condition.3.combo.text.9': '直貿',
  'GeneralSearch043.condition.3.combo.id.9': '08',
  'GeneralSearch043.condition.3.combo.text.10': '商社',
  'GeneralSearch043.condition.3.combo.id.10': '09',
  'GeneralSearch043.condition.3.combo.text.11': '原料乳受託先',
  'GeneralSearch043.condition.3.combo.id.11': '10',
  'GeneralSearch043.condition.3.combo.text.12': '原料乳取引先（支払無）',
  'GeneralSearch043.condition.3.combo.id.12': '11',
  'GeneralSearch043.condition.3.combo.text.13': '運送会社',
  'GeneralSearch043.condition.3.combo.id.13': '12',

  'GeneralSearch043.condition.4.labelValue': '帰属組織ｺｰﾄﾞ',
  'GeneralSearch043.condition.4.fieldType': '1',
  'GeneralSearch043.condition.4.paramName': 'condition04',
  'GeneralSearch043.condition.4.fieldMaxLength': '6',

  'GeneralSearch043.condition.5.labelValue': '帰属組織名称',
  'GeneralSearch043.condition.5.fieldType': '1',
  'GeneralSearch043.condition.5.paramName': 'condition05',
  'GeneralSearch043.condition.5.fieldMaxLength': '18',
  'GeneralSearch043.condition.5.imeFlg': 'true',

  'GeneralSearch043.condition.6.labelValue': '商品仕入先F',
  'GeneralSearch043.condition.6.fieldType': '3',
  'GeneralSearch043.condition.6.paramName': 'condition06',
  'GeneralSearch043.condition.6.fieldMaxLength': '10',
  'GeneralSearch043.condition.6.combo.text.1': '非対象',
  'GeneralSearch043.condition.6.combo.id.1': '0',
  'GeneralSearch043.condition.6.combo.text.2': '対象',
  'GeneralSearch043.condition.6.combo.id.2': '1',

  'GeneralSearch043.condition.7.labelValue': '原材料仕入先F',
  'GeneralSearch043.condition.7.fieldType': '3',
  'GeneralSearch043.condition.7.paramName': 'condition07',
  'GeneralSearch043.condition.7.fieldMaxLength': '10',
  'GeneralSearch043.condition.7.combo.text.1': '非対象',
  'GeneralSearch043.condition.7.combo.id.1': '0',
  'GeneralSearch043.condition.7.combo.text.2': '対象',
  'GeneralSearch043.condition.7.combo.id.2': '1',

  'GeneralSearch043.condition.8.labelValue': '貯蔵品斡旋品F',
  'GeneralSearch043.condition.8.fieldType': '3',
  'GeneralSearch043.condition.8.paramName': 'condition08',
  'GeneralSearch043.condition.8.fieldMaxLength': '10',
  'GeneralSearch043.condition.8.combo.text.1': '非対象',
  'GeneralSearch043.condition.8.combo.id.1': '0',
  'GeneralSearch043.condition.8.combo.text.2': '対象',
  'GeneralSearch043.condition.8.combo.id.2': '1',

  'GeneralSearch043.condition.9.labelValue': 'ﾏｽﾀ有効日付',
  'GeneralSearch043.condition.9.fieldType': '2',
  'GeneralSearch043.condition.9.paramName': 'condition09',
  'GeneralSearch043.condition.9.fieldMaxLength': '8',

  'GeneralSearch043.condition.10.labelValue': 'ﾏｽﾀ有効日以降',
  'GeneralSearch043.condition.10.fieldType': '2',
  'GeneralSearch043.condition.10.paramName': 'condition10',
  'GeneralSearch043.condition.10.fieldMaxLength': '8',

  // 検索結果表示部項目設定
  'GeneralSearch043.result.1.headerTitle': '取引先コード',
  'GeneralSearch043.result.1.columnWidth': '150',
  'GeneralSearch043.result.1.resultName': 'result01',

  'GeneralSearch043.result.2.headerTitle': '取引先名称',
  'GeneralSearch043.result.2.columnWidth': '200',
  'GeneralSearch043.result.2.resultName': 'result02',

  'GeneralSearch043.result.3.headerTitle': '取引先区分',
  'GeneralSearch043.result.3.columnWidth': '100',
  'GeneralSearch043.result.3.resultName': 'result03',

  'GeneralSearch043.result.4.headerTitle': '帰属組織ｺｰﾄﾞ',
  'GeneralSearch043.result.4.columnWidth': '150',
  'GeneralSearch043.result.4.resultName': 'result04',

  'GeneralSearch043.result.5.headerTitle': '帰属組織名称',
  'GeneralSearch043.result.5.columnWidth': '200',
  'GeneralSearch043.result.5.resultName': 'result05',

  'GeneralSearch043.result.6.headerTitle': '適用開始日',
  'GeneralSearch043.result.6.columnWidth': '100',
  'GeneralSearch043.result.6.resultName': 'result06',

  'GeneralSearch043.result.7.headerTitle': '取引先略式名称',
  'GeneralSearch043.result.7.columnWidth': '200',
  'GeneralSearch043.result.7.resultName': 'result07',

  'GeneralSearch043.result.8.headerTitle': '取引先カナ名称',
  'GeneralSearch043.result.8.columnWidth': '150',
  'GeneralSearch043.result.8.resultName': 'result08',

  'GeneralSearch043.result.9.headerTitle': '商品仕入先フラグ',
  'GeneralSearch043.result.9.columnWidth': '150',
  'GeneralSearch043.result.9.resultName': 'result09',

  'GeneralSearch043.result.10.headerTitle': '原材料仕入先フラグ',
  'GeneralSearch043.result.10.columnWidth': '150',
  'GeneralSearch043.result.10.resultName': 'result10',

  'GeneralSearch043.result.11.headerTitle': '貯蔵品・斡旋品仕入先フラグ',
  'GeneralSearch043.result.11.columnWidth': '200',
  'GeneralSearch043.result.11.resultName': 'result11',
}
