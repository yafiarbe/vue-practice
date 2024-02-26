<script setup>
import MovingThroughTerrainTraverse from '@/components/CoreRules/MovingThroughTerrain/MovingThroughTerrainTraverse.vue'
import MovingThroughTerrainJump from '@/components/CoreRules/MovingThroughTerrain/MovingThroughTerrainJump.vue'
import MovingThroughTerrainClimb from '@/components/CoreRules/MovingThroughTerrain/MovingThroughTerrainClimb.vue'
import MovingThroughTerrainDrop from '@/components/CoreRules/MovingThroughTerrain/MovingThroughTerrainDrop.vue'

</script>

<template>
  <section id="moving-through-terrain">
    <h3>Moving Through Terrain</h3>
    <p>
      As your operatives navigate the killzone, terrain features may restrict their movement. To
      manoeuvre across or over them, your operatives must traverse, climb or jump.
    </p>
    <MovingThroughTerrainTraverse />
    <MovingThroughTerrainJump />
    <MovingThroughTerrainClimb />
    <MovingThroughTerrainDrop />
  </section>
</template>

<style scoped></style>
