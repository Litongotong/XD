/**
 * 管理会計サブシステム共通文字列クラスです。
 */
export class YBMKKSCjfConst {
  /** サブシステムID　*/
  static SUB_SYSTEM_ID = 'YBMKKS'

  /** CBS名 */
  static CBS_NAME = 'YBMKKSCBS'

  /** 共通CBS名 */
  static SMS_CBS_NAME = 'SMSSYSCBS'

  /** 初期化処理実行判定フラグ キー */
  static FG_INIT = 'fgInit'
  /** 初期化処理実行判定フラグ キー */
  static FG_INIT1 = 'fgInit1'
  /** 初期化処理実行判定フラグ キー */
  static FG_INIT2 = 'fgInit2'

  /** 初期化処理実行判定フラグ 値 */
  static FG_INIT_TRUE = 'true'

  /** 初期化処理実行判定フラグ 値2 */
  static FG_INIT_TRUE2 = 'true2'

  /** 汎用検索メソッド名 */
  static SEARCH_HANYO = 'find'

  /** ユーザデータキー */
  static SYS_DATA = 'sys_data'

  /** 管理会計初期化共通メッセージキー 汎用分類条件MsgList */
  static HANYO_BUNRUI_JOKEN = 'hanyoBunruiJokenMsgList'

  /** 管理会計初期化共通メッセージキー 環境設定情報Msg */
  static KANKYO_SETTEI_JOHO_MSG = 'kankyoSetteiJohoMsg'

  /** 管理会計初期化共通メッセージキー 汎用分類種別List */
  static HANYO_BUNRUI_SHUBETSU = 'hanyoBunruiShubetsuList'

  /** 環境設定メッセージキー 環境設定情報 */
  static KANKYO_SETTEI_JOHO_MSG_LIST = 'kankyoSetteiJohoMsgList'

  /** 環境設定情報メッセージキー 処理番号 */
  static NO_SHORI_KANKYO = 'noShori'

  /** 環境設定情報メッセージキー 年度 */
  static DT_NENDO_KANKYO = 'dtNendo'

  /** 環境設定情報メッセージキー 処理内容 */
  static ST_SHORI_KANKYO = 'stShori'

  /** 環境設定情報メッセージキー 期中修正開始月 */
  static DT_TSUKI_KANKYO = 'dtTsuki'

  /** 環境設定情報メッセージキー 基準日 */
  static DT_KIJUN_KANKYO = 'kijunbi'

  /** 汎用分類CBMメッセージキー 会社コード */
  static CD_KAISHA_HANYO = 'cdKaisha'

  /** 汎用分類CBMメッセージキー サブシステム種別コード */
  static CD_SUBSYSTEM_SHUBETSU = 'cdSubsystemShubetu'

  /** 汎用分類CBMメッセージキー データ種別コード */
  static CD_DATASHUBETSU = 'cdDatashubetsu'

  /** 汎用分類CBMメッセージキー 汎用コード */
  static CD_HANYO = 'cdHanyo'

  /** 汎用分類CBMメッセージキー 内容1 */
  static NM_NAIYO_1 = 'nmNaiyo1'

  /** 汎用分類CBMメッセージキー 内容2 */
  static NM_NAIYO_2 = 'nmNaiyo2'

  /** 汎用分類CBMメッセージキー 内容3 */
  static NM_NAIYO_3 = 'nmNaiyo3'

  /** 汎用分類CBMメッセージキー 数値1 */
  static QT_SUTI1 = 'qtSuti1'

  /** 汎用分類種別CBSメッセージキー 汎用分類リスト */
  static HANYO_BUNRUI_LIST = 'hanyoBunruiList'

  /** F1ボタンラベル */
  static F1 = '(F1)'

  /** F2ボタンラベル */
  static F2 = '(F2)'

  /** F3ボタンラベル */
  static F3 = '(F3)'

  /** F4ボタンラベル */
  static F4 = '(F4)'

