import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst'
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst'

/**
 * 生産管理内の共通的な固定値を定義
 */
export class YPMCommonConst {
  /** バッチイベント定義プロパティファイル */
  static EVENT_NAME = 'SMSEventName'

  /** 帳票印刷EJB(プロパティ取得) */
  static SMSPRINTCBS = SMSHashKeyConst.CBSPRNNM

  /** 同期印刷VERB */
  static VERB_SYNCPRINT = 'syncPrint'

  /** 非同期印刷VERB */
  static VERB_ASYNCPRINT = 'asyncPrint'

  /** バッチ呼出用EJB */
  static SMSSYSCBS = 'SMSSYSCBS'

  /** バッチのコマンド */
  static VERB_EXECBATCH = 'SMSBatchManagerCBSHandler.execBatch'

  /** DataSourceID の保持領域(0) */
  static DATASOURCE_ID = 0

  /** 最大検索件数デフォルト値(100) */
  static DEFAULT_MAX_COUNT = 100

  /** 最大表示件数デフォルト値(100) */
  static DEFAULT_HYOJIMAX_COUNT = 100

  /** 表示済みページ数デフォルト値(0) */
  static DEFAULT_HYOJIZUMI_PAGE = 0

  /** 表示ページデフォルト値(1) */
  static DEFAULT_HYOJI_PAGE = 1

  /** メッセージ共通化 */

  //登録

  /** 排他エラー、更新日時チェックエラー：他のユーザーによってい&1された可能性がある為、&2処理に失敗しました。*/
  static MSGID_HAITA_ERROR = SMSMessageConst.YPMCMNMCI057

  /** 一意制約エラー：登録に失敗しました。*/
  static MSGID_PRIMARYKEY_ERROR = SMSMessageConst.SMSCMNMCE006

  /**パターン切替ボタンが押下されていません。。*/
  static MSGID_PAT_CHK = 'YPMSJSMSW110'

  /** その他の登録エラー：登録に失敗しました。*/
  static MSGID_REGIST_NG = SMSMessageConst.SMSCMNMCE006

  /** 排他エラー：処理するデータが他で使用中の可能性があります。 */
  static MSGID_RESOURCE_BUSY = SMSMessageConst.SMSCMNMCE003

  //	------ 2014.04.22 富士通）武田 システム統合開発プロジェクト ADD START ------
  /** 登録件数エラー： $は$できません。$ */
  static MSGID_REGIST_MAX_DATA = SMSMessageConst.YPMGNSMCE038
  //	------ 2014.04.22 富士通）武田 システム統合開発プロジェクト ADD E N D ------

  //表示

  /** 0件：検索が終了しましたが該当するデータがみつかりません。検索条件を見直して下さい。 */
  static MSGID_NO_DATA = SMSMessageConst.YCSCMNMSW056

  /** 最大件：検索データが&1件以上存在するため、先頭の&1件のみを表示します。 */
  static MSGID_MAX_DATA = SMSMessageConst.YCSCMNMSW058

  /** 最大件エラー：最大検索件数&1を超えたため、画面に表示できません。検索条件を見直してください。 */
  static MSGID_MAX_DATA_ERROR = SMSMessageConst.YCSCMNMSW037

  //入力チェック

  /** マスタ存在：入力された&1が&2に登録されていません。*/
  static MSGID_MASTER_CHECK = SMSMessageConst.YCSCMNMSW052

  /** マスタ存在：&1マスタにデータが存在しません。*/
  static MSGID_NOT_MASTER_DATA = SMSMessageConst.YPMCMNMCW102

  /** 区分指定なし(0) */
  static ST_ZERO = '0'

  /** 半角スペース(' ') */
  static SPACE = ' '

  /** 文字列０('0') */
  static STR_ZERO = '0'

  /** 空文字列('') */
  static STR_EMPTY = ''

  /** 検査状態:未検査(01)	*/
  static ST_KENSAJOTAI_MIKENSA = '01'
  /** 検査状態:検査済み（合格）(02)*/
  static ST_KENSAJOTAI_KENSA_GOUKAKU = '02'
  /** 検査状態:検査済み（不合格）(03)*/
  static ST_KENSAJOTAI_KENSA_FUGOUKAKU = '03'

