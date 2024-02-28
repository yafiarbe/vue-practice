<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { inject } from 'vue'
import { MinusIcon } from '@heroicons/vue/24/solid'
import { PlusIcon } from '@heroicons/vue/24/solid'

const menuBtn = inject('menuStatus')
const menuBtnRef = ref(menuBtn)

const props = defineProps({
  childrensProps: Array,
  perentProps: String
})
const childrens = ref(props.childrensProps)
const perent = ref(props.perentProps)
</script>

<template>
  <ul>
    <li v-for="item in childrens" :key="item.index" class="list-disc">
      <div class="flex h-10 w-full items-center justify-between">
        <RouterLink
          class="child-router-link flex-shrink font-FjallaOne tracking-wider transition-all hover:pl-2"
          :to="{ path: perent, hash: item.path }"
          @click="menuBtnRef = !menuBtnRef"
          >{{ item.name }}
        </RouterLink>
        <div
          v-if="item.children"
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
        v-if="item.children && item.open"
        :childrensProps="item.children"
        :perentProps="perentProps"
        class="text-sm"
      />
    </li>
  </ul>
</template>

<style scoped>
.child-router-link {
  width: calc(100% - 32px);
}

li > div > a {
  @apply transition-all duration-300 md:hover:pl-3;
}

li:hover svg {
  @apply w-5/6 opacity-100;
}

li:hover > div > div {
  @apply border-white border-opacity-70;
}
</style>
