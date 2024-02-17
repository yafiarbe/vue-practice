<script setup>
import { RouterLink } from 'vue-router'
import TheNavigationMenu from '@/components/NavigationMenu/TheNavigationMenu.vue'
import { Bars4Icon } from '@heroicons/vue/24/solid'
import { ref, onMounted } from 'vue'

/* Хуки (1. Когда компонент загружен) */
onMounted(() => {})

/* Функционал кнопки меню */
const menuIsOpen = ref(true)
const classForMenu = ref('right-0')
const overflow = ref('')

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value

  if (menuIsOpen.value) {
    classForMenu.value = 'right-0'
    overflow.value = ''
    console.log(classForMenu.value)
    // Когда меню открыто
  } else {
    // Когда меню закрыто
    classForMenu.value = '-right-[34%]'
    overflow.value = ''
    console.log(classForMenu.value)
  }
}
</script>

<template>
  <header class="bg-orange-500 w-dvw h-14 fixed">
    <!-- Блок с логотипом и кнопкой меню -->
    <div class="h-full flex justify-between items-center px-6">
      <RouterLink to="#">LOGO </RouterLink>
      <Bars4Icon
        class="h-10 w-10 border-2 rounded-md active:scale-75 transition-all"
        @click="toggleMenu()"
      />
    </div>
    <!-- /Блок с логотипом и кнопкой меню -->
    <!-- Навигационное меню -->
    <TheNavigationMenu
      :class="classForMenu"
      class="absolute w-1/3 h-dvh bg-orange-800 top-[100%] transition-all duration-300"
    />
    <!-- /Навигационное меню -->
  </header>
</template>

<style scoped></style>
