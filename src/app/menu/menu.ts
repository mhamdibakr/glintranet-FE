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
            id: 'addcampaign',
            title: 'Add campaign',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/addcampaign'
          },
          {
            id: 'allcampaigns',
            title: 'All campaigns',
            type: 'item',
            icon: 'list',
            url: 'cvtech/allcampaigns'
          },
        ]
        
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
            //url: 'cvtech/compaign'
          },
          {
            id: 'users',
            title: 'MENU.users',
            type: 'item',
            icon: '',
            //url: 'cvtech/compaign'
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
          }
        ]
      },
    ]

  },

]
