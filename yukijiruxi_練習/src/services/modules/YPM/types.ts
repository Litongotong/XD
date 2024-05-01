import type { APICommon } from '../types'

export namespace APIYPMCommon {
  /** 仕掛品計上一覧スキーマ */
  export interface InProcessItemAccountingListMessage
    extends Record<string, any> {
    /** 共通Msg */
    commonMsg?: APICommon.CommonMessage
    /** 会社コード */
    cdKaisha?: string
    /** 上位損益管理組織コード */
    cdJoisonekikanriSoshiki?: string
    /** 上位損益管理組織略式名称 */
    nmJoisonekiSoshikiRyaku?: string
    /** 管理工程 */
    cdKanrikotei?: string
    /** 管理工程名称 */
    nmKanrikotei?: string
    /** 製品コード */
    cdSeihin?: string
    /** 製品略式名称 */
    nmSeihinRyaku?: string
    /** 工程内外区分 */
    stKoutei?: string
    /** 製品ロット */
    ifSeizoLot?: string
    /** 伝票日付 */
    dtDenpyo?: string
    /** 仕掛品重量 */
    qtShikakariJuryo?: string
    /** 仕掛品重量単位 */
    ifTani?: string
    /** 仕掛品残量 */
    qtShikakariZanryo?: string
    /** 仕掛品明細CBMMsg一覧 */
    shikakarihinMeisaiCBMMsgList?: InProcessItemAccountingDetailCBMMessage[]
    /** 仕掛品計上CBMMsg一覧 */
    shikakarihinKeijoCBMMsgList?: InProcessItemAccountingListMessage[]
    /** 工場CBMMsg一覧 */
    kojoZaikoBashoCBMMsgList?: FactoryLocationListCBMMessage
    /** 管理工程CBMMsg一覧 */
    kanriKoteiCBMMsgList?: ManageMentProcessListCBMMessage
    /** 品目区分CBMMsg一覧 */
    hinmokuKubunCBMMsgList?: Record<string, any>[]
    /** 品目コード */
    cdHinmoku?: string
    /** 品目名 */
    nmHinmoku?: string
    /** 品目区分 */
    stNyuryokuHinmoku?: string
    /** 品目区分名 */
    nmStHinmoku?: string
    /** 対応組織コード */
    cdTaiousoshiki?: string
    /** 工場在庫場所コード */
    cdKojoZaikoBasho?: string
    /** 乳市区分 */
    stNyushi?: string
    /** 製品CBMMsg */
    seihinCBMMsg?: Record<string, any>
    /** 共通配合CBMMsg */
    kyotsuHaigoCBMMsg?: Record<string, any>
    /** 原材料コード */
    cdGenzairyo?: string
    /** 成分区分 */
    stSeibun?: string
    /** 配合費 */
    nuHaigouhi?: string
    /** 原価要素区分 */
    stGenkaYoso?: string
    /** 原材料名 */
    nmGenzairyo?: string
    /** モード */
    mode?: string
    /** チェック用フラグ */
    fgCheck?: string
    /** チェックエラー用フラグ（他勘定） */
    fgCheckETakanjo?: string
    /** チェックエラー用フラグ（口座替） */
    fgCheckEKoza?: string
    /** 仕掛品重量 */
    nuShikakariJuryo?: string
    /** 締め状態 */
    fgShimeJotai?: string
    /** 仕掛品数量 */
    qtShikakari?: string
    /** 当月残量 */
    qtTougetuZann?: string
    /** 原材料追加フラグ */
    fgGenzairyoAdd?: string
    /** 原材料追加なしフラグ */
    fgGenzairyoAddNashi?: string
  }

