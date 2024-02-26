<script setup>
defineProps({
  url: String,
  text: String
})
</script>

<template>
  <div class="flex justify-center">
    <img :src="url" :alt="text" />
  </div>
</template>
