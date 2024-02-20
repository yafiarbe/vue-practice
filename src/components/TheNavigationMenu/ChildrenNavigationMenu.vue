<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { inject } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
// import { inject } from 'vue'

const menuBtn = inject('menuStatus')
const menuBtnRef = ref(menuBtn)

const props = defineProps({
  childrensProps: Array,
  perentProps: String
})
const childrens = ref(props.childrensProps)
const perent = ref(props.perentProps)

console.log('childrensProps(childrens)', childrens)
console.log('perentProps(perent)', perent)
</script>

<template>
  <ul>
    <li v-for="item in childrens" :key="item.index" class="list-disc">
      <div class="h-10 w-full flex items-center justify-between">
        <RouterLink
          class="font-FjallaOne tracking-wider hover:pl-2 transition-all flex-shrink"
          :to="{ path: perent, hash: item.path }"
          @click="menuBtnRef = !menuBtnRef"
          >{{ item.name }}
        </RouterLink>
        <div class="h-8 w-8 cursor-pointer pointer-events-auto flex justify-center items-center">
          <ChevronDownIcon
            class="h-5 w-5 transition-all"
            v-if="item.children"
            :class="{ '-rotate-90': !item.open, 'rotate-0': item.open }"
            @click="item.open = !item.open"
          />
        </div>
      </div>
      <ChildrenNavigationMenu
        v-if="item.children && item.open"
        :childrensProps="item.children"
        :perentProps="perentProps"
        class="pl-6 text-sm"
      />
    </li>
  </ul>
</template>

<style scoped></style>

<!-- import { FooBar as FooBarChild } from './components' -->
