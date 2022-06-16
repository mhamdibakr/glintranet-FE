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
  
  company: Company = {
    id:null,
    name: '',
    address: '',
    email:'',
    phoneNumber:'',
    webSite:'',
    timestamp:"",
    image:'',
    entities:[]
  }

  edit:Company = {
    id:null,
    name: '',
    address: '',
    email:'',
    phoneNumber:'',
    webSite:'',
    timestamp:"",
    image:'',
    entities:[]
  }

  constructor(private modalService: NgbModal,private companyService:CompanyService) { }

  ngOnInit(): void {

    this.getCompanies();

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
  }
  

  //  pagination & search

  public chkBoxSelected = [];
  pageSize = 5;

  page = 1;
  count = 0;
  name = ''
  public pagePosition = 1;
  public totalPages=0;
  

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
      page : this.page-1,
      size : this.pageSize,
      name : this.name
    }
    this.companyService.getCompanies(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.count = totalElements;
          this.totalPages = totalPages*10
          this.companies = response.content
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  // ------------ Add Company ------------

  modalOpenPrimary(modalPrimary) {
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

  saveCompany(): void {
    const data = {
      name: this.company.name,
      address: this.company.address,
      email: this.company.email,
      phoneNumber: this.company.phoneNumber,
      webSite: this.company.webSite
    }
    this.companyService.createCompany(data).subscribe(
      {
        next: (data) => {
          this.modalService.dismissAll("Cross click");
          this.ngOnInit();
        }, error: (err) => {
          console.error(err);
        }
      });
  }
  
  // ------------ Edit Company ------------ 

  modalEdit(modalPrimaryedit, id) {
    this.companyService.getCompany(id).subscribe({
      next: (data) => {
        this.edit = data;
      }, error: (err) => {
        console.error(err);
      }
    });
    this.modalService.open(modalPrimaryedit, {
      centered: true,
      windowClass: 'modal modal-primary',
    });
  }

  updateCompany(): void {
    const data = {
      id: this.edit.id,
      name: this.edit.name,
      address: this.edit.address,
      email: this.edit.email,
      phoneNumber: this.edit.phoneNumber,
      webSite: this.edit.webSite
    }
    this.companyService.updateCompany(data.id, data).subscribe(
      {
        next: (data) => {
          this.getCompanies();
        }, error: (err) => {
          console.error(err);
        }
      });
  }

  // ------------ Delete Company ------------

    deleteCompany(id: number){
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