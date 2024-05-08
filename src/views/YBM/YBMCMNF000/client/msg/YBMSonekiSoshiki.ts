/**
 * 損益管理組織CBMMsg スキーマクラスです。
 */
export class YBMSonekiSoshiki {
  /**
   * スキーマ項目の配列
   */
  private static CONTENTS = [
    //  {"スキーマ項目名","データの型"},…と定義する。
    ['cdKaisha', 'String'], // 会社コード
    ['cdSonekikanriSoshiki', 'String'], // 損益管理組織コード
    ['nmSonekikanriSoshiki', 'String'], // 損益管理組織名称
    ['nmSoshikiKana', 'String'], // 損益管理組織カナ名称
    ['nmSonekiSoshikiRyaku', 'String'], // 損益管理組織略式名称
    ['cdJoisonekikanriSoshiki', 'String'], // 上位損益管理組織コード
    ['noKaisolevel', 'String'], // 階層レベル
    ['noHyoji', 'String'], // 表示順
    ['stHinmokuHantei', 'String'], // 費目判定区分
    ['fgHonsyaHantei', 'String'], // 本社判定フラグ
    ['nmGaibuteishutsuyoRyaku', 'String'], // 外部提出用略称
    ['cdDaihyoShokuba', 'String'], // 代表職場コード
    ['stKoyuKyokanhiHantei', 'String'], // 固有・共管費判定区分
    ['cdSeizogenkaHaifuJoi', 'String'], // 製造原価配賦上位組織コード
    ['stShokuba', 'String'], // 職場区分
    ['noYubin', 'String'], // 郵便番号
    ['nmJusho1', 'String'], // 住所１
    ['nmJusho2', 'String'], // 住所２
    ['nmJusho3', 'String'], // 住所３
    ['noDenwa', 'String'], // 電話番号
    ['noFax', 'String'], // ＦＡＸ番号
    ['noGln', 'String'], // ＧＬＮ
    ['stJitsuhanJigyo', 'String'], // 実販事業区分
    ['cdJet', 'String'], // ＪＥＴ向けコード
    ['tmJetkoshin', 'String'], // ＪＥＴ向け更新日
    ['cdSonekikanriLevel1', 'String'], // 階層レベル１損益管理組織
    ['cdSonekikanriLevel2', 'String'], // 階層レベル２損益管理組織
    ['cdSonekikanriLevel3', 'String'], // 階層レベル３損益管理組織
    ['fgJugyoinHaizokusoshiki', 'String'], // 従業員配属組織フラグ
    ['cdChokusetsuLine1', 'String'], // 直接ラインコード１
    ['cdChokusetsuLine2', 'String'], // 直接ラインコード２
    ['cdChokusetsuLine3', 'String'], // 直接ラインコード３
    ['cdChokusetsuLine4', 'String'], // 直接ラインコード４
    ['cdChokusetsuLine5', 'String'], // 直接ラインコード５
    ['cdChokusetsuLine6', 'String'], // 直接ラインコード６
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
   * 損益管理組織コード です。
   * データはStringで保持します。
   */
  static CD_SONEKIKANRI_SOSHIKI: string

  /**
   * 損益管理組織名称 です。
   * データはStringで保持します。
   */
  static NM_SONEKIKANRI_SOSHIKI: string

  /**
   * 損益管理組織カナ名称 です。
   * データはStringで保持します。
   */
  static NM_SOSHIKI_KANA: string

  /**
   * 損益管理組織略式名称 です。
   * データはStringで保持します。
   */
  static NM_SONEKI_SOSHIKI_RYAKU: string

  /**
   * 上位損益管理組織コード です。
   * データはStringで保持します。
   */
  static CD_JOISONEKIKANRI_SOSHIKI: string

  /**
   * 階層レベル です。
   * データはStringで保持します。
   */
  static NO_KAISOLEVEL: string

  /**
   * 表示順 です。
   * データはStringで保持します。
   */
  static NO_HYOJI: string

  /**
   * 費目判定区分 です。
   * データはStringで保持します。
   */
  static ST_HINMOKU_HANTEI: string

  /**
   * 本社判定フラグ です。
   * データはStringで保持します。
   */
  static FG_HONSYA_HANTEI: string

  /**
   * 外部提出用略称 です。
   * データはStringで保持します。
   */
  static NM_GAIBUTEISHUTSUYO_RYAKU: string

  /**
   * 代表職場コード です。
   * データはStringで保持します。
   */
  static CD_DAIHYO_SHOKUBA: string

  /**
   * 固有・共管費判定区分 です。
   * データはStringで保持します。
   */
  static ST_KOYU_KYOKANHI_HANTEI: string

  /**
   * 製造原価配賦上位組織コード です。
   * データはStringで保持します。
   */
  static CD_SEIZOGENKA_HAIFU_JOI: string

  /**
   * 職場区分 です。
   * データはStringで保持します。
   */
  static ST_SHOKUBA: string

  /**
   * 郵便番号 です。
   * データはStringで保持します。
   */
  static NO_YUBIN: string

  /**
   * 住所１ です。
   * データはStringで保持します。
   */
  static NM_JUSHO1: string

  /**
   * 住所２ です。
   * データはStringで保持します。
   */
  static NM_JUSHO2: string

  /**
   * 住所３ です。
   * データはStringで保持します。
   */
  static NM_JUSHO3: string

  /**
   * 電話番号 です。
   * データはStringで保持します。
   */
  static NO_DENWA: string

  /**
   * ＦＡＸ番号 です。
   * データはStringで保持します。
   */
  static NO_FAX: string

  /**
   * ＧＬＮ です。
   * データはStringで保持します。
   */
  static NO_GLN: string

  /**
   * 実販事業区分 です。
   * データはStringで保持します。
   */
  static ST_JITSUHAN_JIGYO: string

  /**
   * ＪＥＴ向けコード です。
   * データはStringで保持します。
   */
  static CD_JET: string

  /**
   * ＪＥＴ向け更新日 です。
   * データはStringで保持します。
   */
  static TM_JETKOSHIN: string

  /**
   * 階層レベル１損益管理組織 です。
   * データはStringで保持します。
   */
  static CD_SONEKIKANRI_LEVEL1: string

  /**
   * 階層レベル２損益管理組織 です。
   * データはStringで保持します。
   */
  static CD_SONEKIKANRI_LEVEL2: string

  /**
   * 階層レベル３損益管理組織 です。
   * データはStringで保持します。
   */
  static CD_SONEKIKANRI_LEVEL3: string

  /**
   * 従業員配属組織フラグ です。
   * データはStringで保持します。
   */
  static FG_JUGYOIN_HAIZOKUSOSHIKI: string

  /**
   * 直接ラインコード１ です。
   * データはStringで保持します。
   */
  static CD_CHOKUSETSU_LINE1: string

  /**
   * 直接ラインコード２ です。
   * データはStringで保持します。
   */
  static CD_CHOKUSETSU_LINE2: string

  /**
   * 直接ラインコード３ です。
   * データはStringで保持します。
   */
  static CD_CHOKUSETSU_LINE3: string

  /**
   * 直接ラインコード４ です。
   * データはStringで保持します。
   */
  static CD_CHOKUSETSU_LINE4: string

  /**
   * 直接ラインコード５ です。
   * データはStringで保持します。
   */
  static CD_CHOKUSETSU_LINE5: string

  /**
   * 直接ラインコード６ です。
   * データはStringで保持します。
   */
  static CD_CHOKUSETSU_LINE6: string

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
    this.CD_SONEKIKANRI_SOSHIKI = 'cdSonekikanriSoshiki'
    this.NM_SONEKIKANRI_SOSHIKI = 'nmSonekikanriSoshiki'
    this.NM_SOSHIKI_KANA = 'nmSoshikiKana'
    this.NM_SONEKI_SOSHIKI_RYAKU = 'nmSonekiSoshikiRyaku'
    this.CD_JOISONEKIKANRI_SOSHIKI = 'cdJoisonekikanriSoshiki'
    this.NO_KAISOLEVEL = 'noKaisolevel'
    this.NO_HYOJI = 'noHyoji'
    this.ST_HINMOKU_HANTEI = 'stHinmokuHantei'
    this.FG_HONSYA_HANTEI = 'fgHonsyaHantei'
    this.NM_GAIBUTEISHUTSUYO_RYAKU = 'nmGaibuteishutsuyoRyaku'
    this.CD_DAIHYO_SHOKUBA = 'cdDaihyoShokuba'
    this.ST_KOYU_KYOKANHI_HANTEI = 'stKoyuKyokanhiHantei'
    this.CD_SEIZOGENKA_HAIFU_JOI = 'cdSeizogenkaHaifuJoi'
    this.ST_SHOKUBA = 'stShokuba'
    this.NO_YUBIN = 'noYubin'
    this.NM_JUSHO1 = 'nmJusho1'
    this.NM_JUSHO2 = 'nmJusho2'
    this.NM_JUSHO3 = 'nmJusho3'
    this.NO_DENWA = 'noDenwa'
    this.NO_FAX = 'noFax'
    this.NO_GLN = 'noGln'
    this.ST_JITSUHAN_JIGYO = 'stJitsuhanJigyo'
    this.CD_JET = 'cdJet'
    this.TM_JETKOSHIN = 'tmJetkoshin'
    this.CD_SONEKIKANRI_LEVEL1 = 'cdSonekikanriLevel1'
    this.CD_SONEKIKANRI_LEVEL2 = 'cdSonekikanriLevel2'
    this.CD_SONEKIKANRI_LEVEL3 = 'cdSonekikanriLevel3'
    this.FG_JUGYOIN_HAIZOKUSOSHIKI = 'fgJugyoinHaizokusoshiki'
    this.CD_CHOKUSETSU_LINE1 = 'cdChokusetsuLine1'
    this.CD_CHOKUSETSU_LINE2 = 'cdChokusetsuLine2'
    this.CD_CHOKUSETSU_LINE3 = 'cdChokusetsuLine3'
    this.CD_CHOKUSETSU_LINE4 = 'cdChokusetsuLine4'
    this.CD_CHOKUSETSU_LINE5 = 'cdChokusetsuLine5'
    this.CD_CHOKUSETSU_LINE6 = 'cdChokusetsuLine6'
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
    return YBMSonekiSoshiki.CONTENTS
  }

  //******************** 変更可能領域 開始 ********************, ユーザ定義メソッド

  // !!!!!!!!!!!!!!!!!!!!!! ユーザ定義メソッド !!!!!!!!!!!!!!!!!!!!!!!!!!

  //******************** 変更可能領域 終了 ********************
}
