import type { Button } from '@/types/components/button'
import type { Dropdown } from '@/types/components'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYCMKMSFB31SStore } from './YCMKMSFB31S-store'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import { YCMCjfLogicBase } from '../YCMCMNF000/YCMCjfLogicBase';

import type ItemWrapper from '@/components/atoms/ItemWrapper.vue'
// import {YSDBSSCjf_getKubunIchiran as getKubunIchiran,} from '@/services/modules'
  
const {
    preProcessSKubunMust,preProcessCreate,preProcessUpdate,preProcessCancel
  } = new YCMCjfLogicBase()

export default function useYCMKMSFB31SLogic() {

  // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
  const store = useYCMKMSFB31SStore()
  const {
    setMode,
    setNmRonrisakujo,
    setBody_delete,
    setBody_copy,
    setBody_cancel,
    setCdJyuugyouin,
    cdJyuugyouin,
  } = useYCMKMSFB31SStore()

  //TODO:画面初期化データ取得apiの呼び出し
  //ドロップダウンリスト用API
  const DUMMY_COMMONMSG = {
    //请求参数
  }
  const DUMMY_SYAINKUBUN = {
    //パラメータ
    cdKaisha: "1001",
    cdSubsystemShubetu: "100",
    cdDatashubetsu:"00109"
  }
  // データ請求
  const COMMON_MSG = 'commonMsg'
  const SYAINKUBUN_LIST = 'syainBunruList'

  //画面初期化データ（ドロップダウンリスト）取得apiの呼び出し
  // onBeforeMount(async () => {
    const sendMsg: any = {}
    sendMsg[COMMON_MSG] = DUMMY_COMMONMSG
    sendMsg[SYAINKUBUN_LIST] = DUMMY_SYAINKUBUN

    //取得したデータから社員区分ドロップダウンリスト用のデータを洗い出す
    //const recevieMsg1 = await API(sendMsg)

    const DUMMY_RECEIVEMsg1 = [
      { display: 'MEG', value: '90' },
      { display: 'test2', value: '2' },
      { display: 'test3', value: '3' },
    ]
    const filHashSyain1: Dropdown.Option[] = []
    DUMMY_RECEIVEMsg1.map((item) => {
      filHashSyain1.push({
        value: item.value,
        display: item.display,
      })
    })
    console.log('resultCheck1', filHashSyain1)
    store.setSyainKubunOpt(filHashSyain1)
    store.setSyainKubun(filHashSyain1[0].value!)

    //取得したデータから在籍区分ドロップダウンリスト用のデータを洗い出す
    //const recevieMsg2 = await API(sendMsg)

    const DUMMY_RECEIVEMsg2 = [
      { display: '在籍', value: '01' },
      { display: 'test2', value: '2' },
      { display: 'test3', value: '3' },
    ]
    const filHashSyain2: Dropdown.Option[] = []
    DUMMY_RECEIVEMsg2.map((item) => {
      filHashSyain2.push({
        value: item.value,
        display: item.display,
      })
    })
    store.setZaisekiKubunOpt(filHashSyain2)
    store.setZaisekiKubun(filHashSyain2[0].value!)
    //休職・退職判定フラグ＝01（対象外)
    store.setKyuusyokuhanteiFlag('01')
    store.setTaisyokuhanteiFlag('01')
    
  // })

  // 定義済みのヘッダ、フッター設定方法とリセット方法。
  const {
    setHeaderButtonConfigs,
    resetHeaderButtonConfigs,
    setFooterButtonConfigs,
    resetFooterButtonConfigs,
  } = useButtonConfig()

  // 定義済みのフッターに表示する成功・エラーメーセージの設定方法。
  const { setPageErrorMessage, setPageSuccessMessage } = useMessage()

  onBeforeMount(() => {
    alert(
      'TODO : 初期表示抑制キーが存在する場合、処理をとばす(1回のみ有効)。\n ①詳細選択時は選択された詳細情報および前画面の全体件数と行番号（行番号／全体件数）を表示する。 \n取得項目:\n 検索結果（従業員コード）\n 行番号\n 処理区分=02（更新）\n②削除済の場合、削除解除チェックボックスおよび「削除済」のラベルを表示する。\n③未削除データの場合、削除チェックボックスおよび複写チェックボックスを表示する。',
    )
    //ヘッダのボタン表示及びロジックを設定する。
    const headerButtonConfigs: Button.Config[] = [
      {
        title: '戻る(F10)',
        disabled: false,
        onClick: () => {
          console.log('click 戻る(F10)')
          window.location.href = 'YCMKMSFB30M';
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

    //フッターのボタン表示及びロジックを設定する。
    const footerButtonConfigs: Button.Config[] = [
      { title: 'クリア(F1)', disabled: false, onClick: clear },
      { title: '(F2)', disabled: true, onClick: () => {} },
      { title: '(F3)', disabled: true, onClick: () => {} },
      { title: '(F4)', disabled: true, onClick: () => {} },
      { title: '(F5)', disabled: true, onClick: () => {} },
      { title: '(F6)', disabled: true, onClick: () => {} },
      { title: '(F7)', disabled: true, onClick: () => {} },
      { title: '(F8)', disabled: true, onClick: () => {} },
      {
        title: '登録(F9)',
        disabled: false,
        onClick: () => {
          alert('todo 登録を実行します。\n 画面表示 \n チェック')
        },
      },
    ]

    setFooterButtonConfigs(footerButtonConfigs)

    //currenpage,totalpageを設定する
    store.setCurrenPage(2)
    store.setTotalPage(2)
  })

  /**
   * 詳細画面の各アクションで必ず最初に行う処理を設定(区分有)
   * 「初期表示」処理時の業務ロジック
   */
  onBeforeMount(() => {
    // SMSCLLog.debug("beforeDisplay Logic start : ");
    // SMSCLLog.debug("String event : [" + event + "]");
    // SMSCLLog.debug("String context : [" + context + "]");
    // SMSCLLog.debug("String returnInfo : [" + returnInfo + "]");
    // try {
    // //TG1-00022-000 2011.01.17 KASHIMURA -START
    // 	// 初期表示抑制キーが存在する場合、処理をとばす(1回のみ有効)。
    // 	if (getUserData(context, YCMCjfConstant.KEY_SUPPRESS_BEFOREDISPLAY) != null) {
    // 		removeUserData(context, (Object) YCMCjfConstant.KEY_SUPPRESS_BEFOREDISPLAY);
    // 		return;
    // 	}
    // //TG1-00022-000 2011.01.17 KASHIMURA -END
    // 	// 区分の値が入ったマップ
    // 	Map kbnMap = new HashMap();
    // 	// 00109:社員区分
    // 	kbnMap.put(YCMCjfConstant.K_ST_SHAIN, ITEM_ST_SHAIN);
    // 	// 00216:在籍区分
    // 	kbnMap.put(YCMCjfConstant.K_ST_ZAISEKI, ITEM_ST_ZAISEKI);
     	// 詳細画面初期処理
     	preProcessSKubunMust();
    // 	JCFScreenData current = context.getCurrentScreenData();
    // 	JCFEventAdditionalInfo eventInfo = event.getEventAdditionalInfo();
    // 	JCFPanelData footerPanelData = current.getPanelData(SMSHeaderFooterManager.FRAME_FOOTER);
    // 	// 処理区分の取得
    // 	String stShori = (String) getUserData(context, YCMCjfConstant.KEY_ST_SHORI);
    // 	// 件数の取得
    // 	String qtRow = (String) getUserData(context, YCMCjfConstant.ITEM_QT_ROW);
    // 	String qtKensaku = (String) getUserData(context, YCMCjfConstant.ITEM_QT_KENSAKU);
    // 	// ユーザ領域から情報を取得する
    // 	Map map = (Map) getUserData(context, KEY_HASHMAP_JUGYOIN_SHOSAI_MSG);
    // 	SMSCLLog.debug("String stShori : [" + stShori + "]");
    // //TG1-00022-000 2011.01.17 KASHIMURA -START
    // 	if (stShori.equals(YCMCjfConstant.ST_SHORI_CREATE)) {
    // 		// 従業員カナ名称に空白10byteを設定
    // 		JCFPanelData panelData = current.getPanelData(SMSHeaderFooterManager.FRAME_MAIN);
    // 		JCFFieldStringData txtKanaMyoji = (JCFFieldStringData) panelData.getItemData(this.ITEM_NM_JUGYOIN_KANA_MYOJI);
    // 		JCFFieldStringData txtKanaNamae = (JCFFieldStringData) panelData.getItemData(this.ITEM_NM_JUGYOIN_KANA_NAMAE);
    // 		txtKanaMyoji.setValue("          ");
    // 		txtKanaNamae.setValue("          ");
    // 		// 休職判定フラグ（対象外を選択）
    // 		JCFToggleButtonData taisyoKyusyoku =(JCFToggleButtonData) current.getItemData(getIdFrameMain(),ITEM_FG_KYUSHOKU_HANTEI1);
    // 		JCFToggleButtonData taisyoGaiKyusyoku =(JCFToggleButtonData) current.getItemData(getIdFrameMain(),ITEM_FG_KYUSHOKU_HANTEI0);
    // 		taisyoKyusyoku.setValue(false);
    // 		taisyoGaiKyusyoku.setValue(true);
    // 		// 退職判定フラグ（対象外を選択）
    // 		JCFToggleButtonData taisyoTaisyoku =(JCFToggleButtonData) current.getItemData(getIdFrameMain(),ITEM_FG_TAISHOKU_HANTEI1);
    // 		JCFToggleButtonData taisyoGaiTaisyoku =(JCFToggleButtonData) current.getItemData(getIdFrameMain(),ITEM_FG_TAISHOKU_HANTEI0);
    // 		taisyoTaisyoku.setValue(false);
    // 		taisyoGaiTaisyoku.setValue(true);
    // 		// 社員区分・在籍区分（【90：ＭＥＧ】と【01：在籍】を設定）
    // 		//------ 2015.10.22 富士通)内山 ME-00758-000 MOD START ------
    // 		// 社員区分の初期値はNULLとする
    // 		//comboBox(event,context, returnInfo,current, ITEM_ST_SHAIN, "90");
    // 		comboBox(event,context, returnInfo,current, ITEM_ST_SHAIN, "");
    // 		//------ 2015.10.22 富士通)内山 ME-00758-000 MOD E N D ------
    // 		comboBox(event,context, returnInfo,current, ITEM_ST_ZAISEKI, "01");
    // 		// 管理フラグに【一般職】をセット
    // 		current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, this.ITEM_FG_KANRISHOKU0).setValue("true");
    // 		// 入力不要項目の非活性化
    // 		hikassei(event,context, returnInfo,current, false);
    // 		//------ 2015.10.22 富士通)内山 ME-00758-000 ADD START ------
    // 		//社員区分を活性化
    // 		current.getItemData(getIdFrameMain(),ITEM_ST_SHAIN).setEnabled(true);
    // 		//------ 2015.10.22 富士通)内山 ME-00758-000 ADD E N D ------
    // 		// 初期処理
     		preProcessCreate();
    // 		// 新規追加時のMapオブジェクトを取得
    // 		Map shokiMap = getEmptyData(event, context, returnInfo);
    // 		// 初期表示のデータを取得
    // 		shokiMap.put(
    // 			this.ITEM_CD_JUGYOIN,
    // 			current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, this.ITEM_CD_JUGYOIN).getValue());
    // 		//===== 【新規作成時の戻るボタン更新チェック回避start】 =====//
    // 		shokiMap.put(
    // 			this.ITEM_FG_KANRISHOKU, "");
    // 		//------ 2015.10.22 富士通)内山 ME-00758-000 MOD START ------
    // 		//shokiMap.put(
    // 		//	this.ITEM_ST_SHAIN, "90");
    // 		shokiMap.put(
    // 				this.ITEM_ST_SHAIN, "");
    // 		//------ 2015.10.22 富士通)内山 ME-00758-000 MOD E N D ------
    // 		shokiMap.put(
    // 			this.ITEM_ST_ZAISEKI, "01");
    // 		shokiMap.put(
    // 			this.ITEM_NM_JUGYOIN_KANA_MYOJI, "          ");
    // 		shokiMap.put(
    // 			this.ITEM_NM_JUGYOIN_KANA_NAMAE, "          ");
    // 		//===== 【新規作成時の戻るボタン更新チェック回避end】 =====//
    // 		// 新規作成時、登録ボタンは編集可
    // 		SMSHeaderFooterManager.setEnabledFooterButton(context, SMSHeaderFooterManager.ITEM_FUNCBTN9, true);
    // 		// 初期表示のデータをユーザ領域へ格納
    // 		putUserData(context, this.KEY_HASHMAP_JUGYOIN_SHOSAI_MSG, shokiMap);
    // 	}
    // //TG1-00022-000 2011.01.17 KASHIMURA -END
    // 	if (stShori.equals(YCMCjfConstant.ST_SHORI_UPDATE)) {
    // 		// CBSCBM共通Msgの生成
    // 		HashMap jugyoinMsg = new HashMap();
    // 		jugyoinMsg.put(KEY_HASHMAP_JUGYOIN_SHOSAI_MSG, map);
    // 		SMSCLLog.debug("context : [" + context + "]");
    // 		SMSCLLog.debug("YCMCjfConstant.CBS_NAME : [" + YCMCjfConstant.CBS_NAME + "]");
    // 		SMSCLLog.debug("VERB_GET_CHIHOKOKYODANTAI_ICHIRAN : [" + VERB_GET_JUGYOIN + "]");
    // 		SMSCLLog.debug("jugyoinMsg : [" + jugyoinMsg + "]");
    // 		// EJB call
    // 		HashMap outData = callEJB(context, event, YCMCjfConstant.CBS_NAME, VERB_GET_JUGYOIN, jugyoinMsg);
    // 		SMSCLLog.debug(outData.toString());
    // 		if (outData.get(YCMCjfConstant.KEY_HASHMAP_SYSWARNINGMSG) == null) {
    // 			HashMap jugyoinData = (HashMap) outData.get(YCMCjfConstant.KEY_HASHMAP_SYSDATA);
    // 			SMSCLLog.debug(jugyoinData.toString());
    // 			HashMap jugyoinShosaiData = (HashMap) jugyoinData.get(KEY_HASHMAP_JUGYOIN_SHOSAI_MSG);
    // 			// 検索結果が0件の場合エラー
    // 			if (jugyoinShosaiData == null) {
    // 				// [YCSCMNMSW056]検索が終了しましたが該当するデータが見つかりません。\n検索条件を見直してください。
    // 				SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMSW056);
    // 				return;
    // 			}
    // 	//TG1-00022-000 2011.01.17 KASHIMURA -START
    // 			// 画面にデータをセット(参照のみ)
    // 			setData(event, context, returnInfo, jugyoinShosaiData);
    // 			//setDataSelectMenu(event, context, returnInfo, jugyoinShosaiData);
    // 			// 論理削除フラグの取得
    // 			String fgRonrisakujo = (String) jugyoinShosaiData.get(YCMCjfConstant.ITEM_FG_RONRISAKUJO);
    // 			if (fgRonrisakujo != null && fgRonrisakujo.equals(YCMCjfConstant.FG_OFF)) {
    // 				// 編集時初期処理
     				preProcessUpdate();
    // 			} else {
    // 				// 削除時初期処理
     				preProcessCancel();
    // 			}
    // 			// 入力不要項目の非活性化
    // 			hikassei(event,context, returnInfo,current, false);
    // 			//------ 2015.10.22 富士通)内山 ME-00758-000 ADD START ------
    // 			if (fgRonrisakujo != null && fgRonrisakujo.equals(YCMCjfConstant.FG_OFF)){
    // 				//社員区分を活性化
    // 				current.getItemData(getIdFrameMain(),ITEM_ST_SHAIN).setEnabled(true);
    // 			}
    // 			//------ 2015.10.22 富士通)内山 ME-00758-000 ADD E N D ------
    // 			//String[] keyList = (String[]) getUserData(context, YCMCjfConstant.KEY_LIST);
    // 			// キー項目を編集不可
    // 			//setEnabled(event, context, returnInfo, keyList, false);
    // 			//String[] otherList = (String[]) getUserData(context, YCMCjfConstant.OTHER_LIST);
    // 			// その他の項目を編集不可
    // 			//setEnabled(event, context, returnInfo, otherList, false);
    // 	//TG1-00022-000 2011.01.17 KASHIMURA -END
    // 			// 件数の設定
    // 			current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YCMCjfConstant.ITEM_QT_ROW).setValue(qtRow);
    // 			current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YCMCjfConstant.ITEM_QT_KENSAKU).setValue(qtKensaku);
    // 			// 初期表示のデータをユーザ領域へ格納
    // 			putUserData(context, KEY_HASHMAP_JUGYOIN_SHOSAI_MSG, jugyoinShosaiData);
    // 			// 次へ前へボタンの設定
    // 			setPrevNext(event, context, returnInfo);
    // 			// フォーカスは戻るボタン
    // 			returnInfo.setFocus(SMSHeaderFooterManager.FRAME_HEADER, SMSHeaderFooterManager.RETURN_BUTTON);
    // 		} else {
    // 			// 戻るボタンにフォーカスを当て、前データ次データを押下不可にする
    // 			returnInfo.setFocus(SMSHeaderFooterManager.FRAME_HEADER, SMSHeaderFooterManager.RETURN_BUTTON);
    // 			current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YCMCjfConstant.ITEM_PREV).setEnabled(false);
    // 			current.getItemData(SMSHeaderFooterManager.FRAME_MAIN, YCMCjfConstant.ITEM_NEXT).setEnabled(false);
    // 		}
    // 	}
    // } catch (Throwable th) {
    // 	super.callErrorAdapter(context, th);
    // }
    // SMSCLLog.debug("beforeDisplay Logic end : ");
  })

  /**
   * clearボタン押下
   *
   */
  const clear = () => {
    // const confirmClear = confirm('クリアしてよろしいでしょうか')
    // if (confirmClear) {
      console.log(
        'clear動作確認1:'+
        store.cdJyuugyouin+
        store.jyuugyouinMj+
        store.jyuugyouinNm+
        store.kyuusyokuKaishi


      )
    store.setCdJyuugyouin('')
    store.setJyuugyouinMj('')
    store.setJyuugyouinNm('')
    store.setKyuusyokuhanteiFlag('01')
    store.setTaisyokuhanteiFlag('01')
    store.setJyuugyouinKanaNm('')
    store.setJyuugyouinKanaMj('')
    store.setMail('')
    store.setSakuseiNj('')
    store.setSakuseiSya('')
    store.setKoushinNj('')
    store.setKoushinSya('')
    store.setKyuusyokuKaishi('')
    store.SetSearch021Result('')
    store.setKanriFlag('false')
    store.setZaisekiKubun(filHashSyain2[0].value!)
    store.setSyainKubun(filHashSyain1[0].value!)


    //clearcheck
    console.log(
      'clear動作確認2:'+
      store.cdJyuugyouin+
      store.jyuugyouinMj+
      store.jyuugyouinNm+
      store.setKyuusyokuhanteiFlag('01')+
      store.setTaisyokuhanteiFlag('01')
    )
    // }
  }
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
    setPageName('従業員マスタ詳細')
    //画面ID
    setPageId('YCMKMSFB31S')
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

  //画面データ初期化後のdom処理はonMountedに書く。
  onMounted(() => {
    //TODO
  })

  // 画面から離れる際、メモリを釈放などの処理はonBeforeUnmoutにかく。
  onBeforeUnmount(() => {
    //ヘッダの設定をデフォルト設定にリセットする。
    resetHeaderButtonConfigs()
    //フッターの設定をデフォルト設定にリセットする。
    resetFooterButtonConfigs()
  })

  /**
   *検索機能ロジック
   *todo
   */
  function GeneralSearch021() {
    alert(
      'TODO \n ①損益管理組織検索画面/APIを呼び出す。\n ②損益管理組織情報の表示',
    )
    /**
   * errormessage設定
   */
  store.setMessage("TODO :message")
  }
  
  
  //リアクティビティを保つため、computedを使用する。
  return {
    message: computed({
      get: () => store.message,
      set: (value: string) => store.setMessage(value),
    }),
    totalPage: computed({
      get: () => store.totalPage,
      set: (text: any) => store.setTotalPage(text),
    }),
    currenPage: computed({
      get: () => store.currenPage,
      set: (text: any) => store.setCurrenPage(text),
    }),
    kanriFlag: computed({
      get: () => store.kanriFlag,
      set: (value: string) => store.setKanriFlag(value),
    }),
    Search021Result: computed({
      get: () => store.Search021Result,
      set: (value: string) => store.SetSearch021Result(value),
    }),
    kyuusyokuKaishi: computed({
      get: () => store.kyuusyokuKaishi,
      set: (value: string) => store.setKyuusyokuKaishi(value),
    }),
    koushinSya: computed({
      get: () => store.koushinSya,
      set: (value: string) => store.setKoushinSya(value),
    }),
    koushinNj: computed({
      get: () => store.koushinNj,
      set: (value: string) => store.setKoushinNj(value),
    }),
    sakuseiSya: computed({
      get: () => store.sakuseiSya,
      set: (value: string) => store.setSakuseiSya(value),
    }),
    sakuseiNj: computed({
      get: () => store.sakuseiNj,
      set: (value: string) => store.setSakuseiNj(value),
    }),
    mail: computed({
      get: () => store.mail,
      set: (value: string) => store.setMail(value),
    }),
    jyuugyouinKanaMj: computed({
      get: () => store.jyuugyouinKanaMj,
      set: (value: string) => store.setJyuugyouinKanaMj(value),
    }),
    jyuugyouinKanaNm: computed({
      get: () => store.jyuugyouinKanaNm,
      set: (value: string) => store.setJyuugyouinKanaNm(value),
    }),
    jyuugyouinMj: computed({
      get: () => store.jyuugyouinMj,
      set: (value: string) => store.setJyuugyouinMj(value),
    }),
    jyuugyouinNm: computed({
      get: () => store.jyuugyouinNm,
      set: (value: string) => store.setJyuugyouinNm(value),
    }),
    cdJyuugyouin: computed({
      get: () => store.cdJyuugyouin,
      set: (value: string) => store.setCdJyuugyouin(value),
    }),
    zaisekiKubunOpt: computed<Dropdown.Option[]>({
      get: () => store.zaisekiKubunOpt,
      set: (value: Dropdown.Option[]) => store.setZaisekiKubunOpt(value),
    }),
    zaisekiKubun: computed({
      get: () => store.zaisekiKubun,
      set: (value: string) => store.setZaisekiKubun(value),
    }),
    syainKubunOpt: computed<Dropdown.Option[]>({
      get: () => store.syainKubunOpt,
      set: (value: Dropdown.Option[]) => store.setSyainKubunOpt(value),
    }),
    syainKubun: computed({
      get: () => store.syainKubun,
      set: (value: string) => store.setSyainKubun(value),
    }),
    kyuusyokuhanteiFlag: computed({
      get: () => store.kyuusyokuhanteiFlag,
      set: (value: string) => store.setKyuusyokuhanteiFlag(value),
    }),
    taisyokuhanteiFlag: computed({
      get: () => store.taisyokuhanteiFlag,
      set: (value: string) => store.setTaisyokuhanteiFlag(value),
    }),

    mode: computed(() => store.mode),
    nmRonrisakujo: computed(() => store.nmRonrisakujo),
    body_delete: computed(() => store.body_delete),
    body_copy: computed(() => store.body_copy),
    body_cancel: computed(() => store.body_cancel),
    GeneralSearch021,
  }
}
