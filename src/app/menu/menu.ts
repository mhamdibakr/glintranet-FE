import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'sample',
    title: 'Sample',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'sample',
    url: 'sample'
  },
  {

    id: 'cvtech',
    title: 'Cvtech',
    translate: 'MENU.cvtech',
    type: 'collapsible',
    icon: 'menu',

    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        //translate: 'MENU.Dashboard',
        type: 'item',
        icon: 'monitor',
        url: 'cvtech/dashboard',
      },
      {
        id: 'cvs',
        title: 'CVs',
        //translate: 'MENU.CVs',
        type: 'item',
        icon: 'file',
        url: 'cvtech/cvs'
      },
      {
        id: 'compaign',
        title: 'Compaign',
        //translate: 'MENU.Compaign',
        type: 'item',
        icon: 'folder-plus',
        url: 'cvtech/compaign'
      },
      {
        id: 'users',
        title: 'Users',
        // translate: 'Users',
        type: 'item',
        icon: 'users',
        url: 'cvtech/users'
      },
      {
        id: 'settings',
        title: 'Settings',
        translate: 'MENU.Settings',
        type: 'collapsible',
        icon: 'users',
        children:[
          {
            id: 'gne',
            title: 'gestion des niveau d études',
            translate: 'MENU.GNE',
            type: 'item',
            icon: 'file',
            url: 'test'
          },
          {
            id: 'geg',
            title: 'gestion des expériences globale',
            translate: 'MENU.GEG',
            type: 'item',
            icon: 'folder-plus',
            url: 'test'
          },
          {
            id: 'gsc',
            title: 'gestion des secteurs de compétence',
            translate: 'MENU.Users',
            type: 'item',
            icon: 'users',
            url: 'test'
          },
          {
            id: 'gfs',
            title: 'gestion des fonctions souhaité',
            translate: 'MENU.Users',
            type: 'item',
            icon: 'users',
            url: 'test'
          }
        ]
      }

    ]

  },

]
