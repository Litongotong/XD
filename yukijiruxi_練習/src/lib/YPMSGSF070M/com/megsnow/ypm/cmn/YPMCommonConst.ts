/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export namespace lib.com.megsnow.ypm.cmn {
  /**
   * @author Sora
   *
   * 生成されるコメントを変更したい場合は、ウィンドウ>設定>Java>テンプレート
   * の"typecomment"テンプレート変数を編集してください。
   * コメントを生成するかどうかについては、ウィンドウ>設定>Java>コード生成
   * で設定してください。
   * @class
   */
  export class YPMCommonConst {
    /**
     * 生産管理共通EJB
     */
    public static YPMCMNCBS: string = 'YPMCMNCBS'

    /**
     * 製造実行EJB(アプレット)
     */
    public static YPMSJSCBS: string = 'YPMSJSCBS'

    /**
     * 工場倉庫EJB(アプレット)
     */
    public static YPMGSSCBS: string = 'YPMGSSCBS'

    /**
     * 原料乳EJB(アプレット)
     */
    public static YPMGNSCBS: string = 'YPMGNSCBS'

    /**
     * 製造原価EJB(アプレット)
     */
    public static YPMSGSCBS: string = 'YPMSGSCBS'

    /**
     * 品質管理EJB(アプレット)
     */
    public static YPMHKSCBS: string = 'YPMHKSCBS'

    /**
     * 製品トレースEJB(アプレット)
     */
    public static YPMSTSCBS: string = 'YPMSTSCBS'

    /**
     * 勤休工数EJB(アプレット)
     */
    public static YPMKNSCBS: string = 'YPMKNSCBS'

    /**
     * システム共通
     */
    public static SMSSYSCBS: string = 'SMSSYSCBS'

    /**
     * 端数製品取得VERB
     */
    public static VERB_GET_HASUSEIHIN: string =
      'YPMCommonCBSHandler.getHasuSeihin'

    /**
     * 工場・在庫場所一覧取得VERB
     */
    public static VERB_GET_KOJO_ZAIKO_BASHO_ICHIRAN: string =
      'YPMCommonCBSHandler.getKojoZaikoBashoIchiran'

    /**
     * データ処理区分 : 更新
     */
    public static STDATASHORI_KOSHIN: string = 'U'

    /**
     * データ処理区分 : 新規
     */
    public static STDATASHORI_CREATE: string = 'C'

    /**
     * データ処理区分 : 削除
     */
    public static STDATASHORI_SAKUJO: string = 'D'

    /**
     * ボディパネルフレームＩＤ
     */
    public static FLM_MAIN_BODY: string = 'FLM_MAIN_BODY'

    /**
     * フッタパネルフレームＩＤ
     */
    public static FLM_MAIN_HEAD: string = 'FLM_MAIN_HEAD'

    /**
     * ヘッダパネルフレームＩＤ
     */
    public static FLM_MAIN_FOOT: string = 'FLM_MAIN_FOOT'

    /**
     * 共通
     */
    public static YPMCMN: string = 'YPMCMN'

    /**
     * 製造実行
     */
    public static YPMSJS: string = 'YPMSJS'

    /**
     * 工場倉庫
     */
    public static YPMGSS: string = 'YPMGSS'

    /**
     * 製品トレース
     */
    public static YPMSTS: string = 'YPMSTS'

    /**
     * 製造原価
     */
    public static YPMSGS: string = 'YPMSGS'

    /**
     * 原料乳
     */
    public static YPMGNS: string = 'YPMGNS'

    /**
     * 品質管理
     */
    public static YPMHKS: string = 'YPMHKS'

    /**
     * 勤休工数
     */
    public static YPMKNS: string = 'YPMKNS'

    /**
     * 名称取得補間プロパティキー値
     */
    public static _SCREEN_NAME: string = '_SCREEN_NAME'

    /**
     * 最大検索件数プロパティキー値
     */
    public static _MAX_SELECT_CNT: string = '_MAX_SELECT_CNT'

    /**
     * デフォルトの最大件数
     */
    public static DEF_MAX_SELECT_CNT: string = '100'

    /**
     * 戻る：変更中のデータがあります。変更内容が適用されませんがよろしいですか？
     */
    public static MSGID_BACK: string
    public static MSGID_BACK_$LI$(): string {
      if (YPMCommonConst.MSGID_BACK == null) {
        YPMCommonConst.MSGID_BACK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YPMGNSMCI006
      }
      return YPMCommonConst.MSGID_BACK
    }

    /**
     * メニュー：変更中のデータがあります。変更内容が適用されませんがよろしいですか？
     */
    public static MSGID_MENU: string
    public static MSGID_MENU_$LI$(): string {
      if (YPMCommonConst.MSGID_MENU == null) {
        YPMCommonConst.MSGID_MENU =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YPMGNSMCI006
      }
      return YPMCommonConst.MSGID_MENU
    }

    /**
     * 業務終了：変更中のデータがあります。変更内容が適用されませんがよろしいですか？
     */
    public static MSGID_EXIT: string
    public static MSGID_EXIT_$LI$(): string {
      if (YPMCommonConst.MSGID_EXIT == null) {
        YPMCommonConst.MSGID_EXIT =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YPMGNSMCI006
      }
      return YPMCommonConst.MSGID_EXIT
    }

    /**
     * 0件：検索が終了しましたが該当するデータがみつかりません。検索条件を見直して下さい。
     */
    public static MSGID_NO_DATA: string
    public static MSGID_NO_DATA_$LI$(): string {
      if (YPMCommonConst.MSGID_NO_DATA == null) {
        YPMCommonConst.MSGID_NO_DATA =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSW056
      }
      return YPMCommonConst.MSGID_NO_DATA
    }

    /**
     * データ破棄：変更中のデータがあります。変更内容が適用されませんがよろしいですか？
     */
    public static MSGID_DATA_HAKI: string
    public static MSGID_DATA_HAKI_$LI$(): string {
      if (YPMCommonConst.MSGID_DATA_HAKI == null) {
        YPMCommonConst.MSGID_DATA_HAKI =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YPMGNSMCI006
      }
      return YPMCommonConst.MSGID_DATA_HAKI
    }

    /**
     * 「&1を入力してください。」
     */
    public static MSGID_DATA_NYURYOKU: string
    public static MSGID_DATA_NYURYOKU_$LI$(): string {
      if (YPMCommonConst.MSGID_DATA_NYURYOKU == null) {
        YPMCommonConst.MSGID_DATA_NYURYOKU =
          com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCA002
      }
      return YPMCommonConst.MSGID_DATA_NYURYOKU
    }

    /**
     * 変更データ無し：データが変更されていません。
     */
    public static MSGID_NO_CHANGE_DATA: string
    public static MSGID_NO_CHANGE_DATA_$LI$(): string {
      if (YPMCommonConst.MSGID_NO_CHANGE_DATA == null) {
        YPMCommonConst.MSGID_NO_CHANGE_DATA =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YPMGNSMCI009
      }
      return YPMCommonConst.MSGID_NO_CHANGE_DATA
    }

    /**
     * 登録確認：登録処理を実行します。よろしいですか？
     */
    public static MSGID_REGIST: string
    public static MSGID_REGIST_$LI$(): string {
      if (YPMCommonConst.MSGID_REGIST == null) {
        YPMCommonConst.MSGID_REGIST =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSC001
      }
      return YPMCommonConst.MSGID_REGIST
    }

    /**
     * 正常終了：登録が完了しました。
     */
    public static MSGID_REGIST_OK: string
    public static MSGID_REGIST_OK_$LI$(): string {
      if (YPMCommonConst.MSGID_REGIST_OK == null) {
        YPMCommonConst.MSGID_REGIST_OK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YPMCMNMCI005
      }
      return YPMCommonConst.MSGID_REGIST_OK
    }

    /**
     * その他の登録エラー：登録に失敗しました。
     */
    public static MSGID_REGIST_NG: string
    public static MSGID_REGIST_NG_$LI$(): string {
      if (YPMCommonConst.MSGID_REGIST_NG == null) {
        YPMCommonConst.MSGID_REGIST_NG =
          com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCE006
      }
      return YPMCommonConst.MSGID_REGIST_NG
    }

    /**
     * 必須入力：&1が入力されていません。入力必須項目なので必ず入力してください。
     */
    public static MSGID_HISSU_CHECK: string
    public static MSGID_HISSU_CHECK_$LI$(): string {
      if (YPMCommonConst.MSGID_HISSU_CHECK == null) {
        YPMCommonConst.MSGID_HISSU_CHECK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW025
      }
      return YPMCommonConst.MSGID_HISSU_CHECK
    }

    /**
     * 桁数：&1は&2桁で入力して下さい。
     */
    public static MSGID_KETASU_CHECK: string
    public static MSGID_KETASU_CHECK_$LI$(): string {
      if (YPMCommonConst.MSGID_KETASU_CHECK == null) {
        YPMCommonConst.MSGID_KETASU_CHECK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMCW028
      }
      return YPMCommonConst.MSGID_KETASU_CHECK
    }

    /**
     * マスタ存在：入力された&1が&2に登録されていません。
     */
    public static MSGID_MASTER_CHECK: string
    public static MSGID_MASTER_CHECK_$LI$(): string {
      if (YPMCommonConst.MSGID_MASTER_CHECK == null) {
        YPMCommonConst.MSGID_MASTER_CHECK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YCSCMNMSW052
      }
      return YPMCommonConst.MSGID_MASTER_CHECK
    }

    /**
     * マスタ存在：&1マスタにデータが存在しません。
     */
    public static MSGID_NOT_MASTER_DATA: string
    public static MSGID_NOT_MASTER_DATA_$LI$(): string {
      if (YPMCommonConst.MSGID_NOT_MASTER_DATA == null) {
        YPMCommonConst.MSGID_NOT_MASTER_DATA =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YPMCMNMCW102
      }
      return YPMCommonConst.MSGID_NOT_MASTER_DATA
    }

    /**
     * 日付過去：&1は&2より過去の日付は入力できません。
     */
    public static MSGID_DATE_KAKO_CHECK: string
    public static MSGID_DATE_KAKO_CHECK_$LI$(): string {
      if (YPMCommonConst.MSGID_DATE_KAKO_CHECK == null) {
        YPMCommonConst.MSGID_DATE_KAKO_CHECK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCE044
      }
      return YPMCommonConst.MSGID_DATE_KAKO_CHECK
    }

    /**
     * 日付未来：&1は&2より未来の日付は入力できません。
     */
    public static MSGID_DATE_MIRAI_CHECK: string
    public static MSGID_DATE_MIRAI_CHECK_$LI$(): string {
      if (YPMCommonConst.MSGID_DATE_MIRAI_CHECK == null) {
        YPMCommonConst.MSGID_DATE_MIRAI_CHECK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCE045
      }
      return YPMCommonConst.MSGID_DATE_MIRAI_CHECK
    }

    /**
     * 日付範囲異常：「&1」は&2〜&3の範囲で入力して下さい。
     */
    public static MSGID_DATE_RANGE_CHECK: string
    public static MSGID_DATE_RANGE_CHECK_$LI$(): string {
      if (YPMCommonConst.MSGID_DATE_RANGE_CHECK == null) {
        YPMCommonConst.MSGID_DATE_RANGE_CHECK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCA104
      }
      return YPMCommonConst.MSGID_DATE_RANGE_CHECK
    }

    /**
     * 日付/時刻逆転チェック:「&1」の範囲指定に誤りがあります。（From>To）
     */
    public static MSGID_DATE_GYAKUTEN_CHECK: string
    public static MSGID_DATE_GYAKUTEN_CHECK_$LI$(): string {
      if (YPMCommonConst.MSGID_DATE_GYAKUTEN_CHECK == null) {
        YPMCommonConst.MSGID_DATE_GYAKUTEN_CHECK =
          com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCE046
      }
      return YPMCommonConst.MSGID_DATE_GYAKUTEN_CHECK
    }

    /**
     * 登録可否:表示中のデータはログイン者の所属する工場のデータではないため、参照のみとなります。
     */
    public static MSGID_REGIST_KENGEN: string
    public static MSGID_REGIST_KENGEN_$LI$(): string {
      if (YPMCommonConst.MSGID_REGIST_KENGEN == null) {
        YPMCommonConst.MSGID_REGIST_KENGEN =
          com.fujitsu.sms.sol.sys.SMSMessageConst.YPMGNSMCI005
      }
      return YPMCommonConst.MSGID_REGIST_KENGEN
    }

    /**
     * 「&1」には入力できない文字が含まれています。
     */
    public static MSGID_KINSOKU: string
    public static MSGID_KINSOKU_$LI$(): string {
      if (YPMCommonConst.MSGID_KINSOKU == null) {
        YPMCommonConst.MSGID_KINSOKU =
          com.fujitsu.sms.sol.sys.SMSMessageConst.SMSCMNMCA015
      }
      return YPMCommonConst.MSGID_KINSOKU
    }

    /**
     * 開始：1951/01/01
     */
    public static START_YYYYMMDD: string = '1951/01/01'

    /**
     * 終了：2050/12/31
     */
    public static END_YYYYMMDD: string = '2050/12/31'

    /**
     * 開始：1951/01
     */
    public static START_YYYYMM: string = '1951/01'

    /**
     * 終了：2050/12
     */
    public static END_YYYYMM: string = '2050/12'

    /**
     * 開始：1951
     */
    public static START_YYYY: string = '1951'

    /**
     * 終了：2050
     */
    public static END_YYYY: string = '2050'

    /**
     * メッセージタイプ(年月日)
     */
    public static YYYYMMDD: number = 1

    /**
     * メッセージタイプ(年月)
     */
    public static YYYYMM: number = 2

    /**
     * メッセージタイプ(年)
     */
    public static YYYY: number = 3

    /**
     * 文字列：件数ラベル０件
     */
    public static LABEL_ZERO: string = '0'

    /**
     * 文字列：件数ラベル初期化
     */
    public static LABEL_INIT: string = ''

    /**
     * 固定文字列：EMPTY
     */
    public static STR_EMPTY: string = ''

    /**
     * 固定文字列：全て
     */
    public static STR_ALL: string = '\u5168\u3066'

    /**
     * 固定文字列：製品
     */
    public static STR_ST_SEIHIN: string = '01'

    /**
     * 固定文字列：原材料
     */
    public static STR_ST_GENZAIRYO: string = '02'

    /**
     * 固定文字列：true
     */
    public static STR_TRUE: string = 'true'

    /**
     * 固定文字列：false
     */
    public static STR_FALSE: string = 'false'

    /**
     * 固定文字列：0
     */
    public static FLG_0: string = '0'

    /**
     * 固定文字列：1
     */
    public static FLG_1: string = '1'

    /**
     * 日付入力無し
     */
    public static DT_NULL: string = '00000000'

    /**
     * 汎用検索VERB
     */
    public static VERB_FIND: string = 'find'

    /**
     * 汎用検索結果キー
     */
    public static KEY_GENE_RESULT: string = 'resultList'

    /**
     * 汎用検索IDキー
     */
    public static KEY_GENE_SEARCH_ID: string = 'searchID'

    /**
     * 汎用検索：在庫(GeneralSearch071)
     */
    public static GENE_SEARCH_ZAIKO: string = 'GeneralSearch071'

    /**
     * 汎用検索：原材料(GeneralSearch007)
     */
    public static GENE_SEARCH_GENZAIRYO: string = 'GeneralSearch007'

    /**
     * 汎用検索：原材料(GeneralSearch007)：製品コード
     */
    public static KEY_GENE_SEARCH_GENZAIRYO_I_CD_GENZAIRYO: string =
      'condition03'

    /**
     * 汎用検索：原材料(GeneralSearch007)：適用日
     */
    public static KEY_GENE_SEARCH_GENZAIRYO_I_DT_TEKIYO: string = 'condition07'

    /**
     * 汎用検索原材料(GeneralSearch007)：原材料名称
     */
    public static KEY_GENE_SEARCH_GENZAIRYO_O_NM_GENZAIRYO: string = 'result04'

    /**
     * 汎用検索原材料(GeneralSearch007)：原材料略式名称
     */
    public static KEY_GENE_SEARCH_GENZAIRYO_O_NM_GENZAIRYO_RYAKU: string =
      'result05'

    /**
     * 汎用検索：原材料3(GeneralSearch072)
     */
    public static GENE_SEARCH_GENZAIRYO3: string = 'GeneralSearch072'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：製品コード
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_I_CD_GENZAIRYO: string =
      'condition01'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：原材料名称
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_NM_GENZAIRYO: string = 'result02'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：原材料略式名称
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_NM_GENZAIRYO_RYAKU: string =
      'result03'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：数量単位１
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_IF_SURYOTANI_1: string =
      'result04'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：数量単位2
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_IF_SURYOTANI_2: string =
      'result05'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：受払単位
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_IF_UKEHARAITANI: string =
      'result06'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：容量単位
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_IF_YORYOTANI: string = 'result07'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：容量
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_QT_YORYO: string = 'result08'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：カートン入数
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_QT_KATON_IRISU: string =
      'result09'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：カートン使用フラグ
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_FG_KATONSHIYOU: string =
      'result10'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：品質保持期間
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_NU_HINSHITSUHOJI_KIKAN: string =
      'result11'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：品質保持管理区分
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_ST_HINSHITSUHOJI_KANRI: string =
      'result12'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：不定貫フラグ
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_FG_FUTEIKAN: string = 'result13'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：ロット管理フラグ
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_FG_LOT_KANRI: string = 'result14'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：サブロット管理フラグ
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_FG_SUBLOT_KANRI: string =
      'result15'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：自家生産フラグ
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_FG_JIKASEISAN: string =
      'result17'

    /**
     * 汎用検索：原材料3(GeneralSearch072)：間接投入品フラグ
     */
    public static KEY_GENE_SEARCH_GENZAIRYO3_O_FG_KANSETSU_TONYU: string =
      'result18'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)
     */
    public static GENE_SEARCH_CHOZOHIN2: string = 'GeneralSearch073'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：貯蔵品コード
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_I_CD_CHOZOHIN: string =
      'condition01'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：貯蔵品区分
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_I_ST_CHOZOHIN: string =
      'condition04'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：貯蔵品名称
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_NM_CHOZOHIN: string = 'result02'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：貯蔵品略式名称
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_NM_CHOZOHIN_RYAKU: string =
      'result03'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：貯蔵品区分
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_ST_CHOZOHIN: string = 'result04'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：数量単位1
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_IF_SURYOTANI_1: string =
      'result05'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：数量単位2
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_IF_SURYOTANI_2: string =
      'result06'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：受払単位
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_IF_UKEHARAITANI: string =
      'result07'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：容量単位
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_IF_YORYOTANI: string = 'result08'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：容量
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_QT_YORYO: string = 'result09'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：入数
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_QT_IRISU: string = 'result10'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：品質保持期間
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_NU_HINSHITSUHOJI_KIKAN: string =
      'result11'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：品質保持管理区分
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_ST_HINSHITSUHOJI_KANRI: string =
      'result12'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：ロット管理フラグ
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_FG_LOT_KANRI: string = 'result13'

    /**
     * 汎用検索：貯蔵品2(GeneralSearch073)：サブロット管理フラグ
     */
    public static KEY_GENE_SEARCH_CHOZOHIN2_O_FG_SUBLOT_KANRI: string =
      'result14'

    /**
     * 汎用検索：製品(GeneralSearch016)
     */
    public static GENE_SEARCH_SEIHIN: string = 'GeneralSearch016'

    /**
     * 汎用検索：製品(GeneralSearch016)：製品コード
     */
    public static KEY_GENE_SEARCH_SEIHIN_I_CD_SEIHIN: string = 'condition03'

    /**
     * 汎用検索：製品(GeneralSearch016)：適用日
     */
    public static KEY_GENE_SEARCH_SEIHIN_I_DT_TEKIYO: string = 'condition10'

    /**
     * 汎用検索：製品(GeneralSearch016)：製品名称
     */
    public static KEY_GENE_SEARCH_SEIHIN_O_NM_SEIHIN: string = 'result04'

    /**
     * 汎用検索：製品(GeneralSearch016)：製品略式名称
     */
    public static KEY_GENE_SEARCH_SEIHIN_O_NM_SEIHIN_RYAKU: string = 'result05'

    /**
     * 汎用検索：製品(GeneralSearch016)：受払単位
     */
    public static KEY_GENE_SEARCH_SEIHIN_O_IF_UKEHARAITANI: string = 'result12'

    /**
     * 汎用検索：製品(GeneralSearch016)：数量単位１
     */
    public static KEY_GENE_SEARCH_SEIHIN_O_IF_SURYOTANI1: string = 'result18'

    /**
     * 汎用検索：製品(GeneralSearch016)：数量単位２
     */
    public static KEY_GENE_SEARCH_SEIHIN_O_IF_SURYOTANI2: string = 'result19'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)
     */
    public static GENE_SEARCH_SEIHIN4: string = 'GeneralSearch067'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：製品コード
     */
    public static KEY_GENE_SEARCH_SEIHIN4_I_CD_SEIHIN: string = 'condition01'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：製品名称
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_NM_SEIHIN: string = 'result02'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：製品略式名称
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_NM_SEIHIN_RYAKU: string = 'result03'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：製品区分
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_ST_SEIHIN: string = 'result04'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：数量単位１
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_IF_SURYOTANI_1: string = 'result05'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：数量単位２
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_IF_SURYOTANI_2: string = 'result06'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：受払単位
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_IF_UKEHARAITANI: string = 'result07'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：容量単位
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_IF_YORYOTANI: string = 'result08'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：容量
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_QT_YORYO: string = 'result09'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：入数
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_QT_IRISU: string = 'result10'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：賞味期間
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_IF_SHOMIKIKAN: string = 'result11'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：規格端数不定管理区分
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_ST_FUTEIKAN_KANRI: string =
      'result12'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：サブロット管理フラグ
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_FG_SUBLOT_KANRI: string = 'result13'

    /**
     * 汎用検索：製品検索�W(GeneralSearch067)：ケース管理Noフラグ
     */
    public static KEY_GENE_SEARCH_SEIHIN4_O_FG_CASE_KANRI: string = 'result14'

    /**
     * 汎用検索：製品(GeneralSearch116)
     */
    public static GENE_SEARCH_SEIHIN2: string = 'GeneralSearch161'

    /**
     * 汎用検索：製品(GeneralSearch116)：製品コード
     */
    public static KEY_GENE_SEARCH_SEIHIN2_I_CD_SEIHIN: string = 'condition01'

    /**
     * 汎用検索：製品検索(GeneralSearch161)：製品区分
     */
    public static KEY_GENE_SEARCH_SEIHIN4_I_ST_SEIHIN: string = 'condition05'

    /**
     * 汎用検索：製品(GeneralSearch116)：適用日
     */
    public static KEY_GENE_SEARCH_SEIHIN2_I_DT_TEKIYO: string = 'condition06'

    /**
     * 汎用検索：製品(GeneralSearch116)：製品名称
     */
    public static KEY_GENE_SEARCH_SEIHIN2_O_NM_SEIHIN: string = 'result02'

    /**
     * 汎用検索：製品(GeneralSearch116)：製品略式名称
     */
    public static KEY_GENE_SEARCH_SEIHIN2_O_NM_SEIHIN_RYAKU: string = 'result03'

    /**
     * 汎用検索：製品(GeneralSearch116)：容量
     */
    public static KEY_GENE_SEARCH_SEIHIN2_O_QT_YORYO: string = 'result05'

    /**
     * 汎用検索：製品(GeneralSearch116)：入数
     */
    public static KEY_GENE_SEARCH_SEIHIN2_O_QT_IRISU: string = 'result06'

    /**
     * 汎用検索：製品(GeneralSearch108)
     */
    public static GENE_SEARCH_SEIHIN108: string = 'GeneralSearch108'

    /**
     * 汎用検索：製品(GeneralSearch108)：製品コード
     */
    public static KEY_GENE_SEARCH_SEIHIN108_I_CD_SEIHIN: string = 'condition01'

    /**
     * 汎用検索：製品検索(GeneralSearch108)：製品区分
     */
    public static KEY_GENE_SEARCH_SEIHIN108_I_ST_SEIHIN: string = 'condition05'

    /**
     * 汎用検索：製品(GeneralSearch108)：適用日
     */
    public static KEY_GENE_SEARCH_SEIHIN108_I_DT_TEKIYO: string = 'condition06'

    /**
     * 汎用検索：製品(GeneralSearch108)：製品名称
     */
    public static KEY_GENE_SEARCH_SEIHIN108_O_NM_SEIHIN: string = 'result02'

    /**
     * 汎用検索：製品(GeneralSearch108)：製品略式名称
     */
    public static KEY_GENE_SEARCH_SEIHIN108_O_NM_SEIHIN_RYAKU: string =
      'result03'

    /**
     * 汎用検索：製品(GeneralSearch108)：受注製品ｺｰﾄﾞ
     */
    public static KEY_GENE_SEARCH_SEIHIN108_O_CD_JUCHUSEIHIN: string =
      'result04'

    /**
     * 汎用検索：製品(GeneralSearch108)：品目区分
     */
    public static KEY_GENE_SEARCH_SEIHIN108_O_ST_HINMOKU_CD_SHIKIBETSU: string =
      'result05'

    /**
     * ハッシュキー：受注製品コード(マスタチェック)
     */
    public static KEY_CD_JUCHUSEIHIN: string = 'cdJuchuseihin'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)
     */
    public static GENE_SEARCH_DAIHYO_SEIHIN_KUMI: string = 'GeneralSearch130'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)：代表製品組コード(＝条件)
     */
    public static KEY_GENE_SEARCH_SEIHIN130_I_CD_DAIHYO_SEIHIN_KUMI: string =
      'condition01'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)：代表製品組名称(like条件)
     */
    public static KEY_GENE_SEARCH_SEIHIN130_I_NM_DAIHYO_SEIHIN_KUMI: string =
      'condition02'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)：原料乳用途コード(＝条件)
     */
    public static KEY_GENE_SEARCH_SEIHIN130_I_CD_GENRYONYU_YOTO: string =
      'condition03'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)：原料乳用途名称(like条件)
     */
    public static KEY_GENE_SEARCH_SEIHIN130_I_NM_GENRYONYU_YOTO: string =
      'condition04'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)：取得値 代表製品組名称
     */
    public static KEY_GENE_SEARCH_SEIHIN130_O_CD_DAIHYO_SEIHIN_KUMI: string =
      'result01'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)：取得値 代表製品組名称
     */
    public static KEY_GENE_SEARCH_SEIHIN130_O_NM_DAIHYO_SEIHIN_KUMI: string =
      'result02'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)：取得値 原料乳用途コード
     */
    public static KEY_GENE_SEARCH_SEIHIN130_O_CD_GENRYONYU_YOTO: string =
      'result03'

    /**
     * 汎用検索：代表製品組(GeneralSearch130)：取得値 原料乳用途名称
     */
    public static KEY_GENE_SEARCH_SEIHIN130_O_NM_GENRYONYU_YOTO: string =
      'result04'

    /**
     * 汎用検索：倉庫(GeneralSearch019)
     */
    public static GENE_SEARCH_SOKO: string = 'GeneralSearch019'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：工場・在庫場所コード
     */
    public static KEY_GENE_SEARCH_SOKO_I_CD_KOJO_ZAIKO_BASHO: string =
      'condition01'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：倉庫コード
     */
    public static KEY_GENE_SEARCH_SOKO_I_CD_SOKO: string = 'condition03'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：エリアコード
     */
    public static KEY_GENE_SEARCH_SOKO_I_CD_AREA: string = 'condition05'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：ゾーンコード
     */
    public static KEY_GENE_SEARCH_SOKO_I_CD_ZONE: string = 'condition07'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：倉庫名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_SOKO: string = 'result04'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：倉庫略式名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_SOKO_RYAKU: string = 'result05'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：エリア名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_AREA: string = 'result07'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：エリア略式名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_AREA_RYAKU: string = 'result08'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：ゾーン名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_ZONE: string = 'result10'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：ゾーン略式名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_ZONE_RYAKU: string = 'result11'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：倉庫表示名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_SOKO_HYOJI: string = 'result12'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：エリア表示名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_AREA_HYOJI: string = 'result13'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：ゾーン表示名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_ZONE_HYOJI: string = 'result14'

    /**
     * 汎用検索：倉庫(GeneralSearch019)：表示名称
     */
    public static KEY_GENE_SEARCH_SOKO_O_NM_ZONE_HYOJI1: string = 'result15'

    /**
     * 汎用検索：工場・在庫場所(GeneralSearch012)
     */
    public static GENE_SEARCH_KOJO_ZAIKOBASHO: string = 'GeneralSearch012'

    /**
     * 汎用検索：工場・在庫場所(GeneralSearch012)：工場・在庫場所コード
     */
    public static KEY_GENE_SEARCH_KOJOZAIKO_I_CD_KOJO_ZAIKO_BASHO: string =
      'condition01'

    /**
     * 汎用検索：工場・在庫場所(GeneralSearch012)：工場・在庫場所区分
     */
    public static KEY_GENE_SEARCH_KOJOZAIKO_I_ST_KOJO_ZAIKO_BASHO: string =
      'condition03'

    /**
     * 汎用検索：工場・在庫場所(GeneralSearch012)：工場・在庫場所名称
     */
    public static KEY_GENE_SEARCH_KOJOZAIKO_O_NM_KOJO_ZAIKO_BASHO: string =
      'result02'

    /**
     * 汎用検索：工場・在庫場所(GeneralSearch012)：工場・在庫場所略名
     */
    public static KEY_GENE_SEARCH_KOJOZAIKO_O_NM_KOJO_ZAIKO_BASHO_RYAKU: string =
      'result03'

    /**
     * 汎用検索：取引先(GeneralSearch027)
     */
    public static GENE_SEARCH_TORIHIKISAKI: string = 'GeneralSearch027'

    /**
     * 汎用検索：取引先(GeneralSearch027)：取引先コード
     */
    public static KEY_GENE_SEARCH_TORIHIKISAKI_I_CD_TORIHIKISAKI: string =
      'condition01'

    /**
     * 汎用検索：取引先(GeneralSearch027)
     */
    public static KEY_GENE_SEARCH_TORIHIKISAKI_I_DT_TEKIYO: string =
      'condition06'

    /**
     * 汎用検索：取引先(GeneralSearch027)：取引先名称
     */
    public static KEY_GENE_SEARCH_TORIHIKISAKI_O_NM_TORIHIKISAKI: string =
      'result02'

    /**
     * 汎用検索：取引先(GeneralSearch027)：取引先略式名称
     */
    public static KEY_GENE_SEARCH_TORIHIKISAKI_O_NM_TORIHIKISAKI_RYAKU: string =
      'result07'

    /**
     * 汎用検索：ラベル出力先検索(GeneralSearch077)
     */
    public static GENE_SEARCH_LABEL_SHUTSURYOKUSAKI: string = 'GeneralSearch077'

    /**
     * 汎用検索：ラベル出力先検索(GeneralSearch077)：工場・在庫場所コード
     */
    public static KEY_GENE_SEARCH_LABEL_SHUTSURYOKUSAKI_I_CD_KOJO_ZAIKO_BASHO: string =
      'cdKojo'

    /**
     * 汎用検索：ラベル出力先検索(GeneralSearch077)：プリンターＩＤ
     */
    public static KEY_GENE_SEARCH_LABEL_SHUTSURYOKUSAKI_I_ID_PRINTER: string =
      'cdPrinterId'

    /**
     * 汎用検索：ラベル出力先検索(GeneralSearch077)：ラベル区分
     */
    public static KEY_GENE_SEARCH_LABEL_SHUTSURYOKUSAKI_I_ST_LABEL: string =
      'stLabel'

    /**
     * 汎用検索：ラベル出力先検索(GeneralSearch077)：プリンター名称
     */
    public static KEY_GENE_SEARCH_LABEL_SHUTSURYOKUSAKI_O_NM_PRINTER: string =
      'nmRonri'

    /**
     * 汎用検索：管理工程検索�U(GeneralSearch085)
     */
    public static GENE_SEARCH_KARIKOTEI_2: string = 'GeneralSearch085'

    /**
     * 汎用検索：管理工程検索�U(GeneralSearch085)：管理工程コード
     */
    public static KEY_GENE_SEARCH_KANRIKOTEI_2_I_CD_KANRIKOTEI: string =
      'condition01'

    /**
     * 汎用検索：管理工程検索�U(GeneralSearch085)：管理工程名称
     */
    public static KEY_GENE_SEARCH_KANRIKOTEI_2_O_NM_KANRIKOTEI: string =
      'nmKanrikotei'

    /**
     * 汎用検索：管理工程検索�U(GeneralSearch085)：組織コード(L3)
     */
    public static KEY_GENE_SEARCH_KANRIKOTEI_2_I_CD_SONEKIKANRI_SOSHIKI: string =
      'condition03'

    /**
     * 汎用検索：管理工程検索�U(GeneralSearch085)：組織コード(L3)
     */
    public static KEY_GENE_SEARCH_KANRIKOTEI_2_O_CD_SONEKIKANRI_SOSHIKI: string =
      'cdSonekiSoshiki3'

    /**
     * 汎用検索：管理工程検索�U(GeneralSearch085)：組織名称(L3)
     */
    public static KEY_GENE_SEARCH_KANRIKOTEI_2_O_NM_SONEKI_SOSHIKI: string =
      'nmSonekiSoshiki3'

    /**
     * 汎用検索：管理工程検索�U(GeneralSearch085)：工場コード
     */
    public static KEY_GENE_SEARCH_KANRIKOTEI_2_I_CD_KOJO_ZAIKO_BASHO: string =
      'condition05'

    /**
     * 汎用検索：管理工程検索�U(GeneralSearch085)：適用日
     */
    public static KEY_GENE_SEARCH_KANRIKOTEI_2_I_DT_TEKIYO: string =
      'condition06'

    /**
     * 汎用検索：損益管理組織検索�W(GeneralSearch065)
     */
    public static GENE_SEARCH_SONEKIKANRI_SOSHIKI_4: string = 'GeneralSearch065'

    /**
     * 汎用検索：損益管理組織検索�W(GeneralSearch065)：損益コード(L3)
     */
    public static GENE_SEARCH_SONEKIKANRI_SOSHIKI_4_I_CD_SONEKI_SOSHIKI: string =
      'cdKojoZaikoBasho'

    /**
     * 汎用検索：損益管理組織検索�W(GeneralSearch065)：損益名称(L3)
     */
    public static GENE_SEARCH_SONEKIKANRI_SOSHIKI_4_O_NM_SONEKI_SOSHIKI: string =
      'nmKojoZaikoBasho'

    /**
     * 汎用検索：損益管理組織検索�U(GeneralSearch022)
     */
    public static GENE_SEARCH_SONEKIKANRI_SOSHIKI_2: string = 'GeneralSearch022'

    /**
     * 汎用検索：損益管理組織検索�U(GeneralSearch022)：損益コード(L3)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_I_CD_SONEKI_SOSHIKI_3: string =
      'cdKojoZaikoBasho'

    /**
     * 汎用検索：損益管理組織検索�U(GeneralSearch022)：損益コード(L4)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_I_CD_SONEKI_SOSHIKI_4: string =
      'cdShokuba'

    /**
     * 汎用検索：損益管理組織検索�U(GeneralSearch022)：損益コード(L3)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_O_CD_SONEKI_SOSHIKI_3: string =
      'cdKojoZaikoBasho'

    /**
     * 汎用検索：損益管理組織検索�U(GeneralSearch022)：損益名称(L3)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_O_NM_SONEKI_SOSHIKI_3: string =
      'nmKojoZaikoBasho'

    /**
     * 汎用検索：損益管理組織検索�U(GeneralSearch022)：損益名称(L4)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_2_O_NM_SONEKI_SOSHIKI_4: string =
      'nmShokuba'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137) 階層レベル４の組織検索です。
     */
    public static GENE_SEARCH_SONEKIKANRI_SOSHIKI_6: string = 'GeneralSearch137'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：適用日
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_I_DT_TEKIYO: string =
      'condition03'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：検索条件 損益コード(L3)(必須)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_I_CD_SONEKI_SOSHIKI_3: string =
      'cdSonekikanriSoshikiL3'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：検索条件 損益コード(L4)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_I_CD_SONEKI_SOSHIKI_4: string =
      'condition01'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：検索条件 損益組織名(L4)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_I_NM_SONEKI_SOSHIKI_4: string =
      'condition02'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：検索条件 費目判定区分
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_I_ST_HINMOKU_HANTEI: string =
      'stHinmokuHantei'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：検索条件 費目区分名称
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_I_NM_ST_HINMOKU_HANTEI: string =
      'nmstHinmoku'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：取得項目 損益コード(L4)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_CD_SONEKI_SOSHIKI_4: string =
      'result01'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：取得項目 損益略称(L4)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_NM_SONEKI_SOSHIKI_RYAKU_4: string =
      'result02'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：取得項目 損益コード(L3)
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_ST_HINMOKU_HANTEI: string =
      'result03'

    /**
     * 汎用検索：損益管理組織検索�Y(GeneralSearch137)：取得項目 費目区分名称
     */
    public static KEY_GENE_SEARCH_SONEKIKANRI_SOSHIKI_6_O_NM_ST_HINMOKU_HANTEI: string =
      'result04'

    /**
     * 汎用検索：設備検索�T(GeneralSearch017)
     */
    public static GENE_SEARCH_SETSUBI_1: string = 'GeneralSearch017'

    /**
     * 汎用検索：設備検索�T(GeneralSearch017)：設備コード
     */
    public static KEY_GENE_SEARCH_SETSUBI_1_I_CD_SETSUBI: string = 'condition01'

    /**
     * 汎用検索：設備検索�T(GeneralSearch017)：工場・在庫場所コード
     */
    public static KEY_GENE_SEARCH_SETSUBI_1_I_CD_KOJO_ZAIKO_BASHO: string =
      'condition03'

    /**
     * 汎用検索：設備検索�T(GeneralSearch017)：設備名称
     */
    public static KEY_GENE_SEARCH_SETSUBI_1_O_NM_SETSUBI: string = 'result02'

    /**
     * 汎用検索：店検索(GeneralSearch025)
     */
    public static GENE_SEARCH_TEN: string = 'GeneralSearch025'

    /**
     * 汎用検索：店検索(GeneralSearch025)：店コード
     */
    public static KEY_GENE_SEARCH_TEN_I_CD_TEN: string = 'condition03'

    /**
     * 汎用検索：店検索(GeneralSearch025)：店名称
     */
    public static KEY_GENE_SEARCH_TEN_O_NM_TEN: string = 'result04'

    /**
     * 汎用検索：製品群検索(GeneralSearch037)
     */
    public static GENE_SEARCH_SEIHINGUN: string = 'GeneralSearch037'

    /**
     * 汎用検索：製品群検索(GeneralSearch037)：製品群コード
     */
    public static KEY_GENE_SEARCH_SEIHINGUN_I_CD_SEIHINGUN: string =
      'condition01'

    /**
     * 汎用検索：製品群検索(GeneralSearch037)：マスタ有効日付
     */
    public static KEY_GENE_SEARCH_SEIHINGUN_I_DT_TEKIYO: string = 'condition05'

    /**
     * 汎用検索：製品群検索(GeneralSearch037)：製品群名称
     */
    public static KEY_GENE_SEARCH_SEIHINGUN_O_NM_SEIHINGUN: string = 'result02'

    /**
     * 汎用検索：製品群検索(GeneralSearch037)：製品群ｶﾅ名称
     */
    public static KEY_GENE_SEARCH_SEIHINGUN_O_NM_SEIHINGUN_KANA: string =
      'result03'

    /**
     * 汎用検索：製品群検索(GeneralSearch037)：製品群略式名称
     */
    public static KEY_GENE_SEARCH_SEIHINGUN_O_NM_SEIHINGUN_RYAKU: string =
      'result06'

    /**
     * 汎用検索：共通配合(GeneralSearch133)
     */
    public static GENE_SEARCH_KYOUTSU_HAIGO: string = 'GeneralSearch133'

    /**
     * ハッシュキー：製品群名称(マスタチェック)
     */
    public static KEY_NM_SEIHINGUN: string = 'nmSeihingun'

    /**
     * ハッシュキー：製品群ｶﾅ名称(マスタチェック)
     */
    public static KEY_NM_SEIHINGUN_KANA: string = 'nmSeihingunKana'

    /**
     * ハッシュキー：製品群略式名称(マスタチェック)
     */
    public static KEY_NM_SEIHINGUN_RYAKU: string = 'nmSeihingunRyaku'

    /**
     * ハッシュキー：製品名称(マスタチェック)
     */
    public static KEY_NM_SEIHIN: string = 'nmSeihin'

    /**
     * ハッシュキー：製品略式名称(マスタチェック)
     */
    public static KEY_NM_SEIHIN_RYAKU: string = 'nmSeihinRyaku'

    /**
     * ハッシュキー：製品区分(マスタチェック)
     */
    public static KEY_ST_SEIHIN: string = 'stSeihin'

    /**
     * ハッシュキー：数量単位１(マスタチェック)
     */
    public static KEY_IF_SURYOTANI1: string = 'ifSuryotani1'

    /**
     * ハッシュキー：数量単位２(マスタチェック)
     */
    public static KEY_IF_SURYOTANI2: string = 'ifSuryotani2'

    /**
     * ハッシュキー：受払単位(マスタチェック)
     */
    public static KEY_IF_UKEHARAITANI: string = 'ifUkeharaitani'

    /**
     * ハッシュキー：容量単位(マスタチェック)
     */
    public static KEY_IF_YORYOTANI: string = 'ifYoryotani'

    /**
     * ハッシュキー：容量(マスタチェック)
     */
    public static KEY_QT_YORYO: string = 'qtYoryo'

    /**
     * ハッシュキー：入数(マスタチェック)
     */
    public static KEY_QT_IRISU: string = 'qtIrisu'

    /**
     * ハッシュキー：賞味期間(マスタチェック)
     */
    public static KEY_IF_SHOMIKIKAN: string = 'ifShomikikan'

    /**
     * ハッシュキー：規格端数不定管理区分(マスタチェック)
     */
    public static KEY_ST_FUTEIKAN_KANRI: string = 'stFuteikanKanri'

    /**
     * ハッシュキー：サブロット管理フラグ(マスタチェック)
     */
    public static KEY_FG_SUBLOT_KANRI: string = 'fgSublotKanri'

    /**
     * ハッシュキー：自家生産フラグ(マスタチェック)
     */
    public static KEY_FG_JIKASEISAN: string = 'fgJikaseisan'

    /**
     * ハッシュキー：間接投入品フラグ(マスタチェック)
     */
    public static KEY_FG_KANSETSU_TONYU: string = 'fgKansetsuTonyu'

    /**
     * ハッシュキー：ケース管理Noフラグ(マスタチェック)
     */
    public static KEY_FG_CASE_KANRI: string = 'fgCaseKanri'

    /**
     * ハッシュキー：原材料名称(マスタチェック)
     */
    public static KEY_NM_GENZAIRYO: string = 'nmGenzairyo'

    /**
     * ハッシュキー：原材料略式名称(マスタチェック)
     */
    public static KEY_NM_GENZAIRYO_RYAKU: string = 'nmGenzairyoRyaku'

    /**
     * ハッシュキー：カートン入数(マスタチェック)
     */
    public static KEY_QT_KATON_IRISU: string = 'qtKatonIrisu'

    /**
     * ハッシュキー：カートン使用フラグ(マスタチェック)
     */
    public static KEY_FG_KATONSHIYOU: string = 'fgKatonshiyou'

    /**
     * ハッシュキー：品質保持期間(マスタチェック)
     */
    public static KEY_NU_HINSHITSUHOJI_KIKAN: string = 'nuHinshitsuhojiKikan'

    /**
     * ハッシュキー：品質保持管理区分(マスタチェック)
     */
    public static KEY_ST_HINSHITSUHOJI_KANRI: string = 'stHinshitsuhojiKanri'

    /**
     * ハッシュキー：不定貫フラグ(マスタチェック)
     */
    public static KEY_FG_FUTEIKAN: string = 'fgFuteikan'

    /**
     * ハッシュキー：ロット管理フラグ(マスタチェック)
     */
    public static KEY_FG_LOT_KANRI: string = 'fgLotKanri'

    /**
     * ハッシュキー：貯蔵品名称（マスタチェック）
     */
    public static KEY_NM_CHOZOHIN: string = 'nmChozohin'

    /**
     * ハッシュキー：貯蔵品略式名称（マスタチェック）
     */
    public static KEY_NM_CHOZOHIN_RYAKU: string = 'nmChozohinRyaku'

    /**
     * ハッシュキー：倉庫名称(マスタチェック)
     */
    public static KEY_NM_SOKO: string = 'nmSoko'

    /**
     * ハッシュキー：倉庫略式名称(マスタチェック)
     */
    public static KEY_NM_SOKO_RYAKU: string = 'nmSokoRyaku'

    /**
     * ハッシュキー：倉庫表示名称(マスタチェック)
     */
    public static KEY_NM_SOKO_HYOJI: string = 'nmSokoHyoji'

    /**
     * ハッシュキー：エリア名称(マスタチェック)
     */
    public static KEY_NM_AREA: string = 'nmArea'

    /**
     * ハッシュキー：エリア略式名称(マスタチェック)
     */
    public static KEY_NM_AREA_RYAKU: string = 'nmAreaRyaku'

    /**
     * ハッシュキー：エリア表示名称(マスタチェック)
     */
    public static KEY_NM_AREA_HYOJI: string = 'nmAreaHyoji'

    /**
     * ハッシュキー：ゾーン名称(マスタチェック)
     */
    public static KEY_NM_ZONE: string = 'nmZone'

    /**
     * ハッシュキー：ゾーン略式名称(マスタチェック)
     */
    public static KEY_NM_ZONE_RYAKU: string = 'nmZoneRyaku'

    /**
     * ハッシュキー：ゾーン表示名称(マスタチェック)
     */
    public static KEY_NM_ZONE_HYOJI: string = 'nmZoneHyoji'

    /**
     * ハッシュキー：倉庫表示名称(マスタチェック)
     */
    public static KEY_NM_SOKO_HYOJI1: string = 'nmSokoHyoji1'

    /**
     * ハッシュキー：工場・在庫場所名称(マスタチェック)
     */
    public static KEY_NM_KOJO_ZAIKOBASHO: string = 'nmKojoZaikoBasho'

    /**
     * ハッシュキー：工場・在庫場所略式名称(マスタチェック)
     */
    public static KEY_NM_KOJO_ZAIKOBASHO_RYAKU: string = 'nmKojoZaikoBashoRyaku'

    /**
     * ハッシュキー：取引先名称(マスタチェック)
     */
    public static KEY_NM_TORIHIKISAKI: string = 'nmTorihikisaki'

    /**
     * ハッシュキー：取引先略式名称(マスタチェック)
     */
    public static KEY_NM_TORIHIKISAKI_RYAKU: string = 'nmTorihikisakiRyaku'

    /**
     * ハッシュキー：プリンタ名称(マスタチェック)
     */
    public static KEY_NM_PRINTER: string = 'nmPrinter'

    /**
     * ハッシュキー：管理工程名称（マスタチェック）
     */
    public static KEY_NM_KANRIKOTEI: string = 'nmKanrikotei'

    /**
     * ハッシュキー：組織管理組織コード（マスタチェック）
     */
    public static KEY_CD_SONEKIKANRI_SOSHIKI: string = 'cdSonekikanriSoshiki'

    /**
     * ハッシュキー：組織管理組織名称（マスタチェック）
     */
    public static KEY_NM_SONEKIKANRI_SOSHIKI: string = 'nmSonekikanriSoshiki'

    /**
     * ハッシュキー：組織管理組織略式名称（マスタチェック）
     */
    public static M_SONEKI_SOSHIKI_RYAKU: string = 'nmSonekiSoshikiRyaku'

    /**
     * ハッシュキー：組織管理組織名称(L3)（マスタチェック）
     */
    public static KEY_NM_SONEKIKANRI_SOSHIKI3: string = 'nmSonekikanriSoshiki3'

    /**
     * ハッシュキー：組織管理組織名称(L4)（マスタチェック）
     */
    public static KEY_NM_SONEKIKANRI_SOSHIKI4: string = 'nmSonekikanriSoshiki4'

    /**
     * ハッシュキー：設備名称（マスタチェック）
     */
    public static KEY_NM_SETSUBI: string = 'nmSetsubi'

    /**
     * ハッシュキー：店名称（マスタチェック）
     */
    public static KEY_NM_TEN: string = 'nmTen'

    /**
     * セパレータ
     */
    public static SEP: string = '-'

    /**
     * ハッシュキー：品目コード
     */
    public static KEY_CD_HINMOKU: string = 'cdHinmoku'

    /**
     * ハッシュキー：品目CBMMsg一覧
     */
    public static KEY_HINMOKU_CBMMSG_LIST: string = 'hinmokuCBMMsgList'

    /**
     * ハッシュキー：工場・在庫場所コード
     */
    public static KEY_CD_KOJO_ZAIKO_BASHO: string = 'cdKojoZaikoBasho'

    /**
     * ハッシュキー：工場・在庫場所区分
     */
    public static KEY_ST_KOJO_ZAIKO_BASHO: string = 'stKojoZaikoBasho'

    /**
     * ハッシュキー：工場・在庫場所一覧
     */
    public static KEY_KOJO_ZAIKOBASHO_CBMMSG_LIST: string =
      'kojoZaikoBashoCBMMsgList'

    /**
     * 原価表示明細(製品)(01)
     */
    public static ST_GENKA_HYOJIMEISAI_SEIHIN: string = '01'

    /**
     * 原価表示明細(職場)(02)
     */
    public static ST_GENKA_HYOJIMEISAI_SHOKUBA: string = '02'

    /**
     * 原価表示明細(製品群Ｌ１)(03)
     */
    public static ST_GENKA_HYOJIMEISAI_SEIHINGUN_1: string = '03'

    /**
     * 原価表示明細(製品群Ｌ２)(04)
     */
    public static ST_GENKA_HYOJIMEISAI_SEIHINGUN_2: string = '04'

    /**
     * 原価表示明細(製品群Ｌ３)(05)
     */
    public static ST_GENKA_HYOJIMEISAI_SEIHINGUN_3: string = '05'

    /**
     * 原価表示明細(製品群Ｌ４)(06)
     */
    public static ST_GENKA_HYOJIMEISAI_SEIHINGUN_4: string = '06'

    /**
     * 原価表示明細(製品群Ｌ５)(07)
     */
    public static ST_GENKA_HYOJIMEISAI_SEIHINGUN_5: string = '07'

    /**
     * ハッシュキー：原価表示名称
     */
    public static KEY_ST_GENKA_HYOJI_MEISAI: string = 'stGenkaHyojiMeisai'

    /**
     * ハッシュキー：汎用コード
     */
    public static KEY_CD_HANYO: string = 'cdHanyo'

    /**
     * ハッシュキー：内容１
     */
    public static KEY_NM_NAIYO1: string = 'nmNaiyo1'

    /**
     * 年度開始月
     */
    public static START_NENDO_DUKI: number = 4

    /**
     * 表示区分   1:移動
     */
    public static ST_HYOJI_IDO: string = '1'

    /**
     * 表示区分   2:投入
     */
    public static ST_HYOJI_TONYU: string = '2'

    /**
     * ハッシュキー：引当変更有フラグ
     */
    public static KEY_MES_HIKIATE_FG_HENKO: string = 'fgHenko'

    /**
     * ハッシュキー：表示区分(1:移動、2:投入)
     */
    public static KEY_MES_HIKIATE_ST_HYOJI: string = 'stHyoji'

    /**
     * ハッシュキー：行番号
     */
    public static KEY_MES_HIKIATE_ROWNUM: string = 'selRownum'

    /**
     * ハッシュキー：会社コード
     */
    public static KEY_MES_HIKIATE_CD_KAISHA: string = 'cdKaisha'

    /**
     * ハッシュキー：工場在庫場所コード
     */
    public static KEY_MES_HIKIATE_CD_KOJO_ZAIKOBASHO: string =
      'cdKojoZaikoBasho'

    /**
     * ハッシュキー：工場在庫場所名称
     */
    public static KEY_MES_HIKIATE_NM_KOJO_ZAIKOBASHO: string =
      'nmKojoZaikoBasho'

    /**
     * ハッシュキー：損益管理組織コード（L3)
     */
    public static KEY_MES_HIKIATE_CD_SONEKI_KANRI_SOSHIKI3: string =
      'cdSonekiKanriSoshiki3'

    /**
     * ハッシュキー：日付（※マスタ読込みの適用日に使用）
     */
    public static KEY_MES_HIKIATE_DT_TEKIYO: string = 'dtTekiyo'

    /**
     * ハッシュキー：品目コード識別
     */
    public static KEY_MES_HIKIATE_ST_HINMOKU_CD_SHIKIBETSU: string =
      'stTonyuHinmokuCdShikibetsu'

    /**
     * ハッシュキー：品目コード
     */
    public static KEY_MES_HIKIATE_CD_HINMOKU: string = 'cdHinmoku'

    /**
     * ハッシュキー：品目略式名称
     */
    public static KEY_MES_HIKIATE_NM_HINMOKU_RYAKU: string = 'nmHinmokuRyaku'

    /**
     * ハッシュキー：数量単位
     */
    public static KEY_MES_HIKIATE_IF_SURYO_TANI: string = 'ifSuryoTani'

    /**
     * ハッシュキー：重量単位
     */
    public static KEY_MES_HIKIATE_IF_JURYO_TANI: string = 'ifJuryoTani'

    /**
     * ハッシュキー：引当情報(遷移前画面が設定する引当変更前の情報) × 1
     */
    public static KEY_MES_HIKIATE_JOHO_BEFORE: string = 'mesHikiateJohoBefore'

    /**
     * ハッシュキー：引当情報(MES在庫引当入力画面から引当変更した情報) × N
     */
    public static KEY_MES_HIKIATE_JOHO_AFTER: string = 'mesHikiateJohoAfter'

    /**
     * ハッシュキー：引当情報 倉庫コード
     */
    public static KEY_MES_HIKIATE_CD_SOKO: string = 'cdSoko'

    /**
     * ハッシュキー：引当情報 エリアコード
     */
    public static KEY_MES_HIKIATE_CD_AREA: string = 'cdArea'

    /**
     * ハッシュキー：引当情報 ゾーンコード
     */
    public static KEY_MES_HIKIATE_CD_ZONE: string = 'cdZone'

    /**
     * ハッシュキー：引当情報 ゾーン略式名称
     */
    public static KEY_MES_HIKIATE_NM_ZONE_RYAKU: string = 'nmZone'

    /**
     * ハッシュキー：引当情報 取引先コード
     */
    public static KEY_MES_HIKIATE_CD_TORIHIKISAKI: string = 'cdTorihikisaki'

    /**
     * ハッシュキー：引当情報 取引先略式名称
     */
    public static KEY_MES_HIKIATE_NM_TORIHIKISAKI_RYAKU: string =
      'nmTorihikisakiRyaku'

    /**
     * ハッシュキー：引当情報 生産工場コード
     */
    public static KEY_MES_HIKIATE_CD_SEISANKOJO: string = 'cdSeisanKojo'

    /**
     * ハッシュキー：引当情報 生産工場名称
     */
    public static KEY_MES_HIKIATE_NM_SEISANKOJO_RYAKU: string =
      'nmSeisanKojoRyaku'

    /**
     * ハッシュキー：引当情報 ロット
     */
    public static KEY_MES_HIKIATE_IF_LOT: string = 'ifLot'

    /**
     * ハッシュキー：引当情報 サブロット
     */
    public static KEY_MES_HIKIATE_IF_SUBLOT: string = 'ifSublot'

    /**
     * ハッシュキー：引当情報 等級
     */
    public static KEY_MES_HIKIATE_IF_TOKYU: string = 'ifTokyu'

    /**
     * ハッシュキー：引当情報 賞味期限
     */
    public static KEY_MES_HIKIATE_DT_SHOMIKIGEN: string = 'dtShomikigen'

    /**
     * ハッシュキー：引当情報 数量
     */
    public static KEY_MES_HIKIATE_QT_SURYO: string = 'qtSuryo'

    /**
     * ハッシュキー：引当情報 重量
     */
    public static KEY_MES_HIKIATE_QT_JURYO: string = 'qtJuryo'

    /**
     * ハッシュキー：入荷工場在庫場所コード
     */
    public static KEY_MES_HIKIATE_NYUKA_CD_KOJO_ZAIKOBASHO: string =
      'cdNyukaKojoZaikoBasho'

    /**
     * ハッシュキー：入荷倉庫コード
     */
    public static KEY_MES_HIKIATE_NYUKA_CD_SOKO: string = 'cdNyukaSoko'

    /**
     * ハッシュキー：入荷エリアコード
     */
    public static KEY_MES_HIKIATE_NYUKA_CD_AREA: string = 'cdNyukaArea'

    /**
     * ハッシュキー：入荷ゾーンコード
     */
    public static KEY_MES_HIKIATE_NYUKA_CD_ZONE: string = 'cdNyukaZone'

    public static MSGID_PAT_CHK: string = 'YPMSJSMSW110'

    /**
     * 品目コード識別区分：製品(01)
     */
    public static HINMOKUCDSHIKIBETSU_SEIHIN: string[]
    public static HINMOKUCDSHIKIBETSU_SEIHIN_$LI$(): string[] {
      if (YPMCommonConst.HINMOKUCDSHIKIBETSU_SEIHIN == null) {
        YPMCommonConst.HINMOKUCDSHIKIBETSU_SEIHIN = ['01', '\u88fd\u54c1']
      }
      return YPMCommonConst.HINMOKUCDSHIKIBETSU_SEIHIN
    }

    /**
     * 品目コード識別区分：原材料(02)
     */
    public static HINMOKUCDSHIKIBETSU_GENZAIRYO: string[]
    public static HINMOKUCDSHIKIBETSU_GENZAIRYO_$LI$(): string[] {
      if (YPMCommonConst.HINMOKUCDSHIKIBETSU_GENZAIRYO == null) {
        YPMCommonConst.HINMOKUCDSHIKIBETSU_GENZAIRYO = [
          '02',
          '\u539f\u6750\u6599',
        ]
      }
      return YPMCommonConst.HINMOKUCDSHIKIBETSU_GENZAIRYO
    }

    /**
     * 品目コード識別区分：貯蔵品(03)
     */
    public static HINMOKUCDSHIKIBETSU_CHOZOHIN: string[]
    public static HINMOKUCDSHIKIBETSU_CHOZOHIN_$LI$(): string[] {
      if (YPMCommonConst.HINMOKUCDSHIKIBETSU_CHOZOHIN == null) {
        YPMCommonConst.HINMOKUCDSHIKIBETSU_CHOZOHIN = [
          '03',
          '\u8caf\u8535\u54c1',
        ]
      }
      return YPMCommonConst.HINMOKUCDSHIKIBETSU_CHOZOHIN
    }

    /**
     * 品目コード識別区分：斡旋品(04)
     */
    public static HINMOKUCDSHIKIBETSU_ASSENHIN: string[]
    public static HINMOKUCDSHIKIBETSU_ASSENHIN_$LI$(): string[] {
      if (YPMCommonConst.HINMOKUCDSHIKIBETSU_ASSENHIN == null) {
        YPMCommonConst.HINMOKUCDSHIKIBETSU_ASSENHIN = [
          '04',
          '\u65a1\u65cb\u54c1',
        ]
      }
      return YPMCommonConst.HINMOKUCDSHIKIBETSU_ASSENHIN
    }

    /**
     * 等級：AB
     */
    public static TOKYU_AB: string = 'AB'

    /**
     * 等級：C
     */
    public static TOKYU_C: string = ' C'
  }
  YPMCommonConst['__class'] = 'lib.com.megsnow.ypm.cmn.YPMCommonConst'
}
