import type { Dropdown } from '@/types/components'
import type { YPMSGSF070M } from '../../types'

import { useYPMSGSF070MStore } from '../../YPMSGSF070M-store'
import { useButtonConfig } from '@/stores/button-config'
import { usePageInfoStore } from '@/stores/page-info'
import { useUserInfoStore } from '@/stores/user-info'
import { handlerMessage, interpolateMessage } from '@/utils'
import { MSGPositions, MSGTypes, Message } from '@/enums'
import { CONSTANTS } from '../../constants'

export function useBeforeDisplay() {
  /** 修正数量列 ID */
  const EDITED_QUANTITY_ID = 10
  /** 修正金額列 ID */
  const EDITED_AMOUNT_ID = 11
  /** 締め状態 */
  const SHIME_JOTAI = '1'

  const userInfo = useUserInfoStore()
  const viewStore = useYPMSGSF070MStore()
  const layoutButtons = useButtonConfig()
  const pageInfo = usePageInfoStore()

  /** 
   * NOTE: 旧ソースでの beforeDisplay の動作
   * YPMLogicBase.java
    //サンプルの通りに作成した場合、次の画面へ遷移した場合にisInit==falseになってしまう。のでコメントにする。
    //スクリーンＩＤが存在しない時のみ初期化処理を行う。
    
    //if ( getScreenID() == null || getScreenID().equals("") == true ) {

    String event_screenId = event.getScreenID();
    if ( event_screenId == null ) {
      event_screenId = "";
    }
    
    if ( getScreenID() == null || getScreenID().equals(event_screenId) == false ) {

      //基底クラスのbeforeDisplayをCall
      super.beforeDisplay(event, context, returnInfo);

      //初期起動モード指定にて初期化
      _init(event,false);
    
    }
    
    //規約：フッタボタンのF7〜F9の名称は常に表示する
  */

  /**
   * 
    private void _init(JCFEvent event, boolean arg ) throws Throwable {

		SMSCLLog.trace("YPMLogicBase:_init()-" + this.getGamenId() + " start");

		if ( this.getLoginInfo() != null ) {
			
			//画面情報（プログラムID）
			setCdProgram(getContext(), getProgramId());
			
			//画面情報（画面ID）
			setCdGamen(getContext(), getGamenId());
			
			//画面情報（画面名）
			setNmGamen(getContext(), getScreenName());
	
			//最大検索件数
			setQtSaidaiKensaku(getContext(), getMaxSelectCount());
		}
		
		//ヘッダの初期化(ログイン日時の表示のみ行われている)
		SMSHeaderFooterManager.initHeader( getEvent(), getContext() );

		//メッセージ情報をクリア
		SMSHeaderFooterManager.initInformation( getContext() );
			
		//ヘッダ部画面タイトルの設定
		SMSHeaderFooterManager.setHeaderTitle(getContext(), getScreenName(), getGamenId() );
		
		//フッタボタンを全て操作不可にします。
		SMSHeaderFooterManager.setAllFooterButtonEnabled( getContext(), false );

		//ヘッダフッタボタン
		setHeaderFooter(arg);

		//初期化
		initControl(event,arg);
		
		SMSCLLog.trace("YPMLogicBase:_init()-" + this.getGamenId() + " end");

	}
   */

  /** 画面初期化制御 */
  const initControl = async () => {
    await init()
  }

  /** 一時的なフッターボタン初期設定 */
  const dummyInitButtons = () => {
    document.addEventListener('keydown', (event) => {
      const keys = ['F1', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9']
      keys.includes(event.key) && event.preventDefault()
    })

    layoutButtons.footerButtonConfigs = [
      { title: '初期化(F1)', disabled: true },
      { title: '(F2)', disabled: true },
      { title: '(F3)', disabled: true },
      { title: '削除(F4)', disabled: true },
      { title: '再計算(F5)', disabled: true },
      { title: '(F6)', disabled: true },
      { title: '(F7)', disabled: true },
      { title: '(F8)', disabled: true },
      { title: '登録(F9)', disabled: true },
    ]
  }

  /** 画面初期化 */
  const init = async (): Promise<void> => {
    // FIXME: 旧ソースと同じボタン初期化処理に直す必要がある
    dummyInitButtons()

    // FIXME: ログイン情報取得
    const loginInfo: Record<string, any> = {}

    // ログイン状態か？
    if (!loginInfo) {
      handlerMessage(MSGPositions.FOOTER, MSGTypes.ERROR, Message.YPMSGSMSC001)
      return
    }

    // 前画面より引き継いだパラメータをセットする
    setParametersFromPreviousScreen()

    if (!userInfo.isCreateMode) {
      // TODO: this.setHeaderControl(false)
    }

    // 明細データ取得
    await viewStore.queryBusinessData()
    const failed = !viewStore.businessData

    if (failed) {
      handleFailedBusinessData()
      return
    }

    handleSucceedBusinessData()
  }

  /** 前画面からのパラメータの設定 */
  const setParametersFromPreviousScreen = () => {
    // TODO: 共通領域から保存された検索条件を取得
    // HashMap map = (HashMap)getContext().getSucceedData(SAVE_KEY_JOKEN_YPMSGS070);
    //
    // FIXME: Dummy Data
    const map: Record<string, any> = {
      [CONSTANTS.HM_KEY_DT_DENPYO]: '2023/12/20',

      [CONSTANTS.HM_KEY_KANRI_KOTEI_LIST]: [
        { id: '000', text: '全て' },
        { id: '001', text: '製造工程(001)', selected: true },
        { id: '002', text: '販売工程(002)' },
        { id: '003', text: '営業工程(003)' },
      ],

      [CONSTANTS.HM_KEY_ST_HINMOKU_LIST]: [
        { id: '00', text: '全て' },
        { id: '01', text: '製品', selected: true },
        { id: '02', text: '原材料' },
      ],

      [CONSTANTS.HM_KEY_NM_KOJO_ZAIKO]: '横浜工場',
    }

    if (!map) {
      return
    }

    // 工場名
    viewStore.setNmJoisonekiSoshikiRyaku(map[CONSTANTS.HM_KEY_NM_KOJO_ZAIKO])
    // 管理工程リスト
    setManagementOptions(map)
    // 品目区分リスト
    setCatalogOptions(map)
    // 年月
    viewStore.setDtDenyoHiduke(map[CONSTANTS.HM_KEY_DT_DENPYO])

    userInfo.putUserData(CONSTANTS.SAVE_KEY_JOKEN_YPMSGS070, map)

    if (!userInfo.isCreateMode) {
      // 管理工程コンボ
      viewStore.setKanriCmb(map[CONSTANTS.HM_KEY_CD_KANRI_KOTEI])
      // 品目区分コンボ
      viewStore.setHinmokuCmb(map[CONSTANTS.HM_KEY_ST_NYURYOKU_HINMOKU])
      // 品目コード
      viewStore.setCdHinmoku(map[CONSTANTS.HM_KEY_CD_HINMOKU])
      // 品目名
      viewStore.setNmHinmoku(map[CONSTANTS.HM_KEY_NM_HINMOKU])
      // 仕掛品重量
      viewStore.setQtJuryo(map[CONSTANTS.HM_KEY_NU_SHIKAKARI_JURYO])
    }

    // 単位
    viewStore.setIfTani(CONSTANTS.UNIT)
  }

  /** 管理工程の選択肢を設定する */
  const setManagementOptions = (map: Record<string, any>) => {
    const kanriKoteiElements: YPMSGSF070M.AppletSelectorOption[] =
      map[CONSTANTS.HM_KEY_KANRI_KOTEI_LIST]

    // AppletタイプをVueタイプにフォーマット
    const newManagementOptions = kanriKoteiElements.map<Dropdown.Option>(
      (item) => ({
        value: item.id,
        display: item.text,
      }),
    )

    viewStore.setKanriCmbOptions(newManagementOptions)

    // デフォルトに一番目の選択肢を選択する
    viewStore.setKanriCmb(newManagementOptions[0]?.value ?? '')
  }

  /** 品目区分の選択肢を設定する */
  const setCatalogOptions = (map: Record<string, any>) => {
    const stHinmokuElements: YPMSGSF070M.AppletSelectorOption[] =
      map[CONSTANTS.HM_KEY_ST_HINMOKU_LIST]

    const newCatalogOptions = stHinmokuElements.map<Dropdown.Option>(
      (item) => ({
        value: item.id,
        display: item.text,
      }),
    )

    viewStore.setHinmokuOptions(newCatalogOptions)

    // デフォルトに一番目の選択肢を選択する
    viewStore.setHinmokuCmb(newCatalogOptions[0]?.value ?? '')
  }

  /** 明細データの取得に失敗した際の処理 */
  const handleFailedBusinessData = () => {
    // TODO: 失敗時のロジック
  }

  /** 明細データの取得に成功した際の処理 */
  const handleSucceedBusinessData = () => {
    if (!userInfo.isCreateMode) {
      // TODO: this.setSaveJoken(inMap);
      viewStore.createSpreadData()
      setEnable()
    }

    setInitFocus()
  }

  /**
   * @description 画面状態制御
   */
  const setEnable = () => {
    const controlSpreadColumnEnable = () => {
      viewStore.setSpreadColumnEditableStatus(
        [EDITED_QUANTITY_ID, EDITED_AMOUNT_ID],
        false,
      )
    }

    controlSpreadColumnEnable()

    let footerEnabled: boolean

    const closedStatus = viewStore.businessData?.fgShimeJotai
    const isClosed = closedStatus === SHIME_JOTAI

    // TODO: 自工場であるかを判定する
    if (isClosed) {
      footerEnabled = false
      handlerMessage(
        MSGPositions.FOOTER,
        MSGTypes.ERROR,
        interpolateMessage(Message.YPMGNSMCE004, ['データ修正']),
      )
    } else {
      footerEnabled = true
      viewStore.setSpreadColumnEditableStatus([EDITED_QUANTITY_ID], true)
      viewStore.setSpreadColumnEditableStatus([EDITED_AMOUNT_ID], false)

      // TODO: TS 等の処理
    }

    const controlHeaderInfo = () => {
      pageInfo.setShowCompanyName(true)
      pageInfo.setShowDepartmentName(true)
      pageInfo.setShowLoginDate(true)
      pageInfo.setShowUserName(true)
      pageInfo.setShowUseDate(true)
    }

    controlHeaderInfo()

    const controlFooterButton = () => {
      document.addEventListener('keydown', (event) => {
        const keys = ['F1', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9']
        keys.includes(event.key) && event.preventDefault()
      })

      layoutButtons.footerButtonConfigs = [
        {
          title: '初期化(F1)',
          disabled: false,
        },
        { title: '(F2)', disabled: true },
        { title: '(F3)', disabled: true },
        { title: '削除(F4)', disabled: false, onClick: () => alert('todo') },
        {
          title: '再計算(F5)',
          disabled: false,
          onClick: () => alert('todo'),
        },
        { title: '(F6)', disabled: true },
        { title: '(F7)', disabled: true },
        { title: '(F8)', disabled: true },
        { title: '登録(F9)', disabled: false },
      ]
    }

    controlFooterButton()
  }

  /** 初期表示時のフォーカスを設定する */
  const setInitFocus = () => {
    // 新規
    if (userInfo.isCreateMode) {
      const isEmptyTable = viewStore.body_spread01.length === 0

      if (isEmptyTable) {
        // 品目にフォーカス
        const selectors = document.querySelectorAll('select')
        selectors[1].focus()
      } else {
        // TODO: 修正数量列にフォーカス（試したが、成功しなかった）
      }
    } else {
      // TODO: 確認・修正ロジック
    }
  }

  return { initControl, setEnable, setInitFocus }
}
