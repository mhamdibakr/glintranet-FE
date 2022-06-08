import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyEntity } from '../../../models/company-entity.model';
import { Company } from '../../../models/company.model';
import { CompanyEntityService } from '../../../services/company-entity.service';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-all-entities',
  templateUrl: './all-entities.component.html',
  styleUrls: ['./all-entities.component.scss']
})
export class AllEntitiesComponent implements OnInit {
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };
  
  companies?:Company[];

  idcompany:any;

  companyEntity: CompanyEntity = {
    id:null,
    name: '',
    timestamp:'',
    departements:[],
    company_id:null
  }
  constructor(private modalService: NgbModal, private entityService : CompanyEntityService,
   private companyservice:CompanyService) {}

  ngOnInit(): void 
  {
    this.getAllentities()
    this.getCompanies();
    //

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
            name: 'Company entity',
            isLink: true,
            link: '/'
          },
          {
            name: 'All entities',
            isLink: false
          }
        ]
      }
    };
  }


  modalAdd(modalPrimaryAdd) {
    this.modalService.open(modalPrimaryAdd, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }
  // -------------------- pagination & search
  page = 1;
  count = 0;
  name = ''
  public pagePosition = 1;
  public totalPages=0;
  

  public pageChanged(event: any): void {
    this.page = event;
    this.getAllentities();
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

  public chkBoxSelected = [];
  entities? : CompanyEntity[];

  public getAllentities(): void {
    const params = {
      page : this.page-1,
      size : 8,
      name : this.name
    }
    this.entityService.getCompanyentities(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.count = totalElements;
          this.totalPages = totalPages*10
          this.entities = content
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  // ------------- delete campaign 
  deleteCampaign(id: number){
    this.entityService.deleteCompanyEntity(id).subscribe({
      next: () => {
        console.log(" deleted !", id);
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  addentity(): void {
    const data = {
       name: this.companyEntity.name,
       company_id: this.idcompany
     }
     this.entityService.createCompanyEntity(data).subscribe(
       {
         next: (data) => {
           console.log(data);
         }, error: (err) => {
           console.error(err);
         }
       });
   }
   onChange(e: any) {
    this.idcompany=e.target.value;
  }
   
  getCompanies(): void {
    const params = {page:this.page-1, size:8, name:this.name};
    this.companyservice.getCompanies(params).subscribe(
      {
        next: (data) => {
          console.log(data);
          const { content, totalElements } = data;
          this.companies = content;
          this.count = totalElements;
          this.companies.forEach((comp)=>{
            console.log("compa", comp.name)
          })
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

}
