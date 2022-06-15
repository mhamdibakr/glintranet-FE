import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';
import { CompanyEntity } from '../../../../models/company-entity.model';
import { EntityDepartment } from '../../../../models/entity-department.model';
import { CompanyEntityService } from '../../../../services/company-entity.service';
import { CompanyService } from '../../../../services/company.service';
import { EntityDepartmentService } from '../../../../services/entity-department.service';

@Component({
  selector: 'app-companyentity-details',
  templateUrl: './companyentity-details.component.html',
  styleUrls: ['./companyentity-details.component.scss']
})
export class CompanyentityDetailsComponent implements OnInit {
  public contentHeader: object;

  entity_id:any;
  companyEntity:CompanyEntity;

 
  departments:Array<EntityDepartment>;

  options:EntityDepartment = {
    id:null,
    name: '',
    timestamp:'',
    entity:null,
    entity_id:null
  }
  // private
  private horizontalWizardStepper: Stepper;
 
  private bsStepper;

  constructor(private companyservice:CompanyService,
    private companyEntityService:CompanyEntityService,
    private departmentService:EntityDepartmentService,
    private route:ActivatedRoute,
    private modalService: NgbModal) {}

 
  ngOnInit() {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper2'), {});
    this.bsStepper = document.querySelectorAll('.bs-stepper');

    this.entity_id= this.route.snapshot.params["entity_id"];
    this.entityedit=this.route.snapshot.params["entity_id"];
    this.getCompanyEntity(this.entity_id);

    

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
            name: 'Company unit details',
            isLink: true,
            link: '/'
          },
          {
            name: 'Departments details',
            isLink: false
          }
        ]
      }
    };
    this.getCompanyEntities();
  }

  getCompanyEntity(id:any):any{
    this.companyEntityService.getCompanyEntity(id).subscribe({
      next:(data)=>{
        this.companyEntity=data;
        this.departments=data.departements;
    },
      error:(err) =>{
        console.error(err);
      }
    });
  }

  // Select
  
  getCompanyEntities(): void {
    const params = this.getParams(this.page, this.pageSize, this.searchTitle);
    this.companyEntityService.getCompanyentities(params).subscribe(
      {
        next: (data) => {
          console.log(data);
          const { content, totalElements } = data;
          this.entities = content;
          this.count = totalElements;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

      // delete department

      deleteDepartment(id: number): void {
        this.departmentService.deleteDepartment(id)
          .subscribe(
            data => {
              console.log(data);
              this.companyEntity=this.getCompanyEntity(this.entity_id);
              this.departments=this.companyEntity.departements;
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
      this.getCompanyEntities();
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

    // Add department to entity

    entities?:CompanyEntity[];

    department: EntityDepartment = {
      id:null,
      name: '',
      timestamp:'',
      entity:null,
      entity_id:null
    }
  
    entityedit:any;

    modalAddentity(modalPrimaryAdd) {
      this.modalService.open(modalPrimaryAdd, {
        centered: true,
        windowClass: 'modal modal-primary'
      });
    }
    
    saveDepartment(): void {
      const data = {
        name: this.department.name,
        entity_id: this.entityedit
      }
      this.departmentService.createDepartment(data).subscribe(
        {
          next: (data) => {
            console.log(data);
          }, error: (err) => {
            console.error(err);
          }
        });
    }

    onChange(e: any) {
      this.entityedit=e.target.value;
      console.log("id entity", this.entityedit)
    }

    // update department

    updateDepartment():void{
      const data = {
        id: this.options.id,
        name: this.options.name,
        entity_id: this.entityedit
      }
      this.departmentService.updateDepartment(data.id, data).subscribe(
        {
          next: (data) => {
            this.companyEntity=this.getCompanyEntity(this.entity_id);
            this.departments=this.companyEntity.departements;
          }, error: (err) => {
            console.error(err);
          }
        });
    }
  
    modalEdit(modalPrimaryedit, id) {
      console.log(id);
      this.departmentService.getDepartment(id).subscribe({
        next: (data) => {
          this.options = data;
          this.options.entity_id=this.entity_id
        }, error: (err) => {
          console.error(err);
        }
      });
      this.modalService.open(modalPrimaryedit, {
        centered: true,
        windowClass: 'modal modal-primary',
      });
    }
  

  getDepartment(id:any):any{
    this.departmentService.getDepartment(id).subscribe({
      next:(data)=>{
        this.department=data;
    },
      error:(err) =>{
        console.error(err);
      }
    });
  }

}
