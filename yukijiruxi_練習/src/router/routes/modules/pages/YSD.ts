import type { RouteRecordRaw } from 'vue-router'

import { PAGES } from '@/router/constant'


const YSD: RouteRecordRaw[] = [
  {
    path: PAGES.YSDBSSF411S,
    name: PAGES.YSDBSSF411S,
    component: () => import('@/views/YSD/YSDBSSF411/YSDBSSF411S-panel.vue'),
  },
  {
    path: PAGES.YSDJSSF010M,
    name: PAGES.YSDJSSF010M,
    component: () => import('@/views/YSD/YSDJSSF010/YSDJSSF010M-panel.vue'),
  },
]

export default YSD

