import { Component, OnInit } from '@angular/core';
import { CompanyEntity } from '../../models/company-entity.model';
import { EntityDepartment } from '../../models/entity-department.model';
import { CompanyEntityService } from '../../services/company-entity.service';
import { CompanyService } from '../../services/company.service';
import { EntityDepartmentService } from '../../services/entity-department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  entities?:CompanyEntity[];

  department: EntityDepartment = {
    id:null,
    name: '',
    timestamp:'',
    entity:null,
    entity_id:null
  }

  idcompanyEntity:any="";
  
  constructor(private companyservice:CompanyService,
    private departmentService:EntityDepartmentService,
    private companyEntityService:CompanyEntityService) { }
  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Department',
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
            name: 'Department',
            isLink: true,
            link: '/'
          },
          {
            name: 'Add Department',
            isLink: false
          }
        ]
      }
    };
    this.getCompanyEntities();
  }
  
  saveDepartment(): void {
    const data = {
      name: this.department.name,
      entity_id: this.idcompanyEntity
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

  searchTitle = "";
  page = 1;
  count = 0;
  pageSize = 5;

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

  onChange(e: any) {
    this.idcompanyEntity=e.target.value;
  }

}
