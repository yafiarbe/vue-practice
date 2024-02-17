<script setup>
import ItemNavigationMenu from '@/components/NavigationMenu/ItemNavigationMenu.vue'

import router from '@/router/index.js'
const routers = router.options.routes
console.log('ROUTERS in TheNavigationMenu: ', routers)
</script>

<template>
  <nav>
    <ul>
      <ItemNavigationMenu :router="routers" />
    </ul>
  </nav>
</template>

<style scoped></style>
