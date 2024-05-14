import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  // mock login page for testing
  {
    path: '/',
    component: () => import('@/views/internal/MockLogin/index.vue'),
  },
  // raw page by pageId
  {
    path: '/view/:pageId',
    component: () => import('@/views/internal/View/index.vue'),
  },
  // dev page
  {
    path: '/dev',
    component: () => import('@/views/internal/Dev/index.vue'),
  },
  {
    path: '/dev-test',
    component: () => import('@/views/internal/Dev/test.vue'),
  },
  // mock menu page
  {
    path: '/menu',
    component: () => import('@/views/internal/MockMenu/index.vue'),
  },
  /** 仮ログイン画面でのために、一時的に追加 */
  {
    path: '/test-page',
    component: () => import('@/views/YEM/YEMTSSF260MPanel.vue'),
  },
]
