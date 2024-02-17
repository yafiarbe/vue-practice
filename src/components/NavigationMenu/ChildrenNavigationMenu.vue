<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  parentItem: Object
})

</script>

<template>
  <ul v-if="parentItem.children" class="ml-4">
    <li v-for="child in parentItem.children" :key="child.path">
      <RouterLink :to="{ path: parentItem.path, hash: child.path }">
        {{ child.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>

<!-- 

<ChildrenItemMenu parentItem='' />

-->
