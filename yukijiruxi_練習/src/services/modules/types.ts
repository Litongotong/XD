export namespace APICommon {
  /** 共通メッセージ */
  export interface CommonMessage {
    /** ユーザID */
    cdUser?: string
    /** ユーザ名（苗字） */
    nmUserMyoji?: string
    /** ユーザ名（名前） */
    nmUserNamae?: string
    /** ユーザ名（カナ） */
    nmUserKana?: string
    /** 従業員コード */
    cdJugyoin?: string
    /** 会社コード */
    cdKaisha?: string
    /** 会社名 */
    nmKaisha?: string
    /** 部署名 */
    nmBusho?: string
    /** 生産管理共通 */
    ifYPM?: YPMCommonMessage
    /** 損益管理組織コード(レベル3) */
    cdSonekiKanriSoshiki3?: string
    /** 損益管理組織コード(レベル4) */
    cdSonekiKanriSoshiki4?: string
    /** 役割区分 */
    stYakuwari?: string
    /** 自ホスト名 */
    nmHost?: string
    /** クライアントIPアドレス */
    nmClientIP?: string
    /** ログイン日時 */
    tmLogin?: string
    /** プログラムID */
    cdProgram?: string
    /** 画面ID */
    cdGamen?: string
    /** 画面名 */
    nmGamen?: string
    /** 最大検索件数 */
    qtSaidaiKensaku?: string
    /** 最大表示件数 */
    qtSaidaiHyouji?: string
    /** 表示済位置 */
    qtHyoujiZumi?: string
    /** 検索数 */
    qtKensaku?: string
    /** 検索方向区分 */
    stKensakuHoukou?: string
    /** 前頁区分 */
    stZenPage?: boolean
    /** 次頁区分 */
    stJiPage?: boolean
    /** 表示頁 */
    qtHyoujiPage?: string
    /** 頁数 */
    qtPage?: string
    /** ディレクトリ区分 */
    stDirectory?: string
    /** ファイル名 */
    nmFile?: string
    /** インラインフラグ */
    fgInline?: string
    /** エラー種別区分 */
    stError?: string
    /** エラー発生項目ID */
    cdErrorKoumoku?: string
    /** エラー発生レコード位置 */
    qtErrorRecordPosition?: string
    /** エラー発生列項目名 */
    nmErrorColumn?: string
    /** メッセージID */
    cdMessage?: string
    /** メッセージ置換文字 */
    nmMessageChikanList?: string[]
    /** ポップアップフラグ */
    fgPopup?: boolean
    /** 更新日時 */
    tmKoshin?: string
    /** 運用日 */
    dtUnyo?: string
    /** クラス名称 */
    nmClass?: string
    /** メソッド名称 */
    nmMethod?: string
  }

  export interface YPMCommonMessage {
    /** 工場・在庫場所コード */
    cdKojoZaikoBasho?: string
    /** 工場・在庫場所名称 */
    nmKojoZaikoBasho?: string
    /** 工場・在庫場所略式名称 */
    nmKojoZaikoBashoRyaku?: string
    /** 管理工程コード */
    cdKanriKotei?: string
    /** 管理工程名称 */
    nmKanriKotei?: string
    /** 倉庫コード */
    cdSoko?: string
    /** 倉庫名称 */
    nmSoko?: string
    /** 倉庫略式名称 */
    nmSokoRyaku?: string
    /** エリアコード */
    cdArea?: string
    /** エリア名称 */
    nmArea?: string
    /** エリア略式名称 */
    nmAreaRyaku?: string
    /** ゾーンコード */
    cdZone?: string
    /** ゾーン名称 */
    nmZone?: string
    /** ゾーン略式名称 */
    nmZoneRyaku?: string
    /** プリンタID */
    cdPrinterId?: string
    /** プリンタ名称 */
    nmRonri?: string
    /** ケース管理フラグ */
    fgCaseKanri?: string
    /** 損益管理組織コード */
    cdSonekikanriSoshiki?: string
    /** 損益管理組織略式名称レベル３ */
    nmSonekiSoshikiRyaku3?: string
    /** エラー発生行 */
    errorRecordPositionList?: string[]
  }
}
