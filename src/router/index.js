import { createRouter, createWebHistory } from 'vue-router'

import NavigationMenuRouter from '@/router/NavigationMenuRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, /* from, savedPosition */) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  },
  routes: [...NavigationMenuRouter]
})

export default router

/* 
Макет ссылки роутера для вставки во .vue с использование имени роутера
<RouterLink :to="{ name: 'CriticalOps2022' }" class="">Critical Ops 2022</RouterLink>
*/



// const router = new VueRouter({
//   routes: [],
//   scrollBehavior(to, from, savedPosition) {
//     if (to.hash) { 
//       return { selector: to.hash }
//     } else if (savedPosition) {
//       return savedPosition
//     } else {
//       return { x: 0, y: 0 }
//     }
//   }
// })


// если есть хеш в маршруте, вернуть позицию с селектором хеша
// иначе вернуть сохраненную позицию или начало страницы