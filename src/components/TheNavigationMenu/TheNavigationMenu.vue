<script setup>
/* Импорты */
import { inject } from 'vue'
import { RouterLink } from 'vue-router'
import ItemNavigationMenu from '@/components/TheNavigationMenu/ItemNavigationMenu.vue'
import { Bars4Icon } from '@heroicons/vue/24/solid'

import router from '@/router/index.js'

/* Переменные */
const routers = router.options.routes

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
      class="flex h-full items-center justify-between px-2 font-FjallaOne font-bold uppercase tracking-widest text-white"
    >
      <RouterLink to="/" class="">Kill Teams Archives</RouterLink>
      <div>ENG</div>
      <button
        @click="toggleMenu"
        class="flex items-center gap-2 rounded-md border-2 px-3 py-1.5 text-lg uppercase transition-all active:scale-90"
      >
        <span class="hidden md:block">MENU</span> <Bars4Icon class="h-6 w-6" />
      </button>
    </div>
    <!-- Тело меню -->
    <div class="md:flex md:justify-end">
      <ItemNavigationMenu :routers="routers" />
    </div>
  </nav>
</template>

<style scoped>
ul::-webkit-scrollbar {
  width: 0px; /* ширина всей полосы прокрутки */
}
</style>
