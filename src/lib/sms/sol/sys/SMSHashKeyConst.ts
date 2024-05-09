/******************************************************************************
 * sms.sol.sys.SMSHashKeyConst
 *
 * プログラム名     : sms.sol.sys.SMSHashKeyConst
 * 担当者           : itac）郭澤宇
 *-----------------------------------------------------------------------------
 * 【修正履歴】
 * +-------+------------+-------------------+----------------------------------
 * | 版数  | 修正日     | 担当者            | 修正概要
 * +-------+------------+-------------------+----------------------------------
 * | 初版  | 2024/04/04 | itac）郭澤宇  | SMSHashKeyConst を新規作成
 * +-------+------------+-------------------+----------------------------------
 *
 * All Rights Reserved, Copyright (C) Fujitsu Limited & MEGMILK SNOW BRAND Co.,Ltd 2013-2025.
 **/
import { SMSSystemInfo } from './SMSSystemInfo'

/**
 * システムで使用するHashMapキーの定数です。
 * @author 販売管理WG
 */
export class SMSHashKeyConst {
  /** CBS名 */
  static PARAM_KEY_CBS_NAME = 'cbsName'
  /** コマンド名 */
  static PARAM_KEY_CBS_VERB = 'cbsVerb'

  //2014/01/24 システム統合開発プロジェクト Add Start
  /** サブシステムID（ */
  static PARAM_KEY_JCFEVENT_SUBSYSTEM = 'jcfSubsys'
  //2014/01/24 システム統合開発プロジェクト Add End
  /** 業務情報 */
  static PARAM_KEY_DATA = 'sys_data'
  /** 共通情報 */
  static PARAM_KEY_COMMON = 'sys_common'
  /** エラー情報 */
  static PARAM_KEY_ERROR_FLG = 'sys_error_flg'
  /** 発生した例外オブジェクト */
  static PARAM_KEY_THROWABLE = 'sys_throwable'
  /** エラー情報の成功であることを示す値 */
  static IS_SUCCESS = '0'
  /** エラー情報のエラーであることを示す値 */
  static IS_ERROR = '1'
  /** エラー情報の警告であることを示す値 */
  static IS_WARNING = '2'
  /** 警告キー */
  static WARNING_KEY = 'sys_warning_key'
  /** 警告メッセージキー */
  static WARNING_MSG_KEY = 'sys_warning_msg_key'
  /** 警告メッセージ内容キー */
  static WARNING_MSG_PARAM_KEY = 'sys_warning_msg_param_key'
  /** 警告ダイアログメッセージキー */
  static WARNING_DIALOG_MSG_KEY = 'YCSCMNMSC012'
  /** 警告メッセージ内容キー */
  static WARNING_POPUP_PARAM_KEY = 'sys_warning_popup_param_key'
  /** エラー画面遷移ユースケースID */
  static PARAM_KEY_ERROR_SCREENID = 'YCSCMNF010'
  /** 汎用検索ユースケースID */
  static PARAM_KEY_GENERALID = 'YCSCMNF060'
  /**汎用検索-選択項目取得キー */
  static GENE_SEARCH_RESULT = 'DLG_DATA'
  /**汎用検索-選択項目結果取得キー */
  static GENE_SEARCH_SPREAD_EVENT_POSITION = 'SPREAD_EVENT_POS'
  /**汎用検索警告メッセージ内容キー */
  static GENE_SEARCH_WARNING_MSG_PARAM_KEY = 'gene_search_warning_msg_param_key'
  /**汎用検索起動時検索 */
  static GENERA_SEARCH_START = 'general_search_start'
  /**業務画面から汎用検索項目にセットする値 */
  static GENERAL_VALUE = 'general_value'
  /**汎用検索項目の変更不可条件 */
  static GENERAL_ENABLE_CONS = 'general_enable_cons'
  /**汎用検索項目のリテラル条件パラメータ */
  static GENERAL_LITERAL_CONS = 'general_literal_cons'
  /** 汎用検索結果データに対する右トリム処理制御フラグ */
  static GENERAL_SEARCH_RESULT_RIGTHTRIM = 'general_search_result_righttrim'

  /**共通メッセージ値 */
  static PARAM_MSG_COMMON = 'commonMsg'
  /**ログ出力用クラス名称 */
  static PARAM_KEY_CLASS = 'class_name'
  /**ログ出力用メソッド名称 */
  static PARAM_KEY_METHOD = 'method_name'
  /**検索方向　次へ */
  static PARAM_KEY_FORWARD = 'param_key_forward'
  /**検索方向　前へ */
  static PARAM_KEY_REVERSE = 'param_key_reverse'
  /**検索方向  先頭 */
  static PARAM_KEY_TOP = 'param_key_top'
  /**検索方向　最終 */
  static PARAM_KEY_LAST = 'param_key_last'

  /** システム使用CBS名 */
  static CBSNM = 'SMSSYSCBS'
  /** システム使用CBS名帳票用 */
  static CBSPRNNM = SMSSystemInfo.getString('CBS_PRINT_NAME')

  /** ファイルアップロード用ファイル名 */
  static F_U_NMFILE = 'nmFile'
  /** ファイルアップロード用ファイルデータ */
  static F_U_FILELIST = 'ifUploadDataList'
  /** ファイルアップロード用処理依頼番号 */
  static F_U_NO_SYORI_IRAI = 'noShoriIrai'
  /** ファイルアップロード用メッセージ */
  static PARAM_MSG_FILEUPLOAD = 'fileUploadMsg'

  /** サブ画面例外情報用キー */
  static PARAM_KEY_SUB_ERROR = 'param_key_sub_error'

  /** サブシステム切替前スクリーンID用キー */
  static PARAM_KEY_BK_SCREEN = 'PARAM_KEY_BK_SCREEN'
  /** サブシステム切替前画面ID用キー */
  static PARAM_KEY_BK_GAMEN = 'PARAM_KEY_BK_GAMEN'
  /** サブシステム切替前サブシステムID用キー */
  static PARAM_KEY_BK_SUBSYSTEM = 'PARAM_KEY_BK_SUBSYSTEM'
  /** サブシステム切替時使用データ用キー */
  static PARAM_KEY_FW_SUBSYSTEM_DATA = 'PARAM_KEY_FW_SUBSYSTEM_DATA'
  /** サブシステム切替前ユースケースID用キー */
  static PARAM_KEY_BK_USECASE = 'PARAM_KEY_BK_USECASE'

  _getName(): string {
    return 'SMSHashKeyConst'
  }

  static _getName(): string {
    return 'SMSHashKeyConst'
  }

  _getType() {
    return SMSHashKeyConst as any
  }

  _getFullName(): string {
    return 'sms.sol.sys.SMSHashKeyConst'
  }

  static _getFullName(): string {
    return 'sms.sol.sys.SMSHashKeyConst'
  }
}
