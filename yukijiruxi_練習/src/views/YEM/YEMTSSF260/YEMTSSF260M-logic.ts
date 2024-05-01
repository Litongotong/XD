import { useRouter } from 'vue-router'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'

import type { Button } from '@/types/components/button'
import type { Dropdown, Table } from '@/types/components'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYEMTSSF260MStore } from './YEMTSSF260M-store'
import {
  getBeforeMonth,
  getMonth,
  blankToNull,
  isBlank,
  numck,
  checkField,
  FIELD_H,
  type CmbDate,
  CD_HANYO,
  NM_NAIYO1,
  CD_CMB_HANYO,
  KEY_KEISANHOUHOU_CBMMSG,
  KEY_CHAIN_CBMMSG,
  NM_CMB_NAIYO1,
  NM_CMB_NAIYO2,
  CD_CHOAISAKI,
  CD_CHAIN,
  NM_TYOAISAKI_RYAKU,
  ST_CHAIN,
  NM_CHAIN_RYAKU,
  CD_SONEKIKANRI_SOSHIKI,
  NM_JUGYOIN_MIYOJI,
  NM_JUGYOIN_NAMAE,
  CD_TANTOSHA,
  CD_SHOKUBA2,
  NM_SONEKI_KANRISOSHIKI_RYAKU,
  DT_KAKUNIN,
  NM_KAKUNINSHA_MYOJI,
  NM_KAKUNINSHA_NAMAE,
  TOKUBAI_SETTEI_JOKEN_CBMMSG,
  DT_NENGETU,
  DT_KEISAN_HOUHO,
  CD_SHOKUBA_SEISAN,
  FG_TOROKU,
  ST_TOKUBAI_KEISAN,
  ROW_INDEX,
  TM_KOSHIN,
  FG_KYU_KA_MODE,
  NM_CHAIN_KUBUN,
  KEY_TOKUBAI_SETTEI_CBMMSG_LIST,
  CD_CHOHYO_ID,
  COMMON_MSG,
  STR_BLANK,
  NM_SYOKUBA_RYAKU,
  NM_TANTOSHA_MYOJI,
  NM_TANTOSHA_NAMAE,
  FG_KEISANHOUHOU,
  FG_ST_JITSUHAN_JIGYO,
  FG_CHAIN,
  PARAM_KEY_ERROR_FLG,
  PARAM_KEY_COMPLETED,
  IS_ERROR,
  IS_WARNING,
  IS_SUCCESS,
  PARAM_KEY_DATA,
  PARAM_KEY_COMMON,
  ST_HIKIATE_HOHO,
  NU_HIKIATE_HIYORITSU,
} from '../common/YEMTSSF000-logic'
import {
  YEMTSSF260M_init as init,
  YEMTSSF260M_getTokubaiSettei as getTokubaiSettei,
  YEMTSSF260M_updateTokubaiSettei as updateTokubaiSettei,
  YEMTSSF260M_rgsTokubaiSettei as rgsTokubaiSettei,
  YEMTSSF260M_print as printPdf,
} from '@/services/modules'

import { PAGES } from '@/router/constant'
import { useDialog } from '@/stores/dialog'
import { handlerMessage } from '@/utils'
import { MSGPositions, MSGTypes } from '@/enums'

