<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
</script>

<template>
  <div id="moving-through-terrain-climb">
    <h4>Climb</h4>
    <p>
      A climb is when an operative ascends or descends a terrain feature that it cannot traverse
      across during a move. First, the operative must be within
      <InchIcons :count="1" :value="1" /> of a physical and climbable part of a terrain feature to
      climb it - a wall, pipe, chain etc. The operative can then climb that terrain feature,
      counting the distance it travels towards the total distance it moves, rounding up any
      incremental distances of less than <InchIcons :count="1" :value="2" /> to
      <InchIcons :count="1" :value="2" />.
    </p>
    <p>
      Remember that an operative must finish a move in a location it can be placed. If this is not
      possible, such as if an operative does not have a high enough Movement characteristic to reach
      its intended destination, it cannot begin the climb. This means an operative cannot finish a
      move partway through a climb. An operative can, however, perform a Dash action during a climb
      in order to reach its intended destination.
    </p>

    <div class="inline-flex flex-col border-2 border-orange-500 p-4 my-4 bg-slate-200">
      <picture class="flex justify-center">
        <img
          src="@/assets/image/core-rules/killzones/MovingThroughTerrain3.webp"
          alt="Moving Through Terrain"
        />
      </picture>
      <div>
        <ol class="list-decimal marker:font-bold">
          <li>
            An operative with an M characteristic of <InchIcons :count="3" :value="2" /> intends to
            climb onto the next level. It is within <InchIcons :count="1" :value="1" /> of a
            physical part of the terrain feature it can climb.
          </li>
          <li>
            It then climbs the terrain feature. It must move a vertical distance of more than
            <InchIcons :count="1" :value="2" /> but less than <InchIcons :count="2" :value="2" />.
            As increments are rounded up, it moves
            <InchIcons :count="2" :value="2" />
            vertically.
          </li>
          <li>
            To reach a location it can be placed, it must also move horizontally. The operative has
            <InchIcons :count="1" :value="2" /> of its M characteristic remaining, allowing it to
            move onto the next level. You could then move the operative the full
            <InchIcons :count="1" :value="2" /> distance onto the level.
          </li>
        </ol>
      </div>
    </div>

    <div class="inline-flex flex-col border-2 border-orange-500 p-4 my-4 bg-slate-200">
      <picture class="flex justify-center">
        <img
          src="@/assets/image/core-rules/killzones/MovingThroughTerrain4.webp"
          alt="Moving Through Terrain"
        />
      </picture>
      <div>
        <ol class="list-decimal marker:font-bold">
          <li value="4">
            An operative with an M characteristic of <InchIcons :count="3" :value="2" /> intends to
            climb onto the next level. It first moves <InchIcons :count="1" :value="2" /> to be
            within <InchIcons :count="1" :value="1" /> of a physical part of a terrain feature it
            can climb.
          </li>
          <li>
            It then attempts to climb the terrain feature. It must move
            <InchIcons :count="2" :value="2" /> vertically (increments rounded up) and
            <InchIcons :count="1" :value="2" /> horizontally. As this would exceed its M
            characteristic, it cannot begin the climb.
          </li>
          <li>
            If the operative has any action points remaining, however, it could perform a Dash
            action to complete the climb, so long as it hasn’t already performed a Dash action
            during its activation.
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
