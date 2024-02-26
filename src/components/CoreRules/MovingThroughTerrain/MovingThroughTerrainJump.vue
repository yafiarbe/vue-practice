<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
</script>

<template>
  <div id="moving-through-terrain-jump">
    <h4>Jump</h4>
    <p>
      A jump is when an operative crosses a gap between terrain that is within horizontally and
      vertically from one edge to the other. The operative must be within of the edge of the terrain
      feature the operative will jump from. To jump, take a jump test for the operative by rolling
      one D6: on a 1, the test is unsuccessful, the operative remains where it is and that action
      ends; on a 2+, the test is successful and you can move the operative across the gap. Only the
      horizontal distance an operative moves during a jump counts towards how far it has moved. Note
      that an operative cannot jump instead of climbing. If an operative simply wishes to ascend or
      descend a terrain feature, it must drop or climb instead.
    </p>
    <p>
      Remember that an operative must finish a move in a location it can be placed. If this is not
      possible, such as if an operative does not have enough Movement to reach its intended
      destination, it cannot attempt the jump.
    </p>

    <picture class="flex justify-center">
      <img
        src="@/assets/image/core-rules/killzones/MovingThroughTerrain2.webp"
        alt="Moving Through Terrain"
      />
    </picture>
    <p>
      The operative intends to cross a gap between two terrain features without dropping and/or
      climbing. The operative is within <InchIcons :count="1" :value="1" /> of the edge of the
      terrain feature it will jump from. The gap is within
      <InchIcons :count="1" :value="3" /> horizontally and
      <InchIcons :count="1" :value="2" /> vertically from one edge to the other. The operative’s
      controlling player rolls one D6 and the result is a 5, therefore the test is successful. The
      operative moves across the gap, and only the horizontal distance it travels is counted for the
      move.
    </p>
  </div>
</template>

<style scoped></style>