  /** 出荷止状態:通常(01)	*/
  static ST_SHUKKATOME_TSUJYO = '01'
  /** 出荷止状態:営業取置(02)	*/
  static ST_SHUKKATOME_EIGYOTORIOKI = '02'
  /** 出荷止状態:サンプル品(03) */
  static ST_SHUKKATOME_SAMPLE = '03'
  /** 出荷止状態:事故品・破損品(04) */
  static ST_SHUKKATOME_JIKOHASON = '04'
  /** 出荷止状態:返品(05) */
  static ST_SHUKKATOME_HENPIN = '05'
  /** 出荷止状態:終売・未発売(06) */
  static ST_SHUKKATOME_SYUBAI = '06'
  /** 出荷止状態:運転中(07) */
  static ST_SHUKKATOME_UNTEN = '07'
  /** 出荷止状態:詰合せ取置(08)) */
  static ST_SHUKKATOME_TUMEAWASE = '08'
  /** 出荷止状態:その他(09) */
  static ST_SHUKKATOME_SONOTA = '09'

  /** 規格端数不定貫管理区分:普通製品(01) */
  static ST_FUTEIKAN_KANRI_TSUJYO = '01'
  /** 規格端数不定貫管理区分:規格製品(02) */
  static ST_FUTEIKAN_KANRI_KIKAKU = '02'
  /** 規格端数不定貫管理区分:端数製品(03) */
  static ST_FUTEIKAN_KANRI_HASUU = '03'
  /** 規格端数不定貫管理区分:定貫(04) */
  static ST_FUTEIKAN_KANRI_TEIKAN = '04'
  /** 規格端数不定貫管理区分:不定貫(05) */
  static ST_FUTEIKAN_KANRI_FUTEIKAN = '05'
  /** 規格端数不定貫管理区分:対象外(06) */
  static ST_FUTEIKAN_KANRI_TAISHOGAI = '06'

  /** 引当区分：未引当(00) */
  static ST_HIKIATE_MIHIKIATE = '00'
  /** 引当区分：引当済(01) */
  static ST_HIKIATE_HIKIATEZUMI = '01'
  /** 引当区分：指示済(02) */
  static ST_HIKIATE_SIJIZUMI = '02'
  /** 引当区分：実績済(03) */
  static ST_HIKIATE_JISSEKIZUMI = '03'

  /** 工場内移動区分:移動待(01) */
  static ST_KOJONAIIDO_IDOMATI = '01'
  /** 工場内移動区分:移動中(02) */
  static ST_KOJONAIIDO_IDOTYU = '02'
  /** 工場内移動区分:取出中(03) */
  static ST_KOJONAIIDO_TORIDASHI = '03'

  /** 赤黒区分:赤(01) */
  static ST_AKAKURO_AKA = '01'
  /** 赤黒区分:黒(02) */
  static ST_AKAKURO_KURO = '02'

  /** 入荷状態：未確定(00) */
  static ST_NYUKA_JOTAI_MIKAKUTEI = '00'
  /** 入荷状態：受領待(01) */
  static ST_NYUKA_JOTAI_JYURYOMATI = '01'
  /** 入荷状態：分納待(02) */
  static ST_NYUKA_JOTAI_BUNNOU = '02'
  /** 入荷状態：完納(03) */
  static ST_NYUKA_JOTAI_KANNOU = '03'

  /** 入荷作業状態:入荷待(01) */
  static ST_NYUKA_SAGYO_JOTAI_MATI = '01'
  /** 入荷作業状態:入荷中(02) */
  static ST_NYUKA_SAGYO_JOTAI_TYU = '02'
  /** 入荷作業状態:入荷完了(03) */
  static ST_NYUKA_SAGYO_JOTAI_KANRYO = '03'

  /** 入荷区分:仕入(01) */
  static ST_NYUKA_SHIIRE = '01'
  /** 入荷区分:仕入移動(02) */
  static ST_NYUKA_SHIIRE_IDO = '02'
  /** 入荷区分:移動(03) */
  static ST_NYUKA_IDO = '03'
  /** 入荷区分:輸入Ｃ移動(04) */
  static ST_NYUKA_YUNYU_IDO = '04'
  /** 入荷区分:得意先返品(05) */
  static ST_NYUKA_TOKUISAKI_HENPIN = '05'

  /** 入荷種別区分:仕入(01) */
  static ST_NYUKA_SYUBETU_SHIIRE = '01'
  /** 入荷種別区分:仕入返品(02) */
  static ST_NYUKA_SYUBETU_SHIIRE_HENPIN = '02'
  /** 入荷種別区分:移動受(03) */
  static ST_NYUKA_SYUBETU_IDO_UKE = '03'

