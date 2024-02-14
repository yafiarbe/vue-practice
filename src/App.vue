<script setup>
/* Скрипты */
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div id="main-wrapper" class="min-h-dvh flex flex-col justify-between">
    <TheHeader />
    <!-- Отображает роуты -->
    <div class="flex-grow bg-slate-800 flex flex-col">
      <RouterView />
    </div>

    <TheFooter />
  </div>
</template>

<style scoped>
/* стили */
</style>
