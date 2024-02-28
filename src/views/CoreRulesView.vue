<script setup>
/* COMPONENTS IMPORTS */
import CoreActions from '@/components/CoreRules/Actions/CoreActions.vue'
import ActionNormalMove from '@/components/CoreRules/Actions/ActionNormalMove.vue'
import ActionCharge from '@/components/CoreRules/Actions/ActionCharge.vue'
import ActionFallBack from '@/components/CoreRules/Actions/ActionFallBack.vue'
import ActionDash from '@/components/CoreRules/Actions/ActionDash.vue'
import ActionPass from '@/components/CoreRules/Actions/ActionPass.vue'
import ActionOverwatch from '@/components/CoreRules/Actions/ActionOverwatch.vue'
import ActionPickUp from '@/components/CoreRules/Actions/ActionPickUp.vue'
import ActionShoot from '@/components/CoreRules/Actions/ActionShoot.vue'
import ActionFight from '@/components/CoreRules/Actions/ActionFight.vue'
import InchIcons from '@/components/icons/InchIcons.vue'
import ImageFlex from '@/components/ImageFlex.vue'
import ImportantContent from '@/components/ImportantContent.vue'

//
import MovingThroughTerrain from '@/components/CoreRules/MovingThroughTerrain/MovingThroughTerrain.vue'
</script>

