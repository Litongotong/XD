import type { Router } from 'vue-router'

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`
  }

  next()
})

export default router
