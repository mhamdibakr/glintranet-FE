import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CompaignComponent } from './compaign/compaign.component';
import { CvsComponent } from './cvs/cvs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationLevelManagementComponent } from './education-level-management/education-level-management.component';
import { UsersComponent } from './users/users.component';
import { GlobalExperienceManagementComponent } from './global-experience-management/global-experience-management.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'cvs',
    component: CvsComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'compaign',
    component: CompaignComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'education-management',
    component: EducationLevelManagementComponent,
  },
  {
    path: 'global-experience-management',
    component: GlobalExperienceManagementComponent,
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    DashboardComponent,
    CvsComponent,
    CompaignComponent,
    EducationLevelManagementComponent,
    GlobalExperienceManagementComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,

  ],

  providers: []
})
export class CvtechModule { }
