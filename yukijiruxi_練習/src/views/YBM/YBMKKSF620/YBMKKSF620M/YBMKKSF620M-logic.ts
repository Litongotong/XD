/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { YBMKKSCjfConst } from '../YBMKKSF000/YBMKKSCjfConst';
import { YBMKKSCjfLogicBase } from '../YBMKKSF000/YBMKKSCjfLogicBase';


import { BigDecimal } from '@/lib/native/util/BigDecimal';
import { DecimalFormat } from '@/lib/native/util/DecimalFormat';
import { ArrayList } from '@/lib/native/util/ArrayList';
import { HashMap } from '@/lib/native/util/HashMap';
import { List } from '@/lib/native/util/List';
import { JCFContext } from '@/lib/jcf/ctrl/JCFContext';
import { JCFEvent } from '@/lib/jcf/ctrl/JCFEvent';
import { JCFEventAdditionalInfo } from '@/lib/jcf/ctrl/JCFEventAdditionalInfo';
import { JCFException } from '@/lib/jcf/ctrl/JCFException';
import { JCFMessageOnWindow } from '@/lib/jcf/ctrl/JCFMessageOnWindow';
import { JCFReturnInfo } from '@/lib/jcf/ctrl/JCFReturnInfo';
import { JCFScreenData } from '@/lib/jcf/ctrl/JCFScreenData';
import { JCFComboBoxData } from '@/lib/jcf/gui/JCFComboBoxData';
import { JCFDataException } from '@/lib/jcf/gui/JCFDataException';
import { JCFFieldDoubleData } from '@/lib/jcf/gui/JCFFieldDoubleData';
import { JCFFieldLongData } from '@/lib/jcf/gui/JCFFieldLongData';
import { JCFFieldStringData } from '@/lib/jcf/gui/JCFFieldStringData';
import { JCFItemData } from '@/lib/jcf/gui/JCFItemData';
import { JCFPushButtonData } from '@/lib/jcf/gui/JCFPushButtonData';
import { JCFSelectableElement } from '@/lib/jcf/gui/JCFSelectableElement';
import { JCFSpreadAdditionalInfo } from '@/lib/jcf/gui/JCFSpreadAdditionalInfo';
import { JCFSpreadCellPosition } from '@/lib/jcf/gui/JCFSpreadCellPosition';
import { JCFSpreadData } from '@/lib/jcf/gui/JCFSpreadData';
import { JCFToggleButtonData } from '@/lib/jcf/gui/JCFToggleButtonData';
import { SMSCheckField } from '@/lib/sms/sol/sys/SMSCheckField';
import { SMSColor } from '@/lib/sms/sol/sys/SMSColor';
import { SMSDateStringUtil } from '@/lib/sms/sol/sys/SMSDateStringUtil';
import { SMSHashKeyConst } from '@/lib/sms/sol/sys/SMSHashKeyConst';
import { SMSLoginInfoImpl } from '@/lib/sms/sol/sys/SMSLoginInfoImpl';
import { SMSMessageConst } from '@/lib/sms/sol/sys/SMSMessageConst';
import { SMSPropsInfos } from '@/lib/sms/sol/sys/SMSPropsInfos';
import { SMSRuntimeException } from '@/lib/sms/sol/sys/SMSRuntimeException';
import { SMSCLLog } from '@/lib/sms/sol/sys/cjf/SMSCLLog';
import { SMSCjfLogicBase } from '@/lib/sms/sol/sys/cjf/SMSCjfLogicBase';
import { SMSJCFSpreadData } from '@/lib/sms/sol/sys/cjf/SMSJCFSpreadData';
import { SMSHeaderFooterManager } from '@/lib/sms/sol/sys/cjf/logic/SMSHeaderFooterManager';



/**
 * 配賦マスタ画面ロジッククラスです。
 * @class
 * @extends YBMKKSCjfLogicBase
 */
export default class YBMKKSF620MLogic extends YBMKKSCjfLogicBase {
    /**
     * アイテムID 事業登録比率(ラジオボタン)
     */
    static ITEM_JIGYO_TOROKU_HIRITSU: string = "jigyoTorokuHiritsu";

    /**
     * アイテムID ライン比率(ラジオボタン)
     */
    static ITEM_LINE_HIRITSU: string = "lineHiritsu";

    /**
     * アイテムID 年度
     */
    static ITEM_DT_NENDO: string = "dtNendo";

    /**
     * アイテムID 組織コード
     */
    static ITEM_CD_SOSHIKI: string = "cdSoshiki";

    /**
     * アイテムID 組織名
     */
    static ITEM_NM_SOSHIKI: string = "nmSoshiki";

    /**
     * アイテムID 勘定科目コード
     */
    static ITEM_CD_KAMOKU: string = "cdKanjokamoku";

    /**
     * アイテムID 勘定科目名
     */
    static ITEM_NM_KAMOKU: string = "nmKanjokamoku";

    /**
     * アイテムID 補助科目コード
     */
    static ITEM_CD_HOJOKAMOKU: string = "cdHojokamoku";

    /**
     * アイテムID 補助科目名
     */
    static ITEM_NM_HOJOKAMOKU: string = "nmHojokamoku";

    /**
     * アイテムID 予算比率合計
     */
    static ITEM_SUM_YOSAN_HIRITSU: string = "sumYosanHiritsu";

    /**
     * アイテムID 実績比率合計
     */
    static ITEM_SUM_JISSEKI_HIRITSU: string = "sumJissekiHiritsu";

    /**
     * アイテムID 前回予算合計
     */
    static ITEM_SUM_ZENKAI_YOSAN: string = "sumZenkaiYosan";

    /**
     * アイテムID 前回実績合計
     */
    static ITEM_SUM_ZENKAI_JISSEKI: string = "sumZenkaiJisseki";

    /**
     * アイテムID 件数
     */
    static ITEM_NO_COUNT: string = "count";

    /**
     * アイテムID 行追加ボタン
     */
    static ITEM_BTN_LINE_ADD: string = "addRow";

    /**
     * アイテムID 複写ボタン
     */
    static ITEM_BTN_COPY: string = "fukusya";

    /**
     * アイテムID スプレッド
     */
    static ITEM_SPREAD: string = "spread";

    /**
     * ユースケースID
     */
    static USECASE: string = "YBMKKSF620";

    /**
     * 配賦Msgキー ヘッダMsg
     */
    static HAIFU_MSG_KEY_HEADER_MSG: string = "headerMsg";

    /**
     * 配賦Msgキー 明細Msg
     */
    static HAIFU_MSG_KEY_DETAIL_MSG_LIST: string = "detailMsgList";

    /**
     * 配賦ヘッダMsgキー 配賦区分
     */
    static HEADER_MSG_KEY_ST_HAIFU: string = "stHaifu";

    /**
     * 配賦ヘッダMsgキー 年度
     */
    static HEADER_MSG_KEY_DT_NENDO: string = "dtNendo";

    /**
     * 配賦ヘッダMsgキー 損益管理組織コード
     */
    static HEADER_MSG_KEY_CD_SOSHIKI: string = "cdSoshiki";

    /**
     * 配賦ヘッダMsgキー 損益管理組織略式名称
     */
    static HEADER_MSG_KEY_NM_SOSHIKI: string = "nmSoshiki";

    /**
     * 配賦ヘッダMsgキー 勘定科目コード
     */
    static HEADER_MSG_KEY_CD_KAMOKU: string = "cdKamoku";

    /**
     * 配賦ヘッダMsgキー 勘定科目略式名称
     */
    static HEADER_MSG_KEY_NM_KAMOKU: string = "nmKamoku";

    /**
     * 配賦ヘッダMsgキー 補助科目コード
     */
    static HEADER_MSG_KEY_CD_HOJOKAMOKU: string = "cdHojokamoku";

    /**
     * 配賦ヘッダMsgキー 補助科目略式名称
     */
    static HEADER_MSG_KEY_NM_HOJOKAMOKU: string = "nmHojokamoku";

    /**
     * 配賦ヘッダMsgキー 基準日
     */
    static HEADER_MSG_KEY_DT_KIJUN: string = "dtKijun";

    /**
     * 配賦ヘッダMsgキー 画面名
     */
    static HEADER_MSG_KEY_CD_GAMEN: string = "cdGamen";

    /**
     * 配賦明細Msgキー 配賦コード
     */
    static DETAIL_MSG_KEY_CD_HAIFU: string = "cdHaifu";

    /**
     * 配賦明細Msgキー 配賦略式名称
     */
    static DETAIL_MSG_KEY_NM_HAIFU: string = "nmHaifu";

    /**
     * 配賦明細Msgキー 階層レベル
     */
    static DETAIL_MSG_KEY_NO_KAISO_LEVEL: string = "noKaisoLevel";

    /**
     * 配賦明細Msgキー 予算・配賦率
     */
    static DETAIL_MSG_KEY_NU_YSN_HAIFURITSU: string = "nuYsnHaifuritsu";

    /**
     * 配賦明細Msgキー 実績・配賦率
     */
    static DETAIL_MSG_KEY_NU_JISK_HAIFURITSU: string = "nuJiskHaifuritsu";

    /**
     * 配賦明細Msgキー 予算・前回配賦率
     */
    static DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU: string = "nuYsnZenHaifuritsu";

    /**
     * 配賦明細Msgキー 実績・前回配賦率
     */
    static DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU: string = "nuJiskZenHaifuritsu";

    /**
     * 配賦明細Msgキー 更新日時
     */
    static DETAIL_MSG_KEY_TM_KOSHIN: string = "tmKoshin";

    /**
     * 配賦明細Msgキー 更新者名
     */
    static DETAIL_MSG_KEY_NM_KOSHINSHA: string = "nmKoshinsha";

    /**
     * 配賦明細Msgキー 論理削除フラグ
     */
    static DETAIL_MSG_KEY_FG_RONRISAKUJO: string = "fgRonrisakujo";

    /**
     * 配賦明細Msgキー 行番号
     */
    static DETAIL_MSG_KEY_NO_GYO: string = "noGyo";

