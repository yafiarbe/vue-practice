<script setup>
defineProps({
  title: String
})
</script>

<template>
  <hr class="border-4"/>
  <h1 class="h1-title">{{ title }}</h1>
  <hr class="border-4"/>
</template>

<style scoped>
.h1-title {
  position: relative;
}
.h1-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 20px solid transparent;
  border-left: 20px solid #f97316;
}
.h1-title::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  border: 20px solid transparent;
  border-right: 20px solid #f97316;
}
</style>
