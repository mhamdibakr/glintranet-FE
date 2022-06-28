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
        title: 'MENU.CVTECH.APP',
        type: 'collapsible',
        icon: 'folder-plus',
        children:[
          {
            id: 'allcampaigns',
            title: 'MENU.CVTECH.ALLCAMPAIGNS',
            type: 'item',
            icon: 'list',
            url: 'cvtech/campaign/allcampaigns'
          },
          {
            id: 'addcampaign',
            title: 'MENU.CVTECH.ADDCAMPAIGN',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/campaign/addcampaign'
          },
        ]
      },
      {
        id: 'candidats',
        title: 'MENU.CVTECH.CANDIDAT',
        type: 'collapsible',
        icon: 'users',
        children:[
          {
            id: 'allcandidats',
            title: 'MENU.CVTECH.ALLCANDIDATS',
            type: 'item',
            icon: 'list',
            url: 'cvtech/candidats/allcandidats'
          },
          {
            id: 'addcandidat',
            title: 'MENU.CVTECH.ADDCANDIDAT',
            type: 'item',
            icon: 'plus-square',
            url: 'cvtech/candidats/addcandidat'
          }
        ]
      },
      {
        id: 'profil',
        title: 'Profil',
        type: 'collapsible',
        icon: 'book',
        children:[
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
            type:'item',
            icon: 'file',
            url: 'cvtech/profile/experience'
          },
          {
            id: 'cs',
            title: 'Current Situation',
            type: 'item',
            icon: 'file',
            url: 'cvtech/profile/situation'
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
  {
    id: 'companies',
    type: 'collapsible',
    title: 'MENU.COMPANY.APP',
    icon: 'menu',

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
        type: 'item',
        icon: 'grid',
        url: 'companies/department/department'
      },
      {
        id: 'Team',
        title: 'MENU.COMPANY.TEAM',
        type: 'collapsible',
        icon: 'grid',
        children: [
          {
            id: 'allteams',
            title: 'MENU.COMPANY.ALLTEAMS',
            type: 'item',
            icon: 'plus-square',
            url: 'companies/team/allteams'
          }
        ]
      },
      {
        id: 'Project',
        title: 'MENU.COMPANY.PROJECT',
        type: 'collapsible',
        icon: 'grid',
        children: [
          {
            id: 'allprojects',
            title: 'MENU.COMPANY.ALLPROJECTS',
            type: 'item',
            icon: 'plus-square',
            url: 'companies/project/allprojects'
          }
        ]
      },
      {
        id: 'Employee',
        title: 'MENU.COMPANY.EMPLOYEE',
        type: 'collapsible',
        icon: 'grid',
        children: [
          {
            id: 'addemployee',
            title: 'MENU.COMPANY.ADDEMPLOYEE',
            type: 'item',
            icon: 'plus-square',
            url: 'companies/employee/addemployee'
          }
        ]
      },
    ]
  },
  {
    id: 'FAQ',
    title: 'MENU.FAQ',
    type: 'collapsible',
    icon: 'menu',
    children: [
      {
        id: 'FAQs',
        title: 'All FAQs',
        type: 'item',
        icon: 'list',
        url: 'faq/Allfaqs'
      },
      {
        id: 'addFAQ',
        title: 'Add FAQ',
        type: 'item',
        icon: 'plus-square',
        url: 'faq/Addfaq'
      }
    ]
  },
  {
    id: 'Document',
    title: 'Document',
    type: 'collapsible',
    icon: 'file',
    children: [
      {
        id: 'Documents',
        title: 'All Docs',
        type: 'item',
        icon: 'list',
        url: 'doc/Alldocs'
      },
      {
        id: 'adddoc',
        title: 'Upload Doc',
        type: 'item',
        icon: 'plus-square',
        url: 'doc/Adddoc'
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    type: 'item',
    icon: 'book',
    url: 'projects'
  },
  {
    id: 'User',
    title: 'User',
    type: 'collapsible',
    icon: 'users',
    children: [
      {
        id: 'Users',
        title: 'All Users',
        type: 'item',
        icon: 'list',
        url: 'user/Allusers'
      },
      {
        id: 'adduser',
        title: 'Add User',
        type: 'item',
        icon: 'plus-square',
        url: 'user/Adduser'
      }
    ]
  },

  {
    id: 'stats',
    title: 'Statistics',
    type: 'item',
    icon: 'monitor',
    url: 'stats'
  }

]