  /** 入荷実績訂正区分:訂正なし(00) */
  static ST_NYUKA_JISSEKI_TEISEI_NASHI = '00'
  /** 入荷実績訂正区分:数量訂正(01) */
  static ST_NYUKA_JISSEKI_TEISEI_SURYO = '01'
  /** 入荷実績訂正区分:単価訂正(02) */
  static ST_NYUKA_JISSEKI_TEISEI_TNK = '02'
  /** 入荷実績訂正区分:数量＆単価訂正(03) */
  static ST_NYUKA_JISSEKI_TEISEI_SURYOTNK = '03'

  /** 仕入単価区分:未設定(00) */
  static ST_SHIIRE_TANKA_MISETTEI = '00'
  /** 仕入単価区分:マスタ設定単価(01) */
  static ST_SHIIRE_TANKA_MST = '01'
  /** 仕入単価区分:見積り単価(02) */
  static ST_SHIIRE_TANKA_MITSUMORI = '02'
  /** 仕入単価区分:手入力単価(03) */
  static ST_SHIIRE_TANKA_TENYURYOKU = '03'

  /** 検品区分:未検品(01) */
  static ST_KENPIN_MIKENPIN = '01'
  /** 検品区分:合格(02) */
  static ST_KENPIN_GOUKAKU = '02'
  /** 検品区分:不合格(03) */
  static ST_KENPIN_FUGOUKAKU = '03'

  /** 出荷区分:売上出荷(01) */
  static ST_SYUKKA_URIAGE = '01'
  /** 出荷区分:転送出荷（移動）(02) */
  static ST_SYUKKA_TENSOUSYUKKA_IDO = '02'
  /** 出荷区分:現添出荷(03) */
  static ST_SYUKKA_GEN = '03'
  /** 出荷区分:サンプル出荷(04) */
  static ST_SYUKKA_SAMPLE = '04'
  /** 出荷区分:仕入先返品(05) */
  static ST_SYUKKA_SHIIREHENPIN = '05'
  /** 出荷区分:転送出荷（仕入移動）(06) */
  static ST_SYUKKA_TENSOUSYUKKA_SHIIRE = '06'

  /** 売上区分:対象外(00) */
  static ST_URIAGE_TAISHOGAI = '00'
  /** 売上区分:売上(01) */
  static ST_URIAGE_URIAGE = '01'
  /** 売上区分:売上値引(02) */
  static ST_URIAGE_NEBIKI = '02'
  /** 売上区分:売上返品(03) */
  static ST_URIAGE_HENPIN = '03'
  /** 売上区分:売上値差加算(04) */
  static ST_URIAGE_SABUN_PLUS = '04'
  /** 売上区分:売上値差減算(05) */
  static ST_URIAGE_SABUN_MINUS = '05'
  /** 売上区分:売上分割(06) */
  static ST_URIAGE_BUNKATSU = '06'
  /** 売上区分:売上付替(07) */
  static ST_URIAGE_TUKEKAE = '07'

  /** 売上出荷区分:対象外(00) */
  static ST_URIAGESHUKA_TAISHOGAI = '00'
  /** 売上出荷区分:店入れ(01) */
  static ST_URIAGESHUKA_MISEIRE = '01'
  /** 売上出荷区分:直送(02) */
  static ST_URIAGESHUKA_TYOKUSO = '02'
  /** 売上出荷区分:直取(03) */
  static ST_URIAGESHUKA_TYOKUTORI = '03'
  /** 売上出荷区分:サンプル出荷(04) */
  static ST_URIAGESHUKA_SAMPLE = '04'
  /** 売上出荷区分:現品添付(05) */
  static ST_URIAGESHUKA_GENPIN = '05'

  /** 売上処理区分:店入れ(01) */
  static ST_URIAGESHORI_MISEIRE = '01'
  /** 売上処理区分:直送(02) */
  static ST_URIAGESHORI_TYOKUSO = '02'
  /** 売上処理区分:直取(03) */
  static ST_URIAGESHORI_TYOKUTORI = '03'
  /** 売上処理区分:サンプル出荷(04) */
  static ST_URIAGESHORI_SAMPLE = '04'
  /** 売上処理区分:現品添付(05) */
  static ST_URIAGESHORI_GENPIN = '05'
  /** 売上処理区分:売却(06) */
  static ST_URIAGESHORI_BAIKYAKU = '06'
  /** 売上処理区分:転送(07) */
  static ST_URIAGESHORI_TENSOU = '07'
  /** 売上処理区分:仕入先返品(08) */
  static ST_URIAGESHORI_SIIREHENPIN = '08'
  /** 売上処理区分:仕入売却(09) */
  static ST_URIAGESHORI_SIIREBAIKYAKU = '09'
  /** 売上処理区分:返品売却(10) */
  static ST_URIAGESHORI_HENPINBAIKYAKU = '10'
  /** 売上処理区分:転送売却(11) */
  static ST_URIAGESHORI_TENSOUBAIKYAKU = '11'