  /** F5ボタンラベル */
  static F5 = '(F5)'

  /** F6ボタンラベル */
  static F6 = '(F6)'

  /** F7ボタンラベル */
  static F7 = 'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)'

  /** F8ボタンラベル */
  static F8 = '帳票印刷(F8)'

  /** F9ボタンラベル */
  static F9 = '登録(F9)'

  /** YBMKKS.properties ファイルサイズ制限値　キー */
  static MAX_FILE_SIZE = 'MAX_FILE_SIZE'

  /** 検索画面起動モード */
  static SEARCH_ST_MODE = 'stMode'

  /** 検索画面　呼出元判断 */
  static SEARCH_CHECK_YBMKKS = 'checkYBMKKS'

  /** 検索画面　会計フラグ */
  static FG_YBMKKS = '1'

  /** 検索画面 対象日キー */
  static DT_TAISHO = 'dtTaisho'

  /** 組織検索画面 起動モード01 */
  static ST_MODE_SOSHIKI = '01'

  /** 組織検索画面 起動モード02 */
  static ST_MODE_SOSHIKI_JUGYOIN = '02'

  /** 組織検索画面 起動モード03 */
  static ST_MODE_JUGYOIN = '03'

  /** 原材料検索画面 起動モード01 */
  static ST_MODE_GENZAIRYOGUN = '01'

  /** 原材料検索画面 起動モード02 */
  static ST_MODE_GENZAIRYOGUN_GENZAIRYO = '02'

  /** 原材料検索画面 起動モード03 */
  static ST_MODE_GENZAIRYO = '03'

  /** 事業検索画面 起動モード01 */
  static ST_MODE_SEIHINGUN = '01'

  /** 事業検索画面 起動モード02 */
  static ST_MODE_SEIHINGUN_SEIHIN = '02'

  /** 事業検索画面 起動モード03 */
  static ST_MODE_SEIHIN = '03'

  /** チェーン検索画面起動モード01 */
  static ST_MODE_CHAIN = '01'

  /** 店検索 起動モード01 */
  static ST_MODE_TENGUN = '01'

  /** 店検索 起動モード02 */
  static ST_MODE_TENGUN_TEN = '02'

  /** 店検索 起動モード03 */
  static ST_MODE_TEN = '03'

  /** 科目検索画面 起動モード01 */
  static ST_MODE_KAMOKU = '01'

  /** 科目検索画面 起動モード02 */
  static ST_MODE_HOJOKAMOKU = '02'

  /** 科目検索画面 起動モード03 */
  static ST_MODE_KAMOKU_HOJOKAMOKU = '03'

  /** 科目検索画面 起動モード04 */
  static ST_MODE_KAMOKU_CONTROL = '04'

  /** 組織検索項目キー 組織コード */
  static SEARCH_CD_SOSHIKI = 'cdSonekikanriSoshiki'

  /** 組織検索項目キー 上位組織コード */
  static SEARCH_CD_JOI_SOSHIKI = 'cdJoisonekikanriSoshiki'

  /** 組織検索項目キー 階層レベル */
  static SEARCH_SOSHIKI_NO_KAISO_LEVEL = 'noKaisolevel'

  /** 組織検索項目キー 組織名 */
  static SEARCH_NM_SOSHIKI = 'nmSonekikanriSoshiki'

  /** 組織検索項目キー 組織名略式 */
  static SEARCH_NM_SOSHIKI_RYAKU = 'nmSonekiSoshikiRyaku'

  /** 組織検索項目キー 従業員コード */
  static SEARCH_CD_JUGYOIN = 'cdJugyoin'

  /** 組織検索項目キー 従業員名（苗字） */
  static SEARCH_NM_JUGYOIN_MYOJI = 'nmJugyoinMyoji'

  /** 組織検索項目キー 従業員名（名前） */
  static SEARCH_NM_JUGYOIN_NAMAE = 'nmJugyoinNamae'

