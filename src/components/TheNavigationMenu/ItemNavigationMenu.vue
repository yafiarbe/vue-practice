<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ChildrenNavigationMenu from '@/components/TheNavigationMenu/ChildrenNavigationMenu.vue'
// import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { MinusIcon } from '@heroicons/vue/24/solid'
import { PlusIcon } from '@heroicons/vue/24/solid'
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
    class="ml-0 overflow-auto bg-orange-800 p-8 text-white md:w-1/2 lg:w-1/3"
  >
    <li
      v-for="(item, index) in propRout"
      :key="item.name + index"
      class="m-0 border-b-2 border-white/10 transition-all duration-300 last-of-type:border-none hover:py-2"
    >
      <div class="flex h-10 items-center justify-between">
        <RouterLink
          class="flex h-full flex-grow items-center font-FjallaOne font-bold uppercase tracking-widest"
          @click="menuBtnRef = !menuBtnRef"
          :to="{ name: item.name }"
          >{{ item.name }}</RouterLink
        >
        <div
          v-if="item.children.length"
          class="pointer-events-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-transparent transition-all duration-500 md:border-2"
        >
          <PlusIcon
            v-if="!item.open"
            @click="item.open = !item.open"
            class="w-3/6 opacity-50 transition-all duration-500"
          />
          <MinusIcon
            v-if="item.open"
            @click="item.open = !item.open"
            class="w-3/6 opacity-50 transition-all duration-500"
          />
        </div>
      </div>

      <ChildrenNavigationMenu
        v-if="item.children.length && item.open"
        :childrensProps="item.children"
        :perentProps="item.path"
        class="mx-0 rounded-lg border-2 border-white/30 bg-orange-900 p-4 pl-6"
      />
    </li>
  </ul>
</template>

<style scoped>
#list-items {
  height: calc(100dvh - 56px);
}

li > div > a {
  @apply transition-all duration-300 md:hover:pl-3;
}

li:hover svg {
  @apply w-5/6 opacity-100;
}

li:hover > div > div {
  @apply border-white;
}
</style>