// 画面YEMTSSF260MSのロジックを定義する。
// ロジックを vueファイルのsetup script 内に実行させる為に画面モジュールを関数で定義しなければならない。
// setup script 以外に画面モジュールを使うと実行エラーが発生する。
export default function useYEMTSSF260MSLogic() {
  const router = useRouter()
  // 定義済みの画面YEMTSSF260MSのstore。画面の状態をstoreから導入する。
  // メソードは分割代入できますが、リアクティビティが失われるため、変数は分割代入できない。
  // 変数を使用したい場合、下記方法でstoreを導入してください。
  const store = useYEMTSSF260MStore()
  const { setShowDialog } = useDialog()

  // TODO: DUMMY START
  // 最大件数
  const DUMMY_QTSAIDAIKENSAKU = '20'
  const DUMMY_COMMONMSG = {
    cdKaisha: '1001',
    dtUnyo: '20231101',
    qtSaidaiKensaku: DUMMY_QTSAIDAIKENSAKU,
  }
  const DUMMY_LOGININFO = {
    cdKaisha: DUMMY_COMMONMSG.cdKaisha,
    cdTantosha: '000000009',
  }

  const YCSCMNMCW031 = '&1の入力形式が誤っています。正しく入力してください。'
  const YCSCMNMSW037 =
    '最大検索件数&1件を超えたため、画面に表示できません。\n検索条件を見直してください。'
  const YCSCMNMSW056 =
    '検索が終了しましたが該当するデータが見つかりません。\n検索条件を見直してください。'
  const YCSCMNMSI020 = '&1件のデータが検索されました。'
  const YCSCMNMSC004 = '更新処理を実行します。よろしいですか。'
  const YCSCMNMCW033 = '&1を選択してください。'
  const YCSCMNMSI019 = '&1が正常終了しました。'
  const YCSCMNMSC001 = '登録処理を実行します。よろしいですか。'
  const YCSCMNMCW155 = '&1に&2を指定する場合、&3はできません。'
  const YEMSPSMCW006 =
    '選択された条件を登録してから詳細条件を設定してください。'
  const YEMSPSMCW013 = '選択された明細行は、未登録状態です。'
  const YCSCMNMCW025 =
    '&1が入力されていません。入力必須項目なので必ず入力して下さい。'
  const YCSCMNMCW035 = '&1を入力した時は、&2の入力はできません。'
  const YCSCMNMSW057 = '変更された項目がありません。'

  function replaceMsg(msg: string, param: any = []) {
    let ret = msg
    param.forEach((e: string, index: number) => {
      ret = ret.replace('&' + (index + 1), e)
    })

    return ret
  }
  // TODO: DUMMY END

  // 帳合先コード長
  const LEN_CHOAI_CD = 6
  // チェーンコード長
  const LEN_CHAIN_CD = 6
  // 職場コード長
  const LEN_SHOKUBA_CD = 6
  // 従業員コード長
  const LEN_JUGYOIN_CD = 9

  const spdComboData: Dropdown.Option[] = [
    {
      value: null,
      display: '',
    },
  ]

  // 初期化データ取得apiの呼び出し、データ初期化はonBeforeMountに書く。
  onBeforeMount(async () => {
    const dtUnyo = DUMMY_COMMONMSG.dtUnyo
    setPageErrorMessage('')
    setPageSuccessMessage('')

    // 年月コンボボックスを設定する 過去２ヶ月、未来３ヶ月
    const nengetsuBeforeHash = getBeforeMonth(dtUnyo, -2).map((e: CmbDate) => {
      return { value: e[CD_HANYO], display: e[NM_NAIYO1] }
    })
    const nengetsuAfterHash = getMonth(dtUnyo, 3).map((e: CmbDate) => {
      return { value: e[CD_HANYO], display: e[NM_NAIYO1] }
    })
    const nengetsuHash: Dropdown.Option[] = [
      ...nengetsuBeforeHash,
      ...nengetsuAfterHash,
    ]
    store.setCmbYMOptions(nengetsuHash)
    store.setCmbYM(nengetsuHash[2].value!)

    // 画面初期化データ取得apiの呼び出し

    const sendMsg: any = {}
    const fgHanyobunrui = '1'
    sendMsg[FG_KEISANHOUHOU] = fgHanyobunrui
    sendMsg[FG_ST_JITSUHAN_JIGYO] = '1'
    sendMsg[FG_CHAIN] = fgHanyobunrui
    sendMsg[COMMON_MSG] = DUMMY_COMMONMSG
    const recevieMsg = await init(sendMsg)
    console.log('init')
    console.log(recevieMsg)
    const filHash: Dropdown.Option[] = []
    recevieMsg[KEY_KEISANHOUHOU_CBMMSG]?.map((e: any) => {
      if (e[CD_CMB_HANYO] === '01' || e[CD_CMB_HANYO] === '06') {
        filHash.push({
          value: e[CD_CMB_HANYO],
          display: e[NM_NAIYO1],
        })
      }
    })
    store.setCmbKeisanHouhoOpt(filHash)
    store.setCmbKeisanHouho(filHash[0].value!)

    // チェーン区分コンボボックスを設定する
    recevieMsg[KEY_CHAIN_CBMMSG]?.map((e: any) => {
      spdComboData.push({
        value: e[CD_CMB_HANYO],
        display: e[NM_CMB_NAIYO1],
      })
    })
    console.log(spdComboData)

    // 画面データを設定する。
    store.setRdSeisanJoken('rdSeisanJoken')
    // setTxtChoaisaki('049882')
    // setTxtChoaisakiRyakuNm('アクセス東京中央支店')
    // setTxtShitenSyokubaCd('000005')
    // setTxtSonekiKanriSosikiRyakuNm('東京乳食品')
    // setTxtChainCd('001395')
    // setTxtChainRyakuNm('コモディイイダ')
    // setTxtTantoshaCd('19891027B')
    // setTxtJyugyoinNm('担当太郎')
    store.setTxtCountDispMain('0')
  })

  // 定義済みのヘッダ、フッター設定方法とリセット方法。
  const {
    setHeaderButtonConfigs,
    resetHeaderButtonConfigs,
    setFooterButtonConfigs,
    resetFooterButtonConfigs,
  } = useButtonConfig()
  // 定義済みのフッターに表示する成功・エラーメーセージの設定方法。
  const { setPageErrorMessage, setPageSuccessMessage, clearPageMessages } =
    useMessage()

  onBeforeMount(() => {
    //ヘッダのボタン表示及びロジックを設定する。
    const headerButtonConfigs: Button.Config[] = [
      {
        title: '戻る(F10)',
        disabled: false,
        onClick: () => {
          console.log('click 戻る(F10)')
          //メーセージをクリックする。
          window.alert('前の画面作成中、戻ることはできません。')
          setPageErrorMessage('')
          setPageSuccessMessage('')
        },
      },
      {
        title: 'メニュー(F11)',
        disabled: false,
        onClick: () => {
          console.log('click メニュー(F11)')
          // 成功メーセージを設定する。（設定する場合は上記エラーメーセージ設定のソースコードは不要となる。）
          window.alert('メニュー画面作成中、遷移できません。')
          setPageErrorMessage('')
          setPageSuccessMessage('処理成功しました。')
        },
      },
      {
        title: '業務終了(F12)',
        disabled: false,
        onClick: () => {
          console.log('click 業務終了(F12)')

          // エラーメーセージを設定する。
          window.alert('現時点業務終了できません。')
          setPageErrorMessage('エラーが発生しました。')
          setPageSuccessMessage('')
        },
      },
    ]
    // 01/17 レビュー指摘より、ヘッダボタンの暫定アクションは画面閉じる
    // 共通メソッドを使って、本メソッドをコメントアウトする
    // setHeaderButtonConfigs(headerButtonConfigs)

    //フッターのボタン表示及びロジックを設定する。
    store.setDatatable([])
    setButtonStatus(true)
  })

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
    setPageName('特売精算条件設定')
    //画面ID
    setPageId('YEMTSSF260M')
    //会社名表示否
    setShowCompanyName(true)
    // 部署名表示否
    setShowDepartmentName(true)
    // ログイン日時表示否
    setShowLoginDate(true)
    // ユーザー名表示否
    setShowUserName(true)
    // 運用日表示否
    setShowUseDate(false)
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
   * 「表示ボタン」押下処理時の業務ロジック
   */
  function clearData() {
    store.setDatatable([])
    // store.setDatalist([])
    store.setTxtCountDispMain('0')
    setButtonStatus(true)
  }
  async function showData() {
    setPageErrorMessage('')
    setPageSuccessMessage('')

    // check
    // チェーン
    if (!isBlank(store.txtChainCd) && store.txtChainCd.length != LEN_CHAIN_CD) {
      store.txtChainRyakuNm = ''
      setPageErrorMessage(replaceMsg(YCSCMNMCW031, ['チェーンコード']))
      clearData()
      return
    }
    // 帳合先
    if (
      !isBlank(store.txtChoaisaki) &&
      store.txtChoaisaki.length != LEN_CHOAI_CD
    ) {
      store.txtChoaisakiRyakuNm = ''
      setPageErrorMessage(replaceMsg(YCSCMNMCW031, ['帳合先コード']))
      clearData()
      return
    }
    // 支店・職場
    if (
      !isBlank(store.txtShitenSyokubaCd) &&
      store.txtShitenSyokubaCd.length != LEN_SHOKUBA_CD
    ) {
      store.txtSonekiKanriSosikiRyakuNm = ''
      setPageErrorMessage(replaceMsg(YCSCMNMCW031, ['職場コード']))
      clearData()
      return
    }
    // 担当者
    if (
      !isBlank(store.txtTantoshaCd) &&
      store.txtTantoshaCd.length != LEN_JUGYOIN_CD
    ) {
      store.txtJyugyoinNm = ''
      setPageErrorMessage(replaceMsg(YCSCMNMCW031, ['担当者コード']))
      clearData()
      return
    }

    // 検索条件HashMapを作成
    const jokenMsg: any = {}
    // 年月
    if (!isBlank(store.cmbYM)) {
      jokenMsg[DT_NENGETU] = store.cmbYM
    }
    // 計算方法
    if (!isBlank(store.cmbKeisanHouho)) {
      jokenMsg[DT_KEISAN_HOUHO] = store.cmbKeisanHouho
    }
    // チェーン
    if (!isBlank(store.txtChainCd)) {
      jokenMsg[CD_CHAIN] = store.txtChainCd
    }
    // 帳合先
    if (!isBlank(store.txtChoaisaki)) {
      jokenMsg[CD_CHOAISAKI] = store.txtChoaisaki
    }
    // 支店・職場
    if (!isBlank(store.txtShitenSyokubaCd)) {
      jokenMsg[CD_SHOKUBA_SEISAN] = store.txtShitenSyokubaCd
    }
    // 担当者
    if (!isBlank(store.txtTantoshaCd)) {
      jokenMsg[CD_TANTOSHA] = store.txtTantoshaCd
    }

    const sendMsg: any = {}
    sendMsg[COMMON_MSG] = DUMMY_COMMONMSG
    sendMsg[TOKUBAI_SETTEI_JOKEN_CBMMSG] = jokenMsg
    const recevieMsg = await getTokubaiSettei(sendMsg)
    console.log('search')
    console.log(sendMsg)
    console.log(recevieMsg)

    //エラーフラグを取得
    const errFlag = recevieMsg[PARAM_KEY_ERROR_FLG]
    if (errFlag == IS_WARNING) {
      clearData()
      return
    }

    // TODO:error場合
    const strMaxDisplayCnt = DUMMY_QTSAIDAIKENSAKU
    if (
      recevieMsg?.[KEY_TOKUBAI_SETTEI_CBMMSG_LIST]?.length >
      Number(strMaxDisplayCnt)
    ) {
      setPageErrorMessage(replaceMsg(YCSCMNMSW037, [strMaxDisplayCnt]))
      clearData()
      return
    }

    // 業務情報を取得 KEY_TOKUBAI_SHIHARAI_CBMMSG
    const jokenMsgRet: any = recevieMsg[TOKUBAI_SETTEI_JOKEN_CBMMSG]
    if (jokenMsgRet == undefined) {
      clearData()
      return
    }
    if (jokenMsgRet?.[NM_TYOAISAKI_RYAKU] != null) {
      // 帳合先名称をセット
      store.setTxtChoaisakiRyakuNm(jokenMsgRet[NM_TYOAISAKI_RYAKU])
    } else {
      store.setTxtChoaisakiRyakuNm(STR_BLANK)
    }
    // 組織名称をセット
    if (jokenMsgRet?.[NM_SYOKUBA_RYAKU] != null) {
      store.setTxtSonekiKanriSosikiRyakuNm(jokenMsgRet[NM_SYOKUBA_RYAKU])
    } else {
      store.setTxtSonekiKanriSosikiRyakuNm(STR_BLANK)
    }
    // チェーン名称をセット
    if (jokenMsgRet?.[NM_CHAIN_RYAKU] != null) {
      store.setTxtChainRyakuNm(jokenMsgRet[NM_CHAIN_RYAKU])
    } else {
      store.setTxtChainRyakuNm(STR_BLANK)
    }
    // 担当者名称をセット
    if (jokenMsgRet?.[NM_TANTOSHA_MYOJI] != null) {
      const nmTantou = joinName(
        jokenMsgRet[NM_TANTOSHA_MYOJI],
        jokenMsgRet[NM_TANTOSHA_NAMAE]
      )
      store.setTxtJyugyoinNm(nmTantou)
    } else {
      store.setTxtJyugyoinNm(STR_BLANK)
    }

    // Spreadに受信データをセット
    const l: Table.DatumRow[] = []
    recevieMsg[KEY_TOKUBAI_SETTEI_CBMMSG_LIST]?.map((e: any) => {
      const row = { ...e }
      row[FG_TOROKU] = ON_DB
      l.push(createRowData(row))
    })
    store.setDatatable(l)
    // store.setDatalist(recevieMsg[KEY_TOKUBAI_SETTEI_CBMMSG_LIST])

    store.setTxtCountDispMain(String(l.length))
    setButtonStatus(l.length == 0)

    const len = recevieMsg?.[KEY_TOKUBAI_SETTEI_CBMMSG_LIST]?.length
    if (len == 0) {
      setPageErrorMessage(replaceMsg(YCSCMNMSW056, []))
    } else {
      setPageSuccessMessage(replaceMsg(YCSCMNMSI020, [String(len)]))
    }
  }

  /**
   * 「確認ボタン押下」処理時の業務ロジック
   */
  async function updateData() {
    setPageErrorMessage('')
    setPageSuccessMessage('')

    if (!window.confirm(YCSCMNMSC004)) {
      return
    }

    const jokenArray: any = []
    store.datatable.forEach((row, index) => {
      let isChked: any = false
      const ListMsg: any = {}
      let hiddenData: any = {}
      row.map((cell) => {
        if (cell.id === SPRD_COL_SELECT) {
          // 選択
          isChked = cell.datum
        } else if (cell.id === SPRD_COL_SYOKUBA) {
          // 職場コード
          ListMsg[NM_SONEKI_KANRISOSHIKI_RYAKU] = cell.datum
        } else if (cell.id === SPRD_COL_CHOAI) {
          // 帳合先
          ListMsg[CD_CHOAISAKI] = cell.datum
        } else if (cell.id === SPRD_COL_CHAIN) {
          // チェーン
          ListMsg[CD_CHAIN] = cell.datum
        } else if (cell.id === SPRD_COL_HIDDEN) {
          // hidden
          hiddenData = cell.datum
        }
      })

      if (isChked) {
        // 年月
        ListMsg[DT_NENGETU] = store.cmbYM
        // 計算方法
        ListMsg[ST_TOKUBAI_KEISAN] = store.cmbKeisanHouho
        // 更新日時
        ListMsg[TM_KOSHIN] = hiddenData[TM_KOSHIN]
        // row index
        ListMsg[ROW_INDEX] = hiddenData[ROW_INDEX]

        //
        jokenArray.push(ListMsg)
      }
    })

    if (jokenArray.length == 0) {
      setPageErrorMessage(replaceMsg(YCSCMNMCW033, ['確認する行']))
      return
    }

    // 検索条件HashMapを作成
    let jokenMsg: any = {}
    jokenMsg[CD_TANTOSHA] = DUMMY_LOGININFO[CD_TANTOSHA]

    const sendMsg: any = {}
    sendMsg[COMMON_MSG] = {
      ...DUMMY_COMMONMSG,
      cdUser: 'megsnow',
      nmHost: 'host3',
    }
    sendMsg[TOKUBAI_SETTEI_JOKEN_CBMMSG] = jokenMsg
    sendMsg[KEY_TOKUBAI_SETTEI_CBMMSG_LIST] = jokenArray
    console.log('updateData')
    console.log(sendMsg)
    const receiveMap = await updateTokubaiSettei(sendMsg)
    console.log(receiveMap)

    const errFlag = receiveMap[PARAM_KEY_ERROR_FLG]
    if (errFlag == IS_WARNING) {
      //WARNINGの場合の処理
      // setPageSuccessMessage(replaceMsg(YCSCMNMSI019, ['確認']))
      return
    }

    const completed = receiveMap?.result?.[PARAM_KEY_COMPLETED]
    if (completed != undefined && !completed) {
      return
    }

    // TODO:IS_SUCCESS
    // エラーの有無
    //確認者・確認日をスプレッドにセットする
    const kakuninList = receiveMap[KEY_TOKUBAI_SETTEI_CBMMSG_LIST]
    jokenMsg = receiveMap[TOKUBAI_SETTEI_JOKEN_CBMMSG]
    const nmKakuninMyoji = jokenMsg[NM_TANTOSHA_MYOJI]
    const nmKakuninNamae = jokenMsg[NM_TANTOSHA_NAMAE]
    const table = [...store.datatable]
    // const list = [...store.datalist]
    kakuninList.map((mesaiMap: any) => {
      const rowIndex = Number(mesaiMap[ROW_INDEX])
      const dtKakunin =
        mesaiMap[DT_KAKUNIN].substring(0, 4) +
        '/' +
        mesaiMap[DT_KAKUNIN].substring(4, 6) +
        '/' +
        mesaiMap[DT_KAKUNIN].substring(6, 8)
      const tmKoshin = mesaiMap[TM_KOSHIN]
      const name = joinName(nmKakuninMyoji, nmKakuninNamae)

      // datatable
      table.forEach((row: any) => {
        let isSameLine = false
        row?.forEach((cell: any) => {
          if (cell.id == SPRD_COL_HIDDEN) {
            if (cell.datum[ROW_INDEX] == rowIndex) {
              // 同じ行
              isSameLine = true
              return true
            }
          }
        })
        if (isSameLine) {
          row?.forEach((cell: any) => {
            if (cell.id == SPRD_COL_NM_KAKUNIN) {
              // 更新者
              cell.datum = name
            } else if (cell.id == SPRD_COL_DT_KAKUNIN) {
              // 更新日設定
              cell.datum = dtKakunin
            } else if (cell.id == SPRD_COL_HIDDEN) {
              // hidden設定
              cell.datum[TM_KOSHIN] = mesaiMap[TM_KOSHIN]
            }
          })
        }
      })

      // // datalist
      // const foundList: any = list.find((e: any) => e[ROW_INDEX] == rowIndex)
      // foundList[DT_KAKUNIN] = name
      // foundList[TM_KOSHIN] = tmKoshin
    })
    store.setDatatable(table)
    // store.setDatalist(list)

    // message
    setPageSuccessMessage(replaceMsg(YCSCMNMSI019, ['確認']))
  }

  /**
   * 「登録ボタン押下」時に確認ダイアログを表示する。
   */
  function openDialog(callBack: Function, text: string) {
    handlerMessage(
      MSGPositions.POPUP,
      MSGTypes.WARNNING,
      text + '実行しますか？',
      [
        {
          title: 'はい',
          disabled: false,
          width: '80',
          height: '15',
          onClick: () => {
            setShowDialog(false)
            callBack()
          },
        },
        {
          title: 'いいえ',
          disabled: false,
          width: '80',
          height: '15',
          onClick: () => setShowDialog(false),
        },
      ]
    )
  }

  /**
   * 「登録ボタン押下」処理時の業務ロジック
   */
  async function rgsData() {
    setPageErrorMessage('')
    setPageSuccessMessage('')

    // if (!window.confirm(YCSCMNMSC001)) {
    //   return
    // }

    const shosaiMsgArray: [] | any = makeSendMsg4Regist(
      DUMMY_LOGININFO.cdKaisha,
      store.cmbYM,
      store.cmbKeisanHouho
    )
    if (shosaiMsgArray == null || shosaiMsgArray.length == 0) {
      return
    }

    const sendMsg: any = {}
    sendMsg[COMMON_MSG] = {
      ...DUMMY_COMMONMSG,
      cdKaisha: '1001',
      dtUnyo: '20230101',
      cdUser: 'shuaijun',
      qtSaidaiKensaku: '100',
      nmHost: 'host',
    }
    sendMsg[KEY_TOKUBAI_SETTEI_CBMMSG_LIST] = shosaiMsgArray
    const recevieMsg = await rgsTokubaiSettei(sendMsg)
    console.log('recevieMsg')
    console.log(sendMsg)
    console.log(recevieMsg)

    const completed = recevieMsg?.result?.[PARAM_KEY_COMPLETED]
    if (completed != undefined && !completed) {
      return
    }

    // Spreadに受信データをセット
    const table = [...store.datatable]
    const t: Table.DatumRow[] = []
    const l: any[] = []
    table.forEach((row: any) => {
      // each line
      let rowIndex: any = undefined
      row?.forEach((cell: any) => {
        if (cell.id == SPRD_COL_HIDDEN) {
          rowIndex = cell.datum[ROW_INDEX]
          return true
        }
      })

      const found = recevieMsg[KEY_TOKUBAI_SETTEI_CBMMSG_LIST]?.find(
        (e: any) => e[ROW_INDEX] == rowIndex
      )
      if (found == undefined) {
        // 変更なしデータ
        t.push(row)
        // l.push(row)
      } else {
        // その他データ（更新後、追加後、削除）
        if (found[FG_TOROKU] != DELETE) {
          //　更新と新規追加
          t.push(createRowData(found))
          l.push(found)
        } else {
          // 削除されたデータ
          // 処理なし
        }
      }
    })
    store.setDatatable(t)
    // store.setDatalist(l)
    store.setTxtCountDispMain(String(t.length))
    setButtonStatus(t.length == 0)

    setPageSuccessMessage(replaceMsg(YCSCMNMSI019, ['登録']))
  }

  /**
   * スプレッド内のデータをメッセージリストに設定する<br>
   *
   * @param context ＣＪＦコンテキストオブジェクト
   * @param spread  スプレッドオブジェクト<br>
   * @param cdKaisya 会社コード(未使用)
   * @param cmbNengetu 年月
   * @param cmbKeisan 計算方法
   * @return 登録リスト<br>
   */
  function makeSendMsg4Regist(
    cdKaisya: string,
    cmbNengetu: string,
    cmbKeisan: string
  ): [] {
    const shosaiMsgArray: any = []
    let isErr = false

    store.datatable.forEach((row) => {
      let isDelete: any = false
      let cdChoaisaki: any = ''
      let cdChain: any = ''
      let cdSyokuba: any = ''
      let cdTantou: any = ''
      let stChain: any = ''
      let dtNengetu: any = ''
      // let stKeisan: any = ''
      let tmKoshin: any = ''
      let onDbfg: any = ''
      // let hdcdChoaisaki: any = ''
      // let hdcdChain: any = ''
      let hdcdSyokuba: any = ''
      let hdcdTantou: any = ''
      let hdstChain: any = ''
      let rowIndex: any = ''

      row.map((cell: any) => {
        // 項目を取得
        if (cell.id == SPRD_COL_DELETE) {
          isDelete = cell.datum
        } else if (cell.id == SPRD_COL_CHOAI) {
          cdChoaisaki = cell.datum
        } else if (cell.id == SPRD_COL_CHAIN) {
          cdChain = cell.datum
        } else if (cell.id == SPRD_COL_ST_CHAIN) {
          stChain = cell.datum
        } else if (cell.id == SPRD_COL_SYOKUBA) {
          cdSyokuba = cell.datum
        } else if (cell.id == SPRD_COL_TANTOSHA) {
          cdTantou = cell.datum
        } else if (cell.id == SPRD_COL_HIDDEN) {
          onDbfg = cell.datum[FG_TOROKU]
          hdcdSyokuba = cell.datum[CD_SHOKUBA2]
          hdcdTantou = cell.datum[CD_TANTOSHA]
          hdstChain = cell.datum[ST_CHAIN]
          tmKoshin = cell.datum[TM_KOSHIN]
          dtNengetu = cell.datum[DT_NENGETU]
          rowIndex = cell.datum[ROW_INDEX]
          // stKeisan = cell.datum
          // hdcdChoaisaki = cell.datum
          // hdcdChain = cell.datum
        }
      })

      if (isDelete && onDbfg == NO_DB_ADD_ROW) {
        // 削除、かつ行追加
        return
      }

      if (onDbfg == NO_DB_ADD_ROW || onDbfg == ON_DB) {
        if (
          onDbfg == NO_DB_ADD_ROW &&
          blankToNull(cdChoaisaki) == null &&
          blankToNull(cdChain) == null &&
          blankToNull(cdSyokuba) == null &&
          blankToNull(cdTantou) == null &&
          blankToNull(stChain) == null
        ) {
          // 行追加されてなにも、入力されていない
          // continue
          return
        }

        // 必須入力チェック
        if (blankToNull(cdChoaisaki) == null) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW025, ['帳合先コード']))
          isErr = true
          return true
        }
        if (blankToNull(cdChain) == null) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW025, ['チェーンコード']))
          isErr = true
          return true
        }
        if (cmbKeisan == '01' && blankToNull(stChain) != null) {
          setPageErrorMessage(
            replaceMsg(YCSCMNMCW035, ['計算方法に乳食家庭用', 'チェーン区分'])
          )
          isErr = true
          return true
        }
        if (cmbKeisan == '06' && blankToNull(stChain) == null) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW025, ['チェーン区分']))
          isErr = true
          return true
        }
        if (blankToNull(cdSyokuba) == null) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW025, ['職場コード']))
          isErr = true
          return true
        }
        if (blankToNull(cdTantou) == null) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW025, ['担当者コード']))
          isErr = true
          return true
        }
        if (numck(cdChoaisaki) == false || cdChoaisaki.length != LEN_CHOAI_CD) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW031, ['帳合先コード']))
          isErr = true
          return true
        }
        if (numck(cdChain) == false || cdChain.length != LEN_CHAIN_CD) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW031, ['チェーンコード']))
          isErr = true
          return true
        }
        if (numck(cdSyokuba) == false || cdSyokuba.length != LEN_SHOKUBA_CD) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW031, ['職場コード']))
          isErr = true
          return true
        }
        if (
          checkField(FIELD_H, cdTantou) == false ||
          cdTantou.length != LEN_JUGYOIN_CD
        ) {
          setPageErrorMessage(replaceMsg(YCSCMNMCW031, ['担当者コード']))
          isErr = true
          return true
        }
      }

      // 更新がない場合は飛ばす
      if (
        ON_DB == onDbfg &&
        !isDelete &&
        cdSyokuba == hdcdSyokuba &&
        cdTantou == hdcdTantou &&
        stChain == hdstChain
      ) {
        return true
      }

      //詳細CBMMsgを生成
      const shosaiMsg: any = {}
      //値をセット
      shosaiMsg[CD_CHOAISAKI] = cdChoaisaki
      shosaiMsg[CD_CHAIN] = cdChain
      shosaiMsg[ST_TOKUBAI_KEISAN] = cmbKeisan
      shosaiMsg[CD_SONEKIKANRI_SOSHIKI] = cdSyokuba
      shosaiMsg[CD_TANTOSHA] = cdTantou
      shosaiMsg[TM_KOSHIN] = tmKoshin
      if (onDbfg == NO_DB_ADD_ROW) {
        shosaiMsg[ST_HIKIATE_HOHO] = '01'
        shosaiMsg[NU_HIKIATE_HIYORITSU] = '0'
      }
      // shosaiMsg[ROW_INDEX] = rowIndex
      if (isDelete) {
        shosaiMsg[DT_NENGETU] = dtNengetu
        shosaiMsg[FG_TOROKU] = DELETE
      } else {
        if (onDbfg == NO_DB_ADD_ROW) {
          shosaiMsg[DT_NENGETU] = cmbNengetu
        } else {
          shosaiMsg[DT_NENGETU] = dtNengetu
        }
        shosaiMsg[FG_TOROKU] = onDbfg
      }
      shosaiMsg[ROW_INDEX] = rowIndex
      shosaiMsg[ST_CHAIN] = stChain

      shosaiMsgArray.push(shosaiMsg)
    })
    if (isErr) {
      // エラー場合
      return []
    }

    if (shosaiMsgArray?.length == 0) {
      //変更された項目がありません。
      setPageErrorMessage(replaceMsg(YCSCMNMSW057, []))

      return []
    }

    return shosaiMsgArray
  }

  /**
   * TODO:「帳票印刷ボタン押下」処理時の業務ロジック
   */
  async function print() {
    // clear
    setPageErrorMessage('')
    setPageSuccessMessage('')

    const jokenArray: any = []
    store.datatable.map((row) => {
      let isChked: any = false
      const listMsg: any = {}
      row.map((cell) => {
        if (cell.id === SPRD_COL_SELECT) {
          // 選択
          isChked = cell.datum
        } else if (cell.id === SPRD_COL_CHOAI) {
          // 帳合先
          listMsg[CD_CHOAISAKI] = cell.datum
        } else if (cell.id === SPRD_COL_CHAIN) {
          // チェーン
          listMsg[CD_CHAIN] = cell.datum
        }
      })
      if (isChked) {
        jokenArray.push(listMsg)
      }
    })
    if (jokenArray.length == 0) {
      setPageErrorMessage(replaceMsg(YCSCMNMCW033, ['印刷するデータ']))
      return
    }
    alert('TODO：帳票印刷')

    // 検索条件HashMapを作成
    const jokenMsg: any = {}
    // 帳票ID
    jokenMsg[CD_CHOHYO_ID] = 'YEMTSSR070'
    // 年月
    jokenMsg[DT_NENGETU] = blankToNull(store.cmbYM)
    // 計算方法
    jokenMsg[DT_KEISAN_HOUHO] = blankToNull(store.cmbKeisanHouho)

    const sendMsg: any = {}
    sendMsg[COMMON_MSG] = DUMMY_COMMONMSG
    sendMsg[TOKUBAI_SETTEI_JOKEN_CBMMSG] = jokenMsg
    sendMsg[KEY_TOKUBAI_SETTEI_CBMMSG_LIST] = jokenArray
    console.log('print')
    console.log('sendMsg')
    console.log(sendMsg)
    const receiveMap = await printPdf(sendMsg)
    console.log(receiveMap)

    const errFlag = receiveMap[PARAM_KEY_ERROR_FLG]
    const commonMsg = receiveMap[PARAM_KEY_COMMON]
    if (commonMsg != null) {
      // 不要
    }
    // エラーの有無
    if (
      receiveMap[PARAM_KEY_ERROR_FLG] != null &&
      receiveMap[PARAM_KEY_ERROR_FLG] == IS_SUCCESS
    ) {
      // フッター部のメッセージ
      // setPageSuccessMessage(replaceMsg(YCSCMNMSI019, ['帳票印刷']))
      // TODO: download pdf
    }
  }

  /**
   * 「配信」処理時の業務ロジック
   */
  function goHaishin(data: any) {
    alert('TODO：配信')
  }

  /**
   * 「詳細」処理時の業務ロジック
   */
  function goShosai(data: any) {
    if (data[FG_TOROKU] != ON_DB) {
      // 登録済み以外データ
      setPageErrorMessage(replaceMsg(YEMSPSMCW006, []))
      return
    }
    clearPageData()

    console.log('data')
    console.log(data)

    const selectedRowMap: any = {}
    selectedRowMap[DT_NENGETU] = data[DT_NENGETU] //年月
    selectedRowMap[CD_CHAIN] = data[CD_CHAIN] //チェーンコード
    selectedRowMap[NM_CHAIN_RYAKU] = data[NM_CHAIN_RYAKU] //チェーン略式名称
    selectedRowMap[CD_CHOAISAKI] = data[CD_CHOAISAKI] //帳合先コード
    selectedRowMap[NM_TYOAISAKI_RYAKU] = data[NM_TYOAISAKI_RYAKU] //店略式名称
    selectedRowMap[CD_SHOKUBA2] = data[CD_SHOKUBA2] //帰属組織
    selectedRowMap[NM_SONEKI_KANRISOSHIKI_RYAKU] =
      data[NM_SONEKI_KANRISOSHIKI_RYAKU] //帰属組織略式名称
    selectedRowMap[ST_TOKUBAI_KEISAN] = data[ST_TOKUBAI_KEISAN] //計算方法
    selectedRowMap[ROW_INDEX] = data[ROW_INDEX] //行数
    selectedRowMap[TM_KOSHIN] = data[TM_KOSHIN] //更新日時
    selectedRowMap[FG_KYU_KA_MODE] = data[FG_KYU_KA_MODE] //旧価使用フラグ
    selectedRowMap[ST_CHAIN] = data[ST_CHAIN] //チェーン区分
    selectedRowMap[NM_CHAIN_KUBUN] = spdComboData.find(
      (e) => e.value == data[ST_CHAIN]
    )?.display //チェーン区分
    router.push({ name: PAGES.YEMTSSF261S, query: selectedRowMap })
  }

  /**
   * 「帳合先検索」処理時の業務ロジック
   */
  function showTokuyakuten() {
    // 個別検索呼び出し
    alert('TODO：帳合先検索 個別検索呼び出し')
  }
  /**
   * 「店検索」処理時の業務ロジック
   *
   * @param event                ＣＪＦイベントオブジェクト
   * @param context              ＣＪＦコンテキストオブジェクト
   * @param returnInfo           ＣＪＦ復帰情報オブジェクト
   * @exception Exception     例外が発生した場合にスローされる例外オブジェクト
   */
  function showTokuyakutenM() {
    alert('TODO：帳合先検索 個別検索呼び出し')
  }

  /**
   * 「支店・職場」処理時の業務ロジック
   */
  function showSoshiki() {
    // 個別検索呼び出し
    alert('TODO：支店・職場 個別検索呼び出し')
  }
  /**
   * 「支店･職場検索」処理時の業務ロジック
   */
  function showSoshikiM() {
    // 個別検索呼び出し
    alert('TODO：支店・職場 個別検索呼び出し')
  }
  /**
   * 「チェーン」処理時の業務ロジック
   */
  function showChain() {
    // 個別検索呼び出し
    alert('TODO：チェーン 個別検索呼び出し')
  }
  /**
   * 「チェーン」処理時の業務ロジック
   */
  function showChainM() {
    // 個別検索呼び出し
    alert('TODO：チェーン 個別検索呼び出し')
  }
  /**
   * 「担当者」処理時の業務ロジック
   */
  function showJugyoin() {
    // 個別検索呼び出し
    alert('TODO：担当者 個別検索呼び出し')
  }
  /**
   * 「担当者」処理時の業務ロジック
   */
  function showJugyoinM() {
    // 個別検索呼び出し
    alert('TODO：担当者 個別検索呼び出し')
  }

  /**
   * 「条件複写」処理時の業務ロジック
   */
  function goJokenFukusha() {
    alert('TODO：条件複写')
  }

  /**
   * 「月次チェーン見込参照」処理時の業務ロジック
   */
  function goGetsujiChain() {
    alert('TODO：月次チェーン見込参照')
  }

  /**
   * 「全選択」処理時の業務ロジック
   */
  function zenSentaku() {
    const newDataTable: any = []
    store.datatable.map((row) => {
      row.map((cell) => {
        if (cell.id === SPRD_COL_SELECT) {
          cell.datum = true
        }
      })
      newDataTable.push(row)
    })
    store.setDatatable(newDataTable)
  }

  /**
   * 「全選択解除」処理時の業務ロジック
   */
  function zenKaijo() {
    const newDataTable: any = []
    store.datatable.map((row) => {
      row.map((cell) => {
        if (cell.id === SPRD_COL_SELECT) {
          cell.datum = false
        }
      })
      newDataTable.push(row)
    })
    store.setDatatable(newDataTable)
  }

  /**
   * 「行追加」処理時の業務ロジック
   */
  function gyoTsuika() {
    const strMaxDisplayCnt = DUMMY_QTSAIDAIKENSAKU
    if (store.datatable?.length >= Number(strMaxDisplayCnt)) {
      return
    }

    const newDataTable: any = [...store.datatable]
    const row: any = {}
    row[FG_TOROKU] = NO_DB_ADD_ROW
    row[ROW_INDEX] = String(newDataTable.length + 1)
    newDataTable.push(createRowData(row))
    store.setDatatable(newDataTable)
    store.setTxtCountDispMain(String(newDataTable.length))
    setButtonStatusIndex(8, false)
  }

  /**
   * クリア
   * 1. メッセージ
   */
  function clearPageData() {
    clearPageMessages()
  }

  const NO_DB_ADD_ROW = '0' //追加された行
  const ON_DB = '1' //DB上に存在する
  const DELETE = '2' //削除する行

  const SPRD_COL_SELECT = 'D01'
  const SPRD_COL_DELETE = 'D02'
  const SPRD_COL_HIDDEN = 'D03'
  const SPRD_COL_04 = 'D04'
  const SPRD_COL_CHOAI = 'D05'
  const SPRD_COL_06 = 'D06'
  const SPRD_COL_07 = 'D07'
  const SPRD_COL_CHAIN = 'D08'
  const SPRD_COL_09 = 'D09'
  const SPRD_COL_10 = 'D10'
  const SPRD_COL_ST_CHAIN = 'D11'
  const SPRD_COL_SYOKUBA = 'D12'
  const SPRD_COL_13 = 'D13'
  const SPRD_COL_14 = 'D14'
  const SPRD_COL_TANTOSHA = 'D15'
  const SPRD_COL_16 = 'D16'
  const SPRD_COL_17 = 'D17'
  const SPRD_COL_DT_KAKUNIN = 'D18'
  const SPRD_COL_NM_KAKUNIN = 'D19'
  function createRowData(data: any) {
    let dtKakunin = ''
    if (!isBlank(data[DT_KAKUNIN])) {
      dtKakunin =
        data[DT_KAKUNIN].substring(0, 4) +
        '/' +
        data[DT_KAKUNIN].substring(4, 6) +
        '/' +
        data[DT_KAKUNIN].substring(6, 8)
    }
    return [
      { id: SPRD_COL_SELECT },
      { id: SPRD_COL_DELETE },
      {
        id: SPRD_COL_HIDDEN,
        buttonTitle: '詳細',
        datum: data,
        onClick: () => {
          goShosai(data)
        },
      },
      {
        id: SPRD_COL_04,
        buttonTitle: '配信',
        onClick: () => {
          goHaishin(data)
        },
      },
      { id: SPRD_COL_CHOAI, datum: data[CD_CHOAISAKI] },
      {
        id: SPRD_COL_06,
        buttonTitle: '検',
        onClick: () => {
          showTokuyakutenM()
        },
      },
      { id: SPRD_COL_07, datum: data[NM_TYOAISAKI_RYAKU] },
      { id: SPRD_COL_CHAIN, datum: data[CD_CHAIN] },
      {
        id: SPRD_COL_09,
        buttonTitle: '検',
        onClick: () => {
          showChainM()
        },
      },
      { id: SPRD_COL_10, datum: data[NM_CHAIN_RYAKU] },
      {
        id: SPRD_COL_ST_CHAIN,
        datum: data[ST_CHAIN],
        options: spdComboData,
      },
      { id: SPRD_COL_SYOKUBA, datum: data[CD_SHOKUBA2] },
      {
        id: SPRD_COL_13,
        buttonTitle: '検',
        onClick: () => {
          showSoshikiM()
        },
      },
      { id: SPRD_COL_14, datum: data[NM_SONEKI_KANRISOSHIKI_RYAKU] },
      { id: SPRD_COL_TANTOSHA, datum: data[CD_TANTOSHA] },
      {
        id: SPRD_COL_16,
        buttonTitle: '検',
        onClick: () => {
          showJugyoinM()
        },
      },
      {
        id: SPRD_COL_17,
        datum: joinName(data[NM_JUGYOIN_MIYOJI], data[NM_JUGYOIN_NAMAE]),
      },
      { id: SPRD_COL_DT_KAKUNIN, datum: dtKakunin },
      {
        id: SPRD_COL_NM_KAKUNIN,
        datum: joinName(data[NM_KAKUNINSHA_MYOJI], data[NM_KAKUNINSHA_NAMAE]),
      },
    ]
  }

  /**
   * スプレッドの状態によりフッタボタンの活性・非活性を制御する
   */
  const footButtonConfigs = [
    {
      title: '確認(F1)',
      disabled: true,
      onClick: updateData,
    },
    { title: '(F2)', disabled: true },
    { title: '(F3)', disabled: true },
    { title: '(F4)', disabled: true },
    { title: '(F5)', disabled: true },
    { title: '(F6)', disabled: true },
    {
      title: 'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)',
      disabled: true,
    },
    {
      title: '帳票印刷(F8)',
      disabled: true,
      onClick: print,
    },
    {
      title: '登録(F9)',
      disabled: true,
      onClick: () => openDialog(rgsData, '登録'),
    },
  ]
  function setButtonStatus(disabled = true) {
    footButtonConfigs.map((e) => {
      if (e.onClick != undefined) {
        e.disabled = disabled
      }
    })
    setFooterButtonConfigs([...footButtonConfigs])
  }
  function setButtonStatusIndex(index: number, disabled: boolean) {
    footButtonConfigs.forEach((e, i) => {
      if (i == index) {
        e.disabled = disabled
      }
    })
    setFooterButtonConfigs([...footButtonConfigs])
  }
  function joinName(nmMiyoji: string, nmNamae: string) {
    let nmJygoin = ''
    if (nmMiyoji != null && nmMiyoji.length != 0) {
      nmJygoin += nmMiyoji
    }
    if (nmNamae != null && nmNamae.length != 0) {
      nmJygoin += nmNamae
    }
    return nmJygoin
  }

  //リアクティビティを保つため、computedを使用する。
  return {
    rdSeisanJoken: computed({
      get: () => store.rdSeisanJoken,
      set: (value: string) => store.setRdSeisanJoken(value),
    }),
    rdHikiateSyudo: computed({
      get: () => store.rdHikiateSyudo,
      set: (value: string) => store.setRdHikiateSyudo(value),
    }),
    cmbYM: computed({
      get: () => store.cmbYM,
      set: (value: string) => store.setCmbYM(value),
    }),
    cmbYMOptions: computed<Dropdown.Option[]>({
      get: () => store.cmbYMOptions,
      set: (value: Dropdown.Option[]) => store.setCmbYMOptions(value),
    }),
    cmbKeisanHouho: computed({
      get: () => store.cmbKeisanHouho,
      set: (value: string) => store.setCmbKeisanHouho(value),
    }),
    cmbKeisanHouhoOpt: computed<Dropdown.Option[]>({
      get: () => store.cmbKeisanHouhoOpt,
      set: (value: Dropdown.Option[]) => store.setCmbKeisanHouhoOpt(value),
    }),
    txtChoaisaki: computed({
      get: () => store.txtChoaisaki,
      set: (value: string) => store.setTxtChoaisaki(value),
    }),
    txtChoaisakiRyakuNm: computed({
      get: () => store.txtChoaisakiRyakuNm,
      set: (value: string) => store.setTxtChoaisakiRyakuNm(value),
    }),
    txtChainCd: computed({
      get: () => store.txtChainCd,
      set: (value: string) => store.setTxtChainCd(value),
    }),
    txtChainRyakuNm: computed({
      get: () => store.txtChainRyakuNm,
      set: (value: string) => store.setTxtChainRyakuNm(value),
    }),
    txtShitenSyokubaCd: computed({
      get: () => store.txtShitenSyokubaCd,
      set: (value: string) => store.setTxtShitenSyokubaCd(value),
    }),
    txtSonekiKanriSosikiRyakuNm: computed({
      get: () => store.txtSonekiKanriSosikiRyakuNm,
      set: (value: string) => store.setTxtSonekiKanriSosikiRyakuNm(value),
    }),
    txtTantoshaCd: computed({
      get: () => store.txtTantoshaCd,
      set: (value: string) => store.setTxtTantoshaCd(value),
    }),
    txtJyugyoinNm: computed({
      get: () => store.txtJyugyoinNm,
      set: (value: string) => store.setTxtJyugyoinNm(value),
    }),
    txtCountDispMain: computed<string>({
      get: () => store.txtCountDispMain,
      set: (value: string) => store.setTxtCountDispMain(value),
    }),
    datatable: computed<Table.DatumRow[]>(() => store.datatable),
    showData,
    selectAll: zenSentaku,
    unselectAll: zenKaijo,
    insertRow: gyoTsuika,
    showTokuyakuten: showTokuyakuten,
    showSoshiki: showSoshiki,
    showChain: showChain,
    showJugyoin: showJugyoin,
    goJokenFukusha: goJokenFukusha,
    goGetsujiChain: goGetsujiChain,
  }
}
