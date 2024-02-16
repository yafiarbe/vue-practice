<script setup>
import TheNavigationMenu from '@/components/TheNavigationMenu.vue'
import { Bars4Icon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpenMenu = ref(false)
console.log('isOpenMenu', isOpenMenu)
</script>

<template>
  <header class="bg-orange-500 fixed w-full">
    <div class="flex justify-between items-center h-12 pr-2">
      <RouterLink to="/" class="pl-2">
        KILL TEAM
      </RouterLink>
      <Bars4Icon class="h-8 w-8 transition-all active:scale-75" @click="isOpenMenu = !isOpenMenu" />
    </div>
    <TheNavigationMenu v-show="isOpenMenu" class=""/>
  </header>
</template>

<style scoped></style>
