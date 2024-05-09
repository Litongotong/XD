import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/internal/Home/index.vue'),
  },
  {
    path: '/view/:pageId',
    component: () => import('@/views/internal/View/index.vue'),
  },
  {
    path: '/dev',
    component: () => import('@/views/internal/Dev/index.vue'),
  },
  {
    path: '/dev-test',
    component: () => import('@/views/internal/Dev/test.vue'),
  },
  {
    path: '/login-page',
    component: () => import('@/views/internal/Login/index.vue'),
  },
]
