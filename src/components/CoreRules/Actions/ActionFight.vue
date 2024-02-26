<script setup>
import ImportantContent from '@/components/ImportantContent.vue'
</script>

<template>
  <section class="p-4">
    <p>
      Fight in combat with the active operative against an enemy operative. An operative cannot
      perform this action unless it is within Engagement Range of an enemy operative. To fight in
      combat, complete the fight sequence as follows:
    </p>
    <hr />
    <p>
      In the fight sequence, the player controlling the active operative is the attacker. The player
      controlling the target operative is the defender.
    </p>
    <hr />
    <h4>1. SELECT VALID TARGET</h4>
    <p>
      The attacker selects a valid target for combat. A valid target is an enemy operative in the
      active operative’s Engagement Range. The rules for determining if the target operative is
      Visible can be found here. If there are no valid targets for combat, the Fight action cannot
      be resolved and you must choose a different action for the operative (the action points
      subtracted for the Fight action are refunded).
    </p>
    <h4>2. SELECT MELEE WEAPONS</h4>
    <p>
      The attacker selects one melee weapon their operative is equipped with and collects their
      attack dice. The defender then selects one melee weapon their operative is equipped with and
      collects their attack dice. Each player’s attack dice are a number of D6 equal to their
      selected weapon’s Attacks characteristic.
    </p>
    <h4>3. ROLL ATTACK DICE</h4>
    <p>
      Both players roll their attack dice simultaneously. Each result that equals or beats their
      selected weapon’s Weapon Skill characteristic is a successful hit and is retained. Each that
      doesn't is a failed hit and is discarded. A result of 6 is always a successful hit and a
      result of 1 is always a failed hit. Keep track of each retained result of 6 - this is a
      critical hit. Each other retained success is a normal hit.
    </p>

    <h4>4. RESOLVE SUCCESSFUL HITS</h4>
    <p>
      Starting with the attacker, each player alternates resolving one of their successful hits.
      They repeat this process until one operative in that combat is incapacitated or they have no
      more hits to resolve, in which case their opponent resolves all of their remaining hits. To
      resolve a successful hit, they select one of their retained attack dice, choose for their
      operative to strike or parry, then discard that attack dice.
    </p>
    <p class="!mb-0">If they parry, one of their opponent’s successful hits is discarded.</p>
    <ul>
      <li>
        If the attack dice they select is a normal hit, they select one of their opponent’s normal
        hits to be discarded.
      </li>
      <li>
        If the attack dice they select is a critical hit, they select one of their opponent’s normal
        hits or critical hits to be discarded.
      </li>
    </ul>
    <p class="!mb-0">If they strike, inflict damage on the target.</p>
    <ul>
      <li>
        If the attack dice they select is a normal hit, inflict damage equal to their selected
        weapon’s Normal Damage.
      </li>
      <li>
        If the attack dice they select is a critical hit, inflict damage equal to their selected
        weapon’s Critical Damage.
      </li>
    </ul>
    <ImportantContent сaption="COMBAT SUPPORT">
      <p>
        Each time an operative fights in combat, for each other friendly operative that supports
        them in that combat, improve the Weapon Skill characteristic of melee weapons they are
        equipped with by 1 for that combat. For a friendly operative to support them, it must be
        within Engagement Range of the enemy operative in that combat and not within Engagement
        Range of other enemy operatives.
      </p>
    </ImportantContent>
    <hr />
    <ol class="list-decimal marker:font-bold">
      <li>
        <p>
          The Kommando fights in combat. The attacker, the Kommando’s controlling player, selects
          the Veteran Guardsman as the target. The attacker selects the Kommando’s choppa as the
          melee weapon to fight in the combat with and collects four attack dice. The defender, the
          Veteran Guardsman’s controlling player, then selects the Veteran Guardsman’s bayonet and
          collects three attack dice.
        </p>
      </li>
      <li>
        <p>The attacker and defender roll their attack dice simultaneously. The attacker rolls:</p>
        <div class="flex justify-start">
          <img src="../../../assets/image/core-rules/Fight_d1.webp" alt="Dice Example" />
        </div>
        <p>
          The results of 1 and 2 are discarded as they do not equal or beat the weapon’s WS
          characteristic, and the rest are retained as successful hits.
        </p>
        <p>The defender rolls:</p>
        <div class="flex justify-start">
          <img src="../../../assets/image/core-rules/Fight_d2.png" alt="Dice Example" />
        </div>
        <p>
          The result of 1 is discarded as it does not equal or beat the weapon’s WS characteristic,
          and the rest are retained as successful hits.
        </p>
        <div>
          <div class="flex justify-center">
            <img src="../../../assets/image/core-rules/CombatSupport1.webp" alt="Dice Example" />
          </div>
          <p>
            <i
              >Operative C and operative B are fighting in a combat. As operative A is within
              Engagement Range of operative B and not within Engagement Range of other enemy
              operatives, the WS characteristic of operative C’s melee weapons are improved by 1 for
              that combat.</i
            >
          </p>
        </div>
      </li>
      <li>
        <p>
          The attacker resolves a successful hit first. They select their attack dice result of 6
          and choose to parry. As the retained attack dice is a critical hit, they select their
          opponent’s critical hit to be discarded. The defender then resolves a successful hit. They
          select their attack dice result of 4 and choose to strike. As the retained attack dice is
          a normal hit, they inflict Normal Damage on the Kommando. The attacker’s remaining attack
          dice is now...
        </p>
        <div class="flex justify-start">
          <img src="../../../assets/image/core-rules/Fight_d3.png" alt="Dice Example" />
        </div>
        <p>...and the defender has no remaining attack dice:</p>
      </li>
      <div class="flex justify-start">
        <img src="../../../assets/image/core-rules/Fight_d4.png" alt="Dice Example" />
      </div>
      <li>
        <p>
          4. The attacker resolves a successful hit again. They select their remaining attack dice
          result of 4 and choose to strike. As the retained attack dice is a normal hit, they
          Inflict Normal Damage on the Veteran Guardsman. Both players now have no remaining attack
          dice. The Veteran Guardsman operative has lost a total of 4 wounds and the Kommando
          operative has lost a total of 2 wounds.
        </p>
        <div>
          <div class="flex justify-center">
            <img src="../../../assets/image/core-rules/CombatSupport2.webp" alt="Dice Example" />
          </div>
          <p>
            <i
              >Operative C and operative B are fighting in a combat. As operative A and operative D
              are within Engagement Range of operative B and not within Engagement Range of other
              enemy operatives, the WS characteristic of operative C’s melee weapons are improved by
              2 for that combat. As operative E is within Engagement Range of operative C and not
              within Engagement Range of other enemy operatives, the WS characteristic of operative
              B’s melee weapons are improved by 1 for that combat.</i
            >
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>
