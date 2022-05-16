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
        title: 'Campaign',
        //translate: 'MENU.Compaign',
        type: 'item',
        icon: 'folder-plus',
        url: 'cvtech/compaign'
      },
      {
        id: 'users',
        title: 'Users',
        //translate: 'MENU.cvtech',
        type: 'collapsible',
        icon: 'users',
        children:
         [
          {
            id: 'adduser',
            title: 'Add new user',
            //translate: 'MENU.CVs',
            type: 'item',
            icon: "plus-square",
            url: 'cvtech/cvs'
          },
          {
              id: 'allusers',
              title: 'All users',
              //translate: 'MENU.CVs',
              type: 'item',
              icon: "list",
              url: 'cvtech/cvs'
            
          }
        ]
      },
    ]

  },

]
