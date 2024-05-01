import type { RouteRecordRaw } from 'vue-router'

import { PAGES } from '@/router/constant'

const YEM: RouteRecordRaw[] = [
  {
    path: PAGES.YEMTSSF470M,
    name: PAGES.YEMTSSF470M,
    component: () => import('@/views/YEM/YEMTSSF470/YEMTSSF470M-panel.vue'),
  },
  {
    path: PAGES.YEMTSSF260M,
    name: PAGES.YEMTSSF260M,
    component: () => import('@/views/YEM/YEMTSSF260/YEMTSSF260M-panel.vue'),
  },
  {
    path: PAGES.YEMTSSF261S,
    name: PAGES.YEMTSSF261S,
    component: () => import('@/views/YEM/YEMTSSF260/YEMTSSF261S-panel.vue'),
  },
]

export default YEM
