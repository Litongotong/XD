import type { Table } from '@/types/components'

import { usePageInfoStore } from '@/stores/page-info'
import { useButtonConfig } from '@/stores/button-config'
import { computed, onBeforeMount } from 'vue'
import { useYPMGSSF060MStore } from './YPMGSSF060M-store'

export default function useYPMGSSF060MLogic() {
  // [[ Header ]]
  const pageInfo = usePageInfoStore()

  onBeforeMount(() => {
    //画面名
    pageInfo.setPageName('帳票印刷')
    //画面ID
    pageInfo.setPageId('YPMGSSF060M')
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
      {
        title: 'クリア(F3)',
        disabled: false,
        onClick: () => alert('todo'),
      },
      { title: '(F4)', disabled: true },
      { title: '(F5)', disabled: true },
      { title: '(F6)', disabled: true },
      {
        title: 'CSVﾀﾞｳﾝﾛｰﾄﾞ(F7)',
        disabled: true,
      },
      {
        title: '帳票印刷(F8)',
        disabled: false,
        onClick: () => alert('todo'),
      },
      { title: '登録(F9)', disabled: true },
    ]
  })

  // [[ Store ]]
  const store = useYPMGSSF060MStore()

  onBeforeMount(async () => {
    store.setCdKojoZaikoBasho('000144')
    store.setNmKojoZaikoBasho('大樹工場')
    store.setCdSoko('')
    store.setNmSokoRyaku('')
    store.setCdArea('')
    store.setNmAreaRyaku('')
    store.setCdZone('')
    store.setNmZoneRyaku('')
    store.setNmBashoRyaku('')
    store.setStHinmokuCdShikibetsu('製品')
    store.setTanafudaSuryoSyutsuryokuCheck(true)
    store.setDtTaishoFrom('2022/01/01')
    store.setDtTaishoTo('')
    store.setDtTaishoNengetsuFrom(2022)
    store.setDtTaishoNengetsuTo(1)
    store.setCdGenzairyo(0)
    store.setNmGenzairyoRyaku('')
    store.setZeroInjiNashiCheck(true)
    store.setRdSeisanNichi('1')
    store.setRdKobetsuNen('2')
    store.setRdSoukatsuGetsu('3')
    store.setRdJisseki1('4')
    store.setRdJisseki2('5')
    store.setRdKessan('6')
    store.setRdNyuusyoku('7')
    store.setRdShinyuu('8')
    store.setRdNyuuka('9')
    store.setRdPicking('10')
    store.setRdSelect11('11')
  })

  const displayBtn = () => {
    alert('todo')
  }

  return {
    cdKojoZaikoBasho: computed<string>(() => store.cdKojoZaikoBasho),
    nmKojoZaikoBasho: computed<string>(() => store.nmKojoZaikoBasho),
    cdSoko: computed<string>(() => store.cdSoko),
    nmSokoRyaku: computed<string>(() => store.nmSokoRyaku),
    cdArea: computed<string>(() => store.cdArea),
    nmAreaRyaku: computed<string>(() => store.nmAreaRyaku),
    cdZone: computed<string>(() => store.cdZone),
    nmZoneRyaku: computed<string>(() => store.nmZoneRyaku),
    nmBashoRyaku: computed<string>(() => store.nmBashoRyaku),
    stHinmokuCdShikibetsu: computed<string>(() => store.stHinmokuCdShikibetsu),
    tanafudaSuryoSyutsuryokuCheck: computed<boolean>(
      () => store.tanafudaSuryoSyutsuryokuCheck
    ),
    dtTaishoFrom: computed<string>(() => store.dtTaishoFrom),
    dtTaishoTo: computed<string>(() => store.dtTaishoTo),
    dtTaishoNengetsuFrom: computed<number>(() => store.dtTaishoNengetsuFrom),
    dtTaishoNengetsuTo: computed<number>(() => store.dtTaishoNengetsuTo),
    cdGenzairyo: computed<number>(() => store.cdGenzairyo),
    nmGenzairyoRyaku: computed<string>(() => store.nmGenzairyoRyaku),
    zeroInjiNashiCheck: computed<boolean>(() => store.zeroInjiNashiCheck),
    rdSeisanNichi: computed<string>(() => store.rdSeisanNichi),
    rdKobetsuNen: computed<string>(() => store.rdKobetsuNen),
    rdSoukatsuGetsu: computed<string>(() => store.rdSoukatsuGetsu),
    rdJisseki1: computed<string>(() => store.rdJisseki1),
    rdJisseki2: computed<string>(() => store.rdJisseki2),
    rdNyuusyoku: computed<string>(() => store.rdNyuusyoku),
    rdShinyuu: computed<string>(() => store.rdShinyuu),
    rdKessan: computed<string>(() => store.rdKessan),
    rdNyuuka: computed<string>(() => store.rdNyuuka),
    rdPicking: computed<string>(() => store.rdPicking),
    rdSelect11: computed<string>(() => store.rdSelect11),
  }
}
