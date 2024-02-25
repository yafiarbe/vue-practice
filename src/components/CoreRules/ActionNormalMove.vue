<!-- <span class='icon-triangle'></span>
<span class='icon-ellipse'></span>
<span class='icon-rectangle'></span>
<span class='icon-pentagon'></span> 

<InchIcons :count="" :value="" />

-->

<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
</script>

<template>
  <section class="p-4">
    <p>
      Move the active operative up to a distance that does not exceed its Movement characteristic.
      Remember that distances can be broken down into smaller increments, so long as the total
      distance the operative moves does not exceed its Movement characteristic. The operative must
      move in straight-line increments each time it moves in a direction. An increment of movement
      can be less than <InchIcons :count="1" :value="1" /> , but such increments are still treated
      as <InchIcons :count="1" :value="1" />.
    </p>
    <hr />
    <p>
      The operative must finish the move in a location it can be placed. If this is not possible, it
      cannot move there. It cannot move over the edge of the killzone or through any part of another
      operative’s base, and it cannot move within Engagement Range of an enemy operative, unless
      another friendly operative is already within Engagement Range of that enemy operative, in
      which case it cannot finish its move within Engagement Range of that enemy operative.
    </p>
    <hr />
    <p>
      An operative cannot move through terrain features - it must traverse or climb over them. If an
      operative wishes to move across the killzone by jumping across gaps or down from ledges, it
      must jump or drop.
    </p>
    <hr />
    <p>
      An operative cannot perform this action if it is within Engagement Range of an enemy
      operative. In addition, an operative cannot perform this action in the same activation in
      which it performed the Fall Back or Charge action.
    </p>

    <div id="action-fly">
      <h5>fly</h5>
      <p>
        Each time an operative makes any kind of move, if it has the FLY keyword, it can move
        around, across and over other operatives (and their bases) as if they were not there, but
        must finish its move following all requirements specified by that move, and cannot finish
        its move on top of other operatives (or their bases).
      </p>
    </div>
    <img src="../../assets/image/core-rules/NormalMove1.webp" alt="Normal move image 1" />
    <i
      ><ol>
        <li>
          The operative’s M characteristic is <InchIcons :count="3" :value="2" />. It first moves in
          a straight line increment of <InchIcons :count="1" :value="2" /> to clear the corner of a
          wall.
        </li>
        <li>
          It then moves in a straight line increment of <InchIcons :count="2" :value="2" />, the
          remaining distance it can move without exceeding its M characteristic.
        </li>
      </ol></i
    >

    <img src="../../assets/image/core-rules/NormalMove2.webp" alt="Normal move image 2" />
    <i>
      <ol>
        <li>
          The operative’s M characteristic is <InchIcons :count="3" :value="2" />. It intends to
          stay close to the wall, therefore its movement will be measured out in different
          increments without exceeding its M characteristic. It first moves in a straight line
          increment of less than <InchIcons :count="1" :value="1" />, but as the minimum increment
          of movement is <InchIcons :count="1" :value="1" />, it is still treated as a movement of
          <InchIcons :count="1" :value="1" />.
        </li>
        <li>It then moves in a straight line increment of <InchIcons :count="2" :value="2" />.</li>
        <li>
          Finally, the operative wants to be at the corner of the wall. Its final increment of
          movement is less than <InchIcons :count="1" :value="1" />, but as before, this is rounded
          up to <InchIcons :count="1" :value="1" />. The operative’s final distance of movement is
          <InchIcons :count="2" :value="2" /> and <InchIcons :count="2" :value="1" />.
        </li>
      </ol>
    </i>
  </section>
</template>

<style scoped></style>
