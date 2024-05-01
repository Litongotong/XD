import type { RouteRecordRaw } from 'vue-router'

import { PAGES } from '@/router/constant'

const FWC: RouteRecordRaw[] = [
  {
    path: PAGES.YCSCMNF070M,
    name: PAGES.YCSCMNF070M,
    component: () => import('@/views/FWC/YCSCMNF070M/YCSCMNF070M-panel.vue'),
  },
]

export default FWC
