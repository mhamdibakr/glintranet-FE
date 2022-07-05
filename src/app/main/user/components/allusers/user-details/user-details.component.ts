import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'app/main/models/user.model';
import { UserService } from 'app/main/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  constructor(private modalService: NgbModal, private userService: UserService, private router: ActivatedRoute) { }

  public contentHeader: Object; y
  public user: User = {
    firstName: "",
    lastName: "",
    CIN: "",
    username: 0,
    email: "",
    password: "",
    phoneNumber: "",
    role: ""
  }

  private id = this.router.snapshot.params['userId'];
  public MultiDefaultSelected = [];
  public roles = []

  ngOnInit(): void {
    this.roles = [
      { name: "Admin" },
      { name: "User" },
      { name: "RH" }
    ];

    this.getUser();

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
            name: 'All Users',
            isLink: true,
            link: '/user/Allusers'
          },
          {
            name: 'User Details',
            isLink: false
          }
        ]
      }
    };
  }

  getUser() {
    this.userService.getUser(this.id).subscribe({
      next: (res: any) => {
        this.user = res;
        console.log(this.user);
      },
      error: (err) => console.log(err)
    })
  }

  resetFormWithDefaultValues() {
    console.log("45554");

  }

  pushOrPop(event: Event) {
    console.log(event.target["checked"]);

  }

}
