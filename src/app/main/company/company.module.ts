import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AllCompaniesComponent } from './components/all-companies/all-companies.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyentityDetailsComponent } from './components/companyentity-details/companyentity-details.component';
import { AllEntitiesComponent } from './components/all-entities/all-entities.component';
import { AddCompanyentityComponent } from './components/add-companyentity/add-companyentity.component';
const routes: Routes = [
  
  {
    path: 'company',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'addcompany',
    component:AddCompanyComponent ,
  },
  {
    path: 'addcompanyentity',
    component:AddCompanyentityComponent ,
  },
  {
    path: 'adddepartment',
    component:AddDepartmentComponent ,
  },
  {
    path: 'allcompanies',
    component:AllCompaniesComponent ,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'company-details/:company_id',
    component:CompanyDetailsComponent ,
  },
  {
    path: 'companyentity-details/:entity_id',
    component:CompanyentityDetailsComponent ,
  },
  {
    path: 'allentities',
    component:AllEntitiesComponent ,
  }
  
];

@NgModule({
  declarations: [
    AddCompanyComponent,
    AddCompanyentityComponent,
    AddDepartmentComponent,
    AllCompaniesComponent,
    AllEntitiesComponent,
    CompanyDetailsComponent,
    CompanyentityDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxDatatableModule,
    NgbPaginationModule
  ],

  providers: []
})
export class CompanyModule { }
