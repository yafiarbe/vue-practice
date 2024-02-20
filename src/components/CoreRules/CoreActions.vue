<script setup>
defineProps({
  title: String,
  cost: String
})
</script>

<template>
  <div class="border-2 border-orange-500">
    <div
      class="flex bg-orange-500 justify-between items-center py-2 px-4 text-white uppercase font-FjallaOne tracking-widest"
    >
      <h5>{{ title }}</h5>
      <span>{{ cost }} AP</span>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