  /** 仕掛品明細CBMMsg一覧 */
  export interface InProcessItemAccountingDetailCBMMessage
    extends Record<string, any> {
    /** 年月日 */
    dtNengetsuhi?: string
    /** 年月 */
    dtNengetsu?: string
    /** 会社コード */
    cdKaisha?: string
    /** 上位損益管理組織コード */
    cdJoisonekikanriSoshiki?: string
    /** 損益管理組織コード */
    cdSonekikanriSoshiki?: string
    /** 管理工程コード */
    cdKanrikotei?: string
    /** 工程内外区分 */
    stKoutei?: string
    /** 製品コード */
    cdSeihin?: string
    /** 製造ロット */
    ifSeizoLot?: string
    /** 原材料コード */
    cdGenzairyo?: string
    /** 原材料略式名称 */
    nmGenzairyoRyakushiki?: string
    /** 仕掛品コード */
    cdShikakari?: string
    /** 仕掛品使用区分 */
    stShikakariSiyou?: string
    /** 更新日時 */
    tmKoshin?: string
    /** 単位 */
    ifTani?: string
    /** 単価 */
    mnTanka?: string
    /** 数量 */
    qtShiyo?: string
    /** 金額 */
    mnShiyo?: string
    /** 修正数量 */
    qtShuseiShiyo?: string
    /** 修正金額 */
    mnShuseiShiyo?: string
    /** FAT単価 */
    mnFatTanka?: string
    /** FAT数量 */
    qtFat?: string
    /** FAT金額 */
    mnFat?: string
    /** FAT修正数量 */
    qtShuseiFat?: string
    /** FAT修正金額 */
    mnShuseiFat?: string
    /** SNF単価 */
    mnSnfTanka?: string
    /** SNF数量 */
    qtSnf?: string
    /** SNF金額 */
    mnSnf?: string
    /** SNF修正数量 */
    qtShuseiSnf?: string
    /** SNF修正金額 */
    mnShuseiSnf?: string
    /** TS単価 */
    mnTsTanka?: string
    /** TS数量 */
    qtTs?: string
    /** TS金額 */
    mnTs?: string
    /** TS修正数量 */
    qtShuseiTs?: string
    /** TS修正金額 */
    mnShuseiTs?: string
    /** 月次仕掛品トラン．更新日時 */
    TB_TGETSUJ_SHIKAKE_tmKoshin?: string
    /** 原価要素区分 */
    stGenkaYoso?: string
    /** 乳区分 */
    stNyu?: string
    /** 合計金額 */
    mnGokei?: string
    /** 成分区分 */
    stSeibun?: string
    /** 配合費 */
    nuHaigouhi?: string
    /** 原材料名 */
    nmGenzairyo?: string
    /** 表示名称 */
    ifHyoujiMeisyou?: string
    /** 更新日時 */
    tmKoshin1?: string
    /** 更新日時 */
    tmKoshin2?: string
    /** 更新日時 */
    tmKoshin3?: string
    /** 製造日 */
    dtSeizo?: string
    /** 入力品目区分 */
    stNyuryokuHinmoku?: string
    /** 仕掛品通番 */
    nuShikakari?: string
    /** マイナスチェック */
    minusCheck?: string
    /** 残数数量 */
    qtJyuryoZan?: string
    /** 残数数量(FAT) */
    qtSnfZan?: string
    /** 残数数量(SNF) */
    qtFatZan?: string
    /** 仕掛品実績重量 */
    qtShikakariJiseki?: string
    /** 仕掛品残量 */
    qtShikakariZanryou?: string
  }

  /** 工場・在庫場所一覧CBMMsg */
  export interface FactoryLocationListCBMMessage {
    /** 共通Msg */
    commonMsg?: APICommon.CommonMessage
    /** 工場・在庫場所コード */
    cdKojoZaikoBasho?: string
    /** 工場・在庫場所CBMMsg一覧 */
    kojoZaikoBashoCBMMsgList?: FactoryLocationCBMMessage[]
    /** 工場・在庫場所区分 */
    stKojoZaikoBasho?: string
    /** 経理場所コード */
    cdKeiribasho?: string
  }

