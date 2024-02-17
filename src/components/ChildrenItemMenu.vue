<script setup>
import { RouterLink } from 'vue-router'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  parentItem: Object
})

console.log("PROPS OBJECT", props.parentItem);
</script>

<template>
  <RouterLink :to="{ name: parentItem.name }" class="flex justify-center items-center gap-5"
    >{{ parentItem.name }} <ChevronDownIcon class="w-5 h-6" />
  </RouterLink>

  <ul v-if="parentItem.children.length" class="ml-4">
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
