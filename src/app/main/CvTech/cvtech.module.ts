import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import { AllCampaignsComponent } from './all-campaigns/all-campaigns.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CompaignComponent } from './compaign/compaign.component';
import { CvsComponent } from './cvs/cvs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationLevelManagementComponent } from './education-level-management/education-level-management.component';
import { GlobalExperienceManagementComponent } from './global-experience-management/global-experience-management.component';
import { UsersComponent } from './users/users.component';

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
    path: 'addcampaign',
    component: CompaignComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'allcampaigns',
    component: AllCampaignsComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'allusers',
    component: AllUsersComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'adduser',
    component: AddUserComponent,
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
    path: 'global-experience',
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
    GlobalExperienceManagementComponent,
    AllCampaignsComponent,
    AddUserComponent,
    AllUsersComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxPaginationModule,
    NgbPaginationModule,
    NgxDatatableModule
  ],

  providers: []
})
export class CvtechModule { }