  /** 出荷作業状態:出荷待ち(01) */
  static ST_SYUKASAGYOJOTAI_MATI = '01'
  /** 出荷作業状態:出荷中(02) */
  static ST_SYUKASAGYOJOTAI_TYU = '02'
  /** 出荷作業状態:出荷完了(03) */
  static ST_SYUKASAGYOJOTAI_KANRYO = '03'

  /** 単価訂正区分:なし(01) */
  static ST_TANKATEISEI_NONE = '01'
  /** 単価訂正区分:伝票単価訂正(02) */
  static ST_TANKATEISEI_DENPYOTNK = '02'
  /** 単価訂正区分:新規単価訂正(03) */
  static ST_TANKATEISEI_SINKITNK = '03'

  /** 売却単価区分:なし(01) */
  static ST_BAIKYAKUTANKA_NONE = '01'
  /** 売却単価区分:斡旋単価(02) */
  static ST_BAIKYAKUTANKA_ASSEN = '02'
  /** 売却単価区分:帳簿単価(03) */
  static ST_BAIKYAKUTANKA_TYOBO = '03'

  /** 指示済区分:未指示(01) */
  static FG_SIJISUMI_MISIJI = '01'
  /** 指示済区分:指示済(02) */
  static FG_SIJISUMI_SUMI = '02'

  /** ラベル区分:原材料ラベル(01) */
  static ST_LABEL_GENZAIRYO = '01'
  /** ラベル区分:製品ラベル(02) */
  static ST_LABEL_SEIHIN = '02'
  /** ラベル区分:小分けラベル(03) */
  static ST_LABEL_KOWAKE = '03'

  /** 品質保持管理区分:管理対象外(01) */
  static ST_HINSHITSUHOJI_KANRI_KANRITAISHOGAI = '01'
  /** 品質保持管理区分:画面入力(02) */
  static ST_HINSHITSUHOJI_KANRI_GAMENNYURYOKU = '02'
  /** 品質保持管理区分:生産日より計算(03) */
  static ST_HINSHITSUHOJI_KANRI_SEISAN = '03'

  /** 受払識別：受入(01) */
  static ST_UKEHARAI_SHIKIBETSU_UKEIRE = '01'
  /** 受払識別：払出(00) */
  static ST_UKEHARAI_SHIKIBETSU_HARAIDASHI = '00'

  /** 棚卸処理区分:未入力(01) */
  static ST_TANAOROSHISHORI_MINYURYOKU = '01'
  /** 棚卸処理区分:棚卸済(02) */
  static ST_TANAOROSHISHORI_TANAOROSHIZUMI = '02'
  /** 棚卸処理区分:承認済(03) */
  static ST_TANAOROSHISHORI_SYONINZUMI = '03'

  /** 出来高処理区分:未確定(01) */
  static ST_DEKIDAKASHORI_MIKAKUTEI = '01'
  /** 出来高処理区分:確定済(02) */
  static ST_DEKIDAKASHORI_KAKUTEISUMI = '02'

  /** 出来高状態:通常(01) */
  static ST_DEKIDAKA_TSUJYO = '01'
  /** 出来高状態:出荷済(02) */
  static ST_DEKIDAKA_SYUKKASUMI = '02'
  /** 出来高状態:他勘定(03) */
  static ST_DEKIDAKA_TAKANJYO = '03'
  /** 出来高状態:規格替(04) */
  static ST_DEKIDAKA_KIKAKUGAE = '04'
  /** 出来高状態:欠番(05) */
  static ST_DEKIDAKA_KETSUBAN = '05'
  /** 出来高状態:引当(06) */
  static ST_DEKIDAKA_HIKIATE = '06'

