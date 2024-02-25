<!-- <InchIcons :count="" :value="" />  -->

<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
</script>

<template>
  <section class="p-4">
    <p>
      Move the active operative following the same rules as a Normal Move action with the following
      exceptions:
    </p>
    <ul>
      <li>
        It can only perform this action if it is within Engagement Range of an enemy operative.
      </li>
      <li>
        It can move within Engagement Range of enemy operatives, but cannot finish the move within
        Engagement Range of an enemy operative. If this is not possible, it cannot perform this
        action (the action points subtracted for the Fall Back action are refunded).
      </li>
    </ul>
    <p>
      An operative cannot perform this action in the same activation in which it performed the
      Normal Move or Charge action.
    </p>
    <div>
      <img src="../../assets/image/core-rules/FallBack.webp" alt="Fall Back Example" />
      <p><i> Operative A is performing a Fall Back action. It can move within Engagement Range of operative B, and can move within Engagement Range of operative C, but cannot finish the move within Engagement Range of operative B or C, as it cannot finish the move within Engagement Range of an enemy operative. </i></p>
    </div>
  </section>
</template>

<style scoped></style>
