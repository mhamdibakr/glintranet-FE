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
    roles: [
      {
        id: 0,
        name: "",
        description: ""
      }
    ],
    birthDate: undefined
  }

  private id = this.router.snapshot.params['userId'];
  public MultiDefaultSelected = [];
  public roles = [
    { name: "Admin", checked: false },
    { name: "User", checked: false },
    { name: "RH", checked: false }
  ];

  ngOnInit(): void {
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
        this.user.roles.forEach(role => {
          this.roles.forEach(inRole => {
            role.name == inRole.name ? inRole.checked = true : null
          })
        })
      },
      error: (err) => console.log(err)
    })
  }

  resetFormWithDefaultValues() {
    console.log("45554");

  }

  updateUser() {
    console.log(this.user);
    
    this.userService.updateUser(this.user, this.id).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err)      
    })
  }

  pushOrPop(event: Event) {
    console.log(event.target["checked"]);

  }

}
