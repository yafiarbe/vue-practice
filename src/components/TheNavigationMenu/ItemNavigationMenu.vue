<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ChildrenNavigationMenu from '@/components/TheNavigationMenu/ChildrenNavigationMenu.vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { inject } from 'vue'

const menuBtn = inject('menuStatus')
const menuBtnRef = ref(menuBtn)

const props = defineProps({
  routers: {}
})
const propRout = ref(props.routers)
</script>

<template>
  <ul
    id="list-items"
    :class="{ hidden: menuBtnRef, hidden: !menuBtnRef }"
    class="bg-orange-800 text-white p-8 overflow-auto ml-0 md:w-1/2 lg:w-1/3"
  >
    <li v-for="(item, index) in propRout" :key="item.name + index">
      <div class="h-10 flex items-center justify-between md:hover:pl-2 transition-all">
        <RouterLink
          class="flex-grow h-full flex items-center uppercase font-bold font-FjallaOne tracking-widest"
          @click="menuBtnRef = !menuBtnRef"
          :to="{ name: item.name }"
          >{{ item.name }}</RouterLink
        >
        <div class="h-10 w-10 cursor-pointer pointer-events-auto">
          <ChevronDownIcon
            class="h-full transition-all"
            v-if="item.children.length"
            :class="{ '-rotate-90': !item.open, 'rotate-0': item.open }"
            @click="item.open = !item.open"
          />
        </div>
      </div>

      <ChildrenNavigationMenu
        v-if="item.children.length && item.open"
        :childrensProps="item.children"
        :perentProps="item.path"
        class="bg-orange-900 border-2 border-white/30 rounded-lg p-4 pl-6 mx-0"
      />
    </li>
  </ul>
</template>

<style scoped>
#list-items {
  height: calc(100dvh - 56px);
}
</style>
