import { VIEWS_INFO } from '@/config'
import { usePageInfoStore } from '@/stores/page-info'
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

export function usePageInfo() {
  const pageInfo = usePageInfoStore()
  const route = useRoute()

  onBeforeMount(() => {
    setPageInfo()
  })

  function setPageInfo() {
    // スラッシュがある場合、スラッシュ前の文字列を切り取って使う
    const pattern = /([^\/]+?)(?:\/|$)/
    const pageID = route.path?.toString().match(pattern)?.[1] ?? ''
    pageInfo.setPageId(pageID)
    pageInfo.setPageName(VIEWS_INFO[pageID]?.SCREEN_NAME ?? '')
  }

  return {
    pageName: computed<string>(() => pageInfo.pageName),
    pageId: computed<string>(() => pageInfo.pageId),
  }
}
