import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllCandidat } from 'app/main/CvTech/models/all-candidat.model';
import { AllCandidatService } from 'app/main/CvTech/services/all-candidat.service';
import { User } from 'app/main/models/user.model';
import { UserService } from 'app/main/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  public user: User = {
    firstName: undefined,
    lastName: undefined,
    CIN: undefined,
    username: 0,
    email: undefined,
    password: undefined,
    phoneNumber: undefined,
    birthDate: undefined,
    roles: [
      {
        id: 0,
        name: "",
        description: ""
      }
    ]
  }



  public form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    username: new FormControl(''),
    birthDate: new FormControl(false),
    password: new FormControl(),
    CIN: new FormControl(),
    roles: new FormControl([])
  });
  submitted = false;
  public roles = [
    { name: "Admin", checked: false },
    { name: "User", checked: false },
    { name: "RH", checked: false }
  ];

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.contentHeader = {
      headerTitle: 'User',
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
            name: 'Users',
            isLink: true,
            link: '/user/Allusers'
          },
          {
            name: 'Add User',
            isLink: false
          }
        ]
      }
    };

    this.form = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        birthDate: ['', Validators.required],
        CIN: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern(/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/g),

          ]
        ],
        password: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]
      }
    );


  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.user = this.form.value;
    this.user.roles = [{
      id: 0,
      name: "",
      description: ""
    }]

    this.roles.forEach(role => {
      if (role.checked) {
        const userRole = {
          id: 0,
          name: role.name,
          description: ""
        }
        this.user.roles.push(userRole);
      }
    })
    this.addNewUseer();

  }
  private addNewUseer() {
    this.user.roles.splice(0,1)

    this.userService.addUser(this.user).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("/user/Allusers");
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  pushOrPop(event: Event) {
    const name = event.target["name"]
    const isChecked = event.target["checked"]
    
    this.roles.find(role => {
      role.name == name ? role.checked = isChecked : null
    })
  }

}
