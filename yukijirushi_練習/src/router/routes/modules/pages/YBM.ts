import type { RouteRecordRaw } from 'vue-router'

import { PAGES } from '@/router/constant'

const YBM: RouteRecordRaw[] = [
  {
    path: PAGES.YBMKKSF620M,
    name: PAGES.YBMKKSF620M,
    component: () => import('@/views/YBM/YBMKKSF620/YBMKKSF620M/YBMKKSF620M-panel.vue'),
  },
  {
    path: PAGES.YBMKKSF600S,
    name: PAGES.YBMKKSF600S,
    component: () => import('@/views/YBM/YBMKKSF600/YBMKKSF600S-panel.vue'),
  },
]
export default YBM