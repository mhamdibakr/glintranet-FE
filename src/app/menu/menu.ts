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
        id: 'compaign',
        title: 'MENU.Campaign',
        type: 'item',
        icon: 'folder-plus',
        url: 'cvtech/compaign'
      },
      {
        id: 'users',
        title: 'MENU.Users',
        type: 'item',
        icon: 'users',
        url: 'cvtech/users'
      },
      {
        id: 'settings',
        title: 'MENU.Settings',
        type: 'collapsible',
        icon: 'book',
        children: [
          {
            id: 'gne',
            title: 'MENU.GNE',
            type: 'item',
            icon: 'file',
            url: 'education-management'
          },
          {
            id: 'geg',
            title: 'MENU.GEG',
            type: 'item',
            icon: 'file',
            url: 'test'
          },
          {
            id: 'gsc',
            title: 'MENU.GSC',
            type: 'item',
            icon: 'file',
            url: 'test'
          },
          {
            id: 'gfs',
            title: 'MENU.GFS',
            type: 'item',
            icon: 'file',
            url: 'test'
          }
        ]
      }

    ]

  },

]
