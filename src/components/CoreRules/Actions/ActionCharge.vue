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
        Move the active operative up to a distance that does not exceed the distance equal to its
        Movement characteristic plus <InchIcons :count="1" :value="2" />.
      </li>
      <li>
        It must finish the move within Engagement Range of an enemy operative. If this is not
        possible you must choose a different action for the operative (the action points subtracted
        for the Charge action are refunded).
      </li>
      <li>
        If it moves within Engagement Range of an enemy operative, if no other friendly operatives
        are within Engagement Range of that enemy operative, it must finish the move within
        Engagement Range of that enemy operative.
      </li>
      <li>
        If an operative has a rule that allows it to perform a Charge action while within Engagement
        Range of an enemy operative, it can move out of Engagement Range of enemy operatives, but
        must still finish that move within Engagement Range of at least one enemy operative.
      </li>
    </ul>
    <p>
      An operative cannot perform this action if it has the Conceal order or if it is within
      Engagement Range of enemy operatives. In addition, an operative cannot perform this action in
      the same activation in which it performed the Normal Move, Dash or Fall Back action.
    </p>
    <div>
      <img src="../../../assets/image/core-rules/Charge.webp" alt="Charge" />
      <i>
        <ol>
          <li>
            Operative A wants to charge operative E. It first moves within Engagement Range of
            operative C. As operative C is within Engagement Range of operative B, operative A is
            free to continue.
          </li>
          <li>
            It then moves within Engagement Range of operative D. As operative D is not within
            Engagement Range of any other friendly operatives, operative A must now finish the move
            within Engagement Range of operative D.
          </li>
          <li>
            However, as operative A still has movement remaining, it can still move within
            Engagement Range of operative E, so long as it still finishes the move within Engagement
            Range of operative D.
          </li>
        </ol>
      </i>
    </div>
  </section>
</template>

<style scoped></style>
