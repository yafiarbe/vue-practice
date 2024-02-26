<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
</script>

<template>
  <div id="moving-through-terrain-traverse">
    <h4>Traverse</h4>
    <p>
      A traverse is when an operative must clear a small obstacle in their way such as a barricade
      or pipe. During an operative’s move, it can ascend and descend terrain with the Traversable
      trait at a cost of <InchIcons :count="1" :value="2" />, but cannot finish a move on top of it.
      If this is not possible, it cannot traverse it - it must move around it instead. Note that a
      traverse is not a climb - the operative simply vaults over the obstacle in their way as it
      moves horizontally across the killzone.
    </p>

    <picture class="flex justify-center">
      <img
        src="@/assets/image/core-rules/killzones/MovingThroughTerrain1.webp"
        alt="Moving Through Terrain"
      />
    </picture>

    <p>
      The operative has a M characteristic of <InchIcons :count="3" :value="2" />.
      <InchIcons :count="1" :value="2" /> of its M characteristic must be used to cross the
      Traversable terrain feature, meaning the operative can move a total of
      <InchIcons :count="2" :value="2" />.
    </p>
  </div>
</template>

<style scoped></style>
