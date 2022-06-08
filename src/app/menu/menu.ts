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
<<<<<<< HEAD
        id: 'compaign',
=======
        id: 'campaign',
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
        title: 'MENU.Campaign',
        type: 'collapsible',
        icon: 'folder-plus',
        children:[
          {
            id: 'allcampaigns',
            title: 'All campaigns',
            type: 'item',
            icon: 'list',
            url: 'cvtech/campaign/allcampaigns'
          },
          {
            id: 'addcampaign',
            title: 'Add campaign',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/campaign/addcampaign'
          },
        ]
      },
      {
<<<<<<< HEAD
        id: 'users',
        title: 'MENU.Users',
=======
        id: 'candidats',
        title: 'Candidats',
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
        type: 'collapsible',
        icon: 'users',
        children:[
          {
<<<<<<< HEAD
            id: 'allusers',
            title: 'All user',
            type: 'item',
            icon: 'list',
            url: 'cvtech/users/allusers'
          },
          {
            id: 'adduser',
            title: 'Add User',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/users/adduser'
=======
            id: 'allcandidats',
            title: 'All candidats',
            type: 'item',
            icon: 'list',
            url: 'cvtech/candidats/allcandidats'
          },
          {
            id: 'addcandidat',
            title: 'Add Candidat',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/candidats/addcandidat'
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
          }
        ]
      },
      {
        id: 'profil',
        title: 'Profil',
        //translate: 'MENU.cvtech',
        type: 'collapsible',
        icon: 'book',
        children: [
          {
            id: 'edu',
            title: 'Education',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/education'
          },
          {
            id: 'ge',
            title: 'Global Exprience',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/global-experience'
          },
          {
            id: 'cs',
            title: 'Current Situation',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/current-situation'
          },
          {
            id: 'skill',
            title: 'Skills',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/skills'
          },
          {
            id: 'avail',
            title: 'Availabilty',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/availabilty'
          },
          {
            id: 'func',
            title: 'Function',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/function'
          }
        ]
      },
    ]

  },
<<<<<<< HEAD
=======
  {
    id: 'companies',
    type: 'collapsible',
    title: 'MENU.COMPANY.APP',
    icon: 'list',

    children: [
      {
        id: 'company',
        title: 'MENU.COMPANY.COMP',
        type: 'collapsible',
        icon: 'grid',

        children:[
          {
            id: 'allcompanies',
            title: 'MENU.COMPANY.ALLCOMPANIES',
            type: 'item',
            icon: 'list',
            url: 'companies/company/allcompanies'
          },
          {
            id: 'addcompany',
            title: 'MENU.COMPANY.ADDCOMPANY',
            type: 'item',
            icon: 'plus-square',
            url: 'companies/company/addcompany'
          },
        ]
      },
      {
        id: 'Companyentity',
        title: 'MENU.COMPANY.COMPANYENTITY',
        type: 'collapsible',
        icon: 'grid',
        children: [
          {
            id: 'Companyentity',
            title: 'MENU.COMPANY.ALLENTITIES',
            type: 'item',
            icon: 'list',
            url: 'companies/company-entity/allentities'
          },
          {
            id: 'Companyentity',
            title: 'MENU.COMPANY.ADDCOMPANYENTITY',
            type: 'item',
            icon: 'plus-square',
            url: 'companies/company-entity/addcompanyentity'
          }
        ]
        },
        {
          id: 'Department',
          title: 'MENU.COMPANY.DEPARTMENT',
          type: 'collapsible',
          icon: 'grid',
          children: [
            {
              id: 'adddepartment',
              title: 'MENU.COMPANY.ADDDEPARTMENT',
              type: 'item',
              icon: 'plus-square',
              url: 'company/adddepartment'
            }
          ]
          }
    ]
  }


>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896

]