    /**
     * 管理会計初期化共通メッセージキー 利用制限Msg
     */
    public static RIYO_SEIGEN_MSG: string = "riyoSeigenMsg";

    /**
     * 管理会計初期化共通メッセージキー 組織Msg
     */
    public static SONEKI_SOSHIKI_MSG: string = "sonekiSoshikiMsg";

    /**
     * 利用制限メッセージキー チェック結果
     */
    public static RIYO_SEIGEN_FG_RESULT: string = "fgResult";

    /**
     * 利用制限メッセージキー エラーメッセージ
     */
    public static RIYO_SEIGEN_IF_MSG: string = "ifMsg";

    /**
     * 組織メッセージキー 帳票セキュリティ区分
     */
    public static ST_KEIHI_CYOHYO: string = "stKeieiCyohyoSecurity";

    /**
     * 画面名取得キー
     */
    static PROPERTIES_KEY_NM_GAMEN: string = "YBMKKSF620M_SCREEN_NAME";

    /**
     * 最大表示数取得キー
     */
    static PROPERTIES_KEY_MAX_DISPLAY_CNT: string = "YBMKKSF620M_MAX_DISPLAY_CNT";

    /**
     * 最大検索数取得キー
     */
    static PROPERTIES_KEY_MAX_SELECT_CNT: string = "YBMKKSF620M_MAX_SELECT_CNT";

    /**
     * 画面ID
     */
    static CD_GAMEN_ID: string = "YBMKKSF620M";

    /**
     * 配賦区分 値 事業登録比率
     */
    static ST_HAIFU_JIGYO_TOROKU_HIRITSU: string = "01";

    /**
     * 配賦区分 値 ライン比率
     */
    static ST_HAIFU_LINE_HIRITSU: string = "02";

    /**
     * コマンド(verb) 初期表示
     */
    static COMMAND_INIT: string = "YBMHaifuCBSHandler.init3";

    /**
     * コマンド(verb) 事業登録比率取得
     */
    static COMMAND_GET_JIGYO_TOROKU_HIRITSU: string = "YBMHaifuCBSHandler.getJigyoTorokuHiritsu";

    /**
     * コマンド(verb) 事業登録比率登録
     */
    static COMMAND_RGS_JIGYO_TOROKU_HIRITSU: string = "YBMHaifuCBSHandler.rgsJigyoTorokuHiritsu";

    /**
     * コマンド(verb) 事業登録比率CSVダウンロード
     */
    static COMMAND_GET_JIGYO_TOROKU_HIRITSU_CSV: string = "YBMHaifuCBSHandler.getJigyoTorokuHiritsuCSV";

    /**
     * フッタボタンラベル
     */
    static FOOTER_LABEL: string[]; public static FOOTER_LABEL_$LI$(): string[] { if (YBMKKSF620MLogic.FOOTER_LABEL == null) { YBMKKSF620MLogic.FOOTER_LABEL = ["CSV\u53d6\u8fbc(F1)", "(F2)", "(F3)", "(F4)", "\u8a08\u7b97(F5)", "(F6)", "CSV\uff80\uff9e\uff73\uff9d\uff9b\uff70\uff84\uff9e(F7)", "\u5e33\u7968\u5370\u5237(F8)", "\u767b\u9332(F9)"]; }  return YBMKKSF620MLogic.FOOTER_LABEL; }

    /**
     * 計算済フラグ 計算済み
     */
    static FG_KEISANZUMI_TRUE: string = "TRUE";

    /**
     * 計算済フラグ 未計算
     */
    static FG_KEISANZUMI_FALSE: string = "FALSE";

    /**
     * 予算編成CBS名
     */
    static VAL_CBS_NAME: string = "YBMKKSCBS";

    /**
     * 利用制限判定フラグ 値
     */
    public static FG_SEIGEN_NASHI: string = "0";

    /**
     * 利用制限判定フラグ 値
     */
    public static FG_SEIGEN_ARI: string = "1";

    /**
     * 帳票セキュリティ区分(管理部) 値
     */
    public static ST_CYOHYO_KANRI: string = "01";

    /**
     * スプレッド インデックス 削除
     */
    static SPREAD_FG_DELETE: number = 0;

    /**
     * スプレッド インデックス 配賦コード
     */
    static SPREAD_CD_HAIFU: number = 1;

    /**
     * スプレッド インデックス 配賦名
     */
    static SPREAD_NM_HAIFU: number = 3;

    /**
     * スプレッド インデックス 階層
     */
    static SPREAD_NO_KAISOLEVEL: number = 4;

    /**
     * スプレッド インデックス 予算比率
     */
    static SPREAD_YOSAN_HIRITSU: number = 5;

    /**
     * スプレッド インデックス 実績比率
     */
    static SPREAD_JISSEKI_HIRITSU: number = 6;

    /**
     * スプレッド インデックス 前回予算
     */
    static SPREAD_ZENKAI_YOSAN: number = 7;

    /**
     * スプレッド インデックス 前回実績
     */
    static SPREAD_ZENKAI_JISSEKI: number = 8;

    /**
     * スプレッド インデックス 更新日時
     */
    static SPREAD_DT_KOSHIN: number = 9;

    /**
     * スプレッド インデックス 更新者
     */
    static SPREAD_NM_KOSHIN: number = 10;

    /**
     * ユーザ領域キー 明細MsgList
     */
    static USER_DATA_KEY_DETAIL_MSG_LIST: string = "detailMsgList";

    /**
     * ユーザ領域キー 年度
     */
    static USER_DATA_KEY_DT_NENDO: string = "dtNendo";

    /**
     * ユーザ領域キー 組織コード
     */
    static USER_DATA_KEY_CD_SOSHIKI: string = "cdSoshiki";

    /**
     * ユーザ領域キー 科目コード
     */
    static USER_DATA_KEY_CD_KAMOKU: string = "cdKamoku";

    /**
     * ユーザ領域キー 補助科目コード
     */
    static USER_DATA_KEY_CD_HOJOKAMOKU: string = "cdHojokamoku";

    /**
     * ユーザ領域キー 計算済フラグ
     */
    static USER_DATA_KEY_FG_KEISANZUMI: string = "fgKeisanzumi";

    /**
     * ユーザ領域キー 利用制限フラグ
     */
    static USER_DATA_FG_SEIGEN: string = "fgRiyouSeigen";

    /**
     * ユーザ領域キー 帳票セキュリティ区分
     */
    static USER_DATA_ST_CYOHYO: string = "stKeieiCyohyoSecurity";

    /**
     * @see com.fujitsu.sms.sol.sys.cjf.SMSCjfLogicBase#setUseCaseID()
     */
    setUseCaseID() {
        this.useCaseID = YBMKKSF620MLogic.USECASE;
    }

