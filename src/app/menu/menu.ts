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
        type: 'collapsible',
        icon: 'users',
        children:[
          {
            id: 'adduser',
            title: 'MENU.adduser',
            type: 'item',
            icon: '',
            url: 'cvtech/adduser'
          },
          {
            id: 'users',
            title: 'MENU.listuser',
            type: 'item',
            icon: '',
            url: 'cvtech/users'
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
