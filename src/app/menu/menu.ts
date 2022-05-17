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

    children: 
    [
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
        type: 'collapsible',
        icon: 'folder-plus',
        children:[
          {
            id: 'allcampaigns',
            title: 'All campaigns',
            type: 'item',
            icon: 'list',
            url: 'cvtech/allcampaigns'
          },
          {
            id: 'addcampaign',
            title: 'Add campaign',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/addcampaign'
          },
        ]
        
      },
      {
        id: 'users',
        title: 'MENU.Users',
        type: 'item',
        icon: 'users',
        children:[
          {
            id: 'allusers',
            title: 'All user',
            type: 'item',
            icon: 'list',
            url: 'cvtech/allusers'
          },
          {
            id: 'adduser',
            title: 'Add User',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/adduser'
          }
        ]
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
            url: 'cvtech/education'
          },
          {
            id: 'geg',
            title: 'MENU.GEG',
            type: 'item',
            icon: 'file',
            url: 'cvtech/global-experience'
          },
          {
            id: 'gsc',
            title: 'MENU.GSC',
            type: 'item',
            icon: 'file',
            url: '/gsc'
          },
          {
            id: 'gfs',
            title: 'MENU.GFS',
            type: 'item',
            icon: 'file',
            url: '/gfs'
          }
        ]
      },
    ]

  },

]
