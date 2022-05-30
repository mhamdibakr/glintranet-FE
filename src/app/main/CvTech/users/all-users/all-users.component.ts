// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-all-users',
//   templateUrl: './all-users.component.html',
//   styleUrls: ['./all-users.component.scss']
// })
// export class AllUsersComponent implements OnInit {
//   contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

//   constructor() { }

//   ngOnInit(): void {
//     this.contentHeader = {
//       headerTitle: 'Users',
//       actionButton: true,
//       breadcrumb: {
//         type: '',
//         links: [
//           {
//             name: 'Home',
//             isLink: true,
//             link: '/'
//           },
//           {
//             name: 'CvTech',
//             isLink: true,
//             link: '/'
//           },
//           {
//             name: 'All Users',
//             isLink: false
//           }
//         ]
//       }
//     };
//   }

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  
  public pageBasicText = 3;
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Users',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'CvTech',
            isLink: true,
            link: '/'
          },
          {
            name: 'All Users',
            isLink: false
          }
        ]
      }
    };
  }

}