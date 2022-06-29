import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllCandidat } from 'app/main/CvTech/models/all-candidat.model';
import { AllCandidatService } from 'app/main/CvTech/services/all-candidat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  public candidat = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    username: undefined,
    birthDate: undefined,
    password: undefined,
    cin: undefined
  }


  public form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    username: new FormControl(''),
    birthDate: new FormControl(false),
    password: new FormControl(),
    cin: new FormControl()
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private AllCandidatService: AllCandidatService,
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
        cin: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [
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
    this.candidat = this.form.value;

    // this.addNewCandidat();

  }
  // private addNewCandidat() {
  //   this.AllCandidatService.addCandidat(this.candidat).subscribe(
  //     {
  //       next: (response: any) => {
  //         console.log(response);
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Your work has been saved',
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         this.router.navigateByUrl("/cvtech/candidats/allcandidats");
  //       }, error: (err) => {
  //         console.error(err);
  //       }
  //     }
  //   );
  // }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
