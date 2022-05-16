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
            url: 'global-experience-management'
          },
          {
            id: 'adduser',
            title: 'Add user',
            //translate: 'MENU.CVs',
            type: 'item',
            icon: 'file',
            url: 'gsc'
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
