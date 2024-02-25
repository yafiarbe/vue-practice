<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
</script>

<template>
  <section class="p-4">
    <p>
      Move the active operative following the same rules as a Normal Move action with the following
      exception:
    </p>
    <ol>
      <li>It can only move up to <InchIcons :count="1" :value="3" />.</li>
    </ol>
    <p>
      An operative cannot perform this action if it is within Engagement Range of an enemy
      operative. In addition, an operative cannot perform this action in the same activation in
      which it performed a Charge action.
    </p>
  </section>
</template>
