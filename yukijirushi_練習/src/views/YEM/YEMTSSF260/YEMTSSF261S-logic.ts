import { useRouter, useRoute } from 'vue-router'

import type { Dropdown, Table } from '@/types/components'
import type { Button } from '@/types/components/button'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYEMTSSF261SStore } from './YEMTSSF261S-store'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'

import {
  getBeforeMonth,
  getMonth,
  blankToNull,
  isBlank,
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
} from '../common/YEMTSSF000-logic'

// 画面YEMTSSF261SSのロジックを定義する。
// ロジックを vueファイルのsetup script 内に実行させる為に画面モジュールを関数で定義しなければならない。
// setup script 以外に画面モジュールを使うと実行エラーが発生する。
export default function useYEMTSSF261SSLogic() {
  const router: any = useRouter()
  const route: any = useRoute()

  // 定義済みの画面YEMTSSF261SSのstore。画面の状態をstoreから導入する。
  // メソードは分割代入できますが、リアクティビティが失われるため、変数は分割代入できない。
  // 変数を使用したい場合、下記方法でstoreを導入してください。
  const store = useYEMTSSF261SStore()
  // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
  const {
    setTxtCountDisp,
    setTxdYM,
    setTxtChoaisaki,
    setTxtChainCd,
    setTxtKijokuSosiki,
    setTxtKeisanHoho,
    setTxtChainKubun,
    setDatatable,
  } = useYEMTSSF261SStore()

  // 初期化データ取得apiの呼び出し、データ初期化はonBeforeMountに書く。
  onBeforeMount(() => {
    // 画面データを設定する。
    const params = route.query
    console.log('params')
    console.log(params)
    setTxdYM(params[DT_NENGETU])
    setTxtChoaisaki(params[CD_CHOAISAKI] + ' ' + params[NM_TYOAISAKI_RYAKU])
    setTxtKijokuSosiki(
      params[CD_SHOKUBA2] + ' ' + params[NM_SONEKI_KANRISOSHIKI_RYAKU]
    )
    setTxtKeisanHoho(
      params[ST_TOKUBAI_KEISAN] == '01' ? '乳食家庭用' : '市乳家庭用'
    )
    setTxtChainCd(params[CD_CHAIN] + ' ' + params[NM_CHAIN_RYAKU])
    setTxtChainKubun(
      params[ST_TOKUBAI_KEISAN] == '01' ? '' : params[NM_CHAIN_KUBUN]
    )

    //TODO:画面初期化データ取得apiの呼び出し
    setTxtCountDisp(0)
    setDatatable([])
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
          //メーセージをクリックする。
          setPageErrorMessage('')
          setPageSuccessMessage('')
          router.go(-1)
        },
      },
      {
        title: 'メニュー(F11)',
        disabled: false,
        onClick: () => {
          // 01/17 レビュー指摘より、ヘッダボタンの暫定アクションは画面閉じる。
          // 画面閉じるを変更する

          // console.log('click メニュー(F11)')
          // // 成功メーセージを設定する。（設定する場合は上記エラーメーセージ設定のソースコードは不要となる。）
          // window.alert('メニュー画面作成中、遷移できませ。')
          // setPageErrorMessage('')
          // setPageSuccessMessage('処理成功しました。')
          window.close()
        },
      },
      {
        title: '業務終了(F12)',
        disabled: false,
        onClick: () => {
          // 01/17 レビュー指摘より、ヘッダボタンの暫定アクションは画面閉じる。
          // 画面閉じるを変更する

          // console.log('click 業務終了(F12)')
          // // エラーメーセージを設定する。
          // window.alert('現時点業務終了できませ。')
          // setPageErrorMessage('エラーが発生しました。')
          // setPageSuccessMessage('')
          window.close()
        },
      },
    ]
    setHeaderButtonConfigs(headerButtonConfigs)

    //フッターのボタン表示及びロジックを設定する。
    const footerButtonConfigs: Button.Config[] = [
      { title: '(F1)', disabled: true },
      { title: '(F2)', disabled: true },
      { title: '(F3)', disabled: true },
      { title: '(F4)', disabled: true },
      { title: '(F5)', disabled: true },
      {
        title: '一括計算(F6)',
        disabled: false,
        onClick: () => {
          console.log('click F6')
        },
      },
      {
        title: 'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)',
        disabled: true,
        onClick: () => {
          console.log('click F7')
        },
      },
      {
        title: '帳票印刷(F8)',
        disabled: true,
        onClick: () => {
          console.log('click F8')
        },
      },
      {
        title: '登録(F9)',
        disabled: false,
        onClick: () => {
          console.log('click F9')
        },
      },
    ]
    setFooterButtonConfigs(footerButtonConfigs)
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
    setPageName('特売精算条件設定詳細')
    //画面ID
    setPageId('YEMTSSF261S')
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

  //リアクティビティを保つため、computedを使用する。
  return {
    txtCountDisp: computed<number>(() => store.txtCountDisp),
    spdSpread: computed<string>(() => store.spdSpread),
    btnPlus: computed<string>(() => store.btnPlus),
    txdYM: computed<string>(() => store.txdYM),
    txtChoaisaki: computed<string>(() => store.txtChoaisaki),
    txtTenRyakuNm: computed<string>(() => store.txtTenRyakuNm),
    txtChainCd: computed<string>(() => store.txtChainCd),
    txtChainRyakuNm: computed<string>(() => store.txtChainRyakuNm),
    txtKijokuSosiki: computed<string>(() => store.txtKijokuSosiki),
    txtKijokuSosikiRyakuNm: computed<string>(
      () => store.txtKijokuSosikiRyakuNm
    ),
    txtKeisanHoho: computed<string>(() => store.txtKeisanHoho),
    txtChainKubun: computed<string>(() => store.txtChainKubun),
    datatable: computed<Table.DatumRow[]>(() => store.datatable),
  }
}
