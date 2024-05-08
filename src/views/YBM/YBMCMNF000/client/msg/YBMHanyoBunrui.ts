/**
 * 汎用分類CBMMsg スキーマクラスです。
 */
export class YBMHanyoBunrui {
  /**
   * スキーマ項目の配列
   */
  private static CONTENTS = [
    //  {"スキーマ項目名","データの型"},…と定義する。
    ['cdKaisha', 'String'], // 会社コード
    ['cdSubsystemShubetu', 'String'], // サブシステム種別コード
    ['cdDatashubetsu', 'String'], // データ種別コード
    ['cdHanyo', 'String'], // 汎用コード
    ['nmNaiyo1', 'String'], // 内容１
    ['nmNaiyo2', 'String'], // 内容２
    ['nmNaiyo3', 'String'], // 内容３
    ['qtSuti1', 'String'], // 数値１
    ['tmSakusei', 'String'], // 作成日時
    ['cdSakuseishaId', 'String'], // 作成者ＩＤ
    ['cdSakuseitanmatsuId', 'String'], // 作成端末ＩＤ
    ['tmKoshin', 'String'], // 更新日時
    ['cdKoshinshaId', 'String'], // 更新者ＩＤ
    ['cdKoshintanmatsuId', 'String'], // 更新端末ＩＤ
    ['fgRonrisakujo', 'String'], // 論理削除フラグ
  ]

  /**
   * 会社コード です。
   * データはStringで保持します。
   */
  static CD_KAISHA: string

  /**
   * サブシステム種別コード です。
   * データはStringで保持します。
   */
  static CD_SUBSYSTEM_SHUBETU: string

  /**
   * データ種別コード です。
   * データはStringで保持します。
   */
  static CD_DATASHUBETSU: string

  /**
   * 汎用コード です。
   * データはStringで保持します。
   */
  static CD_HANYO: string

  /**
   * 内容１ です。
   * データはStringで保持します。
   */
  static NM_NAIYO1: string

  /**
   * 内容２ です。
   * データはStringで保持します。
   */
  static NM_NAIYO2: string

  /**
   * 内容３ です。
   * データはStringで保持します。
   */
  static NM_NAIYO3: string

  /**
   * 数値１ です。
   * データはStringで保持します。
   */
  static QT_SUTI1: string

  /**
   * 作成日時 です。
   * データはStringで保持します。
   */
  static TM_SAKUSEI: string

  /**
   * 作成者ＩＤ です。
   * データはStringで保持します。
   */
  static CD_SAKUSEISHA_ID: string

  /**
   * 作成端末ＩＤ です。
   * データはStringで保持します。
   */
  static CD_SAKUSEITANMATSU_ID: string

  /**
   * 更新日時 です。
   * データはStringで保持します。
   */
  static TM_KOSHIN: string

  /**
   * 更新者ＩＤ です。
   * データはStringで保持します。
   */
  static CD_KOSHINSHA_ID: string

  /**
   * 更新端末ＩＤ です。
   * データはStringで保持します。
   */
  static CD_KOSHINTANMATSU_ID: string

  /**
   * 論理削除フラグ です。
   * データはStringで保持します。
   */
  static FG_RONRISAKUJO: string

  //******************** 変更可能領域 開始 ********************, ユーザ定義属性

  /** Copyright (C) Fujitsu Limited, 2005 - 2007. */
  static COPYRIGHT: string = 'Copyright (C) Fujitsu Limited, 2005 - 2007.'

  // !!!!!!!!!!!!!!!!!!!!!! ユーザ定義属性 !!!!!!!!!!!!!!!!!!!!!!!!!!

  //******************** 変更可能領域 終了 ********************

  /**
   * 静的初期化子です。
   * 項目名定数の値を設定します。
   */
  static {
    this.CD_KAISHA = 'cdKaisha'
    this.CD_SUBSYSTEM_SHUBETU = 'cdSubsystemShubetu'
    this.CD_DATASHUBETSU = 'cdDatashubetsu'
    this.CD_HANYO = 'cdHanyo'
    this.NM_NAIYO1 = 'nmNaiyo1'
    this.NM_NAIYO2 = 'nmNaiyo2'
    this.NM_NAIYO3 = 'nmNaiyo3'
    this.QT_SUTI1 = 'qtSuti1'
    this.TM_SAKUSEI = 'tmSakusei'
    this.CD_SAKUSEISHA_ID = 'cdSakuseishaId'
    this.CD_SAKUSEITANMATSU_ID = 'cdSakuseitanmatsuId'
    this.TM_KOSHIN = 'tmKoshin'
    this.CD_KOSHINSHA_ID = 'cdKoshinshaId'
    this.CD_KOSHINTANMATSU_ID = 'cdKoshintanmatsuId'
    this.FG_RONRISAKUJO = 'fgRonrisakujo'
  }

  /**
   * 項目の配列を取得します。
   * @return 項目の配列
   */
  getContents() {
    return YBMHanyoBunrui.CONTENTS
  }

  //******************** 変更可能領域 開始 ********************, ユーザ定義メソッド

  // !!!!!!!!!!!!!!!!!!!!!! ユーザ定義メソッド !!!!!!!!!!!!!!!!!!!!!!!!!!

  //******************** 変更可能領域 終了 ********************
}
