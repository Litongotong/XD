import type { Table } from '@/types/components'

import { usePageInfoStore } from '@/stores/page-info'
import { useButtonConfig } from '@/stores/button-config'
import { computed, onBeforeMount, reactive } from 'vue'
import { useYSDBSSF411SStore } from './YSDBSSF411S-store'

export default function useYSDBSSF411SLogic() {
  // [[ Header ]]
  const pageInfo = usePageInfoStore()

  onBeforeMount(() => {
    //画面名
    pageInfo.setPageName('配送先選択')
    //画面ID
    pageInfo.setPageId('YSDBSSF411S')
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

  const searchBtn = () => {
    alert('検索 TODO')
  }

  // [[ 左テーブルサンプル用データ ]]
  const spreadDataLeft = reactive<Table.DatumRow[]>([
    [
      { id: '01', datum: '大塚札幌' },
      { id: '02', datum: 20 },
      { id: '03', datum: 164.3 },
      { id: '04', datum: 20 },
      { id: '05', datum: 5 },
      { id: '06', datum: false },
    ],
    [
      { id: '01', datum: '群馬工場製品倉庫' },
      { id: '02', datum: 390 },
      { id: '03', datum: 999.9 },
      { id: '04', datum: 0 },
      { id: '05', datum: 0 },
      { id: '06', datum: false },
    ],
    [
      { id: '01', datum: '大塚前橋関東' },
      { id: '02', datum: 100 },
      { id: '03', datum: 131.9 },
      { id: '04', datum: 105 },
      { id: '05', datum: 50 },
      { id: '06', datum: false },
    ],
    [
      { id: '01', datum: '大塚前橋本社' },
      { id: '02', datum: 0 },
      { id: '03', datum: 0 },
      { id: '04', datum: 172 },
      { id: '05', datum: 96 },
      { id: '06', datum: false },
    ],
    [
      { id: '01', datum: '大塚名古屋中部' },
      { id: '02', datum: 13 },
      { id: '03', datum: 66.1 },
      { id: '04', datum: 20 },
      { id: '05', datum: 20 },
      { id: '06', datum: false },
    ],
    [
      { id: '01', datum: '大塚名古屋中部仮' },
      { id: '02', datum: 13 },
      { id: '03', datum: 66.1 },
      { id: '04', datum: 20 },
      { id: '05', datum: 20 },
      { id: '06', datum: false },
    ],
  ])

  // [[ 右テーブルサンプル用データ ]]
  const spreadDataRight = reactive<Table.DatumRow[]>([
    [
      { id: '01', datum: '100' },
      { id: '02', datum: '001' },
      { id: '03', datum: '2023/10/31' },
      { id: '04', datum: '' },
      { id: '05', datum: '6' },
      { id: '06', datum: 'CS' },
      { id: '07', datum: false },
    ],
    [
      { id: '08', datum: '999' },
      { id: '09', datum: '0' },
      { id: '10', datum: '\u00A0ｺ' },
    ],
    [
      { id: '01', datum: '100' },
      { id: '02', datum: '001' },
      { id: '03', datum: '2023/09/14' },
      { id: '04', datum: '' },
      { id: '05', datum: '374' },
      { id: '06', datum: 'CS' },
      { id: '07', datum: false },
    ],
    [
      { id: '08', datum: '999' },
      { id: '09', datum: '0' },
      { id: '10', datum: '\u00A0ｺ' },
    ],
  ])

  // [[ Footer ]]
  const layoutButtons = useButtonConfig()

  onBeforeMount(() => {
    layoutButtons.footerButtonConfigs = [
      {
        title: '照会(F1)',
        disabled: false,
        onClick: () => alert('F1 TODO'),
      },
      {
        title: '製造別照会(F2)',
        disabled: false,
        onClick: () => alert('F2 TODO'),
      },
      { title: '(F3)', disabled: true },
      { title: '(F4)', disabled: true },
      {
        title: '(F5)',
        disabled: true,
      },
      { title: '(F6)', disabled: true },
      { title: 'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)', disabled: true },
      { title: '帳票印刷(F8)', disabled: true },
      {
        title: '登録(F9)',
        disabled: false,
        onClick: () => alert('F9 TODO'),
      },
    ]
  })

  // [[ Store ]]
  const store = useYSDBSSF411SStore()

  onBeforeMount(() => {
    store.setTopCdSeihin('135075')
    store.setTopNmSeihinRyakushiki('おなかにやさしい10本')

    // 入荷場所
    store.setCdNyukaBashoKojo('XX')
    store.setCdNyukaBashoSoko('XXX')
    store.setCdNyukaBashoArea('XXXX')
    store.setCdNyukaBashoZone('XXXXX')
    store.setStChiiki('XXXXXXX')

    store.setDtSeizo('　　　　/　　/　　')
    store.setIfSuryoTani('CS')
    store.setIfHasuTani('\u00A0ｺ')
    store.setMeisaiList1(spreadDataLeft)
    store.setMeisaiList2(spreadDataRight)
  })

  return {
    topCdSeihin: computed<string>(() => store.topCdSeihin),
    topNmSeihinRyakushiki: computed<string>(() => store.topNmSeihinRyakushiki),
    dtShukka: computed<string>({
      get: () => store.dtShukka,
      set: (value: string) => store.setDtShukka(value),
    }),
    dtNohin: computed<string>({
      get: () => store.dtNohin,
      set: (value: string) => store.setDtNohin(value),
    }),

    searchBtn,

    // 出荷場所
    cdShukkaBashoKojo: computed<string>(() => store.cdShukkaBashoKojo),
    cdShukkaBashoSoko: computed<string>(() => store.cdShukkaBashoSoko),
    cdShukkaBashoArea: computed<string>(() => store.cdShukkaBashoArea),
    cdShukkaBashoZone: computed<string>(() => store.cdShukkaBashoZone),
    nmShukkaBashoRyakushiki: computed<string>(
      () => store.nmShukkaBashoRyakushiki
    ),

    // 入荷場所
    cdNyukaBashoKojo: computed<string>(() => store.cdNyukaBashoKojo),
    cdNyukaBashoSoko: computed<string>(() => store.cdNyukaBashoSoko),
    cdNyukaBashoArea: computed<string>(() => store.cdNyukaBashoArea),
    cdNyukaBashoZone: computed<string>(() => store.cdNyukaBashoZone),
    stChiiki: computed<string>(() => store.stChiiki),

    // NOTE: 項目不明（画像に表示されない）
    nmNyukaBashoRyakushiki: computed<string>(
      () => store.nmNyukaBashoRyakushiki
    ),
    dtSeizo: computed<string>(() => store.dtSeizo),
    ifSubLot: computed<string>(() => store.ifSubLot),
    qtSuryo: computed<string>(() => store.qtSuryo),
    ifSuryoTani: computed<string>(() => store.ifSuryoTani),
    qtHasu: computed<string>(() => store.qtHasu),
    ifHasuTani: computed<string>(() => store.ifHasuTani),
    // テーブル
    meisaiList1: computed<Table.DatumRow[]>(() => store.meisaiList1),
    meisaiList2: computed<Table.DatumRow[]>(() => store.meisaiList2),
  }
}
