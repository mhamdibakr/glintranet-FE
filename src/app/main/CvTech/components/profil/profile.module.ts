import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AvailabiltyComponent } from './availabilty/availabilty.component';
import { EducationLevelManagementComponent } from './education-level-management/education-level-management.component';
import { FunctionComponent } from './function/function.component';
import { GlobalExperienceManagementComponent } from './global-experience-management/global-experience-management.component';
import { SkillsComponent } from './skills/skills.component';
import { SituationComponent } from './situation/situation.component';
import { AddExperienceComponent } from './global-experience-management/add-experience/add-experience.component';

const routes: Routes = [
  {
    path: 'availabilty',
    component: AvailabiltyComponent,
  },
  {
    path: 'education',
    component: EducationLevelManagementComponent,
  },
  {
    path: 'function',
    component: FunctionComponent,
  },
  {
    path: 'experience',
    component: GlobalExperienceManagementComponent,
  },
  {
    path: 'add-exp',
    component: AddExperienceComponent,
  },
  {
    path: 'situation',
    component: SituationComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  
];

@NgModule({
  declarations: [
    AvailabiltyComponent,
    SkillsComponent,
    GlobalExperienceManagementComponent,
    EducationLevelManagementComponent,
    FunctionComponent,
    SituationComponent,
    AddExperienceComponent
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
export class ProfileModule { }
