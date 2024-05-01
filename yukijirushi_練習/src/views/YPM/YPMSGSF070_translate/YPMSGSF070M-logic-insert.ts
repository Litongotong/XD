/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { lib as YPMLogicBaseLib } from '@/lib/YPMSGSF070M/com/megsnow/ypm/cmn/cjf/logic/YPMLogicBase'
import { lib as JCFEventLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/ctrl/JCFEvent'
import { lib as JCFContextLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/ctrl/JCFContext'
import { lib as JCFReturnInfoLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/ctrl/JCFReturnInfo'
import { lib as JCFItemDataLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/gui/JCFItemData'
import { lib as YPMCommonConstLib } from '@/lib/YPMSGSF070M/com/megsnow/ypm/cmn/YPMCommonConst'
import { lib as SMSHeaderFooterManagerLib } from '@/lib/YPMSGSF070M/com/fujitsu/sms/sol/sys/cjf/logic/SMSHeaderFooterManager'
import { lib as SMSCLLogLib } from '@/lib/YPMSGSF070M/com/fujitsu/sms/sol/sys/cjf/SMSCLLog'
import { lib as SMSMessageConstLib } from '@/lib/YPMSGSF070M/com/fujitsu/sms/sol/sys/SMSMessageConst'
import { lib as JCFMessageOnWindowLib } from '@/lib/YPMSGSF070M/com/fujitsu/jcf/ctrl/JCFMessageOnWindow'

import { useYPMSGSF070MStore } from '@/views/YPM/YPMSGSF070/YPMSGSF070M-store'
import { useDialog } from '@/stores/dialog'

export namespace YPMSGSF070 {
  export class YPMSGSF070MLogic extends YPMLogicBaseLib.com.megsnow.ypm.cmn.cjf
    .logic.YPMLogicBase {
    // [[ここからが自動翻訳の部分]]
    /**
     * 仕掛品明細一覧
     */
    /*private*/ SHIKAKARIHIN_MEISAI_CBMMSG_LIST: string

    /**
     * 仕掛重量
     */
    /*private*/ QT_SHIKAKARI_JURYO: string

    /**
     * 単位
     */
    /*private*/ IF_TANI: string

    /**
     * 管理コンボ
     */
    /*private*/ ITEM_COND_KANRI_CMB: string

    /**
     * 品目コンボ
     */
    /*private*/ ITEM_COND_HINMOKU_CMB: string

    /**
     * 品目コード
     */
    /*private*/ ITEM_CD_HINMOKU: string

    /**
     * 品目名
     */
    /*private*/ ITEM_NM_HINMOKU: string

    /**
     * 伝票日付
     */
    /*private*/ ITEM_DENPYO_HIDUKE: string

    /**
     * 表示時保存データ
     */
    /*private*/ HMKEY_SAVE_DATA: string

    /*private*/ HMKEY_SAVE_JURYO: string

    /*private*/ HMKEY_SAVE_JURYOTANI: string

    /**
     * @see com.megsnow.ypm.cmn.cjf.logic.YPMLogicBaseRel#f1(JCFEvent, JCFContext,
     * JCFReturnInfo)
     * @param {JCFEventLib.com.fujitsu.jcf.ctrl.JCFEven} event
     * @param {JCFContextLib.com.fujitsu.jcf.ctrl.JCFContext} context
     * @param {JCFReturnInfoLib.com.fujitsu.jcf.ctrl.JCFReturnInfo} returnInfo
     */
    public f1(
      event?: JCFEventLib.com.fujitsu.jcf.ctrl.JCFEvent,
      context?: JCFContextLib.com.fujitsu.jcf.ctrl.JCFContext,
      returnInfo?: JCFReturnInfoLib.com.fujitsu.jcf.ctrl.JCFReturnInfo,
    ) {
      // NOTE: CJF パッケージのソースが必要
      // super.f1(event, context, returnInfo)

      ///
      // NOTE: 抽象クラスへの引用でダミークラスの作成は引用クラスに影響を与えるのでなのでダミーデータで代わる
      // const item: JCFItemDataLib.com.fujitsu.jcf.gui.JCFItemData =
      //   super.getItemData$com_fujitsu_jcf_ctrl_JCFContext$java_lang_String$java_lang_String(
      //     context,
      //     YPMCommonConstLib.com.megsnow.ypm.cmn.YPMCommonConst.FLM_MAIN_FOOT,
      //     SMSHeaderFooterManagerLib.com.fujitsu.sms.sol.sys.cjf.logic
      //       .SMSHeaderFooterManager.ITEM_FUNCBTN1,
      //   )

      const item = {
        isEnabled: () => true,
      }
      ///

      if (item != null) {
        if (item.isEnabled() === false) {
          return
        }
      }

      this.shokika()
    }

    /**
     * 「初期化」ボタン押下
     */
    public shokika() {
      // NOTE: 他クラスからの干渉を防ぐ
      // SMSCLLogLib.com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace(
      //   'YPMSGSF070MLogic:shokika() start',
      // )

      // NOTE: ここはダイアログ情報の有無及び確認ボタンの押下で後続ロジックを実行するかを決める
      // この判断の流れが変わったので不要なソースとなる
      // try {
      // if (
      // (this.showMessage(
      //   SMSMessageConstLib.com.fujitsu.sms.sol.sys.SMSMessageConst
      //     .YPMSGSMCC009,
      //   null,
      //   true,
      // ) ===
      //   JCFMessageOnWindowLib.com.fujitsu.jcf.ctrl.JCFMessageOnWindow
      //     .BTN_YES) ===
      // true
      // ) {

      if (!this.isChkJokenData()) {
        this.jokenDataChange()
      }

      // NOTE: CJF パッケージのソースが必要
      // const saveData: any[] = this.getSaveData()
      // const saveJuryo: (string | null)[] = this.getSaveJuryo()
      // const gyomuMap: any = <any>{}
      // /* put */ gyomuMap[this.SHIKAKARIHIN_MEISAI_CBMMSG_LIST] = saveData
      // /* put */ gyomuMap[this.QT_SHIKAKARI_JURYO] = saveJuryo[0]
      // /* put */ gyomuMap[this.IF_TANI] = saveJuryo[1]

      // }
      // } catch (th) {
      //   super.callErrorAdapter(this.getContext(), th as unknown as Error)
      // }

      // NOTE: CJF パッケージのソースが必要
      // SMSCLLogLib.com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace(
      //   'YPMSGSF070MLogic:shokika() end',
      // )
    }

    /**
     * 変更条件データの取得
     * ADD 2006.06.28 更新入力後の画面遷移対応
     * @return {boolean}
     * @private
     */
    /*private*/ isChkJokenData(): boolean {
      return false
    }

    /**
     * 条件データの変更
     * ADD 2006.07.19
     *
     * @private
     */
    /*private*/ jokenDataChange() {
      // NOTE: CJF パッケージのソースが必要
      // SMSCLLogLib.com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace(
      //   'YPMSGSF070MLogic:jokenDataChange() start',
      // )

      const retVal: boolean = true
      const item: JCFItemDataLib.com.fujitsu.jcf.gui.JCFItemData | null = null

      ///
      // NOTE: 部品直接操作からデータ駆動に変化した
      // super.setSelectedByID(
      //   this.ITEM_COND_KANRI_CMB,
      //   this.getCDKanriKotei(true),
      // )
      // super.setSelectedByID(this.ITEM_COND_HINMOKU_CMB, this.getStHinmoku(true))
      // super
      //   .getItemData$java_lang_String(this.ITEM_CD_HINMOKU)
      //   .setValue(this.getCdHinmoku(true))
      // super
      //   .getItemData$java_lang_String(this.ITEM_NM_HINMOKU)
      //   .setValue(this.getNmHinmoku(true))
      // super
      //   .getItemData$java_lang_String(this.ITEM_DENPYO_HIDUKE)
      //   .setValue(this.getDtDenpyo(true))

      this.store.setKanriCmb(this.getCDKanriKotei(true))
      this.store.setHinmokuCmb(this.getStHinmoku(true))
      this.store.setCdHinmoku(this.getCdHinmoku(true))
      // TODO: 汎用検査実装待ち
      // this.store.setNmHinmoku(getNmhinmoku(true))
      this.store.setDtDenyoHiduke(this.getDtDenpyo(true))
      ///

      // NOTE: CJF パッケージのソースが必要
      // SMSCLLogLib.com.fujitsu.sms.sol.sys.cjf.SMSCLLog.trace(
      //   'YPMSGSF070MLogic:isChkJokenData() end',
      // )

      return
    }

    /**
     * 管理工程取得
     * @param {boolean} save
     * @return {string}
     * @private
     */
    /*private*/ getCDKanriKotei(save: boolean): string {
      return ''
    }

    /**
     * 品目区分取得
     * @param {boolean} save
     * @return {string}
     * @private
     */
    /*private*/ getStHinmoku(save: boolean): string {
      return ''
    }

    /**
     * 品目コード取得
     * @param {boolean} save
     * @return {string}
     * @private
     */
    /*private*/ getCdHinmoku(save: boolean): string {
      return ''
    }

    /**
     * 品目名取得
     * @param {boolean} save
     * @return {string}
     * @private
     */
    /*private*/ getNmHinmoku(save: boolean): string {
      return ''
    }

    /**
     * 伝票日付取得
     * @param {boolean} save
     * @return {string}
     * @private
     */
    /*private*/ getDtDenpyo(save: boolean): string {
      return ''
    }

    /**
     * 表示時保存データ取得
     * @return {java.util.HashMap<java.lang.String,java.lang.Object>[]}
     * @private
     */
    /*private*/ getSaveData(): any[] {
      return <any[]>super.getUserData(this.getContext(), this.HMKEY_SAVE_DATA)
    }

    /**
     * 表示時保存データ取得（仕掛品重量・単位）
     * @return {java.lang.String[]}
     * @private
     */
    /*private*/ getSaveJuryo(): (string | null)[] {
      const returnData: (string | null)[] = [null, null]
      returnData[0] = super
        .getUserData(this.getContext(), this.HMKEY_SAVE_JURYO)
        .toString()
      returnData[1] = super
        .getUserData(this.getContext(), this.HMKEY_SAVE_JURYOTANI)
        .toString()
      return returnData
    }
    // [[ここまでが自動翻訳の部分]]

    // [[ ここからが新規作成の部分 ]]
    // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
    store = useYPMSGSF070MStore()

    /** ユースケースＩＤ */
    private USECASE_ID = 'YPMSGSF070'
    useCaseID = ''

    /**
     * @see com.fujitsu.sms.sol.sys.cjf.SMSCjfLogicBase#setUseCaseID()
     */
    protected setUseCaseID(): void {
      this.useCaseID = this.USECASE_ID
    }
    // [[ ここまでが新規作成の部分 ]]

    constructor() {
      // 自動翻訳
      super()
      this.SHIKAKARIHIN_MEISAI_CBMMSG_LIST = 'shikakarihinMeisaiCBMMsgList'
      this.QT_SHIKAKARI_JURYO = 'qtShikakariJuryo'
      this.IF_TANI = 'ifTani'
      this.ITEM_COND_KANRI_CMB = 'kanriCmb'
      this.ITEM_COND_HINMOKU_CMB = 'hinmokuCmb'
      this.ITEM_CD_HINMOKU = 'cdHinmoku'
      this.ITEM_NM_HINMOKU = 'nmHinmoku'
      this.ITEM_DENPYO_HIDUKE = 'dtDenyoHiduke'
      this.HMKEY_SAVE_DATA = 'saveData'
      this.HMKEY_SAVE_JURYO = 'saveJuryo'
      this.HMKEY_SAVE_JURYOTANI = 'saveJuryoTani'

      // 手動作成
      this.setUseCaseID()
    }
  }
}