  /** ケース処理発生業務区分:出荷(01) */
  static ST_CASESHORI_GYOMUKBN_SYUKKA = '01'
  /** ケース処理発生業務区分:他勘定(02) */
  static ST_CASESHORI_GYOMUKBN_TAKANJYO = '02'
  /** ケース処理発生業務区分:規格替(03) */
  static ST_CASESHORI_GYOMUKBN_KIKAKUGAE = '03'
  /** ケース処理発生業務区分:出来高調整(04) */
  static ST_CASESHORI_GYOMUKBN_DEKIDAKATHOSEI = '04'
  /** ケース処理発生業務区分:引当(05) */
  static ST_CASESHORI_GYOMUKBN_HIKIATE = '05'

  /** 計画状態区分:未展開(01) */
  static ST_KEIKAKU_JOTAI_MITENKAI = '01'
  /** 計画状態区分:再展開依頼(02) */
  static ST_KEIKAKU_JOTAI_RETENKAIIRAI = '02'
  /** 計画状態区分:展開依頼中(10) */
  static ST_KEIKAKU_JOTAI_TENKAIIRAITYU = '10'
  /** 計画状態区分:展開中(11) */
  static ST_KEIKAKU_JOTAI_TENKAITYU = '11'
  /** 計画状態区分:展開済(12) */
  static ST_KEIKAKU_JOTAI_TENKAIZUMI = '12'
  /** 計画状態区分:生産待ち(20) */
  static ST_KEIKAKU_JOTAI_SEISANMATI = '20'
  /** 計画状態区分:生産中(21) */
  static ST_KEIKAKU_JOTAI_SEISANTYU = '21'
  /** 計画状態区分:生産完了(22) */
  static ST_KEIKAKU_JOTAI_SEISANKANRYO = '22'
  /** 生産計画状態区分：マスタ不備(30) */
  static ST_KEIKAKU_JOTAI_MS_NOTFOUND = '30' // 2007/02/22 ADU)佐々木 追加
  /** 生産計画状態区分：中止(99) */
  static ST_KEIKAKU_JOTAI_CHUSHI = '99' //2007.04.25 add

  /** 工程区分:開始工程(01) */
  static ST_KOTEI_KAISHI = '01'
  /** 工程区分:途中工程(02) */
  static ST_KOTEI_TOCHU = '02'
  /** 工程区分:終了工程(03) */
  static ST_KOTEI_SYURYO = '03'

  /** 調達計画状態区分:変更なし(00) */
  static ST_TYOTATUKEIKAKU_NONE = '00'
  /** 調達計画状態区分:新規(01) */
  static ST_TYOTATUKEIKAKU_NEW = '01'
  /** 調達計画状態区分:変更有り(02) */
  static ST_TYOTATUKEIKAKU_UPDATE = '02'
  /** 調達計画状態区分:変更対応済(03) */
  static ST_TYOTATUKEIKAKU_UPDATE_TAIOUZUMI = '03'

  /** 工程状態区分:未展開(01) */
  static ST_KOTEI_JYOTAI_MITENKAI = '01'
  /** 工程状態区分:生産待ち(20) */
  static ST_KOTEI_JYOTAI_SEISANMATI = '20'
  /** 工程状態区分:生産中(21) */
  static ST_KOTEI_JYOTAI_SEISANTHU = '21'
  /** 工程状態区分:生産完了(22) */
  static ST_KOTEI_JYOTAI_SEISANKANRYO = '22'
  /** 工程状態区分:中止(99) */
  static ST_KOTEI_JYOTAI_CHUSHI = '99'

  /** 計画立案システム区分:基幹系(01) */
  static ST_KEIKAKU_SYSTEM_KIKAN = '01'
  /** 計画立案システム区分:SCM計画系(02) */
  static ST_KEIKAKU_SYSTEM_SCM = '02'
  /** 計画立案システム区分:横浜立体倉庫(03) */
  static ST_KEIKAKU_SYSTEM_YOKOHAMARITTAI_SOKO = '03'

  /** 判定結果:未判定(00) */
  static ST_HANTEI_KEKKA_MIHANTEI = '00'
  /** 判定結果:合格(01) */
  static ST_HANTEI_KEKKA_GOKAKU = '01'
  /** 判定結果:不合格(02) */
  static ST_HANTEI_KEKKA_FUGOKAKU = '02'
  /** 判定結果:仮承認(03) */
  static ST_HANTEI_KEKKA_KARISHONIN = '03'

