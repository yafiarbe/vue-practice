<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  class: String,
  default: () => 'fefe'
})

console.log(props)
</script>

<template>
  <button :class="props.class">
    <slot></slot>
  </button>
</template>

<style scoped></style>

<!-- 
  Импорт кнопки
import UiButton from '@/components/UiButton.vue'

  Елемент VUE
<UiButton
class="bg-sky-500 py-2 px-4 rounded-md text-white shadow-md align-middle leading-[0.60rem] shadow-md"
></UiButton>
-->
