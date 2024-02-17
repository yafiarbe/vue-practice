import { createRouter, createWebHistory } from 'vue-router'

import NavigationMenuRouter from '@/router/NavigationMenuRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to /* from, savedPosition */) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 56
      }
    }
  },
  routes: [...NavigationMenuRouter]
})

export default router
