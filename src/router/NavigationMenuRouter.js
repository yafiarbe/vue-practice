const NavigationMenuRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  // TEST
  {
    path: '/core-rules',
    name: 'CoreRules',
    component: () => import('../views/CoreRulesView.vue'),
    children: [
      {
        path: '#tools-of-war',
        name: 'Tools of War',
        component: () => import('../views/CoreRulesView.vue'),
        children: [
          {
            path: '#operatives-and-kill-teams',
            name: 'Operatives and Kill Teams',
            component: () => import('../views/CoreRulesView.vue'),
            children: []
          },
          {
            path: '#distances',
            name: 'Distances',
            component: () => import('../views/CoreRulesView.vue'),
            children: []
          },
          {
            path: '#killzon',
            name: 'Killzon',
            component: () => import('../views/CoreRulesView.vue'),
            children: []
          },
          {
            path: '#dice',
            name: 'Dice',
            component: () => import('../views/CoreRulesView.vue'),
            children: []
          }
        ]
      },
      {
        path: '#datacards',
        name: 'Datacards',
        component: () => import('../views/CoreRulesView.vue'),
        children: [
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
        ]
      },
      {
        path: '#battle-structure',
        name: 'Battle Structure',
        component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#initiative-phase',
        name: 'Initiative Phase',
        component: () => import('../views/CoreRulesView.vue'),
        children: [
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
        ]
      },
      {
        path: '#strategy-phase',
        name: 'Strategy Phase',
        component: () => import('../views/CoreRulesView.vue'),
        children: [
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
        ]
      },
      {
        path: '#firefight-phase',
        name: 'Firefight Phase',
        component: () => import('../views/CoreRulesView.vue'),
        children: [
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
          // {path: '', name: '', component: () => import('../views/CoreRulesView.vue'), children:[]},
        ]
      },
      {
        path: '#wounds-and-damage',
        name: 'Wounds and Damage',
        component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#controlling-objective-markers-and-tokens',
        name: 'Controlling Objective Markers and Tokens',
        component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#line-of-sight',
        name: 'Line of Sight',
        component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#killzones',
        name: 'Killzones',
        component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#ways-to-play',
        name: 'Ways to Play',
        component: () => import('../views/CoreRulesView.vue')
      }
    ]
  },
  {
    path: '/rulebooks',
    name: 'Rulebook',
    component: () => import('../views/RulebookView.vue')
  },
  {
    path: '/mission-packs',
    name: 'Mission Packs',
    component: () => import('../views/MissionPacksView.vue')
  },
  {
    path: '/killteams',
    name: 'Kill Teams',
    component: () => import('../views/KillTeamsView.vue')
  },
  {
    path: '/expansions',
    name: 'Expansions',
    component: () => import('../views/ExpansionsView.vue')
  }
]

export default NavigationMenuRouter
