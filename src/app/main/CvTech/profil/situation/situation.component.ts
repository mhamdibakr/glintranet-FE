import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.scss']
})
export class SituationComponent implements OnInit {
  public contentHeader: object;
  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Globale Experience Managment',
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
            name: 'Globale Experience',
            isLink: false
          }
        ]
      }
    };
  }
}
