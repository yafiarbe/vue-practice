<!-- <span class='icon-triangle'></span>
<span class='icon-ellipse'></span>
<span class='icon-rectangle'></span>
<span class='icon-pentagon'></span> -->

<script setup></script>

<template>
  <section class="p-4">
    <p>
      Move the active operative up to a distance that does not exceed its Movement characteristic.
      Remember that distances can be broken down into smaller increments, so long as the total
      distance the operative moves does not exceed its Movement characteristic. The operative must
      move in straight-line increments each time it moves in a direction. An increment of movement
      can be less than --1-- , but such increments are still treated as --1--.
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

    <div>
      <h5>fly</h5>
      <p>
        Each time an operative makes any kind of move, if it has the FLY keyword, it can move
        around, across and over other operatives (and their bases) as if they were not there, but
        must finish its move following all requirements specified by that move, and cannot finish
        its move on top of other operatives (or their bases).
      </p>
    </div>
    <img src="../../assets/image/core-rules/NormalMove1.webp" alt="Normal move 1" />
    <ol>
      <li>
        The operative’s M characteristic is 3--2--. It first moves in a straight line increment of
        --2-- to clear the corner of a wall.
      </li>
      <li>
        It then moves in a straight line increment of 2--2--, the remaining distance it can move
        without exceeding its M characteristic.
      </li>
    </ol>

    <img src="../../assets/image/core-rules/NormalMove2.webp" alt="Normal move 2" />
    <ol>
      <li>
        The operative’s M characteristic is 3--2--. It intends to stay close to the wall, therefore
        its movement will be measured out in different increments without exceeding its M
        characteristic. It first moves in a straight line increment of less than --1--, but as the
        minimum increment of movement is --1--, it is still treated as a movement of --1--.
      </li>
      <li>It then moves in a straight line increment of 2--2--.</li>
      <li>
        Finally, the operative wants to be at the corner of the wall. Its final increment of
        movement is less than --1--, but as before, this is rounded up to --1--. The operative’s
        final distance of movement is 2--2-- and 2--1--.
      </li>
    </ol>
  </section>
</template>

<style scoped>
p {
  @apply mb-2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply text-orange-600 uppercase font-FjallaOne font-bold;
}

h1 {
  @apply mb-2.5 mt-6 text-3xl text-center;
}

h2 {
  @apply mb-2 mt-10 text-2xl;
}

h3 {
  @apply mb-1 mt-6 text-lg;
}

h4 {
  @apply mb-1 mt-6;
}

h5 {
  @apply mb-1 mt-6;
}

h6 {
  @apply mb-1 mt-6;
}

ul {
  @apply mb-4 list-disc ml-6;
}
li::marker {
  @apply text-orange-600;
}

ol {
  @apply mb-4 ml-6 list-decimal;
}

img {
  @apply mb-4;
}
</style>