  /** 判定状態区分:分析結果待ち(01) */
  static ST_HANTEI_JOTAI_BUNSEKI_MACHI = '01'
  /** 判定状態区分:出荷判定待ち(02) */
  static ST_HANTEI_JOTAI_SHUKKA_HANTEI_MACHI = '02'
  /** 判定状態区分:出荷判定済(03) */
  static ST_HANTEI_JOTAI_SHUKKA_HANTEI_ZUMI = '03'
  /** 判定状態区分:再分析中(04) */
  static ST_HANTEI_JOTAI_SAIBUNSEKI = '04'
  /** 判定状態区分:承認書発行済(05) */
  static ST_HANTEI_JOTAI_SHONINSHO_HAKKOZUMI = '05'
  /** 判定状態区分:仮承認(06) */
  static ST_HANTEI_JOTAI_KARISHONIN = '06'

  /** サンプル状態区分:サンプル採取(01) */
  static ST_SAMPLE_JOTAI_SAISHU = '01'
  /** サンプル状態区分:分析中(02) */
  static ST_SAMPLE_JOTAI_BUNSEKICHU = '02'
  /** サンプル状態区分:分析完了(03) */
  static ST_SAMPLE_JOTAI_BUNSEKIKANRYO = '03'
  /** サンプル状態区分:判定済(04) */
  static ST_SAMPLE_JOTAI_HANTEIZUMI = '04'

  /** 乳区分:設定なし(00) */
  static ST_NYU_SETTEI_NASHI = '00'
  /** 乳区分:生乳(01) */
  static ST_NYU_SETTEI_NAMANYU = '01'
  /** 乳区分:クリーム(02) */
  static ST_NYU_SETTEI_CREAM = '02'
  /** 乳区分:脱脂乳(03) */
  static ST_NYU_SETTEI_DASSHINYU = '03'
  /** 乳区分:バターミルク(04) */
  static ST_NYU_SETTEI_BATTERMILK = '04'
  /** 乳区分:ホエー(05) */
  static ST_NYU_SETTEI_HOE = '05'

  /** 分析結果判定区分:未判定(00)	*/
  static ST_BUNSEKI_HANTEI_MIHANTEI = '00'
  /** 分析結果判定区分:判定結果ＯＫ(01) */
  static ST_BUNSEKI_HANTEI_OK = '01'
  /** 分析結果判定区分:判定結果ＮＧ（標準値外）(02) */
  static ST_BUNSEKI_HANTEI_NG_NORMAL = '02'
  /** 分析結果判定区分:判定結果ＮＧ（規格値外）(03) */
  static ST_BUNSEKI_HANTEI_NG_KIKAKU = '03'

  /** エラーＩＤ：検索データ無し(01) */
  static ST_ERROR_DATA_NOT_FOUND = '01'

  /** エラーＩＤ：検索データ最大件数に達しました。(02) */
  static ST_ERROR_DATA_MAX_COUNT = '02'

  /** 発注状態区分：削除(04) */
  static ST_HACHU_SAKUJO = '04'

  /** 按分区分：金額比率(01) */
  static ST_ANBUN_KINGAKU_HIRITSU = '01'

  /** 製品区分：規格端数製品(02) */
  static ST_SEIHIN_KIKAKUHASU_SEIHIN = '02'

  /** 原価表示明細(製品)(01) */
  static ST_GENKA_HYOJIMEISAI_SEIHIN = '01'

  /** 原価表示明細(職場)(02) */
  static ST_GENKA_HYOJIMEISAI_SHOKUBA = '02'

  /** 原価表示明細(製品群Ｌ１)(03) */
  static ST_GENKA_HYOJIMEISAI_SEIHINGUN_1 = '03'

  /** 原価表示明細(製品群Ｌ２)(04) */
  static ST_GENKA_HYOJIMEISAI_SEIHINGUN_2 = '04'

  /** 原価表示明細(製品群Ｌ３)(05) */
  static ST_GENKA_HYOJIMEISAI_SEIHINGUN_3 = '05'

  /** 原価表示明細(製品群Ｌ４)(06) */
  static ST_GENKA_HYOJIMEISAI_SEIHINGUN_4 = '06'

  /** 原価表示明細(製品群Ｌ５)(07) */
  static ST_GENKA_HYOJIMEISAI_SEIHINGUN_5 = '07'

  /** 単位（Ｇ） */
  static IF_TANI_G = ' G'

  /** 単位（ＣＳ） */
  static IF_TANI_CS = 'CS'

  /** 単位（コ） */
  static IF_TANI_KO = ' ｺ'

