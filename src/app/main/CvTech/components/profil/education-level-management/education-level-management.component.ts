import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../../../models/education';
import { EducationService } from '../../../services/education.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-level-management',
  templateUrl: './education-level-management.component.html',
  styleUrls: ['./education-level-management.component.scss']
})
export class EducationLevelManagementComponent implements OnInit {
  public education: Education = {
    name: '', description: '',
    id: 0
  }
  public contentHeader: object;
  public data!: Education[];

  educationForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })


  constructor(
    private modalService: NgbModal,
    private educationService: EducationService,

    private formBuilder: FormBuilder,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.getAllEducations()
    this.contentHeader = {
      headerTitle: 'Education',
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
            name: 'Profil',
            isLink: true,
            link: '/'
          },
          {
            name: 'Education',
            isLink: false
          }
        ]
      }
    };

    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/[A-zÀ-ú]/)
          ]
        ],
        description: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(255)
          ]
        ],

      }
    );

    this.formUpdate = this.formBuilder.group(
      {
        name: [
          '',
          [

            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/[A-zÀ-ú]/)
          ]
        ],
        description: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(255)
          ]
        ],

      }
    );

  }

  // ----------------- Add -----------------
  edu: Education = {
    name: '',
    description: '',
    id: 0
  }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  submitted = false;
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.education = this.form.value;
    console.log(this.education);

    this.addData();

  }
  public addData(): void {


    this.educationService.addEducation(this.education).subscribe({
        next: (data) => {
          console.log("console log", data);
          this.router.navigateByUrl("/cvtech/profile/education");

          // this.ngOnInit();
        },
        error : (err) => console.error(err)
      })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get fU(): { [key: string]: AbstractControl } {
    return this.formUpdate.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  // ----------------------------------

  private modal = null;
  private id = 0;

  modalOpenDanger(modalDanger, id: any) {
    this.id = id
    this.modal = this.modalService.open(modalDanger, {
      centered: true,
      windowClass: 'modal modal-danger'
    });
  }

  public deleteData(): void {

    this.modal.close('Accept click')
    console.log(this.id)
    this.educationService.deleteEducation(this.id).subscribe(
      () => { this.ngOnInit() },
      (error: HttpErrorResponse) => { alert(error.message) }

    )
  }

  modalOpenPrimary(modalPrimary) {
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

  // -------------------- pagination & search
  page = 1;
  count = 0;
  name = ''
  public pagePosition = 1;
  public totalPages = 0;


  public pageChanged(event: any): void {
    this.page = event;
    this.getAllEducations();
  }

  getParams(page: number, pageSize: number, name: string) {
    let params: any = {};
    if (page) {
      params['page'] = page - 1;
    }
    if (pageSize) {
      params['size'] = pageSize;
    }
    if (name) {
      params['name'] = name;
    }

    return params;
  }

  // ----------------- Get -----------------
  public chkBoxSelected = [];
  educations?: Education[]

  public getAllEducations(): void {
    const params = {
      page: this.page - 1,
      size: 3,
      name: this.name
    }
    this.educationService.getAllPagination(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.count = totalElements;
          this.totalPages = totalPages * 10
          this.educations = response.content

        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }


  // ----------------- Update -----------------

  public educationLevel: Education = {
    name: undefined,
    description: undefined,
    id: 0
  }

  formUpdate: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  onUpdate(): void {
    this.submitted = true;
    console.log(this.formUpdate.value);

    if (this.formUpdate.invalid) {
      return;
    }
    this.educationLevel = this.formUpdate.value;

    this.updateEducation();

  }

  updateEducation(): void {
    console.log(this.id);

    console.log("education ", this.educationLevel);

    this.educationService.update(this.educationLevel, this.id).subscribe({
      next: (data) => {
        console.log("update --> ", data);
        this.ngOnInit()
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  modalOpenSM(modalSM, id: any) {
    this.id = id
    this.modalService.open(modalSM, {
      centered: true,
      size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'

    });
    console.log("===>", this.id)
  }

}
