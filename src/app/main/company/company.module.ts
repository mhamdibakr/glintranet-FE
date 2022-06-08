import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
const routes: Routes = [
  
  {
    path: 'company',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
=======
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddCompanyComponent } from './components/company/add-company/add-company.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AllCompaniesComponent } from './components/company/all-companies/all-companies.component';
import { CompanyDetailsComponent } from './components/company/all-companies/company-details/company-details.component';
import { CompanyentityDetailsComponent } from './components/company-entity/all-entities/companyentity-details/companyentity-details.component';
import { AllEntitiesComponent } from './components/company-entity/all-entities/all-entities.component';
import { AddCompanyentityComponent } from './components/company-entity/add-companyentity/add-companyentity.component';
const routes: Routes = [
  
  // {
  //   path: 'company',
  //   loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  // },
  {
    path: '',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  // {
  //   path: 'addcompany',
  //   component:AddCompanyComponent ,
  // },
  // {
  //   path: 'addcompanyentity',
  //   component:AddCompanyentityComponent ,
  // },
  // {
  //   path: 'adddepartment',
  //   component:AddDepartmentComponent ,
  // },
  // {
  //   path: 'allcompanies',
  //   component:AllCompaniesComponent ,
  // },
  // {
  //   path: 'company-details/:company_id',
  //   component:CompanyDetailsComponent ,
  // },
  // {
  //   path: 'companyentity-details/:entity_id',
  //   component:CompanyentityDetailsComponent ,
  // },
  // {
  //   path: 'allentities',
  //   component:AllEntitiesComponent ,
  // }
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
  
];

@NgModule({
  declarations: [
<<<<<<< HEAD
    
=======
    // AddCompanyComponent,
    // AddCompanyentityComponent,
    // AddDepartmentComponent,
    // AllCompaniesComponent,
    // AllEntitiesComponent,
    // CompanyDetailsComponent,
    // CompanyentityDetailsComponent
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
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
<<<<<<< HEAD
=======
    NgbPaginationModule
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
  ],

  providers: []
})
export class CompanyModule { }
