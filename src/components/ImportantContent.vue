<script setup>
defineProps({
  сaption: String
})
</script>

<template>
  <div class="bg-orange-600 p-2">
    <h5 class="text-white">{{ сaption }}</h5>
    <div class="text-white">
      <slot></slot>
    </div>
  </div>
</template>