    /**
     * 初期表示イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public beforeDisplay(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.beforeDisplay start");
        try {
            super.checkDialogException(context);
            this.beforeDisplay2(event, context, returnInfo, YBMKKSF620MLogic.CD_GAMEN_ID, YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN, YBMKKSF620MLogic.ITEM_JIGYO_TOROKU_HIRITSU, YBMKKSF620MLogic.PROPERTIES_KEY_MAX_DISPLAY_CNT);
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.beforeDisplay end");
    }

    /**
     * 行追加ボタン押下イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public addRow(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.addRow start");
        try {
            this.addRow2(event, context, returnInfo, YBMKKSF620MLogic.PROPERTIES_KEY_MAX_DISPLAY_CNT);
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.addRow end");
    }

    /**
     * 表示ボタン押下イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public showJigyoTorokuHiritsu(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.showJigyoTorokuHiritsu start");
        try {
            this.show(event, context, returnInfo, YBMKKSF620MLogic.COMMAND_GET_JIGYO_TOROKU_HIRITSU, YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN);
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.showJigyoTorokuHiritsu end");
    }

    /**
     * 組織検索ボタン押下イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public showSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.showSoshiki start");
        try {
            const current: JCFScreenData = context.getCurrentScreenData();
            const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);

            // expected
            context.putSucceedData(YBMKKSCjfConst.SEARCH_ST_MODE, YBMKKSCjfConst.ST_MODE_SOSHIKI);

            context.putSucceedData(YBMKKSCjfConst.DT_TAISHO, this.getDtKijun(super.getComboID(dtNendo)));
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.showSoshiki end");
    }

    /**
     * 組織検索後表示前イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public setSoshiki(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.setSoshiki start");
        try {
            super.checkDialogException(context);
            const current: JCFScreenData = context.getCurrentScreenData();
            // expected
            // const cdSoshiki: JCFFieldStringData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI) as JCFFieldStringData; 
            // const nmSoshiki: JCFFieldStringData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_SOSHIKI) as JCFFieldStringData;

            // current translation
            const cdSoshiki: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
            const nmSoshiki: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_SOSHIKI);

            if (<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI) != null){
                cdSoshiki.setValue(<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SOSHIKI));
                nmSoshiki.setValue(<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_NM_SOSHIKI_RYAKU));
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
            }
            return;
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.setSoshiki end");
    }

    /**
     * 
     * 科目検索ボタン押下イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public showKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.showKamoku start");
        try {
            context.putSucceedData(YBMKKSCjfConst.SEARCH_ST_MODE, YBMKKSCjfConst.ST_MODE_KAMOKU_HOJOKAMOKU);
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.showKamoku end");
    }

    /**
     * 
     * 科目検索後表示前イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public setKamoku(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.setKamoku start");
        try {
            super.checkDialogException(context);
            const current: JCFScreenData = context.getCurrentScreenData();
            const cdKamoku: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
            const cdHojokamoku: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
            const nmKamoku: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_KAMOKU);
            const nmHojokamoku: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU);
            if (<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU) != null){
                cdKamoku.setValue(<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_KAMOKU));
                cdHojokamoku.setValue(<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_HOJOKAMOKU));
                nmKamoku.setValue(<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_NM_KAMOKU_RYAKU));
                nmHojokamoku.setValue(<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_NM_HOJOKAMOKU_RYAKU));
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
            }
            return;
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.setKamoku end");
    }

    /**
     * 事業検索ボタン押下イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public showJigyo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.showJigyo start");
        try {
            let cdKaisha: string = null;
            const dtKijun: string = null;
            const inData: any = <any>({});
            const loginInfo: SMSLoginInfoImpl = <SMSLoginInfoImpl>super.getLoginInfo(context);
            cdKaisha = loginInfo.getCdKaisha();
            const current: JCFScreenData = context.getCurrentScreenData();
            const spread: SMSJCFSpreadData = <SMSJCFSpreadData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            const eventInfo: JCFEventAdditionalInfo = event.getEventAdditionalInfo();
            const spreadAdditionalInfo: JCFSpreadAdditionalInfo = <JCFSpreadAdditionalInfo><any>eventInfo.getAdditionalInfo();
            const position: JCFSpreadCellPosition = spreadAdditionalInfo.getCellPosition();
            const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
            const cdJigyo: string = spread.getCellValue(position.row, YBMKKSF620MLogic.SPREAD_CD_HAIFU);
            super.putUserData(context, SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION, spreadAdditionalInfo.getCellPosition());
            if (SMSCheckField.isValidString(cdJigyo) && SMSCheckField.checkLength(cdJigyo, 6)){
                const literalCondition: Array<any> = <any>([]);

                // expected
                // literalCondition.add(cdKaisha);
				// inData.put(YBMKKSCjfConst.HANYO_CONDITION_1, cdJigyo);
				// inData.put(YBMKKSCjfConst.HANYO_CONDITION_2, getDtKijun(super.getComboID(dtNendo)));

                // current translation
                /* add */(literalCondition.push(cdKaisha)>0);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, YBMKKSCjfConst.HANYO_CONDITION_1, cdJigyo);
                /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, YBMKKSCjfConst.HANYO_CONDITION_2, this.getDtKijun(super.getComboID(dtNendo)));
                
                
                let nmSeihingun: string = null;
                let noKaisoLevel: string = null;
                if (SMSCheckField.isValidString(cdJigyo)){
                    nmSeihingun = super.getNameByGeneralSearch(context, YBMKKSCjfConst.HANYO_SEARCH_SEIHINGUN_2, inData, literalCondition, YBMKKSCjfConst.HANYO_RESULT_3);
                    noKaisoLevel = super.getNameByGeneralSearch(context, YBMKKSCjfConst.HANYO_SEARCH_SEIHINGUN_2, inData, literalCondition, YBMKKSCjfConst.HANYO_RESULT_5);
                }
                if (SMSCheckField.isValidString(nmSeihingun)){
                    spread.setCellValue(position.row, YBMKKSF620MLogic.SPREAD_NM_HAIFU, nmSeihingun);
                    spread.setCellValue(position.row, YBMKKSF620MLogic.SPREAD_NO_KAISOLEVEL, noKaisoLevel);
                    returnInfo.cancelScreenTransition();
                    spread.setPosition(position.row, spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                    return;
                }
            }
            context.putSucceedData(YBMKKSCjfConst.SEARCH_ST_MODE, this.ST_MODE_SEIHINGUN);
            context.putSucceedData(YBMKKSCjfConst.DT_TAISHO, this.getDtKijun(super.getComboID(dtNendo)));
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.showJigyo end");
    }

    /**
     * 事業検索後表示前イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public setJigyo(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.setJigyo start");
        try {
            super.checkDialogException(context);
            const current: JCFScreenData = context.getCurrentScreenData();
            const spread: SMSJCFSpreadData = <SMSJCFSpreadData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            let position: JCFSpreadCellPosition = null;
            position = <JCFSpreadCellPosition>super.getUserData(context, SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION);
            if (position == null){
                return;
            }
            if (<string>context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SEIHINGUN) != null){
                spread.setCellValue(position.row, YBMKKSF620MLogic.SPREAD_CD_HAIFU, <string>context.getSucceedData(YBMKKSCjfConst.SEARCH_CD_SEIHINGUN));
                spread.setCellValue(position.row, YBMKKSF620MLogic.SPREAD_NM_HAIFU, <string>context.getSucceedData(YBMKKSCjfConst.SEARCH_NM_SEIHINGUN_RYAKU));
                spread.setCellValue(position.row, YBMKKSF620MLogic.SPREAD_NO_KAISOLEVEL, <string>context.getSucceedData(YBMKKSCjfConst.SEARCH_JIGYO_NO_KAISO_LEVEL));
            }
            super.removeUserData(context, <any>SMSHashKeyConst.GENE_SEARCH_SPREAD_EVENT_POSITION);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            spread.setPosition(position.row, spread.getColumnInformationName(position.column));
            return;
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.setJigyo end");
    }

    /**
     * 計算ボタン押下イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public calcGokei(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.calcGokei start");
        try {
            this.calcGokei2(event, context, returnInfo, YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN);
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.calcGokei end");
    }

    /**
     * /* CSVﾀﾞｳﾝﾛｰﾄﾞボタン押下イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public csvDownload(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.csvDownload start-----");
        try {
            this.csvDownload2(event, context, returnInfo, YBMKKSF620MLogic.COMMAND_GET_JIGYO_TOROKU_HIRITSU_CSV, YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN, YBMKKSF620MLogic.CD_GAMEN_ID);
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.csvDownload end--------");
    }

    /**
     * /* 登録ボタン押下イベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public register(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.register start");
        try {
            this.register2(event, context, returnInfo, YBMKKSF620MLogic.COMMAND_RGS_JIGYO_TOROKU_HIRITSU, YBMKKSF620MLogic.ITEM_JIGYO_TOROKU_HIRITSU, YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN);
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.register end");
    }

    /**
     * 初期表示実行済フラグクリアイベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public removeInitFlag(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.removeInitFlag start");
        try {
            let fgInit: any = null;
            const fgKeisanzumi: any = null;
            fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT);
            if (fgInit != null){
                super.removeUserData(context, <any>YBMKKSCjfConst.FG_INIT);
            }
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.removeInitFlag end");
    }

    /**
     * 初期表示実行済フラグクリアイベントハンドラです。
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     */
    public removeInitFlag1(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogic.removeInitFlag start");
        try {
            const current: JCFScreenData = context.getCurrentScreenData();
            let fgInit: any = null;
            const fgKeisanzumi: any = null;
            if (this.isHeaderConditionChanged(context, current, returnInfo, ["\u8907\u5199", "\u8907\u5199"])){
                returnInfo.cancelScreenTransition();
                return;
            }
            fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT);
            if (fgInit != null){
                super.removeUserData(context, <any>YBMKKSCjfConst.FG_INIT);
            }
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.removeInitFlag end");
    }

    /**
     * /* 初期表示の実際の処理を行います。(YBMKKSF620MとYBMKKSF624Sの共通化のため)
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     * @param {string} cdGamenId 画面ID
     * @param {string} nmGamen 画面名
     * @param {string} cursorItem フォーカス設定項目
     * @param {string} maxDispCount
     */
    beforeDisplay2(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, cdGamenId: string, nmGamen: string, cursorItem: string, maxDispCount: string) {
        const loginInfo: SMSLoginInfoImpl = <SMSLoginInfoImpl>super.getLoginInfo(context);
        let sysData: any = null;
        const kankyoSetteiJoho: any = null;
        const current: JCFScreenData = context.getCurrentScreenData();
        const toggle: JCFToggleButtonData = <JCFToggleButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, cursorItem);
        const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
        const btnLineAdd: JCFPushButtonData = <JCFPushButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_BTN_LINE_ADD);
        const spread: SMSJCFSpreadData = <SMSJCFSpreadData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
        const btnFukusha: JCFPushButtonData = <JCFPushButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_BTN_COPY);
        let fgInit: any = null;
        const maxDisplayCnt: string = SMSPropsInfos.getProperty(YBMKKSCjfConst.SUB_SYSTEM_ID, maxDispCount);
        loginInfo.setQtSaidaiHyouji(maxDisplayCnt);
        const maxSelectCnt: string = SMSPropsInfos.getProperty(YBMKKSCjfConst.SUB_SYSTEM_ID, YBMKKSF620MLogic.PROPERTIES_KEY_MAX_SELECT_CNT);
        loginInfo.setQtSaidaiKensaku(maxSelectCnt);
        super.setCdGamen(context, cdGamenId);
        fgInit = super.getUserData(context, YBMKKSCjfConst.FG_INIT);

        if (fgInit != null){

            // expected
            // SMSCLLog.debug("初期化実行判定：初期化実行済み");

            // current translation
            SMSCLLog.debug("\u521d\u671f\u5316\u5b9f\u884c\u5224\u5b9a\uff1a\u521d\u671f\u5316\u5b9f\u884c\u6e08\u307f");
            return;
        }

        super.putUserData(context, YBMKKSCjfConst.FG_INIT, YBMKKSCjfConst.FG_INIT_TRUE);
        SMSHeaderFooterManager.initHeader(event, context);
        const screenName: string = SMSPropsInfos.getProperty(YBMKKSCjfConst.SUB_SYSTEM_ID, nmGamen);
        SMSHeaderFooterManager.setHeaderTitle(context, screenName, cdGamenId);
        SMSHeaderFooterManager.initFooter(context, YBMKKSF620MLogic.FOOTER_LABEL_$LI$());
        SMSHeaderFooterManager.setAllFooterButtonEnabled(context, false);
        SMSHeaderFooterManager.initInformation(context);
        btnLineAdd.setEnabled(false);
        btnFukusha.setEnabled(false);
        spread.removeAllRow();
        const dtUnyo: string = loginInfo.getDtUnyo();
        let nendo: number = /* parseInt */parseInt(dtUnyo.substring(0, 4));
        const tsuki: string = dtUnyo.substring(4, 6);
        if ((tsuki === ("01")) || (tsuki === ("02")) || (tsuki === ("03"))){
            nendo -= 1;
        }
        const dtNendoElement: JCFSelectableElement[] = [null, null, null];
        const tonendo: string = /* toString */(''+(nendo));
        const jinendo: string = /* toString */(''+(nendo + 1));
        const zennendo: string = /* toString */(''+(nendo - 1));
        dtNendoElement[0] = new JCFSelectableElement(zennendo, zennendo, false);
        dtNendoElement[1] = new JCFSelectableElement(tonendo, tonendo, true);
        dtNendoElement[2] = new JCFSelectableElement(jinendo, jinendo, false);
        dtNendo.setValue(dtNendoElement);
        spread.setZeroPaddingDecimal(spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU), 2);
        spread.setZeroPaddingDecimal(spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU), 2);
        spread.setZeroPaddingDecimal(spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_ZENKAI_YOSAN), 2);
        spread.setZeroPaddingDecimal(spread.getColumnInformationName(YBMKKSF620MLogic.SPREAD_ZENKAI_JISSEKI), 2);
        toggle.setValue(true);
        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, cursorItem);
        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN1, true);
        const inData: any = <any>({});
        const headerMap: any = <any>({});
        const outData: any = this.callEJB(context, event, YBMKKSF620MLogic.VAL_CBS_NAME, YBMKKSF620MLogic.COMMAND_INIT, inData);
        if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>outData, SMSHashKeyConst.PARAM_KEY_DATA)){
            sysData = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_DATA);
        } else {
            SMSCLLog.error("\u74b0\u5883\u8a2d\u5b9a\u60c5\u5831\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002");
            throw new SMSRuntimeException(context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015));
        }
        if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>sysData, YBMKKSF620MLogic.RIYO_SEIGEN_MSG)){
            const riyoSeigenMsg: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>sysData, YBMKKSF620MLogic.RIYO_SEIGEN_MSG);
            const riyoFlg: boolean = !/* booleanValue */(<boolean>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>riyoSeigenMsg, YBMKKSF620MLogic.RIYO_SEIGEN_FG_RESULT));
            const errorMessage: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>riyoSeigenMsg, YBMKKSF620MLogic.RIYO_SEIGEN_IF_MSG);
            if (riyoFlg){
                SMSHeaderFooterManager.showInformation(context, errorMessage);
                super.putUserData(context, YBMKKSF620MLogic.USER_DATA_FG_SEIGEN, YBMKKSF620MLogic.FG_SEIGEN_ARI);
            } else {
                super.putUserData(context, YBMKKSF620MLogic.USER_DATA_FG_SEIGEN, YBMKKSF620MLogic.FG_SEIGEN_NASHI);
            }
        } else {
            SMSCLLog.error("\u5229\u7528\u5236\u9650\u60c5\u5831\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002");
            throw new SMSRuntimeException(context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015));
        }
        if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>sysData, YBMKKSF620MLogic.SONEKI_SOSHIKI_MSG)){
            const SoshikiMsg: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>sysData, YBMKKSF620MLogic.SONEKI_SOSHIKI_MSG);
            const stChohyo: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>SoshikiMsg, YBMKKSF620MLogic.ST_KEIHI_CYOHYO);
            if (!(stChohyo === YBMKKSF620MLogic.ST_CYOHYO_KANRI)){
                spread.setColumnInformationEditable("__COL_6", false);
                super.putUserData(context, YBMKKSF620MLogic.USER_DATA_ST_CYOHYO, stChohyo);
            } else {
                super.putUserData(context, YBMKKSF620MLogic.USER_DATA_ST_CYOHYO, stChohyo);
            }
        } else {
            SMSCLLog.error("\u5229\u7528\u5236\u9650\u60c5\u5831\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002");
            throw new SMSRuntimeException(context.getMessageUtil().getMessage(SMSMessageConst.YCSCMNMSE015));
        }
    }

    /**
     * /* 表示ボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     * @param {string} command コマンド
     * @param {string} gamenID
     */
    show(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, command: string, gamenID: string) {
        const current: JCFScreenData = context.getCurrentScreenData();
        const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
        const cdSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
        const nmSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_SOSHIKI);
        const cdKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
        const nmKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_KAMOKU);
        const cdHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
        const nmHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU);
        const count: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NO_COUNT);
        const btnLineAdd: JCFPushButtonData = <JCFPushButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_BTN_LINE_ADD);
        const spread: SMSJCFSpreadData = <SMSJCFSpreadData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
        const btnFukusha: JCFPushButtonData = <JCFPushButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_BTN_COPY);
        this.clearError(context, false);
        if (!this.checkHeaderCondition(context, current, returnInfo, gamenID)){
            return;
        }
        super.putUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_DT_NENDO, super.getComboID(dtNendo));
        super.putUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_CD_SOSHIKI, cdSoshiki.getValue());
        super.putUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_CD_KAMOKU, cdKamoku.getValue());
        super.putUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_CD_HOJOKAMOKU, cdHojokamoku.getValue());
        let headerMsg: any = <any>({});
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_ST_HAIFU, this.getStHaifu(context));
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_DT_NENDO, super.getComboID(dtNendo));
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI, cdSoshiki.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU, cdKamoku.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU, cdHojokamoku.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_DT_KIJUN, this.getDtKijun(super.getComboID(dtNendo)));
        const inData: any = <any>({});
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG, headerMsg);
        let outData: any = null;
        let detailMsgList: any[] = null;
        outData = this.callEJB(context, event, YBMKKSCjfConst.CBS_NAME, command, inData);
        const rtnData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_DATA);
        const errFlg: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
        let loginInfo: SMSLoginInfoImpl = <SMSLoginInfoImpl>super.getLoginInfo(context);
        headerMsg = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>rtnData, YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG);
        if ((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === SMSHashKeyConst.IS_SUCCESS){
            detailMsgList = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>rtnData, YBMKKSF620MLogic.HAIFU_MSG_KEY_DETAIL_MSG_LIST);
            count.setValue(/* toString */(''+(detailMsgList.length)));
            nmSoshiki.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_SOSHIKI));
            nmKamoku.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_KAMOKU));
            nmHojokamoku.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_HOJOKAMOKU));
            btnLineAdd.setEnabled(true);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN7, true);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
            if (detailMsgList.length === 0){
                spread.removeAllRow();
                super.putUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST, []);
                SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN5, false);
                btnFukusha.setEnabled(false);
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_JIGYO_TOROKU_HIRITSU);
                SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMSW056);
                const sumYosanHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU);
                const sumJissekiHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU);
                const sumZenkaiYosanHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_ZENKAI_YOSAN);
                const sumZenkaiJissekiHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_ZENKAI_JISSEKI);
                sumYosanHiritsu.setValue("0.00");
                sumJissekiHiritsu.setValue("0.00");
                sumZenkaiYosanHiritsu.setValue("0.00");
                sumZenkaiJissekiHiritsu.setValue("0.00");
            } else {
                this.setDataToSpread(context, detailMsgList);
                btnFukusha.setEnabled(true);
                SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN5, true);
                SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMSI020, [/* toString */(''+(detailMsgList.length))]);
            }
        } else if ((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === SMSHashKeyConst.IS_WARNING){
            spread.removeAllRow();
            const sumYosanHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU);
            const sumJissekiHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU);
            const sumZenkaiYosanHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_ZENKAI_YOSAN);
            const sumZenkaiJissekiHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_ZENKAI_JISSEKI);
            sumYosanHiritsu.setValue("0.00");
            sumJissekiHiritsu.setValue("0.00");
            sumZenkaiYosanHiritsu.setValue("0.00");
            sumZenkaiJissekiHiritsu.setValue("0.00");
            const kensu: JCFFieldLongData = <JCFFieldLongData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NO_COUNT);
            kensu.setValue(/* parseLong */parseInt("0"));
            btnFukusha.setEnabled(false);
            loginInfo = <SMSLoginInfoImpl>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>rtnData, SMSHashKeyConst.PARAM_KEY_COMMON);
            const errorItem: string = loginInfo.getCdErrorKoumoku();
            let cdErrorKomokuItem: string = null;
            if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU){
                cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_KAMOKU;
                nmKamoku.setValue("");
            } else if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI){
                cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_SOSHIKI;
                nmSoshiki.setValue("");
            } else if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU){
                cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU;
                nmHojokamoku.setValue("");
            }
            if (SMSCheckField.isValidString(cdErrorKomokuItem)){
                const fieldErrorKoumoku: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, cdErrorKomokuItem);
                fieldErrorKoumoku.setBackground(SMSColor.WARNING);
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, cdErrorKomokuItem);
            }
        }
        const kengen: string = super.getUserData(context, YBMKKSF620MLogic.USER_DATA_FG_SEIGEN).toString();

        // 利用制限による登録機能の無効化
		if(kengen === YBMKKSF620MLogic.FG_SEIGEN_ARI){
			// 登録無効
			// 計算ボタンを非活性化する
			SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN5, false);
			// 登録ボタンを非活性化する
			SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN5, false);
			// 行追加ボタンを非活性化する
			btnLineAdd.setEnabled(false);
			// 複写ボタンを非活性化する
			btnFukusha.setEnabled(false);
			// スプレッドを非活性化する
			spread.setEnabled(false);
        }
    
        if (kengen === YBMKKSF620MLogic.FG_SEIGEN_ARI){
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN5, false);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN5, false);
            btnLineAdd.setEnabled(false);
            btnFukusha.setEnabled(false);
            spread.setEnabled(false);
        }
    }

    /**
     * 行追加ボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     * @param subSystemId サブシステムID
     * @param {string} maxDisplayCnt 最大表示件数
     */
    addRow2(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, maxDisplayCnt: string) {
        const current: JCFScreenData = context.getCurrentScreenData();
        const spread: SMSJCFSpreadData = <SMSJCFSpreadData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
        let positions: JCFSpreadCellPosition[] = null;
        let rowCnt: number = spread.getRowCount() - 1;
        if (spread.getRowCount() >= /* parseInt */parseInt(SMSPropsInfos.getProperty(YBMKKSCjfConst.SUB_SYSTEM_ID, maxDisplayCnt))){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YBMYHSMCW009);
            return;
        } else {
            spread.addRow();
            positions = spread.getSelectedCellsPosition();
            if (positions != null){
                for(let i: number = 0; i < positions.length; i++) {{
                    spread.setCellSelected(positions[i].row, positions[i].column, false);
                };}
            }
            rowCnt = spread.getRowCount() - 1;
            spread.setViewport(new JCFSpreadCellPosition(rowCnt, 0));
            spread.setCellSelected(rowCnt, 0, true);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN5, true);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN7, true);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
        }
    }

    /**
     * 計算ボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     * @param cursorItem フォーカス設定項目
     * @param {string} gamenID
     */
    calcGokei2(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, gamenID: string) {
        const current: JCFScreenData = context.getCurrentScreenData();
        const spread: JCFSpreadData = <JCFSpreadData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
        const sumYosanHiritsuFdb: JCFFieldDoubleData = <JCFFieldDoubleData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU);
        const sumJissekiHiritsuFdb: JCFFieldDoubleData = <JCFFieldDoubleData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU);
        const f5Button: JCFPushButtonData = <JCFPushButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_FOOTER, SMSHeaderFooterManager.ITEM_FUNCBTN5);
        if (!f5Button.isEnabled()){
            return;
        }
        this.clearError(context, false);
        if (spread.getRowCount() === 0){
            return;
        }
        const messageString: string[] = [null];
        let nmHaifu: string = null;
        if (gamenID === YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN){
            messageString[0] = "\u4e8b\u696d\u30b3\u30fc\u30c9";
            nmHaifu = "\u4e8b\u696d\u30b3\u30fc\u30c9";
        } else {
            messageString[0] = "\u8077\u5834\u30b3\u30fc\u30c9";
            nmHaifu = "\u8077\u5834\u30b3\u30fc\u30c9";
        }
        if (this.isHeaderConditionChanged(context, current, returnInfo, ["\u8a08\u7b97", "\u8a08\u7b97"])){
            return;
        }
        const detailMsgListOld: any[] = <any[]>super.getUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST);
        let cdHaifuOld: string = null;
        for(let i: number = 0; i < spread.getRowCount(); i++) {{
            for(let k: number = YBMKKSF620MLogic.SPREAD_CD_HAIFU; k < YBMKKSF620MLogic.SPREAD_ZENKAI_YOSAN; k++) {{
                spread.setCellSelected(i, k, false);
                spread.setCellBackground(i, k, SMSColor.DEFAULT);
            };}
        };}
        let sumYosanHiritsu: BigDecimal = null;
        let sumJissekiHiritsu: BigDecimal = null;
        sumYosanHiritsu = new BigDecimal(0.0).setScale(2);
        sumJissekiHiritsu = new BigDecimal(0.0).setScale(2);
        const stCyohyo: string = <string>super.getUserData(context, YBMKKSF620MLogic.USER_DATA_ST_CYOHYO);
        const cdHaifuMap: any = <any>({});
        for(let i: number = 0; i < spread.getRowCount(); i++) {{
            if (i < detailMsgListOld.length){
                cdHaifuOld = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU);
                if (!(cdHaifuOld === spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU))){
                    spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                    spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                    spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                    SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YBMKKSMCW014, messageString);
                    SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                    returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                    return;
                } else {
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>cdHaifuMap, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU), new Number(i).valueOf());
                    if (spread.getCellBooleanValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE)){
                    } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU))){
                        const params: string[] = ["\u4e88\u7b97\u6bd4\u7387"];
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, params);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU)) && (stCyohyo === YBMKKSF620MLogic.ST_CYOHYO_KANRI)){
                        const params: string[] = ["\u5b9f\u7e3e\u6bd4\u7387"];
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, params);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else {
                        sumYosanHiritsu = sumYosanHiritsu.add(new BigDecimal(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU)).setScale(2, BigDecimal.ROUND_HALF_UP));
                        sumJissekiHiritsu = sumJissekiHiritsu.add(new BigDecimal(this.Zeros(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU))).setScale(2, BigDecimal.ROUND_HALF_UP));
                    }
                }
            } else {
                if (spread.getCellBooleanValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE)){
                    continue;
                } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU)) && !SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU)) && !SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU))){
                    continue;
                } else {
                    if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU))){
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, messageString);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        return;
                    } else if (!SMSCheckField.checkLength(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU), 6)){
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW028, [nmHaifu, "6"]);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>cdHaifuMap, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU))){
                        const rowNumber: number = <number>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>cdHaifuMap, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW043, messageString);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                        spread.setCellSelected(/* intValue */(rowNumber|0), YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                        spread.setCellBackground(/* intValue */(rowNumber|0), YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                        spread.setViewport(new JCFSpreadCellPosition(/* intValue */(rowNumber|0), YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU))){
                        const params: string[] = ["\u4e88\u7b97\u6bd4\u7387"];
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, params);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU)) && (stCyohyo === YBMKKSF620MLogic.ST_CYOHYO_KANRI)){
                        const params: string[] = ["\u5b9f\u7e3e\u6bd4\u7387"];
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, params);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else {
                        sumYosanHiritsu = sumYosanHiritsu.add(new BigDecimal(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU)).setScale(2, BigDecimal.ROUND_HALF_UP));
                        sumJissekiHiritsu = sumJissekiHiritsu.add(new BigDecimal(this.Zeros(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU))).setScale(2, BigDecimal.ROUND_HALF_UP));
                    }
                }
            }
        };}
        sumYosanHiritsuFdb.setValue(sumYosanHiritsu.doubleValue());
        sumJissekiHiritsuFdb.setValue(sumJissekiHiritsu.doubleValue());
        if ((sumYosanHiritsu.doubleValue() !== 100.0) && (sumYosanHiritsu.doubleValue() !== 0.0)){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YBMKKSMCW018);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            return;
        } else if ((sumJissekiHiritsu.doubleValue() !== 100.0) && (sumJissekiHiritsu.doubleValue() !== 0.0) && (stCyohyo === YBMKKSF620MLogic.ST_CYOHYO_KANRI)){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YBMKKSMCW018);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            return;
        } else {
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, true);
        }
    }

    /**
     * CSVﾀﾞｳﾝﾛｰﾄﾞボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     * @param {string} command コマンド
     * @param cursorItem フォーカス設定項目
     * @param {string} gamenID
     * @param {string} cdGamenId
     */
    csvDownload2(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, command: string, gamenID: string, cdGamenId: string) {
        const current: JCFScreenData = context.getCurrentScreenData();
        const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
        const cdSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
        const nmSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_SOSHIKI);
        const cdKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
        const nmKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_KAMOKU);
        const cdHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
        const nmHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU);
        const f7Button: JCFPushButtonData = <JCFPushButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_FOOTER, SMSHeaderFooterManager.ITEM_FUNCBTN7);
        if (!f7Button.isEnabled()){
            return;
        }
        this.clearError(context, false);
        if (!this.checkHeaderCondition(context, current, returnInfo, gamenID)){
            return;
        }
        super.setCdGamen(context, cdGamenId);
        const msgUtil: JCFMessageOnWindow = context.getMessageUtil();
        const ret: string = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC008);
        if (JCFMessageOnWindow.BTN_NO === ret){
            return;
        }
        let headerMsg: any = <any>({});
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_ST_HAIFU, this.getStHaifu(context));
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_DT_NENDO, super.getComboID(dtNendo));
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI, cdSoshiki.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU, cdKamoku.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU, cdHojokamoku.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_DT_KIJUN, this.getDtKijun(super.getComboID(dtNendo)));
        const inData: any = <any>({});
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG, headerMsg);
        let outData: any = null;
        const detail: any[] = null;
        outData = this.callEJB(context, event, YBMKKSCjfConst.CBS_NAME, command, inData);
        const rtnData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_DATA);
        const errFlg: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
        let loginInfo: SMSLoginInfoImpl = <SMSLoginInfoImpl>super.getLoginInfo(context);
        const cntKensu: string = <string>loginInfo.getQtKensaku();
        if ((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === SMSHashKeyConst.IS_SUCCESS){
            headerMsg = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>rtnData, YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG);
            nmSoshiki.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_SOSHIKI));
            nmKamoku.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_KAMOKU));
            nmHojokamoku.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_HOJOKAMOKU));
            if (!("0" === cntKensu)){
                super.downloadFile(context, SMSCjfLogicBase.DW_LOCAL);
                SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMSI020, [cntKensu]);
            } else {
                SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMSW056);
            }
        } else if ((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === SMSHashKeyConst.IS_WARNING){
            loginInfo = <SMSLoginInfoImpl>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>rtnData, SMSHashKeyConst.PARAM_KEY_COMMON);
            const errorItem: string = loginInfo.getCdErrorKoumoku();
            let cdErrorKomokuItem: string = null;
            if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU){
                cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_KAMOKU;
                nmKamoku.setValue("");
            } else if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI){
                cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_SOSHIKI;
                nmSoshiki.setValue("");
            } else if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU){
                cdErrorKomokuItem = YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU;
                nmHojokamoku.setValue("");
            }
            if (SMSCheckField.isValidString(cdErrorKomokuItem)){
                const fieldErrorKoumoku: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, cdErrorKomokuItem);
                fieldErrorKoumoku.setBackground(SMSColor.WARNING);
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, cdErrorKomokuItem);
            }
        }
    }

    /**
     * 登録ボタン押下イベントの実際の処理を行います。(YBMKKSF620M、YBMKKSF624S共通化のため)
     * @param {JCFEvent} event イベントクラス
     * @param {JCFContext} context コンテキスト
     * @param {JCFReturnInfo} returnInfo 業務ロジック復帰情報クラス
     * @param {string} command コマンド
     * @param {string} cursorItem フォーカス設定項目
     * @param {string} gamenID
     */
    register2(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo, command: string, cursorItem: string, gamenID: string) {
        const current: JCFScreenData = context.getCurrentScreenData();
        const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
        const cdSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
        const nmSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_SOSHIKI);
        const cdKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
        const nmKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_KAMOKU);
        const cdHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
        const nmHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU);
        const btnFukusha: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_BTN_COPY);
        const count: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NO_COUNT);
        const f9Button: JCFPushButtonData = <JCFPushButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_FOOTER, SMSHeaderFooterManager.ITEM_FUNCBTN9);
        const spread: SMSJCFSpreadData = <SMSJCFSpreadData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
        const sumYosanHiritsuFdb: JCFFieldDoubleData = <JCFFieldDoubleData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU);
        const sumJissekiHiritsuFdb: JCFFieldDoubleData = <JCFFieldDoubleData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU);
        if (!f9Button.isEnabled()){
            return;
        }
        let sumYosanHiritsu: BigDecimal = null;
        let sumJissekiHiritsu: BigDecimal = null;
        let loginInfo: SMSLoginInfoImpl = <SMSLoginInfoImpl>super.getLoginInfo(context);
        this.clearError(context, false);
        if (this.isHeaderConditionChanged(context, current, returnInfo, ["\u767b\u9332", "\u767b\u9332"])){
            return;
        }
        let nmHaifu: string = "";
        const messageString: string[] = [null];
        if (gamenID === YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN){
            nmHaifu = "\u4e8b\u696d\u30b3\u30fc\u30c9";
            messageString[0] = "\u4e8b\u696d\u30b3\u30fc\u30c9";
        } else {
            nmHaifu = "\u8077\u5834\u30b3\u30fc\u30c9";
            messageString[0] = "\u8077\u5834\u30b3\u30fc\u30c9";
        }
        sumYosanHiritsu = new BigDecimal(0.0);
        sumYosanHiritsu.setScale(2);
        sumJissekiHiritsu = new BigDecimal(0.0);
        sumJissekiHiritsu.setScale(2);
        const stCyohyo: string = <string>super.getUserData(context, YBMKKSF620MLogic.USER_DATA_ST_CYOHYO);
        let fgChange: boolean = false;
        let fgDelete: boolean = false;
        const detailMsgArrayList: Array<any> = <any>([]);
        let detailMsg: any = null;
        const cdHaifuMap: any = <any>({});
        const detailMsgListOld: any[] = <any[]>super.getUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST);
        let cdHaifuOld: string = null;
        for(let i: number = 0; i < spread.getRowCount(); i++) {{
            for(let k: number = YBMKKSF620MLogic.SPREAD_CD_HAIFU; k < YBMKKSF620MLogic.SPREAD_ZENKAI_YOSAN; k++) {{
                spread.setCellSelected(i, k, false);
                spread.setCellBackground(i, k, SMSColor.DEFAULT);
            };}
        };}
        for(let i: number = 0; i < spread.getRowCount(); i++) {{
            if (i < detailMsgListOld.length){
                cdHaifuOld = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU);
                if (!(cdHaifuOld === spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU))){
                    spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                    spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                    spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                    SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YBMKKSMCW014, messageString);
                    SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                    returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                    return;
                } else {
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>cdHaifuMap, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU), new Number(i).valueOf());
                    detailMsg = <any>({});
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_GYO, /* toString */(''+(i)));
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU));
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU));
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN, /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN));
                    if (spread.getCellBooleanValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE)){
                        fgChange = true;
                        fgDelete = true;
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU, "0.00");
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU, "0.00");
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_FG_RONRISAKUJO, "1");
                        /* add */(detailMsgArrayList.push(detailMsg)>0);
                    } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU))){
                        const params: string[] = ["\u4e88\u7b97\u6bd4\u7387"];
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, params);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU)) && (stCyohyo === YBMKKSF620MLogic.ST_CYOHYO_KANRI)){
                        const params: string[] = ["\u5b9f\u7e3e\u6bd4\u7387"];
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, params);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else {
                        const nuYosanHiritsu: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU);
                        const nuJissekiHiritsu: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgListOld[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU);
                        sumYosanHiritsu = sumYosanHiritsu.add(new BigDecimal(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU)).setScale(2, BigDecimal.ROUND_HALF_UP));
                        sumJissekiHiritsu = sumJissekiHiritsu.add(new BigDecimal(this.Zeros(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU))).setScale(2, BigDecimal.ROUND_HALF_UP));
                        if (!(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU) === nuYosanHiritsu) || !(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU) === nuJissekiHiritsu)){
                            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU));
                            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU, this.Zeros(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU)));
                            /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_FG_RONRISAKUJO, "0");
                            /* add */(detailMsgArrayList.push(detailMsg)>0);
                            fgChange = true;
                        } else {
                        }
                    }
                }
            } else {
                if (spread.getCellBooleanValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE)){
                    continue;
                } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU)) && !SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU)) && !SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU))){
                    continue;
                } else {
                    if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU))){
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, messageString);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        return;
                    } else if (!SMSCheckField.checkLength(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU), 6)){
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW028, [nmHaifu, "6"]);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>cdHaifuMap, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU))){
                        const rowNumber: number = <number>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>cdHaifuMap, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW043, messageString);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                        spread.setCellSelected(/* intValue */(rowNumber|0), YBMKKSF620MLogic.SPREAD_CD_HAIFU, true);
                        spread.setCellBackground(/* intValue */(rowNumber|0), YBMKKSF620MLogic.SPREAD_CD_HAIFU, SMSColor.WARNING);
                        spread.setViewport(new JCFSpreadCellPosition(/* intValue */(rowNumber|0), YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU))){
                        const params: string[] = ["\u4e88\u7b97\u6bd4\u7387"];
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, params);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else if (!SMSCheckField.isValidString(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU)) && (stCyohyo === YBMKKSF620MLogic.ST_CYOHYO_KANRI)){
                        const params: string[] = ["\u5b9f\u7e3e\u6bd4\u7387"];
                        SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, params);
                        spread.setCellSelected(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, true);
                        spread.setViewport(new JCFSpreadCellPosition(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU));
                        spread.setCellBackground(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, SMSColor.WARNING);
                        SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
                        returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                        return;
                    } else {
                        detailMsg = <any>({});
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_GYO, /* toString */(''+(i)));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU, spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU, this.Zeros(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU)));
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU, "0.00");
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU, "0.00");
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsg, YBMKKSF620MLogic.DETAIL_MSG_KEY_FG_RONRISAKUJO, "0");
                        /* add */(detailMsgArrayList.push(detailMsg)>0);
                        fgChange = true;
                        sumYosanHiritsu = sumYosanHiritsu.add(new BigDecimal(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU)).setScale(2, BigDecimal.ROUND_HALF_UP));
                        sumJissekiHiritsu = sumJissekiHiritsu.add(new BigDecimal(this.Zeros(spread.getCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU))).setScale(2, BigDecimal.ROUND_HALF_UP));
                    }
                }
            }
        };}
        sumYosanHiritsuFdb.setValue(sumYosanHiritsu.doubleValue());
        sumJissekiHiritsuFdb.setValue(sumJissekiHiritsu.doubleValue());
        if ((sumYosanHiritsu.doubleValue() !== 100.0) && (sumYosanHiritsu.doubleValue() !== 0.0)){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YBMKKSMCW018);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            return;
        } else if ((sumJissekiHiritsu.doubleValue() !== 100.0) && (sumJissekiHiritsu.doubleValue() !== 0.0) && (stCyohyo === YBMKKSF620MLogic.ST_CYOHYO_KANRI)){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YBMKKSMCW018);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            return;
        } else if (!fgChange){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMSW057);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            return;
        } else {
            const msgUtil: JCFMessageOnWindow = context.getMessageUtil();
            if (fgDelete){
                const ret: string = msgUtil.showMessage(SMSMessageConst.YBMKKSMSC031);
                if (JCFMessageOnWindow.BTN_NO === ret){
                    return;
                }
            } else {
                const ret: string = msgUtil.showMessage(SMSMessageConst.YCSCMNMSC001);
                if (JCFMessageOnWindow.BTN_NO === ret){
                    return;
                }
            }
        }
        let headerMsg: any = <any>({});
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_ST_HAIFU, this.getStHaifu(context));
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_DT_NENDO, super.getComboID(dtNendo));
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI, cdSoshiki.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU, cdKamoku.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU, cdHojokamoku.getValue());
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_DT_KIJUN, this.getDtKijun(super.getComboID(dtNendo)));
        const inData: any = <any>({});
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG, headerMsg);
        let detailMsgList: any[] = <any[]>/* toArray */detailMsgArrayList.slice(0);
        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>inData, YBMKKSF620MLogic.HAIFU_MSG_KEY_DETAIL_MSG_LIST, detailMsgList);
        let outData: any = null;
        outData = this.callEJB(context, event, YBMKKSCjfConst.CBS_NAME, command, inData);
        const rtnData: any = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_DATA);
        const errFlg: string = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG);
        loginInfo = <SMSLoginInfoImpl>super.getLoginInfo(context);
        headerMsg = <any>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>rtnData, YBMKKSF620MLogic.HAIFU_MSG_KEY_HEADER_MSG);
        if ((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === SMSHashKeyConst.IS_SUCCESS){
            const itemSumYosanHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU);
            const itemSumJissekiHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU);
            const itemSumZenkaiYosanHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_ZENKAI_YOSAN);
            const itemSumZenkaiJissekiHiritsu: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_ZENKAI_JISSEKI);
            itemSumYosanHiritsu.setValue("0.00");
            itemSumJissekiHiritsu.setValue("0.00");
            itemSumZenkaiYosanHiritsu.setValue("0.00");
            itemSumZenkaiJissekiHiritsu.setValue("0.00");
            nmSoshiki.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_SOSHIKI));
            nmKamoku.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_KAMOKU));
            nmHojokamoku.setValue(<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>headerMsg, YBMKKSF620MLogic.HEADER_MSG_KEY_NM_HOJOKAMOKU));
            detailMsgList = <any[]>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>rtnData, YBMKKSF620MLogic.HAIFU_MSG_KEY_DETAIL_MSG_LIST);
            count.setValue(/* toString */(''+(detailMsgList.length)));
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMSI019, ["\u767b\u9332\u51e6\u7406"]);
            if (detailMsgList.length === 0){
                super.putUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST, []);
                spread.removeAllRow();
                btnFukusha.setEnabled(false);
                SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN5, false);
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, cursorItem);
                return;
            } else {
                btnFukusha.setEnabled(true);
                this.setDataToSpread(context, detailMsgList);
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            }
        } else if ((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>outData, SMSHashKeyConst.PARAM_KEY_ERROR_FLG)) === SMSHashKeyConst.IS_WARNING){
            btnFukusha.setEnabled(false);
            SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, false);
            loginInfo = <SMSLoginInfoImpl>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>rtnData, SMSHashKeyConst.PARAM_KEY_COMMON);
            const errorItem: string = loginInfo.getCdErrorKoumoku();
            let cdErrorItem: string = null;
            let nmErrorItem: string = null;
            let noErrorColumnCd: number = -1;
            const noErrorColumnNm: number = -1;
            let fgSpread: boolean = false;
            let noErrorGyo: number = 0;
            if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_KAMOKU){
                cdErrorItem = YBMKKSF620MLogic.ITEM_CD_KAMOKU;
                nmErrorItem = YBMKKSF620MLogic.ITEM_NM_KAMOKU;
            } else if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_SOSHIKI){
                cdErrorItem = YBMKKSF620MLogic.ITEM_CD_SOSHIKI;
                nmErrorItem = YBMKKSF620MLogic.ITEM_NM_SOSHIKI;
            } else if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_CD_HOJOKAMOKU){
                cdErrorItem = YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU;
                nmErrorItem = YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU;
            } else if (errorItem === YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU){
                noErrorColumnCd = YBMKKSF620MLogic.SPREAD_CD_HAIFU;
                noErrorGyo = /* parseInt */parseInt(loginInfo.getQtErrorRecordPosition());
                fgSpread = true;
            } else if (errorItem === YBMKKSF620MLogic.HEADER_MSG_KEY_DT_NENDO){
                dtNendo.setBackground(SMSColor.WARNING);
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
            }
            if (!fgSpread){
                if (SMSCheckField.isValidString(cdErrorItem)){
                    const fieldErrorKoumoku: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, cdErrorItem);
                    fieldErrorKoumoku.setBackground(SMSColor.WARNING);
                    returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, cdErrorItem);
                }
                if (SMSCheckField.isValidString(nmErrorItem)){
                    const fieldErrorKoumokuNm: JCFFieldStringData = <JCFFieldStringData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, nmErrorItem);
                    fieldErrorKoumokuNm.setValue("");
                }
            } else {
                if (-1 !== noErrorColumnCd){
                    spread.setCellSelected(noErrorGyo, noErrorColumnCd, true);
                    spread.setViewport(new JCFSpreadCellPosition(noErrorGyo, noErrorColumnCd));
                    spread.setCellBackground(noErrorGyo, noErrorColumnCd, SMSColor.WARNING);
                    returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
                    const errorNm: string = loginInfo.getNmErrorColumn();
                    if (!(errorNm === (""))){
                        spread.setCellValue(noErrorGyo, 3, "");
                    }
                }
            }
        }
    }

    /**
     * 取込画面遷移時の業務ロジック
     * 
     * @param {JCFEvent} event					ＣＪＦイベントオブジェクト
     * @param {JCFContext} context					ＣＪＦコンテキストオブジェクト
     * @param {JCFReturnInfo} returnInfo				ＣＪＦ復帰情報オブジェクト
     * @exception JCFException		ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     * @exception JCFDataException	ＣＪＦで例外が発生した場合にスローされる例外オブジェクト
     */
    public torikomiData(event: JCFEvent, context: JCFContext, returnInfo: JCFReturnInfo) {
        SMSCLLog.debug("YBMKKSF620MLogicMLogic:torikomiData() start");
        try {
            let fgInit: any = null;
            fgInit = super.getUserData(context, this.FG_INIT);
            if (fgInit != null){
                super.removeUserData(context, <any>this.FG_INIT);
            }
            SMSHeaderFooterManager.initInformation(context);
            const current: JCFScreenData = <JCFScreenData>context.getCurrentScreenData();
            const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
            const stHaifu: string = this.getStHaifu(context);
            this.putUserData(context, YBMKKSF620MLogic.HEADER_MSG_KEY_ST_HAIFU, stHaifu);
            this.putUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_DT_NENDO, super.getComboID(dtNendo));
        } catch(th) {
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogicMLogic:torikomiData() end");
    }

    /**
     * 配賦区分の値を返します。
     * @param {JCFContext} context コンテキスト
     * @param returnInfo 業務ロジック復帰情報クラス
     * @return {string} String 配賦区分の値
     * @private
     */
    /*private*/ getStHaifu(context: JCFContext): string {
        const current: JCFScreenData = context.getCurrentScreenData();
        const jigyoTorokuHiritsu: JCFToggleButtonData = <JCFToggleButtonData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_JIGYO_TOROKU_HIRITSU);
        if (jigyoTorokuHiritsu.getBooleanValue()){
            return YBMKKSF620MLogic.ST_HAIFU_JIGYO_TOROKU_HIRITSU;
        } else {
            return YBMKKSF620MLogic.ST_HAIFU_LINE_HIRITSU;
        }
    }

    /**
     * ヘッダ部の検索条件が変更されたかを判定します。変更されていた場合はtrueを返します。<BR>
     * @param {JCFContext} context コンテキスト画面データ域
     * @param currentt 画面データ域
     * @param {java.lang.String[]} errorItem エラーメッセージ設定項目
     * @param {JCFScreenData} current
     * @param {JCFReturnInfo} returnInfo
     * @return {boolean}
     */
    isHeaderConditionChanged(context: JCFContext, current: JCFScreenData, returnInfo: JCFReturnInfo, errorItem: string[]): boolean {
        SMSCLLog.debug("YBMKKSF620MLogic.isHeaderConditionChanged start");
        const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
        const cdSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
        const cdKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
        const cdHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
        dtNendo.setBackground(SMSColor.DEFAULT);
        cdSoshiki.setBackground(SMSColor.DEFAULT);
        cdKamoku.setBackground(SMSColor.DEFAULT);
        cdHojokamoku.setBackground(SMSColor.DEFAULT);
        const dtNendoBefore: string = <string>super.getUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_DT_NENDO);
        const cdSoshikiBefore: string = <string>super.getUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_CD_SOSHIKI);
        const cdKamokuBefore: string = <string>super.getUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_CD_KAMOKU);
        const cdHojokamokuBefore: string = <string>super.getUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_CD_HOJOKAMOKU);
        if (!(dtNendoBefore === super.getComboID(dtNendo))){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.SMSCMNMCI011, errorItem);
            dtNendo.setBackground(SMSColor.WARNING);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
            return true;
        }
        if (!(cdSoshikiBefore === cdSoshiki.getValue())){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.SMSCMNMCI011, errorItem);
            cdSoshiki.setBackground(SMSColor.WARNING);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
            return true;
        }
        if (!(cdKamokuBefore === cdKamoku.getValue())){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.SMSCMNMCI011, errorItem);
            cdKamoku.setBackground(SMSColor.WARNING);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
            return true;
        }
        if (!(cdHojokamokuBefore === cdHojokamoku.getValue())){
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.SMSCMNMCI011, errorItem);
            cdHojokamoku.setBackground(SMSColor.WARNING);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
            return true;
        }
        SMSCLLog.debug("YBMKKSF620MLogic.isHeaderConditionChanged end");
        return false;
    }

    /**
     * 入力チェックを行います。チェックOK時はTRUEを返します。<BR>
     * @param {JCFContext} context コンテキスト画面データ域
     * @param currentt 画面データ域
     * @return {boolean} errorFlag エラーフラグ
     * @param {JCFScreenData} current
     * @param {JCFReturnInfo} returnInfo
     * @param {string} gamenID
     * @private
     */
    /*private*/ checkHeaderCondition(context: JCFContext, current: JCFScreenData, returnInfo: JCFReturnInfo, gamenID: string): boolean {
        SMSCLLog.debug("YBMKKSF620MLogic.inputCheck start");
        const dtNendo: JCFComboBoxData = <JCFComboBoxData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
        const cdSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
        const nmSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_SOSHIKI);
        const cdKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
        const nmKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_KAMOKU);
        const cdHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
        const nmHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU);
        const dtNendoVal: number = new Number(super.getComboID(dtNendo)).valueOf();
        const cdSoshikiVal: string = cdSoshiki.getValue();
        const cdKamokuVal: string = cdKamoku.getValue();
        const cdHojyoKamokuVal: string = cdHojokamoku.getValue();
        let errorFlag: boolean = false;
        const msg: string[] = [null];
        let msg2: string = "";
        if (gamenID === YBMKKSF620MLogic.PROPERTIES_KEY_NM_GAMEN){
            msg[0] = "\u7d44\u7e54";
            msg2 = "\u7d44\u7e54";
        } else {
            msg[0] = "\u8077\u5834";
            msg2 = "\u8077\u5834";
        }
        if (!SMSCheckField.isValidString(dtNendoVal.toString())){
            SMSCLLog.debug("\u5e74\u5ea6\u672a\u5165\u529b");
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, ["\u5e74\u5ea6"]);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
            return errorFlag;
        }
        if (!SMSCheckField.isValidString(cdSoshikiVal)){
            SMSCLLog.debug("\u7d44\u7e54\u672a\u5165\u529b");
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, msg);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
            cdSoshiki.setBackground(SMSColor.WARNING);
            return errorFlag;
        } else if (!SMSCheckField.checkLength(cdSoshikiVal, 6)){
            SMSCLLog.debug("\u7d44\u7e54\u6841\u6570\u5165\u529b\u4e0d\u8db3");
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW028, [msg2, "6"]);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
            cdSoshiki.setBackground(SMSColor.WARNING);
            return errorFlag;
        }
        if (SMSCheckField.isValidString(cdKamokuVal)){
            if (!SMSCheckField.checkLength(cdKamokuVal, 5)){
                SMSCLLog.debug("\u52d8\u5b9a\u79d1\u76ee\u6841\u6570\u5165\u529b\u4e0d\u8db3");
                SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW028, ["\u52d8\u5b9a\u79d1\u76ee", "5"]);
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
                cdKamoku.setBackground(SMSColor.WARNING);
                return errorFlag;
            }
        }
        if (SMSCheckField.isValidString(cdHojyoKamokuVal)){
            if (!SMSCheckField.checkLength(cdHojyoKamokuVal, 6)){
                SMSCLLog.debug("\u88dc\u52a9\u79d1\u76ee\u6841\u6570\u5165\u529b\u4e0d\u8db3");
                SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW028, ["\u88dc\u52a9\u79d1\u76ee", "6"]);
                returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
                cdHojokamoku.setBackground(SMSColor.WARNING);
                return errorFlag;
            }
        }
        if ((!SMSCheckField.isValidString(cdKamokuVal)) && (SMSCheckField.isValidString(cdHojyoKamokuVal))){
            SMSCLLog.debug("\u52d8\u5b9a\u79d1\u76ee\u672a\u5165\u529b");
            SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMCW025, ["\u52d8\u5b9a\u79d1\u76ee"]);
            returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
            cdKamoku.setBackground(SMSColor.WARNING);
            return errorFlag;
        }
        SMSCLLog.debug("YBMKKSF620MLogic.inputCheck end");
        return errorFlag = true;
    }

    /**
     * HashMapからスプレッド部へデータをセットします。
     * @param {JCFContext} context コンテキスト
     * @param outData ハッシュマップ
     * @param {java.util.HashMap[]} detailMsgList
     * @private
     */
    /*private*/ setDataToSpread(context: JCFContext, detailMsgList: any[]) {
        SMSCLLog.debug("YBMKKSF620MLogic.setDataToSpread start");
        let nuYsnHaifuritsu: string = null;
        let nuJiskHaifuritsu: string = null;
        let nuYsnZenHaifuritsu: string = null;
        let nuJiskZenHaifuritsu: string = null;
        let sumYosanHiritsu: number = 0;
        let sumJissekiHiritsu: number = 0;
        let sumZenkaiYosan: number = 0;
        let sumZenkaiJisseki: number = 0;
        try {
            const current: JCFScreenData = context.getCurrentScreenData();
            const spread: SMSJCFSpreadData = <SMSJCFSpreadData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SPREAD);
            const sumYosanHiritsuFdb: JCFFieldDoubleData = <JCFFieldDoubleData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_YOSAN_HIRITSU);
            const sumJissekiHiritsuFdb: JCFFieldDoubleData = <JCFFieldDoubleData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_JISSEKI_HIRITSU);
            const sumZenkaiYosanFdb: JCFFieldDoubleData = <JCFFieldDoubleData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_ZENKAI_YOSAN);
            const sumZenkaiJissekiFdb: JCFFieldDoubleData = <JCFFieldDoubleData>current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_SUM_ZENKAI_JISSEKI);
            const decFormat: DecimalFormat = new DecimalFormat();
            decFormat.setGroupingSize(4);
            decFormat.setMinimumFractionDigits(2);
            spread.removeAllRow();
            for(let i: number = 0; i < detailMsgList.length; i++) {{
                spread.addRow();
                spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_FG_DELETE, false);
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU) != null){
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_CD_HAIFU, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU));
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU) != null){
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_NM_HAIFU, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU));
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL) != null){
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_NO_KAISOLEVEL, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL));
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU) != null){
                    nuYsnHaifuritsu = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU);
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_YOSAN_HIRITSU, nuYsnHaifuritsu);
                    sumYosanHiritsu += /* parseDouble */parseFloat(nuYsnHaifuritsu);
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU) != null){
                    nuJiskHaifuritsu = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU);
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_JISSEKI_HIRITSU, nuJiskHaifuritsu);
                    sumJissekiHiritsu += /* parseDouble */parseFloat(nuJiskHaifuritsu);
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU) != null){
                    nuYsnZenHaifuritsu = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_ZEN_HAIFURITSU);
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_ZENKAI_YOSAN, nuYsnZenHaifuritsu);
                    sumZenkaiYosan += /* parseDouble */parseFloat(nuYsnZenHaifuritsu);
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU) != null){
                    nuJiskZenHaifuritsu = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_ZEN_HAIFURITSU);
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_ZENKAI_JISSEKI, nuJiskZenHaifuritsu);
                    sumZenkaiJisseki += /* parseDouble */parseFloat(nuJiskZenHaifuritsu);
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN) != null){
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_DT_KOSHIN, SMSDateStringUtil.conversion((<string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN)).substring(0, 14), 6));
                }
                if (/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA) != null){
                    spread.setCellValue(i, YBMKKSF620MLogic.SPREAD_NM_KOSHIN, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA));
                }
            };}
            sumYosanHiritsuFdb.setValue(sumYosanHiritsu);
            sumJissekiHiritsuFdb.setValue(sumJissekiHiritsu);
            sumZenkaiYosanFdb.setValue(sumZenkaiYosan);
            sumZenkaiJissekiFdb.setValue(sumZenkaiJisseki);
            const detailMsgMapList: any[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(detailMsgList.length);
            for(let i: number = 0; i < detailMsgList.length; i++) {{
                detailMsgMapList[i] = <any>({});
                if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU)){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsgMapList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_CD_HAIFU));
                }
                if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU)){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsgMapList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_HAIFU));
                }
                if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL)){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsgMapList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NO_KAISO_LEVEL));
                }
                if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU)){
                    nuYsnHaifuritsu = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU);
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsgMapList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_YSN_HAIFURITSU, decFormat.format(/* parseDouble */parseFloat(nuYsnHaifuritsu)));
                }
                if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU)){
                    nuJiskHaifuritsu = <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU);
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsgMapList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NU_JISK_HAIFURITSU, decFormat.format(/* parseDouble */parseFloat(nuJiskHaifuritsu)));
                }
                if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN)){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsgMapList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_TM_KOSHIN));
                }
                if (/* containsKey */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return true; } return false; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA)){
                    /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>detailMsgMapList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA, <string>/* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key==null && k==null || m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>detailMsgList[i], YBMKKSF620MLogic.DETAIL_MSG_KEY_NM_KOSHINSHA));
                }
            };}
            super.putUserData(context, YBMKKSF620MLogic.USER_DATA_KEY_DETAIL_MSG_LIST, detailMsgMapList);
            spread.setEnabled(true);
        } catch(th) {
            SMSCLLog.debug("YBMKKSF620MLogic.setDataToSpread error");
            SMSCLLog.debug(th.toString());
            super.callErrorAdapter(context, th);
        }
        SMSCLLog.debug("YBMKKSF620MLogic.setDataToSpread end");
    }

    /**
     * 
     * @param {JCFContext} context
     * @param {boolean} isClearNames
     * @private
     */
    /*private*/ clearError(context: JCFContext, isClearNames: boolean) {
        const current: JCFScreenData = context.getCurrentScreenData();
        const dtNendo: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_DT_NENDO);
        const cdSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_SOSHIKI);
        const cdKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_KAMOKU);
        const cdHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_CD_HOJOKAMOKU);
        const nmSoshiki: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_SOSHIKI);
        const nmKamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_KAMOKU);
        const nmHojokamoku: JCFItemData = current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YBMKKSF620MLogic.ITEM_NM_HOJOKAMOKU);
        SMSHeaderFooterManager.initInformation(context);
        dtNendo.setBackground(SMSColor.DEFAULT);
        cdSoshiki.setBackground(SMSColor.DEFAULT);
        cdKamoku.setBackground(SMSColor.DEFAULT);
        cdHojokamoku.setBackground(SMSColor.DEFAULT);
        if (isClearNames){
            nmSoshiki.setValue("");
            nmKamoku.setValue("");
            nmHojokamoku.setValue("");
        }
    }

    /**
     * パラメタで渡された年度から基準日を生成して返します。<BR>
     * 基準日は4月1日で固定です。<BR>
     * 2008/04/01 ME-00719-000対応により、年度末日に変更。
     * @param {string} dtNendo
     * @return {string}
     */
    getDtKijun(dtNendo: string): string {
        const dtKijun: { str: string, toString: Function } = { str: "", toString: function() { return this.str; } };
        let nendo: number = /* parseInt */parseInt(dtNendo);
        nendo++;
        dtNendo = /* toString */(''+(nendo));
        /* append */(sb => { sb.str += <any>dtNendo; return sb; })(dtKijun);
        /* append */(sb => { sb.str += <any>"0331"; return sb; })(dtKijun);
        return /* toString */dtKijun.str;
    }

    /**
     * Null値を0に変換。<BR>
     * @param {string} atai
     * @return {string}
     */
    Zeros(atai: string): string {
        if (atai == null || atai === ""){
            atai = "0";
        }
        return atai;
    }

    constructor() {
        super();

        // NOTE: 下記が文法フォーマット以外に新規追加したもの
        this.extra.setupItem(YBMKKSF620MLogic.cdKanjokamoku, 'cdKanjokamoku')
        this.extra.setupItem(YBMKKSF620MLogic.cdSoshiki, 'cdSoshiki')
        this.extra.setupItem(YBMKKSF620MLogic.cdHojokamoku, 'cdHojokamoku')
        this.extra.setupItem(YBMKKSF620MLogic.nmHojokamoku, 'nmHojokamoku')
        this.extra.setupItem(YBMKKSF620MLogic.dtNendoOptions, [
            {display: 'option1',
            disabled: false,
            value: 'option1'}
        ])
    }
}
YBMKKSF620MLogic["__class"] = "com.megsnow.ybm.kks.cjf.logic.YBMKKSF620MLogic";
YBMKKSF620MLogic["__interfaces"] = ["com.megsnow.ybm.kks.cjf.logic.YBMKKSCjfConst"];




