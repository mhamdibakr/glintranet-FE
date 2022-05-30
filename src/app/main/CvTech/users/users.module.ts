import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: 'adduser',
    component: AddUserComponent,
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
    path: 'user-details/:user_id', 
    component: UserDetailsComponent
  }

];

@NgModule({
  declarations: [
    AddUserComponent,
    AllUsersComponent,
    UserDetailsComponent
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
export class UsersModule { }
