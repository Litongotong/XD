import type { Button } from '@/types/components/button'

import { useButtonConfig } from '@/stores/button-config'
import { useMessage } from '@/stores/message'
import { usePageInfoStore } from '@/stores/page-info'
import { useYPMGSSF701SStore } from './YPMGSSF701S-store'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'

// 画面YPMGSSF701Sのロジックを定義する。
// ロジックを vueファイルのsetup script 内に実行させる為に画面モジュールを関数で定義しなければならない。
// setup script 以外に画面モジュールを使うと実行エラーが発生する。
export default function useYPMGSSF701SLogic() {
  // 定義済みの画面YPMGSSF701Sのstore。画面の状態をstoreから導入する。
  // メソードは分割代入できますが、リアクティビティが失われるため、変数は分割代入できない。
  // 変数を使用したい場合、下記方法でstoreを導入してください。
  const store = useYPMGSSF701SStore()
  // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
  const {
    setCdKojoZaikoBasho,
    setNmKojoZaikoBasho,
    setNmNyuka,
    setStNyuka,
    setStData,
    setNmData,
    setFgJisseki,
    setNmJisseki,
    setPage,
    setNoRecSeq,
    setNoMesKanri,
    setStTeisei,
    setNmTeisei,
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

  // 初期化データ取得apiの呼び出し、データ初期化はonBeforeMountに書く。
  onBeforeMount(() => {
    //TODO:画面初期化データ取得apiの呼び出し

    // 画面データを設定する。
    setCdKojoZaikoBasho('000071')
    setNmKojoZaikoBasho('横浜チーズ工場R')
    setStNyuka('01')
    setNmNyuka('工場内移動')
    setStData('03')
    setNmData('移動')
    setFgJisseki('1')
    setNmJisseki('入荷実績')
    setPage('1/1')
    setNoRecSeq('00011')
    setNoMesKanri('2000000011')
    setStTeisei('01')
    setNmTeisei('新規')
    setNmTenkai('展開エラー')
    setIfJyoutai('テスト１１状態マックスＡＢＣＤ')
    setCdJushinkey('2013022000011')
    setTmJushin('2023/08/30  11:20:08')
    setNoBunkatsuData('0')
    setNmItemCdShikibetsu('製品')
    setCdItem('011466')
    setNmHinmpkuRyakushiki('トランの品目略称１１３４５')
    setCdTorihikisaki2('077859')
    setNmTorihikisaki2('トランの取引先１１０')
    setCdTorihikisaki('123456')
    setNmTorihikisaki('トランの取引先略称０')
    setCdSeisanKojo('101023')
    setNmSeisanKojo('ﾄﾗﾝ生産工場1145')
    setCdSyukasoko('000071-020-999-999')
    setNmSyukasoko('JCチーズ倉庫８９０１２３４５')
    setCdNyukasoko('000071-020-999-999')
    setNmNyukasoko('トランの入荷倉庫名称１１２３４')
    setQtSuryo('111,111,121')
    setIfSuryotani('ｺｺ')
    setQtJuryo('11,112,100')
    setIfJuryotani('GG')
    setDtUkeireyotei('2015/01/11')
    setDtShomikigen('2018/01/11')
    setIfTokyu('AB')
    setIfLot('1234567810012345678100')
    setIfSublot('123456')
    setDtHaraidashiDenpyo('2014/01/11')
    setNoHaraidashiDenpyo('1000001100-01-01')
    setDtHiteiseiDenpyo('')
    setNoHteiseiDenpyo('')
    setNoSyukaDenpyo('098765432109-098-09')
    setNoNyukaDenpyo('123456789012-123-12')
    setCdSyukaSokoHikiate('000071-020-999-999')
    setNmSyukaSokoHikiate('横浜原料')
    setQtSuryoHikiate('111,111,121')
    setQtJuryoHikiate('11,112,100')
    setDtshomikigenHikiate('2018/01/11')
    setIfTokyuHikiate('AB')
    setIfLotHikiate('1234567810012345678100')
    setIfSublotHikiate('123456')
    setCdTorihikisakiHikiate('077859')
    setNmTorihikisakiHikiate('＊清水秀子')
    setCdSeisanKojoHikiate('101023')
    setNmSeisanKojoHikiate('ＢＳＳ群馬工場')
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
          //メーセージをクリックする。
          window.alert('前の画面作成中、戻ることはできませ。')
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
          window.alert('メニュー画面作成中、遷移できませ。')
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
          window.alert('現時点業務終了できませ。')
          setPageErrorMessage('エラーが発生しました。')
          setPageSuccessMessage('')
        },
      },
    ]
    setHeaderButtonConfigs(headerButtonConfigs)

    //フッターのボタン表示及びロジックを設定する。
    const footerButtonConfigs: Button.Config[] = [
      { title: '(F1)', disabled: true, onClick: () => {} },
      { title: '(F2)', disabled: true, onClick: () => {} },
      { title: '(F3)', disabled: true, onClick: () => {} },
      { title: '前頁(F4)', disabled: true, onClick: () => {} },
      { title: '次頁(F5)', disabled: true, onClick: () => {} },
      { title: '(F6)', disabled: true, onClick: () => {} },
      { title: '(F7)', disabled: true, onClick: () => {} },
      {
        title: '帳票印刷(F8)',
        disabled: true,
        onClick: () => {
          console.log('click帳票印刷(F8)')
        },
      },
      {
        title: '登録(F9)',
        disabled: true,
        onClick: () => {
          console.log('click登録(F9)')
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
    setPageName('ＭＥＳ移動／仕入実績受信確認　詳細')
    //画面ID
    setPageId('YPMGSSF701S')
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
