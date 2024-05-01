import type { RouteRecordRaw } from 'vue-router'
import { SPECIAL_PAGES } from '@/router/constant'

export const uiPage: RouteRecordRaw = {
  path: `/${SPECIAL_PAGES.UI_PAGE}`,
  name: SPECIAL_PAGES.UI_PAGE,
  component: () => import('@/views/UIPage.vue'),
}

export default uiPage