  /** 工場・在庫場所CBMMsg */
  export interface FactoryLocationCBMMessage {
    /** 会社コード */
    cdKaisha?: string
    /** 工場・在庫場所コード */
    cdKojoZaikoBasho?: string
    /** 対応組織コード */
    cdTaiousoshiki?: string
    /** 工場・在庫場所区分 */
    stKojoZaikoBasho?: string
    /** 工場グループ */
    stKojoGroup?: string
    /** 倉庫システム使用フラグ */
    fgSokoSystemsiyo?: string
    /** 工場・在庫場所名称 */
    nmKojoZaikoBasho?: string
    /** 工場・在庫場所カナ名 */
    nmKojoZaikoBashoKana?: string
    /** 工場・在庫場所略式名称 */
    nmKojoZaikoBashoRyaku?: string
    /** 郵便番号 */
    noYubin?: string
    /** 都道府県コード */
    cdTodofuken?: string
    /** 住所１ */
    nmJusho1?: string
    /** 住所２ */
    nmJusho2?: string
    /** 住所３ */
    nmJusho3?: string
    /** 電話番号 */
    noDenwa?: string
    /** ＦＡＸ番号 */
    noFax?: string
    /** 対応相手先区分 */
    stTaiouaitesaki?: string
    /** 対応取引先コード */
    cdTaioutorihikisaki?: string
    /** ケースＮＯ管理フラグ */
    fgCasenoKanri?: string
    /** 地域区分 */
    stChiiki?: string
    /** 原材料入荷予定作成フラグ */
    fgGenzairyonyukaYotei?: string
    /** 作成日時 */
    tmSakusei?: string
    /** 作成者ＩＤ */
    cdSakuseishaId?: string
    /** 作成端末ＩＤ */
    cdSakuseitanmatsuId?: string
    /** 更新日時 */
    tmKoshin?: string
    /** 更新者ＩＤ */
    cdKoshinshaId?: string
    /** 更新端末ＩＤ */
    cdKoshintanmatsuId?: string
    /** 論理削除フラグ */
    fgRonrisakujo?: string
  }

  /** 管理工程一覧CBMMsg */
  export interface ManageMentProcessListCBMMessage {
    /** 共通メッセージ */
    commonMsg?: APICommon.CommonMessage
    /** 工場・在庫場所コード */
    cdKojoZaikoBasho?: string
    /** 管理工程CBMMsg一覧 */
    kanriKoteiCBMMsgList?: ManagementProcessCBMMessage[]
    /** 管理工程コード */
    cdKanrikotei?: string
    /** 管理工程名 */
    nmKanrikotei?: string
    /** 損益管理組織コード */
    cdSonekikanriSoshiki?: string
    /** 製造ロット */
    ifSeizoLot?: string
    /** 品目区分      */
    stHinmoku?: string
    /** 品目コード */
    cdHinmoku?: string
  }

  /** 管理工程CBMMsg */
  export interface ManagementProcessCBMMessage {
    /** 会社コード */
    cdKaisha?: string
    /** 工場・在庫場所コード */
    cdKojoZaikoBasho?: string
    /** 管理工程コード */
    cdKanrikotei?: string
    /** 損益管理組織コード */
    cdSonekikanriSoshiki?: string
    /** 管理工程名称 */
    nmKanrikotei?: string
    /** 工程情報 */
    ifKotei?: string
    /** 作成日時 */
    tmSakusei?: string
    /** 作成者ＩＤ */
    cdSakuseishaId?: string
    /** 作成端末ＩＤ */
    cdSakuseitanmatsuId?: string
    /** 更新日時 */
    tmKoshin?: string
    /** 更新者ＩＤ */
    cdKoshinshaId?: string
    /** 更新端末ＩＤ */
    cdKoshintanmatsuId?: string
    /** 論理削除フラグ */
    fgRonrisakujo?: string
  }
}
