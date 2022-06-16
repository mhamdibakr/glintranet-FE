import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from '../../../models/company.model';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.scss']
})
export class AllCompaniesComponent implements OnInit {

  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  companies?: Company[];
  public chkBoxSelected = [];


  company: Company = {
    id: null,
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
    webSite: '',
    image: '',
    entities: []
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    webSite: new FormControl(''),
  });

  constructor(private modalService: NgbModal, private companyService: CompanyService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Company',
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
            name: 'Companies',
            isLink: true,
            link: '/'
          },
          {
            name: 'Company',
            isLink: true,
            link: '/'
          },
          {
            name: 'AllCompanies',
            isLink: false
          }
        ]
      }
    };
    this.getCompanies();

  }

  get formControl(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //  pagination & search

  page = 1;
  count = 0;
  name = '';
  sizeSelect = 5;
  public pagePosition = 1;
  public totalPages = 0;


  public pageChanged(event: any): void {
    this.page = event;
    this.getCompanies();
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

  public getCompanies(): void {
    const params = {
      page: this.page - 1,
      size: this.sizeSelect,
      name: this.name
    }
    this.companyService.getCompanies(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.count = totalElements;
          this.totalPages = totalPages * 10
          this.companies = response.content

        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  //Edit 

  modalEdit(modalPrimaryedit, id) {
    console.log(id);
    this.companyService.getCompany(id).subscribe({
      next: (data) => {
        this.company = data;
        this.form = this.formBuilder.group(
          {
            name: [
              this.company.name,
              [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/[A-zÀ-ú]/)
              ]
            ],
            webSite: [this.company.webSite, Validators.required],
            email: [
              this.company.email, [
              Validators.required, 
              Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]
            ],
            phoneNumber: [
              this.company.phoneNumber,
              [
                Validators.required,
                Validators.pattern(/^[\+|0{1,2}]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/),

              ]
            ],
            address: [this.company.address, Validators.required]
          }
        );
      }, error: (err) => {
        console.error(err);
      }
    });
    this.modal = this.modalService.open(modalPrimaryedit, {
      centered: true,
      windowClass: 'modal modal-primary',
    });
  }
  private modal = null;
  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.company.address = this.form.value.address;
    this.company.email = this.form.value.email;
    this.company.phoneNumber = this.form.value.phoneNumber;
    this.company.webSite = this.form.value.webSite;
    this.company.name = this.form.value.name;

    this.updateCompany(this.company);
  }

  updateCompany(company: Company): void {
    this.companyService.updateCompany(company.id, company).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.modal.close('Accept click')
          this.getCompanies();
        }, error: (err) => {
          console.error(err);
        }
      });
  }

  // delete 

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe({
      next: () => {
        console.log("Company deleted !", id);
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
