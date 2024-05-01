import type { Button } from '@/types/components/button'
import type { Dropdown, Table } from '@/types/components'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYBMKKSF600SStore } from './YBMKKSF600S-store'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'

import {
  YBMKKSF600S_init as init,
  YBMKKSF600S_getTen as getTen,
} from '@/services/modules'

import {
  CD_HANYO,
  NM_NAIYO1,
  NM_TEN,
  NM_TENKANA,
  ST_JIGYO,
  ST_CHIIKI2,
  CD_TEN,
  NM_CHAIN_KUBUN,
  NM_SHOKUBA,
} from '../common/YBMKKSF000-logic'

export default function useYBMKKSF600SLogic() {
  // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
  const store = useYBMKKSF600SStore()

  // TODO: DUMMY START
  // 最大件数
  const DUMMY_QTSAIDAIKENSAKU = '50'
  const DUMMY_COMMONMSG = {
    cdKaisha: '1001',
    qtSaidaiKensaku: DUMMY_QTSAIDAIKENSAKU,
  }
  //事業区分ドロップダウンリスト用API
  const DUMMY_HANYOBUNRUI = {
    cdKaisha: '1001',
    cdSubsystemShubetu: '100',
    cdDatashubetsu: '00008',
  }
  //地域区分ドロップダウンリスト用API
  const DUMMY_HANYOBUNRUI2 = {
    cdKaisha: '1001',
    cdSubsystemShubetu: '100',
    cdDatashubetsu: '00243',
  }
  // const YCSCMNMCW031 = '&1の入力形式が誤っています。正しく入力してください。'
  /**
   * 共通Msg です。
   * データはStringで保持します。
   */
  const COMMON_MSG = 'commonMsg'
  const TOKUYAKUTEN_KENSAKU_JOKEN_CBMMSG = 'tokuyakutenKensakuJokenCBMMsg'
  const HANYOBUNRUI_CBM_MSG = 'hanyoBunruiCBMMsg'
  const YCSCMNMSW056 =
    '検索が終了しましたが該当するデータが見つかりません。\n検索条件を見直してください。'
  const YCSCMNMSI020 = '&1件のデータが検索されました。'

  onBeforeMount(async () => {
    //TODO:画面初期化データ取得apiの呼び出し
    const sendMsg: any = {}
    const sendMsg2: any = {}

    const KEY_KEISANHOUHOU_CBMMSG = 'hanyoBunruiKekkaMsgList'
    //事業区分
    sendMsg[COMMON_MSG] = DUMMY_COMMONMSG
    sendMsg[HANYOBUNRUI_CBM_MSG] = DUMMY_HANYOBUNRUI
    const recevieMsg = await init(sendMsg)
    console.log('init')
    console.log(recevieMsg)

    const filHashKEISANHOUHOU: Dropdown.Option[] = []
    //声明索引参数 确保index可以使用
    recevieMsg[KEY_KEISANHOUHOU_CBMMSG]?.map(
      (e: { [x: string]: any }, index: number) => {
        filHashKEISANHOUHOU.push({
          value: e[CD_HANYO],
          display: `${index}. ${e[NM_NAIYO1]}`,
        })
      },
    )
    console.log(filHashKEISANHOUHOU)
    store.setstJigyoOpt(filHashKEISANHOUHOU)
    store.setstJigyo(filHashKEISANHOUHOU[0].value!)

    //地域区分
    sendMsg2[COMMON_MSG] = DUMMY_COMMONMSG
    sendMsg2[HANYOBUNRUI_CBM_MSG] = DUMMY_HANYOBUNRUI2
    const recevieMsg2 = await init(sendMsg2)
    console.log('init2')
    console.log(recevieMsg2)

    const filHashKEISANHOUHOU2: Dropdown.Option[] = []
    recevieMsg2[KEY_KEISANHOUHOU_CBMMSG]?.map(
      (e: { [x: string]: any }, index: number) => {
        filHashKEISANHOUHOU2.push({
          value: e[CD_HANYO],
          display: `${index}. ${e[NM_NAIYO1]}`,
        })
      },
    )

    console.log(filHashKEISANHOUHOU2)
    store.setStChiiki2Options(filHashKEISANHOUHOU2)
    store.setStChiiki2(filHashKEISANHOUHOU2[0].value!)
  })

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

    //フッターのボタン表示及びロジックを設定する。
    const footerButtonConfigs: Button.Config[] = [
      { title: '(F1)', disabled: true, onClick: () => {} },
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

    //table head用意する
    const dryColumns: Table.WijmoColumn[] = [
      {
        binding: '1',
        align: 'right',
        width: '32',
        header: '選\n択',
        allowSorting: undefined,
      },
      {
        binding: '2',
        align: 'left',
        width: '48',
        header: '店\nコード',
        allowSorting: undefined,
      },
      {
        binding: '3',
        align: 'left',
        width: '240',
        header: '店名',
        allowSorting: undefined,
      },
      {
        binding: '4',
        align: 'left',
        width: '160',
        header: '事業区分',
        allowSorting: undefined,
      },
      {
        binding: '5',
        align: 'left',
        width: '146',
        header: '地域区分',
        allowSorting: undefined,
      },
      {
        binding: '6',
        align: 'left',
        width: '160',
        header: '職場',
        allowSorting: undefined,
      },
    ]
    store.setSpreadColumns(dryColumns)
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
    setPageName('TODO')
    //画面ID
    setPageId('YBMKKSF600S')
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

    prepareSpreadColumns()
    // prepareSpreadData()
  })

  //画面データ初期化後のdom処理はonMountedに書く。
  onMounted(() => {})

  // 画面から離れる際、メモリを釈放などの処理はonBeforeUnmoutにかく。
  onBeforeUnmount(() => {
    //ヘッダの設定をデフォルト設定にリセットする。
    resetHeaderButtonConfigs()
    //フッターの設定をデフォルト設定にリセットする。
    resetFooterButtonConfigs()
  })

  const body_button01 = () => {}

  function clearData() {
    store.setSpread([])
  }
  //店検索
  async function body_button05() {

    setPageErrorMessage('')
    setPageSuccessMessage('')

    // 検索条件HashMapを作成
    const jokenMsg3: any = {}
    console.log(store.nmTen)
    //店名
    //if (!isBlank(store.nmTen)) {
    jokenMsg3[NM_TEN] = '' //store.nmTen

    //}
    //店カナ名
    //if (!isBlank(store.nmTenKana)) {
    jokenMsg3[NM_TENKANA] = store.nmTenKana //store.nmTenKana
    //}
    //事業区分
    //if (!isBlank(store.stJigyo)) {
    jokenMsg3[ST_JIGYO] = '' //store.stJigyo
    // }
    //地域区分
    // if (!isBlank(store.stChiiki2)) {
    jokenMsg3[ST_CHIIKI2] = '' //store.stChiiki2
    // }
    //店コード
    //if (!isBlank(store.cdTen)) {
    jokenMsg3[CD_TEN] = store.cdTen
    // }
    jokenMsg3[NM_TENKANA] = store.nmTenKana
    jokenMsg3['cdKaisha'] = '1001'
    jokenMsg3['fgTen'] = '1'
    jokenMsg3['dtTaisho'] = '20230101'
    jokenMsg3['toDateCondition'] = 'DT_YUKOKIGEN'
    const sendMsg3: any = {}
    sendMsg3['fgMisetengun'] = '1'
    sendMsg3['fgJotai'] = '1'
    sendMsg3['fgTaisakuhoho'] = '1'

    sendMsg3[COMMON_MSG] = DUMMY_COMMONMSG
    sendMsg3[TOKUYAKUTEN_KENSAKU_JOKEN_CBMMSG] = jokenMsg3
    const recevieMsg3 = await getTen(sendMsg3)
    console.log('search')
    // console.log(sendMsg3)
    console.log(recevieMsg3)
    const tenKensakuCBMMsgList = recevieMsg3.tenKensakuCBMMsgList
     prepareSpreadData(tenKensakuCBMMsgList)

    // store.setBody_spread01(recevieMsg3.tenKensakuCBMMsgList)
    //「店検索」押下処理時の業務ロジック
  }
  // [[スプレッドシートのデータを作成]]
  const prepareSpreadColumns = () => {
    const dryColumns: Table.WijmoColumn[] = [
      {
        binding: '1',
        align: 'right',
        width: '32',
        header: '選\n択',
        allowSorting: undefined,
      },
      {
        binding: '2', //'cdTen'
        align: 'left',
        width: '48',
        header: '店\nコード',
        allowSorting: undefined,
      },
      {
        binding: '3', //'nmTen'
        align: 'left',
        width: '240',
        header: '店名',
        allowSorting: undefined,
      },
      {
        binding: '4', //
        align: 'left',
        width: '160',
        header: '事業区分',
        allowSorting: undefined,
      },
      {
        binding: '5', //'nmChiikiKubun'
        align: 'left',
        width: '146',
        header: '地域区分',
        allowSorting: undefined,
      },
      {
        binding: '6', //'nmShokuba'
        align: 'left',
        width: '160',
        header: '職場',
        allowSorting: undefined,
      },
    ]

    const formattedColumns = dryColumns.map<Table.WijmoColumn>(
      (column, index) => {
        const newColumn = { ...column }
        //除第九列外不可写（ReadOnly）
        //if (index !== 9) newColumn.isReadOnly = true
        return newColumn
      },
    )

    store.setSpreadColumns(formattedColumns)
  }

  const prepareSpreadData = (dataFromBackend: any[]) => {
    const checkbox = false;
    const formattedData = dataFromBackend.map((item, index) => ({
      '1': checkbox,
      '2': item.cdTen,
      '3': item.nmTen,
      '4': item.nmJigyoKubun,
      '5': item.nmChiikiKubun,
      '6': item.nmShokuba,
    }))
 
    store.setBody_spread01(formattedData)
  }

  const body_button02 = () => {}

  const body_button03 = () => {}

  const body_button04 = () => {}

  //リアクティビティを保つため、computedを使用する。
  return {
    spreadColumns: computed(() => store.spreadColumns),
    body_spread01: computed({
      get: () => store.body_spread01,
      set: (value: any) => store.setBody_spread01(value),
    }),
    nmTengun: computed({
      get: () => store.nmTengun,
      set: (value: string) => store.setNmTengun(value),
    }),
    nmTen: computed({
      get: () => store.nmTen,
      set: (value: string) => store.setNmTen(value),
    }),
    nmTengunKana: computed(() => store.nmTengunKana),
    nmTenKana: computed({
      get: () => store.nmTenKana,
      set: (value: string) => store.setNmTenKana(value),
    }),
    cdTengun: computed({
      get: () => store.nmTengun,
      set: (value: string) => store.setNmTen(value),
    }),
    cdTen: computed({
      get: () => store.cdTen,
      set: (value: string) => store.setCdTen(value),
    }),
    nmTengunRyaku: computed({
      get: () => store.nmTengunRyaku,
      set: (value: string) => store.setNmTengunRyaku(value),
    }),
    noKaisolevel: computed({
      get: () => store.noKaisolevel,
      set: (value: string) => store.setNoKaisolevel(value),
    }),
    noKaisolevelOptions: computed<Dropdown.Option[]>({
      get: () => store.noKaisolevelOptions,
      set: (value: Dropdown.Option[]) => store.setNoKaisolevelOptions(value),
    }),
    stJigyoOpt: computed<Dropdown.Option[]>({
      get: () => store.stJigyoOpt,
      set: (value: Dropdown.Option[]) => store.setstJigyoOpt(value),
    }),

    stJigyo: computed({
      get: () => store.stJigyo,
      set: (value: string) => store.setstJigyo(value),
    }),
    stChiiki1: computed(() => store.stChiiki1),
    stChiiki1Options: computed(() => store.stChiiki1Options),
    stChiiki2: computed(() => store.stChiiki2),
    stChiiki2Options: computed(() => store.stChiiki2Options),
    body_button01,
    body_button05,
    body_button02,
    body_button03,
    body_button04,
  }
}
