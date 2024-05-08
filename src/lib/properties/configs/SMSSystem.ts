// FWClib/properties/MSSWA/properties/common/SMSSystem.properties

export default {
  //  ファイル取得部品設定（ファイル取得クラス指定）
  FILE_ACCESSER: 'sms.sol.sys.SMSFileFSAccesser',

  //  CSV部品設定（デフォルト文字コード指定）
  CSV_CHARSET: 'Windows-31J',

  // 2014.03.04 change
  //  帳票CBSの名前
  // CBS_PRINT_NAME=SMSPrintCBS
  CBS_PRINT_NAME: 'SMSPrintCBS_MS',

  //  初期パスワード
  INITIAL_PASSWORD: 'PASSWORD',

  //  初期パスワード有効期間
  INITIAL_PW_VALIDIY_TERM: '7',

  //  パスワード有効期間
  VALIDITY_TERM: '90',

  //  警告を有効期限の何日前に行うか
  WARNING_PERIOD: '7',

  //  ログイン失敗回数上限
  LOGIN_FAILURETIME_LIMIT: '5',

  //  サービス状態チェックを行うかを指定します。
  // 　true　：　サービス状態チェックを行う。
  // 　false ：　サービス状態チェックを行わない。
  // SERVICE_STATE_CHECK=true

  //  ブラウザのウィンドウ数制限の設定を行います。
  // 　1　：　ウィンドウが1つのみに制限を行う。
  // 　0　：　ウィンドウ数の制限を行わない。
  // IS_SINGLE_WINDOW=0

  //  IPアドレスチェックの設定を行います。
  // 　1　：　IPアドレスのチェックを行う。
  // 　0　：　IPアドレスのチェックを行わない。
  // IP_ADDR_CHECK=0

  //  エラー表示スタイル(SMSText対応）
  // ERROR_STYLE=background-color : pink;
  // WARNING_STYLE=background-color : yellow;
  // DEFAULT_STYLE=background-color : white;

  // 2005.01.24 add
  //  SYSTEM_NAME=雪印基幹システムデモ

  // 2006.03.15 for Test
  //  タイムアウト迂回verb　※テスト時のみ
  //  ignore_TimeoutCheck_Verbs=execute
  //  ログインチェック迂回verb　※テスト時のみ
  //  ignore_LoginCheck_Verbs=execute

  // 2005.08.04 add
  // ログイン・ログアウト用CBS名
  LOGIN_CBS_NAME: 'YCSCMNCBS',

  // 2006.08.24 add
  // 強制ログインモード 0:同一端末以外の強制ログイン不許可 1:同一端末以外の強制ログイン許可
  FORCE_LOGIN: '0',

  // 2013.12.25 add
  // メール送信モード 0:送信しない 1:送信する
  MAIL_SEND: '0',
}
