import { type Color } from '@/lib/native/awt/Color'
import { SMSColor } from '@/lib/sms/sol/sys/SMSColor'

/**
 * 帳票画面共通定数クラスです。
 * @version 0.1
 * @author  SNOW) 清見
 */
export class YBMCMNCommon {
  //++ コード値
  /** 倉庫コード初期値 です。 */
  static CD_SOKO_DEFAULT = '000'
  /** エリアコード初期値 です。 */
  static CD_AREA_DEFAULT = '000'
  /** ゾーンコード初期値 です。 */
  static CD_ZONE_DEFAULT = '000'
  //ADD 2006.03.20 START
  /** 論理削除フラグ（0:未削除) です。 */
  static FG_RONRISAKUNO_MISAKUJO = '0'
  /** 無効フラグ（0:有効) です。 */
  static FG_MUKOU_YUKOU = '0'
  /** 無効フラグ（1:無効) です。 */
  static FG_MUKOU_MUKOU = '1'
  /** 赤黒区分（01:赤) です。 */
  static ST_AKAKURO_AKA = '01'
  /** 赤黒区分（02:黒) です。 */
  static ST_AKAKURO_KURO = '02'
  //ADD 2006.03.20 END

  /**「処理区分」＝新規 */
  static SHORI_KUBUN_NEW = '01'
  /**「処理区分」＝修正 */
  static SHORI_KUBUN_EDIT = '02'
  /**「処理区分」＝削除 */
  static SHORI_KUBUN_DELETE = '03'
  /**「処理区分」＝複写 */
  static SHORI_KUBUN_COPY = '04'
  /**「処理区分」＝照会 */
  static SHORI_KUBUN_VIEW = '05'
  /**「処理区分」＝無視 */
  static SHORI_KUBUN_IGNORE = '99'
  /**「処理区分」＝無視行 */
  static SHORI_KUBUN_MUSHI_GYO = '06'
  /**「処理区分」＝未修正行 */
  static SHORI_KUBUN_MISYUSEI_GYO = '07'

  /**フラグの値 (1:ON) です。*/
  static FG_ON = '1'
  /**フラグの値 (0:OFF) です。*/
  static FG_OFF = '0'

  /** 品目コード識別区分 (02:原材料) です。*/
  static ST_HINMOKU_SHIKIBETU_GENZAIRYO = '02'

  //++ 数値
  /** 最大検索・取得件数のデフォルト値(99) です。 */
  static MAX_SELECT_CNT_DEFAULT = 99

  //++ 文字列
  /** 空文字 です。 */
  static STR_EMPTY = ''
  /** ハイフン(半角) です。 */
  static STR_HYPHEN = '-'
  /** スペース(半角) です。 */
  static STR_SPACE = ' '
  /** ゼロ文字(0) です。 */
  static STR_ZERO = '0'
  /** カンマ(,) です。 */
  static STR_COMMA = ','
  /** アンダーバー(_) です。 */
  static STR_UNDER_BAR = '_'
  /** スラッシュ(/) です。 */
  static STR_SLASH = '/'
  /** マイナス値("-1")文字列 です。 */
  static STR_MINUS = '-1'
  /** アスタリスク(*) です。 */
  static STR_ASTERISK = '*'
  /** 改行文字(\n) です。 */
  static STR_NEW_LINE = '\n'
  /** シングルクォーテーション(') です。 */
  static STR_SINGLE_QUOATATION = "'"
  /** CSVファイル拡張子(.csv) です。 */
  static STR_CSV_FILE_SUFFIX = '.csv'

  //ADD 2006.03.18 START
  //++ 帳票関連
  /** 帳票パラメータ区切り文字(|) です。 */
  static STR_VERTICAL_LINE = '|'
  /** 帳票処理依頼部品呼び出しVerb (同期) です。 */
  static PRINT_VERB_DOKI = 'syncPrint'
  /** 帳票処理依頼部品呼び出しVerb (非同期) です。 */
  static PRINT_VERB_HIDOKI = 'asyncPrint'
  //ADD 2006.03.18 END

