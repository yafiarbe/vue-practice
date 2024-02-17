<script setup>
import { defineEmits, ref } from 'vue'

import { RouterLink } from 'vue-router'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import ChildrenItemMenu from '@/components/NavigationMenu/ChildrenNavigationMenu.vue'

// Получение пропсов
const props = defineProps({
  router: Object
})
const parentItem = props.router

// Отправка сигнала об закрытии меню
const emits = defineEmits(['menu-closed'])
const menuClosed = ref(false)
const toggleMenu = () => {
  if (props.menuIsOpen) {
    emits('menu-closed', menuClosed.value)
  }
}

//
</script>

<template>
  <li v-for="item of parentItem" :key="item.path">
    <div class="flex gap-2 text-white font-bold uppercase justify-between items-center text-nowrap">
      <RouterLink :to="{ name: item.name }" class="py-2 flex-grow" @click="toggleMenu">
        {{ item.name }}
      </RouterLink>
      <ChevronRightIcon class="w-6 h-6" />
    </div>
    <ChildrenItemMenu :parentItem="item" />
  </li>
</template>

<style scoped></style>
