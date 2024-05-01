import type { Button } from '@/types/components/button'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYPMGSSF701SStore } from './YPMGSSF701S-store'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'

export default function useYPMGSSF701SLogic() {
  // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
  const store = useYPMGSSF701SStore()
  const {
    setCdKojoZaikoBasho,
    setNmKojoZaikoBasho,
    setStNyuka,
    setNmNyuka,
    setStData,
    setNmData,
    setFgJisseki,
    setNmJisseki,
    setPage,
    setNoRecSeq,
    setNoMesKanri,
    setStTeisei,
    setNmTeisei,
    setNmKojo,
    setNmTenkai,
    setIfJyoutai,
    setCdJushinkey,
    setTmJushin,
    setNoBunkatsuData,
    setNmItemCdShikibetsu,
    setCdItem,
    setNmHinmpkuRyakushiki,
    setCdTorihikisaki2,
    setNmTorihikisaki2,
    setCdTorihikisaki,
    setNmTorihikisaki,
    setCdSeisanKojo,
    setNmSeisanKojo,
    setCdSyukasoko,
    setNmSyukasoko,
    setCdNyukasoko,
    setNmNyukasoko,
    setQtSuryo,
    setIfSuryotani,
    setQtJuryo,
    setIfJuryotani,
    setDtUkeireyotei,
    setDtShomikigen,
    setIfTokyu,
    setIfLot,
    setIfSublot,
    setDtHaraidashiDenpyo,
    setNoHaraidashiDenpyo,
    setDtHiteiseiDenpyo,
    setNoHteiseiDenpyo,
    setNoSyukaDenpyo,
    setNoNyukaDenpyo,
    setCdSyukaSokoHikiate,
    setNmSyukaSokoHikiate,
    setQtSuryoHikiate,
    setQtJuryoHikiate,
    setDtshomikigenHikiate,
    setIfTokyuHikiate,
    setIfLotHikiate,
    setIfSublotHikiate,
    setCdTorihikisakiHikiate,
    setNmTorihikisakiHikiate,
    setCdSeisanKojoHikiate,
    setNmSeisanKojoHikiate,
  } = useYPMGSSF701SStore()

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
    setPageId("YPMGSSF701S")
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
    cdKojoZaikoBasho: computed(() => store.cdKojoZaikoBasho),
    nmKojoZaikoBasho: computed(() => store.nmKojoZaikoBasho),
    stNyuka: computed(() => store.stNyuka),
    nmNyuka: computed(() => store.nmNyuka),
    stData: computed(() => store.stData),
    nmData: computed(() => store.nmData),
    fgJisseki: computed(() => store.fgJisseki),
    nmJisseki: computed(() => store.nmJisseki),
    page: computed(() => store.page),
    noRecSeq: computed(() => store.noRecSeq),
    noMesKanri: computed(() => store.noMesKanri),
    stTeisei: computed(() => store.stTeisei),
    nmTeisei: computed(() => store.nmTeisei),
    nmKojo: computed(() => store.nmKojo),
    nmTenkai: computed(() => store.nmTenkai),
    ifJyoutai: computed(() => store.ifJyoutai),
    cdJushinkey: computed(() => store.cdJushinkey),
    tmJushin: computed(() => store.tmJushin),
    noBunkatsuData: computed(() => store.noBunkatsuData),
    nmItemCdShikibetsu: computed(() => store.nmItemCdShikibetsu),
    cdItem: computed(() => store.cdItem),
    nmHinmpkuRyakushiki: computed(() => store.nmHinmpkuRyakushiki),
    cdTorihikisaki2: computed(() => store.cdTorihikisaki2),
    nmTorihikisaki2: computed(() => store.nmTorihikisaki2),
    cdTorihikisaki: computed(() => store.cdTorihikisaki),
    nmTorihikisaki: computed(() => store.nmTorihikisaki),
    cdSeisanKojo: computed(() => store.cdSeisanKojo),
    nmSeisanKojo: computed(() => store.nmSeisanKojo),
    cdSyukasoko: computed(() => store.cdSyukasoko),
    nmSyukasoko: computed(() => store.nmSyukasoko),
    cdNyukasoko: computed(() => store.cdNyukasoko),
    nmNyukasoko: computed(() => store.nmNyukasoko),
    qtSuryo: computed(() => store.qtSuryo),
    ifSuryotani: computed(() => store.ifSuryotani),
    qtJuryo: computed(() => store.qtJuryo),
    ifJuryotani: computed(() => store.ifJuryotani),
    dtUkeireyotei: computed(() => store.dtUkeireyotei),
    dtShomikigen: computed(() => store.dtShomikigen),
    ifTokyu: computed(() => store.ifTokyu),
    ifLot: computed(() => store.ifLot),
    ifSublot: computed(() => store.ifSublot),
    dtHaraidashiDenpyo: computed(() => store.dtHaraidashiDenpyo),
    noHaraidashiDenpyo: computed(() => store.noHaraidashiDenpyo),
    dtHiteiseiDenpyo: computed(() => store.dtHiteiseiDenpyo),
    noHteiseiDenpyo: computed(() => store.noHteiseiDenpyo),
    noSyukaDenpyo: computed(() => store.noSyukaDenpyo),
    noNyukaDenpyo: computed(() => store.noNyukaDenpyo),
    cdSyukaSokoHikiate: computed(() => store.cdSyukaSokoHikiate),
    nmSyukaSokoHikiate: computed(() => store.nmSyukaSokoHikiate),
    qtSuryoHikiate: computed(() => store.qtSuryoHikiate),
    qtJuryoHikiate: computed(() => store.qtJuryoHikiate),
    dtshomikigenHikiate: computed(() => store.dtshomikigenHikiate),
    ifTokyuHikiate: computed(() => store.ifTokyuHikiate),
    ifLotHikiate: computed(() => store.ifLotHikiate),
    ifSublotHikiate: computed(() => store.ifSublotHikiate),
    cdTorihikisakiHikiate: computed(() => store.cdTorihikisakiHikiate),
    nmTorihikisakiHikiate: computed(() => store.nmTorihikisakiHikiate),
    cdSeisanKojoHikiate: computed(() => store.cdSeisanKojoHikiate),
    nmSeisanKojoHikiate: computed(() => store.nmSeisanKojoHikiate),
  }
}