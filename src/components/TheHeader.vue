<script setup>
import { RouterLink } from 'vue-router'
import { HomeIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'

</script>

<template>
  <header>
    <nav
      class="w-full bg-gradient-to-b from-orange-400 to-orange-500 flex justify-center items-center gap-6 py-2"
    >
      <RouterLink
        to="/"
        class="flex items-center gap-2 text-sm font-bold uppercase text-blue-100 hover:text-blue-500 transition-colors"
        >Home <HomeIcon class="h-4 w-4 text-inherit" />
      </RouterLink>

      <RouterLink
        to="/about"
        class="flex items-center gap-2 text-sm font-bold uppercase text-blue-100 hover:text-blue-500 transition-colors"
        >About <InformationCircleIcon class="h-4 w-4 text-inherit" />
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.router-link-active {
  position: relative;
}
.router-link-active::after {
  content: '';
  position: absolute;
  top: -6px;
  bottom: -6px;
  left: -8px;
  right: -8px;
  /* border-left: 1px solid #dcdbdb;
  border-right: 1px solid #dcdbdb; */
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
</style>
