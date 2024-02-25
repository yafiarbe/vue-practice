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
        component: () => import('../views/CoreRulesView.vue'),
        children: [
          {
            path: '#operatives-and-kill-teams',
            name: 'Operatives and Kill Teams',
            open: true,
            component: () => import('../views/CoreRulesView.vue')
            // children: []
          },
          {
            path: '#distances',
            name: 'Distances',
            open: true,
            component: () => import('../views/CoreRulesView.vue')
            // children: []
          },
          {
            path: '#killzon',
            name: 'Killzon',
            open: true,
            component: () => import('../views/CoreRulesView.vue')
            // children: []
          },
          {
            path: '#dice',
            name: 'Dice',
            open: true,
            component: () => import('../views/CoreRulesView.vue')
            // children: []
          }
        ]
      },
      {
        path: '#datacards',
        name: 'Datacards',
        open: false,
        typeListChildren: 'ul',
        component: () => import('../views/CoreRulesView.vue'),
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
        typeListChildren: 'ul',
        component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#initiative-phase',
        name: 'Initiative Phase',
        open: false,
        typeListChildren: 'ol',
        component: () => import('../views/CoreRulesView.vue'),
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
        component: () => import('../views/CoreRulesView.vue'),
        children: [
          // {path: '', name: '',open: true, component: () => import('../views/CoreRulesView.vue'), children:[]},
        ]
      },
      {
        path: '#firefight-phase',
        name: 'Firefight Phase',
        open: true,
        typeListChildren: 'ul',
        component: () => import('../views/CoreRulesView.vue'),
        children: [
          {
            path: '#perform-actions',
            name: 'Perform Actions',
            open: true,
            component: () => import('../views/CoreRulesView.vue')
          },
          {
            path: '#actions',
            name: 'Actions',
            open: true,
            component: () => import('../views/CoreRulesView.vue'),
            children: [
              {
                path: '#action-normal-move',
                name: 'Normal Move',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-fly',
                name: 'Fly',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-charge',
                name: 'Charge',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-fall-back',
                name: 'Fall Back',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-dash',
                name: 'Dash',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-pass',
                name: 'Pass',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-overwatch',
                name: 'Overwatch',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-pick-up',
                name: 'Pick Up',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-shoot',
                name: 'Shoot',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              },
              {
                path: '#action-fight',
                name: 'Fight',
                open: true,
                component: () => import('../views/CoreRulesView.vue')
              }
            ]
          }
        ]
      },
      {
        path: '#wounds-and-damage',
        name: 'Wounds and Damage',
        open: false,
        typeListChildren: 'ol',
        component: () => import('../views/CoreRulesView.vue'),
        children: []
      },
      {
        path: '#controlling-objective-markers-and-tokens',
        name: 'Controlling Objective Markers and Tokens',
        open: false,
        typeListChildren: 'ul',
        component: () => import('../views/CoreRulesView.vue'),
        children: []
      },
      {
        path: '#line-of-sight',
        name: 'Line of Sight',
        open: false,
        typeListChildren: 'ul',
        component: () => import('../views/CoreRulesView.vue'),
        children: []
      },
      {
        path: '#killzones',
        name: 'Killzones',
        open: false,
        typeListChildren: 'ul',
        component: () => import('../views/CoreRulesView.vue'),
        children: []
      },
      {
        path: '#ways-to-play',
        name: 'Ways to Play',
        open: false,
        typeListChildren: 'ul',
        component: () => import('../views/CoreRulesView.vue'),
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
  }
]

export default NavigationMenuRouter
