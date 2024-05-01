import type { RouteRecordRaw } from 'vue-router'

import { PAGES } from '@/router/constant'

const YPM: RouteRecordRaw[] = [
  {
    path: PAGES.YPMGSSF701S,
    name: PAGES.YPMGSSF701S,
    component: () => import('@/views/YPM/YPMGSSF700/YPMGSSF701S-panel.vue'),
  },
  {
    path: PAGES.YPMGNSF330M,
    name: PAGES.YPMGNSF330M,
    component: () => import('@/views/YPM/YPMGNSF330/YPMGNSF330M-panel.vue'),
  },
  {
    path: `${PAGES.YPMSGSF070M}?mode=1`,
    name: `${PAGES.YPMSGSF070M}_mode1`,
    component: () => import('@/views/YPM/YPMSGSF070/YPMSGSF070M-panel.vue'),
  },
  {
    path: `${PAGES.YPMSGSF070M}?mode=2`,
    name: `${PAGES.YPMSGSF070M}_mode2`,
    component: () => import('@/views/YPM/YPMSGSF070/YPMSGSF070M-panel.vue'),
  },
  {
    path: `${PAGES.YPMSGSF070M_WIJMO}`,
    name: PAGES.YPMSGSF070M_WIJMO,
    component: () =>
      import('@/views/YPM/YPMSGSF070_wijmo/YPMSGSF070M-panel.vue'),
  },
  {
    path: `${PAGES.YPMSGSF070M}`,
    name: PAGES.YPMSGSF070M_TRANSLATE,
    component: () =>
      import('@/views/YPM/YPMSGSF070_translate/YPMSGSF070M-panel.vue'),
  },
  {
    path: PAGES.YPMGSSF060M,
    name: PAGES.YPMGSSF060M,
    component: () => import('@/views/YPM/YPMGSSF060/YPMGSSF060M-panel.vue'),
  },
]

export default YPM
