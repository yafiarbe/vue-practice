import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/critical-ops-2022',
      name: 'CriticalOps2022',
      component: () => import('../views/CriticalOps2022Wiew.vue')
    }
  ]
})

export default router

/* 
Макет ссылки роутера для вставки во .vue с использование имени роутера
<RouterLink :to="{ name: 'CriticalOps2022' }" class="">Critical Ops 2022</RouterLink>
*/