  /** 単位（ＫＧ）*/
  static IF_TANI_KG = 'KG'

  /** 単位（ＭＧ）*/
  static IF_TANI_MG = 'MG'

  /** 単位（Ｌ）*/
  static IF_TANI_L = 'L'

  /** 単位（ＭＬ）*/
  static IF_TANI_ML = 'ML'

  /** 原価要素区分：原料乳費(01) */
  static ST_GENKA_YOSO_GENRYONYU = '01'

  /** 原価要素区分：内部原料費(02) */
  static ST_GENKA_YOSO_NAIBU = '02'

  /** 原価要素区分：その他原料費(03) */
  static ST_GENKA_YOSO_SONOTA = '03'

  /** 原価要素区分：包装材料費(04) */
  static ST_GENKA_YOSO_HOSOZAIRYO = '04'

  /** 原価要素区分：原料乳費(05) */
  static ST_GENKA_YOSO_GENRYONYU_2 = '05'

  /** 原価要素区分：原料差額(06) */
  static ST_GENKA_YOSO_GENRYOSAGAKU = '06'

  /** 重量歩留計算区分：バター(01) */
  static ST_JURYOBUDOMARI_KEISAN_FAT = '01'

  /** 重量歩留計算区分：バター以外(02) */
  static ST_JURYOBUDOMARI_KEISAN_SOGYODO = '02'

  /** 仕掛品使用区分：残(02) */
  static ST_SHIKAKARI_SHIYO_ZAN = '02'

  /** 受信種別：入出荷データ(01) */
  static ST_JUSHIN_NYUSHUKKA = '01'
  /** 受信種別：投入実績データ(02) */
  static ST_JUSHIN_TONYU_JISSEKI = '02'
  //**** 0.27 2008/06/12 FJ)tamaki ADD STR ****
  /** 受信種別：出来高データワーク(03) */
  static ST_JUSHIN_DEKIDAKA = '03'
  //**** 0.27 2008/06/12 FJ)tamaki ADD END ****

  /** 展開状態：未展開(00) */
  static ST_TENKAI_MITENKAI = '00'
  /** 展開状態：展開済(01) */
  static ST_TENKAI_TENKAIZUMI = '01'
  /** 展開状態：受信エラー(08) */
  static ST_TENKAI_JUSHIN_ERROR = '08'
  /** 展開状態：展開エラー(09) */
  static ST_TENKAI_TENKAI_ERROR = '09'

  /** 更新処理区分：登録(00) */
  static ST_KOSHIN_SHORI_CREATE = '00'
  /** 更新処理区分：修正(01) */
  static ST_KOSHIN_SHORI_UPDATE = '01'
  /** 更新処理区分：削除(09) */
  static ST_KOSHIN_SHORI_DELETE = '09'

  /** データ種別：製品(09) */
  static IF_DATA_SEIZO_SEIHIN = '09'

  /** データ種別：副産物(06) */
  static IF_DATA_SEIZO_FUKUSANBUTSU = '06'

  /** データ種別：自家生産(08) */
  static IF_DATA_SEIZO_JIKASEISAN = '08'

  /** データ種別：製品投入(10) */
  static IF_DATA_SEIHIN_TONYU = '10'

  /** データ種別：自家生産製造への投入(07) */
  static IF_DATA_SEIZO_JIKASEISAN_TONYU = '07'

  /** データ補助種別：出来高(1001) */
  static IF_DATA_HOJO_DEKIDAKA = '1001'

  /** データ補助種別：製造原価戻し(1401) */
  static IF_DATA_HOJO_GENKA_MODOSHI = '1401'

  /** データ補助種別：自家生産出来高(1701) */
  static IF_DATA_HOJO_JIKASEISAN_DEKIDAKA = '1701'

  /** データ補助種別：内部原材料使用(1001) */
  static IF_DATA_HOJO_NAIBU_GENZAIRYO_TONYU = '1001'

  /** データ補助種別：その他原材料使用(1101) */
  static IF_DATA_HOJO_SONOTA_GENZAIRYO_TONYU = '1101'

  /** データ補助種別：包装材料使用(1201) */
  static IF_DATA_HOJO_HOSO_ZAIRYO_TONYU = '1201'

  /** データ補助種別：自家生産原材料使用(1401) */
  static IF_DATA_HOJO_JIKASEISAN_TONYU = '1401'

