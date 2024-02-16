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
        component: () => import('../views/CoreRulesView.vue')
      },
      {
        path: '#datacards',
        name: 'Datacards',
        component: () => import('../views/CoreRulesView.vue')
      }
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
      // {path: '/core-rules#', name: '', component: () => import('../views/CoreRulesView.vue')},
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
