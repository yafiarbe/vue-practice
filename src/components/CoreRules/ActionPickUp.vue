<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
</script>

<template>
  <section class="p-4">
    <p>
      To perform this action, an operative must be within <InchIcons :count="1" :value="1" /> of an
      objective marker or token that the Pick Up action can be performed upon. Remove that objective
      marker or token from the killzone; the acting operative is now carrying it. While an operative
      is carrying an objective marker or token, it is always in control of it, and unless otherwise
      specified, acts normally.
    </p>
    <p>
      An operative can drop an objective marker or token it is carrying at any point during its
      activation without subtracting any additional AP. If an operative would be removed from the
      killzone while carrying an objective marker or token, before it is removed, it must drop it.
      To drop an objective marker or token, the operative’s controlling player places the centre of
      it within <InchIcons :count="1" :value="1" /> of and Visible to the operative. If that is not
      possible, they must place it in a location that is Visible and as close as possible to the
      operative.
    </p>
    <p>
      An operative cannot perform the Pick Up action if it is within Engagement Range of an enemy
      operative, if it does not control that objective marker or token, or if it is already carrying
      another objective marker or token.
    </p>
  </section>
</template>