  //++ その他
  /** [製品] 数量の最小単位文字列(ｺ) です。 */
  static SURYO_TANI_MIN = 'ｺ' //ADD 2006.03.15
  /** 数量単位文字列(CS) です。 */
  static SURYO_TANI_CASE = 'CS' //ADD 2006.03.20

  //++ チェック関連
  /** DBチェック(条件部)エラー識別キー です。 */
  static DB_CHK_ERROR = 'headerDBCheckErr' //ADD 2006.03.20 MOD 2006.03.23
  /** DBチェック(条件部)明細域のエラー識別キー です。 */
  static DB_CHK_ERROR_SPREAD = 'spreadDBCheckErr' //ADD 2006.04.05
  /** 警告色 です。 */
  static COLOR_WARNING: Color = SMSColor.ERROR //ADD 2006.04.05
  //ADD 2006.04.19 START
  /** DBチェックエラー情報HashMap エラー項目 キーです。 */
  static SERVER_ERR_ITEM_ID_KEY = 'server_checkErr_itemid_key'
  /** DBチェックエラー情報HashMap エラーメッセージ キーです。 */
  static SERVER_ERR_MSG_KEY = 'server_checkErr_errMsg_key'
  /** DBチェックエラー情報HashMap エラーメッセージ内容 キーです。 */
  static SERVER_ERR_MSG_PARAM_KEY = 'server_checkErr_errMsg_param_key'
  /** DBチェックエラー情報HashMap エラー項目ID配列 キーです。 */
  static SERVER_ERR_ITEM_ID_ARRAY_KEY = 'server_checkErr_itemid_array_key'

  //++ エラーメッセージ関連
  /********************************/
  /**YSDCMNMCW020用メッセージです。*/
  /********************************/
  /** 【エラーメッセージ】「削除フラグが付いている明細は登録できません」です。*/
  static ERROR_MSG_001 = '削除フラグが付いている明細は登録できません'
  /** 【エラーメッセージ】「明細に未入力項目があります」です。*/
  static ERROR_MSG_002 = '明細に未入力項目があります'
  /** 【エラーメッセージ】「登録する明細がありません」です。*/
  static ERROR_MSG_003 = '登録する明細がありません'
  /** 【エラーメッセージ】「既にオーダーが登録されてます。削除できませんでした。」です*/
  static ERROR_MSG_004 = '既にオーダーが登録されてます。削除できませんでした。'
  /** 【エラーメッセージ】「明細件数が100件を超えたため登録できませんでした。」です*/
  static ERROR_MSG_005 = '明細件数が100件を超えたため登録できませんでした。'
  //++ マスタ系固定項目
  /** 【マスタ論理削除 OFF】「論理削除フラグ OFF」*/
  static MST_SAKUJO_OFF = '0'
  /** 【マスタ論理削除 ON】 「論理削除フラグ ON」*/
  static MST_SAKUJO_ON = '1'

  //++ コンボボックスメッセージ関連
  /** 【コンボ表示メッセージ】「----」です。*/
  static COMBO_BRANK_YEAR = '----'
  /** 【コンボ表示メッセージ】「--」です。*/
  static COMBO_BRANK_MONTH = '--'
  /** 【コンボ表示メッセージ】「選択してください」です。*/
  static COMBO_MSG_CHOICE = '選択して下さい'
  /** 【コンボ表示メッセージ】「なし」です。*/
  static COMBO_MSG_NOTHING = '選択なし'
  /** 【コンボ表示メッセージ】「すべて」です。*/
  static COMBO_MSG_ALL = 'すべて'
  /** 【コンボ保持ID】「なし」用です。*/
  static COMBO_CD_NOTHING = '000000'
  /** 【コンボ保持ID】「すべて」用です*/
  static COMBO_CD_ALL = '999999'
}
