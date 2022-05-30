import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CvsComponent } from './cvs/cvs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationLevelManagementComponent } from './profil/education-level-management/education-level-management.component';
import { GlobalExperienceManagementComponent } from './profil/global-experience-management/global-experience-management.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { SituationComponent } from './profil/situation/situation.component';
import { SkillsComponent } from './profil/skills/skills.component';
import { AvailabiltyComponent } from './profil/availabilty/availabilty.component';
import { FunctionComponent } from './profil/function/function.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CampaignModule } from "./campaign/campaign.module";
const routes: Routes = [
  
  {
    path: 'campaign',
    loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule)
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
    path: 'allusers',
    component: AllUsersComponent,
  },
  {
    path: 'adduser',
    component: AddUserComponent,
  },
  {
    path: 'education',
    component: EducationLevelManagementComponent,
  },
  {
    path: 'global-experience',
    component: GlobalExperienceManagementComponent
  },
  {
    path: 'current-situation',
    component: SituationComponent
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path : 'availabilty',
    component: AvailabiltyComponent
  },
  {
    path : 'function',
    component: FunctionComponent
  }
];

@NgModule({
  declarations: [
    SkillsComponent,
    DashboardComponent,
    CvsComponent,
    EducationLevelManagementComponent,
    GlobalExperienceManagementComponent,
    AddUserComponent,
    AllUsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxDatatableModule
  ],

  providers: []
})
export class CvtechModule { }
