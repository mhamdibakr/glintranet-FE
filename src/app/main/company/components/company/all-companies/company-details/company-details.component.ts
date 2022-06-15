import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Stepper from 'bs-stepper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyEntity } from '../../../../models/company-entity.model';
import { Company } from '../../../../models/company.model';
import { CompanyService } from '../../../../services/company.service';
import { CompanyEntityService } from '../../../../services/company-entity.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  public contentHeader: object;

  selectedcompany:any;

  company_id:any;
  entities:Array<CompanyEntity>;
  companies?:Company[];
  company_edit:any;

  company:Company={
    id:null,
    name:'',
    address: '',
    email:'',
    phoneNumber:'',
    webSite:'',
    image:'',
    entities:[]
  };

  options:CompanyEntity = {
    id:null,
    name: '',
    timestamp:'',
    departements:[],
    company_id:null
  }

  // private

  private horizontalWizardStepper: Stepper;
  private bsStepper;

  constructor(private companyservice:CompanyService,
    private companyEntityService:CompanyEntityService,
    private route:ActivatedRoute,
    private modalService: NgbModal,
    private entityService:CompanyEntityService) {}

 
  ngOnInit() {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});
    this.bsStepper = document.querySelectorAll('.bs-stepper');

    this.company_id= this.route.snapshot.params["company_id"];
    console.log(this.getCompany(this.company_id));

    // content header
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
            name: 'Company',
            isLink: true,
            link: '/'
          },
          {
            name: 'All Companies',
            isLink: true,
            link: '/'
          },
          {
            name: 'Company details',
            isLink: false
          }
        ]
      }
    };

    this.getCompanies();
  }

  getCompany(id:any):Company{
      this.companyservice.getCompany(id).subscribe({
        next:(data)=>{
          this.company=data;
          this.entities=data.entities;
      },
        error:(err) =>{
          console.error(err);
        }
      });
      return this.company;
    }

     // Select 

     getCompanies(): void {
      const params = this.getParams(this.page, this.pageSize, this.searchTitle);
      this.companyservice.getCompanies(params).subscribe(
        {
          next: (data) => {
            console.log("data",data);
            const { content, totalElements } = data;
            this.companies = content;
            this.count = totalElements;
          }, error: (err) => {
            console.error(err);
          }
        }
      );
    }

     // delete entity

     deleteCompanyEntity(id: number): void {
      this.companyEntityService.deleteCompanyEntity(id)
        .subscribe(
          data => {
            console.log(data);
            this.company=this.getCompany(this.company_id);
            this.entities=this.company.entities;
          },
          error => console.log(error));
    }


    // pagination and search

    searchTitle = "";
    page = 1;
    count = 0;
    pageSize = 8;
    name = ''
    public pagePosition = 1;
    public totalPages=0;
    public chkBoxSelected = [];

    public pageChanged(event: any): void {
      this.page = event;
      this.getCompanies();
    }
  
    getParams(page: number, pageSize: number, title: string) {
      let params: any = {};
      if (page) {
        params['page'] = page - 1;
        if (pageSize) {
          params['size'] = pageSize;
        }
        if (title) {
          params['name'] = title;
        }
        return params;
      }
    }

    // Add entity to company

    companyEntity: CompanyEntity = {
      id:null,
      name: '',
      timestamp:'',
      departements:[],
      company_id:null
    }

    modalAddentity(modalPrimaryAdd) {
      this.modalService.open(modalPrimaryAdd, {
        centered: true,
        windowClass: 'modal modal-primary'
      });
    }

    addentity(event:any): void {
      console.log("name" ,this.company_id)
      const data = {
         name: this.companyEntity.name,
         company_id: this.company_edit
       }
       this.entityService.createCompanyEntity(data).subscribe(
         {
           next: (data) => {
             this.entities=this.company.entities;
             console.log(data);
           }, error: (err) => {
             console.error(err);
           }
         });
     }
     
    onChange(e: any) {
      this.company_edit=e.target.value;
      console.log("company id ",this.company_edit)
    }

    // update entity 

    updateEntity(): void {
    const data = {
      id: this.options.id,
      name: this.options.name,
      company_id: this.company_edit
    }
    this.companyEntityService.updateCompanyEntity(data.id, data).subscribe(
      {
        next: (data) => {
          this.company=this.getCompany(this.company_id);
          this.entities=this.company.entities;
        }, error: (err) => {
          console.error(err);
        }
      });
  }

  modalEdit(modalPrimaryedit, id) {
    console.log(id);
    this.companyEntityService.getCompanyEntity(id).subscribe({
      next: (data) => {
        this.options = data;
        this.options.company_id=this.company_id
      }, error: (err) => {
        console.error(err);
      }
    });
    this.modalService.open(modalPrimaryedit, {
      centered: true,
      windowClass: 'modal modal-primary',
    });
  }

    public getentitiesofcompany(): void {
      const params = {
        page : this.page-1,
        size : 8,
        name : this.name
      }
      this.entityService.getentitiesofcompany(params).subscribe(
        {
          next: (response: any) => {
            const { content, totalElements, totalPages } = response;
            this.count = totalElements;
            this.totalPages = totalPages*10
            this.entities = this.company.entities
          }, error: (err) => {
            console.error(err);
          }
        }
      );
    }
     
  
}
