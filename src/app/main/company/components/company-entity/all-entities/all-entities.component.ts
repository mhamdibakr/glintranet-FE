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
  
  entities? : CompanyEntity[];
  entity: CompanyEntity = {
    id:null,
    name: '',
    timestamp:'',
    departements:[],
    company_id:null
  }

  companies?:Company[];
  idcompany:any;

  constructor(private modalService: NgbModal, private entityService : CompanyEntityService,
   private companyservice:CompanyService) {}

  ngOnInit(): void 
  {
    this.getAllentities()
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


  // ------------ pagination & search ------------

  page = 1;
  count = 0;
  name = ''
  public pagePosition = 1;
  public totalPages=0;
  public chkBoxSelected = [];
  
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

   // ------------ Add Entity ------------

  modalAdd(modalPrimaryAdd) {
    this.modalService.open(modalPrimaryAdd, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

  addentity(): void {
    const data = {
       name: this.entity.name,
       company_id: this.idcompany
     }
     this.entityService.createCompanyEntity(data).subscribe(
       {
         next: (data) => {
           this.getAllentities();
         }, error: (err) => {
           console.error(err);
         }
       });
   }

   onChange(e: any) {
    this.idcompany=e.target.value;
  }

  // ------------ Delete Entity ------------

    deleteEntity(id: number){
      this.entityService.deleteCompanyEntity(id).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (err) => {
          console.log(err);    
        }
      })
    }

    // ------------ Update entity ------------ 

    edit:CompanyEntity = {
      id:null,
      name: '',
      timestamp:'',
      departements:[],
      company_id:null
    }

    updateEntity(): void {
      const data = {
        id: this.edit.id,
        name: this.edit.name,
        company_id: this.idcompany
      }
      this.entityService.updateCompanyEntity(data.id, data).subscribe(
        {   next: (data) => {
            this.ngOnInit();
          }, error: (err) => {
            console.error(err);
          }
        });
    }
  
    modalEdit(modalPrimaryedit, id) {
      this.entityService.getCompanyEntity(id).subscribe({
        next: (data) => {
          this.edit = data;
          this.edit.company_id=this.idcompany
        }, error: (err) => {
          console.error(err);
        }
      });
      this.modalService.open(modalPrimaryedit, {
        centered: true,
        windowClass: 'modal modal-primary',
      });
    }

    // ------------ GET companies for select ------------
   
  getCompanies(): void {
    const params = {page:this.page-1, size:8, name:this.name};
    this.companyservice.getCompanies(params).subscribe(
      { next: (data) => {
          const { content, totalElements } = data;
          this.companies = content;
          this.count = totalElements;
          this.idcompany=this.companies[0].id;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

}