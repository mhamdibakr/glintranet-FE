import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCandidatService } from '../../../../services/all-candidat.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllCandidat } from '../../../../models/all-candidat.model';

//added by saad for form input validation....
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeKeyedRead } from '@angular/compiler';


@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.scss']
})
export class CandidatDetailsComponent implements OnInit {

  modalOpenForm(modalForm) {
    this.modalService.open(modalForm);
  }

  // name: '';
  // email: '';
  // phone: '';
  // adress: '';
  // city: '';
  // country: '';
  // birthDate: '';
  // bio: '';
  constructor(private route: ActivatedRoute, private AllCandidatService: AllCandidatService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  id: number = this.route.snapshot.params["candidat_id"];
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  User?: AllCandidat = {
    id: 0,
    civility: undefined,
    name: undefined,
    email: undefined,
    phone: undefined,
    adress: undefined,
    city: undefined,
    country: undefined,
    birthDate: undefined,
    message: undefined
  };

  // added by saad.................. 

  form = new FormGroup({
    id: new FormControl(this.id),
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    adress: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    birthDate: new FormControl(''),
    civility: new FormControl(''),
    message: new FormControl(''),
  });
  submitted = false;

  async getUsers() {
    this.AllCandidatService.getbyid(this.id).subscribe(
      {
        next: (response: any) => {
          this.User = response;
          // console.log("//////////////////////" + this.User);
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
      headerTitle: 'Candidat Details',
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
            name: 'All Candidats',
            isLink: true,
            link: '/cvtech/candidats/allcandidats'
          },
          {
            name: 'Candidats Details',
            isLink: false,
            link: '/'
          }
        ]
      }
    };


    // added by saad.............

    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        birthDate: ['', Validators.required],
        civility: ['', Validators.required],
        country: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern(/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/g),

          ]
        ],
        city: ['',
          [
            Validators.required,
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        adress: ['', Validators.required],
        message: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(255)
          ]
        ],
      }
      // },
      // {
      //   validators: [Validation.match('password', 'confirmPassword')]
      // }
    );

    this.AllCandidatService.getbyid(this.route.snapshot.params['user_id']).subscribe({
      next: (data) => {
        console.log(data);
        this.User = data;
      },
      error: (err) => {
        console.error(err);
      },
    }
    );


  }

  updateCandidat(id: number): void {
    
    this.User=this.form.value;
    console.log(this.User);
    
    this.AllCandidatService.update(this.User, id).subscribe({
      next: (data) => {
        console.log(data);
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  //added by saad...........
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.updateCandidat(this.id);
    // console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
