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
      }
    ]

  },

]
