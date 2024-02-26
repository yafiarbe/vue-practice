<script setup>
import router from '@/router/index.js'
import ChildrenItemMenu from '@/components/ChildrenItemMenu.vue'

const routers = router.options.routes

console.log('ROUTERS: ', routers)
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <nav>
      <ul class="flex flex-col text-xs gap-2">
        <li v-for="item of routers" :key="item.path" class="">
          <ChildrenItemMenu :parentItem="item" />
        </li>
        <!-- <li><RouterLink :to="{ name: 'about' }">About </RouterLink></li>
        <li><RouterLink :to="{ name: 'CriticalOps2022' }">CriticalOps2022</RouterLink></li> -->
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>

