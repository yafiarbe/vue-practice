<script setup>
import { RouterLink } from 'vue-router'
import router from '@/router/index.js'

const routers = router.options.routes

console.log('ROUTERS: ', routers)
console.log('ROUTERS: ', routers)
</script>

<template>
  <div class="">
    <RouterLink :to="{ name: 'home' }"> <img src="" alt="Logo" /> </RouterLink>
    <nav>
      <ul class="flex flex-col">
        <li v-for="item of routers" :key="item.path">
          <RouterLink :to="{ name: item.name }">{{ item.name }}</RouterLink>
          <ul v-if="item.children" class="ml-4">
            <li v-for="child in item.children" :key="child.path">
              <RouterLink :to="{ path: item.path, hash: child.path }">
                {{ child.name }}
              </RouterLink>
            </li>
          </ul>
        </li>
        <!-- <li><RouterLink :to="{ name: 'about' }">About </RouterLink></li>
        <li><RouterLink :to="{ name: 'CriticalOps2022' }">CriticalOps2022</RouterLink></li> -->
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
