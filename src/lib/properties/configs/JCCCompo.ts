// FWClib/properties/client/JCCCompo.properties

export default {
  //
  //  JCCCompo.properties
  // ###############################################################

  //  【JCCLog】
  // ###############################################################
  //  改行の空白変換を行なうかどうか
  //  キー名：JCCLog.change_blank
  //  値：true - 空白変換を行なう / false - 空白変換を行なわない
  //      デフォルトは"true"
  'JCCLog.change_blank': 'false',

  //  【JCCCalendarCommon】
  // ###############################################################
  //  年号シンボルの日本語表記情報
  //  キー名：JCCCalendarCommon.kanji_*
  // 	  ※"*"は英字シンボル(１文字)を記述します
  //  値    ：日本語表記年号シンボル
  //  注意  ：最新の年号・英字シンボルを取得するため、最新の年号・英字シンボルの
  //          キー名と値を記述してください。
  //          『和暦開始日に対応する西暦年月日情報』に対応する英字シンボルを
  //          定義してください。正確な情報を取得できなくなります。
  //          『和暦開始日に対応する西暦年月日情報』に対応するキーと値を定義してください。
  //          ※以下の設定は変更しないようにしてください。
  'JCCCalendarCommon.kanji_M': '明治',
  'JCCCalendarCommon.kanji_T': '大正',
  'JCCCalendarCommon.kanji_S': '昭和',
  'JCCCalendarCommon.kanji_H': '平成',

  //  和暦開始日に対応する西暦年月日情報
  //  キー名：JCCCalendarCommon.start_*
  // 	  ※"*"は英字シンボル(１文字)を記述します
  //  値    ：和暦開始日に対応する西暦年月日情報
  //  注意  ：『年号シンボルの日本語表記情報』に対応する英字シンボルを
  //          定義してください。正確な情報を取得できなくなります。
  //          『年号シンボルの日本語表記情報』に対応するキーと値を定義してください。
  //          ※以下の設定は変更しないようにしてください。
  'JCCCalendarCommon.start_M': '18680827',
  'JCCCalendarCommon.start_T': '19120730',
  'JCCCalendarCommon.start_S': '19261225',
  'JCCCalendarCommon.start_H': '19890108',
}
