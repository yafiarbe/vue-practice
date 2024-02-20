<script setup>
/* Импорты */
import { inject } from 'vue'
import { RouterLink } from 'vue-router'
import ItemNavigationMenu from '@/components/TheNavigationMenu/ItemNavigationMenu.vue'
import { Bars4Icon } from '@heroicons/vue/24/solid'
import router from '@/router/index.js'
console.log('router', router)

/* Переменные */
const routers = router.options.routes
console.log('routers', routers)

/* функционал кнопки бургер меню (toggle) */
const menuBtn = inject('menuStatus')
const toggleMenu = () => {
  menuBtn.value = !menuBtn.value
}
</script>

<template>
  <nav class="h-full">
    <!-- Голова меню -->
    <div
      class="h-full flex justify-between items-center px-2 text-white uppercase font-bold font-FjallaOne tracking-widest"
    >
      <RouterLink to="/" class=""
        >Kill Teams Archives</RouterLink
      >
      <div>ENG</div>
      <button
        @click="toggleMenu"
        class="flex items-center gap-2 uppercase text-lg active:scale-90 transition-all border-2 rounded-md py-1.5 px-3"
      >
        <span class="hidden md:block">MENU</span> <Bars4Icon class="h-6 w-6" />
      </button>
    </div>
    <!-- Тело меню -->
    <div>
      <ItemNavigationMenu :routers="routers" />
    </div>
  </nav>
</template>

<style scoped></style>
