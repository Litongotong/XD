/**
 * 製品CBMMsg スキーマクラスです。
 */
export class YBMSeihin {
  /**
   * スキーマ項目の配列
   */
  private static CONTENTS = [
    //  {"スキーマ項目名","データの型"},…と定義する。
    ['cdKaisha', 'String'], // 会社コード
    ['cdSeihin', 'String'], // 製品コード
    ['cdSeihingun', 'String'], // 製品群コード
    ['cdYosanyoSeihingun', 'String'], // 予算用製品群コード
    ['nmSeihin', 'String'], // 製品名称
    ['nmSeihinKana', 'String'], // 製品カナ名称
    ['nmSeihinRyakushiki', 'String'], // 製品略式名称
    ['ifYoryotani', 'String'], // 容量単位
    ['qtYoryo', 'String'], // 容量
    ['qtIrisu', 'String'], // 入数
    ['stSeihin', 'String'], // 製品区分
    ['stFuteikanKanri', 'String'], // 規格端数不定貫管理区分
    ['ifSuryotani1', 'String'], // 数量単位１
    ['ifSuryotani2', 'String'], // 数量単位２
    ['stJoiseihinshikibetsu', 'String'], // 上位製品識別区分
    ['cdJoiseihin', 'String'], // 上位製品コード
    ['cdDaihyoseihin', 'String'], // 代表製品コード
    ['cdJuchuseihin', 'String'], // 受注製品コード
    ['ifUkeharaitani', 'String'], // 受払単位
    ['ifShomikikan', 'String'], // 賞味期間情報
    ['nuTenchakukigen', 'String'], // 店着期限
    ['nuTenchakumedo', 'String'], // 店着目処
    ['cdJan', 'String'], // ＪＡＮコード
    ['cdItf', 'String'], // ＩＴＦコード
    ['cdNisugata', 'String'], // 荷姿コード
    ['cdFyainet', 'String'], // ファイネットコード
    ['noGtin', 'String'], // ＧＴＩＮ
    ['fgRebateTaishoseihin', 'String'], // リベート対象製品フラグ
    ['fgTashahin', 'String'], // 他社品フラグ
    ['stTsumeawaseHantei', 'String'], // 詰合判定区分
    ['fgSanseihinHantei', 'String'], // 詰合散製品判定フラグ
    ['fgChokusoHaisoryo', 'String'], // 直送配送料フラグ
    ['dtHatsubainengappi', 'String'], // 発売年月日
    ['mnMKa', 'String'], // Ｍ価
    ['mnCKa', 'String'], // Ｃ価
    ['mnBKa', 'String'], // Ｂ価
    ['mnAKa', 'String'], // Ａ価
    ['mnKyuMKa', 'String'], // 旧Ｍ価
    ['mnKyuCKa', 'String'], // 旧Ｃ価
    ['mnKyuBKa', 'String'], // 旧Ｂ価
    ['dtMKaKaitei', 'String'], // Ｍ価改定年月日
    ['dtCKaKaitei', 'String'], // Ｃ価改定年月日
    ['dtBKaKaitei', 'String'], // Ｂ価改定年月日
    ['stOndotai', 'String'], // 温度帯区分
    ['qtSekisaijuryo', 'String'], // 積載重量
    ['qtMinakakejuryo', 'String'], // 皆掛重量
    ['qtContainerJuryo', 'String'], // コンテナ重量
    ['fgSeisanbashoKanri', 'String'], // 生産場所入力管理フラグ
    ['cdGenryonyuYoto', 'String'], // 原料乳用途コード
    ['cdTaioGenzairyoAbKyu', 'String'], // 対応原材料コードＡＢ級
    ['cdTaioGenzairyoCKyu', 'String'], // 対応原材料コードＣ級
    ['stWheybuttermilkHantei', 'String'], // ホエーバターミルク判定区分
    ['stWheybuttermilkKeisan', 'String'], // ホエーバターミルク計算区分
    ['fgTankuKanriHantei', 'String'], // タンク管理判定フラグ
    ['fgSublotKanri', 'String'], // サブロット管理フラグ
    ['stJuryobudomariKeisan', 'String'], // 重量歩留計算区分
    ['stSoseibudomariKeisan', 'String'], // 組成歩留計算区分
    ['fgCaseKanri', 'String'], // ケースｊﾇ理フラグ
    ['stShiireUriage', 'String'], // 仕入売上判定区分
    ['stJitsuhanShohin', 'String'], // 実販商品区分
    ['stShohikakaku2', 'String'], // 消費価格区分２
    ['fgJicfsKokusaiYunyu', 'String'], // 国産品・輸入品フラグ（ＪＩＣＦＳ用）
    ['nmJicfsKanjiSeishiki', 'String'], // 漢字正式製品名称（ＪＩＣＦＳ用）
    ['nmJicfsKanaSeishiki', 'String'], // カナ正式製品名称（ＪＩＣＦＳ用）
    ['nmJicfsKanaRyakushiki', 'String'], // カナ略式製品名称（ＪＩＣＦＳ用）
    ['stJicfsYokikeitai', 'String'], // 容器形態区分（ＪＩＣＦＳ用）
    ['stJicfsKoKikakutani', 'String'], // 個品の規格単位区分（ＪＩＣＦＳ用）
    ['ifJicfsKoKikakusuryo', 'String'], // 個品の規格数量（ＪＩＣＦＳ用）
    ['stJicfsKoTani', 'String'], // 個品のサイズ（単位）（ＪＩＣＦＳ用）
    ['ifJicfsKoHaba', 'String'], // 個品のサイズ（幅）（ＪＩＣＦＳ用）
    ['ifJicfsKoTakasa', 'String'], // 個品のサイズ（高さ）（ＪＩＣＦＳ用）
    ['ifJicfsKoOkuyuki', 'String'], // 個品のサイズ（奥行き）（ＪＩＣＦＳ用）
    ['dtJicfsJohoteikyoKano', 'String'], // ＪＩＣＦＳ情報提供可能年月日
    ['dtJicfsHatsubaiCyushi', 'String'], // ＪＩＣＦＳ発売中止年月日
    ['stGiftken', 'String'], // ギフト券区分
    ['mnGiftken1', 'String'], // ギフト券価格１
    ['mnGiftken2', 'String'], // ギフト券価格２
    ['mnGiftken3', 'String'], // ギフト券価格３
    ['mnGiftkenHanbaitesuryo', 'String'], // ギフト券販売手数料
    ['mnGiftkenChisahosho', 'String'], // ギフト券値差補償
    ['ifChyohyokanzantani', 'String'], // 帳票換算単位
    ['qtBarakanzanirisu', 'String'], // バラ換算入数
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
   * 製品コード です。
   * データはStringで保持します。
   */
  static CD_SEIHIN: string

  /**
   * 製品群コード です。
   * データはStringで保持します。
   */
  static CD_SEIHINGUN: string

  /**
   * 予算用製品群コード です。
   * データはStringで保持します。
   */
  static CD_YOSANYO_SEIHINGUN: string

  /**
   * 製品名称 です。
   * データはStringで保持します。
   */
  static NM_SEIHIN: string

  /**
   * 製品カナ名称 です。
   * データはStringで保持します。
   */
  static NM_SEIHIN_KANA: string

  /**
   * 製品略式名称 です。
   * データはStringで保持します。
   */
  static NM_SEIHIN_RYAKUSHIKI: string

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
   * 製品区分 です。
   * データはStringで保持します。
   */
  static ST_SEIHIN: string

  /**
   * 規格端数不定貫管理区分 です。
   * データはStringで保持します。
   */
  static ST_FUTEIKAN_KANRI: string

  /**
   * 数量単位１ です。
   * データはStringで保持します。
   */
  static IF_SURYOTANI1: string

  /**
   * 数量単位２ です。
   * データはStringで保持します。
   */
  static IF_SURYOTANI2: string

  /**
   * 上位製品識別区分 です。
   * データはStringで保持します。
   */
  static ST_JOISEIHINSHIKIBETSU: string

  /**
   * 上位製品コード です。
   * データはStringで保持します。
   */
  static CD_JOISEIHIN: string

  /**
   * 代表製品コード です。
   * データはStringで保持します。
   */
  static CD_DAIHYOSEIHIN: string

  /**
   * 受注製品コード です。
   * データはStringで保持します。
   */
  static CD_JUCHUSEIHIN: string

  /**
   * 受払単位 です。
   * データはStringで保持します。
   */
  static IF_UKEHARAITANI: string

  /**
   * 賞味期間情報 です。
   * データはStringで保持します。
   */
  static IF_SHOMIKIKAN: string

  /**
   * 店着期限 です。
   * データはStringで保持します。
   */
  static NU_TENCHAKUKIGEN: string

  /**
   * 店着目処 です。
   * データはStringで保持します。
   */
  static NU_TENCHAKUMEDO: string

  /**
   * ＪＡＮコード です。
   * データはStringで保持します。
   */
  static CD_JAN: string

  /**
   * ＩＴＦコード です。
   * データはStringで保持します。
   */
  static CD_ITF: string

  /**
   * 荷姿コード です。
   * データはStringで保持します。
   */
  static CD_NISUGATA: string

  /**
   * ファイネットコード です。
   * データはStringで保持します。
   */
  static CD_FYAINET: string

  /**
   * ＧＴＩＮ です。
   * データはStringで保持します。
   */
  static NO_GTIN: string

  /**
   * リベート対象製品フラグ です。
   * データはStringで保持します。
   */
  static FG_REBATE_TAISHOSEIHIN: string

  /**
   * 他社品フラグ です。
   * データはStringで保持します。
   */
  static FG_TASHAHIN: string

  /**
   * 詰合判定区分 です。
   * データはStringで保持します。
   */
  static ST_TSUMEAWASE_HANTEI: string

  /**
   * 詰合散製品判定フラグ です。
   * データはStringで保持します。
   */
  static FG_SANSEIHIN_HANTEI: string

  /**
   * 直送配送料フラグ です。
   * データはStringで保持します。
   */
  static FG_CHOKUSO_HAISORYO: string

  /**
   * 発売年月日 です。
   * データはStringで保持します。
   */
  static DT_HATSUBAINENGAPPI: string

  /**
   * Ｍ価 です。
   * データはStringで保持します。
   */
  static MN_MKA: string

  /**
   * Ｃ価 です。
   * データはStringで保持します。
   */
  static MN_CKA: string

  /**
   * Ｂ価 です。
   * データはStringで保持します。
   */
  static MN_BKA: string

  /**
   * Ａ価 です。
   * データはStringで保持します。
   */
  static MN_AKA: string

  /**
   * 旧Ｍ価 です。
   * データはStringで保持します。
   */
  static MN_KYU_MKA: string

  /**
   * 旧Ｃ価 です。
   * データはStringで保持します。
   */
  static MN_KYU_CKA: string

  /**
   * 旧Ｂ価 です。
   * データはStringで保持します。
   */
  static MN_KYU_BKA: string

  /**
   * Ｍ価改定年月日 です。
   * データはStringで保持します。
   */
  static DT_MKA_KAITEI: string

  /**
   * Ｃ価改定年月日 です。
   * データはStringで保持します。
   */
  static DT_CKA_KAITEI: string

  /**
   * Ｂ価改定年月日 です。
   * データはStringで保持します。
   */
  static DT_BKA_KAITEI: string

  /**
   * 温度帯区分 です。
   * データはStringで保持します。
   */
  static ST_ONDOTAI: string

  /**
   * 積載重量 です。
   * データはStringで保持します。
   */
  static QT_SEKISAIJURYO: string

  /**
   * 皆掛重量 です。
   * データはStringで保持します。
   */
  static QT_MINAKAKEJURYO: string

  /**
   * コンテナ重量 です。
   * データはStringで保持します。
   */
  static QT_CONTAINER_JURYO: string

  /**
   * 生産場所入力管理フラグ です。
   * データはStringで保持します。
   */
  static FG_SEISANBASHO_KANRI: string

  /**
   * 原料乳用途コード です。
   * データはStringで保持します。
   */
  static CD_GENRYONYU_YOTO: string

  /**
   * 対応原材料コードＡＢ級 です。
   * データはStringで保持します。
   */
  static CD_TAIO_GENZAIRYO_AB_KYU: string

  /**
   * 対応原材料コードＣ級 です。
   * データはStringで保持します。
   */
  static CD_TAIO_GENZAIRYO_CKYU: string

  /**
   * ホエーバターミルク判定区分 です。
   * データはStringで保持します。
   */
  static ST_WHEYBUTTERMILK_HANTEI: string

  /**
   * ホエーバターミルク計算区分 です。
   * データはStringで保持します。
   */
  static ST_WHEYBUTTERMILK_KEISAN: string

  /**
   * タンク管理判定フラグ です。
   * データはStringで保持します。
   */
  static FG_TANKU_KANRI_HANTEI: string

  /**
   * サブロット管理フラグ です。
   * データはStringで保持します。
   */
  static FG_SUBLOT_KANRI: string

  /**
   * 重量歩留計算区分 です。
   * データはStringで保持します。
   */
  static ST_JURYOBUDOMARI_KEISAN: string

  /**
   * 組成歩留計算区分 です。
   * データはStringで保持します。
   */
  static ST_SOSEIBUDOMARI_KEISAN: string

  /**
   * ケースｊﾇ理フラグ です。
   * データはStringで保持します。
   */
  static FG_CASE_KANRI: string

  /**
   * 仕入売上判定区分 です。
   * データはStringで保持します。
   */
  static ST_SHIIRE_URIAGE: string

  /**
   * 実販商品区分 です。
   * データはStringで保持します。
   */
  static ST_JITSUHAN_SHOHIN: string

  /**
   * 消費価格区分２ です。
   * データはStringで保持します。
   */
  static ST_SHOHIKAKAKU2: string

  /**
   * 国産品・輸入品フラグ（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static FG_JICFS_KOKUSAI_YUNYU: string

  /**
   * 漢字正式製品名称（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static NM_JICFS_KANJI_SEISHIKI: string

  /**
   * カナ正式製品名称（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static NM_JICFS_KANA_SEISHIKI: string

  /**
   * カナ略式製品名称（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static NM_JICFS_KANA_RYAKUSHIKI: string

  /**
   * 容器形態区分（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static ST_JICFS_YOKIKEITAI: string

  /**
   * 個品の規格単位区分（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static ST_JICFS_KO_KIKAKUTANI: string

  /**
   * 個品の規格数量（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static IF_JICFS_KO_KIKAKUSURYO: string

  /**
   * 個品のサイズ（単位）（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static ST_JICFS_KO_TANI: string

  /**
   * 個品のサイズ（幅）（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static IF_JICFS_KO_HABA: string

  /**
   * 個品のサイズ（高さ）（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static IF_JICFS_KO_TAKASA: string

  /**
   * 個品のサイズ（奥行き）（ＪＩＣＦＳ用） です。
   * データはStringで保持します。
   */
  static IF_JICFS_KO_OKUYUKI: string

  /**
   * ＪＩＣＦＳ情報提供可能年月日 です。
   * データはStringで保持します。
   */
  static DT_JICFS_JOHOTEIKYO_KANO: string

  /**
   * ＪＩＣＦＳ発売中止年月日 です。
   * データはStringで保持します。
   */
  static DT_JICFS_HATSUBAI_CYUSHI: string

  /**
   * ギフト券区分 です。
   * データはStringで保持します。
   */
  static ST_GIFTKEN: string

  /**
   * ギフト券価格１ です。
   * データはStringで保持します。
   */
  static MN_GIFTKEN1: string

  /**
   * ギフト券価格２ です。
   * データはStringで保持します。
   */
  static MN_GIFTKEN2: string

  /**
   * ギフト券価格３ です。
   * データはStringで保持します。
   */
  static MN_GIFTKEN3: string

  /**
   * ギフト券販売手数料 です。
   * データはStringで保持します。
   */
  static MN_GIFTKEN_HANBAITESURYO: string

  /**
   * ギフト券値差補償 です。
   * データはStringで保持します。
   */
  static MN_GIFTKEN_CHISAHOSHO: string

  /**
   * 帳票換算単位 です。
   * データはStringで保持します。
   */
  static IF_CHYOHYOKANZANTANI: string

  /**
   * バラ換算入数 です。
   * データはStringで保持します。
   */
  static QT_BARAKANZANIRISU: string

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
    this.CD_SEIHIN = 'cdSeihin'
    this.CD_SEIHINGUN = 'cdSeihingun'
    this.CD_YOSANYO_SEIHINGUN = 'cdYosanyoSeihingun'
    this.NM_SEIHIN = 'nmSeihin'
    this.NM_SEIHIN_KANA = 'nmSeihinKana'
    this.NM_SEIHIN_RYAKUSHIKI = 'nmSeihinRyakushiki'
    this.IF_YORYOTANI = 'ifYoryotani'
    this.QT_YORYO = 'qtYoryo'
    this.QT_IRISU = 'qtIrisu'
    this.ST_SEIHIN = 'stSeihin'
    this.ST_FUTEIKAN_KANRI = 'stFuteikanKanri'
    this.IF_SURYOTANI1 = 'ifSuryotani1'
    this.IF_SURYOTANI2 = 'ifSuryotani2'
    this.ST_JOISEIHINSHIKIBETSU = 'stJoiseihinshikibetsu'
    this.CD_JOISEIHIN = 'cdJoiseihin'
    this.CD_DAIHYOSEIHIN = 'cdDaihyoseihin'
    this.CD_JUCHUSEIHIN = 'cdJuchuseihin'
    this.IF_UKEHARAITANI = 'ifUkeharaitani'
    this.IF_SHOMIKIKAN = 'ifShomikikan'
    this.NU_TENCHAKUKIGEN = 'nuTenchakukigen'
    this.NU_TENCHAKUMEDO = 'nuTenchakumedo'
    this.CD_JAN = 'cdJan'
    this.CD_ITF = 'cdItf'
    this.CD_NISUGATA = 'cdNisugata'
    this.CD_FYAINET = 'cdFyainet'
    this.NO_GTIN = 'noGtin'
    this.FG_REBATE_TAISHOSEIHIN = 'fgRebateTaishoseihin'
    this.FG_TASHAHIN = 'fgTashahin'
    this.ST_TSUMEAWASE_HANTEI = 'stTsumeawaseHantei'
    this.FG_SANSEIHIN_HANTEI = 'fgSanseihinHantei'
    this.FG_CHOKUSO_HAISORYO = 'fgChokusoHaisoryo'
    this.DT_HATSUBAINENGAPPI = 'dtHatsubainengappi'
    this.MN_MKA = 'mnMKa'
    this.MN_CKA = 'mnCKa'
    this.MN_BKA = 'mnBKa'
    this.MN_AKA = 'mnAKa'
    this.MN_KYU_MKA = 'mnKyuMKa'
    this.MN_KYU_CKA = 'mnKyuCKa'
    this.MN_KYU_BKA = 'mnKyuBKa'
    this.DT_MKA_KAITEI = 'dtMKaKaitei'
    this.DT_CKA_KAITEI = 'dtCKaKaitei'
    this.DT_BKA_KAITEI = 'dtBKaKaitei'
    this.ST_ONDOTAI = 'stOndotai'
    this.QT_SEKISAIJURYO = 'qtSekisaijuryo'
    this.QT_MINAKAKEJURYO = 'qtMinakakejuryo'
    this.QT_CONTAINER_JURYO = 'qtContainerJuryo'
    this.FG_SEISANBASHO_KANRI = 'fgSeisanbashoKanri'
    this.CD_GENRYONYU_YOTO = 'cdGenryonyuYoto'
    this.CD_TAIO_GENZAIRYO_AB_KYU = 'cdTaioGenzairyoAbKyu'
    this.CD_TAIO_GENZAIRYO_CKYU = 'cdTaioGenzairyoCKyu'
    this.ST_WHEYBUTTERMILK_HANTEI = 'stWheybuttermilkHantei'
    this.ST_WHEYBUTTERMILK_KEISAN = 'stWheybuttermilkKeisan'
    this.FG_TANKU_KANRI_HANTEI = 'fgTankuKanriHantei'
    this.FG_SUBLOT_KANRI = 'fgSublotKanri'
    this.ST_JURYOBUDOMARI_KEISAN = 'stJuryobudomariKeisan'
    this.ST_SOSEIBUDOMARI_KEISAN = 'stSoseibudomariKeisan'
    this.FG_CASE_KANRI = 'fgCaseKanri'
    this.ST_SHIIRE_URIAGE = 'stShiireUriage'
    this.ST_JITSUHAN_SHOHIN = 'stJitsuhanShohin'
    this.ST_SHOHIKAKAKU2 = 'stShohikakaku2'
    this.FG_JICFS_KOKUSAI_YUNYU = 'fgJicfsKokusaiYunyu'
    this.NM_JICFS_KANJI_SEISHIKI = 'nmJicfsKanjiSeishiki'
    this.NM_JICFS_KANA_SEISHIKI = 'nmJicfsKanaSeishiki'
    this.NM_JICFS_KANA_RYAKUSHIKI = 'nmJicfsKanaRyakushiki'
    this.ST_JICFS_YOKIKEITAI = 'stJicfsYokikeitai'
    this.ST_JICFS_KO_KIKAKUTANI = 'stJicfsKoKikakutani'
    this.IF_JICFS_KO_KIKAKUSURYO = 'ifJicfsKoKikakusuryo'
    this.ST_JICFS_KO_TANI = 'stJicfsKoTani'
    this.IF_JICFS_KO_HABA = 'ifJicfsKoHaba'
    this.IF_JICFS_KO_TAKASA = 'ifJicfsKoTakasa'
    this.IF_JICFS_KO_OKUYUKI = 'ifJicfsKoOkuyuki'
    this.DT_JICFS_JOHOTEIKYO_KANO = 'dtJicfsJohoteikyoKano'
    this.DT_JICFS_HATSUBAI_CYUSHI = 'dtJicfsHatsubaiCyushi'
    this.ST_GIFTKEN = 'stGiftken'
    this.MN_GIFTKEN1 = 'mnGiftken1'
    this.MN_GIFTKEN2 = 'mnGiftken2'
    this.MN_GIFTKEN3 = 'mnGiftken3'
    this.MN_GIFTKEN_HANBAITESURYO = 'mnGiftkenHanbaitesuryo'
    this.MN_GIFTKEN_CHISAHOSHO = 'mnGiftkenChisahosho'
    this.IF_CHYOHYOKANZANTANI = 'ifChyohyokanzantani'
    this.QT_BARAKANZANIRISU = 'qtBarakanzanirisu'
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
    return YBMSeihin.CONTENTS
  }

  //******************** 変更可能領域 開始 ********************, ユーザ定義メソッド

  // !!!!!!!!!!!!!!!!!!!!!! ユーザ定義メソッド !!!!!!!!!!!!!!!!!!!!!!!!!!

  //******************** 変更可能領域 終了 ********************
}
