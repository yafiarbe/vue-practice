<script setup>
/* Скрипты */
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div id="main-wrapper" class="min-h-dvh flex flex-col justify-between">
    <TheHeader />

    <main class="flex-grow pt-12 overflow-none">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
/* стили */
</style>
