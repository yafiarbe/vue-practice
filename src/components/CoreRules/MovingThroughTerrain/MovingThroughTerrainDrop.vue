<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
import MovingThroughTerrainFlyingOverTerrain from './MovingThroughTerrainFlyingOverTerrain.vue'
</script>

<template>
  <div id="moving-through-terrain-drop">
    <h4>Drop</h4>
    <p>
      A drop is when an operative descends from height without climbing. The operative must be
      within of the edge of the terrain feature it will drop from, and the intended location must be
      vertically within 3 of the level it occupies. The operative can drop from that terrain feature
      counting the vertical distance it travels towards the total distance it moves. The vertical
      distance is measured in increments of , rounding down. Note that a total vertical distance of
      less than is therefore ignored. An operative can perform a Dash action during a drop in order
      to reach its intended destination.
    </p>
    <p>
      Remember that an operative cannot move through any part of another operative’s base (unless it
      can FLY) Therefore if the intended location has any operatives that would prevent the
      operative moving in that direction, it cannot make the drop.
    </p>

    <MovingThroughTerrainFlyingOverTerrain />

    <div class="inline-flex flex-col border-2 border-orange-500 p-4 my-4 bg-slate-200">
      <picture class="flex justify-center">
        <img
          src="@/assets/image/core-rules/killzones/MovingThroughTerrain5.webp"
          alt="Moving Through Terrain"
        />
      </picture>
      <div>
        <ol class="list-decimal marker:font-bold">
          <li>
            The operative intends to drop to the next level. It first moves
            <InchIcons :count="1" :value="1" /> to be within <InchIcons :count="1" :value="1" /> of
            the edge of the terrain feature it will drop from.
          </li>
          <li>
            The operative then drops from that terrain feature. The horizontal distance it moves is
            measured as normal. The vertical distance it moves is more than
            <InchIcons :count="1" :value="2" /> but less than <InchIcons :count="2" :value="2" />.
            As increments are rounded down, it moves
            <InchIcons :count="1" :value="2" />
            vertically.
          </li>
          <li>
            After the model has finished the drop, it can complete its move as normal with any
            remaining M characteristic it has.
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
