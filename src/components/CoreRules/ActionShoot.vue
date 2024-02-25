<template>
  <section class="p-4">
    <p>
      Make a shooting attack with one of the active operative’s ranged weapons. An operative cannot
      perform this action if it has a Conceal order or if it is within Engagement Range of an enemy
      operative. To make a shooting attack, complete the shooting sequence as follows:
    </p>
    <hr />
    <p>
      In the shooting sequence, the player controlling the active operative is the attacker. The
      player controlling the target operative is the defender.
    </p>
    <hr />
    <h4>1. SELECT RANGED WEAPON</h4>
    <p>
      The attacker selects one ranged weapon their operative is equipped with and collects their
      attack dice. Their attack dice are a number of D6 equal to the weapon’s Attacks
      characteristic.
    </p>
    <h4>2. SELECT VALID TARGET</h4>
    <p>
      The attacker selects a valid target for the shooting attack. A valid target is an enemy
      operative in the active operative’s Line of Sight that has no friendly operatives within its
      Engagement Range. If there are no valid targets for the shooting attack, the Shoot action
      cannot be resolved and you must choose a different action for the operative (the action points
      subtracted for the Shoot action would be refunded). If there are no valid targets for the
      shooting attack, the Shoot action cannot be resolved and you must choose a different action
      for the operative (the action points spent on the Shoot action would be refunded).
    </p>
    <h4>3. ROLL ATTACK DICE</h4>
    <p>
      The attacker rolls their attack dice. Each result that equals or beats the selected weapon’s
      Ballistic Skill characteristic is a successful hit and is retained. Each that doesn’t is a
      failed hit and is discarded. A result of 6 is always a successful hit and a result of 1 is
      always a failed hit. Keep track of each retained result of 6 - this is a critical hit. Each
      other retained success is a normal hit.
    </p>
    <hr />
    <p>
      Critical hits are well-placed or well-timed attacks. They often have unique effects, such as
      inflicting additional damage or being harder to defend against. This will be shown in the
      weapon’s Damage, Critical Hit Rules and any Special Rules it has.
    </p>
    <h4>4. ROLL DEFENCE DICE</h4>
    <p>
      The defender collects their defence dice and rolls them. Their defence dice are a number of D6
      equal to the target’s Defence characteristic. Each result that equals or beats the target’s
      Save characteristic is a successful save and is retained. Each that doesn’t is a failed save
      and is discarded. A result of 1 is always a failed save. Keep track of each retained result of
      6 - this is a critical save. Each other retained success is a normal save.
    </p>
    <hr />
    <p>
      Critical saves are well-timed dodges, esoteric protection or lucky escapes. They are used to
      avoid critical hits.
    </p>
    <hr />
    <p>
      If the target is in Cover, before rolling their defence dice, the defender can retain one as a
      successful normal save without rolling it.
    </p>
    <hr />
    <p>
      Some weapons have Special Rules that affect dice during an attack, such as Armour Penetration.
      Common Special Rules can be found here, and more unique ones will be found in the relevant
      army list.
    </p>
    <h4>5. RESOLVE SUCCESSFUL SAVES</h4>
    <p>
      The defender resolves all of their successful saves. To resolve a successful save, they select
      one or more of their retained defence dice, discard one of the attacker’s successful hits,
      then discard that defence dice.
    </p>
    <ul>
      <li>
        If the defence dice they select is a normal save, they select one of their opponent’s normal
        hits to be discarded.
      </li>
      <li>
        If the defence dice they select are two normal saves, they select one of their opponent’s
        critical hits to be discarded.
      </li>
      <li>
        If the defence dice they select is a critical save, they select one of their opponent’s
        normal hits or critical hits to be discarded.
      </li>
    </ul>
    <h4>6. RESOLVE SUCCESSFUL HITS</h4>
    <p>
      The attacker resolves any remaining successful hits. To resolve a successful hit, they select
      one of their retained attack dice, inflict damage on the target, then discard that attack
      dice.
    </p>
    <ul>
      <li>
        If the attack dice they select is a normal hit, inflict damage equal to the weapon’s Normal
        Damage.
      </li>
      <li>
        If the attack dice they select is a critical hit, inflict damage equal to the weapon’s
        Critical Damage.
      </li>
    </ul>
    <h4>7. REMOVE INCAPACITATED OPERATIVES</h4>
    <p>
      Any operatives that were incapacitated are removed from the killzone after the active
      operative has finished making all of its shooting attacks for that action. That means that in
      the rare instance that an operative is attacking multiple targets (e.g. the weapon has the
      Blast special rule), they make all of their attacks for that action before any incapacitated
      operatives are removed.
    </p>
    <hr />
    <img src="../../assets/image/core-rules/Shoot1.webp" alt="Action Shoot Example" />
    <ol class="list-decimal marker:font-bold">
      <li>
        <p>
          The Veteran Guardsman makes a shooting attack. The attacker, the Veteran Guardsman’s
          controlling player, selects the Veteran Guardsman’s lasgun as the ranged weapon to make
          the shooting attack with and collects four attack dice. They then select the Kommando as
          the target.
        </p>
      </li>
      <li>
        <p>The attacker rolls their attack dice and the results are as follows:</p>
        <div class="flex justify-center">
          <img src="../../assets/image/core-rules/Shoot_d1.png" alt="Dice Example" />
        </div>
        <p>
          The result of 2 is discarded as it does not equal or beat the weapon’s BS characteristic,
          and the rest are retained as successful hits.
        </p>
      </li>
      <li>
        <p>
          The defender, the Kommando’s controlling player, collects and rolls their defence dice and
          the results are as follows:
        </p>
        <div class="flex justify-center">
          <img src="../../assets/image/core-rules/Shoot_d2.png" alt="Dice Example" />
        </div>
        <p>
          The results of 1 and 3 are discarded as they do not equal or beat the Kommando’s Sv
          characteristic, and the result of 5 is retained as a successful save.
        </p>
      </li>
      <li>
        <p>
          The defender resolves their successful saves. As the retained defence dice is a normal
          save, they select one of the attacker’s normal hits (a result of 4) to be discarded. They
          now have no remaining defence dice.
        </p>
        <div class="flex justify-center">
          <img src="../../assets/image/core-rules/Shoot_d3.png" alt="Dice Example" />
        </div>
      </li>
      <li>
        <p>The attacker resolves their remaining successful hits.</p>
        <div class="flex justify-center">
          <img src="../../assets/image/core-rules/Shoot_d4.png" alt="Dice Example" />
        </div>
        <p>
          The first retained attack dice they resolve is a critical hit (the result of 6), therefore
          they inflict Critical Damage on the Kommando. The remaining retained attack dice they
          resolve is a normal hit (the result of 4), therefore they inflict Normal Damage on the
          Kommando. They now have no remaining attack dice and the Kommando has lost a total of 5
          wounds.
        </p>
      </li>
    </ol>
  </section>
</template>
