import type { RouteRecordRaw } from 'vue-router'
import { SPECIAL_PAGES } from '@/router/constant'

export const menu: RouteRecordRaw = {
  path: '/',
  name: SPECIAL_PAGES.MENU,
  component: () => import('@/views/Menu.vue'),
}

export default menu