  /** 組織検索項目キー 従業員名（カナ） */
  static SEARCH_NM_JUGYOIN_KANA = 'nmJugyoinKana'

  /** 事業検索項目キー 製品群コード */
  static SEARCH_CD_SEIHINGUN = 'cdSeihingun'

  /** 事業検索項目キー 上位製品群コード */
  static SEARCH_CD_JOI_SEIHINGUN = 'cdJoiseihingun'

  /** 事業検索項目キー 階層レベル */
  static SEARCH_JIGYO_NO_KAISO_LEVEL = 'noKaisolevel'

  /** 事業検索項目キー 製品群名 */
  static SEARCH_NM_SEIHINGUN = 'nmSeihingun'

  /** 事業検索項目キー 製品群名略式 */
  static SEARCH_NM_SEIHINGUN_RYAKU = 'nmSeihingunRyakushiki'

  /** 事業検索項目キー 製品コード */
  static SEARCH_CD_SEIHIN = 'cdSeihin'

  /** 事業検索項目キー 製品名 */
  static SEARCH_NM_SEIHIN = 'nmSeihin'

  /** 事業検索項目キー 製品名略式 */
  static SEARCH_NM_SEIHIN_RYAKU = 'nmSeihinRyakushiki'

  /** 事業検索項目キー 代表製品コード */
  static SEARCH_CD_DAIHYO_SEIHIN = 'cdDaihyoseihin'

  /** 原材料検索項目キー 原材料群コード */
  static SEARCH_CD_GENZAIRYOGUN = 'cdGenzairyogun'

  /** 原材料検索項目キー 上位原材料群コード */
  static SEARCH_CD_JOI_GENZAIRYOGUN = 'cdJoigenzairyogun'

  /** 原材料検索項目キー 階層レベル */
  static SEARCH_GENZAIRYO_NO_KAISO_LEVEL = 'noKaisolevel'

  /** 原材料検索項目キー 原材料群名 */
  static SEARCH_NM_GENZAIRYOGUN = 'nmGenzairyogun'

  /** 原材料検索項目キー 原材料群名略式 */
  static SEARCH_NM_GENZAIRYOGUN_RYAKU = 'nmGenzairyogunRyaku'

  /** 原材料検索項目キー 原材料コード */
  static SEARCH_CD_GENZAIRYO = 'cdGenzairyo'

  /** 原材料検索項目キー 原材料名 */
  static SEARCH_NM_GENZAIRYO = 'nmGenzairyo'

  /** 原材料検索項目キー 原材料名略式 */
  static SEARCH_NM_GENZAIRYO_RYAKU = 'nmGenzairyoRyakushiki'

  /** 科目検索項目キー　科目コード */
  static SEARCH_CD_KAMOKU = 'cdKamoku'

  /** 科目検索項目キー 上位科目コード */
  static SEARCH_CD_JOIKAMOKU = 'cdJoikamoku'

  /** 科目検索項目キー 科目名 */
  static SEARCH_NM_KAMOKU = 'nmKamoku'

  /** 科目検索項目キー 科目名略式 */
  static SEARCH_NM_KAMOKU_RYAKU = 'nmKamokuRyaku'

  /** 科目検索項目キー 補助科目コード */
  static SEARCH_CD_HOJOKAMOKU = 'cdHojokamoku'

  /** 科目検索項目キー 補助科目名 */
  static SEARCH_NM_HOJOKAMOKU = 'nmHojokamoku'

  /** 科目検索項目キー　補助科目名略式 */
  static SEARCH_NM_HOJOKAMOKU_RYAKU = 'nmHojokamokuRyaku'

  /** 店検索項目キー 店群コード */
  static SEARCH_CD_TENGUN = 'cdTengun'

  /** 店検索項目キー 店群略式名称 */
  static SEARCH_NM_TENGUN_RYAKUSHIKI = 'nmTengunRyakushiki'

