import type { RouteRecordRaw } from 'vue-router'

import { PAGES } from '@/router/constant'

const YCM: RouteRecordRaw[] = [
  {
    path: PAGES.YCMKMSFB31S,
    name: PAGES.YCMKMSFB31S,
    component: () => import('@/views/YCM/YCMKMSFB30/YCMKMSFB31S/YCMKMSFB31S-panel.vue'),
  },
  {
    path: PAGES.YCMKMSFB30M,
    name: PAGES.YCMKMSFB30M,
    component: () => import('@/views/YCM/YCMKMSFB30/YCMKMSFB30M/YCMKMSFB30M-panel.vue'),
  },
]
export default YCM