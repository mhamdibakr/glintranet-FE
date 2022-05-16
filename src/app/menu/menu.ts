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
        id: 'campaigns',
        title: 'Campaigns',
        //translate: 'MENU.cvtech',
        type: 'collapsible',
        icon: 'users',
        children:
         [
          {
            id: 'addcampaign',
            title: 'Add campaign',
            //translate: 'MENU.CVs',
            type: 'item',
            icon: "plus-square",
            url: 'cvtech/cvs'
          },
          {
            
              id: 'adduser',
              title: 'All campaigns',
              //translate: 'MENU.CVs',
              type: 'item',
              icon: "list",
              url: 'cvtech/cvs'
          }
        ]
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
            title: 'Add user',
            //translate: 'MENU.CVs',
            type: 'item',
            icon: "plus-square",
            url: 'cvtech/cvs'
          },
          {
            
              id: 'adduser',
              title: 'Add new user',
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
