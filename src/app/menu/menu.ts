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

    id: 'cvtech',
    title: 'CvTech',
    translate: 'MENU.cvtech',
    type: 'collapsible',
    icon: 'menu',

    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        translate: 'MENU.Dashboard',
        type: 'item',
        icon: 'monitor',
        url: 'test',
      },
      {
        id: 'cv',
        title: 'CVs',
        translate: 'MENU.CVs',
        type: 'item',
        icon: 'file',
        url: 'test'
      },
      {
        id: 'campaign',
        title: 'Campaign',
        translate: 'MENU.Campaign',
        type: 'item',
        icon: 'folder-plus',
        url: 'test'
      },
      {
        id: 'users',
        title: 'Users',
        translate: 'MENU.Users',
        type: 'item',
        icon: 'users',
        url: 'test'
      }
    ]

  },

]
