import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'cvtech',
    title: 'MENU.cvtech',
    type: 'collapsible',
    icon: 'menu',

    children: [
      {
        id: 'dashboard',
        title: 'MENU.Dashboard',
        type: 'item',
        icon: 'monitor',
        url: 'cvtech/dashboard',
      },
      {
        id: 'cvs',
        title: 'MENU.CVs',
        type: 'item',
        icon: 'file',
        url: 'cvtech/cvs'
      },
      {
        id: 'campaign',
        title: 'MENU.Campaign',
        type: 'collapsible',
        icon: 'folder-plus',
        children:[
          {
            id: 'allcampaigns',
            title: 'All campaigns',
            type: 'item',
            icon: 'list',
            url: 'cvtech/campaign/allcampaigns'
          },
          {
            id: 'addcampaign',
            title: 'Add campaign',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/campaign/addcampaign'
          },
        ]
      },
      {
        id: 'candidats',
        title: 'Candidats',
        type: 'collapsible',
        icon: 'users',
        children:[
          {
            id: 'allcandidats',
            title: 'All candidats',
            type: 'item',
            icon: 'list',
            url: 'cvtech/candidats/allcandidats'
          },
          {
            id: 'addcandidat',
            title: 'Add Candidat',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/candidats/addcandidat'
          }
        ]
      },
      {
        id: 'profil',
        title: 'Profil',
        //translate: 'MENU.cvtech',
        type: 'collapsible',
        icon: 'book',
        children: [
          {
            id: 'edu',
            title: 'Education',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/education'
          },
          {
            id: 'ge',
            title: 'Global Exprience',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/global-experience'
          },
          {
            id: 'cs',
            title: 'Current Situation',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/current-situation'
          },
          {
            id: 'skill',
            title: 'Skills',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/skills'
          },
          {
            id: 'avail',
            title: 'Availabilty',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/availabilty'
          },
          {
            id: 'func',
            title: 'Function',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/function'
          }
        ]
      },
    ]

  },

]
