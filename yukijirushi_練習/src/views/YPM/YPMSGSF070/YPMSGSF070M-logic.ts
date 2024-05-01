import type { Dropdown, Table } from '@/types/components'

import { computed, onBeforeMount, onUpdated } from 'vue'
import { useYPMSGSF070MStore } from './YPMSGSF070M-store'
import {
  useBeforeDisplay,
  useF1,
  useF4,
  useF5,
  useGetView,
  useShowGeneHinmoku,
} from './composiable/YPMSGSF070M'
import { useF9 } from './composiable/YPMSGSF070M/use-f9'

export default function useYPMSGSF070MLogic() {
  const store = useYPMSGSF070MStore()

  const { initControl } = useBeforeDisplay()
  const { handlePressSearch } = useShowGeneHinmoku()
  const { handlePressDisplay } = useGetView()
  const { handleF1 } = useF1()
  const { handleF4 } = useF4()
  const { handleF5 } = useF5()
  const { handleF9 } = useF9()

  onBeforeMount(async () => {
    await initControl()
    handleF1()
    handleF4()
    handleF5()
    handleF9()
  })

  // FIXME: 何故か「表示」ボタン押下後はフッターボタンの設定が別の設定にされる。
  // 下記で臨時対応している。
  onUpdated(() => {
    handleF1()
    handleF4()
    handleF5()
    handleF9()
  })

  const searchBtn = () => {
    handlePressSearch()
  }

  const body_button04 = async () => {
    await handlePressDisplay()
  }

  return {
    nmJoisonekiSoshikiRyaku: computed<string>(
      () => store.nmJoisonekiSoshikiRyaku,
    ),

    kanriCmbOptions: computed<Dropdown.Option[]>(() => store.kanriCmbOptions),

    kanriCmb: computed<string>({
      get: () => store.kanriCmb,
      set: (value: string) => store.setKanriCmb(value),
    }),

    hinmokuCmbOptions: computed<Dropdown.Option[]>(() => store.hinmokuOptions),

    hinmokuCmb: computed<string>({
      get: () => store.hinmokuCmb,
      set: (value: string) => store.setHinmokuCmb(value),
    }),

    cdHinmoku: computed<string>({
      get: () => store.cdHinmoku,
      set: (value: string) => store.setCdHinmoku(value),
    }),

    nmHinmoku: computed<string>({
      get: () => store.nmHinmoku,
      set: (value: string) => store.setNmHinmoku(value),
    }),

    dtDenyoHiduke: computed<string>(() => store.dtDenyoHiduke),

    chkGenzairyoAdd: computed<boolean>({
      get: () => store.chkGenzairyoAdd,
      set: (status: boolean) => store.setChkGenzairyoAdd(status),
    }),

    searchBtn,
    body_button04,

    qtJuryo: computed<string>({
      get: () => store.qtJuryo,
      set: (value: string) => store.setQtJuryo(value),
    }),

    ifTani: computed<string>(() => store.ifTani),

    body_spread01: computed<Table.DatumRow[]>(() => store.body_spread01),
    spread01Heads: computed<Table.HeadRow[]>(() => store.spread01Heads),
    qtKensu: computed<string>(() => store.qtKensu.toString()),
  }
}
