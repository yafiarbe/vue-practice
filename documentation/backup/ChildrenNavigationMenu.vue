<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { inject } from 'vue'
// import { ChevronDownIcon } from '@heroicons/vue/24/solid'
// import { inject } from 'vue'

const props = defineProps({
  routers: {}
})

const propRout = ref(props.routers)
const propRoutChild = ref(props.routers.children)

const menuBtn = inject('menuStatus')
const menuBtnRef = ref(menuBtn)

console.log('child.props', props.routers)
console.log('propRoutChild', propRoutChild)
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in propRoutChild"
      :key="index"
      class="list-disc hover:pl-2 transition-all"
    >
      <div class="h-10 flex items-center">
        <RouterLink
          class="font-FjallaOne tracking-wider"
          :to="{ path: propRout.path, hash: item.path }"
          @click="menuBtnRef = !menuBtnRef"
          >{{ item.name }}</RouterLink
        >
        <div class="h-8 cursor-pointer pointer-events-auto">
          <!-- <ChevronDownIcon class="h-full transition-all" v-if="item.children" /> -->
        </div>
      </div>
      <ChildrenNavigationMenu v-if="item.children" :routers="item.children" />
    </li>
  </ul>
</template>

<style scoped></style>

<!-- import { FooBar as FooBarChild } from './components' -->
