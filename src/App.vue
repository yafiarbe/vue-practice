<script setup>
/* Скрипты */
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { ref, provide, watchEffect } from 'vue'

/* Функционал главного меню */
const menuStatus = ref(false)
provide('menuStatus', menuStatus)

// Переменные
const eventpointer = ref('overflow-hidden')
const body = document.querySelector('body')
const opacity = ref()

// Отслеживаем изменения menuStatus и обновляем классы и стили
watchEffect(() => {
  if (menuStatus.value) {
    body.classList.add(eventpointer.value)
    opacity.value = 'hidden '
  } else {
    body.classList.remove(eventpointer.value)
    opacity.value = 'block'
  }
})
</script>

<template>
  <div id="main-wrapper" class="min-h-dvh flex flex-col justify-between">
    <TheHeader />

    <main :class="opacity" class="flex-grow pt-12">
      <div class="container">
        <RouterView />
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
/* стили */
</style>
