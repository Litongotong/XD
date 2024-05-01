import type { Button } from '@/types/components/button'

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

import { useButtonConfig } from '@/stores/button-config'
import { usePageInfoStore } from '@/stores/page-info'
import { useYPMSGSF070MStore } from './YPMSGSF070M-store'
import { computed, onBeforeMount, onBeforeUnmount } from 'vue'
import { handlerMessage } from '@/utils'
import { MSGPositions, MSGTypes, Message } from '@/enums'
import { useDialog } from '@/stores/dialog'
import type { Dropdown, Table } from '@/types/components'

/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
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

      // NOTE: 新規ダイアログを制御する為に追加
      const { setShowDialog } = useDialog()
      setShowDialog(false)
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

    //リアクティビティを保つため、computedを使用する。
    body_spread01 = computed<Table.DatumRow[]>(() => this.store.body_spread01)

    hinmokuCmb = computed<string>({
      get: () => this.store.hinmokuCmb,
      set: (value: string) => this.store.setHinmokuCmb(value),
    })

    hinmokuCmbOptions = computed<Dropdown.Option[]>(
      () => this.store.hinmokuOptions,
    )

    cdHinmoku = computed<string>({
      get: () => this.store.cdHinmoku,
      set: (value: string) => this.store.setCdHinmoku(value),
    })

    nmHinmoku = computed<string>({
      get: () => this.store.nmHinmoku,
      set: (value: string) => this.store.setNmHinmoku(value),
    })

    searchBtn = computed<string>(() => this.store.searchBtn)

    nmJoisonekiSoshikiRyaku = computed<string>(
      () => this.store.nmJoisonekiSoshikiRyaku,
    )

    dtDenyoHiduke = computed<string>(() => this.store.dtDenyoHiduke)

    qtJuryo = computed<string>({
      get: () => this.store.qtJuryo,
      set: (value: string) => this.store.setQtJuryo(value),
    })

    kanriCmb = computed<string>({
      get: () => this.store.kanriCmb,
      set: (value: string) => this.store.setKanriCmb(value),
    })

    kanriCmbOptions = computed<Dropdown.Option[]>(
      () => this.store.kanriCmbOptions,
    )

    qtKensu = computed<string>(() => this.store.qtKensu)

    chkGenzairyoAdd = computed<boolean>({
      get: () => this.store.chkGenzairyoAdd,
      set: (status: boolean) => this.store.setChkGenzairyoAdd(status),
    })

    body_button04 = computed(() => this.store.body_button04)
    ifTani = computed<string>(() => this.store.ifTani)
    spread01Heads = computed<Table.HeadRow[]>(() => this.store.spread01Heads)

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
      initHeaderFooter(this.f1.bind(this))
      initPageInfo()

      this.setUseCaseID()
    }
  }

  function initHeaderFooter(f1: Function) {
    // 定義済みのヘッダ、フッター設定方法とリセット方法。
    const {
      setHeaderButtonConfigs,
      resetHeaderButtonConfigs,
      setFooterButtonConfigs,
      resetFooterButtonConfigs,
    } = useButtonConfig()

    onBeforeMount(() => {
      //ヘッダのボタン表示及びロジックを設定する。
      const headerButtonConfigs: Button.Config[] = [
        {
          title: '戻る(F10)',
          disabled: false,
          onClick: () => {
            console.log('click 戻る(F10)')
          },
        },
        {
          title: 'メニュー(F11)',
          disabled: false,
          onClick: () => {
            console.log('click メニュー(F11)')
            // 成功メーセージを設定する。（設定する場合は上記エラーメーセージ設定のソースコードは不要となる。）
          },
        },
        {
          title: '業務終了(F12)',
          disabled: false,
          onClick: () => {
            console.log('click 業務終了(F12)')
          },
        },
      ]

      setHeaderButtonConfigs(headerButtonConfigs)

      const { setShowDialog } = useDialog()

      function handleF1() {
        handlerMessage(
          MSGPositions.POPUP,
          MSGTypes.WARNNING,
          Message.YPMSGSMCC009,
          [
            {
              title: 'はい',
              disabled: false,
              width: '80',
              height: '15',
              onClick: f1,
            },
            {
              title: 'いいえ',
              disabled: false,
              width: '80',
              height: '15',
              onClick: () => setShowDialog(false),
            },
          ],
        )
      }

      //フッターのボタン表示及びロジックを設定する。
      const footerButtonConfigs: Button.Config[] = [
        { title: '初期化(F1)', disabled: false, onClick: handleF1 },
        // { title: '初期化(F1)', disabled: true, onClick: handleF1 },
        { title: '(F2)', disabled: true, onClick: () => {} },
        { title: '(F3)', disabled: true, onClick: () => {} },
        { title: '(F4)', disabled: true, onClick: () => {} },
        { title: '(F5)', disabled: true, onClick: () => {} },
        { title: '(F6)', disabled: true, onClick: () => {} },
        { title: '(F7)', disabled: true, onClick: () => {} },
        { title: '(F8)', disabled: true, onClick: () => {} },
        { title: '(F9)', disabled: true, onClick: () => {} },
      ]

      setFooterButtonConfigs(footerButtonConfigs)
    })

    // 画面から離れる際、メモリを釈放などの処理はonBeforeUnmoutにかく。
    onBeforeUnmount(() => {
      //ヘッダの設定をデフォルト設定にリセットする。
      resetHeaderButtonConfigs()
      //フッターの設定をデフォルト設定にリセットする。
      resetFooterButtonConfigs()
    })
  }

  function initPageInfo() {
    // 定義済みの画面ヘッダ表示設定方法。
    const {
      setPageName,
      setPageId,
      setShowCompanyName,
      setShowDepartmentName,
      setShowLoginDate,
      setShowUserName,
      setShowUseDate,
    } = usePageInfoStore()

    onBeforeMount(() => {
      //ヘッダデータ設定する。
      //画面名
      setPageName('仕掛品計上')
      //画面ID
      setPageId('YPMSGSF070M')
      //会社名表示否
      setShowCompanyName(true)
      // 部署名表示否
      setShowDepartmentName(true)
      // ログイン日時表示否
      setShowLoginDate(true)
      // ユーザー名表示否
      setShowUserName(true)
      // 運用日表示否
      setShowUseDate(true)
    })
  }
}
