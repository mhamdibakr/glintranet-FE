import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from 'angular-datatables';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import { AllCampaignsComponent } from './all-campaigns/all-campaigns.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AvailabilityManagementComponent } from './availability-management/availability-management.component';
import { CompaignComponent } from './compaign/compaign.component';
import { CurrentSituationManagementComponent } from './current-situation-management/current-situation-management.component';
import { CvsComponent } from './cvs/cvs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationLevelManagementComponent } from './education-level-management/education-level-management.component';
import { FunctionManagementComponent } from './function-management/function-management.component';
import { GlobalExperienceManagementComponent } from './global-experience-management/global-experience-management.component';
import { PostulationManagementComponent } from './postulation-management/postulation-management.component';
import { SkillsManagementComponent } from './skills-management/skills-management.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cvs',
    component: CvsComponent,
  },
  {
    path: 'addcampaign',
    component: CompaignComponent,
  },
  {
    path: 'allcampaigns',
    component: AllCampaignsComponent,
  },
  {
    path: 'allusers',
    component: AllUsersComponent,
  },
  {
    path: 'adduser',
    component: AddUserComponent,
  },
  {
    path: 'education-management',
    component: EducationLevelManagementComponent,
  },
  {
    path: 'global-experience',
    component: GlobalExperienceManagementComponent,
  },
  {
    path: 'availability-management',
    component: AvailabilityManagementComponent,
  },
  {
    path: 'current-situation',
    component: CurrentSituationManagementComponent,
  },
  {
    path: 'funtion-management',
    component: FunctionManagementComponent,
  },
  {
    path: 'skills-management',
    component: SkillsManagementComponent,
  },
  {
    path: 'postulation-management',
    component: PostulationManagementComponent,
  },
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
    AvailabilityManagementComponent,
    CurrentSituationManagementComponent,
    FunctionManagementComponent,
    PostulationManagementComponent,
    SkillsManagementComponent,
    
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
    NgxDatatableModule,
    DataTablesModule,
    TranslateModule, 
    TranslateModule.forRoot(),
  ],

  providers: []
})
export class CvtechModule { }
