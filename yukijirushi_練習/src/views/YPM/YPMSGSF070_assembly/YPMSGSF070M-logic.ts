import type { Button } from '@/types/components/button'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYPMSGSF070MStore } from './YPMSGSF070M-store'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'

export default function useYPMSGSF070MLogic() {
  // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
  const store = useYPMSGSF070MStore()
  const {
    setBody_spread01,
    setHinmokuCmb,
    setHinmokuCmbOptions,
    setCdHinmoku,
    setSearchBtn,
    setNmJoisonekiSoshikiRyaku,
    setDtDenyoHiduke,
    setQtJuryo,
    setKanriCmb,
    setKanriCmbOptions,
    setQtKensu,
    setChkGenzairyoAdd,
    setBody_button04,
  } = useYPMSGSF070MStore()

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
      title: "戻る(F10)",
      disabled: false,
      onClick: () => {
        console.log("click 戻る(F10)")
      },
    },
    {
      title: "メニュー(F11)",
      disabled: false,
      onClick: () => {
        console.log("click メニュー(F11)")
      // 成功メーセージを設定する。（設定する場合は上記エラーメーセージ設定のソースコードは不要となる。）
      },
    },
    {
      title: "業務終了(F12)",
      disabled: false,
      onClick: () => {
        console.log("click 業務終了(F12)")
      },
    },
    ]
    setHeaderButtonConfigs(headerButtonConfigs)

    //フッターのボタン表示及びロジックを設定する。
    const footerButtonConfigs: Button.Config[] = [
      { title: "(F1)", disabled: true, onClick: () => {} },
      { title: "(F2)", disabled: true, onClick: () => {} },
      { title: "(F3)", disabled: true, onClick: () => {} },
      { title: "(F4)", disabled: true, onClick: () => {} },
      { title: "(F5)", disabled: true, onClick: () => {} },
      { title: "(F6)", disabled: true, onClick: () => {} },
      { title: "(F7)", disabled: true, onClick: () => {} },
      { title: "(F8)", disabled: true, onClick: () => {} },
      { title: "(F9)", disabled: true, onClick: () => {} },
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
    setPageName("TODO")
    //画面ID
    setPageId("YPMSGSF070M")
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

  //リアクティビティを保つため、computedを使用する。
  return {
    body_spread01: computed(() => store.body_spread01),
    hinmokuCmb: computed(() => store.hinmokuCmb),
    hinmokuCmbOptions: computed(() => store.hinmokuCmbOptions),
    cdHinmoku: computed(() => store.cdHinmoku),
    searchBtn: computed(() => store.searchBtn),
    nmJoisonekiSoshikiRyaku: computed(() => store.nmJoisonekiSoshikiRyaku),
    dtDenyoHiduke: computed(() => store.dtDenyoHiduke),
    qtJuryo: computed(() => store.qtJuryo),
    kanriCmb: computed(() => store.kanriCmb),
    kanriCmbOptions: computed(() => store.kanriCmbOptions),
    qtKensu: computed(() => store.qtKensu),
    chkGenzairyoAdd: computed(() => store.chkGenzairyoAdd),
    body_button04: computed(() => store.body_button04),
  }
}