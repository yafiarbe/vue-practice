<script setup>
import { RouterLink } from 'vue-router'
import TheNavigationMenu from '@/components/TheNavigationMenu/TheNavigationMenu.vue'
import { Bars4Icon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import GlobalVariables from '@/GlobalVariables.js'

/* Функционал кнопки меню */
// const menuIsOpen = ref(false)
const eventpointer = ref('overflow-hidden')
const body = document.querySelector('body')
const classForMenu = ref('right-0')

// Когда меню закрыто
if (window.innerWidth < 640) {
  classForMenu.value = '-right-[100%]'
} else {
  classForMenu.value = '-right-[34%]'
}

const toggleMenu = () => {
  GlobalVariables.IsOpenMenu = !GlobalVariables.IsOpenMenu
  body.classList.toggle(eventpointer.value)

  if (GlobalVariables.IsOpenMenu) {
    classForMenu.value = 'right-0'
    // Когда меню открыто
  } else {
    // Когда меню закрыто
    if (window.innerWidth < 640) {
      classForMenu.value = '-right-[100%]'
    } else {
      classForMenu.value = '-right-[34%]'
    }
  }
}
</script>

<template>
  <header class="bg-orange-500 w-dvw h-14 fixed">
    <!-- Блок с логотипом и кнопкой меню -->
    <div class="h-full flex justify-between items-center px-6">
      <RouterLink to="#" class="text-white uppercase font-bold">LOGO </RouterLink>
      <Bars4Icon
        class="h-10 w-10 border-2 rounded-md active:scale-75 transition-all text-white"
        @click="toggleMenu()"
      />
    </div>
    <!-- /Блок с логотипом и кнопкой меню -->
    <!-- Навигационное меню -->

    <TheNavigationMenu :class="classForMenu" />
    <!-- /Навигационное меню -->
  </header>
</template>

<style scoped></style>