  /** 店検索項目キー 店コード */
  static SEARCH_CD_TEN = 'cdTen'

  /** 店検索項目キー 店略式名称 */
  static SEARCH_NM_TEN_RYAKUSHIKI = 'nmTenRyaku'

  /** チェーン検索項目キー チェーンコード */
  static SEARCH_CD_CHAIN = 'cdChain'

  /** チェーン検索項目キー チェーン略式名称 */
  static SEARCH_NM_CHAIN_RYAKUSHIKI = 'nmChainRyakusiki'

  /** 汎用検索ID チェーン検索 */
  static HANYO_SEARCH_CHAIN = 'GeneralSearch023'

  /** 汎用検索ID 製品群検索U */
  static HANYO_SEARCH_SEIHINGUN_2 = 'GeneralSearch038'

  /** 汎用検索ID 対策検索 */
  static HANYO_SEARCH_TAISAKU = 'GeneralSearch045'

  /** 汎用検索ID 損益管理組織検索V */
  static HANYO_SEARCH_SOSHIKI_3 = 'GeneralSearch056'

  /** 汎用検索ID 製品検索U */
  static HANYO_SEARCH_SEIHIN_2 = 'GeneralSearch057'

  /** 汎用検索ID 原材料群検索U */
  static HANYO_SEARCH_GENZAIRYOGUN_2 = 'GeneralSearch058'

  /** 汎用検索ID 原材料検索U */
  static HANYO_SEARCH_GENZAIRYO_2 = 'GeneralSearch059'

  /** 汎用検索ID 店群検索U */
  static HANYO_SEARCH_TENGUN_2 = 'GeneralSearch060'

  /** 汎用検索ID 店検索W */
  static HANYO_SEARCH_TEN_4 = 'GeneralSearch061'

  /** 汎用検索ID 取引先検索U */
  static HANYO_SEARCH_TORIHIKISAKI_2 = 'GeneralSearch062'

  /** 汎用検索ID 勘定科目検索U */
  static HANYO_SEARCH_KAMOKU_2 = 'GeneralSearch063'

  /** 汎用検索 SearchID */
  static HANYO_SEARCHID = 'searchID'

  /** 汎用検索 検索条件1 */
  static HANYO_CONDITION_1 = 'condition01'

  /** 汎用検索 検索条件2 */
  static HANYO_CONDITION_2 = 'condition02'

  /** 汎用検索 検索条件3 */
  static HANYO_CONDITION_3 = 'condition03'

  /** 汎用検索 検索条件4 */
  static HANYO_CONDITION_4 = 'condition03'

  /** 汎用検索 取得リスト */
  static HANYO_RESULT_LIST = 'resultList'

  /** 汎用検索 取得項目1 */
  static HANYO_RESULT_1 = 'result01'

  /** 汎用検索 取得項目2 */
  static HANYO_RESULT_2 = 'result02'

  /** 汎用検索 取得項目3 */
  static HANYO_RESULT_3 = 'result03'

  /** 汎用検索 取得項目4 */
  static HANYO_RESULT_4 = 'result04'

  /** 汎用検索 取得項目5 */
  static HANYO_RESULT_5 = 'result05'

  /** 汎用検索 取得項目6 */
  static HANYO_RESULT_6 = 'result06'

  /** 汎用検索 取得項目7 */
  static HANYO_RESULT_7 = 'result07'

  /** 汎用検索 取得項目8 */
  static HANYO_RESULT_8 = 'result08'

  /** 日付部品 未入力時の値(年月) */
  static DT_NENGETSU_EMPTY_VALUE = '000000'

  /** 日付部品 未入力時の値(年月日) */
  static DT_NENGAPPI_EMPTY_VALUE = '00000000'

  /** 初期表示処理の再実行を抑制するためのキー です。 */
  static KEY_SUPPRESS_BEFOREDISPLAY = 'suppressBeforedisplay'
}
