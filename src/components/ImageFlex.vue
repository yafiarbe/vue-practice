<script setup>
defineProps({
  url: String,
  text: String
})
</script>

<template>
  <picture class="flex justify-center">
    <slot></slot>
  </picture>
</template>
