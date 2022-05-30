import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AllUsersComponent } from './all-users.component';

const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent,
  },
  {
    path: 'user-details/:user_id', 
    component: UserDetailsComponent
  }
];

@NgModule({
  declarations: [
    UserDetailsComponent,
    AllUsersComponent 
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
export class AllUsersModule { }
