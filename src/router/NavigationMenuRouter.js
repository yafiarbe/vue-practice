const NavigationMenuRouter = [
  {
    path: '/',
    name: 'Home',
    open: true,
    component: () => import('../views/HomeView.vue'),
    children: []
  },
  // TEST
  {
    path: '/core-rules',
    name: 'Core Rules',
    open: true,
    component: () => import('../views/CoreRulesView.vue'),
    children: [
      {
        path: '#tools-of-war',
        name: 'Tools of War',
        open: false,
        typeListChildren: 'ul',
        // component: () => import('../views/CoreRulesView.vue'),
        children: [
          {
            path: '#operatives-and-kill-teams',
            name: 'Operatives and Kill Teams',
            open: true
            // component: () => import('../views/CoreRulesView.vue')
            // children: []
          },
          {
            path: '#distances',
            name: 'Distances',
            open: true
            // component: () => import('../views/CoreRulesView.vue')
            // children: []
          },
          {
            path: '#killzon',
            name: 'Killzon',
            open: true
            // component: () => import('../views/CoreRulesView.vue')
            // children: []
          },
          {
            path: '#dice',
            name: 'Dice',
            open: true
            // component: () => import('../views/CoreRulesView.vue')
            // children: []
          }
        ]
      },
      {
        path: '#datacards',
        name: 'Datacards',
        open: false,
        typeListChildren: 'ul',
        // component: () => import('../views/CoreRulesView.vue'),
        children: [
          // {path: '', name: '',open: true, component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '',open: true, component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '',open: true, component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '',open: true, component: () => import('../views/CoreRulesView.vue'), children:[]},
        ]
      },
      {
        path: '#battle-structure',
        name: 'Battle Structure',
        open: false,
        typeListChildren: 'ul'
        // component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#initiative-phase',
        name: 'Initiative Phase',
        open: false,
        typeListChildren: 'ol',
        // component: () => import('../views/CoreRulesView.vue'),
        children: [
          // {path: '', name: '',open: true, component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '',open: true, component: () => import('../views/CoreRulesView.vue'), children:[]},
        ]
      },
      {
        path: '#strategy-phase',
        name: 'Strategy Phase',
        open: false,
        typeListChildren: 'ol',
        // component: () => import('../views/CoreRulesView.vue'),
        children: [
          // {path: '', name: '',open: true, component: () => import('../views/CoreRulesView.vue'), children:[]},
        ]
      },
      {
        path: '#firefight-phase',
        name: 'Firefight Phase',
        open: false,
        typeListChildren: 'ul',
        // component: () => import('../views/CoreRulesView.vue'),
        children: [
          {
            path: '#perform-actions',
            name: 'Perform Actions',
            open: true
            // component: () => import('../views/CoreRulesView.vue')
          },
          {
            path: '#actions',
            name: 'Actions',
            open: true,
            // component: () => import('../views/CoreRulesView.vue'),
            children: [
              {
                path: '#action-normal-move',
                name: 'Normal Move',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-fly',
                name: 'Fly',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-charge',
                name: 'Charge',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-fall-back',
                name: 'Fall Back',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-dash',
                name: 'Dash',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-pass',
                name: 'Pass',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-overwatch',
                name: 'Overwatch',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-pick-up',
                name: 'Pick Up',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-shoot',
                name: 'Shoot',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-fight',
                name: 'Fight',
                open: true
                // component: () => import('../views/CoreRulesView.vue')
              }
            ]
          }
        ]
      },
      {
        path: '#wounds-and-damage',
        name: 'Wounds and Damage',
        open: false,
        typeListChildren: 'ol'
        // component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#controlling-objective-markers-and-tokens',
        name: 'Controlling Objective Markers and Tokens',
        open: false,
        typeListChildren: 'ul'
        // component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#line-of-sight',
        name: 'Line of Sight',
        open: false,
        typeListChildren: 'ul',
        // component: () => import('../views/CoreRulesView.vue'),
        children: [
          { path: '#visible', name: 'Visible' },
          { path: '#obscured', name: 'Obscured' },
          { path: '#cover', name: 'Cover' }
        ]
      },
      {
        path: '#killzones',
        name: 'Killzones',
        open: false,
        typeListChildren: 'ul',
        children: [
          {
            path: '#moving-through-terrain',
            name: 'Moving Through Terrain',
            open: false,
            typeListChildren: 'ul',
            children: [
              {
                path: '#moving-through-terrain-traverse',
                name: 'Traverse',
                open: false,
                typeListChildren: 'ul'
              },
              {
                path: '#moving-through-terrain-jump',
                name: 'Jump',
                open: false,
                typeListChildren: 'ul'
              },
              {
                path: '#moving-through-terrain-climb',
                name: 'Climb',
                open: false,
                typeListChildren: 'ul'
              },
              {
                path: '#moving-through-terrain-drop',
                name: 'Drop',
                open: false,
                typeListChildren: 'ul'
              },
              {
                path: '#moving-through-terrain-flying-over-terrain',
                name: 'Flying Over Terrain',
                open: false,
                typeListChildren: 'ul'
              }
            ]
          }
        ]
      },
      {
        path: '#ways-to-play',
        name: 'Ways to Play',
        open: false,
        typeListChildren: 'ul',
        // component: () => import('../views/CoreRulesView.vue'),
        children: []
      }
    ]
  },
  {
    path: '/rulebooks',
    name: 'Rulebook',
    open: true,
    component: () => import('../views/RulebookView.vue'),
    children: []
  },
  {
    path: '/mission-packs',
    name: 'Mission Packs',
    open: true,
    component: () => import('../views/MissionPacksView.vue'),
    children: []
  },
  {
    path: '/killteams',
    name: 'Kill Teams',
    open: true,
    component: () => import('../views/KillTeamsView.vue'),
    children: []
  },
  {
    path: '/expansions',
    name: 'Expansions',
    open: true,
    component: () => import('../views/ExpansionsView.vue'),
    children: []
  },
  {
    path: '/criticalops2022',
    name: 'Critical Ops 2022',
    open: false,
    component: () => import('../views/CriticalOps2022Wiew.vue'),
    children: [
      {
        path: '#crit-ops-2022-books',
        name: 'Books',
        open: false
        // typeListChildren: 'ul',
      },
      {
        path: '#crit-ops-2022-matched-play-game-sequence',
        name: 'Matched Play Game Sequence',
        open: false,
        // typeListChildren: 'ul',
        children: [
          {
            path: '#crit-ops-2022-determine-mission-and-map',
            name: '1. Determine Mission and Map',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-set-up-markers-and-killzone',
            name: '2. Set Up Objective Markers and Killzone',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-determine-attacker-and-defender',
            name: '3. Determine Attacker and Defender',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-select-kill-team',
            name: '4. Select a Kill Team',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-select-tac-ops',
            name: '5. Select Tac Ops',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-select-equipment',
            name: '6. Select Equipment',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-set-up-barricades',
            name: '7. Set Up Barricades',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-set-up-operatives',
            name: '8. Set Up Operatives',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-scouting',
            name: '9. Scouting',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-play-the-battle',
            name: '10. Play the Battle',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-end-the-battle',
            name: '11. End the Battle',
            open: false
            // typeListChildren: 'ul',
          }
        ]
      },
      {
        path: '#crit-ops-2022-close-quarters',
        name: 'Crit Ops 2022: Close Quarters',
        open: false,
        // typeListChildren: 'ul',
        children: []
      },
      {
        path: '#crit-ops-2022-card-decks',
        name: 'Card Decks',
        open: false,
        // typeListChildren: 'ul',
        children: [
          {
            path: '#crit-ops-2022-card-decks-close-quarters',
            name: 'Close Quarters Mission Maps',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-card-decks-mission-maps',
            name: 'Mission Maps',
            open: false
            // typeListChildren: 'ul',
          },
          {
            path: '#crit-ops-2022-card-decks-mission-rules',
            name: 'Mission Rules',
            open: false
            // typeListChildren: 'ul',
          }
        ]
      }
    ]
  }
]

export default NavigationMenuRouter
