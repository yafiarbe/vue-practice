import { createRouter, createWebHistory } from 'vue-router'

import NavigationMenuRouter from '@/router/NavigationMenuRouter.js'

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Если есть сохраненная позиция, возвращаем ее
    if (savedPosition) {
      return savedPosition
    } else {
      // Если есть хеш, прокручиваем к якорю
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 65
        }
      }
      // В остальных случаях, прокручиваем к верху страницы
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  },
  routes: [...NavigationMenuRouter]
})

export default router

/* 

import { createRouter, createWebHistory } from 'vue-router'

import NavigationMenuRouter from '@/router/NavigationMenuRouter.js'

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Если есть сохраненная позиция, возвращаем ее
    if (savedPosition) {
      return savedPosition
    } else {
      // Если есть хеш, прокручиваем к якорю
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 65
        }
      }
      // В остальных случаях, прокручиваем к верху страницы
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  },
  routes: [...NavigationMenuRouter]
})

export default router


*/
