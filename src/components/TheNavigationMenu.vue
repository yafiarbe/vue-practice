<script setup>
import { RouterLink } from 'vue-router'
import router from '@/router/index.js'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'


const routers = router.options.routes

console.log('ROUTERS: ', routers)
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <nav>
      <ul class="flex flex-col text-xs gap-2">
        <li v-for="item of routers" :key="item.path" class="">
          <RouterLink :to="{ name: item.name }" class="flex justify-center items-center gap-5"
            >{{ item.name }} <ChevronDownIcon class="w-5 h-6" />
          </RouterLink>

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
