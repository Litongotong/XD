/**
 * 製品群CBMMsg スキーマクラスです。
 *
 * @author
 * @version
 */
export class YBMSeihingun {
  /**
   * スキーマ項目の配列
   */
  private static CONTENTS = [
    //  {"スキーマ項目名","データの型"},…と定義する。
    ['cdKaisha', 'String'], // 会社コード
    ['cdSeihingun', 'String'], // 製品群コード
    ['cdJoiseihingun', 'String'], // 上位製品群コード
    ['noKaisolevel', 'String'], // 階層レベル
    ['fgSeikyusakiShuyaku', 'String'], // 請求先集約フラグ
    ['noHyoji', 'String'], // 表示順
    ['nmSeihingun', 'String'], // 製品群名称
    ['nmSeihingunKana', 'String'], // 製品群カナ名称
    ['nmSeihingunRyakushiki', 'String'], // 製品群略式名称
    ['ifUkeharaitani', 'String'], // 受払単位
    ['ifYoryotani', 'String'], // 容量単位
    ['qtYoryo', 'String'], // 容量
    ['qtIrisu', 'String'], // 入数
    ['fgKansanhantei', 'String'], // 換算判定
    ['fgGyomujutaku', 'String'], // 業務受託判定フラグ
    ['stNyukin', 'String'], // 入金サイト区分
    ['nuNyukinnissu', 'String'], // 入金日数
    ['cdJicfsShohinBunrui', 'String'], // ＪＩＣＦＳ商品分類コード
    ['cdSeihingunLevel1', 'String'], // ノーツ製品群レベル１
    ['cdSeihingunLevel2', 'String'], // ノーツ製品群レベル２
    ['cdSeihingunLevel3', 'String'], // ノーツ製品群レベル３
    ['cdSeihingunLevel4', 'String'], // ノーツ製品群レベル４
    ['fgTokushuHantei', 'String'], // 特殊換算判定フラグ
    ['qtTokushuYoryo', 'String'], // 特殊換算容量
    ['qtTokushuIrisu', 'String'], // 特殊換算入数
    ['ifTokushuYoryotani', 'String'], // 特殊換算容量単位
    ['ifTokushuHyojitani', 'String'], // 特殊換算表示単位
    ['fgSeihingai', 'String'], // 製品外フラグ
    ['cdZeishori', 'String'], // 税処理コード
    ['stJigyo', 'String'], // 事業区分
    ['ifJuchuWariate', 'String'], // 受注割当
    ['dtTekiyokaishi', 'String'], // 適用開始日
    ['dtYukokigen', 'String'], // 有効期限日
    ['dtTekiyoshuryo', 'String'], // 適用終了日
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
   * 製品群コード です。
   * データはStringで保持します。
   */
  static CD_SEIHINGUN: string

  /**
   * 上位製品群コード です。
   * データはStringで保持します。
   */
  static CD_JOISEIHINGUN: string

  /**
   * 階層レベル です。
   * データはStringで保持します。
   */
  static NO_KAISOLEVEL: string

  /**
   * 請求先集約フラグ です。
   * データはStringで保持します。
   */
  static FG_SEIKYUSAKI_SHUYAKU: string

  /**
   * 表示順 です。
   * データはStringで保持します。
   */
  static NO_HYOJI: string

  /**
   * 製品群名称 です。
   * データはStringで保持します。
   */
  static NM_SEIHINGUN: string

  /**
   * 製品群カナ名称 です。
   * データはStringで保持します。
   */
  static NM_SEIHINGUN_KANA: string

  /**
   * 製品群略式名称 です。
   * データはStringで保持します。
   */
  static NM_SEIHINGUN_RYAKUSHIKI: string

  /**
   * 受払単位 です。
   * データはStringで保持します。
   */
  static IF_UKEHARAITANI: string

  /**
   * 容量単位 です。
   * データはStringで保持します。
   */
  static IF_YORYOTANI: string

  /**
   * 容量 です。
   * データはStringで保持します。
   */
  static QT_YORYO: string

  /**
   * 入数 です。
   * データはStringで保持します。
   */
  static QT_IRISU: string

  /**
   * 換算判定 です。
   * データはStringで保持します。
   */
  static FG_KANSANHANTEI: string

  /**
   * 業務受託判定フラグ です。
   * データはStringで保持します。
   */
  static FG_GYOMUJUTAKU: string

  /**
   * 入金サイト区分 です。
   * データはStringで保持します。
   */
  static ST_NYUKIN: string

  /**
   * 入金日数 です。
   * データはStringで保持します。
   */
  static NU_NYUKINNISSU: string

  /**
   * ＪＩＣＦＳ商品分類コード です。
   * データはStringで保持します。
   */
  static CD_JICFS_SHOHIN_BUNRUI: string

  /**
   * ノーツ製品群レベル１ です。
   * データはStringで保持します。
   */
  static CD_SEIHINGUN_LEVEL1: string

  /**
   * ノーツ製品群レベル２ です。
   * データはStringで保持します。
   */
  static CD_SEIHINGUN_LEVEL2: string

  /**
   * ノーツ製品群レベル３ です。
   * データはStringで保持します。
   */
  static CD_SEIHINGUN_LEVEL3: string

  /**
   * ノーツ製品群レベル４ です。
   * データはStringで保持します。
   */
  static CD_SEIHINGUN_LEVEL4: string

  /**
   * 特殊換算判定フラグ です。
   * データはStringで保持します。
   */
  static FG_TOKUSHU_HANTEI: string

  /**
   * 特殊換算容量 です。
   * データはStringで保持します。
   */
  static QT_TOKUSHU_YORYO: string

  /**
   * 特殊換算入数 です。
   * データはStringで保持します。
   */
  static QT_TOKUSHU_IRISU: string

  /**
   * 特殊換算容量単位 です。
   * データはStringで保持します。
   */
  static IF_TOKUSHU_YORYOTANI: string

  /**
   * 特殊換算表示単位 です。
   * データはStringで保持します。
   */
  static IF_TOKUSHU_HYOJITANI: string

  /**
   * 製品外フラグ です。
   * データはStringで保持します。
   */
  static FG_SEIHINGAI: string

  /**
   * 税処理コード です。
   * データはStringで保持します。
   */
  static CD_ZEISHORI: string

  /**
   * 事業区分 です。
   * データはStringで保持します。
   */
  static ST_JIGYO: string

  /**
   * 受注割当 です。
   * データはStringで保持します。
   */
  static IF_JUCHU_WARIATE: string

  /**
   * 適用開始日 です。
   * データはStringで保持します。
   */
  static DT_TEKIYOKAISHI: string

  /**
   * 有効期限日 です。
   * データはStringで保持します。
   */
  static DT_YUKOKIGEN: string

  /**
   * 適用終了日 です。
   * データはStringで保持します。
   */
  static DT_TEKIYOSHURYO: string

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
    this.CD_SEIHINGUN = 'cdSeihingun'
    this.CD_JOISEIHINGUN = 'cdJoiseihingun'
    this.NO_KAISOLEVEL = 'noKaisolevel'
    this.FG_SEIKYUSAKI_SHUYAKU = 'fgSeikyusakiShuyaku'
    this.NO_HYOJI = 'noHyoji'
    this.NM_SEIHINGUN = 'nmSeihingun'
    this.NM_SEIHINGUN_KANA = 'nmSeihingunKana'
    this.NM_SEIHINGUN_RYAKUSHIKI = 'nmSeihingunRyakushiki'
    this.IF_UKEHARAITANI = 'ifUkeharaitani'
    this.IF_YORYOTANI = 'ifYoryotani'
    this.QT_YORYO = 'qtYoryo'
    this.QT_IRISU = 'qtIrisu'
    this.FG_KANSANHANTEI = 'fgKansanhantei'
    this.FG_GYOMUJUTAKU = 'fgGyomujutaku'
    this.ST_NYUKIN = 'stNyukin'
    this.NU_NYUKINNISSU = 'nuNyukinnissu'
    this.CD_JICFS_SHOHIN_BUNRUI = 'cdJicfsShohinBunrui'
    this.CD_SEIHINGUN_LEVEL1 = 'cdSeihingunLevel1'
    this.CD_SEIHINGUN_LEVEL2 = 'cdSeihingunLevel2'
    this.CD_SEIHINGUN_LEVEL3 = 'cdSeihingunLevel3'
    this.CD_SEIHINGUN_LEVEL4 = 'cdSeihingunLevel4'
    this.FG_TOKUSHU_HANTEI = 'fgTokushuHantei'
    this.QT_TOKUSHU_YORYO = 'qtTokushuYoryo'
    this.QT_TOKUSHU_IRISU = 'qtTokushuIrisu'
    this.IF_TOKUSHU_YORYOTANI = 'ifTokushuYoryotani'
    this.IF_TOKUSHU_HYOJITANI = 'ifTokushuHyojitani'
    this.FG_SEIHINGAI = 'fgSeihingai'
    this.CD_ZEISHORI = 'cdZeishori'
    this.ST_JIGYO = 'stJigyo'
    this.IF_JUCHU_WARIATE = 'ifJuchuWariate'
    this.DT_TEKIYOKAISHI = 'dtTekiyokaishi'
    this.DT_YUKOKIGEN = 'dtYukokigen'
    this.DT_TEKIYOSHURYO = 'dtTekiyoshuryo'
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
    return YBMSeihingun.CONTENTS
  }

  //******************** 変更可能領域 開始 ********************, ユーザ定義メソッド

  // !!!!!!!!!!!!!!!!!!!!!! ユーザ定義メソッド !!!!!!!!!!!!!!!!!!!!!!!!!!

  //******************** 変更可能領域 終了 ********************
}
