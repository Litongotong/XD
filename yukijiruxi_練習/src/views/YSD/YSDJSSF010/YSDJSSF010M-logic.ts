import type { Table } from '@/types/components'

import { usePageInfoStore } from '@/stores/page-info'
import { useButtonConfig } from '@/stores/button-config'
import { computed, onBeforeMount } from 'vue'
import { useYSDJSSF010MStore } from './YSDJSSF010M-store'

export default function useYSDJSSF010MLogic() {
  // [[ Header ]]
  const pageInfo = usePageInfoStore()

  onBeforeMount(() => {
    //画面名
    pageInfo.setPageName('受注照会')
    //画面ID
    pageInfo.setPageId('YSDJSSF010M')
    //会社名表示否
    pageInfo.setShowCompanyName(true)
    // 部署名表示否
    pageInfo.setShowDepartmentName(true)
    // ログイン日時表示否
    pageInfo.setShowLoginDate(true)
    // ユーザー名表示否
    pageInfo.setShowUserName(true)
    // 運用日表示否
    pageInfo.setShowUseDate(false)
  })

  // [[ Footer ]]
  const layoutButtons = useButtonConfig()

  onBeforeMount(() => {
    layoutButtons.footerButtonConfigs = [
      { title: '(F1)', disabled: true },
      { title: '(F2)', disabled: true },
      { title: '(F3)', disabled: true },
      { title: '(F4)', disabled: true },
      { title: '(F5)', disabled: true },
      { title: '(F6)', disabled: true },
      {
        title: 'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)',
        disabled: false,
        onClick: () => alert('todo'),
      },
      {
        title: '帳票印刷(F8)',
        disabled: false,
        onClick: () => alert('todo'),
      },
      { title: '(F9)', disabled: true },
    ]
  })

  // [[ Store ]]
  const store = useYSDJSSF010MStore()

  onBeforeMount(async () => {
    store.setNohinFdt('2023/12/31')

    store.setNohinTdt('2024/03/31')

    store.setJyuchuFdt('2023/12/31')

    store.setJyuchuTdt('2024/03/31')

    store.setHachuNo('A100000001')

    store.setJyuchuNo('B100000001')

    store.setNouhinsakiCd('C10001')

    store.setNouhinsakiNm('納品先')

    store.setTokuyakutenCd('D10001')

    store.setTokuyakutenNm('特約店')

    store.setHinmokuCd('E1001')

    store.setHinmokuNm('品目名')

    store.setSyukasiji('指示A')

    store.setSyukaHomen('方面A')

    store.setBasho1(100)

    store.setBasho2(0)

    store.setBasho3(101)

    store.setZaikoBashoNm('在庫場所')

    store.setUkebaraiKbn('区分A')

    store.setJyuchuKeitai('形態A')

    store.setChiiki('地域A')

    store.setUserId('100001')

    store.setSakuseisya(true)

    store.setKoshinsya(true)

    store.setJigyoKbn('事業A')

    store.setBatchSitei(true)

    store.setTaishoSeihin(true)

    store.setMihikiate(true)

    store.setTeiseibun(true)

    store.setSinausu(true)

    store.setMisyuturyoku(true)

    store.setFirstRecord(1)

    store.setLastRecord(100)

    store.setTotalRecord(286)

    store.setOutList1('')

    store.setOutList2('')

    store.setOutList3('')

    store.setCurrentPage(1)

    store.setTotalPage(3)

    const spreadData: Table.DatumRow[] = [
      [
        { id: 'button', datum: false },
        { id: 'siji', datum: 'A' },
        { id: 'hikiate', datum: 'B' },
        { id: 'jyuchuDt', datum: '2023/12/31' },
        { id: 'nohinDt', datum: '2023/12/31' },
        { id: 'hachuNo', datum: 'A0000001' },
        { id: 'jyuchuNo', datum: 'B0000001' },
        { id: 'tokuyakuten', datum: '特約店' },
        { id: 'nohinsaki', datum: '納品先' },
        { id: 'ukebaraiKbn', datum: '受払区分' },
        { id: 'keitai', datum: '形態' },
      ],
      [
        { id: 'button', datum: false },
        { id: 'siji', datum: 'A' },
        { id: 'hikiate', datum: 'B' },
        { id: 'jyuchuDt', datum: '2023/12/31' },
        { id: 'nohinDt', datum: '2023/12/31' },
        { id: 'hachuNo', datum: 'A0000001' },
        { id: 'jyuchuNo', datum: 'B0000001' },
        { id: 'tokuyakuten', datum: '特約店' },
        { id: 'nohinsaki', datum: '納品先' },
        { id: 'ukebaraiKbn', datum: '受払区分' },
        { id: 'keitai', datum: '形態' },
      ],
      [
        { id: 'button', datum: false },
        { id: 'siji', datum: 'A' },
        { id: 'hikiate', datum: 'B' },
        { id: 'jyuchuDt', datum: '2023/12/31' },
        { id: 'nohinDt', datum: '2023/12/31' },
        { id: 'hachuNo', datum: 'A0000001' },
        { id: 'jyuchuNo', datum: 'B0000001' },
        { id: 'tokuyakuten', datum: '特約店' },
        { id: 'nohinsaki', datum: '納品先' },
        { id: 'ukebaraiKbn', datum: '受払区分' },
        { id: 'keitai', datum: '形態' },
      ],
      [
        { id: 'button', datum: false },
        { id: 'siji', datum: 'A' },
        { id: 'hikiate', datum: 'B' },
        { id: 'jyuchuDt', datum: '2023/12/31' },
        { id: 'nohinDt', datum: '2023/12/31' },
        { id: 'hachuNo', datum: 'A0000001' },
        { id: 'jyuchuNo', datum: 'B0000001' },
        { id: 'tokuyakuten', datum: '特約店' },
        { id: 'nohinsaki', datum: '納品先' },
        { id: 'ukebaraiKbn', datum: '受払区分' },
        { id: 'keitai', datum: '形態' },
      ],
      [
        { id: 'button', datum: false },
        { id: 'siji', datum: 'A' },
        { id: 'hikiate', datum: 'B' },
        { id: 'jyuchuDt', datum: '2023/12/31' },
        { id: 'nohinDt', datum: '2023/12/31' },
        { id: 'hachuNo', datum: 'A0000001' },
        { id: 'jyuchuNo', datum: 'B0000001' },
        { id: 'tokuyakuten', datum: '特約店' },
        { id: 'nohinsaki', datum: '納品先' },
        { id: 'ukebaraiKbn', datum: '受払区分' },
        { id: 'keitai', datum: '形態' },
      ],
      [
        { id: 'button', datum: false },
        { id: 'siji', datum: 'A' },
        { id: 'hikiate', datum: 'B' },
        { id: 'jyuchuDt', datum: '2023/12/31' },
        { id: 'nohinDt', datum: '2023/12/31' },
        { id: 'hachuNo', datum: 'A0000001' },
        { id: 'jyuchuNo', datum: 'B0000001' },
        { id: 'tokuyakuten', datum: '特約店' },
        { id: 'nohinsaki', datum: '納品先' },
        { id: 'ukebaraiKbn', datum: '受払区分' },
        { id: 'keitai', datum: '形態' },
      ],
      [
        { id: 'button', datum: false },
        { id: 'siji', datum: 'A' },
        { id: 'hikiate', datum: 'B' },
        { id: 'jyuchuDt', datum: '2023/12/31' },
        { id: 'nohinDt', datum: '2023/12/31' },
        { id: 'hachuNo', datum: 'A0000001' },
        { id: 'jyuchuNo', datum: 'B0000001' },
        { id: 'tokuyakuten', datum: '特約店' },
        { id: 'nohinsaki', datum: '納品先' },
        { id: 'ukebaraiKbn', datum: '受払区分' },
        { id: 'keitai', datum: '形態' },
      ],
    ]

    // NOTE: 縦スクロールが必要な時の例
    for (let i = 0; i < 30; i++) {
      spreadData.push([
        { id: 'button', datum: false },
        { id: 'siji', datum: 'A' },
        { id: 'hikiate', datum: 'B' },
        { id: 'jyuchuDt', datum: '2023/12/31' },
        { id: 'nohinDt', datum: '2023/12/31' },
        { id: 'hachuNo', datum: 'A0000001' },
        { id: 'jyuchuNo', datum: 'B0000001' },
        { id: 'tokuyakuten', datum: '特約店' },
        { id: 'nohinsaki', datum: '納品先' },
        { id: 'ukebaraiKbn', datum: '受払区分' },
        { id: 'keitai', datum: '形態' },
      ])
    }

    store.setSMSJCFSpread1(spreadData)
  })

  const displayBtn = () => {
    alert('todo')
  }

  return {
    nohinFdt: computed<string>(() => store.nohinFdt),
    nohinTdt: computed<string>(() => store.nohinTdt),
    jyuchuFdt: computed<string>(() => store.jyuchuFdt),
    jyuchuTdt: computed<string>(() => store.jyuchuTdt),
    hachuNo: computed<string>(() => store.hachuNo),
    jyuchuNo: computed<string>(() => store.jyuchuNo),
    nouhinsakiCd: computed<string>(() => store.nouhinsakiCd),
    nouhinsakiNm: computed<string>(() => store.nouhinsakiNm),
    tokuyakutenCd: computed<string>(() => store.tokuyakutenCd),
    tokuyakutenNm: computed<string>(() => store.tokuyakutenNm),
    hinmokuCd: computed<string>(() => store.hinmokuCd),
    hinmokuNm: computed<string>(() => store.hinmokuNm),
    syukasiji: computed<string>(() => store.syukasiji),
    syukaHomen: computed<string>(() => store.syukaHomen),
    basho1: computed<number>(() => store.basho1),
    basho2: computed<number>(() => store.basho2),
    basho3: computed<number>(() => store.basho3),
    zaikoBashoNm: computed<string>(() => store.zaikoBashoNm),
    ukebaraiKbn: computed<string>(() => store.ukebaraiKbn),
    jyuchuKeitai: computed<string>(() => store.jyuchuKeitai),
    chiiki: computed<string>(() => store.chiiki),
    userId: computed<string>(() => store.userId),
    sakuseisya: computed<boolean>(() => store.sakuseisya),
    koshinsya: computed<boolean>(() => store.koshinsya),
    jigyoKbn: computed<string>(() => store.jigyoKbn),
    batchSitei: computed<boolean>(() => store.batchSitei),
    taishoSeihin: computed<boolean>(() => store.taishoSeihin),
    mihikiate: computed<boolean>(() => store.mihikiate),
    teiseibun: computed<boolean>(() => store.teiseibun),
    sinausu: computed<boolean>(() => store.sinausu),
    misyuturyoku: computed<boolean>(() => store.misyuturyoku),
    shijigoSuryoTeisei: computed<boolean>(() => store.shijigoSuryoTeisei),
    firstRecord: computed<number>(() => store.firstRecord),
    lastRecord: computed<number>(() => store.lastRecord),
    totalRecord: computed<number>(() => store.totalRecord),
    outList1: computed<string>(() => store.outList1),
    outList2: computed<string>(() => store.outList2),
    outList3: computed<string>(() => store.outList3),
    currentPage: computed<number>(() => store.currentPage),
    totalPage: computed<number>(() => store.totalPage),

    // テーブル
    SMSJCFSpread1: computed<Table.DatumRow[]>(() => store.SMSJCFSpread1),
    displayBtn,
  }
}
