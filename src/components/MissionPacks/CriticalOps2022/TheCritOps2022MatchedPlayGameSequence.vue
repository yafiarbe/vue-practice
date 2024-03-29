<script setup>
import InchIcons from '@/components/icons/InchIcons.vue'
import ImageFlex from '@/components/ImageFlex.vue'
</script>

<template>
  <article id="crit-ops-2022-matched-play-game-sequence">
    <span>
      <h2>matched play game sequence</h2>
    </span>
    <p>
      To play a matched play game, each player must have a matched roster as described in the Kill
      Team Core Book. A matched play game is then completed by following the sequence below:
    </p>
    <h3 id="crit-ops-2022-determine-mission-and-map">1. determine mission and map</h3>
    <p>Determine the mission and map. Here you will find a variety of methods to do this:</p>
    <h4 id="crit-ops-2022-determine-mission-and-map-organised">organised</h4>
    <p>
      Specify beforehand which combination of mission and map will be used e.g. Loot+Strait (A4) or
      Secure+Junction (B7), etc. If a series of games are being played (e.g. at a tournament), each
      round can be specified beforehand. Alternatively, each subsequent round can be determined by
      the organiser beforehand, but only revealed after the previous round has been completed.
    </p>
    <h4 id="crit-ops-2022-determine-mission-and-map-random">random</h4>
    <p>
      Shuffle the mission cards and map cards separately, then deal one of each to randomly
      determine the mission and map.
    </p>
    <h4 id="crit-ops-2022-determine-mission-and-map-veto">veto</h4>
    <p>
      The players roll off to decide Attacker and Defender first. The Attacker takes the mission
      cards and the Defender takes the map cards.
    </p>
    <p>
      The Attacker chooses two mission cards to put forward. The Defender selects one of them to
      use.
    </p>
    <p>
      The Defender chooses three map cards to put forward. The Attacker selects one of them to be
      discarded. The Defender selects one of the remaining cards to use.
    </p>
    <p>
      The Defender selects their drop zone after setting up the objective markers and killzone as
      normal.
    </p>
    <h4 id="crit-ops-2022-determine-mission-and-map-control">control</h4>
    <p>
      If the players are playing a series of games against each other, the winner of the previous
      game selects one of the mission cards that was not used in the previous battle.
    </p>
    <p>
      They then select one of the map types (i.e. 1-3, 4-6 or 7-9) that was not used in the previous
      battle, and the loser selects one of the map cards from that type.
    </p>
    <h4 id="crit-ops-2022-determine-mission-and-map-bid">bid</h4>
    <p>Each player collects 10 tokens they will use to bid on the following categories:</p>
    <ul>
      <li>Mission</li>
      <li>Map</li>
      <li>Attacker and Defender (instead of rolling off)</li>
      <li>First initiative (instead of selections in the Scouting step)</li>
    </ul>
    <p>
      Working through each category, each player will secretly put any of their tokens into their
      hand as their bid (or zero if they wish), then reveal their bid simultaneously. The player
      that bids the most will decide that category from all available options. If it’s a draw, that
      bid is cancelled and the players bid again, unless they both bid zero, in which case the
      players roll off to determine that category. Once the category is resolved, both players
      discard their bid tokens.
    </p>
    <p>
      For example, in the map category, if one player bids 2 tokens and another bids 4, the latter
      would decide which map card to use. Both players would discard those tokens, then repeat this
      process for determining who decides Attacker and Defender.
    </p>
    <h3 id="crit-ops-2022-set-up-markers-and-killzone">2. set up objective markers and killzone</h3>
    <p>Set up objective markers in the locations specified by the map card.</p>
    <p>
      Determine the killzone and set up its terrain features, ensuring the traits of each terrain
      feature and its parts are specified.
    </p>
    <h3 id="crit-ops-2022-determine-attacker-and-defender">3. determine attacker and defender</h3>
    <p>
      The players roll off and the winner decides Attacker and Defender. The Defender selects one of
      the drop zones as theirs; the Attacker has the other.
    </p>
    <h3 id="crit-ops-2022-select-kill-team">4. select a kill team</h3>
    <p>
      Each player selects operatives from their matched roster to fulfil their faction’s kill team
      requirements, then reveals their selections to their opponent. Each player adds 3CP to their
      pool.
    </p>
    <h3 id="crit-ops-2022-select-tac-ops">5. select tac ops</h3>
    <p>
      Each player secretly selects three Tac Ops. They can select up to one of their faction Tac
      Ops; all of their remaining Tac Ops must be selected from one of their archetypes. Players
      only reveal each Tac Op when it specifies, and they do not have to reveal which archetype they
      are using until they reveal one of its Tac Ops.
    </p>
    <p>Here you will find alternative methods you can use to determine Tac Ops:</p>
    <h4 id="crit-ops-2022-select-tac-ops-random">random</h4>
    <p>
      Each player shuffles a deck of 27 Tac Ops cards (all archetypes and their faction Tac Ops).
      They draw two cards from their deck, select one and discard the other. They repeat this
      process until three Tac Ops cards have been selected.
    </p>
    <h4 id="crit-ops-2022-select-tac-ops-constructed-random">constructed</h4>
    <p>
      Each player builds a deck of 6 Tac Ops cards, then shuffles it. Up to 3 can be their faction’s
      Tac Ops; the remaining must be selected from one of their faction’s archetypes. They draw two
      cards from their deck, select one and discard the other. They repeat this process until three
      Tac Ops cards have been selected.
    </p>
    <h4 id="crit-ops-2022-select-tac-ops-free-selection">free selection</h4>
    <p>Each player selects any 3 Tac Ops from their deck of 27.</p>
    <h4 id="crit-ops-2022-select-tac-ops-acquired">acquired</h4>
    <p>
      The players use one deck of 27 Tac Ops. They shuffle the deck and deal out 6 in a row. The
      Attacker selects one Tac Op from the row, then adds a random Tac Op from the deck to the row.
      The Defender then does the same. The players repeat this process until they have 3 Tac Ops
      each. With this method, Tac Ops aren’t secret.
    </p>
    <h4 id="crit-ops-2022-select-tac-ops-bid">bid</h4>
    <p>
      Each player collects 10 tokens they will use to bid on archetype and Tac Ops. They will first
      bid on the archetype, with the winner deciding which one archetype both players will use for
      the battle. Thereafter, the players randomly pair Tac Ops from that archetype and bid for each
      pair. The winner of each bid selects one Tac Op from the pair and the loser has the other.
      With this method, Tac Ops aren’t secret.
    </p>
    <p>
      To bid, each player will secretly put any of their tokens into their hand as their bid (or
      zero if they wish), then reveal their bid simultaneously. The player that bids the most wins.
      If it’s a draw, that bid is cancelled and the players bid again, unless they both bid zero, in
      which case the players roll off to determine who wins. Once the bid is resolved, both players
      discard their bid tokens.
    </p>
    <h3 id="crit-ops-2022-select-equipment">6. select equipment</h3>
    <p>
      Each player selects up to 10 points worth of their faction’s equipment for the battle, assigns
      it to their operatives as specified, then reveals it to their opponent.
    </p>
    <h3 id="crit-ops-2022-set-up-barricades">7. set up barricades</h3>
    <p>
      Starting with the Defender, players alternate setting up barricades one at a time until
      they’ve set up two each. Each time a player sets up a barricade, it must be within
      <InchIcons :count="1" :value="6" /> of their drop zone, more than
      <InchIcons :count="1" :value="2" /> from all other barricades and not on a terrain feature
      (unless it has the Insignificant trait).
    </p>
    <h3 id="crit-ops-2022-set-up-operatives">8. set up operatives</h3>
    <p>
      Each player separates their operatives as numerically evenly as possible into three groups. If
      a player wants to use any rules (if they have any) to set up operatives in a location
      alternative to their drop zone, they must declare them now, including the relevant operatives
      for this.
    </p>
    <p>
      Starting with the Defender, each player alternates setting up their operatives one group at a
      time. When a player sets up an operative, it must be wholly within their drop zone and must be
      given an Engage or Conceal order.
    </p>
    <h3 id="crit-ops-2022-scouting">9. scouting</h3>
    <p>
      Each player secretly selects one of the pre-game scouting options, either by using the
      scouting cards provided or by placing a number of dice in their hand to match their selection.
      Once both players have selected, they reveal their selection simultaneously. They then resolve
      their selection starting with the Attacker. The scouting options are below, and their effects
      are specified on the scouting cards.
    </p>
    <ul class="m-0 flex list-none flex-col p-0">
      <li>
        <h4>1. FORTIFY</h4>
        <p>
          Set up one additional barricade wholly within your territory. Unlike normal barricades,
          you can set it up on a Vantage Point.
        </p>
      </li>
      <li>
        <h4>2. INFILTRATE</h4>
        <p>
          Once during the first Turning Point, when you select a ready friendly operative to
          activate, you can change its order.
        </p>
      </li>
      <li>
        <h4>3. RECON</h4>
        <p>
          Perform a free Dash action with one friendly operative that is wholly within your drop
          zone as if it can FLY.
        </p>
      </li>
    </ul>
    <h3 id="crit-ops-2022-play-the-battle">10. play the battle</h3>
    <p>
      The first Turning Point of the battle begins. In the first Initiative phase, initiative is
      determined by the players’ choices in the Scouting step:
    </p>
    <ImageFlex>
      <img
        src="../../../assets/image/MissionPacks/CriticalOps2022/Scouting2022.webp"
        alt="Scouting 2022"
      />
    </ImageFlex>
    <h3 id="crit-ops-2022-end-the-battle">11. end the battle</h3>
    <p>
      The battle ends after four Turning Points have been completed. If one player has no operatives
      remaining in the killzone, the other player continues to play out each remaining Turning Point
      until the battle ends.
    </p>
    <p>
      At the end of the battle, the player with the most victory points is the winner of the game.
      If players are tied, the game is a draw.
    </p>
    <ul>
      <li>
        Each player can score a maximum of 4 victory points from the mission objective each Turning
        Point, however each player cannot score more than 16 victory points in total from the
        mission objective during the battle.
      </li>
      <li>
        Each player can score a maximum of 2 victory points from each Tac Op. Therefore a player’s
        Tac Ops are worth 6 victory points in total.
      </li>
      <li>
        If every operative on a player’s matched roster is painted to a Battle Ready standard, that
        player scores 2 victory points.
      </li>
      <li>In total, each player can score a maximum of 24 victory points from the game.</li>
    </ul>
  </article>
</template>

<style scoped></style>
