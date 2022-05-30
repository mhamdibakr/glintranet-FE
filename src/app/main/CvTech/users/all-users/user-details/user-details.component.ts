import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCampaign } from '../../../models/all-campaign.model';
import { AllUsersService } from '../../../services/all-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllUsers } from '../../../models/allusers.model';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private AllUsersService: AllUsersService, private modalService: NgbModal ) { }
  
  id:number= this.route.snapshot.params["user_id"];
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };
  
  Users?: AllUsers;
  
  async getUsers() {
    await this.AllUsersService.getbyid(this.id).subscribe( 
      {
        next: (response: any) => {
          this.Users = response
          console.log(this.Users)
        },
        error: (err) => {
          console.error(err);
        }
      }
    );

  }

  ngOnInit(): void {
    this.getUsers();
    this.contentHeader = {
      headerTitle: 'User Details',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/home'
          },
          {
            name: 'CvTech',
            isLink: true,
            link: '/'
          },
          {
            name: 'All Users',
            isLink: true,
            link: '/allusers'
          },
          {
            name: 'Users Details',
            isLink: false,
            link: '/'
          }
        ]
      }
    };
  }
  
  


}
