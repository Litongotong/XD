// FWClib/properties/client/GeneralSearch071_generalPurposeSearch_Screen.properties

export default {
  // ##在庫検索用画面設定###
  // 検索画面ヘッダ部の表示文字列設定
  'GeneralSearch071.title': '在庫検索',

  // 検索条件部項目設定
  'GeneralSearch071.condition.1.labelValue': '工場場所ｺｰﾄﾞ',
  'GeneralSearch071.condition.1.fieldType': '1',
  'GeneralSearch071.condition.1.paramName': 'cdKojoZaikoBasho',
  'GeneralSearch071.condition.1.required': 'true',
  'GeneralSearch071.condition.1.fieldMaxLength': '6',

  'GeneralSearch071.condition.2.labelValue': '品目ｺｰﾄﾞ',
  'GeneralSearch071.condition.2.fieldType': '1',
  'GeneralSearch071.condition.2.paramName': 'cdHinmoku',
  'GeneralSearch071.condition.2.required': 'true',

  'GeneralSearch071.condition.3.labelValue': '品目識別区分',
  'GeneralSearch071.condition.3.fieldType': '3',
  'GeneralSearch071.condition.3.paramName': 'stHinmokuCdShikibetsu',
  'GeneralSearch071.condition.3.combo.text.1': '製品',
  'GeneralSearch071.condition.3.combo.id.1': '01',
  'GeneralSearch071.condition.3.combo.text.2': '原材料',
  'GeneralSearch071.condition.3.combo.id.2': '02',

  'GeneralSearch071.condition.4.labelValue': '倉庫',
  'GeneralSearch071.condition.4.fieldType': '1',
  'GeneralSearch071.condition.4.paramName': 'cdSoko',
  'GeneralSearch071.condition.4.fieldMaxLength': '3',

  'GeneralSearch071.condition.5.labelValue': 'エリア',
  'GeneralSearch071.condition.5.fieldType': '1',
  'GeneralSearch071.condition.5.paramName': 'cdArea',
  'GeneralSearch071.condition.5.fieldMaxLength': '3',

  'GeneralSearch071.condition.6.labelValue': 'ゾーン',
  'GeneralSearch071.condition.6.fieldType': '1',
  'GeneralSearch071.condition.6.paramName': 'cdZone',
  'GeneralSearch071.condition.6.fieldMaxLength': '3',

  'GeneralSearch071.condition.7.labelValue': 'ロット',
  'GeneralSearch071.condition.7.fieldType': '1',
  'GeneralSearch071.condition.7.paramName': 'ifLot',
  'GeneralSearch071.condition.7.fieldMaxLength': '20',

  'GeneralSearch071.condition.8.labelValue': 'サブロット',
  'GeneralSearch071.condition.8.fieldType': '1',
  'GeneralSearch071.condition.8.paramName': 'ifSublot',
  'GeneralSearch071.condition.8.fieldMaxLength': '6',

  'GeneralSearch071.condition.9.labelValue': '取引先ｺｰﾄﾞ',
  'GeneralSearch071.condition.9.fieldType': '1',
  'GeneralSearch071.condition.9.paramName': 'cdTorihikisaki',
  'GeneralSearch071.condition.9.fieldMaxLength': '6',

  'GeneralSearch071.condition.10.labelValue': '生産工場ｺｰﾄﾞ',
  'GeneralSearch071.condition.10.fieldType': '1',
  'GeneralSearch071.condition.10.paramName': 'cdSeisanKojo',
  'GeneralSearch071.condition.10.fieldMaxLength': '6',

  // 検索結果表示部項目設定
  'GeneralSearch071.result.1.headerTitle': '倉庫',
  'GeneralSearch071.result.1.columnWidth': '55',
  'GeneralSearch071.result.1.resultName': 'cdSoko',

  'GeneralSearch071.result.2.headerTitle': 'エリア',
  'GeneralSearch071.result.2.columnWidth': '55',
  'GeneralSearch071.result.2.resultName': 'cdArea',

  'GeneralSearch071.result.3.headerTitle': 'ゾーン',
  'GeneralSearch071.result.3.columnWidth': '55',
  'GeneralSearch071.result.3.resultName': 'cdZone',

  'GeneralSearch071.result.4.headerTitle': '製造日',
  'GeneralSearch071.result.4.columnWidth': '80',
  'GeneralSearch071.result.4.resultName': 'dtSeizo',

  'GeneralSearch071.result.5.headerTitle': '賞味期限',
  'GeneralSearch071.result.5.columnWidth': '80',
  'GeneralSearch071.result.5.resultName': 'dtShomikigen',

  'GeneralSearch071.result.6.headerTitle': '数量',
  'GeneralSearch071.result.6.columnWidth': '90',
  'GeneralSearch071.result.6.resultName': 'qtSuryo',

  'GeneralSearch071.result.7.headerTitle': '不定貫重量',
  'GeneralSearch071.result.7.columnWidth': '90',
  'GeneralSearch071.result.7.resultName': 'qtJuryo',

  'GeneralSearch071.result.8.headerTitle': '単位１',
  'GeneralSearch071.result.8.columnWidth': '55',
  'GeneralSearch071.result.8.resultName': 'ifSuryoTani1',

  'GeneralSearch071.result.9.headerTitle': '単位２',
  'GeneralSearch071.result.9.columnWidth': '55',
  'GeneralSearch071.result.9.resultName': 'ifSuryoTani2',

  'GeneralSearch071.result.10.headerTitle': '取引先ｺｰﾄﾞ',
  'GeneralSearch071.result.10.columnWidth': '80',
  'GeneralSearch071.result.10.resultName': 'cdTorihikisaki',

  'GeneralSearch071.result.11.headerTitle': '取引先略式名称',
  'GeneralSearch071.result.11.columnWidth': '200',
  'GeneralSearch071.result.11.resultName': 'nmTorihikisakiRyaku',

  'GeneralSearch071.result.12.headerTitle': 'ロット',
  'GeneralSearch071.result.12.columnWidth': '160',
  'GeneralSearch071.result.12.resultName': 'ifLot',

  'GeneralSearch071.result.13.headerTitle': 'サブロット',
  'GeneralSearch071.result.13.columnWidth': '90',
  'GeneralSearch071.result.13.resultName': 'ifSublot',

  'GeneralSearch071.result.14.headerTitle': '生産工場ｺｰﾄﾞ',
  'GeneralSearch071.result.14.columnWidth': '100',
  'GeneralSearch071.result.14.resultName': 'cdSeisanKojo',

  'GeneralSearch071.result.15.headerTitle': '生産工場略式名称',
  'GeneralSearch071.result.15.columnWidth': '200',
  'GeneralSearch071.result.15.resultName': 'nmSeisanKojoRyaku',

  'GeneralSearch071.result.16.headerTitle': '等級',
  'GeneralSearch071.result.16.columnWidth': '40',
  'GeneralSearch071.result.16.resultName': 'ifTokyu',

  'GeneralSearch071.result.17.headerTitle': '検査状態',
  'GeneralSearch071.result.17.columnWidth': '80',
  'GeneralSearch071.result.17.resultName': 'stKensajotai',

  'GeneralSearch071.result.18.headerTitle': '出荷止状態',
  'GeneralSearch071.result.18.columnWidth': '90',
  'GeneralSearch071.result.18.resultName': 'stShukkatome',

  'GeneralSearch071.result.19.headerTitle': '未通関ﾌﾗｸﾞ',
  'GeneralSearch071.result.19.columnWidth': '90',
  'GeneralSearch071.result.19.resultName': 'fgMitsukan',

  'GeneralSearch071.result.20.headerTitle': '投入元設備',
  'GeneralSearch071.result.20.columnWidth': '90',
  'GeneralSearch071.result.20.resultName': 'cdSetsubi',

  'GeneralSearch071.result.21.headerTitle': '設備名称',
  'GeneralSearch071.result.21.columnWidth': '200',
  'GeneralSearch071.result.21.resultName': 'nmSetsubi',

  'GeneralSearch071.result.22.headerTitle': '規格品ｺｰﾄﾞ',
  'GeneralSearch071.result.22.columnWidth': '90',
  'GeneralSearch071.result.22.resultName': 'cdKikakuSeihin',

  'GeneralSearch071.result.23.headerTitle': '端数品ｺｰﾄﾞ',
  'GeneralSearch071.result.23.columnWidth': '90',
  'GeneralSearch071.result.23.resultName': 'cdHasuSeihin',

  'GeneralSearch071.result.24.headerTitle': '容量',
  'GeneralSearch071.result.24.columnWidth': '90',
  'GeneralSearch071.result.24.resultName': 'qtYoryo',
}