  /** データ補助種別：自家生産製造への使用(1701) */
  static IF_DATA_HOJO_SEIZO_JIKASEISAN_TONYU = '1701'

  /** 品目種別：出来高−製品(01) */
  static IF_HINMOKU_DEKIDAKA_SEIHIN = '01'

  /** 品目種別：出来高−半製品(02) */
  static IF_HINMOKU_DEKIDAKA_HANSEIHIN = '02'

  /** 品目種別：その他製造(04) */
  static IF_HINMOKU_SONOTA_SEIZO = '04'

  /** 品目種別：投入(04) */
  static IF_HINMOKU_TONYU = '04'

  /** 製品区分(半製品)(03) */
  static ST_SEIHIN_HANSEIHIN = '03'

  //	------ 2015.07.07 富士通）市瀬 ME-00512-000 ADD START ------
  /** 製品区分(半製品(自家生産))(09) */
  static ST_SEIHIN_HANSEIHIN_JIKASEISAN = '09'
  //	------ 2015.07.07 富士通）市瀬 ME-00512-000 ADD E N D ------

  //	------ 2014.05.18 富士通）木村 システム統合開発プロジェクト ADD START ------
  /** 乳市区分(乳食)(01) */
  static ST_NYUSHI_NYUSHOKU = '01'
  /** 乳市区分(市乳)(02) */
  static ST_NYUSHI_SHINYU = '02'
  //	------ 2014.05.18 富士通）木村 システム統合開発プロジェクト ADD E N D ------

  //  ------ 2014.04.15 富士通)李 システム統合開発プロジェクト ADD START ------
  /** 仕掛品倉庫フラグ(0:仕掛品以外) */
  static FG_SHIKAKARIHIN_OTHER = '0'
  /** 仕掛品倉庫フラグ(1:仕掛品) */
  static FG_SHIKAKARIHIN = '1'
  //  ------ 2014.04.15 富士通)李 システム統合開発プロジェクト ADD E N D ------

  //	------ 2014.06.04 富士通）武田 システム統合開発プロジェクト ADD START ------
  /** 入力品目区分(製品)(01) */
  static ST_NYURYOKU_HINMOKU_SEIHIN = '01'
  /** 入力品目区分(共通配合)(10) */
  static ST_NYURYOKU_HINMOKU_KYOUTSU_HAIGOU = '10'
  //	------ 2014.06.04 富士通）武田 システム統合開発プロジェクト ADD E N D ------

  //	------ 2014.06.04 富士通）石田 システム統合開発プロジェクト ADD START ------
  /** 取込種別 */
  static TORIKOMI_TRACK = '01' // トラックスケール
  static TORIKOMI_MILKO = '02' // ミルコスキャン
  static TORIKOMI_UKEIRE = '03' // 受入実績
  static TORIKOMI_HAINYU = '04' // 配乳実績
  static TORIKOMI_ITAKU = '05' // 委託加工実績

  /** 経理場所 */
  static ST_KEIRIBASHO_HOKKAIDO_NYUSHOKU = '01' // 北海道（乳食）
  static ST_KEIRIBASHO_HOKKAIDO_SINYU = '02' // 北海道（市乳）
  //	------ 2014.06.04 富士通）石田 システム統合開発プロジェクト ADD END   ------

  //	------ 2014.11.21 富士通）石田 システム統合開発プロジェクト ADD START ------
  /** 状態 */
  static ST_JOTAI_MIKAKUTEI = '00' // 確定
  static ST_JOTAI_KAKUTEI = '01' // 未確定

  //	------ 2014.11.21 富士通）石田 システム統合開発プロジェクト ADD END   ------
  //	------ 2016.04.18 富士通）石田 KK-00098-001 ADD START ------
  /** 月締状態 */
  static ST_SHIMEJOTAI_MIKAKUTEI = '0' // 確定
  static ST_SHIMEJOTAI_KAKUTEI = '1' // 未確定
  //	------ 2016.04.18 富士通）石田 KK-00098-001 ADD END   ------
  /** ログレベル：デバッグ */
  static LEVEL_DEBUG = -1

  _getName(): string {
    return 'YPMCommonConst'
  }

  static _getName(): string {
    return 'YPMCommonConst'
  }

  _getType() {
    return YPMCommonConst as any
  }

  _getFullName(): string {
    return 'ypm.cmn.YPMCommonConst'
  }

  static _getFullName(): string {
    return 'ypm.cmn.YPMCommonConst'
  }
}
