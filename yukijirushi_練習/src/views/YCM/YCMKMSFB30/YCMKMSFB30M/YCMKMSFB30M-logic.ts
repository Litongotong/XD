import type { Button } from '@/types/components/button'
import type { Dropdown, Table } from '@/types/components'
import { ref } from 'vue'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYCMKMSFB30MStore } from './YCMKMSFB30M-store'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import type { Type } from 'typescript'
import { YCMKMSFB30M_getJugyoinIchiran as getJugyoinIchiran } from '@/services/modules'
import {
  isBlank,
  CD_JUGYOIN,
  CD_SONEKIKANRISOSHIKI,
  NM_JUGYOINMYOJI,
  NM_JUGYOINAMAE,
} from './common/YCMKMSF000'
export default function useYCMKMSFB30MLogic() {
  // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
  const store = useYCMKMSFB30MStore()

  onBeforeMount(() => {
    //TODO:画面初期化データ取得apiの呼び出し
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
      { title: 'クリア(F1)', disabled: false, onClick: clear },
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
  /**
   * クリアボタン押下際の業務ロジック
   */
  function clear() {
    const confirmClear = confirm('')
    store.setCdJugyoin('')
    store.setNmJugyoinMyoji('')
    store.setNmJugyoinNamae('')
    store.setBody_spread([])
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
    setPageName('従業員マスタ一覧')
    //画面ID
    setPageId('YCMKMSFB30M')
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
  onBeforeMount(() => {
    /**
     * 表示ボタン押下際にWijimoの業務ロジック
     */
    //table head用意する
    const dryColumns: Table.WijmoColumn[] = [
      {
        binding: '1',
        align: 'right',
        width: '60',
        header: '\u00A0',
        allowSorting: undefined,
      },
      {
        binding: '2',
        align: 'left',
        width: '100',
        header: '従業員コード',
        allowSorting: undefined,
      },
      {
        binding: '3',
        align: 'left',
        width: '260',
        header: '従業員名称',
        allowSorting: undefined,
      },
      {
        binding: '4',
        align: 'left',
        width: '200',
        header: '損益管理組織名称',
        allowSorting: undefined,
      },
      {
        binding: '5',
        align: 'left',
        width: '50',
        header: '削除',
        allowSorting: undefined,
      },
    ]

    store.setSpreadColumns(dryColumns)
    //表示件数を０に設定
    store.setKensu(0)
  })

  /**
   * 「表示ボタン」押下処理時の業務ロジック
   * 従業員マスタ一覧・従業員一覧取得API
   */
  async function HyoujiButton() {
    function clearData() {
      store.setBody_spread([])
    }
    clearData()

    // setPageSuccessMessage('success')
    //従業員一覧APIrequst
    const DUMMY_COMMONMSG = {
      dtUnyo: '20231001',
      cdKaisha: '0010',
      qtSaidaiKensaku: '100',
    }
    const COMMON_MSG = 'commonMsg'

    const DUMMY_JUGYOINSHOSAI = {
      cdJugyoin: store.CdJugyoin,
      cdSonekikanriSoshiki: store.Search021Result,
      // fgRonrisakujo: '0',
      nmJugyoinMyoji: store.NmJugyoinMyoji,
      nmJugyoinNamae: store.NmJugyoinNamae,
    }
    const JUGYOINSHOSAI = 'jugyoinShosai'

    // 検索条件HashMapを作成
    const jokenMsg: any = {}
    // 従業員コード
    if (!isBlank(store.CdJugyoin)) {
      jokenMsg[CD_JUGYOIN] = store.CdJugyoin
    }
    // 損益管理組織コード
    if (!isBlank(store.Search021Result)) {
      jokenMsg[CD_SONEKIKANRISOSHIKI] = store.Search021Result
    }
    // 従業員名称（苗字）
    if (!isBlank(store.NmJugyoinMyoji)) {
      jokenMsg[NM_JUGYOINMYOJI] = store.NmJugyoinMyoji
    }
    console.log('苗字:', store.NmJugyoinMyoji)
    // 従業員名称（名前）
    if (!isBlank(store.NmJugyoinNamae)) {
      jokenMsg[NM_JUGYOINAMAE] = store.NmJugyoinNamae
    }
    // チェックボックス
    if (!isBlank(store.NmJugyoinNamae)) {
      jokenMsg[NM_JUGYOINAMAE] = store.NmJugyoinNamae
    }
    console.log('苗字:', store.NmJugyoinNamae)
    const sendMsg: any = {}
    sendMsg[COMMON_MSG] = DUMMY_COMMONMSG
    sendMsg[JUGYOINSHOSAI] = DUMMY_JUGYOINSHOSAI
    // sendMsg[DUMMY_JUGYOINICHIRANLIST] =[]

    const recevieMsg = await getJugyoinIchiran(sendMsg)

    //従業員一覧リスト取得
    const jugyoinIchiranList = recevieMsg.jugyoinIchiranList
    console.log('check_getJugyoinIchiran', jugyoinIchiranList)

    //論理削除フラグ取得
    // const FG_RONRISAKUJO = recevieMsg.jugyoinIchiranList.fgRonrisakujo
    // console.log('check_sakujyoFlag', FG_RONRISAKUJO)

    //検索結果が0件の場合エラー
    if (jugyoinIchiranList == null || jugyoinIchiranList.length == 0) {
      setPageErrorMessage('fault')
      //public static final String YCSCMNMSW056 = "YCSCMNMSW056";      //検索が終了しましたが該当するデータが見つかりません。\n検索条件を見直してください。
      //public static final String SMSCMNMCW003 = "SMSCMNMCW003";      //検索条件に該当する&1は存在しません。
      // //				// 検索結果が規定件数以上の場合エラー
      // 	if (jugyoinIchiranData.length > maxDisplayCnt) {
      // 		// [YCSCMNMSW037]最大検索件数$件を超えたため、画面に表示できません。\n検索条件を見直してください。
      // 		SMSHeaderFooterManager.showInformation(context, SMSMessageConst.YCSCMNMSW037, new String[] { strMaxDisplayCnt });
    } else {
      setPageSuccessMessage('success')

      const prepareSpreadData = (dataFromBackend: any[]) => {
        const formattedData = dataFromBackend.map((item, index) => ({
          '1': 'button',
          '2': item.cdJugyoin,
          '3': item.nmJugyoin,
          '4': item.nmSonekikanriSoshiki,
          '5': item.fgRonrisakujo === '1',
        }))

        store.setBody_spread(formattedData)
      }
      prepareSpreadData(jugyoinIchiranList)
    }

    //   // 従業員コードテキストボックスにフォーカスをセット
    //   // returnInfo.setFocus(SMSHeaderFooterManager.FRAME_MAIN, ITEM_SEARCH_CD_JUGYOIN);
    //   return;
    // }

    //件数表示
    console.log('kensu_check', jugyoinIchiranList.length)
    store.setKensu(jugyoinIchiranList.length)
  }
  //------ 2024.04.16 ネビュラソフト)李 表示ボタン押下際にWijimoの業務ロジック E N D ------

  /**
   * 検索ボタン押下際の業務ロジック
   */
  function GeneralSearch021() {
    alert('TODO : 検索画面開く')
  }
  /**
   * 新規追加ボタン押下際の業務ロジック
   * TODO
   */
  function ShinkiButton() {
    //新規画面に遷移
    window.location.href = 'YCMKMSFB31S'
  }
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

  //リアクティビティを保つため、computedを使用する。
  return {
    SMSJCFSpread1: computed(() => store.SMSJCFSpread1),
    body_spread: computed({
      get: () => store.body_spread,
      set: (value: any) => store.setBody_spread(value),
    }),
    spreadColumns: computed(() => store.spreadColumns),
    GeneralSearch021,
    HyoujiButton,
    ShinkiButton,

    kensu: computed({
      get: () => store.kensu,
      set: (text: number) => store.setKensu(text),
    }),
    CdJugyoin: computed({
      get: () => store.CdJugyoin,
      set: (value: string) => store.setCdJugyoin(value),
    }),
    NmJugyoinMyoji: computed({
      get: () => store.NmJugyoinMyoji,
      set: (value: string) => store.setNmJugyoinMyoji(value),
    }),
    NmJugyoinNamae: computed({
      get: () => store.NmJugyoinNamae,
      set: (value: string) => store.setNmJugyoinNamae(value),
    }),
    Search021Result: computed({
      get: () => store.Search021Result,
      set: (value: string) => store.SetSearch021Result(value),
    }),
  }
}
