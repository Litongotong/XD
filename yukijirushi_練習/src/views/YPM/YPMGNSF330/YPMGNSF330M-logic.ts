import type { Button, Table } from '@/types/components'
import { ref } from 'vue'

export default function useYPMGNSF330MLogic() {
  const buttonConfigs: Button.Config[] = [
    { title: '表示', disabled: false, onClick: () => {} },

    {
      title: '原料費内訳計算',
      disabled: false,
      onClick: () => {},
      width: '100',
    },

    { title: '他勘定入力', disabled: false, onClick: () => {} },
  ]

  const heads: Table.HeadRow[] = [
    [
      { id: '01', head: '入力\n状態' },
      { id: '02', head: '項目' },
      { id: '03', head: '名称' },
      { id: '04', head: '生乳\n重量(Kg)', minimumFractionDigits: 1 },
      { id: '05', head: '生乳\nFAT量(g)' },
      { id: '06', head: '生乳\nEXF量(g)' },
      { id: '07', head: '生乳\n金額(円)' },
      { id: '08', head: 'クリーム\n重量(Kg)', minimumFractionDigits: 1 },
      { id: '09', head: 'クリーム\nFAT量(g)' },
    ],
  ]

  const data = ref<Table.DatumRow[]>([
    [
      { id: '01', datum: '' },
      { id: '02', datum: '前残' },
      { id: '03', datum: '' },
      { id: '04', datum: 71602 },
      { id: '05', datum: 2949116 },
      { id: '06', datum: 6256153 },
      { id: '07', datum: 5604519 },
      { id: '08', datum: 2390 },
      { id: '09', datum: 1142.4 },
    ],
  ])

  return { buttonConfigs, heads, data }
}
