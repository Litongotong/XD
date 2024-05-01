import { usePageInfoStore } from '@/stores/page-info'
import { useButtonConfig } from '@/stores/button-config'

import { computed, onBeforeMount } from 'vue'
import { useYCSCMNF070MStore } from './YCSCMNF070M-store'
import { useRoute } from 'vue-router'

export default function useYCSCMNF070MLogic() {
  // [[ Header ]]
  const pageInfo = usePageInfoStore()
  const layoutHeaderButtons = useButtonConfig()

  onBeforeMount(() => {
    layoutHeaderButtons.headerButtonConfigs = [
      {
        title: '戻る(F10)',
        disabled: true,
      },

      {
        title: 'メニュー(F11)',
        disabled: true,
      },

      {
        title: '業務終了(F12)',
        disabled: false,
        onClick: () => console.log('click F12'),
      },
    ]

    //画面名
    pageInfo.setPageName('システムエラー画面')
    //画面ID
    pageInfo.setPageId('YCSCMNF070M')
    //会社名表示否
    pageInfo.setShowCompanyName(true)
    // 部署名表示否
    pageInfo.setShowDepartmentName(true)
    // ログイン日時表示否
    pageInfo.setShowLoginDate(false)
    // ユーザー名表示否
    pageInfo.setShowUserName(false)
    // 運用日表示否
    pageInfo.setShowUseDate(false)
  })

  // [[ Footer ]]
  const layoutFooterButtons = useButtonConfig()

  onBeforeMount(() => {
    layoutFooterButtons.footerButtonConfigs = []
  })

  // [[ Store ]]
  const store = useYCSCMNF070MStore()

  const route = useRoute()

  onBeforeMount(() => {
    store.setMessageCode(route.query.error_code as string)
    store.setErrorDetail(route.query.error_msg as string)
    store.setErrorDate(route.query.error_date_time as string)
  })

  return {
    messageCode: computed<string>(() => store.messageCode),
    errorDetail: computed<string>(() => store.errorDetail),
    errorDate: computed<string>(() => store.errorDate),
  }
}
