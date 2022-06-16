import { Component, OnInit } from '@angular/core';
import { EntityDepartment } from 'app/main/company/models/entity-department.model';
import { CompanyEntityService } from 'app/main/company/services/company-entity.service';
import { EntityDepartmentService } from 'app/main/company/services/entity-department.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyEntity } from 'app/main/company/models/company-entity.model';

@Component({
  selector: 'app-all-departments',
  templateUrl: './all-departments.component.html',
  styleUrls: ['./all-departments.component.scss']
})
export class AllDepartmentsComponent implements OnInit {
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };
  
  departments? : EntityDepartment[];
  department: EntityDepartment = {
    id:null,
    name: '',
    timestamp:'',
    entity:null,
    entity_id:null
  }

  constructor(private modalService: NgbModal, 
    private departmentservice : EntityDepartmentService,
    private entityservice:CompanyEntityService) {}

  ngOnInit(): void 
  {
    this.getAlldepartments()
    this.getEntities();

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
            name: 'Departments',
            isLink: true,
            link: '/'
          },
          {
            name: 'All departments',
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
    this.getAlldepartments();
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

  public getAlldepartments(): void {
    const params = {
      page : this.page-1,
      size : 8,
      name : this.name
    }
    this.departmentservice.getDepartments(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.count = totalElements;
          this.totalPages = totalPages*10
          this.departments = content
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  // ------------ Add Department ------------

  modalAdd(modalPrimaryAdd) {
    this.modalService.open(modalPrimaryAdd, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

  adddepartment(): void {
    const data = {
       name: this.department.name,
       entity_id: this.identity
     }
     this.departmentservice.createDepartment(data).subscribe(
       {
         next: (data) => {
           this.ngOnInit();
         }, error: (err) => {
           console.error(err);
         }
       });
   }

   onChange(e: any) {
    this.identity=e.target.value;
  }

  // ------------ Delete Department ------------ 

    deleteDepartment(id: number){
      this.departmentservice.deleteDepartment(id).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (err) => {
          console.log(err);
          
        }
      })
    }

    // ------------ Update department ------------

    entities?:CompanyEntity[];
    identity:any;
    edit:EntityDepartment = {
      id:null,
      name: '',
      timestamp:'',
      entity:null,
      entity_id:null
    }

    updateDepartment():void{
      const data = {
        id: this.edit.id,
        name: this.edit.name,
        entity_id: this.identity
      }
      this.departmentservice.updateDepartment(data.id, data).subscribe(
        {
          next: (data) => {
            this.ngOnInit();
          }, error: (err) => {
            console.error(err);
          }
        });
    }
  
    modalEdit(modalPrimaryedit, id) {
      this.departmentservice.getDepartment(id).subscribe({
        next: (data) => {
          this.edit = data;
          this.edit.entity_id=this.identity
        }, error: (err) => {
          console.error(err);
        }
      });
      this.modalService.open(modalPrimaryedit, {
        centered: true,
        windowClass: 'modal modal-primary',
      });
    }
    
    // ------------ GET entities for select ------------
   
  getEntities(): void {
    const params = {page:this.page-1, size:8, name:this.name};
    this.entityservice.getCompanyentities(params).subscribe(
      { next: (data) => {
          const { content, totalElements } = data;
          this.entities = content;
          this.count = totalElements;
          this.identity=this.entities[0].id;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

}
