<script setup>
/* SCRIPTS IMPORTS */
// import { onMounted } from 'vue'

/* COMPONENTS IMPORTS */
import CoreActions from '@/components/CoreRules/CoreActions.vue' // <CoreActions :title="" :cost=""></CoreActions>
import ActionNormalMove from '@/components/CoreRules/ActionNormalMove.vue'
import ActionCharge from '@/components/CoreRules/ActionCharge.vue'
import ActionFallBack from '@/components/CoreRules/ActionFallBack.vue'

import ActionDash from '@/components/CoreRules/ActionDash.vue'
import ActionPass from '@/components/CoreRules/ActionPass.vue'
import ActionOverwatch from '@/components/CoreRules/ActionOverwatch.vue'
import ActionPickUp from '@/components/CoreRules/ActionPickUp.vue'
import ActionShoot from '@/components/CoreRules/ActionShoot.vue'
import ActionFight from '@/components/CoreRules/ActionFight.vue'

import InchIcons from '@/components/icons/InchIcons.vue'
</script>

<template>
  <h1>Core Rules</h1>
  <article id="tools-of-war">
    <h2>tools of war</h2>

    <p>
      In order to play a battle of Warhammer 40,000: Kill Team, each player will need a collection
      of Citadel miniatures. They will also need their miniatures’ accompanying rules, known as a
      faction army list, which can be found in various Warhammer 40,000: Kill Team publications.
    </p>
    <p>
      You will also need a set of combat gauges, a killzone and some dice. You may also find it
      helpful to have tokens to use when your miniatures have acted, taken wounds or performed
      certain special actions during the game.
    </p>

    <section id="operatives-and-kill-teams">
      <h3>operatives and kill teams</h3>
      <p>
        The Citadel miniatures that a player uses in Warhammer 40,000: Kill Team are known as
        operatives. Your operatives are known as ‘friendly’ operatives and your opponent’s
        operatives are known as ‘enemy’ operatives.
      </p>
      <p>
        When you select your operatives for a battle, you are not selecting individuals, but rather
        a specialist squad that works together. This is known as your Kill Team. A list of the Kill
        Teams available to you can be found in your faction’s army list. In battle, all your
        friendly operatives are collectively referred to as your Kill Team.
      </p>
      <p>
        Once you have selected your way to play, its mission sequence will tell you when you must
        select a Kill Team for a battle. When you do, you must select one of the Kill Teams from
        your faction’s army list, then select the operatives as specified by that Kill Team. Some
        Kill Teams will specify the exact configuration of operatives it consists of. Others will
        allow you to select your own configuration of operatives (with restrictions). In either
        case, the final configuration of operatives must conform to the requirements laid out by
        that Kill Team.
      </p>
    </section>
    <section id="distances">
      <h3>distances</h3>
      <p>
        Warhammer 40,000: Kill Team captures the tactical engagement of elite operatives by using a
        collection of combat gauges listed below to measure distances. Similarly, the tense and
        timely actions of operatives is often displayed in increments. Players can use a tape
        measure or other measuring device if they wish by converting the relevant distance below
        into inches, however the game is designed for and explained with graded distances.
      </p>
      <div class="aspect-video overflow-hidden border-4 mb-2">
        <img src="../assets/image/core-rules/combat_gauges.jpg" alt="" class="object-cover" />
      </div>
      <ul>
        <li>
          <InchIcons :count="1" :value="1" /> The triangle distance is 1".
        </li>
        <li>
          <InchIcons :count="1" :value="2" /> The circle is 2".
        </li>
        <li>
          <InchIcons :count="1" :value="3" /> The square is 3".
        </li>
        <li>
          <InchIcons :count="1" :value="6" /> The pentagon is 6".
        </li>
      </ul>
      <p>
        Any distances of a symbol without a numerical value correspond to one combat gauge, e.g. .
        Multiple combat gauge distances will be specified with a numerical value, e.g. 2.
      </p>
      <p>
        Distances can be measured at any time, and can be measured out in different increments, so
        long as the total does not exceed the specified distance. For example, if an operative is
        going to be moved a distance of 3. This can be measured out as , 6, or even .
      </p>
      <p>
        Many rules, such as a Normal Move or ability, will have a distance requirement. When
        measuring distances to and from operatives, measure from the closest part of the bases of
        operatives, rather than the miniature.
      </p>
      <p>
        If a rule states that something must be ‘within’ a certain range, it is in range if the
        closest part of its base is no more than the specified distance. If a rule states something
        must be ‘wholly within’ a certain range, it is in range if every part of its base is no more
        than the specified distance. An operative is always within and wholly within range of
        itself.
      </p>
    </section>
    <section id="killzon">
      <h3>killzones</h3>
      <p>
        A killzone is the playing area in which your operatives wage war. Games of Warhammer 40,000:
        Kill Team are designed to be played on a 30" by 22" area, which is the size of a kill team
        gameboard. A killzone will also contain various terrain features that add excitement and
        tactical depth to your games. Terrain is explained in more detail <a href="#">here</a>.
      </p>
    </section>
    <section id="dice">
      <h3>DICE</h3>
      <p>
        Warhammer 40,000: Kill Team uses six-sided dice (D6). Rolling a dice will give you a value,
        known as the result, which will determine the success or failure of your operatives’ deeds.
        Some rules refer to a D3. In such cases, roll one D6 and halve the value (rounding fractions
        up) to determine the result.
      </p>
      <p>
        Many rules require a certain result to succeed, such as attacking. For example, to make a
        successful roll, you might need a 3+. This means the result must be three or higher to
        succeed, so a dice roll value of 3, 4, 5 or 6 succeeds, whereas a dice roll value of 1 or 2
        fails.
      </p>
      <p>
        Some rules allow you to re-roll a dice roll. You can never re-roll a dice more than once,
        and you cannot select the original result, even if the new result is worse.
      </p>
      <p>
        Some rules instruct players to roll off. To do so, both players roll one D6, and whoever
        scores highest wins the roll-off. If there is a tie for the highest roll, make the roll-off
        again. If both players would use a rule that would allow them to re-roll their dice when
        rolling off, both players must declare the use of this rule before any dice are re-rolled,
        starting with the player who lost the roll off.
      </p>
      <p>
        Some rare rules will modify the result of a roll by adding or subtracting from the result.
        All modifiers are cumulative. A dice result can be modified above or below the maximum or
        minimum possible value of the roll. For example, if a D6 value is 6 and you must add 1 to
        the result, the final result is a 7.
      </p>
    </section>
  </article>
  <article id="datacards">
    <h2>datacards</h2>
    <p>
      Each operative in your Kill Team has its own set of individual rules known as a datacard. It
      states all the key characteristics of your operatives and the weapons they are equipped with,
      and details anything unique they can do. You will find an example datacard and details of what
      information it provides below. All of the terms below are then explained in this section.
    </p>
    <div class="aspect-video overflow-hidden border-4">
      <img src="../assets/image/core-rules/datacard.png" alt="datacards" />
    </div>

    <section id="operative-type">
      <h3>1. operative type</h3>
      <p>The type of the operative.</p>
    </section>
    <section id="physical-profile">
      <h3>2. physical profile</h3>
      <ul>
        <li>
          <strong>Movement (M):</strong> The speed at which the operative moves across the killzone,
          represented by a distance value
        </li>
        <li>
          <strong>Action Point Limit (APL):</strong> The number of action points an operative
          generates when it is activated, which are used to perform actions.
        </li>
        <li>
          <strong>Group Activation (GA):</strong> Most operatives are activated individually, but
          some operatives must be activated in a group. This number states how many of these
          operatives are activated together.
        </li>
        <li>
          <strong>Defence (Df):</strong> How many attacks the operative can defend each time another
          operative attacks it with a ranged weapon.
        </li>
        <li>
          <strong>Save (Sv):</strong> How likely the operative is to avert an attack each time
          another operative attacks it with a ranged weapon, represented by the result required when
          rolling a D6. Note that a lower result is a better characteristic.
        </li>
        <li>
          <strong>Wounds (W):</strong> How many wounds an operative can lose before it is
          incapacitated. This is explained here.
        </li>
      </ul>
    </section>
    <section id="ranged-weapons-profile">
      <h3>3. ranged weapons profile</h3>
      <p>
        The ranged weapons the operative can be equipped with, and their characteristics and rules
        when shooting.
      </p>
      <ul>
        <li><strong>Name: </strong>The name of the weapon.</li>
        <li>
          <strong>Attacks (A): </strong>The number of attack dice to roll when the operative attacks
          with this weapon.
        </li>
        <li>
          <strong>Ballistic Skill (BS): </strong>How accurate the operative is when attacking with
          this weapon, represented by the result required when rolling a D6. Note that a lower
          result is a better characteristic.
        </li>
        <li>
          <strong>Damage (Dmg): </strong>The amount of damage each attack dice can inflict. The
          first value is the Normal Damage characteristic. The second value is the Critical Damage
          characteristic.
        </li>
        <li>
          <strong>Special Rules (SR): </strong>Any special rules that apply each time the operative
          attacks with this weapon. Common special rules are explained here. Special rules marked
          with a * are explained on the operative’s datacard.
        </li>
        <li>
          <strong>Critical Hit Rules (!): </strong>Any additional effects the weapon can cause with
          critical hits.
        </li>
      </ul>
    </section>
    <section id="melee-weapon-profiles">
      <h3>4. melee weapon profiles</h3>
      <p>
        The melee weapons the operative can be equipped with, and their characteristics and rules
        when fighting in combat.
      </p>
      <ul>
        <li><strong>Name: </strong>The name of the weapon.</li>
        <li>
          <strong>Attacks (A): </strong>
          The starting number of attack dice to roll when the operative attacks with this weapon.
        </li>
        <li>
          <strong>Weapon Skill (WS): </strong>
          How accurate and skilled the operative is when attacking with this weapon, represented by
          the result required when rolling a D6. Note that a lower result is a better
          characteristic.
        </li>
        <li>
          <strong>Damage (Dmg): </strong>
          The amount of damage each attack dice can inflict. The first value is the Normal Damage
          characteristic. The second value is the Critical Damage characteristic.
        </li>
        <li>
          <strong>Special Rules (SR): </strong>
          Any special rules that apply each time the operative attacks with this weapon. Common
          special rules are explained here. Special rules marked with a * are explained on the
          operative’s datacard.
        </li>
        <li>
          <strong>Critical Hit Rules (!): </strong>
          Any additional effects the weapon can cause with critical hits.
        </li>
      </ul>
    </section>
    <section id="abilities">
      <h3>5. abilities</h3>
      <ul>
        <li>
          Some abilities will only affect operatives with the relevant keywords, as explained below.
        </li>
        <li>
          An operative gains no benefit from the same ability from two different operatives - that
          ability only applies once.
        </li>
      </ul>
    </section>
    <section id="unique-actions">
      <h3>6. unique actions</h3>
      <p>
        Any unique actions the operative can perform, in addition to the universal actions available
        to all operatives. Actions are explained here.
      </p>
    </section>
    <section id="keywords">
      <h3>7. keywords</h3>
      <ul>
        <li>A set of keywords that help to identify the operative.</li>
        <li>
          Some rules will only affect operatives with the relevant keyword, identified by the
          KEYWORD BOLD font. For example, if a rule specifies friendly ADEPTUS ASTARTES PHOBOS
          operatives, it only affects operatives from your kill team that have both the ADEPTUS
          ASTARTES and PHOBOS keywords.
        </li>
        <li>
          Some keywords are orange and have a skull symbol, e.g. KOMMANDO. This denotes a faction
          keyword, which is used for creating a roster (Matched Roster and Narrative Dataslate).
        </li>
        <li>Pluralisation of a keyword does not affect which operative the rule applies to.</li>
        <li>
          Some operatives have selectable keywords in angular brackets, such as CHAPTER. This
          denotes a keyword that you must choose for yourself when the operative is added to your
          roster. Your choice replaces all instances of the angular bracket keyword on that
          operative’s datacard. For example, if you add an ADEPTUS ASTARTES INTERCESSOR to your
          roster and you choose for it to be from the Dark Angels Chapter, you replace the CHAPTER
          keyword in all instances on that operative’s datacard with the DARK ANGELS keyword.
        </li>
      </ul>
    </section>
    <section id="additional-information">
      <div class="bg-orange-600 px-4 py-1 text-white mb-4 rounded-tr-3xl rounded-bl-3xl">
        <h3 class="!text-white">ENGAGEMENT RANGE</h3>
        <p>
          Engagement Range is the zone of threat that operatives present to their enemies. Many
          rules in the game use Engagement Range, such as when moving and fighting. Engagement Range
          is mutual, therefore operatives are within each other’s Engagement Range if one of them is
          Visible to and within
          <InchIcons :count="1" :value="1" /> of the other.
        </p>
      </div>
      <div class="bg-orange-600 px-4 py-1 text-white mb-4 rounded-tl-3xl rounded-br-3xl">
        <h3 class="!text-white">MODIFYING CHARACTERISTICS</h3>
        <p>
          Some rules will modify the characteristics of an operative and/or their weapons. All
          modifiers to a characteristic are cumulative.
        </p>
        <p>
          If a characteristic refers to the result required when rolling a D6 (i.e. Save, Ballistic
          Skill and Weapon Skill), the modifier will specify to improve or worsen the
          characteristic. As a lower result is a better characteristic, the modifier should be
          applied accordingly. For example, if a Ballistic Skill of 4+ is worsened by 1, it would be
          modified to a 5+.
        </p>
        <p>
          If an operative’s APL is modified, it lasts until the end of its current or next
          activation (whichever comes first). Regardless of how many APL modifiers an operative is
          affected by, the total modification can never be more than -1 or +1 from its normal APL.
          For example, if an operative has an APL of 2, and two rules say to add 1 to the
          operative’s APL, until the end of its next activation it would have an APL of 3.
        </p>
      </div>
      <div class="bg-orange-600 px-4 py-1 text-white mb-4 rounded-tr-3xl rounded-bl-3xl">
        <h3 class="!text-white">NEW CORE RULE</h3>
        <p>
          The Movement characteristic cannot be modified to less than
          <InchIcons :count="2" :value="2" /> (even if injured).
        </p>
      </div>
      <div class="bg-orange-600 px-4 py-1 text-white rounded-tl-3xl rounded-br-3xl">
        <h3 class="!text-white">FIRE TEAMS</h3>
        <p>
          Many of the kill teams presented in Kill Team: Compendium require you to select your kill
          team by selecting one or two fire teams. A fire team is a collection of operatives and
          their selection requirements for the associated kill team. If your kill team consists of
          two fire teams, you can select the same fire team more than once. Many fire teams have the
          option to select a LEADER operative. When selecting your kill team, you can only include
          one LEADER operative, and in matched play, you must include one LEADER operative. Finally,
          each fire team has one or more archetypes. In such circumstances, your kill team’s overall
          archetype(s) is the archetype(s) of its fire teams.
        </p>
      </div>
    </section>
  </article>

  <article id="battle-structure" class="flex flex-col items-center">
    <h2>BATTLE STRUCTURE</h2>
    <p>
      A battle of Warhammer 40,000: Kill Team consists of four Turning Points. A Turning Point
      includes three phases, each of which must be completed in order and in full. Once all three
      phases have been completed, the next Turning Point begins, the process repeating until the
      battle ends at the end of the fourth Turning Point. The three phases are listed in order
      below, and are explained below.
    </p>

    <h4 class="text-center">TURNING POINT</h4>
    <div class="w-28 h-28 relative">
      <svg class="w-28 h-28 rotate-180 fill-orange-600" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt" height="1130.000000pt" viewBox="0 0 1280.000000 1130.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z" />
        </g>
      </svg>
      <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] font-bold text-4xl text-white">1</span>
    </div>
    <div class="border-4 w-full text-center pb-4 border-orange-600">
      <h4>INITIATIVE PHASE</h4>
      <p>
        In the Initiative phase, the players ready their kill teams and determine who has the
        initiative for the Turning Point.
      </p>
    </div>
    <div class="w-28 h-28 relative flex items-center justify-center">
      <svg class="w-28 h-28 rotate-180 fill-orange-600" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt" height="1130.000000pt" viewBox="0 0 1280.000000 1130.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z" />
        </g>
      </svg>
      <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] font-bold text-4xl text-white">2</span>
    </div>
    <div class="border-4 w-full text-center pb-4 border-orange-600">
      <h4>STRATEGY PHASE</h4>
      <p>
        In the Strategy phase, the players generate a valuable but limited resource known as Command
        Points (CPs) and spend them to use Strategic Ploys. Alternatively, they can save their CPs
        to spend on Tactical Ploys later in the battle. In addition, players may reveal certain Tac
        Ops in this phase for their kill teams to attempt.
      </p>
    </div>
    <div class="w-28 h-28 relative flex items-center justify-center">
      <svg class="w-28 h-28 rotate-180 fill-orange-600" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt" height="1130.000000pt" viewBox="0 0 1280.000000 1130.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z" />
        </g>
      </svg>
      <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] font-bold text-4xl text-white">3</span>
    </div>
    <div class="border-4 w-full text-center pb-4 border-orange-600">
      <h4>FIREFIGHT PHASE</h4>
      <p>
        In the Firefight phase, the players alternate activating operatives or groups of operatives
        to perform actions with, such as moving around the killzone, shooting the enemy with
        weapons, fighting in combats or performing unique tasks like planting explosives and
        manifesting powerful psychic powers.
      </p>
    </div>
  </article>

  <article id="initiative-phase">
    <h2>initiative phase</h2>
    <section id="ready-operatives">
      <h3>1. ready operatives</h3>
      <p>
        Each player readies all friendly operatives in the killzone by flipping their order token so
        they show an operative as ready.
      </p>
    </section>

    <section id="determine-initiative">
      <h3>2. determine initiative</h3>
      <p>
        The players determine who has the initiative for the Turning Point. During the first Turning
        Point, initiative is determined in the mission sequence of your type of play. In subsequent
        Turning Points, the players roll off and the winner decides who has the initiative, but if
        the result of the roll off is a tie, the player who did not have initiative in the previous
        Turning Point has the initiative. Use the initiative token as a reminder of who has the
        initiative.
      </p>
      <p>
        Having the initiative will give a player influence over the order of certain aspects of the
        battle, such as deciding which operative activates first during the Turning Point. If more
        than one rule would happen simultaneously, for example two rules that take effect at the end
        of a Turning Point, the player with the initiative determines the order in which they take
        effect.
      </p>
      <img src="@/assets/image/core-rules/InitiativeToken.png" alt="Initiative Token" class="" />
    </section>
  </article>

  <article id="strategy-phase">
    <h2>strategy phase</h2>
    <section id="generate-command-points">
      <h3>1. generate command points</h3>
      <p>
        Each player generates 1 Command Point (CP) and adds it to their CP pool. CPs remain in a
        player’s pool until they are spent.
      </p>
      <p>
        CPs can be spent on Strategic Ploys. They are used in the Strategy phase as described below,
        and are unique rules a cunning general can use to aid their kill team. Strategic Ploys can
        be found in your faction’s army list.
      </p>
      <p>
        CPs can also be spent on Tactical Ploys. It will specify when they should be used. Tactical
        Ploys are minor benefits that can have significant effects if used at the right time. Other
        than Command Re-roll below, each player can use each Tactical Ploy no more than once per
        Turning Point. If a Tactical Ploy is not used during a Turning Point, it is only limited by
        the number of Command Points you have. Tactical Ploys can be found in your faction’s army
        list. In addition, the Command Re-roll Tactical Ploy is available to all factions.
      </p>

      <div class="border-2 border-zinc-900">
        <div class="flex justify-between bg-zinc-900 p-2">
          <h4 class="!m-0">command re-roll</h4>
          <span class="text-white">1CP</span>
        </div>
        <h5 class="px-2"><i>Tactical Ploy</i></h5>
        <p class="px-2">
          Use this Tactical Ploy after rolling one of your attack dice or defence dice. You can
          re-roll that dice.
        </p>
      </div>
    </section>

    <section id="play-strategic-ploys">
      <h3>2. play strategic ploys</h3>
      <p>
        Starting with the player who has initiative, each player alternates either using a Strategic
        Ploy or choosing to pass. The players repeat this process until they have both passed in
        succession.
      </p>
      <p>
        If a player declares they are going to use a Strategic Ploy, they must first pay its CP cost
        by removing the specified CPs from their pool. If a player does not have enough CPs to pay
        the cost, they cannot use that Strategic Ploy. When a Strategic Ploy is used, resolve its
        effects immediately before alternating to the other player. Each player cannot use the same
        Strategic Ploy more than once during each Strategy phase.
      </p>
    </section>

    <section id="target-reveal">
      <h3>3. target reveal</h3>
      <p>
        Starting with the player who has initiative, the players alternate revealing Tac Ops that
        may be revealed in the Target Reveal step of this Turning Point, or choosing to pass. Note
        that players do not have to reveal a Tac Op, but some must be revealed in certain Turning
        Points in order to be achieved. The players repeat this process until they have both passed
        in succession.
      </p>

      <span>
        Tac Ops are tactical operations - selectable secondary objectives available to you in
        certain ways to play. Tac Ops are explained <a href="#">here</a>.
      </span>
    </section>
  </article>

  <article id="firefight-phase">
    <h2>firefight phase</h2>
    <section id="perform-actions">
      <h3>perform actions</h3>
      <p>
        The player who has initiative activates first. They select one ready friendly operative and
        activates it. Once they have completed that operative’s activation, their opponent selects
        one of their ready operatives and does the same. The players repeat this process until all
        operatives in the killzone have been activated.
      </p>
      <p>
        If an operative has a Group Activation of more than 1, it must be activated in a group,
        rather than individually. In such cases the player selects one friendly ready operative and
        activates it. When that operative’s activation ends, they then select another ready friendly
        operative of the same type to be activated. They repeat this process until they have
        activated the number of operatives specified by that operative’s Group Activation
        characteristic, or there are no more friendly operatives of that type left to activate.
        Their opponent then activates one of their operatives as normal.
      </p>
      <p>
        Each time a player activates one of their ready operatives, they must determine whether it
        has the Engage or Conceal order. If it is the first Turning Point, it has the order that was
        given to it when it was set up before the battle. In all subsequent Turning Points, they can
        choose what order to give it.
      </p>
      <p>
        In the right circumstances, an operative with the Conceal order is not a valid target for an
        enemy operative’s shooting attacks (as explained here), but it is unable to perform various
        actions. An operative with the Engage order can perform more actions, but is more
        susceptible to enemy operatives’ ranged attacks. Each time you give an operative an order,
        place the relevant order token next to them.
      </p>
      <p>
        The operative then generates a number of action points equal to its Action Point Limit
        (APL), which are used to perform actions. Once all their action points have been used and
        they have no other actions to perform, their activation ends and they are no longer ready.
      </p>
      <p>
        When an operative’s activation ends, flip their order token to the activated side to signify
        they are no longer ready.
      </p>

      <img src="@/assets/image/core-rules/OrderToken.webp" alt="Conceal Tokens" />

      <div>
        <h4>NEW CORE RULE</h4>
        <p>
          Some rules allow you to activate operatives in succession before your opponent can
          activate. Regardless of such rules, you can never activate more than two operatives in the
          same Turning Point before your opponent has had a turn to activate a ready operative or
          perform Overwatch.
        </p>
      </div>
    </section>

    <section id="actions">
      <h3>actions</h3>
      <p>
        Each action has an associated cost in action points, e.g. 1AP. Each time a player wishes to
        perform an action with an operative, they must subtract the specified action points from the
        number of action points that operative generated for that activation. If they do not have
        enough action points to perform that action, they must select a different action. They then
        perform that action as specified. While an operative is performing an action, it is known as
        the active operative.
      </p>
      <p>
        The controlling player does not need to declare all of their operative’s actions when it is
        activated. Instead, they can perform an action, and then decide the next action after seeing
        its effects. Unless otherwise specified, an operative cannot perform the same action more
        than once during its activation.
      </p>
      <img src="@/assets/image/core-rules/ActionPointsToken.webp" alt="Action point token" />
      <p>Actions are categorised as follows:</p>
      <ul>
        <li>
          <strong>Universal actions</strong> can be performed by all operatives. They are detailed
          below.
        </li>
        <li>
          <strong>Unique actions</strong> are actions detailed on an operative’s datacard that only
          they can perform, such as the Dakka Dash action found on the example datacard.
        </li>
        <li>
          <strong>Mission actions</strong> are specific to the mission you are playing, and will be
          detailed by that mission’s briefing. Missions can be found here (Open Play mission) and
          here (Spec Ops Narrative missions).
        </li>
        <li>
          <strong>Free actions</strong> can only be performed when another rule specifies. Each time
          an operative would perform a free action, the following rules apply.
          <ul>
            <li>
              The operative can perform the action, so long as the requirements of the action are
              met.
            </li>
            <li>The player does not subtract any additional AP to perform the action.</li>
            <li>
              The operative would still count as performing the action for all rules purposes. For
              example, if it performed it during its activation, it would not be able to perform the
              action again during that activation.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        <i>For example, when a KOMMANDO DAKKA BOY performs a Dakka Dash action (see unique actions,
          above), it can perform a free Dash and free Shoot action without subtracting any
          additional AP (other than the AP spent on the Dakka Dash action). However, it is subject
          to those actions’ requirements, therefore it cannot perform the free Dash action if it is
          within Engagement Range of enemy operatives, and cannot perform the free Shoot action if
          it is within Engagement Range of enemy operatives or has a Conceal order. In addition, for
          each of the free actions it performs, it cannot perform them again during its
          activation.</i>
      </p>

      <CoreActions id="action-normal-move" title="Normal Move" cost="1">
        <ActionNormalMove />
      </CoreActions>
      <CoreActions id="action-charge" title="Charge" cost="1">
        <ActionCharge />
      </CoreActions>
      <CoreActions id="action-fall-back" title="Fall Back" cost="1">
        <ActionFallBack />
      </CoreActions>
      <CoreActions id="action-dash" title="Dash" cost="1">
        <ActionDash />
      </CoreActions>
      <CoreActions id="action-pass" title="Pass" cost="1">
        <ActionPass />
      </CoreActions>
      <CoreActions id="action-overwatch" title="Overwatch" cost="0">
        <ActionOverwatch />
      </CoreActions>
      <CoreActions id="action-pick-up" title="Pick Up" cost="1">
        <ActionPickUp />
      </CoreActions>
      <CoreActions id="action-shoot" title="Shoot" cost="1">
        <ActionShoot />
      </CoreActions>
      <CoreActions id="action-fight" title="Fight" cost="1">
        <ActionFight />
      </CoreActions>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
  </article>
  <article id="wounds-and-damage"></article>
  <article id="controlling-objective-markers-and-tokens"></article>
  <article id="line-of-sight">
    <section id="">
      <h3></h3>
      <p></p>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
  </article>
  <article id="killzones">
    <section id="">
      <h3></h3>
      <p></p>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
  </article>
  <article id="ways-to-play">
    <section id="">
      <h3></h3>
      <p></p>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
    <section id="">
      <h3></h3>
      <p></p>
    </section>
  </article>
</template>

<style scoped></style>