<template>
  <hr class="border-4" />
  <h1 class="h1-title">Core Rules</h1>

  <hr class="border-4" />
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
      <div class="aspect-video mb-2 overflow-hidden border-4 lg:mb-20 xl:mb-0">
        <img src="@/assets/image/core-rules/combat_gauges.jpg" alt="" class="object-cover" />
      </div>
      <ul>
        <li><InchIcons :count="1" :value="1" /> The triangle distance is 1".</li>
        <li><InchIcons :count="1" :value="2" /> The circle is 2".</li>
        <li><InchIcons :count="1" :value="3" /> The square is 3".</li>
        <li><InchIcons :count="1" :value="6" /> The pentagon is 6".</li>
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
      <img src="@/assets/image/core-rules/datacard.png" alt="datacards" />
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
      <div class="mb-4 rounded-bl-3xl rounded-tr-3xl bg-orange-600 px-4 py-1 text-white">
        <h3 class="!text-white">ENGAGEMENT RANGE</h3>
        <p>
          Engagement Range is the zone of threat that operatives present to their enemies. Many
          rules in the game use Engagement Range, such as when moving and fighting. Engagement Range
          is mutual, therefore operatives are within each other’s Engagement Range if one of them is
          Visible to and within
          <InchIcons :count="1" :value="1" /> of the other.
        </p>
      </div>
      <div class="mb-4 rounded-br-3xl rounded-tl-3xl bg-orange-600 px-4 py-1 text-white">
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
      <div class="mb-4 rounded-bl-3xl rounded-tr-3xl bg-orange-600 px-4 py-1 text-white">
        <h3 class="!text-white">NEW CORE RULE</h3>
        <p>
          The Movement characteristic cannot be modified to less than
          <InchIcons :count="2" :value="2" /> (even if injured).
        </p>
      </div>
      <div class="rounded-br-3xl rounded-tl-3xl bg-orange-600 px-4 py-1 text-white">
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
    <div class="relative h-28 w-28">
      <svg
        class="h-28 w-28 rotate-180 fill-orange-600"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt"
        height="1130.000000pt"
        viewBox="0 0 1280.000000 1130.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)" stroke="none">
          <path
            d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z"
          />
        </g>
      </svg>
      <span
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%] text-4xl font-bold text-white"
        >1</span
      >
    </div>
    <div class="w-full border-4 border-orange-600 pb-4 text-center">
      <h4>INITIATIVE PHASE</h4>
      <p>
        In the Initiative phase, the players ready their kill teams and determine who has the
        initiative for the Turning Point.
      </p>
    </div>
    <div class="relative flex h-28 w-28 items-center justify-center">
      <svg
        class="h-28 w-28 rotate-180 fill-orange-600"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt"
        height="1130.000000pt"
        viewBox="0 0 1280.000000 1130.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)" stroke="none">
          <path
            d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z"
          />
        </g>
      </svg>
      <span
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%] text-4xl font-bold text-white"
        >2</span
      >
    </div>
    <div class="w-full border-4 border-orange-600 pb-4 text-center">
      <h4>STRATEGY PHASE</h4>
      <p>
        In the Strategy phase, the players generate a valuable but limited resource known as Command
        Points (CPs) and spend them to use Strategic Ploys. Alternatively, they can save their CPs
        to spend on Tactical Ploys later in the battle. In addition, players may reveal certain Tac
        Ops in this phase for their kill teams to attempt.
      </p>
    </div>
    <div class="relative flex h-28 w-28 items-center justify-center">
      <svg
        class="h-28 w-28 rotate-180 fill-orange-600"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt"
        height="1130.000000pt"
        viewBox="0 0 1280.000000 1130.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)" stroke="none">
          <path
            d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z"
          />
        </g>
      </svg>
      <span
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%] text-4xl font-bold text-white"
        >3</span
      >
    </div>
    <div class="w-full border-4 border-orange-600 pb-4 text-center">
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
          <h4 class="!m-0 text-white">command re-roll</h4>
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
        <i
          >For example, when a KOMMANDO DAKKA BOY performs a Dakka Dash action (see unique actions,
          above), it can perform a free Dash and free Shoot action without subtracting any
          additional AP (other than the AP spent on the Dakka Dash action). However, it is subject
          to those actions’ requirements, therefore it cannot perform the free Dash action if it is
          within Engagement Range of enemy operatives, and cannot perform the free Shoot action if
          it is within Engagement Range of enemy operatives or has a Conceal order. In addition, for
          each of the free actions it performs, it cannot perform them again during its
          activation.</i
        >
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
  </article>
  <article id="wounds-and-damage">
    <h2>WOUNDS AND DAMAGE</h2>
    <p>
      All operatives have a starting number of wounds that are used to measure how much damage they
      can sustain before losing effectiveness and becoming incapacitated. Each time damage is
      inflicted on an operative, it loses a number of wounds equal to the value of that damage.
    </p>
    <p>
      If an operative’s wounds are reduced to 0 or less, it is incapacitated. When an operative is
      incapacitated, it is removed from the killzone and you can no longer use its abilities. If an
      operative is incapacitated during a shooting sequence, it is removed after all shooting
      attacks from that action have been made, as specified in the shooting sequence. If an
      operative is incapacitated during a fight sequence, any remaining hits are discarded and not
      resolved.
    </p>
    <hr />
    <p>
      Certain objectives and Tac Ops will require friendly operatives to incapacitate enemy
      operatives, and may even specify the manner in which it must be done (e.g. a shooting attack).
      This is achieved when a friendly operative performs an action or ability (or, where necessary,
      the specified action or ability), and as a result of doing so, an enemy operative is
      incapacitated.
    </p>
    <hr />
    <p>
      Some rules inflict mortal wounds. Mortal wounds are a powerful source of damage such that
      rolling defence dice will not help the operative defend against them. Each time an operative
      suffers a mortal wound, one point of damage is applied to it.
    </p>
    <p>
      If an operative has fewer than half of its wounds remaining, it is injured. While an operative
      is injured, subtract <InchIcons :count="1" :value="2" /> from its Movement characteristic and
      worsen the Ballistic Skill and Weapon Skill characteristics of the ranged and melee weapons it
      is equipped with by 1 respectively.
    </p>
    <hr />
    <p>
      It is a good idea to mark any lost wounds so that both players can keep track of the damage
      dealt. Some players will place dice or tokens next to the operative or on its datacard, while
      others may choose to write it down on a piece of paper.
    </p>
    <hr />
    <div class="flex justify-center">
      <img src="@/assets/image/core-rules/InjuredToken.webp" alt="Injured Token Example" />
    </div>
  </article>
  <article id="controlling-objective-markers-and-tokens">
    <h2>CONTROLLING OBJECTIVE MARKERS AND TOKENS</h2>
    <div>
      <p>
        Your operatives will most often be battling for dominance of vital objective markers and
        tokens. Many rules will require your operatives to control objective markers or tokens in
        order to interact with them. Friendly operatives control an objective marker or token if the
        total APL characteristic of friendly operatives within of the centre of it is greater than
        that of enemy operatives. If an operative is carrying an objective marker or token (see the
        Pick Up action), it is always in control of it. Finally, unless otherwise specified, when
        setting up or measuring a distance to an objective marker or token, always measure from its
        centre. During operatives’ activations, determine control of objective markers and tokens at
        the start and end of each individual action.
      </p>
      <div class="mb-4">
        <div class="flex justify-center">
          <img src="@/assets/image/core-rules/Markers1.webp" alt="Markers Token Example" />
        </div>
        <p>
          <i
            >Operative A is within <InchIcons :count="1" :value="2" /> of the centre of the
            objective marker for a total APL of 2. Operative B and C are within
            <InchIcons :count="1" :value="2" /> of the centre of the objective marker for a total
            APL of 4. Therefore operative B and C control the objective marker.</i
          >
        </p>
      </div>
      <div class="flex justify-center">
        <img src="../assets/image/core-rules/Markers2.png" alt="Markers Token Example" />
      </div>
      <p>
        The locations of objective markers on the battlefield are typically shown on the deployment
        map of the mission being played, and are represented by the icon above.
      </p>
      <div class="flex justify-center">
        <img src="@/assets/image/core-rules/Markers3.webp" alt="Markers Token Example" />
      </div>
    </div>
  </article>

  <article id="line-of-sight">
    <div>
      <h2>line of sight</h2>
      <div>
        <p>
          Some rules will require an operative (known as the intended target in the following rules)
          to be in the active operative’s Line of Sight (LoS), such as when selecting a valid target
          for a shooting attack.
        </p>
        <div class="flex flex-col border-2 border-orange-500 bg-zinc-300 p-4">
          <div class="flex justify-center">
            <img
              src="@/assets/image/core-rules/line-of-sight/EngageOrder.png"
              alt="Engage Order Token"
            />
          </div>
          <div>
            <p>
              If the intended target has an Engage order, it is in the active operative’s LoS if it
              is:
            </p>
            <ol>
              <li>Visible.</li>
              <li>Not Obscured.</li>
            </ol>
          </div>
        </div>
        <br />
        <div class="flex flex-col border-2 border-orange-500 bg-zinc-300 p-4">
          <div class="flex justify-center">
            <img
              src="@/assets/image/core-rules/line-of-sight/EngageOrder.png"
              alt="Engage Order Token"
            />
          </div>
          <div>
            <p>
              If the intended target has a Conceal order, it is in the active operative’s LoS if it
              is:
            </p>
            <ol>
              <li>Visible</li>
              <li>Not Obscured</li>
              <li>Not in Cover.</li>
            </ol>
          </div>
        </div>

        <section id="visible">
          <h3>visible</h3>
          <p>For an intended target to be Visible, the following must be true:</p>
          <ul>
            <li>
              You can draw an imaginary, unobstructed straight line (known as a Visibility line) 1
              mm wide from the head of the active operative’s miniature to any part of the miniature
              of the intended target (not its base).
            </li>
          </ul>
          <hr />
          <p>
            In the rare instance that bases prevent an intended target from being Visible to the
            active operative, such as when the active operative is directly below or above the
            intended target, treat those bases as being invisible.
          </p>
          <hr />
          <p>
            Some rare rules will require you to select a point that is Visible (e.g. a point on the
            killzone). In such circumstances, you must be able to draw an imaginary, unobstructed
            straight line 1mm wide from the head of the active operative’s miniature to the point
            you would select.
          </p>
        </section>
        <section id="obscured">
          <h3>obscured</h3>
          <p>
            Regardless of whether a target operative has an Engage or Conceal order, if an Obscuring
            terrain feature is in the way, an active operative may be unable to have LoS to them.
            For an intended target to be Obscured, the following must be true:
          </p>
          <ul>
            <li>
              The intended target is more than <InchIcons :count="1" :value="2" /> from a point at
              which a Cover line crosses a terrain feature that is Obscuring (see Terrain Traits).
              However, if the active operative is within <InchIcons :count="1" :value="1" /> of a
              point at which a Cover line crosses a terrain feature that is Obscuring, that part of
              the terrain feature is not treated as Obscuring.
            </li>
          </ul>
        </section>
        <section id="cover">
          <h3>cover</h3>
          <p>
            If an operative positions themselves in Cover, they will use it for protection while
            they have an Engage order, or hide behind it while they have a Conceal order. For an
            intended target to be in Cover, both of the following must be true:
          </p>
          <ul>
            <li>The intended target is more than from the active operative.</li>
            <li>
              The intended target is within of a point at which a Cover line crosses another
              operative’s base (unless that other operative is not itself in the active operative’s
              LoS), or a terrain feature that provides Cover (see Terrain Traits).
            </li>
          </ul>
          <hr />
          <p>
            Note that an intended target that has an Engage order can gain a defensive benefit for
            being in Cover as specified in the shooting sequence.
          </p>
          <hr />
          <div>
            <div class="flex justify-center">
              <img
                src="@/assets/image/core-rules/line-of-sight/LineOfSight.webp"
                alt="Line Of Sight"
              />
            </div>
            <p>
              <i
                >To establish Cover lines, the active operative’s controlling player draws imaginary
                straight lines, 1mm wide, from any part of the active operative’s base to every part
                of the intended target’s base.</i
              >
            </p>
          </div>
        </section>
      </div>
      <div class="my-4 inline-flex flex-col border-2 border-orange-500 bg-slate-200 p-4">
        <div>
          <div class="flex justify-center">
            <img
              src="@/assets/image/core-rules/line-of-sight/LineOfSight1.webp"
              alt="Line Of Sight"
            />
          </div>
          <div>
            <p>
              <i
                >A Kommando with an Engage order is visible to the Veteran Guardsman, but a terrain
                feature that is Obscuring is between them. The Veteran Guardsman is not within
                <InchIcons :count="1" :value="1" /> of a point at which a Cover line crosses the
                terrain feature. The Kommando is more than <InchIcons :count="1" :value="2" /> from
                a point at which a Cover line crosses the terrain feature. Therefore the Kommando is
                Obscured. It is not in the Veteran Guardsman’s LoS and Is not a valid target for its
                shooting attack.</i
              >
            </p>
          </div>
        </div>
        <div>
          <div class="flex justify-center">
            <img
              src="@/assets/image/core-rules/line-of-sight/LineOfSight2.webp"
              alt="Line Of Sight"
            />
          </div>
          <div>
            <p>
              <i
                >A Kommando with an Engage order is visible to the Veteran Guardsman, but two
                terrain features that are Obscuring are between them. The Veteran Guardsman is
                within <InchIcons :count="1" :value="1" /> of a point at which a Cover line crosses
                one of the terrain features, therefore the Kommando is not Obscured by that terrain
                feature. The Kommando is not more than <InchIcons :count="1" :value="2" /> from a
                point at which a Cover line crosses the other terrain feature, therefore the
                Kommando is not Obscured by that terrain feature either. It is in the Veteran
                Guardsman’s LoS and is a valid target for its shooting attack.</i
              >
            </p>
          </div>
        </div>
        <div>
          <div class="flex justify-center">
            <img
              src="@/assets/image/core-rules/line-of-sight/LineOfSight3.webp"
              alt="Line Of Sight"
            />
          </div>
          <div>
            <p>
              <i
                >A Kommando with a Conceal order is visible to the Veteran Guardsman and is not
                Obscured. The Kommando is both more than <InchIcons :count="1" :value="2" /> from
                the Veteran Guardsman and within <InchIcons :count="1" :value="1" /> of a point at
                which a Cover line crosses a terrain feature that provides Cover, therefore it is in
                Cover. As the Kommando has a Conceal order, it is not in the Veteran Guardsman’s LoS
                and is not a valid target for its shooting attack.</i
              >
            </p>
          </div>
        </div>
        <div>
          <div class="flex justify-center">
            <img
              src="@/assets/image/core-rules/line-of-sight/LineOfSight4.webp"
              alt="Line Of Sight"
            />
          </div>
          <div>
            <p>
              <i
                >A Kommando with a Conceal order is visible to the Veteran Guardsman and is not
                Obscured. The Kommando is more than <InchIcons :count="1" :value="2" /> from the
                Veteran Guardsman, but not within <InchIcons :count="1" :value="1" /> of a point at
                which a Cover line crosses a terrain feature that provides Cover, therefore it is
                not in Cover. It is in the Veteran Guardsman’s LoS and is a valid target for its
                shooting attack.</i
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>

  <article id="killzones">
    <section id="killzones">
      <h2>KILLZONES</h2>
      <p>
        Killzones are an essential component of Warhammer 40,000: Kill Team, providing an immersive
        experience as well as an engaging battlefield for your operatives to fight on. Securing
        objectives, climbing buildings, vaulting obstacles, taking cover and leaping over gaps are
        all part of mastering the environments your operatives wage war within. In this section you
        will find all the rules for the features that makes up your killzone, and how your
        operatives interact with it.
      </p>
      <div>
        <h3>TERRAIN TRAITS</h3>
        <p>
          Killzones will include a multitude of terrain features for your operatives to fight
          around, and the various parts of each terrain feature have traits that convey certain
          rules effects. If you create a killzone using a Killzone Environment, each terrain feature
          will be built in a specific way and the different parts of it will be defined. If your
          killzone is of your own devising, you and your opponent must define each part of a terrain
          feature and its accompanying traits. Examples of how to do this can be found here.
        </p>
        <div>
          <h4>HEAVY</h4>
          <p>Heavy terrain provides Cover and is Obscuring.</p>
          <h4>LIGHT</h4>
          <p>Light terrain provides Cover unless otherwise specified (e.g. Vantage Point).</p>
          <h4>TRAVERSABLE</h4>
          <p>Traversable terrain can be traversed.</p>
          <h4>INSIGNIFICANT</h4>
          <p>
            Insignificant terrain is terrain too small to have an impact on your operatives and
            provides no rules.
          </p>
          <h4>SCALABLE</h4>
          <p>
            This trait can be applied to terrain features more than 2 tall. Each time an operative
            climbs this terrain feature, the final incremental distance of less than is ignored,
            instead of being rounded up to .
          </p>
          <h4>BARRICADES</h4>
          <p>
            Barricades are terrain that players set up before a battle. They are wide and tall. They
            are Light and Traversable.
          </p>
          <div class="flex justify-center">
            <img src="@/assets/image/core-rules/killzones/Barricades.webp" alt="Barricades" />
          </div>
          <h4>VANTAGE POINT</h4>
          <p>
            A Vantage Point is a terrain feature with a vertical element (i.e. a level higher than
            the floor of the killzone) that operatives can be placed upon. If a part of a terrain
            feature is not defined as a Vantage Point, operatives can climb over or traverse it, but
            they cannot finish a move or be set up upon it.
          </p>
          <p>
            Each time an operative on a Vantage Point makes a shooting attack, each enemy operative
            that has a Conceal order that is in Cover provided by Light terrain or another
            operative, and is at least lower than them, is treated as having an Engage order for
            that attack instead.
          </p>
          <p>
            Each time a shooting attack is made against an operative on a Vantage Point, for that
            shooting attack:
          </p>
          <ul>
            <li>
              The operative cannot use the floor of the Vantage Point as Cover or to be Obscured.
            </li>
            <li>
              The operative cannot use parts of the Vantage Point’s terrain feature that is lower
              than the operative as Cover or to be Obscured.
            </li>
            <p>
              Instead, the operative must use parts that are the same height as or higher than the
              operative, such as a rampart or battlement on the Vantage Point.
            </p>
          </ul>
          <div class="my-4 inline-flex flex-col border-2 border-orange-500 bg-slate-200 p-4">
            <div class="flex justify-center">
              <img
                src="@/assets/image/core-rules/killzones/VantagePoint.webp"
                alt="Vantage Point"
              />
            </div>
            <p>
              <i
                ><b>Vantage Point 1: </b>The Kommando on a Vantage Point makes a shooting attack.
                The Veteran Guardsman has a Conceal order and is in Cover provided by Light terrain.
                As it is at least <InchIcons :count="1" :value="2" /> lower than the Kommando, the
                Veteran Guardsman is treated as having an Engage order for that attack instead,
                making it a valid target for the shooting attack.</i
              >
            </p>
            <p>
              <i
                ><b>Vantage Point 2: </b>The Veteran Guardsman makes a shooting attack. The Kommando
                has a Conceal order and is on a Vantage Point, but as it cannot use the floor of the
                Vantage Point or parts of the Vantage Point that are lower than it as Cover or to be
                Obscured, it is a valid target for the shooting attack and cannot use the Vantage
                Point as Cover.</i
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="moving-through-terrain" class="md:columns-2">
      <h2>moving through terrain</h2>
      <div>
        <p>
          As your operatives navigate the killzone, terrain features may restrict their movement. To
          manoeuvre across or over them, your operatives must traverse, climb or jump.
        </p>
        <h3>TRAVERSE</h3>
        <p>
          A traverse is when an operative must clear a small obstacle in their way such as a
          barricade or pipe. During an operative’s move, it can ascend and descend terrain with the
          Traversable trait at a cost of <InchIcons :count="1" :value="2" />, but cannot finish a
          move on top of it. If this is not possible, it cannot traverse it - it must move around it
          instead. Note that a traverse is not a climb - the operative simply vaults over the
          obstacle in their way as it moves horizontally across the killzone.
        </p>
        <div class="flex justify-center">
          <img
            src="@/assets/image/core-rules/killzones/MovingThroughTerrain1.webp"
            alt="Moving Through Terrain"
          />
        </div>
        <p>
          The operative has a M characteristic of <InchIcons :count="3" :value="2" />.
          <InchIcons :count="1" :value="2" /> of its M characteristic must be used to cross the
          Traversable terrain feature, meaning the operative can move a total of
          <InchIcons :count="2" :value="2" />.
        </p>
        <h3>JUMP</h3>
        <p>
          A jump is when an operative crosses a gap between terrain that is within horizontally and
          vertically from one edge to the other. The operative must be within of the edge of the
          terrain feature the operative will jump from. To jump, take a jump test for the operative
          by rolling one D6: on a 1, the test is unsuccessful, the operative remains where it is and
          that action ends; on a 2+, the test is successful and you can move the operative across
          the gap. Only the horizontal distance an operative moves during a jump counts towards how
          far it has moved. Note that an operative cannot jump instead of climbing. If an operative
          simply wishes to ascend or descend a terrain feature, it must drop or climb instead.
        </p>
        <p>
          Remember that an operative must finish a move in a location it can be placed. If this is
          not possible, such as if an operative does not have enough Movement to reach its intended
          destination, it cannot attempt the jump.
        </p>
        <div class="flex justify-center">
          <img
            src="@/assets/image/core-rules/killzones/MovingThroughTerrain2.webp"
            alt="Moving Through Terrain"
          />
        </div>
        <p>
          The operative intends to cross a gap between two terrain features without dropping and/or
          climbing. The operative is within <InchIcons :count="1" :value="1" /> of the edge of the
          terrain feature it will jump from. The gap is within
          <InchIcons :count="1" :value="3" /> horizontally and
          <InchIcons :count="1" :value="2" /> vertically from one edge to the other. The operative’s
          controlling player rolls one D6 and the result is a 5, therefore the test is successful.
          The operative moves across the gap, and only the horizontal distance it travels is counted
          for the move.
        </p>
        <h3 class="">CLIMB</h3>
        <p>
          A climb is when an operative ascends or descends a terrain feature that it cannot traverse
          across during a move. First, the operative must be within of a physical and climbable part
          of a terrain feature to climb it - a wall, pipe, chain etc. The operative can then climb
          that terrain feature, counting the distance it travels towards the total distance it
          moves, rounding up any incremental distances of less than
          <InchIcons :count="1" :value="2" /> to <InchIcons :count="1" :value="2" />.
        </p>
        <p>
          Remember that an operative must finish a move in a location it can be placed. If this is
          not possible, such as if an operative does not have a high enough Movement characteristic
          to reach its intended destination, it cannot begin the climb. This means an operative
          cannot finish a move partway through a climb. An operative can, however, perform a Dash
          action during a climb in order to reach its intended destination.
        </p>

        <div class="my-4 inline-flex flex-col border-2 border-orange-500 bg-slate-200 p-4">
          <ImageFlex
            url="src/assets/image/core-rules/killzones/MovingThroughTerrain3.webp"
            text="Moving Through Terrain"
          />
          <div>
            <ol>
              <li>
                An operative with an M characteristic of <InchIcons :count="3" :value="2" /> intends
                to climb onto the next level. It is within <InchIcons :count="1" :value="1" /> of a
                physical part of the terrain feature it can climb.
              </li>
              <li>
                It then climbs the terrain feature. It must move a vertical distance of more than
                <InchIcons :count="1" :value="2" /> but less than
                <InchIcons :count="2" :value="2" />. As increments are rounded up, it moves
                <InchIcons :count="2" :value="2" />
                vertically.
              </li>
              <li>
                To reach a location it can be placed, it must also move horizontally. The operative
                has <InchIcons :count="1" :value="2" /> of its M characteristic remaining, allowing
                it to move onto the next level. You could then move the operative the full
                <InchIcons :count="1" :value="2" /> distance onto the level.
              </li>
            </ol>
          </div>
        </div>

        <div class="my-4 inline-flex flex-col border-2 border-orange-500 bg-slate-200 p-4">
          <ImageFlex
            url="src/assets/image/core-rules/killzones/MovingThroughTerrain4.webp"
            text="Moving Through Terrain"
          />
          <div>
            <ol>
              <li>
                An operative with an M characteristic of <InchIcons :count="3" :value="2" /> intends
                to climb onto the next level. It first moves <InchIcons :count="1" :value="2" /> to
                be within <InchIcons :count="1" :value="1" /> of a physical part of a terrain
                feature it can climb.
              </li>
              <li>
                It then attempts to climb the terrain feature. It must move
                <InchIcons :count="2" :value="2" /> vertically (increments rounded up) and
                <InchIcons :count="1" :value="2" /> horizontally. As this would exceed its M
                characteristic, it cannot begin the climb.
              </li>
              <li>
                If the operative has any action points remaining, however, it could perform a Dash
                action to complete the climb, so long as it hasn’t already performed a Dash action
                during its activation.
              </li>
            </ol>
          </div>
        </div>

        <h3>DROP</h3>
        <p>
          A drop is when an operative descends from height without climbing. The operative must be
          within of the edge of the terrain feature it will drop from, and the intended location
          must be vertically within 3 of the level it occupies. The operative can drop from that
          terrain feature counting the vertical distance it travels towards the total distance it
          moves. The vertical distance is measured in increments of , rounding down. Note that a
          total vertical distance of less than is therefore ignored. An operative can perform a Dash
          action during a drop in order to reach its intended destination.
        </p>
        <p>
          Remember that an operative cannot move through any part of another operative’s base
          (unless it can FLY) Therefore if the intended location has any operatives that would
          prevent the operative moving in that direction, it cannot make the drop.
        </p>

        <ImportantContent сaption="Flying Over Terrain"
          ><p>
            Operatives with the FLY keyword ignore vertical distances when moving on and over
            terrain features, meaning they do not need to climb or traverse and can move freely
            across gaps instead of jumping. In addition, when they drop, their intended location can
            be any vertical distance and the vertical distance they travel does not count towards
            the total distance they move.
          </p></ImportantContent
        >

        <div class="my-4 inline-flex flex-col border-2 border-orange-500 bg-slate-200 p-4">
          <ImageFlex
            url="src/assets/image/core-rules/killzones/MovingThroughTerrain5.webp"
            text="Moving Through Terrain"
          />
          <div>
            <ol>
              <li>
                The operative intends to drop to the next level. It first moves
                <InchIcons :count="1" :value="1" /> to be within
                <InchIcons :count="1" :value="1" /> of the edge of the terrain feature it will drop
                from.
              </li>
              <li>
                The operative then drops from that terrain feature. The horizontal distance it moves
                is measured as normal. The vertical distance it moves is more than
                <InchIcons :count="1" :value="2" /> but less than
                <InchIcons :count="2" :value="2" />. As increments are rounded down, it moves
                <InchIcons :count="1" :value="2" />
                vertically.
              </li>
              <li>
                After the model has finished the drop, it can complete its move as normal with any
                remaining M characteristic it has.
              </li>
            </ol>
          </div>
        </div>

        <h3></h3>
      </div>
    </section>

    <section id="terrain-traits">
      <h3>Terrain Traits</h3>
      <p></p>
      <div id="terrain-traits-heavy">
        <h4>Heavy</h4>
      </div>
      <div id="terrain-traits-light">
        <h4>Light</h4>
      </div>
      <div id="terrain-traits-traversable">
        <h4>Traversable</h4>
      </div>
      <div id="terrain-traits-insignificant">
        <h4>Insignificant</h4>
      </div>
      <div id="terrain-traits-scalable">
        <h4>Scalable</h4>
      </div>
      <div id="terrain-traits-barricades">
        <h4>Barricades</h4>
      </div>
      <div id="terrain-traits-vantage-point">
        <h4>Vantage Point</h4>
      </div>
    </section>

    <MovingThroughTerrain />

    <section id="example-boards">
      <h3>Example Boards</h3>
      <p></p>
    </section>

    <section id="example-terrain-features">
      <h3>Example Terrain Features</h3>
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

<style scoped>
.h1-title {
  position: relative;
}
.h1-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 20px solid transparent;
  border-left: 20px solid #f97316;
}
.h1-title::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  border: 20px solid transparent;
  border-right: 20px solid #f97316;
}
</style>
