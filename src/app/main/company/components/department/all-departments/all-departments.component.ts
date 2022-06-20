import { Component, OnInit } from '@angular/core';
import { EntityDepartment } from 'app/main/company/models/entity-department.model';
import { CompanyEntityService } from 'app/main/company/services/company-entity.service';
import { EntityDepartmentService } from 'app/main/company/services/entity-department.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyEntity } from 'app/main/company/models/company-entity.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    private entityservice:CompanyEntityService,private formBuilder: FormBuilder) {}

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
    this.form = this.formBuilder.group(
      {
        departmentname: [
          '',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ]
      }
    );
  }

  public form: FormGroup = new FormGroup({
    departmentname: new FormControl('')
  });
  submitted = false;

  get formControl(): { [key: string]: AbstractControl } {
    return this.form.controls;
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

  AddDepartment(): void {
    this.submitted = true;
    if (this.form.invalid) {
      console.log(this.form.value);
      return;
    }
    this.department.name = this.form.value.departmentname;
    this.department.entity_id = this.identity;
    this.createDepartment(this.department);
  }

  createDepartment(department:EntityDepartment): void {
    this.departmentservice.createDepartment(department).subscribe(
      {
        next: (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Department has been saved with success',
            showConfirmButton: false,
            timer: 1500
          });
          this.modalService.dismissAll("Cross click");
          this.ngOnInit()
          this.submitted = false;
        }, error: (err) => {
          console.error(err);
        }
      });
   }

   onChange(e: any) {
    this.identity=e.target.value;
    console.log(this.identity)
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

    modalEdit(modalPrimaryedit, id) {
      this.departmentservice.getDepartment(id).subscribe({
        next: (data) => {
          this.department = data;
          this.department.entity_id = this.identity;
          this.form = this.formBuilder.group(
            {
              departmentname: [
                this.department.name,
                [
                  Validators.required,
                  Validators.minLength(3)
                ]
              ]
            }
          );
        }, error: (err) => {
          console.error(err);
        }
      });
      this.modalService.open(modalPrimaryedit, {
        centered: true,
        windowClass: 'modal modal-primary',
      });
    }
  
    updateDepartment(): void {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      this.department.name = this.form.value.departmentname;
      this.department.entity_id=this.identity;
      this.editDepartment(this.department);
    }

    editDepartment(department:EntityDepartment):void{
      this.departmentservice.updateDepartment(department.id, department).subscribe(
        {
          next: (data) => {
            this.modalService.dismissAll("Cross click");
            this.ngOnInit()
            this.submitted = false;
          }, error: (err) => {
            console.error(err);
          }
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
