import type { Button } from '@/types/components/button'

import { useButtonConfig } from '@/stores/button-config'
import { usePageInfoStore } from '@/stores/page-info'
import { useYPMSGSF070MStore } from './YPMSGSF070M-store'
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import type { Table } from '@/types/components'

export default function useYPMSGSF070MLogic() {
  // 定義済みの画面データ設定方法。storeからメソードを分割代入する。
  const store = useYPMSGSF070MStore()

  // [[スプレッドシートのデータを作成]]
  const prepareSpreadColumns = () => {
    const dryColumns: Table.WijmoColumn[] = [
      { binding: '1', align: 'left', width: '74', header: '製造日' },
      { binding: '2', align: 'left', width: '144', header: '製造ロット' },
      { binding: '3', align: 'left', width: '48', header: 'コード' },
      { binding: '4', align: 'left', width: '214', header: '原材料略式名称' },
      { binding: '5', align: 'right', width: '20', header: '区\n分' },
      { binding: '6', align: 'right', width: '20', header: '単\n位' },
      { binding: '7', align: 'right', width: '80', header: '数量' },
      {
        binding: '8',
        align: 'right',
        width: '80',
        header: '単価',
        format: 'n3',
      },
      {
        binding: '9',
        align: 'right',
        width: '95',
        header: '金額（円）',
        format: 'n3',
      },
      { binding: '10', align: 'right', width: '80', header: '修正数量' },
      {
        binding: '11',
        align: 'right',
        width: '100',
        header: '修正金額（円）',
        format: 'n3',
      },
    ]

    const formattedColumns = dryColumns.map<Table.WijmoColumn>(
      (column, index) => {
        const newColumn = { ...column }

        if (index !== 9) newColumn.isReadOnly = true

        return newColumn
      },
    )

    store.setSpreadColumns(formattedColumns)
  }

  const prepareSpreadData = () => {
    const dummyData = Array.from({ length: 200 }, (_, index) => ({
      '1': '2023/10/31',
      '2': '231031-1-000541',
      '3': '111111',
      '4': '原材料略式2',
      '5': 'F',
      '6': 'G',
      '7': 1000,
      '8': index,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
    }))

    store.setBody_spread01(dummyData)
  }

  onBeforeMount(() => {
    prepareSpreadColumns()
    prepareSpreadData()
  })

  // 定義済みのヘッダ、フッター設定方法とリセット方法。
  const {
    setHeaderButtonConfigs,
    resetHeaderButtonConfigs,
    setFooterButtonConfigs,
    resetFooterButtonConfigs,
  } = useButtonConfig()

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
      { title: '(F1)', disabled: false, onClick: clear },
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
  const clear = () => {
    // const confirmClear = confirm('クリアしてよろしいでしょうか')
    // if (confirmClear) {
    store.setQtJuryo('')

    //clearcheck
    console.log(
      'clear動作確認:',
      store.qtJuryo,

    )}
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
    setPageName('仕掛品計上')
    //画面ID
    setPageId('YPMSGSF070M')
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

  const searchBtn = () => {}
  const body_button04 = () => {}

  //リアクティビティを保つため、computedを使用する。
  return {
    spreadColumns: computed(() => store.spreadColumns),
    body_spread01: computed(() => store.body_spread01),
    hinmokuCmb: computed(() => store.hinmokuCmb),
    hinmokuCmbOptions: computed(() => store.hinmokuCmbOptions),
    cdHinmoku: computed(() => store.cdHinmoku),
    nmHinmoku: computed(() => store.nmHinmoku),
    nmJoisonekiSoshikiRyaku: computed(() => store.nmJoisonekiSoshikiRyaku),
    dtDenyoHiduke: computed(() => store.dtDenyoHiduke),
    qtJuryo: computed(() => store.qtJuryo),
    ifTani: computed(() => store.ifTani),
    kanriCmb: computed(() => store.kanriCmb),
    kanriCmbOptions: computed(() => store.kanriCmbOptions),
    qtKensu: computed(() => store.qtKensu),
    chkGenzairyoAdd: computed(() => store.chkGenzairyoAdd),
    searchBtn,
    body_button04,
  }
}
